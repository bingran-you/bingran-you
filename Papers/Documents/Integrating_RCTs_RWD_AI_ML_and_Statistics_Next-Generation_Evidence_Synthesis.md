# PDF Document: Yang et al. - 2025 - Integrating RCTs, RWD, AIML and Statistics Next-Generation Evidence Synthesis.pdf

**File Path:** Yang et al. - 2025 - Integrating RCTs, RWD, AIML and Statistics Next-Generation Evidence Synthesis.pdf

**Processed Date:** 2026-02-10T18:15:33.178Z

**File Size:** 2197.07 KB

**Total Pages:** 25

**Extracted Pages:** 25

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3444

**Title:** Integrating RCTs, RWD, AI/ML and Statistics: Next-Generation Evidence Synthesis

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Integrating RCTs, RWD, AI/ML and Statistics:
Next-Generation Evidence Synthesis
Shu Yang,∗ Margaret Gamalo,† Haoda Fu‡
Abstract
Randomized controlled trials (RCTs) have been the cornerstone of clinical evidence; how
ever, their cost, duration, and restrictive eligibility criteria limit power and external validity.
Studies using real-world data (RWD), historically considered less reliable for establishing causal
ity, are now recognized to be important for generating real-world evidence (RWE). In parallel,
artificial intelligence and machine learning (AI/ML) are being increasingly used throughout the
drug development process, providing scalability and flexibility but also presenting challenges in
interpretability and rigor that traditional statistics do not face. This Perspective argues that
the future of evidence generation will not depend on RCTs versus RWD, or statistics versus
AI/ML, but on their principled integration. To this end, a causal roadmap is needed to clar
ify inferential goals, make assumptions explicit, and ensure transparency about tradeoffs. We
highlight key objectives of integrative evidence synthesis, including transporting RCT results to
broader populations, embedding AI-assisted analyses within RCTs, designing hybrid controlled
trials, and extending short-term RCTs with long-term RWD. We also outline future directions in
privacy-preserving analytics, uncertainty quantification, and small-sample methods. By uniting
statistical rigor with AI/ML innovation, integrative approaches can produce robust, transparent,
and policy-relevant evidence, making them a key component of modern regulatory science.
Keywords: Artificial Intelligence and Machine Learning; Data Fusion; Digital Twins; Evi
dence Synthesis; Regulatory science
∗Department of Statistics, North Carolina State University, North Carolina 27695, U.S.A. Email: syang24@ncsu.edu †VP and Statistics Head, Inflammation, Immunology & Specialty Care, Pfizer ‡Head of Exploratory Biostatistics, Amgen
1
arXiv:2511.19735v1 [stat.ME] 24 Nov 2025

Contents
1 RWD/E in Clinical and Regulatory Studies 2
2 Why AI/ML matters for RWE 3
3 Why RWD matters for AI/ML 6
4 Combining Conventional Wisdom and New Techniques: Data Integration with
Statistical Rigor and AI/ML 7
4.1 A causal roadmap for evidence integration . . . . . . . . . . . . . . . . . . . . . . . . 8
4.2 Key objectives of integrative evidence synthesis . . . . . . . . . . . . . . . . . . . . . 10
5 Summary and Path Forward 14
1 RWD/E in Clinical and Regulatory Studies
Rethinking the evidence hierarchy. Randomized controlled trials (RCTs) have long been re
garded as the cornerstone of evidence in medicine, providing the highest level of internal validity
through the mitigation of confounding variables and bias (Spieth et al., 2016). However, RCTs are
often expensive, require significant time investments, and may be restricted in their generalizabil
ity due to rigid eligibility criteria (Rothwell, 2005; Kennedy-Martin et al., 2015). Real-world data
(RWD) includes routinely collected patient health information outside of controlled experimental
settings, such as electronic health records, insurance claims, disease registries, and data from dig
ital health technologies (U.S. Food and Drug Administration, 2018). Historically, real-world data
(RWD) was viewed as less reliable and not fit for purpose because it was not originally intended to
serve as primary evidence, raising concerns about bias, unmeasured confounding, and data quality.
Nonetheless, RWD is now widely recognized as an important and complementary source of evidence
(Hampson et al., 2018). When designed and analyzed rigorously, RWD studies have the potential
to generate real-world evidence (RWE) capable of addressing questions beyond the scope of RCTs.
Policy as a catalyst. The widespread adoption of electronic health records (EHRs) was initiated
through the “Meaningful Use” program (Blumenthal and Tavenner, 2010), which laid the founda
tion for large-scale digital health data collection. In many respects, the 21st Century Cures Act
represented a policy response to this rapid data expansion, further catalyzing the integration of real
world data and evidence (RWD/E) into FDA regulatory decision-making (Kesselheim and Avorn,
2017). In 2018, the FDA established an RWE Framework (U.S. Food and Drug Administration,
2018) to formalize pathways for its use in new indications, safety surveillance, and primary evidence
in specific contexts. This marked a changing point in recognizing RWE as an integral component
of evidence-based regulatory science.
2

Evidence generation, whether serving as primary or supportive evidence, now spans a continuum,
from RCTs augmented by RWD elements to fully observational studies (Concato and Corrigan
Curay, 2022) (see Figure 1 the top panel). At the randomization end, traditional RCTs are increas
ingly augmented by RWD to evaluate trial feasibility and enrollment by examining electronic health
records (EHRs) or claims to identify eligible participants (Kalankesh and Monaghesh, 2024; Ahmad
et al., 2020; Fishman et al., 2018). Pragmatic trials (Schwartz and Lellouch, 1967; Loudon et al.,
2015) embed randomization within routine care to enhance generalizability while preserving internal
validity. At the observational end, registries and external-control designs provide evidence where
RCTs are infeasible, particularly in rare diseases and urgent public health settings. Collectively,
this evolving landscape demonstrates that RWD/E is no longer peripheral but central to modern
evidence generation.
RWE is already influencing regulatory approvals. Between 2019–2021, RWE contributed to 31%
FDA approvals of new drugs and biologics, supporting therapeutic context, safety monitoring, and
effectiveness assessments (Bachinger et al., 2025), and between 2020–2022, RWE was incorporated
in FDA approval of five rare disease therapies, all meeting evidentiary standards for substantial
evidence of effectiveness (Innes et al., 2025). More recent analyses show continued expansion, with
RWE informing both new drug applications and biologics license applications from 2022–2024,
including approvals for new indications and expanded populations (Deng et al., 2025).
The global picture is similar. Beyond the U.S. FDA regulatory guidance and considerations
(U.S. FDA, 2024), the European Medicines Agency (European Medicines Agency, 2020), the U.K.
Medicines and Healthcare products Regulatory Agency (MHPRA, 2021), pilot programs from Japan
(PMDA, 2021) and China (NMPA, 2022) demonstrate a worldwide movement toward integration
of RWD/E into regulatory science.
2 Why AI/ML matters for RWE
The growing availability of RWD requires analytical tools capable of addressing its scale, complexity,
and the defining characteristics of big data, the four Vs: volume, velocity, variety, and veracity.
AI/ML appears to be the ideal solution. AI involves machine-based systems that make predictions,
decisions, and recognize patterns based on data (Food and Drug Administration, 2025b). ML, an
important subset of AI, uses algorithms to enhance performance through experience and is especially
suited for biomedical applications (Esteva et al., 2019). These methods excel at analyzing high
dimensional and unstructured data, such as imaging, wearable sensor streams, and free-text clinical
notes, that are common in RWD and often exceed the capabilities of traditional statistical tools.
Recognizing this, regulatory agencies like the FDA emphasize the increasing importance of AI/ML
throughout the product lifecycle, from trial design and execution to dose optimization, endpoint
assessment, and postmarketing surveillance (Food and Drug Administration, 2025b,a). However,
regulatory maturity and readiness vary among applications, depending on the level of validation and
acceptance. Recent guidance on AI in drug development has been issued by several organizations,
3

