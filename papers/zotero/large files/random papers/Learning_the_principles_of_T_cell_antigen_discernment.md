# PDF Document: Bourassa et al. - 2025 - Learning the principles of T cell antigen discernment.pdf

**File Path:** Bourassa et al. - 2025 - Learning the principles of T cell antigen discernment.pdf

**Processed Date:** 2026-02-10T18:18:05.983Z

**File Size:** 2805.68 KB

**Total Pages:** 29

**Extracted Pages:** 29

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3654

**Title:** Learning the principles of T cell antigen discernment

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Learning the principles of T cell antigen discernment
Fran ̧cois X. P. Bourassa1, Sooraj Achar2,3, Gre ́goire Altan-Bonnet,2 and Paul Fran ̧cois4,5
Xxxx. Xxx. Xxx. Xxx. YYYY. AA:1–29
https://doi.org/10.1146/((please add article doi))
Copyright © YYYY by the author(s). All rights reserved
Keywords
Biological Physics, T cell, Kinetic Proofreading, Machine Learning, Antigen discernment
Abstract
T cells are central to the adaptive immune response, capable of detecting pathogenic antigens while ignoring healthy tissues with remarkable specificity and sensitivity. Quantitatively understanding how T cell receptors (TCRs) discriminate among antigens requires biophysical models and theoretical analysis of signaling networks. Here, we review current theoretical frameworks of antigen recognition in the context of modern experimental and computational advances. Antigen potency spans a continuum a-
nd exhibits nonlinear effects within complex mixtures, challenging discrete classification and simple thresholdbased models. This complexity motivates the development of models such as adaptive kinetic proofreading, which integrate both activating and inhibitory signals. Advances in high-throughput technologies now generate large-scale, quantitative datasets, enabling the refinement of such models through statistical and machine learning approaches. This convergence of theory, data, and computatio-
n promises deeper insights into immune decision-making and opens new avenues for rational immunotherapy design.
1
arXiv:2511.18626v1 [q-bio.MN] 23 Nov 2025

1 Joseph Henry Laboratories of Physics, Princeton University, Princeton, NJ, USA, 08544 2 Immunodynamics Group, Laboratory of Integrative Cancer Immunology, Center for Cancer Research, National Cancer Institute, Bethesda, MD, USA 3 Kennedy Institute of Rheumatology, Nuffield Department of Orthopaedics, Rheumatology and Musculoskeletal Sciences, University of Oxford, Oxford, UK 4 D ́epartement de Biochimie et Me ́decine Mole ́culaire, Universite ́ de Montre ́al, Montr ́eal, QC, Canada; email: paul-
.francois@umontreal.ca 5 MILA Que ́bec
2 Bourassa et al.

Contents
1. The biophysics of ligand discernment by T cells. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 1.1. A few hard facts about antigen discernment by T cells. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 1.2. Is there a structural explanation for ligand discernment? . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 1.3. The combin-
atorial complexity of phosphorylation patterns. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 2. Theory of TCR discernment . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9 2.1. Life time dogma and kinetic proofreading(s) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9 2.2.-
 Adaptive kinetic proofreading (AKPR) for T cell recognition. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11 2.3. Antagonism: a ’dog in the manger’ effect . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 13 3. Revisiting antigen discernment in the age of large datasets and artificial intelligence. . . . . . . . . . . . . . . . . . . . . . 16 3.1. Accelerating the study of T cell activat-
ion using high-throughput experiments and modeling. . . . . . . . 16 3.2. Defining and monitoring antigen encoding. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17 3.3. Revisiting the significance of the multiplicity of phosphorylation in the TCR signalosome. . . . . . . . . . . . 17 3.4. Unifying principles of antagonism. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . -
. . . . . . . . . . . . . . . . . . . 18 4. Future problems in ligand discernment . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20 4.1. Self, the dark matter for T cell ligand discernment . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20 4.2. Antigen mixtures and vaccine design . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . -
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 21 4.3. A theory for adversarial immune strategies . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 22 4.4. The immune system as a playground for systems biophysics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 22
Introduction.
The immune system is in charge of defending the organism against external pathogens, or internal threats (such as cancer), while promoting homeostasis and repair for healthy tissues (89). Understanding these differential functions remains a challenge, but decades of research have delineated how immune functions are highly organized, multilayered, and reactive over time scales ranging from seconds to decades (71, 72). Consequently, one can conceptualize the immune system as a ’liquid brain’ (104), -
and reframe the quest for understanding immunology as a theoretical problem in biological decision-making. In the same way that neurons are the fundamental units of the brain, T lymphocytes are the fundamental units of immune signal processing. T cells are generated via a complex thymic process that randomizes and selects varied T cell receptors (TCR), distinct for each individual T cell (120, 14, 81, 25). Within an organism, there is a large diversity of TCRs, such that T cells can ’cover’ billio-
ns of possible immune challenges (21, 68, 79, 99, 70). When T cells are activated, an immune response is triggered, possibly leading to an organismal response over days and even years (with the establishment of immune memory) (74, 58, 103). Understanding immune responses starts with understanding the precise computation performed by those first responders (48): returning to the analogy with neuroscience (and machine learning), can we build and model an immune ’perceptron’ that translates molecular-
 inputs into systems-level responses? It is generally assumed that the initial T cell computation relates to a fundamental concept of immunology known as self/non-self discrimination (59). TCRs interact with presented peptides (peptide-MHC ligands), and based on those interactions, T cells can be activated (by nonself) or not activated (by self). However, it is becoming increasingly clear that self/non-self classification presents multiple issues (90) : it is possibly tautological (non-self trigge-
rs immune response by definition) and (too) binary – we will argue that
www.annualreviews.org • Learning the principles of T cell antigen discernment 3

there are indeed many more categories. Recent theoretical works have further suggested that fuzziness is inherent to antigen discrimination, as self and nonself sequences appear statistically similar (73), and more dynamical effects might be at play (91). For these reasons, in this review, we suggest renaming the self/non-self discrimination capabilities of T cells as ligand discernment, to reflect on T cells’ ability to make a smart and contextual decision about antigen immunogenicity. Indeed, a-
s detailed later in this review, the notion of antigen “discrimination” does not capture the continuous nature of T cells’ recognition of peptide-MHC ligands. While classical studies of T cell functions focused on discrete classes of antigen (self vs non-self (13), agonist vs antagonist (50), positively-selecting vs negatively-selecting ligands (19), etc.), we posit that a refined quantitative understanding of TCR signaling will better account for the subtleness of T cell functions. In the first p-
art of this review, we summarize the experimental facts about T cells’ ability to discern between ligands, in particular as it relates to the biophysics of interactions between the TCR and its ligands. In the second part, we present theoretical attempts at deriving a phenomenological model to account for all the hallmarks of TCR ligand discernment. In the third part, we review how recent advances in automation and machine learning allow us to better understand the biophysics of TCR activation, ope-
ning up new avenues of research in this area. Finally, we will discuss the way forward in developing predictive models and contributing to the field of vaccine and immunotherapy engineering.
1. The biophysics of ligand discernment by T cells.
In this section, we review the state of the field of TCR signaling (from structural considerations to cell signaling to biochemistry and first attempts at modeling in biological physics). Our goal is to emphasize how much of the molecular and immunological details are already known and cataloged; yet, it is the mechanism and function of antigen discernment by TCRs that remains mysterious, calling for more quantitative and theoretical understanding.
1.1. A few hard facts about antigen discernment by T cells.
As summarized in (5), there are three quantitative features of T cells one must keep under consideration. First, T cells are very fast in their ability to respond and to discern between agonist and non-agonist pMHC: experimentalists can detect phosphorylation of the TCR within seconds of pMHC engagement, macroscopic calcium influx and ERK phosphorylation come about within 10 seconds, and release of cytotoxic granules and inflammatory responses are measured within minutes. Second, T cells are very -
sensitive, with a single pMHC being sufficient to activate the TCR signaling cascade. Hence, T cells operate at the physical limit of biochemical detection, akin to single-photon counting in rod cells of the retina, as discussed by Bialek (8, 97). This observation was obtained with careful calibration of radiolabeled ligands in bulk (108), as well as more direct single cell imaging of TCR–pMHC interactions on the surface of cells (46, 45, 83). Third, T cells are very specific, with a single mutati-
on potentially converting a selfderived pMHC (that does not trigger immune responses) into a potent agonistic pMHC (that trigger T cells) (19, 122, 73). Of course, not all single amino acid mutations in the presented peptide alter pMHC potency to such dramatic extent: reduction in experimental
4 Bourassa et al.

costs now allows the systematic testing of all one-amino-acid substitutions in a given agonist peptide (123, 55), and the distribution of antigenic potencies are available for several TCR examples. This issue of specificity is critical for applications in the field of cancer immunotherapies, such as the development of bespoke vaccines. In this procedure, clinicians harvest tumors (through biopsies or tumor removal surgery), sequence the tumor transcriptome, model the antigenic landscape and prior-
itize potentially antigenic mutations (e.g. one mutation of the expressed genome that drives the production of oncogenic protein and the presentation of neoantigen). These mutations are then integrated in mRNA vaccines that are administered to patients to boost anti-tumor T cell response. Recent clinical trials have recorded very promising results in this direction (100, 10). In the context of this review, we would like to stress how the integration of multiple approaches (from clinical sampling t-
o sequencing, modeling and experimental testing) is required to deliver on the promise of cancer vaccines: at the core, it is the ability of T cells to specifically respond to cancer neoantigens while avoiding self tissues that would deliver the patient-specific eradication of tumors with minimal toxicity. At the same time, we want to emphasize how “hard” a problem T cells solve when discerning between ligands. Indeed, the sensitivity and speed of TCR triggering are impressive, but its truly disti-
nctive feature is the ability of T cells NOT to respond to non-agonist ligands (e.g. self-derived pMHC) even when those are presented in large quantities; for reference, a dendritic cell can be loaded with more than 3 × 107 self ligands and still not elicit any response (15) (50 pmol / million cells; upper bound, during inflammation, MHC class II). This distinguishes the TCR from other signal transduction cascades and presents a unique challenge for biophysicists.
Antigen discernment using a dynamic TCR signalosome.
The TCR signaling machinery comprises a large number of receptors and signaling molecules (from kinases to adapters and scaffolding molecules) that self-assemble when T cells engage a target cell (Figure 1). The core component is the TCRα,TCRβ heterodimer and its associated chains (two CD3ε, CD3δ and CD3γ, as well as two CD3ζ chains). These associated chains harbor, on their intracellular segments, tandem phosphorylation sites called immunoreceptor tyrosinebased activation motifs (ITAMs), which ar-
e short repeated amino acid sequences each containing two phosphorylatable tyrosines. Each ε, δ, and γ chain contains one ITAM, while each ζ – remarkably – has three, for a total of 10 ITAMs and thus 20 phosphorylatable tyrosines. Models of TCR signaling must accommodate a fundamental aspect of the TCR complex: the TCR itself has no cytoplasmic domains and cannot trigger the signaling cascade on its own; additionally, the TCR signaling complex does not have any signaling capability, as it depends -
on kinases (e.g. Lck, ZAP70) that get recruited (directly or via CD4/CD8 coreceptors) to phosphorylate ITAMs and to accrue additional adapters (e.g. LAT, Grb2/SOS) for further downstream signaling and gene regulation. Classical models of signal transduction in biological physics, such as the bacterial chemotaxis pathway, are relatively “simple” in their input/output relationship: the receptor binds one or a few small chemoattractant molecules with high specificity and relays changes in concentrati-
on to adjust the tumbling rate of the flagellum motor (8). In contrast, what the TCR signaling complex senses and what it relays in the cell is multifaceted: both quality,
www.annualreviews.org • Learning the principles of T cell antigen discernment 5

