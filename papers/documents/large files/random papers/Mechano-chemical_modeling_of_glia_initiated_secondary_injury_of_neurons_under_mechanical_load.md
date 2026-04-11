# PDF Document: Auddya and Rudraraju - 2025 - Mechano-chemical modeling of glia initiated secondary injury of neurons under mechanical load.pdf

**File Path:** Auddya and Rudraraju - 2025 - Mechano-chemical modeling of glia initiated secondary injury of neurons under mechanical load.pdf

**Processed Date:** 2026-02-10T18:17:02.424Z

**File Size:** 12162.29 KB

**Total Pages:** 19

**Extracted Pages:** 19

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3653

**Title:** Mechano-chemical modeling of glia initiated secondary injury of neurons under mechanical load

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Mechano-chemical modeling of glia initiated secondary injury of neurons under
mechanical load
Debabrata Auddyaa, Shiva Rudrarajua
aDepartment of Mechanical Engineering, University of Wisconsin-Madison, WI, USA
Abstract
Traumatic Brain Injury (TBI) is associated with an impact or concussion to the head with the injury being specifically characterized through pathological degradation at various biological length scales. To quantify the sequence of events following TBI, various mechanical modeling techniques have been proposed in the literature that seek to quantify neuronal-scale to tissue-scale metrics of brain damage. Broadly, the two categories of degradation encompass physiological deterioration of neurons and-
 upregulation of chemical entities such as neurotransmitters which causes initiation of downstream pathophysiological effects. Despite the plethora of pathways which contribute to the downstream processes, in this work, we delineate and model a potential glia-initiated injury pathway that leads to secondary injury. The primary aim of this work is to demonstrate a continuum framework which models the multiphysics of mechanochemical interactions underlying TBI. Using a coupled PDE (partial different-
ial equation) formulation and FEM (finite element method) discretization, the framework highlights evolution of field variables which spatio-temporally resolve mechanical metrics and chemical species across neuronal clusters. The modeling domain encompasses microglia, neurons and the extracellular matrix. The continuum framework used to model the mechano-chemical interactions assumes a three dimensional viscoelastic network to capture the mechanical response underlying proteins constituting the ne-
uron microstructure and advection-diffusion equations modeling spatio-temporal evolution of chemical species. We use this framework to numerically estimate different critical concentrations of chemical species originating as a result of mechanical strain distribution across the domain. In this work, we identified expression of critical biomarkers within the labyrinth of molecular pathways and construct a mathematical framework which captures the underlying multiphysics of mechano-chemical interact-
ions. This framework is an attempt to quantify secondary injury and thus assist in developing targeted TBI treatments.
Keywords: Biomarkers, necroptosis, chemical injury, mechanochemistry, excitotoxicity, neurotransmitters, neuron clusters, pathophysiology
1. Introduction
A broad classification of injuries caused due to an impact or concussion to the head is referred as Traumatic Brain Injury (TBI). The difficulty in TBI diagnoses originates from the heterogeneity of the brain, structural complexity of the neuronal microstructure and the complex interplay of proteins at different length and time scales [1]. TBI is generally manifested as primary and secondary, with primary referring to the immediate mechanical response of the brain and the secondary type culminatin-
g as a biochemical response [2]. The initiation of the secondary injury is triggered by a pathological grade of mechanical load and as the initial trauma unfolds, a cascade of complex cellular and molecular events follow, potentially exacerbating the damage inflicted during the primary injury. The injury progression involves upregulation of critical neurotransmitters, inflammasomes and prolonged activation of ionic channels which are crucial to maintaining physiological homeostasis within neurons -
and neuronal clusters [3]. Identifying the cascade of these molecular events in accelerating neurological degradation remains as a fundamental
Email address: shiva.rudraraju@wisc.edu (Shiva Rudraraju)
arXiv:2511.20392v1 [q-bio.QM] 25 Nov 2025

challenge in post injury diagnoses. In this work we aim to qualitatively and quantitatively demonstrate one of the many pathways initiated by glial cells , underlying TBI secondary injury. Previous studies have highlighted key biomarkers relevant to TBI which trigger downstream pathological pathways [4]. Recent studies have highlighted activation of the transmembrane channel proteins Pannexin-1 (Panx1) [5] present in neurons and glial cells, due to an increase in mechanical strain [6], which are -
key mediators of ATP (Adenosine Triphosphate) release into the extracellular region, thereby initiating neurodegeneration [7]. An increase in extracellular ATP, which is widely known for its role in energy metabolism, activates trimeric purinergic receptors P2X which are ATP-sensitive ion channels present in the microglia [8]. Xing et al. [9] quantitatively highlighted the influence of increasing extracellular ATP concentration on P2X and P2Y receptor sensitivity and activation dynamics of the P2X-
7 receptor, whose expression was associated with inflammation [10, 11]. Further, the P2X7 receptor also assists in production and release of TNF-α (Tumor Necrosis Factor), another major pro-inflammatory cytokine, responsible for triggering an inflammatory response [12, 13]. TNF-α has been implicated in modulating glutamate transmission and excitotoxicity [14] in the brain and can increase the release of glutamate, promoting excitotoxicity by several mechanisms [15] such as enhancing expression of -
the NMDA receptor [16] and disrupting glutamate clearance mechanisms [17] in the brain which leads to neuronal damage [18]. Together they cause irregular signal transmission across neurons and uncontrolled inflammation leading to neurodegeneration [19, 20]. To address this complexity in spatio-temporally quantifying downstream neurodegenerative processes, we identify a clinically relevant ensemble of biomarkers constituting glia-induced secondary injury. Additionally, we demonstrate spatial locali-
sation of these species and their downstream influence on associated elements within the pathway. Therefore, our objective is to quantify the gap between isolated molecular events at the cellular scale and neurodegeneration at the tissue scale using a qualitative narrative. Our approach of quantifying the mechanotransduction process underlying TBI is structured into two components. Firstly, we construct a mechano-chemical formulation consisting of relevant chemical and mechanical fields which dict-
ate the multi-physics of secondary injury. Secondly, we numerically develop geometrical domains resembling neurons, microglia and extracellular matrix (ECM) to spatially represent localisation and evolution of chemical species within a larger neuronal cluster domain. This enables visualisation of the interactions between mechanical and chemical fields and their spatio-temporal resolution within single and multiple neuron-microglia-ECM assembly. Underlying this multiphysics setup for approximating -
mechanics induced chemical injury, the mechanical response is modeled using a three dimensional viscoelastic network consisting of proteins which confer structural stability to the neuron-microglia-ECM assembly. The chemical response is modeled using advection-diffusion equations with chemical fields representing molecular species (ATP, TNF-α, P2X7, glutamate) and geometrical localisation accounting for the spatial heterogeneity of these constituents across the domain. The finite element (FE) meth-
od is used to discretize the underlying coupled PDE formulation. Using appropriate sets of boundary conditions across the domain, we demonstrate spatio-temporal evolution of biomarkers and characterize mechano-chemical basis of injury thresholds. To summarize we propose a multiphysics model of molecular mechanotransduction and capture the mechanochemical dynamics arising out of secondary injury. In Section 2 we provide a detailed description of the chemical pathway proposed. In Section 3 we introd-
uce the biomarkers and quantify them using PDEs. This is followed by the numerical formulation of the multiphysics setup. In Section 4 we discuss about specific boundary value problems (BVPs) similar to TBI conditions and demonstrate mechano-chemical interactions. Additionally we construct a computational injury curve and increase the phase spectrum for TBI diagnoses. We conclude with Section 5 with a brief discussion and directions for future possibilities in the computational treatment of TBI.
2. Chemical Pathway of Necroptosis
TBI is often addressed as a "biphasic injury" having a primary and a secondary component [21]. While experimental and clinical studies have established treatment strategies for primary injury, a detailed understanding of secondary injury remains unclear primarily due to the existence of the plethora of degradation pathways [22]. This study aims to elucidate one such mechanism driving secondary injury, focusing on identifying, quantifying biomarkers, and spatiotemporally modeling the proposed pathw-
ay that leads to necroptosis [23]. Cell death, traditionally categorized into three primary types namely apoptosis, autophagy, and necrosis showcases distinct morphological and biochemical transformations, each exhibiting unique pathways during cellular degradation
2

