# PDF Document: Campos et al. - 2025 - GAEA A Geolocation Aware Conversational Assistant.pdf

**File Path:** Campos et al. - 2025 - GAEA A Geolocation Aware Conversational Assistant.pdf

**Processed Date:** 2026-02-10T18:13:45.896Z

**File Size:** 8214.20 KB

**Total Pages:** 18

**Extracted Pages:** 18

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2779

**Title:** GAEA: A Geolocation Aware Conversational Assistant

**Collection:** Large Files

---

## Extracted Text Content

GAEA: A Geolocation Aware Conversational Model
Ron Campos1,* Ashmal Vayani1*, Parth Parag Kulkarni1*, Rohit Gupta1, Aritra Dutta1, Mubarak Shah1
1 University of Central Florida
Abstract
Image geolocalization, in which, traditionally, an AI model predicts the precise GPS coordinates of an image is a challenging task with many downstream applications. However, the user cannot utilize the model to further their knowledge other than the GPS coordinate; the model lacks an understanding of the location and the conversational ability to communicate with the user. In recent days, with tremendous progress of large multimodal models (LMMs)proprietary and open-source—researchers have attemp-
ted to geolocalize images via LMMs. However, the issues remain unaddressed; beyond general tasks, for more specialized downstream tasks, one of which is geolocalization, LMMs struggle. In this work, we propose to solve this problem by introducing a conversational model GAEA that can provide information regarding the location of an image, as required by a user. No large-scale dataset enabling the training of such a model exists. Thus we propose GAEA-1.6M, a comprehensive dataset with 800K images an-
d around 1.6M question-answer pairs constructed by leveraging OpenStreetMap (OSM) attributes and geographical context clues. For quantitative evaluation, we propose a diverse benchmark, GAEA-Bench, comprising 4K image-text pairs to evaluate conversational capabilities equipped with diverse question types. We consider 11 stateof-the-art open-source and proprietary LMMs and demonstrate that GAEA significantly outperforms the best opensource model, LLaVA-OneVision by 25.69% and the best proprietary m-
odel, GPT-4o by 8.28%. Our dataset, model and codes are available https://ucf-crcv.github.io/GAEA.
1. Introduction
Image geolocalization [23, 32, 50, 55, 59] is a notoriously challenging task, in which, conventional AI models predict the precise GPS coordinate of an image taken anywhere on Earth. Moreover, seasonal changes, geographical and climatic diversity, changes in solar zenith angle, and lack of diverse image distributions make the geolocalization task more challenging. Although difficult, geolocaliza
*equally contributing first authors
... ...
...
... ...
Figure 1. Performance of GAEA and other LMMs on global scale image geo-localization. GAEA makes correct predictions when asked different questions about summarizing a scene, location, and geographical context. While GPT-4o-mini can give correct suggestions relevant to the region, GAEA provides a correct amenity with proximity to the location of the image.
tion has direct applications in multiple domains, including tourism, navigation [16], urban planning [46], and security [50], among many.
Recently, CLIP-inspired image-to-GPS retrieval approach, GeoCLIP [50], has shown significant performance in global-scale image geolocalization. To further mitigate the performance gap, and to increase the generalization capacity of the models, interestingly, a new wave of works infuse human-level cognition and inference capacity in their model training [23, 32, 55]. E.g., PIGEON is trained on data from the popular geolocalization game GeoGuesser
arXiv:2503.16423v1 [cs.CV] 20 Mar 2025

Wikimedia Geocoder
OpenStreetMap
Query (within 1km)
Qwen2.5
Various OSM Conversational Prompts (SVQA, MCQ, TF)
(53.9, 27.5667)
GPT-4o
Reasoning Caption Prompt
GPS Annotation
OSM Metadata
Bank: “Fifth Third Bank” ATM: “Yes” Restaurant: "Skyline Chili” Cuisine: “Chili” Fast Food:: "LaRosa's Pizzeria" Cuisine: “Pizza”
Conversational QA Pairs
. . .
"Q": "Is there a restaurant near the location in this image that serves chili?, "A": "In Covington, Ohio, United States, near the location shown in this image, you can find Skyline Chili, which serves delicious chili."
(39.099609, -84.510354)
GPS Annotation
(28.5922, 77.2462)
GPS Annotation
GeoGuessr Context Clues
1: The US uses American English spelling (e.g. center, color).
2: Road signs in the US tend to use more words compared to their Canadian counterparts. A good example are railway crossing signs, which feature the literal words ‘railway crossing’ on them. 3: The US uses the phrase ‘Speed Limit’ on their speed signs.
Covington USA
Reverse Geocoding
"Q": "There is a branch of Fifth Third bank near the location shown in the image” "A": "True”
METADATA
Koppen-Geiger Climate Zones
Places2 Scene Labels
EarthEnv Land Cover
WorldStandards Driving Side
EarthEnv
P2
High Priority Tags
GeoCLIP Filtering
Landmark Sampling GLv2
MP-16
CityGuessr68k
Geolocalization QA Pairs
Where is this image located? A : Covington, United States
Reasoning Caption
"The image captures a vibrant urban landscape of Covington, Ohio, showcasing an array of architectural styles that exemplify the city's blend of historical and modern influences. Dominating the...
Random Frame Sampling
Cfa (Temperate, hot summer)
Urban
commercial buildings, shops, markets, cities, and towns
right
Figure 2. Data Collection and Annotation Pipeline. GAEA-1.6M includes geographically diverse visual samples from various data sources, such as MP-16, GLD-v2, and CityGuesser68k (left). We also incorporate OpenStreetMap (OSM) metadata and auxiliary context for each image, ranging from climate zones to geographical clues about the country (middle). Using open-source LLMs and GPT-4o, we generate four diverse question-answer pairs across geolocation, reasoning, and conversational subsets (right).
[2]; a recent vision-language model, GeoReasoner [32] use user- and administrator-maintained approximately 3K textual clues from GeoGuessr and Tuxun gaming platforms.
These focused geolocalization models, however, lack geographical understanding of the predicted locations beyond their GPS coordinates. They cannot provide additional information that might be invaluable for applications such as tourism, navigation, urban planning, etc. Even if the models possess that understanding, they do not have the conversational ability to convey that information and fail to meet the user’s needs. In contrast, despite having the conversational capability, visually and textua-
lly prompted large language models (LLMs) [20, 48, 56] and their multimodal variants, popularly referred to as large multimodal models (LMMs) [10, 11, 14, 35, 47], fail to capture fine-grained nuances from an image in specialized downstream tasks such as geolocalization, making their predictions vastly imprecise and worse than random guesses in many cases; see Figure 1.
Motivated by all these aspects, in this paper, we propose GAEA, an open-source conversational model with a globalscale geolocalization capability. To the best of our knowledge, this is the first work in the ground-view geolocalization domain that introduces an open-source conversational chatbot, where the user can obtain image geolocalization, relevant description of the image, and engage in a meaningful conversation about the surrounding landmarks, natural attractions, restaurants or coffee shops-
, medical or emergency facilities, and recreational areas.
However, training an open-source LMM with conversational capacity is not straightforward. These models are data-hungry and their training is compute intensive. Unfortunately, no dataset can facilitate the training of such a model. To this end, we meticulously curate a GAEA-1.6M —a high-quality conversational VQA pair equipped with
diversity in scene understanding and image captions used for training and instruction tuning the LMMs on the streetlevel geolocalization task. GAEA-1.6M is a comprehensive dataset consisting over 800K images from MP-16 [29], covering locations around the Earth. We augment these images with rich meta-data from the OpenStreetMap (OSM) [38] at a 1km radius, a first effort of its kind. OSM attributes contain details about the surrounding area, nearby landmarks, accessible services, and historical buil-
dup of the region. The QA subset of GAEA-1.6M contains 380K QA pairs; the geolocalizable explanatory captions set contains 385K images and is equipped with their corresponding knowledge and reasoning captions. These knowledge and reasoning captions are constructed using a set of geographical context clues from GeoGuessr [2] that enable the model to gain a holistic understanding of the location. Taken together, GAEA-1.6M is the largest and most comprehensive collection of geolocalizable and convers-
ational QA pairs. We use this data source to design our conversational chatbot, GAEA. To quantitatively evaluate the conversational capability of LMMs and address the scarcity of benchmark datasets in a geolocalization setting, we propose GAEA-Bench, a diverse set of 4K conversational question samples. GAEA-bench comprises multiple-choice (MCQs) and true/false (T/Fs) for checking a model’s understanding and choosing capability, short questions (SVQAs) for testing a model’s knowledge, and long ques-
tions (LVQAs) for evaluating a model’s descriptive and in-depth explanation ability about the location in question. We summarize the main contributions as follows: • We propose GAEA-1.6M (§Section 3), a new dataset for training conversational image geolocalization models. • For evaluating conversational capabilities in geolocal

