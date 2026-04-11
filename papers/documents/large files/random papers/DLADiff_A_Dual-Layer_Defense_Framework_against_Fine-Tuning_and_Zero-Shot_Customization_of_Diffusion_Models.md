# PDF Document: Jia et al. - 2025 - DLADiff A Dual-Layer Defense Framework against Fine-Tuning and Zero-Shot Customization of Diffusion.pdf

**File Path:** Jia et al. - 2025 - DLADiff A Dual-Layer Defense Framework against Fine-Tuning and Zero-Shot Customization of Diffusion.pdf

**Processed Date:** 2026-02-10T18:16:41.952Z

**File Size:** 22865.49 KB

**Total Pages:** 14

**Extracted Pages:** 14

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3297

**Title:** DLADiff: A Dual-Layer Defense Framework against Fine-Tuning and Zero-Shot Customization of Diffusion Models

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

DLADiff: A Dual-Layer Defense Framework against Fine-Tuning and Zero-Shot
Customization of Diffusion Models
Jun Jia1 Hongyi Miao2 Yingjie Zhou1 Linhan Cao1 Yanwei Jiang1 Wangqiu Zhou3 Dandan Zhu4 Hua Yang1 Wei Sun4 Xiongkuo Min1 Guangtao Zhai1 1Shanghai Jiao Tong University 2Shandong University 3Hefei University of Technology 4East China Normal University
jiajun0302@sjtu.edu.cn
Abstract
With the rapid advancement of diffusion models, a variety of fine-tuning methods have been developed, enabling high-fidelity image generation with high similarity to the target content using only 3 to 5 training images. More recently, zero-shot generation methods have emerged, capable of producing highly realistic outputs from a single reference image without altering model weights. However, technological advancements have also introduced significant risks to facial privacy. Malicious actors can e-
xploit diffusion model customization with just a few or even one image of a person to create synthetic identities nearly identical to the original identity. Although research has begun to focus on defending against diffusion model customization, most existing defense methods target fine-tuning approaches and neglect zero-shot generation defenses. To address this issue, this paper proposes Dual-Layer AntiDiffusion (DLADiff) to defense both fine-tuning methods and zero-shot methods. DLADiff contains-
 a dual-layer protective mechanism. The first layer provides effective protection against unauthorized fine-tuning by leveraging the proposed Dual-Surrogate Models (DSUR) mechanism and Alternating Dynamic Fine-Tuning (ADFT), which integrates adversarial training with the prior knowledge derived from pre-fine-tuned models. The second layer, though simple in design, demonstrates strong effectiveness in preventing image generation through zero-shot methods. Extensive experimental results demonstrate -
that our method significantly outperforms existing approaches in defending against finetuning of diffusion models and achieves unprecedented performance in protecting against zero-shot generation.
1. Introduction
In recent years, diffusion models have emerged as the dominant paradigm in image generation, consistently demon
Malicious Diffusion Customization
Fine-tuning, e.g. Dreambooth, LoRA “a photo of sks person”
Zero-shot, e.g. FaceID “a young girl in a garden”
DLA-Diff
Unauthorized Collection
Unauthorized Collection
Fine-tuning, e.g. Dreambooth, LoRA “a photo of sks person”
Zero-shot, e.g. FaceID “a young girl in a garden”
Protected Images
No Protected Images
Figure 1. The DLADiff framework protects personal photos by simultaneously resisting fine-tuning and zero-shot generation in diffusion models, significantly degrading the output quality of maliciously customized models. Some of the visualization results in this paper may cause discomfort to viewers.
strating superior performance in producing high-fidelity visual content across a wide range of applications. To facilitate the adaptation of diffusion models to specific and data-limited settings, a variety of fine-tuning methods have been developed. These methods, such as DreamBooth [17] and LoRA [7], leverage small-scale datasets to effectively fine-tune pretrained model weights, thereby enabling the high-fidelity generation of specific attributes, including facial identities and image styles. T-
he dataset used for finetuning typically comprises a limited number of images, with some cases involving as few as three to five samples. More recently, zero-shot methods based on diffusion models have been proposed. These methods enable the generation of content that is highly consistent with the target, relying solely on a single reference instance. The development of these methods have progressively reduced the diffusion model’s reliance on large-scale prior data, thereby improving its applicab-
ility in real-world scenarios.
1
arXiv:2511.19910v1 [eess.IV] 25 Nov 2025

However, technological advancements also significantly reduce the cost of producing deepfake contents, thereby giving rise to non-negligible ethical and privacy risks. Unauthorized individuals, such as hackers, can generate fake facial identities using just three to five or even one private photo through diffusion model fine-tuning and zero-shot generation methods. To mitigate this security vulnerability, a series of defensive approaches termed anti-diffusion model customization (denoted as anti--
customization) are proposed. By introducing protective perturbations to original portraits, these methods degrade the quality of outputs generated through diffusion model fine-tuning. However, as zero-shot generation methods continue to advance, the limitations of existing anti-customization approaches have become increasingly apparent, particularly their inability to effectively generalize to zero-shot generation scenarios. To defend against diverse customizations of diffusion models in practical-
 scenarios, this paper presents, for the first time, a systematic defense framework capable of simultaneously prevent identity theft through both fine-tuning and zero-shot generation methods, which is illustrated in Figure 1.
