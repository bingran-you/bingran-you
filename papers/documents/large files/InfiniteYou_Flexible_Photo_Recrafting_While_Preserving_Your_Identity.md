# PDF Document: Jiang et al. - 2025 - InfiniteYou Flexible Photo Recrafting While Preserving Your Identity.pdf

**File Path:** Jiang et al. - 2025 - InfiniteYou Flexible Photo Recrafting While Preserving Your Identity.pdf

**Processed Date:** 2026-02-10T18:16:44.449Z

**File Size:** 13738.01 KB

**Total Pages:** 11

**Extracted Pages:** 11

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2794

**Title:** InfiniteYou: Flexible Photo Recrafting While Preserving Your Identity

**Collection:** Large Files

---

## Extracted Text Content

InfiniteYou: Flexible Photo Recrafting While Preserving Your Identity
Liming Jiang Qing Yan Yumin Jia Zichuan Liu Hao Kang Xin Lu
ByteDance Intelligent Creation
Project Page: https://bytedance.github.io/InfiniteYou
Blonde woman in office Old man with beard Asian girl in garden Young musician playing guitar
Princess Belle, waist shot, golden tulle dress, cinematic, soft shadows, hyper-realistic
Javanese bride, traditional attire, floral braid, sequin headdress, orchid backdrop, pastels
High-resolution image of a chef in a bustling kitchen, exuding expertise and dedication
Figure 1. InfiniteYou generates identity-preserved images with exceptional identity similarity, text-image alignment, quality, and aesthetics.
Abstract
Achieving flexible and high-fidelity identity-preserved image generation remains formidable, particularly with advanced Diffusion Transformers (DiTs) like FLUX. We introduce InfiniteYou (InfU), one of the earliest robust frameworks leveraging DiTs for this task. InfU addresses signif
icant issues of existing methods, such as insufficient identity similarity, poor text-image alignment, and low generation quality and aesthetics. Central to InfU is InfuseNet, a component that injects identity features into the DiT base model via residual connections, enhancing identity similarity while maintaining generation capabilities. A multi-stage training strategy, including pretraining and supervised fine
1
arXiv:2503.16418v1 [cs.CV] 20 Mar 2025

tuning (SFT) with synthetic single-person-multiple-sample (SPMS) data, further improves text-image alignment, ameliorates image quality, and alleviates face copy-pasting. Extensive experiments demonstrate that InfU achieves stateof-the-art performance, surpassing existing baselines. In addition, the plug-and-play design of InfU ensures compatibility with various existing methods, offering a valuable contribution to the broader community. Code and model: https://github.com/bytedance/InfiniteYou.
1. Introduction
Identity-preserved image generation aims to recraft a photograph of a specific person using free-form text descriptions while preserving facial identity. This task is challenging but highly beneficial. Previous methods [14, 51, 54] have been mainly developed on U-Net [42]-based text-toimage diffusion models [17, 41, 46], such as Stable Diffusion XL (SDXL) [38]. However, due to the limited generation capacity of the base model, the quality of generated images remains inadequate. Recent strides in D-
iffusion Transformers (DiTs) [12, 37] have made remarkable progress in content creation. In particular, the latest releases of state-ofthe-art rectified flow DiTs, such as FLUX [26] and Stable Diffusion 3.5 [12], showcase incredible image generation quality. Consequently, it is crucial to explore solutions that can leverage the immense potential of DiTs for downstream applications like identity-preserved image generation. DiT-based identity-preserved image generation remains formidable due to seve-
ral factors: the absence of customized module designs, difficulties in model scaling, and a lack of high-quality data. Thus, effective solutions for this task using state-of-the-art rectified flow [4, 33] DiTs, such as FLUX [26], are currently scarce in both academia and industry. PuLID-FLUX, derived from PuLID [14], presented an initial attempt to develop an identity-preserved image generation model based on FLUX. Other opensource efforts, including FLUX.1-dev IP-Adapters from InstantX [20] and X-
Labs-AI [3], are not tailored for human facial identities. Nevertheless, existing methods fall short in three key aspects: 1) The identity similarity is not sufficient; 2) The text-image alignment and editability are poor, and the face copy-paste issue is evident; 3) The generation capability of FLUX is largely compromised, resulting in lower image quality and aesthetic appeal. To address the aforementioned challenges, we propose a simple yet effective framework for identity-preserved image genera-
tion, namely InfiniteYou (InfU). This framework is designed to be systematic and robust, enabling flexible text-based photo re-creation for diverse identities, races, and age groups across various scenarios. We introduce InfuseNet, a generalization of ControlNet [56], which ingests identity information along with the control
ling conditions. The projected identity features are injected by InfuseNet into the DiT base model through residual connections, thereby disentangling text and identity injections. InfuseNet is both scalable and compatible, harnessing the powerful generation capabilities of DiTs. The scaleup injection network and the delicate architecture design, equipped with large-scale model training, effectively enhance identity similarity. To improve text-image alignment, image quality, and aesthetic appeal, -
we employ a multistage training strategy, including pretraining and supervised fine-tuning (SFT) [21, 49]. The SFT stage utilizes carefully designed synthetic single-person-multiple-sample (SPMS) data generation, leveraging our pretrained model itself and various off-the-shelf modules. This strategy enhances the quantity, quality, aesthetics, and text-image alignment of the training data, thus improving overall model performance and alleviating the face copy-paste issue. Thanks to the InfuseNet de-
sign, identity information is injected purely via residual connections between DiT blocks, unlike conventional practices [14, 51, 54] that directly modify attention [50] layers via IP-Adapter (IPA). Consequently, the generation capability of the base model remains largely intact, allowing for the generation of high-quality and aesthetically pleasing images. Moreover, InfU is plug-and-play and readily compatible with many other methods or plugins, thus offering significant value to the broader comm-
unity. Comprehensive experiments show that the proposed InfU framework achieves state-of-the-art performance (see Figure 1), significantly surpassing existing baselines in identity similarity, text-image alignment, and overall image quality. Our main contributions are summarized as follows: • We propose InfiniteYou (InfU), a versatile and robust DiT-based framework for flexible identity-preserved image generation under various scenarios. • We introduce InfuseNet, a generalization of ControlNet, wh-
ich effectively injects identity features into the DiT base model via residual connections, enhancing identity similarity with minimal impact on generation capabilities. • We employ a multi-stage training strategy, including pretraining and supervised fine-tuning (SFT), using synthetic single-person-multiple-sample (SPMS) data generation. This approach significantly improves text-image alignment, image quality, and aesthetic appeal. • The InfU module features a desirable plug-and-play design, comp-
atible with many existing methods, thus providing a valuable contribution to the broader community.
2. Related Work
Text-to-image Diffusion Transformers (DiTs). Diffusion models [17, 41, 46, 47] have become a standard paradigm given their incredible capability to produce high-fidelity images. Text-to-image generation aims to synthesize images through the denoising diffusion process [17, 41] from a
2