Figure 1: Spectrum of trial designs and emerging methodologies integrating RWD.This figure illustrates the continuum of clinical evidence generation approaches, ranging from traditional RCTs to pragmatic RCTs and observational studies, with progressively increasing reliance on RWD (Concato and Corrigan-Curay, 2022). Below, emerging methodological innovations are categorized by their primary function and regulatory readiness: (i) Causal inference techniques that enhance generalizability and subgro-
up analyses; (ii) Generative AI approaches for data augmentation and scenario simulation; and (iii) Agentic AI tools for adaptive trial planning and modeling patient behavior. Together, these approaches represent a shift toward more adaptive, data-rich, and scalable evidence generation frameworks that bridge randomized and real-world settings.
4

including the FDA (Food and Drug Administration, 2025b,a), the European Medicines Agency
(European Medicines Agency, 2023a, 2024), the International Council for Harmonisation (ICH,
2024), and the Council for International Organizations of Medical Sciences (CIOM, 2025). The
bottom panel of Figure 1 illustrates emerging AI/ML methodologies in drug development with
different stages of regulatory readiness.
Causal AI/ML. Causal AI/ML methods are among the most promising for extending trial evi
dence into broader clinical contexts. Approaches such as transportability analysis allow findings from
RCTs to be generalized to more diverse populations captured in RWD (Bareinboim and Pearl, 2016;
Dahabreh and Hernán, 2019). Target trial emulation has become a key framework for replicating
randomized conditions using observational data, helping to extend trial follow-up and address long
term safety questions (Hernán and Robins, 2016). Robust estimation techniques, including doubly
robust estimators such as targeted maximum likelihood estimation (TMLE) and augmented inverse
probability weighting (AIPW), as well as causal forests for estimating heterogeneous treatment ef
fects and biomarker-defined subgroup effects, enhance the validity of inference in high-dimensional
settings (Athey et al., 2019). Furthermore, principal stratification enables principled subgroup
specific effect estimation based on potential intermediate variables, such as compliers (Frangakis
and Rubin, 2002), always survivors (Jiang et al., 2022), and always responders for surrogate evalu
ation (Zhang and Yang, 2025). Regulatory maturity for causal AI/ML is moderate: these methods
are increasingly applied in oncology and chronic disease research, and have appeared in FDA and
EMA scientific discussions, but formal regulatory guidance is still evolving.
Agentic AI. Agentic AI refers to artificial intelligence systems that act as autonomous agents
capable of perceiving their environment, reasoning about context, making goal-directed decisions,
and taking adaptive actions without requiring constant human intervention. Unlike traditional AI
models that passively analyze data or generate predictions, agentic AI actively plans, learns, and
collaborates with humans or other agents to achieve specific objectives. In clinical trial opera
tions, agentic AI can revolutionize efficiency and adaptability by adjusting trial operations in real
time based on accumulating data. Examples include adaptive recruitment optimization to improve
trial diversity (Harrer et al., 2019) and dropout/adherence prediction models to inform follow-up
schedules (Nagar et al., 2025). In decentralized trial contexts, agentic AI has been piloted for site
selection and participant engagement in large-scale vaccine studies (Goldsack et al., 2020). These
applications illustrate potential for improving efficiency and inclusivity. A critical regulatory con
sideration is ensuring transparency and accountability in trial operations and execution. Because
many adaptive algorithms operate as “black boxes,” it is essential to establish mechanisms for fair
ness evaluation, governance, and auditability to maintain compliance with regulatory standards.
Agentic AI applications are already emerging, and their promise for more flexible, efficient, and
patient-centered trial designs is substantial.
5

3 Why RWD matters for AI/ML
The accelerating progress in AI/ML depends fundamentally on access to large, diverse, and high
quality data. Foundation models and generative AI, in particular, thrive on data scale and hetero
geneity: they learn broad representations of human health, disease, and treatment responses from
massive, multimodal datasets. In this context, RWD, comprising EHRs, claims, registries, patient
reported outcomes, and wearable data, offers unparalleled breadth and granularity that are rarely
achievable in traditional clinical trials.
RWD matters for AI/ML because it enables these models to 1) Capture real-world complexity
and diversity. Foundation models trained on RWD can learn from heterogeneous patient populations
across demographics, comorbidities, care settings, and geographies, reducing bias introduced by
narrowly defined trial cohorts. 2) Enable continuous learning and adaptation. The longitudinal
nature of RWD allows AI systems to model disease trajectories, treatment responses, and care
pathways over time, which is critical for predictive and generative modeling. 3) Strengthen drug
safety evaluation. Ensuring drug safety remains a critical bottleneck in drug development—often as
important as demonstrating efficacy. Robust safety monitoring requires access to large-scale, high
fidelity databases, where AI can detect adverse events, off-label usage patterns, and long-term risks
that may not be observable within the limited scope of RCTs. Thus, RWD situates AI within the
real healthcare ecosystem, making models more relevant for clinical and regulatory decision-making.
Generative AI. Generative AI has gained attention for its ability to create synthetic patients and
counterfactual scenarios, addressing the limitations of small sample sizes and underrepresentation
in clinical research. By learning complex dependencies among patient characteristics and outcomes,
these models can simulate plausible disease trajectories and augment limited datasets (Yoon et al.,
2018). This capability is particularly valuable for rare diseases, pediatric populations, and subgroup
analyses, where conventional data sources are sparse. For example, generative adversarial networks
(GANs) and its variants have been used to synthesize EHR data and generate disease progression
trajectories. Counterfactual modeling enables exploration of alternative treatment regimens with
out exposing patients to additional risk (Bica et al., 2020). These applications can inform payer
decisions and health technology assessments by predicting utilization and outcomes across untested
scenarios. However, their reliability hinges on the fidelity of underlying RWD and the robustness
of privacy protections. Synthetic data must be validated against observed outcomes, and safe
guards are required to ensure privacy-preserving generation. While the promise of generative AI is
high, especially in ultra-rare diseases, these limitations highlight the need for transparent validation
frameworks before broad regulatory acceptance.
Digital twins and hybrid models. Among generative AI applications leveraging RWD, digital
twins, virtual replicas of individual patients, have become one of the most mature and impactful
paradigms (Akbarialiabad et al., 2025). Digital twins create virtual, patient-specific comparators
that simulate disease trajectories, often used to replace or augment control arms in RCTs. Platforms
6