[24]. In the context of TBI, cellular damage is characterized through apoptosis and necrosis [25]. In the context of secondary injury, emerging research suggests the presence of a meticulously regulated form of cell death, termed as necroptosis [26, 23] which is characterized by controlled activation and programmed cell death unlike apoptosis [27] or necrosis [28]. In this communication, our objective is to intricately delineate and quantify a possible chemical pathway governing necroptosis. Foll-
owing an insult, a cascade of downstream molecular pathways initiate within the brain and here we refer them as biomarkers. Crucial to biomarker expression is the activation of microglia, the resident immune cells of the central nervous system which causes production and release of molecules such as NLRP3 inflammasome [29], pro-inflammatory cytokines such as interleukins [30], TNF-α [31, 32] and neurotransmitters such as glutamate [33] most of which are expressed in varying degrees during a concus-
sion as illustrated in Fig.1. The pathway begins with a concussion to the brain characterized by mechanical deformation within neurons and neuron clusters and terminates with glutamate excitotoxicity, a classic indicator suggestive of neuronal degeneration [34]. Initiating the molecular cascade upon concussion, mechanosensitive receptor channels in the microglia, identified as Pannexins, become activated as the first elemental response in the pathway [35]. Recent studies have demonstrated the infl-
uence of mechanical deformation in prolonged activation of pannexin channels which trigger excessive release of ATP [6, 36]. Excess extracellular ATP, beyond its normal physiological levels, can trigger several detrimental effects including neuronal excitotoxicity [37], inflammation [38], oxidative stress [39] and impaired synaptic function [40]. This surplus ATP present in the extracellular space can overstimulate purinergic receptors which are widely expressed in microglia [41]. Of particular in-
terest is the P2X7 receptor, a distinct member of the purinergic receptor family of ligand-gated ion channels which plays multifaceted roles in various physiological and pathological processes [10]. Xing et al. [9] characterized P2X receptor responses across varying concentrations of ATP, examining both human and rodent receptors. Activation of these receptors, typically at high concentrations of ATP allows the influx of calcium and sodium ions and subsequent efflux of potassium ions [42, 43]. whi-
ch causes hyperexcitability [44], altered synaptic activity [45] and neuronal degradation [46, 47]. A reduction in intracellular potassium concentration serves as a signal for NLRP3 inflammasome [46] activation in microglia, and consequently leads to the processing and release of proinflammatory cytokines into the extracellular region [48]. In addition to the molecular pathway under consideration, an increased post injury oxygen consumption in the brain leads to heightened production of reactive o-
xygen species (ROS) [49] which directly stimulates the production of TNF-α [50]. TNF-α is a pleiotropic pro-inflammatory cytokine which is primarily released by activated microglia and other immune cells in the brain during secondary injury [51]. Despite its beneficial in immune defence and tissue repair [52, 53], in this study we focus on the pathophysiological impacts of this cytokine and its influence on downstream molecules. TNF-α’s detrimental impact within the molecular pathway manifests not-
ably through its influence on glutamate excitotoxicity [18]. Glutamate, often revered as the "commander" of the brain [54] orchestrates several pivotal functions crucial for neuronal signalling [55], synaptic plasticity [56], memory and cognition [57]. Neurons initiate the process of glutamate synthesis by transforming glutamine into glutamate and subsequently releasing it to astrocytes which capture the released amino acid, converting it back into glutamine before transporting it back to neurons.-
 During pathophysiological conditions, TNF-α downregulates the expression and function of glutamate transporters on astrocytes, such as excitatory amino acid transporters (EAATs). The interference of the inflammatory cytokine with glutamate uptake by astrocytes leads to increased extracellular glutamate levels, contributing to excitotoxicity and neuronal damage [15, 33]. Within glial cells, the activation of tumor necrosis factor receptor 1 (TNFR1) by TNF-α elicits a dual effect. Firstly it stimul-
ates the process of glutamate removal from astrocytes and secondly it impedes their ability to efficiently clear glutamate from the synaptic cleft. Simultaneously, TNF-α decreases the surface presence of inhibitory gamma aminobutyric acid (GABA)-A receptors, further tipping the balance towards increased glutamate [58]. The consequences of glutamate excitotoxicity commences at the molecular level, where dysregulated glutamate signaling disrupts neuronal homeostasis, triggers necroptosis [59, 60] an-
d also contributes to chronic neurodegeneration, culminating in conditions such as Alzheimer’s disease [61], Parkinson’s disease [62] and Huntington’s disease [63]. Incorporating the qualitative insights from the proposed pathway we have developed a PDE based multiphysics (mechanochemical) framework. We use our framework primarily to model neurons, neuron clusters and their microenvironment to visualise and resolve the spatio-temporal dynamics of the molecular biomarkers.
3

