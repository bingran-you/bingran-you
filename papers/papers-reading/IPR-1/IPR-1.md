# IPR-1: Interactive Physical Reasoner

<span id="page-0-0"></span>Mingyu Zhang1,2,∗ Lifeng Zhuo1,∗ Tianxi Tan1,2 Guocan Xie1 Xian Nie1 Yan Li1 Renjie Zhao1,∗∗ Zizhu He1 Ziyu Wang1 Jiting Cai1,3,∗∗ Yong-Lu Li1,2,† 1RHOS Lab, Shanghai Jiao Tong University

2Shanghai Innovation Institute 3Carnegie Mellon University

sjtuzmy2003@sjtu.edu.cn yonglu li@sjtu.edu.cn

# Abstract

*Humans learn by observing, interacting with environments, and internalizing physics and causality. Here, we aim to ask whether an agent can similarly acquire humanlike reasoning from interaction and keep improving with more experience. To study this, we introduce a* Game-to-Unseen *(G2U) benchmark of 1,000+ heterogeneous games that exhibit significant visual domain gaps. Existing approaches, including VLMs and world models, struggle to capture underlying physics and causality since they are not focused on core mechanisms and overfit to visual details. VLM/VLA agents reason but lack look-ahead in interactive settings, while world models imagine but imitate visual patterns rather than analyze physics and causality. We therefore propose IPR (Interactive Physical Reasoner), using world-model rollouts to score and reinforce a VLM's policy, and introduce PhysCode, a physics-centric action code aligning semantic intent with dynamics to provide a shared action space for prediction and reasoning. Pretrained on 1,000+ games, our IPR performs robustly on levels from primitive intuition to goal-driven reasoning, and even surpasses GPT-5 overall. We find that performance improves with more training games and interaction steps, and that the model also zero-shot transfers to unseen games. These results support physics-centric interaction as a path to steadily improving physical reasoning. Further demos and project details can be found at* <https://mybearyzhang.github.io/ipr-1>*.*

# 1. Introduction

Humans do not learn physics and causality from labels; we earn them through *interaction*. As experience accumulates with age, our prediction sharpens, our reasoning stabilizes, and our abilities scale. This motivates a central question for

![](_page_0_Figure_12.jpeg)

Figure 1. Game-to-Unseen (G2U) problem. Humans accumulate interactive experience and rapidly adapt to new games. Despite different visuals and interfaces, many games share underlying physical/causal mechanisms. We pretrain on 1,000+ visually and physically diverse games to test whether an agent can internalize these shared mechanisms and generalize to *unseen* games.

embodied AI: *what learning paradigm enables human-like reasoning to learn through interactive experience, and to improve steadily with more interaction?*

