# PDF Document: Liu et al. - 2024 - View Distribution Alignment with Progressive Adversarial Learning for UAV Visual Geo-Localization.pdf

**File Path:** Liu et al. - 2024 - View Distribution Alignment with Progressive Adversarial Learning for UAV Visual Geo-Localization.pdf

**Processed Date:** 2026-02-10T18:14:38.739Z

**File Size:** 1616.09 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2757

**Title:** View Distribution Alignment with Progressive Adversarial Learning for UAV Visual Geo-Localization

**Collection:** Large Files

---

## Extracted Text Content

View Distribution Alignment with Progressive
Adversarial Learning for UAV Visual
Geo-Localization ⋆
Cuiwei Liu, Jiahao Liu, Huaijun Qiu , Zhaokui Li, and Xiangbin Shi
School of Computer Science, Shenyang Aerospace University, Shenyang, China Corresponding author: Huaijun Qiu Email: liucuiwei@sau.edu.cn; mraliens@163.com; 20220071@email.sau.edu.cn; lzk@sau.edu.cn; sxb@sau.edu.cn
Abstract. Unmanned Aerial Vehicle (UAV) visual geo-localization aims to match images of the same geographic target captured from different views, i.e., the UAV view and the satellite view. It is very challenging due to the large appearance differences in UAV-satellite image pairs. Previous works map images captured by UAVs and satellites to a shared feature space and employ a classification framework to learn location-dependent features while neglecting the overall distribution shift between the U-
AV view and the satellite view. In this paper, we address these limitations by introducing distribution alignment of the two views to shorten their distance in a common space. Specifically, we propose an end-to-end network, called PVDA (Progressive View Distribution Alignment). During training, feature encoder, location classifier, and view discriminator are jointly optimized by a novel progressive adversarial learning strategy. Competition between feature encoder and view discriminator prompts bo-
th of them to be stronger. It turns out that the adversarial learning is progressively emphasized until UAV-view images are indistinguishable from satellite-view images. As a result, the proposed PVDA becomes powerful in learning location-dependent yet view-invariant features with good scalability towards unseen images of new locations. Compared to the state-of-the-art methods, the proposed PVDA requires less inference time but has achieved superior performance on the University-1652 dataset.
Keywords: UAV visual geo-localization · UAV view · satellite view · distribution alignment · adversarial learning.
⋆ This work was supported in part by the National Natural Science Foundation of China under Grant No. 62171295, and in part by the Liaoning Provincial Natural Science Foundation under Grant No.2021-MS-266, and in part by the Applied Basic Research Project of Liaoning Province under Grant 2023JH2/101300204, and in part by the Shenyang Science and Technology Innovation Program for Young and Middle-aged Scientists under Grant No.RC210427.
arXiv:2401.01573v1 [cs.CV] 3 Jan 2024

