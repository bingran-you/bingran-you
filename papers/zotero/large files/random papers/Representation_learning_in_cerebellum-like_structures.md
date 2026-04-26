# PDF Document: Rudelt et al. - 2025 - Representation learning in cerebellum-like structures.pdf

**File Path:** Rudelt et al. - 2025 - Representation learning in cerebellum-like structures.pdf

**Processed Date:** 2026-02-10T18:14:57.088Z

**File Size:** 1102.58 KB

**Total Pages:** 24

**Extracted Pages:** 24

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3689

**Title:** Representation learning in cerebellum-like structures

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Representation learning in cerebellum-like structures
Lucas Rudelt1∗, Fabian Mikulasch1,2†, Viola Priesemann1,3,4‡, Andr ́e Ferreira Castro5§
1 Max-Planck-Institute for Dynamics and Self-Organization, Go ̈ttingen, Germany
2 Friedrich Miescher Institute for Biomedical Research, Basel, Switzerland
3 Campus Institute for Dynamics of Biological Networks, Georg-August University, Go ̈ttingen, Germany
4 Bernstein Center for Computational Neuroscience (BCCN), Go ̈ttingen, Germany
5 School of Life Sciences, Technical University of Munich, Freising, Germany
Abstract
Animals use past experiences to adapt future behavior. To enable this rapid learning, vertebrates and invertebrates have evolved analogous neural structures like the vertebrate cerebellum or insect mushroom body. A defining feature of these circuits is a large expansion layer, which re-codes sensory inputs to improve pattern separation, a prerequisite to learn non-overlapping associations between relevant sensorimotor inputs and adaptive changes in behavior. However, classical models of associativ-
e learning treat expansion layers as static, assuming that associations are learned through plasticity at the output synapses. Here, we review emerging evidence that also highlights the importance of plasticity within the expansion layer for associative learning. Because the underlying plasticity mechanisms and principles of this representation learning are only emerging, we systematically compare experimental data from two well-studied circuits for expansion coding—the cerebellum granule layer an-
d the mushroom body calyx. The data indicate remarkably similar interneuron circuits, dendritic morphology and plasticity mechanisms between both systems that hint at more general principles for representation learning. Moreover, the data show strong overlap with recent theoretical advances that consider interneuron circuits and dendritic computations for representation learning. However, they also hint at an interesting interaction of stimulus-induced, non-associative and reinforced, associative -
mechanisms of plasticity that is not well understood in current theories of representation learning. Therefore, studying expansion layer plasticity will be important to elucidate the mechanisms and full potential of representation learning for behavioral adaptation.
A circuit for rapid learning of adaptive behavior
A central role of the brain is to adapt behavior based on relevant sensorimotor information. Some predictive cues, such as circadian rhythms, sexual pheromones, or ecological signals, are stable enough across evolution to be genetically hardwired [1–3]. However, for exploratory species and complex behaviors, the relevance of sensory information is dynamic and context-dependent, requiring flexible, experiencedependent learning mechanisms [4–7]. Across diverse taxa, animals need to associate sensory-
 stimuli with biologically meaningful outcomes—such as an electric shock or a motor error signal—often after a single trial [8–10]. Understanding how neural circuits support this rapid associative learning remains a central question in neuroscience.
Despite large differences in brain architecture, many distantly related taxa have converged on a common circuit motif for rapid associative learning. These so called cerebellum-like structures—including the cerebellum itself and the insect mushroom body (MB), among others—transform sensory inputs through
∗lucas.rudelt@ds.mpg.de †fabian.mikulasch@ds.mpg.de ‡viola.priesemann@ds.mpg.de §andre.ferreira-castro@tum.de
1
arXiv:2511.10261v1 [q-bio.NC] 13 Nov 2025

feedforward expansion layers, where relatively few input fibers are recoded into large populations of principal neurons [11–17] (Figure 1). Classical theories, from Marr and Albus [18–20] to adaptive filtering frameworks [21–24], emphasized that such expansion enhances pattern separation [11–14, 25, 26] and supports associative learning by enabling downstream synapses to link stimuli with behavioral relevance signals [11, 27–29]. In this view, expansion layers were treated as static recoding devi-
ces, while plasticity was confined to output synapses where climbing fibers or dopaminergic neurons guide learning [30–34].
More recent work has gone further by demonstrating that the expansion layers themselves undergo experience-dependent plasticity, with expansion layer responses adapting across multiple timescales [3541]. These findings point to a new perspective in which expansion layers are not fixed encoders but dynamically adapt to their inputs. What remains unclear, however, are the functional principles by which such plasticity shapes input representations to support associative learning and adaptive behavior-
.
To address these questions, this review focuses on the cerebellum and the insect MB—two systems that provide uniquely tractable models for dissecting the mechanisms of representations learning in expansion layers. Both systems separate input representations from output stages, enabling precise analysis of how representations are formed and used downstream to adapt behavior [15, 17]. Furthermore, their structural simplicity, well-characterized computational function, and accessibility to both genet-
ic and physiological interrogation make them ideal substrates for uncovering principles of learning across brains. We highlight how cellular features such as dendritic integration and inhibitory feedback provide the substrate for efficient learning, synthesize evidence for plasticity within these layers, and relate it to theories of representation learning and predictive coding. Moreover, by relating plasticity to behavioral experiments and modeling studies, we identify common functional principle-
s of representation learning in expansion layers. Finally, we conclude with open questions and experimental predictions that connect cellular mechanisms to learning theory.
Analogous architecture and synapto-dendritic organization
To support adaptive learning and flexible behavior, both the cerebellum and the mushroom body (MB) implement an analogous circuit motif: an expansion coding architecture that transforms lower-dimensional input into sparse, high-dimensional representations [19, 20, 25, 46]. In both systems, this is achieved by a massive increase in the number of principal neurons at the input stage—granule cells (GrCs) in the cerebellum and Kenyon cells (KCs) in the MB—each receiving input from a small subset of af-
ferents, mossy fibers (MFs) and projection neurons (PNs), respectively (Figure 1A,B). Input connectivity in both systems is sparse and largely unstructured, with GrCs receiving input from on average ∼ 4 MFs and KCs from ∼ 7 PN boutons (in the adult fly) [15–17, 47]. Combined with threshold nonlinearities in GrCs and KCs, this supports a high-dimensional coding space [25]. These representational features have been shown to facilitate pattern separation, which is essential for forming distinct assoc-
iations at the convergent output stage, Purkinje cells in the cerebellum and output neurons (MBONs) in the MB [26, 48–52].
Inhibitory interneurons further shape the input representation. In the cerebellum, Golgi cells (GoCs) provide both feedforward and feedback inhibition to GrCs, while in the Drosophila MB, the anterior paired lateral (APL) neuron serves a similar function for KCs (Figure 1A,B). These inhibitory motifs ensure that principal cell responses are sparse and decorrelated [49, 53–59], they normalize responses [58], and control temporal response dynamics [36, 60–64]. This combination of expansion and inhib-
ition—illustrated abstractly in Figure 1C—is a hallmark of cerebellum-like architectures that has emerged across phyla [65].
Beyond their shared circuit logic, both the cerebellar granule cells and MB Kenyon cells possess strikingly similar dendritic morphologies. Both cell-type-specific morphologies have microglomerular structures, where clawed dendritic specializations enwrap the terminals of mossy fiber or projection neuron afferents within glial-lined microglomeruli, in which excitatory, inhibitory, and neuromodulatory inputs converge onto dendritic specializations of GrCs or KCs (Figure 1D) [13, 42, 61, 66–70]. The-
se microdomains allow for efficient synaptic transmission shaped by inhibitory or neuromodulatory inputs [42, 44, 61, 70, 71]. Moreover, the convergence of all these learning-relevant inputs at a synapse, as well as high concentrations of post-synaptic f-actin at the dendrites [42, 68, 72], make the microglumeruli ideal substrates for plasticity to support representation learning.
2

Fig 1. Analogous circuit motifs and dendritic morphology in cerebellum-like structures. (A) Cerebellum circuit as shown in [12]. In the cerebellum, mossy fibers convey inputs to granule cells in the granular layer. These cells generate a high-dimensional input representation, shaped by feedforward and feedback inhibition by Golgi cells. Outputs from the granular layer converge onto Purkinje cells that modulate behavior and adapt motor control. (B) In the mushroom body, these functions are impleme-
nted by projection neurons (input layer), Kenyon cells in the calyx (expansion layer), the APL in Drosophila (inhibitory interneuron), and mushroom body output neurons in the lobes. Circuit shown as in [12]. (C) Both systems thus implement an analogous circuit motif where inputs are re-coded in a divergent expansion layer of a much higher number of principal neurons, whose outputs again converge onto a much smaller number of output neurons. Here, climbing fibers in the cerebellum and neuromodulato-
ry inputs in the mushroom body convey reinforcement signals to drive associative learning. In addition, climbing fibers and neuromodulatory inputs can directly or indirectly affect responses and plasticity of principal or inhibitory neurons in the expansion layer, thus potentially enabling representation learning [42–45]. (D) Input synapses and principal dendrites in both systems form microglumeruli, where dendritic elaborations from many principal cells enwrap a single synaptic bouton. Microglume-
ruli are additionally innervated by inhibitory axons as well as neuromodulatory inputs, thus providing a structural unit for efficient synaptic transmission, localized computation and plasticity (main text).
3

