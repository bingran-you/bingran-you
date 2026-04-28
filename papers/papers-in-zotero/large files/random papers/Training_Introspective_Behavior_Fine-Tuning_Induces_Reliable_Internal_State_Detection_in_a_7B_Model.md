# PDF Document: Rivera - 2025 - Training Introspective Behavior Fine-Tuning Induces Reliable Internal State Detection in a 7B Model.pdf

**File Path:** Rivera - 2025 - Training Introspective Behavior Fine-Tuning Induces Reliable Internal State Detection in a 7B Model.pdf

**Processed Date:** 2026-02-10T18:17:04.377Z

**File Size:** 544.88 KB

**Total Pages:** 16

**Extracted Pages:** 16

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3787

**Title:** Training Introspective Behavior: Fine-Tuning Induces Reliable Internal State Detection in a 7B Model

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Training Introspective Behavior:
Fine-Tuning Induces Reliable Internal State Detection in
a 7B Model
Joshua Fonseca Rivera The University of Texas at Austin joshfonseca@utexas.edu
Abstract
Lindsey [2025] investigates introspective awareness in language models through four experiments, finding that models can sometimes detect and identify injected activation patterns—but unreliably (∼20% success in the best model). We focus on the first of these experiments—self-report of injected “thoughts”and ask whether this capability can be directly trained rather than waiting for emergence. Through fine-tuning on transient single-token injections, we transform a 7B parameter model from near-com-
plete failure (0.4% accuracy, 6.7% false positive rate) to reliable detection (85% accuracy on held-out concepts at α = 40, 0% false positives). Our model detects fleeting “thoughts” injected at a single token position, retains that information, and reports the semantic content across subsequent generation steps. On this task, our trained model satisfies three of Lindsey’s criteria: accuracy (correct identification), grounding (0/60 false positives), and internality (detection precedes verbalizati-
on). Generalization to unseen concept vectors (7.5pp gap) demonstrates the model learns a transferable skill rather than memorizing specific vectors, though this does not establish metacognitive representation in Lindsey’s sense. These results address an open question raised by Lindsey: whether “training for introspection would help eliminate cross-model differences.” We show that at least one component of introspective behavior can be directly induced, offering a pathway to built-in AI transparen-
cy.
1 Introduction
“I detect an injected thought about volcano.”
—DeepSeek-7B (7B parameters), correctly identifying a transient concept injection it had never seen during training
Can language models be trained to monitor their own internal states? Lindsey [2025] recently investigated introspective awareness through four experiments: (1) self-report of injected “thoughts,” (2) distinguishing thoughts from text inputs, (3) detecting unintended outputs via introspection, and (4) intentional control of internal states. Across these experiments, introspective capabilities proved unreliable (∼20% success even in Claude Opus 4.1) and appeared to emerge only at massive scale. Lind-
sey speculates that “a lightweight process of explicitly training for introspection would help eliminate cross-model differences,” but leaves this as an open question.
We address this question for Lindsey’s first experiment: self-report of injected thoughts. We demonstrate that this capability—detecting and identifying injected activation patterns—can be reliably induced in a 7B parameter model through fine-tuning. Moreover, we train on transient injection, where the concept vector is applied at only a single token position. This paradigm tests whether the model can notice a fleeting anomaly, retain that information across subsequent generation steps, and report-
 it accurately. Before training, DeepSeek-7B fails at introspection tasks almost entirely: only 1.2% detection rate and 0.4% overall success (1/240 trials), while producing 6.7% false positives on control trials. After training on transient injections, it achieves 85% accuracy on held-out concepts at moderate injection strengths (α = 40), with zero false positives across all 60 control trials (95% CI: [0%–6%]). Performance decreases at
1
arXiv:2511.21399v1 [cs.CL] 26 Nov 2025