2 C. Liu et al.
1 Introduction
Cross-view geo-localization task is to acquire the real-world geographic position of a given image by retrieving the most relevant images in a geo-tagged reference database captured from another view, e.g., the satellite view. Such technologies have attracted great attention since they are particularly useful in practical applications, such as autonomous driving [1], augmented reality [2], and mobile robots [3]. Cross-view geo-localization was first presented to address ground-to-aerial geo-locali-
zation task [4,5,6,7], which matches a groundview query image against aerial-view reference images with geo-tags. Recently, some works [8] consider the UAV visual geo-localization problem as bidirectional cross-view matching between UAV-view images and satellite-view images. Specifically, UAV-to-satellite image matching achieves UAV-view target localization in GPS-denied situations by comparing a UAV-view query with a collection of geo-tagged satellite-view images. Conversely, satellite-to-UAV ima-
ge matching navigates the UAV back to a target place in the satellite-view image by searching for the most similar UAV-view images in the flight historic record. UAV visual geo-localization is essentially a cross-view scene image retrieval task based on the characteristics of the geographic target with its surroundings, such as neighbor houses, roads, and trees. The variations in viewpoint, height, and seasons lead to large appearance differences in UAV-satellite image pairs and pose great challen-
ges for accurate image matching. The mainstream methods utilize a classifier of different geographic locations as a proxy to train a common feature space for images captured by UAVs and satellites, then the learned space is used at inference to extract descriptors for image retrieval. Early studies [8,9] extract global features from the whole image, while more appealing works [10,11,12,13] take spatial or semantic contextual patterns into consideration and learn local features for part matching. H-
owever, the above works [8,9,10,12,13] neglect the significant appearance gap between UAV-view images and satellite-view images, leading to inferior image retrieval performance when applying the learned feature space to unseen images of new locations. Some recent cross-view geo-localization methods for ground-to-aerial geo-localization [14,15,16,17] and UAV visual geo-localization [18] employ crossview image synthesis techniques as data augmentation to explicitly transform images from one view to -
another view before feature extraction. Although such data augmentation techniques narrows down the gap between query and reference images, they require a two-step procedure for image retrieval and put an extra burden on computation time as well as resources for practical applications. Unlike previous works, we handle the domain shift problem between UAVview images and satellite-view images by performing distribution alignment of these two views in a common feature space to narrow the gap between -
them. We propose an end-to-end network, called PVDA (Progressive View Distribution Alignment), which pulls UAV-view images and satellite-view images of the same location together considering both view distribution alignment and location classification. We introduce a view discriminator to determine whether an image was captured by a UAV or a satellite. A novel progressive adversarial

View Distribution Alignment for UAV Visual Geo-Localization 3
FC&BN
FC&BN
FC&BN
FC&BN
Dropout &FC
Dropout &FC
Dropout &FC
Dropout &FC Average Pooling
Slice
Slice
Share Weights
Satellite
UAV
View Loss
Location Loss
Cosine Similarity
Concatenation
Resnet-50 16×16×2048 4×2048 4×512 4×701
Feature Encoder Location Classifier
View Discriminator Test
Average Pooling
4×4×1024
256×256×3
Satellite
UAV
Average Pooling
Fig. 1. Overall framework of our method. In this exemplar, a feature encoder, a 701way location classifier, and a 2-way view discriminator are trained on images of 701 buildings. The feature encoder takes images resized to 256 × 256 × 3 as input and outputs four 512-dimensional vectors for each image.
learning strategy is designed to jointly optimize the feature encoder, the location classifier and the view discriminator in a unified framework. The feature encoder is optimized under the guidance of the location classifier while trying to fool the view discriminator into regarding UAV-view images as satellite-view images and vice versa. It is increasingly hard to deceive the view discriminator over time since competition between the feature encoder and the view discriminator prompts both of them-
 to be stronger. To solve this problem, the proposed learning strategy progressively emphasizes the task of confusing the view discriminator and simulates a warm restart of the learning rate to adapt to the fine-tuned objective. The main contributions are summarized as follows: (1) We propose a new UAV visual geo-localization method PVDA, which performs view distribution alignment as well as location classification in an adversarial learning framework to close the domain gap between UAV-view image-
s and satellite-view images. (2) We develop a novel progressive adversarial learning strategy, in which the feature encoder is continuously promoted in competition with the view discriminator and able to generate location-dependent yet view-invariant features for training images as well as unseen images of new locations.
2 Related works
The main stream in the research for UAV-satellite geo-localization is based on the location classification framework. Zheng et al. [8] first formulated the UAVsatellite geo-localization and presented the University-1652 benchmark including multi-view images of different buildings. They viewed each location as one class and employed a two-branch CNN to learn a classification model. Ding et