Figure 1: Proposed pathway of necroptosis underlying secondary injury during TBI. The pathway begins with mechanical deformation manifested as increased strain to the brain, which triggers opening of the pannexin channels leading to massive ATP efflux into the extracellular region. Increased ATP causes purinergic receptors to activate, particularly the P2X7R, which causes potassium efflux from the intra- to extracellular milieu. Decrease in ionic concentration of potassium initiates formation of -
the NLRP3 inflammasome complex. Simultaneously there is a heightened increase in the demand for oxygen causing oxidative stress and production of reactive oxygen species. This causes the NFκB pathway to trigger, also leading to intracellular formation of the NLRP3 inflammasome complex. This complex is responsible for modulating formation of proinflammatory products mainly cytokines such as TNF-α and ILs. TNF-α causes dysregulation in neuronal signalling by blocking EAAT’s on astrocytes thereby red-
ucing glutamate uptake. It also intensifies excitatory transmission by increasing permeability of the glutamate receptors to calcium ions. Increased glutamate concentration in the post synaptic region causes excitotoxicity and is considered as the pivotal step towards necroptosis.
2.1. Reduced pathway considered for quantification of chemical species
Given the challenges and complexities in mathematically modeling the entire pathway in Fig.1, primarily due to insufficient quantifiable data for every element, we suggest a more succinct approach. Our proposal involves a reduced pathway consisting of fundamental chemical biomarkers within the cascade, supported by substantial experimental validation found in the literature Fig.2. As illustrated in Fig.2 the cascade initiates with mechanical deformation, manifested as strain within neurons and neu-
ron clusters. Mathematically, the imposed boundary condition is treated as deformation while the corresponding strain response is obtained from the viscoelastic constitutive network of the underlying neuronal microstructure. Using this strain field generated across the domain of interest (neurons or neuron clusters), we use it as an input for driving ATP generation. This assumption is hypothesized from the phenomena that mechanical deformation causes activation
4

of Panx1 channels leading to ATP release from the microglia to the extracellular region. Excess concentration of extracellular ATP causes activation of the purinergic P2X7 receptors situated in the microglia which facilitate formation of pro-inflammatory complexes. Recent findings [9] have quantified the effect of ATP on members of the P2X and P2Y receptor family which correlate the effect of ATP concentration with P2X7 receptor opening probability. In the modeling process, the purinergic recepto-
r channel has been estimated numerically as a phase field. The consequences of this activation leads to production of enzymes, formation of inflammasomes and release of cytokines from the microglia such as TNF-α. The release of TNF-α is regulated heavily by modulation of the P2X7 receptor. Studies have indicated increase in concentration of TNF-α due to receptor activation. This inflammatory molecule is mathematically modeled as a diffusive chemical field and driven by a function which depends on -
the P2X7 phase field. While there are a number of crucial elements preceding the formation and release of TNF-α, they have not been considered in the reduced pathway due to a paucity in quantifiable data relating intermediate molecules with any of the cascade components considered. Due to the increased extracellular concentration of TNF-α, the microglial uptake of glutamate reduces in the glial cells and subsequently increases in the post synaptic region. In our reduced pathway, glutamate is also -
modeled as a diffusive chemical field localised in the neuronal synapses. Our modeling process is facilitated by data associating TNF−α with glutamate, where evolution of the latter is driven by a function relating the former. We discuss the multiphysics of the functional dependencies of all of the above chemical species’ and derive reaction terms which demonstrate quantifiable relations between them. The idea is to present a novel mathematical framework incorporating a first-of-its-kind necroptot-
ic pathway modeled with a rigorous numerical implementation using state-of-the-art scientific computing tools in FEM and demonstrate mechanical and chemical metrics underlying secondary injury. The computational framework is made available to the wider research community as an open source library [64].
Figure 2: Representation of a reduced pathway consisting of quantifiable elements which contribute towards necroptosis. Illustrated in this pathway are ATP, TNF-α and glutamate classified as chemical concentration fields and the P2X7 receptor mathematically as a phase field. This is attributed qualitatively to the opening probability of the channel upon prolonged activation by ATP. The shortened pathway enables formulation of diffusive equations to spatio-temporally resolve the chemical species ac-
ross the inhomogenous neuronal landscape.
5

3. Mathematical Formulation
The first step in the multiphysics formulation is identifying the biological species constituting the molecular mechanotransduction pathway and characterizing their diffusive dynamics, sources and chemo-mechanical interactions. We consider concentrations of the following chemical species as the primary fields: ATP (ca), TNF-α (ct), Glutamate (cg) and ionic channels represented as a phase field: P2X7 (φp). The idea behind a phase field assumption of ionic channels is the appoximation of gating prob-
ability (0-closed, 1-open) due to concentration sensitivity of certain chemical species. The evolution of these chemical fields are modeled using the following advection-diffusion equations:
∂ca(x, t)
∂t = ∇ · (Da∇ca) + f (ε, ε ̇), x ∈ Ω (1)
∂ct(x, t)
∂t = ∇ · (Dt∇ct) + f (ca, φp), x ∈ Ω (2)
∂cg(x, t)
∂t = ∇ · (Dg∇cg) + f (ct), x ∈ Ω (3)
φp = Φ(ca) (4)
where the source terms are expressed as f (ε, ca, ct, . . . ) and Φ represents receptor sensitivity as a function of concentration of ATP. The diffusivity terms are expressed as Dx where the subscript x refers to individual species. In order to model the mechanical response of the underlying neuronal microstructure, a viscoelastic network consisting of three dimensional springs and dampeners have been considered. The network illustrated in Fig.3, capable of mimicing the extracellular matrix is sim-
ilar to the work of Wang et al.[65] who have characterised the mechanical properties of the elements constituting the network. The response of this structure is modeled using the conservation of linear momentum.
∇σ = 0 (5)
Figure 3: Mechanical network representing the neuronal microenvironment. The mechanical estimates of springs and dampeners are obtained from Wang et al. [65]
Variational Formulation
Casting the above governing equations in their variational (integral/weak) form. This formulation is used to solve these equations within a standard finite element method framework. We consider treatment of the chemical species dynamics followed by the mechanical equilibrium equations.
6