OpenStreetMap Query (within 1km)
Short Visual Question-Answer (SVQA)
Multiple Choice Question (MCQ)
True or False (TF)
Long Visual Question-Answer (LVQA)
"Q": "Can you name any restaurants near... "A": "Yes, there are several restaurants in Speyer, Germany, including Kardinal 2 and..
"Q": "Which is railway station near the ...? A. Central Station, Sydney, Australia. B. Albi-Ville, Albi, France. C. King's Cross Station, London, UK. "A": "B. Albi-Ville, in Albi, France."
Q": "Provide a summary of the scene. Include any geographical context.", "A": "The image appears to showcase a vibrant urban setting in Melbourne, Victoria, Australia, characterized by a blend of modern skyscrapers and historical architecture. The forground features a brick building with an ornate facade, which is likely a ...
"Q": "There is a Chinese Christian Union Church near the location associated with..." "A": "True"
Reverse Geocoding
GPT-4o
Create a detailed caption for the given image by analyzing its features...
Qwen2.5
Create a relevant and insightful QA pair that is...
Generate high-quality multiple-choice question-answer (QA)...
Create a relevant and insightful *True* statement that is...
OSM Metadata
“place_of_worship”: {"name": "Chinese Christian Union Church...
“railway": {"name": "Albi-Ville", ...
"restaurant_1": {"name": "Kardinal 2"}
Chicago USA
Albi France
Speyer Germany
Southbank Australia
(41.853713, -87.627105)
GPS Annotation
(43.9262, 2.14837)
GPS Annotation
GPS Annotation
(49.317488, 8.431738)
(- 37.825, 144.960666)
GPS Annotation
Figure 3. Overview of GAEA-Bench. GAEA-Bench is designed to evaluate the conversational abilities of various LMMs across different question types, including MCQs, T/F, and both short and long VQAs. We have carefully selected a subset of 4k samples from MP-16 and generated corresponding OSM metadata to generate QA pairs using GPT-4o. GAEA-Bench aims to fill the gap in conversational benchmarks by incorporating geolocalization capabilities.
ization setting (§Section 5), we propose GAEA-Bench, a novel benchmark with different types of questionanswers. • We propose GAEA, a conversational chatbot (§4) that goes beyond global-scale geolocalization and provides information about the location described by an image. • We quantitatively compare the performance of our model to 8 state-of-the-art open-source, and 3 proprietary LMMs, including GPT-4o [9] and Gemini-2.0-Flash [47].
2. Related Work
Vision language models (VLMs) have been at the forefront of computer vision research; geo-localizable VLMs are in their nascent stages.
Vision Language Models. Multimodal learning unifies different modalities by a common representation. By contrastively fitting text and images into the same feature space, CLIP [39] has revolutionized multimodal learning. LLMs like GPT2 [40] made strides in representing text and next token prediction. Visual question answering (VQA) was of interest before, but, after LLaVA [34] and BLIP2 [31] combined the conversational aspects of LLMs and the representational capabilities of CLIP-like models, many-
 problems of VQA are addressed.After that, numerous modern works emerged, such as GeoChat [27], Qwen2.5-VL [12], LLaMA-3.2 Vision [10], and LLaVA-OneVision [30] as well as proprietary models like GPT4 [9] and Gemini [47]. Even though most of these models are excellent for general VQA, they perform poorly on specialized tasks in fields like medicine, statistics, and geolocalization. This inspires the need for specialized VLMs that can address specific tasks.
Geo-localization is a crucial field in vision research with essential applications in forensics, social media, and exploration; see [16, 46, 50]. On a global scale, Weyand et al. [53] first introduced a classification-based approach on the
Im2GPS [24] dataset. Vo et al. [51] introduced classification in multiple hierarchies, while CPlaNet [45] introduced a combinatorial partitioning technique for combining coarse hierarchies to predict finer ones. Over the years many other works like ISNs [25], TransGeo [59], TransLocator [52], and GeoDecoder [15] have made significant advancements in this classification-based worldwide geolocalization by introducing scene-based specialized encoders and hierarchical evaluation, auxiliary scene recog-
nition, and twin encoder approach, and query-based encoder-decoder architecture respectively. PIGEON [23], the most recent work, leverages the image representation capabilities of the CLIP vision encoder, and a unique clustering approach to improve its geo-localization performance. Image-to-image retrieval models tend to be more accurate than their classificationbased counterparts but infeasible on a global scale due to their requirement for large reference image galleries. GeoCLIP [50] was the fi-
rst work to incorporate the contrastive multimodal learning between images and raw GPS information that revolutionized this domain by introducing a more accurate retrieval-based model for a global scale.
These specialized models work well for worldwide image geo-localization but lack the conversational aspect that can aid an individual in gaining a holistic understanding of a location portrayed in an image. GeoReasoner [32] attempts to incorporate an inherent geospatial understanding into a VLM by looking at specific information displayed in the image. It also introduces the idea of locatability, which can determine the extent of that information present in the image which may improve the reasonin-
g capability of the model. The model however lacks the conversational aspect, and the locatability-based filtering of data might hurt its generalization capability. We address these issues in GAEA by primarily focusing on its conversational ability.
The generalizability of GAEA comes from its training data. All specialized geo-localization models that function

Location: Cuenca, Spain (40.074511, -2.134486)
OSM:
1. Pharmacy: Farmacia Garcia Honduvilla 2. Bank: Santander Bank 3. Fast Food: La que ha liado el pollito
4. Cuisine: Chicken
Question: Is there a fast-food option near the location in this image that serves chicken? If so, can you name it?
Answer: In Cuenca, Spain, near the location depicted in this image, you can find La Que Ha Liado El Pollito, which specializes in chicken dishes.
Location: New Orleans, United States (29.946846, 90.062592)
OSM:
1. Restaurant: Felipe’s Taqueria
2. Cuisine: Mexican
3. Cafe: Cafe Fleur De Lis
Question: Is there a cafe near the location of this image in New Orleans? Choose one option: A) Café Du Monde B) Starbucks Reserve C) Café Fleur De Lis D) Blue Bottle Coffee
Answer: C. Café Fluer De Lis
Location: Zürich, Switzerland (47.3964, 8.54778)
OSM:
1. River: Spitalerbach 2. University: Universität Zürich Irchel
3. Bus Route: VBZ route: Bus 69: Zürich, Milchbuck --> ETH Hönggerberg
Question: Is there a specific bus route near the location in this image that could help tourists get around?
Answer: In Zürich, Kreis 6, Switzerland, the Bus 69 runs from Zürich, Milchbuck to ETH Hönggerberg,
providing convenient transportation options for visitors.
Location: Rio de Janeiro, Brazil (-22.93836, -43.25942)
OSM:
1. River: Rio Andaraí 2. Bus Route: STPC Borel
Question: Answer the following question with either True or False: This image is located in São Paulo, Brazil. Answer: False
Data Source: MP-16 Data Source: GLDv2 Data Source: MP-16 Data Source: GLDv2
Figure 4. Qualitative examples showcasing various question-types, including multiple-choice, true/false, short and long VQAs generated using an open-source model on our GAEA-1.6M dataset. We carefully select geographical tags from OSM metadata to generate QA pairs.
on a global scale train their model on MP-16 [29] which is a large-scale worldwide dataset. However, it lacks the verbal context required in VLM training. Hence, we introduce a new conversational dataset GAEA-1.6M; see details in §Section 3. Additionally, we introduce the first conversational benchmark in §Section 4 to evaluate Geolocalization VLMs and an evaluation pipeline to judge the efficacy of such models.
3. GAEA-1.6M
The GAEA-1.6M dataset provides comprehensive global coverage, featuring both rich conversational and diverse geolocalization sets. It includes various QA formats, such as MCQs, True/False, and open-ended VQA (long and short), from more than 234 countries/territories, grouped under conversational and geolocalization groups. Spanning 40k cities across 7 continents, GAEA-1.6M is structured into two key groups: conversational and geolocalization. With over 1.6 million QA pairs, it captures the geograp-
hical diversity of both underrepresented and widely recognized regions worldwide.
3.1. Dataset Curation and Annotation
Acquiring Diverse Geo-localizable Images. We sample geographically diverse visual data from MediaEval 2016 (MP-16) [29], Google Landmarks v2 (GLDv2) [54], and CityGuessr [28] to curate GAEA-1.6M. MP-16 contains over 4.6 million geotagged Flickr images, including indoor and outdoor scenes. For our street-view geolocalization subset, we filter out indoor images, retaining 3 million outdoor images. However, some of these images are non-geolocalizable, such as close-up shots of doors, grass, or wires,-
 which are excluded from the final dataset. To filter out non-geolocalizable images, we process all 3 million samples using GeoCLIP [50], which is trained on the full MP-16 dataset and effectively identifies non-geolocalizable outlier images. GeoCLIP assigns a confidence score based on its ability to predict GPS coordi
nates, with higher scores indicating geo-localizability. We set a confidence threshold of 0.75 and computed the distance between the ground truth MP-16 GPS coordinates and the GeoCLIP’s predicted location. We retain the images if this distance is less than 500 km; see additional ablations on different thresholds and distance metrics in the Appendix. To achieve a balanced geographical distribution in GAEA-1.6M, we use the 10th hierarchy of S2-Cells [5] to partition our filtered MP-16 dataset into 1-
6,753 spatial grid cells. S2-Cells enable hierarchical spatial indexing, ensuring diverse global coverage while preventing overrepresenting densely imaged regions. We randomly sample up to 200 images from each cell, resulting in a final set of over 750K distinct samples.
GLDv2 [54] is a fine-grained landmark recognition dataset featuring natural and human-made landmarks across diverse time zones, climates, and lighting conditions. Given the significance of landmark geolocation for real-world applications, we randomly sample 50K distinct landmarks from GLDv2. These highly recognizable landmarks offer rich geographic and cultural context. Each image is linked to Wikipedia metadata, from which we extract GPS coordinates using the Wikimedia [6] API. We then apply the -
reverse geocoder Python library to determine each landmark’s corresponding city and country.
CityGuessr68k [28] focuses on global video-based geolocalization emphasizing urban regions and hierarchical prediction across 166 major cities. To incorporate this diversity, we randomly sample one frame from each of the 54K training videos and include them in our dataset. These three sources provide over 852K geographically diverse geolocalizable images, forming GAEA-1.6M dataset.
3.2. Meta-data curation for dataset annotation
After acquiring all visual samples for our GAEAConversational Assistant, we churn the metadata for each image for a comprehensive QA-pair generation.
Churning OSM metadata. OpenStreetMap (OSM) [38] is

