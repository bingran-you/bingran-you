# PDF Document: Kang et al. - 2025 - Data-driven Prediction of Species-Specific Plant Responses to Spectral-Shifting Films from Leaf Phen.pdf

**File Path:** Kang et al. - 2025 - Data-driven Prediction of Species-Specific Plant Responses to Spectral-Shifting Films from Leaf Phen.pdf

**Processed Date:** 2026-02-10T18:14:38.850Z

**File Size:** 6232.12 KB

**Total Pages:** 25

**Extracted Pages:** 25

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3631

**Title:** Data-driven Prediction of Species-Specific Plant Responses to Spectral-Shifting Films from Leaf Phenotypic and Photosynthetic Traits

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Data-driven Prediction of Species-Specific
Plant Responses to Spectral-Shifting Films
from Leaf Phenotypic and Photosynthetic
Traits
Jun Hyeun Kang1, Jung Eek Son2, Tae In Ahn2,3∗
1Smart Farm Research Center, Korea Institute of Science and Technology, Gangneung 25451,
Republic of Korea
2Research Institute of Agriculture and Life Sciences, Seoul National University, Seoul 08826,
Republic of Korea
3Department of Agriculture, Forestry and Bioresources, Seoul National University, Seoul
08826, Republic of Korea
Abstract
The application of spectral-shifting films in greenhouses to shift green light to red light has shown variable growth responses across crop species. However, the yield enhancement of crops under altered light quality is related to the collective effects of the specific biophysical characteristics of each species. Considering only one attribute of a crop has limitations in understanding the relationship between sunlight quality adjustments and crop growth performance. Therefore, this study aims to -
comprehensively link multiple plant phenotypic traits and daily light integral considering the physiological responses of crops to their growth outcomes under SF using artificial intelligence. Between 2021 and 2024, various leafy, fruiting, and root crops were grown in greenhouses covered with either PEF or SF, and leaf reflectance, leaf mass per area, chlorophyll content, daily light integral, and light saturation point were measured from the plants cultivated in each condition. 210 data points w-
ere collected, but there was insufficient data to train deep learning models, so a variational autoencoder was used for data augmentation. Most crop yields showed an average increase of 22.5% under SF. These data were used to train several models, including logistic regression, decision tree, random forest, XGBoost, and feedforward neural network (FFNN), aiming to binary classify whether there was a significant effect on yield with SF application. The FFNN achieved a high classification accuracy o-
f 91.4% on a test dataset that was not used for training. This study provide insight into the complex interactions between leaf phenotypic and photosynthetic traits, environmental conditions, and solar spectral components by improving the ability to predict solar spectral shift effects using SF.
∗Corresponding authors: tiahn@snu.ac.kr
1
arXiv:2511.15173v1 [q-bio.QM] 19 Nov 2025

Figure 1: Graphical abstract of this study. The workflow is divided into three main steps. (1) Data acquisition: crop growth, environmental data, and leaf reflectance spectra (400–750 nm) were collected from 24 different species and cultivars grown in a greenhouse covered with a spectral-shifting (SF) film. (2) Data augment & model training: to overcome the small dataset size (n=210), a variational autoencoder (VAE) was trained to generate a large augmented dataset (n=6400). This combined dataset-
 was then used to train a feedforward neural network. (3) Inference: the final model predicts the binary (Yes/No) yield enhancement response to SF with 91.4% accuracy. Furthermore, model interpretation using SHAP identified significant features for the prediction.
1 Introduction
The challenge of feeding the world’s projected population of nearly 10 billion people by 2050 in a sustainable way is one of the greatest challenges of the 21st century [1]. To meet the growing demand for food production while minimizing environmental impact, advanced agricultural technologies must be developed and implemented. Controlled environment agriculture (CEA), such as greenhouses and vertical farms, has emerged as a potential solution for enhancing crop production intensively and sustaina-
bly [2]. However, to maximize the potential of CEA, a comprehensive understanding of the complex interplay between environmental factors and plant responses is crucial. Among various environmental factors, light plays a critical role in regulating plant growth and development, with light intensity, quality, and photoperiod acting as key determinants of crop productivity [3–5]. Therefore, optimizing light manipulation strategies in CEA holds great promise for improving crop yields and quality while-
 reducing resource consumption and environmental footprint. In a greenhouse, plant growth can be manipulated by adjusting the light environment with artificial lighting supplementation and spectral-selective films. These methods were used to optimize the light spectrum for photosynthesis and regulate photomorphogenesis [6–8]. However, artificial lighting supplementation may not be sustainable due to the additional energy input and CO2 emissions. Moreover, spectral-selective films can reduce the in-
tensity of specific wavelengths, leading to a decrease in overall light intensity. Spectral-shifting film (SF) uses fluorescent dyes in the film to shift green light into red light [9]. Unlike spectrally selective films, SF converts light energy rather than blocking
2

it, so less light is reduced. As a result, plants grown in sunlight with more red light due to SF exhibit an increased photosynthetic capacity and yield [7,10–13]. For instance, Chinese cabbage, lettuce, strawberries, and sweet pepper have shown an increase in plant yields [7, 13–15]. However, the yields of some crops grown in SF were significantly reduced, and even within the same crop, the effect varied by cultivar [12, 14, 16]. Thus, SF-induced improvement was species-specific and cultivar-spe-
cific. Although SF could be an alternative for improving crop production, the inconsistent effects of SF on plant growth and yield are the main obstacle to the feasibility of solar spectrum modification. Considering one attribute of a crop has limitations in understanding the relationship between modified solar spectrum by SF and crop growth response. A previous study found that the photosynthetic capacity and productivity of Chinese cabbage increased when grown in the same polyethylene film (PEF)-
 and SF, while lettuce did not show the same improvement [14]. The study identified chlorophyll components and leaf thickness as the factors responsible for this species specificity. Additionally, the photosynthetic enhancement effect of SF has been reported to increase the photosynthetic rate at light intensities above the light saturation point [7, 11, 14, 15]. Therefore, even if photosynthetic capacity is increased, if the light intensity during the cultivation period is low, this enhancement m-
ay be neutralized, potentially resulting in no growth enhancement effect from SF. Thus, relationships between various plant phenotypic traits, light environmental conditions, and SF-induced growth responses need to be elucidated. Machine learning and deep learning are widely used to understand complex causal relationships for a variety of phenomena [17–19]. These approaches have the potential to identify key plant characteristics that contribute to the species- and cultivar-specific effects of SFs-
, and to develop predictive models for optimizing SF application in diverse crop production systems. To fill this research gap, the present study collected growth, phenotypic data, daily light integral, and photosynthetic parameters from 13 different crops and diverse cultivars between 2021 and 2024. Approximately 210 data points were collected over a period of four years. However, it is possible that there was insufficient data to train machine learning and deep learning models. Thus, the dataset-
 was augmented using VAE, a type of generative artificial neural network model that trains the distribution of the data and generates new data. The average increase rate of crops in yield was about 22.5% under SF compared to PEF. Various machine learning and deep learning models were created using the data obtained during the experiments to create a binary classifier that predicts the effect of SF. As a result, the feedforward neural network with augmented data achieved a high accuracy of 91.4% on-
 the test dataset that was not used for model training. This result enables the prediction of yield variances caused by SF application in relation to plant phenotypic traits, environmental conditions, and photosynthetic traits. This prediction can be used to determine the effectiveness of SF without the need for additional trial and error.