Find the primal concentration fields {ca, ct, cg, φp, u} where,
ci ∈ Sci , Sci = {ci ∈ H 1(Ω) |ci = c ̄i ∀ X ∈ Γcgi } (6)
where i ∈ {ATP, TNF-α, Glutamate} and the phase field,
φp ∈ Sφp , Sφp = {φp ∈ H 1(Ω) |φp = φ ̄p ∀ X ∈ Γφp
g } (7)
finally displacement,
u ∈ Su, Su = {u ∈ H 1(Ω) |u = u ̄ ∀ X ∈ Γu
g} (8)
such that for all variations,
wci ∈ Vci , Vci = {wci ∈ H 1(Ω) |wci = 0 ∀ X ∈ Γcgi } (9)
wφp ∈ Vφp , Vφp = {wφp ∈ H 1(Ω) |wφp = 0 ∀ X ∈ Γφp
g } (10)
wu ∈ Vu, Vu = {wu ∈ H 1(Ω) |wu = 0 ∀ X ∈ Γu
g} (11)
we have,
Z
Ω
wuσdV −
Z
Γu
h
wutdS = 0 (12)
Z
Ω
wci
∂ci
∂t dV +
Z
Ω
(Dci ∇wci ∇ci − wci f (c j, ε))dV −
Z
Γci
h
wci (∇ci · n)dS = 0 (13)
Z
Ω
wφp (Φ(ca) − 1.0)dV = 0 (14)
where wci , wφp are the variations in chemical concentrations and phase field respectively, wu is the variation in dis
placement and i , j. Ω is the problem domain,{Γcgi , Γφp
g , Γgu} are the Dirichlet boundaries for the chemical concentration
fields, phase field and displacement vector respectively. Similarly, Γci
h and Γu
h are the Newmann boundaries for the chemical fields and displacment respectively and n is the unit normal vector. In this formulation, we assume that there are traction boundary conditions t for the displacement boundaries and no chemical species flux at all the boundaries (∇ci · n = 0). The mechanical and chemical properties which have been used from literature are summarized in Table 1.
Table 1: Mechanical and Chemical Properties
Property Value References E0 3 μN/μm2 [65] E1 1 μN/μm2 [65] E2 130 μN/μm2 [65] τ1 16 s [65] τ2 400 s [65] bulk 1000 μN/μm2 [66] Da 300 μm2/s [67],[68] Dt 150 μm2/s [69], [70] Dg 460 μm2/s [71],[72]
7

Multiphysics of Reaction Terms
The equations representing evolution of the chemical species are driven by source terms which depend on evolution characteristics of other chemical fields. In our formulation, we have introduced four different chemical species and a displacement variable, which are related to each other sequentially. Based on the quantitative evidence from recent literature, the functional dependence of each primary field with others have been established.
ATP
As discussed earlier, when an injury manifests, it does so by activating pannexin channels embedded in the microglia which causes excess energy molecules, ATP, to efflux. While we have established a qualitative relationship between external mechanical deformation and spatial modulation of ATP concentration, there is a lack of quantitative evidence on specific metrics which relates the two phenomena. Therefore, we propose a linear relationship between the amount of mechanical strain and strain rate-
 obtained from the underlying constitutive framework and the amount of ATP produced subsequently. The mathematical relation between the source term in Eq.1 driving ATP evolution and mechanical deformation is expressed as:
f (ε, ε ̇) = K1 f (ε) + K2 f (ε ̇) (15)
where K1 and K2 are fitting constants with units M and M-sec respectively. The functions f (ε) and f (ε ̇) are plotted in Fig.4 below. The evolution profile is presented in Fig.5(A).
Figure 4: (Left) Dependence of f (ε) with ε. (Right) Dependence of f (ε ̇) with ε ̇.
P2X7 Receptor
Xing et al.[9] demonstrated a critical concentration of ATP beyond which the purinergic P2X7 receptor activates leading to increased probability of inflammasome complex formation. Based on the quantitative data provided in their experiments, a tan hyperbolic function has been used to recreate the normalised response of the receptor. We have illustrated (Fig.5(B)) and compared the data with our proposed function as a mathematical source term for P2X7 receptor channel properties. The specific expres-
sion used in Eq.4 to quantify the phase field evolution representing the purinergic receptor is given as:
Φp = tanh(A f (ca)) (16)
where A = 102.25M−1 and f (ca) varies between 10−8 − 10−1 M, which is considered keeping in view the typical ballpark of ATP produced during pathological conditions.
8

TNF-α
Upon P2X7 receptor activation, a cascade of events unfolds, of which the pivotal step involves release of proinflammatory molecules namely TNF-α. Based on the work of Barberà-Cremades et al. [13], a relationship between amount of this cytokine release upon P2X7 receptor activation over time has been shown. We compare the experimental findings with another tanh function tailored to incorporate contribution of the purinergic receptor as illustrated in Fig.5(B). In this comparison, TNF-α accumulates -
as a function of time and saturates at a certain concentration. We propose a mathematical model which formulates a source term, as mentioned in Eq.2 by associating the P2X7 receptor based on the experimental findings and spatio-temporally resolving the maximum limits of this chemical species.
f (ca, φp) = Bφp (17)
where B = 0.1 and a critical concentration of ATP (ca) is considered as a trigger for TNF-α evolution. The reaction profile is shown in Fig.5(C).
Glutamate
Once the concentration of TNF-α increases, glutamate uptake by nearby astrocytes decreases and post synaptic presence increases. This leads to excitotoxicity of the primary neurotransmitter. We have identified a study by Zou et al. [73] which presents some evidence of glutamate uptake reduction due to increase in cytokine concentration. Since there is no explicit data measuring excitotoxicity, we have hypothesized a metric which states that the reduction in uptake is inversely proportional to the -
increase in extracellular glutamate concentration. Using this principle we have quantified the increase in glutamate as a function of TNF-α. The specific mathematical form representing the source term for Eq.3 is expressed as:
f (ct) = Cct (18)
where C = 100M−1 is a fitting parameter. The reaction profile is highlighted in Fig.5(D).
4. Results
We proceed onto numerically implementing the multiphysics based variational formulation in a standard FE setting in two dimensions. In order to achieve visualisation of the chemical species’ evolution firstly we need to geometrically allocate regions within the given domain. These localised domains will signify neurons, microglia and the ECM and will correspond to presence of specific chemical fields in those regions. In order to construct a geometry which resembles a neuron-microglia-ECM assembly-
 at single and multi-neuron length scale we subdivide a given domain into realistic shapes highlighted by the Gaussian point. This approach allow spatio-temporal visualisation of chemical species’ diffusion and interaction with the underlying mechanics in a realistic morphological setting, as observed in biological systems. Furthermore, simulation of boundary value problems enables a wide class of kinematics/mechanics driven mechano-chemical phenomena to be analysed.
Single neuron-microglia-ECM morphology
We have illustrated a morphological representation of single neuron-glia-ECM assembly (Fig.6). This consists of neuron synapses indicated by red, padded on both sides by microglia painted in green. The microglia is a pivotal region in numerical simulations, as it facilitates release of ATP to the ECM, houses the P2X7 receptor and modulates channel sensitivity and finally enables production of inflammatory cytokines. All the above mentioned chemical fields are spatially localised in the microglial -
region and the numerical framework allows diffusion across the ECM. For a single neuron-microglia-ECM assembly we observe the effects of various mechanical loading conditions on this domain through evolution of the underlying chemical and mechanical fields. Upon tensile loading, the biomarkers represented by chemical fields diffuse across the illustrated domain.
9