such as PROCOVA (Prognostic Covariate Adjustment), developed by Unlearn.AI, have been piloted
in Alzheimer’s disease and amyotrophic lateral sclerosis (ALS) trials, where they enabled reductions
in control arm sizes while maintaining statistical power (Walsh et al., 2021). Collaborations with
QurAlis and ProJenX in ALS and with AbbVie and J&J in Alzheimer’s trials have demonstrated
that digital twins can provide credible, regulator-reviewed external comparators. Hybrid approaches
further combine mechanistic disease models with ML (Zhang et al., 2020), or employ federated en
semble methods across RCTs and RWD without sharing raw data (Batech et al., 2025). Regulatory
agencies, including the EMA, have positively reviewed digital twin approaches in specific pilot
programs, signaling moderate-to-high maturity (European Medicines Agency, 2025). Remaining
challenges include interpretability, harmonization of multimodal data (imaging, genomics, EHRs),
and computational scalability, but digital twins are already reshaping trial design and evidence
generation.
RWD provides the essential substrate for AI/ML innovation, fueling the development of gener
alizable foundation models, enabling generative simulation, and powering digital twins that bridge
clinical research and real-world practice. As these technologies mature, ensuring data quality, trans
parency, and trustworthiness will be pivotal to realizing their full transformative potential (Topol,
2019).
4 Combining Conventional Wisdom and New Techniques: Data
Integration with Statistical Rigor and AI/ML
RWD and AI/ML methodologies hold enormous potential for expanding the clinical evidence base,
but their use in regulatory and clinical contexts requires careful scrutiny.
FDA guidance: bias concerns with RWD. External data sources may introduce biases that,
if unaddressed, threaten the validity of study conclusions. These include selection bias, when RWD
populations differ systematically from those in RCTs; unmeasured confounding, when key clinical
variables are missing or inconsistently captured; immortal time bias, arising from temporal misalign
ment when treatment initiation and outcome follow-up are not anchored to a common baseline, an
issue that can be exacerbated when RWD and RCT data originate from different care settings;
and measurement error, when outcomes recorded in routine care do not align with trial-defined
endpoints. These are not minor details but fundamental threats to causal validity and regulatory
confidence (U.S. Food and Drug Administration, 2018, 2019; U.S. FDA, 2024).
Limitations of AI/ML and the enduring value of Statistics. Despite their power, AI/ML
approaches face well-recognized limitations. Many machine learning models are often criticized as
“black boxes,” offering limited interpretability, weak uncertainty quantification, and vulnerability
to bias when applied to non-representative data (Lipton, 2018; Rudin, 2019). In contrast, statistics
emphasizes inference and explanation, yielding interpretable estimates grounded in explicit assump
7

tions. Statistical methods provide well-established tools for uncertainty quantification (e.g., confi
dence intervals, hypothesis testing, p-values) and reproducibility, which remain central to regulatory
credibility (Cox, 1958). These strengths are essential for clinical and regulatory decision-making.
Where we go next? The future will not depend on RCTs versus RWD, or statistics versus
AI/ML, but on how effectively these approaches are united and applied to answer meaningful ques
tions. The key lies in understanding who uses them and for what purpose, whether clinicians,
regulators, payers, or patients, and ensuring that their use ultimately enhances patient experience
and trust. Each component brings a distinct strength: RCTs secure internal validity; RWD/E ex
tends generalizability; statistics anchors validity, interpretability, and regulatory acceptance, while
AI/ML expands the analytical horizon to complex, large-scale datasets and novel data sources.
The next generation of hybrid and integrative approaches is already emerging, approaches that
combine predictive accuracy with explainability, and innovation with accountability. By weaving
together statistical principles and AI/ML flexibility, we can develop robust, transparent, and eq
uitable frameworks that maximize the value of real-world evidence for clinical research, regulatory
decision-making, and, most importantly, for the patients whose lives these innovations aim to im
prove.
What is needed is a causal roadmap, a unifying framework that makes assumptions explicit,
clarifies trade-offs, and preserves scientific rigor while maximizing practical relevance.
4.1 A causal roadmap for evidence integration
Integrating RCTs with RWD requires data that are fit for purpose and a principled roadmap
grounded in causal inference. At the foundation of this integration lies a critical but often un
deremphasized element, trust. How can we build trust in RWD when it is combined with RCTs
and advanced AI/ML technologies? Establishing trust begins with data quality, provenance, and
transparency. A clear discussion of these elements, how data are generated, curated, and validated
for specific causal questions, lays the groundwork for credible inference and regulatory confidence.
A structured four-step framework can guide this integration:
Step 1. Define the causal estimand. Specify the scientific question clearly, such as the average treat
ment effect in a target population.
Step 2. Align data sources and articulate assumptions. Examine data provenance and fitness-for
purpose: understanding where data come from, how they were collected, and whether they
contain the right information at sufficient quality to address the causal question. Identify
potential biases, including confounding, selection bias, temporal misalignment, and measure
ment error, and assess their plausibility. Use causal diagrams informed by subject matter
expertise to help identify unmeasured confounding (Greenland et al., 1999).
Step 3. Select appropriate estimation and inference methods. Choose statistical or AI/ML tools that
align with the causal estimand and the assumptions established in Step 2. Modern doubly or
8

Figure 2: A causal roadmap for integrative evidence synthesis.This figure outlines a structured framework for generating valid causal inferences by integrating RCTs with RWD. The process begins with the definition of the causal estimand (Step 1), followed by specification of the necessary causal assumptions and data (Step 2) to link the estimand to a well-defined statistical parameter. Estimation is then performed using appropriate statistical, artificial intelligence, or machine learning methods-
 (Step 3), and the robustness of results is evaluated through sensitivity analysis (Step 4). The accompanying panels highlight key objectives of evidence synthesis, complementary characteristics of RCT and RWD sources, and the comparative roles of conventional statistical approaches and AI/ML techniques in enhancing causal analysis.
9

multiply robust estimators (Chernozhukov et al., 2018) allow the integration of flexible AI/ML
algorithms for nuisance function estimation while maintaining valid inference for treatment
effects. This synergy between causal inference and machine learning, such as double machine
learning, sample splitting, thinning methods (Neufeld et al., 2024), multimodal representation
learning from patient narratives, clinical notes, and embeddings, enables unbiased estimation
in high-dimensional, complex data environments.
Step 4. Assess robustness. Conduct sensitivity analyses to evaluate how violations of causal and
statistical assumptions might alter conclusions, or design a small prospective randomize trial
to evaluate the robustness of causal assumptions.
This roadmap clarifies inferential goals, uses causal diagrams and principled identification strategies
to translate real-world questions into formal analytical frameworks, and integrates statistical princi
ples to harness the predictive strengths of AI/ML with the inferential advantage of causal methods.
In doing so, it strengthens both the rigor and the credibility of integrative evidence.
4.2 Key objectives of integrative evidence synthesis
In regulatory science, integrative evidence synthesis is not about replacing RCTs with RWD, but
about filling evidence gaps that RCTs alone cannot address. From a sponsor’s perspective, the goal
is to determine when and how RWD can reliably complement or extend RCT findings to support
regulatory decisions. Achieving this integration requires data that are demonstrably fit for purpose
and a roadmap rooted in causal inference (Yang and Wang, 2022; Colnet et al., 2024) to ensure
both validity and interpretability.
A foundational concept underpinning all integrative efforts is trust in data quality, provenance,
and analytical transparency. Only after establishing these can causal roadmaps be meaningfully
applied. Trustworthy integration also demands attention to safety, not just efficacy: while RCTs are
optimized for internal validity in controlled environments, real-world settings capture post-market
safety signals, treatment adherence, polypharmacy, and heterogeneous clinical practice patterns
that are critical for regulatory assessment.
Here, we showcase that by following the causal roadmap, we can generate efficient, robust, and
reliable evidence by leveraging the complementary strengths of RCTs and RWD alongside statistical
and AI/ML methods.
Generating RWE by Integrating RCTs with broader RWD. Integrating RCTs with RWD
enables the generation of RWE that extends trial findings to more diverse and representative patient
populations. This integration underscores the importance of generalizability and transportability,
particularly when traditional trials cannot fully capture patient heterogeneity or the complexity of
clinical practice. In RCTs, strict inclusion and exclusion criteria often limit representativeness; pa
tients with comorbidities, polypharmacy, or advanced disease stages are typically underrepresented.
These restrictions are necessary to ensure internal validity and patient safety, but they may not
10