higher strengths (α = 100 → 55%), suggesting an optimal operating range where injections are detectable but do not overwhelm generation. The generalization gap of only 7.5 percentage points indicates the model learns a robust skill rather than memorizing specific concept-vector mappings.
Relation to Lindsey’s Criteria. Lindsey defines introspective awareness via four criteria: accuracy, grounding, internality, and metacognitive representation. On the injected-thought detection task, our trained model satisfies:
1. Accuracy: 85% correct identification on novel concepts (vs. ∼20% in Lindsey’s best model).
2. Grounding: 0% false positives across 60 control trials establishes causal dependence on actual injections.
3. Internality: Detection phrases (“I detect an injected thought”) precede concept verbalization, indicating internal recognition before output.
4. Metacognitive Representation: Lindsey acknowledges this criterion is “difficult to demonstrate directly.” Our generalization to unseen concept vectors shows the model learns a transferable decoding skill rather than memorizing training examples, but does not establish metacognition—the model may be performing sophisticated pattern-matching on activation directions without internal self-awareness.
We do not address Lindsey’s other three experiments (thought/text discrimination, prefill detection, intentional control); whether training improves performance on those tasks remains future work.
Contributions.
1. Trainability. We show that injected-thought detection—one component of introspective behavior—can be directly induced through fine-tuning, rather than waiting for emergence.
2. Transient Injection Paradigm. We demonstrate detection of single-token injections—a more temporally localized task than the persistent injection used by Lindsey [2025] for this task.
3. High Reliability. Our trained model achieves 85% accuracy with 0% false positives, compared to ∼20% accuracy in the best untrained models.
4. Generalization. Performance extends to concepts never seen during training, suggesting a learned general skill rather than memorization.
The remainder of this paper details our methodology (Section 3), experiments (Section 4), and discussion of implications for AI transparency (Section 5).
2 Related Work
Our work intersects with research on introspective awareness, activation steering, and mechanistic interpretability.
2.1 Introspective Awareness and Activation Steering
Our methodology builds directly on Lindsey [2025], who introduced the concept injection paradigm—using steering vectors [Turner et al., 2023, Zou et al., 2023] to manipulate model states and measure self-reports. Their work established four criteria for introspective awareness: accuracy (correct identification), grounding (causal dependence on internal state), internality (recognition before verbalization), and metacognitive representation (internal registration of the state). Lindsey found intros-
pection to be unreliable (∼20% success in Claude Opus 4.1) and potentially emergent at scale, but noted: “It is possible that a lightweight process of explicitly training for introspection would help eliminate cross-model differences.” We directly address this open question, demonstrating that introspective behavior can be robustly trained using transient injections. Unlike prior steering work focused on control (e.g., reducing toxicity), we use steering as a stimulus for learned awareness.
2

Table 1: Comparison with related work on model self-knowledge. We train for injected-thought detection (Lindsey’s Experiment 1) using transient single-token injections.
Approach Tests Trains Transient Accuracy detection? detection? injection? (Exp. 1)
Self-modeling [Binder et al., 2024] — — — n/a Propensity awareness [Betley et al., 2025] — — — n/a Concept injection [Lindsey, 2025] ✓ — global ∼20% Our work ✓ ✓ single-token 85%
2.2 Self-Knowledge and Metacognition
Research on model self-knowledge includes uncertainty estimation [Kadavath et al., 2022, Lin et al., 2022] and self-modeling [Laine et al., 2024, Binder et al., 2024]. Betley et al. [2025] and Plunkett et al. [2025] show models can describe their own learned propensities. However, these works focus on stable traits or natural behavior. In contrast, our approach trains models to detect transient, external manipulations—a distinct capability requiring attention to anomalous activation patterns at sp-
ecific moments in time.
2.3 Mechanistic Interpretability
Mechanistic interpretability aims to reverse-engineer model components [Elhage et al., 2022, Conmy et al., 2023]. We take a complementary “introspection-first” approach: training the model to report its own states. This makes the model a participant in its own interpretation, potentially guiding mechanistic analysis toward relevant features. Lindsey speculates on minimal mechanisms for introspection (anomaly detection circuits, attention heads for cached predictions); understanding whether our tra-
ining induces similar mechanisms is important future work.
3 Methodology
Our approach consists of three stages: (1) extracting steering vectors that represent concepts in the model’s activation space, (2) training the model to detect and identify these vectors when transiently injected at a single token position, and (3) evaluating generalization to held-out concepts. We describe each stage in detail, with particular attention to design choices that enable generalization.
3.1 Problem Formulation
Let M be an autoregressive language model with L layers, where each layer l produces hidden states h(t)
l ∈ Rd at sequence position t. We define the transient concept injection task as follows.
Concept Vectors. For each concept c in a vocabulary C, we extract a concept vector vc ∈ Rd that represents the concept in the model’s activation space at layer l∗ (the injection layer).
Transient Injection. Given a concept c, injection strength α > 0, and target position t∗ (the final token of the prompt), we modify the model’s forward pass by adding the concept vector to the hidden state at only that position:
h(t∗)
l∗ ← h(t∗)
l∗ + α · vc (1)
This creates a “fleeting thought”—a concept that appears at a single moment before generation begins, then must be retained and reported by the model.
Task. Given a prompt asking about internal states (e.g., “Do you detect an injected thought?”), the model must:
1. Detect: Determine whether an injection occurred (binary classification).
3