We first systematically analyze the differences between fine-tuning methods and zero-shot methods. Diffusion model fine-tuning dynamically updates the pre-trained weights, whereas zero-shot methods incorporate a pretrained encoder to extract identity embeddings and inject them into the diffusion model’s noise predictor via additional cross-attention layers. Therefore, the essence of defense against fine-tuning lies in misleading the fine-tuning process into capturing erroneous patterns, thereby re-
ndering genuine identity information and facial structures unlearnable. In contrast to that, the principle of defending against zero-shot methods is more closely aligned with generating adversarial samples targeting a fixed pretrained identity encoder, while requiring consideration of generalization across diverse encoders. Furthermore, given that the identity encoder employed in zero-shot methods is decoupled from the model weights subject to fine-tuning, it is natural to propose employing two di-
stinct layers of protective perturbations to defend against fine-tuning and zero-shot methods separately.
Based on the aforementioned analysis, this paper proposes Dual-Layer Anti-Diffusion (DLADiff) to defense both fine-tuning methods and zero-shot methods, which contains a dual-layer protective mechanism. The first layer of protective perturbations is designed to defend against fine-tuning methods. Building upon existing anticustomization methods targeting fine-tuning methods, we propose, for the first time, a dual-surrogate-based alternating dynamic optimization framework that significantly enhance-
s the protection of facial local details through pre-finetuning a static surrogate model. The second layer of protective perturbations targets zero-shot methods and employs a
weighted Projected Gradient Descent (PGD) attack to ensure generalization across diverse zero-shot methods. The main contributions of this work include: • We propose DLADiff, the first dual-layer anticustomization framework against both diffusion model fine-tuning methods and zero-shot methods. • We significantly improve the defense performance against fine-tuning methods by introducing Dual-Surrogate Models (DSUR) mechanism and Alternating Dynamic Finetuning (ADFT). • We propose a simple yet effe-
ctive defense mechanism to enhance the generalization capability of diverse zero-shot generation methods.
2. Related Work
2.1. Customization of Diffusion Models
To enable pre-trained diffusion model weights to generate user-specified images, the technique of diffusion model fine-tuning has been introduced [9, 17]. Among these typical fine-tuning methods, DreamBooth [17] optimizes the weights of the UNet and text encoder, LoRA [7] introduces fine-tuned low-rank matrices into the pretrained weights, and Textual Inversion [4] learns to optimize adaptive text embeddings. However, fine-tuning methods rely on multiple images depicting a specific subject or styl-
e, which are often difficult to obtain in real-world scenarios. To overcome this limitation, zero-shot image-to-image generation has been introduced, which rely solely on a single reference image to generate visually consistent content. These methods employ an image encoder to derive embeddings from the reference image and utilize cross-attention layers to incorporate these features into designated layers of the UNet. For general generation, IP-Adapter [25] employs CLIP [15] as the image encoder. -
For facial identity generation, IP-Adapter Faceid [25] and Instant-ID [23] encode embeddings through pretrained ArcFace [2] models. Recent methods such as Photomakerr [10], PULID [5], and StoryMaker [28] further integrate both CLIP and ArcFace encoders to enhance identity preservation. Compared to finetuning, zero-shot approaches reduce the reliance on multiple training images, thus improving their feasibility in realworld applications.
2.1.1. Defense Methods for Customization
The widespread use of diffusion model customization has raised concerns about unauthorized misuse of personal images. To address this risk, numerous anti-customization methods are proposed to protect copyrighted content, such as artistic styles [18, 19] and facial identities [22], from being reproduced. Since zero-shot methods are newly emerging, most existing anti-customization methods focus on defending against fine-tuning. MIST [11] targets diffusion model fine-tuning by adding pixel-level adve-
rsarial noise
2

to original images, causing the model to generate a predefined noisy output. CAAT [24] shows that small perturbations in the attention mechanism can strongly misdirect fine-tuning. ACE [26] introduces a unified target to guide perturbation optimization in both forward encoding and reverse generation, effectively reducing offset issues and enhancing protection robustness and transferability. Anti-DreamBooth [22] introduces a dynamically updated surrogate model to enhance robustness. This work insp-
ires a variety of subsequent methods based on adversarial training [12, 21, 27]. Pretender [21] further proves that the introduction of adversarial training framework can effectively fools downstream fine-tuning tasks and works across diverse fine-tuning methods.
3. Preliminaries
3.1. Background
Diffusion Models are currently the most widely used image generative model, with a training process composed of two decoupled phases: the forward and backward processes. Given an input image x0, the forward process progressively adds standard Gaussian noise to x0 at each timestep t through a Markov chain. The output xt at each timestep is defined as follows:
xt = √αtx0 + √1 − αtε, (1)
where αt = 1 − βt, αt =
t
Q
s=1
αs, and ε ∼ N (0, I). After
T steps, the clean input x0 is transformed into pure Gaussian noise. In contrast to the forward process, the backward process employs a learnable neural network εθ(xt+1, t) to estimate the noise added at the current time step from xt+1 and thereby reconstruct the variables at the previous time step, xt, through denoising. The network weights θ of εθ are optimized by minimizing the following loss function:
Lucond(θ, x0) = Ex0,t,ε∼N (0,I)||ε − εθ(xt+1, t)||2
2, (2)
where ε is the reference noise added in the forward process. As an extension of diffusion models, stable diffusion models perform the noise addition and denoising processes in the latent space Z of a pretrained variational autoencoder [8] (VAE), thereby reducing computational costs. By incorporating text prompts as conditional inputs, it enables effective text-guided image generation. The objective of stable diffusion models is formulated as follows:
Lcond(θ, z0) = Ez0,t,c,ε∼N (0,I)||ε − εθ(zt+1, t, c)||2
2, (3)
where c represents the text prompt condition and z0 denotes the latent variables of the input images.
Diffusion Fine-tuning Methods involve optimizing all or part of the model weights using a small-scale dataset, enable
the generation of content that closely resembles the images used during fine-tuning. DreamBooth is a widely adopted fine-tuning method for stable diffusion models. Given a set of images sharing common characteristics, such as the same facial identity, and a text prompt c containing a specific trigger word, Dreambooth enforces a strong association between the fine-tuning images and the trigger word, enabling the model to generate images of that specific identity in response to the trigger word duri-
ng inference. In addition, to mitigate model overfitting, DreamBooth adds a regularization term during fine-tuning that uses prior prompts c′, text inputs without the trigger word, and corresponding images from the original weights. We define c and c′ as “a photo of sks person” and “a photo of person”, repectively. The objective of DreamBooth is formulated as follows:
Ldb(θ, z0) =Ez0,t,t′ ||ε − εθ(zt+1, t, c)||2
2
+ λ||ε′ − εθ(z′
t+1, t′, c′)||2
2. (4)
where ε, ε′ ∼ N (0, I), t, t′ ∈ [1, T ], and λ balances the weights of regularization term. Low-Rank Adaptation (LoRA) preserves the original model weights by freezing them during training, while selectively fine-tuning low-rank matrices injected into the attention layers. This approach significantly reduces computational overhead and alleviates overfitting risks compared to full-parameter fine-tuning.
Zero-shot Image-to-Image Generation is recently proposed to capture specific image features from a single reference image without altering the pretrained model weights. These methods employ an image encoder to extract embeddings from the reference image and utilize additional crossattention layers to incorporate them into designated layers of the UNet architecture.
3.2. Problem Definition
Let X = {x1, x2, ..., xn} denote a set of personal portrait images requiring protection. Our method aims to generate a protective perturbation δi and generate the perturbed version x′
i = xi + δi for each image in X , such that the
perturbed dataset X ′ can be safely published. When unauthorized users access X ′ and attempt to use these images for diffusion model customization, the resulting outputs exhibit severely degraded quality, effectively preventing identity theft. We define the dataset perturbation as δ∗. The aforementioned objective can be formulated as follows:
δ∗ = arg min
δ∗
A(DMc, X ′),
s.t. ||δ∗||∞ ≤ η,
(5)
where DMc represents the customized diffusion models, A denotes a metric for evaluating generation quality, e.g. Fre ́chet Inception Distance [6] (FID) and Identity Score
3