2 Methods
2.1 Film properties
Greenhouses were covered with either a conventional polyethylene film (PEF, Ultra film, Taekwangnewtech Co. Ltd., Seoul, Korea) or a spectral-shifting film (SF; Taekwangnewtech Co.). The relative transmittance spectra of PEF and SF were measured using a spectroradiometer (BLUE-Wave, StellarNet Inc., Tampa, FL, USA) (Fig. 2).
3

Figure 2: Comparison of relative transmittance between polyethylene film (PEF) and spectral-shifting film (SF).
The maximum absorption and emission wavelengths of SF were 576 nm and 622 nm, respectively. SF increased the transmittance of red light by 12.8% compared to PEF. Consequently, the average transmittance in the photosynthetically active radiation (PAR) range for PEF and SF was 94.2% and 90.8%, respectively.
2.2 Strawberry cultivation
Sulhyang cultivar of strawberry (Fragaria × ananassa Duch.) was grown in commercial greenhouses situated in Miryang, Korea (35°36’N, 128°77’E). The greenhouses, measuring 95 m in length, 8.3 m in width, and 2.5 m in height, were covered with a double layer of film. The outer layer of all greenhouses consisted of PEF, while the inner layer was either PEF or SF. The study was conducted over three separate experiments, with new covering materials installed for each experiment: Experiment (Exp.) 1 fro-
m 18 Oct. 2021 to 4 Apr. 2022, Exp. 2 from 20 Oct. 2022 to 10 Apr. 2023, and Exp. 3 from 20 Oct. 2023 to 30 Apr. 2024. Following the transplantation of strawberry seedlings into greenhouses containing coir growing medium with a 1:1 ratio of chip to dust, a nutrient solution specifically formulated for strawberries was administered four times daily, with an electrical conductivity (EC) ranging from 0.8 to 1.5 dS·m−1. Each plant received 400 mL of the nutrient solution per day. The temperature durin-
g the day was regulated by adjusting the side windows of the greenhouse, while the temperature at night was maintained at a minimum range of 8 to 10°C using an electric heater. To improve fruit quality and quantity, flower thinning was performed consistently across all treatments. The first flower cluster was thinned to retain 7 to 10 flowers per cluster, and subsequent clusters were thinned to maintain 5 flowers each. Leaf management was also implemented, with strawberry plants having 6 to 7 leav-
es at the onset of flowering in the first cluster and 7 to 8 leaves during the first fruit harvest. Additionally, old leaves were removed at regular intervals. In Exp. 1, the cumulative strawberry yields were 2,525 and 2,723 kg in the two PEF greenhouses and 2,823 and 2,976 kg in the two SF greenhouses from 1 Nov. 2021 to 13 Apr. 2022. During Exp. 2, data on cumulative yields were collected from 9 Feb. to 10 Mar. 2023, with the two PEF greenhouses yielding 584 and 985 kg, while the four SF greenho-
uses produced 793, 834, 1,001, and 1,047 kg. For Exp. 3, the yield from 1 Jan. to 26 Mar. 2024 was 3,471 kg for the three PEF greenhouses combined and 4,176 kg for the three SF greenhouses combined.
4

2.3 Pepper and watermelon cultivation
Pepper (Capsicum annuum L. cv. Cheongyang) of Exp. 1 was cultivated from 1 Oct. 2022 to 23 Dec. 2022 at the commercial greenhouse located in Miryang (35°36’N, 128°75’E), Korea. The outer layer of both greenhouses was covered with the PEF. The inner layer of one greenhouse was covered with PEF and that of the other greenhouse was covered with SF. Each greenhouse was 100 m in length and 4.4 m in width. The pepper seedlings were transplanted in soil mulched with black plastic film. Irrigation was pro-
vided through a drip irrigation system, and the plants were trained to grow in a V-shape. Peppers grown under SF exhibited a significantly higher leaf dry weight (56.9 ± 17.9 g) compared to those grown under PEF (38.4 ± 5.7 g). This represents a statistically significant increase of 48% in leaf dry matter production. The cumulative yield of peppers grown in four PEF and four SF greenhouses was recorded at 6,907 and 8,067 kg, respectively. Following the harvest of peppers, the same greenhouses were-
 used to cultivate watermelons (Citrullus lanatus cv. Good Choice). The soil was mulched with plastic film before transplanting the watermelon seedlings. The seedlings were transplanted at 40 cm intervals. Drip irrigation tubing was installed underneath the plastic mulch to provide water and nutrients to the watermelon plants. The watermelon plants were managed using a two-stem training system, consisting of a main stem and a lateral stem. The main stem and lateral stem were trained in a T-shape, -
with the fruit set occurring on the main stem. For the watermelons, only the third female flower on the 18th to 21st node was retained, while all other flowers were removed, leaving only one fruit per plant. Four watermelons were randomly harvested from each of two greenhouses, one of which was a PEF greenhouse and the other a SF greenhouse. The fresh weights of the harvested watermelons were determined as yield. The average weight of watermelons grown in PEF was 6.4 ± 0.4 kg and that of watermelo-
ns grown in SF was 8.0 ± 0.7 kg. Exp. 2 was initiated on 3 Aug. 2023 by transplanting pepper. The PEF film and SF were replaced with new ones on 2 Oct. Pepper yields were recorded from 6 Oct. to 21 Dec. 2023, and the cumulative yields were compared. The PEF greenhouses yielded 4,944 kg, while the SF greenhouses yielded 6,766 kg.
2.4 Rice cultivation
Rice (Oryza sativa L. cv. Akibare) was cultivated from 1 June 2023 to 27 Oct. 2023 in a 3,960 m2 paddy in Paju (37°82’N, 126°68’E), Korea. The rice seedlings were transplanted into the paddy with a spacing of 30 cm between rows and 15 cm between plants within each row. The field was irrigated regularly to maintain a water level of approximately 5–10 cm throughout the growing season. Fertilizers were applied according to the standard recommendations for rice cultivation. The small-scale greenhouse -
(2.0 m by 3.0 m) was installed on 12 June and covered with SF. For rice, the control of the experiment was set to the sample grown without cover. Ten plants from the control and SF treatment were randomly selected and measured the growth of rice plant. The harvested grain was oven dried and the dry weight of grain per plant was determined as the yield of rice. The dry weight of grain grown in control was 1.9 ± 0.3 g and that of grain grown in SF was 2.4 ± 0.6 g.
5

2.5 Leafy rapeseed and spinach cultivation
Rapeseed (Brassica napus L.) was cultivated from 23 Nov. 2022 to 20 Feb. 2023 at the commercial greenhouse located in Chungju (37°07’N, 127°85’E), Korea. The two greenhouses were 100 m in length and 4.6 m in width and were covered with PEF and SF, respectively. The seed of rapeseed was sown in soil at each treatment without any additional heating. Irrigation was conducted using overhead sprinklers installed in the greenhouses. Ten plants from each greenhouse were randomly selected for harvesting. -
The leaf dry weight of rapeseed grown in PEF was 1.7 ± 0.4 g and that of rapeseed grown in SF was 2.8 ± 0.7 g. In the same greenhouse, spinach (Spinacia oleracea L. cv. Winterstar) seeds were sown under the replaced PEF and SF on 5 Nov. 2023, and ten plants per greenhouse were harvested and examined on 10 Feb. 2024. Harvested plants were oven-dried, and leaf dry weight was quantified as the yield. The leaf dry weight of spinach grown in PEF was 2.9 ± 1.4 g and that of spinach grown in SF was 4.3 ±-
 1.4 g.