reflect how treatments are actually used once approved. In real-world settings, physicians exercise
clinical judgment in tailoring therapies, adjusting treatment sequencing, and managing concurrent
conditions; there are contexts where RWD can provide essential complementary insights. Illustra
tive applications include Lee et al. (2022, 2023); Lee, Yang, Berry, Stinchcombe, Cohen and Wang
(2024); Lee, Gao, Ghosh and Yang (2024), which generalized treatment effects from the lung cancer
trial to patients represented in the National Cancer Data Base, revealing that trial participants
were typically younger and healthier than real-world patients, and transported survival effects from
the HIV trial to external populations in the U.S., Thailand, and Ethiopia, demonstrating the value
of global trial networks for understanding treatment effects across settings. Causal inference meth
ods enable more effective use of evidence from one study to inform treatment effects in a specific
target population, thereby addressing population-specific questions raised by prescribers, patients,
and payers (Tao and Fu, 2019). Beyond the FDA, health technology assessment agencies such as
Germany’s G-BA (G-BA, 2020), the UK’s NICE (NICE, 2013), and the U.S. ICER (ICER, 2020) ex
plicitly emphasize the need for evidence addressing generalizability and representativeness to guide
reimbursement and market access decisions.
A respective causal roadmap for generalization and transportation of RCT findings to a target
population involves: (1) Defining the causal estimand in the target population, whether represented
by population-based registries, national health surveys, comprehensive EHRs, or multinational trial
networks; (2) Articulating assumptions regarding the internal validity of the RCT and the trans
portability of findings to RWD populations. Causal diagrams can assist in clarifying identification
assumptions and diagnosing threats to validity. Successful generalization relies on the plausibility
of these assumptions and the careful selection of datasets and variables that enable comparability
between the RCT and RWD populations. In particular, transportability requires that the treat
ment effect function behaves similarly across populations, a condition that hinges on aligning key
effect-modifying covariates. (3) Selecting appropriate methods, including statistical and AI/ML
approaches such as doubly robust estimators, augmented inverse propensity weighting (AIPW,
Dahabreh and Hernán, 2019) or augmented calibration weighting (ACW, Lee et al., 2021), that
combine flexible nuisance estimation with rigorous inferential properties; and (4) Conducting sen
sitivity analyses to evaluate robustness against violations of transportability assumptions. Recent
work (Jin et al., 2024) demonstrates that unobserved conditional shifts often dominate over covari
ate shifts, motivating adaptive approaches and more refined sensitivity analyses. Together, these
advances show that rigorous integration of RCTs with RWD can generate credible and actionable
RWE to inform regulatory approval, clinical practice, and reimbursement decisions.
Importantly, transportability is closely linked to reproducibility. When populations are suffi
ciently similar, treatment effects estimated in one population should replicate in another. Ensuring
this reproducibility not only validates causal assumptions but also reinforces confidence in the gen
eralizability and trustworthiness of treatment discoveries.
11

AI-assisted RCT analyses: super-covariate adjustment. AI can also strengthen the analysis
of RCTs without compromising the validity conferred by randomization. PROCOVA methodology
(Schuler et al., 2022) is a notable example, using digital twin predictions as prognostic covariates in
Analysis of Covariance (ANCOVA) models. While randomization guarantees internal validity, AN
COVA improves efficiency by adjusting for prognostic covariates. PROCOVA extends this principle
by incorporating digital twin predictions as a “super covariate (Liu, Zhu, Han and Yang, 2025),”
producing more precise estimates and enabling smaller sample sizes. Importantly, the method does
not require AI predictions to be correct but benefits when they are.
The approach has been positively reviewed by both the EMA (European Medicines Agency,
2023b) and FDA (U.S. Food and Drug Administration, 2024), signaling regulatory openness to
AI-assisted RCT analyses when supported by robust validation. More broadly, integrating AI
derived covariates with doubly robust estimators such as AIPW, TMLE, or double score matching
(Tan et al., 2025) allows statisticians to exploit complex nonlinear treatment-covariate and outcome
covariate relationships while retaining desirable asymptotic properties of treatment effect estimation
such as root-n consistency and normality.
AI-assisted RCT design: hybrid controlled trials. Replacing control arms entirely with
AI-derived digital twins or real-world comparators is risky, but hybrid designs offer a more reli
able alternative. These designs keep a smaller randomized control arm to anchor inference while
borrowing information from digital twins or external controls in a bias-aware manner. The causal
estimand remains the average treatment effect in the RCT population, protected by randomization,
while concurrent controls enable bias detection and calibration of external sources.
A variety of methodological strategies have been developed to implement this framework. Bayesian
approaches adaptively down-weight or filter external data when discrepancies arise, using priors such
as power priors, commensurate priors, meta-analytic predictive priors, more recent hierarchical ex
changeability models and others (Chen and Ibrahim, 2000; Hobbs et al., 2011; Schmidli et al., 2014;
Alt et al., 2024). Frequentist approaches span a continuum from blunt to precise: from simple
test-then-pool rules (Viele et al., 2014; Dang et al., 2023; Yang et al., 2023; Gao and Yang, 2023) to
more sophisticated adaptive weighting (Cheng et al.), bias-function modeling (Wu and Yang, 2022;
Mao et al., 2025; Yang et al., 2024; Cheng et al., 2023), study-level selection (Chen et al., 2021; Zhai
and Han, 2022; Huang et al., 2023), and semiparametric selective borrowing methods (Gao et al.,
2024, 2025) that reweight or borrow only comparable subsets of external data. In rare disease trials
where patient numbers are limited, Fisher’s randomization test (Zhu et al., 2025; Liu, Zhu, Yang
and Wang, 2025) provides an assumption-light safeguard for validity.
Together, these strategies illustrate a continuum of methods that do not replace randomized
controls but strengthen them, ranging from blunt screening to precise adjustment to definitive
testing and offering a principled path for integrating external information into trial design.
AI-assisted RCT design through active learning. Traditional clinical trials rely on passive
recruitment, enrolling patients as they present at clinical sites and meet predefined eligibility crite
12

ria. In such settings, every enrolled participant is treated as equally informative, even though their
contribution to the study’s objectives may vary substantially. AI-assisted trial design introduces an
active learning paradigm in which RWD and AI/ML help identify the participants who are most
informative for the scientific aims of the study. For example, when the objective is to estimate an
optimal treatment decision rule, selectively recruiting patients who lie near the decision boundary
can substantially improve information efficiency. When the primary goal is to evaluate treatment
efficacy, prioritizing individuals with the largest expected treatment effects can increase statistical
power and reduce the required sample size. By integrating RWD-driven insights into participant
selection, AI-enabled active learning offers a proactive and adaptive approach to recruitment, en
suring that future trials engage the individuals most likely to accelerate discovery and strengthen
the evidence base.
Generating Long-Term Effectiveness and safety monitoring by Linking Short-Term
RCTs with Long-Term RWD. Integrating short-term RCTs with long-term RWD provides a
powerful framework for evaluating treatment durability, late safety signals, and downstream out
comes that RCTs alone cannot capture due to limited follow-up. Traditional trials often stop at
intermediate endpoints or relatively short time horizons, leaving critical questions about sustained
benefit and the implications of extending trial period unanswered. For example, hybrid analyses
linking oncology RCTs with cancer registries or electronic health records have been used to extend
survival follow-up, assess recurrence rates, and monitor late-onset or long latency adverse events.
Such integration has been applied in immuno-oncology and cardiovascular studies, where trial ev
idence demonstrates early efficacy but real-world registries reveal longer-term patterns of relapse,
toxicity, or adherence. By leveraging RWD to extend the evidentiary window, researchers can gen
erate evidence on durability that directly informs clinical guidelines, regulatory decisions, and payer
assessments of value.
From a methodological standpoint, this integration requires defining the causal estimand in terms
of long-term survival, effectiveness, and safety in the relevant target population, carefully aligning
RCT and RWD sources, and addressing biases such as informative censoring, treatment switching,
and unmeasured confounding. Approaches such as bias-function modeling (Zhou et al., 2024),
surrogate endpoint validation (Gilbert et al., 2025), and data fusion strategies (Athey et al., 2025;
Imbens et al., 2025) offer principled ways to bridge short-term trial outcomes and long-term real
world trajectories. Flexible AI/ML and sensitivity analyses methods further enhance robustness.
HTA agencies have increasingly highlighted the importance of such strategies for capturing lifetime
value and sustainability of therapies, particularly in oncology and rare diseases where long-term
randomized evidence and safety monitoring is impractical. Together, these methodological and
applied advances demonstrate how combining short-term RCTs with long-term RWD can provide a
more complete and policy-relevant understanding of treatment benefit across the patient lifecycle.
Synthesis. These applications highlight that integrative methods are no longer theoretical but
actively shaping regulatory and clinical decision-making. Whether by transporting RCT findings
13