A’A
AA
A
AA𰠀𰠀 ↑
A𤠀A𦠀AAA
A𤠀A𦠀AAA
A𯀀A𰠀A
A𯀀A𰠀A
A
AAA
forward path
PGD path
Clean Image
Perturbations
Optimization path under the A𰠀𵐀 epoch
A𤠀A𦠀AAA
A𯀀A𰠀A
“a photo of sks person”
clean set
A
A
...
cross attention
“a” “sks”

 Fine-tune static surrogate model fine-tuning freezing
 Update perturbations with dual-surrogate models (DSUR) and alternating dynamic fine-tuning (ADFT)
A + AAA
Malicious FT Collection
bad quality
A’A A𯀀A𰠀A
AA𱀀AA ↑
A𤠀A𦠀AAA
A

A + AAA
A’A A𯀀A𰠀A
AA𱐀 ↓
A𤠀A𦠀AAA
A

A + AAA
Figure 2. The optimization process of the first layer of protective perturbation in DLADiff. This layer can effectively defense fine-tuning based diffusion model customization. The optimization process includes four steps. Step-0 involves the pre-fine-tuning of a static surrogate model, denoted as UNets, using a clean dataset that shares the same identity as the images to be protected. Step-1 optimizes perturbations δft by disrupting the attention maps using UNets as reference. Step-2 and Step-3 i-
nvolve the optimization based on adversarial training. Repeat Step-1 to Step-3 until the preset epoch is reached.
Matching [2] (ISM), and η is the bound of perturbation. In practice, unauthorized users may employ both finetuning and zero-shot methods to customize generated results. Therefore, the perturbation δ∗ must provide defense across both fine-tuning and zero-shot methods. This problem is inherently more challenging than the scenario limited to a single type of diffusion model customization. In the case of fine-tuning methods such as DreamBooth, unauthorized users would apply the loss function defined i-
n Eq. 4 to fine-tune on X ′, under which condition DMc can be formulated as εθ∗ . θ∗ is the weights after fine-tuning:
θ∗ = arg min
θ
X
x∈X ′
Ldb(θ, x). (6)
For zero-shot methods, an unknown identity encoder is employed to extract identity embeddings from X ′, and DMc can accordingly be represented as IE. For convenience and compatibility, pretrained face recognition models such as ArcFace are commonly used as identity encoders.
4. Methodology
To address the challenges mentioned in Section 3.2, this section presents the proposed defense approach, named Dual-Layer Anti-Diffusion (DLADiff), in detail. Based on the preceding analysis, fine-tuning of diffusion models involves dynamic adjustment of model weights, whereas zero-shot diffusion generation methods typically employ a
pretrained face recognition model as the identity encoder. Consequently, defending against fine-tuning demands more sophisticated and carefully optimized perturbations. Leveraging this insight, our approach incorporates a dual-layer perturbation defense mechanism: the first layer is specifically designed to counter fine-tuning-based customization, while the second layer targets zero-shot methods. Reversing the order may erase the perturbations for zero-shot methods when optimizing the other layer -
of perturbations, weakening the defense against zero-shot generation.
4.1. Perturbations for Fine-tuning Methods
The prevailing mainstream approaches employ an adversarial training-based framework [22]. The primary objective of these methods is to optimize perturbations via Projected Gradient Descent [14] (PGD) attacks, such that the noise predicted by the UNet [16] diverges from the noise introduced during the forward diffusion process. This process effectively maximize Lcond in Eq. 3. To simulate the fine-tuning procedure, these approaches incorporate a dynamically updated surrogate model. The optimization-
 of the surrogate model and the protective perturbation is performed in an alternating manner, thereby improving the robustness of perturbations. The perturbations introduced by these methods may lead to overfitting during fine-tuning, mislead the optimization trajectory, and consequently result in blocky artifacts in the generated images. However, these methods inadequately disrupt facial details, prompting the
4

development of attention map disruption-based approaches. These approaches mislead fine-tuning process by disrupting UNet’s self-attention and cross-attention maps. However, their performance improvement is limited in practice. This limitation stems from the use of attention features derived from a surrogate model initialized with pretrained weights, which deviates significantly from the ideal attention pattern observed after fine-tuning. Building upon the analysis of limitations in existing anti-
fine-tuning methods, the first layer of protective perturbations δft employs an optimization strategy grounded in a dual-surrogate model framework, as illustrated in Figure 2. This framework consists of two stages: (1) Fine-tuning the static surrogate model, (2) Updating perturbations with Dual-Surrogate Models (DSUR) and Alternating Dynamic Fine-Tuning (ADFT).
4.1.1. Dual-Surrogate Models (DSUR) Mechanism
This mechanism combines a dynamically updated surrogate model with a fully fine-tuned surrogate model with fixed weights, improving the perturbations’ effectiveness in disrupting both global and local facial features. As illustrated in Figure 2, we first fine-tune a static surrogate model on a clean dataset Xclean, which contains multiple portraits sharing the same identity as the images to be protected. The clean dataset can include the images to be protected. To ensure broad applicability, the s-
tatic surrogate model is trained using DreamBooth, with the text prompt “a photo of sks person”. To reduce computational overhead, only the UNet weights are updated, yielding the fine-tuned UNets. The weights θs of UNets are optimized as follows:
θs = arg min
θ
Ez0,t,c||ε − UNets(zt+1, t, c, θ)||2
2,
s.t. z0 = Encvae(x) and x ∈ Xclean,
(7)
where Encvae denotes the VAE encoder, z0 represents the latent variables of the images, and the definitions of all other terms are consistent with those in Eq. 4. We omit the prior regularization term of Eq. 4 for simplicity. After finetuning, the cross-attention layers in UNets are able to selectively attend to the key tokens in the text prompt, specifically “sks”. As illustrated in Figure 2, the cross-attention map associated with “sks” exhibits high activation values in the eye, nose, and mouth-
 regions of the portrait. There is a strong correlation between these regions and the facial identity. Furthermore, the self-attention layers in UNets also concentrate on capturing the structural features of the portrait. Then, we define a attention loss function as Latt based on both the static and dynamic surrogate models:
Latt(θs, θd, x, δft) =||Mcθs (x) − Mcθd (x + δft)||2
2
+||Msθs (x) − Msθd (x + δft)||2
2, (8)
where Mcθs (x) and Msθs (x) denote the cross-attention and self-attention maps, respectively, of the clean image x
associated with the static surrogate model UNets. Analogously, Mcθd (x + δft) and Msθd (x + δft) are the attention maps of the perturbed image x + δft from the dynamic surrogate model UNetd. UNetd is initialized from a pretrained weights without any instance-related knowledge.
4.1.2. Alternating Dynamic Fine-Tuning (ADFT)
To fully exploit the strengths of the two surrogate models, we update the perturbations δft in two sequential stages and alternately optimize the dynamic surrogate model. Stage-1: In the first stage, we fix the weights of both UNets and UNetd, and optimize δft along the direction of the gradient ascent of Latt through Projected Gradient Descent (PGD) attacks. This operation increases the value of Latt to introduce resistance to the model parameter updates when approaching the ideal attention state-
. Stage-2: In the second stage, we optimize δft along the direction of the gradient ascent of Lcond. This operation only uses the dynamic surrogate model UNetd. Finally, we optimize the dynamic surrogate model UNetd by minimizing Ldb on perturbed images x + δft. The aforementioned three stages constitute one epoch of perturbation optimization. By iteratively repeating multiple epochs, the final perturbations is obtained. One epoch of ADFT can be concisely formulated as follows:
δft ← arg max
δf t
Latt(θs, θd, x, δft),
δft ← arg max
δf t
Lcond(θd, x + δft),
θd ← arg min
θ
Ldb(θd, x + δft),
s.t. ||δft||∞ ≤ ηft,
(9)
where ηft is the bound of δft. The complete optimization algorithm is provided in supplementary materials.
4.2. Perturbations for Zero-shot Methods
Compared to fine-tuning methods, diffusion-based zeroshot generation methods utilize pretrained identity encoders to extract embeddings, which are then injected into the UNet architecture via additional cross-attention layers. Since the identity encoder weights are fixed, defending against zero-shot methods is more like creating adversarial samples than unlearnable samples. Based on this sight, we design simple yet effective second-layer protective perturbations to defend zero-shot methods. Given -
an image x′ protected by the first layer, we first extract the facial region as x′
f via face alignment, a necessary preprocessing step for identity encoding. The same procedure is applied to the unprotected image x to obtain xf . We denote the perturbations targeting zero-shot methods as δzs and define a loss function to evaluate the identity similarity
5

Table 1. Comparison results with state-of-the-art methods against Dreambooth fine-tuning. We evaluate these methods on two inference prompts. The best and second-best results are marked by red and blue.
Dataset Method “a photo of sks person” “a dslr portrait of sks person”
FDR↓ ISM↓ FID↑ FIQA↓ MOS↓ FDR↓ ISM↓ FID↑ FIQA↓ MOS↓
CelebA-HQ
w/o Protect 0.996 0.580 53.44 0.385 N/A 0.934 0.364 92.88 0.436 N/A
MIST 0.980 0.516 94.49 0.252 3.36 0.948 0.368 106.1 0.309 3.43
Anti-DB 0.851 0.452 144.4 0.235 2.63 0.892 0.328 166.4 0.280 2.41
DisDiff 0.482 0.241 201.8 0.207 1.79 0.861 0.322 145.2 0.242 2.32
Anti-diffusion 0.802 0.425 164.6 0.239 2.37 0.906 0.350 138.8 0.281 2.56
Ours 0.201 0.096 233.7 0.225 1.57 0.668 0.264 187.9 0.252 1.68
VGGFace2
w/o Protect 0.928 0.521 62.53 0.383 N/A 0.907 0.397 93.70 0.423 N/A
MIST 0.844 0.268 175.8 0.270 2.55 0.822 0.257 186.9 0.273 2.12
Anti-DB 0.677 0.300 186.7 0.220 1.98 0.746 0.265 200.7 0.217 1.86
DisDiff 0.741 0.362 187.4 0.201 1.83 0.880 0.375 137.7 0.240 2.43
Anti-diffusion 0.824 0.318 165.1 0.238 2.46 0.842 0.329 160.7 0.243 2.54
Ours 0.608 0.263 194.0 0.217 1.76 0.807 0.310 177.1 0.221 2.09
between the perturbed and original facial identities:
Lid = 1 −
N
X
i=1
CosSim(IEi(x′
f + δzs), IEi(xf )), (10)
where IEi denotes the ith identity encoder employed in the optimization process. We select N distinct encoders and weight their corresponding similarity scores to enhance the generalization capability of δzs. Then, the perturbations δzs are updated by the gradients ∇ through PGD attacks:
δzs = δzs + σzs ∗ ∇δzs Lid, s.t. ||δzs||∞ ≤ ηzs, (11)
where σzs is the optimization stride and ηzs is the bound of δzs. Finally, x′
f + δzs is transformed into the original coordinate system through the inverse transformation used in face alignment. In practice, the introduction of perturbations may cause a minor influence on the landmark coordinates. To enhance robustness to landmark detection, we introduce slight random noise into the affine matrix used in face alignment. The detailed pipeline of this process is provided in supplementary materials.
5. Experiments
5.1. Experimental Settings
Dataset: We evaluate the proposed approach on two tasks: defense against fine-tuning methods and defense against zero-shot methods. We employ the dataset constructed by Anti-DreamBooth, which consists of 50 individuals from CelebA-HQ [13] and 50 individuals from VGGFace2 [1].
Each individual is associated with 12 to 15 high-quality portraits of resolution 512 × 512. For experiments targeting fine-tuning method defense, we use the original resolution images, whereas in zero-shot defense experiments, the images are normalized to 112 × 112 via face alignment. Protected Model Selection: We select the Stable Diffusion model as the base model. In fine-tuning defense experiments, we select SD-v2.1 as the surrogate model and further evaluate the transferability of protected im-
ages when applied to SD-v1.5. In zero-shot defense experiments, we select SD-v1.5 and SDXL to adapt diverse zero-shot adapters. Selection of Customization Method: During the optimization of perturbations δft, we use DreamBooth to fine-tune the surrogate models. We further evaluate the transferability of protected images when applied to LoRA. In zero-shot defense experiments, we select Faceid [25] and InstanceID [23] as the customization methods, which represent the two most widely adopted zero-sam-
ple identity imitation approaches. The inclusion of multiple customization methods enables an evaluation of the proposed approach’s generalization capability.
Hyperparameter Setting: When optimizing δft and δzs, the perturbation bounds ηft and ηzs are set to 7/255 and 11/255, respectively. The optimization strides σft and σzs are 5 × 10−3 and 8 × 10−4. After generating protected images, we evaluate their protection performance by applying DreamBooth on these protected images to fine-tune pretrained weights. The fine-tuning is conducted with a batch size of 4, a total of 400 iterations, and a learning rate of 5 × 10−6, a configuration that achieves stron-
g identity sim
6