TCR + Self antigen
AB
Antigen TCR + Nonself antigen
MHC
β2M
TCR
CD3
C TCR +
Self antigen
TCR + Nonself antigen
TCR + No antigen
Response (RU)
Time (s)
[Antigen]
Response (RU)
Time (s)
Response (RU)
Time (s)
Response (RU)
Time (s)
[Antigen]
Response (RU)
Time (s)
Response (RU)
Time (s)
Response (RU)
Time (s)
[Antigen]
Response (RU)
Time (s)
Response (RU)
Time (s)
Antigen binding times
Functional output
Signaling molecule recruitment
0 25 50 75 100 Output (% Max)
Signaling (15min-3h) Transcription (1-24h) Cytokine (3-48h) Death (6h-7d) Proliferation (1-7d) 0 25 50 75 100 Output (% Max)
0 25 50 75 100 Output (% Max)
Figure 1
Overview of TCR structure and activation (A) Structure of a TCR interacting with Class I pMHC, the initial step for T cell activation (PDB structure 6UK2 from (22)). (B) Close-up and comparison of the presented peptides for anagonist neo-antigen (PDB: 6UK2) and its wild-type counterpart (PDB: 6UK4): note that, despite structural similarities, the neo-antigen pMHC is a 20-fold better binder to TCR compared to the self pMHC, and 200-fold more potent in activating T cells (22, Fig. 2A) (C) Sketch of -
the biophysical/functional characteristics of ligand discernment by TCR. We sketch 3 discrete categories of antigen (no antigen, self antigen, neo-antigen) that do not bind at all, or bind mildly and strongly respectively (top row), inducing increasing degrees of phosphorylation on the TCR and associated proteins (middle row) with different functional outputs (bottom row). Note that the graphs in (C) are cartoon illustrations rather than actual data.
quantity and stability of the peptide MHC antigens can be varied widely, and very diverse signaling responses get triggered by the TCR (namely, calcium influx, Erk, p38, JNK and MAPK phosphorylation, and NFκB phosphorylation, to name a few). Hence, it is the complex and combinatorial nature of the TCR signalosome that must spark immunologists’ and biophysicists’ interest, as it most likely accounts for the phenotypic richness of the signal transduction downstream. The collection of facts about the-
 TCR signalosome presented above provides a detailed molecular description, but it does not, on its own, reveal the principles underlying antigen discernment. Two main classes of explanations have been proposed: structural ones, which rely on conformational changes of the TCR to reflect antigen quality and quantity, and kinetic ones, in which TCR signaling dynamics process these antigenic properties. We now consider each hypothesis in turn.
1.2. Is there a structural explanation for ligand discernment?
There has been a legitimate search for a structural explanation for the outstanding capabilities of the TCR signalosome. Indeed, uncovering a conformational change in the TCR recognition domain associated with agonist pMHC engagement would explain several features of T cell function at once. Because of its molecular nature, a conformational change could take place within milliseconds, accounting for the speed of T cell activation; more
6 Bourassa et al.

over, single amino acid mutations in the MHC-presented peptides could be sufficient to drive large (specific) conformational differences in the engaged TCR (as demonstrated in the case of affinity maturation of antibodies against soluble antigens by B cells), and single peptide-MHC could be sufficient to activate the T cell response. However, structural insights would fail to explain many other experimental facts. First, TCR ligand discernment is highly tunable: the same set of ligands can act as-
 agonists, partial agonists, or non-agonists, depending on the stage of differentiation of T cells; ligands can go from being promiscuous, to sharply specific, to promiscuous again as T cells mature from thymocytes to na ̈ıve and then to memory phenotypes. Second, TCR ligand discernment operates along a continuum of antigenicity, rather than via the digital/all-or-none switch one would expect from a conformational change. Third, conformational changes alone can hardly account for thymic selection,-
 during which the same TCR engages self ligands to drive positive selection, but limits its response to the very same ligands once released to the lymphoid organs and tissues (19). Most stringently, one would need to model how somatically-mutated TCRs would evolutionarily converge to endow T cells with the ligand discernment required by the immune system. Structural analysis of the rigidity of the TCR (unbound or bound to peptide-MHC ligands) seems to challenge the notion of peptide-specific confo-
rmation changes upon engagement. This rigidity has been pointed out by finding similar conformations in all structures derived from X-ray crystallography (around 120 TCR–pMHC pairs as of today) and from cryogenic electron tomography (which has higher fidelity in preserving structure) (107), (Figure 1A). Biophysical measurements by Zhu & colleagues uncovered the existence of catch bonds for TCR bound to pMHC i.e.,a universal strengthening of the bond upon binding (63, 16). Three experimental facts -
challenge the relevance of this catch bond formation. First, one can trigger T cell activation simply by crosslinking TCRs with soluble pMHC multimers without applying any force; one does not expect any catch-bond formation in this context. Second, recent structural studies using cryoEM did not uncover any significant conformational change in the TCRαβ dimer, again in conditions when T cells are getting activated (Figure 1B). Third, biophysicists have been studying artificial systems (using the ex-
pression of the TCR components in non-T cells (47) and/or expression of artificial receptors made out of external domains based on nucleic acids, and intracellular domains derived from the TCR (47)): catch-bonds do not exist in these artificial systems, yet strong ligand discernment can be achieved. Along this line of inquiry and supporting the importance of antigen lifetime rather than conformation in T cell decisions, Tischer et al. (112, 11) developed an optogenetic system in which blue light i-
ntensity increases the effective unbinding rate between a ligand and an engineered receptor without altering the mechanical properties of their bond under load. They observed a strong correlation between T cell activation and the ligand halflife as it varied between 0.5 and 10 s – the physiological range for TCR antigens (52) without strong dependence on receptor occupancy. Their results favored a model of TCR discernment based on binding lifetime rather than on mechanical sensing, catch bonds or -
conformational changes. Hence, our current appraisal of the field is that catch bond formation for the TCRpMHC complex may modulate the biophysics of these interactions, but it is unlikely to be a structural answer to the problem of ligand specificity in TCR triggering. As discussed below, a biophysical understanding of TCR ligand discernment based on the kinetics of ligand–receptor complex dissociation (Figure 1C, top) offers a more universal, flexible and
www.annualreviews.org • Learning the principles of T cell antigen discernment 7

actionable explanation.
1.3. The combinatorial complexity of phosphorylation patterns.
Upon reviewing the biochemistry of the TCR signalosome, one is struck by the large number of tyrosines associated with the TCR complex, especially with its ten CD3 ITAMs (Figure 1C). Experimentalists have generated mouse models to directly test the functional significance of these tyrosines. For example, Vignali and coworkers created 25 genetic models (42) where tyrosines of the TCR–CD3 complex are replaced with phenylalanine (a non-phosphorytable substitute of equivalent hydrophobicity and size).-
 These models displayed an extent of T cell proliferation upon TCR triggering that scaled with the number of tyrosines. More strikingly, mice with fewer tyrosines succumbed to multiorgan autoimmune diseases, highlighting the role of the high number of tyrosines in enforcing immunological tolerance. Hence, these T cells passed negative selection (i.e., their signaling against self antigens was below threshold for apoptosis in the thymus), yet they also increased their proliferative response to liga-
nds in the periphery (i.e. their signaling against self antigens was above threshold in the periphery) (39). This paradoxical result pointed out to enhanced and defective responses at the same time for TCRs with altered phosphorylation capabilities (34). Earlier attempts at dissecting the role of multiple phosphorylations in the TCR signalosome contributed significantly to our understanding of TCR ligand discernment. Kersh et al. (51) raised antibodies against distinct phosphorylated peptides cove-
ring different potential states of the CD3ζ chains. These antibodies demonstrated that CD3ζ undergoes a step-wise set of phosphorylations, with antigens of greater potency reaching new phosphorylated states: the authors concluded that CD3ζ phosphorylation could establish multiple thresholds in activation that explain the fidelity of ligand discernment. Follow-up studies by Aivazian & Stern (3) documented how CD3ζ underwent a reversible association/dissociation from the cell membrane upon phosphory-
lation. In this model, before antigen engagement, CD3ζ burrows in the lipid bilayer, with transient excursions in the cytoplasm. Upon TCR–pMHC binding, Lck gets recruited to the engaged TCR, phosphorylates CD3ζ during a cytoplasmic excursion, and stabilizes this domain out of the lipid bilayer to further engage downstream signaling molecules (e.g. ZAP70, LAT etc.), (Figure 1C, center). This elegant model – confirmed by more recent cryoEM structural analysis – would account for the sequential natur-
e of TCR phosphorylation, a key aspect of fidelity in ligand discernment. Pitcher & van Oers (86) proposed that the combinatorial complexity and sequential nature of phosphorylation in the TCR-CD3 associated chains may engage different downstream signaling pathways. Hence, having such a large number of phosphorylated states may explain how T cells multiplex their response (Figure 1C, bottom). This observation could be leveraged to reverse-engineer the key modes of TCR activation encoded, for insta-
nce, in T cell cytokine outputs (2). Finally, a more recent study by Voisinne et al. (117) deployed mass spectrometry to analyze the phosphorylation patterns of the TCR signalosome, when triggered by ligands of varied immunological potency. The authors carefully titrated their TCR ligands to achieve comparable receptor occupancy, and demonstrated that TCR ligands built a hierarchy of phosphorylation states that modulated the stoichiometry of TCR-associated proteins (e.g. ZAP70, LAT, SLP76 etc.) wi-
th a critical role for CD6 as a negative regulator that limits the
8 Bourassa et al.

response to weak ligands. Such nested assembly of the TCR signalosome putatively relates to the nested functional responses downstream for T cells (e.g. differentiation, cytokine production and proliferation).
2. Theory of TCR discernment
2.1. Life time dogma and kinetic proofreading(s)
At face value, T cell antigen discernment is the high-dimensional problem of matching a space of sequences – presented peptides – to function – commensurate T cell activation. However, the binding of antigens (peptides loaded onto MHCs) to surface TCRs acts as a dimensional bottleneck: for a given TCR, the sequence space is likely projected onto a much reduced space of biochemical parameters characterizing the pMHC-TCR interactions kinetics, such as the on- and off-rates, kon, koff, the number of -
peptide ligands L presented, and possibly non-linear effects (e.g. catch-bond dynamics (63, 16)). In fact, decades of biophysical measurements have established that the koff, or more intuitively its inverse, the characteristic time for the pMHC–TCR complex τ = k−1
off , is the best correlate with T cell activation (32, 26, 111, 44). Peptides being indiscriminately presented by antigen presenting cells (APCs), we expect kon to be limited by diffusion on the APC’s plasma membrane, without particular differences between peptides (6). Hence, differences in the binding constants KD = koff/kon = (τ kon)−1 of peptides are at the level of their binding times τ , with peptides of larger τ s being more antigenic (i.e. triggering better activation) while ’self’-like p-
eptides, which are much more numerous, bind only very transiently or weakly to TCRs.
2.1.1. McKeithan’s original kinetic proofreading model. The fundamental question of TCR discernment is to account for the ability of T cells to respond to ligands with longer τ s (from pathogens i.e.,non-self) while remaining quiescent when encountering ligands with shorter τ s (from endogenous tissues, i.e.,self). The first challenging aspect is that typical nonself ligands have binding times only 10× to 100× larger than some of the self ligands (40, 51, 85), not enough, based on a simple binding-
 equilibrium, to prevent spurious T cell activation by self peptides (31). Hence, T cell discrimination first appears as a problem of detection/amplification of weak differences in the stability of the pMHC–TCR complex (quantified by τ ). In 1995, McKeithan (76) took inspiration from the seminal work of Hopfield and Ninio on the mechanism of kinetic proofreading (KPR) for DNA replication, translation, and tRNA loading (43, 82). In that process, differences in affinity between correct and incorrect-
 enzyme-substrate pairs are amplified by an extra biochemical validation step, thus lowering the rate of error at the expense of irreversibility and energy consumption. By analogy, McKeithan proposed that the TCR signalosome might be implementing a KPR scheme to discern between ligands of different binding times τ = k−1