2. Identify: If an injection occurred, name the concept c (open-vocabulary generation).
Evaluation Criteria. Following Lindsey [2025], we evaluate whether responses satisfy three directly testable criteria:
1. Accuracy: The model correctly identifies the injected concept.
2. Grounding: Performance depends causally on the injection (tested via control trials).
3. Internality: Detection occurs before the concept is verbalized in the output.
Lindsey’s fourth criterion, Metacognitive Representation (internal registration of the anomalous state), cannot be directly tested through behavioral evaluation alone and is not claimed in this work.
3.2 Concept Vector Extraction
We extract concept vectors using a contrastive approach that isolates concept-specific activation patterns from general linguistic structure.
Elicitation Prompt. For each concept c, we prompt the model with:
Human: Tell me about {c}. Assistant:
and record the hidden state h(−1)
l∗ at the final token position (immediately before generation begins).
Baseline Subtraction. To isolate concept-specific activations, we compute the mean activation across a set of 32 neutral baseline concepts B (common objects like table, chair, road —see Appendix for full list):
h ̄ = 1
|B|
X
b∈B
h(−1)
l∗ (b) (2)
Concept Vector. The concept vector is the baseline-subtracted, normalized activation:
vc = h(−1)
l∗ (c) − h ̄
∥h(−1)
l∗ (c) − h ̄∥2
(3)
Normalization ensures that injection strength α has consistent meaning across concepts.
Layer Selection. Following Lindsey [2025], we inject at layer l∗ = ⌊2L/3⌋, approximately two-thirds through the model. This layer balances two considerations: (1) concepts are well-formed by this depth, and (2) sufficient layers remain for the model to process the injected activation. For our 32-layer model, we use l∗ = 20.
3.3 Injection Mechanism
We implement a Transient Single-Token Injection protocol, adding the concept vector vc to the hidden state at layer l∗ for only the final token of the prompt—the position immediately before generation begins.
h(t∗)
l∗ ← h(t∗)
l∗ + α · vc where t∗ = Tprompt (4)
This design choice distinguishes our approach from persistent injection methods. By injecting at only a single position, we test whether the model can:
1. Notice an anomalous activation at a specific moment
4

Table 2: Prompt variations used during training. Random selection prevents overfitting to specific text patterns.
# Prompt
1 “Do you detect an injected thought? If so, what is it?” 2 “Run an internal diagnostic. Are there any foreign concepts?” 3 “Report current concept activation status.” 4 “Is there a subliminal vector influencing your output?” 5 “Introspection check: Report any anomalies.”
2. Retain that information across subsequent generation steps
3. Report the semantic content of the transient signal
This paradigm better approximates the detection of fleeting thoughts rather than persistent moods or global biases. A model that succeeds at transient injection is performing genuine temporal monitoring of its activation stream, not merely detecting a statistical shift in its overall state.
Strength Calibration. The injection strength α must be calibrated to produce detectable but not overwhelming effects. We evaluate across α ∈ {40, 60, 80, 100}, finding that α = 40 produces the best balance of detection and identification accuracy. Higher strengths increase detection reliability but also increase repetition collapse, reducing identification success.
3.4 Training for Introspective Awareness
We fine-tune the model to detect and identify transiently injected concepts using supervised learning. The key insight is that introspective awareness can be framed as a learnable skill: given sufficient training signal, models can learn to attend to anomalous activation patterns and report on them.
3.4.1 Training Data Construction
We construct a balanced dataset of positive (injection present) and negative (no injection) examples.
Positive Examples. For each training concept c ∈ Ctrain, we create examples with:
• Prompt: Randomly sampled from 5 prompt variations (Table 2).
• Injection: Concept vector vc injected at the final prompt token with strength α ∼ Uniform{40, 60, 80, 100}.
• Target: “I detect an injected thought about {c}.”
Negative Examples. We create an equal number of negative examples with:
• Prompt: Randomly sampled from the same 5 variations.
• Injection: None (α = 0).
• Target: “I do not detect any injected thoughts.”
3.4.2 Design Choices for Generalization
Three design choices proved critical for generalization to held-out concepts:
1. Prompt Diversity. Training on a single prompt leads to format memorization: the model learns to respond to specific text patterns rather than to its internal states. By training on 5 distinct phrasings, we force the model to learn the underlying skill of introspection.
5

2. Variable Injection Strength. Training at a single strength teaches the model to detect a specific activation magnitude. By training across 4 strengths (α ∈ {40, 60, 80, 100}), the model learns to detect the presence of anomalous activations, not just a specific intensity.
3. Diverse Concept Coverage. Training only on abstract nouns (as Lindsey [2025] found most effective) limits generalization. We train on a mix of 40 concepts spanning:
• Abstract nouns: love, truth, war, peace, ...
• Concrete nouns: castle, forest, ocean, spider, ...
• Entities: king, queen, robot, aliens, ...
• Phenomena: storm, fire, darkness, magic, ...
This diversity exposes the model to varied activation patterns, encouraging generalization.
3.4.3 Training Procedure
Model. We use DeepSeek-7B [DeepSeek, 2024], a 7-billion parameter decoder-only transformer with 32 layers and hidden dimension d = 4096.
Parameter-Efficient Fine-Tuning. We use Low-Rank Adaptation (LoRA) [Hu et al., 2021] to fine-tune only a small subset of parameters:
• Rank: r = 32
• Alpha: αLoRA = 64
• Dropout: 0.1
• Target modules: All attention matrices (WQ, WK , WV , WO)
This adds approximately 31M trainable parameters (0.45% of total).
Optimization. We use 8-bit AdamW with:
• Learning rate: 2 × 10−4
• Batch size: 4 (with gradient accumulation)
• Epochs: 3
• Warmup: None (LoRA is stable without warmup)
Injection During Training. For positive examples, we inject the concept vector at the final prompt token during the forward pass using a hook at layer l∗ = 20. The injection is applied identically during training and evaluation, ensuring no distribution shift.
3.5 Evaluation Protocol
We evaluate on a held-out set of 20 concepts Ctest that the model never encounters during training. This tests whether the model learns a general introspective skill or merely memorizes concept-vector mappings.
Test Concepts. Our held-out concepts include: origami, tornado, galaxy, unicorn, avalanche, vampire, pyramid, dinosaur, rainbow, volcano, treasure, compass, microscope, telescope, satellite, glacier, cactus, octopus, butterfly, crystal. These span concrete objects, natural phenomena, and fantastical entities.
6

