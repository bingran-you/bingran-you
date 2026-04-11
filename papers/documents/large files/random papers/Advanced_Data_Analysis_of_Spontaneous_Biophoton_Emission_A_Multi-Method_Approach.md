# PDF Document: Benfatto et al. - Advanced Data Analysis of Spontaneous Biophoton Emission A Multi-Method Approach.pdf

**File Path:** Benfatto et al. - Advanced Data Analysis of Spontaneous Biophoton Emission A Multi-Method Approach.pdf

**Processed Date:** 2026-02-10T18:15:01.635Z

**File Size:** 1697.74 KB

**Total Pages:** 35

**Extracted Pages:** 35

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3726

**Title:** Advanced Data Analysis of Spontaneous Biophoton Emission: A Multi-Method Approach

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Advanced Data Analysis of Spontaneous Biophoton Emission:
A Multi-Method Approach
M. Benfatto*1, L. De Paolis*1, L. Tonello2,3 and P. Grigolini3
1Laboratori Nazionali di Frascati, Istituto Nazionale di Fisica Nucleare, Via E. Fermi 40, 00044, Frascati, Italy.
2Gioya Higher Education Institution, E305, The Hub Workspace, Triq San Andrija, SGN1612, San Gwann,
Malta.
3Center for Nonlinear Science, University of North Texas, P.O. Box 311427, Denton, TX 76203-1427, USA.
*Corresponding authors: maurizio.benfatto@lnf.infn.it, luca.DePaolis@lnf.infn.it
Abstract
Ultra-weak photon emission (UPE) from living systems is widely hypothesized to reflect under
lying self-organization and long-range coordination in biological dynamics. However, distinguishing
biologically driven correlations from trivial stochastic or instrumental effects requires a robust, multi
method framework. In this work, we establish and benchmark a comprehensive analysis pipeline for
photon-count time series, combining Distribution Entropy Analysis, Rényi entropy, Detrended Fluc
tuation Analysis, its generalization Multifractal Detrended Fluctuation Analysis, and tail-statistics
characterization. Surrogate signals constructed from Poisson processes, fractional-Gaussian noise,
and renewal processes with power-law waiting times are used to validate sensitivity to memory, in
termittency, and multifractality. Across all methods, a coherent hierarchy of dynamical regimes is
recovered, demonstrating internal methodological consistency. Application to experimental dark
count data and attenuated coherent-laser emission confirm Poisson-like behavior, establishing an es
sential statistical baseline for UPE studies. The combined results show that this multi-resolution ap
proach reliably separates trivial photon-counting statistics from structured long-range organization,
providing a validated methodological foundation for future biological UPE measurements and their
interpretation in the context of non-equilibrium statistical physics, information dynamics, and pro
spective markers of biological coherence.

Keywords: biophotons, complexity, data analysis
Introduction
All living systems emit ultra-weak electromagnetic radiation in the visible spectral range, corre
sponding to approximately 100 photons per second per square centimeter of surface area. This spon
taneous emission, universally referred to as biophotons [1,2], has been detected in virtually all aerobic
organisms and ceases immediately upon death. Such behavior excludes the possibility that the signal
originates from radioactive decay or cosmic ray interactions. Biophotonic emission is characterized
by extremely low intensity and by the absence of distinct spectral lines; rather, it displays a nearly
flat spectral distribution between 200 and 800 nm, with a subtle maximum in the orange region. The
contribution of blackbody radiation at room temperature, estimated using Planck’s distribution, is
negligible in this spectral range [3]. Notably, environmental or biochemical stress—such as exposure
to chemical agents or temperature changes—typically induces a transient amplification of the emis
sion, often by several orders of magnitude, followed by a slow relaxation toward baseline levels ac
cording to a non-exponential power-law decay [1,2].
The idea that living organisms produce electromagnetic emissions dates back to the 1920s, when
the Russian biologist A. Gurwitsch [4] hypothesized the existence of a weak electromagnetic field
responsible for coordinating cell growth and mitotic activity in neighboring tissues. He termed this
phenomenon mitogenetic radiation. Although subsequent experimental evidence, such as that pro
vided by Gabor and Reiter [5], supported Gurwitsch’s findings, the concept was largely neglected by
the scientific community for decades. Roughly thirty years later, Colli and Facchini [6,7] performed
the first quantitative measurements of biological photon emission using single-photon-counting pho
todetectors. Their pioneering results, too, went unnoticed until the 1970s, when F.A. Popp and col
laborators [2] initiated a comprehensive experimental and theoretical program aimed at elucidating
the physical origin and biological significance of biophoton emission.
While the experimental existence of biophotonic emission is now firmly established, its genera
tion mechanisms and functional roles in biological systems remain open questions. Current models
can be broadly classified into two categories [1,2]. The first attributes the emission to stochastic ra
diative decay processes of molecules previously excited during metabolism; the second postulates the
presence of coherent electromagnetic fields within cells that may govern or modulate the observed
emission. Both frameworks predict enhanced photon emission under external or internal perturba
tions, consistent with experimental observations. These explanations are not mutually exclusive, and
biophotonic emission may indeed arise from the coexistence of incoherent and coherent processes.
Increasing experimental evidence also suggests that biophotons carry biologically relevant infor
mation [8–11]: for instance, the emitted light can stimulate cell division in neighboring systems by
up to 30%, a phenomenon known as the mitogenetic effect [11–13]. More recently, biophoton emis
sion has attracted attention as a promising non-invasive probe for biological research, with potential
applications ranging from toxicology [14] and physiological monitoring [15] to the diagnosis and
treatment of diseases, notably cancer [16]. In this context, the temporal evolution of biophoton emis
sion provides a unique window into the dynamical behavior of living matter, especially when ana
lyzed through advanced quantitative methods.
The data consist of discrete photon counts acquired at fixed temporal intervals and stored as a
function of the elapsed time since the onset of the experiment. This collection of measurements con

stitutes a time series that encapsulates the temporal dynamics of biophotonic activity. Typically ex
tending over several days of continuous acquisition, the resulting time series exhibit distinct morpho
logical patterns depending on the biological system under investigation. In some cases—such as cell
cultures—the emission displays an approximately stationary behaviour with a nearly constant mean
photon rate. In contrast, germinating seeds produce highly structured temporal profiles characterized
by well-defined modulations, whereas bacterial systems often yield intermittent, burst-like sequences
of photon emission events, forming clustered or “bunched” temporal structures. These diverse signa
tures reflect the intrinsic dynamical organization and metabolic state of the respective living systems.
[1,6,7,17].
To extract the underlying statistical structure of spontaneous biophoton emission, our group has
primarily employed the Diffusion Entropy Analysis (DEA) method [17], a powerful quantitative ap
proach for assessing complexity in time series data [18,19]. DEA quantifies the scaling index (η)
associated with the diffusion process reconstructed from the experimental signal, following the Kol
mogorov framework of complexity [20]. The scaling behavior, evaluated through the Shannon en
tropy of the corresponding diffusive trajectory, provides a direct measure of deviation from ordinary
randomness. Values of η differing from the Brownian benchmark (η = 0.5) signify the presence of
long-range temporal correlations and anomalous dynamical organization within the underlying bio
logical system. Our previous studies [17] revealed a persistent deviation from η = 0.5 throughout
germination, reflecting a continuous evolution in the complexity of the system. The initial germina
tion, during the formation of leaves and roots, is dominated by statistical properties typical of the
presence of crucial events, while subsequently there is a transition to a phase dominated by properties
typical of Fractional Brownian Motion (FBM), probably due to stress on the plant which is measured
in a completely light-free environment and therefore cannot begin chlorophyll synthesis for carbohy
drate production [21].
These findings indicate that biophoton emission can serve as a quantitative probe of the thermo
dynamic and informational activity of living systems [2]. Temporal variations in emission intensity
correspond to shifts in scaling parameters, offering a dynamic signature of underlying biological tran
sitions and adaptive processes. Within this framework, germination may represent a phase transition
in complexity, driven by cellular differentiation and intercellular communication through entropy ex
change and information transfer [11].
In recent years, beyond our own investigations, several important contributions have advanced
the statistical analysis of ultra-weak photon emission (UPE) from living systems. For example,
Michal Cifra [22] and collaborators published a critical review of the photocount‐statistics approach
in biophoton research. They examine deviations from Poisson behaviour in the photon‐count distri
butions, scrutinise claims of coherence and squeezed states, and emphasise the need for rigorous sta
tistical characterisation of spontaneous biophoton signals.
Similarly, Fritz-Albert Popp and his team laid foundational work in the field of biophotons, em
phasising the possibility of coherence in biological photon emission and proposing that statistical
properties of the emission (e.g., bursting behaviour, deviations from thermal emission) might carry
biologically relevant information [2]. While some of Popp’s interpretations remain controversial, his
emphasis on statistical features beyond mere intensity (such as time‐structure and photon correla
tions) has inspired much of the subsequent methodological work in this domain.
More recently, two newer studies enrich the methodological toolkit. In 2022, Zsolt Pónya and K.
Somfalvi-Tóth [23] analysed UPE kinetics in Helianthus annuus plants exposed to biotic and abiotic
stress, showing that the decay kinetics of photon emission (as derived from count versus time data)
vary significantly with stress types, and fitting these using exponential or power‐law models with

characteristic time constants. While not strictly a complexity‐scaling study, this work illustrates how
temporal modelling of photon counts can link statistical parameters to physiological state. In 2024, a
broader review by Ganna Nevoit [24] and colleagues explored the role of biophotons in electromag
netic signalling, and included sections on statistical analyses of count distributions, entropy measures,
and complexity indices in living systems. These newer approaches underscore the shift toward inte
grating multiple statistical tools (count distributions, temporal kinetics, complexity scaling) in bio
photon research.
The present work aims to provide a comprehensive and comparative analysis of the principal
statistical approaches applicable to spontaneous biophoton emission. Our objective is to integrate the
different methodologies developed in previous decades, ranging from classical photon-count distri
butions to modern measures of complexity, into a unified interpretative framework capable of captur
ing the multifaceted dynamics of living systems.
In particular, we systematically compare and interrelate the information derived from photon
count distribution analyses, Renyi entropies, complexity-scaling techniques, like Diffusion Entropy
Analysis (DEA), Detrended Fluctuation Analysis (DFA) and its multifractal generalization (MFDFA).
By confronting these complementary perspectives, we aim to identify the distinct statistical signatures
that each method reveals, clarify their mutual relationships, and determine how they collectively de
scribe the temporal organization and biological meaning of ultra-weak photon emission. This inte
grative approach is intended to advance the understanding of how the statistical architecture of bio
photonic signals reflects the underlying thermodynamic, metabolic, and informational activity of liv
ing matter.
The structure of this work is as follows. In the next section, we present a detailed description of
the analytical methods employed, emphasizing their respective conceptual foundations, operational
differences, and potential complementarities. Subsequently, we apply these approaches to a set of
carefully designed surrogate test series in order to validate their performance and sensitivity in con
trolled conditions. The analysis then extends to experimental photocounting data, including a charac
terization of dark noise and of photon-count distributions derived from attenuated laser emission used
as reference signals. Finally, we conclude with a discussion of the main findings, their implications
for the study of spontaneous photon emission, and prospective directions for future research.
2. Experimental data and statistical analysis
Spontaneous biophoton emission is typically measured using a photomultiplier tube (PMT) op
erating in single photon counting mode. In this configuration, each detected photon event is registered
individually, and the total number of counts recorded within a fixed time window constitutes the basic
experimental observable. The sequence of photon counts thus obtained forms a time series, whose
duration can range from a few hours to several days, depending on the biological system under study.
The morphological features of these series differ markedly across systems: for instance, germinating
seeds often exhibit highly structured temporal profiles characterized by distinct emission patterns,
whereas cell cultures generally display flatter, quasi-stationary trends with comparatively low varia
bility. The detailed behaviour and representative examples of such experimental time series have been
thoroughly described in previous studies [17, 25].
In the following section, we present several analytical methods suitable for the quantitative ex
amination of these experimental data, emphasizing their methodological foundations, distinctive fea
tures, and potential for revealing the underlying statistical and dynamical properties of spontaneous
biophoton emission.

