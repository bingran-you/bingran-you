# PDF Document: Liu et al. - 2025 - Diverse Instance Generation via Diffusion Models for Enhanced Few-Shot Object Detection in Remote Se.pdf

**File Path:** Liu et al. - 2025 - Diverse Instance Generation via Diffusion Models for Enhanced Few-Shot Object Detection in Remote Se.pdf

**Processed Date:** 2026-02-10T18:14:42.511Z

**File Size:** 849.74 KB

**Total Pages:** 6

**Extracted Pages:** 6

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3310

**Title:** Diverse Instance Generation via Diffusion Models for Enhanced Few-Shot Object Detection in Remote Sensing Images

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

1
Diverse Instance Generation via Diffusion Models for Enhanced
Few-Shot Object Detection in Remote Sensing Images
Yanxing Liu , Jiancheng Pan, Jianwei Yang , Tiancheng Chen , Peiling Zhou and Bingchen Zhang
Abstract—Few-shot object detection (FSOD) aims to detect novel instances with only a limited number of labeled training samples, presenting a challenge that is particularly prominent in numerous remote sensing applications such as endangered species monitoring and disaster assessment. Existing FSOD methods for remote sensing images (RSIs) have achieved promising progress but remain constrained by the limited diversity of instances. To address this issue, we propose a novel framework that can lever-
age a diffusion model pretrained on large-scale natural images to synthesize diverse remote sensing instances, thereby improving the performance of few-shot object detectors. Instead of directly synthesizing complete remote sensing images, we first generate instance-level slices via a specialized slice-to-slice module, and then embed these slices into full-scale imagery for enhanced data augmentation. To further adapt diffusion models for remote sensing scenarios, we develop a class-agnostic image-
 inversion module that can invert remote sensing instance slices into semantic space. Additionally, we introduce contrastive loss to semantically align the synthesized images with their corresponding classes. Experimental results show that our method has achieved an average performance improvement of 4.4% across multiple datasets and various approaches. Ablation experiments indicate that the elaborately designed inversion module can effectively enhance the performance of FSOD methods, and the sema-
ntic contrastive loss can further boost the performance.
Index Terms—Diffusion model, few-shot object detection, optical remote sensing imagery.
I. INTRODUCTION
I
N the past decade, visual object detection [1]–[4] has made significant progress, thanks to the remarkable power of deep-learning methods. Nonetheless, most current detectors heavily rely on large-scale training samples to achieve satisfactory performance, while in practice, data acquisition and annotation within the field of remote sensing are both challenging [5]. Obtaining sufficient labeled data is time-consuming and, for many applications, may even be infeasible. When only
Yanxing Liu, Tiancheng Chen and Bingchen Zhang are with the National Key Laboratory of Microwave Imaging Technology, Aerospace Information Research Institute, Chinese Academy of Sciences, Beijing 100094, China, and also with the School of Electronic, Electrical and Communication Engineering, University of Chinese Academy of Sciences, Beijing 100049, China. (email: liuyanxing21@mails.ucas.ac.cn; chentiancheng21@mails.ucas.ac.cn; zhangbc@aircas.ac.cn) Jiancheng Pan is with the department of Earth Sy-
stem Science, Tsinghua University, Beijing 100084, China.(email: jiancheng.pan.pluse@gamil.com) Jianwei Yang and Peiling Zhou are with the Aerospace Information Research Institute, Chinese Academy of Sciences, Beijing 100094, China, also with the Key Laboratory of Technology in Geo-Spatial Information Processing and Application System, Chinese Academy of Sciences, Beijing 100190, China, and also with the School of Electronic, Electrical and Communication Engineering, University of Chinese Academy -
of Sciences, Beijing 101408, China.(emial:yangjianwei20@mails.ucas.ac.cn; zhoupeiling21@mails.ucas.ac.cn)
a few training samples are available, detectors based on deep learning could suffer from overfitting and low detection performance. To address these limitations, several works [6], [7] have been proposed to study more effective few-shot detectors in remote sensing images (RSIs). Concretely, most FSOD approaches can be roughly divided into fine-tuning [7], [8] methods and meta-learning [6] methods. For example, Li et al. [6] propose Prototype-CNN, which leverages a prototype learning network (PLN) -
and a prototype-guided RPN (PG RPN) to detect few-shot novel instances. MSOCL [8] incorporates multiscale object contrastive learning to more fully represent object features by adopting a Siamese network structure in few-shot training. Liu et al. [7] propose a labelconsistent classifier and a coarse-to-fine RPN to alleviate class and location biases. MP-FSDET [9] further employs multimodal prototypes to compensate for the limitations of singlemodal features, while LAE-DINO [10] applies multi-modal-
 features to open-set detection tasks. However, although previous approaches have demonstrated their effectiveness, they only trained detectors on quite a few labeled samples and do not increase the diversity of instances. Currently, large-scale pretrained diffusion models have made tremendous progress in the computer vision field, and they can generate diverse instances by leveraging large-scale pretrained samples. Zhang et al. [11] have explored the application of condition diffusion models for -