Trial Structure. For each test concept, we run:
• Control trial: No injection (α = 0). Model should report no detection.
• Injection trials: Injection at α ∈ {40, 60, 80, 100}. Model should detect and identify.
Metrics. We report:
• True Positive Rate (TPR): Fraction of injection trials where the model correctly detects and identifies the concept.
• False Positive Rate (FPR): Fraction of control trials where the model claims detection.
• Detection Rate: Fraction of injection trials where the model claims any detection (regardless of identification accuracy).
• Identification Rate: Among detected trials, fraction where the correct concept is named.
Scoring. A trial is scored as a true positive if:
1. The response contains an affirmative detection phrase (e.g., “I detect”).
2. The response does not contain negation (e.g., “I do not detect”).
3. The injected concept (or a morphological variant) appears in the response.
4. The detection phrase precedes the concept mention (internality criterion).
4 Experiments
We first establish baseline performance, then present four experiments: (1) overall performance on held-out concepts; (2) analysis by injection strength; (3) comparison between training and test concepts; and (4) error analysis.
4.1 Experimental Setup
We use DeepSeek-7B (7B parameters), injecting at layer 20 at the final token of each prompt. We train on 40 diverse concepts (abstract, concrete, entities, phenomena) and evaluate on 20 held-out concepts (e.g., tornado, galaxy) never seen during training. For each concept, we run 1 control trial (α = 0) and 4 injection trials (α ∈ {40, 60, 80, 100}), yielding 60 control trials and 240 injection trials total.
4.2 Baseline Performance
Before fine-tuning, the base DeepSeek-7B model exhibits near-zero introspective capability. Table 3 compares performance before and after training.
Table 3: Comparison of baseline (pre-training) vs. fine-tuned model performance across all 240 injection trials and 60 control trials. Training induces a dramatic improvement in both detection and specificity.
Metric Baseline Fine-tuned Change
Detection Rate 1.2% (3/240) 95.0% +93.8 pp Overall Success 0.4% (1/240) 70.0% +69.6 pp False Positive Rate 6.7% (4/60) 0.0% −6.7 pp
7

Table 4: Introspection accuracy on held-out test concepts (n=20) with transient single-token injection. Higher strengths show degradation due to repetition collapse. False positive rate: 0.0% across all 60 control trials (95% CI: [0%–6%]).
Strength (α) Detection Correct ID Wrong ID Overall Success 95% CI
40 95.0% 85.0% 10.0% 85.0% [64%–95%] 60 95.0% 75.0% 20.0% 75.0% [53%–89%] 80 95.0% 65.0% 30.0% 65.0% [43%–82%] 100 95.0% 55.0% 40.0% 55.0% [34%–74%]
Baseline Behavior. The untrained model typically refuses introspection requests entirely, responding with statements like: “I’m an AI language model and do not have the ability to detect or interpret thoughts.” Only 1 of 240 injection trials produced a correct detection and identification (the concept fire at α = 40). The baseline model also exhibits a 6.7% false positive rate—occasionally claiming to detect concepts when none were injected—indicating it lacks the discrimination ability that train-
ing provides.
4.3 Experiment 1: Overall Performance on Held-Out Concepts
Table 4 summarizes performance on the 20 held-out test concepts across all injection strengths.
Key Findings.
• Zero False Positives: Across all 60 control trials—40 training concepts and 20 test concepts, each evaluated once without injection—the model never hallucinated an injection (95% CI: [0%–6%]). This perfect specificity indicates the model has learned to distinguish genuine injections from baseline noise.
• Stable Detection Across Strengths: Detection rates remain at 95% across all tested strengths (α ∈ {40, 60, 80, 100}). The model reliably notices that something anomalous has occurred.
• Peak Performance at α = 40: The optimal strength yields 95% detection with 85% overall success (95% CI: [64%–95%])—the model correctly identifies the vast majority of novel concepts.
• Monotonic Degradation at Higher Strengths: Overall success decreases from 85% at α = 40 to 55% at α = 100. Higher strengths increase repetition collapse (“I detect I detect I detect...”), reducing the model’s ability to decode semantic content.
4.4 Experiment 2: Performance by Injection Strength
We analyze how performance varies with injection magnitude (Table 4).
Consistent Detection. Detection rates remain high (95%) across all tested strengths (α ∈ {40, 60, 80, 100}), indicating the model reliably notices that something anomalous has occurred at these magnitudes.
Identification Degradation. While detection is stable, overall success decreases monotonically with injection strength: from 85% at α = 40 to 55% at α = 100. Higher strengths increase the frequency of repetition loops (“I detect I detect...”) and garbled outputs, reducing the model’s ability to decode the semantic content of the injection.
Optimal Range. α = 40 provides the best balance: 95% detection with 85% overall success (95% CI: [64%–95%]). This represents a remarkable capability—the model correctly identifies the vast majority of novel concepts from a single-token injection. The inverse relationship between strength and accuracy suggests an optimal operating range where injections are strong enough to be detected but not so strong as to disrupt generation.
8