4 C. Liu et al.
al. [9] considered the imbalance of UAV-view and satellite-view images and presented a Location Classification Matching (LCM) method. They tried to learn a location-dependent feature space and implemented the cross-view matching of images from unseen locations via feature similarity ranking. Wang et al. [10] devised a Local Pattern Network (LPN) where a set of location classifiers are trained on part-level features generated by a square-ring feature partition strategy. Compared to early studies [8-
,9] using global features of the whole image, LPN explores spatial contextual information around the geographic target and achieves more accurate part matching. Lin et al. [11] jointly performed feature learning and key-point detection to pay more attention on salient regions. The above methods [8,9,10,11] map UAV-view and satellite-view images into a common feature space and search for the classification boundaries among locations, while neglecting the gap between the UAV view and satellite view.
Tian et al. [18] synthesized several vertical view images for a UAV-view image and then employed LPN to match the new synthetic UAV-view images against satellite-view images for geo-localization. Although their method can decrease the viewpoint variations between the UAV view and satellite view, extra perspective projection transformation is introduced in the cross-view image matching. Zhuang et al. [12] added a multi-scale block attention mechanism into LPN for reinforcing salient features in loc-
al regions and applied the KL loss to enhance the similarity between paired UAV-view and satellite-view images. Dai et al. [13] presented a transformer-based model which achieves automatic region segmentation to obtain part-level features and utilizes the triplet loss for feature alignment. Different from the above two methods [12,13] that focus on closing the distance between paired UAV-view and satellite-view images, our method performs global distribution alignment of the UAV view and satellite-
 view to reduce the domain gap between them. With the proposed progressive adversarial learning strategy, we can learn a location-dependent yet view-invariant feature space, which is crucial to matching cross-view images of unseen locations.
3 Method
As shown in Fig. 1, the proposed PVDA incorporates a feature encoder, a location classifier, and a view discriminator that learns to determine whether an image was captured by a UAV or a satellite. The three modules are jointly optimized with a novel progressive adversarial learning strategy, where the location classifier guides the feature encoder to produce location-dependent features while competition between the feature encoder and the view discriminator enables distribution alignment of the t-
wo views. During training, the three modules are constructed on a training dataset D containing M UAV-view images {(xu
i , yu
i )}i=1:M
and N satellite-view images {(xs
j, ys
j)}j=1:N of C geographic locations, where
yu
i , ys
j ∈ {1, 2, ..., C} denote the location labels of the i-th UAV-view image and the j-th satellite-view image, respectively.

View Distribution Alignment for UAV Visual Geo-Localization 5
3x3 Conv, 1024 filters
Batch Normalization
Batch Normalization
2x2 Average-pooling
2x2 Average-pooling
Relu
Fully connected, 2 filters
Softmax
Feature maps
16×16×2048
Conv Block1 Conv Block2 Conv Block3
3x3 Conv , 1024 filters
Batch Normalization
3x3 Conv , 1024 filters
Global Average-pooling
Fig. 2. Architecture of the view discriminator.
3.1 Architecture of the proposed PVDA
Feature encoder. ResNet-50 [19] is adopted as the backbone network to extract CNN features from input images. Following the previous work [10], we learn a common backbone network for UAV-view and satellite-view images since they have similar patterns. The feature maps produced by ResNet-50 are divided into multiple parts with a square-ring partition strategy [10] to separately aggregate information of the central geographic target and contextual information of surroundings. This strategy explicitl-
y enhances the consistency of local features of images in the same location and performs well against rotation variation as demonstrated in the previous works [10,12,18]. Specifically, the original feature maps are partitioned into four parts, each of which is aggregated to a feature vector with an average-pooling layer. Next, each feature vector is sent to fully connected layers and batch normalization layers for further refinement. Note that four branches are developed corresponding to four part-
s segmented by the square-ring partition strategy, so that the feature encoder can better learn the characteristics of different regions. Finally, part-level features {gu
i,l}l=1:4 and
{gs
j,l}l=1:4 are generated for the UAV-view image xu
i and the satellite-view image
xs
j, respectively.
Location classifier. A four-branch classifier [10] is constructed to separate images captured at different locations based on part-level embeddings. Concretely, embedding vectors {gu
i,l}i=1:M and {gs
j,l}j=1:N are sent to the l-th branch including a dropout layer and a fully connected layer with softmax operation to predict their probability distributions {pu
i,l}i=1:M and {ps
j,l}j=1:N . To evaluate the loss of location classification, we accumulate the cross-entropy between the location labels and the predicted probability distribution of each part. This procedure can be formulated by
lL = −
X
i=1:M
X
l=1:4
log pu
i,l(yu
i)−
X
j=1:N
X
l=1:4
log ps
j,l(ys
j), (1)
where pu
i,l(yu
i ) denotes the probability of the ground-truth location of image xu
i
and ps
j,l(ys
j) indicates the probability of the ground-truth location of image xs
j.
View discriminator. We construct the view discriminator on the intermediate feature maps output by ResNet-50 rather than the part-level embedding vectors. The main reason is that spatial details in the intermediate feature maps