off : upon binding, a ligand-receptor complex must undergo a sequence of N ≥ 1 biochemical modification steps, such as ITAM phosphorylation and signaling molecule recruitment, before reaching a final state able to trigger T cell activation (KPR backbone in Fig. 3A). McKeithan’s model is a set of ordinary differential equations describing the numbers of receptors on a T cell in each proofreading state, Cn(t), 0 ≤ n ≤ N (stochastic formulations can also be given, see (57, 53) for details; we focus o-
n deterministic versions in this review). Using mass-action kinetics to describe the numbers of TCR-pMHC complexes, when a single
www.annualreviews.org • Learning the principles of T cell antigen discernment 9

antigen type of binding time τ is present in quantity L,
C ̇ 0 = κLfreeRfree − (φ + τ −1)C0 1.
C ̇ n = φCn−1 − (φ + τ −1)Cn 1 ≤ n < N 2.
C ̇ N = φCN−1 − τ −1CN 3.
where φ is the phosphorylation rate, Lfree is the number of free ligands (out of L presented ligands in total) and Rfree the number of free receptors (out of Rtot ≈ 105 (55) in total on a T cell), given respectively by L − Rb and Rtot − Rb with Rb = PN
n=0 Cn the total number of bound TCRs (in any proofreading state). Each phosphorylation step is assumed to be irreversible, and the only way a complex gets dephosphorylated is upon dissociation of the ligand from the receptor (which occurs with rate τ −1). At steady-state, we have (85, 33):
Rb = 1
2 Rtot + L + 1
κτ
"
1−
s
1 − 4RtotL
Rtot + L + 1
κτ
2
#
≈ κRtotτ
κRtotτ + 1 L 4.
CN = φτ
φτ + 1
N
Rb , 5.
which behaves as CN ∼ Lτ N in the limit where the forward rate φ is small, receptors are unsaturated by ligands (Rtot ≪ L), and κRtotτ ≫ 1. This formula highlights the geometric amplification of τ , similarly to the original Hopfield-Ninio scheme, so we expect this process to strongly amplify differences in the binding time τ . Several signaling considerations are consistent with a KPR process being the backbone of T cell recognition, such as the processivity of ITAM phosphorylation (51, 98) and t-
he sequence of signalosome components recruitment (117, 31), as well as the rapid dephosphorylation of ITAMs and Lck after ligand unbinding due to CD45 recruitment (49, 20). As such, multiple models expanding on and modulating the KPR mechanism have been proposed over the years (see e.g. (61, 60, 78)).
2.1.2. Reformulating the ’hard’ problem: marginalizing concentration. The original KPR model was first proposed as a way to lower the equilibrium error rate of enzyme-substrate pairing, η = Ccorrect
Cincorrect , with N proofreading steps giving rise to an effective error rate (at
best) of ηN . It is thus tantalizing to think that KPR for T cell discrimination would serve a similar goal, minimizing the ratio of activated TCRs in the presence of self (binding time τs,
“incorrect” for activation) vs non-self (τns, correct) ligands, i.e. η = CN (τs, L)
CN (τns, L) ∼ τs
τns
N ≪
1 see e.g. (18, 53). However, there are major differences between DNA replication and ligand discernment by T cells. Most importantly, while the different base pairs in DNA replication have comparable and relatively stable abundances, the quantity of antigens (number per APC, L) varies greatly, with self antigens (“incorrect” ones) being up to 105 times more abundant (1 non-self among 105 pMHCs (5, 21)), amply compensating their 10-100 ×
smaller τ . Hence, accounting for Lns ≪ Ls in the ratio η = CN (τs, Ls)
CN (τns, Lns) ∼ Lnsτ N
ns Ls τsN
, a pure KPR scheme would give an error rate much closer to 1. These remarks motivate reformulating T cell discernment as a “hard” problem. In operational terms, TCR activation should be explained by a model receiving, as an input, ligands with quantities Li and qualities τi, and producing an output O; this output should be highly dependent only on the presence of non-self ligands with large τ while being insensitive to the quantities of these ligands. Mathematically, this problem can be formulate-
d using
10 Bourassa et al.

information (17, 8, 56) and decision theories (57). Focusing for now on the response to a single kind of ligand at a time, we seek a model with a (possibly noisy) input-output function p(O|τ ) which provides high mutual information between the input τ and some network output O :
M I(O, τ ) =
Z
dτ p(τ )
Z
dOp(O|τ ) log2
p(O|τ )
R dτ ′p(O|τ ′)p(τ ′) (bits) 6.
while, crucially, the input-output relation is marginalized over ligand quantity,
p(O|τ ) =
Z
dlp(O|l, τ )pL(l|τ ) 7.
It is presently unclear what the “right” distribution of ligand quantities, pL(l|τ ), should exactly be. Biophysical evidence indicates that it could generally be a broad, long-tailed, non-Gaussian distribution, such as a log-normal (27, 57) or power-law distribution (105, 9) (figure 2A). Self peptides being much more abundant, pL(l|τ ) should be skewed towards lower τ .
A
100 101 102 103
Rank of the pMHC, r
10 5
10 4
10 3
10 2
10 1
Relative pMHC frequency, f
f r 0.83
Background (self) peptides
B
101 103 105 Antigen quantity L
10 3
10 1
101
103
Output O(L, )
1 = 10 s 2=1 s
0.00 0.05 Density p(O| )
10 3
10 1
101
103
Figure 2
Ligand quantity poses a hard problem for TCR discernment. Adapted from (9). (A) Relative frequency distribution of class I peptide MHCs on the surface of antigen presenting cells (melanoma cells here). Replotting “background peptides” (self) data in the “DMSO” control condition, averaged over three repeats, from figure 1D of (105) (in Dataset S02). We notice a power-law behavior for the first 103 peptides, followed by a sharp cutoff. Of note, these abundances are approximate, based on direct spect-
rometry readouts that may be biased by, e.g., unequal processing efficiencies in the mass spectrometry pipeline for different peptides (106). (B) Illustration of the antigen quality discrimination problem. (Left) Pure KPR model (N = 4, φ = 0.1) output curves for two antigen qualities (red: τs = 10 s, blue: τs = 1 s) over a wide range of antigen quantities L. (Right) Marginalization of the TCR output distribution over the range of L, to obtain p(O|τ ). With an absolute discernment model, these dist-
ributions would not overlap for different antigens.
2.2. Adaptive kinetic proofreading (AKPR) for T cell recognition
The “hard” problem of TCR discernment arises from eq. 7, because large variations in antigen quantity create overlap in the distribution of outputs O for a pure KPR scheme
www.annualreviews.org • Learning the principles of T cell antigen discernment 11

where CN ∼ Lτ N (Fig. 2B, right). To solve this issue, we are seeking alternative models that are sensitive to few non-self ligands but unresponsive to many self-like ligands (26), a property we refer to as ’absolute discernment’ (28). Graphically, this property corresponds to a vertical boundary in a phase diagram of immune responses as a function of antigen quality τ (horizontal axis) and quantity L (vertical axis; a pure KPR model fails to produce such a boundary (Fig. 3B).
2.2.1. A first solution: kinetic proofreading with feedback. A first solution to this problem was provided by a seminal theory/experiment work by Altan-Bonnet and Germain, introducing a systems biology model of T cell activation (5). This detailed biochemical network effectively consists in a kinetic proofreading backbone with two main additions:
• TCRs are coupled by the SHP-1 phosphatase, which is activated by an early complex in the kinetic proofreading cascade and dephosphorylates TCR complexes. This implements a negative feedback, following experimental evidence of inhibition and antagonistic interactions mediated by SHP-1 (88) and partially phosphorylated ITAMs (102, 96, 65, 50); the cross-receptor nature of this interaction was clarified by using (artificial) dual TCR cells (24, 36) • the final step of the proofreading cascade activ-
ates a MAPK kinase, eventually responsible for ERK phosphorylation, which self activates and abrogates the SHP-1 inhibitory feedback (124).
This complex model achieved absolute discernment as a function of antigen quality, predicting a critical binding time (around τc = 3 s) below which even high doses of antigen cannot elicit a response. The activation threshold can be altered by modulating intrinsic ERK signaling, SHP-1, or CD8 levels, with model predictions matching experimental observations on cell-to-cell variability – for instance, antigen response is abolished in T cells harboring SHP-1 levels a few-fold above the wild-type ave-
rage (27). Hence, it appears that adding feedbacks to KPR can solve the ’hard’ problem of TCR discernment independently of ligand quantity. However, the complexity of such biochemical models hinder their interpretability (a problem also prominent in current machine learning algorithms).
2.2.2. The adaptive kinetic proofreading framework. To clarify key mechanisms, Lipniacki et al. reduced the model from (5) to 37 rate-equations that could reproduce its important properties and capture stochasticity in individual T cells exposed to similar antigens. Yet, the size of their network still obfuscated deeper understanding of ligand discernment. In (30), a phenomenological model, further simplifying the biochemical network, was proposed and analytically studied. The model includes a neg-
ative feedback with a dephosphorylation reaction b + γS to Eqs. 1–3, where S is a pool of active SHP-1 phosphatases shared between receptors, negatively coupling them. The phosphatase is activated by receptors in the first proofreading state, C1. This analytically tractable model recapitulates the predictions of the Altan-Bonnet and Germain model (5), and produces absolute antigen discernment on a wide range of antigen quantities (see Fig. 3C). Lalanne and Fran ̧cois (56) built on this insight and-
 leveraged evolutionary algorithms to derive minimal biochemical networks optimizing the mutual information M I(O, τ ) defined in Eq. 6. They discovered a variety of KPR-based models with different kinases and phosphatases implementing feedbacks, all with comparable mutual information. In their simplest form, these models boil down to a KPR cascade with the last reaction being
12 Bourassa et al.

mediated by a kinase, K, that gets inactivated by an intermediate complex Cm, m < N :
C ̇ N = αKCN−1 − τ −1CN 8.
K ̇ = ε(Ktot − K) − δCmK ⇒ K = Ktot
δCm/ε + 1 9.
In these models, when L is large enough to obtain a strong feedback K ∼ Cm−1, absolute discernment arises (vertical boundary in Fig. 3B) since CN ∼ CN−1/Cm ∼ Lτ N /Lτ m ∼ τ N−m. This corresponds to flat dose response curves of the output CN (L, τ ) as a function of L (Fig. 3D, bottom). Importantly, different antigens (with different τ s) reach distinct plateaus of CN activation at ligand doses L ≪ Rtot well below the point where receptors get saturated (Fig. 3D). In these models, there is an incoh-
erent feedforward loop (IFFL) in the KPR cascade (66, 4), because Cm has both a positive (via the KPR cascade) and negative influence (via K) on CN . Such IFFLs are known to be implicated in biochemical adaptation networks (64), and indeed the class of models described by Eqs. 8-9 sort antigens based on quality τ while adapting (i.e. compensating for) quantity L. Thus, we call these types of augmented KPR models Adaptive Kinetic Proofreading (AKPR) models, as schematized in Fig. 3A. We notice that-
 the models from (5, 62) appear to perform a similar AKPR computation, as confirmed by automatic coarse-graining methods (92). Cui and Mehta studied the speed, energy and sensitivity trade-offs for this type of models (18).
2.3. Antagonism: a ’dog in the manger’ effect
All AKPR models display an important and biologically relevant property: ligands below the detection threshold (i.e., not producing a response on their own, so potentially self-like) can hinder activation by ligands above the threshold of activation. Such antagonism in T cell activation is observed experimentally (41, 24, 5), and is a well-known property of many biochemical detection processes (95). Torigoe et al. (113) used the Aesopian fable of the ’dog in the manger’ to describe a similar pheno-
menon in the context of immunoglobulin E receptors (which are related to TCRs). Like the fable’s dog preventing the horse from eating the grain, antagonist ligands actively prevent the agonist ligands to trigger response, while not contributing significantly to the signal, as illustrated in Fig. 3D. Classical KPR models do not exhibit any antagonism (Fig. 3F), pointing out to fundamental limitations of models without feedbacks. It was in fact proven mathematically that antagonism is a necessary by-
product – an evolutionary “spandrel” – of absolute discernment (29). Thus, the ’hard’ problem of ligand discernment should be solved in the presence of a large amount of self ligands, as is the case in physiological conditions (31).
2.3.1. Quantifying antagonism with a fold-change ratio. To quantify antagonism, we define the fold-change ratio for mixtures of two types of ligands (Fig. 3F) :
F C = Out(mix)
Out(Ag) 10.
where Out(Ag) is the response when one type of (agonist) ligand is presented ({L1, τ1}), while Out(mix) is the response to a ligand mixture {L1, τ1); (L2, τ2)}. Antagonism is thus defined by F C < 1 (or log F C < 0).
www.annualreviews.org • Learning the principles of T cell antigen discernment 13