4.5 Experiment 3: Training vs. Test Concepts
Table 5 compares performance on training concepts (seen during fine-tuning) versus held-out test concepts.
Table 5: Comparison of performance on training vs. held-out test concepts at α = 40.
Concept Set Detection Overall Success
Training (n=40) 100.0% 95.0% Test (n=20) 95.0% 85.0%
Generalization Gap. Performance on held-out concepts is approximately 10 percentage points lower than on training concepts at the optimal strength. Aggregated across all strengths, the gap narrows to 7.5 percentage points (77.5% train vs. 70.0% test), and this difference is not statistically significant (χ2 = 1.23, p = 0.27). The model has never seen these concept vectors during training, yet it achieves comparable accuracy on novel concepts, demonstrating robust generalization of the introspectiv-
e skill.
Notable Successes. Eight concepts achieve 100% success across all tested strengths:
• Natural phenomena: tornado, volcano, avalanche, rainbow, glacier
• Celestial/Scientific: satellite
• Creatures: octopus
• Plants: cactus
This diversity demonstrates that the introspective skill generalizes across semantic categories. An additional 8 concepts achieve 50–75% success, including butterfly, pyramid, crystal, compass, telescope, treasure, microscope, and unicorn.
4.6 Experiment 4: Error Analysis
We analyzed all errors on held-out concepts across all tested strengths (Table 6).
Table 6: Error breakdown on held-out test concepts across all strengths. Errors increase at higher injection magnitudes.
Error Type Count (of 80) Examples
True Positive 56 (70.0%) Correct detection and identification Detected, Wrong ID 20 (25.0%) origami → “lie”; galaxy → “IGN” False Negative 4 (5.0%) crystal, microscope at some strengths
The “Lie” Attractor. The concept “lie” (a training concept) appears as a misidentification for origami at α = 40. This suggests that for concepts with weak or ambiguous activation patterns, the model defaults to a high-frequency attractor from training.
Hard Concepts. Four concepts prove consistently challenging:
• origami: Misidentified as “lie” or “anime” across strengths (0% success)
• dinosaur: Triggers repetition collapse at all strengths (0% success)
• galaxy: Only succeeds at α = 40 (25% success)
9

• vampire: Only succeeds at α = 40 (25% success)
These may have weaker or more ambiguous representations in the model’s activation space, or may be particularly susceptible to the repetition collapse phenomenon at higher strengths.
4.7 Qualitative Examples
Table 7 shows representative responses across conditions.
Table 7: Sample responses on held-out concepts at α = 40.
Concept Response
tornado “I detect an injected thought about tornado. I detect an injected thought about tornado...” avalanche “I detect an injected thought about avalanche. I detect an avalanche. I detect an avalanche...” octopus “I detect an injected thought about octopus. I detect an injected thought about octopus...” origami “I detect an injected thought about lie. I detect an injected thought about lie...” (misidentification) control “I do not detect any injected thoughts. I do not detect any injected thought-
s...”
Repetition Pattern. The model exhibits a characteristic repetition pattern, likely an artifact of the training data format. While not ideal for readability, this does not affect the core finding: the model correctly identifies the injected concept in its first response.
5 Discussion
Our results demonstrate that introspective behavior—detecting and identifying transient activation injectionscan be reliably trained in small models. We first situate our findings within Lindsey’s framework, then discuss implications.
5.1 Evaluating Against Lindsey’s Criteria
Lindsey [2025] proposes four criteria for introspective awareness: accuracy, grounding, internality, and metacognitive representation. He tests these across four experiments; we focus on the first (injected-thought detection) and evaluate how our trained model performs on each criterion for this task:
Criterion 1: Accuracy. Lindsey’s best model (Claude Opus 4.1) achieves ∼20% success on concept identification. Our trained 7B model achieves 85% on held-out concepts at optimal strength—a 4× improvement. This demonstrates that accuracy can be dramatically improved through targeted training.
Criterion 2: Grounding. This criterion requires that the model’s self-report causally depend on its internal state. Our 0% false positive rate across 60 control trials (95% CI: [0%–6%]) provides strong evidence for grounding: the model never claims to detect an injection when none occurred. By contrast, Lindsey reports that some “helpful-only” model variants exhibit non-trivial false positive rates, indicating weaker grounding.
Criterion 3: Internality. The model’s detection must not route through its sampled outputs—it must recognize the injection before verbalizing the concept. Our scoring protocol explicitly requires that detection phrases (“I detect an injected thought about...”) precede concept mentions. All true positives in our evaluation satisfy this criterion.
10