2.6 Leafy vegetables and sweet pepper cultivation
In a Venlo-type greenhouse of Seoul National University, located in Suwon (37°27’N, 126°99’E), Korea, experiments were conducted within small-scale greenhouse (2.6 m by 1.1 m) covered with PEF and SF. The greenhouse was maintained at a temperature of 24°C during the day and 20°C at night. The leafy vegetables were grown using hydroponic methods with a Hoagland nutrient solution maintained at the EC of 1.2 dS·m−1. A diverse selection of leafy vegetables was cultivated, including Chinese cabbage (Br-
assica rapa L. cv. ACC202 and Jinhongssam), pak choi (Brassica rapa L. cv. Singsinghagye and Epikhigh), kale (Brassica oleracea L. var. acephala cv. Manchoo collard), green and red lettuce (Lactuca sativa L. cv. Butterhead, Caesars green, Topgreen, Jeock, Jeockchima, Oak, Superseonpung, Multihead), and basil (Ocimum basilicum L. cv. Sweetbasil) were grown from 12 Nov. 2021 to 10 Feb. 2024. The sample size for each cultivar was organized as follows: five plants each for ACC202, Epikhigh, Jinhongssa-
m, Manchoo collard, Singsinghagye, and Jeockchima; six plants each for Jeok and Oak; eight plants each for Butterhead, Yeolpung, Multihead, Sweetbasil, and Yeolpung; and ten plants each for Superseonpung and Topgreen. The effect of SF on sweet pepper (Capsicum annuum L. cv. Mavera) seedling was further investigated. The sweet pepper seeds were sown in rockwool trays with 240 plugs (Grodan Rockwool BV, Roermond, the Netherlands) on 3 Jan. 2023. After germination, the seedlings were covered with PEF-
 and SF and then transplanted to rockwool blocks (Grodan PlanTop, Grodan Rockwool BV) on 2 Feb. 2023. The nutrient solution, with the EC ranging from 2.0 to 3.0 dS·m−1, was provided to the plants to ensure optimal growth and development. The nursery was completed on 21 Feb. 2023, and ten plants per treatment were examined. The yield was determined by the shoot dry weight of sweet pepper seedlings. The shoot dry weight of sweet pepper seedling grown in PEF was 0.5 ± 0.1 g and that of sweet pepper s-
eedling grown in SF was 0.8 ± 0.1 g. To investigate the effect of modified solar spectrum on sweet pepper, the seedlings were transplanted in the Venlo-type greenhouse at Seoul National University on 22 Sep. 2022. PEF and SF were installed on the top and sides of the Venlo-type greenhouse, respectively, and an impermeable plastic sheet was installed in the center of the greenhouse to prevent the light interference. During the cultivation period, the greenhouse temperature was maintained between 20-
–26°C using roof vents and hot-water pipe systems, and the relative humidity was controlled to be between 40–80% using humidifiers. The nutrient solution concentration was 3.0 dS·m-1 for the vegetative stage and 4.0 dS·m-1 for the reproductive
6

stage. Following bud formation, every plant was separated into two primary stems, which were then vertically trained along the V shape. Lateral stems were regularly pruned throughout the growing season. To promote early vegetative growth, the first and second flowers were eliminated across all treatments. Cultivation was completed on 20 Mar. 2023. During the cultivation period, the harvested fruits per plant were oven-dried and recorded. The yield of sweet pepper was determined as the dry weight -
of fruit per plant (n = 37).
2.7 Chlorophyll content and leaf reflectance analysis
SPAD values were determined by measuring five randomly selected points on the upper surface of each plant, from the second or third leaf, using a SPAD meter and averaging the results (SPAD-502, Konica Minolta Inc., Tokyo, Japan). The chlorophyll (chl) a and b and carotenoid content were determined using three 2 mm leaf discs from the same leaf as the SPAD-measured leaf. The reflectance of each leaf was measured using the same leaf as the SPAD and chlorophyll analysis. The reflectance of leaf in th-
e range of 400–750 nm was measured using the spectroradiometer (Blue-Wave spectrometer, StellarNet Inc., Tampa, FL, USA) connected with reflectance probe (R600, StellarNet Inc.) and tungsten halogen lamp (SL1, StellarNet Inc.). Spectral data typically requires preprocessing [20]. In this study, derivatives were used empirically to achieve the best performance.
2.8 Daily light integral
The daily integral was calculated based on the solar radiation data measured at regional weather stations during the cultivation period for each crop, considering the transmittance of the greenhouse film. The solar radiation data used in the calculations were obtained from the publicly available dataset provided by the Korea Meteorological Administration.
2.9 Light saturation point
To measure the photosynthetic light response curve, a portable photosynthesis system (LI-6400XT, Li-Cor, Lincoln, NE, USA) with an RB LED light source (6400-02B, Li-Cor) was utilized. The leaves were first exposed to a light intensity of 1,000 μmol·m−2·s−1 for 15 minutes to allow for light acclimation. During the photosynthesis measurements, the chamber conditions were maintained at a constant level, with a leaf temperature of 25 ◦C, 60% relative humidity, and a CO2 concentration of 400 ppm. The l-
ight response curve was generated by measuring photosynthesis at various light intensities, including 2,000, 1,500, 1,200, 900, 600, 400, 200, 100, 50, and 0 μmol·m−2·s−1, in descending order. The measured values were fitted to hyperbolic tangent photosynthesis model [21] (Platt and Jassby, 1976):
Pn = Pmax × tanh I
Isat
− Rd (1)
where Pn is the net photosynthetic rate (μmol·m−2·s−1), Pmax is the maximum photosynthetic rate, I is the photosynthetic photon flux density (μmol·m−2·s−1), Isat is the light saturation point, and Rd is the dark respiration rate (μmol·m−2·s−1). During the experimental period, the photosynthetic light response curves were directly measured for Chinese cabbage (cv. ACC202), lettuce (cv. Top Green, Butterhead,
7

and Multi leaf), kale strawberries, and sweet peppers. However, for the other crops, photosynthesis measurements were not conducted. Therefore, for these remaining crops, light response curves were extracted from previous studies and fitted to the hyperbolic tangent photosynthesis model to calculate the light saturation points. For basil [22, 23], Chinese cabbage [24], eggplant [25], lettuce [26–28], pak choi [29, 30], pepper [31, 32], potato [33], rapeseed [24, 34, 35], rice [36, 37], spinach [3-
8–40], and watermelon [41], the light saturation points were derived from photosynthetic light response curves reported in the cited studies. To investigate the relationship between the light saturation point and the average light intensity during the cultivation period, the light saturation point offset (LSPO) was calculated by subtracting the average light intensity during the cultivation period from the calculated light saturation point for each crop.
2.10 Statistical analysis
The statistical differences of yield grown at PEF and SF were analyzed using R software (R 3.6.2, R Foundation, Vienna, Austria). Prior to comparing the means, the homogeneity of variances for each variable was evaluated using an F -test. Following the confirmation of homogeneity, a Student’s t-test was conducted to determine the significance of differences between the means of PEF or control and SF treatments. The threshold for statistical significance was set at P -value < 0.05.
2.11 Development of machine learning and deep learning clas
sifiers
The efficacy of SF on plant yields was predicted using machine learning and deep learning models. To this end, a binary classification was set as the goal, whereby the P -value was predicted to be less than 0.05 using a t-test analysis for each crop. The input parameters for the machine learning and deep learning models included leaf phenotypic traits such as chlorophyll content, leaf reflectance, and SPAD values, as well as environmental factors including DLI and LSPO. The study employed decision-
 tree-based models, including a basic decision tree, ensemble models such as random forest and XGBoost, and designed a deep learning model using a feedforward neural network (FFNN), in comparison to the fundamental logistic regression model. The experimental procedure is depicted in Fig. 3. The number of data is critical to train the FFNN. To address the lack of data, the experiment utilized data augmentation techniques, specifically using a variational autoencoder (VAE). VAE is a generative model-
 that learns the distribution of the trained data and generates new data within the trained distribution range. The VAE architecture consisted of five layers in both the encoder and decoder. The number of neurons in each layer was set to 256, 128, 64, 32, and 16, respectively (Fig. 4). The latent dimension, which represents the compressed representation of the input data, was set to 7. The learning rate for VAE was 0.001. To mitigate overfitting, batch normalization and a dropout rate of 0.1 were -