A (Adaptive) Kinetic Proofreading (KPR) B Phase diagram
100 101 Agonist binding time, (s)
100
101
102
103
104
105
Agonist ligands per APC, L
Absolute
discernment:
vertical
boundary
No response Response
Model Pure KPR SHP-1 Adaptive sorting Adaptive sort. N = 1 Revised AKPR
C Single type of ligands D Dose response curves
10 5
10 3
10 1
101
103
Output, CN
Discernment
window
Pure KPR Binding time = 10 s =5 s =2 s =1 s
100 101 102 103 104 105 Agonist ligands per APC, L
10 5
10 3
10 1
101
103
Output, CN
Discernment
window ...
Adaptive sorting Binding time
= 10 s =5 s =2 s =1 s
E Ligand mixture F Fold-change ratio (F C)
0 2 4 6 8 10 Antagonist binding time, 2 (s)
27
24
21
22
25
28
Change ratio, FCTCR/TCR
Model Pure KPR SHP-1 Adaptive sorting Adaptive sort. N = 1 Biochem. adaptation Revised AKPR
Figure 3
Adaptive kinetic proofreading (AKPR) models of T cell ligand discernment. (A) Core reactions in AKPR models, with a KPR backbone and an inhibitory feedback module. (B) Phase diagram of the immune response predicted by different models. The decision boundary is built by setting a threshold for activation on the model output CN , and computing for every antigen quantity L what antigen τ would be necessary to reach the threshold at that dose. The ideal boundary for absolute discernment corresponds to-
 a vertical line (i.e., response above a critical τ , at any L). (C) Illustration of single antigen responses, where the output is set by the balance of activating and inhibitory signals triggered by the antigen. (D) Model response curves to single antigen types for KPR (top) and adaptive sorting (bottom, N = 6). The “discernment window” is the range of L over which the response is above threshold for agonists (τ = 10 s) but remains below for self-like ligands (τ = 2 s). (E) Illustration of antago-
nism: weak ligands cannot reach the activated proofreading state, but can trigger the negative feedback. Receptors bound to strong antigens are coupled to this inhibitory module and are thus inhibited, hence lowering the overall cell activation. (F) Fold-change (F C) antagonism curves of different models, in the presence of L1 = 10 agonists of τ1 = 10s, and L2 = 5 × 103 antagonist ligands with τ2 given by the horizontal axis.
14 Bourassa et al.

To understand how AKPR models account for TCR antagonism, we consider a generalization of models in (56) (Eqs. 8-9). The output of AKPR models for a mixture of ligands C = {(L1, τ1); . . . (LM , τM )} is approximated by:
CN =
P
i LiτiN
P
i Liτim
11.
The numerator is the output of a plain KPR cascade, while the denominator quantifies the negative feedback triggered by complex m in the cascade. For one type of ligand, the response is CN = LτN
Lτm = τ N−m, so it is a pure function of τ (the quantity dependency cancels out). For a mixture of two ligands,
FC = 1
τ N−m
1
L1τ1N + L2τ2N L1τ1m + L2τ2m
= 1 − L2τ2m
L1τ1m + L2τ2m
1 − τ2
τ1
N −m !
12.
whereby antagonism occurs if and only if τ2 < τ1. An interesting particular case is (m, N ) = (0, 1) :
F C = 1 − L2
L1 + L2
1 − τ2
τ1
13.
which can be realized by an (adaptive) ligand-receptor model combined with a τ -dependent degradation of the signaling complex (29). Surprisingly, such a model achieves absolute discernment without proofreading in its response to one type of ligand; however, for mixtures, its F C is linear in τ2 − τ1, such that the weakest ligands (lowest τ2) would produce the most antagonism. This dependency would be very problematic in the immune context where τ2 ≪ τ1 and L1 ≪ L2: then, there would be no respons-
e to agonists in the presence of self. Experimental measurements of antagonism rather show that T cell responses still occur in the presence of very weak self antigens, and that antigens with binding time just below the threshold for activation, τ2 ≲ τc, produce the most antagonism (5), thus excluding this regime.
2.3.2. Proofreading mitigates antagonism and distinguishes AKPR models. The ’adaptive sorting’ model with N = 1 step initially evolved in (56) for pure antigens displayed too strong antagonism (Fig. 3F). In evolutionary simulations in the presence of self ligands, a solution emerged where the negative feedback in the system is activated by proofreading steps later in the cascade, and antagonism is considerably mitigated. Contrasting with the N = 1 model, self-like ligands are not antagonizing the -
signal in AKPR models (F C = 1 for τ2 = 0 in Eq. 12). Furthermore, the curve described by Eq. 12 is flat close to τ2 = 0 as soon as m > 1 (Fig. 3F). Hence, to mitigate unavoidable antagonistic effects, m should be large, meaning that the negative feedback should be downstream of a KPR cascade. Moreover, in AKPR models, there is an intermediate value of τ2 for which antagonism is maximal (somewhere between τ2 = 0 and τ2 = 1τ1, where F C = 1). For large m, this τ2 is close to antigens at the thresho-
ld for activation, τc. This was observed qualitatively in the original work of Altan-Bonnet and Germain: the strongest antagonists are also weak agonists(5). This hierarchy of antagonism was interpreted in (57) as a way to limit potentially spurious activation by ligands just below the activation threshold. All in all, and contrary to what is commonly assumed, this suggests that a high number of KPR steps might not be crucial for absolute discernment (since N = 1 with feedback can
www.annualreviews.org • Learning the principles of T cell antigen discernment 15

easily realize it, (29) and Fig. 3B). Rather, the most important role of proofreading steps might be to mitigate antagonism by self-like ligands. Antagonism also turns out to be important for another, more practical reason: by measuring antagonism in different AKPR models using the FC ratio, we notice that the quantitative details of these curves can vary considerably for different AKPR models (Fig. 3F). To disentangle the precise form of proofreading and feedback modules in models of TCR discern-
ment, precise and extensive measurements of antagonism are thus necessary.
3. Revisiting antigen discernment in the age of large datasets and artificial intelligence.
3.1. Accelerating the study of T cell activation using high-throughput experiments and modeling.
The previous sections provided a basic mechanistic and theoretical understanding of ligand discernment. Various biochemical models of TCR activation can similarly capture, at a qualitative level, key features like specificity (76) or antagonism (29) (section 2.1). Recent advances with high-throughput experimental tools are providing larger and more quantitative datasets to help falsifying the different models of TCR discernment. Highresolution microscopy can resolve the spatiotemporal kinetics of -
receptors, ligands, and signalosome formation in the immune synapse (75). Mass spectroscopy can quantify individual steps of the signaling process in response to different antigens (117). The potency of these antigens can be measured at very high biophysical precision using optimized surface plasmon resonance protocols (44), or at high throughput by functionally assessing panels of hundreds of (neo)antigens (123). Moreover, precisely controlled combinations of ligands can be prepared efficiently (-
84) and the fate of individual cells in response to various stimulations can be tracked in vitro (118) and in vivo (12, 35). Extensive datasets and machine learning are even more powerful when combined with biophysical theories to pinpoint the mechanisms and design principles of T cell responses (121). Multiple examples over the years illustrated this approach. For instance, mechanistic model fitting and Bayesian parameter estimation from experimental measurements were crucial in establishing the -
key roles of signal integration (37, 67) and receptor internalization (114) in T cell responses to combinations of antigen and costimulatory inputs. Likewise, Wither et al. (118) pooled extensive measurements across conditions, machine learning classifiers, and fitting of gene regulation models to disentangle how T cells encode pMHC quality and quantity in their intracellular transcription factor dynamics. Recently, van Dorp et al. (115) combined a variational autoencoder with a latent Gaussian mi-
xture model and an ODE model of memory T cell compartments to infer subpopulation dynamics from large single-cell datasets collected at different time points. In each case, closely interfaced modeling and data produced immunological insights that could not have emerged from purely theoretical or experimental work. To illustrate the power of allying theory with high-throughput experiments, we now focus on examples from our own research on T cell discernment. We built the IMMUNOtron robotic platform-
 to streamline the acquisition of large datasets in immunology (2). It is equipped with all attributes experimental immunologists would need on their bench: automatic pipetters, plate handling arm, troughs for reagents, cell incubator, fridge to store samples, centrifuge, etc. (Figure 4A). Additionally, we programmed Plateypus, a Python pipeline to rapidly annotate and to compile large datasets (1). This automation improves
16 Bourassa et al.

the multiplexing capability, accuracy and reproducibility of biophysical measurements; we leveraged it to produce new insights into immune cell decision making as detailed below.
3.2. Defining and monitoring antigen encoding.
Using the IMMUNOtron platform, we introduced the concept of “antigen encoding” to describe the global response of T cells to various quantity and quality of antigens (2). We leveraged simple machine learning techniques to compress the high-dimensional bulk cytokine concentration data generated by the IMMUNOtron robotic platform onto a twodimensional latent space dynamics. We could reconstruct the initial data from the compressed latent representations, proving that our latent space representation -
is equivalent to the initial data (see Figure 4B). Remarkably, latent space trajectories could be parametrized by a single parameter that increased in proportion to antigenic strength. Applying information theory to this simplified representation, we rigorously defined a continuum of ’antigenicity’, divisible into six non-overlapping antigen classes, and thus revealed an antigen ’encoding’ in the dynamics of cytokines. This parametrization in a latent space derived from machine learning provided a-
 generative model of cytokine responses along the discovered continuum of antigenicity. This encoding was also “universal” to the extent that our model, trained with mouse naı ̈ve OT-1 T cells, also applied to human CD8+ T cell blasts and various stimulatory conditions (e.g. different modes of antigen presentation) to effectively rank immune activation according to the quality of the antigens. Future work will be necessary to establish how the TCR signalosome explicitly computes such latent variab-