"What flag is visible in the image?" [‘German’, ‘Swiss’’, ‘French’, ‘Egyptian’]
"What type of activity is popular around Lagoa do Fogo?"
"Is the waterfront city shown in the image Toronto?"
"Describe the architectural style and significance of the building in the image."
SVQA
LVQA
MCQ
T/F
GPT-4o
Evaluate the following answer based on accuracy and correctness based on the Ground Truth answer. Provide a single overall score out of 10 based on these three criteria
Evaluate the following answer based on Consistency, Fluency, and Relevance based on the Ground Truth answer. Provide a single overall score out of 10 based on these three criteria.
Match the meaning of the ground truth with the model prediction and if it matches give a 10. Otherwise 0.
Final Score
Avg.
Response
Response
Response
Response
Figure 5. Evaluation pipeline highlights various question types we introduce in our GAEA-1.6M. We use GPT-4o as a judge to score such responses.
a collaborative open-source mapping platform that provides extensive geographical data. In our work, OSM plays a central role by enriching geolocalization and conversational capabilities. We retrieve metadata from a 1 km radius around the GPS coordinates of 850K images, leveraging OSM’s detailed, publicly annotated tags. These tags cover many realworld elements, including amenities, transportation, hotels, and restaurants, making them invaluable for our groundview geolocalization and QA generation-
. OSM data is multilingual, which is a key challenge. To ensure accessibility, we use GPT-4o [9] to translate these annotations into English. Additionally, many retrieved tags consisted of plain numbers or non-meaningful entries, which we systematically filtered out to retain only informative and contextually relevant metadata. To our knowledge, this is the first work to utilize OSM’s rich metadata to develop a conversational chatbot for ground-view geolocalization. We curated the OSM metadata for-
 MP-16 and GLDv2 visual samples.
Curating Country-Specific Geographical Clues. We web-crawled diverse clues from Plonkit[4], an opensource community resource for the GeoGuessr [2] game, which has over 65 million players. Similar datasets have been used in recent works [23, 32]. We obtained 129 country clues but found gaps for some countries, such as New Zealand and France. To address this, we curated clues for 58 additional countries using GPT-4o, aligning them with Plonkit’s style, resulting in altogether 187 countries. These cl-
ues are incorporated into our dataset for generating reasoning-based QAs. For examples of the type of clues utilized, see Figure 19 in the Appendix.
Additional Metadata. For auxiliary context, we group our country-specific, geographically diverse dataset in 31 Ko ̈ppen-Geiger climate zones [13]. We obtain the traffic direction data through WorldStandards [7] and Land Cover Use statistics from EarthEnv [1]. Additionally, we compute scene labels for each image using the Places2 [58] database.
3.3. Question-Answer (QA) Pairs Generation
As seen in Figure 2, GAEA-1.6M is carefully curated to enhance ground-view geolocalization through diverse, context-rich QA pairs. Comprising over 800K distinct images and around 1.6 million QA pairs, it stands as the largest and most comprehensive dataset for this task; see Figure 4. Unlike existing works, such as [19, 32], which are limited to JSON structures and fewer question types, our work emphasizes the conversational capabilities of the model, providing a broader range of QA formats. The d-
ataset is divided into three subsets—Conversational, Reasoning, and GeoLocalization, each designed to capture different aspects of geographic understanding. These subsets feature various question formats, including multiple-choice [37], true/false, and open-ended questions (SVQA and LVQA) [49]. Below, we detail the curation process for each subset.
Conversational QA Generation. We generate conversational QA pairs using OSM metadata from the sampled MP-16 and GLDv2 subsets. We prompt Qwen-2.5-14B [56] with enriched OSM attributes to create diverse question formats, including short-form, multiple-choice, and true/false questions. These OSM tags cover various categories such as amenities, food places, financial institutions, government offices, accommodation, transportation, healthcare, religious sites, education, and waterways. This subset com-
prises over 380K questions.
Geolocalization Questions. To enhance the geolocalization capabilities of our GAEA model, we introduce largescale meta-geographic information through geolocationspecific QA pairs. This subset consists of 820K imagequestion pairs designed to help the model predict the correct location of an image. We curate 50K geolocation questions from GLDv2, each corresponding to a distinct landmark, leveraging their global recognition to improve locationbased reasoning. Additionally, we incorporate 54K geolocat-
ion QA pairs from CityGuessr, which focuses on urban environments, and 720K from MP-16, ensuring broad geographic coverage. This results in a diverse and welldistributed geolocation QA dataset spanning 234 countries and territories, 40K cities, and 7 continents.
Reasoning Questions. We generate detailed image-caption QA pairs (Long-VQA) to enhance fine-grained reasoning in our GAEA model. We prompt GPT-4o [9] with each image, its scene labels, and country-specific geographical attributes, including GeoGuessr clues, traffic-side driving information, Ko ̈ppen-Geiger climate zone, and land cover

......
Visual Projector Text Embeddings
ViT Encoder
Is there an Italian restaurant near the location in this image? If so, can you name it?
Response
In Venice, Italy, near the location depicted in this image, you can find La Calcina, an Italian restaurant.
Input text prompt/question
Input image
Qwen2.5
MLP
ViT
Single-Stage Training
🔥
🔥
Figure 6. GAEA architecture with a single-stage training strategy including trainable MLP layers and LLM weights.
data. While scene labels are unique to each image, the other attributes provide country-level context. GPT-4o integrates this information to generate contextually rich and highly correlated captions with the provided geographic labels. These reasoning-based captions strengthen the model’s geolocalization and conversational capabilities and induce a rich semantic understanding in our model by infusing human-level cognition and inference capability, deducing the model to emphasize why particular ima-
ge features might be associated with specific geographical contexts, reducing disinformation [42, 43]. In total, we curate 385K knowledge-driven LVQA pairs.
3.4. GAEA-Bench
Existing benchmarks for evaluating geolocalization tasks mainly focus on retrieval and classification-based methods, such as IM2GPS [24], IM2GPS3k [51], and GSW15k [18], which assess the distance between ground-truth and predicted GPS coordinates. However, there is a lack of conversational benchmarking datasets to evaluate the geolocalization and conversational capabilities of LMMs. We introduce GAEA-Bench, a geographically diverse and conversationally rich multimodal benchmark to address these sh-
ortcomings. GAEA-Bench is designed to assess LMMs across various question types, including MCQs, true/false, and long and short VQAs while integrating geolocalization tasks. It includes 4K image-text QA pairs that provide a rich geographical context for each image.
GAEA-Bench Curation. We curate a non-overlapping subset of highly geolocalizable MP-16 images, manually filtering out the non-geolocalizable ones. Using OpenStreetMaps (OSM), we generate metadata within a 1km radius and curate 1,000 short-form (SVQA), 1,000 multiplechoice (MCQ), and 1,000 true/false (T/F) questions. For
long-form questions (LVQAs), we follow a similar process for generating reasoning questions in GAEA-Bench, resulting in an additional 1,000 questions. In total, we curate 4K diverse image-text QA pairs. To ensure that the GAEABench remains independent of the training set, we select geographically distinct locations for its 4K samples. We show our GAEA-Bench annotation and curation process in Figure 3. The OSM metadata are fetched for each image and are passed to Qwen2.5-14B for generating several -
QA pairs, including SVQA, MCQ, and T/F.
4. GAEA Architecture
GAEA follows the architecture of the open-source model, Qwen2.5-VL [12], which seamlessly integrates (1) a vision encoder, (2) a vision-to-language projector, and (3) a language model. The re-engineered vision-transformer (ViT) architecture incorporates 2D-RoPE and window attention. The projector is a two-layer multi-layer perception (MLP) to align raw patch features from the ViT and provides the final representation EJoint by concatenating the image embeddings, EImg with the text embeddings, ETex-
t such that EJoint = [EImg, EText]; see Figure 6.
Training Details. We perform single-stage fine-tuning of Qwen2.5VL on our GAEA Conversational Assistant dataset. The model is trained across all three subsets—geolocalization, reasoning, and conversational—covering both open-ended QA formats (short and long answers) and decision-based questions (multiplechoice and true/false). This fine-tuning process enables the model to integrate rich geographical cues, contextual metadata, and image-specific attributes, enhancing its spatial reasoning, location-
 inference, and multimodal conversational capabilities. We employ LoRA fine-tuning [26] with a rank of r = 16 and α = 32 along with the unfrozen vision-to-language MLP projector. To handle varying image resolutions, we apply dynamic resolution processing: Images below 448 × 448 are upsampled, while those exceeding 1000×1000 are downsampled, similar to [12]. The model is trained for one epoch over 12,600 steps.
5. Benchmarking and Evaluations
GAEA-1.6M training set comprises four distinct question types: Multiple Choice Questions (MCQs), True/False (T/F), and Short and Long Visual Question Answering (VQA). The GAEA model is meticulously trained to ensure conversational fluency while possessing the capability to geolocalize visual samples. Current evaluation frameworks primarily focus on standard geo-localization datasets, measuring accuracy using distance-based metrics at various scales, including Street (1 km), City (25 km), Region (2-
00 km), Country (750 km), and Continent (2,500 km). However, these methods fail to assess the conversational capa