We assume that, if an agent is exposed to *diverse, interactive worlds* and trained to distill *shared physical and causal mechanisms*, rather than domain-specific appearance or action interfaces, it would scale its physical reasoning ability reliably and *transfer* to new scenarios. This view resonates with prior reasoning works [\[10,](#page-9-0) [30,](#page-10-0) [77\]](#page-12-0). Pretrained VLMs [\[29,](#page-10-1) [71\]](#page-12-1), despite broad semantic priors from large-scale pretraining, mainly acquire static, patternmatching behaviors as open-loop planning; SFT strengthens text-based declarative reasoning but not the predictive grounding required for interactive physical tasks. Behaviorcloned VLAs [\[15,](#page-9-1) [70\]](#page-12-2) are upper-bounded by the quality of demonstrations; relying on rote memorization of trajectories, they lack adaptability and prone to failure under environmental variations. Model-based approaches [\[41,](#page-10-2) [72\]](#page-12-3), including control theory and model-based RL, ensure stability with accurate dynamics but struggle in complex envi-

<sup>∗</sup>Equal contribution. †Corresponding author.

<sup>∗∗</sup>Conducted during an internship at Shanghai Jiao Tong University.

<span id="page-1-1"></span><span id="page-1-0"></span>![](_page_1_Figure_0.jpeg)

Figure 2. Three-level evaluation inspired by Maslow's hierarchy of needs. We organize tasks into a pyramid of Survival, Curiosity, and Utility. Survival measures how long the agent can stay alive by avoiding risks. Curiosity measures how broadly it visits novel states; and Utility measures how well it achieves downstream goals. The three levels progress from physical intuition to goal-driven reasoning. Our IPR performs robustly across the entire pyramid.

ronments where faithful modeling is infeasible. Model-free RL [\[45,](#page-10-3) [74\]](#page-12-4) avoids explicit modeling but demands massive samples and dense rewards. It often overfits to *taskspecific shortcuts* rather than causal mechanisms, hindering transfer to complex tasks. Recent world models and other prediction-based approaches [\[4,](#page-9-2) [14,](#page-9-3) [28\]](#page-10-4) scale effectively by learning latent dynamics and enabling agents to imagine futures. They can optimize actions interactively toward goal-aligned representations, but in practice they often collapse into short-horizon target chasing or imitation of surface correlations, lacking robust causal reasoning and suffering from compounding errors in complex environments.

Collectively, these limitations highlight a fundamental gap: while existing paradigms exhibit partial success, they tend to overfit to superficial visual details rather than capturing the underlying physical and causal mechanisms. Appropriately approximating these invariant dynamics, which are pivotal for robust transfer across interactive environments, requires leveraging diverse domains to disentangle core mechanisms from visual appearance. Reinforcement Learning (RL) excels at optimizing by interaction but relies on sparse, task-entangled signals that hinder generalization; Generative World Models capture dynamics but often *over-models* the full sensory space; and VLMs, despite offering rich semantic priors, lack the predictive grounding required for precise physical consistency. This motivates a "blended" perspective: instead of committing entirely to exploration (RL), full-scene prediction (world models), or static priors (VLMs), we should reconsider the ratio to absorb these components. To operationalize this, our approach aligns with the Latent World Model paradigm [\[4\]](#page-9-2), which serves as the structural backbone to integrate these strengths. Specifically, a scalable reasoner should (i) model pating consequences—discarding high-fidelity pixel reconstruction; (ii) interact with raw multimodal signals through a policy enriched by VLM-based semantic priors; and (iii) reinforce this policy using predictive feedback that reflects physical feasibility. By shifting the prediction target from raw observations to abstract representations, the system filters out task-irrelevant perceptual noise, allowing the agent to capture the "essence" of physical and causal mechanisms rather than the "appearance" of the world. In this way, we propose *IPR* (Interactive Physical

only the essential latent dynamics necessary for antici-

Reasoner), a paradigm where world model *prediction* reinforces a VLM policy to adapt its physical reasoning in interactive environments (Fig. [5)](#page-4-0). To evaluate this paradigm at scale, we curate over 1,000 heterogeneous games spanning diverse visual styles, control interfaces, physics configurations, and causal structures. Games provide an ideal testbed for physical reasoning: they offer rich interaction, realistic physics, and effectively *unlimited* rollouts at low cost. Crucially, their heterogeneous visual appearances introduce substantial domain gaps that typically break traditional agents trained environment-by-environment. For IPR, however, these diverse worlds share the same underlying physical and causal principles, allowing it to learn a representation focused enough to transfer across radically different domains.

We further organize evaluation into three levels inspired by Maslow's hierarchy of needs [\[32\]](#page-10-5): *Survival*, *Curiosity*, *Utility*, covering a spectrum from physical intuition to goal-directed reasoning (Fig. [2)](#page-1-0). The result on three levels verifies two failure modes: reasoning-based VLM/VLA lack forward consequence prediction to explore (Curiosity), while prediction-based world models explore broadly yet <span id="page-2-1"></span>fail at goal-driven tasks (Utility). Across the full suite, our *IPR* remains robust on all three levels, while RL-based and prediction-based baselines often collapse on one or more of them. With an 8B backbone, IPR even *surpasses* GPT-5 overall. Moreover, competence scales with the number of training games and interaction steps (Fig. [7)](#page-8-0) and *zero-shot transfers* to novel environments, highlighting the potential of interactive learning for physical reasoning at scale. We will further extend this paradigm to real-world interactive environments and perform on robotic tasks.

In general, our contributions are: (1) We formulate the G2U problem and curate 1,000+ heterogeneous games with a hierarchical evaluation (*Survival/Curiosity/Utility*), diagnosing the strengths and weaknesses of prevalent prediction-based, RL-based, and VLM-based methods. (2) We propose IPR: world-model rollouts *score* and *reinforce* VLM in the same action space, enabling interactive experience to steadily build up physical reasoning ability. (3) We introduce PhysCode, a physics-centric action code fusing action semantics with visual dynamics, bridging WM prediction and VLM reasoning.

# 2. Related Works

Action space discovery. Research on action spaces spans hand-designed controls, language-based interfaces, and learned latent representations. Early embodied agents operated over environment-specific key bindings, torques, or joystick signals [\[12,](#page-9-4) [22,](#page-10-6) [40,](#page-10-7) [55\]](#page-11-0), which offer precise control but entangle behavior with platform-specific layouts and hinder cross-domain transfer. A second line adopts *language*-based action spaces, issuing natural-language commands or tool calls [\[1,](#page-8-1) [19,](#page-10-8) [58,](#page-11-1) [68,](#page-12-5) [70\]](#page-12-2); while language affords semantic generality, it abstracts away timing, force, and perception–action couplings, often leading to imprecise or under-grounded control [\[51,](#page-11-2) [54\]](#page-11-3). A complementary direction learns *latent* action spaces directly from interaction data. Discrete or continuous latent codes, via VQ-VAE [\[64\]](#page-11-4) or sequence models, have been explored for planning, control, and world models [\[14,](#page-9-3) [17,](#page-9-5) [38,](#page-10-9) [42,](#page-10-10) [57\]](#page-11-5). Recent VLM/VLA systems integrate such latent tokens into large multimodal models [\[31,](#page-10-11) [52\]](#page-11-6), but these codes often remain entangled across domains and lack mechanisms to capture shared physical principles versus environment-specific affordances. Our work addresses this gap by learning a *physics-centric* latent action space that captures reusable dynamical patterns across games, instead of binding actions to domain-specific visuals and control layouts. Fig. [4](#page-3-0) shows that different worlds share some semantic actions, validating the design of shared latent action space.

Agents in interactive environments. Research on gameplaying agents has largely followed three threads. *RL-based* agents, from DQN and PPO/SAC to large-scale systems like

<span id="page-2-0"></span>![](_page_2_Figure_5.jpeg)

Figure 3. Motivating failure cases in control semantics, language grounding, and prediction. (1) *Control conflict:* the same key (*e.g*., UP) triggers different semantics across games (camera tilt up v.s. character move up), causing console aliasing. (2) *Visionlanguage distortion:* text-only actions cannot specify precise visual magnitudes (*e.g*., jump height/speed), leading to systematic amplitude errors. (3) *Missing foresight:* without imagination, the agent cannot anticipate upcoming hazards during interaction (*e.g*., spikes, moving enemies).

AlphaStar and OpenAI Five [\[22,](#page-10-6) [39,](#page-10-12) [43,](#page-10-13) [55,](#page-11-0) [65,](#page-11-7) [67\]](#page-12-6), learn policies directly from pixels and rewards and achieve strong title-specific performance, but remain sample-inefficient, brittle to interface changes, and struggle with long-horizon credit assignment and cross-game transfer. *Predictionbased* (world-model) agents such as World Models, PlaNet, the Dreamer family, and Genie [\[14,](#page-9-3) [21,](#page-10-14) [23,](#page-10-15) [24,](#page-10-16) [26\]](#page-10-17) first learn latent dynamics and then plan or optimize in imagination, improving exploration and sparse-reward learning, yet degrade when learned dynamics or action semantics drift from the test environment and typically optimize task or pixel losses rather than reasoning quality. *VLM/VLAbased* agents like Gato, RT-2, Voyager, MineDojo, and recent VLA frameworks [\[13,](#page-9-6) [19,](#page-10-8) [51,](#page-11-2) [68\]](#page-12-5) cast acting as sequence modeling over images, text, and actions and excel at zero-shot instruction following, but rely heavily on static corpora, heuristic wrappers, and weakly grounded forward prediction (Fig. [3)](#page-2-0). Our IPR paradigm aims to inherit the strengths of these lines by using a physics-centric latent action space where a world model provides imagination-based value estimates and a reasoning VLM policy is reinforced through interactive experience in the *same* latent space.

Benchmarks and evaluation. Interactive environments have long served as testbeds for learning control, exploration, and generalization: Atari/ALE provided dense stepwise rewards for RL training and evaluation [\[9,](#page-9-7) [39\]](#page-10-12), while later platforms such as *Minecraft*, *VizDoom*, and *StarCraft* introduced long-horizon goals, partial observability, and

<span id="page-3-2"></span><span id="page-3-0"></span>![](_page_3_Figure_0.jpeg)

Figure 4. Word cloud of action semantics across thousands of game worlds. These shared semantics provide the structural foundation for cross-domain transfer. Actions highlighted in red represent those shared with general robotic operations, while the size of each word reflects its frequency in our data recipe.

sparse rewards [\[19,](#page-10-8) [35,](#page-10-18) [66,](#page-11-8) [68\]](#page-12-5). With the rise of VLM/VLA agents, web-based benchmarks and browser environments have been proposed to test generalization to novel tasks and interfaces [\[48,](#page-11-9) [75\]](#page-12-7). Following this line, we evaluate agents on a diverse suite of games and adopt simple game-agnostic metrics grouped into three levels: *survival*, *curiosity*, and *utility*, to provide their preformance from physical intuition to reasoning and their scaling with experience.

# 3. Preliminaries

## 3.1. Problem Setting

We consider a family of interactive environments {Em}M m=1, each formalized as a POMDP:

$$\mathcal{M}_m = \left( \mathcal{S}, \mathcal{A}, T_m, R_m, \mathcal{O}, \gamma; \,\varphi_m \right), \qquad (1)$$

where φm are latent *physics parameters* (*e.g*., gravity g, friction µ, mass M). At time t, the environment emits an image xt ∼ O(· | st), which we encode as zt = ϕenc(xt); the agent executes at∈A and transitions according to

$$s_{t+1} \sim T_m(s_{t+1} \mid s_t, a_t; \varphi_m), \qquad r_t = R_m(s_t, a_t), \tag{2}$$

where physics resides in Tm, and causality in Rm.

Control may use one of several interfaces A ∈ {KEYBOARD, LANGUAGE, LATENT}; a goal-conditioned VLM selects actions in the chosen space via

$$a_t^{(A)} \sim \pi_\omega^{(A)}(\cdot \mid z_t, \text{prompt}_t), \qquad a_t \equiv a_t^{(A)} \in \mathcal{A}. \tag{3}$$

A feature-level world model fθ then rolls out imagined futures under selected action sequences in the same action space A. Given a horizon H ∈ N, initialize zˆt := zt and choose an action sequence {a (A) t+k } H−1 k=0 . The rollout is defined by

$$\hat{z}_{t+k+1} = f_{\theta}(\hat{z}_{t+k}, a_{t+k}^{(A)}), \quad k = 0, 1, \ldots, H - 1,\quad(4)$$

where k indexes the step inside the imagined trajectory from

time t to t + H.

## <span id="page-3-1"></span>3.2. PhysCode: Physics-centric Action Code

Motivated by the issues of raw-key semantic aliasing and the distortion of fine-grained visual dynamics when expressed in language, we propose *PhysCode*, a discrete latent action representation built on a VQ codebook C = {vk} K k=1. At step t, an action is a short code sequence a LAT t = ⟨ct,1:L⟩ with embedding obtained by looking up and pooling {vct,ℓ }.

Each code is conditioned on three cues: (i) *domainspecific* visual appearance via DINOv3 [\[59\]](#page-11-10) features ϕimg(xt), (ii) *domain-agnostic* motion via optical flow [\[20\]](#page-10-19) ϕflow(Flow(xt, xt+1)), and (iii) lightweight semantic hints extracted by a T5 encoder [\[50\]](#page-11-11), with ϕsem(yt) = EncT5(yt). Since natural language alone cannot express fine-grained dynamics (*e.g*., impulse magnitude, frictional slip), we rely on flow and visual features to carry these details while keeping semantics as guidance. By design, the resulting codes capture *physics-relevant* intervention primitives that *share* across environments with similar underlying physics and *separate* when physics differ, enabling consistent reuse under matched physics and discrimination under shifted dynamics.

# 4. Method

In this section, we introduce three components of IPR (Fig. [5)](#page-4-0): (1) learning a *physics-centric action code vocabulary* across diverse physical principles and causal mechanisms; (2) training a *latent-conditioned world model* that predicts future features and rewards under sequences of latent actions; and (3) *reinforcing VLM with world model rollout prediction* in the interactive environment, using aligned latent action code. In inference, the VLM proposes candidate latent actions, queries the world model for shorthorizon imagination and value estimates to score them, and

<span id="page-4-1"></span><span id="page-4-0"></span>![](_page_4_Figure_0.jpeg)

**PhysCode** Figure 5. IPR training pipeline. Stage 1: PhysCode pre-training. Video clips with optical flow and action semantics are fed to a VQbased latent action model to learn discrete codes (*PhysCode*) that represent dynamics. Stage 2: Latent-conditioned world model. Given current features and PhysCode sequences, a world model is trained to predict future features and rewards under latent actions. Stage 3: Prediction-reinforced reasoning. A VLM reasons over the scene and generates candidate PhysCode sequences. The world model rolls them out in imagination, and the predicted rewards/values are used to select the best actions and to optimize the VLM policy.

executes the highest-scoring action.

Inducing the latent action vocabulary. Using the cues in Sec. [3.2](#page-3-1) (DINOv3 appearance ft, ft+∆, optical flow ut, and lightweight semantics et), a small gated fusion module forms a fused representation ht. A spatio-temporal encoder Eψ maps ht to a continuous code zt, which is vector-quantized to an index at ∈ {1, . . . , K} with codebook C = {ck} K k=1, and a decoder Dψ predicts the future feature ˆft+∆ from (ft, cat ). We train with a standard VQ-VAE objective

$$\begin{split} \mathcal{L}_{\text{LA}} &= \left\| \left| \hat{f}_{t+\Delta} - f_{t+\Delta} \right| \right\|_{2}^{2} \\ &+ \beta \left\| \text{sg}[z_{t}] - c_{a_{t}} \right\|_{2}^{2} + \gamma \left\| \left| z_{t} - \text{sg}[c_{a_{t}}] \right| \right\|_{2}^{2}, \end{split} \tag{5}$$

augmented with modality dropout on flow and a mild gatesparsity regularizer to avoid over-reliance on optional cues. Since optical flow is only available during pretraining, it acts as privileged information that helps shape a physicscentric codebook, while dropout and gate sparsity distill this structure into an encoder that, at test time, relies only on appearance and semantic cues. At inference, we disable the flow gate and reuse the same encoder to obtain zt and its quantized index at from appearance+semantics only. The resulting discrete vocabulary yields temporally predictive tokens that cluster under matched physics and separate under different dynamics, providing a shared interface for VLM reasoning and world-model prediction.

Training the latent-level world model with a critic. With the latent action vocabulary fixed, we train a featurelevel world model to predict future features conditioned on

� ∗ latent actions, replacing raw controls with their *PhysCode* indices. For triples (ft, at, ft+∆), we embed at to eat and compute

$$(\hat{f}_{t+\Delta}, V_{\theta}(f_t, a_t)) = \ P_{\theta}(f_t, e_{a_t}).\tag{6}$$

We predict in the *latent space*, since features compress appearance variance and rendering noise, making dynamics more shareable across games. Concretely, we first train the world model with a feature-prediction loss Lpred = ˆft+∆ − ft+∆ 1 , and then learn a critic head with a Qlearning–style objective Lvalue = ℓQ Vθ(ft, at), yt , where yt is a target value computed from rollout returns via standard TD backups.

Prediction-reinforced interactive reasoning. We strengthen interactive reasoning with prediction: a world model imagines rollouts, and a VLM plans in the same latent action space. We adopt Qwen3-VL-8B [\[73\]](#page-12-8) as the backbone and extend its tokenizer with *PhysCode* tokens so the VLM can directly emit discrete latent actions while preserving its language ability.

We first align perception and action by supervised training on (ft, ct) pairs, where ft is the DINOv3 feature of the current frame and ct the latent action learned in Stage 1. Given the current context and goal g, the VLM samples B candidate *PhysCode* sequences {a (b)} B b=1, and the world model runs short-horizon imagined rollouts to assign each a predicted return, from which we compute advantages A(b) . <span id="page-5-1"></span>We then update the policy with GRPO [\[56\]](#page-11-12):

$$\mathcal{L}_{\text{GRPO}} = \frac{1}{B} \sum_{b=1}^{B} A^{(b)} \log \pi_{\phi}(\mathbf{a}^{(b)} \mid f_t, g) - \beta \,\text{KL}(\pi_{\phi} \parallel \pi_0), \tag{7}$$

In inference, the VLM proposes latent action candidates, the world model scores and prunes them via short-horizon rollouts, and a router Tenv maps the selected *PhysCode* to environment controls. Through repeated interaction under this prediction-in-the-loop scheme, the experience collected from imagined and executed trajectories reinforces the VLM, improving its physical reasoning in interactive environments.

# 5. Experiments

In this section, we aim to answer three questions: (1) Why is PhysCode necessary compared with raw keyboard inputs or language instructions? (2) How would world model prediction reinforce VLM reasoning? (3) Would IPR show scaling potential to transfer to unseen games?

## 5.1. Setup: Datasets, Tasks, and Metrics

Sources. We curate a multi-source benchmark covering 863 open-source retro titles (via stable-retro [\[47\]](#page-11-13)), 134 lightweight HTML/Canvas games, and 3 commercial games. This breadth exposes agents to heterogeneous visuals, action interfaces, and underlying physics/causal mechanisms, encouraging models to capture shared physical–causal regularities rather than overfit to domain-specific biases.

Diversity axes. We characterize each environment along seven axes to enable structured generalization analysis: *(1) Game category*, with emphasis on physical interaction (e.g., platformer, shooter, sports); *(2) Control interface*, such as GameBoy–style discrete keys, keyboard–mouse combinations, and high-dimensional hybrids; *(3) Visual complexity*, ranging from low-resolution pixel art to high-fidelity 3D; *(4) View perspective*, *e.g*. ego-centric, top-down, and side views; *(5) Causal mechanism*, *e.g*. damage/health dynamics, collection, punishment; *(6) Physical principle*, *e.g*. gravity, contact, and inertia; *(7) Operational difficulty*, approximated by the entropy and frequency of human control actions, reflecting how precisely and how often players must operate to succeed; Fig. [6](#page-5-0) summarizes the distributions over sources, game types, and these axes; detailed perenvironment statistics are provided in the *supplementary*.

Data collection and preprocessing. Across the 1,000 game corpus, we record human play at 60 FPS for 4 minutes per title and obtain per-game annotations covering *physical principles*, *causal mechanisms*, *action semantics*, and

<span id="page-5-0"></span>![](_page_5_Figure_9.jpeg)

Figure 6. Game data distribution. Our dataset spans over 1,000 games categorized by *game category*, *control interface*, *operation and visual complexity*, *physical and causal mechanisms*. This wide coverage enables agents to experience diverse domains and learn transferable physical and causal understanding.

*game instructions*. We perform a series of preprocessing, including normalizing time intervals, removing noninteractive segments, rebalancing extended idle/no-op periods, *etc*. More details are in the *supplementary*.

Hierarchical level design. Inspired by Maslow's hierarchy of needs [\[32\]](#page-10-5), we treat gameplay as a three-level progression: *Survival* → *Curiosity* → *Utility* (Fig. [2)](#page-1-0), from intuition to reasoning.

*Survival.* The objective is to remain alive as long as possible, ignoring the original goal and avoiding risks. We report *survival time* normalized per game, H = E[T]/Ttyp, where T is episode length (steps) and Ttyp is a per-game reference horizon (*e.g*., median survival under a random policy).

*Curiosity.* The goal is to visit *novel states* like a baby to uncover regularities in the environment's dynamics and causal mechanisms. Following Magnipy [\[37\]](#page-10-20), we embed frames with a pretrained CLIP visual encoder [\[49\]](#page-11-14), compute the trajectory's multi-scale *metric-space magnitude* curve M(τ ), and define the exploration score as the area under this curve: E = AUC(M(τ )), where larger E indicates broader state-space coverage.

*Utility.* Utility measures how well an agent *realizes Bentham's utility of life* [\[11\]](#page-9-8): devoting itself to goal completion with higher reward and shorter time. We evaluate downstream goals according to the game types (completion, score, checkpoint time) and report the *human-normalized score (HNS)* [\[8\]](#page-9-9) per game:

$$\text{HNS} = \frac{m - m_{\text{rmd}}}{m_{\text{human}} - m_{\text{rmd}}},\tag{8}$$

where m is the agent metric, mrnd the random baseline, and mhum human performance.

<span id="page-6-1"></span><span id="page-6-0"></span>Table 1. PhysCode validation. Left: Joint training across heterogeneous-physics games reveals cross-game conflicts for keyboard/mouse; language partially alleviates this via semantics, while *PhysCode* separates actions by dynamics, reducing interface aliasing and showing minimal degradation under physics shifts. Middle: Leave-n-out transfer: training on all but 10 titles and evaluating zero-shot on the held-out set, *PhysCode* transfers more reliably than keyboard or language interfaces. Right: Physics-conditioned transfer: zero-shot performance is relatively higher when target environments *match* the training set's physical mechanisms, indicating that *PhysCode* captures reusable physical principles rather than game-specific bindings.

![](_page_6_Figure_1.jpeg)

## 5.2. Why is PhysCode Necessary

We first investigate whether PhysCode is necessary compared with raw keyboard/mouse inputs and naturallanguage instructions. First, we assess robustness under mixed-game joint training with heterogeneous physics (Tab. [1a)](#page-6-0), examining which action space best performs in diverse physical mechanisms and different console/game interfaces. Second, we test transfer (Tab. [1b,](#page-6-0) Tab. [1c)](#page-6-0): a *shared* PhysCode learned on source games improves zeroshot performance in unseen environments with *matched* physics, demonstrating genuine physics grounding rather than interface memorization.

First, we examine how different action spaces behave when trained jointly across a mixture of games with heterogeneous physics (Tab. [1a)](#page-6-0). In this regime, raw keyboard/mouse inputs exhibit cross-game conflicts (the same key triggers different behaviors across environments). Language interfaces partially alleviate this via explicit semantics. *PhysCode* separates actions by dynamics, reducing interface aliasing and showing minimal degradation under physics shifts.

Next, we ask whether sharing the latent space supports transfer. In a leave-n-out protocol (Tab. [1b)](#page-6-0), we train on all but 10 games and evaluate zero-shot on the held-out titles. We find that PhysCode transfers more reliably than keyboard or language instructions.

Moreover, we condition transfer on the physics of the environment. We group games by their dominant physical mechanism, train under one principle (*e.g*., gravity), and evaluate zero-shot on held-out games with matching or different mechanisms. When targets *match* the training physics, zero-shot performance is *typically* higher (Tab. [1c)](#page-6-0), with notable exceptions such as *inertia*, which may already be covered by projectile/impulse. This suggests that *PhysCode* captures reusable physical mechanisms rather than game-specific bindings, even though our coarse physics taxonomy does not perfectly align with the agent's internal abstractions.

## 5.3. Playing in Diverse Physical Worlds

We evaluate IPR against prevalent baselines on 200 games, chosen to match the full dataset's distribution of types, action spaces, and physics/causality. The baselines include:

- RL. We utilize Multitask PPO [\[74\]](#page-12-4) *(policy-based)* and shared-parameter DQN [\[45\]](#page-10-3) *(value-based)* as standard reinforcement learning approaches.
- VLM. We employ a range of vision-language models, including closed-source models such as GPT-4o and GPT-5 [\[44\]](#page-10-21), as well as open-source models like Qwen3-VL-30B-A3B [\[73\]](#page-12-8).
- World Model. We compare three different world models: DreamerV3 [\[26\]](#page-10-17) *(latent-based)*, V-JEPA2 [\[4\]](#page-9-2) *(pretrained latent-based prediction)*, and Genie [\[14\]](#page-9-3) *(pixel-based prediction)* (we follow GenieRedux implementation [\[34\]](#page-10-22)).
- IL. We apply imitation learning (IL) models, including ACT [\[78\]](#page-12-9) *(end-to-end model)* and Qwen3-VL-8B [\[73\]](#page-12-8) *(VLM-based model)*.

We assess every model on the three hierarchical objectives, instantiating level-specific training or prompting. Further implementation details are provided in the *supplementary*. The key results are reported in Tab. [2.](#page-7-0) Takeaways are summarized below the table.

## <span id="page-6-2"></span>5.4. Zero-shot Transfer to Unseen Games

To validate our *Games-to-Unseen (G2U)* setting, we construct a held-out target set TU of 50 games that are *never* used for training. From the remaining pool, we form stratified training subsets {SN } of increasing size N, balanced by physics and causal mechanisms to control for domain bias. For each N, we train our *IPR* paradigm end-to-end

<span id="page-7-1"></span><span id="page-7-0"></span>Table 2. Comprehensive comparison across , , and . "@" denotes the optimization objective. Scores are normalized individually for each game, scaled between random (0) and human (1) benchmarks. Mean is the average of these normalized scores, indicating overall competence. Avg. Rank is the average relative rank among 30 methods across all games (lower is better). Ratio@Top-3(%) is the proportion of games where the method ranks within the top-3. Our IPR demonstrates robust performance across all metrics.

|                                              | Survival  |              |                   | Curiosity |                                   |                   | Utility   |              |                   | Overall  |
|----------------------------------------------|-----------|--------------|-------------------|-----------|-----------------------------------|-------------------|-----------|--------------|-------------------|----------|
| Methods                                      | (Overall) | (Robustness) | (Competitiveness) | (Overall) | (Robustness)                      | (Competitiveness) | (Overall) | (Robustness) | (Competitiveness) | Avg.     |
|                                              | Mean ↑    | Avg. Rank ↓  | Ratio@Top-3(%) ↑  | Mean ↑    | Avg. Rank ↓                       | Ratio@Top-3(%) ↑  | Mean ↑    | Avg. Rank ↓  | Ratio@Top-3(%) ↑  | Rank ↓   |
|                                              |           |              |                   |           | Control Group                     |                   |           |              |                   |          |
| Random                                       | 0.000     | 16.2         | 6.7               | 0.000     | 18.1                              | 3.0               | 0.000     | 12.3         | 12.8              | 26.9     |
| Human                                        | 1.000     | 5.7          | 46.3              | 1.000     | 7.9                               | 14.0              | 1.000     | 2.9          | 61.6              | 2.8      |
|                                              |           |              |                   |           | Imitation Learning (IL) Group     |                   |           |              |                   |          |
| ACT-BC                                       | 0.088     | 14.3         | 17.1              | 0.793     | 15.1                              | 12.8              | 0.255     | 12.0         | 13.4              | 16.6     |
| Qwen3-VL-8B-BC                               | 0.099     | 12.9         | 14.0              | 0.812     | 12.8                              | 9.1               | 0.368     | 9.6          | 12.8              | 13.3     |
|                                              |           |              |                   |           | Reinforcement Learning (RL) Group |                   |           |              |                   |          |
| PPO@survival                                 | 0.125     | 14.0         | 14.0              | 0.233     | 16.5                              | 3.7               | 0.588     | 7.3          | 30.5              | 12.0     |
| PPO@curiosity                                | 0.114     | 14.9         | 11.6              | 0.190     | 17.3                              | 2.4               | 0.609     | 6.9          | 29.3              | 14.8     |
| PPO@utility                                  | 0.120     | 15.0         | 12.2              | 0.220     | 16.8                              | 3.0               | 0.534     | 8.0          | 25.6              | 14.7     |
| DQN@survival                                 | 0.121     | 14.4         | 15.9              | 0.856     | 14.4                              | 8.5               | 0.497     | 10.8         | 15.2              | 12.2     |
| DQN@curiosity                                | 0.131     | 13.2         | 18.3              | 0.772     | 13.4                              | 7.9               | 0.424     | 10.9         | 15.9              | 10.6     |
| DQN@utility                                  | 0.125     | 13.7         | 16.5              | 0.620     | 14.2                              | 4.9               | 0.445     | 10.8         | 17.1              | 11.4     |
|                                              |           |              |                   |           | World Model Group                 |                   |           |              |                   |          |
| DreamerV3@survival                           | 0.102     | 15.8         | 15.2              | 1.120     | 12.5                              | 16.5              | 0.298     | 11.3         | 16.5              | 13.1     |
| DreamerV3@curiosity                          | 0.108     | 14.5         | 17.7              | 1.161     | 13.1                              | 14.0              | 0.235     | 10.0         | 20.1              | 10.7     |
| DreamerV3@utility                            | 0.097     | 14.9         | 17.7              | 0.964     | 15.4                              | 11.0              | 0.139     | 11.4         | 18.3              | 15.4     |
| V-JEPA2@survival                             | 0.102     | 17.4         | 4.9               | 1.150     | 15.6                              | 17.7              | 0.191     | 13.9         | 16.5              | 18.3     |
| V-JEPA2@curiosity                            | 0.100     | 17.8         | 2.4               | 1.402     | 15.6                              | 16.5              | 0.146     | 14.0         | 11.6              | 20.8     |
| V-JEPA2@utility                              | 0.102     | 17.5         | 1.8               | 1.136     | 14.5                              | 22.6              | 0.152     | 14.1         | 11.6              | 20.2     |
| GenieRedux@survival                          | 0.108     | 13.7         | 15.9              | 1.198     | 12.5                              | 11.0              | 0.128     | 12.7         | 12.8              | 14.2     |
| GenieRedux@curiosity                         | 0.104     | 14.3         | 14.0              | 1.374     | 12.5                              | 9.8               | 0.100     | 12.8         | 12.8              | 16.1     |
| GenieRedux@utility                           | 0.110     | 13.7         | 16.5              | 1.248     | 12.4                              | 14.6              | 0.122     | 13.5         | 14.6              | 12.4     |
| Multimodal Large Language Model (MLLM) Group |           |              |                   |           |                                   |                   |           |              |                   |          |
| GPT-4o@survival                              | 0.108     | 12.6         | 13.4              | 0.039     | 17.2                              | 0.6               | 0.302     | 9.2          | 19.5              | 16.4     |
| GPT-4o@curiosity                             | 0.079     | 16.8         | 11.6              | 0.368     | 15.3                              | 5.5               | 0.186     | 10.6         | 17.7              | 19.4     |
| GPT-4o@utility                               | 0.087     | 15.8         | 10.4              | 0.319     | 14.6                              | 3.7               | 0.337     | 10.0         | 17.1              | 18.8     |
| GPT-5@survival                               | 0.140     | 10.5         | 24.4              | 0.127     | 18.3                              | 1.8               | 0.263     | 8.0          | 23.8              | 13.3     |
| GPT-5@curiosity                              | 0.093     | 15.3         | 12.2              | 0.298     | 16.4                              | 7.3               | 0.333     | 9.8          | 16.5              | 17.9     |
| GPT-5@utility                                | 0.108     | 15.2         | 11.0              | 0.185     | 16.5                              | 0.6               | 0.371     | 7.8          | 26.2              | 16.8     |
| Qwen3-VL-30B-A3B@survival                    | 0.091     | 14.3         | 11.0              | 0.325     | 23.0                              | 0.0               | 0.289     | 12.0         | 14.0              | 22.7     |
| Qwen3-VL-30B-A3B@curiosity                   | 0.086     | 15.8         | 11.6              | 0.878     | 20.5                              | 2.4               | 0.155     | 11.7         | 15.2              | 22.4     |
| Qwen3-VL-30B-A3B@utility                     | 0.108     | 13.5         | 12.2              | 0.528     | 21.3                              | 4.9               | 0.285     | 11.6         | 14.6              | 17.6     |
| Interactive Physical Reasoner                |           |              |                   |           |                                   |                   |           |              |                   |          |
| Qwen3-VL-8B w/o IPR                          | 0.105     | 13.7         | 14.0              | 0.325     | 15.0                              | 4.3               | 0.176     | 11.6         | 12.8              | 18.2     |
| Qwen3-VL-8B w/ IPR                           | 0.252     | 2.6          | 72.0              | 1.173     | 13.1                              | 13.4              | 0.493     | 8.5          | 22.0              | 4.9      |
| (IPR ranking w/o control group)              | (1/28)    | (1/28)       | (1/28)            | (5/28)    | (6/28)                            | (7/28)            | (5/28)    | (6/28)       | (6/28)            | (4.9/28) |

#### Key Takeaways across Survival, Curiosity, and Utility

- Prediction-based Methods (WM). Strong at , but weaker at and . Trained on broad exploratory trajectories, latent rollouts broaden coverage and reveal dynamics, but tend to imitate visually-alike futures rather than reliably pursue goals. So prediction is useful as a look-ahead prior for risk and candidate actions.
- RL-based Methods (PPO, DQN). Strong at and when rewards are well-shaped, but weaker on and tasks without explicit goals. Reward gradients enable effective credit assignment under the right signal, yet sparsity and partial observability induce instability and interface overfitting, so RL works best as an optimization method.
- Experience-based Methods (Behavior Cloning). Strong at human-like , but weaker on and . Deliberately imitate human trajectories and thus excel at low-risk survival, but struggle once tasks require precise control or exploration, and their performance depends strongly on the coverage and quality of the demonstrations.
- Reasoning-based Pretrained VLMs. Strong at goal-conditioned and ; weaker on . They excel at instruction-driven reasoning but cannot predict consequences in the visual state space, so they work best as high-level reasoners that need auxiliary prediction modules for outcome-aware decisions.
- Interactive Physical Reasoner (Ours). Robust across , , and . We combine the strengths of all three paradigms: VLMs provide goal-driven causal reasoning, the world model supplies rollout prediction, and RL optimizes decisions using imagined rewards, yielding consistently strong performance across all three levels.
- Summary. Prediction-based world models understand dynamics but cannot reliably plan toward long-horizon goals, while reasoning-based VLMs can plan semantically but lack grounded prediction of physical outcomes. IPR combines them by using WM rollouts as physical priors and VLM reasoning to select and pursue feasible futures, surpassing GPT-5 with an 8B backbone.

<span id="page-8-3"></span><span id="page-8-0"></span>![](_page_8_Figure_0.jpeg)

Figure 7. G2U zero-shot scaling on 50 held-out games. As the number of training games N increases, zero-shot performance on , , and improves steadily on the unseen set TU.

on SN and *directly* evaluate zero-shot on TU without any adaptation or reward re-scaling.

Across all three objectives, performance increases steadily with N, with the steepest early gains on , followed by sustained improvements on and as more diverse interactions are observed. This suggests that training in *physically and causally related* environments helps *IPR* move beyond domain-specific quirks (visual style, control interface) and focus on *shared physical and causal patterns* (*e.g*., gravity, contact, momentum). In other words, as interactive experience accumulates, *IPR* behaves more *human-like*: it carries over physical priors and causal expectations rather than memorizing domain appearance or controls, demonstrating potential to further scale in richer interactive domains.

## 5.5. Ablations and Analysis

Does prediction help VLM reasoning? Table [3](#page-8-2) compares variants on the same Qwen3-VL-8B backbone. Starting from the pretrained VLM, naive BC barely changes survival (0.62→0.63) but *hurts* curiosity and utility, suggesting that low-quality demonstrations can overwrite useful priors instead of improving control. PPO on top of the VLM achieves the best survival (1.00) and higher utility (1.23), but further suppresses curiosity, and combining PPO with BC degrades all three metrics, indicating that RL alone tends to overfit short-term rewards under biased data. In contrast, our IPR, which augments the VLM with world-model prediction and GRPO updates, attains the highest curiosity (2.77) while keeping strong survival and utility, showing that prediction-based reinforcement is key to strengthening long-horizon physical reasoning rather than simply pushing for higher immediate scores.

# 6. Discussion

We study an interactive physical reasoner paradigm in which a general-purpose VLM reasons in language, acts through a physics-centric latent interface (PhysCode), and is reinforced by imagined rewards from a world model, asking whether such agents can internalize physical and causal

<span id="page-8-2"></span>Table 3. Ablation study results for IPR components of World Model prediction and GRPO.

| Method           | Survival | Curiosity | Utility |
|------------------|----------|-----------|---------|
| VLM (pretrained) | 0.62     | 2.14      | 0.89    |
| VLM + BC         | 0.63     | 1.88      | 0.87    |
| VLM + PPO        | 1.00     | 1.79      | 1.23    |
| VLM + GRPO       | 0.95     | 1.78      | 1.22    |
| VLM + BC + PPO   | 0.57     | 1.86      | 0.77    |
| VLM + BC + GRPO  | 0.55     | 1.84      | 0.79    |
| IPR              | 0.76     | 2.77      | 1.34    |

regularities from heterogeneous games and show clear scaling as experience grows. From this perspective, latentaction world models (*e.g*. Genie, UniVLA [\[14,](#page-9-3) [15\]](#page-9-1)) learn discrete action abstractions and latent dynamics for controllable rollouts; imagination-based control methods (*e.g*. Dreamer, V-JEPA2-AC [\[3,](#page-9-10) [27\]](#page-10-23)) optimize policies inside learned world models over device-level actions; and largescale VLM-based game agents (*e.g*. Game-TARS [\[71\]](#page-12-1)) scale vision–language–action models with massive human demonstrations and auxiliary multimodal tasks. Yet, from a physics-centric perspective, these approaches do not explicitly organize actions by shared physical mechanisms across hundreds of games or align VLM's reasoning ability with prediction competence in a common latent space. IPR combines their advantages to study how physical knowledge and transfer emerge under the unified Survival-Curiosity-Utility evaluation, though it is still limited to game environments and short-horizon imagination, leaving real-world transfer and longer-horizon reasoning to future work.

# 7. Conclusion

In this work, we introduced *IPR*, a paradigm that *reinforces physical reasoning with prediction* by coupling a physicscentric latent action space (*PhysCode*) with predictionguided VLM optimization, so that physical and causal regularities are distilled directly from interactive consequences rather than static corpora. On a curated suite of 1,000+ heterogeneous games with *Survival/Curiosity/Utility* evaluation, IPR yields robust gains over VLM-based, predictionbased, and RL-based baselines, and shows strong zeroshot transfer to unseen games (*survive the 1001st night*). These results suggest that a general-purpose VLM, when grounded in a physics-organized latent interface and trained with imagined rewards, can indeed *learn* and *scale* its physical reasoning ability purely through interaction, providing a step toward interactive agents that acquire reusable physical and causal knowledge.

# References

- <span id="page-8-1"></span>[1] Michael Ahn, Anthony Brohan, Noah Brown, Yevgen Chebotar, Omar Cortes, Byron David, Chelsea Finn, Chuyuan Fu, Keerthana Gopalakrishnan, Karol Hausman, Alex Herzog,
<span id="page-9-11"></span>Daniel Ho, Jasmine Hsu, Julian Ibarz, Brian Ichter, Alex Irpan, Eric Jang, Rosario Jauregui Ruano, Kyle Jeffrey, Sally Jesmonth, Nikhil J Joshi, Ryan Julian, Dmitry Kalashnikov, Yuheng Kuang, Kuang-Huei Lee, Sergey Levine, Yao Lu, Linda Luu, Carolina Parada, Peter Pastor, Jornell Quiambao, Kanishka Rao, Jarek Rettinghouse, Diego Reyes, Pierre Sermanet, Nicolas Sievers, Clayton Tan, Alexander Toshev, Vincent Vanhoucke, Fei Xia, Ted Xiao, Peng Xu, Sichun Xu, Mengyuan Yan, and Andy Zeng. Do as i can, not as i say: Grounding language in robotic affordances, 2022. [3](#page-2-1)

- <span id="page-9-15"></span>[2] Rayna Andreeva, Katharina Limbeck, Bastian Rieck, and Rik Sarkar. Metric space magnitude and generalisation in neural networks. In *Proceedings of 2nd Annual Workshop on Topology, Algebra, and Geometry in Machine Learning (TAG-ML)*, pages 242–253, 2023. [5](#page-4-1)
- <span id="page-9-10"></span>[3] Mido Assran, Adrien Bardes, David Fan, Quentin Garrido, Russell Howes, Mojtaba, Komeili, Matthew Muckley, Ammar Rizvi, Claire Roberts, Koustuv Sinha, Artem Zholus, Sergio Arnaud, Abha Gejji, Ada Martin, Francois Robert Hogan, Daniel Dugas, Piotr Bojanowski, Vasil Khalidov, Patrick Labatut, Francisco Massa, Marc Szafraniec, Kapil Krishnakumar, Yong Li, Xiaodong Ma, Sarath Chandar, Franziska Meier, Yann LeCun, Michael Rabbat, and Nicolas Ballas. V-jepa 2: Self-supervised video models enable understanding, prediction and planning, 2025. [9](#page-8-3)
- <span id="page-9-2"></span>[4] Mido Assran, Adrien Bardes, David Fan, Quentin Garrido, Russell Howes, Matthew Muckley, Ammar Rizvi, Claire Roberts, Koustuv Sinha, Artem Zholus, et al. V-jepa 2: Selfsupervised video models enable understanding, prediction and planning. *arXiv preprint arXiv:2506.09985*, 2025. [2,](#page-1-1) [7,](#page-6-1) [1,](#page-0-0) [8,](#page-7-1) [10,](#page-9-11) [12](#page-11-15)
- <span id="page-9-16"></span>[5] Jinze Bai, Shuai Bai, Shusheng Yang, Shijie Wang, Sinan Tan, Peng Wang, Junyang Lin, Chang Zhou, and Jingren Zhou. Qwen-vl: A versatile vision-language model for understanding, localization, text reading, and beyond. *arXiv preprint arXiv:2308.12966*, 2023. [9](#page-8-3)
- <span id="page-9-12"></span>[6] Philip J. Ball, Jakob Bauer, Frank Belletti, Bethanie Brownfield, Ariel Ephrat, Shlomi Fruchter, Agrim Gupta, Kristian Holsheimer, Aleksander Holynski, Jiri Hron, Christos Kaplanis, Marjorie Limont, Matt McGill, Yanko Oliveira, Jack Parker-Holder, Frank Perbet, Guy Scully, Jeremy Shar, Stephen Spencer, Omer Tov, Ruben Villegas, Emma Wang, Jessica Yung, Cip Baetu, Jordi Berbel, David Bridson, Jake Bruce, Gavin Buttimore, Sarah Chakera, Bilva Chandra, Paul Collins, Alex Cullum, Bogdan Damoc, Vibha Dasagi, Maxime Gazeau, Charles Gbadamosi, Woohyun Han, Ed Hirst, Ashyana Kachra, Lucie Kerley, Kristian Kjems, Eva Knoepfel, Vika Koriakin, Jessica Lo, Cong Lu, Zeb Mehring, Alex Moufarek, Henna Nandwani, Valeria Oliveira, Fabio Pardo, Jane Park, Andrew Pierson, Ben Poole, Helen Ran, Tim Salimans, Manuel Sanchez, Igor Saprykin, Amy Shen, Sailesh Sidhwani, Duncan Smith, Joe Stanton, Hamish Tomlinson, Dimple Vijaykumar, Luyu Wang, Piers Wingfield, Nat Wong, Keyang Xu, Christopher Yew, Nick Young, Vadim Zubov, Douglas Eck, Dumitru Erhan, Koray Kavukcuoglu, Demis Hassabis, Zoubin Gharamani, Raia Hadsell, Aaron van den Oord, Inbar Mosseri, ¨

Adrian Bolton, Satinder Singh, and Tim Rocktaschel. Ge- ¨ nie 3: A new frontier for world models. 2025. [1](#page-0-0)

- <span id="page-9-13"></span>[7] Adrien Bardes, Quentin Garrido, Jean Ponce, Xinlei Chen, Michael Rabbat, Yann LeCun, Mahmoud Assran, and Nicolas Ballas. Revisiting feature prediction for learning visual representations from video, 2024. [1](#page-0-0)
- <span id="page-9-9"></span>[8] Marc G. Bellemare, Yavar Naddaf, Joel Veness, and Michael Bowling. The arcade learning environment: An evaluation platform for general agents. *Journal of Artificial Intelligence Research*, 47:253–279, 2013. [6](#page-5-1)
- <span id="page-9-7"></span>[9] Marc G Bellemare, Yavar Naddaf, Joel Veness, and Michael Bowling. The arcade learning environment: An evaluation platform for general agents. *Journal of artificial intelligence research*, 47:253–279, 2013. [3](#page-2-1)
- <span id="page-9-0"></span>[10] Yoshua Bengio and Yann LeCun. Scaling learning algorithms towards AI. In *Large Scale Kernel Machines*. MIT Press, 2007. [1](#page-0-0)
- <span id="page-9-8"></span>[11] Jeremy Bentham. *An Introduction to the Principles of Morals and Legislation*. T. Payne and Son, 1789. [6](#page-5-1)
- <span id="page-9-4"></span>[12] Greg Brockman, Vicki Cheung, Ludwig Pettersson, Jonas Schneider, John Schulman, Jie Tang, and Wojciech Zaremba. Openai gym, 2016. [3](#page-2-1)
- <span id="page-9-6"></span>[13] Anthony Brohan, Noah Brown, Justice Carbajal, Yevgen Chebotar, Xi Chen, Krzysztof Choromanski, Tianli Ding, Danny Driess, Avinava Dubey, Chelsea Finn, Pete Florence, Chuyuan Fu, Montse Gonzalez Arenas, Keerthana Gopalakrishnan, Kehang Han, Karol Hausman, Alexander Herzog, Jasmine Hsu, Brian Ichter, Alex Irpan, Nikhil Joshi, Ryan Julian, Dmitry Kalashnikov, Yuheng Kuang, Isabel Leal, Lisa Lee, Tsang-Wei Edward Lee, Sergey Levine, Yao Lu, Henryk Michalewski, Igor Mordatch, Karl Pertsch, Kanishka Rao, Krista Reymann, Michael Ryoo, Grecia Salazar, Pannag Sanketi, Pierre Sermanet, Jaspiar Singh, Anikait Singh, Radu Soricut, Huong Tran, Vincent Vanhoucke, Quan Vuong, Ayzaan Wahid, Stefan Welker, Paul Wohlhart, Jialin Wu, Fei Xia, Ted Xiao, Peng Xu, Sichun Xu, Tianhe Yu, and Brianna Zitkovich. Rt-2: Vision-language-action models transfer web knowledge to robotic control, 2023. [3](#page-2-1)
- <span id="page-9-3"></span>[14] Jake Bruce, Michael D Dennis, Ashley Edwards, Jack Parker-Holder, Yuge Shi, Edward Hughes, Matthew Lai, Aditi Mavalankar, Richie Steigerwald, Chris Apps, et al. Genie: Generative interactive environments. In *Forty-first International Conference on Machine Learning*, 2024. [2,](#page-1-1) [3,](#page-2-1) [7,](#page-6-1) [9,](#page-8-3) [1](#page-0-0)
- <span id="page-9-1"></span>[15] Qingwen Bu, Yanting Yang, Jisong Cai, Shenyuan Gao, Guanghui Ren, Maoqing Yao, Ping Luo, and Hongyang Li. Univla: Learning to act anywhere with task-centric latent actions, 2025. [1,](#page-0-0) [9](#page-8-3)
- <span id="page-9-14"></span>[16] Peng Chen, Pi Bu, Yingyao Wang, Xinyi Wang, Ziming Wang, Jie Guo, Yingxiu Zhao, Qi Zhu, Jun Song, Siran Yang, Jiamang Wang, and Bo Zheng. Combatvla: An efficient vision-language-action model for combat tasks in 3d action role-playing games, 2025. [1](#page-0-0)
- <span id="page-9-5"></span>[17] Cheng Chi, Zhenjia Xu, Siyuan Feng, Eric Cousineau, Yilun Du, Benjamin Burchfiel, Russ Tedrake, and Shuran Song. Diffusion policy: Visuomotor policy learning via action diffusion, 2024. [3](#page-2-1)
- <span id="page-10-28"></span>[18] Andreas Doerr, Christian Daniel, Martin Schiegg, Nguyen-Tuong Duy, Stefan Schaal, Marc Toussaint, and Trimpe Sebastian. Probabilistic recurrent state-space models. In *International conference on machine learning*, pages 1280–1289. PMLR, 2018. [10](#page-9-11)
- <span id="page-10-8"></span>[19] Linxi Fan, Guanzhi Wang, Yunfan Jiang, Ajay Mandlekar, Yuncong Yang, Haoyi Zhu, Andrew Tang, De-An Huang, Yuke Zhu, and Anima Anandkumar. Minedojo: Building open-ended embodied agents with internet-scale knowledge, 2022. [3,](#page-2-1) [4](#page-3-2)
- <span id="page-10-19"></span>[20] Philipp Fischer, Alexey Dosovitskiy, Eddy Ilg, Philip Hausser, Caner Hazırbas¸, Vladimir Golkov, Patrick van der ¨ Smagt, Daniel Cremers, and Thomas Brox. Flownet: Learning optical flow with convolutional networks, 2015. [4](#page-3-2)
- <span id="page-10-14"></span>[21] David Ha and Jurgen Schmidhuber. World models. 2018. ¨ [3,](#page-2-1) [1](#page-0-0)
- <span id="page-10-6"></span>[22] Tuomas Haarnoja, Aurick Zhou, Pieter Abbeel, and Sergey Levine. Soft actor-critic: Off-policy maximum entropy deep reinforcement learning with a stochastic actor, 2018. [3](#page-2-1)
- <span id="page-10-15"></span>[23] Danijar Hafner, Timothy Lillicrap, Ian Fischer, Ruben Villegas, David Ha, Honglak Lee, and James Davidson. Learning latent dynamics for planning from pixels, 2019. [3](#page-2-1)
- <span id="page-10-16"></span>[24] Danijar Hafner, Timothy Lillicrap, Jimmy Ba, and Mohammad Norouzi. Dream to control: Learning behaviors by latent imagination, 2020. [3,](#page-2-1) [1](#page-0-0)
- <span id="page-10-24"></span>[25] Danijar Hafner, Timothy Lillicrap, Mohammad Norouzi, and Jimmy Ba. Mastering atari with discrete world models, 2022. [1](#page-0-0)
- <span id="page-10-17"></span>[26] Danijar Hafner, Jurgis Pasukonis, Jimmy Ba, and Timothy Lillicrap. Mastering diverse domains through world models. *arXiv preprint arXiv:2301.04104*, 2023. [3,](#page-2-1) [7](#page-6-1)
- <span id="page-10-23"></span>[27] Danijar Hafner, Jurgis Pasukonis, Jimmy Ba, and Timothy Lillicrap. Mastering diverse domains through world models, 2024. [9,](#page-8-3) [1,](#page-0-0) [10](#page-9-11)
- <span id="page-10-4"></span>[28] Danijar Hafner, Wilson Yan, and Timothy Lillicrap. Training agents inside of scalable world models, 2025. [2,](#page-1-1) [1](#page-0-0)
- <span id="page-10-1"></span>[29] Sihao Hu, Tiansheng Huang, Gaowen Liu, Ramana Rao Kompella, Fatih Ilhan, Selim Furkan Tekin, Yichang Xu, Zachary Yahn, and Ling Liu. A survey on large language model-based game agents. *arXiv preprint arXiv:2404.02039*, 2024. [1](#page-0-0)
- <span id="page-10-0"></span>[30] Jie Huang and Kevin Chen-Chuan Chang. Towards reasoning in large language models: A survey, 2023. [1](#page-0-0)
- <span id="page-10-11"></span>[31] Jiangyong Huang, Silong Yong, Xiaojian Ma, Xiongkun Linghu, Puhao Li, Yan Wang, Qing Li, Song-Chun Zhu, Baoxiong Jia, and Siyuan Huang. An embodied generalist agent in 3d world, 2024. [3](#page-2-1)
- <span id="page-10-5"></span>[32] William Huitt. Maslow's hierarchy of needs. *Educational psychology interactive*, 23, 2007. [2,](#page-1-1) [6](#page-5-1)
- <span id="page-10-26"></span>[33] Physical Intelligence, Ali Amin, Raichelle Aniceto, Ashwin Balakrishna, Kevin Black, Ken Conley, Grace Connors, James Darpinian, Karan Dhabalia, Jared DiCarlo, Danny Driess, Michael Equi, Adnan Esmail, Yunhao Fang, Chelsea Finn, Catherine Glossop, Thomas Godden, Ivan Goryachev, Lachy Groom, Hunter Hancock, Karol Hausman, Gashon Hussein, Brian Ichter, Szymon Jakubczak, Rowan Jen, Tim Jones, Ben Katz, Liyiming Ke, Chandra Kuchi, Marinda

Lamb, Devin LeBlanc, Sergey Levine, Adrian Li-Bell, Yao Lu, Vishnu Mano, Mohith Mothukuri, Suraj Nair, Karl Pertsch, Allen Z. Ren, Charvi Sharma, Lucy Xiaoyang Shi, Laura Smith, Jost Tobias Springenberg, Kyle Stachowicz, Will Stoeckle, Alex Swerdlow, James Tanner, Marcel Torne, Quan Vuong, Anna Walling, Haohuan Wang, Blake Williams, Sukwon Yoo, Lili Yu, Ury Zhilinsky, and Zhiyuan Zhou. π ∗ 0.6: a vla that learns from experience, 2025. [2](#page-1-1)

- <span id="page-10-22"></span>[34] Naser Kazemi, Nedko Savov, Danda Paudel, and Luc Van Gool. Learning generative interactive environments by trained agent exploration, 2024. [7](#page-6-1)
- <span id="page-10-18"></span>[35] Michał Kempka, Marek Wydmuch, Grzegorz Runc, Jakub Toczek, and Wojciech Jaskowski. Vizdoom: A doom-based ´ ai research platform for visual reinforcement learning. In *2016 IEEE conference on computational intelligence and games (CIG)*, pages 1–8. IEEE, 2016. [4](#page-3-2)
- <span id="page-10-27"></span>[36] Rahima Khanam and Muhammad Hussain. Yolov11: An overview of the key architectural enhancements, 2024. [3](#page-2-1)
- <span id="page-10-20"></span>[37] Katharina Limbeck, Rayna Andreeva, Rik Sarkar, and Bastian Rieck. Metric space magnitude for evaluating the diversity of latent representations. *Advances in Neural Information Processing Systems*, 37:123911–123953, 2024. [6,](#page-5-1) [5](#page-4-1)
- <span id="page-10-9"></span>[38] Corey Lynch and Pierre Sermanet. Language conditioned imitation learning over unstructured data, 2021. [3](#page-2-1)
- <span id="page-10-12"></span>[39] Volodymyr Mnih, Koray Kavukcuoglu, David Silver, Alex Graves, Ioannis Antonoglou, Daan Wierstra, and Martin Riedmiller. Playing atari with deep reinforcement learning. *arXiv preprint arXiv:1312.5602*, 2013. [3](#page-2-1)
- <span id="page-10-7"></span>[40] Volodymyr Mnih, Koray Kavukcuoglu, David Silver, Andrei A Rusu, Joel Veness, Marc G Bellemare, Alex Graves, Martin Riedmiller, Andreas K Fidjeland, Georg Ostrovski, et al. Human-level control through deep reinforcement learning. *nature*, 518(7540):529–533, 2015. [3](#page-2-1)
- <span id="page-10-2"></span>[41] Thomas M Moerland, Joost Broekens, Aske Plaat, Catholijn M Jonker, et al. Model-based reinforcement learning: A survey. *Foundations and Trends® in Machine Learning*, 16(1):1–118, 2023. [1](#page-0-0)
- <span id="page-10-10"></span>[42] Masashi Okada and Tadahiro Taniguchi. Dreaming: Modelbased reinforcement learning by latent imagination without reconstruction, 2021. [3](#page-2-1)
- <span id="page-10-13"></span>[43] OpenAI. Dota 2 with large scale deep reinforcement learning, 2019. [3](#page-2-1)
- <span id="page-10-21"></span>[44] OpenAI. Gpt-4o system card, 2024. [7,](#page-6-1) [9](#page-8-3)
- <span id="page-10-3"></span>[45] Ian Osband, Charles Blundell, Alexander Pritzel, and Benjamin Van Roy. Deep exploration via bootstrapped dqn. *Advances in neural information processing systems*, 29, 2016. [2,](#page-1-1) [7](#page-6-1)
- <span id="page-10-25"></span>[46] Jack Parker-Holder, Philip Ball, Jake Bruce, Vibhavari Dasagi, Kristian Holsheimer, Christos Kaplanis, Alexandre Moufarek, Guy Scully, Jeremy Shar, Jimmy Shi, Stephen Spencer, Jessica Yung, Michael Dennis, Sultan Kenjeyev, Shangbang Long, Vlad Mnih, Harris Chan, Maxime Gazeau, Bonnie Li, Fabio Pardo, Luyu Wang, Lei Zhang, Frederic Besse, Tim Harley, Anna Mitenkova, Jane Wang, Jeff Clune, Demis Hassabis, Raia Hadsell, Adrian Bolton, Satinder Singh, and Tim Rocktaschel. Genie 2: A large-scale ¨ foundation world model. 2024. [1](#page-0-0)
- <span id="page-11-15"></span><span id="page-11-13"></span>[47] Mathieu Poliquin. Stable retro: A maintained fork of openai's gym-retro. [https://github.com/Farama-](https://github.com/Farama-Foundation/stable-retro)[Foundation/stable-retro](https://github.com/Farama-Foundation/stable-retro), 2025. [6,](#page-5-1) [2](#page-1-1)
- <span id="page-11-9"></span>[48] Zehan Qi, Xiao Liu, Iat Long Iong, Hanyu Lai, Xueqiao Sun, Wenyi Zhao, Yu Yang, Xinyue Yang, Jiadai Sun, Shuntian Yao, et al. Webrl: Training llm web agents via self-evolving online curriculum reinforcement learning. *arXiv preprint arXiv:2411.02337*, 2024. [4](#page-3-2)
- <span id="page-11-14"></span>[49] Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh, Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, and Ilya Sutskever. Learning transferable visual models from natural language supervision, 2021. [6](#page-5-1)
- <span id="page-11-11"></span>[50] Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang, Michael Matena, Yanqi Zhou, Wei Li, and Peter J. Liu. Exploring the limits of transfer learning with a unified text-to-text transformer, 2023. [4](#page-3-2)
- <span id="page-11-2"></span>[51] Scott Reed, Konrad Zolna, Emilio Parisotto, Sergio Gomez Colmenarejo, Alexander Novikov, Gabriel Barth-Maron, Mai Gimenez, Yury Sulsky, Jackie Kay, Jost Tobias Springenberg, et al. A generalist agent. *arXiv preprint arXiv:2205.06175*, 2022. [3](#page-2-1)
- <span id="page-11-6"></span>[52] Ranjan Sapkota, Yang Cao, Konstantinos I Roumeliotis, and Manoj Karkee. Vision-language-action models: Concepts, progress, applications and challenges. *arXiv preprint arXiv:2505.04769*, 2025. [3](#page-2-1)
- <span id="page-11-20"></span>[53] Nedko Savov, Naser Kazemi, Mohammad Mahdi, Danda Pani Paudel, Xi Wang, and Luc Van Gool. Exploration-driven generative interactive environments, 2025. [8](#page-7-1)
- <span id="page-11-3"></span>[54] Manolis Savva, Abhishek Kadian, Oleksandr Maksymets, Yili Zhao, Erik Wijmans, Bhavana Jain, Julian Straub, Jia Liu, Vladlen Koltun, Jitendra Malik, et al. Habitat: A platform for embodied ai research. In *Proceedings of the IEEE/CVF international conference on computer vision*, pages 9339–9347, 2019. [3](#page-2-1)
- <span id="page-11-0"></span>[55] John Schulman, Filip Wolski, Prafulla Dhariwal, Alec Radford, and Oleg Klimov. Proximal policy optimization algorithms. *arXiv preprint arXiv:1707.06347*, 2017. [3](#page-2-1)
- <span id="page-11-12"></span>[56] Zhihong Shao, Peiyi Wang, Qihao Zhu, Runxin Xu, Junxiao Song, Xiao Bi, Haowei Zhang, Mingchuan Zhang, YK Li, Yang Wu, et al. Deepseekmath: Pushing the limits of mathematical reasoning in open language models. *arXiv preprint arXiv:2402.03300*, 2024. [6](#page-5-1)
- <span id="page-11-5"></span>[57] Archit Sharma, Michael Ahn, Sergey Levine, Vikash Kumar, Karol Hausman, and Shixiang Gu. Emergent realworld robotic skills via unsupervised off-policy reinforcement learning, 2020. [3](#page-2-1)
- <span id="page-11-1"></span>[58] Mohit Shridhar, Jesse Thomason, Daniel Gordon, Yonatan Bisk, Winson Han, Roozbeh Mottaghi, Luke Zettlemoyer, and Dieter Fox. Alfred: A benchmark for interpreting grounded instructions for everyday tasks, 2020. [3](#page-2-1)
- <span id="page-11-10"></span>[59] Oriane Simeoni, Huy V. Vo, Maximilian Seitzer, Federico ´ Baldassarre, Maxime Oquab, Cijo Jose, Vasil Khalidov, Marc Szafraniec, Seungeun Yi, Michael Ramamonjisoa, ¨ Francisco Massa, Daniel Haziza, Luca Wehrstedt, Jianyuan Wang, Timothee Darcet, Th ´ eo Moutakanni, Leonel Sentana, ´

Claire Roberts, Andrea Vedaldi, Jamie Tolan, John Brandt, Camille Couprie, Julien Mairal, Herve J ´ egou, Patrick La- ´ batut, and Piotr Bojanowski. Dinov3, 2025. [4](#page-3-2)

- <span id="page-11-18"></span>[60] Weihao Tan, Wentao Zhang, Xinrun Xu, Haochong Xia, Ziluo Ding, Boyu Li, Bohan Zhou, Junpeng Yue, Jiechuan Jiang, Yewen Li, Ruyi An, Molei Qin, Chuqiao Zong, Longtao Zheng, Yujie Wu, Xiaoqiang Chai, Yifei Bi, Tianbao Xie, Pengjie Gu, Xiyun Li, Ceyao Zhang, Long Tian, Chaojie Wang, Xinrun Wang, Borje F. Karlsson, Bo An, Shuicheng ¨ Yan, and Zongqing Lu. Cradle: Empowering foundation agents towards general computer control, 2024. [1](#page-0-0)
- <span id="page-11-19"></span>[61] Weihao Tan, Xiangyang Li, Yunhao Fang, Heyuan Yao, Shi Yan, Hao Luo, Tenglong Ao, Huihui Li, Hongbin Ren, Bairen Yi, Yujia Qin, Bo An, Libin Liu, and Guang Shi. Lumine: An open recipe for building generalist agents in 3d open worlds, 2025. [1](#page-0-0)
- <span id="page-11-16"></span>[62] SIMA Team. Sima 2: An agent that plays, reasons, and learns with you in virtual 3d worlds, 2025. [1](#page-0-0)
- <span id="page-11-17"></span>[63] SIMA Team, Maria Abi Raad, Arun Ahuja, Catarina Barros, Frederic Besse, Andrew Bolt, Adrian Bolton, Bethanie Brownfield, Gavin Buttimore, Max Cant, Sarah Chakera, Stephanie C. Y. Chan, Jeff Clune, Adrian Collister, Vikki Copeman, Alex Cullum, Ishita Dasgupta, Dario de Cesare, Julia Di Trapani, Yani Donchev, Emma Dunleavy, Martin Engelcke, Ryan Faulkner, Frankie Garcia, Charles Gbadamosi, Zhitao Gong, Lucy Gonzales, Kshitij Gupta, Karol Gregor, Arne Olav Hallingstad, Tim Harley, Sam Haves, Felix Hill, Ed Hirst, Drew A. Hudson, Jony Hudson, Steph Hughes-Fitt, Danilo J. Rezende, Mimi Jasarevic, Laura Kampis, Rosemary Ke, Thomas Keck, Junkyung Kim, Oscar Knagg, Kavya Kopparapu, Rory Lawton, Andrew Lampinen, Shane Legg, Alexander Lerchner, Marjorie Limont, Yulan Liu, Maria Loks-Thompson, Joseph Marino, Kathryn Martin Cussons, Loic Matthey, Siobhan Mcloughlin, Piermaria Mendolicchio, Hamza Merzic, Anna Mitenkova, Alexandre Moufarek, Valeria Oliveira, Yanko Oliveira, Hannah Openshaw, Renke Pan, Aneesh Pappu, Alex Platonov, Ollie Purkiss, David Reichert, John Reid, Pierre Harvey Richemond, Tyson Roberts, Giles Ruscoe, Jaume Sanchez Elias, Tasha Sandars, Daniel P. Sawyer, Tim Scholtes, Guy Simmons, Daniel Slater, Hubert Soyer, Heiko Strathmann, Peter Stys, Allison C. Tam, Denis Teplyashin, Tayfun Terzi, Davide Vercelli, Bojan Vujatovic, Marcus Wainwright, Jane X. Wang, Zhengdong Wang, Daan Wierstra, Duncan Williams, Nathaniel Wong, Sarah York, and Nick Young. Scaling instructable agents across many simulated worlds, 2024. [1](#page-0-0)
- <span id="page-11-4"></span>[64] Aaron van den Oord, Oriol Vinyals, and Koray Kavukcuoglu. Neural discrete representation learning, 2018. [3](#page-2-1)
- <span id="page-11-7"></span>[65] Hado van Hasselt, Arthur Guez, and David Silver. Deep reinforcement learning with double q-learning, 2015. [3](#page-2-1)
- <span id="page-11-8"></span>[66] Oriol Vinyals, Timo Ewalds, Sergey Bartunov, Petko Georgiev, Alexander Sasha Vezhnevets, Michelle Yeo, Alireza Makhzani, Heinrich Kuttler, John Agapiou, Julian ¨ Schrittwieser, et al. Starcraft ii: A new challenge for reinforcement learning. *arXiv preprint arXiv:1708.04782*, 2017. [4](#page-3-2)
- <span id="page-12-6"></span>[67] Oriol Vinyals, Igor Babuschkin, Wojciech M. Czarnecki, Michael Mathieu, Andrew Joseph Dudzik, Junyoung Chung, ¨ David Choi, Richard Powell, Timo Ewalds, Petko Georgiev, Junhyuk Oh, Dan Horgan, Manuel Kroiss, Ivo Danihelka, Aja Huang, L. Sifre, Trevor Cai, John P. Agapiou, Max Jaderberg, Alexander Sasha Vezhnevets, Remi Leblond, To- ´ bias Pohlen, Valentin Dalibard, David Budden, Yury Sulsky, James Molloy, Tom Le Paine, Caglar Gulcehre, Ziyun Wang, Tobias Pfaff, Yuhuai Wu, Roman Ring, Dani Yogatama, Dario Wunsch, Katrina McKinney, Oliver Smith, ¨ Tom Schaul, Timothy P. Lillicrap, Koray Kavukcuoglu, Demis Hassabis, Chris Apps, and David Silver. Grandmaster level in starcraft ii using multi-agent reinforcement learning. *Nature*, 575:350 – 354, 2019. [3](#page-2-1)
- <span id="page-12-5"></span>[68] Guanzhi Wang, Yuqi Xie, Yunfan Jiang, Ajay Mandlekar, Chaowei Xiao, Yuke Zhu, Linxi Fan, and Anima Anandkumar. Voyager: An open-ended embodied agent with large language models. *arXiv preprint arXiv:2305.16291*, 2023. [3,](#page-2-1) [4](#page-3-2)
- <span id="page-12-10"></span>[69] Haoming Wang, Haoyang Zou, Huatong Song, Jiazhan Feng, Junjie Fang, Junting Lu, Longxiang Liu, Qinyu Luo, Shihao Liang, Shijue Huang, Wanjun Zhong, Yining Ye, Yujia Qin, Yuwen Xiong, Yuxin Song, Zhiyong Wu, Aoyan Li, Bo Li, Chen Dun, Chong Liu, Daoguang Zan, Fuxing Leng, Hanbin Wang, Hao Yu, Haobin Chen, Hongyi Guo, Jing Su, Jingjia Huang, Kai Shen, Kaiyu Shi, Lin Yan, Peiyao Zhao, Pengfei Liu, Qinghao Ye, Renjie Zheng, Shulin Xin, Wayne Xin Zhao, Wen Heng, Wenhao Huang, Wenqian Wang, Xiaobo Qin, Yi Lin, Youbin Wu, Zehui Chen, Zihao Wang, Baoquan Zhong, Xinchun Zhang, Xujing Li, Yuanfan Li, Zhongkai Zhao, Chengquan Jiang, Faming Wu, Haotian Zhou, Jinlin Pang, Li Han, Qi Liu, Qianli Ma, Siyao Liu, Songhua Cai, Wenqi Fu, Xin Liu, Yaohui Wang, Zhi Zhang, Bo Zhou, Guoliang Li, Jiajun Shi, Jiale Yang, Jie Tang, Li Li, Qihua Han, Taoran Lu, Woyu Lin, Xiaokang Tong, Xinyao Li, Yichi Zhang, Yu Miao, Zhengxuan Jiang, Zili Li, Ziyuan Zhao, Chenxin Li, Dehua Ma, Feng Lin, Ge Zhang, Haihua Yang, Hangyu Guo, Hongda Zhu, Jiaheng Liu, Junda Du, Kai Cai, Kuanye Li, Lichen Yuan, Meilan Han, Minchao Wang, Shuyue Guo, Tianhao Cheng, Xiaobo Ma, Xiaojun Xiao, Xiaolong Huang, Xinjie Chen, Yidi Du, Yilin Chen, Yiwen Wang, Zhaojian Li, Zhenzhu Yang, Zhiyuan Zeng, Chaolin Jin, Chen Li, Hao Chen, Haoli Chen, Jian Chen, Qinghao Zhao, and Guang Shi. Ui-tars-2 technical report: Advancing gui agent with multi-turn reinforcement learning, 2025. [1](#page-0-0)
- <span id="page-12-2"></span>[70] Zihao Wang, Shaofei Cai, Anji Liu, Yonggang Jin, Jinbing Hou, Bowei Zhang, Haowei Lin, Zhaofeng He, Zilong Zheng, Yaodong Yang, et al. Jarvis-1: Open-world multitask agents with memory-augmented multimodal language models. *IEEE Transactions on Pattern Analysis and Machine Intelligence*, 2024. [1,](#page-0-0) [3](#page-2-1)
- <span id="page-12-1"></span>[71] Zihao Wang, Xujing Li, Yining Ye, Junjie Fang, Haoming Wang, Longxiang Liu, Shihao Liang, Junting Lu, Zhiyong Wu, Jiazhan Feng, Wanjun Zhong, Zili Li, Yu Wang, Yu Miao, Bo Zhou, Yuanfan Li, Hao Wang, Zhongkai Zhao, Faming Wu, Zhengxuan Jiang, Weihao Tan, Heyuan Yao, Shi Yan, Xiangyang Li, Yitao Liang, Yujia Qin, and Guang

Shi. Game-tars: Pretrained foundation models for scalable generalist multimodal game agents, 2025. [1,](#page-0-0) [9](#page-8-3)

- <span id="page-12-3"></span>[72] Norbert Wiener. *Cybernetics or Control and Communication in the Animal and the Machine*. MIT press, 2019. [1](#page-0-0)
- <span id="page-12-8"></span>[73] An Yang, Anfeng Li, Baosong Yang, Beichen Zhang, Binyuan Hui, Bo Zheng, Bowen Yu, Chang Gao, Chengen Huang, Chenxu Lv, et al. Qwen3 technical report. *arXiv preprint arXiv:2505.09388*, 2025. [5,](#page-4-1) [7](#page-6-1)
- <span id="page-12-4"></span>[74] Tianhe Yu, Deirdre Quillen, Zhanpeng He, Ryan Julian, Karol Hausman, Chelsea Finn, and Sergey Levine. Metaworld: A benchmark and evaluation for multi-task and meta reinforcement learning. In *Conference on robot learning*, pages 1094–1100. PMLR, 2020. [2,](#page-1-1) [7](#page-6-1)
- <span id="page-12-7"></span>[75] Zhecheng Yuan, Sizhe Yang, Pu Hua, Can Chang, Kaizhe Hu, and Huazhe Xu. Rl-vigen: A reinforcement learning benchmark for visual generalization. *Advances in Neural Information Processing Systems*, 36:6720–6747, 2023. [4](#page-3-2)
- <span id="page-12-11"></span>[76] Alex L. Zhang, Thomas L. Griffiths, Karthik R. Narasimhan, and Ofir Press. Videogamebench: Can vision-language models complete popular video games?, 2025. [9](#page-8-3)
- <span id="page-12-0"></span>[77] Mingyu Zhang, Jiting Cai, Mingyu Liu, Yue Xu, Cewu Lu, and Yong-Lu Li. Take a step back: Rethinking the two stages in visual reasoning, 2024. [1](#page-0-0)
- <span id="page-12-9"></span>[78] Tony Z Zhao, Vikash Kumar, Sergey Levine, and Chelsea Finn. Learning fine-grained bimanual manipulation with low-cost hardware. *arXiv preprint arXiv:2304.13705*, 2023. [7](#page-6-1)

# IPR-1: Interactive Physical Reasoner

# Supplementary Material

In this supplementary, we further provide the additional contents as follows:

- Sec. [8:](#page-13-0) Further Discussion.
- Sec. [9:](#page-14-0) Benchmark Details.
- Sec. [10:](#page-17-0) Implementation Details.
- Sec. [11:](#page-23-0) Additional Ablation Study.
- Sec. [12:](#page-24-0) Case Study.

# <span id="page-13-0"></span>8. Further Discussion

Recent progress in world models and interactive agents has produced systems that can predict future states, learn latent dynamics, and act across large numbers of games. While we share certain design choices with these systems—such as learning latent dynamics, adopting multimodal interfaces, and scaling across diverse environments—our motivation is fundamentally different. Rather than optimizing for task performance within a single domain, we aim to approximate cross-domain invariants: the physical and causal structures that remain stable across heterogeneous worlds. Below, we situate our paradigm relative to representative systems, organized by methodological families.

World-model-centric approaches. Early world-model work and the Dreamer series [\[21,](#page-10-14) [24,](#page-10-16) [25,](#page-10-24) [27,](#page-10-23) [28\]](#page-10-4) show that learning a latent dynamics model and updating a policy from imagined rollouts can master diverse control tasks from pixels. Dreamer progressively strengthens this paradigm: DreamerV1/V2 introduce latent RSSM dynamics with imagination-based actor–critic updates; DreamerV3 demonstrates that a single configuration can reliably solve over 150 tasks across Atari, continuous control, and Minecraft; Dreamer4 further improves robustness and exploration in harder, long-horizon domains. Collectively, these results establish that prediction in latent space is a powerful tool for efficient RL and long-horizon control.

The Genie family [\[6,](#page-9-12) [14,](#page-9-3) [46\]](#page-10-25) takes a complementary step by treating the world model itself as a *generative environment*. Genie learns a latent action interface from Internet videos and uses it to drive a video world model that converts text or frame prompts into interactive, playable environments. Subsequent versions (Genie-2/3) extend this idea to longer, higher-resolution, and partially 3D worlds with persistent object state and richer user interaction, suggesting that latent world models can serve as general-purpose sandboxes for training and evaluating agents rather than only internal simulators.

V-JEPA and V-JEPA 2 [\[4,](#page-9-2) [7\]](#page-9-13) further push prediction into the feature space: instead of reconstructing pixels, they learn joint-embedding predictive encoders on Internet-scale video. V-JEPA 2-AC augments this with a latent actionconditioned head trained on a small amount of robot interaction data, showing that purely self-supervised video pretraining can be post-hoc adapted into an actionable world model capable of zero-shot manipulation without per-task finetuning. This line of work highlights that high-quality dynamics for physical reasoning do not require pixel-level supervision.

SIMA and SIMA-2 [\[62,](#page-11-16) [63\]](#page-11-17) focus on building scalable, instructable multiworld agents in 3D games. SIMA trains a vision–language–action system that follows freeform language instructions across many commercial titles via keyboard-and-mouse control, demonstrating that a single agent can generalise across heterogeneous game interfaces and tasks. SIMA-2 upgrades this framework with a stronger backbone and richer virtual worlds, improving instruction following and in-context learning of new tasks. However, both SIMA variants largely treat the environment as a black box: they rely on language-driven policy learning rather than explicit latent dynamics for imagination or planning.

VLM/VLA-centric agents. A parallel line of work builds *vision–language(-action)* agents that treat the game as a black-box interface and learn to map instructions and screen pixels directly to high-level actions. Early VLA-based game agents [\[16,](#page-9-14) [60,](#page-11-18) [69\]](#page-12-10) explore this direction by combining pretrained VLMs with keyboard–mouse or GUI control, often wrapping the environment through OS- or browserlevel APIs. These systems demonstrate that a single pretrained backbone can drive diverse games and applications with minimal task-specific finetuning, but typically rely on scripted tools, slow deliberation, or narrow benchmarks.

Game-TARS [\[71\]](#page-12-1) pushes this paradigm to scale. It trains a generalist game agent with a unified, human-aligned keyboard–mouse action space, pretraining on hundreds of billions of multimodal tokens collected from OS, web, and simulation games. This large-scale pretraining, together with continual-loss scheduling and sparse-thinking strategies, yields strong performance across open-world Minecraft, web-based 3D games, and FPS benchmarks, often surpassing general-purpose VLMs of comparable size. The key insight is that anchoring the action space to a human-native interface enables broad reuse of trajectories and supports scalable cross-domain training.

Lumine [\[61\]](#page-11-19) provides an open recipe for building realtime generalist agents in 3D open worlds. Powered by a VLM backbone, Lumine processes raw pixels at low frequency while emitting precise 30 Hz keyboard–mouse actions, and adaptively invokes heavier reasoning only when necessary. Trained primarily in a single but rich title (Genshin Impact), it completes hours-long storylines, handles diverse tasks such as exploration, combat, and puzzle solving, and zero-shot transfers to other games with different graphics and interaction dynamics. This line of work underscores that strong semantic reasoning, combined with human-like interaction loops, can already produce impressive in-domain and cross-game competence.

π ⋆ 0.6 [\[33\]](#page-10-26) is an RL-enhanced large model trained with preference optimization and long-horizon interactive rollouts, producing a general policy that exhibits strong crossenvironment competence in web tasks, games, and interactive reasoning. The model benefits heavily from scale, both data scale and model capacity, and demonstrates that sufficiently large policies can generalize to unseen tasks with minimal task-specific engineering. However, π ⋆ 0.6 does not expose an explicit latent dynamics model, nor does it articulate how prediction or physical regularities structure the policy; its improvements originate primarily from reinforcement tuning on massive interaction data rather than structured cross-domain abstractions.

Our interactive physical reasoner. In contrast to the above lines of work, our motivation is explicitly *crossdomain*. Games differ dramatically in appearance, controls, and reward structures, yet we observe that many of them instantiate a small set of shared *physical and causal mechanisms*: gravity, collisions, momentum exchange, and contact-driven state changes. Crucially, these mechanisms tend to be expressed not in pixels but in the *action space*: actions are the agent's only means to interactively induce physical effects, and different domains often implement similar effects (jump, move, dash, interact) even under mismatched key layouts and visuals.

This suggests that a domain-invariant interface should be built not from raw controls but from a latent action space that captures *what the action does to the world*. Inspired by the intuition-based action extraction in Genie, we learn such a space—*PhysCode*—by encoding visual cues around hand–object–scene interactions and letting a VQ codebook automatically cluster domains whose actions induce similar physical outcomes. PhysCode therefore materializes the shared causal structure across heterogeneous games.

With a unified action space in hand, the next question is how to model dynamics. We evaluate both pixel-space and latent-space prediction in the ablation study [11.1,](#page-23-1) and consistent with V-JEPA–style findings, latent dynamics are substantially more efficient and more stable. However, a pure world model—even with accurate latent rollouts—remains confined to intuitive physics and short-horizon prediction; it lacks the high-level reasoning and cross-domain abstraction needed for complex tasks.

To close this gap, we bring in a pretrained VLM that already exhibits some cross-domain generalization in games, as evidenced by works like Game-TARS, but Game-TARS typically relies on costly human prompts and annotations. Instead, we aim to let the agent learn *directly* from interactive environments, using prediction inside the loop of action selection. Our IPR framework couples the two components through PhysCode: the VLM observes the current visual context and task description, then proposes candidate latent actions; the world model performs short-horizon rollouts in PhysCode space to forecast their physical consequences; and a GRPO-style objective reinforces VLM policies whose imagined futures are safe, physically consistent, and task-aligned. In this way, prediction is no longer just an exploration aid—it becomes an in-the-loop imagination mechanism that continuously sharpens the VLM's physical and causal reasoning across domains.

# <span id="page-14-0"></span>9. Benchmark Details

## 9.1. Game Sources

Retro games. We curate 863 open-source retro titles via STABLE-RETRO [\[47\]](#page-11-13), covering NES, SNES, GENESIS, SMS consoles, *etc*. These environments provide frameperfect emulation with discrete controller actions (D-pad directions, up to four face buttons, and start/select), and span a wide range of genres including *platformers*, *shooters*, *sports*, *racing*, *etc*. We focus on titles where motion and interaction are governed by clear physical rules (jumping under gravity, rigid-body collisions, projectile–enemy interactions, kinematics, *etc*.). For each game, we annotate the dominant *physical* mechanism (*e.g*., platformer gravity, rigid-body contact, projectile motion, kinematic logic) and *causal* structure (*e.g*., resource-accumulation objectives, score-based progression, survive-as-long-as-possible tasks, shortest-time-to-goal objectives, or unlocking mechanisms to obtain rewards). This diversity encourages agents to capture shared physical–causal regularities rather than overfit to title-specific sprites, textures, or control layouts.

HTML games. We additionally include 134 HTML/Canvas games collected from public web repositories, comprising both license-free and permissively licensed titles. Compared to retro consoles, these games rely heavily on mouse and mixed mouse+keyboard interaction (click, drag, hold, scroll), often with modern 2D physics engines (*e.g*., Box2D-style rigid-body dynamics). We instrument a Chromium-based browser with a lightweight JavaScript/Playwright wrapper to (i) capture rendered canvas frames at a fixed frame rate and (ii) log low-level input events (mouse position, button state, and keyboard presses) together with timestamps. When available, we also

![](_page_15_Picture_0.jpeg)

Figure 8. Overview of our 1,000 games, containing old-fashioned retro games, HTML/canvas games, and modern commercial games.

read a small set of game variables exposed in JavaScript (*e.g*., score, level, remaining lives) as auxiliary state. To unify control across heterogeneous HTML titles, we define a hybrid action space consisting of: (1) a discrete keyboard state vector (one-hot over pressed keys); (2) a continuous mouse position represented by normalized coordinates (x, y) ∈ [0, 1]2 , automatically scaled to each canvas size; and (3) mouse interaction flags, including left/right click, hold (for continuous dragging), and scroll. This representation covers the vast majority of HTML/Canvas interaction patterns while remaining compatible with the discrete and low-dimensional interfaces used by other environments in our benchmark.

Commercial games. Finally, we include 3 lightweight commercial games using properly licensed PC builds: POR-TAL 2, ASTRONEER, and MINECRAFT. We respect copyright and treat these games as black-box applications, and do not modify their binaries or access internal source code. Instead, the agent interacts through a virtual desktop: we capture RGB frames from a virtual display, and wrap human-like input via an emulator layer that maps keyboard events to discrete action indices and converts mouse movement/clicks into the same grid-based macro-actions used for HTML games. For real-time titles, we run the game in a frame-stepped mode: the environment advances one step only after an action is issued, and remains effectively paused while the agent performs reasoning, so decision latency does not affect in-game timing. To expose higherlevel semantic state of the game, each commercial game is paired with a pre-defined list of target objects and goals. We record rich-perspective gameplay videos for each title and uniformly sample ∼150 frames per game. On these frames, we manually annotate bounding boxes for all target categories (*e.g*., cubes, buttons, and portals in PORTAL 2), and use them to train a lightweight YOLOv11 [\[36\]](#page-10-27) detector. At run time, this detector provides object-centric cues on top of raw RGB, which we use to enrich prompts and evaluation without changing the underlying game binaries. Across retro, HTML, and commercial games, we use a unified logging interface to record consistent (xt, at, rt, xt+1) trajectories (rt from the extracted state and rules), enabling joint training and evaluation under a shared interaction format.

## 9.2. Data Collection and Preprocessing

Human gameplay recording. For each game, we collect 4 minutes of human interaction data from at least two independent players to balance individual skill biases. If the two players' performance exhibits a large score gap (typically > 1.5× difference), we recruit a third annotator to provide additional trajectories, ensuring stable coverage of feasible strategies and reducing overfitting to a single playstyle. Each trajectory is stored as a sequence of stepwise tuples

$$(x_t, a_t, r_t, x_{t+1}),\tag{9}$$

where xt is the rendered frame, at the human action, rt the instantaneous game reward (if available), and xt+1 the next frame.

Frame rates and control logging. For retro titles (NES, SNES, Genesis, SMS), we adopt the native system frame rate provided by the emulator and record the console's discrete button events. For HTML/Canvas and commercial games, we instead capture frames at a unified 60 FPS, together with full logs of keyboard events, mouse deltas, and console states, so that all sources can be brought to a common temporal resolution.

Semantic action and physics/causality annotation. During recording, annotators additionally provide

| Instructions<br>· Use the keyboard: WASD, Anow Keys, and IJKL<br>· Press R to reset the game<br>· Press Q to exit<br>0000000<br>0<br>· Use the zoom buttons below to change the screen size<br>[a,o,u,o,a,a,a,a,a,a}o]<br>999<br>F Game Stats<br>Key Mapping<br>Frame: 528<br>Action 6<br>Action 1<br>Action 5<br>Action 7<br>Episode: 0<br>Action 3<br>ection 8<br>Runtime: 17.9s<br>Actual FPS: 30.0<br>Keys pressed: None<br>Action size: 9<br>Stop Recording<br>图 Reset game<br>Action Semantics<br>Describe every action and save once finished. A confirmation prevents accidental overwrites<br>Action 1 semanticos (Rey. A. vector JO, future p.O.O.OLOLO(1<br>coon Z semantos (Ary. 0.0.1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.<br>Action 3 semandos (Ricy. D., vector) 10,000, 1,0,0,000<br>Action 4 semaríBos Picy: [1, vector<br>Action 5 semarBos (Ary: L. vocal)<br>Diego W NINGS<br>1000000000<br>none<br>none<br>12.000 / 0.0 0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0<br>LO.O.Q.Q.D.D.D.D.D.O.D.11]<br>000000000<br>none<br>none<br>0000<br>Save Action Semantic<br>@ Prompt Editor<br>System Promot<br>You we an A2 agent playing Sytter (N5), a classic action game where you most ster alles, coach watch stage's objective.<br>Game Goal & Rules<br>- Push through the current stage while Reeping your character alive - Defeat or evade enemies and projectiles encountered on screen | · Use halpful Stems, wespons, or powerse platforms and hazards · Use novement and abilities to traverse platforms and hazards · Place the victory condition on defeat the boss<br>Artion Space<br>Save Prompt<br>Game Metadata<br>essistent<br>ride-view<br>contact |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                     |

Figure 9. Overview of our game-recording website tools.

lightweight semantic tags for each short action segment. These tags describe both *what* characters are doing: they include action semantics (*e.g*., *jump*, *dodge*, *charge*, *aim*, *grab*), local physical principles (*e.g*., *gravity-driven fall*, *sliding under friction*, *momentum carry-over*), and simple causal relations (*e.g*., *hit switch* → *open door*, *push object* → *block hazard*), as well as short goal/instruction snippets describing the intended skill or sub-task. These semantics are later used in Sec. [5.4](#page-6-2) in the main paper as grounding signals when inducing semantics-aware actions.

Data preprocessing. To ensure uniform sequence quality across heterogeneous sources, we apply a series of preprocessing steps. First, we normalize time intervals: retro games provide fixed-step transitions through the emulator, while HTML and AAA titles may exhibit variable render intervals. We resample all trajectories to an aligned 60 Hz timeline and interpolate missing states when necessary, so that downstream models can assume a fixed time step. Second, we remove non-interactive segments such as cutscenes, loading screens, menus, and extended full-idle periods. These segments are automatically detected using simple motion statistics and input-entropy thresholds over recent frames and key/mouse events. Third, we rebalance idle or no-op periods: players often hold still or wait for environmental cycles, which would otherwise dominate the dataset. We therefore downsample long idle windows (*e.g*., keeping only 1 out of every k idle frames) while explicitly preserving the beginning and end of each idle episode to maintain temporal context. Finally, we apply action smoothing and deduplication: for mouse movement and other analog-like controls, we smooth out small jitter to avoid spurious micro-movements; for discrete actions, we collapse repeated no-ops or very short flicks that do not meaningfully change the game state.

## 9.3. Evaluation Metrics

Survival. measures the average number of environment steps an agent survives before an irreversible failure (*e.g*., losing all lives, falling into a death pit, running out of health, or entering a terminal game-over state). It captures the agent's ability to avoid risk, prevent collisions, and keep the episode alive.

Game horizons vary widely: in some titles a random policy dies within tens of steps, while in others it can wander for thousands. To obtain comparable scores, we derive a per-game *step scale* from the order of magnitude of a random policy's lifetime. For each game m, we estimate L (m) rand = E[stepsrand], and define H(m) = 10⌊log10 L (m) rand ⌋+1 . (10)

Given an agent with average lifetime L (m) agent = E[stepsagent], the normalized score is

$$\text{SurvivalScore}^{(m)} = \frac{L_{\text{agent}}^{(m)}}{H^{(m)}}.\tag{11}$$

Here H(m) acts as a game-dependent "step unit" (*e.g*., 100, 1000, 10000), keeping survival values in a comparable range without directly normalizing by the exact random baseline.

Curiosity. is designed to capture how broadly an agent explores the environment, beyond merely staying alive. We measure exploration as the *area* of the state space that an agent visits, computed in a learned representation space using MAGNIPY. Concretely, we subsample frames from each evaluation episode and embed them with a pretrained vision encoder CLIP to obtain feature vectors {ft}. We then apply MAGNIPY [\[2,](#page-9-15) [37\]](#page-10-20) to these features to estimate the volume of the region covered by the agent's trajectory: MAGNIPY treats each feature as a point in the embedding space and approximates the union of local neighborhoods around these points, yielding a scalar coverage score that increases when the agent visits new, diverse states and saturates when it revisits already explored regions. We compute this coverage per episode and average across episodes for each game.

Utility. measures progress toward explicit task goals, such as maximizing score, winning matches, or completing puzzles. Because different games expose different reward signals, we unify them into a scalar *game score* before normalization. In practice, our score types include: (i) raw in-game numerical scores for arcade-style titles; (ii) binary or fractional success indicators for win/loss and puzzle-completion tasks; (iii) time- or step-based objectives where finishing earlier yields a higher score (we invert and rescale time so that "faster is better"); and (iv) resource-based objectives (*e.g*., items collected, checkpoints reached) that reflect underlying causal goals such as *collect resources to unlock new areas* or *clear all enemies to progress*. To compare utility across games, we report a human-normalized score (HNS). For each game, we measure the average score of a random policy, scorerand, and the average score of human players, scorehuman. Given an agent with average score scoreagent, we define

$$\text{UtilityScore} = \frac{\text{score}_{\text{agent}} - \text{score}_{\text{rand}}}{\text{score}_{\text{human}} - \text{score}_{\text{rand}} + \varepsilon},\tag{12}$$

optionally clipped to a reasonable range for robustness. A value of 0 indicates random-level performance, 1 roughly corresponds to human-level performance, and values above 1 reflect super-human success on the game's causal objectives.

# <span id="page-17-0"></span>10. Implementation Details

## <span id="page-17-1"></span>10.1. PhysCode

Inputs and temporal windowing. Given a gameplay video with per-step controls, we construct short clips of length T=8. For each time index t, we form a triplet (xt, xt+∆, yt), where xt and xt+∆ are RGB frames and yt is a lightweight textual description of the executed control (*e.g*., "move right and jump"). We extract three cues: (i) DINOv3 appearance features ft, ft+∆ =ϕDINO(xt), ϕDINO(xt+∆) from the final patch tokens (global-pooled to a single 1024-d vector), (ii) dense optical flow ut = Flow(xt, xt+∆) computed by a FlowNetstyle network and downsampled to match the DINOv3 patch grid, and (iii) semantic embeddings et =ϕT5(yt) from a frozen T5 encoder (we use the [CLS] token as a 768-d vector). For efficiency, we precompute ft, ft+∆ and ut offline and only store the compact intermediate representations.

Gated modality fusion. To form a physics-centric token at time t, we first project each modality to a shared ddimensional space (d=512 by default):

$$\tilde{f}_t = W_f f_t, \quad \tilde{u}_t = W_u \operatorname{Pool}(u_t), \quad \tilde{e}_t = W_e e_t, \quad \text{(13)}$$

where Pool(·) is a spatial average pooling over the flow field. A small gating MLP g(·) outputs unnormalized gates (αf , αu, αe) conditioned on the concatenation [ ˜ft; ˜ut; ˜et]. We then form normalized gates via a softmax:

$$w_m = \frac{\exp(\alpha_m)}{\sum_{m' \in \{f, u, e\}} \exp(\alpha_{m'})}, \quad m \in \{f, u, e\}, \quad (14)$$

and obtain the fused representation

$$h_t = w_f \tilde{f}_t + w_u \tilde{u}_t + w_e \tilde{e}_t. \tag{15}$$

To avoid over-reliance on privileged motion cues, we apply *flow dropout* with probability p=0.5: when dropped, the flow feature u˜t is replaced by zero and the gates are renormalized over {f, e}. We further add an ℓ1 penalty λgateP t P m|wm − w¯m| to discourage degenerate singlemodality solutions, where w¯m is a uniform prior.

Spatio-temporal encoder and codebook. A spatiotemporal encoder Eψ maps the fused sequence {ht−k} T −1 k=0 to a continuous latent zt ∈ R d . We instantiate Eψ as a lightweight 6-layer Transformer with hidden size d=512, 8 attention heads, and a temporal positional embedding; only the last token (corresponding to t) is used for code assignment. We maintain a VQ codebook C = {ck} K k=1 with K=256 codes of dimension d, updated with EMA. The continuous latent zt is quantized to the nearest entry

$$a_t = \arg\min_{k \in \{1, \dots, K\}} \|z_t - c_k\|_2^2, \qquad \hat{z}_t \equiv c_{a_t}, \qquad (16)$$

and an *action* is defined as a short sequence a LAT t = ⟨ct,1:L⟩ by taking a sliding window of L consecutive indices (we use L=4 by default). The sequence representation is obtained by average pooling the corresponding embeddings {cct,ℓ } L ℓ=1.

Training objective and prediction head. Given (ft, ft+∆, ht), the decoder Dψ predicts the future feature ˆft+∆ = Dψ(ft, zˆt). We use a standard VQ-VAE loss with a feature-prediction target:

$$\mathcal{L}_{\text{LA}} = \left\| \left| \hat{f}_{t+\Delta} - f_{t+\Delta} \right\|\right\|_2^2 + \beta \left\| \text{sg}[z_t] - \hat{z}_t \right\|_2^2 + \gamma \left\| \left| z_t - \text{sg}[\hat{z}_t] \right\|_2^2,\tag{17}$$

where sg[·] denotes stop-gradient and (β, γ) are codebook and commitment weights (set to 0.25 and 0.25 respectively). We additionally attach a light temporal head that predicts ∆ft+∆ = ft+∆ − ft from zˆt, encouraging codes to align with dynamical changes rather than static appearance.

Optimization and data usage. PhysCode is pretrained on the entire 1,000+ game corpus. We randomly sample 4-minute human trajectories per title and extract (xt, xt+∆, yt) with ∆ ∈ {1, 2, 4}, balancing short- and medium-term dynamics. We train for 500k steps with AdamW (learning rate 1 × 10−4 , weight decay 0.05, cosine schedule with 5k warmup), batch size 1024 clips, and gradient-norm clipping at 1.0. DINOv3, FlowNet, and T5 encoders are frozen; only the fusion module, Transformer, codebook, and decoder are learned. We found that smaller K (*e.g*., 128) collapses dynamics from distinct physics into shared codes, while much larger codebooks (K≥2048) hurt sample efficiency and lead to under-used codes.

Inference-time usage. At test time, optical flow is not available. We therefore disable the flow gate by fixing wu=0 and renormalizing over {f, e}, and reuse the same Eψ and codebook to obtain at from appearance+semantics only. The resulting discrete tokens form a temporally predictive vocabulary that (i) clusters trajectories with matched physics (*e.g*., gravity+contact) and (ii) stays separable under physics shifts, and are used as the shared action interface for both the world model and the VLM in IPR.

## 10.2. Interactive Physical Reasoner

We detail the three stages of IPR and the training protocol used in our experiments.

Stage 1: PhysCode pretraining. IPR builds on the PhysCode vocabulary described in Sec. [10.1.](#page-17-1) We first pretrain PhysCode on human gameplay across all 1,000+ games. Environments are sampled uniformly over titles and replay segments, and we enforce a balanced mixture over physical mechanisms (gravity, projectile, contact, etc.) to avoid overfitting to a single physics family. The resulting codebook and encoder are frozen for all subsequent stages.

Stage 2: Latent-conditioned world model with a critic. Given fixed PhysCode indices, we replace raw controls by latent action tokens. For each transition (ft, at, rt, ft+∆) we embed at into an action embedding e a t ∈ R d , concatenate with the current feature, and feed into a feature-level predictor Pθ:

$$(\hat{f}_{t+\Delta}, V_{\theta}(f_t, a_t)) = P_{\theta}([f_t; e_t^a]),\qquad(18)$$

where Vθ is a scalar value head sharing all but the last layer with the feature predictor. We implement Pθ as a 8-layer Transformer over short latent trajectories (length H) to capture multi-step interactions; during training, we unroll on real data segments of length H=5.

World model training is split into two phases: (i) a pure prediction phase with

$$\mathcal{L}_{\text{pred}} = \left\| f_{t+\Delta} - f_{t+\Delta} \right\|_1,\tag{19}$$

using only pre-collected trajectories and no reward information, followed by (ii) a value-learning phase, where we freeze the dynamics layers and only train the critic head using a TD-style loss

$$\mathcal{L}_{\text{value}} = \ell_Q \Big( V_\theta(f_t, a_t), \ r_t + \gamma \max_{a'} V_{\theta^-}(f_{t+\Delta}, a') \Big), \tag{20}$$

with a slowly updated target network θ −. This separation stabilizes learning: the dynamics focus on physicsconsistent feature evolution, while the critic adapts to levelspecific reward scales.

Stage 3: VLM alignment to PhysCode. We adopt Qwen3-VL-8B as the backbone and extend its tokenizer with K special PhysCode tokens {⟨PC k⟩}K k=1. Each PhysCode index at is mapped to its corresponding token, enabling the VLM to produce latent actions as part of its normal autoregressive decoding.

We first perform a perception–action alignment stage on 10k human frame–action pairs. For each pair (xt, aLAT t , g), where g is a textual goal or instruction, we format the input

![](_page_19_Figure_0.jpeg)

Figure 10. Distribution of *PhysCode* in different game domains. Some action codes share across games, typically move right, jump, while others are separated according to different physical domains.

as an interleaved image–text prompt and the target as the PhysCode sequence:

$$\{\mathsf{IMG}\left(x_{t}\right)\}\quad\text{``}\mathsf{V}\odot\mathbbm{1}\text{:}\quad g\prime\prime\prime\rightarrow\langle\mathsf{PC}_{\mathbf{c}_{t,1}}\rangle\ldots\langle\mathsf{PC}_{\mathbf{c}_{t,L}}\rangle\ldots$$

We train with a standard teacher-forced cross-entropy loss only on the PhysCode tokens, keeping most of the language parameters close to their initialization via a small learning rate and weight decay. This stage teaches the VLM to (i) parse visual context, (ii) understand goals, and (iii) output correctly structured PhysCode sequences.

Stage 4: Prediction-reinforced GRPO. After alignment, we place the world model in the loop and train the VLM with GRPO using imagined rollouts. At each real environment step:

- 1. Encode the current frame xt to ft using the same DI-NOv3 encoder as in PhysCode.
- 2. Condition Qwen3-VL on xt and the current task prompt g, and *sample* B candidate latent action sequences {a (b) t } B b=1 (we use B=8, temperature 0.7, and topp=0.9).
- 3. For each candidate a (b) t , unroll the world model for H steps in feature space, obtaining a predicted return Rˆ (b) t from the critic head (discount factor γ=0.99).
- 4. Normalize returns within the candidate set to compute advantages A(b) = (Rˆ(b) − R¯)/(σR + ε).

- 5. Update the VLM with the GRPO objective

$$\begin{split} \mathcal{L}_{\text{GRPO}} &= -\frac{1}{B} \sum_{b=1}^{B} A^{(b)} \log \pi_{\phi}(a_t^{(b)} \mid x_t, g) \\ &+ \beta_{\text{KL}} \, \text{KL}(\pi_{\phi}(\cdot \mid x_t, g) \parallel \pi_{\phi_0}(\cdot \mid x_t, g)), \end{split} \tag{21}$$

where πϕ0 is the initial aligned VLM and βKL controls a conservative trust region.

We interleave real environment interaction and imagination-based updates in a 1:k ratio (one real step followed by k=4 imagination-only updates sampled from a replay buffer of recent contexts), which significantly improves data efficiency.

Inference and control routing. At test time, the world model remains in the loop but no longer updates. Given (xt, g), the VLM proposes B candidate PhysCode sequences as during training; the world model scores them via short-horizon imagination, and we execute the highestscoring candidate. A lightweight router Tenv maps the selected PhysCode sequence to environment-specific controls (keyboard/mouse macros or gamepad buttons) using a pergame lookup table learned from human trajectories and short calibration episodes. This keeps the reasoning and prediction in a unified latent space while adapting only a small mapping layer to each new game.

Overall, these stages realize IPR as a *predictionreinforced reasoning* loop: PhysCode provides a physicsorganized latent action interface, the world model supplies imagination and value estimates in this interface, and the VLM is continually refined to prefer actions whose imagined consequences lead to safer survival, broader exploration, and higher utility.

## 10.3. Exp 1: PhysCode Validation Setup

Data and model implementation. To investigate how different action spaces influence the learning of shared physical dynamics across heterogeneous environments and their ability to generalize to unseen games, we curate a representative subset of 200 games from our benchmark. For each game, we collect a dataset of 1 million frames paired with ground-truth actions generated by a random policy. We employ V-JEPA 2-AC [\[4\]](#page-9-2) and GenieRedux [\[53\]](#page-11-20) as the backbone world models. For V-JEPA 2-AC, we first train a ViT-L image encoder from scratch on the combined 200-game dataset (refer to Table 3 in the main paper for encoder ablations). We then post-train the predictive components conditioned on three inputs: (i) the previous frame's image latent zt−1, encoded from the raw pixel frame; (ii) the previous action at−1, the representation of which varies by experimental setting (detailed below); and (iii) an auxiliary state vector st−1, which is set to a zero vector for all experiments in this section.

Action conditioning variants. The core variable in this experiment is the representation of the action input at−1. We compare four distinct configurations:

- 1. Keyboard (raw shared). We train a single model jointly across all games using raw control inputs. We determine the maximum button configuration size within this 200-game domain (Dmax = 12) and pad the multi-hot vectors of simpler controllers with zeros to match this dimension. This represents a naive union of hardware interfaces, where all inputs are normalized to a fixed 1 × Dmax vector.
- 2. Language (semantic shared). We construct a unified semantic action space to resolve the aliasing of raw keys (*e.g*., key A may trigger Jump in one game but Attack in another). We manually annotate the function of every button in every game using natural language and create a superset of all unique semantics, resulting in a global semantic vector of size Dsem = 173 (covering actions such as move left, jump, shoot). We generate a static mapping matrix for each game that projects its raw multi-hot vector into this sparse, 173-dimensional global vector.
- 3. PhysCode (Ours). We use the discretized latent codes derived from our proposed method. As described in Sec. [3.2](#page-3-1) of the main paper, raw actions are replaced by quantized indices at ∈ {1, . . . , K} from the learned codebook (we set K = 256). These indices are projected via a learnable embedding layer before being fed into the world model. Unlike language, this aligns actions based on physical dynamics (*e.g*., momentum, contact) rather

than human-defined semantics.

- 4. Ad-hoc (Single-game expert). We train a separate world model for each game individually. The input at−1 is the raw game-specific multi-hot vector with dimension 1× Dgame. This serves as an oracle upper bound for intra-game prediction quality but lacks any cross-game generalization capabilities.
Evaluation protocols. We evaluate these representations across three regimes, corresponding to the results reported in Table 1 of the main paper:

- Confusion test (joint training). We train a single model on the union of all 200 games and evaluate it on the training set (Table 1a). This measures the model's ability to handle conflicting control schemes (interface aliasing) without performance degradation.
- Leave-n-out transfer. We then evaluate the same model from the joint training phase on a separate, held-out set of 10 unseen games that were not part of the training data (Table 1b). This protocol tests true zero-shot generalization to entirely new environments using the shared action interface.
- Physics-conditioned transfer. To disentangle semantic generalization from physical grounding, we categorize games into four dominant mechanisms (*e.g*., *Gravity*, *Inertia*). We train specialized models on subsets of 20 games sharing a single mechanism (using the Languagealigned model as a baseline) and evaluate them on heldout games that either match or mismatch the training physics (Tab. 1c in the main paper). This verifies whether the action space captures reusable physical laws or merely memorizes semantic bindings.

## 10.4. Exp 2: One Model for All Games

RL. To instantiate a unified, multi-task model for both PPO and DQN algorithms, we employ a dynamic parameterization scheme. This is achieved by integrating *task embeddings* with a *hypernetwork* architecture. The core idea is to condition the parameters of the policy and value functions directly on the task identity, enabling a single model to specialize its behavior across different tasks.

The training procedure for a given task is as follows:

- 1. Data collection: Agent interacts with the environment to collect trajectory data τ = (st, at, rt, st+1).
- 2. Task conditioning: The current task ID z is mapped to a continuous vector representation ez (the task embedding).
- 3. Parameter generation: The task embedding ez is fed into a hypernetwork hϕ, which outputs the parameters θz for the target network:
	- For DQN: θz defines the weights of the Q-network.
	- For PPO: θz defines the weights of the actor π(a|s; θz) and critic V (s; θz) heads.
- 4. Loss computation & optimization: The agent's loss

(*e.g*., TD-error for DQN, clipped surrogate objective for PPO) is computed using the generated parameters θz. Gradients are backpropagated through both the primary loss and the hypernetwork hϕ to update the shared parameters ϕ.

VLM. We evaluate several strong vision–language policies as prompt-only baselines: GPT-5 and GPT-4o [\[44\]](#page-10-21) (closed-source, accessed through their official APIs), and two high-capacity open-source models, Qwen3-VL-30B-A3B and Qwen2.5-VL-72B [\[5\]](#page-9-16). All models are used in a purely zero-shot manner without any task-specific finetuning.

Following the interaction format defined in *videogamebench* [\[76\]](#page-12-11), each query consists of a structured prompt with four components: (i) *Game overview* describing the environment type (NES/SNES/Genesis/HTML), the available control interface, and major causal rules (*e.g*., hazards, damage, reward triggers) to facilitate understanding the target; (ii) *Human-annotated action space*, where we provide the discrete actions extracted from human gameplay or emulator documentation, normalized to a canonical textual form; (iii) *Task and goals*, summarizing human-labeled objectives (survival, avoiding collisions, collecting items, defeating enemies, reaching exits); (iv) *Step context*, including the current frame, a brief history of recent actions, and (when available) high-level semantics such as "the platform collapses after stepping on it" or "the projectile follows a parabolic trajectory".

This format allows each VLM to reason with explicit physics- and causality-related cues instead of relying solely on one-frame appearance.

Required output structure. Each model is instructed to always return three fields: THOUGHT (free-form situational analysis), MEMORY (persistent long-horizon notes), and ACTION (the chosen control from the provided action space). We parse only the ACTION field and execute the corresponding environment action verbatim. The remaining fields are logged for qualitative analysis and do not affect control.

Inference loop. At every environment step t, the current frame xt, game description, and the last L steps of history are inserted into the template. The model generates autoregressively, and the final ACTION: [XXX] token is mapped directly to the environment's action interface. All baselines use identical prompting templates to ensure fairness across models.

#### Example Prompt for VLM Baselines

(1) System Prompt. You are an AI agent playing *BillAndTedsExcellentGameBoyAdventure* (Game Boy), a classic action game where you must stay alive, overcome enemies, and reach each stage's objective.

#### (2) Game Goal & Rules.

- Push through the current stage while keeping your character alive.
- Defeat or evade enemies and projectiles encountered on screen.
- Collect helpful items, weapons, or power-ups along the way.
- Use movement and abilities to traverse platforms and hazards.
- Meet the victory condition or defeat the boss to advance.

#### (3) Action Space.

Your action is defined by a 9-element binary list (1 = pressed, 0 = not pressed). Multiple buttons may be pressed simultaneously.

#### Index Button Meaning

|  | 0 | B      | Attack with weapons or sprint when held           |
|--|---|--------|---------------------------------------------------|
|  | 1 | –      | Unused slot – keep at 0                           |
|  | 2 | SELECT | Open sub-menus or cycle through inventory/options |
|  | 3 | START  | Pause the game or open the main menu              |
|  | 4 | UP     | Move up, climb, or aim upward                     |
|  | 5 | DOWN   | Move down, crouch, or drop through platforms      |
|  | 6 | LEFT   | Move or face left                                 |
|  | 7 | RIGHT  | Move or face right                                |
|  | 8 | A      | Jump or confirm actions                           |
|  |   |        |                                                   |

#### (4) Action Combination Examples.

- Move right: [0,0,0,0,0,0,0,1,0]
- Move left: [0,0,0,0,0,0,1,0,0]
- Jump in place: [1,0,0,0,0,0,0,0,0]
- Jump while moving right: [1,0,0,0,0,0,0,1,0]
- Trigger a special ability: [0,0,0,0,0,0,0,0,1]
- Climb or enter upward path: [0,0,0,0,1,0,0,0,0]

#### (5) Output Format.

You *must* respond with only one valid JSON object in the exact format below. Do not include any other text, explanations, or markdown formatting. "thought": "reasoning about the current game state, strategy, and why you choose this action.", "action": "press key", "action input": [1,0,0,0,0,0,0,0,0], "memory": "note about your current status."

#### (6) Critical Directives.

- Fixed Length: The array length must be exactly 9.
- Binary Elements: Elements must be either 0 or 1.
- Concurrency: Multiple 1s are allowed.
- Think Then Act: Analyze internally, and output the JSON format above.

#### (7) User Prompt.

Analyze the current gameplay frame and output the JSON format above.

World model. We implement a latent-level video predictor based on V-JEPA2 / Genie-style architectures. Given (zt, at), the model predicts (ˆzt+1, rˆt) using masked temporal transformers. It performs 5–10 step rollouts for imagined optimization.

Genie. Our Genie implementation includes the following key enhancements over the baseline GENIEREDUX:

- Increased visual fidelity: The original model operated on low-resolution (64 × 64) inputs and reconstructions, which we identified as a source of significant information loss due to aggressive downsampling. To mitigate this, we increased the input and output spatial resolution to 224 × 224, thereby preserving finer-grained visual details crucial for complex environments.
- Multi-action embedding: The baseline GENIEREDUX was limited to a small, fixed set of five semanticallyaligned, one-hot encoded actions. To support a broader and more flexible action space, we designed a novel action processing module. This module takes a multidiscrete action vector (*e.g*., [0, 1, 0, 0, 0, 1, 0, 1, 0]), identifies the indices of activated actions, performs embedding lookups for each active index, and aggregates the resulting embeddings via mean pooling to produce a unified action representation for the world model.
- Semantic action space alignment: We extended the action space into a larger, semantically structured space. Furthermore, we performed cross-game semantic alignment on this space, enabling the model to interpret and utilize actions consistently across different tasks and environments.

DreamerV3. We adopt the official DreamerV3 architecture [\[27\]](#page-10-23), utilizing a shared Recurrent State Space Model (RSSM) [\[18\]](#page-10-28) backbone with categorical latent states to capture universal physical dynamics. To handle the distinct objectives and reward scales across 1,000+ games (*e.g*., sparse survival signals v.s. dense score accumulation), we employ a *multi-head* architecture: while the visual encoder and recurrent dynamics model are shared across all titles, we instantiate separate Actor and Critic heads for each game. We rely on symlog predictions to normalize reward magnitudes and train the shared backbone jointly on all environments.

V-JEPA 2. Following the V-JEPA 2-AC formulation [\[4\]](#page-9-2), we employ a non-generative world model that predicts in the representation space rather than reconstructing pixels. The model is trained in two phases: First, a ViT-L video encoder is pre-trained on our dataset of game frames using the self-supervised masked modeling objective, learning to predict latent representations of masked regions. Second, we freeze the encoder and post-train a latent Action-Conditioned (AC) predictor on offline trajectories collected by a random policy. This predictor learns to autoregressively forecast the latent representations of future frames conditioned on the context and action sequence, capturing physical dynamics in the abstract feature space.

IL. We include Behavior Cloning (BC) on human frame–action pairs and SFT on VLM, where VLM predicts latent actions from visual tokens.

ACT-BC. We implement a standard behavior-cloning visuomotor transformer following the ACT paradigm. Each training sample consists of (xt−H:t, at), where xt−H:t are the last H=4 RGB frames and at is either the discrete action vector or PhysCode latent action. Frames are resized to 128×128 and encoded by a lightweight 3-layer ConvNet, whose output tokens are fed into a 12-layer transformer. The model predicts at with a cross-entropy loss and is trained jointly on all games without any domain-specific parameters, following the "single policy for all games" setting used in ACT.

Qwen3-VL-8B-BC. We also evaluate a large-model BC baseline using Qwen3-VL-8B. At each timestep, we construct a simple prompt containing: (1) the current frame xt (encoded by the model's native vision encoder), and (2) a fixed instruction template like prompts in the VLM part. To avoid generating free-form language, we disable chain-of-thought decoding and restrict the output vocabulary to the action only. BC supervision is applied using next-token prediction: the ground-truth action is appended after a <action> tag, and the model is trained to reproduce it exactly. We do not use memory tokens, history text, or reasoning steps—Qwen3-VL operates purely as a frameto-action predictor under teacher forcing.

Training. Both ACT-BC and Qwen3-VL-8B are trained on the same human trajectories used throughout the paper. We use AdamW with a learning rate of 2×10−4 for ACT and 1×10−5 for Qwen3-VL fine-tuning, batch size 64, and train for 300k steps. As shown in Sec. [10.6,](#page-23-2) lowquality BC supervision may override pretrained priors and degrade long-horizon performance, making these IL baselines strong short-horizon solvers but weak in cross-domain reasoning.

## 10.5. Exp 3: Zero-shot Transfer to Unseen Games

We study Game-to-Unseen (G2U) transfer by splitting the full game pool into a training pool and a held-out target set TU . The games in TU (20 titles by default) are excluded from *all* training stages, including PhysCode pretraining, world-model learning, and IPR optimization.

From the remaining games, we construct stratified subsets {SN } of increasing size N (from tens to several hundred games). Each SN approximately matches the full pool in terms of annotated physical and causal mechanisms (*e.g*., gravity-driven platformers, projectile shooters, frictional top-down motion, rigid-contact puzzles), control interfaces (NES/SNES/Genesis/SMS/HTML), and visual/genre styles. This stratification keeps domain bias roughly fixed so that variations in performance mainly reflect the amount and diversity of interactive experience.

For each subset size N, we train a full IPR pipeline under a fixed configuration. PhysCode is pretrained on SN with the same VQ-VAE setup as in the main paper (codebook size K=512, identical encoder/decoder, flow dropout p=0.5) and never sees data from TU . The world model is then trained on trajectories from SN with a fixed architecture and rollout horizon, without any game-specific tuning. Finally, we attach the learned PhysCode interface and world model to a Qwen3-VL-8B backbone and optimize IPR with GRPO on multi-step latent rollouts. Learning rate, batch size, rollout length, GRPO sampling temperature, and other optimization hyperparameters are kept identical across all N.

Zero-shot evaluation is performed *only* on the unseen titles in TU . For a given N, we freeze PhysCode, the world model, and the IPR policy, and directly deploy the agent to these games without fine-tuning, reward re-scaling, or game-specific calibration. We reuse the same PhysCodeto-environment router as in the seen games, and adopt a fixed decoding temperature and sampling scheme at inference. For each unseen game, we roll out full episodes up to the native time limit or termination, and compute the three metrics defined in the main paper: (normalized survival time), (normalized exploration coverage), and (normalized task reward). Reported scores are averaged over all episodes and all 50 games in TU .

Under this protocol, performance on all three objectives improves monotonically with N, with larger relative gains at small N and continued, though diminishing, improvements as more diverse games are added. This supports our claim that G2U behavior is driven by exposure to varied physical and causal environments rather than game-specific tuning.

## <span id="page-23-2"></span>10.6. Exp 4: Prediction-Based Interactive Reasoner

We ablate four components on a shared Qwen3-VL-8B backbone with the PhysCode interface: world-model prediction, GRPO-based group-wise optimization, PPO-based optimization, and behavior cloning (BC) on 10k human frame–action pairs. We construct a training game set with 200 games, containing all kinds of games. And we then construct one validation game set with 20 never-trained games, balanced by difficulty and novelty. Adding WM prediction and GRPO on top of the pretrained VLM consistently improves survival, curiosity, and utility, indicating that imagination-guided updates strengthen long-horizon reasoning. In contrast, inserting a low-quality BC stage before RL hurts performance: the model overfits to suboptimal demonstrations, its original pretrained reasoning is partially overwritten, and even after GRPO or PPO on optimizations, it underperforms the no-BC variant.

<span id="page-23-3"></span>

| Agent Type   | L1 ↓   | MSE ↓  |  |  |
|--------------|--------|--------|--|--|
| Pixel-based  | 0.0259 | 0.5622 |  |  |
| Latent-based | 0.0195 | 0.3821 |  |  |

# <span id="page-23-0"></span>11. Additional Ablation Study

## <span id="page-23-1"></span>11.1. Value Prediction in Latent v.s. Pixel Space

To justify our design choice of performing imagination and planning within a compact latent space, we investigate the fidelity of reward prediction when operating on learned representations versus raw sensory inputs. We frame this as a value estimation task using Temporal Difference (TD) learning on offline datasets. Specifically, we curate a dataset of trajectories generated by a random policy and train a value function to predict the expected return (TD target) from a given state-action pair.

We compare two distinct architectures: (1) Pixel-based Predictor, a convolutional network that takes the raw RGB frame xt and action at as input to directly regress the value; and (2) Latent-based Predictor, a lightweight MLP that operates on the frozen visual embedding zt (extracted via the V-JEPA ViT-L encoder used in our main pipeline) concatenated with at.

We evaluate both models on a held-out test set using Mean Squared Error (MSE) and L1 loss against the computed TD targets. As shown in Table [4,](#page-23-3) the latent-based model significantly outperforms the pixel-based baseline.

This substantial performance gap highlights the difficulty of extracting sparse reward signals directly from highdimensional pixel space, which is often dominated by highfrequency noise, shifting textures, and task-irrelevant background details. The pixel-based model must simultaneously learn to parse visual geometry and estimate value, leading to slower convergence and overfitting to visual nuisance. In contrast, the V-JEPA latent space—pretrained to capture structural and dynamical consistency—effectively filters out these distractions. It provides a compact abstraction of the physical state, allowing the value head to focus entirely on causal associations between states and rewards. This result empirically validates our architecture: performing reasoning and imagination in a semantic latent space is not only computationally efficient but also yields more accurate physical and value predictions than operating in raw pixels.

## 11.2. PhysCode Codebook Size

We ablate the PhysCode codebook size with K ∈ {32, 64, 128, 256, 512, 1024}. Our goal is twofold: (i) the codebook should be *compact enough* so that codes are effectively used, rather than wasted on rare patterns, and (ii) it should be *expressive enough* to separate distinct control

Table 5. Ablation on PhysCode codebook size K. Code usage is the fraction of codes visited on a held-out split; action separation measures the alignment between codes and human actions (higher is better).

| K    | Code usage (%) | Action separation |
|------|----------------|-------------------|
| 32   | 3.1            | 0.006             |
| 64   | 3.1            | 0.006             |
| 128  | 1.6            | 0.006             |
| 256  | 10.5           | 0.063             |
| 512  | 0.4            | 0.011             |
| 1024 | 0.5            | 0.021             |

behaviors and their induced physics.

For each K, we pretrain PhysCode under the same protocol and evaluate two properties: (1) *code usage*, computed as U = #main codes K on a held-out split, where *main codes* are those whose empirical usage exceeds 0.1% of all assignments, reflecting how effectively the codebook capacity is utilized; and (2) *action separation*, measuring the alignment between codes and human action labels (*e.g*., normalized mutual information between a LAT t and discrete key configurations).

We observe a clear trade-off as K varies. Very small codebooks (K ≤ 128) over-compress behavior: only a few codes are actually used, and they mix heterogeneous key patterns, leading to poor action separation. Extremely large codebooks (K ≥512) suffer from the opposite issue: capacity is badly under-utilized (less than 1% of codes are active), and similar behaviors get fragmented across many rarely visited entries. K = 256 strikes a favorable balance, achieving the highest code usage and a substantially stronger alignment with human actions, which in turn yields the best downstream performance. We therefore adopt K = 256 as the default codebook size in all main experiments.

## 11.3. Latent Encoder Pretraining

Our IPR's world model requires an effective visual encoder to ground its predictions in the visual dynamics of the environment. While V-JEPA 2 offers a powerful foundation pretrained on millions of hours of internet videos [\[4\]](#page-9-2), our work operates in the visually distinct domain of games. This introduces a potential domain gap, where features learned from real-world videos may not be optimal for capturing the specific appearance of game environments.

We compare three ViT-L encoder configurations, all followed by a V-JEPA 2-AC-style predictor trained on our game data: (1) a frozen, off-the-shelf pretrained encoder, (2) the same pretrained encoder fine-tuned on our game trajectories, and (3) a ViT-L encoder trained from scratch using only our game dataset.

The results in Table [6](#page-24-1) demonstrate a clear performance hierarchy. The frozen pretrained encoder performed the worst, confirming a significant domain gap. Fine-tuning of-

<span id="page-24-1"></span>Table 6. Ablation on ViT-L encoder configurations for the world model.

| Encoder Setup<br>Pretrained | Cosine ↑<br>0.8888 | MSE ↓<br>0.2223 | L1 ↓<br>0.3262 |
|-----------------------------|--------------------|-----------------|----------------|
| Fine-tuned                  | 0.8924             | 0.2150          | 0.2705         |
| Trained from Scratch        | 0.9891             | 0.0216          | 0.0758         |

fered a moderate improvement, but the best predictive accuracy was unequivocally achieved by the encoder trained from scratch on in-domain data. This indicates that for specialized visual domains such as retro games, a tailored feature extractor is more effective than adapting a generalpurpose one, as it avoids the potentially confounding inductive biases from out-of-domain pretraining.

# <span id="page-24-0"></span>12. Case Study

## 12.1. Experience-based Methods

Experience-based agents such as ACT and Qwen-BC show clear strengths in learning from human demonstrations, but also exhibit systematic limitations. ACT (Figure [11)](#page-26-0) benefits strongly from expert trajectories: it can extract effective strategies for difficult segments and achieves high scores on tasks with stable, low-variance dynamics. However, its imitation-heavy nature makes it prone to inheriting suboptimal human behavior and to degrading under environmental noise. Similarly, Qwen-BC (Figure [12)](#page-26-1) excels at reproducing high-difficulty actions with high fidelity and maintains very stable action sequences, yet its generalization is weak. When facing novel situations or imbalanced action distributions, the policy often collapses into passive idling or repetitive single-action loops. These behaviors collectively show that experience-based policies are powerful in familiar, lowvariance regimes but struggle to extrapolate, exposing the limits of purely demonstration-driven learning in interactive environments.

## 12.2. RL-based Methods

Reinforcement learning agents, such as PPO (Figure [13)](#page-27-0) and DQN (Figure [14)](#page-27-1), demonstrate distinct ability to master complex motor control and identify key environmental interactions. These models excel at discovering effective key combinations for simultaneous maneuvering and attacking, as well as exploiting environmental features like cover to advance game progression. However, their reliance on scalar reward signals leads to significant brittleness. As observed in the case studies, both PPO and DQN are prone to exploiting poorly shaped rewards, leading to degenerate strategies like "dying on purpose" or repetitive movement loops to farm points. Furthermore, as exploration rates decay, these agents frequently suffer from policy collapse, halting necessary exploration and failing repeatedly at identical game states due to a lack of semantic understanding.

# 12.3. Prediction-based Methods

World model approaches, represented by Dreamer (Figure [15)](#page-28-0), Genie (Figure [17)](#page-29-0), and V-JEPA (Figure [16)](#page-28-1), exhibit strong temporal stability and high action efficiency. These agents are characterized by risk-averse behaviors, prioritizing short-term safety and minimizing redundant inputs. V-JEPA, for instance, shows strategic capacity in utilizing terrain features for evasion. However, a critical limitation shared across these prediction-based methods is susceptibility to passivity. When value estimates become uncertain or immediate feedback is lacking, these models often collapse into inaction—idling or outputting zero vectors rather than initiating exploration. Additionally, they can develop biased policies that over-rely on simple heuristics, such as persistently moving in a single direction, failing to adapt when dynamic hazards require complex, non-linear responses.

## 12.4. Reasoning-based Methods

Large Vision-Language Models (VLMs), such as GPT-4o (Figure [18)](#page-29-1), GPT-5 (Figure [19)](#page-30-0), and Qwen3-VL-30B-A3B (Figure [20)](#page-30-1), introduce strong semantic reasoning capabilities in the control loop. These agents demonstrate proficiency in spatial navigation and target acquisition, successfully executing calculated jumps and neutralizing aerial threats through accurate planning. Despite these strategic strengths, they struggle with real-time situational awareness and reaction latency. The case studies reveal persistent weakness in handling fast-moving dynamic entities, particularly those approaching from behind or requiring rapid reflexes. This suggests that despite competent reasoning, a perception–action latency gap undermines their performance in high-speed adversarial settings.

## 12.5. Interactive Physical Reasoner

The Interactive Physical Reasoner (IPR) (Figure [21)](#page-31-0) agent distinguishes itself by predictive imagination. Unlike the purely reactive RL agents or the prediction-based models, the IPR agent can simulate the trajectories of falling hazards and incoming projectiles, allowing for precise evasion and dynamic maneuvering. However, this imaginative capability is computationally constrained. While effective in one-on-one interactions, the agent reveals vulnerabilities in high-density adversarial environments. When the visual scene becomes cluttered with multiple simultaneous threats, the agent's capacity to "imagine" can lead to failure. Although there are limitations, IPR can reach high performance through its imagination ability and interactive physical reasoning.

<span id="page-26-0"></span>![](_page_26_Figure_0.jpeg)

Figure 11. ACT Case Study. The figure highlights four representative behaviors of ACT: (1) Line 1 shows that ACT can solve difficult segments by leveraging human demonstrations and extracting effective strategies; (2) Line 2 illustrates that imitation enables high scores on tasks with stable, low-variance dynamics; (3) Line 3 reveals that ACT also absorbs human failure patterns, reproducing suboptimal attempted actions; and (4) Line 4 shows that its behavior is highly sensitive to environmental noise, often leading to unstable or inconsistent actions.

<span id="page-26-1"></span>![](_page_26_Figure_2.jpeg)

Figure 12. Qwen-BC Case Study. The figure illustrates four characteristic behaviors of the BC-trained Qwen agent: (1) Line 1 shows that the agent can faithfully reproduce high-difficulty actions; (2) Line 2 demonstrates its strong temporal stability and highly consistent action repetition; (3) Line 3 reveals its poor generalization to novel or perturbed situations; and (4) Line 4 shows its tendency to collapse into passive idling or a single repeated action when the action distribution is imbalanced.

<span id="page-27-0"></span>![](_page_27_Figure_0.jpeg)

Figure 13. PPO Case Study. The figure presents four typical behaviors of the PPO agent: (1) Line 1 demonstrates that PPO can learn effective action sequences, enabling the agent to simultaneously shoot while dodging bullets through rolling maneuvers; (2) Line 2 illustrates its capacity to not only acquire efficient key-press strategies but also identify primary movement directions that drive game progression; (3) Line 3 reveals that due to poorly shaped rewards, PPO may exploit design flaws by repeatedly moving forward and backward to farm progression rewards in a degenerate manner; and (4) Line 4 shows that as the exploration rate decays in later training stages, the agent nearly halts exploration, leading to a performance plateau and frequent failures at identical game states.

<span id="page-27-1"></span>![](_page_27_Picture_2.jpeg)

Figure 14. DQN Case Study. The figure presents four typical behaviors of the DQN agent: (1) Line 1 shows that it can correctly identify when specific actions should be executed; (2) Line 2 illustrates its ability to detect and exploit advantageous environmental features (*e.g*., using rocks as cover); (3) Line 3 reveals that poorly shaped rewards can lead the agent to adopt degenerate strategies, such as repeatedly "dying on purpose" when death yields positive reward; and (4) Line 4 shows that the agent may fall into meaningless repetitive actions, such as continuous jumping without purpose.

<span id="page-28-0"></span>![](_page_28_Figure_0.jpeg)

Figure 15. DreamerV3 Case Study. The figure illustrates four characteristic behaviors of the Dreamer agent: (1) Line 1 shows that Dreamer reliably exhibits risk-avoiding behavior and tends to choose actions that maximize short-term safety; (2) Line 2 demonstrates its strong temporal stability, often producing highly repetitive and consistent action sequences; (3) Line 3 reveals a biased policy that overrelies on a single heuristic—such as persistently moving left to evade enemies; and (4) Line 4 shows that the agent can easily collapse into inaction, remaining stationary when its value estimates become uncertain.

<span id="page-28-1"></span>![](_page_28_Picture_2.jpeg)

Figure 16. V-JEPA2 Case Study. The figure illustrates four representative behaviors of the V-JEPA agent: (1) Line 1 shows that the agent maintains high action efficiency with minimal redundancy, avoiding the ineffective key combinations often observed in other models; (2) Line 2 demonstrates its capacity for strategic environmental exploitation, such as utilizing terrain features (*e.g*., rocks) to evade hazards; (3) Line 3 reveals its vulnerability to collapse into passive idling by outputting zero vectors; and (4) Line 4 indicates that this susceptibility to inaction persists when immediate feedback is lacking, resulting in a failure to initiate necessary exploration.

<span id="page-29-0"></span>![](_page_29_Picture_0.jpeg)

Figure 17. Genie Case Study. The figure presents four key capabilities and limitations of our Genie-based world model: (1) Line 1 demonstrates enhanced motion trajectory prediction, enabling the agent to execute preemptive evasion maneuvers; (2) Line 2 reveals the emergence of strategic path planning, where the agent learns systematic navigation paths beyond reactive bullet avoidance; (3) Line 3 illustrates a critical model limitation: in environments with poor bullet reconstruction fidelity, the agent fails to develop shooting behaviors and defaults to purely defensive evasion strategies; (4) Line 4 highlights spatial reasoning deficiencies, where prediction inaccuracies in distance estimation lead to occasional falls from platform edges.

<span id="page-29-1"></span>![](_page_29_Figure_2.jpeg)

Figure 18. GPT-4o Case Study. The figure illustrates four char- acteristic behaviors of the GPT-4o agent. (1) Line 1 shows that the agent demonstrates effective target engagement and reaction speed, discharging projectiles to neutralize an aerial threat; (2) Line 2 highlights its proficiency in precise spatial navigation, executing a controlled jump to successfully land on the target platform; (3) Line 3 reveals a blind spot in situational awareness regarding rear-approaching entities, where the agent fails to evade the trailing aircraft, resulting in a fatal collision; and (4) Line 4 indicates a fundamental failure in basic obstacle avoidance, where the agent initiates a direct collision with a visible ground enemy rather than executing an evasive maneuver.

<span id="page-30-0"></span>![](_page_30_Figure_0.jpeg)

Figure 19. GPT-5 Case Study. The figure illustrates four characteristic behaviors of the GPT-5 agent. (1) Line 1 shows that the agent demonstrates accurate target acquisition and offensive capability, intercepting an aerial enemy to clear the path; (2) Line 2 highlights its proficiency in precision platforming and spatial navigation, executing a calculated jump to skip the enemies; (3) Line 3 reveals limitation in situational awareness regarding trailing threats, where the agent fails to evade a collision with an enemy approaching from the rear; and (4) Line 4 indicates susceptibility to delayed reaction times in combat scenarios, resulting in a failure to dodge or block an incoming projectile attack.

<span id="page-30-1"></span>![](_page_30_Figure_2.jpeg)

Figure 20. Qwen3-VL-30B-A3B Case Study. The figure illustrates four representative behaviors of the Qwen3-VL-30B-A3B agent: (1) Line 1 shows that the agent demonstrates spatial reasoning and planning, rotating and tucking the tetromino into a precise gap to maintain clean board; (2) Line 2 highlights its proficiency in high-frequency temporal control, executing a timed jump to pass the obstacle (the fire ring); (3) Line 3 reveals a limitation in processing dense visual clutter, where the agent fails to distinguish between terrain features and enemy projectiles, resulting in a fatal collision; and (4) Line 4 indicates a susceptibility to policy degradation in open environments, where the agent exhibits passive drifting behavior rather than actively targeting enemies or dodging incoming formations.

<span id="page-31-0"></span>![](_page_31_Picture_0.jpeg)

Figure 21. IPR Case Study. The figure illustrates four representative behaviors of the IPR agent: (1) Line 1 shows that the agent demonstrates precise reactive control, maneuvering to evade incoming projectiles; (2) Line 2 highlights its proficiency in dynamic environmental perception, allowing it to anticipate and dodge falling hazards (rocks); (3) Line 3 reveals vulnerability in rapid collision avoidance, where the agent fails to react to aerial threats (bats) (4) Line 4 indicates limitation in handling high-density adversarial environments, leading to an inability to evade when confronted by multiple simultaneous enemies.