6 C. Liu et al.
are critical to differentiate between UAV-view images and satellite-view images. Moreover, the intermediate features are enforced to be view-invariant by the progressive adversarial learning strategy, then the subsequent part-level embeddings derived from them can also get such characteristics. As illustrated in Fig. 2, the view discriminator first refines the feature maps with three convolutional blocks (denoted as Conv Block 1 to Conv Block 3) followed by the ReLU nonlinearity. Convolutional lay-
ers in Conv Block 2 and Conv Block 3 are equipped with spatial pooling to reduce the resolution of produced feature maps. The view discriminator ends with a global average pooling layer for aggregating spatial information and a two-way fully connected layer with softmax for view prediction. Given feature maps f u
i of a UAV-view image xu
i , the
view discriminator outputs a 2D vector qu
i = [qu
i,1, qu
i,2] indicating the probabilities that the input belongs to the UAV view and the satellite view, respectively. Similarly, a 2D probability vector qs
j = [qs
j,1, qs
j,2] is generated for a satellite-view
image xs
j. The loss to train the view discriminator is the cross-entropy between the output probabilities and the ground-truth view labels formulated as
lV = −
X
i=1:M
log qu
i,1 −
X
j=1:N
log qs
j,2, (2)
where qu
i,1 is the predicted probability of the UAV view for a UAV-view image
and qs
j,2 denotes the probability of the satellite view for a satellite-view image.
3.2 Progressive adversarial learning strategy
The location classifier aims to separate images of different locations and the view discriminator determines whether an input is from the UAV view or the satellite view. It is clear that the feature encoder agrees with the location classifier on generating location-dependent features, yet it must fool the view discriminator so as to produce view-invariant features. Therefore, we introduce an adversarial loss lA between the feature encoder and the view discriminator.
lA = −
X
i=1:M
log qu
i,2 −
X
j=1:N
log qs
j,1, (3)
where qu
i,2 and qs
j,1 are probabilities predicted by the view discriminator. To
be specific, qu
i,2 stands for the probability of the satellite view for a UAV-view
image, and qs
j,1 denotes the probability of the UAV view for a satellite-view image. Obviously, the adversarial loss lA calculates the cross-entropy between the output probability distributions and view labels opposite to the groundtruth labels so that the generated features can deceive the view discriminator into regarding UAV-view images as satellite-view images and vice versa. During training, the three modules are iteratively optimized in the following two steps. First, the feature encoder and the location-
 classifier are fixed and the view discriminator is optimized with the objective function defined in Eq. 2. Second, we freeze the parameters of the view discriminator and update the feature encoder together with the location classifier by an optimization objective