to broader populations, embedding AI-assisted analyses within trials, designing hybrid controls,
or extending trials with long-term RWD, the common thread is methodological rigor guided by a
causal roadmap. Integration fosters both adaptive innovation and regulatory credibility, positioning
it as a cornerstone of modern evidence generation.
5 Summary and Path Forward
The field of evidence generation stands at a pivotal juncture. The confluence of increasing data
availability, rapid advances in AI/ML, and pressing demands from regulators, sponsors, payers,
providers, and patients presents both challenges and opportunities. Issues such as privacy, un
certainty, small-sample inference, and bias must be addressed systematically, but they should be
viewed as catalysts for innovation rather than unsolvable obstacles. Below we outline key areas
where progress is critical and where the integration of causal inference, statistical rigor, and AI/ML
adaptability offers the greatest promise.
Uncertainty quantification. As evidence increasingly combines RCTs, RWD, and AI/ML-based
predictions, ensuring reliable uncertainty quantification is essential. Conformal prediction provides
a distribution-free framework for constructing valid, finite-sample inference intervals that remain
robust even when applied to complex, black-box models (Vovk et al., 2005; Lei and Wasserman,
2014; Angelopoulos and Bates, 2023). This is particularly important for individualized treatment
effects, where interpretability and credibility are paramount for both clinicians and regulators, and
where incorrect recommendations could lead to patient harm. Extending conformal prediction to
individualized treatment effect (Lei and Candès, 2021) enhances both interpretability and personal
ized treatment and care, representing an active frontier. Moreover, emerging work on multivariate
and causal conformal methods (Jin et al., 2023) shows promise for jointly evaluating efficacy and
safety outcomes, which is especially relevant for holistic evaluation of treatment.
Small-sample challenges. Many high-stakes clinical contexts, including rare diseases and early
phase drug development, operate under severe data constraints. Traditional asymptotic approxi
mations often break down, and naive machine learning algorithms may overfit, yielding unstable
or irreproducible estimates. Addressing this requires algorithms and estimators specifically de
signed for finite samples: approaches that balance efficiency with robustness, make optimal use
of external or historical controls, and provide valid inference under realistic assumptions. For in
stance, randomization-based inference frameworks (Fisher, 1935; Zhu et al., 2025; Liu, Zhu, Yang
and Wang, 2025) can ensure that findings remain credible even in data-limited scenarios. Such
methods not only expand the feasibility of trials in ultra-rare conditions but also increase equity by
enabling evidence generation in historically underserved populations. Emerging developments, such
as conformal inference, further strengthen finite-sample guarantees and can be used to calibrate
uncertainty across both RCT and RWD sources.
14