Model Name Performance on Different QA Formats
LVQA SVQA MCQ TF Average
GeoChat-7B [27] 24.06 (↓ 59.71%) 16.38 (↓ 67.96%) 54.00 (↓ 27.90%) 32.20 (↓ 58.98%) 31.66 (↓ 52.07%) LLaMA-3.2-Vision-11B [10] 47.45 (↓ 20.55%) 26.84 (↓ 47.50%) 52.40 (↓ 30.04%) 47.20 (↓ 39.87%) 43.47 (↓ 34.20%) LLaVA-Next-Mistral-7B [33] 47.57 (↓ 20.34%) 23.20 (↓ 54.63%) 28.90 (↓ 61.42%) 56.70 (↓ 27.77%) 39.09 (↓ 40.83%) GLM-4V-9B [22] 40.63 (↓ 31.97%) 21.29 (↓ 58.36%) 56.30 (↓ 24.83%) 50.60 (↓ 35.54%) 42.21 (↓ 36.10%) Phi-3.5-Vision-Instruct [8] 48.04 (↓ 19.56%) 14.31 (↓ 91.57%) 54.40 (↓ 27.36%)-
 57.20 (↓ 27.13%) 43.49 (↓ 34.17%) InternVL2-8B [57] 52.42 (↓ 12.22%) 30.93 (↓ 39.51%) 55.30 (↓ 26.17%) 56.90 (↓ 27.52%) 48.89 (↓ 25.99%) LLaVA-OV-7B [30] 53.34 (↓ 10.68%) 29.32 (↓ 42.66%) 57.60 (↓ 23.10%) 56.10 (↓ 28.54%) 49.09 (↓ 25.69%) Qwen2.5-VL [12] 54.84 (↓ 8.17%) 35.14 (↓ 31.27%) 47.20 (↓ 36.98%) 59.10 (↓ 24.71%) 49.07 (↓ 25.72%)
Gemini-2.0-Flash [47] 55.47 (↓ 7.12%) 34.72 (↓ 32.09%) 56.20 (↓ 24.97%) 56.10 (↓ 28.54%) 50.62 (↓ 23.37%) GPT-4o-mini [9] 58.82 (↓ 1.51%) 34.13 (↓ 33.25%) 54.00 (↓ 27.90%) 34.17 (↓ 56.47%) 45.28 (↓ 31.46%) GPT-4o [9] 63.62 (↑ 6.53%) 49.56 (↓ 3.07%) 59.37 (↓ 20.73%) 69.83 (↓ 11.04%) 60.59 (↓ 8.28%) GAEA (Ours) 59.72 51.13 74.90 78.50 66.06
Table 1. We benchmark 11 open-source and proprietary LMMs on GAEA-Bench. Notably, GAEA outperforms all open-source models and fares higher than the proprietary models on decision-making questions (MCQs and TFs). We provide the relative performance change for each model compared to GAEA.
Country Prediction
"Where is this image located?"
GPT-4o
Evaluate this considering the geographical context. If the prediction is within the ground truth, it is correct. If it is a match give a score of 1, otherwise, give a score of 0.
Final City Prediction Score
Avg.
Final Country Prediction Score
Avg.
City Prediction
GPS Annotation
(31.628674, -7.992047)
Marrakech Morocco
Reverse Geocoding
GT City GT Country
Pred. GPS Geocoding
Distance Scores
Figure 7. Our classification accuracy pipeline evaluates city and country predictions by comparing them against ground truth annotations derived from GPS coordinates, with GPT-4o serving as the evaluator.
bilities of LMMs. To address this gap, we define our evaluation process in three key dimensions: (a) Conversational accuracy, (b) Quantitative geo-localization accuracy, and (c) Classification accuracy.
5.1. Evaluation and Metrics
Conversational Evaluation. Most geolocation-specific models operate as “black box” systems, providing GPS coordinates without offering any reasoning or justification behind their outputs. In contrast, GAEA is the first model of its kind, explicitly trained on 1.6 million instructions, which include a significant number of knowledge-reasoning question-answer pairs. This enables GAEA to integrate world knowledge, such as geographical clues, conversational meta-tags, and advanced reasoning capabiliti-
es, making its geolocation predictions more transparent and insightful. To address the challenges of complex conversational evaluation, we benchmark 10 state-of-the-art opensource and closed-source LMMs on GAEA-Bench, which is meticulously curated to evaluate LMMs on diverse ques
tion types, including multiple-choice, true/false, and openended questions (short and long VQAs). See §Section 8.1 for the baselines used in this work.
We employ different prompts for each type of question. We use GPT-4o as a judge and prompt it to score responses to various types of questions with different criteria. We use accuracy for MCQs and T/F, correctness for SVQA, and consistency, relevance, and geographical correctness for long VQAs (LVQAs); see the evaluation pipeline in Figure 5. Here, correctness refers to how closely the model’s output matches the location and the correct answer in the ground-truth response [49]. For LVQA, the consi-
stency metric evaluates the fluency and readability of the model’s prediction [44, 48, 49], while geographical correctness assesses whether the model’s prediction accurately identifies the correct city and country, directly matching the groundtruth answer. This is further discussed in §Section 8.2, and Figures 16, 20 and 21.
Quantitative Geo-localization Evaluation. We compared the performance of GAEA against six state-of-theart (SoTA) geo-localization models, namely PlaNet [53], CPlaNet [45], ISNs [25], TransLocator [52], GeoDecoder [18], and PIGEON [23] on three standard geo-localization benchmarks including IM2GPS [24], IM2GPS3k [51], GWS15k [18]. We prompt various LMMs to output the corresponding city and country to which the image belongs. We retrieve GPS coordinates using GeoPy [3] and compute distance with grou-
nd truth. We compare the output with distance thresholds of 1 km, 25 km, 200 km, 750 km, and 2,500 km; see Table 2.
Classification Accuracy. Figure 7 illustrates the classification accuracy pipeline at the city and country levels. For this evaluation, we introduce three new datasets: GeoDE [41],

Figure 8. Classification accuracy for both city and country labels, where GAEA establishes itself as a strong baseline, surpassing several recent LMMs in performance.
DollarStreet [21], and CityGuessr68k [28]. From GeoDE, we sampled 22K images based on 16 meta-tags having geolocalizable features. From DollarStreet, we manually sampled 1.3K images, removing indoor and non-geolocalizable samples. Since its metadata contains only country-level information, we evaluate this dataset solely for country classification. Additionally, we use the validation set of 14K images from CityGuessr and all 22K GeoDE samples for city and country classification tasks.
5.2. Results and Discussion
GAEA-Bench Evaluation. Table 1 presents the per-model performance of 12 recent LMMs on GAEA-Bench. The results offer several insights: (i) Our proposed model, GAEA, achieves the highest average performance across decision-making questions (T/F and MCQs) and Short VQAs. Among proprietary models, GPT-4o [9] overall performs the best, with an accuracy of 60.59%, excelling particularly in Long VQAs—outperforming GAEA by 6.53% in this category. However, both open-source and proprietary models struggle -
with short-form questions. E.g., GPT-4o’s accuracy drops from 63.62% on long questions to 49.5% on short questions. (ii) GAEA outperforms all LMMs with an average accuracy of 66.06%, surpassing GPT-4o by 8.28% and outperforming the second-best open-source model, LLaVA-OneVision [30], by 25.69%. (iii) Several open-source models, including LLaMA-3.2-11B [20], GLM-4V-9B [22], and Phi-3.5-Vision [8], achieve comparable overall performance. (iv) LMMs perform better on decision-making questions (MCQs an-
d T/F) than openended questions; see Figure 17. E.g., LLaVA-OneVision experiences a 57.8% drop in accuracy on SVQA compared to T/F questions. The low performance on free-form questions underscores the challenge of using short questions to effectively assess conversational capabilities in the GAEABench. We provide qualitative comparisons with several LMMs in Figures 10, 14 and 15
Benchmark Model City Region Country Continent 25 km 200 km 750 km 2500 km
IM2GPS [24]
PlaNet [53] 24.5 37.6 53.6 71.3 CPlaNet [45] 37.1 46.4 62.0 78.5 ISNs [25] 43.0 51.9 66.7 80.2 TransLocator [52] 48.1 64.6 75.6 86.7 GeoCLIP [50] 41.8 60.8 77.2 89.9 GeoDecoder [18] 50.2 69.0 80.0 89.1 PIGEON [23] 40.9 63.3 82.3 91.1 GaGA [19] 38.8 54.8 75.1 87.7 GAEA (Ours) 41.4 54.4 74.3 87.8
IM2GPS3k [51]
PlaNet [53] 24.8 34.3 48.4 64.6 CPlaNet [45] 26.5 34.6 48.6 64.6 ISNs [25] 28.0 36.6 49.7 66.0 TransLocator [52] 31.1 46.7 58.9 80.1 GeoDecoder [18] 33.5 45.9 61.0 76.1 GeoCLIP [50] 34.5 50.7 69.7 83.8 PIGEON [23] 36.7 53.8 72.4 85.3 GaGA [19] 33.0 48.0 67.1 82.1 GAEA (Ours) 33.7 52.3 70.8 84.0
GWS15k [18]
ISNs [25] 0.6 4.2 15.5 38.5 TransLocator [52] 1.1 8.0 25.5 48.3 GeoDecoder [18] 1.5 8.7 26.9 50.5 GeoCLIP [50] 3.1 16.9 45.7 74.1 PIGEON [23] 9.2 31.2 65.7 85.1 GAEA (Ours) 3.1 15.9 41.9 71.4
Table 2. We benchmark the performance of various specialized models on standard geolocation datasets. GAEA demonstrates competitive results, outperforming GaGA on multiple distance thresholds in both IM2GPS and IM2GPS3k.
Standard Geo-localization Evaluation Table 2 compares GAEA’s performance with various specialized encoderonly methods across three geolocalization benchmarks. While GAEA is trained on a large-scale conversational dataset with geolocalization capabilities, it achieves competitive results against specialized models. We also evaluate against GaGA [19], which is trained on a dataset five times larger than ours, on IM2GPS and IM2GPS3k. However, we exclude comparisons on GSW-15K due to differences in da-
taset curation. Following the guidelines of [18], we reconstruct the GSW-15K benchmark.
In IM2GPS3k, GAEA achieves the second-highest scores after PIGEON, outperforming GaGA across all four distance thresholds. It surpasses GaGA by 2.5% at the 25km radius and 3.66% at the country level. Additionally, GAEA outperforms the specialized model GeoCLIP [50] across all thresholds, with a 1.5% higher score in the region category and 1% improvements at the city and country levels. In IM2GPS, GAEA outperforms GaGA at 25 km and 2,500 km, remains competitive at 200 km and 750 km, and slightly su-
rpasses PIGEON at the city level while maintaining competitive performance across other thresholds. We also evaluate GAEA on GSW-15K, one of the most challenging datasets, which includes non-geolocalizable landmarks. GAEA outperforms GeoCLIP [50] and GeoDecoder [18] on city-level distance and achieves comparable performance at the region and country levels. Figure 8 presents GAEA’s Classification Accuracy on three new datasets: CityGuessr68k-val [28], GeoDE [41], and DollarStreet [21]. GAEA outper-
forms recent LMMs, including