Figure 5: (A) ATP evolution against increasing strain (upto 80 percent) has been shown here with different strain rates. In particular, the strain rate 102 s−1 has been chosen to further illustrate correlations between the chemical fields. (B) P2X7 receptor opening probability is plotted against ATP evolution for the aforementioned strain rate. Furthermore, this data suggests a positive agreement with the findings of Xing et al. [9] for estimating P2X7 receptor probability with change in ATP. (C)-
 TNF-α evolution with change in receptor opening characteristics has been demonstrated in this plot. It is observed that at a relatively higher value of P2X7, TNF-α diffuses out and continues evolving with time. (D) Glutamate excitotoxicity in the extracellular region, influenced by increased presence of inflammatory cytokines like TNF-α can be observed in this plot. These results are compared with the findings of Zou et al. [73] and show significant resemblance in the nature of glutamate evolutio-
n.
Multiple neuron-microglia-ECM geometry
In a more realistic setting, the length scale of the domain is increased to accommodate more number of neuronglia-ECM assemblies which illustrate a better representation of neuron clusters (Fig.7). As we observe from this construction, more assemblies have been added at random orientations each having the characteristic spatial localisation as mentioned in the single neuron setup. For simplicity we have considered all neuron assemblies of the same type, meaning, the chemical and mechanical propert-
ies are the same for all assembly configurations. Primarily, this improvised structure allows us to visualise the spatio-temporal heterogeneity of chemical field evolution and capture essential chemical and mechanical injury metrics across the domain. Similar to the previous setup, we perform different BVPs on this domain and observe field evolution characteristics.
Simulations
For single and multiple neuron-microglia-ECM assembly, we demonstrate key results based on unaxial tension numerical simulations. For single assembly, as shown in Fig.8(A), the domain is fixed at one end and a displacementtype load is applied across a spectrum of strain and strain-values. In this simulation we highlight results obtained at a strain rate of 102 s−1 upto 80% strain. A fundamental metric of deformation based loading problems is strain; accordingly the axial strain field (ε11), obtain-
ed from the underlying mechanical network is plotted for the domain as given in Fig.8(B). Using a combination of strain and strain-rates, an array of results are presented in Fig.8(C). The strain field induces ATP to release from the microglia to the ECM. From left to right, field characteristics for
10

Figure 6: The design of the computational domain has been adapted from a realistic representation of the neurons and the surrounding microglia. As illustrated in (A) a specific region consisting of neuron synapses and microglia has been considered which has been magnified in (B). A schematic of pre-synaptic and post-synaptic neurons are shown flanged on both sides by microglia. This design has been incorporated as our computational domain (C) to facilitate localisation of chemical fields, visuali-
zation of diffusive behaviour of fields and understand interactions between these species at different length and time scales. A meshed version of the numerical domain has been shown with colors (green:microglia, blue:ECM, red:synapse) indicating distinct regions of interest.
ATP due to the above mentioned strain field is shown. As observed, ATP diffuses out of the microglia into the ECM demonstrating the heterogeneous nature of field distribution. The following sub-figure shows P2X7 characteristics which is operating at maximum potential as the critical concentration of ATP, needed to trigger the receptor, has already reached. To its right, TNF-α field plot is shown, which depends on P2X7 receptor opening probability and diffuses out of the microglia. The final sub-pl-
ot highlights glutamate concentration due to the influence of TNF-α. The neurotransmitter is localised at the synaptic region and diffuses into the ECM. While Fig.8(C) demonstrates full field profiles for each chemical entity, Fig.8(D) illustrates field evolution characteristics for increasing strain-rates from 10−3 up to 103 keeping the maximum strain fixed at 0.8 for each simulation. The following sub-plots (left to right) describe the nature of evolution of ATP (near the microglia), P2X7 (withi-
n the microglia), TNF-α (near the microglia) and Glutamate (near the synapse). The particular strain and strain-rate combination used for the full field plots has been highlighted by an arrow in each sub-plot. The maximum magnitude of the chemical species’ concentrations are comparable with pathological estimates and presented in Table.2. A key highlight of the spatio-temporal resolution of these chemical fields is the construction of an injury curve. Considering maximum ATP concentration across t-
he spatial domain at specific strain and strain-rates a dataset is established. The data set is plotted against strain vs strain-rate as illustrated in Fig.9 and allows visual representation of field values at specific loading conditions. A cutoff for critical extracellular ATP is chosen based on the concentration at which purinergic receptors (P2X7) activate [74], which is about 6e − 3 mM [9]. The proposition is, if the maximum concentration of ATP stays above this number, the neuronal micro envi-
ronment is susceptible to chemical degradation, which is also how we define chemical injury. Using this metric, two regions are shown representing pathway induced injury (red boxes) and uninjured region (green boxes). It is a first order estimation of how mechanical loading conditions can influence downstream pathways and elevate critical molecular concentrations. Unaxial tensile loading numerical simulations using rate-dependent loading are performed for multi-neuron as
11

Figure 7: Illustration of a meshed neuron cluster domain (single neuron assembly) in a random spatial distribution of single neuron-microglia assemblies at different orientations (multi-neuron assembly). The dimensions of the single neuron domain are 12μm X 10μm and that of the larger domain are 60μm X 72μm
semblies. Using variable orientations for individual single neuron-microglia structures, a neuron cluster is constructed and a boundary value problem is setup as illustrated in Fig.10(A). We have chosen two essential field variables namely ATP (Fig.10(B)) and glutamate (Fig.10(C)) to demonstrate the heterogeneity and interactions within this assembly. The results consisting of these field profiles are generated using a strain rate of 102 s−1, applied up to a strain of 0.4.
Table 2: Comparison of chemical concentrations
Species Pathological estimate Numerical results ATP 1e-2 M [9] 7e-2 M P2X7 0 - 1 [9] 0 - 1 TNF-α 2.4 mM [75] 1.8 mM Glutamate 1-2 μM [76] 0.5 μM
5. Conclusion
We have proposed and quantified a glia-initiated injury pathway beginning with mechanical deformation and culminating in necroptosis. The proposed model incorporates a multiphysics formulation for investigating mechanochemical interactions during TBI at the cellular scale. The fidelity of our numerical modeling framework involves a first-of-its-kind representation of neuronal microenvironment as a viscoelastic network coupled with an ensemble of molecular biomarkers represented as chemical fields.-
 Using our modeling framework, we have demonstrated field behaviour for single neuron-glia assembly along with neuron-glia clusters highlighting localisation of biomarkers. We believe that the idea of a mechano-chemical framework utilised to capture pathway induced injury opens up avenues of research directions in injury specific biomarker identification. Although our modeling approach relies on limited availability of biomarker datasets, experimental quantification for injury metrics in human sub-
jects and
12