Privacy and confidentiality. Protecting patient privacy while enabling meaningful multi-institutional
research, an issue that also carries geopolitical implications, remains one of the most urgent con
cerns in modern data integration. Federated learning offers a promising solution by allowing de
centralized analyses across hospitals, registries, and trial networks without sharing individual-level
data (Li et al., 2020; Kairouz et al., 2021). Recent developments in federated causal inference,
such as adaptive weighting schemes, penalized regression frameworks, and communication-efficient
protocols, make it possible to estimate causal effects across diverse populations while minimizing
privacy risks. These methods are especially valuable in rare diseases and underrepresented popu
lations, where single-institution data are insufficient. Beyond methodology, widespread adoption
will require interoperable infrastructures, secure platforms, and regulatory clarity on how federated
analyses can be incorporated into regulatory submissions and health technology assessments.
In parallel, generative AI provides an emerging and complementary path for privacy-preserving
analytics. By learning the underlying data distribution rather than memorizing individual data
points, generative models, particularly diffusion-based frameworks, can synthesize realistic yet non
identifiable datasets that retain the essential statistical properties of the original data. Such syn
thetic data enable valid statistical inference while protecting individual privacy. Looking ahead,
integrating federated learning with generative modeling could establish a dual-layered privacy ar
chitecture, allowing centralized models to learn from distributed data distributions and generate
representative samples for analysis without ever exposing sensitive patient information.
Prospective validation of casual assumptions in RWE. Evaluating the causal assumptions
that underpin real-world evidence is critical, yet many such assumptions cannot be fully verified
using retrospective observational data alone. A practical and scalable strategy is to embed small,
prospective randomized studies designed specifically to assess the robustness of these assumptions.
For example, consider a situation in which a large RWD analysis indicates that treatment A is
more effective than treatment B in reducing cardiovascular risk. While a full-scale RCT may be
impractical due to cost or operational constraints, a smaller randomized validation study can still
yield meaningful evidence regarding the credibility of this causal conclusion. One approach is to use
estimated propensity scores from the RWD to inform randomization probabilities in the validation
study. By randomizing patients conditional on their covariate-adjusted scores, confounding can
be eliminated by design. The treatment effects observed in this randomized validation cohort can
then be used to quantify, in probabilistic terms, the degree to which the RWD-based conclusion
about treatment superiority is likely to hold. This hybrid strategy strengthens causal claims while
maintaining feasibility and efficiency.
Cross-cutting issues. Foundational challenges in data quality, interoperability, and bias control
cut across all methodological innovations. Integrating RCTs with RWD/E requires harmonized
data standards, transparent curation pipelines, and rigorous evaluation of measurement error and
missingness (Little and Rubin, 1987). Biases, including confounding, selection bias, and temporal
misalignment, must be addressed explicitly, with causal diagrams (Greenland et al., 1999; Hern’an
15

and Robins, 2020) and domain knowledge guiding assumptions and model specification. Trans
parency, reproducibility, and adherence to regulatory standards are not optional but necessary for
acceptance by agencies such as the FDA, EMA, NICE, and ICER. Open science practices, including
data sharing agreements, open-source software, and reproducible workflows, should be embedded
into the research culture to ensure trust and credibility.
Future directions. The path forward lies in uniting statistical rigor with the adaptability of
AI/ML. Privacy-preserving analytics, federated causal methods, and adaptive evidence integra
tion frameworks promise more efficient and personalized trial designs. Yet methodological progress
alone is insufficient: successful translation requires implementation through open-source software,
user-friendly platforms, and comprehensive training resources that empower diverse stakeholders.
Collaboration across statisticians, AI/ML researchers, software engineers, clinicians, regulators,
and patients will be crucial to bridge the gap between theoretical development and practical appli
cation. Specific opportunities include the extension of conformal prediction to multivariate causal
outcomes, hybrid designs combining RCTs with digital twins and external controls under bias-aware
frameworks, and adaptive borrowing strategies for small samples. These advances can accelerate
decision-making in areas such as oncology, rare diseases, and pandemic preparedness, contexts where
timely, credible evidence is both urgently needed and difficult to generate.
In sum, the next phase of evidence generation depends on integration rather than isolation. By
combining the inferential strengths of statistics with the predictive adaptability of AI/ML, and by
bridging RCTs with RWD/E under principled causal frameworks, the field can transform current
challenges into enduring opportunities. The ultimate goal is to deliver evidence that is not only
methodologically rigorous and transparent but also clinically meaningful and directly relevant to
patient outcomes.
Acknowledgments
We used ChatGPT 5 to review the grammar and refine the writing. This project is supported by
the Food and Drug Administration (FDA) of the U.S. Department of Health and Human Services
(HHS) as part of a financial assistance award U01FD007934 totaling $2,556,429 over three years
(subject to the availability of funds and satisfactory progress of the project) with 100 percent
funded by FDA/HHS. Yang was partially funded by the U.S. National Institutes of Health (grant #
1R01AG066883) and the U.S. National Science Foundation (grant # SES 2242776). The contents
are those of the speaker and do not necessarily represent the official views of, nor an endorsement,
by FDA/HHS, or the U.S. Government.
References
Ahmad, F. S., Ricket, I. M., Hammill, B. G., Eskenazi, L., Robertson, H. R., Curtis, L. H., Dobi,
C. D., Girotra, S., Haynes, K., Kizer, J. R., Kripalani, S., Roe, M. T., Roumie, C. L., Waitman,
16

R., Jones, W. S. and Weiner, M. G. (2020). Computable phenotype implementation for a national,
multicenter pragmatic clinical trial: Lessons learned from adaptable, Circulation: Cardiovascular
Quality and Outcomes 13(6): e006292.
Akbarialiabad, H., Pasdar, A., Murrell, D. F. et al. (2025). Enhancing randomized clinical trials
with digital twins, npj Systems Biology and Applications 11: 110.
URL: https://doi.org/10.1038/s41540-025-00592-0
Alt, E. M., Chang, X., Jiang, X., Liu, Q., Mo, M., Xia, H. A. and Ibrahim, J. G. (2024).
Leap: the latent exchangeability prior for borrowing information from historical data, Biometrics
80(3): ujae083.
Angelopoulos, A. N. and Bates, S. (2023). Conformal prediction: A gentle introduction, Foundations
and Trends in Machine Learning 16: 494–591.
Athey, S., Chetty, R., Imbens, G. W. and Kang, H. (2025). The surrogate index: Combining
short-term proxies to estimate long-term treatment effects more rapidly and precisely, Review of
Economic Studies in press.
Athey, S., Tibshirani, J. and Wager, S. (2019). Generalized random forests, The Annals of Statistics
47: 1148–1178.
Bachinger, M., Jankowski, M. A., Kesselheim, A. S. and Krüger, N. (2025). Real-world evidence
in drug approvals at the european medicines agency, JAMA Network Open 8(11): e2542041
e2542041.
Bareinboim, E. and Pearl, J. (2016). Causal inference and the data-fusion problem, Proceedings of
the National Academy of Sciences 113: 7345–7352.
Batech, M., Madsen, A., Gatto, N., Zhang, T. C., Ricci, D., Harvey, R., Khan, N. and Jain, S.
(2025). Combining real-world and clinical trial data through privacy-preserving record linkage:
Opportunities and challenges – a narrative review, Health Science Reports 8(9): e71272.
Bica, I., Alaa, A. M., Jordon, J. and Van Der Schaar, M. (2020). Estimating counterfactual treat
ment outcomes over time through adversarially balanced representations, International conference
on learning representations.
Blumenthal, D. and Tavenner, M. (2010). The “Meaningful Use” regulation for electronic health
records, New England Journal of Medicine 363(6): 501–504.
URL: https://doi.org/10.1056/NEJMp1006114
Chen, M.-H. and Ibrahim, J. G. (2000). Power prior distributions for regression models, Statistical
Science 15(1): 46–60.
Chen, Z., Ning, J., Shen, Y. and Qin, J. (2021). Combining primary cohort data with external
aggregate information without assuming comparability, Biometrics 77(3): 1024–1036.
17

Cheng, Y., Wu, L. and Yang, S. (2023). Enhancing treatment effect estimation: A model robust
approach integrating randomized experiments and external controls using the double penalty
integration estimator, Uncertainty in Artificial Intelligence, PMLR, pp. 381–390.
Chernozhukov, V., Chetverikov, D., Demirer, M., Duflo, E., Hansen, C., Newey, W. and Robins, J.
(2018). Double/debiased machine learning for treatment and structural parameters, The Econo
metrics Journal 21: 1–68.
CIOM (2025). AI in pharmacovigilance, Draft guidance, CIOMS. Draft guidance expected May
2025.
URL: https://cioms.ch
Colnet, B., Mayer, I., Chen, G., Dieng, A., Li, R., Varoquaux, G., Vert, J.-P., Josse, J. and Yang,
S. (2024). Causal inference methods for combining randomized trials and observational studies:
a review, Statistical Science 39: 165–191.
Concato, J. and Corrigan-Curay, J. (2022). Real-world evidence–where are we now?, New England
Journal of Medicine 386: 1680–1682.
Cox, D. R. (1958). The Planning of Experiments, Wiley, New York.
Dahabreh, I. J. and Hernán, M. A. (2019). Extending inferences from a randomized trial to a target
population, European Journal of Epidemiology 34(8): 719–722.
Dang, L. E., Tarp, J. M., Abrahamsen, T. J., Kvist, K., Buse, J. B., Petersen, M. and van der
Laan, M. (2023). A cross-validated targeted maximum likelihood estimator for data-adaptive
experiment selection applied to the augmentation of RCT control arms with external data, arXiv
preprint arXiv:2210.05802v3 .
Deng, Y.-F., Girman, C. J. and Ritchey, M. E. (2025). Real-world evidence in fda approvals for
labeling expansion of small molecules and biologics, Therapeutic Innovation & Regulatory Science
pp. 1–11.
Esteva, A., Robicquet, A., Ramsundar, B., Kuleshov, V., DePristo, M., Chou, K., Cui, C., Corrado,
G., Thrun, S. and Dean, J. (2019). A guide to deep learning in healthcare, Nature Medicine
25: 24–29.
European Medicines Agency (2020). Ema regulatory science to 2025: Strategic reflection, Ams
terdam: EMA. Available at: https://www.ema.europa.eu/en/documents/regulatory-procedural
guideline/ema-regulatory-science-2025-strategic-reflection_en.pdf.
European Medicines Agency (2023a). AI workplan 2023–2028, Workplan.
URL: https://www.ema.europa.eu
18

European Medicines Agency (2023b). Qualification opinion: Procova methodology for covariate
adjustment in randomized clinical trials, EMA/CHMP/SAWP/xxxx/2023. Available at: https:
//www.ema.europa.eu/ (Accessed: 2025-09-16).
European Medicines Agency (2024). Reflection paper on the use of AI in the medicinal product
lifecycle, Technical report, EMA. Reflection paper.
URL: https://www.ema.europa.eu
European Medicines Agency (2025). Review of artificial intelligence and machine learning ap
plications in the medicines lifecycle 2024: Horizon scanning short report, Technical Report
EMA/571739/2024, European Medicines Agency. Accessed: October 2025.
URL: https://www.ema.europa.eu/en/documents/report/review-artificial-intelligence-machine
learning-applications-medicines-lifecycle-2024-horizon-scanning-short-report_en.pdf
Fisher, R. A. (1935). The Design of Experiments, 1st edn, Oliver and Boyd, Edinburgh.
Fishman, E., Barron, J., Dinh, J., Jones, W. S., Marshall, A., Merkh, R., Robertson, H. and
Haynes, K. (2018). Validation of a claims-based algorithm identifying eligible study subjects in
the adaptable pragmatic clinical trial, Contemporary Clinical Trials Communications 12: 154–160.
Food and Drug Administration (2025a). Ai for drug development – CDER perspective, Technical
report, FDA. Perspective paper.
URL: https://www.fda.gov
Food and Drug Administration (2025b). Considerations for the use of AI to support regulatory
decision-making for drug and biological products, Draft guidance, FDA. Draft guidance expected
January 2025.
URL: https://www.fda.gov
Frangakis, C. E. and Rubin, D. B. (2002). Principal stratification in causal inference, Biometrics
58: 21–29.
G-BA (2020). The benefit assessment of pharmaceuticals in accordance with the german social
code, book five (SGB V): The G-BA methods paper, Berlin: G-BA. Available at: https://www.
g-ba.de/methodenbewertung/ (Accessed: 2025-09-16).
Gao, C. and Yang, S. (2023). Pretest estimation in combining probability and non-probability
samples, Electronic Journal of Statistics 17(1): 1492–1546.
Gao, C., Yang, S., Shan, M., Ye, W., Lipkovich, I. and Faries, D. (2025). Improving randomized
controlled trial analysis via data-adaptive borrowing, Biometrika 112(2): asae069.
Gao, C., Yang, S., Shan, M., Ye, W. W., Lipkovich, I. and Faries, D. (2024). Doubly protected
estimation for survival outcomes utilizing external controls for randomized clinical trials, The 41st
(ICML) International Conference on Machine Learning .
19

Gilbert, P. B., Peng, J., Han, L., Lange, T., Lu, Y., Nie, L., Shih, M.-C., Waddy, S. P., Wiley,
K., Yann, M. et al. (2025). A surrogate endpoint-based provisional approval causal roadmap,
illustrated by vaccine development, Biostatistics 26(1): kxaf018.
Goldsack, J. C., Izmailova, E. S., Menetski, J. P., Hoffmann, S. C., Groenen, P. M. and Wagner,
J. A. (2020). Remote digital monitoring in clinical trials in the time of COVID-19, Nature Reviews
Drug Discovery 19: 378–380.
Greenland, S., Pearl, J. and Robins, J. M. (1999). Causal diagrams for epidemiologic research,
Epidemiology 10(1): 37–48.
Hampson, G., Towse, A., Dreitlein, W. B., Henshall, C. and Pearson, S. D. (2018). Real-world evi
dence for coverage decisions: opportunities and challenges, Journal of Comparative Effectiveness
Research 7: 1133–1143.
Harrer, S., Shah, P., Antony, B. and Hu, J. (2019). Artificial intelligence for clinical trial design,
Trends in Pharmacological Sciences 40: 577–591.
Hernán, M. A. and Robins, J. M. (2016). Using big data to emulate a target trial when a randomized
trial is not available, American journal of epidemiology 183: 758–764.
Hern’an, M. A. and Robins, J. M. (2020). Causal Inference: What If, Chapman & Hall/CRC, Boca
Raton, FL.
Hobbs, B. P., Carlin, B. P., Mandrekar, S. J. and Sargent, D. J. (2011). Hierarchical commensurate
and power prior models for adaptive incorporation of historical information in clinical trials,
Biometrics 67(3): 1047–1056.
Huang, Y., Huang, C.-Y. and Kim, M.-O. (2023). Simultaneous selection and incorporation of
consistent external aggregate information, Statistics in Medicine 42(30): 5630–5645.
ICER (2020). Value assessment framework: Updated for 2020, Boston: ICER. Available
at: https://icer.org/our-approach/methods-process/value-assessment-framework/ (Ac
cessed: 2025-09-16).
ICH (2024). ICH M15: Model-informed drug development (MIDD) general principles guideline,
Draft guideline, ICH. Draft guideline.
URL: https://www.ich.org
Imbens, G., Kallus, N., Mao, X. and Wang, Y. (2025). Long-term causal inference under persistent
confounding via data combination, Journal of the Royal Statistical Society Series B: Statistical
Methodology 87(2): 362–388.
Innes, G. K., Smith, K. A., Kuzucan, A., Li, J., Rivera, D., Panagiotou, O. A. and Concato, J.
(2025). Real-world evidence in new drug and biologics license application approvals during fiscal
years 2020–2022, Clinical Pharmacology & Therapeutics 118: 85–89.
20