2.1. The Probability Distribution Function Approach
Within a semiclassical description of optical detection, a phototube converts the cycle-averaged
classical intensity Ī(tt) into discrete photocounts. The number of counts m detected in an integration
time T is proportional to the incident intensity [26]. From the experimental time series one can con
struct the photocount distribution PPmm(TT) , i.e., the relative frequency and, upon normalization, the
probability, the so-called probability distribution function (PDF), of observing mm counts within the
acquisition window T. The moments of PPmm(TT) (mean, variance, higher-order moments) provide di
agnostic information on the statistical character of the emission.
Closed-form expressions for PPmm(TT) are available only for specific physical regimes. The simplest
case is a stable classical field with constant cycle-averaged intensity, for which the photocount distri
bution is Poissonian [22,25,26]:
PPmm(TT) = 〈mm〉mm
mm! ee(−〈mm〉) (1)
Here, ⟨mm⟩ denotes the mean count (proportional to the mean intensity via a detector-dependent
constant), and the variance equals the mean (σσ2 = ⟨mm⟩). Deviations from Poisson statistics are com
monly summarized by the Fano factor F defined through FF = σσ2 ⟨mm⟩
⁄ . For a thermal (chaotic) field
with MM modes, the photocount distribution assumes the negative-binomial form [22,25]:
PPmm(TT, MM) = (mm+MM−1)!
mm!(MM−1)! �1 + MM
〈mm〉�
−mm
�1 + 〈mm〉
MM�
−MM
(2)
In thermal states the mean and variance obey:
σσ2 = 〈mm〉 + 〈mm〉2
MM (3)
As MM becomes large, the variance approaches the mean counts and the thermal distribution tends
to the Poisson limit, making discrimination between coherent and thermal emission difficult when
many modes are present. In practice, biophoton emission often exhibits super-Poissonian statistics
(variance exceeding the mean), consistent with thermal or an integration time T much longer than the
characteristic time of the intensity fluctuations of the light beam. This places stringent requirements
on experimental approaches aimed at assessing coherence length and time via interference or higher
order correlation measurements.
It is interesting to note that the negative binomial form is obtained from the Poisson distribution
by imposing a fluctuation of the average of the gamma type:
ff(λλ) = 1
Γ(rr)θθrr λλrr−1 ee−λλ�θθ (4)
and therefore, the photocounts distribution PPmm(TT) takes the form
PPmm(TT, MM) = ∫ PPmm(TT)
∞
0 ff(λλ) ddλλ (5)

with < mm > = λλ = MM ∙ θθ and rr = MM.
To summarize the pure Poisson distribution is a distribution with a fixed mean count < mm >,
typical of a classical coherent emission, while the negative binomial describes a situation where the
mean count fluctuates from interval to interval according to the gamma distribution written above.
An additional aspect of the statistical characterization of biophoton emission concerns the analy
sis of the tails of the photocount distributions. While the probability distribution functions (PDFs)
discussed in the previous section provide global information on the overall variability of the photon
counts, a more refined description can be obtained by examining the behavior of their extreme events,
i.e., the probability of large fluctuations in the emission intensity. Such analysis offers valuable in
sight into the stochastic and correlation structure of the underlying processes. In the case of biophoton
emission, the observed distributions often exhibit deviations from the ideal Poisson law, displaying
heavier tails.
A practical approach to quantify the statistical weight of extreme events is through the definition
of tail indices computed [27] for selected quantile thresholds q. These parameters quantify the relative
contribution of rare, high-count events to the overall statistical behavior of the system. When applied
to photon-count time series, tail analysis provides a complementary measure of variability and com
plexity, particularly sensitive to nonstationary or burst-like behavior often present in biological emis
sion data. For each experimental PDF PPmm(TT) we construct the quantity FFeeeeee(kk) = ∑ PPmm(TT)
mm≤kk and
for a given quantile q (for the tail analysis is convenient to use q ≥ 0.9) we define a threshold tthrrqq =
mmmmmm�kk: FFeeeeee(kk) ≥ qq�, with this we calculate the corresponding mm value and later the following right
tail indicators:
MMeeeeee(qq) = ∑ PPmm(TT)
mm≥tthrrqq (6)
EEEEeeeeee(qq) = ∑ mm ∙ PPmm(TT)
mm≥tthrrqq
MMeeeeee(qq) (7)
The quantity MMeeeeee(qq) represents the probability of having counts ≥ tthrrqq found with the chosen
quantile, while the quantity EEEEeeeeee(qq) represents the conditional average value of the counts that ex
ceed the threshold, i.e. how large the count is in the tail defined by the quantile. From a broader
methodological perspective, tail statistics provide a natural link to the nonlinear and complexity
based analyses introduced in the following sections. The presence of heavy tails in the count distri
butions reveals the dominance of intermittent, non-Gaussian fluctuations—an aspect further quanti
fied by the scaling exponents obtained from DEA and by the multifractal spectra derived from
Detrended Fluctuation Analysis, the MFDFA approach. Likewise, rare and intense emission events
affect the entropy-based measures, such as the Rényi entropy, by altering the contribution of low
probability fluctuations to the global information balance. In this sense, the analysis of distribution
tails can be seen as the starting point for subsequent scaling and entropy approaches capable of in
vestigating complex and self-organizing dynamics.

2.2. The Diffusion Entropy Approach
There is now broad evidence that biological systems cannot be adequately described within the
ordinary framework of equilibrium statistical mechanics. Living matter inherently violates the as
sumptions on which Boltzmann’s view relies—absence of memory, short-range interactions, and lack
of cooperative behavior. Consequently, quantitative tools capable of revealing deviations from equi
librium statistics are essential to characterize the emergent organization of biological processes. Any
measurable departure from the canonical equilibrium form can be regarded as a signature of some
degree of complexity.
Complexity in this context reflects a delicate balance between order and randomness. When either
dominates, the system simplifies; when they coexist in dynamic equilibrium, rich and adaptive be
haviors emerge. In germinating seeds, for instance, self-organization is triggered by hydration, trans
forming a seemingly inert structure into a network of interacting units that collectively express non
linearity, self-similarity, and cooperative dynamics—hallmarks of complex systems.
Within the theoretical landscape of complexity, the concepts of Kolmogorov complexity and Kol
mogorov–Sinai entropy provide rigorous measures of the unpredictability and information content of
dynamical systems [20,28]. Their evaluation has motivated two major methodological approaches:
(i) the compression approach, which seeks to infer Lyapunov exponents or predictability directly from
data reduction schemes, and (ii) the diffusion approach, in which the original time series is mapped
onto a diffusion-like process
The Diffusion Entropy Analysis belongs to the latter class [28,29,30]. It transforms the infor
mation content of a time series into a scaling parameter, the entropy scaling index η, which quantifies
the deviation from ordinary Brownian randomness (η = 0.5). Any systematic departure from this
value indicates the presence of long-range correlations, memory effects, or cooperative behavior, thus
providing a quantitative fingerprint of complexity in living systems. In our context, the original signal
is the photon-count series ξ(t), obtained by binning the time axis into intervals of size s, and assigning
to each bin the number of detected photons.
Let the original signal be the photon-count time series ξ(t), obtained by dividing the time axis
into bins of width s and assigning to each bin the number of photons detected. From time series of
length MM, one constructs the diffusion trajectory
:
xx(tt) = ∫ ξξ(tt′)ddtt′ + xx(0)
tt
0 (8)
For simplicity the time series is considered as a continuous-time series. It is convenient to con
sider the xx2(tt) time series directly related to the correlation function of the original time series
[28,29,30]. The scaling properties are determined through the long-time limit behaviour of the corre
lation function ⟨ξξ(tt1)ξξ(tt2)⟩ and the average can be made over a large number of realizations of xx2(tt)
using the moving window method [28,29]. Following the standard approach of assuming that the
correlation functions are stationary, it is possible to define a normalized correlation function totally
independent of the absolute values of tt1 and tt2:
Φξξ(ττ) = 〈ξξ(tt1)ξξ(tt2)〉
〈ξξ2〉 (9)

where ττ = |tt1 − tt2 | and it is related to the xx2(tt) time series by the equation:
〈xx2(tt)〉 = 2 〈ξξ2〉 ∫ ddtt′
tt
0 ∫ ddtt" Φξξ�tt"�
tt′
0 (10)
We can now relate the complexity of ξ(t) to the anomalous scaling of the diffusion trajectory x(t).
Using the Fractional Brownian Motion and Hurst notation [30] we indicate the scaling factor with the
symbol H. Assuming xx ∝ ttHH, differentiation of the second-moment relation (Eq.10) gives the long
time:
Φξξ(tt) ∝ 2HH(2HH − 1) tt2HH−2 (11)
which has, in the long-time limit the structure ΦΦξξ(tt) ∝ ± 1
ttδδ with δδ = 2 − 2HH. Any HH ≠ 0.5
indicates anomalous correlations even in the stationary cases.
Normally we have at our disposal only one time series. To make the statistical analysis we convert
the diffusional trajectory xx(tt) into many realizations so as to make it possible to do an ensemble
average. These realizations are performed through a window of size ll that we move along the trajec
tory xx(tt). Assuming a window of length ll ranging from tt to tt + ll, the value xx(tt) can be though as the
initial position of the random walker that jumps in a time ll from the origin to a value xx = xx(tt + ll) −
xx(tt). With a time series of length MM, realizations of the diffusion process at scale l are obtained via
the moving-window definition:
xx(ll, tt) = ∫ ddtt′
tt+ll
tt ξξ(tt′) (12)
Note that the largest value of ll is MM − tt, and for any given window size ll, we can generate MM −
ll + 1 realizations changing the initial position of the random walker, i.e. the t value. From these real
izations we estimate the probability density pp(xx, ll) and the related Shannon entropy of our diffusion
process [18]. The scaling ansatz
pp(xx. ll) = 1
ttηη FF( ee
ttηη) (13)
implies for the Shannon entropy
EE(ll) = − � ddxx
+∞
−∞
pp(xx, ll) ln [pp(xx, ll)] (14)
the equation
This equation means that the entropy EE(ll) increases linearly with ln(ll) and the slope of the re
sulting straight line is the scaling factor ηη that must be found numerically from the experimental data.
EE(ll) = AA + ηη ∙ ln (ll) (15)