direct image generation to improve the performance of FSOD in RSIs. Control CopyPaste [12] proposed a controllable diffusion-based method to enhance the performance of FSOD by leveraging diverse contextual information. However, we observed that this approach may generate noisy objects beyond the conditioned regions. Inspired by this, we propose Diverse Instance Generation based Few-Shot Object Detection for Remote Sensing Images (DIG-FSOD), a framework that aims to leverage a diffusion model to ge-
nerate diverse object instances, thereby enhancing the performance of few-shot object detection in RSIs. To avoid the generation of unexpected noise targets, we do not directly generate the complete remote sensing images. Instead, we first generate slices of remote sensing instances and subsequently embed these slices into a full image. Specifically, we first propose the Hybrid Image Inversion Module (HIIM) that inverts the remote sensing instances to the unified latent space to bridge the gap bet-
ween existing diffusion models based on natural images and those designed for remote sensing slices. In contrast to the previous approach [13] that only use CLIP to invert images to the textual latent space, we simultaneously employ both detail-rich self-supervised features [14] and semantically-rich CLIP features. In addition,
arXiv:2511.18031v1 [eess.IV] 22 Nov 2025

2
to ensure the model focuses more on the semantic features of target instances rather than simply repeating reference instances, we propose a semantic contrastive loss [15]–[17]. To enable the current diffusion model to generate high-quality remote sensing instance slices, we employ a two-stage training strategy to fully leverage existing remote sensing datasets. In the first stage, we train a class-agnostic HIIM using data of base classes. This module can invert few-shot support images into the te-
xtual condition space and use the few-shot images as reference images to generate target instances. In the second stage, HIIM is fine-tuned on few-shot novel instances, thereby enhancing semantic features through class contrastive learning. Extensive comparative and ablation experiments conducted on DIOR [18] and NWPU VHR-10 [19] datasets demonstrate that our method effectively improves detector performance in remote sensing few-shot object detection. In summary, the main contribution of this arti-
cle can be summarized as follows. 1. We propose an efficient FSOD framework based on diffusion model, which enables existing diffusion models to generate high-quality RSIs by inverting condition RSIs to domain-agnostic semantic spaces, and enhances semantic features through additional semantic contrastive loss. 2. We design the HIIM that simultaneously leverages detailrich self-supervised features and semantically rich CLIP features to generate high-quality remote sensing images. 3. To further boo-
st FSOD performance and ensure semantic consistency in generated images, we apply a contrastive loss between global features of condition image and semantic textual features.
II. METHOD
A. Overall Framework
The overall framework of our method is based on the latent diffusion model [20] and is illustrated in Fig. 1. First, the global concept encoder and local feature encoder Eg(·), El(·) are trained to invert a condition remote sensing image x to lower-dimension latent spaces. The process can be formulated as fg, fl = Eg(T (x)), El(T (x)), where T (·) denotes some basic augmentations like flipping and rotation to avoid simply copying the original image. To reduce computational cost, x will be mapped t-
o a lower-dimensional latent space z = E(x) by an encoder trained from VAE. Then, the condition diffusion model εθ(·) will be trained on the latent space to generate latent codes based on both global and local conditions fg and fl. We first adopt the mean-squared loss (MSE) to train the diffusion model:
Lldm := Ez,fg,fl,ε∼N (0,1),t
h
∥ε − εθ(zt, t, fg, fl)∥2
2
i
(1)
where ε denotes the unscaled gaussian noise, t is the time step, zt is the latent noise at time step t, fg and fl represent the global and local features extracted from Eg(·) and El(·). In the inference phase, a random gaussian noise zT is iteratively denoised to z0 and decoded into the pixel space by x′ = D(z0), where D denotes the decoder trained in VAE. In addition to the original MSE loss, we also employ a contrastive loss
to maintain consistency between global features and textual semantic features. The details description of our proposed HIIM will be introduced in section II-B. The generated image is supervised by the reconstruction loss of MSE and an additional contrastive learning loss in section II-C.
B. Hybrid Image Inversion Module
The Hybrid Image Inversion Module (HIIM) contains a global concept encoder, which aims to invert the condition image into a textual latent space, and a local feature encoder, which aims to maintain the detailed info of the condition image. Unlike text-to-image (T2I) tasks, image-to-image (I2I) tasks demand not only the ability to generate images but also a comprehensive understanding of the condition image. The understanding of condition image requires semantic information from the condition image-
, whereas image generation tasks need more fine-grained features from the condition image. Therefore, we use CLIP in the global concept encoder to extract semantic information, while employing DINOv2 [14] in the local feature extractor to obtain more fine-grained details. Local features serve as extra conditional information in the generation process of the diffusion model through additional cross-attention layers. We incorporate global features in the same manner as the original Stable Diffusion -
and utilize an additional cross-attention layer to integrate local features into the query process.
1) Global concept encoder: The clip features are used in the global concept encoder to provide global semantic features. The [CLS] feature in CLIP maintains rich semantic information about the target and is aligned with the text encoder, so we directly use it as a semantic feature. However, a single [CLS] feature is not sufficient for a comprehensive understanding of the condition image. Therefore, we use Qformer to provide additional semantic information about the target. Here, the Qformer denote-
s a transformer module where the queries are learnable queries, and the clip features are input as a part of keys and values. We also use PerceiverAttention to aggregate queries and clip features. The detailed calculation is shown in
f′
g = Sof tmax( Q(fq)K([fclip, fq])
√d )V ([fclip, fq]) (2)
where the fq denotes learnable queries and fclip denotes the features of clip. At last, the [CLS] feature of clip and fg′ will be concatenated into the global feature fg, as described in Eq. 3.
fg = Concat(f[CLS], f ′
g) (3)
2) Local feature encoder: Relying solely on global features can hinder the model from focusing on the discriminative local features of the condition image, thereby diminishing the reliability of the generated image. Therefore, we employ the multi-level patch features derived from DINOv2 [14] to provide fine-grained references for the generation process, as self-supervised models contain richer object details compared to models using cross-modal contrastive learning.