les from antigenic inputs, and how immune cells might themselves biologically decode the information content of cytokines unearthed by our computational analysis.
3.3. Revisiting the significance of the multiplicity of phosphorylation in the TCR signalosome.
We also applied this IMMUNOtron and machine learning approach (Figure 4B) to resolve the paradox of enhanced/decreased signaling of the altered TCR, described in section 1.3. Gaud et al. re-created a tyrosine–deficient TCR signalosome in the OT-1 transgenic TCR (33), by changing the six ITAM tyrosines (Y) of each CD3ζ chain for phenylalanines (F), thus blunting their phosphorylation potential; this TCR with 4 ITAMs remaining (on the CD3δ, ε, γ chains) was called OT1-6F, and the wild-type counterpa-
rt with 10 ITAMs, OT1-6Y. We measured the downstream activation of OT1-6F and OT1-6Y T cells against a panel of altered peptide ligands, using the IMMUNOtron platform (2) (Figure 4B). Strikingly, a simple analysis of integral cytokine secretion demonstrated that OT1-6F responded more strongly to antigens than OT1-6Y, but had very limited discernment of antigen potency (Figure 4C). We obtained a better understanding of these TCR mutations by compressing the cytokine measurements in the same latent -
space as in section 3.2 (Figure 4D). The first dimension (LS1) captured a weighted average of the secreted cytokines, and increased with antigen quality, with stronger response to weak antigens for CD3ζ-deficient receptors (OT16F). The second dimension (LS2) had a non-monotonic dependency for wild–type OT1-6Y, reminiscent of a negative interaction akin to inhibitory signals in adaptive kinetic proofreading (AKPR). Strikingly, this relationship was reduced to a simple monotonic function of antigeni-
c strength in the case of the mutant OT1-6F. This change suggested, by analogy
www.annualreviews.org • Learning the principles of T cell antigen discernment 17

with the AKPR networks, that CD3ζ-deficient T cells lacked the negative regulatory loops critical to achieving sharp antigen discernment by T cells.
3.3.1. From machine learning, back to theoretical modeling.. We turned this analogy into a direct comparison by probing the biochemistry of these mutated OT1-6F TCRs. We demonstrated the lack of recruitment of the SHP-1 phosphatase upon activation (SHP-1 being a key candidate regulator in AKPR schemes (5, 30)). In turn, this defect in negative regulation correlated with enhanced phosphorylation of the CD3 TCR-associated chains, and enhanced recruitment of ZAP70. We then incorporated these biochemi-
cal differences in our phenomenological AKPR model (section 2.1) as fewer KPR steps and a blunted SHP-1 activity in OT-6F, accounted for the enhanced sensitivity to weak antigens. A recent model of parallel ITAM phosphorylation can similarly account for these altered single-antigen responses (80). Importantly, our adjusted SHP-1 model also generated predictions for the response to antigen mixtures; these predictions qualitatively recapitulated the measured patterns measured in the ex vivo stimulat-
ion of OT1-6F and OT1-6Y T cells. Hence, a machine learning-derived projection of large cytokine datasets pinpointed a key defect in signaling that we further validated theoretically and experimentally.
3.4. Unifying principles of antagonism.
To further illustrate the power of high-throughput analysis and theoretical modeling for T cell discernment, we present here a re-analysis of our recent study of TCR mediated antagonism (55). We used the IMMUNOtron platform to systematically measure cytokine secretion from cultures of mouse OT-1 T cells and OT-1 anti-CD19 CAR T cells, upon activation with a set of altered peptide ligands as well as CD19, both individually and in conjunction. We also tested these T cells in different molecular conf-
igurations: by modulating antagonist ligand density or by changing the number of ITAMs on the antagonist receptor (TCR), as detailed in Fig. 5A. This resulted in a large matrix of data quantitatively documenting the activation of T cells in response to single or dual ligand stimulations, across a wide range of antigen qualities (Fig. 5B). We then proceeded to plot against each other the T cell response to the agonist (strong) ligand alone, the antagonist alone, and the mixture of both (antagonism -
assay), for different molecular settings (Fig. 5C). We observed congruent horizontal shifts in the “antagonist alone” and“agonist + antagonist” curves in response to the perturbed conditions. Compared to the default condition (left panel), lower concentrations of antagonist ligands (middle panel) require a higher quality of ligand for activation, corresponding to a rightward shift, while reduced TCR ITAM numbers (right panel) have the opposite effect. The mixture curves shift accordingly, as seen -
from the alignment between the “partial response EC50” (onset of activation with antagonists only, circled) with the point where antagonism ends (squared). This coordination is further illustrated by the “collapse” of the mixture responses onto a universal curve after rescaling the quality of the antagonist by the partial response EC50 in each condition (Fig. 5D). This collapse reveals a strong relationship between the signaling potential of antagonists by themselves, and their ability to antagoni-
ze a stronger ligand when presented in a mixture. These correlations across perturbations between the antagonism curve and the onset of activation by the antagonist ligands further reinforce a prediction from Altan-Bonnet and
18 Bourassa et al.

0
Latent Space (a.u.)
TCR ITAM Number = 10
LS1
LS2
E1 G4 V4 T4 Q4 A2 N4 TCR Antigen
0
Latent Space (a.u.)
TCR ITAM Number = 4
LS1 LS2
B
A
C
Wild type OT-1
Signaling impaired OT-1
0
20
40
60
80
100
Scaled [IL-2] over time (% Max)
TCR ITAM Number = 10
0 20 40 60 80 100 Scaled [TNF] over time (% Max)
0
20
40
60
80
100
Scaled [IL-2] over time (% Max)
TCR ITAM Number = 4
TCR Antigen N4 A2 Q4 T4 V4 G4 E1
0
20
40
60
80
100
Scaled [IL-2] over time (% Max)
TCR ITAM Number = 10
0 20 40 60 80 100 Scaled [TNF] over time (% Max)
0
20
40
60
80
100
Scaled [IL-2] over time (% Max)
TCR ITAM Number = 4
TCR Antigen N4 A2 Q4 T4 V4 G4 E1
IMMUNOtron (Hardware) immunotron-interface (Software)
Fridge
Incubator
Incubator Transfer Station
Fridge Transfer Station
Robotic Manipulator (RoMa)
Liquid Handler (LiHa)
Shelves Centrifuge
Pipette Tips
Reagent Reservoirs
Cooling
Units Computer
Overview of IMMUNOtron:
Achar, Bourassa, and Rademaker et al., Science, 2022
60 dimensions 24 dimensions 4 dimensions 1 dimension
Feature Space
Latent Space
Parameter Space
vt
t0 v0
θ
r(t) =
 
v0t t ≤ t0
v0−vt k
(1 − e−k(t−t0))
t > t0
+vt(t − t0) + v0t0 (||v0|| = v0, arg(v0) = θ)
r(t) =
 
v0t t ≤ t0
v0−vt k
(1 − e−k(t−t0))
t > t0
+vt(t − t0) + v0t0 (||v0|| = v0, arg(v0) = θ)
r(t) =
 
v0t t ≤ t0
v0−vt k
(1 − e−k(t−t0))
t > t0
+vt(t − t0) + v0t0 (||v0|| = v0, arg(v0) = θ)
r(t) =
 
v0t t ≤ t0
v0−vt k
(1 − e−k(t−t0))
t > t0
+vt(t − t0) + v0t0 (||v0|| = v0, arg(v0) = θ)
Low High
Antigen Quality (v0)
LS1
LS2
N4
Q4
T4
V4
G4
E1
10 8 10 9 10 10 10 11 Antigen Quality (EC50)
0.5
1.0
1.5
v0
1) IMMUNOTRON robotic platform
2) High throughput data processing pipeline
3) Supervised dimensional reduction
4) Latent space trajectory parameterization
5) Correlation to functional phenotype
Condition Space
+1hr +72hr
APC
T cell
Up to 768 conditions per timepoint
LS1
LS2
TNF
IL-6
IL-17A
IL-2
IFN-γ
platteeypus
Reconstruction
D
Figure 4
Applying the IMMUNOtron and antigen encoding framework to analyze ligand discernment in signaling-impaired T cells. (A) IMMUNOtron robotic platform (left) and software interface (right) used to collect high throughput T cell activation data (B) Schematic of antigen encoding pipeline to deconvolve high throughput T cell activation data (C) Comparison of the cytokine outputs (average secretion of IL-2 vs TNF) for different qualities of ligands (colored) for wild-type (OT1-6Y) (top) and CD3ζ-altered -
T cells (OT1-6F, bottom): note the loss of resolution for the signaling-impaired 6F TCR. (D) Analysis of the cytokine dynamics using the latent variables reveals a loss of non-monotonic dependency of LS2 with the quality of ligand for the signaling-impaired system.
www.annualreviews.org • Learning the principles of T cell antigen discernment 19

Germain, 2005: the most antagonizing ligands are those closest to ”the threshold needed for full signaling” (5). These recent observations opened new avenues for modeling how T cells respond to antigens and, ultimately, for enhanced immunotherapeutic approaches – in particular, by leveraging the antagonism triggered by self–derived antigens to limit cytotoxic onslaught in healthy tissues (55).
3.4.1. Return to theory. Our extensive mapping of TCR/TCR and TCR/CAR crosstalk for T cell activation allowed us to revise previous versions of the AKPR model. We observed that models varied greatly with their predictions on the strength of antagonistic crosstalks, while their predictions of dose response curves were all similar (figure 3B, F). To be specific, the original AKPR models could not account for the (new) experimental observation that a 100-fold decrease in weak TCR antigen levels – wit-
h absolute molecule abundances calibrated experimentally– still produced significant antagonism, but shifted to stronger antigens as best antagonists (55). We found that a nonlinear inhibition rate of the output was crucial to match experimental data across the large range of tested antigen quantities, and proposed a biochemical implementation of this mechanism via inhibition of a kinase responsible for proofreading the last reaction step ((55), STAR Methods). Then, our quantitative measurements o-
f antagonism F CTCR/TCR and F CTCR/CAR allowed us to estimate the parameters of this model rigorously via Markov Chain Monte Carlo simulations, whereas phenomenological models from section 2.1 could not quantitatively fit the same data. Hence, combining robot-assisted measurements, machine learning, and biophysical intuition provided a step towards more accurate and predictive modeling.
4. Future problems in ligand discernment
4.1. Self, the dark matter for T cell ligand discernment
Most studies in immunology define non-self as immunogenic, i.e.,as the immunological settings that elicit leukocyte activation. But, as discussed in the review, non-immunogenic ligands (classically the self) still elicit indirect cellular responses by activating negative feedbacks. Hence, the real difference between self and non-self might rather be the balance between overall positive and negative signals, explaining why immunological discernment should be reframed as a continuous problem. The im-
munological self is not necessary a passive player: it is more like an ’invisible’ background, overwhelmingly present, that overall can influence the behavior of T cells in unexpected ways (e.g.,antagonism). For this reason, calling up an analogy with cosmology, we think of self as an immune ’dark matter’: the ubiquitous, unseen yet influential counterpart of immunogenic signals (non-self), whose quantification is crucial to get the full picture of ligand discernment. As with cosmological dark mat-
ter, this probing can only be indirect: through antagonistic interactions. To test antagonism in a self background, one should generate various self distributions, and assess their modulation of T cell activation by agonist ligands, which can be modeled and quantified as a fold-change (FC) ratio (Eq 10). Controlled experiments with automated platforms like IMMUNOtron will prove crucial in this endeavor.
20 Bourassa et al.