Plasticity in expansion layers
The striking similarity in microglumerular structure between the cerebellum and MB motivates a closer examination of the synaptic, inhibitory, and neuromodulatory mechanisms that support plasticity in the expansion layer. In the following sections, we outline how stimulation-induced and reinforcement-dependent mechanisms modify excitatory and inhibitory connectivity in the cerebellar granule layer and mushroom body calyx. Together, these forms of plasticity reveal how expansion circuits flexibly a-
djust input strength to encode the salience, timing, and behavioral relevance of sensory signals.
Stimulation-induced potentiation of synaptic inputs
Stimulation-induced potentiation strengthens afferent synapses onto principal neurons following specific activation patterns. Long-term potentiation (LTP), by enhancing the efficacy of afferent inputs, can amplify salient activity patterns through increased response magnitude, reduced latency, and improved reliability [36]. In the cerebellum, extensive work has elucidated the conditions and mechanisms underlying this form of potentiation (see [40], for a comprehensive review), whereas in the mushr-
oom body (MB) calyx, stimulation-induced potentiation has only recently begun to be explored (see Table 1 for an overview of relevant studies).
In the cerebellum, LTP at mossy fiber–granule cell (MF–GrC) synapses requires the coincident occurrence of strong presynaptic activity and postsynaptic depolarization that together elevate intracellular Ca2+ levels in granule cells [73, 74]. This permissive condition can arise through several convergent mechanisms: strong mossy fiber firing [73–79], sustained postsynaptic depolarization or transient disinhibition via Golgi cell modulation [73, 75–78], consistent with in vivo activity patterns [80–-
83].
Beyond functional characterization, extensive work has delineated the molecular pathways underlying the induction and expression of LTP at MF–GrC synapses. Induction depends on the co-activation of postsynaptic metabotropic glutamate receptors (mGluRs) and N-methyl-D-aspartate receptors (NMDARs), along with engagement of protein kinase C (PKC) signaling, voltage-gated calcium channels (VGCCs), and mobilization of internal Ca2+stores [75, 76, 79, 84]. Moreover, nitric oxide (NO) signaling downstrea-
m of NMDAR activation is critical for the induction of high-frequency-induced LTP, acting as a retrograde messenger to promote presynaptic modifications [83, 85].
In line with this, under high-frequency stimulation, LTP expression is predominantly presynaptic, reflected in reduced excitatory postsynaptic potential (EPSP) variability and decreased paired-pulse ratio [77, 86]. Complementary postsynaptic contributions—such as enhanced NMDA receptor currents and increased excitability—have been also observed for long-term plasticity [73, 75, 79, 84]. Computational models suggest that presynaptic expression primarily shortens response latency and enhances reliab-
ility, whereas postsynaptic expression boosts spike output gain, in line with experimental observations [77]. Together, these mechanisms enable LTP to flexibly adjust multiple dimensions of granule cell encoding, allowing the circuit to adapt to salient input within cerebellar networks.
In contrast to the cerebellar granule layer, evidence for stimulation-induced potentiation in the mushroom body (MB) calyx is only beginning to emerge. A recent study in adult flies showed that repeated pairings of precisely timed input and postsynaptic activation lead to pronounced LTP of EPSPs from projection neurons to γ Kenyon cells, with effects appearing after approximately 10 minutes and lasting for over 60 minutes [44]. Although the detailed induction and expression mechanisms remain to be-
 fully characterized, this potentiation depends on the dopaminergic receptor Dop2R and postsynaptic calcium signaling, as blocking VGCCs abolishes the effect. Thus, similar calcium-dependent coincidence mechanisms may operate at both cerebellar and MB input stages, allowing expansion layers to strengthen salient inputs and enhance adaptive sensory representations.
Stimulation-induced depression of synaptic inputs
Alongside long-term potentiation, stimulation-induced long-term depression (LTD) reduces input efficacy for specific inputs of principal cells. In cerebellum, LTD has been found to weaken MF-GrC input strength
4

after specific patterns of MF stimulation and postsynaptic depolarization. By reducing release probability and altering short-term plasticity dynamics, LTD functionally opposes the effects of prior potentiation [74, 78], enabling the synapse to adjust its strength in either direction depending on the input activity. This provides a flexible substrate for encoding both potentiation and suppression of specific inputs.
The induction of LTD has been characterized at MF–GrC synapse. Induction protocols include short highfrequency stimulation [74], tetanic low-frequency stimulation [78], or an action potential that repeatedly precedes MF stimulation during short-term-dependent-plasticity (STDP) [79]. Mechanistically, LTD follows a BCM-like rule, in which intermediate postsynaptic Ca2+ levels favor depression, while low or high Ca2+ lead to no change or potentiation [74, 78]. Depending on the induction protocol, LTD-
 relies on NMDARs, mGluRs, and VGCCs, highlighting its sensitivity to both membrane potential and receptor activation [75, 78, 79].
Since postsynaptic depolarization determines whether LTD or LTP is induced, synaptic plasticity in principal cells is likely highly sensitive to dendritic inhibition. Consistent with this, in vivo facial stimulation in mice induces LTP of MF-GrC synapses under pharmaceutical blocking of GABAA receptors, whereas LTD prevails under unblocking of inhibition [82, 83]. Similarly, in cerebellar slices, it has been found that LTP is only found at a small spatial location where excitation exceeds inhibiti-
on, whereas LTD dominates in the surround where inhibition dominates [62, 87]. Finally, unblocking of inhibition has been found to reverse the timing dependence of STDP at the MF-GrC synapse [79]. These findings highlight the crucial role of inhibition in gating the direction of plasticity at MF–GrC synapses, thereby shaping plasticity in the cerebellar expansion layer.
A comparable bidirectional rule operates in the mushroom body. A recent STDP study in the Drosophila MB calyx reported stimulation-induced depression of PN-KC synapses that is consistent with observations in the cerebellum granule layer. In particular, PN-KC synapses undergo depression when the postsynaptic action potential (AP) precedes PN input [44]. Thus, as in the cerebellar granule layer, both LTD and LTP depend on the relative timing of presynaptic input and postsynaptic APs. However, the in-
duction window in the MB is substantially broader than in the cerebellum. Postsynaptic spikes occurring up to 40 ms (and potentially even more) before presynaptic input lead to LTD, while spikes following input by as much as 100 ms. This broader timing range may reflect the slower timescales of olfactory processing in the MB calyx.
Taken together, LTD is an essential component of a bidirectional modulation of inputs to expansion layers that potentially suppresses non-salient information and ensures non-redundant, sharply tuned representations.
Reinforced plasticity of principal cell excitation
Reinforced plasticity of principal cell excitation refers to the facilitation, or long-lasting synaptic changes, enabled by neuromodulatory signals that encode behavioral relevance. In the mushroom body (MB) calyx, such plasticity is typically induced after sensory experience paired with appetitive or aversive stimuli, thus selectively reinforcing neural pathways associated with behaviorally relevant cues. In the cerebellum granule layer, although generally less well explored, pharmacological appl-
ication of nicotine—a cholinergic agonist—has been shown to facilitate synaptic plasticity, demonstrating reinforcement-like modulation in the presence of neuromodulatory attention-like signals. Strikingly, although sources of neuromodulation differ greatly between both systems, experimental findings point towards shared mechanisms through which reinforcement enhances representations of behaviorally relevant inputs.
In the MB calyx of insects, reinforcement-driven plasticity has been demonstrated across species, including honey bees [88] and Drosophila [89], where pairing odor stimuli with appetitive or aversive outcomes selectively modifies Kenyon cell (KC) responsiveness. During appetitive learning, pairing an odor with sucrose for a few brief trials (five 30-s pairings) produces a robust increase in odor-evoked dendritic Ca2+ responses within at least 5–15 minutes in both species [88, 89], revealing a rapi-
d, physiological form of reinforcement. Repeated spaced training induces long-term appetitive memory associated with an increase in the number of microglomeruli responding to the conditioned odor and structural reorganization within these same synaptic complexes [41]. This coincides with faster decay of odor-evoked Ca2+ signals, reminiscent of enhanced synaptic depression that occurs during presynaptic long-term potentiation in the
5

cerebellum granule layer (see previous sections).
In contrast to appetitive reinforcement, aversive learning in Drosophila induces plasticity in the calyx mainly during long-term memory formation within 9–48 hours, in sequential increase in activity of different KC subtypes during consolidation [89–91]. However, similarly to appetitive learning, imaging individual somata in the calyx shows an increase in the number of responsive neurons to the conditioned odor [92]. Thus, the MB calyx exhibits both rapid physiological and slow structural reinforc-
ement mechanisms, organized across cell types and timescales to encode the behavioral relevance of experience.
Mechanistically, direct activation of neuromodulatory pathways in Drosophila reveals that reinforcement requires coincidence between sensory input and modulatory signals in the MB calyx. Pairing stimulation of dopaminergic neurons with odor presentation enhances KC responses, whereas unpaired activation fails to induce plasticity, establishing a cellular substrate for reinforcement learning [43, 44]. Because calcium signaling is crucial for stimulation-induced plasticity, reinforced plasticity lik-
ely arises through facilitation of Ca2+ transients both in bees and flies [93–95]. Both dopamine [96] and octopamine [97] evoke Ca2+ influx via VGCCs in Drosophila, yet only octopamine produces a synergistic increase when paired with cholinergic input [96]. Another key mechanism is cyclic adenosine monophosphate–protein kinase A (cAMP-PKA) activation [89, 98]. Notably, appetitive—but not aversive—learning increases cAMP levels in the calyx, and octopamine, but not dopamine, strongly elevates cAMP.-
 Both, the enhanced effect of octopamine on calcium and cAMP, are consistent with short-term plasticity being restricted to appetitive conditioning [89]. Together, these pathways link calcium and cAMP signaling to the selective reinforcement of behaviorally relevant inputs.
In cerebellum, although generally less explored, a similar reinforced plasticity as in the MB calyx has been observed through application of the neuromodulator nicotine. Both, in slice and in vivo, application of nicotine could shift the sign of plasticity from depression to potentiation via activation of α7 nicotinic acetylcholine receptors [45, 70]. These receptors can facilitate Ca2+-dependent plasticity through both, a direct calcium influx as well as depolarization of GrC dendrites [70], thus-
 facilitating further Ca2+ influx through VGCC and NMDARs. Moreover, if strongly activated, they might even on their own be sufficient to increase Ca2+ to a level that is typically reached through NMDA receptors. This is in line with the fact that reinforced plasticity even occurs when NMDARs are blocked [45]. Thus, similar to observations in calyx, nicotine facilitates stimulation-induced plasticity to enhance responses for relevant afferent inputs.