View Distribution Alignment for UAV Visual Geo-Localization 7
lFL, which is a weighted combination of the location classification loss lL and an adversarial loss lA. More specifically,
lFL = lL + α · lA, (4)
where α is a weight balancing the two optimization objectives. In the early stage of training, the three modules cannot fit the training data well, so minimizing the location classification loss lL is just as important as the adversarial loss lA. With the continuous update of parameters, they are getting stronger, so it is easier to achieve location classification but harder for the feature encoder to deceive the view discriminator. Inspired by these observations, the proposed progressive adversar-
ial learning strategy gradually puts the emphasis on optimizing the adversarial loss lA by increasing the weight α in Eq. 4 in regular intervals. Motivated by the work [20], we integrate the warm restart technique that periodically restarts and decays the learning rate into the proposed progressive adversarial learning strategy. Especially, the learning rate is restarted whenever the weight of the adversarial loss is increased. This learning mechanism enables fast gradient descent with a big learn-
ing rate when the optimization objective in Eq. 4 is fine-tuned by the increasing weight and employs a small learning rate to approach an optimum.
3.3 Cross-view image matching
Once the feature encoder is learned, it is evaluated on cross-view image retrieval tasks with query/gallery data captured at new locations. The classifier cannot predict unseen locations of query/gallery images since they have their own location label space independent to the training images. Nonetheless, we can match a query image against candidate images in the gallery by comparing their embeddings in the learned feature space. Specifically, a query image is sent to the feature encoder to acquir-
e part-level embedding vectors, which are then concatenated to form the query representation. Likewise, we can get the representation of a candidate image by concatenating its part-level embedding vectors produced by the feature encoder. The final retrieval results are derived from the ranking of feature similarity measured by the cosine similarity.
4 Experiments
4.1 Dataset and experimental settings
We employ the large-scale University-1652 dataset to evaluate our method on two tasks, i.e., UAV-to-satellite image matching for UAV-view target localization and satellite-to-UAV image matching for UAV navigation. This dataset consists of images of 1,652 buildings from 72 universities and provides one geo-tagged satellite-view image and 54 UAV-view images for each building. The UAV-view images were captured in a simulation flight, and there exist large scale variations as well as rotation variatio-
ns in this dataset. All the buildings are divided into two

8 C. Liu et al.
Table 1. Cross-view image matching accuracy of different methods. Method 256 × 256 384 × 384
UAV-to-satellite Satellite-to-UAV UAV-to-satellite Satellite-to-UAV Recall@1 AP Recall@1 AP Recall@1 AP Recall@1 AP Zheng et al. [8] 58.49% 63.31% 71.18% 58.74% 62.99% 67.69% 75.75% 62.09% LCM [9] – – – – 66.65% 70.82% 79.89% 65.38% LPN [10] 75.93% 79.14% 86.45% 74.79% 78.02% 80.99% 86.16% 76.56% USAM [11] 77.60% 80.55% 86.59% 75.96% – – – PCL [18] 79.47% 83.63% 87.69% 78.51% 81.63% 85.46% 89.73% 80.84% MSBA [12] 82.33% 84.78% 90.58% 81.61% 86.61% 88.55% 92.15% 84.45% FSRA [13] 82.25% 84.82% 87.87-
% 81.53% 84.82% 87.03% 87.59% 83.37% PVDA 82.73% 85.19% 92.30% 82.48% 87.34% 89.26% 93.72% 86.04%
parts: 701 buildings from 33 universities for training and 951 buildings from the rest 39 universities for testing. For UAV-to-satellite image matching, there are 37,855 UAV-view queries and 951 satellite-view candidates including 701 truematched images and 250 distractors. For satellite-to-UAV image matching, we have 701 satellite-view queries and 51,355 UAV-view candidates including 37,855 true-matched images and 13,500 distractors. Following the previous work [8], we employ Recall@K and average-
 precision (AP) as evaluation metrics. ResNet-50 is employed as the backbone of the feature encoder and initialized with the pre-trained weights on ImageNet [21]. We take the feature maps produced by the fifth convolution block as image representations and remove the down-sampling operation in the fifth convolution block to retain more details. The feature encoder and the location classifier are learned with an SGD optimizer and the view discriminator is learned with an Adam optimizer. The paramet-