Perturbation:
Antagonist Antigen Density Low High
?
APC
T cell
or
Antagonist Receptor ITAM Number
4 or 10
Antagonist Strength Robotic platform
IMMUNOtron
Agonist Receptor
CAR
TCR or 6 12 24 36 48 72 6 12 24 36 48 72 6 12 24 36 48 72
Time (h): Stimulation: Ag+Antag Antagonist Agonist
10 1 100 101 102
[IL-2] (pM)
Perturbation : Antagonist Q4 T4 V4 G4 E1 Antag Density 1uM 1nM Antag ITAM # 10 4
Crosstalk TCR/CAR TCR/TCR
AB
C
0.0
0.5
1.0
1.5
2.0
2.5
Mean [IL-2] over time (pM)
1e 3 [Antagonist]
102
103
104 Antagonist quality (EC50)
0.0
0.2
0.4
0.6
0.8
1.0
Mean [IL-2] over time (pM)
1e 3
0.0
0.2
0.4
0.6
0.8
1.0
1.2
1.4
1.6
Mean [IL-2] over time (nM)
1e 3 Antagonist ITAMs
101
102
103
104 Antagonist Quality (EC50)
0.0
0.5
1.0
1.5
2.0
2.5
3.0
3.5
4.0
Mean [IL-2] over time (nM)
1e 3
Agonist+Antagonist Antagonist Agonist
0.0
0.5
1.0
1.5
2.0
2.5
Mean [IL-2] over time (pM)
1e 3 [Antagonist]
102
103
104 Antagonist quality (EC50)
0.0
0.2
0.4
0.6
0.8
1.0
Mean [IL-2] over time (pM)
1e 3
0.0
0.5
1.0
1.5
2.0
2.5
Mean [IL-2] over time (pM)
1e 3 [Antagonist]
102
103
104 Antagonist quality (EC50)
0.0
0.2
0.4
0.6
0.8
1.0
Mean [IL-2] over time (pM)
1e 3
D
102
103
104 Antagonist EC50
0
20
40
60
80
100
Agonist + Antagonist
Agonist (% Max)
Original Antagonist Quality
10 2
100
102 Antagonist EC50 Partial response EC50
Scaled Antagonist Quality Perturbation [Antagonist] Antagonist ITAMs Antagonist Q4 T4 V4 G4 E1 Crosstalk TCR/TCR TCR/CAR
102
103
104 Antagonist EC50
0
20
40
60
80
100
Agonist + Antagonist
Agonist (% Max)
Original Antagonist Quality
10 2
100
102 Antagonist EC50 Partial response EC50
Scaled Antagonist Quality Perturbation [Antagonist] Antagonist ITAMs Antagonist Q4 T4 V4 G4 E1 Crosstalk TCR/TCR
TCR/CAR
102
103
104
105 Agonist alone crossover EC50
102
103
104
105
Antagonist partial response EC50
Perturbation [Antagonist] Antagonist ITAMs Crosstalk TCR/TCR TCR/CAR
102
103
104
105 Agonist alone crossover EC50
102
103
104
105
Antagonist partial response EC50
Perturbation [Antagonist] Antagonist ITAMs Crosstalk TCR/TCR TCR/CAR
0.0
0.5
1.0
1.5
2.0
2.5
Mean [IL-2] over time (pM)
1e 3 [Antagonist]
102
103
104 Antagonist quality (EC50)
0.0
0.2
0.4
0.6
0.8
1.0
Mean [IL-2] over time (pM)
1e 3
0.0
0.2
0.4
0.6
0.8
1.0
1.2
1.4
1.6
Mean [IL-2] over time (nM)
1e 3 Antagonist ITAMs
101
102
103
104 Antagonist Quality (EC50)
0.0
0.5
1.0
1.5
2.0
2.5
3.0
3.5
4.0
Mean [IL-2] over time (nM)
1e 3
Agonist crossover EC50 Partial response EC50
0.0
0.5
1.0
1.5
2.0
2.5
Mean [IL-2] over time (pM)
1e 3 [Antagonist]
102
103
104 Antagonist quality (EC50)
0.0
0.2
0.4
0.6
0.8
1.0
Mean [IL-2] over time (pM)
1e 3
102
103
104 Antagonist EC50
0
20
40
60
80
100
Agonist + Antagonist
Agonist (% Max)
Original Antagonist Quality
10 2
100
102 Antagonist EC50 Partial response EC50
Scaled Antagonist Quality Perturbation [Antagonist] Antagonist ITAMs Antagonist Q4 T4 V4 G4 E1 Crosstalk TCR/TCR TCR/CAR
102
103
104 Antagonist EC50
0
20
40
60
80
100
Agonist + Antagonist
Agonist (% Max)
Original Antagonist Quality
10 2
100
102 Antagonist EC50 Partial response EC50
Scaled Antagonist Quality Perturbation [Antagonist] Antagonist ITAMs Antagonist Q4 T4 V4 G4 E1 Crosstalk TCR/TCR TCR/CAR
0.0
0.5
1.0
1.5
2.0
2.5
Mean [IL-2] over time (pM)
1e 3 [Antagonist]
102
103
104 Antagonist quality (EC50)
0.0
0.2
0.4
0.6
0.8
1.0
Mean [IL-2] over time (pM)
1e 3
Figure 5
High-dimensional analysis of TCR antagonism using the IMMUNOtron platform (A) Schematic of molecular perturbations for CAR T cells applied and analyzed with robotic platform (B) Dataset of all cell activation measurements collected in response to dual TCR/CAR ligand stimulation (C) Combined, antagonist only, and agonist only response curves for various molecular perturbations. “Agonist crossover EC50”: quality of antigen where the agonist response was equal to the “agonist+antagonist” response. “A-
ntagonist partial response EC50”: quality of antigen on the antagonist curve where a minimal (10 % above baseline) response was first achieved. (D) Scaling the antagonist quality EC50 by the partial response EC50 before plotting agonist/antagonist ratios reveals a unified antagonism curve. The solid line is a visual guide.
4.2. Antigen mixtures and vaccine design
An important and surprising recent finding about T cells’ ligand discernement is that immune responses are not binary: a self/nonself dichotomy or a discrete classification of T cell ligands (null, positively-selecting, negatively-selecting) does not properly account for the true spectrum of immune responses. Rather, antigenicity, T cell population responses (2) and their modulation by antagonistic ligands are continuous features of TCR signaling (33, 55), which can be ordered in a low-dimensional-
 space. A full understanding of T cell recognition requires a more “continuous” mindset: from an experimental standpoint,
www.annualreviews.org • Learning the principles of T cell antigen discernment 21

binary assays to assess antigenicity (such as ELISPOT) are likely too simplified, while from a computational standpoint, future models and machine learning algorithms should predict a spectrum of responses rather than binary outcomes (116, 7). Accurately quantifying mixtures of antigens for their immunogenic potential is of crucial importance in vaccine designs, as they may elicit antagonistic interactions. Our own preliminary modeling results suggest that, among peptides one amino acid substitut-
ion away from pathogenic agonists and cancer neoantigens, up to 60 % of these peptides are antagonists (55). Weak self-derived antigens can end up being antagonists against the better agonists in the mixture, and this can be tested in dual-stimulation assay. Hence, less is more when designing bespoke neoantigen vaccines due to the anticipated prevalence of antagonists among single amino acid substitutions. Based on the recent theoretical understanding in TCR ligand discernement, we would caution a-
gainst administering large mixtures of antigens aimed at maximizing vaccine immunogenicity, because of their potential antagonistic effects.
4.3. A theory for adversarial immune strategies
Going back to theory, the necessary relation between optimal antigen discernment and antagonism is likely an instance of a more general problem in decision-making. Computer scientists observed that machine learning classifiers ’naively’ trained on discrete categories can be easily fooled by very weak but well-designed “adversarial perturbations” (109). To solve this issue, “adversarial training” is performed, making sure that classification is still possible in the presence of adversarial perturba-
tions (38). This strategy is similar to the procedure used in (56) to build networks resistant to antagonism by self-like antigens in TCR signaling. The correspondence between adversarial strategies and antagonism was more rigorously formalized in (94). Following inspiration from machine learning, one can design ’adversarial strategies’ against AKPR-type models, and demonstrate that there are qualitative changes in the robustness to adversarial attacks in AKPR models depending on the nature of the-
 negative feedback. Such insight resonates with the experimental findings that the complex structure of the TCR signalosome is necessary to achieve enhanced ligand discernment (42, 33). Notably, the general problem of adversarial examples in machine learning is still unsolved to this date (101, 110). It is interesting that the immune system as a whole may have evolved to be relatively robust to ’biological’ adversarial attacks – otherwise, it would be constantly fooled by mutated pathogens with an-
tagonistic properties (54). Seen in this light, the reduction of dimensionality performed by TCR recognition of ligand binding times might be an evolutionary solution to minimize the number of possible adversarial directions in parameter space.
4.4. The immune system as a playground for systems biophysics
For a long time, the dynamical computations performed by the immune system and its underlying logic remained difficult to grasp and to test. In the T cell context, this motivated the design of systems-level models based on first principles (76) or explicit biochemistry (5). Within the last few of years, experimental and technological advances (e.g. robotic platforms) have allowed scientists to probe the dynamics of the immune system with unprecedented resolution. Leveraging ideas from machine lear-
ning to build data embedding surprisingly revealed an underlying simplicity, with one parameter controlling T cell activation (2), consistent with the AKPR families of models (33). This alignment between data
22 Bourassa et al.

and simple models in turn allows for more specific tests and improvements of the models (e.g. via antagonism quantification). For these reasons, the immune system appears as an ideal playground for systems and theoretical biophysicists, where new principles and frontiers can now be explored theoretically and tested experimentally, and can be extended beyond T cells with similar tools and ideas (e.g. B cell affinity maturation (77, 23), regulatory T cells’ role in immune tolerance (119, 69), macro-
phage polarization to modulate between tissue inflammation and repair (87)). Evolution has sculpted very complex biological networks (signaling and transcription within individual leukocytes, but also at the level of population of leukocytes): it is a gauntlet to biophysicists to generate reductionist/phenomenological models that capture the “substantifique moelle” (“substantial marrow”, Rabelais) (93, p. 38) of the immune system, without missing its key functions. Hence, the future looks rich and-
 promising for the field of quantitative immunology: high-throughput quantitative experiments over a wide range of immunological settings will usher testable better theoretical models of immune response, and in turn, such theoretical understanding will generalize better and help optimize immune engineering and control for direct clinical applications (55).
DISCLOSURE STATEMENT
The authors are not aware of any affiliations, memberships, funding, or financial holdings that might be perceived as affecting the objectivity of this review.
LITERATURE CITED
1. Achar SR, Altan-Bonnet G. 2021. plateypus 2. Achar SR, Bourassa FX, Rademaker TJ, Lee A, Kondo T, et al. 2022. Universal antigen encoding of T cell activation from high-dimensional cytokine dynamics. Science 376(6595):880884 3. Aivazian D, Stern LJ. 2000. Phosphorylation of T cell receptor ζ is regulated by a lipid dependent folding transition. Nature Structural Biology 7(11):1023–1026
4. Alon U. 2007. An introduction to systems biology: design principles of biological circuits. No. 10 in Chapman & Hall/CRC mathematical and computational biology series. Boca Raton, FL: Chapman & Hall/CRC 5. Altan-Bonnet G, Germain RN. 2005. Modeling T cell antigen discrimination based on feedback control of digital ERK responses. PLoS biology 3(11):e356 6. Altan-Bonnet G, Mora T, Walczak AM. 2020. Quantitative immunology for physicists. Physics Reports 849:1–83
7. Banerjee A, Pattinson DJ, Wincek CL, Bunk P, Axhemi A, et al. 2025. Comprehensive epitope mutational scan database enables accurate T cell receptor cross-reactivity prediction. bioRxiv 8. Bialek WS. 2012. Biophysics : searching for principles. Princeton, NJ: Princeton University Press 9. Bourassa FXP. 2024. Low-dimensional models of immune sensing and signaling. Ph.D. thesis, McGill 10. Braun DA, Moranzoni G, Chea V, McGregor BA, Blass E, et al. 2025. A neoantigen vaccine generates antitumour i-
mmunity in renal cell carcinoma. Nature 639(8054):474–482 11. Britain DM, Town JP, Weiner OD. 2022. Progressive enhancement of kinetic proofreading in T cell antigen discrimination from receptor activation to DAG generation. eLife 11:e75263
www.annualreviews.org • Learning the principles of T cell antigen discernment 23