Figure 8: (A) Boundary value problem demonstrating simple tension on a computational domain represented by neuron synapse (green), microglia (red) and ECM (blue). The domain is fixed at one end, while the other end is displaced through a combination of strain and strain-rate loading conditions. (B) Uniaxial strain (ε11) field profile obtained from the underlying viscoelastic network by applying displacement through a strain rate
of 102 s−1 upto a strain of 0.8. (C) Chemical field evolution profiles representing (left to right) ATP (originating from microglia), P2X7 (localized in microglia), TNF-α (originating from microglia) and Glutamate (originating from neuron synapses). (D) Field evolution plots against a strain of 0.8 has been illustrated for increasing strain rates spanning over six orders of magnitude (10−3 - 103). The strain rate measure for which the field plots are highlighted is indicated in each subplot and me-
ntioned accordingly.
generic assumptions on field evolution characteristics, it provides a robust numerical and computational base for further improvements. Additionally, our model is capable of incorporating additional biophysics at the neuronal scale including ionic conduction [77], nutrient transport and inter-neuronal interactions which possess immense potential in understanding crucial neurodegenerative disorders.
References
[1] E. S. Kenzie, E. L. Parks, E. D. Bigler, M. M. Lim, J. C. Chesnutt, W. Wakeland, Concussion as a multi-scale complex system: an interdisciplinary synthesis of current knowledge, Frontiers in neurology 8 (2017) 513.
[2] A. C. Mckee, D. H. Daneshvar, The neuropathology of traumatic brain injury, Handbook of clinical neurology 127 (2015) 45–66.
[3] M. A. M. Freire, G. S. Rocha, L. O. Bittencourt, D. Falcao, R. R. Lima, J. R. L. P. Cavalcanti, Cellular and molecular pathophysiology of traumatic brain injury: what have we learned so far?, Biology 12 (2023) 1139.
[4] H. S. Ghaith, A. A. Nawar, M. D. Gabra, M. E. Abdelrahman, M. H. Nafady, E. I. Bahbah, M. A. Ebada, G. M. Ashraf, A. Negida, G. E. Barreto, A literature review of traumatic brain injury biomarkers, Molecular neurobiology 59 (2022) 4141–4158.
13

Figure 9: Maximum concentration of ATP within the field distribution is recorded for a spectrum of strain and strain-rates. The resulting data set obtained is utilised to construct a computational injury curve. Using a specific cut-off for ATP concentration (6e − 3M) two regions are obtained. The red one represents pathway induced injury while the green one reflects uninjured regimes.
[5] J. H. Seo, M. S. Dalal, J. E. Contreras, Pannexin-1 channels as mediators of neuroinflammation, International journal of molecular sciences 22 (2021) 5189.
[6] F. Albalawi, W. Lu, J. M. Beckel, J. C. Lim, S. A. McCaughey, C. H. Mitchell, The p2x7 receptor primes il-1β and the nlrp3 inflammasome in astrocytes exposed to mechanical strain, Frontiers in cellular neuroscience 11 (2017) 227.
[7] B. Ebanks, L. Chakrabarti, Mitochondrial atp synthase is a target of oxidative stress in neurodegenerative diseases, Frontiers in Molecular Biosciences 9 (2022) 854321.
[8] M. Hattori, E. Gouaux, Molecular mechanism of atp binding and ion channel activation in p2x receptors, Nature 485 (2012) 207–212.
[9] S. Xing, M. W. Grol, P. H. Grutter, S. J. Dixon, S. V. Komarova, Modeling interactions among individual p2 receptors to explain complex response patterns over a wide range of atp concentrations, Frontiers in physiology 7 (2016) 294.
[10] R. Andrejew, Á. Oliveira-Giacomelli, D. E. Ribeiro, T. Glaser, V. F. Arnaud-Sampaio, C. Lameu, H. Ulrich, The p2x7 receptor: central hub of brain diseases, Frontiers in Molecular Neuroscience 13 (2020) 124.
[11] J. C. Rotondo, C. Mazziotta, C. Lanzillotti, C. Stefani, G. Badiale, G. Campione, F. Martini, M. Tognon, The role of purinergic p2x7 receptor in inflammation and cancer: Novel molecular insights and clinical applications, Cancers 14 (2022) 1116.
14

Figure 10: (A) Boundary value problem of multi neuron-glia-ECM assembly is shown. Similar to the single neuron assembly, the larger domain is fixed at one end and displacement based loading is applied at the other end as indicated. (B) ATP evolution for multiple assemblies are shown as induced by the underlying strain field. The heterogeneous nature of field evolution is a hallmark characteristic for such larger domains and can be spatio-temporally resolved to better understand neuron-cluster bas-
ed experiments. (C) Glutamate evolution is highlighted which is localised near the neuron synapses. Cluster based spatio-temporal resolution of chemical fields such as glutamate serve as key indicators in excitoxicity prediction.
[12] K. You, H. Gu, Z. Yuan, X. Xu, Tumor necrosis factor alpha signaling and organogenesis, Frontiers in Cell and Developmental Biology 9 (2021) 727075.
[13] M. Barberà-Cremades, A. I. Gómez, A. Baroja-Mazo, L. Martínez-Alarcón, C. M. Martínez, C. de TorreMinguela, P. Pelegrín, P2x7 receptor induces tumor necrosis factor-α converting enzyme activation and release to boost tnf-α production, Frontiers in immunology 8 (2017) 862.
[14] N. Nicosia, M. Giovenzana, P. Misztak, J. Mingardi, L. Musazzi, Glutamate-mediated excitotoxicity in the pathogenesis and treatment of neurodevelopmental and adult mental disorders, International Journal of Molecular Sciences 25 (2024) 6521.
[15] G. Olmos, J. Lladó, et al., Tumor necrosis factor alpha: a link between neuroinflammation and excitotoxicity, Mediators of inflammation 2014 (2014).
[16] J. H. Jara, B. B. Singh, A. M. Floden, C. K. Combs, Tumor necrosis factor alpha stimulates nmda receptor activity in mouse cortical neurons resulting in erk-dependent death, Journal of neurochemistry 100 (2007) 1407–1420.
[17] S. M. O’Donovan, C. R. Sullivan, R. E. McCullumsmith, The role of glutamate transporters in the pathophysiology of neuropsychiatric disorders, NPJ schizophrenia 3 (2017) 32.
[18] H. Takeuchi, S. Jin, J. Wang, G. Zhang, J. Kawanokuchi, R. Kuno, Y. Sonobe, T. Mizuno, A. Suzumura, Tumor necrosis factor-α induces neurotoxicity via glutamate release from hemichannels of activated microglia in an autocrine manner, Journal of Biological Chemistry 281 (2006) 21362–21368.
15