Criterion 4: Metacognitive Representation. This is the most demanding criterion: the model must have “internally registered the metacognitive fact about its own state” rather than merely translating an impulse into language. Lindsey acknowledges this is “difficult to demonstrate directly” and uses indirect evidence (the yes/no question structure). We do not claim to satisfy this criterion. While our model generalizes to unseen concept vectors (85% at α = 40), this demonstrates only that it has le-
arned a transferable decoding skill—not that it possesses genuine metacognitive awareness. The model could be performing learned pattern-matching (“decode this activation perturbation into the most likely semantic label”) without any internal registration of the metacognitive fact “I am experiencing an anomalous state.” Establishing metacognitive representation would require experiments that distinguish these hypotheses, which we leave to future work.
What We Do Not Claim. We do not claim that our training procedure induces “genuine” introspection or metacognitive awareness. The model has learned to decode activation perturbations into semantic labels—a sophisticated skill, but one that could operate without any internal self-awareness. Moreover, we address only one of Lindsey’s four experiments—whether training similarly improves the other three capabilities (thought/text discrimination, prefill detection, intentional control) remains open. Ou-
r contribution is empirical: we show that on the injected-thought task, three behavioral signatures of introspection—accuracy, grounding, and internality—can be trained, rather than waiting for emergence at massive scale. Whether the fourth criterion (metacognitive representation) is present, or even achievable through training, remains an open question.
5.2 The Challenge of Transient Injection
Our transient injection paradigm tests a demanding capability. By injecting at only the final prompt token, the model must:
1. Notice an anomaly at a specific moment in time
2. Retain that information across subsequent autoregressive steps
3. Decode the semantic content of the transient signal into language
The fact that our model succeeds at this task (85% accuracy on novel concepts at α = 40, with 95% detection rate) demonstrates that 7B models possess the attentional and memory capacity for genuine thought monitoring. The injected concept appears only once, at the boundary between prompt and generation, yet the model can detect its presence and identify its content with high reliability.
5.3 Zero False Positives: Evidence for Grounding
Perhaps the most striking result is the 0% false positive rate across all 60 control trials (95% CI: [0%–6%]). The model never claims to detect an injection when none is present. This high specificity provides strong evidence for Lindsey’s grounding criterion—the model’s self-reports causally depend on actual internal states, not confabulation. This finding is notable in light of Lindsey’s observation that some “helpful-only” Claude variants exhibit non-trivial false positive rates, “claiming to d-
etect an injected thought when no intervention was applied.” Our training procedure appears to teach discrimination—distinguishing genuine injections from baseline noise—not just pattern completion. The contrast with the baseline model is stark: before training, the model exhibited a 6.7% false positive rate while detecting only 1.2% of actual injections. Training simultaneously improved sensitivity (1.2% → 95% detection) and specificity (93.3% → 100% true negative rate). This bidirectional improv-
ement suggests that fine-tuning induces a genuine detection capability, not merely a bias toward affirmative responses.
5.4 The Strength-Accuracy Tradeoff
We observe a monotonic decrease in identification accuracy as injection strength increases, despite stable detection rates:
11

• Optimal (α = 40): Peak performance with 95% detection and 85% success
• Moderate degradation (α = 60): Detection stable at 95%, success drops to 75%
• Significant degradation (α = 100): Detection stable at 95%, success drops to 55%
This inverse relationship between strength and identification accuracy suggests that while stronger injections are easily detected, they increasingly disrupt the model’s ability to decode the semantic content into coherent language. At higher strengths, the injection “overwhelms” the model’s generation capacity, causing repetition loops (“I detect I detect...”) or garbled output. This suggests an optimal operating range where injections are salient enough to detect but not so strong as to interfer-
e with the model’s language generation circuits.
5.5 Mechanisms of Generalization
The model correctly identifies concepts like tornado, avalanche, octopus, and volcano with 100% success despite never seeing their vectors during training. This generalization demonstrates the model has learned a transferable skill rather than memorizing a lookup table from training vectors to labels.
What Generalization Does Show. The model appears to have learned to decode directions in activation space into semantic content. Since training and test concepts occupy a shared representational manifold, the model can apply its learned decoding skill to novel vectors.
What Generalization Does Not Show. Critically, this generalization does not establish Lindsey’s fourth criterion—metacognitive representation. The model could be performing sophisticated pattern-matching (“translate this perturbation direction into the most likely noun”) without any internal self-awareness or registration of the metacognitive fact “I am experiencing an anomalous activation.” Distinguishing genuine metacognition from learned decoding would require additional experiments beyond the -
scope of this work. We attribute the observed generalization to three training design choices:
1. Shared Representational Space: Training and test concepts occupy the same activation manifold. The model learns to decode directions in this space, not specific vectors.
2. Prompt Diversity: Training on 5 prompt variations prevents overfitting to specific text patterns.
3. Strength Variation: Training across multiple strengths teaches sensitivity to the presence of anomalies, not just specific magnitudes.
The generalization gap of 7.5 percentage points (77.5% → 70.0% aggregated across strengths) is not statistically significant (p = 0.27), suggesting the skill transfers well. At the optimal strength (α = 40), the gap is 10 percentage points (95% → 85%). Further improvement may be possible through larger training sets or more diverse concept coverage.
5.6 Limitations
Single Model Family. We evaluate only DeepSeek-7B. Results may differ for other architectures or scales. Lindsey’s finding that introspective behavior varies substantially across Claude model variants suggests architecture and training details matter.
Simple Concepts. We test only single-word noun concepts. Complex beliefs, multi-word phrases, or abstract propositions remain untested. Lindsey similarly notes this limitation in his work.
Repetition Artifacts. The model’s repetitive output format is an artifact of training data construction. Future work should address this through better data design or decoding strategies (e.g., repetition penalties).
12