er α in Eq. 4 is initialized to 0.9 and increased by 0.1 every 140 epochs. We set the initial learning rate to 0.001, 0.01, 0.01, and 0.002 for ResNet-50, the rest layers in the feature encoder, the location classifier, and the view discriminator, respectively. The learning rate is decayed by multiplying 0.8 after 60 epochs and 120 epochs, and reset to the initial value whenever α is increased.
4.2 Experimental results
Comparison to the state-of-the-arts. The proposed PVDA is compared with the existing UAV visual geo-localization methods and the results of using two input image sizes (i.e., 256 and 384) are shown in Table 1. ResNet-50 is employed as the backbone in CNN-based methods [8,9,10,12,18,11], while FSRA [13] takes the Vision Transformer [22] as the backbone. All the comparison methods pretrain their backbones on ImageNet [21]. As shown in Table 1, the proposed PVDA performs better than the other methods-
 on both UAV-to-satellite image matching and satellite-to-UAV image matching using two image sizes. Specifically, our method significantly outperforms methods [8,9] using global image features. LPN [10], PCL [18], and our method adopt the same feature encoder and location classifier. The difference is that PCL [18] adopts UAV-to-satellite image synthesis as data augmentation while our method carries out distribution alignment of UAV-view images

View Distribution Alignment for UAV Visual Geo-Localization 9
Table 2. UAV-view target localization accuracy with multiple queries. Method 256 × 256 384 × 384
UAV-to-satellite UAV-to-satellite Recall@1 Recall@5 AP Recall@1 Recall@5 AP Zheng et al. [8] 69.33% 86.73% 73.14% – – LCM [9] – – – 77.89% 91.30% 81.05% PVDA (Single-query) 82.73% 93.60% 85.19% 87.34% 95.78% 89.26% PVDA (Multi-query) 92.01% 98.00% 93.30% 95.29% 98.43% 95.99%
and satellite-view images in an adversarial learning framework. In comparison to LPN [10] and PCL [18], our method has achieved superior performance, which demonstrates the effectiveness of our learning framework. USAM [11] and MSBA [12] are also based on LPN [10]. The former forces the feature encoder to focus on salient regions by embedding two attention modules in ResNet-50, while the latter incorporates both global features and local features. FSRA [13] adopts a transformer-based backbone, whi-
ch is stronger than ResNet-50. Nonetheless, our method still achieves better performance than USAM [11], MSBA [12], and FSRA [13]. It is worth noting that the inference time of our method is the same as that of LPN [10]. However, PCL [18], USAM [11], MSBA [12], and FSRA [13] need more memory usage and longer inference time due to image synthesis [18] or the more complex network structure [11,12,13]. Therefore, our method is very competitive in real-world applications considering the limitation on -
computing resources and time.
Multi-query image matching. In the above experiments, the models take a single UAV-view image as query and return a ranking list of candidate satelliteview images in the UAV-view target localization task. Due to the fact that the UAV may capture multiple images of one geographic target from different viewpoints and heights in the flight, it is natural to localize the target under a multi-query setting. To this end, we conduct experiments under two image sizes to investigate the effectiveness of us-
ing multiple UAV-view images as queries. Particularly, we retrieve the most relevant satellite-view image in the gallery according to the average of features of 54 UAV-view queries. Experimental results shown in Table 2 verify that more accurate target localization can be achieved by integrating multiple queries into a more comprehensive description. The improvements on AP are 8.11% and 6.73% for image sizes 256 × 256 and 384 × 384, respectively. Compared with other geo-localization methods [8,9],-
 our method also performs best under the multi-query setting, which further demonstrates the superiority of our method.
Visualization of UAV visual geo-localization results. Some cross-view image retrieval results of the proposed method on the UAV-view target localization task and the UAV navigation task are visualized in Fig. 3 and Fig. 4, respectively. Input images are resized to 256 × 256. In the UAV-view target localization task, there is only one true-matched satellite-view image in the gallery for each UAV-view query. As shown in Fig. 3, our method can correctly retrieve