Jiang, Z., Yang, S. and Ding, P. (2022). Multiply robust estimation of causal effects under principal
ignorability, Journal of the Royal Statistical Society Series B: Statistical Methodology 84(4): 1423
1445.
Jin, Y., Egami, N. and Rothenhausler, D. (2024). Beyond reweighting: On the predictive role of
covariate shift in effect generalization, arXiv preprint 2412.08869. arXiv:2412.08869 [stat.ML].
URL: https://arxiv.org/abs/2412.08869
Jin, Y., Ren, Z. and Candès, E. J. (2023). Sensitivity analysis of individual treatment ef
fects: A robust conformal inference approach, Proceedings of the National Academy of Sciences
120(6): e2214889120.
Kairouz, P., McMahan, H. B., Avent, B., Bellet, A., Bennis, M., Bhagoji, A. N., Bonawitz, K.,
Charles, Z., Cormode, G., Cummings, R. et al. (2021). Advances and open problems in federated
learning, Foundations and trends® in machine learning 14(1–2): 1–210.
Kalankesh, L. R. and Monaghesh, E. (2024). Utilization of ehrs for clinical trials: a systematic
review, BMC Medical Research Methodology 24: 70.
Kennedy-Martin, T., Curtis, S., Faries, D., Robinson, S. and Johnston, J. (2015). A literature
review on the representativeness of randomized controlled trial samples and implications for the
external validity of trial results, Trials 16: 1–14.
Kesselheim, A. S. and Avorn, J. (2017). New “21st Century Cures” legislation: speed and ease vs
science, JAMA 317(6): 581–582.
Lee, D., Gao, C., Ghosh, S. and Yang, S. (2024). Transporting survival of an hiv
clinical trial to the external target populations, Journal of Biopharmaceutical Statistics
p. doi.org/10.1080/10543406.2024.2330216.
Lee, D., Yang, S., Berry, M., Stinchcombe, T., Cohen, H. J. and Wang, X. (2024). genrct: a
statistical analysis framework for generalizing rct findings to real-world population, Journal of
Biopharmaceutical Statistics p. doi.org/10.1080/10543406.2024.2333136.
Lee, D., Yang, S., Dong, L., Wang, X., Zeng, D. and Cai, J. (2021). Improving trial generalizability
using observational studies, Biometrics . Available at: https://doi.org/10.1111/biom.13609.
Lee, D., Yang, S., Dong, L., Wang, X., Zeng, D. and Cai, J. (2023). Improving trial generalizability
using observational studies, Biometrics 79: 1213–1225.
Lee, D., Yang, S. and Wang, X. (2022). Doubly robust estimators for generalizing treatment effects
on survival outcomes from randomized controlled trials to a target population, Journal of Causal
Inference 10: 415–440.
Lei, J. and Wasserman, L. (2014). Distribution-free prediction bands for non-parametric regression,
Journal of the Royal Statistical Society: Series B (Statistical Methodology) 76: 71–96.
21