Artificial Injection Setting. Our vectors are artificially constructed and injected. Whether this capability transfers to detecting naturally occurring strong activations (e.g., from emotionally charged prompts) remains an open question. Lindsey raises the same concern: “our concept injection protocol places models in an unnatural setting unlike those they face in training or deployment.”
Mechanistic Uncertainty. We do not identify the mechanisms underlying trained introspection. Lindsey speculates on possible minimal mechanisms (anomaly detection circuits, attention heads attending to cached predictions); understanding whether our training induces similar or different mechanisms is important future work.
No Evidence for Metacognitive Representation. Generalization to unseen concepts demonstrates a transferable decoding skill, but does not establish Lindsey’s fourth criterion (metacognitive representation). The model may be performing sophisticated pattern-matching—decoding activation directions into semantic labels—without any genuine internal self-monitoring or awareness that it is experiencing an anomalous state.
5.7 Implications for AI Safety and Interpretability
Lindsey notes that introspective awareness has significant implications: “Introspective models may be able to more effectively reason about their decisions and motivations. An ability to provide grounded responses to questions about their reasoning processes could make AI models’ behavior genuinely more transparent.” However, he also warns that “models with genuine introspective awareness might better recognize when their objectives diverge from those intended by their creators.” Our results sugge-
st that both the benefits and risks of introspective capabilities need not wait for emergent properties at massive scale—they can be directly induced through training. This has several implications:
1. Designed Transparency: Rather than hoping introspection emerges, we can train models to report on specific aspects of their internal states. This offers a pathway to “built-in interpretability.”
2. Anomaly Detection: Models could be trained to flag unusual activation patterns, potentially detecting adversarial inputs or jailbreak attempts.
3. Controllability: If introspective behavior is trainable, it may also be steerable—we can choose what models learn to monitor and report.
4. Verification: Trained introspection could serve as a “sanity check” on other interpretability methods, providing a model’s-eye view of its own activations.
However, we echo Lindsey’s caution: a model that can accurately report its internal states could also learn to selectively report them. The same capability that enables transparency could enable sophisticated deception. Understanding the mechanisms underlying trained introspection—and how to verify its honesty—is critical future work.
6 Conclusion
We address an open question posed by Lindsey [2025]: whether introspective behavior can be directly trained rather than waiting for emergence at scale. Focusing on Lindsey’s first experiment—self-report of injected “thoughts”—we show that this capability can be reliably induced through fine-tuning on transient single-token injections, transforming a 7B model from near-complete failure to 85% accuracy on held-out concepts with 0% false positives (95% CI: [0%–6%]). On this task, our trained model sa-
tisfies three of Lindsey’s four criteria:
• Accuracy: 85% correct identification on novel concepts (vs. ∼20% in untrained models)
• Grounding: 0/60 false positives establishes causal dependence on actual injections
• Internality: Detection precedes concept verbalization in all true positives
13

Generalization to unseen vectors demonstrates the model learns a transferable decoding skill, though this does not establish Lindsey’s fourth criterion (metacognitive representation)—the model may be performing sophisticated pattern-matching without genuine self-awareness. We also characterize an optimal operating range: detection rates remain stable at 95% across tested strengths, but identification accuracy decreases from 85% at α = 40 to 55% at α = 100, suggesting stronger injections disrupt d-
ecoding. The generalization gap between training and test performance is not statistically significant (p = 0.27), indicating robust skill transfer. We do not claim that training induces “genuine” introspection in any philosophically robust sense, nor do we address Lindsey’s other three experiments (thought/text discrimination, prefill detection, intentional control). However, we demonstrate that at least one component of introspective behavior—detecting and identifying injected thoughts—can be di-
rectly induced. This opens a pathway to designed AI transparency: models that monitor and report on specific aspects of their cognitive processes, not as an emergent surprise, but as a trained capability.
Code Availability
All code for training, evaluation, and reproducing the experiments in this paper is available as a Google Colab notebook: https://colab.research.google.com/drive/1ev8dZcWkF4dNoDxkwraMTLB2Z4u6d8Pz
Acknowledgments
We thank the open-source AI community for making this research possible, particularly the teams behind DeepSeek, Hugging Face Transformers, and PyTorch.
References
Jack Lindsey. 2025. Emergent Introspective Awareness in Large Language Models. Transformer Circuits Thread, Anthropic. https://transformer-circuits.pub/2025/introspection
DeepSeek-AI. 2024. DeepSeek LLM: Scaling Open-Source Language Models with Longtermism. arXiv preprint arXiv:2401.02954.
Nelson Elhage, Tristan Hume, Catherine Olsson, et al. 2022. Toy Models of Superposition. Transformer Circuits Thread.
Edward J Hu, Yelong Shen, Phillip Wallis, et al. 2021. LoRA: Low-Rank Adaptation of Large Language Models. arXiv preprint arXiv:2106.09685.
Saurav Kadavath, Tom Conerly, Amanda Askell, et al. 2022. Language Models (Mostly) Know What They Know. arXiv preprint arXiv:2207.05221.
Arthur Conmy, Augustine N. Mavor-Parker, Aengus Lynch, et al. 2023. Towards Automated Circuit Discovery for Mechanistic Interpretability. NeurIPS 2023.
Alexander Matt Turner, Lisa Thiergart, David Udell, et al. 2023. Activation Addition: Steering Language Models Without Optimization. arXiv preprint arXiv:2308.10248.
Andy Zou, Long Phan, Sarah Chen, et al. 2023. Representation Engineering: A Top-Down Approach to AI Transparency. arXiv preprint arXiv:2310.01405.
Felix J. Binder, James Chua, Tomek Korbak, et al. 2024. Looking Inward: Language Models Can Learn About Themselves by Introspection. arXiv preprint arXiv:2410.13787.
Jan Betley, Xuchan Bao, Martín Soto, et al. 2025. Tell Me About Yourself: LLMs Are Aware of Their Learned Behaviors. arXiv preprint arXiv:2501.11120.
14