Gaussian distribution given textual descriptions. Conventional methods [30, 38, 41, 45] are based on U-Net [42], where the text representation is extracted by CLIP [39]. Recent DiTs [37], based on Vision Transformers (ViTs) [9, 11] and typically using text embeddings encoded by T5 [40] in addition to CLIP, have exhibited even higher generation capacity compared to U-Net architectures. The latest releases of DiTs with rectified flows (RFs) [4, 33], such as Stable Diffusion 3.5 [12], Playground V3 -
[32], Recraft V3 [2], and FLUX.1 [26], have further shown their unprecedented generation quality. The progress made by these DiTs naturally stimulates the development of customized approaches in their downstream applications. This highlights the significance of our work, reforming the architecture from U-Nets to DiTs for identity-preserved image generation.
Identity-preserved image generation. Tuning-based methods for dentity-preserved image generation include [13, 18, 24, 43, 44]. However, their practical significance is hindered by low efficiency and high tuning cost due to their specificity to individual identities. Therefore, tuning-free methods have become the mainstream practice for this task. A series of efforts, such as IPAdapter [54], FastComposer [52], Photomaker [29], InstantID [51], FlashFace [57], Arc2Face [36], Imagine Yourself [15], an-
d PuLID [14], typically employ additional trainable modules as adapters to inject identity information. After training, these approaches can generate customized images without additional tuning, even when ingesting new subject samples. However, these methods are mainly developed for U-Net-based Stable Diffusion [41] and SDXL [38], where the limited generative capability of the base model inevitably constrains the quality of the generated images. The remarkable achievements of DiTs highlight the im-
portance of base model replacement, which remains underexplored. PuLID-FLUX [14] made an initial attempt based on IP-Adapter trained with alignment and identity losses [14]. Other open-source efforts, including FLUX.1dev IP-Adapters from InstantX [20] and XLabs-AI [3], were devised but not tailored for human faces. Nevertheless, existing methods still face limitations: insufficient identity similarity, poor text-image alignment, face copy-paste issues, and compromised generation quality. The propo-
sed InfU effectively addresses these shortcomings.
3. Methodology
3.1. Preliminary
Simulation-free training of flows. Following [12], generative models are defined to establish a transformation between samples x1 drawn from a noise distribution p1 to samples x0 drawn from a data distribution p0, formulated through an ordinary differential equation (ODE),
dyt = vΘ (yt, t) dt, (1)
Young woman in park Blonde woman in office
SDXL FLUX w/ IPA w/o IPA
(a) U-Net diffusion models (SDXL) vs. DiTs (FLUX) (b) ID Customization with or without IP-Adapter (IPA)
Figure 2. The superiority of the DiT-based method over the UNet-based one and the side effects of IP-Adapter (IPA) [54].
where the velocity v is parameterized by the neural network weights Θ. The previous work [7] proposed solving Eq. (1) directly using differentiable ODE solvers. However, this method is computationally intensive, particularly for large neural network structures that parameterize vΘ (yt, t). A more efficient approach is to directly regress a vector field ut that defines a probability path [31] between p0 and p1. To formulate such a vector field ut, a forward process is defined that corresponds to a -
probability path pt between p0 and p1 = N (0, 1), expressed as
zt = atx0 + btε, where ε ∼ N (0, I). (2)
For a0 = 1, b0 = 0, a1 = 0, and b1 = 1, the marginals
pt (zt) = Eε∼N (0,I)pt (zt|ε) , (3)
align with the data and noise distributions. A marginal vector field ut can generate the marginal probability paths pt using conditional vector fields ut (·|ε):
ut (z) = Eε∼N (0,I)ut (z|ε) pt (z|ε)
pt (z) . (4)
It is intractable to regress ut directly due to the marginalization in Eq. (4). Thus, we switch to a simple and tractable objective, i.e., Conditional Flow Matching [12, 31]:
LCF M = Et,pt(z|ε),p(ε) ∥vΘ (z, t) − ut (z|ε)∥2
2 . (5)
Rectified Flow. Rectified flows (RFs) [4, 33] define the forward process as straight paths between the data distribution and a standard Gaussian distribution, i.e.,
zt = (1 − t) x0 + tε, (6)
where ε ∼ N (0, I). The network output directly parameterizes the velocity vΘ. We use LCF M (Eq. (5)) as the loss objective. Different flow trajectories and samplers are defined in [12], including logit-normal sampling, which we also employ in our model training. Text-to-image DiTs. Our general setup follows Stable Diffusion 3.5 [12] and FLUX [26], derived from Latent Diffusion Models (LDM) [41] for training text-to-image models in the latent space of a pretrained autoencoder. Apart
3