3
CLIP DINO
Condition Image
Qformer
Learnable Queries
Local Features
[CLS]
A photo of remote-sensing images like
Text encoder
......
SelfAttn
CrossAttn
CrossAttn
SelfAttn
CrossAttn
CrossAttn
...
Pretrained modules
Finetuned modules
Addition modules
Airplane Ship
...
...
L!"#
Fig. 1. Overall framework of our proposed DIG-FSOD. To keep things simple, the VAE encoder-decoder architecture is not shown in the illustration. Our method first encodes the condition image into global and local latent features through dedicated encoders, and then leverages a conditional diffusion model in the latent space to generate new latent features. The generated instances are finally generated into large remote sensing images using the AnyDoor. During training, global-text alignment is rei-
nforced using a contrastive loss, while the final reconstructed images are supervised by both mean-square error and contrastive losses.
As demonstrated in Janus, self-supervised features and textvision contrastive features each exhibit distinct advantages and disadvantages. Therefore, we employ multi-layer DINOv2 [14] features to provide discriminative local features for the reference image. Specifically, the local feature extractor processes a condition image to produce multi-scale detailed image features zI = {zk}K
k=0, where zk represents the visual features at the scale of k in DINOv2 visual backbone and K refers to the number of target scales. We set K to 5 in all experimental settings. The detailed calculation of local feature extractor is demonstrated in Eq. 4.
fl = Concat({zk}K
k=0) (4)
The local features are conditioned into the reverse diffusion process through additional cross attention layers.
C. Class Contrastive Learning
To enhance the semantic information of the target image as much as possible, we employ contrastive learning to supervise the generative model. Nevertheless, performing contrastive learning directly on the generated images and class condition in a manner similar to CLIP necessitates decoding the corresponding latent representations during the training phase. Therefore, we project the global feature into the textual semantic space via a single-layer perceptron layer, subsequently aligning it with th-
e textual representations using the InfoNCE loss function. We use the InfoNCE loss between the generated images and the text embeddings from CLIP, in order to ensure that the generated images preserve as much of the corresponding target’s semantic information as possible. The loss function can be formulated as
Lcon = − 1
N
N
X
i=1
log exp( MLP (fg)·f+
t
τ)
PN
j=1 exp( M LP (fg)·f −
t
τ)
(5)
where N is batch size, M LP (·) denotes the Multilayer Perceptron projection function used in Qformer and ft represents the CLIP feature associated with the classes. The contrastive loss function effectively improves the consistency between generated instances and semantic classes, thereby ensuring that the generated instances accurately capture the semantic information inherent in the target classes.
III. EXPERIMENTS
A. Datasets, Evaluation and Implementation Details
1) Datasets: To verify the effectiveness of our proposed method, we conduct experiments on DIOR [18] and NWPU VHR-10 [19] datasets. DIOR [18] is a large-scale public remote sensing object detection dataset that contains 23463 images with 192472 objects involving 20 common categories. The entire dataset is divided into three parts: training set, validation set, and testing set, containing 5682, 5863, and 11738 images, respectively. Following TEMO [21], we use airplane, baseball field, expressway to-
ll station, tennis court and windmill as few-shot novel classes while the rest classes of DIOR [18] dataset as set as base classes. NWPU VHR-10 [19] is a very high-resolution optical remote-sensing dataset. The dataset contains 800 optical images, which are composed of 150 negative samples without any annotated objects and 650 positive samples with at least one annotated object. The airplane, baseball-diamond and tennis court are set as few-shot novel classes while the rest classes of the dataset -
are regarded as base datasets. We adopt the evaluation metrics used in SAE-FSDet [7], calculating mean Average Precision (mAP) for few-shot novel classes across each dataset.