applied to each layer of the VAE. The data augmentation process generated four augmented datasets, consisting of 400, 800, 1,600, and 6,400 samples, respectively. Each model was trained using the original data and the four augmented datasets. The trained models were then evaluated using the separate test set of crop data that was not included in the training process (Table 1). The hyperparameters of decision tree (DT), random forest (RF), XGBoost were fine-tuned using the BayesSearchCV library of -
scikit-optimize (Table 2). For each trained model, the feature importance was calculated using SHapley Additive exPlanations (SHAP). SHAP is
8

Figure 3: Schematic diagram of experimental procedure to develop the binary classification model of this study.
a game-theoretic approach to explain the output of machine learning models by assigning importance scores to each feature [42]. The SHAP values provide insight into the contribution of each feature to the model predictions, allowing for a better understanding of the factors that influence the effectiveness of SF on crop yield. Given the disparate levels of significance attributed to each model, MinMax normalization was employed to facilitate a comparative analysis of the models’ relative importanc-
e.
2.12 Model evaluation
The augmented data generated by VAE was visualized using dimensionality reduction with principal component analysis (PCA) and evaluated using Wasserstein distance to ensure that the augmented data represented the original data well. The Wasserstein distance, which measures the distance of the probability distribution of the original (μ) and the augmented data (ν) from each other, was used to ensure that the augmented
9

Figure 4: Visual representation of a variational autoencoder for data augment.
Table 1: Plant and cultivars used in the train and test datasets.
Dataset Plant Cultivar
Train set
Chinese cabbage ACC202, Jinhongssam Kale Manchoo collard Leafy rapeseed Unknown Lettuce Caesars green, Jeockchima, Oak, Topgreen, Superseonpung Pak choi Epik high, Singsinghaye Strawberry Sulhyang
Test set
Pepper Cheongyang Sweet pepper Mavera Basil Sweet basil Eggplant Black pearl Lettuce Butterhead, Multihead, Yeolpung Potato Sumi Rice Akibare Spinach Winterstar Watermelon Good choice
data could be a representation of the original data.
Wasserstein distance (μ, ν) = inf
γ∈Γ(μ,ν) E(x,y)∼γ [d(x, y)p]
1/p
(2)
Where Γ(μ, ν) is the set of all couplings of μ and ν. E represents the expected value with respect to the joint probability distribution γ. d(x, y) is a distance function that measures the distance between points x and y in a given metric space. p represents the order of the Lp norm. The prediction result of the trained model can be classified into four metrics: 1) true positive (TP), where the model correctly predicts the positive class; 2) true negative (TN), where the model correctly predicts t-
he negative class; 3) false positive (FP), where the model incorrectly predicts the positive class (Type I error); and 4) false negative (FN), where the model incorrectly predicts the negative class (Type II error). To evaluate the trained models, two primary metrics were employed: accuracy and the area under the receiver operating characteristic curve (AUC). Accuracy is the most widely used metric for measuring the overall correctness of the
10

Table 2: Search spaces of hyperparameters of machine learning and deep learning models.
Model Hyperparameter Search space
Decision tree
Criterion Gini or entropy Max depth 3–6 Min samples split 10–400 Min samples leaf 10–400 Max feature 10–50
Random forest
Number of estimators 50–300 Max depth 6–12 Min samples split 30–400 Min samples leaf 30–400 Max feature 10–100
XGBoost
Number of estimators 50–300 Max depth 6–12 Min child weight 5–200 Alpha 1.5–400 Gamma 2–400 lambda 1.5–400 Colsample bytree 0.1–0.5
Feedforward neural network
Number of layers 1–2 Hidden dimension 2–32
Weight decay 1e−5–1e−2
Learning rate 1e−7–1e−3 Batch size 16–512
model’s predictions and is calculated using the following formula:
Accuracy = T N + T P
T N + F N + T P + F P (3)
On the other hand, AUC provides a comprehensive assessment of the performance of model to distinguish between positive and negative classes across various classification thresholds. It is derived from the receiver operating characteristic (ROC) curve, which plots the True Positive Rate (TPR) against the False Positive Rate (FPR) at different classification thresholds. The formulas for TPR and FPR are:
TPR = T P
T P + F N (4)
FPR = F P
F P + T N (5)
A higher AUC value indicates better model performance, with an AUC of 1 representing a perfect classifier. By utilizing both accuracy and AUC, the trained models can be thoroughly evaluated to determine their effectiveness in predicting the impact of SF on plant yields.
3 Results
3.1 SF-modified sunlight enhanced yield of crops, but not uni
versal
To investigate the response of different plants to modified sunlight, empirical experiments was conducted on a variety of leafy greens, fruits and vegetables, and grains. These
11

Figure 5: Relative yield of crops grown at polyethylene film (PEF) or no cover versus spectral-shifting film (SF). Bars without error bars are average. Data are Means±S.D. The asterisks indicate significant differences (Student’s t-test, ∗P -value < 0.05). zRice was set to open-field as a control.
experiments were conducted in four regions of South Korea (Fig. 5). The SF-modified sunlight had a variety of effects on the plants. The shoot dry weight of basil (sweet basil) exhibited a 5.5% reduction in response to modified sunlight, while green Chinese cabbage (ACC202) showed a significant increase of 38.3%. In contrast, the shoot dry weight of red Chinese cabbage (Jinhongssam) exhibited a 1.1% reduction in comparison to PEF, and that of kale (Manchoo collard) exhibited a 12.7% reduction. The-
 leaf dry weight of leafy rapeseed grown with SF was found to be significantly increased by 67.7%. Among lettuce varieties, Jeock, Superseonpung, and Topgreen showed significant increases of 19.8%, 20.7%, and 23.2%, respectively. However, Butterhead, Caesar Green, Jeockchima, Multihead, Oak, and Yeolpung showed no difference in growth or even decreased. Both green and red pak choi, Epik High and Singsinghagye, showed growth increases of 15.2% and 3.4%, respectively, but the difference was not sign-