Identity Image
Face Identity Encoder
Projection Network
Control Image (Optional)
Attention
DiT Block 1
DiT Block 2
DiT Block N
DiT Block 1
DiT Block i+1
DiT Block N⋅i
DiT Block 2
DiT Block i
...
(+)
Residual
(+)
(+) (+) (+)
DiT Block i+2
... DiT
Block 2i
... ...
... ...
(+) (+) (+) (+)
DiT
InfuseNet
Text Encoder
Prompt: “A young woman in the park”
Attention
Noise Generated Image
Trainable Modules
Frozen Modules
Timestep
Timestep
Figure 3. The main framework of InfiniteYou (InfU) and the detailed architecture of InfuseNet. The projected identity features and an optional control image are injected by InfuseNet into text-to-image DiTs via residual connections. Specifically, each DiT block in InfuseNet predicts the output residuals of the corresponding i DiT blocks in the base model. Only InfuseNet and the projection network are trainable.
from encoding images into latent representations, we also encode the text conditioning ctext using pretrained, frozen text models. We use FLUX [26] as our DiT base model, which uses T5-XXL [40] and CLIP [39] for text encoding. FLUX uses a multimodal diffusion backbone, i.e., MMDiT [12]. Unlike traditional DiTs [37], MMDiT uses two separate sets of weights for the two modalities, given that text and image embeddings are conceptually different. This setup is equivalent to having two independent Tran-
sformers for each modality, but combines the sequences via joint attention to ensure that both representations work in their own space while considering each other. FLUX also applies several single DiT blocks [9] after MMDiT blocks. In addition to text-conditional image generation, the proposed InfU method also injects human facial identity information cid to accommodate additional modalities.
3.2. Network Architecture
Conventional approaches [51, 54] for this task were primarily developed for U-Net-based diffusion models like SDXL [38]. However, the image quality generated by these methods remains inadequate (see Figure 2 (a)). The significantly better performance of FLUX than SDXL in background clarity, human topology, small face quality, and overall appeal pinpoints the importance of DiT-based solutions. The proposed InfU is inspired by these efforts while presenting a novel solution built on DiTs. We focus o-
n the
development and comparison of DiT-based approaches due to their evident superiority over SDXL, as demonstrated. Unlike common practices [14, 51, 54] that modify attention [50] layers via IP-Adapter (IPA) [54] to inject identity information, we observe the non-optimality of IPA and avoid using it. As shown in Figure 2 (b), IPA typically introduces side effects, such as degradation in text-image alignment, image quality and aesthetics. We deduce that directly modifying the attention layers significa-
ntly compromises the generative capability of the base model. In addition, injecting text and identity information at the same positions (i.e., attention layers) may bring potential entanglement and conflict, thus harming overall performance. Therefore, we propose a novel alternative solution without IPA, mitigating these issues while maintaining high identity similarity. The proposed InfU framework is illustrated in Figure 3. The DiT base model (e.g., FLUX) remains frozen during training and serv-
es as the main branch for image generation. It ingests a noise map sampled from a standard Gaussian distribution, along with features from both the identity image and text prompt inputs, to generate an image that adheres to the text description while preserving the human facial identity through multiple denoising steps. The text prompt is embedded by a frozen text encoder and then fed into the base model through attention layers [12]. Below, we detail our mechanism for injecting identity informati-
on. We introduce InfuseNet, an important branch that injects
4

Real SPSS Data
Stage-1 Model Pretraining
Step 1: Stage-1 Pretraining
Stage-1 Model Inference
(No Plugins)
Prompt: “Asian girl in garden”
Step 2: Stage-1 Inference
Stage-1 Model Inference
Aesthetic Modules/LoRAs, Enhancement LoRAs, Face Swap Modules, Other Pre-/Post-processing ...
Source ID Target
...
...
Synthetic SPMS Data Step 3: Synthetic SPMS Data Generation
Stage-2 Model Supervised Fine-tuning
Source ID Target
...
...
Synthetic SPMS Data
Step 4: Stage-2 Supervised Fine-tuning
Stage-2 Model Inference (Final)
Step 5: Stage-2 Inference
Personalized Diffusion Model (InfiniteYou)
Personalized Diffusion Model (InfiniteYou)
Personalized Diffusion Model (InfiniteYou)
Personalized Diffusion Model (InfiniteYou)
(No Plugins)
Personalized Diffusion Model (InfiniteYou)
Prompt: “Asian girl in garden”
Figure 4. The introduced multi-stage training strategy with synthetic single-person-multiple-sample (SPMS) data and supervised fine-tuning (SFT).
identity and control signals (see Figure 3). InfuseNet shares a similar structure with the DiT base model but contains fewer Transformer blocks. We denote M as the number of DiT blocks in the base model and N as the number of DiT blocks in InfuseNet. We have M = N · i, where i is the multiplication factor. An optional control image, such as a five-facial-keypoint image, can be input into InfuseNet to control the generation position of the subject. If no control is needed, a pure black image can be-
 used instead. The identity image is encoded by a frozen face identity encoder into identity embeddings, which are fed into a projection network. This network projects the identity features and sends them to InfuseNet through attention layers, similar to how text features are handled in the DiT base model. InfuseNet then predicts the output residual connections of the DiT base model, contributing to the final image synthesis. Specifically, DiT block j in InfuseNet predicts the residuals of the fol-