12. Buchholz VR, Flossdorf M, Hensel I, Kretschmer L, Weissbrich B, et al. 2013. Disparate Individual Fates Compose Robust CD8+ T Cell Immunity. Science 340(6132):630 13. Burnet F, Fenner F. 1949. The Production of Antibodies. Influenza: A Survey of the Last 50 Years in the Light of Modern Work on the Virus of Epidemic Influenza. Macmillan 14. Butler TC, Kardar M, Chakraborty AK. 2013. Quorum sensing allows T cells to discriminate between self and nonself. Proceedings of the National Academy of S-
ciences 110(29):11833
15. Casasola-LaMacchia A, Ritorto MS, Seward RJ, Ahyi-Amendah N, Ciarla A, et al. 2021. Human leukocyte antigen class II quantification by targeted mass spectrometry in dendriticlike cell lines and monocyte-derived dendritic cells. Scientific Reports 11(1):1028 16. Choi HK, Cong P, Ge C, Natarajan A, Liu B, et al. 2023. Catch bond models may explain how force amplifies TCR signaling and antigen discrimination. Nature Communications 14(1) 17. Cover T, Thomas J. 2006. Elements of Information Theory.-
 Hoboken, NJ: Wiley, 2nd ed. 18. Cui W, Mehta P. 2018. Identifying feasible operating regimes for early T-cell recognition: The speed, energy, accuracy trade-off in kinetic proofreading and adaptive sorting. PLOS ONE 13(8):e0202331 19. Daniels MA, Teixeiro E, Gill J, Hausmann B, Roubaty D, et al. 2006. Thymic selection threshold defined by compartmentalization of Ras/MAPK signalling. Nature 444(7120):724–729 20. Davis SJ, van der Merwe PA. 2006. The kinetic-segregation model: TCR triggering and be-
yond. Nature Immunology 7(8):803–809 21. De Boer RJ, Perelson AS. 1993. How diverse should the immune system be? Proceedings of the Royal Society of London. Series B: Biological Sciences 252(1335):171–175
22. Devlin JR, Alonso JA, Ayres CM, Keller GLJ, Bobisse S, et al. 2020. Structural dissimilarity from self drives neoepitope escape from immune tolerance. Nature Chemical Biology 16(11):1269–1276 23. DeWitt WS, Vora AA, Araki T, Galloway JG, Alkutkar T, et al. 2025. Replaying germinal center evolution on a quantified affinity landscape. bioRxiv 24. Dittel BN, Sˇtefanov ́a I, Germain RN, Janeway CA. 1999. Cross-Antagonism of a T Cell Clone Expressing Two Distinct T Cell Receptors. Immunity 11(3):28-
9–298 25. Elhanati Y, Sethna Z, Callan CG, Mora T, Walczak AM. 2018. Predicting the spectrum of TCR repertoire sharing with a data-driven model of recombination. Immunological Reviews 284(1):167–179 26. Feinerman O, Germain RN, Altan-Bonnet G. 2008. Quantitative challenges in understanding ligand discrimination by αβ T cells. Molecular Immunology 45(3):619–631 27. Feinerman O, Veiga J, Dorfman JR, Germain RN, Altan-Bonnet G. 2008. Variability and Robustness in T Cell Activation from Regulated Hete-
rogeneity in Protein Levels. Science 321(5892):1081–1084 28. Fran ̧cois P, Altan-Bonnet G. 2016. The Case for Absolute Ligand Discrimination: Modeling Information Processing and Decision by Immune T Cells. Journal of Statistical Physics 162(5):1130–1152 29. Fran ̧cois P, Hemery M, Johnson KA, Saunders LN. 2016. Phenotypic spandrel: absolute discrimination and ligand antagonism. Physical Biology 13(6):066011 30. Fran ̧cois P, Voisinne G, Siggia ED, Altan-Bonnet G, Vergassola M. 2013. Phenotypic mod-
el for early T-cell activation displaying sensitivity, specificity, and antagonism. Proceedings of the National Academy of Sciences of the United States of America 110(10):E888–897
31. Ganti RS, Lo WL, McAffee DB, Groves JT, Weiss A, Chakraborty AK. 2020. How the T cell signaling network processes information to discriminate between self and agonist ligands. Proceedings of the National Academy of Sciences 117(42):26020–26030
32. Gascoigne NR, Zal T, Alam SM. 2001. T-cell receptor binding kinetics in T-cell development and activation. Expert Reviews in Molecular Medicine 3(6):1–17
33. Gaud G, Achar S, Bourassa FXP, Davies J, Hatzihristidis T, et al. 2023. CD3ζ ITAMs enable ligand discrimination and antagonism by inhibiting TCR signaling in response to low-affinity
24 Bourassa et al.

peptides. Nature Immunology 24(12):2121–2134 34. Gaud G, Lesourne R, Love PE. 2018. Regulatory mechanisms in T cell receptor signalling. Nature Reviews Immunology 18(8):485–497
35. Gerlach C, Rohr JC, Perie ́ L, Van Rooij N, Van Heijst JWJ, et al. 2013. Heterogeneous Differentiation Patterns of Individual CD8 + T Cells. Science 340(6132):635–639 36. Germain RN, Stefanov ́a I. 1999. THE DYNAMICS OF T CELL RECEPTOR SIGNALING: Complex Orchestration and the Key Roles of Tempo and Cooperation1. Annual Review of Immunology 17(Volume 17, 1999):467–522 37. Gett AV, Hodgkin PD. 2000. A cellular calculus for signal integration by T cells. Nature Immunology 1(3):239–244 38. Goodfel-
low IJ, Shlens J, Szegedy C. 2015. Explaining and Harnessing Adversarial Examples. arXiv
39. Guy CS, Vignali KM, Temirov J, Bettini ML, Overacre AE, et al. 2013. Distinct TCR signaling pathways drive proliferation and cytokine production in T cells. Nature Immunology 14(3):262–270 40. Hogquist KA, Jameson SC, Bevan MJ. 1995. Strong agonist ligands for the T cell receptor do not mediate positive selection of functional CD8+ T cells. Immunity 3(1):79–86 41. Hogquist KA, Jameson SC, Heath WR, Howard JL, Bevan MJ, Carbone FR. 1994. T cell receptor antagonist peptides induce positive selec-
tion. Cell 76(1):17–27 42. Holst J, Wang H, Eder KD, Workman CJ, Boyd KL, et al. 2008. Scalable signaling mediated by T cell antigen receptor–CD3 ITAMs ensures effective negative selection and prevents autoimmunity. Nature Immunology 9(6):658–666 43. Hopfield JJ. 1974. Kinetic Proofreading: A New Mechanism for Reducing Errors in Biosynthetic Processes Requiring High Specificity. Proceedings of the National Academy of Sciences 71(10):4135–4139 44. Huhn A, Kutuzov MA, Maclean K, Uhl LFK, Mahale JM, -
et al. 2025. The 3D affinities of the OT-I TCR to foreign and self-antigens predict their 2D affinities and reveal imperfect antigen discrimination. bioRxiv 45. Huppa JB, Axmann M, M ̈ortelmaier MA, Lillemeier BF, Newell EW, et al. 2010. TCR–peptide–MHC interactions in situ show accelerated kinetics and increased affinity. Nature 463(7283):963–967 46. Irvine DJ, Purbhoo MA, Krogsgaard M, Davis MM. 2002. Direct observation of ligand recognition by T cells. Nature 419(6909):845–849 47. James JR, Val-
e RD. 2012. Biophysical mechanism of T-cell receptor triggering in a reconstituted system. Nature 487(7405):64–69 48. Jobin K, Seetharama D, Ru ̈ttger L, Fenton C, Kharybina E, et al. 2025. A distinct priming phase regulates CD8 T cell immunity by orchestrating paracrine IL-2 signals. Science 388(6743):eadq1405 49. Johnson KG, Bromley SK, Dustin ML, Thomas ML. 2000. A supramolecular basis for CD45 tyrosine phosphatase regulation in sustained T cell activation. Proceedings of the National Academy o-
f Sciences 97(18):10138–10143
50. Kersh EN, Kersh GJ, Allen PM. 1999. Partially Phosphorylated T Cell Receptor ζ Molecules Can Inhibit T Cell Activation. The Journal of Experimental Medicine 190(11):1627–1636 51. Kersh EN, Shaw AS, Allen PM. 1998. Fidelity of T Cell Activation Through Multistep T Cell Receptor ζ Phosphorylation. Science 281(5376):572–575 52. Kersh GJ, Kersh EN, Fremont DH, Allen PM. 1998. High- and Low-Potency Ligands with Similar Affinities for the TCR. Immunity 9(6):817–826 53. Kirby D, Zilman A. 2023. Proof-
reading does not result in more reliable ligand discrimination in receptor signaling due to its inherent stochasticity. Proceedings of the National Academy of Sciences of the United States of America 120(21):e2212795120
54. Klenerman P, Rowland-Jones S, McAdam S, Edwards J, Daenke S, et al. 1994. Cytotoxic T-cell
www.annualreviews.org • Learning the principles of T cell antigen discernment 25

activity antagonized by naturally occurring HIV-1 Gag variants. Nature 369(6479):403–407 55. Kondo T, Bourassa FX, Achar S, DuSold J, Ce ́spedes PF, et al. 2025. Engineering TCRcontrolled fuzzy logic into CAR T cells enhances therapeutic specificity. Cell 56. Lalanne JB, Fran ̧cois P. 2013. Principles of Adaptive Sorting Revealed by In Silico Evolution. Physical Review Letters 110(21)
57. Lalanne JB, Franc ̧ois P. 2015. Chemodetection in fluctuating environments: Receptor coupling, buffering, and antagonism. Proceedings of the National Academy of Sciences 112(6):1898
58. Lam N, Lee Y, Farber DL. 2024. A guide to adaptive immune memory. Nature Reviews Immunology 24(11):810–829 59. Langman R, Cohn M. 2000. A minimal model for the self-nonself discrimination: a return to the basics. Seminars in Immunology 12(3):189–195 60. Lever M, Lim HS, Kruger P, Nguyen J, Trendel N, et al. 2016. Architecture of a minimal signaling pathway explains the T-cell response to a 1 million-fold variation in antigen affinity and dose. Proceedings of the National Academy of Sciences 11-
3(43)
61. Lever M, Maini PK, van der Merwe PA, Dushek O. 2014. Phenotypic models of T cell activation. Nature Reviews. Immunology 14(9):619–629
62. Lipniacki T, Hat B, Faeder JR, Hlavacek WS. 2008. Stochastic effects and bistability in T cell receptor signaling. Journal of Theoretical Biology 254(1):110–122 63. Liu B, Chen W, Evavold BD, Zhu C. 2014. Accumulation of Dynamic Catch Bonds between TCR and Agonist Peptide-MHC Triggers T Cell Signaling. Cell 157(2):357–368 64. Ma W, Trusina A, El-Samad H, Lim WA, Tang C. 2009. Defining Network Topologies that Can Achieve Biochemical Adaptation. Cell 138(4):760–773 65. Madrenas J, Wange RL, Wang-
 JL, Isakov N, Samelson LE, Germain RN. 1995. ζ Phosphorylation Without ZAP-70 Activation Induced by TCR Antagonists or Partial Agonists. Science 267(5197):515–518 66. Mangan S, Alon U. 2003. Structure and function of the feed-forward loop network motif. Proceedings of the National Academy of Sciences 100(21):11980–11985