w/o Protect
MIST
Anti-DB
DisDiff
AntiDiffusion
Ours
Protected Seed 1 Seed 2
Generation after FT with Protected Generation after FT with Protected Generation after FT with Protected
Seed 1 Seed 2 Protected Seed 1 Seed 2 Seed 1 Seed 2 Protected Seed 1 Seed 2 Seed 1 Seed 2
DreamBooth LoRA DreamBooth LoRA DreamBooth LoRA
Figure 3. The comparison results on defending DreamBooth and LoRA Fine-tuning. We use the protected images to fine-tune a pretrained stale diffusion model. Then, we generate images under diverse random seeds using the fine-tuned weights.
ilarity on unprotected images. Comparison Methods: For comparison, we select four state-of-the-art defense methods against diffusion model customization: MIST [11], Anti-DreamBooth [22] (denoted as Anti-DB), DisDiff [12], and Anti-diffusion [27]. For a fair comparison, the same hyperparameter settings are applied across all methods.
5.2. Comparison Results of Fine-tuning Defense
We evaluate the effectiveness of each defense method against fine-tuning of diffusion models based on two criteria: generated image quality and identity preservation. The comparative results across these methods are presented in Table 1. For generated image quality, we employ the Fre ́chet Inception Distance [6] (FID), Efficient-FIQA [20] (denoted as FIQA), and Mean Opinion Score (MOS) from subjective assessment experiments as evaluation metrics. The details of subjective experiments are presented-
 in supplementary materials. When the inference prompt (“a photo of sks person”) is identical to that used in optimizing perturbations, our approach significantly outperforms other methods in terms of FID and MOS on both datasets. When the inference prompt differs from the one used during optimization, our method still achieves superior performance on the CelebA-HQ dataset, but exhibits a slight decline on the VGGFace2 dataset. All methods achieve comparable scores on FIQA, with no significant dif-
ferences observed. This may be attributed to the composition of the model’s training dataset, which consists of naturally distorted images and high-quality AI-generated faces, rendering it less sensitive to the distortions introduced by these defense approaches.
Table 2. Robustness evaluation under transfer to LoRA. The best result is marked in bold.
Method FDR↓ ISM↓ FID↑ FIQA↓ MOS↓
w/o Protect 0.942 0.433 58.51 0.386 N/A
MIST 0.988 0.388 86.11 0.295 3.48
Anti-DB 0.776 0.280 152.3 0.240 2.39
DisDiff 0.829 0.306 135.6 0.241 2.58
Anti-diffusion 0.825 0.298 146.6 0.265 2.72
Ours 0.728 0.199 182.4 0.280 1.37
In terms of identity preservation, we use Face Detection Rate (FDR) of RetinaFace detector [3] and Identity Score Matching (ISM) [2] as evaluation metrics. The lower the values of these two metrics, the greater the deviation of the generated image from a human face, and the more distant the identity becomes relative to that in the fine-tuning dataset. Similar to generated image quality, our approach significantly outperforms other methods in terms of FID and ISM on both datasets when generating im-
ages using the same prompt as used during optimization. We present some visualization results in Figure 3 which demonstrates that our method places greater emphasis on protecting the facial region, leading to more pronounced degradation of facial details in the generated images.
5.3. Robustness Results of Fine-tuning Defense
Following prior work, we evaluate the robustness of defense methods along two dimensions: robustness to fine-tuning
7

Table 3. Robustness evaluation under transfer to SD-v1.5.
Method FDR↓ ISM↓ FID↑ NSFWR↑
MIST 0.604 0.313 213.3 0.263
Anti-DB 0.606 0.323 239.4 0.341
DisDiff 0.148 0.076 327.6 0.481
Anti-diffusion 0.258 0.139 312.1 0.493
Ours 0.070 0.031 407.8 0.733
Table 4. Comparison results with state-of-the-art methods against zero-shot image-to-image generation.
Dataset Method Faceid Instance-ID
ISMpro ↓ ISMgen ↓ ISMpro ↓ ISMgen ↓
CelebA-HQ
MIST 0.970 0.409 0.962 0.615 Anti-DB 0.965 0.409 0.955 0.612 DisDiff 0.951 0.405 0.960 0.606 Anti-Diffusion 0.971 0.412 0.968 0.606 Ours 0.090 0.039 0.091 0.049
VGGFace2
MIST 0.963 0.380 0.959 0.622 Anti-DB 0.966 0.379 0.963 0.621 DisDiff 0.965 0.375 0.960 0.620 Anti-Diffusion 0.968 0.381 0.965 0.620 Ours 0.074 0.038 0.077 0.058
method variations and robustness to model version variations. In the first experiment, we fine-tune the dynamic surrogate model with DreamBooth during optimizing perturbations, and use LoRA for fine-tuning when testing the defense capability of the protected images. Table 2 demonstrates that our approach achieves the highest transferability to different fine-tuning methods compared to other methods. In the second experiment, we fine-tune the dynamic surrogate model based on SD-v2.1 during optimizi-
ng perturbations, and fine-tune a pretrained SD-v1.5 model when testing the protection performance. Table 3 demonstrates that our approach continues to significantly outperform the other methods when transferring to a different model version. The NSFWR in Table 3 denotes the detection rate of Not Safe For Work content in the generated results.
5.4. Comparison Results of Zero-shot Defense
To evaluate the effectiveness of the proposed method in defending against zero-shot generation methods, we select the two most representative and widely used methods in the field of zero-shot facial identity synthesis as the target models: IP-Adapter Faceid (denoted as Faceid) based on SD-v1.5 and Instance-ID based on SDXL. The identity encoders of these two models utilize distinct pre-trained face recognition weights. We denote the identity similarity between the protected image and the original -
image as ISMpro, and the identity similarity between the generated image and the original image as ISMgen, respectively. As
Table 5. Results of ablation study.
Ablation Study for Anti-fine-tuning
Config ISM↓ FDR↓ FID↑ FIQA↓
w/o DSUR 0.160 0.316 213.7 0.236
w/o ADFT 0.277 0.607 180.9 0.244
DSUR+ADFT 0.096 0.201 233.7 0.221
Ablation Study for Anti-zero-shot
Faceid Instance-ID
Config ISMpro ↓ ISMgen ↓ ISMpro ↓ ISMgen ↓
w/o Anti-ZS 0.974 0.398 0.965 0.618
Anti-ZS 0.082 0.039 0.054 0.084
shown in Table 4, Existing methods exhibit high vulnerability to zero-shot generation techniques and provide minimal defensive capability. In contrast, the second perturbation layer in our dual-layer framework effectively prevents facial identity theft by zero-shot methods.
MIST
Anti-DB
DisDiff
AntiDiffusion
Ours
Protected Faceid Instance-ID Protected Faceid Instance-ID
Figure 4. The comparison results on defending Zero-shot generation methods.
5.5. Ablation Results
Finally, we conduct ablation study to evaluate the proposed modules: Dual-Surrogate Models Mechanism (denoted as DSUR), Alternating Dynamic Fine-Tuning (denoted as ADFT), and perturbations for zero-shot methods (denoted as Anti-ZS). The contributions of each modules are presented in Table 5. As shown in Table 1, the individual protective effect of each module surpasses that of most comparison methods.
6. Conclusion
This paper presents Dual-Layer Anti-Diffusion (DLADiff), a dual-layer framework that defends against both fine
8