The numerical results are expressed in a linear-log scale that transform the fitting curve with the form
KK + ηη ln(ll) into a straight line. Of course, if the FBM condition applies, ηη = HH.
Although the conversion of a time series ξξ(tt)into a diffusion trajectory naturally allows one to
relate its complexity to a Hurst‐like coefficient HH ≠ 0.5, there exists another class of anomalous be
haviors that cannot be captured by stationary correlation functions alone [19,31]. A hallmark of many
complex systems is the occurrence of renewal events [31,32] discrete occurrences that reset the sys
tem’s memory. The waiting times {ττii} between successive renewal events are independent and iden
tically distributed random variables, typically following a power–law probability density
ψψ(ττ) ∝ ττ−μμ 1 < μμ < ∞
Such events induce a rejuvenation of the system: each occurrence marks a complete renewal of
its internal state. When the exponent μμ lies within 1 < μμ < 3, the corresponding crucial events pro
duce long–tailed waiting‐time distributions that strongly deviate from equilibrium expectations, giv
ing rise to intermittent, burst‐like dynamics and anomalous diffusion. A paradigmatic example of a
crucial event is the sudden collective reorientation in a flock of birds: when such a maneuver occurs,
the global velocity of the swarm transiently vanishes and a new, uncorrelated direction of motion
emerges [33]. Analogous mechanisms have been identified in a variety of biological and physiologi
cal systems, where crucial events play an essential role in maintaining adaptability and promoting
self‐organization [34].
In the context of biophoton emission, Diffusion Entropy Analysis can quantify the scaling of
complexity but cannot, in its original formulation, discriminate whether an observed anomalous scal
ing originates from long‐range stationary correlations or from renewal–driven intermittency. To re
solve this ambiguity, the DEA algorithm can be modified through the introduction of stripes [18,34].
In this approach, rather than directly converting the signal ξξ(tt) into a diffusion trajectory, the ampli
tude axis is partitioned into contiguous bins (or stripes) of width Δss. The times {ttii} at which the signal
crosses from one stripe to the next are recorded, defining a new event sequence. From this sequence,
a binary time series zz(tt) is constructed as follows. If time tt coincides with one of the times ttii, we set
zz(tt) = 1 and zz(tt) = 0 otherwise. This series zz(tt) represents a walker that advances by one unit at
each event, thus transforming the renewal process into a diffusion trajectory via the same cumulative
prescription used for ξξ(tt). The corresponding entropy EE(l) is then computed as a function of the
window size l, and its scaling yields the exponent ηη, which replaces HH in characterizing renewal
driven complexity. It can be shown [17,34] that ηη and μμ are connected through distinct relations de
pending on the regime:
ηη = μμ − 1 (1 < μμ < 2), ηη = 1
μμ − 1 (2 < μμ < 3), ηη = 0.5, (μμ > 3).
When μμ > 3, the process corresponds to stationary fluctuations consistent with ordinary equilib
rium statistical mechanics. Conversely, μμ < 3 signals non–stationary dynamics transient for 2 < μμ <
3, and permanently out of equilibrium for 1 < μμ < 2. For the DEA analysis performed without
stripes [17,34], we adopt the relation μμ = 4 − 2ηη. It is worth noting that, for the limiting cases ηη =
0.5 and ηη = 1, this expression yields results consistent with those obtained from the general relations
previously discussed.

In practical applications, the reliability of the stripes method depends critically on the appropriate
choice of stripe amplitude Δss. Empirically, we found that setting
Δss ≈ 3 ∙ (1 ± mm
100) ∙ σσ,
where σ is the standard deviation of the original photon count series and mm is a number between 0 and
100 to be between 2 ∙ σσ and 4 ∙ σσ, ensures optimal discrimination of renewal events. This rule pro
vides a balance between event density and statistical independence of crossings and has been vali
dated on surrogate data sets with known statistical properties. The recurrence of this three–sigma
principle is noteworthy: although the DEA operates far beyond the Gaussian domain, choosing Δss
near a few standard deviations naturally preserves the relevant dynamical range of fluctuations while
suppressing noise–induced micro–crossings [27].
The practical determination of the scaling exponent ηη is done through a linear fit of EE(l) as a
function of the logarithm of the window length l. One of the main practical challenges in DEA con
cerns the selection of the fitting interval, since statistical fluctuations can significantly affect entropy
values near the boundaries. To obtain a robust characterization of the scaling exponent and to evaluate
its local stability, a sliding–window fitting procedure was implemented. The method operates over the
global range [log (lmin), log (lmax)] of the DEA curve and proceeds as follows:
1. A moving window of width ww, containing mmevenly spaced data points, is defined along the
logarithmic axis.
2. Within each window, a local linear regression of EE(l)versus log (l)is performed, yielding a
local slope ηηii and its uncertainty Δηηii.
3. The window is then shifted by a step length ll, generating a sequence of local slope estimates
{ηη1, ηη2, ηη3, ... , ηηkk}.
For each contiguous block of slopes of fixed length (set to five windows in our implementation),
the standard deviation Δηη of the corresponding slopes is computed. A block is considered stable if
Δηη < εε, with the empirical threshold εε = 0.02. When a stable plateau is identified, the mean scaling
exponent and its uncertainty are calculated as weighted averages:
ηηplateau =
� ηηii/Δηηii
2
ii∈plateau
� 1/Δηηii
2
ii∈plateau
, Δplateau = ( � 1
Δηηii
2
ii∈plateau
)−1/2.
These values represent the weighted mean and associated standard deviation of the locally stable
scaling region. If no plateau satisfies the stability criterion, the algorithm concludes that no statisti
cally reliable region is present within the selected interval. Conversely, when a plateau is detected,
the corresponding ηηplateauis used to perform a constrained global fit of EE(l), fixing the slope to the
plateau value. This dual local–global approach allows for direct comparison between local and global
scaling behaviors, revealing potential transitions or instabilities in the entropy dynamics. At the end
of the analysis, the final scaling exponent ηη is determined by averaging within the identified plateau

region, where the variability of the slope is minimal. This ensures a robust estimation of the scaling
regime even under experimental noise.
2.3. The Renyi Entropy
In the quantitative characterization of complex biological dynamics, the use of generalized
entropic measures provides a powerful extension of the conventional Shannon framework. Among
them, the Rényi entropy HHαα offers a flexible approach to probe the statistical structure of a system
across multiple scales of probability weighting [35,36]. For a discrete probability distribution {ppii},
the Rényi entropy is defined as
HHαα = 1
1 − αα ln (� ppii
αα
ii
),
where αα ∈ R is the order of the entropy. In the limit αα → 1, HHαα reduces to the Shannon entropy. The
parameter αα acts as a statistical “lens,” enhancing or suppressing contributions from different regions
of the probability distribution. For αα > 1, entropy becomes increasingly sensitive to high-probability
events, while for αα < 1 (and especially for negative values) it emphasizes the contribution of rare or
extreme fluctuations. This property makes the Rényi entropy particularly suitable for biological time
series, where the coexistence of long-range organization and rare bursts of activity reflects the non
equilibrium and self-organizing nature of living matter. From a conceptual standpoint, the Rényi en
tropy provides a bridge between statistical mechanics and information theory, allowing one to quan
tify deviations from canonical equilibrium behavior. In biological systems, where the assumptions of
short-range interactions and ergodicity are often violated, the dependence of HHαα on the entropic order
becomes an indicator of the system’s hierarchical structure and the diversity of dynamical states ex
plored over time.
Two complementary computational approaches were adopted to estimate HHαα from the biophoton
emission time series.
(i) Direct estimation:
The direct method evaluates the probability density function of the experimental signal by means
of a kernel density estimation (KDE) technique with reflective boundaries on the normalized domain
[0,1]. This approach reconstructs the continuous probability landscape of photon counts, thereby al
lowing the computation of HHααdirectly from the empirical PDF:
HHαα
(dir) = 1
1 − αα ln (� [pp(xx)]αα
1
0
ddxx).
The normalization HH�αα = HHαα/ln KKdir, where KKdir is the number of KDE bins, ensures comparabil
ity across datasets with different sampling resolutions. This formulation captures the global variability
and amplitude distribution of the photon signal, making it sensitive to broadening of the distribution
tails and to transitions between stationary and intermittent regimes.

(ii) Symbolic sequence estimation:
The symbolic method operates on a transformed representation of the signal, where the original
continuous data xx(tt) are converted into a sequence of discrete symbols [37,38]. This procedure,
rooted in symbolic dynamics and n-gram analysis, aims to capture not only the statistical dispersion
of the values but also the sequential order of events, thus incorporating temporal correlations that are
invisible to purely amplitude-based approaches. The transformation proceeds in two steps. The first
one is a kind of quantization or symbolic encoding which depends on the nature of the original data.
For continuous-valued signals, the transformation is achieved through a quantile-based
discretization of the amplitude distribution. The full range of values of xx(tt) is partitioned into KKseq
equiprobable intervals (quantile bins), each corresponding to one symbol in the discrete alphabet
{0,1, ... , KKseq − 1}. In this representation, each symbol denotes a set of numerical values — a quantile
defined range, rather than a single amplitude. This procedure ensures that all symbols have
comparable marginal probabilities and that the resulting symbolic sequence ss(tt) retains the statistical
structure and ordering of the original signal while being invariant to its absolute scaling.
For discrete-valued signals, such as integer or quasi-integer time series (e.g., photon counts or
digital levels), no quantization step is required. Each distinct value of xx(tt) naturally defines a unique
symbol, so that ss(tt) = xx(tt) and the alphabet size KKseq equals the number of distinct observed values.
In this case, the symbolic representation directly reflects the empirical states of the system, and the
subsequent mm-gram construction captures the recurrence and ordering of these states over time.
The second step is the calculation of the Renyi entropy. From the symbolic sequence, contiguous
words of length LLseq are extracted to build the mm-gram probability distribution. The symbolic space
explored by the sequence-based analysis is fully defined by the parameters KKseq and LLseq and the total
number of possible symbolic combinations is KKseq
LLseq .
The frequency of each unique symbolic sequence defines a discrete probability distribution {ppjj}
over the possible combinations, from which the Rényi entropy is calculated as
HHαα
(seq) = 1
(1 − αα)LLseq
ln (� ppjj
αα
jj
)
and is further normalized with respect to the to the effective alphabet of the series, i.e., the number of
distinct observed symbols KKseq, by dividing by ln KKseq. This normalization allows direct comparison
across different experimental conditions, segmentations, or alphabet sizes.
Given a series of NN samples, the number of observed contiguous symbolic words of length LLseq
is approximately NNooooss = NN − LLseq + 1 ≈ NN. The ratio NNobs/KKseq
LLseq quantifies the average coverage of
the symbolic space, i.e., the expected number of realizations per possible word, and determines the
statistical reliability of the entropy estimation. Assuming a uniform distribution, the expected average
number of realizations per possible word is therefore
⟨mm⟩ = NN
KKseq
LLseq
For instance, with KKseq = 16, LLseq = 3, and NN = 105, each 3-symbol word is expected to occur about

24 times on average, ensuring robust statistical coverage of the symbolic space while maintaining
sensitivity to short-range temporal correlations.
This symbolic formulation captures the temporal organization of the signal, specifically how
patterns of photon emission recur or reorganize over time. When combined with the direct method, it
reveals how statistical structure and temporal sequencing contribute differently to the system’s overall
complexity. From a conceptual standpoint, the symbolic formulation highlights the temporal
grammar of the signal, the way in which short subsequences of events combine to form higher-order
patterns. A reduction in symbolic entropy compared to the direct estimate (HHαα
(seq) < HHαα
(dir)) indicates
that the temporal ordering imposes additional constraints on the system’s dynamics, suggesting the
presence of memory and self-organization. Conversely, similar values of HHαα for both methods suggest
that the system behaves more like a random or weakly correlated process.
2.4. The DFA and MFDFA approaches
The analysis of spontaneous photon emission time series requires methods capable of detecting
long-range correlations under conditions of nonstationary and intermittent dynamics. Ordinary statis
tical measures, which rely on fixed mean and variance, are inadequate when the signal is organized
in bursts and quiescent intervals of variable intensity. In this context, the Detrended Fluctuation Anal
ysis and its multifractal generalization provide a natural framework to quantify scale-dependent or
ganization and to distinguish between random fluctuations and self-organized temporal structures
[39,40,41].
In DFA, the original signal xx(kk) is first converted into its integrated profile
YY(mm) = �[xx(kk) − ⟨xx⟩]
ii
kk=1
,
which emphasizes slow components and cumulative correlations. For a scale ss, the profile is split into
NNss = ⌊NN/ss⌋ non-overlapping segments; to reduce edge effects one usually processes both the forward
and the reversed series, yielding 2NNss segments in total. In each segment νν we remove a polynomial
trend of order mm (typically mm = 1 or 2) and compute the local variance
FF2(νν, ss) = 1
ss �[YY((νν − 1)ss + mm) − PPνν(mm)]2
ss
ii=1
where PPνν(mm) is the fitted polynomial. The root–mean–square fluctuation is
FF(ss) = { 1
2NNss
� FF2(νν, ss)
2NNss
νν=1
}1/2 ∼ ssHH
The Hurst exponent HH classifies temporal dependence: HH = 0.5 (uncorrelated/Poisson-like), HH > 0.5
(persistent), HH < 0.5 (anti-persistent).
This approach could be particularly meaningful for biophoton data, where the temporal organi
zation reflects the interplay between stochastic emission and coherent self-organized processes within