lowing DiT blocks in the base model:
(j − 1) · i + 1, (j − 1) · i + 2, . . . , j · i. (7)
During training, the projection network and InfuseNet are trainable (using LCF M in Eq. (5)), while other modules remain frozen. The proposed InfuseNet can be seen as a generalization of ControlNet [56], capable of ingesting more modalities to influence the generation process via residual connections. This residual injection of identity features is distinct from the text injection through attention layers, which effectively separates text and identity inputs, thereby reducing potential entanglemen-
t and conflict. Thanks to this pure residual injection design that does not rely on IPA, the generative capability of the base model is less compromised, resulting in higher quality and improved text-image alignment. InfuseNet is also based on DiT, and its similar architecture with the base model ensures scalability and compatibility. The scalable network design and large-scale training enhance identity similarity.
3.3. Multi-Stage Training Strategy
Despite the robust network design of InfU, challenges in text-image alignment, generation aesthetics, and image quality degradation remain, especially in certain hard cases. This issue is critical for state-of-the-art approaches, necessitating a general solution to facilitate future research. We devise a multi-stage training strategy, including pretraining and supervised fine-tuning (SFT) [21, 49]. This strategy improves the quantity, quality, aesthetics, and textimage alignment of training data, -
thereby enhancing overall model performance w.r.t. the above problems. The training strategy is formulated in the following steps (see Figure 4). Step 1: We collect and filter real single-person-singlesample (SPSS) data from several human portrait datasets. The data, though not highly aesthetic or high-quality, can
5

be used for stage-1 pretraining of our InfU model, following standard training practices [51, 54]. Using real SPSS data, we employ a single authentic portrait image as both the source identity image and the generation target image to learn reconstruction during training. Step 2: After stage-1 pretraining of the InfU model, we conduct stage-1 model inference to evaluate image generation performance without any plugins, such as LoRA [18]. While the facial identity similarity of the generated result-
s is satisfactory, there remains room for improvement in textimage alignment, generation aesthetics, and image quality. Step 3: We then equip the stage-1 trained InfU model with a series of useful off-the-shelf modules, such as aesthetic modules/LoRAs, enhancement LoRAs, face swap modules [6], and other pre-/post-processing tools, etc. Although time-consuming and cumbersome, this process enables the model to generate synthetic data with much higher quality and aesthetics. We intentionally formulat-
e the data as single-person-multiple-sample (SPMS), where a real face image serves as the source identity image and the synthetic data serves as the generation target image. Step 4: The synthetic SPMS data is subsequently fed into the stage-1 trained InfU model for stage-2 supervised finetuning (SFT). Leveraging the properties of SPMS, we use real face data as the source identity and the paired highquality synthetic data as the generation target for model training. Other training settings remain s-
imilar to those in stage 1. This SFT enables the model to learn the high quality and aesthetics of the synthetic data while retaining identity similarity with the real face input. Step 5: After stage-2 SFT, the InfU model is ready for final inference and deployment. Without any plugins, the textimage alignment, generation aesthetics, and image quality of the generated results are significantly improved, while maintaining high facial identity similarity.
4. Experiments
4.1. Settings
Implementation details. We implement our InfiniteYou (InfU) framework using PyTorch and leverage the Hugging Face Diffusers library. The DiT base model is FLUX.1dev [26]. We set the multiplication factor i = 4 for InfuseNet. The projection network is derived from [54], with the token number of the projected identity feature set to 8. All experiments are conducted using FSDP [59] on NVIDIA H100 GPUs, each with 80GB VRAM. We use the AdamW [35] optimizer with β1 = 0.9 and β2 = 0.999. The weight decay-
 is set to 0.01. We employ Conditional Flow Matching [12, 31] (Eq. (5)) as the loss function with logitnormal sampling [12] of rf/lognorm(0.00, 1.00). For stage-1 pretraining, the model is trained using an initial learning rate of 2 × 10−5 on 128 GPUs. The total batch size
is set to 512, and stage-1 training spans 300k iterations. For stage-2 supervised fine-tuning, the model is trained with an initial learning rate of 1 × 10−5 on 64 GPUs, with a total batch size of 256. All other settings remain unchanged.
Datasets. For stage-1 pretraining, we use a total of nine open source datasets, including VGGFace2 [5], MillionCelebs [58], CelebA [34], CelebV-HQ [60], FFHQ [22], VFHQ [53], EasyPortrait [25], CelebVText [55], CosmicManHQ-1.0 [28], as well as several highquality internal datasets. We perform careful data preprocessing and filtering, removing images with low-quality small faces, multiple faces, watermarks, or NSFW content. The data is pre-processed for training using aspect ratio bucketing [1]. Th-
e total amount of single-person singlesample (SPSS) real data for stage-1 pre-training reaches 43 million, which we consider sufficient for large-scale training of identity-preserved image generation models. For stage-2 supervised fine-tuning, the total quantity of singleperson-multiple-sample (SPMS) synthetic data is 2 million. All data is generated by the stage-1 pretrained InfU model itself, equipped with useful off-the-shelf modules (see Section 3.3). High-quality synthetic data are also caref-
ully processed and filtered to obtain image pairs with normal poses, high ID resemblance, and good aesthetics, ensuring their usefulness. In addition, we observe that training the model with a mixture of captions from multiple sources, e.g., humans, small captioning models, and large vision-language models (VLMs), is beneficial. Besides the original captions in the datasets, we employ BLIP-2 [27] and InternVL2 [8] to obtain text captions from diverse sources for training.
Baselines. Since InfU is based on DiT (e.g., FLUX), we compare it with the most relevant and state-of-theart DiT-based approach, PuLID-FLUX [14]. Other opensource efforts, including FLUX.1-dev IP-Adapters from InstantX [20] and XLabs-AI [3], are not tailored for human faces. We select the one from InstantX as a representative baseline of this series for a more comprehensive comparison. Other conventional methods based on SDXL display much lower image quality due to the limitation of the base model-
 (see Figure 2) and are thus not fairly comparable.