4
2) Implementation Details: Most of our experiments are based on the SAE-FSDet [7], unless otherwise specified. Owing to the flexible design of the data generation method, our method can be compatible with other FSOD detectors. We use the stable diffusion v1.5, which is pretrained on LAION5B, and use the clip-vit-g as the text encoder to enhance the text feature extraction capability of remote sensing categories. The total training is divided into two phases. The first phase pretrains the generator-
 on a combined dataset of DIOR [18], DOTA and FAIR1M datasets to get a class-agnostic HIIM. Note that to avoid class leak, we filter out all novel instances in the combined dataset. The model is then fine-tuned on the fewshot dataset to enhance its ability to generate novel classes. The learning rate of 5e − 5 is set for both base training and fine-tuning stages, and we use the Adam optimizer to optimize the training parameters. The batch size is set to 4, the epoch of training is set to 12, and t-
he experiments are carried out with PyTorch on an Nvidia RTX 4090 GPU.
B. Experimental Results and Comparisons
In this section, we evaluate the effectiveness of our proposed method with different FSOD methods on DIOR [18] and NWPU VHR-10 [19] datasets. 1) Results on DIOR Dataset: Under the challenging largescale DIOR [18] dataset,we exhibit the performance gains achieved by employing our approach with FSCE [22], MSOCL [8] and SAE-FSDet [7] on 3-, 5-, 10- and 20shot settings. We have also adopted current remote sensing foundation diffusion model [23] to generate RSIs for data augmentation. Some approaches [-
22] are designed for natural scenes and other approaches [7], [8] are designed for remote sensing imagery. The detail experimental results are reported in Table I.
TABLE I FSOD PERFORMANCE ON THE DIOR DATASET UNDER THE 3-, 5-, 10-, AND 20-SHOT SETTINGS
Method 3-shot 5-shot 10-shot 20-shot
FSCE [22] 18.30 18.59 26.16 29.60 FSCE + Ours 21.32 26.98 28.87 33.49
MSOCL [8] 25.75 26.16 32.65 37.36 MSOCL + Ours 31.05 33.36 34.52 42.18
SAE-FSDet [7] 15.89 17.04 30.20 37.34 SAE-FSDet + T2E [23] 16.34 17.20 29.99 35.97 SAE-FSDet + T2E-Inpating [23] 19.51 19.82 32.10 38.79 SAE-FSDet + Ours 22.09 29.85 36.66 40.81
As the table demonstrates, our method can enhance the performance of various FSOD approaches, especially when the training data is extremely limited. As T2E models lack the ability to generate instance-level remote sensing objects, and inpainting models exhibit limited positional control in remote sensing images, the performance improvement of these methods are limited. When employing SAE-FSDet [7] as the baseline model, our method can increase the mAP of novel classes by an average of 7.23% acros-
s four few-shot settings, with a maximum performance improvement of 12.81%.
Fig. 2 shows some generated instances and corresponding reference images. The first row shows the reference images and the second row shows the generated image. As shown in Fig. 2, our method can increase the diversity of few-shot target instances while preserving their discriminative features.
2) Results on NWPU VHR-10 Dataset: To further demonstrate the effectiveness of our proposed method, we also conduct experiments on the NWPU VHR-10 [19] dataset. We compare our method with the approach for natural scenes [22] and those for remote sensing images [7], [8]. The comparison results are reported in Table II.
TABLE II FSOD PERFORMANCE ON THE NWPU VHR-10 DATASET UNDER THE 3, 5, 10 AND 20-SHOT SETTING
Method 3-shot 5-shot 10-shot 20-shot
FSCE [22] 41.63 43.08 56.60 77.52 MSOCL [8] 44.82 46.45 51.19 75.49 SAE-FSDet [7] 57.96 59.40 71.02 85.08
FSCE + Ours 47.96 51.68 60.09 79.70 MSOCL + Ours 61.69 70.78 73.38 79.29 SAE-FSDet + Ours 59.83 61.76 72.56 85.54
The table II demonstrates that our method achieves improved performance across various baseline models. Our method improves the mAP by an average of 1.56% on SAEFSDet [7], with a maximum detection performance improvement of 2.36%. Notably, as the number of samples increases, the improvement in the model performance gradually diminishes, due to the model approaching its capacity limit.
C. Ablation Studies
To better understand the effectiveness of each proposed module in our proposed method, we conduct qualitative and quantitative experiments on the DIOR [18] dataset.
1) Ablation on components: To analyze the importance of each module we proposed, we perform ablation studies on different components over the DIOR [18] dataset. We first
TABLE III FSOD PERFORMANCE ON THE DIOR DATASET WITH DIFFERENT MODULES UNDER THE 3, 5, 10 AND 20-SHOT SETTING
Method Components 3-shot 5-shot 10-shot 20-shot
HIIM Contrastive loss Baseline 15.89 17.04 30.20 37.34 Baseline† 16.54 19.48 31.78 39.45 Ours ✓ 21.56 26.97 35.78 39.67 Ours ✓ ✓ 22.09 29.85 36.66 40.81
adopt SAE-FSDet [7] as our baseline and report the detection results of it on the DIOR [18] dataset in the first row. We then use text inversion to generate some instances, and conduct experiments by concatenating them with the original dataset as a new dataset. The experimental results on the new dataset are shown in the second row of Table III. The experiments demonstrate that while instances generated through few-shot finetune-based diffusion can enhance FSOD performance, relying solely on CLIP-
 features is insufficient for generating