the living system. Deviations from HH = 0.5 express the presence of memory and cooperative activity,
which are expected in the dynamics of biological growth and adaptation. Moreover, by computing
the local slope of log FF(ss) versus log ss, one can reveal crossovers between scaling regimes, indicat
ing transitions in the internal organization of the system as it evolves.
The multifractal extension [41], MFDFA, provides a more detailed picture by weighting fluctua
tions according to their amplitude. The qq-order fluctuation function is
FFqq(ss) = { 1
2NNss
�[FF2(νν, ss)]qq/2
2NNss
νν=1
}1/qq, qq ∈ R
with the geometric-mean definition for qq = 0:
FF0(ss) = exp{ 1
4NNss
� ln [FF2(νν, ss)]
2NNss
νν=1
}
Positive qq amplifies large deviations (bursts), negative qq emphasizes small deviations (laminar/qui
escent phases). The scaling law
FFqq(ss) ∼ ssh(qq)
defines the generalized Hurst exponent h(qq). For monofractal h(qq) is flat; for multifractals h(qq)
varies with qq.
A convenient summary is given by the mass exponent
ττ(qq) = qq h(qq) − 1,
which is the scaling exponent of the partition function ZZqq(ss) = � [FF2(νν, ss)]qq/2
νν ∼ ssττ(qq). Conceptu
ally, ττ(qq) tells how the qq-weighted “mass” of fluctuations redistributes across scales: linear ττ(qq)
indicates a single scaling law; curvature signals a spectrum of coexisting laws. Through a Legendre
transform,
αα = dττ
dqq , ff(αα) = qq αα − ττ(qq),
one obtains the singularity spectrum. Here αα is the local Hölder (singularity) exponent while ff(αα)
estimates the fractal dimension of the set of points that share a given αα. In practice, the peak location
ααmax reflects the dominant scaling (analogous to a global HH), and the width Δαα = ααmax − ααmin quan
tifies the degree of multifractality: broader spectra imply stronger heterogeneity of scaling behav
iours. Asymmetries of ff(αα) are informative: a left-skewed spectrum (extended towards small αα) re
veals dominance of intense bursts; a right-skewed spectrum indicates prevalence of quiet, fine-scale
fluctuations.
Applied to our emission series, DFA and MFDFA reveal the presence of persistent temporal cor
relations and multiscale intermittency. The scaling exponent HH captures the global tendency toward
memory and organization, while the spectrum ff(αα) highlights the coexistence of multiple dynamical
components—ranging from quiet, noise-like intervals to rare and intense bursts. This dual description

is crucial for biological systems, where the emission process alternates between phases of quasi-sta
tionary activity and self-organized fluctuations associated with metabolic or developmental transi
tions. In the present analysis, the same set of scales is used for both DFA and MFDFA, ensuring direct
correspondence between the global and the multifractal indicators.
2.5. General considerations
The four analysis approaches employed in this study form a coherent methodological framework
designed to capture complementary aspects of complexity in biophoton emission. Although they orig
inate from distinct theoretical frameworks, they share a unifying goal: the identification of scale
invariant structures and statistical regularities that depart from equilibrium randomness. Each method
isolates a specific facet of the signal—its amplitude distribution, informational structure, or temporal
organization—yet all contribute to a common picture in which stochastic variability and self‐orga
nized dynamics coexist across multiple time scales.
Tail analysis provides the most direct statistical characterization of photon emission, focusing on
the probability distribution of counts and its extreme fluctuations. The indices of tail heaviness quan
tify the relative weight of rare, high‐intensity bursts compared to the background emission. Strongly
non‐Gaussian tails indicate that the signal is dominated by intermittent activity rather than uncorre
lated noise, a hallmark of nonequilibrium behavior in living systems. This amplitude‐based approach
thus establishes the empirical evidence of intermittency that motivates the application of scaling and
entropy‐based analyses.
The Diffusion Entropy Analysis translates these amplitude irregularities into an information‐the
oretic framework. By mapping the photocount series onto a diffusion process, DEA measures how
Shannon entropy grows with time window size. The slope of this relationship defines the diffusion
exponent η, which quantifies the rate of information production and reveals whether the system fol
lows normal diffusion (η = 0.5) or exhibits superdiffusive or sub diffusive dynamics. DEA is partic
ularly suited to detect nonstationary and renewal‐driven behavior: it captures memory effects and
collective organization even when correlations are not expressible through stationary functions. Un
like fluctuation-based methods such as DFA and MFDFA, DEA does not require detrending or am
plitude normalization—which can alter the scaling of fluctuations—but instead derives a distribution
independent measure of information growth and complexity scaling.
The Rényi entropy framework generalizes the concept of information scaling by introducing an
order parameter α that modulates the contribution of frequent and rare events. The direct formulation,
based on the empirical amplitude distribution, highlights how information is distributed across fluc
tuation magnitudes; the symbolic formulation, in turn, operates on discretized sequences, making it
sensitive to temporal ordering and pattern recurrence. Together, these complementary forms describe
how the system allocates information among amplitude and temporal domains.
The Detrended Fluctuation Analysis and its multifractal extension focus explicitly on the tem
poral correlations within the signal. DFA quantifies how detrended variance scales with time, yielding
the Hurst exponent H, which distinguishes between uncorrelated (H = 0.5), persistent (H > 0.5), and
antipersistent (H < 0.5) behaviors. MFDFA extends this to a family of generalized exponents h(q),
describing how fluctuations of different intensities scale differently, thus revealing the multifractal
hierarchy of the signal. In stationary, monofractal systems, η from DEA and HH ≈ h(2) provides
equivalent measures of global scaling. However, when intermittency and multifractality dominate
as often occurs in biological photon emission—the two approaches diverge: DEA captures entropy

based nonstationarity and renewal dynamics, while DFA/MFDFA quantify the persistence and heter
ogeneity of temporal correlations. Their joint interpretation therefore separates temporal memory
from statistical nonstationarity, both of which contribute to biological complexity.
Despite their distinct formulations, all methods converge toward a unified description of the sys
tem’s scaling architecture. The heaviness of the distribution tails signals the presence of strong, rare
fluctuations; DEA interprets these as enhanced entropy growth and information production; Rényi
entropy quantifies how such events reshape the informational balance between order and randomness;
and DFA/MFDFA reveal how these bursts propagate through time, sustaining long‐range correlations
and multifractal organization. Together, these results show that biophoton emission is not a stationary
random process but the manifestation of a self‐organized system operating near a critical balance
between coherence and variability. The correspondence among the principal scaling parameters, HH,
h(2), and η and the similar asymmetries in the Rényi and MFDFA spectra confirm that both infor
mational and dynamical dimensions of the signal obey the same scaling principles. Complexity in
this context emerges not from randomness alone but from the structured variability inherent to living
matter [42,43], where fluctuations act as a medium of coherence and regulation.
In the following section, we will apply these analytical methods to surrogate time series con
structed to reproduce well-defined statistical properties. This will allow us to verify the consistency
and sensitivity of each method before extending the analysis to experimental biophoton data.
3.0. The application to surrogate series
To validate the statistical methods and benchmark their sensitivity to distinct forms of temporal
organization, we generated three classes of surrogate signals: crucial event (CE) sequences, fractional
Gaussian Noise (FGN) series, and Poisson noise. It should be noted that FBM is obtained as the time
integral of FGN. This guarantees a consistent representation of long-range correlated Gaussian dy
namics. These surrogates provide controlled examples of non-stationary renewal dynamics, corre
lated Gaussian fluctuations, and purely random emission, respectively—each representing a funda
mental dynamical archetype relevant to the phenomenology of biophoton signals.
The crucial event time series [18,44] was generated according to a renewal process characterized
by a power-law distribution of waiting times between successive events. The waiting times ττ are
produced using the transformation
ττ =TT� 1
yy
1 μμ−1
− 1�
where yy is a real number uniformly distributed in the interval (0,1), TT is a characteristic time scale,
and μμ is the power-law exponent controlling the heaviness of the waiting-time tail. For μμ > 2, the
average waiting time is finite and given theoretically by
⟨ττ⟩ = TT
μμ − 2.

For 1 < μμ < 3, the resulting dynamics are non-stationary and characterized by long-term memory
arising from the divergence of the second moment of ψψ(ττ). The discrete binary series xx(tt)is obtained
by setting xx(ttii) = 1 at event times ttii = � ττjj
ii
jj=1
and xx(tt) = 0 elsewhere, thus mimicking a point
process with intermittent bursts and laminar intervals. This model captures the renewal nature and
self-organized intermittency often observed in biological systems, from neuronal spiking to photon
emission [34].
In contrast, fractional Gaussian Noise (FGN) motion represents a Gaussian, self-affine process
with stationary increments and long-range correlations governed by the Hurst exponent 0 < HH < 1.
FGN was generated using the Davies–Harte [45] embedding method, which ensures exact covariance
reproduction in the frequency domain through a circulant-matrix formulation. For HH > 0.5, the pro
cess exhibits persistent correlations (superdiffusion), while for HH < 0.5 the dynamics become anti
persistent (sub diffusion). FGN surrogates provide a reference for correlated but stationary scaling
behaviour, enabling direct comparison with the renewal-driven, non-stationary properties of crucial
event sequences.
Together, these two surrogate classes establish a complementary framework for testing the per
formance and interpretive scope of the adopted analytical tools. The CE series introduce heavy-tailed,
non-stationary scaling typical of self-organized critical phenomena, whereas the FGN surrogates re
produce correlated yet Gaussian fluctuations with tunable persistence.
Finally, a Poisson surrogate series was generated to represent the null hypothesis of purely ran
dom emission. Together, these three surrogate models span the principal regimes of stochastic organ
ization, Poisson (memoryless randomness), FGN (stationary long-range correlation), and CE (non
stationary renewal dynamics)—providing a comprehensive framework for testing the sensitivity and
interpretive scope of the analytical methods applied in this study.
The CE series was produced using a renewal process with parameters μμ = 2.5 and TT = 1; the
FGN series was generated with a Hurst exponent HH = 0.7; and the Poisson series was simulated with
an average photon count rate of ⟨mm⟩ = 10. The time step used in the generation has been fixed at 1
sec.
Figure 1 shows a graphical representation of the three series over the first hundreds of points
(each sequence consists of 100,000 data points in total) to have a better graphical representation. The
distinct statistical and temporal characteristics of the CE, FGN, and Poisson processes are evident:
the CE series displays intermittent bursts and long waiting times, the FGN series exhibits correlated
fluctuations, while the Poisson series represents a purely random baseline.

Figure 1. Left: first 1000 points of the FGN series (HH = 0.7), composed of real-valued data that can assume both positive and negative values. Right: first 200 points of the Poisson (red) and Crucial Event (CE) (green) series.
To better approximate realistic experimental conditions, where biophoton emission typically
arises from the superposition of multiple dynamical sources, three additional composite series were
constructed by combining the prototype signals with appropriate weighting factors. These hybrid test
series reproduce different mixtures of stochastic and organized components and were used for the
validation tests presented in this section.
Table 1 summarizes the main characteristics of the reference and composite series, here identified
as: P-type (pure Poisson process), C-type (Poisson + CE), F-type (Poisson + FGN component), and
CF-type (Poisson + CE + FGN component).
< mm > σσ Skewness
P-type 10.0 3.17 0.31
C-type 11.3 3.51 0.24
F-type 11.1 3.22 0.29
CF-type 12.5 3.56 0.23
Table 1. Main statistical parameters of the four prototype and mixed series. The ⟨mm⟩ value denotes the mean
photon count, σσ the standard deviation, and Skewness the asymmetry of the probability distribution counts.
The values show that all series have comparable variability (σσ ≈ 3–3.6) and weakly positive
skewness, indicating slightly asymmetric distributions dominated by small-amplitude events with oc
casional higher counts. The composite series (CF-type) exhibits a modest increase in both mean and
dispersion, reflecting the combined contribution of correlated (FGN-type) and intermittent (CE-type)
dynamics to the underlying Poisson background.
If we consider the Poissonian part of the series as noise, we find that the mixed series have a
signal-to-noise ratio of the order of 0.5 − 1, which are typical values in biophotonic signals coming
from cell cultures [27].