ificant. The leaf dry weight of spinach (Winterstar) was significantly increased by 68.6%. In the case of rice (Akibare), the dry weight of grain grown under SF was significantly increased by 44.3% compared to the control group established without the use of any film. The shoot dry weight of potato (Sumi) plant increased by 31.9% under SF. In addition, the cumulative fruit weight of pepper (Cheongyang) in Exps. 1 and 2 under SF increased by 16.8% and 36.8%, respectively, when grown under SF compar-
ed to those grown under PEF. The shoot dry weight of eggplant (Black pearl) grown under SF conditions was significantly increased by 52.5%. The cumulative fruit yield of strawberry (Sulhyang) grown under SF treatment increased by 10.5%, 17.1% and 20.3% in Exps.
12

1, 2, and 3, respectively, compared to those grown under PEF. The fruit yield of sweet pepper (Mavera) grown under SF treatment significantly increased by 36.8% compared to those grown under PEF. The shoot dry weight of sweet pepper (Mavera) seedlings grown under SF treatment increased significantly by 47.3% compared to those grown under PEF. Finally, the fruit weight of watermelon (Good choice) was significantly increased by 24.6% under SF. Following the empirical experiments of 24 crops, it was-
 determined that the application of SF resulted in an average increase in yield of 22.5%. These findings suggest that modifying the solar spectrum can enhance yields in a diverse range of crops. The calculated light saturation points and LSPO for each crop are shown in Table 3. Among all crops, lettuce had the lowest light saturation point, while Chinese cabbage and rice had the highest light saturation points. The calculated LSPO varied depending on the weather, climate, and season at the time th-
e crop was grown.
Table 3: The calculated light saturation point, light saturation point offset, and statistical significance of differences between control and spectral-shifting film for various plants.
Plant Light saturation point LSPOz Significanty
Basil 468 ± 36x 303 0
Chinese cabbage cv. ACC202 725 539 1 cv. Jinhongssam 689 504 0
Kale 470 14 1
Leafy rapeseed 567 ± 76 379 1
Lettuce cv. Butterhead 263 100 0 cv. Caesars green 251 -205 0 cv. Jeock 230 ± 7 -154 1 cv. Jeockchima 251 -205 0 cv. Multihead 468 296 0 cv. Oak 230 ± 7 -217 0 cv. Superseonpung 293 -85 1 cv. Topgreen 220 -158 1 cv. Yeolpung 251 188 0
Pak choi cv. Epik High 490 ± 262 303 0 cv. Singsinghaye 490 ± 262 301 0
Spinach 412 219 1
Rice 713 ± 50 352 1
Potato 359 ± 124 106 0
Pepper 499 210 1
Eggplant 389 ± 10 20 1
Strawberry 432 157 1
Sweet pepper 546 302 1
Watermelon 478 154 1
zLSPO: light saturation point offset, calculated as light saturation point – average light intensity during each crop cultivation. ySignificance: 1 indicates significant difference (P -value < 0.05) between SF and control treatments based on t-test, 0 indicates no significant difference between treatments. xMeans ± S.D.
13

Figure 6: Histogram of the phenotypic data of leaves from the experiments (a–g). 2D visualization of high-dimensional leaf phenotypic data and augmented data using PCA (h). Wasserstein distance between original data and augmented datasets (i).
3.2 Data augmentation with variational autoencoder
A total of 210 data points were collected from experiments conducted with 24 different cultivars over 3 years. However, this number of data was not enough data to train machine learning and deep learning models. Thus, data augmentation with VAE was implemented (Fig. 6). The histograms of the distributions of the raw data and augmented data exhibited a high degree of similarity (Fig. 6a–g). Upon reduction of the high-dimensional characteristics of each sample to two dimensions using PCA and subsequ-
ent visualization in two dimensions, the similar distributions of the raw and augmented data were observed (Fig. 6h). The Wasserstein distance, which is a metric of the degree of similarity between the data generated by the generative model and the original data, was also found to be close to zero (Fig. 6i).
3.3 Model performance to predict the yield enhancement effect
of SF
LR trained on original and augmented data showed high validation accuracy. The highest test accuracy, consisting of plants not used in training, was 81.5% on augment 4 data (Fig. 7). DT tended to have lower validation accuracy and lower test accuracy among machine learning models. The ensemble model, RF, had a higher test accuracy
14

Figure 7: Classification performance of the logistic regression (LR), decision tree (DT), random forest (RF), XGBoost, and feedforward neural network (FFNN) trained using the original data and four augmented datasets.
than DT, with 84.0% on augment 2 and 4. XGBoost, another ensemble model, outperformed LR and DT, but had less predictive power than RF. XGBoost had a test accuracy of 82.7% on augment 2. FFNN, the deep learning model, had higher validation accuracy than machine learning models. However, the test accuracy was low until augment 2 with less data, and then the FFNN model trained with the datasets from augment 3 and 4 predicted the test crops with high accuracy. Specifically, the FFNN model trained usi-
ng augment 4 was able to predict the crops that would respond to SF with the accuracy of 91.4% using leaf phenotypic and photosynthetic traits, and environmental conditions. Fig. 8 shows the ROC curves for the best-performed model on each dataset, selected based on the highest test accuracy. Similar to the accuracy, the AUC of FFNN showed the highest score with 0.97. The LR, RF, XGBoost and DT models followed FFNN in performance, with their AUC values ranked in descending order, but did not show c-
omparably strong results. Further investigation revealed that the FFNN trained through augment 4 could predict with high probability which plants would be effectively cultivated under SF (Fig. 9). Specifically, it correctly identified 31 out of 37 data that did not show growth enhancement effects under the SF, while misclassifying 6. Among the 44 data that showed positive effects from the SF, it correctly classified all but one case.
3.4 Features that affect the inference of the models
The SHAP values of the best performing models on each dataset, selected based on the highest test accuracy, are shown in Fig. 10. For the LR, it was determined that SPAD and LMA had the greatest impact on the predictive power of the model, with DLI and LSPO also being important. Regarding reflectance by wavelength, LR considered
15

Figure 8: Receiver operating characteristic (ROC) curves and area under the ROC curve (AUC) of the logistic regression (LR), decision tree (DT), random forest (RF), XGBoost, and feedforward neural network (FFNN) trained using the original data and four augmented datasets.
Figure 9: Confusion matrix of feedforward neural network (FFNN) trained using the augment 4 dataset.
reflectance from 400 to 420 nm, 500 to 540 nm, and 690 to 750 nm to be of particular importance. For DT, only two reflectance, 700 and 742 nm, were used in the model’s predictions. For RF, 693 nm has the highest importance, followed by 625 nm, and then the importance is distributed in the range of 691 nm to 701 nm. XGBoost considered the reflectance at 696 nm to be the most important feature. It then showed a high peak at 414, 626, and 695 nm to be of high importance. Chl b also showed high import-
ance. In the best prediction model, which is FFNN, importance and directionality of the data are shown in Fig. 11. This plot shows the impact of each feature on the model’s prediction of SF effectiveness. The horizontal position of each point shows the impact on the model output, with points to the right of 0 indicating a positive influence on SF effectiveness prediction, and points to the left indicating a negative influence. The analysis reveals that SPAD, chl b, and total chl content are among -
the most influential features for predicting the effect of SF on growth. Other important features include the DLI, chl a/b ratio, and LMA. Additionally, the LSPO also seems to have a noticeable impact on the model’s predictions, although it has a more complex relationship, as evidenced by the mixed
16