5
Fig. 2. Visualization of generated object instances. Instances in the first row are reference images and those in the second row are generated images.
high-quality instances to help improve the performance of FSOD. Next, we employ our DIG-FSOD with only HIIM to generate target instances that match the sample quantity, conduct experiments by concatenating them with the original dataset to form a new dataset and the experimental results are shown in the third row of Table III. Finally, we incorporate an additional class contrastive loss to enhance the semantic consistency of the generated images. The experimental results demonstrate that HIIM can -
significantly improve FSOD performance, while the class contrastive learning loss can further enhance the performance.
2) Ablation on HIIM: HIIM aims to invert remote-sensing instances to conditional latent spaces. And to verify the effectiveness of different image encoder, we conduct ablation studies on DIOR dataset.
TABLE IV ABLATION STUDY FOR HYBRID IMAGE INVERSION MODULE DESIGN
Method Encglobal Enclocal 3-shot 5-shot 10-shot 20-shot Baseline ✗ ✗ 15.89 17.04 30.20 37.34 Ours CLIP ✗ 16.54 19.48 31.78 39.45 Ours CLIP CLIP 20.99 28.25 34.26 39.78 Ours CLIP DINOv2 22.09 29.85 36.66 40.81
The ablation experiment results regarding the selection strategies for the global and local feature extractors are shown in Tab. IV. The results in the first row present the performance of the baseline method, while the second line reports the results obtained with the data augmentation method and the results demonstrate that our data augmentation method can effectively improve detection performance on datasets with limited samples. We subsequently integrated a local feature encoder to further enh-
ance the detailed information in the generated images, as demonstrated in the third row of Tab. IV. Finally, we substitute the local feature encoder with the more fine-grained DINOv2 [14], as illustrated in the fourth row of Tab. IV. Compared to the baseline, our method achieves an average improvement of 7.23%.
IV. CONCLUSION
This letter proposes a novel framework named DIG-FSOD, which aims to leverage a diffusion model to generate diverse remote sensing instances, to further improve the performance of few-shot object detectors. We employ a novel HIIM to simultaneously leverage both global semantic features and local detail features from the conditional images to synthesize higher-quality images. Furthermore, we incorporate a novel contrastive learning loss to enhance the consistency between the conditional image and i-
ts class. Experiments on DIOR [18] and NWPU VHR-10 [19] datasets have validated the effectiveness of our proposed method.
REFERENCES
[1] Y. Fu, X. Qiu, B. Ren, Y. Fu, R. Timofte, N. Sebe, M.-H. Yang, L. Van Gool, K. Zhang, Q. Nong et al., “Ntire 2025 challenge on crossdomain few-shot object detection: Methods and results,” in Proceedings of the Computer Vision and Pattern Recognition Conference, 2025, pp. 1048–1069. [2] J. Pan, Y. Liu, X. He, L. Peng, J. Li, Y. Sun, and X. Huang, “Enhance then search: An augmentation-search strategy with foundation models for cross-domain few-shot object detection,” in Proceedings of the Comput-
er Vision and Pattern Recognition Conference, 2025, pp. 15481556. [3] J. Li, J. Pan, Y. Sun, and X. Huang, “Semantic-aware ship detection with vision-language integration,” arXiv preprint arXiv:2508.15930, 2025. [4] Y. Li, X. Qiu, Y. Fu, J. Chen, T. Qian, X. Zheng, D. P. Paudel, Y. Fu, X. Huang, L. Van Gool et al., “Domain-rag: Retrieval-guided compositional image generation for cross-domain few-shot object detection,” arXiv preprint arXiv:2506.05872, 2025.
[5] J. Pan, S. Lei, Y. Fu, J. Li, Y. Liu, Y. Sun, X. He, L. Peng, X. Huang, and B. Zhao, “Earthsynth: Generating informative earth observation with diffusion models,” arXiv preprint arXiv:2505.12108, 2025.
[6] X. Li, J. Deng, and Y. Fang, “Few-shot object detection on remote sensing images,” IEEE Transactions on Geoscience and Remote Sensing, vol. 60, pp. 1–14, 2021. [7] Y. Liu, Z. Pan, J. Yang, B. Zhang, G. Zhou, Y. Hu, and Q. Ye, “Few-shot object detection in remote-sensing images via label-consistent classifier and gradual regression,” IEEE Transactions on Geoscience and Remote Sensing, vol. 62, pp. 1–14, 2024. [8] J. Chen, D. Qin, D. Hou, J. Zhang, M. Deng, and G. Sun, “Multiscale object contras-
tive learning-derived few-shot object detection in vhr imagery,” IEEE Transactions on Geoscience and Remote Sensing, vol. 60, pp. 1–15, 2022.