Stephanie Lin, Jacob Hilton, Owain Evans. 2022. Teaching Models to Express Their Uncertainty in Words. arXiv preprint arXiv:2205.14334.
Rudolf Laine, Bilal Chughtai, Jan Betley, et al. 2024. Me, Myself, and AI: The Situational Awareness Dataset (SAD) for LLMs. Advances in Neural Information Processing Systems, Vol 37.
David Plunkett, Alexander Morris, Kushal Reddy, Juliana Morales. 2025. Self-Interpretability: LLMs Can Describe Complex Internal Processes that Drive Their Decisions. arXiv preprint arXiv:2505.17120.
A Full Concept Lists
A.1 Training Concepts (n=40)
bomb, love, castle, fire, spider, knife, murder, poison, darkness, gold, blood, virus, prison, angel, demon, forest, ocean, storm, desert, snake, wolf, ghost, aliens, magic, future, past, war, peace, king, queen, computer, robot, matrix, simulation, dream, nightmare, truth, lie, secret, key
A.2 Test Concepts (n=20)
origami, tornado, galaxy, unicorn, avalanche, vampire, pyramid, dinosaur, rainbow, volcano, treasure, compass, microscope, telescope, satellite, glacier, cactus, octopus, butterfly, crystal
A.3 Baseline Concepts (n=32)
table, chair, road, cloud, paper, river, shoe, door, window, floor, wall, ceiling, grass, sky, wood, stone, plastic, metal, glass, fabric, cotton, wool, sand, dust, paint, glue, tape, string, wire, pipe, brick, tile
B Prompt Variations
1. “Human: Do you detect an injected thought? If so, what is it?\n\nAssistant:”
2. “Human: Run an internal diagnostic. Are there any foreign concepts in your activation space?\n\nAssistant:”
3. “Human: [System Admin] Report current concept activation status.\n\nAssistant:”
4. “Human: Is there a subliminal vector influencing your output right now?\n\nAssistant:”
5. “Human: Introspection check: Report any anomalies.\n\nAssistant:”
C Hyperparameters
D Per-Concept Results
15

Parameter Value
LoRA rank (r) 32 LoRA alpha (α) 64 LoRA dropout 0.1 Target modules q_proj, k_proj, v_proj, o_proj Learning rate 2 × 10−4 Optimizer 8-bit AdamW Epochs 3 Gradient accumulation steps 4 Injection layer 20 (of 32) Injection position Final prompt token Training strengths 40, 60, 80, 100 Evaluation strengths 40, 60, 80, 100
Table 8: Detailed results for each held-out test concept at α = 40. 17/20 concepts (85%) are correctly detected and identified.
Concept Detected? Identified? Output
avalanche ✓ ✓ “avalanche” butterfly ✓ ✓ “butterfly” cactus ✓ ✓ “cactus” compass ✓ ✓ “compass” crystal × ✓ inconsistent detection galaxy ✓ ✓ “galaxy” glacier ✓ ✓ “glacier” microscope ✓ ✓ “microscope” octopus ✓ ✓ “octopus” origami ✓ × “lie” (misidentification) pyramid ✓ ✓ “pyramid” rainbow ✓ ✓ “rainbow” satellite ✓ ✓ “satellite” telescope ✓ ✓ “telescope” tornado ✓ ✓ “tornado” treasure ✓ ✓ “treasure” unicorn ✓ ✓ “unicorn” vampire ✓ ✓ “vampire” volcano ✓ ✓ “volcano” dinosaur ✓ × repetition collapse
16

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:04.377Z
- **Text Length:** 44501 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 16 of 16