The first analysis focuses on the probability distribution of photon counts and on the statistical
characterization of their tails. Figure 2 illustrates a representative example obtained from the C-type
series, together with the position of the selected quantile used for tail evaluation. The other series
yield qualitatively similar distributions and are therefore omitted here for brevity.
Figure 2. Probability distribution PPmm(TT) for the C-type series (red line) compared with the corresponding
Poisson fit (green line). The vertical line indicates the position of the quantile qq = 0.9 used for tail analysis.
The fit reproduces well the central region of the distribution, while slight deviations appear in the
tail, indicating the presence of non-Poissonian fluctuations and a moderate excess of large-count
events. The vertical line marks the quantile qq = 0.9 used for tail analysis. Similar behavior has been
found for the other series. All relevant numerical parameters derived from these distributions, includ
ing fitted values and tail indicators, are summarized in Table 2 for all examined series.
MMeeeeee(qq) EEEEeeeeee(qq) Fano factor
P-type 0.137 15.38 1.006
C-type 0.122 17.44 1.088
F-type 0.150 16.43 0.941
CF-type 0.133 18.50 1.022
Table 2. Main parameters derived from the tail analysis of the count distributions. The quantities MMexp(qq),
EEEEexp(qq) and the Fano factor are defined in the previous paragraph.
The results reported in Table 2 clearly indicate that while the Fano factor remains approximately
constant and close to unity for all series, indicating that the overall fluctuation level is nearly Pois
sonian, the tail parameters MMexp(qq) and EEEEexp(qq) exhibit clear variations. This suggests that devia
tions from pure Poisson behavior emerge primarily in the tails rather than in the bulk of the distribu
tion. In fact, fits performed with a thermal (gamma) distribution on the mixed series yield a high
number of modes and are practically indistinguishable from a pure Poisson fit, in agreement with

previous findings by Cifra et al. [22]. However, the tail analysis highlights subtle but significant de
partures from the canonical form, offering a more sensitive indicator of the underlying dynamical
heterogeneity.
The differences observed in the tail behavior of the count distributions suggest that, beyond sim
ple statistical variability, the underlying emission dynamics may involve distinct temporal organiza
tion mechanisms. To investigate whether these amplitude fluctuations correspond to genuine temporal
correlations or renewal-like structures, we now turn to the Diffusion Entropy Analysis, which pro
vides a direct measure of scaling and memory effects in the photon-count time series.
Figure 3 illustrates the typical dependence of the Shannon entropy EE(ll) on the window length ll,
obtained from the Diffusion Entropy Analysis of the C-type series without the use of stripes. The
solid line represents the best linear fit derived through the sliding-window procedure described ear
lier, providing an estimate of the scaling exponent ηη that characterizes the diffusion regime of the
signal.
Figure 3. Diffusion Entropy Analysis of the C-type series without stripes. The blue points represent the Shan
non entropy EE(ll) as a function of the logarithm of the window size ll. The red dashed line indicates the best
linear fit obtained through the sliding-window procedure in the range ln (ll) = 2–6, yielding a scaling exponent
ηη = 0.595 ± 0.020.
Similar figures are obtained for all DEA analyses performed here. Table 3 summarizes the results of
the Diffusion Entropy Analysis performed on the four surrogate series described above: a purely Pois
sonian sequence (P-type), a Poisson process modulated by crucial events with power-law waiting
times (C-type, μ = 2.5), a Poisson process superimposed with a fractional Gaussian noise (F-type, H
= 0.7), and a mixed process combining both crucial events and FGN (CF-type). For each series, the
scaling exponent η has been computed both without and with the stripe procedure, using a stripe size
Δss equal to 3·σ, as well as slightly larger (Δss = 3.9·σ) and smaller (Δss = 2.7·σ) values to test the
robustness of the results. The results confirm that, for a purely Poissonian process, the DEA yields η
≈ 0.5 as expected for a purely stochastic and memoryless dynamics, largely independent of the precise
stripe size. In the C-type series, the addition of crucial events produces a higher scaling (η ≈ 0.60
without stripes), reflecting the emergence of long-range correlations and intermittent behavior. The
introduction of stripes reduces the scaling to values around 0.55–0.56, consistent with the expected
filtering of the deterministic temporal clustering generated by crucial events.

ηη (no-str) ηη [Δss = 3 ∙ σσ] ηη [Δss = (3 + 0.9) ∙ σσ] ηη [Δss = (3 − 0.3) ∙ σσ]
P-type 0.46±0.02 0.50±0.02 0.49±0.02 0.51±0.02
C-type 0.60±0.02 0.56±0.02 0.63±0.02 0.55±0.02
F-type 0.54±0.01 0.52±0.02 0.50±0.02 0.50±0.02
CF-type 0.66±0.01 0.59±0.02 0.59±0.01 0.55±0.02
Table3. Scaling exponents η obtained from the Diffusion Entropy Analysis (DEA) applied to four surrogate time series: purely Poissonian (P-type), Poisson plus crucial events (C-type, μ = 2.5), Poisson plus fractional Gaussian noise (F-type, H = 0.7), and Poisson plus crucial events plus FGN (CF-type). Results are reported
both without stripes and with stripe widths Δss equal to 3·σ, 3.9·σ, and 2.7·σ. The error bars represent standard
deviations estimated from linear regression over the selected scaling region.
The F-type process, obtained by superimposing a fractional Gaussian noise with H = 0.7 on a Poisson
sequence, shows η ≈ 0.54 without stripes and η ≈ 0.50–0.52 when stripes are applied. This behaviour
indicates that the stripe procedure effectively removes most of the fractional component of the dy
namics, restoring a nearly diffusive scaling (η ≈ 0.5). Finally, in the CF-type case, where both frac
tional memory and crucial intermittency are present, the DEA yields η ≈ 0.66 without stripes and η ≈
0.55–0.59 with stripes, showing an intermediate behaviour between the C-type and F-type signals.
This confirms that the stripe-based DEA can selectively suppress the long-memory components of
the signal while still preserving signatures of crucial intermittency.
It is worth noting that the analysis of the pure surrogate components yields η ≈ 0.77 (no stripes)
and η ≈ 0.66 (with stripes) for the crucial event sequence, and η ≈ 0.70 (no stripes) and η ≈ 0.51
(with stripes) for the pure FGN (HH = 0.7). These values are fully consistent with theoretical expec
tations: for FGN, the scaling exponent is expected to match the Hurst parameter (η ≈ HH), while for
crucial events η is theoretically linked to μ through the relation η = 1/(μμ − 1), giving η ≈ 0.67
for μμ = 2.5. Good agreement between the DEA-derived scaling and theoretical predictions confirms
the reliability of the numerical implementation and the physical meaning of the DEA scaling exponent
as a marker of the underlying temporal correlations [18]. The deviations observed in the mixed cases
are consistent with the competition between fractional persistence and intermittent renewal dynamics,
both contributing to the effective scaling measured by the DEA.
Furthermore, it is observed that when the stripe size is reduced too much in the mixed series
involving crucial events, part of the underlying stochastic fluctuations becomes misinterpreted by the
DEA as spurious crucial events. As a consequence, the scaling exponent η decreases toward the Pois
sonian value (ηη ≈ 0.5), indicating that overly narrow stripes cause the analysis to absorb noise con
tributions as intermittent events, thereby masking the true renewal dynamics. This effect highlights
the importance of selecting an appropriate stripe width to correctly separate stochastic variability
from genuine crucial dynamics. Empirically, a stripe size in the range between 3 · σσ and 4 · σσ appears
to provide a reliable balance, efficiently filtering stochastic noise while preserving the statistical sig
natures of crucial events.
While the DEA provides a robust assessment of the scaling properties and temporal correlations
of diffusion-like processes, it mainly quantifies the global growth of entropy as a function of time. To
achieve a deeper understanding of the statistical composition of the signal, we extended the analysis

to the Rényi entropy, which generalizes the Shannon measure by introducing an order parameter α.
By varying α, different regions of the probability distribution can be selectively emphasized, thus
allowing one to distinguish the contribution of rare intermittent events from that of frequent fluctua
tions. This complementary approach reveals additional layers of complexity beyond the global scal
ing captured by the DEA.
In the following, the Rényi entropy is evaluated using two complementary approaches. The direct
method estimates the probability distribution from the amplitude statistics of the time series, provid
ing a continuous characterization of the signal’s variability. In contrast, the symbolic method is based
on the discretization of the time series into symbolic sequences, thereby emphasizing the temporal
organization of fluctuations rather than their absolute magnitude.
In practice, both entropy formulations were applied to the same time-series under identical con
ditions. Each photon-emission record xx(tt) was normalized to the interval [0,1] and, when necessary,
divided into contiguous groups of equal length to test the local stability of the results. The Rényi
entropy HHαα was then computed over a continuous grid of αα values, typically spanning [−8,6].
In the direct approach, the empirical probability density function of the normalized data was es
timated using a Gaussian kernel with reflective boundaries, and the corresponding probabilities were
used to evaluate HHαα
(dir) while in the symbolic approach, the same data were transformed into symbolic
sequences. Contiguous symbolic words of length LLseq = 3 were then used to construct the n-gram
probability distribution.
Figure 4 compares the normalized Rényi entropy HHαα obtained through the direct (left panels) and
symbolic (right panels) approaches for both the pure and mixed surrogate series.
Figure 4. Normalized Rényi entropy HHαα obtained from the direct (left) and symbolic (right) methods for the pure series: Poisson-type (light green), FGN-type (green), and CE-type (red).
In the pure cases (Poisson, FGN, and CE), the direct analysis highlights a strong contrast between
Poisson and CE dynamics. The Poisson process yields an almost symmetric and weakly α-dependent
entropy profile, consistent with an uncorrelated stochastic source. The FGN series, characterized by
persistent long-range correlations (HH = 0.7), exhibits a smoother but still monotonic decrease of
HHαα
(dir)with α, reflecting moderate statistical broadening. In contrast, the CE series shows a pronounced
asymmetry, with large HHαα
(dir)values for αα < 0 and a sharp decay for αα > 0, corresponding to the