LLaVA-OneVision [30], InternVL [17], and GLM-4V-9B [22], on both city- and country-level classification. These results highlight GAEA’s extensive geographical coverage and strong geolocation capabilities.
6. Conclusion
We introduced GAEA, the first interactive conversational model with specialized geolocation capabilities, explicitly trained on a large-scale conversational dataset, GAEA1.6M. We meticulously designed the dataset to enhance GAEA’s reasoning, conversational abilities, and geolocation accuracy. We curated geolocalizable images from MP16, GLDv2, and CityGuessr68k, enriching them with auxiliary context and metadata, such as geographic clues, and climate zones. In addition to a high-quality instruction-
 set, we present GAEA-Bench, a comprehensive benchmark that evaluates LMMs across multiple question types, including MCQs, True/False, short- and long-VQAs. Our results show that GAEA outperforms recent LMMs on GAEABench, demonstrating strong geolocation and conversational capabilities by leveraging OpenStreetMap (OSM) data. These findings establish GAEA as a strong baseline for future research in geolocalization.
References
[1] . EarthEnv. https://www.worldstandards.eu/cars/list-of-leftdriving-countries/, . 5 [2] . GeoGuessr. https://www.geoguessr.com/, . 2, 5, 17 [3] . GeoPy. https://geopy.readthedocs.io/en/stable/, . 7 [4] . Plonkit. https://www.plonkit.net/, . 5 [5] . S2-Cells. https://code.google.com/archive/p/s2-geometrylibrary/, . 4 [6] . WikiMedia. https://commons.wikimedia.org/w/api.php, . 4 [7] . WorldStandards. https://www.worldstandards.eu/cars/listof-left-driving-countries/, . 5 [8] Marah Abdin, Jyoti Ane-
ja, Hany Awadalla, Ahmed Awadallah, Ammar Ahmad Awan, Nguyen Bach, Amit Bahree, Arash Bakhtiari, Jianmin Bao, Harkirat Behl, et al. Phi-3 technical report: A highly capable language model locally on your phone. arXiv preprint arXiv:2404.14219, 2024. 7, 8, 13 [9] Josh Achiam, Steven Adler, Sandhini Agarwal, Lama Ahmad, Ilge Akkaya, Florencia Leoni Aleman, Diogo Almeida, Janko Altenschmidt, Sam Altman, Shyamal Anadkat, et al. Gpt-4 technical report. arXiv preprint arXiv:2303.08774, 2023. 3, 5, 7, 8,-
 13 [10] Meta AI. Llama 3.2: Vision and edge models. Meta AI Blog, 2024. 2, 3, 7, 13 [11] Jean-Baptiste Alayrac, Jeff Donahue, Pauline Luc, Antoine Miech, Iain Barr, Yana Hasson, Karel Lenc, Arthur Mensch, Katherine Millican, Malcolm Reynolds, et al. Flamingo: a visual language model for few-shot learning. In Advances in neural information processing systems, pages 23716–23736, 2022. 2
[12] Shuai Bai, Keqin Chen, Xuejing Liu, Jialin Wang, Wenbin Ge, Sibo Song, Kai Dang, Peng Wang, Shijie Wang, Jun Tang, Humen Zhong, Yuanzhi Zhu, Mingkun Yang, Zhaohai Li, Jianqiang Wan, Pengfei Wang, Wei Ding, Zheren Fu, Yiheng Xu, Jiabo Ye, Xi Zhang, Tianbao Xie, Zesen Cheng, Hang Zhang, Zhibo Yang, Haiyang Xu, and Junyang Lin. Qwen2.5-vl technical report. arXiv preprint arXiv:2502.13923, 2025. 3, 6, 7, 13, 14
[13] Hylke E Beck, Niklaus E Zimmermann, Tim R McVicar, Noemi Vergopolan, Alexis Berg, and Eric F Wood. Present and future ko ̈ppen-geiger climate classification maps at 1-km resolution. Scientific data, 5(1):1–12, 2018. 5 [14] Tom Brown, Benjamin Mann, Nick Ryder, Melanie Subbiah, Jared D Kaplan, Prafulla Dhariwal, Arvind Neelakantan, Pranav Shyam, Girish Sastry, Amanda Askell, et al. Language models are few-shot learners. In Advances in neural information processing systems, pages 1877–1901, 202-
0. 2 [15] Denis Carriere. Geocoder: Simple, consistent. https: //geocoder.readthedocs.io/. Accessed: [Insert Date]. 3 [16] Athanasios Chalvatzaras, Ioannis Pratikakis, and Angelos A Amanatiadis. A survey on map-based localization techniques for autonomous vehicles. IEEE Transactions on intelligent vehicles, 8(2):1574–1596, 2022. 1, 3 [17] Zhe Chen, Jiannan Wu, Wenhai Wang, Weijie Su, Guo Chen, Sen Xing, Muyan Zhong, Qinglong Zhang, Xizhou Zhu, Lewei Lu, et al. Internvl: Scaling up vision foundatio-
n models and aligning for generic visual-linguistic tasks. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, pages 24185–24198, 2024. 9, 13 [18] Brandon Clark, Alec Kerrigan, Parth Parag Kulkarni, Vicente Vivanco Cepeda, and Mubarak Shah. Where we are and what we’re looking at: Query based worldwide image geo-localization using hierarchies and scenes. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 23182–23190, 2023. 6-
, 7, 8, 13 [19] Zhiyang Dou, Zipeng Wang, Xumeng Han, Chenhui Qiang, Kuiran Wang, Guorong Li, Zhibei Huang, and Zhenjun Han. Gaga: Towards interactive global geolocation assistant. arXiv preprint arXiv:2412.08907, 2024. 5, 8
[20] Abhimanyu Dubey, Abhinav Jauhri, Abhinav Pandey, Abhishek Kadian, Ahmad Al-Dahle, Aiesha Letman, Akhil Mathur, Alan Schelten, Amy Yang, Angela Fan, et al. The Llama 3 herd of models. arXiv preprint arXiv:2407.21783, 2024. 2, 8 [21] William Gaviria Rojas, Sudnya Diamos, Keertan Kini, David Kanter, Vijay Janapa Reddi, and Cody Coleman. The dollar street dataset: Images representing the geographic and socioeconomic diversity of the world. Advances in Neural Information Processing Systems, 35:129-
79–12990, 2022. 8 [22] Team GLM, Aohan Zeng, Bin Xu, Bowen Wang, Chenhui Zhang, Da Yin, Diego Rojas, Guanyu Feng, Hanlin Zhao, Hanyu Lai, Hao Yu, Hongning Wang, Jiadai Sun, Jiajie Zhang, Jiale Cheng, Jiayi Gui, Jie Tang, Jing Zhang, Juanzi Li, Lei Zhao, Lindong Wu, Lucen Zhong, Mingdao Liu, Minlie Huang, Peng Zhang, Qinkai Zheng, Rui Lu, Shuaiqi Duan, Shudan Zhang, Shulin Cao, Shuxun Yang, Weng Lam