[19] M. Jia, S. A. N. Njapo, V. Rastogi, V. S. Hedna, Taming glutamate excitotoxicity: strategic pathway modulation for neuroprotection, CNS drugs 29 (2015) 153–162.
[20] A. Vaglio-Garro, A. V. Kozlov, Y. D. Smirnova, A. Weidinger, Pathological interplay between inflammation and mitochondria aggravates glutamate toxicity, International Journal of Molecular Sciences 25 (2024) 2276.
[21] S. Y. Ng, A. Y. W. Lee, Traumatic brain injuries: pathophysiology and potential therapeutic targets, Frontiers in cellular neuroscience 13 (2019) 528.
[22] A. I. Maas, N. Stocchetti, R. Bullock, Moderate and severe traumatic brain injury in adults, The Lancet Neurology 7 (2008) 728–741.
[23] X. Hu, Y. Xu, H. Zhang, Y. Li, X. Wang, C. Xu, W. Ni, K. Zhou, Role of necroptosis in traumatic brain and spinal cord injuries, Journal of Advanced Research 40 (2022) 125–134.
[24] E. Healy, M. Dempsey, C. Lally, M. P. Ryan, Apoptosis and necrosis: mechanisms of cell death induced by cyclosporine a in a renal proximal tubular cell line, Kidney international 54 (1998) 1955–1966.
[25] S. L. Fink, B. T. Cookson, Apoptosis, pyroptosis, and necrosis: mechanistic description of dead and dying eukaryotic cells, Infection and immunity 73 (2005) 1907–1916.
[26] Z. Nie, L. Tan, J. Niu, B. Wang, The role of regulatory necrosis in traumatic brain injury, Frontiers in Molecular Neuroscience 15 (2022) 1005422.
[27] Y. Akamatsu, K. A. Hanafy, Cell death and recovery in traumatic brain injury, Neurotherapeutics 17 (2020) 446–456.
[28] Y. K. Dhuriya, D. Sharma, Necroptosis: a regulated inflammatory mode of cell death, Journal of neuroinflammation 15 (2018) 1–9.
[29] W. T. O’Brien, L. Pham, G. F. Symons, M. Monif, S. R. Shultz, S. J. McDonald, The nlrp3 inflammasome in traumatic brain injury: potential as a biomarker and therapeutic target, Journal of neuroinflammation 17 (2020) 1–12.
[30] S. D. Yan, X. Chen, J. Fu, M. Chen, H. Zhu, A. Roher, T. Slattery, L. Zhao, M. Nagashima, J. Morser, et al., Rage and amyloid-β peptide neurotoxicity in alzheimer’s disease, Nature 382 (1996) 685–691.
[31] T. Woodcock, M. C. Morganti-Kossmann, The role of markers of inflammation in traumatic brain injury, Frontiers in neurology 4 (2013) 18.
[32] L. Longhi, C. Perego, F. Ortolano, S. Aresi, S. Fumagalli, E. R. Zanier, N. Stocchetti, M.-G. De Simoni, Tumor necrosis factor in traumatic brain injury: effects of genetic deletion of p55 or p75 receptor, Journal of Cerebral Blood Flow & Metabolism 33 (2013) 1182–1189.
[33] R. M. Guerriero, C. C. Giza, A. Rotenberg, Glutamate and gaba imbalance following traumatic brain injury, Current neurology and neuroscience reports 15 (2015) 1–11.
[34] A. Armada-Moreira, J. I. Gomes, C. C. Pina, O. K. Savchak, J. Gonçalves-Ribeiro, N. Rei, S. Pinto, T. P. Morais, R. S. Martins, F. F. Ribeiro, et al., Going the extra (synaptic) mile: excitotoxicity as the road toward neurodegenerative diseases, Frontiers in cellular neuroscience 14 (2020) 90.
[35] L. Bao, S. Locovei, G. Dahl, Pannexin membrane channels are mechanosensitive conduits for atp, FEBS letters 572 (2004) 65–68.
[36] J. Xia, J. C. Lim, W. Lu, J. M. Beckel, E. J. Macarak, A. M. Laties, C. H. Mitchell, Neurons respond directly to mechanical deformation with pannexin-mediated atp release and autostimulation of p2x7 receptors, The Journal of physiology 590 (2012) 2285–2304.
16

[37] J.-i. V. Choi, B. K. Tchernookova, W. Kumar, L. Kiedrowski, C. Goeke, M. Guizzetti, J. Larson, M. A. Kreitzer, R. P. Malchow, Extracellular atp-induced alterations in extracellular h+ fluxes from cultured cortical and hippocampal astrocytes, Frontiers in Cellular Neuroscience 15 (2021) 640217.
[38] A. Cauwels, E. Rogge, B. Vandendriessche, S. Shiva, P. Brouckaert, Extracellular atp drives systemic inflammation, tissue damage and mortality, Cell death & disease 5 (2014) e1102–e1102.
[39] C. M. Cruz, A. Rinna, H. J. Forman, A. L. Ventura, P. M. Persechini, D. M. Ojcius, Atp activates a reactive oxygen species-dependent oxidative stress response and secretion of proinflammatory cytokines in macrophages, Journal of Biological Chemistry 282 (2007) 2871–2879.
[40] R. Vroman, L. J. Klaassen, M. H. Howlett, V. Cenedese, J. Klooster, T. Sjoerdsma, M. Kamermans, Extracellular atp hydrolysis inhibits synaptic transmission by increasing ph buffering in the synaptic cleft, PLoS biology 12 (2014) e1001864.
[41] S. Calovi, P. Mut-Arbona, B. Sperlágh, Microglia and the purinergic signaling system, Neuroscience 405 (2019) 137–147.
[42] A. Piccini, S. Carta, S. Tassi, D. Lasiglié, G. Fossati, A. Rubartelli, Atp is released by monocytes stimulated with pathogen-sensing receptor ligands and induces il-1β and il-18 secretion in an autocrine way, Proceedings of the National Academy of Sciences 105 (2008) 8067–8072.
[43] Z. Xu, Z.-m. Chen, X. Wu, L. Zhang, Y. Cao, P. Zhou, Distinct molecular mechanisms underlying potassium efflux for nlrp3 inflammasome activation, Frontiers in immunology 11 (2020) 609441.
[44] G. Florence, T. Pereira, J. Kurths, Extracellular potassium dynamics in the hyperexcitable state of the neuronal ictal activity, Communications in Nonlinear Science and Numerical Simulation 17 (2012) 4700–4706.
[45] M. E. Tagluk, R. Tekin, The influence of ion concentrations on the dynamic behavior of the hodgkin–huxley model-based cortical network, Cognitive neurodynamics 8 (2014) 287–298.
[46] R. Muñoz-Planillo, P. Kuffa, G. Martínez-Colón, B. L. Smith, T. M. Rajendiran, G. Núñez, K+ efflux is the common trigger of nlrp3 inflammasome activation by bacterial toxins and particulate matter, Immunity 38 (2013) 1142–1153.
[47] R. Koumangoye, The role of cl- and k+ efflux in nlrp3 inflammasome and innate immune response activation, American Journal of Physiology-Cell Physiology 322 (2022) C645–C652.
[48] H. M. Blevins, Y. Xu, S. Biby, S. Zhang, The nlrp3 inflammasome pathway: a review of mechanisms and inhibitors for the treatment of inflammatory diseases, Frontiers in aging neuroscience 14 (2022) 879021.
[49] A. Fesharaki-Zadeh, Oxidative stress in traumatic brain injury, International Journal of Molecular Sciences 23 (2022) 13000.
[50] X. Liang, D. Zhang, W. Liu, Y. Yan, F. Zhou, W. Wu, Z. Yan, Reactive oxygen species trigger nf-κb-mediated nlrp3 inflammasome activation induced by zinc oxide nanoparticles in a549 cells, Toxicology and Industrial Health 33 (2017) 737–745.
[51] C.-C. Chio, M.-T. Lin, C.-P. Chang, Microglial activation as a compelling target for treating acute traumatic brain injury, Current medicinal chemistry 22 (2015) 759–770.
[52] E. Shohami, I. Ginis, J. M. Hallenbeck, Dual role of tumor necrosis factor alpha in brain injury, Cytokine & growth factor reviews 10 (1999) 119–130.
[53] N. M. Francisco, N.-J. Hsu, R. Keeton, P. Randall, B. Sebesho, N. Allie, D. Govender, V. Quesniaux, B. Ryffel, L. Kellaway, et al., Tnf-dependent regulation and activation of innate immune cells are essential for host protection against cerebral tuberculosis, Journal of neuroinflammation 12 (2015) 1–14.
17