coexistence of rare, high-intensity events and recurrent low-activity states. The symbolic Rényi anal
ysis confirms this differentiation: while Poisson and FGN signals produce nearly flat profiles, the CE
process retains a marked asymmetry between the rare and frequent symbolic patterns, evidencing its
intermittent grammar.
Figure 5 shows the Rényi entropies for the mixed processes, the direct Rényi curves converge
toward a more compact shape, as the Poisson background partially suppresses the heavy tails of the
CE distribution and reduces the amplitude heterogeneity induced by long-range correlations. None
theless, the symbolic representation reveals that temporal organization remains discriminative. The
F-type series preserves a nearly uniform symbolic entropy, consistent with correlated but regular fluc
tuations, whereas C-type series displays a strong α-asymmetry, indicating that the sequence of events
still bears the hallmark of crucial intermittency despite the added stochastic background. The fully
mixed CF-type signal exhibits an intermediate behavior, suggesting that the fractional-Gaussian com
ponent regularizes, but does not eliminate, the intermittent symbolic structure. Altogether, these re
sults demonstrate that direct Rényi entropy captures the statistical breadth of amplitude fluctuations,
while the symbolic formulation isolates the intrinsic temporal constraints governing the emission dy
namics.
Figure 5. Normalized Rényi entropy HHααfrom the direct (left) and symbolic (right) methods for the mixed series: F-type (light green), C-type (green), and CF-type (red). The direct curves appear more compact due to the Poisson background, while in the symbolic analysis the C-type retains a pronounced α-asymmetry, and the CF-type shows an intermediate behavior between the intermittent C-type and the correlated F-type dynamics.
A notable difference emerges between the direct and symbolic Rényi analyses when comparing
pure and mixed series. In the direct approach, the addition of a Poisson component to a crucial-event
signal markedly reduces the high-α asymmetry observed in the pure CE case. This effect arises be
cause the kernel-based estimation of the continuous probability density function tends to “fill in” the
long tails introduced by intermittent bursts with the dense fluctuations of the Poisson background,
thereby compressing the overall distribution and lowering HHαα
(dir)for negative α. In contrast, the sym
bolic formulation remains sensitive to the temporal grammar of the process. The same Poisson ad
mixture that regularizes the amplitude distribution does not erase the sequential imprint of intermit
tency, and the corresponding HHαα
(seq)retains the characteristic high–low asymmetry between rare and

frequent symbolic patterns. This divergence underscores the complementary nature of the two esti
mators: the direct Rényi entropy captures statistical broadening in the amplitude domain, while the
symbolic one isolates the dynamic constraints emerging from temporal organization.
The results of the Rényi entropy analysis are fully consistent with the scaling behaviour revealed
by the DEA. Both approaches point to a clear hierarchy among the underlying dynamical regimes:
Poisson-like emission corresponds to a memoryless stochastic process (η ≈ 0.5, nearly flat HHαα), while
the F-type and C-type series display, respectively, the signatures of long-range correlation and crucial
intermittency. The mixed CF-type signal retains intermediate features in both analyses, confirming
that fractional-Gaussian correlations partially regularize the intermittency induced by crucial events
without suppressing it entirely. In this sense, the Rényi framework complements the DEA by extend
ing the characterization from temporal scaling to the full statistical structure of the fluctuations, bridg
ing dynamical memory and amplitude heterogeneity within a unified entropic description.
To complete the analysis, we now turn to the Detrended Fluctuation Analysis and its multifractal
extension, which are designed to extract correlation exponents and multifractal signatures even in the
presence of nonstationarity. DFA quantifies the global persistence of fluctuations through the Hurst
exponent HH, while MFDFA extends this framework by resolving how fluctuations of different ampli
tude scales across time, yielding the generalized Hurst spectrum h(qq) and the associated multifractal
singularity distribution ff(αα). In this way, DFA/MFDFA provide the temporal-domain counterpart to
the entropy-based characterization obtained above.
Figure 6 shows the MFDFA spectrum of the different surrogate time series.
Figure 6. Shown are the spectra for Poisson noise (P-type, light green), fractional Gaussian noise (F-type, red), crucial-event dynamics (C-type, orange), and the mixed process (CF-type, dark green). The Poisson series
displays a narrow monofractal peak near αα ≈ 0.50, while F-type data broaden around αα ≈ 0.57, consistent with persistent Gaussian correlations. C-type and CF-type series exhibit wider spectra shifted toward higher
αα, reflecting intermittent, renewal-driven multifractality. Together, the spectra summarize the progression from purely random to increasingly organized and bursty dynamics.

The multifractal spectra obtained via MFDFA show a clear differentiation among the surrogate
time series, consistent with the trends revealed by DEA and Rényi entropy. The Poisson process ex
hibits a narrow spectrum centred around αα ≈ 0.5, consistent with monofractal, memoryless dynam
ics. The addition of fractional Gaussian noise (F-type) shifts the peak to αα ≈ 0.58 and increases the
spectral width, reflecting long-range correlations and a weak multifractal signature associated with
fractional Brownian fluctuations.
Crucial events (C-type) lead to a pronounced rightward shift of the spectrum (peak around αα ≈
0.68), together with increased width, indicating intermittent dynamics with heterogeneous scaling
exponents. When both mechanisms coexist (CF-type), the spectrum becomes broader and slightly
further shifted (αα ≈ 0.70), showing that fractional correlations reinforce, rather than mask, the inter
mittent structure introduced by crucial events.
Overall, MFDFA confirms the hierarchy of dynamical regimes detected by DEA and Rényi anal
ysis:
Poisson < Poisson+FGN < Poisson+CE < Poisson+CE+FGN
in terms of complexity and multifractal richness. This convergence across independent statistical in
dicators supports the robustness of our interpretation.
To quantify the degree of multifractality in the analysed time series we employed two comple
mentary indicators derived from the Multifractal Detrended Fluctuation Analysis framework. First,
we computed the spectral width
Δαα = ααmax − ααmin,
which measures the range of singularity strengths in the multifractal spectrum ff(αα). For purely mon
ofractal processes (e.g., Poisson or fractional Gaussian noise), Δαα approaches zero, while broader
spectra indicate increasing heterogeneity of scaling exponents and thus stronger multifractality
[41,46].
In addition, we used the asymmetry index
Δh = h(qqmin) − h(qqmax),
where h(qq) is the generalized Hurst exponent and qqmin and qqmax are the extreme qq values used in
MFDFA. For monofractal signals, h(qq) is constant and therefore Δh ≈ 0.
Table 4 reports the average Hurst exponent obtained from DFA, together with the multifractal
spectral width and asymmetry index coming from the MFDFA analysis, for the four classes of surro
gate time series. The Hurst exponent reported in Table 4 was obtained from the DFA analysis as the
average slope of the log–log plot of the fluctuation function FF(ss) versus the scale ss. Only the stable
scaling region was included in the fit, while the largest-scale points—where the number of segments
becomes insufficient and fluctuations dominate—were excluded to avoid statistical bias.

HH Δαα Δh
P-type 0.50 0.013 0.006
C-type 0.69 0.024 0.013
F-type 0.54 0.072 0.036
CF-type 0.69 0.070 0.034
Table 4. Hurst exponent HH from DFA, multifractal spectrum width Δαα, and asymmetry Δh obtained from
MFDFA for the four surrogate series. Poisson dynamics yield the expected monofractal behavior (HH ≈ 0.50) with minimal spectral width, while crucial events induce strong persistence and modest multifractality. The FGN-modulated process exhibits mild persistence and enhanced intermittency due to its interaction with discrete noise, and the combined CE+FGN signal shows the strongest joint signature of persistence and multifractality.
The DFA/MFDFA indicators align with the expected properties of the surrogate dynamics.
The Poisson process yields HH ≈ 0.50 and an extremely narrow multifractal spectrum, consistent with
memoryless monofractal fluctuations. The C-type and CF-type series display HH ≈ 0.69, reflecting
the persistent long-range dependence imposed by crucial events. The F-type signal, a Poisson process
modulated by fractional Gaussian noise, exhibits a milder persistence (HH ≈ 0.54), lower than the
nominal HH = 0.70 of the generating fractional Gaussian noise. This reduction is expected, as the
discrete Poisson component partially masks long-range correlations. Importantly, pure FGN is essen
tially monofractal (Δαα ≈ 0.009), as predicted by Gaussian self-similarity theory: Gaussian processes
with stationary increments scale uniformly and do not generate multifractality in the absence of in
termittency [47]. However, when FGN is superimposed on discrete Poisson events, the resulting de
parture from Gaussian behavior produces heterogeneous local fluctuations, especially in the distribu
tion tails. This interaction between long-range correlated fluctuations and impulsive shot noise broad
ens the multifractal spectrum by introducing local intermittency that is absent in pure FGN [47,48].
The pure crucial-events series exhibits strong persistence (HH ≈ 0.69) but only moderate mul
tifractality, confirming that heavy-tailed waiting-time statistics enhance temporal memory without
necessarily diversifying local scaling exponents. In contrast, the mixed CF-type dynamics, which
combine scale-free waiting times and correlated amplitude modulation, yield both strong persistence
and the widest multifractal spectrum, demonstrating that multifractality arises most prominently when
power-law temporal organization and correlated fluctuation amplitudes act jointly.
The tail statistics and Fano factors support the same hierarchy revealed by DFA/MFDFA. Pure
Poisson dynamics are featureless, monofractal, and memoryless, while crucial events introduce long
range temporal dependence and heavy-tailed fluctuations but only moderate multifractal spreading.
Fractional Gaussian noise alone remains nearly monofractal, and a broad multifractal spectrum
emerges only when long-range Gaussian correlations interact with discrete burst-like dynamics. Ac
cordingly, the mixed CE+FGN series exhibits the strongest intermittency and the widest range of
scaling exponents. Overall, the DFA/MFDFA results consistently mirror the trends revealed by DEA
and Rényi analysis, confirming that crucial-event and hybrid dynamics give rise to persistent and
multifractal behavior, whereas Poisson statistics provide a memoryless monofractal baseline.
Across the four surrogate models, the combined results of DEA, Rényi entropy, DFA/MFDFA,
and tail-statistics analysis converge to a coherent and internally consistent picture of their dynamical
structure. As expected, the Poisson benchmark exhibits purely stochastic behavior: DEA yields η ≈

0.5, Rényi spectra remain essentially flat and order-independent, DFA gives HH ≈ 0.50, and the mul
tifractal width is negligible. Likewise, tail indicators confirm the absence of long-range memory,
heavy tails, or hierarchical scaling, defining a clean monofractal, memoryless baseline.
Introducing crucial events fundamentally alters the statistical picture. DEA departs from the
Brownian value, Rényi entropy develops a marked asymmetry in α, DFA yields HH ≈ 0.69, and tail
metrics reveal heavy–tailed waiting times and super-Poissonian fluctuations. These features reflect
renewal-type persistence and aging induced by power-law inter-event statistics, rather than continu
ous long-range correlations. Consistently, the multifractal width remains moderate: heavy-tailed wait
ing times alone generate strong intermittency and deviation from Poisson statistics, but do not create
a broad hierarchy of scaling exponents. Fractional Gaussian noise exhibits complementary behavior.
Although generated with H=0.7, the pure FGN series is nearly monofractal, as expected for Gaussian
self-similar dynamics. DFA correctly recovers the imposed persistence, but Rényi and MFDFA show
only weak multifractality. When FGN is combined with discrete shot-like fluctuations (F-type surro
gate), mild multifractality emerges DEA shifts only slightly above the Poisson value, Rényi spectra
acquire curvature, and MFDFA detects a non-zero but limited spectral width. Tail statistics confirm
moderate intermittency and weaker heavy-tail behavior compared to crucial-event dynamics.
The richest dynamical pattern appears in the mixed CF-type series. Here, DEA, Rényi entropy,
and MFDFA consistently reveal renewal-driven persistence together with the broadest multifractal
spectrum, while tail analysis shows the largest intermittency index. This demonstrates that the most
complex regime arises not from a single mechanism, but from the synergistic interplay between
heavy-tailed renewal structure and genuine long-range stochastic fluctuations.
This surrogate-based benchmark establishes a clear hierarchy, Poisson baseline, memory-driven
CE dynamics, Gaussian-correlated modulation, and a maximally complex mixed regime, providing a
rigorous interpretive frame for the analysis of real photon emission data.
With the surrogate benchmark established, we next analyze real counting sequences acquired
under controlled experimental conditions. These include the intrinsic dark-count signal of the detector
and photon counts generated by a weak coherent laser field. This provides a physically grounded
reference against which future biological signals can be interpreted.
4.0. Real Data Analysis
The analysis then extends to real photocounting data, beginning with measurements of the detec
tor dark signal acquired at 21∘C, followed by photon-count statistics obtained from an attenuated laser
source used as a coherent-light reference. The experimental setup and acquisition procedure follow
those described in our previous works [17,25], ensuring continuity and comparability with established
detection protocols. The laser emission at 658 nm (few mW output power) was attenuated by an
optical density (OD) filter with OD = 3.3, corresponding to an attenuation of approximately 2 × 103.
After attenuation, the residual optical power coupled into the measurement chamber was in the sub
μW range. The attenuated beam was delivered through an optical fiber inserted through a sealed ap
erture in the measurement chamber floor, in the position typically occupied by the Petri dish.
Figure 7 shows the experimental data of dark count and laser emission.