Figure 10: Normalized SHapley Additive exPlanations (SHAP) importance to predict the effect of spectral-shifting film of the logistic regression (LR), decision tree (DT), random forest (RF), XGBoost, and feedforward neural network (FFNN).
distribution of red and blue points. In terms of reflectance, the lower reflectance at from 694 to 703 nm and the higher reflectance at 408 and 409 nm, the model predicted an effect of SF.
4 Discussion
Controversial growth enhancing effect of SF
Empirical experiments conducted on 24 different crops demonstrated the potential of SF to enhance crop productivity. However, the modified solar spectrum through SF was not universally effective on plant growth [9]. Some crops exhibited significant yield increases with SF, while other cultivars within the same crop did not respond similarly. For example, among the lettuce cultivars tested, Jeock, Superseonpung, and Topgreen showed significant increases of 19.8%, 20.7%, and 23.2%, respectively, und-
er SF (Fig. 5). In contrast, other lettuce varieties such as Butterhead, Caesars Green, Jeockchima, Multihead, Oak, and Yeolpung showed no difference in growth or even decreased yields. A similar pattern was observed in Chinese cabbage. According to previous study [14],
17

Figure 11: SHapley Additive exPlanations (SHAP) values for top 20 features in a feedforward neural network model predicting growth enhancement effects of spectral-shifting film.
the green leaf cultivar (ACC202) exhibited a significant increase of 38.3% under SF, while the red leaf cultivar (Jinhongssam) exhibited a 1.1% reduction compared to PEF. These findings underscore the necessity for a comprehensive understanding of the factors influencing plant responses to SF, including phenotypic and environmental traits. By elucidating these intricate relationships, the application of SF technology can be optimized to maximize its benefits for diverse crop production systems. In-
 this study, the complexity of predicting the effect of SF was addressed by employing machine learning and deep learning techniques.
Variational autoencoder effectively augment data
Over the course of the three-year empirical study, 210 samples of growth results and phenotypic data for 24 different crops were collected. Nevertheless, this amount of data
18

is far from enough to train machine learning and deep learning [43]. To address this lack of data, data augmentation with VAE was used [44]. VAE is a type of generative model that learns the probability distribution of the given training data and generates new data points that follow the same distribution [45]. In this study, data augmentation with VAE also represented the original data well (Fig. 6). Consistent with previous studies [46–48], data augmentation improved model performance (Fig. 7).-
 Deep learning models using artificial neural networks rely heavily on the amount of data to train. This trend was evident in the increase in test accuracy of FFNN with the number of training data.
Comparison of model performance for predicting the effect of SF
Various machine learning and deep learning models were evaluated for their performance to predict the effect of SF on crop yield (Fig. 7). All of the machine learning and deep learning models had significantly higher validation accuracy, but not as high test accuracy. In particular, DT had lower test accuracy, indicating overfitting. It is of paramount importance to avoid overfitting, which is a poor generalization ability that performs well on training data but poorly on test data. RF and XGBoost-
 are ensemble models, with several additional factors to avoid overfitting. RF limits the number of trees created and XGBoost numerically adjusts the degree of regularization to reduce overfitting and increase the model performance. The results of this study show that RF outperforms XGBoost. This is likely due to differences in the fit of the data to the model, rather than differences in the model performance [49]. The FFNN, trained on augment 4, demonstrated superior performance compared to other-
 models, achieving an accuracy of 91.4% on the test dataset. Crucially, the crops in the test dataset were completely different from those used in training. This highlights a significant advantage of the model: it can accurately identify the growth enhancement effect of SF-modified sunlight on novel crops, based solely on their phenotypic and photosynthetic traits along with daily light integrals. This ability to generalize to unseen crops demonstrates the model’s potential as a powerful tool for -
predicting SF effectiveness across a wide range of plant species without the need for extensive, species- and cultivar-specific experimental trials. The ROC curves and AUC values further validated the strong predictive power of FFNN, suggesting its potential for guiding SF application in diverse crop production.
Analysis of key features influencing model prediction
Feature importance provided insights into the key phenotypic traits driving the model prediction [19,20,50,51]. By extracting the SHAP importance for each model, it was discovered that there are common features that predict the effect of SF [42]. LR and FFNN, which consider all features of the data, determined that the SPAD and LMA, i.e. leaf thickness, were the most important feature. This is consistent with previous research that suggests the difference in growth enhancement between Chinese cabb-
age and lettuce grown in SF may be due to leaf absorption, chl content, and leaf thickness [14]. Furthermore, it was determined that the concentrations of chl b, total chl, and environmental traits (e.g. DLI and LSPO) were of greater importance than spectral reflectance, except for the reflectance at 703 nm. The results of the spectral SHAP importance analysis exhibited a similar pattern. In particular, all models assessed the importance of reflectance around 700 nm in determining the effectivenes-
s of SF. The reflectance that SHAP determined to be important was similar to the reflectance wavebands of chl a, b, and carotenoids [52]. The optical properties of leaves are determined by the interaction of
19

chlorophyll composition, which varies among plants, and leaf thickness. The interaction between internal leaf phenotypic traits and light quality is not well understood. However, this study provides novel evidence demonstrating that these traits are key determinants of light treatment efficacy. Taken together, these results indirectly suggest that the chlorophyll content and thickness of leaves play a crucial role in determining the effectiveness of SF by increasing the absorption rate of specifi-
c wavelengths. In other words, it implies that phenotypic characteristics such as chlorophyll content and leaf thickness should be considered to optimize the effect of SF. Despite the promising results, this study has several limitations that should be addressed in future research. First, the datasets consisted of a limited number of crop species, while in real-world agriculture, a much wider variety of crops are cultivated. Second, the effect of solar spectrum modification through SF is to enhanc-
e photosynthetic capacity at light intensities above the light saturation point [7, 11]. Therefore, if solar radiation is limited due to seasonal variations, the effectiveness of solar spectrum modifications may be limited, which can be seen in the significantly higher importance of DLI and LSPO (Fig. 11). In addition, the phenotype of a plant can vary depending on its growing environment, even for the same crop [53, 54]. Consequently, the current dataset represents the phenotype in the environmen-
t at the time of measurement, which may change as a result of seasonal or climatic variations. These limitations suggest the need for further experimentation in other environments.
5 Conclusion
This study presents a robust deep learning methodology to elucidate the unpredictable effects of SF on crop productivity. The core of this study lies in overcoming the limitations of the original dataset, which was absolutely insufficient for deep learning training, through VAE based data augmentation.The FFNN model trained on this augmented dataset demonstrated the ability to predict the yield enhancing effect of SF on untrained crops with a accuracy of 91.4%. This study not only achieved high pr-
edictive performance as an engineering accomplishment but also scientifically demonstrated, through model interpretation using SHAP, that chlorophyll content, leaf refectance at 703 nm, DLI, and leaf thickness are the most crucial key predictors determining this complex biological response. In conclusion, this study provides an AI-based proof-of-concept that enables the precise determination of SF’s efficacy without the need for costly and time-consuming real-world cultivation trials. This demonst-
rates that AI models can quantitatively capture species- and cultivar-specific responses in plants. This study opens a new pathway for establishing precise solar spectrum management strategies in agricultural practice.
6 References
[1] Ruben Milla, Pablo Garcı ́a-Palacios, and Silvia Matesanz. Looking at past domestication to secure ecosystem services of future croplands. Journal of Ecology, 105(4):885–889, 2017.
[2] Nicholas Cowan, Laura Ferrier, Bryan Spears, Julia Drewer, Dave Reay, and Ute Skiba. CEA systems: the means to achieve future food security and environmental sustainability? Frontiers in Sustainable Food Systems, 6, 2022.
20