Tam, Wenyi Zhao, Xiao Liu, Xiao Xia, Xiaohan Zhang, Xiaotao Gu, Xin Lv, Xinghan Liu, Xinyi Liu, Xinyue Yang, Xixuan Song, Xunkai Zhang, Yifan An, Yifan Xu, Yilin Niu, Yuantao Yang, Yueyan Li, Yushi Bai, Yuxiao Dong, Zehan Qi, Zhaoyu Wang, Zhen Yang, Zhengxiao Du, Zhenyu Hou, and Zihan Wang. Chatglm: A family of large language models from glm-130b to glm-4 all tools, 2024. 7, 8, 9, 13 [23] Lukas Haas, Michal Skreta, Silas Alberti, and Chelsea Finn. Pigeon: Predicting image geolocations. In Proceed-
ings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 12893–12902, 2024. 1, 3, 5, 7, 8, 13 [24] James Hays and Alexei A Efros. Im2gps: estimating geographic information from a single image. In 2008 ieee conference on computer vision and pattern recognition, pages 1–8. IEEE, 2008. 3, 6, 7, 8, 13 [25] Zheng Hong, Yiwei Yin, Zhe Luo, and Jiebo Luo. Isns: Image-specific neural style transfer for image geolocation. arXiv preprint arXiv:2106.11593, 2021. 3, 7, 8, 13
[26] Edward J Hu, Phillip Wallis, Zeyuan Allen-Zhu, Yuanzhi Li, Shean Wang, Lu Wang, Weizhu Chen, et al. LoRA: LowRank Adaptation of Large Language Models. In International Conference on Learning Representations. 6, 14
[27] Kartik Kuckreja, Muhammad S. Danish, Muzammal Naseer, Abhijit Das, Salman Khan, and Fahad S. Khan. Geochat: Grounded large vision-language model for remote sensing. The IEEE/CVF Conference on Computer Vision and Pattern Recognition, 2024. 3, 7, 13
[28] Parth Parag Kulkarni, Gaurav Kumar Nayak, and Mubarak Shah. Cityguessr: City-level video geo-localization on a global scale. In European Conference on Computer Vision, pages 293–311. Springer, 2024. 4, 8 [29] Martha Larson, Mohammad Soleymani, Guillaume Gravier, Bogdan Ionescu, and Gareth JF Jones. The benchmarking initiative for multimedia evaluation: Mediaeval 2016. IEEE MultiMedia, 24(1):93–96, 2017. 2, 4 [30] Bo Li, Yuanhan Zhang, Dong Guo, Renrui Zhang, Feng Li, Hao Zhang, Kaichen Zhang,-
 Peiyuan Zhang, Yanwei Li, Ziwei Liu, and Chunyuan Li. Llava-onevision: Easy visual task transfer, 2024. 3, 7, 8, 9, 13 [31] Junnan Li, Dongxu Li, Silvio Savarese, and Steven Hoi. Blip-2: Bootstrapping language-image pre-training with frozen image encoders and large language models. arXiv preprint arXiv:2301.12597, 2023. 3
[32] Ling Li, Yu Ye, Bingchuan Jiang, and Wei Zeng. GeoReasoner: Geo-localization with reasoning in street views using a large vision-language model. In Proceedings of the 41st International Conference on Machine Learning, pages 29222–29233, 2024. 1, 2, 3, 5 [33] Haotian Liu, Chunyuan Li, Yuheng Li, Bo Li, Yuanhan Zhang, Sheng Shen, and Yong Jae Lee. LLaVA-NeXT: Improved reasoning, OCR, and world knowledge, 2024. 7, 13 [34] Haotian Liu, Chunyuan Li, Qingyang Wu, and Yong Jae Lee. Visual instructio-
n tuning. Advances in neural information processing systems, 36, 2024. 3
[35] Muhammad Maaz, Hanoona Rasheed, Abdelrahman Shaker, Salman Khan, Hisham Cholakal, Rao M Anwer, Tim Baldwin, Michael Felsberg, and Fahad S Khan. Palo: A poly
glot large multimodal model for 5b people. arXiv preprint arXiv:2402.14818, 2024. 2
[36] Ahmad Mahmood, Ashmal Vayani, Muzammal Naseer, Salman Khan, and Fahad Shahbaz Khan. Vurf: A generalpurpose reasoning and self-refinement framework for video understanding. arXiv preprint arXiv:2403.14743, 2024. 12 [37] Vishal Narnaware, Ashmal Vayani, Rohit Gupta, Swetha Sirnam, and Mubarak Shah. Sb-bench: Stereotype bias benchmark for large multimodal models. arXiv preprint arXiv:2502.08779, 2025. 5
[38] OpenStreetMap contributors. Openstreetmap, 2024. [Data set]. OpenStreetMap Foundation. Available as open data under the Open Data Commons Open Database License (ODbL). 2, 4, 12 [39] Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh, Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, and Ilya Sutskever. Learning transferable visual models from natural language supervision. 3 [40] Alec Radford, Jeff Wu, Rewon Child, David Luan, Dar-
io Amodei, and Ilya Sutskever. Language models are unsupervised multitask learners. OpenAI Blog, 1(8):9, 2019. 3 [41] Vikram V Ramaswamy, Sing Yu Lin, Dora Zhao, Aaron Adcock, Laurens van der Maaten, Deepti Ghadiyaram, and Olga Russakovsky. Geode: a geographically diverse evaluation dataset for object recognition. Advances in Neural Information Processing Systems, 36:66127–66137, 2023. 7, 8 [42] Shaina Raza, Rizwan Qureshi, Anam Zahid, Joseph Fioresi, Ferhat Sadak, Muhammad Saeed, Ranjan Sapkota, -
Aditya Jain, Anas Zafar, Muneeb Ul Hassan, et al. Who is responsible? the data, models, users or regulations? responsible generative ai for a sustainable future. arXiv preprint arXiv:2502.08650, 2025. 6
[43] Shaina Raza, Ashmal Vayani, Aditya Jain, Aravind Narayanan, Vahid Reza Khazaie, Syed Raza Bashir, Elham Dolatabadi, Gias Uddin, Christos Emmanouilidis, Rizwan Qureshi, et al. Vldbench: Vision language models disinformation detection benchmark. arXiv preprint arXiv:2502.11361, 2025. 6
[44] Ananya B Sai, Akash Kumar Mohankumar, and Mitesh M Khapra. A survey of evaluation metrics used for nlg systems. ACM Computing Surveys (CSUR), 55(2):1–39, 2022. 7
[45] Paul Hongsuck Seo, Tobias Weyand, Jack Sim, and Bohyung Han. Cplanet: Enhancing image geolocalization by combinatorial partitioning of maps. In Proceedings of the European Conference on Computer Vision (ECCV), pages 536551, 2018. 3, 7, 8, 13 [46] Qiaomu Shen, Wei Zeng, Yu Ye, Stefan Mu ̈ller Arisona, Simon Schubiger, Remo Burkhard, and Huamin Qu. Streetvizor: Visual exploration of human-scale urban forms based on street views. IEEE transactions on visualization and computer graphics, 24(1):10-
04–1013, 2017. 1, 3 [47] Gemini Team, Rohan Anil, Sebastian Borgeaud, Yonghui Wu, Jean-Baptiste Alayrac, Jiahui Yu, Radu Soricut, Johan Schalkwyk, Andrew M Dai, Anja Hauth, et al. Gemini: a family of highly capable multimodal models. arXiv preprint arXiv:2312.11805, 2023. 2, 3, 7, 13

[48] Omkar Thawakar, Ashmal Vayani, Salman Khan, Hisham Cholakal, Rao M Anwer, Michael Felsberg, Tim Baldwin, Eric P Xing, and Fahad Shahbaz Khan. Mobillama: Towards accurate and lightweight fully transparent GPT. arXiv preprint arXiv:2402.16840, 2024. 2, 7
[49] Ashmal Vayani, Dinura Dissanayake, Hasindri Watawana, Noor Ahsan, Nevasini Sasikumar, Omkar Thawakar, Henok Biadglign Ademtew, Yahya Hmaiti, Amandeep Kumar, Kartik Kuckreja, et al. All languages matter: Evaluating lmms on culturally diverse 100 languages. arXiv preprint arXiv:2411.16508, 2024. 5, 7
[50] Vicente Vivanco Cepeda, Gaurav Kumar Nayak, and Mubarak Shah. Geoclip: Clip-inspired alignment between locations and images for effective worldwide geolocalization. Advances in Neural Information Processing Systems, 36, 2024. 1, 3, 4, 8 [51] Nam Vo, Nathan Jacobs, and James Hays. Revisiting im2gps in the deep learning era. In Proceedings of the IEEE International Conference on Computer Vision, pages 2621–2630, 2017. 3, 6, 7, 8, 13 [52] Bingxian Wang, Ying Chen, Xin Zhang, Haojie Wang, Ziqiang-
 Wang, and Wen Xu. Translocator: A transformerbased large-scale image geolocalization approach. In Proceedings of the AAAI Conference on Artificial Intelligence, pages 2558–2566, 2022. 3, 7, 8, 13 [53] Tobias Weyand, Ilya Kostrikov, and James Philbin. Planetphoto geolocation with convolutional neural networks. In Computer Vision–ECCV 2016: 14th European Conference, Amsterdam, The Netherlands, October 11-14, 2016, Proceedings, Part VIII 14, pages 37–55. Springer, 2016. 3, 7, 8, 13 [54] Tobias Weyan-
d, Andre Araujo, Bingyi Cao, and Jack Sim. Google landmarks dataset v2-a large-scale benchmark for instance-level recognition and retrieval. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, pages 2575–2584, 2020. 4 [55] Yibo Yan and Joey Lee. Georeasoner: Reasoning on geospatially grounded context for natural language understanding. In Proceedings of the 33rd ACM International Conference on Information and Knowledge Management, pages 41634167, 2024. 1 [56] An Y-
ang, Baosong Yang, Beichen Zhang, Binyuan Hui, Bo Zheng, Bowen Yu, Chengyuan Li, Dayiheng Liu, Fei Huang, Haoran Wei, Huan Lin, Jian Yang, Jianhong Tu, Jianwei Zhang, Jianxin Yang, Jiaxi Yang, Jingren Zhou, Junyang Lin, Kai Dang, Keming Lu, Keqin Bao, Kexin Yang, Le Yu, Mei Li, Mingfeng Xue, Pei Zhang, Qin Zhu, Rui Men, Runji Lin, Tianhao Li, Tingyu Xia, Xingzhang Ren, Xuancheng Ren, Yang Fan, Yang Su, Yichang Zhang, Yu Wan, Yuqiong Liu, Zeyu Cui, Zhenru Zhang, and Zihan Qiu. Qwen2.5 technical rep-
ort. arXiv preprint arXiv:2412.15115, 2024. 2, 5
[57] Jiabo Ye, Haiyang Xu, Haowei Liu, Anwen Hu, Ming Yan, Qi Qian, Ji Zhang, Fei Huang, and Jingren Zhou. mplugowl3: Towards long image-sequence understanding in multimodal large language models, 2024. 7 [58] Bolei Zhou, Agata Lapedriza, Aditya Khosla, Aude Oliva, and Antonio Torralba. Places: A 10 million image database
for scene recognition. IEEE transactions on pattern analysis and machine intelligence, 40(6):1452–1464, 2017. 5
[59] Sijie Zhu, Mubarak Shah, and Chen Chen. Transgeo: Transformer is all you need for cross-view image geo-localization. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 1162–1171, 2022. 1, 3