Concluding, neuromodulatory pathways reinforce short- and long-term plasticity in the calyx and granule layer by promoting depolarization and elevating intracellular Ca2+ and cAMP, highlighting shared mechanisms through which reinforcement enhances representations of behaviorally relevant inputs.
Plasticity of inhibitory interneurons
Plasticity extends beyond excitatory synapses onto principal cells to include inhibitory circuits in both the mushroom body calyx and the cerebellar granule layer (see [40] for a review of cerebellar plasticity). Because inhibitory interneurons integrate feedforward and feedback signals, changes at their synapses can reshape inhibitory responses and, consequently, sensory representations in expansion layers [59]. By potentiating inhibition for irrelevant inputs and promoting disinhibition for rele-
vant ones, inhibitory plasticity complements excitatory mechanisms to refine behaviorally meaningful coding.
In the cerebellum, plasticity of Golgi cells (GoCs) can adapt feedforward and feedback inhibition to patterns of input stimulation, as shown by synaptic changes at mossy fiber (MF)–GoC, or parallel fibers (PF)-GoC synapses in the cerebellum. In cerebellar slices, theta-burst stimulation induces both LTP and LTD at MF–GoC synapses, paralleling stimulation-induced plasticity at neighboring MF–granule cell connections [99]. However, the polarity of induction is reversed, as LTP occurs at hyperpolariz-
ed potentials and depends on slow L-type VGCCs, whereas LTD emerges at depolarized potentials through T-type channels, independent of NMDARs. Additionally, strong PF stimulation produces LTD at PF–GoC synapses. This reduces feedback inhibition, allowing sustained granule cell excitation when inputs are behaviorally relevant [100]. Finally, MF and PF inputs drive timing-dependent plasticity in Golgi Cells [101], where dendritic integration across apical and basal compartments governs bidirectional -
synaptic changes and enables flexible inhibitory adaptation. Thus, stimulation-induced plasticity dynamically tunes both feedforward and feedback inhibition in the cerebellum, complementing excitatory plasticity to
6

Fig 2. Plasticity improves representation of salient and behaviorally relevant inputs. (A) Stimulation-induced plasticity of excitatory or inhibitory synapses adapt input representations in the expansion layer (main text). Theories predict that inhibitory synapses undergo fast potentiation or depression to balance postsynaptic activation (1). For excitatory synapses, strong stimulation (Stimulus 1) induces long-term potentation (LTP) at dendrites with little inhibitory feedback and strong depolar-
ization (2), while LTD is induced at dendrites experiencing weaker stimulation (Stimulus 2) or stronger inhibition (3). (B) Reinforced plasticity occurs for coincident input activation and neuromodulatory signals by facilitation of LTP at principal cells (4), or LTD at interneurons (5). (C–F) Plasticity can adapt expansion layer responses to different stimuli to improve associative learning (main text). (C) A static network might yield highly overlapping representations for some inputs. (D) Inhibi-
tory plasticity can reduce the overlap by balancing redundant inputs. (E) Excitatory plasticity can sharpen the tuning of principal cells, enhance salient stimuli while suppressing weak or highly predictable ones. (F) Reinforced plasticity enhances behaviorally relevant stimuli to boost association strength and generalization (Box 1).
7

balance circuit output.
An important question is whether inhibitory interneurons also exhibit enhanced plasticity in the presence of reinforcement or relevance signals, and how those signals modulate the polarity of plasticity. Evidence suggests that interneuron responses are altered when sensory stimulation is paired with neuromodulatory input. In the cerebellum, suppression of Golgi cells by peripheral afferents decreases when these inputs coincide with climbing-fiber (CF) activation [102], possibly due to transient in-
hibition of Golgi firing following CF stimulation. Similarly, in the MB calyx, inhibitory odor responses are reduced when odors are paired with reward in honey bees [103] and in the inhibitory APL neuron of Drosophila [104]. Moreover, activating dopaminergic PPL2 neurons during odor presentation induces a long-term depression of APL responses via inhibitory Dop2R receptors [105], suggesting that reinforcement signals can bias inhibitory plasticity toward disinhibition of behaviorally relevant inpu-
ts.
Plastic changes may also occur at inhibitory synapses onto principal cells, as previously proposed [38]. Although direct evidence is still lacking across both systems, several findings in the insect MB calyx point toward this possibility after stimulation-induced plasticity. For instance, the depression of Kenyon cell responses in the honeybee calyx after stimulation resembles the suppression observed in the antennal lobe [106], where facilitation of inhibitory interneuron synapses causes habituat-
ion to a specific odor working as background supresser [107, 108]. Notably, the cholinergic transporter implicated in this antennal lobe plasticity is also expressed in the calyx [109], suggesting a shared mechanism. Such potentiation of inhibition could suppress responses to repeated, irrelevant stimuli, which remains to be tested explicitly in experiments. Interestingly, this targeted suppression could bind inhibitory responses to co-occurring inputs, which are then released by the aforementione-
d disinhibition through reinforcement signals. This speculative interpretation aligns with the observed recovery of KC responses to baseline after conditioning [88, 89], implying that inhibitory plasticity provides a complementary means of tuning representations in expansion coding circuits through the dynamic interplay of suppression and disinhibition.
Functional relevance of plasticity in expansion layers
Ample experimental evidence indicates that expansion layers in cerebellum-like structures are subject to plasticity (see the previous section). However, the functional contribution of these modifications to adaptive behavior, particularly, how they shape sensory representations to support associative learning remains an open question. Here, we propose two complementary roles for plasticity in expansion layers that are based on experimental evidence from both, the mushroom body and cerebellum, as w-
ell as recent modeling studies and theories of representation learning.
First, we propose that stimulation-induced plasticity, which occurs in the absence of explicit reinforcement, enables expansion layers to adapt to features of their inputs—thus improving future associative learning. Second, we propose that reinforced plasticity within expansion layers is complementary to associative learning at the output layer by encoding association strength and boosting generalization. In this view, we argue that plasticity in expansion layers and the output stage reflects a no-
rmative division of labor, where the former extracts salient input features, while the latter associates these features with specific adaptations in behavior.
Non-associative plasticity supports generalization and discrimination
In natural environments, animals must rapidly learn to adapt behavior from sparse reward associations to a broad array of unreinforced, yet behaviorally relevant stimuli. In particular, behaviorally equivalent input contexts should robustly elicit the same behavior, termed generalization, while different input contexts should not elicit the same behavior, termed discrimination. Both aspects are enhanced by so-called pattern separation in the expansion layer as a consequence of circuit design and i-
nhibitory feedback [12, 15, 25]. Here, argue that expansion layer plasticity also contribute to generalization and discrimination of inputs by transforming its representations.
In order to achieve good generalization, an efficient strategy in reinforcement learning is to first learn internal representations that capture the statistics of the environment, and to then form reward associations
8

Box 1: Formal theories of representation learning
Competitive Hebbian learning The core principle of many representation learning theories is to re-code (sensory) data into a more amenable form while preserving information [112, 113]. Importantly, these models can be understood as identifying the latent factors, or causes, of sensory data [112], which can improve behavioral learning [114]. A neural algorithm that is well suited to describe learning in MB and cerebellum, since it relies on the same neural circuit architecture, is based on the idea-
 of competitive Hebbian learning [115–118]. In these theories, neurons receive excitatory input from sensory neurons and compete via lateral inhibition to represent this input. It can be shown [118] that the appropriate connection from inhibitory neuron k to neuron j can be
learned via
∆W (inh)
jk ∝ r(enc)
k uj, (Inhibitory balance)
where r(enc)
k is the presynaptic firing rate and uj the postsynaptic membrane potential. This balancing plasticity increases inhibition specifically between neurons with similar tuning [119]. This can also be understood as a principle of predictive coding, where inhibitory connections learn to cancel predictable (i.e., redundant) sensory inputs [119, 120]. This aligns well with evidence of inverse inhibitory plasticity discussed before [99], and the fact that glumeruli with more excitatory synapses also recei-
ve more inhibitory synapses [15, 121]. The winning neurons then learn to recognize the current input pattern via Hebbian plasticity
∆W (inp)
ji ∝ (r(inp)
i − W (inp)
ji )r(enc)
j , (Hebbian learning)
where r(inp)
i are the firing rate of the input neurons and r(enc)
j of encoding neurons. This is a form of the classic Oja’s rule, which has been applied in many models before [122]. Ultimately, through the interplay of inhibition and excitatory plasticity, neurons learn to identify independent factors of the data [115]. Prediction error based learning Remarkably, principles of representation learning might also be able to explain the inhibition dependence of excitatory feed forward synapses. More precisely, most representation learning goal leads to plasticity -
rules for single synapses that require knowledge about the activity of all representation neurons with similar inputs, in order to achieve an efficient representation [116, 122, 123]. Glumeruli could facilitate this coordination, by integrating the required information and only letting synapses potentiate if they are not redundant with other synapses in the network. This can be formalized via the rule [122]
∆W (inp)
ji ∝ (r(inp)
i − Ii)r(enc)
j , (Error based learning)
where r(inp)
i and Ii = P
k W (inh)
ik r(enc)
k are the excitatory and inhibitory input to glumerulus i, respectively. In this plasticity rule, strong inhibition signals large redundancy in the population code for a particular glumerulus, and consequently induces LTD to reduce it. This principle matches well to the inhibition induced LTD discussed before [62], and thus could be a central mechanism for the network-wide coordination of plasticity in expansion coding circuits.
Learning behaviorally relevant representations Additionally to purely sensory based representation learning, it can be advantageous to prioritize representing behaviorally relevant signals [124, 125]. A very general formulation of a relevance modulated learning rule is given by
∆Wji = g(reward)f (r(inp), r(enc), W ), (Relevance gated plasticity)
where f is some function that implements unsupervised learning as before, and g is a gating function that, depending on the reward, decides whether stimuli are learned to be represented or not. The reward driven modulation of plasticity could be implemented either through neuromodulators [124], or top-down control of inhibitory interneurons targeting the glumeruli [126].
9