Evaluation. We conduct evaluations on a portrait benchmark created by GPT-4o [19], comprising 200 prompts and corresponding gender information. This benchmark covers a variety of cases, including different prompt lengths, face sizes, views, scenes, ages, races, complexities, etc. We selected 15 representative identity samples and paired their gender with all appropriate prompts, resulting in 1, 497 testing outputs for systematic evaluations. We apply three representative and useful evaluation metr-
ics, i.e., ID Loss [10], CLIPScore [16], and PickScore [23]. ID Loss is defined as 1 − CosSim (IDgen, IDref), where CosSim is cosine similarity, and IDgen and IDref are the generated and reference identity images, respectively. A lower ID Loss means
6

Old man with glasses
reading a book at home Teen boy with glasses Smiling old woman gardening
in her backyard on sunny day
Middle-aged woman sitting
in a cafe wearing a hat Blonde woman in office
InfU (Ours) PuLID-FLUX FLUX.1-dev IP-Adapter ID Image
Figure 5. Qualitative comparison results of InfU with the state-of-the-art baselines, FLUX.1-dev IP-Adapter [20] and PuLID-FLUX [14].
higher similarity. We follow the original papers to use CLIPScore and PickScore. A higher CLIPScore indicates better text-image alignment, and a higher PickScore signifies better image quality and aesthetics.
4.2. Main Results
Qualitative comparison. The qualitative comparison results are shown in Figure 5. The identity similarity of the results generated by FLUX.1-dev IP-Adapter (IPA) [20] is inadequate. Besides, the text-image alignment and generation quality are inferior to other methods. PuLID-FLUX [14]
generates images with decent identity similarity. However, it suffers from poor text-image alignment (Column 1, 2, 4), and the image quality (e.g., bad hands in Column 5) and aesthetic appeal are degraded, indicating a large compromise in the generative capability of the base model. In addition, the face copy-paste issue is evident in the results generated by PuLID-FLUX (Column 5). In comparison, the proposed InfU outperforms the baselines across all dimensions. Quantitative comparison. The quanti-
tative comparative results are shown in Table 1. Our method achieves the lowest ID Loss, indicating th best identity similarity. As men
7

(a) FLUX.1-schnell (4 steps) (d) Cinematic Style LoRA
(b) Depth ControlNet (c) Pose ControlNet
++ ++
(e) OminiControl (ID + Object) (f) IP-Adapter (ID + Style)
Figure 6. Desirable plug-and-play properties of InfU, compatible with many popular methods and plugins.
Table 1. The ID Loss (lower is better) and CLIPScore (higher is better), and PickScore (higher is better) comparative results.
Method ID Loss↓ CLIPScore↑ PickScore↑ FLUX.1-dev IPA [20] 0.772 0.243 0.204 PuLID-FLUX [14] 0.225 0.286 0.212 InfU (Ours) 0.209 0.318 0.221
tioned, the existing release of FLUX.1-dev IPA [20] is not tailored for human faces, resulting in much worse identity similarity than other methods. In addition, our method obtains a significantly higher CLIPScore, demonstrating superior text-image alignment. Notably, the improvement in CLIPScore is substantial, reducing the gap to the upperbound performance of FLUX.1-dev on our test set (0.334) by 66.7%. Furthermore, our approach produces the best PickScore, suggesting that the overall image qual-
ity and generation aesthetics of InfU surpass all baselines. User study. We conducted a user study on InfU and the most competitive baseline, PuLID-FLUX [14]. Participants were asked to evaluate 70 sets of samples. The study included 16 participants from diverse backgrounds (e.g., QA professionals, researchers, engineers, designers, etc., from different countries) to reduce personal understanding bias. The best selection rate of our method reached 72.8% in overall performance (in aspects of identi-
ty similarity, textimage alignment, image quality, and generation aesthetics), and PuLID-FLUX was 27.2%. This suggests that our results are significantly better w.r.t. human preference.
Plug-and-play properties. The proposed InfU method features a desirable plug-and-play design, compatible with many existing methods. It naturally supports base model replacement with any variants of FLUX.1-dev, such as
Table 2. The ID Loss (lower is better) and CLIPScore (higher is better), and PickScore (higher is better) for ablation studies.
Method ID Loss↓ CLIPScore↑ PickScore↑ w/o multi-stage training 0.172 0.292 0.212 w/o SPMS 0.368 0.303 0.220 w/ IPA 0.180 0.241 0.199 full method 0.209 0.318 0.221
FLUX.1-schnell [26] for more efficient generation (e.g., in 4 steps, Figure 6 (a)). The compatibility with off-theshelf ControlNets [56] and LoRAs [18] provides additional controllability and flexibility for customized tasks (Figure 6 (b)(c)(d)). Notably, our compatibility with OminiControl [48] extends the potential of InfU for multi-concept personalization, such as interacted identity (ID) and object personalized generation (Figure 6 (e)). Although employing IP-Adapter (IPA) [54] with our method-
 for identity injection is suboptimal (see Section 4.3), InfU is readily compatible with IPA for stylization of personalized images, producing decent results when injecting style references via IPA (Figure 6 (f)). Our plug-and-play feature can extend to even more approaches beyond those mentioned, providing valuable contributions to the broader community.