6
[9] Y. Liu, Z. Pan, J. Yang, P. Zhou, and B. Zhang, “Multi-modal prototypes for few-shot object detection in remote sensing images,” Remote Sensing, vol. 16, no. 24, p. 4693, 2024. [10] J. Pan, Y. Liu, Y. Fu, M. Ma, J. Li, D. P. Paudel, L. Van Gool, and X. Huang, “Locate anything on earth: Advancing open-vocabulary object detection for remote sensing community,” in Proceedings of the AAAI Conference on Artificial Intelligence, vol. 39, no. 6, 2025, pp. 62816289. [11] T. Zhang, Y. Zhuang, G. Wang, -
H. Chen, H. Wang, L. Li, and J. Li, “Controllable generative knowledge-driven few-shot object detection from optical remote sensing imagery,” IEEE Transactions on Geoscience and Remote Sensing, vol. 63, pp. 1–19, 2025. [12] Y. Liu, J. Pan, and B. Zhang, “Control copy-paste: Controllable diffusion-based augmentation method for remote sensing few-shot object detection,” arXiv preprint arXiv:2507.21816, 2025.
[13] Y. Zhang, Y. Song, J. Liu, R. Wang, J. Yu, H. Tang, H. Li, X. Tang, Y. Hu, H. Pan et al., “Ssr-encoder: Encoding selective subject representation for subject-driven generation,” in Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, 2024, pp. 8069–8078. [14] M. Oquab, T. Darcet, T. Moutakanni, H. Vo, M. Szafraniec, V. Khalidov, P. Fernandez, D. Haziza, F. Massa, A. El-Nouby et al., “Dinov2: Learning robust visual features without supervision,” arXiv preprint arX-
iv:2304.07193, 2023.
[15] J. Pan, Q. Ma, and C. Bai, “Reducing semantic confusion: Sceneaware aggregation network for remote sensing cross-modal retrieval,” in Proceedings of the 2023 ACM International Conference on Multimedia Retrieval, 2023, pp. 398–406. [16] ——, “A prior instruction representation framework for remote sensing image-text retrieval,” in Proceedings of the 31st ACM International Conference on Multimedia, 2023, pp. 611–620.
[17] Q. Ma, J. Pan, and C. Bai, “Direction-oriented visual–semantic embedding model for remote sensing image–text retrieval,” IEEE Transactions on Geoscience and Remote Sensing, vol. 62, pp. 1–14, 2024.
[18] K. Li, G. Wan, G. Cheng, L. Meng, and J. Han, “Object detection in optical remote sensing images: A survey and a new benchmark,” ISPRS journal of photogrammetry and remote sensing, vol. 159, pp. 296–307, 2020. [19] G. Cheng, J. Han, P. Zhou, and L. Guo, “Multi-class geospatial object detection and geographic image classification based on collection of part detectors,” ISPRS Journal of Photogrammetry and Remote Sensing, vol. 98, pp. 119–132, 2014. [20] R. Rombach, A. Blattmann, D. Lorenz, P. E-
sser, and B. Ommer, “Highresolution image synthesis with latent diffusion models,” in Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, 2022, pp. 10 684–10 695. [21] X. Lu, X. Sun, W. Diao, Y. Mao, J. Li, Y. Zhang, P. Wang, and K. Fu, “Few-shot object detection in aerial imagery guided by text-modal knowledge,” IEEE Transactions on Geoscience and Remote Sensing, vol. 61, pp. 1–19, 2023. [22] B. Sun, B. Li, S. Cai, Y. Yuan, and C. Zhang, “Fsce: Few-shot object detec-
tion via contrastive proposal encoding,” in Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, 2021, pp. 7352–7362. [23] C. Liu, K. Chen, R. Zhao, Z. Zou, and Z. Shi, “Text2earth: Unlocking text-driven remote sensing image generation with a global-scale dataset and a foundation model,” IEEE Geoscience and Remote Sensing Magazine, vol. 13, no. 3, pp. 238–259, 2025.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:42.511Z
- **Text Length:** 29937 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 6 of 6