[3] Qian Li and Chieri Kubota. Effects of supplemental light quality on growth and phytochemicals of baby leaf lettuce. Environmental and experimental botany, 67(1):5964, 2009.
[4] Luigi Gennaro Izzo, Bruno Hay Mele, Luca Vitale, Ermenegilda Vitale, and Carmen Arena. The role of monochromatic red and blue light in tomato early photomorphogenesis and photosynthetic traits. Environmental and Experimental Botany, 179:104195, 2020.
[5] Jun Liu and Marc W Van Iersel. Photosynthetic physiology of blue, green, and red light: Light intensity effects and underlying mechanisms. Frontiers in plant science, 12:619987, 2021.
[6] Dongpil Kim, Taewon Moon, Sungmin Kwon, Inha Hwang, and Jung Eek Son. Supplemental inter-lighting with additional far-red to red and blue light increases the growth and yield of greenhouse sweet peppers (capsicum annuum l.) in winter. Horticulture, Environment, and Biotechnology, 64(1):83–95, 2023.
[7] Jun Hyeun Kang, Hyo In Yoon, Jae Moon Lee, Jae Pil Kim, and Jung Eek Son. Electron transport and photosynthetic performance in fragaria× ananassa duch. acclimated to the solar spectrum modified by a spectrum conversion film. Photosynthesis Research, 151(1):31–46, 2022.
[8] Sungmin Kwon, Dongpil Kim, Taewon Moon, and Jung Eek Son. Evaluation of the light use efficiency and water use efficiency of sweet peppers subjected to supplemental interlighting in greenhouses. Horticulture, Environment, and Biotechnology, 64(4):605–614, 2023.
[9] Mark O Paskhin, Denis V Yanykin, and Sergey V Gudkov. Current approaches to light conversion for controlled environment agricultural applications: A review. Horticulturae, 8(10):885, 2022.
[10] Yang Li, Wenfeng Tu, Cheng Liu, Wu Liu, Guangji Hu, Xiaotang Liu, Zhendong Chen, and Chunhong Yang. Light conversion film promotes co2 assimilation by increasing cyclic electron flow around photosystem i in arabidopsis thaliana. International journal of hydrogen energy, 42(12):8545–8553, 2017.
[11] HI Yoon, JH Kang, WH Kang, and JE Son. Subtle changes in solar radiation under a green-to-red conversion film affect the photosynthetic performance and chlorophyll fluorescence of sweet pepper. Photosynthetica, 58(5), 2020.
[12] Lihua Shen, Runnan Lou, Yujin Park, Yuning Guo, Eric J Stallknecht, Yinzi Xiao, David Rieder, Ronggui Yang, Erik S Runkle, and Xiaobo Yin. Increasing greenhouse production by spectral-shifting and unidirectional light-extracting photonics. Nature Food, 2(6):434–441, 2021.
[13] Yaxin Gao, Gongfeng Li, Bingbing Cai, Ziming Zhang, Ning Li, Yike Liu, and Qingyun Li. Effects of rare-earth light conversion film on the growth and fruit quality of sweet pepper in a solar greenhouse. Frontiers in Plant Science, 13, 2022.
[14] Jun Hyeun Kang, Doyeon Kim, Hyo In Yoon, and Jung Eek Son. Growth, morphology, and photosynthetic activity of chinese cabbage and lettuce grown under polyethylene and spectrum conversion films. Horticulture, Environment, and Biotechnology, 64(4):593–603, 2023.
21

[15] Jun Hyeun Kang, Ju Young Lee, and Tae In Ahn. Enhancement of sweet pepper photosynthesis and yield with green-to-red sunlight conversion despite reduced daily light integral. Horticulture, Environment, and Biotechnology, 66(3):527–538, 2025.
[16] Hyo In Yoon, Jun Hyeun Kang, Doyeon Kim, and Jung Eek Son. Seedling quality and photosynthetic characteristic of vegetables grown under a spectrum conversion film. Journal of Bio-Environment Control, 30(2):110–117, 2021.
[17] O. E. Apolo-Apolo, J. Martı ́nez-Guanter, G. Egea, P. Raja, and M. P ́erez-Ruiz. Deep learning techniques for estimation of the yield and size of citrus fruits using a uav. European Journal of Agronomy, 115:126030, 2020.
[18] Jihoon Shin, SangHyun Son, and YoonKyung Cha. Spatial distribution modeling of customer complaints using machine learning for indoor water leakage management. Sustainable Cities and Society, 87:104255, 2022.
[19] Hyo In Yoon, Su Hyeon Lee, Dahye Ryu, Hyelim Choi, Soo Hyun Park, Je Hyeong Jung, Ho-Youn Kim, and Jung-Seok Yang. Non-destructive assessment of cannabis quality during drying process using hyperspectral imaging and machine learning. Frontiers in Plant Science, 15:1365298, 2024.
[20] Hyo In Yoon, Hyein Lee, Jung-Seok Yang, Jae-Hyeong Choi, Dae-Hyun Jung, Yun Ji Park, Jai-Eok Park, Sang Min Kim, and Soo Hyun Park. Predicting models for plant metabolites based on plsr, adaboost, xgboost, and lightgbm algorithms using hyperspectral imaging of brassica juncea. Agriculture, 13(8):1477, 2023.
[21] Alan D Jassby and Trevor Platt. Mathematical formulation of the relationship between photosynthesis and light for phytoplankton. Limnology and oceanography, 21(4):540–547, 1976.
[22] Angela R. Beaman, Richard J. Gladon, and James A. Schrader. Sweet basil requires an irradiance of 500 μmol·m−2·s−1 for greatest edible biomass production. HortScience, 44(1):64–67, 2009.
[23] Elisa Solis-Toapanta and Celina G ́omez. Growth and photosynthetic capacity of basil grown for indoor gardening under constant or increasing daily light integrals. HortTechnology, 29(6):880–888, 2019.
[24] Samuel H Taylor, Douglas J Orr, Elizabete Carmo-Silva, and Stephen P Long. During photosynthetic induction, biochemical and stomatal limitations differ between brassica crops. Plant, Cell & Environment, 43(11):2623–2636, 2020.
[25] Qinghua Di, Jing Li, Yufen Du, Min Wei, Qinghua Shi, Yan Li, and Fengjuan Yang. Combination of red and blue lights improved the growth and development of eggplant (solanum melongena l.) seedlings by regulating photosynthesis. Journal of Plant Growth Regulation, 40(4):1477–1492, 2021.
[26] Evangelia Tsoumalakou, Eleni Mente, Konstantinos A Kormas, Nikolaos Katsoulas, Nikolaos Vlahos, Panagiotis Kapsis, and Efi Levizou. Precise monitoring of lettuce functional responses to minimal nutrient supplementation identifies aquaponic system’s nutrient limitations and their time-course. Agriculture, 12(8):1278, 2022.
22