4.3. Ablation Studies
We primarily conduct ablation studies on our core contributions of the multi-stage training strategy and the identity injection design. Since InfuseNet is indispensable, we highlight the importance of using InfuseNet solely, without incorporating IPA that could introduce negative impacts. The results are shown in Table 2. Without stage-2 supervised fine-tuning (SFT), InfU can generate images with
8

even higher identity similarity. However, text-image alignment degrades, and image quality and aesthetic appeal worsen. We deduce that the SPMS synthetic data introduces slightly more difficulty in learning identity, yet significantly improves other aspects. Using single-person-single-sample (SPSS) synthetic data instead of SPMS in stage-2 SFT (w/o SPMS) results in a significant drop in identity similarity, as well as degraded text-image alignment and image quality. We deduce that SPSS synthetic -
data may weaken the function of InfuseNet by directly learning a reconstruction of synthetic data rather than transforming reference real data into synthetic data. This may lead to fitting back to the base model’s distribution without sufficient data diversity. These results emphasize the importance of the multi-stage training strategy and the construction of the SPMS format. If we employ IPA together with InfuseNet for identity injection (distinct from stylization), text-image alignment, image qu-
ality, and aesthetics substantially deteriorate, despite a slight improvement in identity similarity (still worse than our stage-1 model). This underscores the non-optimality and negative effects of IPA.
5. Conclusion
We introduced InfU, a novel framework for identitypreserved image generation with advanced DiTs. InfU addresses key limitations of existing methods in identity similarity, text-image alignment, overall image quality, and generation aesthetics. Central to our framework is InfuseNet, which enhances identity preservation while maintaining generative capabilities. The multi-stage training strategy further improves our overall performance. Comprehensive experiments showed that InfU outperforms state-of-
-the-art baselines. Moreover, InfU is plug-and-play and compatible with various methods, contributing significantly to the broader community. InfU sets a new benchmark in this field, showcasing the immense potential of integrating DiTs for advanced personalized generation. Future work may explore enhancements in scalability and efficiency, as well as expanding the application of InfU to other domains.
Limitations and societal impact. Despite promising results, the identity similarity and overall quality of InfU could be further improved. Potential solutions include additional model scaling and an enhanced InfuseNet design. On another note, InfU may raise concerns about its potential to facilitate high-quality fake media synthesis. However, we believe that developing robust media forensics approaches can serve as effective safeguards. Acknowledgments. We sincerely acknowledge the insightful disc-
ussions from Stathi Fotiadis, Min Jin Chong, Xiao Yang, Tiancheng Zhi, Jing Liu, and Xiaohui Shen. We genuinely appreciate the help from Jincheng Liang and Lu Guo with our user study and qualitative evaluation.
References
[1] NovelAI Aspect Ratio Bucketing. https : / / github . com / NovelAI / novelai - aspect ratio-bucketing. Accessed: 2023-02-16. 6 [2] Recraft AI. Recraft V3 release: Recraft introduces a revolutionary ai model that thinks in design language. https:// www.recraft.ai/blog/recraft- introducesa - revolutionary - ai - model - that - thinks in-design-language, 2024. Accessed: 2024-11-01. 3
[3] XLabs AI. flux-ip-adapter-v2. https://huggingface. co/XLabs- AI/flux- ip- adapter- v2, 2024. Accessed: 2024-10-25. 2, 3, 6 [4] Michael S Albergo and Eric Vanden-Eijnden. Building normalizing flows with stochastic interpolants. arXiv preprint, arXiv:2209.15571, 2022. 2, 3 [5] Qiong Cao, Li Shen, Weidi Xie, Omkar M Parkhi, and Andrew Zisserman. VGGFace2: A dataset for recognising faces across pose and age. In FG, 2018. 6 [6] Renwang Chen, Xuanhong Chen, Bingbing Ni, and Yanhao Ge. SimSwap: An ef-
ficient framework for high fidelity face swapping. In ACMMM, 2020. 6 [7] Ricky TQ Chen, Yulia Rubanova, Jesse Bettencourt, and David K Duvenaud. Neural ordinary differential equations. In NeurIPS, 2018. 3 [8] Zhe Chen, Jiannan Wu, Wenhai Wang, Weijie Su, Guo Chen, Sen Xing, Muyan Zhong, Qinglong Zhang, Xizhou Zhu, Lewei Lu, et al. InternVL: Scaling up vision foundation models and aligning for generic visual-linguistic tasks. In CVPR, 2024. 6 [9] Mostafa Dehghani, Josip Djolonga, Basil Mustafa, Pio-
tr Padlewski, Jonathan Heek, Justin Gilmer, Andreas Peter Steiner, Mathilde Caron, Robert Geirhos, Ibrahim Alabdulmohsin, et al. Scaling vision transformers to 22 billion parameters. In ICML, 2023. 3, 4 [10] Jiankang Deng, Jia Guo, Niannan Xue, and Stefanos Zafeiriou. ArcFace: Additive angular margin loss for deep face recognition. In CVPR, 2019. 6 [11] Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Ge-
org Heigold, Sylvain Gelly, et al. An image is worth 16x16 words: Transformers for image recognition at scale. In ICLR, 2021. 3 [12] Patrick Esser, Sumith Kulal, Andreas Blattmann, Rahim Entezari, Jonas Mu ̈ller, Harry Saini, Yam Levi, Dominik Lorenz, Axel Sauer, Frederic Boesel, et al. Scaling rectified flow transformers for high-resolution image synthesis. In ICML, 2024. 2, 3, 4, 6 [13] Rinon Gal, Yuval Alaluf, Yuval Atzmon, Or Patashnik, Amit H Bermano, Gal Chechik, and Daniel CohenOr. An image-
 is worth one word: Personalizing text-toimage generation using textual inversion. arXiv preprint, arXiv:2208.01618, 2022. 3 [14] Zinan Guo, Yanze Wu, Zhuowei Chen, Lang Chen, Peng Zhang, and Qian He. PuLID: Pure and lightning id customization via contrastive alignment. In NeurIPS, 2024. 2, 3, 4, 6, 7, 8