to these statistical features [114, 127]. This way, behavioral responses generalize to unseen stimuli that agree with the learned model of the environment, even if reward signals are very sparse. Expansion layers in cerebellum-like circuits are ideally positioned in the information processing hierarchy to support such representation learning. But through what cellular mechanisms could such adaptive changes arise?
Theoretically, learning input features can emerge from Hebbian and predictive learning [115, 118, 122]. These rules closely parallel experimentally observed stimulation-induced LTP and LTD of input synapses in granule cells and Kenyon cells (see Box 1 and Figure 2A). Consistent with this idea, a previous modelling study showed that Hebbian-like learning in the expansion layer decreases the error in subsequent associative learning tasks [25]. Moreover, experimentally constrained circuit models of t-
he granule layer showed that synaptic plasticity of mossy fiber inputs adapts spatio-temporal filtering properties of granule cells to features of their inputs (e.g., input frequency) [77, 87, 128], yielding fine-tuned filters that can be used for downstream learning in the molecular layer [22]. Together, these results suggest that stimulation-induced plasticity of input synapses in expansion layers can enable the learning of input features (Figure 2E), thereby improving the efficiency and general-
ization of subsequent associative learning.
In addition to variable inputs, cerebellum-like structures face the challenge that in natural environments many input features can be present in parallel, but only few are behaviorally relevant. To mitigate this, a key strategy is to suppress responses to nuisant background stimuli that have been previously experienced but did not coincide with any signal of behavioral relevance [129]. Such suppression, also termed habituation, is well described in the insect antennal lobe, the input stage of the -
MB calyx, after long stimulation with an odor, where it biases responses away from habituated and towards novel stimuli [106, 107]. An even more rapid suppression of responses has also been reported in the MB calyx after few stimulus repetitions in the honey bee [88], as well as after nicotine stimulation of cultured KCs [130] or ex-vivo recordings of Drosophila after electrical stimulation of the antennal lobe [131]. Importantly, this rapid suppression is not found at the level of projection neur-
ons [88], depends on rutaba, cAMP and calcium channels in KCs [130, 131] and can last several minutes up to hours, suggesting that plasticity in the expansion layer is a likely cause for this suppression. Suppression of responses after repeated stimulation has also been observed in the granule layer [36, 62, 74] as a consequence of long-term synaptic depression. Synaptic depression has been shown to contribute to the sharpening of granule cell tuning, thus improving pattern separation for overlapp-
ing inputs [87]. Therefore, plasticity in expansion layers might enable a rapid suppression of irrelevant background stimuli and overlapping inputs to improve discrimination of subsequently learned associations (Figure 2D,E).
In sum, non-associative, Hebbian-like plasticity and repetition-induced suppression could work together to enhance later associative learning. The former makes the circuit respond reliably to variable inputs, thereby improving generalization, while the latter suppresses responses to irrelevant stimuli and overlapping inputs, thus enhancing discrimination. However, this raises an apparent paradox: repeated exposure to a stimulus should both, increase reliability of responses that encode its feature-
s (e.g., through Hebbian potentiation), and weaken overall responses to this stimulus (suppression). Strikingly, recent developments in predictive representation learning provide a possible solution to this through a cooperation of inhibitory and excitatory plasticity [122]. Here, inhibition is rapidly potentiated to suppress predictable inputs, and then gates synaptic potentiation at principal cell dendrites to allow enhanced responses only for a very selective set of principal cells (Box 1 and F-
igure 2A,E). Notably, a realistic model of cerebellum plasticity has also shown that the gating of plasticity by inhibition and post-synaptic calcium leads to a specialization of granule cells to different input features [87]. Thus, a tight coordination of excitatory and inhibitory plasticity could be a mechanism that allows expansion layer plasticity to improve both, generalization and discrimination for better pattern separation and subsequent associative learning.
Reinforced plasticity enhances association strength and generalization
While classical models place reinforcement-driven plasticity at the output of cerebellum-like structures, evidence presented above suggests that the expansion layers themselves also undergo associative modification. Pairing a sensory stimulus with neuromodulatory activation changes sensory representations in both the mushroom body (MB) calyx [41, 44, 88–92, 105] and the cerebellar granule layer [45, 70]. This second, “input-level” stage of associative learning may not simply duplicate output plast-
icity but instead serve distinct and complementary functions for adaptive behavior. This is in line with recent experimental work
10

Box 2: Encoding of association strength in expansion layers
Originally, it was thought that mainly synapses to the output neurons undergo reinforced plasticity to form associations in cerebellum-like circuits. However, recent evidence suggest that also reinforced plasticity of expansion layer responses contributes to associative learning. Here, we elaborate that expansion layer plasticity can encode the association strength of a stimulus, which yields a division of labor that boosts flexibility and generalization of associative learning. Formally, the tota-
l behavioral output for a stimulus can be expressed as the product of expansionlayer activity, r(enc)(W (inp), r(inp)), and downstream synaptic weights, W (out):
r(out) = W (out) r(enc)(W (inp), r(inp)).
In this simplified formulation the output responses r(out) encode opposing behavioral modulation, such as approach and avoidance. Thus, while changes in output weights W (out) can invert the net behavioral output by differentially potentiating or depressing the different output neurons, expansion layer responses r(enc) modulate the strength of the associated behavioral output. Although this model is a vast simplification of the intricate dynamics at the output stage, it accounts for the fact that -
the transmission between a principal cell in the expansion layer and an output neuron is a product of response and synaptic weight. Importantly, while a fixed stimulus encoding requires substantial synaptic weight changes ∆W (out) to achieve an adaptive behavior, increasing responses for salient stimuli subsequently requires only small weight changes to achieve the same output. This has the following functional advantages:
• Flexible re- and reversal learning: Enhancing expansion layer responses to a stimulus over prolonged timescales (e.g., through long-term potentiation of input synapses) enables small weight changes ∆W (out) to rapidly restore strong adaptive behavior in re-learning or to reverse it during reversal learning.
• Suppression of learning for irrelevant, confounding stimuli: Strengthening inhibitory synapses or weakening excitatory inputs can reduce responses to irrelevant stimuli, preventing these signals from driving adaptive behavioral changes despite ongoing synaptic plasticity.
• Enhanced generalization: By enhancing expansion layer responses (e.g., through potentiation of input synapses or depression of inhibition) not only is the association strength increased, but also do similar inputs elicit similar responses [132], thus enhancing generalization for variable inputs.
Therefore, a separate encoding of association strength of a stimulus in the expansion layer serves complementary functions to downstream plasticity.
suggesting that associative learning in the MB calyx serves a separate encoding of association strength of a stimulus, independent of the valence or adaptive behavior that is associated through learning at the output stage [43]. Interestingly, incorporating a separate learning of the association strength of a stimulus is also a key element in models of human associative learning [133–135]. Here, we argue that a separate learning of association strength in the expansion layer is also a general prop-
erty of cerebellum-like structures (see Box 2 for a formal argument) and yields the following functional advantages.
First, encoding association strength in the expansion layer might serve as a complementary locus for long-term memory (LTM) and consolidation that preserves flexibility of future learning. This is because association strength of a stimulus can be stored for long-term in the expansion layer without affecting the flexibility to associate a different behavior or valence through learning at the output synapse (Box 2). Consistent with this idea, Drosophila studies show that Dop2R-dependent potentiation-
 at PN–KC synapses in the expansion layer is required for aversive long-term but not short-term memory [44], and that LTM formation induces input-specific microglomerular remodeling and enhanced KC reliability [41, 92]. In the cerebellum, long-term vestibulo-cerebellar learning similarly depends on NMDA receptor–mediated plasticity at mossy fiber–granule cell synapses [136, 137], and structural changes at mossy fiber-Golgi
11

cell connections accompany cued fear conditioning and long-term motor learning [110]. Together, these findings suggest that plasticity in expansion layers provides a stable substrate for consolidation across species, enabling adaptive behavior to persist over long timescales while retaining flexibility for new learning.
Second, encoding association strength in the expansion layer may enhance the generalization of learned associations (see Box 2). This is in line with modelling studies showing that strengthening input synapses in the expansion layer through neuromodulatory signals enhances generalization in olfactory learning [132] and reduces errors in a motor learning task [117]. However, this might also come at the cost of reduced discriminability [132], in line with experimental observations when stimulating o-
ctopamine release during olfactory learning in Drosophila [138]. Intuitively, learning association strength in the expansion layer should thus be more pronounced for adaptive behavior that should generalize well (e.g., appetitive learning) compared to adaptive behavior that requires high specificity (e.g., aversive learning). This is supported by work in Drosophila that indicates a stronger effect of (appetitive) octopaminergic neuromodulation on calcium and cAMP increase in the calyx as compared -
to (aversive) dopamine, whereas octopamine has a relatively weaker effect on cAMP elevation in KC axons [96, 97]. Moreover, response changes in Drosophila calyx have been observed for appetitive, but not aversive short-term memory [89], and memory traces in PN-KC synapses have been shown to be sufficient for appetitive but not for aversive memory [139]. Together, these results suggest a differential role of associative plasticity in expansion layers for appetitive and aversive learning, potentiall-
y through different requirements on generalization and specificity.
In sum, a separate encoding of association strength within the expansion layer may enhance both the flexibility and generalization of adaptive behavior. Moreover, these same properties make expansionlayer plasticity a strategic target for neuromodulators that convey salience and attention signals, such as acetylcholine or glutamate [140–142]. Increasing evidence indicates that such modulators facilitate potentiation of input synapses in the expansion layer [45, 70, 141, 142], a process we propose -
reinforces association strength and promotes generalization across related stimuli. In this view, neuromodulatordriven plasticity allows the expansion layer to prioritize salient and behaviorally relevant sensory features, adjusting representations independently of the specific adaptive behaviors implemented downstream.
Testable predictions for future experiments
Experimental evidence and theoretical considerations suggest that plasticity in expansion layers serves complementary roles to associative learning at the output stage. However, to clearly identify these roles, as well as to understand the underlying mechanisms, future experimental work is needed to test specific hypotheses about plasticity in the cerebellum granule layer and MB calyx. In the following, we thus lay out two testable hypotheses that are based on previous observations and theory to c-
larify the role and mechanisms of representation learning in expansion layers.
Experience-dependent reconfiguration of lateral inhibition to improve discrimination
A key theoretical prediction is that inhibitory circuits such as Golgi cells in cerebellum and the APL in the MB adapt their microglomerular outputs in an experience-dependent manner. How then are these subunits connected to the right principal cell dendrites to exert an optimal effect? Mechanistically, predictive learning suggests a simple rule: inhibitory synapses strengthen when their activation coincides with strong dendritic depolarization at principal cells—signaling unexpected input—and wea-
ken or remain unchanged when depolarization is weak (see Box 1). Such a rule would tune lateral inhibition to suppress predictable, redundant inputs while preserving novel inputs [118, 122]. From this, three complementary predictions and experiments can be formulated.
First, the most direct test is whether repeated stimulation alters the functional strength of GABAergic inhibition at microglomeruli. This can be evaluated by comparing dendritic responses of both systems principal cells with and without GABAergic blockade, as in cerebellar slice experiments [62]. The expectation is that repeated presentation of the same stimulus will yield a suppression of dendritic
12