GAEA: A Geolocation Aware Conversational Model
Supplementary Material
Total images 822,951 Total cities / countries 41,481 / 234 Total Questions 1,580,531 Total geo-localization questions 822,951 Total explanatory captions 384,947 Total open-ended questions 267,668 Total multiple-choice questions 48,673 Total true/false questions 56,292
Table 3. Dataset Statistics
This work was supported by “MFC Lockheed Martin, Orlando”. We would also like to thank David Shatwell, Manu S Pillai, Praveen Tirupattur, Brian Dina, and Suranadi Dodampaganmage for their insightful discussions and contributions.
We organize the rest of the Supplementary Material as follows: In Section 7, we provide the additional details of our dataset, GAEA-1.6M . In Section 8, we provide additional baseline results on GAEA. Section Section 9 discusses the reproducibility of the GAEA-1.6M and provides details on privacy, safety, and broader impact.
7. Addendum to the Dataset
In this section, we present the dataset statistics and challenges encountered in its creation. Additionally, we discuss our plans to address these limitations in future works.
7.1. Challenges with Open Street Maps (OSM)
OpenStreetMaps (OSM) [38] is a rich data source for geospatial applications. It contains a wide variety of geographic and infrastructure-related information. Using such a vast open-source dataset, we can collect data about stationary objects in the world, including infrastructure, topological information, various types of amenities (e.g., schools, hospitals, restaurants), transportation networks, international country boundaries, historical and cultural sides, and natural features (e.g., forests, -
rivers, and seas). Each feature from the OSM dataset has several associated features, such as names and physical characteristics. In GAEA-1.6M, we geocode the visual sample with its GPS coordinates and use the location information (longitude and latitude) as a query to the OSM database to fetch geospatial information in 1 KM radius and further utilize that information to generate question-answer pairs for the training of GAEA. Despite being such a rich source of data, OSM faces several challenges.-
 One major issue is the variability in data quality and completeness, as contributions to OSM are
made by the open-source community, which may result in inconsistent information across different regions. Urban areas often have much more detailed information than rural areas, leading to less comprehensive annotations for rural regions. Another inconsistency related to human annotations stems from the different representations of the same label in different areas, introducing inherent heterogeneity in the structure of OSM data. For instance, some users might label a path as a “trail,” while othe-
rs might call it a “footway,” and distinctions between what counts as a “park” versus a ”garden” are not always clear. Moreover, querying and retrieving data from OSM is a compute-intensive task. It often becomes slower as the number of queries increases and struggles to handle dense or redundant information, necessitating efficient filtering and optimization techniques. Lastly, the information is not always up-to-date, as volunteers update different areas at different times. While some locations -
may have very recent data, others may be outdated, and sometimes different parts of the same area may contain information from varying periods.
7.2. Statistics
GAEA-1.6M covers 234 different countries and territories, and 41,481 cities. Table 3 denotes the exact sample numbers.
7.3. Motivation for constructing GAEA-1.6M
The dataset contains a wide spectrum of questions, with varying difficulty levels. Figure 11 outlines a category consisting of easily geo-localizable landmarks such as the Statue of Liberty, and Figure 12 represents one of the many difficult questions found in our dataset, which attempts to fine-tune an LMM to respond with location information that an average human could struggle to identify [36]. In Figure 13, we show a full example of one of our LVQA prompts.
Training an LMM with some of the metadata found in OSM [38] can be a challenging task. For instance, questions like, What are the hours of operation of the nearest coffee shop located in
this area? could be difficult for a model to learn effectively and respond to accurately. We encourage the research community to explore and develop methods that could help LMMs meaningfully represent such fine-grained geo-localization information.

Abu Dhabi, United Arab Emirates
Abu Dhabi, United Arab Emirates
Dubai, United Arab Emirates
Dubai, United Arab Emirates
Dubai, United Arab Emirates
Cambodia
Kampot, Cambodia
Mumbai, India
Mangalore, India
Siem Reap, Cambodia
Tokyo, Japan
Kawasaki, Japan
Kawasaki, Japan
Tokyo, Japan
Tokyo, Japan
Istanbul, Türkiye
Antalya, Türkiye
Antalya, Türkiye
Belgrade, Serbia
Kiev, Ukraine
Figure 9. Geo-localization qualitative example. GAEA’s performance on geo-localization tasks is compared to open-source LMMs using CityGuessr, DollarStreet, and GeoDE datasets.
8. Addendum to Baseline and Evaluation
This section covers the models used for comparison with GAEA, the prompts used during training and inference, the prompts used for evaluating GAEA-Bench, and the training hyperparameters.
8.1. Baselines
We benchmark 8 top-performing open-source LMMs, including LLaMA 3.2-Vision [10], InternVL2 [17], Qwen2.5VL [12], Phi3.5-vision-instruct [8], GeoChat [27], LlaVAOneVision [30], GLM-4V-9B [22], LLaVA-NeXT-Mistral7B [33], and 3 proprietary models, Open-AI’s GPT-4o, GPT-4o-mini [9], and Google’s Gemini-2.0-Flash [47] on GAEA-Bench.
Additionally, we compared the performance of GAEA against six state-of-the-art (SoTA) geo-localization models, namely PlaNet [53], CPlaNet [45], ISNs [25], TransLocator [52], GeoDecoder [18], and PIGEON [23] on three standard geo-localization benchmarks including IM2GPS [24], IM2GPS3k [51], and GWS15k [18]. For a comprehensive overview of the hyperparameter configuration for GAEA, see Table 4 in the Supplementary Material.
8.2. Prompts Used During Training and Inference
When training GAEA, we employed the task-specific prompts shown in Figure 18 to align the model’s understanding with target objectives. During inference, these identical prompts were used for all models evaluated on GAEA-Bench to ensure comparability.

Location:
San Pedro de Atacama, Chile (-22.910728, -68.201408) Input Question:
Can you name any hostels or guest houses near this image? Ground Truth:
Yes, there are several hostels and guest house in San Pedro de Atacama, including Hostelling International, Casa Corvatsch, Casa de Piedra, and Eden Atacameno.
The image you’ve provided appears to be of ancient rock carvings, which are likely part of an archaeological site...
Unfortunately, I'm unable to provide a specific information about hostels or guest houses near the image, as I don’t have access to real-time information.
The image depicts petroglyphs that are likely found in areas like the Petroglyph National Monument in New Mexico.
It’s difficult to pinpoint specific hostels or guest houses based solely on an image of petroglyphs...
Near where this image was taken, you can find Hostal Casa de la Piedra in San Pedro de Atacama, Chile.
If the site is in a place like Petra in Jordan, you could look for accommodations in nearby areas like Wadi Musa or Aqaba.
Figure 10. SVQA qualitative example. GAEA’s performance on SVQA tasks is compared to open-source and proprietary LMMs.
8.3. Prompts Used in Evaluation
To obtain our results from Figure Figure 17, we use three prompts in evaluating the questions in GAEA-Bench. Since the question types of our benchmark vary, a multi-prompt approach is needed. We have reformatted certain elements of the actual prompts for conciseness, though figures Figures 16, 20 and 21 closely reflect these three prompts.
8.4. Training Hyperparameters
We perform single-stage training on our baseline [12] using GAEA-1.6M. The training is conducted for 1 epoch with a global batch size of 128, utilizing gradient accumulation steps of 4 to optimize resource usage for small batch sizes. The initial learning rate is set to 10−5, using a cosine learning rate scheduler to provide a smooth decay in the learning rate for effective convergence. A weight decay of 0 is applied to avoid penalizing weights during updates, which can be advantageous for certain-
 model architectures. The warmup ratio is configured at 0.03 to ensure a grad
Number of epochs 1 Global batch size 128 Gradient accumulation steps 4 Initial learning rate 10−5 Learning rate scheduler cosine Weight decay 0 Warmup ratio 0.03 LoRA rank (r) 16 LoRA α 32 LoRA dropout 0.01 Model data type bfloat16 Maximum context length of LLM 128,000 Attention type flash attention
Table 4. Hyperparameters used for training GAEA.
ual increase in the learning rate during the initial training phase, stabilizing early optimization. We employed lowRank adaptation (LoRA) [26] for efficient fine-tuning, with a rank, r = 16, α = 32, and a dropout rate of 0.01, enabling