Table 6. Notion table of Models
Notion Definition
Encvae encoder of VAE
UNets UNet of the static surrogate model
UNets UNet of the dynamic surrogate model
IE identity encoder
Table 7. Notion table of Operations
Notion Definition
BP back propagation of gradients
Adam Adam optimizer
randint random integer generator
randn normal noise generator
noise scheduler noise scheduler for forward diffusion
∇ gradients of relevant weights
affine transform affine transformation
face alignment face alignment
clip clip operation
CosSim cosine similarity
Table 8. Notion table of Variables
Notion Definition
x/xf image and face region of the image
z latent variables
ε random noises
θpre/θd/θs pretrained/dynamic/static weights
δft/δzs the first and second perturbations
ηft/ηzs the perturbation bounds
Maffine affine matrix
ths threshold value of similarity
tuning and zero-shot customizations of diffusion models. The first layer prevents unauthorized fine-tuning using the Dual-Surrogate Models (DSUR) mechanism and Alternating Dynamic Fine-Tuning (ADFT). The second layer, though simple, effectively blocks zero-shot generation. Experiments show DLADiff outperforms existing methods in both defense scenarios.
7. Appendix
Algorithm 1 Perturbation Optimization for Fine-tuning
Input: X , Xclean Output: δft
1: θs = θpre, θd = θpre, δft = 0 2: while iter < iterft do 3: z0 = Encvae(x), s.t. x ∈ Xclean
4: t = randint(1, 999), ε = randn(z0.shape) 5: zt+1 = noise scheduler(z0, t, ε)
6: Lcond = Ez0,t,c||ε − UNets(zt+1, t, c, θs)||22 7: ∇θs = BP(Lcond, θs) 8: θs = Adam(θs, ∇θs ) 9: end while
10: while iter < iteropt do 11: for i ∈ [1, iter1] do 12: z0 = Encvae(x), s.t. x ∈ X 13: z′0 = Encvae(x + δft), s.t. x ∈ X
14: t = randint(1, 999), ε = randn(z0.shape) 15: zt+1 = noise scheduler(z0, t, ε) 16: zt′+1 = noise scheduler(z′0, t, ε)
17: Mcθs (x) = UNets(zt+1, t, c, θs).att1 18: Mcθd (x + δft) = UNetd(zt′+1, t, c, θd).att1 19: Msθs (x) = UNets(zt+1, t, c, θs).att2 20: Msθd (x + δft) = UNetd(zt′+1, t, c, θd).att2
21: Latt = ||Mcθs (x) − Mcθd (x + δft)||22 +
||Msθs (x) − Msθd (x + δft)||22, 22: ∇δft = BP(Latt, δft) 23: δft = clip(δft + σft ∗ ∇δft , −ηft, +ηft), 24: end for
25: for i ∈ [1, iter2] do 26: z0 = Encvae(x + δft), s.t. x ∈ X
27: t = randint(1, 999), ε = randn(z0.shape) 28: zt+1 = noise scheduler(z0, t, ε)
29: Lcond = Ez0,t,c||ε − UNetd(zt+1, t, c, θd)||22 30: ∇δft = BP(Lcond, δft) 31: δft = clip(δft + σft ∗ ∇δft , −ηft, +ηft) 32: end for
33: for i ∈ [1, iter3] do 34: z0 = Encvae(x + δft), s.t. x ∈ X
35: t = randint(1, 999), ε = randn(z0.shape) 36: zt+1 = noise scheduler(z0, t, ε)
37: Lcond = Ez0,t,c||ε − UNetd(zt+1, t, c, θd)||22 38: ∇θd = BP(Lcond, θd) 39: θd = Adam(θd, ∇θd ) 40: end for 41: end while 42: return Output
7.1. Algorithm Details
We present the detailed pipelines of the two-layer perturbation optimization in Algorithm 1 and Algorithm 2. The notions used in these algorithms are defined in Table 6, Ta
9

Algorithm 2 Perturbation Optimization for Zero-shot
Input: δft, X Output: δzs 1: δzs = 0
2: x′ = x + δft, s.t. x ∈ X
3: while CosSim(Epro i, Etar i) > ths do 4: xf , Maffine = face alignment(x) 5: ε = randn(Maffine.shape) 6: M′
affine = Maffine + ε
7: x′
f = affine transform(x′, M′
affine)
8: Lid = 1-PN
i=1 CosSim(IEi(x′
f + δzs), IEi(xf ))
9: δzs = δzs + σzs ∗ ∇δzs Lid
10: δzs = clip(δzs, min=−ηzs, max=+ηzs) 11: end while
12: return Outputs
ble 7, and Table 8. Table 6 defines the models, Table 7 defines the operations, and Table 8 defines the variables used in these two algorithms.
7.2. Subjective Assessment Experiments
To obtain Mean Opinion Score (MOS), we invite ten volunteers including five male and five female participants to assess the visual quality of the images generated after finetuning on the protected images with each defense methods. Visual quality is defined on a five-point scale ranging from low to high, where a score of 5 corresponds to the generation results obtained using fine-tuning with clean images, and scores from 4 to 1 represent progressively increasing levels of distortion. The detailed s-
coring criteria are as follows: • “4”: The image has slight distortions, such as artifacts, blurring, noise, and blocky distortions. • “3”: The distortions are more severe than “4” but the facial features such as eyes and mouse can still be recognized. • “2”: The facial features and details are significantly destroyed. • “1”: Unrecognizable or disgusting, terrifying faces. We randomly select 50 faces generated from the fine-tuned models that are fine-tuned on the protected images from each defense-
 methods. The user interface (UI) of this experiment is presented in Figure 5. We present the distributions of MOS in Figure 6.