responses largely attributable to inhibitory transmission, an effect that should vanish when inhibition is blocked.
Second, a mechanistic route to test this functional change is through NMDAR- and Ca2+-dependent induction cascades. As shown for inhibitory synapses in hippocampus, intermediate calcium influx via NMDARs can trigger the formation of new inhibitory synapses [143] or the potentiation of GABAergic receptors [144, 145]. If similar cascades operate in expansion layers, then pharmacological blockade of postsynaptic NMDARs during repeated stimulation should reduce inhibitory plasticity [74].
Third, inhibitory reconfiguration may manifest as changes in the innervation patterns of Golgi or APL axons at microglomeruli. Comparative connectomic analyses could reveal such ultrastructural reorganization, for instance by contrasting synaptic architectures before and after repeated stimulation.
Together, these predictions provide convergent functional, mechanistic, and structural tests of the hypothesis that inhibitory plasticity reconfigures lateral inhibition to suppress redundant inputs and enhance discrimination.
Reinforced plasticity enhances the association strength of behaviorally relevant stimuli
Reinforced plasticity in expansion layers could enhance the association strength of behaviorally relevant stimuli to support adaptive behavior. Accordingly, a key prediction is that expansion layer responses are selectively enhanced, and that these plastic changes persist over long timescales and thus contribute to subsequent behavioral adaptation.
While there is increasing evidence for these predictions in the mushroom body (see Section Reinforced plasticity of principal cell excitation), the cerebellar granular layer remains comparatively understudied in this respect. In particular, although it is known that acetylcholine can facilitate potentiation of mossy fiber (MF) synapses onto granule cells [45, 70], it remains open whether associative learning—mediated by climbing fibers (CF)—also leads to changes in granule cell responses. This cou-
ld be tested with in vivo recordings during motor learning or paired MF and CF activation to determine whether granule-layer responses depend on CF feedback. Another exciting possibility is that reinforcement signals reach the granule layer indirectly, through Golgi-cell disinhibition following CF or Purkinje cell activation [102, 146], or deep cerebellar nuclei projections to the input stage of the granule layer [147, 148]. Demonstrating such modulation would clarify whether layer-specific encodi-
ng of association strength and behavioral adaptation represents a conserved computational principle across cerebellum-like circuits.
Moreover, to obtain a better understanding for the behavioral relevance of reinforced plasticity in the expansion layer, more experiments are required that relate behavioral outcomes to plasticity induction in principal cells or interneurons. Here, a key prediction is that reinforced plasticity leads to an encoding of association strength in the expansion layer that persists for long timescales, and potentially even independently of subsequent learning at the output layer (see Box 2). This could b-
e tested during experiments that compare spontaneous recovery [149] or re-learning [150] between wild-type and knock-out mutants with impaired Kenyon cell or granule cell plasticity (e.g., targeting Dop2Rs in Drosophila Kenyon cells, or NMDARs in granule cells). If the prediction holds, enhanced re-learning or spontaneous recovery rates are expected for wild type due to intact expansion layer plasticity. Moreover, imaging of expansion layer populations during reversal learning should reveal stable-
 representations of conditioned cues, even as their associated behavior reverses at the output stage. Finally, plasticity in the expansion layer should enhance the acquisition of new stimulus contingencies, in line with the involvement of the cerebellum for reward-based reversal learning reversal in humans [151].
Testing these predictions would substantially improve our understanding of the role of reinforced expansion layer plasticity in cerebellum-like structures, and reveal potential cellular mechanisms underlying human and animal learning and adaptive behavior.
13

Concluding remarks
For decades, expansion layers such as the cerebellar granule layer and the insect mushroom body calyx have been viewed as static substrates for pattern separation—structures that orthogonalize sensory inputs to minimize interference during downstream associative learning [19, 20]. Accumulating evidence shows that these layers are plastic, integrating Hebbian spike-timing–dependent and reinforcement-driven mechanisms (Tables 1-5) to refine sensory representations before associative learning occurs.-
 This shift reframes expansion layers as active sites of representational learning where saliency and behavioral relevance are encoded upstream of output layers, thus challenging classical assumptions that restrict learning to downstream synapses (see Box 2).
Moving forward, it will be key to determine how diverse plasticity processes interact during learning to balance discrimination, generalization and behavioral relevance. Here, a close interaction between experiments and theoretical approaches that integrate expansion-layer plasticity into normative frameworks of predictive coding and reinforcement learning (see Box 1) could yield a better functional understanding, guide future experiments and extend insights across diverse neural systems. Finally,-
 understanding the principles of representation learning in cerebellum-like structures could bridge biological and artificial intelligence, revealing how neural networks achieve rapid learning for adaptive behavior.
Acknowledgments
L.R., F.M. and V.P. received support by the Max Planck Society. L.R. was funded by the German Research Foundation (DFG) as part of the SPP 2205 (project number 430157073) and via the SFB 1286 - “Quantitative Synaptology”. V.P. received support from the SFB 1528 - “Cognition of Interaction”. A.F.C. was funded by a Daimler Benz foundation grant and by a German Research Foundation (DFG) Walter Benjamin (award number FE 2462/1-1). The funders had no role in study design, data collection and analysis, -
decision to publish, or preparation of the manuscript.
References
[1] Ravi Allada et al. “A mutant Drosophila homolog of mammalian Clock disrupts circadian rhythms and transcription of period and timeless”. In: Cell 93.5 (1998).
[2] Thomas Blankers et al. “Sex pheromone signal and stability covary with fitness”. In: Royal Society open science 8.6 (2021).
[3] Thaddeus A Bargiello et al. “Restoration of circadian behavioural rhythms by gene transfer in Drosophila”. In: Nature 312.5996 (1984).
[4] James B Heald et al. “The computational and neural bases of context-dependent learning”. In: Annual Review of Neuroscience 46.1 (2023).
[5] Hironori Kumano et al. “Context-dependent accumulation of sensory evidence in the parietal cortex underlies flexible task switching”. In: Journal of Neuroscience 36.48 (2016).
[6] Daniel Birman and Justin L Gardner. “A flexible readout mechanism of human sensory representations”. In: Nature communications 10.1 (2019).
[7] Margarida Sousa et al. “A multidimensional distributional map of future reward in dopamine neurons”. In: Nature (2025).
[8] Martin Hammer. “An identified neuron mediates the unconditioned stimulus in associative olfactory learning in honeybees”. In: Nature 366.6450 (1993).
[9] Martin Hammer and Randolf Menzel. “Learning and memory in the honeybee”. In: Journal of Neuroscience 15.3 (1995).
[10] Elisabeth Adam et al. “Fast Learners: One Trial Olfactory Learning in Insects”. In: Frontiers in Ecology and Evolution 10.April (2022).
14

[11] John C Eccles et al. The cerebellum as a neuronal machine. Springer Science & Business Media, 1967.
[12] N Alex Cayco-Gajic and R Angus Silver. “Re-evaluating circuit mechanisms underlying pattern separation”. In: Neuron 101.4 (2019).
[13] Nicholas J Strausfeld. “Organization of the honey bee mushroom body: representation of the calyx within the vertical and gamma lobes”. In: Journal of Comparative Neurology 450.1 (2002).
[14] Yoshinori Aso et al. “The neuronal architecture of the mushroom body provides a logic for associative learning”. In: elife 3 (2014).
[15] Katharina Eichler et al. “The complete connectome of a learning and memory centre in an insect brain”. In: Nature 548.7666 (2017).
[16] Sven Dorkenwald et al. “Neuronal wiring diagram of an adult brain”. In: Nature 634.8032 (2024).
[17] Tri M Nguyen et al. “Structured cerebellar connectivity supports resilient pattern separation”. In: Nature 613.7944 (2023).
[18] Frank Rosenblatt. “The perceptron: a probabilistic model for information storage and organization in the brain.” In: Psychological review 65.6 (1958).
[19] David Marr. “A theory of cerebellar cortex”. In: The Journal of Physiology 202.2 (1969).
[20] James S Albus. “A theory of cerebellar function”. In: Mathematical biosciences 10.1-2 (1971).
[21] Masao Ito. “Neurophysiological aspects of the cerebellar motor control system”. In: International journal of neurology 7 (1970).
[22] Masahiko Fujita. “Adaptive filter model of the cerebellum”. In: Biological cybernetics 45.3 (1982).
[23] Paul Dean et al. “The cerebellar microcircuit as an adaptive filter: experimental and computational evidence”. In: Nature Reviews Neuroscience 11.1 (2010).
[24] Terrence J Sejnowski. “Storing covariance with nonlinearly interacting neurons”. In: Journal of mathematical biology 4.4 (1977).
[25] Ashok Litwin-Kumar et al. “Optimal degrees of synaptic connectivity”. In: Neuron 93.5 (2017).
[26] N Alex Cayco-Gajic et al. “Sparse synaptic connectivity is required for decorrelation and pattern separation in feedforward networks”. In: Nature communications 8.1 (2017).
[27] David Owald et al. “Activity of defined mushroom body output neurons underlies learned olfactory behavior in Drosophila”. In: Neuron 86.2 (2015).
[28] Emna Bouzaiane et al. “Two independent mushroom body output circuits retrieve the six discrete components of Drosophila aversive memory”. In: Cell reports 11.8 (2015).
[29] Cansu Arican et al. “The mushroom body output encodes behavioral decision during sensory-motor transformation”. In: Current Biology 33.19 (2023).
[30] Masao Ito et al. “Climbing fibre induced depression of both mossy fibre responsiveness and glutamate sensitivity of cerebellar Purkinje cells”. In: The Journal of physiology 324.1 (1982).
[31] Masao Ito and Masanobu Kano. “Long-lasting depression of parallel fiber-Purkinje cell transmission induced by conjunctive stimulation of parallel fibers and climbing fibers in the cerebellar cortex”. In: Neuroscience letters 33.3 (1982).
[32] Young-Cho Kim et al. “D1 dopamine receptor dDA1 is required in the mushroom body neurons for aversive and appetitive learning in Drosophila”. In: Journal of Neuroscience 27.29 (2007).
[33] Hongtao Qin et al. “Gamma neurons mediate dopaminergic input during aversive olfactory memory formation in Drosophila”. In: Current biology 22.7 (2012).
[34] Raphael Cohn et al. “Coordinated and Compartmentalized Neuromodulation Shapes Sensory Processing in Drosophila”. In: Cell 163.7 (2015).
[35] Christian Hansel et al. “Beyond parallel fiber LTD: the diversity of synaptic and non-synaptic plasticity in the cerebellum”. In: Nature neuroscience 4.5 (2001).
[36] Egidio D’Angelo and Chris I De Zeeuw. “Timing and plasticity in the cerebellum: focus on the granular layer”. In: Trends in neurosciences 32.1 (2009).
15