Lei, L. and Candès, E. J. (2021). Conformal inference of counterfactuals and individual treatment
effects, Journal of the Royal Statistical Society Series B: Statistical Methodology 83(5): 911–938.
Li, T., Sahu, A. K., Talwalkar, A. and Smith, V. (2020). Federated learning: Challenges, methods,
and future directions, IEEE signal processing magazine 37(3): 50–60.
Lipton, Z. C. (2018). The mythos of model interpretability: In machine learning, the concept of
interpretability is both important and slippery., Queue 16: 31–57.
Little, R. J. and Rubin, D. B. (1987). Statistical analysis with missing data, Wiley, New York.
Liu, J., Zhu, K., Yang, S. and Wang, X. (2025). Robust estimation and inference in hybrid con
trolled trials for binary outcomes: A case study on non-small cell lung cancer, arXiv preprint
arXiv:2505.00217 .
Liu, Y., Zhu, K., Han, L. and Yang, S. (2025). Coadvise: Covariate adjustment with variable selec
tion and missing data imputation in randomized controlled trials, Journal of the Royal Statistical
Society: Series A . doi: 10.1093/jrsssa/qnaf171.
URL: doi: 10.1093/jrsssa/qnaf171
Loudon, K., Treweek, S., Sullivan, F., Donnan, P., Thorpe, K. E. and Zwarenstein, M. (2015). The
PRECIS-2 tool: designing trials that are fit for purpose, BMJ 350.
Mao, G., Yang, S. and Wang, X. (2025). Statistical inference for heterogeneous treatment effect with
right-censored data from synthesizing randomized clinical trials and real-world data, Biometrics
.
MHPRA (2021). Guidance on the use of real-world data in clinical studies to
support regulatory decisions, https://www.gov.uk/government/publications/
mhra-guidance-on-real-world-data-in-clinical-studies. Accessed: 2025-09-16.
Nagar, A., Gobburu, J. and Chakravarty, A. (2025). Artificial intelligence in pharmacovigilance: ad
vancing drug safety monitoring and regulatory integration, Therapeutic Advances in Drug Safety
16: 20420986251361435.
Neufeld, A., Dharamshi, A., Gao, L. L. and Witten, D. (2024). Data thinning for convolution-closed
distributions, Journal of Machine Learning Research 25(57): 1–35.
URL: http://jmlr.org/papers/v25/23-0446.html
NICE (2013). Guide to the methods of technology appraisal, London:
NICE. Available at: https://www.nice.org.uk/process/pmg9/resources/
guide-to-the-methods-of-technology-appraisal-2013-pdf-2007975843781 (Accessed:
2025-09-16).
NMPA (2022). Technical guidelines for the use of real-world evidence in drug development and
review, https://english.nmpa.gov.cn/. Accessed: 2025-09-16.
22

PMDA (2021). Pmda initiatives for utilization of real-world data, https://www.pmda.go.jp/
english/review-services/regulatory-info/0012.html. Accessed: 2025-09-16.
Rothwell, P. M. (2005). External validity of randomised controlled trials: “to whom do the results
of this trial apply?”, The Lancet 365: 82–93.
Rudin, C. (2019). Stop explaining black box machine learning models for high stakes decisions and
use interpretable models instead, Nature Machine Intelligence 1: 206–215.
Schmidli, H., Gsteiger, S., Roychoudhury, S., O’Hagan, A., Spiegelhalter, D. and Neuenschwan
der, B. (2014). Robust meta-analytic-predictive priors in clinical trials with historical control
information, Biometrics 70(4): 1023–1032.
Schuler, A., Bai, Y., Zhao, Q., Bica, I., Zhang, Y., Poursaeed, O., Lumbreras, S., Sharma, A.,
Herringer, S., Cutler, D., Valiant, G., Ercole, A., Schwab, P., Kalbfleisch, J. D. and Lipkovich,
I. (2022). Procova: A methodology for covariate adjustment in randomized clinical trials using
prognostic scores derived from external data, Clinical Pharmacology & Therapeutics 111(1): 186
195.
Schwartz, D. and Lellouch, J. (1967). Explanatory and pragmatic attitudes in therapeutical trials,
Journal of Chronic Diseases 20: 637–648.
Spieth, P. M., Kubasch, A. S., Penzlin, A. I., Illigens, B. M.-W., Barlinn, K. and Siepmann, T.
(2016). Randomized controlled trials–a matter of design, Neuropsychiatric Disease and Treatment
12: 1341–1349.
Tan, X., Yang, S., Ye, W., Faries, D. E., Lipkovich, I. and Kadziola, Z. (2025). Double machine
learning methods for estimating average treatment effects: a comparative study, Journal of Bio
pharmaceutical Statistics 36: 1–20.
Tao, Y. and Fu, H. (2019). Doubly robust estimation of the weighted average treatment effect for
a target population, Statistics in Medicine 38: 315–325.
Topol, E. (2019). Deep Medicine: How Artificial Intelligence Can Make Healthcare Human Again,
Basic Books, New York.
U.S. FDA (2024). Real-world data: Assessing electronic health records and medical claims
data to support regulatory decision-making for drug and biological products, Guidance for
Industry, Final Guidance, Center for Drug Evaluation and Research; Center for Biolog
ics Evaluation and Research; Oncology Center of Excellence. FDA-2020-D-2307. Available
at: https://www.fda.gov/regulatory-information/search-fda-guidance-documents/
real-world-data-assessing-electronic-health-records-and-medical-claims-data-support-regulator
(Accessed: 2025-09-16).
23

U.S. Food and Drug Administration (2018). Framework for fda’s real-world evidence program, Silver
Spring, MD: FDA. Available at: https://www.fda.gov/media/120060/download.
U.S. Food and Drug Administration (2019). Rare diseases: Natural history studies for drug devel
opment, https://www.fda.gov/media/122425/download. Accessed: 2021-02-17.
U.S. Food and Drug Administration (2024). Qualification of procova prognostic covariate adjustment
methodology, FDA Qualification Opinion, Center for Drug Evaluation and Research. Available
at: https://www.fda.gov/ (Accessed: 2025-09-16).
Viele, K., Berry, S., Neuenschwander, B., Amzal, B., Chen, F., Enas, N., Hobbs, B., Ibrahim, J. G.,
Kinnersley, N. and Lindborg, S. (2014). Use of historical control data for assessing treatment
effects in clinical trials, Pharmaceutical statistics 13: 41–54.
Vovk, V., Gammerman, A. and Shafer, G. (2005). Algorithmic Learning in a Random World, Vol. 29,
Springer.
Walsh, D., Schuler, A. M., Hall, D., Walsh, J. R. and Fisher, C. K. (2021). Using digital twins to
reduce sample sizes while maintaining power and statistical accuracy, Alzheimer’s & Dementia
17: e054657.
Wu, L. and Yang, S. (2022). Integrative R-learner of heterogeneous treatment effects combining
experimental and observational studies, Proceedings of the First Conference on Causal Learning
and Reasoning, Vol. 177 of Proceedings of Machine Learning Research, pp. 904–926.
Yang, S., Gao, C., Zeng, D. and Wang, X. (2023). Elastic integrative analysis of randomised trial and
real-world data for treatment heterogeneity estimation, Journal of the Royal Statistical Society
Series B: Statistical Methodology 85: 575–596.
Yang, S., Liu, S., Zeng, D. and Wang, X. (2024). Data fusion methods for the heterogeneity of
treatment effect and confounding function, Bernoulli in press.
Yang, S. and Wang, X. (2022). RWD-integrated randomized clinical trial analysis, Biopharmaceu
tical Report 29: 15–21.
Yoon, J., Jordon, J. and Van Der Schaar, M. (2018). Ganite: Estimation of individualized treatment
effects using generative adversarial nets, International Conference on Learning Representations.
Zhai, Y. and Han, P. (2022). Data integration with oracle use of external information from hetero
geneous populations, Journal of Computational and Graphical Statistics 31(4): 1001–1012.
Zhang, J., Petersen, S. D., Radivojevic, T., Ramirez, A., Pérez-Manríquez, A., Abeliuk, E., Sánchez,
B. J., Costello, Z., Chen, Y., Fero, M. J. et al. (2020). Combining mechanistic and machine
learning models for predictive engineering and optimization of tryptophan metabolism, Nature
Communications 11(1): 4880.
24

Zhang, Y. and Yang, S. (2025). Semiparametric localized principal stratification analysis with con
tinuous strata, Journal of the Royal Statistical Society Series B: Statistical Methodology p. qkaf034.
Zhou, X., Zhu, J., Drake, C. and Pang, H. (2024). Causal estimators for incorporating external
controls in randomized trials with longitudinal outcomes, Journal of the Royal Statistical Society
Series A: Statistics in Society p. qnae075.
Zhu, K., Yang, S. and Wang, X. (2025). Enhancing statistical validity and power in hybrid controlled
trials: A randomization inference approach with conformal selective borrowing, Proceedings of the
42nd International Conference on Machine Learning (ICML 2025). In press.
25

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:33.178Z
- **Text Length:** 67014 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 25 of 25