7.3. Supplementary Explanation of Experiments
As stated in the main text, the same perturbation bound for fine-tuning is applied to all comparison methods to ensure a fair and consistent evaluation. However, our approach incorporates two layers of perturbation, whereas other methods employ only a single layer designed to defend against fine-tuning methods. Therefore, we report the peak signal
start
finish
next
quality
12345
Figure 5. The user interface of subjective assessment experiments.
Table 9. PSNR of the protected images generated by comparison methods.
MIST Anti-DB DisDiff Anti-diffusion Ours PSNR 34.61 34.52 35.16 35.24 35.06
to noise ratio (PSNR) of the protected images generated by each comparison method. As shown in Table 9, all methods achieve a comparable PSNR (35 ± 0.5). In Table 1 of the main text, the FID scores are computed between two image datasets: (1) the clean image dataset to be protected, (2) the generated images using the weights fine-tuned on protected images. For each individual in CeleA-HQ or VGGFace2, the images to be protected contain four samples. Therefore, the first dataset includes 200 images -
in total. For the second dataset, we generate 20 images for each individual using diverse random seeds. Therefore, the second dataset includes 1000 images. In contrast to our experiments, the FID scores reported in other papers [12] are computed for each individual. Since the Fre ́chet Inception Distance (FID) measures the distance between two probability distributions, a higher number of samples in both datasets leads to a more accurate estimation with reduced statistical error. Consequently, our-
 evaluation approach yields more reliable results and consistently reports lower FID scores compared to those presented in prior studies. We also present the results computed according to [12] in Table 10. The DreamBooth results on CelebAHQ and VGGFace2 are denoted as DB-C and DB-V, respectively.
7.4. More Visualization Results
In this section, we present more visualization results. We visualize the cross-attention maps to demonstrate the effectiveness of our approach to defend fine-tuning. As illus
10

0
100
200
300
12345
MOS Distribution
0
100
200
300
12345
MOS Distribution
0
100
200
300
12345
MOS Distribution
0
100
200
300
12345
MOS Distribution
0
100
200
300
12345
MOS Distribution
0
100
200
300
12345
MOS Distribution
0
100
200
300
12345
MOS Distribution
0
100
200
300
12345
MOS Distribution
0
100
200
300
12345
MOS Distribution
0
100
200
300
12345
MOS Distribution
MIST Anti-DB DisDiff Anti-diffusion Ours
VGGFace2
CelebA-HQ
Figure 6. The distributions of Mean Opinion Score (MOS).
Table 10. FID results using small-scale datasets
MIST Anti-DB DisDiff Anti-diffusion Ours
DB-C 168.0 220.1 286.2 239.7 320.7
DB-V 306.8 306.6 293.4 298.0 314.4
LoRA 172.3 243.7 230.3 232.5 284.1
trated in Figure 7 (a), the cross-attention maps of the unprotected clean image, when is processed using pre-trained weights without fine-tuning, exhibits no focused attention on specific regions. In contrast, as shown in Figure 7 (b), the same clean image processed with weights fine-tuned on clean images reveals a clear correspondence between special tokens (“sks”) and specific image regions (eyes, nose, and mouse). In Figure 7 (c), we use the weights fine-tuned on clean images to process the pro-
tected image. The crossattention maps exhibit significant differences compared to the results shown in Figure 7 (b), indicating that the perturbations effectively disrupts the normal cross-attention mechanism. Figure 7 (d) further illustrates that there is no focused attention on specific regions in generated images.
Figure 8 presents the visualization results of ablation study for the first protective layer. As shown in Figure 8, DSUR focuses more on introducing high-frequency textures to disrupt local facial details, while ADFT is more significant in degrading the overall quality.
Figure 9 presents the visualization results of defending DreamBooth fine-tuning. Figure 10 presents the visualization results of defending LoRA fine-tuning. Figure 11 presents the visualization results of defending zero-shot generation.
a photo of sks person
(a) clean image with pretrained weights
(b) clean image with fine-tuned weights on clean set
(c) protected image with fine-tuned weights on clean set
(d) generated image with fine-tuned weights on protected set
Figure 7. The visualization results of cross-attention maps.
w/o DSUR
Protected Seed 1 Seed 2 Seed 3 Seed 4
DreamBooth
w/o ADFT
DSUR + ADFT
Figure 8. The ablation results of the first layer.
11

w/o Protect
MIST
Anti-DB
DisDiff
AntiDiffusion
Ours
Protected Seed 1 Seed 2
DreamBooth
Protected Seed 1 Seed 2
DreamBooth
Protected Seed 1 Seed 2
DreamBooth
Protected Seed 1 Seed 2
DreamBooth
Figure 9. The comparison results on defending DreamBooth fine-tuning. We use the protected images to fine-tune a pretrained stale diffusion model. Then, we generate images under diverse random seeds using the fine-tuned weights.
w/o Protect
MIST
Anti-DB
DisDiff
AntiDiffusion
Ours
Protected Seed 1 Seed 2
LoRA
Protected Seed 1 Seed 2
LoRA
Protected Seed 1 Seed 2
LoRA
Protected Seed 1 Seed 2
LoRA
Figure 10. The comparison results on defending LoRA fine-tuning. We use the protected images to fine-tune a pretrained stale diffusion model. Then, we generate images under diverse random seeds using the fine-tuned weights.
References
[1] Qiong Cao, Li Shen, Weidi Xie, Omkar M Parkhi, and Andrew Zisserman. VGGFace2: A dataset for recognising faces across pose and age. In 2018 13th IEEE international con
ference on automatic face & gesture recognition (FG 2018), pages 67–74. IEEE, 2018. 6
[2] Jiankang Deng, Jia Guo, Niannan Xue, and Stefanos Zafeiriou. Arcface: Additive angular margin loss for deep
12