[37] Malte C Kremer et al. “Structural long-term changes at mushroom body input synapses”. In: Current Biology 20.21 (2010).
[38] Zhenyu Gao et al. “Distributed synergistic plasticity and cerebellar learning”. In: Nature Reviews Neuroscience 13.9 (2012).
[39] Egidio D’Angelo et al. “Distributed circuit plasticity: new clues for the cerebellar mechanisms of learning”. In: The Cerebellum 15 (2016).
[40] Eleonora Pali et al. “Understanding Cerebellar Input Stage through Computational and Plasticity Rules”. In: Biology 13.6 (2024).
[41] Lothar Baltruschat et al. “Circuit reorganization in the Drosophila mushroom body calyx accompanies memory consolidation”. In: bioRxiv (2020).
[42] Florian Leiss et al. “Synaptic organization in the adult Drosophila mushroom body calyx”. In: Journal of Comparative Neurology 517.6 (2009).
[43] Tamara Boto et al. “Independent contributions of discrete dopaminergic circuits to cellular plasticity, memory strength, and valence in Drosophila”. In: Cell reports 27.7 (2019).
[44] Jingda Qiao et al. “Input-timing-dependent plasticity at incoming synapses of the mushroom body facilitates olfactory learning in Drosophila”. In: Current Biology (2022).
[45] Li-Xin Cao et al. “Nicotine Facilitates Facial Stimulation-Evoked Mossy Fiber-Granule Cell LongTerm Potentiation in vivo in Mice”. In: Frontiers in Cellular Neuroscience 16 (2022).
[46] M Ito and M Yoshida. “The cerebellar-evoked monosynaptic inhibition of Deiters’ neurones”. In: Experientia 20.9 (1964).
[47] Philipp Schlegel et al. “Whole-brain annotation and multi-connectome cell typing of Drosophila”. In: Nature 634.8032 (2024).
[48] R. A. A. Campbell et al. “Imaging a Population Code for Odor Identity in the Drosophila Mushroom Body”. In: Journal of Neuroscience 33.25 (2013).
[49] Andrew C Lin et al. “Sparse, decorrelated odor coding in the mushroom body enhances learned odor discrimination”. In: Nature neuroscience 17.4 (2014).
[50] James M. Jeanne and Rachel I. Wilson. “Convergence, Divergence, and Reconvergence in a Feedforward Network Improves Neural Speed and Accuracy”. In: Neuron 88.5 (2015).
[51] Keita Endo et al. “Synthesis of Conserved Odor Object Representations in a Random, DivergentConvergent Network”. In: Neuron 108.2 (2020).
[52] Reza Shadmehr. “Population coding in the cerebellum: a machine learning perspective”. In: Journal of Neurophysiology (2020).
[53] Gilles Laurent. “Olfactory network dynamics and the coding of multidimensional signals”. In: Nature reviews neuroscience 3.11 (2002).
[54] Simon J Mitchell and R Angus Silver. “Shunting inhibition modulates neuronal gain during synaptic excitation”. In: Neuron 38.3 (2003).
[55] Jonathan Mapelli et al. “High-pass filtering and dynamic gain regulation enhance vertical bursts transmission along the mossy fiber pathway of cerebellum”. In: Frontiers in cellular neuroscience 4 (2010).
[56] Maria Papadopoulou et al. “Normalization for sparse encoding of odors by a wide-field interneuron”. In: Science 332.6030 (2011).
[57] Mark Stopfer. “Central processing in the mushroom bodies”. In: Current opinion in insect science 6 (2014).
[58] Luigi Prisco et al. “The anterior paired lateral neuron normalizes odour-evoked activity in the Drosophila mushroom body calyx”. In: Elife 10 (2021).
[59] E. A. Fleming et al. “Local synaptic inhibition mediates cerebellar granule cell pattern separation and enables learned sensorimotor associations”. In: Nature Neuroscience 27.4 (2024).
[60] Daniela Gandolfi et al. “Theta-frequency resonance at the cerebellum input stage improves spike timing on the millisecond time-scale”. In: Frontiers in neural circuits 7 (2013).
16

[61] Roby T Kanichay and R Angus Silver. “Synaptic and cellular properties of the feedforward inhibitory circuit within the input layer of the cerebellar cortex”. In: Journal of Neuroscience 28.36 (2008).
[62] Jonathan Mapelli and Egidio D’Angelo. “The spatial organization of long-term synaptic plasticity at the input stage of cerebellum”. In: Journal of Neuroscience 27.6 (2007).
[63] Egidio D‘Angelo. “The critical role of Golgi cells in regulating spatio-temporal integration and plasticity at the cerebellum input stage”. In: Frontiers in neuroscience 2 (2008).
[64] Jonathan Mapelli et al. “Combinatorial responses controlled by synaptic inhibition in the cerebellum granular layer”. In: Journal of neurophysiology 103.1 (2010).
[65] Mehrab N. Modi et al. “The Drosophila Mushroom Body: From Architecture to Algorithm in a Learning Circuit”. In: Annual Review of Neuroscience 43.1 (2020).
[66] Beulah Leitch and Gilles Laurent. “GABAergic synapses in the antennal lobe and mushroom body of the locust olfactory system”. In: Journal of comparative Neurology 372.4 (1996).
[67] Kouji Yasuyama et al. “Synaptic organization of the mushroom body calyx in Drosophila melanogaster”. In: Journal of Comparative Neurology 445.3 (2002).
[68] Ina Frambach et al. “F-actin at identified synapses in the mushroom body neuropil of the insect brain”. In: Journal of Comparative Neurology 475.3 (2004).
[69] Irina T Sinakevitch et al. “Apis mellifera octopamine receptor 1 (AmOA1) expression in antennal lobe networks of the honey bee (Apis mellifera) and fruit fly (Drosophila melanogaster)”. In: Frontiers in systems neuroscience 7 (2013).
[70] Francesca Prestori et al. “Gating of long-term potentiation by nicotinic acetylcholine receptors at the cerebellum input stage”. In: PloS one 8.5 (2013).
[71] David A DiGregorio et al. “Spillover of glutamate onto synaptic AMPA receptors enhances fast transmission at a cerebellar synapse”. In: Neuron 35.3 (2002).
[72] Francisco Capani et al. “Filamentous actin is concentrated in specific subpopulations of neuronal and glial structures in rat central nervous system”. In: Brain research 923.1-2 (2001).
[73] S Armano et al. “Long-term potentiation of intrinsic excitability at the mossy fiber–granule cell synapse of rat cerebellum”. In: Journal of Neuroscience 20.14 (2000).
[74] David Gall et al. “Intracellular calcium regulation by burst discharge determines bidirectional long-term synaptic plasticity at the cerebellum input stage”. In: Journal of Neuroscience 25.19 (2005).
[75] Egidio D’Angelo et al. “Evidence for NMDA and mGlu receptor-dependent long-term potentiation of mossy fiber–granule cell transmission in rat cerebellum”. In: Journal of neurophysiology 81.1 (1999).
[76] Arianna Maffei et al. “Presynaptic current changes at the mossy fiber–granule cell synapse of cerebellum during LTP”. In: Journal of neurophysiology 88.2 (2002).
[77] Thierry Nieus et al. “LTP regulates burst initiation and frequency at mossy fiber–granule cell synapses of rat cerebellum: experimental observations and theoretical predictions”. In: Journal of neurophysiology 95.2 (2006).
[78] Anna D’Errico et al. “Differential induction of bidirectional long-term changes in neurotransmitter release by frequency-coded patterns at the cerebellar input”. In: The Journal of physiology 587.24 (2009).
[79] Martina Sgritta et al. “Hebbian spike-timing dependent plasticity at the cerebellar input stage”. In: Journal of Neuroscience 37.11 (2017).
[80] Manabu Kase et al. “Discharges of Purkinje cells and mossy fibres in the cerebellar vermis of the monkey during saccadic eye movements and fixation”. In: The Journal of physiology 300.1 (1980).
[81] Guillaume P Dugu ́e et al. “Electrical coupling mediates tunable low-frequency oscillations and resonance in the cerebellar Golgi cell network”. In: Neuron 61.1 (2009).
[82] Leda Roggeri et al. “Tactile stimulation evokes long-term synaptic plasticity in the granular layer of cerebellum”. In: Journal of Neuroscience 28.25 (2008).
17