[54] M. P. Mattson, Sculptor and Destroyer: Tales of Glutamatethe Brain’s Most Important Neurotransmitter, MIT Press, 2023.
[55] A. Reiner, J. Levitz, Glutamatergic signaling in the central nervous system: ionotropic and metabotropic receptors in concert, Neuron 98 (2018) 1080–1098.
[56] J. V. Nadler, Plasticity of glutamate synaptic mechanisms, Jasper’s Basic Mechanisms of the Epilepsies [Internet]. 4th edition (2012).
[57] M. M. Pal, Glutamate: The master neurotransmitter and its implications in chronic stress and mood disorders, Frontiers in human neuroscience 15 (2021) 722323.
[58] H. Pribiag, D. Stellwagen, Tnf-α downregulates inhibitory neurotransmission through protein phosphatase 1dependent trafficking of gabaa receptors, Journal of Neuroscience 33 (2013) 15879–15893.
[59] M. S. Arrazola, et al., Compartmentalized necroptosis activation in excitotoxicity-induced axonal degeneration: a novel mechanism implicated in neurodegenerative disease pathology, Neural Regeneration Research 14 (2019) 1385–1386.
[60] Y. Li, X. Yang, C. Ma, J. Qiao, C. Zhang, Necroptosis contributes to the nmda-induced excitotoxicity in rat’s cultured cortical neurons, Neuroscience letters 447 (2008) 120–123.
[61] R. Wang, P. H. Reddy, Role of glutamate and nmda receptors in alzheimer’s disease, Journal of Alzheimer’s Disease 57 (2017) 1041–1048.
[62] L. Iovino, M. Tremblay, L. Civiero, Glutamate-induced excitotoxicity in parkinson’s disease: The role of glial cells, Journal of pharmacological sciences 144 (2020) 151–164.
[63] V. M. André, C. Cepeda, M. S. Levine, Dopamine and glutamate in huntington’s disease: A balancing act, CNS neuroscience & therapeutics 16 (2010) 163–178.
[64] Code repository for spatio temporal modeling of biomarkers to demonstrate mechano-chemical interactions during tbi, https://github.com/cmmg/mechanoChemistry, 2024.
[65] Y. Wang, X. Zhang, J. Wang, Y. Fan, Viscoelastic modeling of the stress relaxation behavior for the bionic extracellular matrix polymer scaffold, Medicine in Novel Technology and Devices 16 (2022) 100181.
[66] R. N. Konno, N. Nigam, J. M. Wakeling, Modelling extracellular matrix and cellular contributions to whole muscle mechanics, Plos one 16 (2021) e0249601.
[67] M. Bennett, L. Farnell, W. Gibson, S. Karunanithi, Quantal transmission at purinergic junctions: stochastic interaction between atp and its receptors, Biophysical journal 68 (1995) 925–935.
[68] H. Zhang, Z. Shen, B. Hogan, A. I. Barakat, C. Misbah, Atp release by red blood cells under flow: model and simulations, Biophysical journal 115 (2018) 2218–2229.
[69] A. Ross, R. Pompano, Diffusion of cytokines in live lymph node tissue using microfluidic integrated optical imaging, Analytica chimica acta 1000 (2018) 205–213.
[70] G. J. Goodhill, Diffusion in axon guidance, European Journal of Neuroscience 9 (1997) 1414–1421.
[71] D. A. Rusakov, L. P. Savtchenko, K. Zheng, J. M. Henley, Shaping the synaptic signal: molecular mobility inside and outside the cleft, Trends in neurosciences 34 (2011) 359–369.
[72] K. Moussawi, A. Riegel, S. Nair, P. W. Kalivas, Extracellular glutamate: functional compartments operate in different concentration ranges, Frontiers in systems neuroscience 5 (2011) 94.
[73] J. Y. Zou, F. T. Crews, Tnfα potentiates glutamate neurotoxicity by inhibiting glutamate uptake in organotypic brain slice cultures: neuroprotection by nfκb inhibition, Brain research 1034 (2005) 11–24.
18

[74] S. E. Browne, When too much atp is a bad thing: a pivotal role for p2x7 receptors in motor neuron degeneration, 2013.
[75] M. Mogi, M. Harada, P. Riederer, H. Narabayashi, K. Fujita, T. Nagatsu, Tumor necrosis factor-α (tnf-α) increases both in the brain and in the cerebrospinal fluid from parkinsonian patients, Neuroscience letters 165 (1994) 208–210.
[76] L. P. Mark, R. W. Prost, J. L. Ulmer, M. M. Smith, D. L. Daniels, J. M. Strottmann, W. D. Brown, L. HaceinBey, Pictorial review of glutamate excitotoxicity: fundamental concepts for neuroimaging, American journal of neuroradiology 22 (2001) 1813–1824.
[77] R. Gulati, S. Rudraraju, Spatio-temporal modeling of saltatory conduction in neurons using poisson–nernstplanck treatment and estimation of conduction velocity, Brain Multiphysics 4 (2023) 100061.
19

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:02.424Z
- **Text Length:** 55090 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 19 of 19