MIST
Anti-DB
DisDiff
AntiDiffusion
Ours
Protected Faceid InstanceID Protected Faceid InstanceID Protected Faceid InstanceID Protected Faceid InstanceID
Figure 11. The comparison results on defending zero-shot generation. Text prompts: “a young woman in white T-shirt in a garden” and “best quality, high quality, a wooden house in forest”.
face recognition. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, pages 4690–4699, 2019. 2, 4, 7
[3] Jiankang Deng, Jia Guo, Evangelos Ververas, Irene Kotsia, and Stefanos Zafeiriou. Retinaface: Single-shot multilevel face localisation in the wild. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, pages 5203–5212, 2020. 7
[4] Rinon Gal, Yuval Alaluf, Yuval Atzmon, Or Patashnik, Amit H Bermano, Gal Chechik, and Daniel CohenOr. An image is worth one word: Personalizing text-toimage generation using textual inversion. arXiv preprint arXiv:2208.01618, 2022. 2
[5] Zinan Guo, Yanze Wu, Chen Zhuowei, Peng Zhang, Qian He, et al. Pulid: Pure and lightning id customization via contrastive alignment. Advances in Neural Information Processing Systems, 37:36777–36804, 2024. 2
[6] Martin Heusel, Hubert Ramsauer, Thomas Unterthiner, Bernhard Nessler, and Sepp Hochreiter. Gans trained by a two time-scale update rule converge to a local nash equilibrium. Advances in neural information processing systems, 30, 2017. 3, 7
[7] Edward J Hu, Yelong Shen, Phillip Wallis, Zeyuan AllenZhu, Yuanzhi Li, Shean Wang, Lu Wang, Weizhu Chen, et al. Lora: Low-rank adaptation of large language models. ICLR, 1(2):3, 2022. 1, 2
[8] Diederik P Kingma and Max Welling. Auto-encoding variational bayes. In International Conference on Learning Representations, 2013. 3
[9] Nupur Kumari, Bingliang Zhang, Richard Zhang, Eli Shechtman, and Jun-Yan Zhu. Multi-concept customization of text-to-image diffusion. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 1931–1941, 2023. 2
[10] Zhen Li, Mingdeng Cao, Xintao Wang, Zhongang Qi, MingMing Cheng, and Ying Shan. Photomaker: Customizing realistic human photos via stacked id embedding. In Proceedings of the IEEE/CVF conference on Computer Vision and Pattern Recognition, pages 8640–8650, 2024. 2 [11] Chumeng Liang, Xiaoyu Wu, Yang Hua, Jiaru Zhang, Yiming Xue, Tao Song, Zhengui Xue, Ruhui Ma, and Haibing Guan. Adversarial example does good: preventing painting imitation from diffusion models via adversarial examples. In 40th-
 International Conference on Machine Learning, ICML 2023, pages 20763–20786, 2023. 2, 7 [12] Yisu Liu, Jinyang An, Wanqian Zhang, Dayan Wu, Jingzi Gu, Zheng Lin, and Weiping Wang. Disrupting diffusion: Token-level attention erasure attack against diffusion-based customization. In Proceedings of the 32nd ACM International Conference on Multimedia, pages 3587–3596, 2024. 3, 7, 10 [13] Ziwei Liu, Ping Luo, Xiaogang Wang, and Xiaoou Tang. Deep learning face attributes in the wild. In Proceedings of In-
ternational Conference on Computer Vision, 2015. 6
[14] Aleksander Madry, Aleksandar Makelov, Ludwig Schmidt, Dimitris Tsipras, and Adrian Vladu. Towards deep learning models resistant to adversarial attacks. In International Conference on Learning Representations, 2018. 4
[15] Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh, Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, et al. Learning transferable visual models from natural language supervision. In International conference on machine learning, pages 8748–8763. PmLR, 2021. 2 [16] Olaf Ronneberger, Philipp Fischer, and Thomas Brox. Unet: Convolutional networks for biomedical image segmentation. In International Conference on Medical image computing and computer-as-
sisted intervention, pages 234–241. Springer, 2015. 4
13

[17] Nataniel Ruiz, Yuanzhen Li, Varun Jampani, Yael Pritch, Michael Rubinstein, and Kfir Aberman. Dreambooth: Fine tuning text-to-image diffusion models for subject-driven generation. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 2250022510, 2023. 1, 2 [18] Shawn Shan, Jenna Cryan, Emily Wenger, Haitao Zheng, Rana Hanocka, and Ben Y Zhao. Glaze: Protecting artists from style mimicry by {Text-to-Image} models. In 32nd USENIX Security Symposium (USENIX-
 Security 23), pages 2187–2204, 2023. 2 [19] Shawn Shan, Wenxin Ding, Josephine Passananti, Stanley Wu, Haitao Zheng, and Ben Y Zhao. Nightshade: Promptspecific poisoning attacks on text-to-image generative models. In 2024 IEEE Symposium on Security and Privacy (SP), pages 807–825. IEEE, 2024. 2 [20] Wei Sun, Weixia Zhang, Linhan Cao, Jun Jia, Xiangyang Zhu, Dandan Zhu, Xiongkuo Min, and Guangtao Zhai. Efficient face image quality assessment via self-training and knowledge distillation. In Proceed-
ings of the IEEE/CVF International Conference on Computer Vision, pages 33633371, 2025. 7 [21] Zekun Sun, Zijian Liu, Shouling Ji, Chenhao Lin, and Na Ruan. Pretender: Universal active defense against diffusion finetuning attacks. In The 34th USENIX Security Symposium, 2025. 3 [22] Thanh Van Le, Hao Phung, Thuan Hoang Nguyen, Quan Dao, Ngoc N Tran, and Anh Tran. Anti-dreambooth: Protecting users from personalized text-to-image synthesis. In Proceedings of International Conference on Computer Visio-
n, pages 2116–2127, 2023. 2, 3, 4, 7 [23] Qixun Wang, Xu Bai, Haofan Wang, Zekui Qin, and Anthony Chen. Instantid: Zero-shot identity-preserving generation in seconds. arXiv preprint arXiv:2401.07519, 2024. 2, 6
[24] Jingyao Xu, Yuetong Lu, Yandong Li, Siyang Lu, Dongdong Wang, and Xiang Wei. Perturbing attention gives you more bang for the buck: Subtle imaging perturbations that efficiently fool customized diffusion models. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 24534–24543, 2024. 3 [25] Hu Ye, Jun Zhang, Sibo Liu, Xiao Han, and Wei Yang. Ipadapter: Text compatible image prompt adapter for text-toimage diffusion models. arXiv preprint arxiv:2308.06721,-
 2023. 2, 6 [26] Boyang Zheng, Chumeng Liang, Xiaoyu Wu, and Yan Liu. Understanding and improving adversarial attacks on latent diffusion model. openreview.net, 2023. 3 [27] Li Zheng, Liangbin Xie, Jiantao Zhou, Xintao Wang, Haiwei Wu, and Jinyu Tian. Anti-diffusion: Preventing abuse of modifications of diffusion-based models. In Proceedings of the AAAI Conference on Artificial Intelligence, pages 1058210590, 2025. 3, 7 [28] Zhengguang Zhou, Jing Li, Huaxia Li, Nemo Chen, and Xu Tang. Storymaker: -
Towards holistic consistent characters in text-to-image generation. arXiv preprint arXiv:2409.12576, 2024. 2
14

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:41.952Z
- **Text Length:** 52306 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 14 of 14