[83] Di Lu et al. “Facial stimulation induces long-term potentiation of mossy fiber-granule cell synaptic transmission via GluN2A-containing N-Methyl-D-aspartate receptor/nitric oxide cascade in the mouse cerebellum”. In: Frontiers in Cellular Neuroscience 16 (2022).
[84] Paola Rossi et al. “Differential long-lasting potentiation of the NMDA and non-NMDA synaptic currents induced by metabotropic and NMDA receptor coactivation in cerebellar granule cells”. In: European Journal of Neuroscience 8.6 (1996).
[85] Egidio D’Angelo et al. “Long-term potentiation of synaptic transmission at the mossy fiber–granule cell relay of cerebellum”. In: Progress in brain research 148 (2005).
[86] Elisabetta Sola et al. “Increased neurotransmitter release during long-term potentiation at mossy fibre–granule cell synapses in rat cerebellum”. In: The Journal of physiology 557.3 (2004).
[87] Stefano Casali et al. “Cellular-resolution mapping uncovers spatial adaptive filtering at the rat cerebellum input stage”. In: Communications biology 3.1 (2020).
[88] Paul Szyszka et al. “Associative and non-associative plasticity in Kenyon cells of the honeybee mushroom body”. In: Frontiers in systems neuroscience 2 (2008).
[89] Thierry Louis et al. “Cyclic AMP-dependent plasticity underlies rapid changes in odor coding associated with reward learning”. In: Proceedings of the National Academy of Sciences 115.3 (2018).
[90] Dinghui Yu et al. “Drosophila α/β mushroom body neurons form a branch-specific, long-term cellular memory trace after spaced olfactory conditioning”. In: Neuron 52.5 (2006).
[91] David-Benjamin G Akalal et al. “A late-phase, long-term memory trace forms in the γ neurons of Drosophila mushroom bodies after olfactory classical conditioning”. In: Journal of Neuroscience 30.49 (2010).
[92] Felipe Delestro et al. “In vivo large-scale analysis of Drosophila neuronal calcium traces by automated tracking of single somata”. In: Scientific Reports 10.1 (2020).
[93] Emmanuel Perisse et al. “Early calcium increase triggers the formation of olfactory long-term memory in honeybees”. In: BMC biology 7 (2009).
[94] Fernando Locatelli et al. “Focal and temporal release of glutamate in the mushroom bodies improves olfactory memory in Apis mellifera”. In: Journal of Neuroscience 25.50 (2005).
[95] Uli Mu ̈ller. “Prolonged activation of cAMP-dependent protein kinase during conditioning induces long-term memory in honeybees”. In: Neuron 27.1 (2000).
[96] Seth M Tomchik and Ronald L Davis. “Dynamics of learning-related cAMP signaling and stimulus integration in the Drosophila olfactory pathway”. In: Neuron 64.4 (2009).
[97] V Leyton et al. “Octopamine and dopamine differentially modulate the nicotine-induced calcium response in Drosophila mushroom body Kenyon cells”. In: Neuroscience Letters 560 (2014).
[98] Andre Fiala et al. “Reversible downregulation of protein kinase A during olfactory learning using antisense technique impairs long-term memory formation in the honeybee, Apis mellifera”. In: Journal of Neuroscience 19.22 (1999).
[99] F Locatelli et al. “Calcium channel-dependent induction of long-term synaptic plasticity at excitatory Golgi cell synapses of cerebellum”. In: Journal of Neuroscience 41.15 (2021).
[100] Quinten Robberechts et al. “Long-term depression at parallel fiber to Golgi cell synapses”. In: Journal of neurophysiology 104.6 (2010).
[101] Eleonora Pali et al. “Coincidence detection between apical and basal dendrites drives STDP in cerebellar Golgi cells”. In: Communications Biology 8.1 (2025).
[102] W Xu and SA Edgley. “Climbing fibre-dependent changes in Golgi cell responses to peripheral stimulation”. In: The Journal of Physiology 586.20 (2008).
[103] B Gr ̈unewald. “Physiological properties and response modulations of mushroom body feedback neurons during olfactory learning in the honeybee, Apis mellifera”. In: Journal of Comparative Physiology A 185 (1999).
[104] Xu Liu and Ronald L Davis. “The GABAergic anterior paired lateral neuron suppresses and is suppressed by olfactory learning”. In: Nature neuroscience 12.1 (2009).
18