Q : What isthe name of the statue that isdepicted in thisimage?
GT : T he name of the statue on Liberty Island isthe Statue of Li ber t y.
Q : What isthe name of the control gate at the entrance to the site shown in thisimage?
GT : T he name of the control gate at the entrance to M achu Picchu is R uta M ontaña Wayna Picchu
Figure 11. These two images display examples of what we consider as easy questions. Easy questions include the questions that pertain to easily identifiable landmarks that are associated with celebrated locations.
Q : Isthere a post office near the location depicted in thisimage?
GT : Yes, there isa post office near TiberiasPost O ffice, it isFirst International Bank of Israel.
Q : What isthe name of the plaza that islocated in the area depicted in thi s i mage?
GT : Plaza del General Torrijosislocated in M alaga, Spain at the intersection of Paseo del Parque and Plaza del General Torrijos.
Figure 12. The two images above denote examples of what we consider as hard questions. Hard questions include the questions that prompt the model to answer specific details pertaining to locations.
targeted model adjustments with minimal overhead. The model operates in bfloat16 precision to balance computational efficiency and numerical stability. A maximum context length of 128,000 allows for processing extremely long sequences, while flash attention enhances the computational efficiency of attention mechanisms, especially for extended contexts. These settings collectively optimize the model’s performance and adaptability for vision-language tasks. We list the training hyperparameters in th-
e Table 4.
8.5. Additional Qualitative Results
In this Section, we discuss additional qualitative results of GAEA and compare them with selected open-source and
Q : Provide a summary of the scene and include any relevant geographical context.
GT : T he image depictsa construction site in an urban setting, characterized by cranesand ongoing building activity. T his scene closely cor relates w ith features specific to Poland, particularly in itslarger citieslike Warsaw or Wroclaw, which are undergoing significant development and modernization. O ne notable clue that supportsthe identifying of thisimage asbeing from Poland isthe presence of tram lines and buses, which are integral to the public
transportation system found in many Polish cities. Poland isknown for its
extensive and efficient public transit net works, including tram s, w hich are com m only seen in urban areas. T he visible layout of the area, including organized lanesand pedestrian spaces, also reflectsa typical Polish urban design, where planning emphasizespedestrian accessibility alongside vehicle traffic.
Additionally, the architecture often features a m ix of m oder n constr uction and rem nants of histor ical influences, a character istic evident in m any Polish cities that have rebuilt and renovated post- com m unism . T hisblend ishighlighted in the cranes, symbolizing ongoing urban transformation, likely in a city that valuessuch development alongside itshistorical context. T he grey and overcast sk y seen in the im age is also t ypical of the weather
conditions in Poland, especially in the fall or winter. O verall, thisconstruction site embodiesPoland'scommitment to modernization while retaining itsunique urban characteristics, corroborating the cluesprovided about the country'sdistinct urban landscape and ongoing developments.
Figure 13. Through our explanatory captions (LVQA), we introduce the reasoning capabilities in our GAEAto identify the geographical information about that visual sample. Outlined in bold, we provide explanations of the correlation between specific visual cues and their associated geographical contexts, encouraging GAEAto refine its reasoning capabilities.
proprietary models (as mentioned in Table 1 in the main paper). Figure 9 presents a comparison of city-country predictions against other competing models. We also show the qualitative results of GAEA on short version questions (SVQA), multiple-choice questions (MCQs), and true or false questions (TF) in Figures 10, 14 and 15 respectively. For these Figures, we highlight correct predictions with green, while incorrect predictions are marked as red. Together with our quantitative metrics, we conclud-
e that GAEA appears to outperform many of these models across various tasks.

LLaVA-OV
Figure 14. MCQ qualitative example. GAEA’s performance on MCQ answering tasks is compared to open-source and proprietary LMMs.
LLaVA-OV
Figure 15. T/F qualitative example. GAEA’s performance on T/F answering tasks is compared to open-source and proprietary LMMs.
9. Reproducibility, Privacy, Safety, and Broader Impact
GAEA-1.6M takes the first step in infusing conversational elements into the geo-localization task. The dataset is open
Evaluation Prompt for LVQA
Evaluate the following predicted answer by comparing it to the provided ground truth. Focus on the accuracy of 1) location prediction, 2) cultural aspect matching, 3) consistency and quality of reasoning, 4) specificity and relevance, 5) and fluency and clarity.
• Question: {question} • Ground Truth: {ground truth} • Model Prediction: {predicted answer}
Instructions:
• How accurately does the predicted answer identify the specific country, city, or state mentioned in the ground truth? • Does the predicted answer capture and reflect the cultural aspects present in the ground truth? • Is the predicted answer logically consistent and demonstrates sound reasoning based on the information provided? • Does the predicted answer provide specific information that is directly relevant to the question and closely aligns with the ground truth? • Is the language in the pre-
dicted answer fluent, clear, and well-articulated? • Provide a single overall score out of 10, based on these five criteria, weighing the criteria in the order listed, with location relevance and cultural aspect matching receiving the most weight. • Return only the numeric score, without additional commentary.
Figure 16. Evaluation prompt for longer form open-ended questions (LVQA). We assess model predictions based on location prediction, cultural aspect matching, and quality of reasoning, with an emphasis on location relevance.
source, and we plan to release it via an academic website for research, academic, and commercial use. The dataset is protected under the CC-BY license of Creative Commons, which allows the users to distribute, remix, adapt, and build upon the material in any medium or format, as long as the creator is attributed. The license allows GAEA-1.6M for commercial use. As the authors of this manuscript and collectors of this dataset, we reserve the right to distribute the data. Additionally, we provide th-
e code, data, and instructions needed to reproduce the main experimental baseline results, and the statistics pertinent to the dataset. We specify all the training details (e.g., data splits, hyperparameters, model-specific implementation details, compute resources used, etc.).

0
20
40
60
80
GeoChat
LLama-3.2-11B-Vision
LLaVA-NeXT
GLM-4V-9B
Phi3.5-Vision-Instruct
IntervnVL-2
LLaVA-OV-7B
Qwen2.5-VL
Gemini-2-Flash
GPT-4o-mini
GPT-4o
GAEA
LVQA SVQA MCQ TF
Figure 17. We showcase the performance of various LMMs on four diverse question types. GAEA outperforms on average across all question forms. GPT-4o achieves the highest accuracy on long questions.
Drawing upon your expertise in geography and tourism, examine the image and provide a comprehensive description of the community or lifestyle depicted. Include insights about cultural practices, geographic features, terrain, local flora and fauna, infrastructure, and any natural or man-made elements that characterize the location. Consider how these factors influence the lifestyle and community in the area. Question:
Provide a short answer on notable landmarks, museums, parks, restaurants, or activities that visitors might enjoy in the area. Highlight amenities and services that enhance the tourism experience at this location. Question:
Use your comprehensive knowledge of geography, landmarks, and tourism to analyze the image and determine the correct answer from the options provided. Note, your final answer should be a choice of either A, B, C, or D, including both the letter and the complete text of the option exactly as presented. Question:
Use your comprehensive knowledge of notable landmarks, museums, parks, restaurants, and related attractions to evaluate the following statement. Provide your final answer as either 'True' or 'False'. Question:
As a geography and tourism expert, analyze the image to determine its exact location. Utilize your extensive knowledge of geography, terrain, landscapes, flora, fauna, infrastructure, and recognizable landmarks to identify the city and country where the image was taken. Question:
Geolocalization Prompt
LVQA Prompt
SVQA Prompt
MCQ Prompt
TF Prompt
Figure 18. Task-specific prompts used to train and evaluate GAEA
The dataset can be used by multiple domain experts. Its application includes but is not only limited to tourist assistance, government analysts, and GeoGuessr [2] enthusiasts. Although we do not find any foreseeable harm that the dataset can pose to human society, it is always possible that some individual or an organization can use this idea to devise a technique that can appear harmful to society and can have evil consequences. However, as authors, we are
Country: Australia
Gum trees (eucalyptus) are by far the most common type of tree in Australia. Their bark is typically light-coloured, with puffy puffy clusters of leaves. Their look may vary significantly, depending on your location within the country.
Country: Bangladesh
Bangladeshi licence plates are either white, black or turquoise. NOTE: The turquoise and black licence plate can only be found in Bangladesh.
Country: Canada
Grise Fiord is the northernmost covered town in Canada. It can easily be recognized by these unique mountains and the ice floes on the coast.
Country: United States
North American semi-trucks have a longer nose, since the engine is in front of the driver’s cab. In contrast, European and Asian semi-trucks are cabovers, meaning the driver sits on top of the engine, giving the truck an L shape.
Figure 19. Example of the country-specific clues we used to generate reasoning questions.
absolutely against any detrimental usage of this dataset, regardless of whether it is by an individual or an organization, under profit or non-profitable motivation, and we pledge not to support any detrimental endeavors concerning our data or the idea therein.

Evaluation Prompt for SVQA
Evaluate the following predicted answer by comparing it to the provided ground truth. Focus on the accuracy of 1) location prediction, and 2) specificity and relevance.
• Question: {question} • Ground Truth: {ground truth} • Model Prediction: {predicted answer}
Scoring Guidelines:
• High score: Predicted response closely matches the specific location and provides specific information that closely aligns with the ground truth. • Low score: Predicted response lacks knowledge or is unrelated to the ground truth • Provide a score out of 10 for each criterion. • Return only the numeric score, without additional commentary
Figure 20. Evaluation prompt for free-form open-ended questions (SVQA). We assess model predictions based on location accuracy, specificity, and correctness.
Evaluation Prompt for MCQ/TF
Evaluate the following answer based on Accuracy: • Question: {question} • Ground Truth: {ground truth} • Model Prediction: {predicted answer}
Instructions:
• Match the meaning of the ground truth with the model prediction. • If it matches, give a score of 10. Otherwise, give a score of 0. • Strictly return only the numeric score, without any additional commentary.
Figure 21. Evaluation prompt for multiple-choice (MCQ) and true/false (TF) questions.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:45.896Z
- **Text Length:** 76927 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 18 of 18