10 C. Liu et al.
UAV Satellite (R@1 → R@5)
Multi-query
Fig. 3. Top-5 retrieved satellite-view images in the UAV-view target localization task. The first and second rows display the matching results with a single query, while the third row employs multiple UAV-view images as queries. The true-matched satelliteview images are annotated with green borders.
Satellite UAV (R@1 → R@5)
Fig. 4. Top-5 retrieved UAV-view images in the UAV navigation task. The truematched UAV-view images are annotated with green borders.
the satellite-view image for the first query though there exist distinct appearance variations between the UAV-satellite image pair. The second row displays a failure case where some irrelevant surroundings of the target building (e.g., the long road on the right top of the query image) interfere with the image matching. When multiple UAV-view images are used as queries, our method can extract more accurate representations of this target and recall the true-matched satellite-view image in top-1 as-
 shown in the third row. In the UAV navigation task, there are multiple true-matched UAV-view images in the gallery for each satellite-view query. As shown in Fig. 4, our method is able to recall UAV-view images of the target building even in large viewpoint and scale variations.
4.3 Ablation studies
To further study whether the proposed progressive adversarial learning strategy is beneficial to parameter optimization, we design two baseline strategies for comparison. The first baseline adopts a constant weight α (see Eq. 4) and periodically restarts the learning rate, so the adversarial loss will not be progressively

View Distribution Alignment for UAV Visual Geo-Localization 11
Table 3. Comparison of image matching accuracy between our method and baselines.
Method UAV-to-satellite Satellite-to-UAV
Recall@1 AP Recall@1 AP constant α, w/ warm restart 82.00% 84.55% 91.73% 81.96% increasing α, w/o warm restart 81.54% 84.09% 92.30% 81.05% increasing α, w/ warm restart (Ours) 82.73% 85.19% 92.30% 82.48%
emphasized over time. The second baseline utilizes an increasing weight α like the proposed learning strategy, but doesn’t simulate warm restart of the learning rate when weight α is increased. To be specific, the learning rate is initialized in accordance with our learning strategy and decayed by multiplying 0.8 after executing 140, 280, and 420 epochs. As shown in Table 3, the proposed progressive adversarial learning strategy outperforms the first baseline by progressively emphasizing the adver-
sarial loss over time. In comparison to the second baseline, our method also achieves superior performance with periodic warm restart of the learning rate. These observations reveal that the proposed progressive adversarial learning strategy is effective in parameter optimization and the warm restart scheme works well with the evolving objective of adversarial learning.
5 Conclusion
In this paper, we have presented an end-to-end learning framework to alleviate the distribution shift between UAV-view images and satellite-view images in UAV visual geo-localization. A novel progressive adversarial learning strategy is developed to perform view distribution alignment and location classification in a common feature space. By doing this, our method can learn location-dependent yet view-invariant features and thus achieves better performance than the existing methods on the large-sc-
ale University-1652 dataset.
References
1. Wilson, D., Alshaabi, T., Van Oort, C., Zhang, X., Nelson, J., Wshah, S.: Object tracking and geo-localization from street images. Remote Sensing 14(11), 1–26 (2022) 2. Erra, U., Capece, N.: Engineering an advanced geo-location augmented reality framework for smart mobile devices. Journal of Ambient Intelligence and Humanized Computing 10(1), 255–265 (2019) 3. Senlet, T., Elgammal, A.: Satellite image based precise robot localization on sidewalks. In: IEEE International Conference on Robotics a-
nd Automation. pp. 26472653 (2012) 4. Lin, T.Y., Cui, Y., Belongie, S., Hays, J.: Learning deep representations for groundto-aerial geolocalization. In: Proceedings of the IEEE conference on computer vision and pattern recognition. pp. 5007–5015 (2015) 5. Zhai, M., Bessinger, Z., Workman, S., Jacobs, N.: Predicting ground-level scene layout from aerial imagery. In: Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition. pp. 867–875 (2017)