Figure 7. Photomultiplier count time series acquired in darkness (lower, red) and under attenuated laser illumination (upper, green). The plot shows the first 20 000 s of acquisition; the complete analyzed series spans 100 000 s at 1 Hz sampling.
The lower trace (red curve) corresponds to the photomultiplier dark counts, while the upper trace
(green curve) represents the photon count obtained from the appropriately attenuated laser emission.
Table 5 summarizes the main statistical properties of these time series together with the coefficients
extracted from the tail–distribution analysis.
< mm > σσ Skewness MMeeeeee(qq) EEEEeeeeee(qq) Fano factor
dark 1.50 1.50 1.467 0.100 4.78 1.503
laser 52.9 7.79 0.155 0.111 65.52 1.148
Table 5. Statistical indicators for the dark–noise and attenuated–laser photon-count time series. The dark counts exhibit super-Poissonian fluctuations and strong asymmetry, while the attenuated laser is near-Poissonian with weak deviation from shot-noise statistics.
The statistical properties of the dark–noise and attenuated laser photon count sequences clearly distinguish
their physical origins. The dark signal exhibits ⟨mm⟩ ≈ 1.5 counts/s with a standard deviation comparable to the
mean, corresponding to a variance significantly larger than the mean and a Fano factor FF ≈ 1.50. This super
Poissonian behaviour reflects the presence of sporadic burst-like activation events in the detector, consistent
with electronic noise spikes. The strong positive skewness (≈ 1.47) and moderate heavy-tail exponent
(MMeeeeee(qq) = 0.10) further confirm intermittent fluctuations and non-Gaussian statistics in the dark counts.

Conversely, the attenuated laser series displays ⟨mm⟩ ≈ 52.9 counts/s and σσ ≈ 7.8, yielding a Fano factor
only slightly above unity (FF ≈ 1.15), as expected for a nearly coherent light source under strong attenuation.
The distribution is nearly symmetric and only weakly heavy-tailed (MMeeeeee(qq) = 0.11), consistent with quasi
Poissonian photon statistics. The small excess variance likely arises from residual instrumental noise and coupling fluctuations in the fiber-coupled delivery system. In full analogy with the analysis performed on the surrogate series, we now apply DEA, with and without stripes, to the experimental dark-noise and attenuated-laser time series. This allows us to directly compare the scaling properties of real photon-counting data with the benchmark behaviors established in the controlled
synthetic cases. In table 6 the scaling factor ηη is reported for DEA with and without stripes.
ηη (no-str) ηη [Δss = 3 ∙ σσ]
dark 0.51±0.01 0.52±0.01
laser 0.50±0.02 0.51±0.02
Table 6. Scaling exponents ηη obtained from DEA analysis of dark counts and attenuated laser emission, with
and without stripes (Δss = 3 ∙ σσ). Both datasets exhibit ηη ≈ 0.5, confirming Poisson-like statistics and absence
of temporal correlations.
The DEA results for both the dark counts and the attenuated laser emission confirm the expected
behavior of purely stochastic photon processes. In the absence of structured dynamics, both signals
yield scaling exponents consistent with the theoretical Poisson value, ηη ≈ 0.5. For the dark signal,
ηη = 0.51 ± 0.01 indicates that the apparent super-Poissonian dispersion observed in the raw statis
tics does not correspond to temporal correlations but rather reflects the intrinsic excess variance of
the detector noise. Similarly, the attenuated laser, expected to generate ideal shot noise, exhibits ηη =
0.50 ± 0.02, validating the photon-counting regime of the experimental setup.
Importantly, the agreement between the standard DEA and the striped formulation demonstrates
that the stripes procedure does not introduce artifacts when the signal lacks burst-like structure or
long-range dependence. The nearly identical scaling values, ηη(mmnn − ssttrr) ≈ ηη(ssttrrmmppeess), highlight
that no hidden intermittency or memory is present in either dataset, and confirm the method’s robust
ness in the canonical Poisson regime.
As expected, the attenuated laser signal exhibits Poisson statistics, with ηη ≈ 0.5 in both DEA config
urations. This behavior reflects the quantum shot-noise regime of coherent light: photon arrivals are
independent events with a constant emission probability per unit time, leading to equality between
variance and mean and the absence of temporal correlations [26,49]. In photon-counting experiments,
the second-order correlation at zero delay, gg(2)(0), characterizes the degree of photon arrival corre
lations. For stationary counting processes, a useful relation links gg(2)(0) to the Fano factor FF =
σσ2/⟨mm⟩
gg(2)(0) ≈ 1 + FF − 1
⟨mm⟩
For a Poisson process, FF = 1 and therefore gg(2)(0) = 1. Values gg(2)(0) > 1 indicate super-Pois
sonian statistics (photon bunching or excess noise), while gg(2)(0) < 1 reveals sub-Poissonian emis
sion (photon antibunching). Although gg(2)(0) is not directly measured here, the statistical results
obtained for the attenuated laser signal, namely ηη ≈ 0.5, near-unity Fano factor, and absence of

heavy-tailed fluctuations, are fully consistent with the shot-noise statistics of coherent light, for which
gg(2)(0) = 1. In this sense, the laser dataset behaves as an experimental realization of an ideal Poisson
process.
To further assess the statistical structure of the experimental time series we now apply the Rényi
entropy analysis, using both direct and symbolic estimators as in the surrogate-series study. This al
lows us to test whether the dark-noise and laser signals exhibit any deviation from the reference Pois
son behavior in terms of amplitude statistics or temporal patterning. Fig. 8 shows the Rényi entropy
curves for the dark counts and attenuated laser signals. The Rényi entropy of an ideal Poisson process
is also included for comparison.
Figure 8. Rényi entropy for dark counts and attenuated laser signals, compared with an ideal Poisson reference. Both datasets follow the Poisson trend, with a slight deviation for dark noise at negative α due to
super-Poissonian fluctuations. For the laser data, the symbolic alphabet size and sequence length were KKseq =
65 and LLseq = 2, respectively, while for the dark data they were KKseq = 22 and LLseq = 3.
Both the dark–count data and the attenuated-laser series closely follow the Rényi-entropy trend
of an ideal Poisson process, confirming the absence of structured temporal organization and the es
sentially memoryless nature of photon arrival statistics in both cases. The attenuated laser overlaps
the Poisson reference across the full α-range for both direct and symbolic estimators, as expected for
coherent light in the shot-noise regime. The dark signal remains similarly consistent with Poisson
behavior in the symbolic representation; however, the direct Rényi estimator exhibits a noticeable
deviation for negative α, where the entropy becomes sensitive to rare events and low-probability am
plitude bins. This effect does not indicate correlations but instead reflects the highly discrete and low
mean character of photomultiplier dark noise, with a large fraction of zero-count intervals and occa
sional electronic spikes that disproportionately influence the αα < 0 sector. The symbolic estimator
effectively regularizes this distributional roughness and recovers the expected near-Poisson trend,
corroborating that both experimental series behave as uncorrelated counting processes.
This behavior is fully consistent with the DEA results, where both dark and laser signals exhibited
the Poisson scaling exponent ηη ≈ 0.5 with and without stripes. Taken together, the Rényi and DEA
analyses confirm that neither dataset displays temporal memory nor anomalous scaling, reinforcing
their role as reliable Poissonian reference signals.
To complete the comparison between experimental photon–count data and the ideal Poisson
benchmark, we now examine the same dark-noise and attenuated-laser series using DFA and MFDFA.

While DEA and Rényi entropy respectively probe temporal scaling and the structure of amplitude
fluctuations, DFA provides a direct estimate of long-range correlation through the Hurst exponent,
and MFDFA extends this evaluation to possible multifractal organization. Applying these methods to
experimental datasets allows us to verify whether any residual dependence or intermittency exists
beyond the purely Poissonian behavior identified by the previous analyses. The results of MFDFA
analysis are reported in Fig.9
Figure 9. Multifractal spectra ff(αα) for the experimental dark-count series (light green), attenuated-laser emission (green), and a reference Poisson process (red). All three spectra collapse onto a narrow curve centered
at αα ≈ 0.50, with comparable spectral width and shape, indicating the absence of multifractality and confirm
ing Poisson-like temporal statistics for both experimental signals.
The multifractal spectra obtained from the experimental dark-count and attenuated-laser series
are nearly indistinguishable from that of a synthetic Poisson process. All three traces show a narrow
ff(αα) curve centered at αα ≈ 0.50, with a spectral width ΔΔαα of only a few percent. This indicates the
absence of significant multifractality and confirms that both dark noise and the attenuated laser emis
sion behave as nearly ideal Poisson point processes at all resolved scales. No broadening of the spec
trum or asymmetry, typical signatures of temporal intermittency or amplitude heterogeneity, is ob
served, in agreement with the Renyi and DEA results and with the shot-noise nature of coherent laser
light and PMT dark emission. The DFA/MFDFA indicators are consistent with Poisson-like dynam
ics. For the experimental series we obtain Δαα = 0.077 and Δh = 0.035 (dark values), and Δαα =
0.041 and Δh = 0.019 (laser values), with mean DFA Hurst exponents close to HH ≈ 0.5 in both
cases. As expected, a synthetic Poisson reference yields smaller multifractal widths than these values;
the slight broadening observed in the experimental data is compatible with instrumental noise and
residual count-rate fluctuations rather than genuine multifractality.

5.0. Conclusions
The present work has introduced and systematically compared four complementary analytical
frameworks, Distribution Entropy Analysis (DEA), Rényi entropy, Detrended Fluctuation Analysis
(DFA), and its multifractal extension (MFDFA), to assess their ability to detect and characterize non
Poissonian dynamics and long-range organization in photon counting time series. By benchmarking
the methods on well-controlled surrogate signals and subsequently applying them to experimental
photon-count data, we have established a coherent methodology for distinguishing trivial stochastic
processes from structured, self-organized emission dynamics such as those hypothesized in biological
ultra-weak photon emission.
Each method contributed unique information. DEA linked temporal scaling to the information
theoretic entropy growth, placing emphasis on temporal diffusion. Rényi entropy dissected probabil
ity structure across the full spectrum of fluctuations, with symbolic encoding providing sensitivity to
ordering patterns invisible to amplitude-based estimators. DFA isolated long-range correlations under
nonstationarity, while MFDFA quantified the diversity of scaling exponents. In addition, the analysis
of distribution tails and Fano statistics provided an independent check on fluctuation asymmetry and
dispersion properties, reinforcing the dynamical inferences drawn from entropy- and scaling-based
methods. Despite their different conceptual formulations, all indicators—including tail exponents
converged toward the same classification of surrogate dynamics, demonstrating robustness and meth
odological complementarity.
When applied to real photon-count data from the detection apparatus—dark noise and attenuated
coherent laser emission—the four techniques consistently identified Poisson-like behavior. Both
sources yielded HH ≈ 0.5, narrow multifractal spectra, and Rényi profiles close to the theoretical Pois
son reference, together with tail exponents and Fano factors consistent with uncorrelated emission
statistics. Minor deviations, particularly in the dark counts, likely stem from instrumental fluctuations
rather than intrinsic dynamics, confirming the reliability and sensitivity of the approach. The absence
of anomalous scaling signatures in these controlled tests establishes a crucial baseline for future bio
photon studies, ensuring that any departure from Poisson statistics observed in living systems cannot
be attributed to detector noise or trivial coherent input.
Taken together, these results demonstrate that the combined use of DEA, Rényi entropy, DFA,
MFDFA, and tail analysis constitutes a powerful and internally coherent toolkit for detecting subtle
signatures of self-organization, intermittency, and memory in photon emission. The approach is par
ticularly suited to the study of biological ultra-weak photon signals, where stochastic and dynamical
components coexist and where departures from equilibrium-like emission may reflect metabolic co
herence, adaptive control, or critical-like dynamics. The methodology established here thus provides
both a conceptual foundation and a practical reference framework for the quantitative exploration of
photonic coherence and complexity in living systems. Future work will extend this pipeline to bio
logical samples, with the goal of mapping how dynamical signatures evolve during physiological
transitions, stress responses, and macroscopic growth processes. Beyond mere statistical classifica
tion, this framework opens the possibility of linking biophoton emissions to functional biological
states, enabling rigorous tests of hypotheses concerning long-range cellular communication, coherent
biochemical organization, and quantum-like photonic processes in living matter. By integrating sta
tistical physics, information theory, and photon counting, this research program aims to clarify
whether biophoton emission encodes functional organizational principles and whether such photonic
signatures may serve as markers of emergent biological coherence.