[27] Jing Zhou, Pingping Li, and Jizhang Wang. Effects of light intensity and temperature on the photosynthesis characteristics and yield of lettuce. Horticulturae, 8(2):178, 2022.
[28] Yuyao Kong, Yilin Zhu, Seonghwan Kang, and Shuyang Zhen. Sulfur supplementation enhanced the growth and photosynthesis of lettuce in hydroponic production using one-bag complete fertilizer. HortScience, 59(3):412–420, 2024.
[29] Leiping Hou, Mengya Shang, Yinglong Chen, Jing Zhang, Xiaoyong Xu, Hongxia Song, Shaowen Zheng, Meilan Li, and Guoming Xing. Physiological and molecular mechanisms of elevated co2 in promoting the growth of pak choi (brassica rapa ssp. chinensis). Scientia Horticulturae, 288:110318, 2021.
[30] Shudong Lin, Kai Wei, Quanjiu Wang, Yan Sun, Mingjiang Deng, and Wanghai Tao. Effects of organic fertilizer on photosynthesis, yield, and quality of pakchoi under different irrigation conditions. Plants, 13(10):1308, 2024.
[31] Joseph Masabni, Youping Sun, Genhua Niu, and Priscilla Del Valle. Shade effect on growth and productivity of tomato and chili pepper. HortTechnology, 26(3):344–350, 2016.
[32] Rangjian Qiu, Chunwei Liu, Fusheng Li, Zhenchang Wang, Zaiqiang Yang, and Ningbo Cui. An investigation on possible effect of leaching fractions physiological responses of hot pepper plants to irrigation water salinity. BMC Plant Biology, 19(1):297, 2019.
[33] Jianhui Li, Zhenming Cang, Feng Jiao, Xuejing Bai, Ding Zhang, and Ruichang Zhai. Influence of drought stress on photosynthetic characteristics and protective enzymes of potato at seedling stage. Journal of the Saudi Society of Agricultural Sciences, 16(1):82–88, 2017.
[34] Youne`s Dellero, Mathieu Jossier, Alain Bouchereau, Michael Hodges, and Laurent Leport. Leaf phenological stages of winter oilseed rape (brassica napus l.) have conserved photosynthetic efficiencies but contrasted intrinsic water use efficiencies at high light intensities. Frontiers in Plant Science, 12, 2021.
[35] Chiao-Ling Hsiao, Ching-Yuh Wang, and Yi-Ting Hsu. Effect of simulated photovoltaic roofs on the yield and nitrate content of pak choi and rape. HortScience, 58(11):1297–1305, 2023.
[36] Junzeng Xu, Yuping Lv, Xiaoyin Liu, Qi Wei, Zhiming Qi, Shihong Yang, and Linxian Liao. A general non-rectangular hyperbola equation for photosynthetic light response curve of rice at various leaf ages. Scientific Reports, 9(1):9909, 2019.
[37] Tingting Du, Ping Meng, Jianliang Huang, Shaobing Peng, and Dongliang Xiong. Fast photosynthesis measurements for phenotyping photosynthetic capacity of rice. Plant Methods, 16(1):6, 2020.
[38] E. N. Ikkonen, T. G. Shibaeva, E. G. Sherudilo, and A. F. Titov. Effect of continuous lighting on mitochondrial respiration in solanacea plants. Russian Journal of Plant Physiology, 69(6):114, 2022.
23

[39] Yan Sun, Jian Wang, Quanjiu Wang, and Chunhong Wang. Responses of the growth characteristics of spinach to different moisture contents in soil under irrigation with magnetoelectric water. Agronomy, 13(3):657, 2023.
[40] Evangelia Tsoumalakou, Eleni Mente, Nikolaos Vlahos, and Efi Levizou. Spinach responds to minimal nutrient supplementation in aquaponics by up-regulating light use efficiency, photochemistry, and carboxylation. Horticulturae, 9(3):291, 2023.
[41] Junyang Lu, Muhammad Azher Nawaz, Nannan Wei, Fei Cheng, and Zhilong Bie. Suboptimal temperature acclimation enhances chilling tolerance by improving photosynthetic adaptability and osmoregulation ability in watermelon. Horticultural Plant Journal, 6(1):49–60, 2020.
[42] Scott M Lundberg and Su-In Lee. A unified approach to interpreting model predictions. Advances in neural information processing systems, 30, 2017.
[43] Shuo Feng, Huiyu Zhou, and Hongbiao Dong. Using deep neural network with small dataset to predict material defects. Materials & Design, 162:300–310, 2019.
[44] Cl ́ement Chadebec and St ́ephanie Allassonni`ere. Data augmentation with variational autoencoders and manifold sampling, 2021.
[45] Diederik P Kingma and Max Welling. Auto-encoding variational bayes, 2022.
[46] Qi Huang, Chen Qiao, Kaili Jing, Xu Zhu, and Kai Ren. Biomarkers identification for schizophrenia via vae and gsdae-based data augmentation. Computers in Biology and Medicine, 146:105603, 2022.
[47] Jane Saldanha, Shaunak Chakraborty, Shruti Patil, Ketan Kotecha, Satish Kumar, and Anand Nayyar. Data augmentation using variational autoencoders for improvement of respiratory disease classification. Plos one, 17(8):e0266467, 2022.
[48] Ivan Izonin, Roman Tkachenko, Roman Pidkostelnyi, Olena Pavliuk, Viktor Khavalko, and Anatoliy Batyuk. Experimental evaluation of the effectiveness of ann-based numerical data augmentation methods for diagnostics tasks. In IDDM, pages 223–232, 2021. Year not provided in original data.
[49] Candice Bente ́jac, Anna Cso ̈rg ̋o, and Gonzalo Martı ́nez-Mun ̃oz. A comparative analysis of gradient boosting algorithms. Artificial Intelligence Review, 54(3):1937–1967, 2021.
[50] Jihoon Shin, Seonghyeon Yoon, YoungWoo Kim, Taeho Kim, ByeongGeon Go, and YoonKyung Cha. Effects of class imbalance on resampling and ensemble learning for improved prediction of cyanobacteria blooms. Ecological informatics, 61:101202, 2021.
[51] Jihoon Shin, Gunhyeong Lee, TaeHo Kim, Kyung Hwa Cho, Seok Min Hong, Do Hyuck Kwon, JongCheol Pyo, and YoonKyung Cha. Deep learning-based efficient drone-borne sensing of cyanobacterial blooms using a clique-based feature extraction approach. Science of The Total Environment, 912:169540, 2024.
24

[52] Marie Chazaux, Christo Schiphorst, Gioele Lazzari, and Stefano Caffarri. Precise estimation of chlorophyll a, b and carotenoid content by deconvolution of the absorption spectrum and new simultaneous equations for chl determination. The Plant Journal, 109(6):1630–1648, 2022.
[53] James S. Coleman, Kelly D. M. McConnaughay, and David D. Ackerly. Interpreting phenotypic variation in plants. Trends in Ecology & Evolution, 9(5):187–191, 1994.
[54] N Yan, X-F Xu, Z-D Wang, J-Z Huang, and D-P Guo. Interactive effects of temperature and light intensity on photosynthesis and antioxidant enzyme activity in zizania latifolia turcz. plants. Photosynthetica, 51(1):127–138, 2013.
25

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:38.850Z
- **Text Length:** 60995 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 25 of 25