12 C. Liu et al.
6. Tian, Y., Chen, C., Shah, M.: Cross-view image matching for geo-localization in urban environments. In: Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition. pp. 3608–3616 (2017) 7. Liu, L., Li, H.: Lending orientation to neural networks for cross-view geolocalization. In: Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition. pp. 5624–5633 (2019) 8. Zheng, Z., Wei, Y., Yang, Y.: University-1652: A multi-view multi-source benchmark for drone--
based geo-localization. In: Proceedings of the 28th ACM international conference on Multimedia. pp. 1395–1403 (2020) 9. Ding, L., Zhou, J., Meng, L., Long, Z.: A practical cross-view image matching method between uav and satellite for uav-based geo-localization. Remote Sensing 13(47), 1–20 (2021) 10. Wang, T., Zheng, Z., Yan, C., Zhang, J., Sun, Y., Zheng, B., Yang, Y.: Each part matters: Local patterns facilitate cross-view geo-localization. IEEE Transactions on Circuits and Systems for Video Tec-
hnology 32(2), 867–879 (2021) 11. Lin, J., Zheng, Z., Zhong, Z., Luo, Z., Li, S., Yang, Y., Sebe, N.: Joint representation learning and keypoint detection for cross-view geo-localization. IEEE Transactions on Image Processing 31, 3780–3792 (2022) 12. Zhuang, J., Dai, M., Chen, X., Zheng, E.: A faster and more effective cross-view matching method of uav and satellite images for uav geolocalization. Remote Sensing 13(3979), 1–16 (2021) 13. Dai, M., Hu, J., Zhuang, J., Zheng, E.: A transformer-based -
feature segmentation and region alignment method for uav-view geo-localization. IEEE Transactions on Circuits and Systems for Video Technology 32(7), 4376–4389 (2022) 14. Regmi, K., Shah, M.: Bridging the domain gap for ground-to-aerial image matching. In: Proceedings of the IEEE/CVF Conference on Computer Vision (2019) 15. Shi, Y., Liu, L., Yu, X., Li, H.: Spatial-aware feature aggregation for cross-view image based geo-localization. In: 33rd Conference on Neural Information Processing Systems (2-
019) 16. Guo, Y., Choi, M., Li, K., Boussaid, F.: Soft exemplar highlighting for cross-view image-based geo-localization. IEEE Transactions on Image Processing 31, 20942105 (2022) 17. Zhang, X., Meng, X., Yin, H., Wang, Y., Yue, Y., Xing, Y., Zhang, Y.: Ssa-net: Spatial scale attention network for image-based geo-localization. IEEE Geoscience and Remote Sensing Letters 19, 1–5 (2022) 18. Tian, X., Shao, J., Ouyang, D., Shen, H.T.: Uav-satellite view synthesis for crossview geo-localization. IEEE T-
ransactions on Circuits and Systems for Video Technology 32(7), 4804 –4815 (2022) 19. He, K., Zhang, X., Ren, S., Sun, J.: Deep residual learning for image recognition. In: Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition. pp. 770–778 (2016) 20. Loshchilov, I., Hutter, F.: Sgdr: Stochastic gradient descent with warm restarts. arXiv e-prints (2016) 21. Deng, J., Dong, W., Socher, R., Li, L.J., Li, K., Fei-Fei, L.: Imagenet: A largescale hierarchical image database. -
In: Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition. pp. 248–255. IEEE (2009) 22. Dosovitskiy, A., Beyer, L., Kolesnikov, A., Weissenborn, D., Zhai, X., Unterthiner, T., Dehghani, M., Minderer, M., Heigold, G., Gelly, S., et al.: An image is worth 16x16 words: Transformers for image recognition at scale. In: International Conference on Learning Representations (2021)

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:38.739Z
- **Text Length:** 34204 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