67. Marchingo JM, Kan A, Sutherland RM, Duffy KR, Wellard CJ, et al. 2014. Antigen affinity, costimulation, and cytokine inputs sum linearly to amplify T cell expansion. Science 346(6213):1123 68. Marcou Q, Mora T, Walczak AM. 2018. High-throughput immune repertoire analysis with IGoR. Nature Communications 9(1)
69. Marsland R, Howell O, Mayer A, Mehta P. 2021. Tregs self-organize into a computing ecosystem and implement a sophisticated optimization algorithm for mediating immune response. Proceedings of the National Academy of Sciences 118(1):e2011709118
70. Mason D. 1998. A very high level of crossreactivity is an essential feature of the T-cell receptor. Immunology Today 19(9):395–404
71. Mayer A, Balasubramanian V, Mora T, Walczak AM. 2015. How a well-adapted immune system is organized. Proceedings of the National Academy of Sciences 112(19):5950–5955
72. Mayer A, Balasubramanian V, Walczak AM, Mora T. 2019. How a well-adapting immune system remembers. Proceedings of the National Academy of Sciences 116(18):8815–8823
73. Mayer A, Levine JA, Russo CJ, Marcou Q, Bialek W, Greenbaum BD. 2025. How different are self and nonself? arXiv 74. Mayer A, Zhang Y, Perelson AS, Wingreen NS. 2019. Regulation of T cell expansion by antigen presentation dynamics. Proceedings of the National Academy of Sciences 116(13):5914
75. McAffee DB, O’Dair MK, Lin JJ, Low-Nam ST, Wilhelm KB, et al. 2022. Discrete LAT condensates encode antigen information from single pMHC:TCR binding events. Nature Communications 13(1):7446
76. McKeithan TW. 1995. Kinetic proofreading in T-cell receptor signal transduction. Proceedings of the National Academy of Sciences 92(11):5042
77. Merkenschlager J, Pyo AGT, Silva Santos GS, Schaefer-Babajew D, Cipolla M, et al. 2025. Reg
26 Bourassa et al.

ulated somatic hypermutation enhances antibody affinity maturation. Nature 641(8062):495502 78. Moffett AS, Ganzinger KA, Eckford AW. 2025. Comparing kinetic proofreading and kinetic segregation for T cell receptor activation. Physical Review Research 7(2) 79. Mora T, Walczak AM. 2019. How many different clonotypes do immune repertoires contain? Current Opinion in Systems Biology 18:104–110
80. Morita S, Groves JT. 2025. Parallel reactions on a single T cell receptor offer a robust kinetic proofreading mechanism. Proceedings of the National Academy of Sciences 122(40):e2514057122 81. Murugan A, Mora T, Walczak AM, Callan CG. 2012. Statistical inference of the generation probability of T-cell receptors from sequence repertoires. Proceedings of the National Academy of Sciences 109(40):16161–16166 82. Ninio J. 1975. Kinetic amplification of enzyme discrimination. Biochimie 57(5):587–595-
 83. O’Donoghue GP, Pielak RM, Smoligovets AA, Lin JJ, Groves JT. 2013. Direct single molecule measurement of TCR triggering by agonist pMHC in living primary T cells. eLife 2:e00778 84. Patel A, Andre V, Eguiguren SB, Barton MI, Burton J, et al. 2023. Using CombiCells, a platform for titration and combinatorial display of cell surface ligands, to study T-cell antigen sensitivity modulation by accessory receptors. The EMBO Journal 43(1):132–150 85. Pettmann J, Huhn A, Abu Shah E, Kutuzov MA, Wilso-
n DB, et al. 2021. The discriminatory power of the T cell receptor. eLife 10:e67092 86. Pitcher LA, Oers NSCv. 2003. T-cell receptor signal transmission: who gives an ITAM? Trends in Immunology 24(10):554–560 87. Pizzurro GA, Miller-Jensen K. 2023. Reframing macrophage diversity with network motifs. Trends in Immunology 44(12):965–970
88. Plas DR, Johnson R, Pingel JT, Matthews RJ, Dalton M, et al. 1996. Direct Regulation of ZAP-70 by SHP-1 in T Cell Antigen Receptor Signaling. Science 272(5265):1173–1176 89. Pradeu T. 2020. Philosophy of Immunology. Elements in the Philosophy of Biology. Cambridge: Cambridge University Press 90. Pradeu T, Carosella ED. 2006. On the definition of a criterion of immunogenicity. Proceedings of the National Academy of Sciences 103(47):17858–17861
91. Pradeu T, Jaeger S, Vivier E. 2013. The speed of change: towards a discontinuity theory of immunity? Nature Reviews Immunology 13(10):764–769
92. Proulx-Giraldeau F, Rademaker TJ, Fran ̧cois P. 2017. Untangling the Hairball: Fitness-Based Asymptotic Reduction of Biological Networks. Biophysical Journal 113(8):1893–1906 93. Rabelais F. 1998. Gargantua. Classiques. Paris: Pocket 94. Rademaker TJ, Bengio E, Franc ̧ois P. 2019. Attack and Defense in Cellular Decision-Making: Lessons from Machine Learning. Physical Review X 9(3):031012 95. Reddy G, Zak JD, Vergassola M, Murthy VN. 2018. Antagonism in olfactory receptor neurons and its implic-
ations for the perception of odor mixtures. eLife 7:e34958 96. Reis E Sousa C, Levine EH, Germain RN. 1996. Partial signaling by CD8+ T cells in response to antagonist ligands. The Journal of experimental medicine 184(1):149–157 97. Rieke F, Baylor DA. 1998. Single-photon detection by rod cells of the retina. Reviews of Modern Physics 70(3):1027–1036 98. Rohrs JA, Zheng D, Graham NA, Wang P, Finley SD. 2018. Computational Model of Chimeric Antigen Receptors Explains Site-Specific Phosphorylation K-
inetics. Biophysical Journal 115(6):1116–1129 99. Sethna Z, Elhanati Y, Callan CG, Walczak AM, Mora T. 2019. OLGA: fast computation of generation probabilities of B- and T-cell receptor amino acid sequences and motifs. Bioinformatics 35(17):2974–2981 100. Sethna Z, Guasp P, Reiche C, Milighetti M, Ceglia N, et al. 2025. RNA neoantigen vaccines prime long-lived CD8+ T cells in pancreatic cancer. Nature 639(8056):1042–1051
www.annualreviews.org • Learning the principles of T cell antigen discernment 27

101. Shayegani E, Mamun MAA, Fu Y, Zaree P, Dong Y, Abu-Ghazaleh N. 2023. Survey of Vulnerabilities in Large Language Models Revealed by Adversarial Attacks. arXiv 102. Sloan-Lancaster J, Shaw AS, Rothbard JB, Allen PM. 1994. Partial T cell signaling: Altered phospho-ζ and lack of zap70 recruitment in APL-induced T cell anergy. Cell 79(5):913–922 103. Soerens AG, Ku ̈nzli M, Quarnstrom CF, Scott MC, Swanson L, et al. 2023. Functional T cells are capable of supernumerary cell division and longevit-
y. Nature 614(7949):762–766 104. Sol ́e R, Moses M, Forrest S. 2019. Liquid brains, solid brains. Philosophical Transactions of the Royal Society B: Biological Sciences 374(1774):20190040
105. Stopfer LE, Gajadhar AS, Patel B, Gallien S, Frederick DT, et al. 2021. Absolute quantification of tumor antigens using embedded MHC-I isotopologue calibrants. Proceedings of the National Academy of Sciences 118(37):e2111173118 106. Stopfer LE, Mesfin JM, Joughin BA, Lauffenburger DA, White FM. 2020. Multiplexed relative and absolute quantitative immunopeptidomics reveals MHC I repertoire alterations induced by CDK4/6 inhibition. Nature Communications 11(1):2760 107. Suˇsac L, Vuong MT, Thoma-
s C, Bu ̈low Sv, O’Brien-Ball C, et al. 2022. Structure of a fully assembled tumor-specific T cell receptor ligated by pMHC. Cell 185(17):3201–3213.e19 108. Sykulev Y, Joo M, Vturina I, Tsomides TJ, Eisen HN. 1996. Evidence that a Single Peptide–MHC Complex on a Target Cell Can Elicit a Cytolytic T Cell Response. Immunity 4(6):565–571 109. Szegedy C, Zaremba W, Sutskever I, Bruna J, Erhan D, et al. 2014. Intriguing properties of neural networks. arXiv 110. Tao Y, Shen Y, Zhang H, Shen Y, Wang L, e-
t al. 2024. Robustness of Large Language Models Against Adversarial Attacks. arXiv 111. Taylor MJ, Husain K, Gartner ZJ, Mayor S, Vale RD. 2017. A DNA-Based T Cell Receptor Reveals a Role for Receptor Clustering in Ligand Discrimination. Cell 169(1):108–119.e20 112. Tischer DK, Weiner OD. 2019. Light-based tuning of ligand half-life supports kinetic proofreading model of T cell signaling. eLife 8:e42498 113. Torigoe C, Inman JK, Metzger H. 1998. An Unusual Mechanism for Ligand Antagonism. Science -
281(5376):568–572 114. Trendel N, Kruger P, Gaglione S, Nguyen J, Pettmann J, et al. 2021. Perfect adaptation of CD8+ T cell responses to constant antigen input over a wide range of affinities is overcome by costimulation. Science Signaling 14(666):eaay9363 115. Van Dorp CH, Gray JI, Paik DH, Farber DL, Yates AJ. 2025. A variational deep-learning approach to modeling memory T cell dynamics 116. Visani GM, Pun MN, Minervina AA, Bradley P, Thomas P, Nourmohammad A. 2025. T-cell receptor specificity -
landscape revealed through de novo peptide design. bioRxiv :2025.02.28.640903 117. Voisinne G, Locard-Paulet M, Froment C, Maturin E, Menoita MG, et al. 2022. Kinetic proofreading through the multi-step activation of the ZAP70 kinase underlies early T cell ligand discrimination. Nature Immunology 23:1355–1364 118. Wither MJ, White WL, Pendyala S, Leanza PJ, Fowler DM, Kueh HY. 2023. Antigen perception in T cells by long-term Erk and NFAT signaling dynamics. Proceedings of the National Academy of S-
ciences 120(52)
119. Wong HS, Park K, Gola A, Baptista AP, Miller CH, et al. 2021. A local regulatory T cell feedback circuit maintains immune homeostasis by pruning self-activated T cells. Cell 184(15):3981–3997.e22 120. Wylie DC, Das J, Chakraborty AK. 2007. Sensitivity of T cells to antigen and antagonism emerges from differential regulation of the same molecular signaling module. Proceedings of the National Academy of Sciences 104(13):5533–5538
121. Yuan Kueh H, Handel A, Hoffmann A, Chowell D, Gottschalk RA, et al. 2024. What unique insights can modeling approaches capture about the immune system? Cell Systems 15(12):1148
28 Bourassa et al.

1152 122. Zehn D, Lee SY, Bevan MJ. 2009. Complete but curtailed T-cell response to very low-affinity antigen. Nature 458(7235):211–214 123. Luksza M, Sethna ZM, Rojas LA, Lihm J, Bravi B, et al. 2022. Neoantigen quality predicts immunoediting in survivors of pancreatic cancer. Nature 606(7913):389–395 124. ˇStefanov ́a I, Hemmer B, Vergelli M, Martin R, Biddison WE, Germain RN. 2003. TCR ligand discrimination is enforced by competing ERK positive and SHP-1 negative feedback pathways. Nature Immu-
nology 4(3):248–254
www.annualreviews.org • Learning the principles of T cell antigen discernment 29

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:05.983Z
- **Text Length:** 96010 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 29 of 29