Acknowledgment: The authors gratefully acknowledge I. Davoli, R. Francini, F. De Matteis, and A. Clozza for their indispensable contribution to the acquisition of the experimental data. We further thank E. Pace and C. Curceanu for insightful discussions and for their encouragement throughout the development and writing of this work.
References
1. Popp, F.A.; Gu, Q.; Li, K. H.; Biophoton Emission: Experimental Background and Theoret
ical Approaches. Mod. Phys. Lett. B 1994, 8, 1269-1296.
2. Van Wijk, R.; Light in Shaping Life: Biophotons in Biology and Medicine; In Boekenservice:
Almere; The Netherlands, 2014.
3. Mayburov, S.; Biophoton production and communications. Proc. of Int. Conf. on Nanotech
nology and Nanomaterials, MGOU Publishing, Moscow, 2009, 351-358.
4. Gurwitsch, A.G.; Die Natur des spezifischen Erregers der Zellteilung. Arch. Entw. Mech. Org.
1923, 100, 11-40.
5. Reiter, T.; Gabor, D.; Ultraviolette Strahlung und Zellteilung. Wiss. Verffentlichungen Aus
Dem Siemens-Konzern; In Springer; Berlin, Heidelberg, 1928, 184.
6. Colli, L.; Facchini, U.; Light Emission by Germinating Plants. Il Nuovo Cimento 1954, 12,
150-153.
7. Colli, L.; Facchini, U.; Guidotti, G.; Dugnani Lonati, R.; Orsenigo, M.; Sommariva, O.; Fur
ther Measurements on the Bioluminescence of the Seedlings. Experientia 1955, 11, 479-481.
623
8. Fels, D.; Cellular Communication through light. PLoS ONE 2009, 4, e5086.
9. Mayburov, S.N.; Photonic Communications in Biological Systems. J. Samara State Tech.
Univ. Ser. Phys. Math. Sci. 2011, 15, 260.
10. Kucera, O.; Cifra, M.; Cell-to-cell signaling through light: Just a ghost of chance? Cell
Comm. Signal. 2013, 11, 87.
11. Hunt von Herbing, I.; Tonello, L.; Benfatto, M.; Pease, A.; Grigolini, P.; Crucial Develop
ment: Criticality Is Important to Cell-to-Cell Communication and Information Transfer in
Living Systems. Entropy 2021, 23, 1141. 628
12. Beloussov, L.V.; Burlakov, A.B.; Louchinskaia, N.N.; Biophotonic Pattern of optical interac
tion between fish eggs and embryos. Indian J. Exp. Biol. 2003, 41, 424-430. 630
13. Volodyaev, I.; Beloussov, L.V.; Revisiting the mitogenetic effect of ultra-weak photon emis
sion. Front. Physiol. 2015, 6, 241.
14. Gallep, C.M.; Dos Santos, S.R.; Photon-count during germination of wheat (Triticum aes
tivum) in waste water sediment solution correlated with seedling growth. Seed Sci. Technol.
2007, 35, 607-614.
15. Tessaro, L.W.E.; Dotta, B.T.; Persinger, M.A.; Bacterial biophotons as non-local information
carriers: Species-specific spectral characteristics of a stress response. Microbiol. Open 2019,
8, e761. 635
16. Popp, F.A.; Cancer growth and its inhibition in terms of Coherence. Electromag. Biol. Med.
2009, 28, 53-60.
17. Benfatto, M.; Pace, E.; Curceanu, C.; Scordo,A.; Clozza, A.; Davoli, I.; Lucci, M.; Francini,
R.; De Matteis, F.; Grandi, M.; Tuladhar, R.; Grigolini, P.; Biophotons and Emergence of
Quantum Coherence—A Diffusion Entropy Analysis. Entropy 2021, 23, 554.

18. Allegrini, P.; Grigolini, P.; Hamilton, P.; Palatella, L.; Raffaelli, G.; Memory beyond memory
in heart heating, a sign of a healthy physiological condition. Phys. Rev. E 2002, 65, 041926.
19. Allegrini, P.; Benci, V.; Grigolini, P.; Hamilton, P.; Ignaccolo, M.; Menconi, G.; Palatella, L.;
Raffaelli, G.; Scafetta, N.;Virgilio, M.; et al., Compression and diffusion: A joint approach to
detect complexity. Chaos Solitons Fractals 2003, 15, 517-535.
20. Falconi, M.; Loreto, V.; Vulpiani, A.; Kolmogorov Legacy about Entropy. Springer: Ber
lin/Heidelberg, Germany, 2003, 85-105
21. Mandelbrot, B.B.; Wallis, J.R; Noah, Joseph, and operational hydrology. Water Resour. Res.
1968, 4, 909-918. https://doi.org/10.1029/WR004i005p00909
22. Cifra, M., Brouder, C., Nerudová, M., & Kucera, O. (2015). Biophotons, coherence and pho
tocount statistics: a critical review. Journal of Luminescence, 2015, 154, 11-17. doi:
10.1016/j.jlumin.2015.03.020
23. Pónya, Z., & Somfalvi-Tóth, K. Modelling biophoton emission kinetics based on the initial
intensity value in Helianthus annuus plants exposed to different types of stress. Scientific
Reports, 2022, 12, 2317. doi:10.1038/s41598-022-06323-3
24. Nevoit, G., Bumblyte, I. A., Potyazhenko, M., Minser, O., & Vainoras, A. Modern biophysical
view of electromagnetic processes of the phenomenon of life of living biological systems as
a promising basis for the development of complex medicine: the role of biophotons 2023,
Journal of Complexity in Health Sciences, 6(1), 1-15. doi:10.21595/chs.2023.23443
25. Paolis, L.D.; Francini, R.; Davoli, I.; De Matteis, F.; Scordo, A.; Clozza, A.; Grandi, M.; Pace,
E.; Curceanu, C.; Grigolini, P.; Benfatto, M.; Biophotons: A Hard Problem. Appl. Sci. 2024,
14, 5496. https://doi.org/ 10.3390/app14135496
26. Loudon, R.; The Quantum Theory of Light. Oxford University Press, 2000. ISBN 978-0-19
850176-3 (Pbk).
27. Paolis, L.D.; Pace, E; Mazzanti, C.M.; Morelli, M.; Di Lorenzo, F.; Davoli, I.; Tonello, L.;
Curceanu, C.; A.; Clozza, A.; Grandi, M.; Grigolini, P.; Benfatto, M.; First experimental
measurements of biophotons from Astrocytes and Glioblastoma cell cultures.
ArXiv:2510.05792v1, 2025 https://doi.org/10.48550/arXiv.2510.05792
28. Scafetta, N.; Grigolini, P.; Scaling detection in time series: Diffusion Entropy analysis. Phys.
Rev. E 2002, 66, 036130.
29. Scafetta, N.; Hamilton, P.; Grigolini, P.; The thermodynamics of social processes: The teen
birth phenomenon. Fractals 2001, 9, 193-208.
30. Hurst, H.E. Long-term storage capacity of reservoirs. Trans. Am. Soc. Civ. Eng. 1951, 116,
770–799.
31. Grigolini, P. Emergence of biological complexity: Criticality, renewal and memory. Chaos
Solitons Fractals 2015, 81, 575–588.
32. 42. Vanni, F.; Lukovi’c, M.; Grigolini, P. Criticality and Transmission of Information in a
Swarm of Cooperative Units. Phys. Rev. Lett. 2011, 107, 078103.
33. Attanasi, A.; Cavagna, A.; Del Castello, L.; Giardina, I.; Melillo, S.; Parisi, L.; Pohl, O.;
Rossaro, B.; Shen, E.; Silvestri, E.; et al. Finite-Size Scaling as a Way to Probe Near-Criti
cality in Natural Swarms. Phys. Rev. Lett. 2014, 113, 238102.
34. Culbreth, G.; West, B.J.; Grigolini, P. Entropic Approach to the Detection of Crucial Events.
Entropy 2019, 21, 178.
35. Rényi, A. (1961). On measures of entropy and information. In Proceedings of the 4th Berke
ley Symposium on Mathematics, Statistics and Probability, Vol. 1, pp. 547–561.

36. Jizba, P., & Arimitsu, T. (2004). The world according to Rényi: thermodynamics of mul
tifractal systems. Annals of Physics, 312(1), 17–59.
37. Bandt, C., & Pompe, B. (2002). Permutation entropy: a natural complexity measure for time
series. Physical Review Letters, 88(17), 174102.
38. Zunino, L., Soriano, M. C., & Rosso, O. A. (2012). Distinguishing chaotic and stochastic
dynamics from time series by using a multiscale symbolic approach. Physical Review E,
86(4), 046210.
39. Peng, C.-K., Buldyrev, S. V., Havlin, S., Simons, M., Stanley, H. E., & Goldberger, A. L. (1994). Mosaic organization of DNA nucleotides. Physical Review E, 49, 1685–1689. 40. Hardstone, R., Poil, S.-S., Schalk, G., Stam, C. J., Daffertshofer, A., & Van Beek, P. L. (2012). Detrended fluctuation analysis: A scale-free view on neuronal oscillations. Frontiers in Physiology, 3, 450. 41. Kantelhardt, J. W., Zschiegner, S. A., Koscielny-Bunde, E., Havlin, S., Bunde, A., & Stanley,
H. E. (2002). Multifractal detrended fluctuation analysis of nonstationary time series. Phys
ica A: Statistical Mechanics and its Applications, 316, 87–114.
42. Allegrini, P., Menicucci, D., Bedini, R., Fronzoni, L., Gemignani, A., Paradisi, P., & Grigo
lini, P. (2009). Spontaneous brain activity as a source of ideal 1/f noise. Physical Review E,
80(6), 061914.
43. Costa, M., Goldberger, A. L., & Peng, C.-K. (2005). Multiscale entropy analysis of biological
signals. Physical Review Letters, 95(19), 198102.
44. Bohara, G., Bologna, M., Allegrini, P., & Grigolini, P. (2017). Crucial events, randomness,
and multifractality in heartbeats. Physical Review E, 96, 062216.
45. Davies, R. B., & Harte, D. S. (1987). Tests for Hurst effect. Biometrika, 74(1), 95–101.
46. Barunik, J. & Kristoufek, L. On Hurst exponent estimation under heavy‐tailed distributions.
Physica A 389, 3844–3855 (2010).
47. B. B. Mandelbrot & J. W. Van Ness, Fractional Brownian motions, fractional noises and applications, SIAM Review, 1968. 48. Bacry E, Delour J, Muzy JF. Multifractal random walk, Phys Rev E, 026103 (2001) doi: 10.1103/PhysRevE.64.026103. 49. L. Mandel and E. Wolf, Optical Coherence and Quantum Optics. Cambridge University Press, 1995.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:01.635Z
- **Text Length:** 103921 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 35 of 35