[105] Mingmin Zhou et al. “Suppression of GABAergic neurons through D2-like receptor secures efficient conditioning in Drosophila aversive olfactory learning”. In: Proceedings of the National Academy of Sciences 116.11 (2019).
[106] Fernando F Locatelli et al. “Nonassociative plasticity alters competitive interactions among mixture components in early olfactory processing”. In: European Journal of Neuroscience 37.1 (2013).
[107] Sudeshna Das et al. “Plasticity of local GABAergic interneurons drives olfactory habituation”. In: Proceedings of the National Academy of Sciences 108.36 (2011).
[108] Yang Shen et al. “Habituation as a neural algorithm for online odor discrimination”. In: Proceedings of the National Academy of Sciences 117.22 (2020).
[109] Runa Hamid et al. “Choline Transporter regulates olfactory habituation via a neuronal triad of excitatory, inhibitory and mushroom body neurons”. In: PLOS Genetics 17.12 (2021). Ed. by John Ewer.
[110] Sarah Ruediger et al. “Learning-related feedforward inhibitory connectivity growth required for memory precision”. In: Nature 473.7348 (2011).
[111] Joachim Haenicke et al. “Neural correlates of odor learning in the presynaptic microglomerular circuitry in the honeybee mushroom body calyx”. In: eneuro 5.3 (2018).
[112] Bruno A Olshausen and David J Field. “Sparse coding with an overcomplete basis set: A strategy employed by V1?” In: Vision research 37.23 (1997).
[113] Te-Won Lee et al. “A unifying information-theoretic framework for independent component analysis”. In: Computers & Mathematics with Applications 39.11 (2000).
[114] Samuel J Gershman et al. “Discovering latent causes in reinforcement learning”. In: Current Opinion in Behavioral Sciences 5 (2015).
[115] Peter F ̈oldiak. “Forming sparse representations by local anti-Hebbian learning”. In: Biological cybernetics 64.2 (1990).
[116] Ralph Linsker. “A local learning rule that enables information maximization for arbitrary input distributions”. In: Neural Computation 9.8 (1997).
[117] Nicolas Schweighofer et al. “Unsupervised learning of granule cell sparse codes enhances cerebellar adaptive control”. In: Neuroscience 103.1 (2001).
[118] Wieland Brendel et al. “Learning to represent signals spike by spike”. In: PLoS computational biology 16.3 (2020).
[119] Sophie Den`eve and Christian K Machens. “Efficient codes and balanced networks”. In: Nature neuroscience 19.3 (2016).
[120] Fabian A Mikulasch et al. “Where is the error? Hierarchical predictive coding through dendritic error computation”. In: Trends in Neurosciences 46.1 (2023).
[121] Nada Y Abdelrahman et al. “Compensatory variability in network parameters enhances memory performance in the Drosophila mushroom body”. In: Proceedings of the National Academy of Sciences 118.49 (2021).
[122] Fabian A Mikulasch et al. “Local dendritic balance enables learning of efficient representations in networks of spiking neurons”. In: Proceedings of the National Academy of Sciences 118.50 (2021).
[123] Olivier J-MD Coenen et al. “Parallel fiber coding in the cerebellum for life-long learning”. In: Autonomous robots 11 (2001).
[124] Pieter R Roelfsema et al. “Perceptual learning rules based on reinforcers and attention”. In: Trends in cognitive sciences 14.2 (2010).
[125] Colin Bredenberg et al. “Learning efficient task-dependent representations with synaptic plasticity”. In: Advances in neural information processing systems 33 (2020).
[126] Julian Rossbroich and Friedemann Zenke. “Dis-inhibitory neuronal circuits can control the sign of synaptic plasticity”. In: Advances in Neural Information Processing Systems 36 (2023).
[127] Thomas M Moerland et al. “Model-based reinforcement learning: A survey”. In: Foundations and Trends® in Machine Learning 16.1 (2023).
19

[128] Shyam Diwakar et al. “Local field potential modeling predicts dense activation in cerebellar granule cells clusters under LTP and LTD control”. In: PloS one 6.7 (2011).
[129] Nicola ́s Pı ́rez et al. “Experience-dependent tuning of the olfactory system”. In: Current Opinion in Insect Science (2023).
[130] Jorge M Campusano et al. “nAChR-mediated calcium responses and plasticity in Drosophila Kenyon cells”. In: Developmental Neurobiology 67.11 (2007).
[131] Shoma Sato et al. “Synaptic depression induced by postsynaptic cAMP production in the Drosophila mushroom body calyx”. In: The Journal of Physiology 596.12 (2018).
[132] Fei Peng and Lars Chittka. “A simple computational model of the bee mushroom body can explain seemingly complex forms of olfactory learning and memory”. In: Current Biology 27.2 (2017).
[133] Nicholas J Mackintosh. “A theory of attention: variations in the associability of stimuli with reinforcement.” In: Psychological review 82.4 (1975).
[134] Mike E Le Pelley et al. “Attention and associative learning in humans: An integrative review.” In: Psychological bulletin 142.10 (2016).
[135] Angela Radulescu et al. “Holistic reinforcement learning: the role of structure and attention”. In: Trends in cognitive sciences 23.4 (2019).
[136] CE Andreescu et al. “NR2A subunit of the N-methyl D-aspartate receptors are required for potentiation at the mossy fiber to granule cell synapse and vestibulo-cerebellar motor learning”. In: Neuroscience 176 (2011).
[137] Patricia Seja et al. “Raising cytosolic Cl- in cerebellar granule cells affects their excitability and vestibulo-ocular learning”. In: The EMBO journal 31.5 (2012).
[138] J.Y. Hilary Wong et al. “Octopaminergic neurons have multiple targets in Drosophila larval mushroom body calyx and can modulate behavioral odor discrimination”. In: Learning & Memory 28.2 (2021).
[139] Andreas S Thum et al. “Multiple memory traces for olfactory reward learning in Drosophila”. In: Journal of Neuroscience 27.41 (2007).
[140] Nicolas Schweighofer et al. “Cerebellar aminergic neuromodulation: towards a functional understanding”. In: Brain Research Reviews 44.2-3 (2004).
[141] Kohei Ueno et al. “Long-term enhancement of synaptic transmission between antennal lobe and mushroom body in cultured Drosophila brain”. In: The Journal of physiology 591.1 (2013).
[142] Kohei Ueno et al. “Coincident postsynaptic activity gates presynaptic dopamine release to induce plasticity in Drosophila mushroom bodies”. In: Elife 6 (2017).
[143] Carmen E Flores et al. “Activity-dependent inhibitory synapse remodeling through gephyrin phosphorylation”. In: Proceedings of the National Academy of Sciences 112.1 (2015).
[144] Kurt C Marsden et al. “Selective translocation of Ca2+/calmodulin protein kinase IIα (CaMKIIα) to inhibitory synapses”. In: Proceedings of the National Academy of Sciences 107.47 (2010).
[145] Richard S Saliba et al. “Activity-dependent phosphorylation of GABAA receptors regulates receptor insertion and tonic current”. In: The EMBO journal 31.13 (2012).
[146] Lea Ankri et al. “A novel inhibitory nucleo-cortical circuit controls cerebellar Golgi cell activity”. In: Elife 4 (2015).
[147] Brenda D Houck and Abigail L Person. “Cerebellar loops: a review of the nucleocortical pathway”. In: The cerebellum 13.3 (2014).
[148] Brenda D Houck and Abigail L Person. “Cerebellar premotor output neurons collateralize to innervate the cerebellar cortex”. In: Journal of Comparative Neurology 523.15 (2015).
[149] Qi Yang et al. “Spontaneous recovery of reward memory through active forgetting of extinction memory”. In: Current Biology 33.5 (2023).
[150] Chih-Ming Wang et al. “Forgotten memory storage and retrieval in Drosophila”. In: Nature communications 14.1 (2023).
[151] Patrizia Thoma et al. “The cerebellum is involved in reward-based reversal learning”. In: The Cerebellum 7.3 (2008).
20

Table 1. Experimental observations of stimulation-induced potentiation of principal cells
Reference System Experiment Observation
Rossi et al. (1996) [84]
Cerebellum granule layer
Acute rat slice Simultaneous activation of mGluRs and NMDARs leads to potentiation of both NMDA and non-NMDA receptor-mediated synaptic transmission (especially slow component of NMDA transmission).
D’Angelo et al. (1999) [75]
Cerebellum granule layer
Acute rat slice High-frequency stimulation induces EPSC potentiation that depends on post-synaptic depolarization, Ca2+ and PKC, NMDAR and GluRs. Also observe NMDA current slow-down with potentiation.
Armano et al. (2000) [73]
Cerebellum granule layer
Acute rat slice Increased excitability after high-frequency stimulus through increased input resistance and decreased spike threshold (dependent on depolarization, NMDARs and were prevented by inhibitory synaptic activity). Weaker inputs required than for potentiation of synaptic efficacy.
Maffei et al. (2002) [76]
Cerebellum granule layer
Acute rat slice Presynaptic component of LTP after highfrequency stimulation (Ca2+, NMDAR and GluR dependent).
Sola et al. (2004) [86]
Cerebellum granule layer
Acute rat slice Increased neurotransmitter release can explain LTP at mossy fibre–granule cell synapses, as well as decreases in CV of EPSPs, failure of release and PPR. Strong evidence that LTP is expressed presynaptically.
Gall et al. (2005) [74]
Cerebellum granule layer
Acute rat slice Record Ca2+ dependence curve of LTP similar to BCM rule (as well as NMDAR and GLuR dependence).
Nieus et al. (2006) [77]
Cerebellum granule layer
Acute rat slice Potentiation through high-frequency stimulation, record and model presynaptic (increase of release) and postsynaptic contributions (conductance) that shift GC burst initiation and frequency, respectively. Increased AMPA and NMDA currents.
Roggeri et al. (2008) [82]
Cerebellum granule layer
In vivo, anesthetized rat
Predominantly MF-GrC LTP after 20 Hz facial whisker stimulation with inhibition blocked (gabazine), else LTD.
D’Errico et al. (2009) [78]
Cerebellum granule layer
Acute rat slice Frequency-dependence of LTP, find that Ca2+dependence underlies both duration and frequency-dependence of LTD/LTP.
Sgritta et al. (2017) [79]
Cerebellum granule layer
Acute rat slice EPSP-spike pairing at 6 Hz optimally induces STDP at MF-GC synapse in rats (LTP and LTD were confined to a ±25 ms time-window). STDP vanished > 50 Hz (only LTP ) or < 1 Hz (only LTD). Its sign is inverted by GABAA activaton.
Lu et al. (2022) [83]
Cerebellum granule layer
In vivo, anesthetized mice
MF-GrC LTP after 20 Hz facial stimulation and blocking of GABAA receptors via the GluN2Acontaining NMDA receptor/nitric oxide cascade in mice (presynaptic expression).
Qiao et al. (2022) [44]
MB calyx Drosophila, in vivo
Timing-dependent potentiation of PN-γ KC synapses after pre-post pairing, which depends on D2-like dopamine receptors.
21

Table 2. Experimental observations of stimulation-induced depression of principal cells
Reference System Experiment Observation
Gall et al. (2005) [74]
Cerebellum granule layer
Acute rat slices MF-GrC LTD after stimulation with short pulses (100 ms at 100 Hz). NMDAR dependent.
Mapelli and D’Angelo (2007) [62]
Cerebellum granule layer
Acute rat slices MF-GrC LTD after TBS, with LTD prevailing in regions with negative E-I balance.
Roggeri et al. (2008) [82]
Cerebellum granule layer
In vivo, anesthetized rat
LTP and LTD in after facial tactile and intracerebellar electrical stimulation. LTD prevailed in control conditions, whereas LTP prevailed during local application of gabazine (in line with [62]).
D’Errico et al. (2009) [78]
Cerebellum granule layer
Acute rat slices MF-GrC LTD for slow frequencies. Similar Ca2+-dependence underlies both duration and frequency-dependence of LTD/LTP, NMDARdependent.(cf. [74]). STP changes reverse under LTD (increase in PPR and CV, reduced reliability). NMDAR-dependent.
Sgritta et al. (2017) [79]
Cerebellum granule layer
Acute rat slice EPSP-spike pairing at 6 Hz optimally induces STDP at MF-GC synapse in rats (LTP and LTD were confined to a ±25 ms time-window). STDP vanished > 50 Hz (only LTP ) or < 1 Hz (only LTD). Its sign is inverted by GABAA activaton.
Casali et al. (2020) [87]
Cerebellum granule layer
Acute rat slice Ca2+ imaging confirms center-surround organization of LTP/LTD similar to [62].
Lu et al. (2022) [83]
Cerebellum granule layer
In vivo, anesthetized mice
MF-GrC LTD after 20 Hz facial stimulation, NMDAR-dependent.
Qiao et al. (2022) [44]
MB calyx Drosophila, in vivo
Timing-dependent potentiation of PN-γ KC synapses after pre-post pairing, which depends on D2-like dopamine receptors.
Table 3. Experimental observations of stimulation-induced plasticity at inhibitory interneurons
Reference System Experiment Observation
Robberechts et al. (2010) [100]
Cerebellum granule layer
acute rat slices LTD of PF to Golgi cell synapses (anti-Hebbian plasticity) after strong PF input
Ruediger et al. (2011) [110]
Cerebellum granule layer
mouse behav. experiments + morphological analyses
Learning-related growth of feedforward inhibition (MF to Golgi cells) in specific lobuli (could also be reinforced).
Locatelli et al. (2021) [99]
Cerebellum granule layer
Acute rat slices MF theta-burst stimulation (TBS) induced either LTP or LTD at MF-Golgi cell and GCGolgi cell synapses. LTD or LTP being favored when TBS induction occurred at depolarized or hyperpolarized potentials, respectively. Thus, voltage dependence of plasticity at MF-Golgi cell synapses was inverted w.r.t plasticity at MF-GC synapse.
Pali et al. (2025) [101]
Cerebellum granule layer
Acute rat slices Hebbian STDP at MF-GoC synapse under pairing of MF input and PF induced APs at the GoC at theta frequencies (4-6 Hz). STDP curve is inverted when unblocking GABAA receptors. NMDAR-dependent and most likely postsynaptic expression. Pairing MF with MF-induced AP induces LTD woth pre or post pairing, pairing MF with stimulated AP induces no plasticity.
22

Table 4. Overview of reinforced plasticity at principle cells.
Reference System Experiment Observation
Delestro et al. (2020) [92]
MB calyx In vivo, Drosophila
After long-term memory (LTM) formation number of responsive KC somata increases and single neuron signal become stable.
Baltruschat et al. (2020) [41]
MB calyx In vivo, Drosophila
After long-term memory formation number of reinforced microglumeruli increases.
Szyszka et al. (2008) [88]
MB calyx In vivo, honey bee
Increase of activity in specific KC dendrites after appetitive olfactory learning.
Qiao et al. (2022) [44]
MB calyx In vivo, Drosophila
PPL1 activation (dopaminergic feedback) facilitates stimulation-induced potentiation of PN-γ KC synapses.
Boto et al. (2019) [43]
MB calyx In vivo, Drosophila
Reinforcement of activity in KCs through PPL2 innervation, increases memory strength independent of valence
Louis et al. (2018) [89]
MB calyx In vivo, Drosophila
Elevating cAMP drives increases in KC odor responses (most strongly in γKCs. cAMP levels are increased by appetitive learning or activation of DANs. Appetitive, but not aversive learning, shows compensation of depression similar to Szyszka et al. (2008) [88].
Yu et al. (2006) [90]
MB calyx In vivo, Drosophila
Long-term increase in axonal Ca2+ in α/β-KCs after multiple, spaced odor-shock pairings.
Akalal et al. (2010) [91]
MB calyx In vivo, Drosophila
Long-term increase in axonal Ca2+ in γ-KCs after multiple, spaced odor-shock pairings.
Prestori et al. (2013) [70]
Cerebellum granule layer
Acute rat slice Activation of α7 nicotinic acetylcholine receptors (α7nAchRs) on MF terminals and GC dendrites enhances postsynaptic Ca2+ influx, which can turn LTD into LTP (NMDAR dependent?).
Cao et al. (2022) [45]
Cerebellum granule layer
In vivo, anesthetized mice
Facial 20 Hz stimulation combined with nicotine showed enhanced MF-GrC LTP via the α4β2 nAChR/NO signaling pathway (NMDA independent).
23

Table 5. Overview of reinforced plasticity at inhibitory interneurons.
Reference System Experiment Observation
Gr ̈unewald (1999) [103]
MB calyx In vivo, honey bee
GABAergic feedback neurons in the mushroom body show responses to odor and sucrose stimuli in intracellular recordings. After single paired presentation of odor and sucrose, interneurons show decreased odor responses briefly after conditioning, and increased responses for either odor or sucrose stimulation.
Liu and Davis (2009) [104]
MB calyx In vivo, Drosophila
APL responds to both, odor and shock stimuli. APL responses are suppressed by pairing an odor stimulus with 12 shocks, with conditioned depression being present already 30 sec, but stronger depression is observed at 5 min.
Haenicke et al. (2018) [111]
MB calyx honey bee Temporal profile of induced changes of odors in calyx after appetitive conditioning matches that of GABAergic PCT neurons.
Zhou et al. (2019) [105]
MB calyx In vivo, Dropophila
APL is depressed through direct PPL1 input and DD2Rs, yielding a disinhibition and also subsequent suppression after conditioning. Knockdown of either DD2R or its downstream molecules in the APL neurons impairs olfactory learning at the behavioral level.
Ruediger et al. (2011) [110]
Cerebellum granule layer
mouse behav. experiments + morphological analyses
Learning-related growth of feedforward inhibition (MF to Golgi cells) in specific lobuli (could also be reinforced).
Xu and Edgley (2008) [102]
Cerebellum granule layer
In vivo, anesthetized rat
Golgi cells are depressed by climbing fiber inputs (probably indirectly), providing reinforced disinhibition. Long-term changes of afferent responses in Golgi cells upon pairing CF inputs with afferent inputs (reduction of Golgi cell suppression by peripheral inputs).
24

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:57.088Z
- **Text Length:** 89710 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 24 of 24