9

[15] Zecheng He, Bo Sun, Felix Juefei-Xu, Haoyu Ma, Ankit Ramchandani, Vincent Cheung, Siddharth Shah, Anmol Kalia, Harihar Subramanyam, Alireza Zareian, et al. Imagine yourself: Tuning-free personalized image generation. arXiv preprint, arXiv:2409.13346, 2024. 3 [16] Jack Hessel, Ari Holtzman, Maxwell Forbes, Ronan Le Bras, and Yejin Choi. CLIPScore: a reference-free evaluation metric for image captioning. In EMNLP, 2021. 6 [17] Jonathan Ho, Ajay Jain, and Pieter Abbeel. Denoising diffusion prob-
abilistic models. In NeurIPS, 2020. 2 [18] Edward J Hu, Yelong Shen, Phillip Wallis, Zeyuan AllenZhu, Yuanzhi Li, Shean Wang, Lu Wang, Weizhu Chen, et al. LoRA: Low-rank adaptation of large language models. In ICLR, 2022. 3, 6, 8 [19] Aaron Hurst, Adam Lerer, Adam P Goucher, Adam Perelman, Aditya Ramesh, Aidan Clark, AJ Ostrow, Akila Welihinda, Alan Hayes, Alec Radford, et al. Gpt-4o system card. arXiv preprint, arXiv:2410.21276, 2024. 6 [20] InstantX. FLUX.1-dev-IP-Adapter. https : / / huggingfac-
e.co/InstantX/FLUX.1- dev- IPAdapter, 2024. Accessed: 2024-11-01. 2, 3, 6, 7, 8 [21] Xiaohu Jiang, Yixiao Ge, Yuying Ge, Dachuan Shi, Chun Yuan, and Ying Shan. Supervised fine-tuning in turn improves visual foundation models. arXiv preprint, arXiv:2401.10222, 2024. 2, 5 [22] Tero Karras, Samuli Laine, and Timo Aila. A style-based generator architecture for generative adversarial networks. In CVPR, 2019. 6 [23] Yuval Kirstain, Adam Polyak, Uriel Singer, Shahbuland Matiana, Joe Penna, and Omer Levy.-
 Pick-a-pic: An open dataset of user preferences for text-to-image generation. In NeurIPS, 2023. 6
[24] Nupur Kumari, Bingliang Zhang, Richard Zhang, Eli Shechtman, and Jun-Yan Zhu. Multi-concept customization of text-to-image diffusion. In CVPR, 2023. 3 [25] Karina Kvanchiani, Elizaveta Petrova, Karen Efremyan, Alexander Sautin, and Alexander Kapitanov. EasyPortraitface parsing and portrait segmentation dataset. arXiv preprint, arXiv:2304.13509, 2023. 6 [26] Black Forest Labs. FLUX.1 release: Announcing black forest labs. https : / / blackforestlabs . ai / announcing - black - forest - labs/, -
2024. Accessed: 2024-08-01. 2, 3, 4, 6, 8 [27] Junnan Li, Dongxu Li, Silvio Savarese, and Steven Hoi. BLIP-2: Bootstrapping language-image pre-training with frozen image encoders and large language models. In ICML, 2023. 6 [28] Shikai Li, Jianglin Fu, Kaiyuan Liu, Wentao Wang, KwanYee Lin, and Wayne Wu. CosmicMan: A text-to-image foundation model for humans. arXiv preprint, arXiv:2404.01294, 2024. 6 [29] Zhen Li, Mingdeng Cao, Xintao Wang, Zhongang Qi, MingMing Cheng, and Ying Shan. PhotoMaker: Cu-
stomizing realistic human photos via stacked id embedding. In CVPR, 2024. 3 [30] Shanchuan Lin, Anran Wang, and Xiao Yang. Sdxllightning: Progressive adversarial diffusion distillation. arXiv preprint, arXiv:2402.13929, 2024. 3
[31] Yaron Lipman, Ricky TQ Chen, Heli Ben-Hamu, Maximilian Nickel, and Matt Le. Flow matching for generative modeling. In ICLR, 2023. 3, 6 [32] Bingchen Liu, Ehsan Akhgari, Alexander Visheratin, Aleks Kamko, Linmiao Xu, Shivam Shrirao, Chase Lambert, Joao Souza, Suhail Doshi, and Daiqing Li. Playground v3: Improving text-to-image alignment with deep-fusion large language models. arXiv preprint, arXiv:2409.10695, 2024. 3 [33] Xingchao Liu, Chengyue Gong, and Qiang Liu. Flow straight and fast: Lear-
ning to generate and transfer data with rectified flow. arXiv preprint, arXiv:2209.03003, 2022. 2, 3 [34] Ziwei Liu, Ping Luo, Xiaogang Wang, and Xiaoou Tang. Deep learning face attributes in the wild. In ICCV, 2015. 6
[35] Ilya Loshchilov and Frank Hutter. Decoupled weight decay regularization. In ICLR, 2019. 6 [36] Foivos Paraperas Papantoniou, Alexandros Lattas, Stylianos Moschoglou, Jiankang Deng, Bernhard Kainz, and Stefanos Zafeiriou. Arc2Face: A foundation model for id-consistent human faces. In ECCV, 2024. 3 [37] William Peebles and Saining Xie. Scalable diffusion models with transformers. In ICCV, 2023. 2, 3, 4 [38] Dustin Podell, Zion English, Kyle Lacey, Andreas Blattmann, Tim Dockhorn, Jonas Mu ̈ller-
, Joe Penna, and Robin Rombach. SDXL: Improving latent diffusion models for high-resolution image synthesis. arXiv preprint, arXiv:2307.01952, 2023. 2, 3, 4 [39] Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh, Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, et al. Learning transferable visual models from natural language supervision. In ICML, 2021. 3, 4 [40] Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang, Michael Matena, Y-
anqi Zhou, Wei Li, and Peter J Liu. Exploring the limits of transfer learning with a unified text-to-text transformer. JMLR, 21:1–67, 2020. 3, 4 [41] Robin Rombach, Andreas Blattmann, Dominik Lorenz, Patrick Esser, and Bjo ̈rn Ommer. High-resolution image synthesis with latent diffusion models. In CVPR, 2022. 2, 3 [42] Olaf Ronneberger, Philipp Fischer, and Thomas Brox. UNet: Convolutional networks for biomedical image segmentation. In MICCAI, 2015. 2, 3 [43] Nataniel Ruiz, Yuanzhen Li, Varun Jamp-
ani, Yael Pritch, Michael Rubinstein, and Kfir Aberman. DreamBooth: Fine tuning text-to-image diffusion models for subject-driven generation. In CVPR, 2023. 3 [44] Nataniel Ruiz, Yuanzhen Li, Varun Jampani, Wei Wei, Tingbo Hou, Yael Pritch, Neal Wadhwa, Michael Rubinstein, and Kfir Aberman. HyperDreamBooth: Hypernetworks for fast personalization of text-to-image models. In CVPR, 2024. 3
[45] Axel Sauer, Dominik Lorenz, Andreas Blattmann, and Robin Rombach. Adversarial diffusion distillation. In ECCV, 2024. 3
[46] Jascha Sohl-Dickstein, Eric Weiss, Niru Maheswaranathan, and Surya Ganguli. Deep unsupervised learning using nonequilibrium thermodynamics. In ICML, 2015. 2
10

[47] Jiaming Song, Chenlin Meng, and Stefano Ermon. Denoising diffusion implicit models. arXiv preprint, arXiv:2010.02502, 2020. 2 [48] Zhenxiong Tan, Songhua Liu, Xingyi Yang, Qiaochu Xue, and Xinchao Wang. OminiControl: Minimal and universal control for diffusion transformer. arXiv preprint, arXiv:2411.15098, 2024. 8 [49] Hugo Touvron, Louis Martin, Kevin Stone, Peter Albert, Amjad Almahairi, Yasmine Babaei, Nikolay Bashlykov, Soumya Batra, Prajjwal Bhargava, Shruti Bhosale, et al. Llama 2: Ope-
n foundation and fine-tuned chat models. arXiv preprint, 2307.09288, 2023. 2, 5 [50] Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N Gomez, Łukasz Kaiser, and Illia Polosukhin. Attention is all you need. In NeurIPS, 2017. 2, 4
[51] Qixun Wang, Xu Bai, Haofan Wang, Zekui Qin, Anthony Chen, Huaxia Li, Xu Tang, and Yao Hu. InstantID: Zero-shot identity-preserving generation in seconds. arXiv preprint, arXiv:2401.07519, 2024. 2, 3, 4, 6 [52] Guangxuan Xiao, Tianwei Yin, William T Freeman, Fr ́edo Durand, and Song Han. FastComposer: Tuning-free multisubject image generation with localized attention. IJCV, pages 1–20, 2024. 3 [53] Liangbin Xie, Xintao Wang, Honglun Zhang, Chao Dong, and Ying Shan. VFHQ: A high-quality dataset-
 and benchmark for video face super-resolution. In CVPRW, 2022. 6 [54] Hu Ye, Jun Zhang, Sibo Liu, Xiao Han, and Wei Yang. IP
Adapter: Text compatible image prompt adapter for text-toimage diffusion models. arXiv preprint, arXiv:2308.06721, 2023. 2, 3, 4, 6, 8 [55] Jianhui Yu, Hao Zhu, Liming Jiang, Chen Change Loy, Weidong Cai, and Wayne Wu. CelebV-Text: A large-scale facial text-video dataset. In CVPR, 2023. 6 [56] Lvmin Zhang, Anyi Rao, and Maneesh Agrawala. Adding conditional control to text-to-image diffusion models. In ICCV, 2023. 2, 5, 8 [57] Shilong Zhang, Lianghua Huang, Xi Chen, Yifei Zhang, Zhi-Fan Wu, Yutong -
Feng, Wei Wang, Yujun Shen, Yu Liu, and Ping Luo. FlashFace: Human image personalization with high-fidelity identity preservation. arXiv preprint, arXiv:2403.17008, 2024. 3 [58] Yaobin Zhang, Weihong Deng, Mei Wang, Jiani Hu, Xian Li, Dongyue Zhao, and Dongchao Wen. Global-local GCN: Large-scale label noise cleansing for face recognition. In CVPR, 2020. 6 [59] Yanli Zhao, Andrew Gu, Rohan Varma, Liang Luo, ChienChin Huang, Min Xu, Less Wright, Hamid Shojanazeri, Myle Ott, Sam Shleifer, et al. PyTo-
rch FSDP: experiences on scaling fully sharded data parallel. arXiv preprint, arXiv:2304.11277, 2023. 6 [60] Hao Zhu, Wayne Wu, Wentao Zhu, Liming Jiang, Siwei Tang, Li Zhang, Ziwei Liu, and Chen Change Loy. CelebVHQ: A large-scale video facial attributes dataset. In ECCV, 2022. 6
11

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:44.449Z
- **Text Length:** 44621 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 11 of 11
