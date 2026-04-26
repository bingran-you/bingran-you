# PDF Document: Chaurasia et al. - 2025 - Provably Outlier-resistant Semi-parametric Regression for Transferable Calibration of Low-cost Air-q.pdf

**File Path:** Chaurasia et al. - 2025 - Provably Outlier-resistant Semi-parametric Regression for Transferable Calibration of Low-cost Air-q.pdf

**Processed Date:** 2026-02-10T18:16:04.456Z

**File Size:** 1422.47 KB

**Total Pages:** 20

**Extracted Pages:** 20

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3478

**Title:** Provably Outlier-resistant Semi-parametric Regression for Transferable Calibration of Low-cost Air-quality Sensors

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Provably Outlier-resistant Semi-parametric Regression for
Transferable Calibration of Low-cost Air-quality Sensors∗
Divyansh Chaurasia† Manoj Daram†,‡ Roshan Kumar†
Nihal Thukarama Rao†,‡ Vipul Sangode†,‡ Pranjal Srivastava†,‡
Avnish Tripathi†,‡ Shoubhik Chakraborty§,‡ Akanksha† Ambasht Kumar†
Davender Sethi† Sachchida Nand Tripathi† Purushottam Kar†
Correspondence: snt@iitk.ac.in,purushot@cse.iitk.ac.in
Abstract
We present a case study for the calibration of Low-cost air-quality (LCAQ) CO sensors from one of the largest multi-site-multi-season-multi-sensor-multi-pollutant mobile air-quality monitoring network deployments in India. LCAQ sensors have been shown to play a critical role in the establishment of dense, expansive air-quality monitoring networks and combating elevated pollution levels. The calibration of LCAQ sensors against regulatory-grade monitors is an expensive, laborious and time-consuming -
process, especially when a large number of sensors are to be deployed in a geographically diverse layout. In this work, we present the RESPIRE technique to calibrate LCAQ sensors to detect ambient CO (Carbon Monoxide) levels. RESPIRE offers specific advantages over baseline calibration methods popular in literature, such as improved prediction in cross-site, cross-season, and cross-sensor settings. RESPIRE offers a training algorithm that is provably resistant to outliers and an explainable model -
with the ability to flag instances of model overfitting. Empirical results are presented based on data collected during an extensive deployment spanning four sites, two seasons and six sensor packages. RESPIRE code is available at https://github.com/purushottamkar/respire.
1 Introduction
Dense air-quality monitoring (AQM) networks play a critical role in the pursuit of sustainable development goals such as Clean Air (UN SDG 3.9). AQM networks enable hotspot detection, source apportionment and can motivate citizen action and regulatory interventions to curb the sources of pollution. The traditional route to establishing AQM networks, often referred to as CAAQMS, uses regulatory-grade instruments (RGI) that pose financial, technical and logistic challenges. CAAQMS stations are expen-
sive, and require specialized personnel during both setup and operation stages. In contrast, low-cost air-quality (LCAQ) sensors have recently emerged as a solution, offering far lower setup costs as well as relatively hands-off operation. However, LCAQ sensors require on-field calibration against their RGI counterparts as LCAQ sensors can be sensitive to ambient weather conditions and can experience drift across time. The calibration of LCAQ sensors has been a well-studied topic with a variety of-
 machine learning models being used to calibrate LCAQ sensors for pollutants such as PM2.5, O3, NOx [1, 2, 3, 4]. In this work, we present a case study for the calibration of CO sensors. The data for our study was collected from a multi-sitemulti-season-multi-sensor-multi-pollutant mobile air-quality monitoring network established in the city of Lucknow (deployment details in Section 3).
∗The work was supported by grant no 001296 from the Clean Air Fund. †Indian Institute of Technology, Kanpur ‡Work done while the author was affiliated to IIT Kanpur §Shiv Nadar University, Chennai
1
arXiv:2511.19810v1 [cs.LG] 25 Nov 2025

Our Contributions. Studies exist in literature that attempt to use generic machine learning models such as linear models, trees, neural networks, kernel models to calibrate LCAQ CO sensors [5, 6, 7, 8, 9]. This work identifies specific deficiencies in these approaches and proposes a tailor-made calibration technique called RESPIRE that closely aligns with calibration instructions from the sensor manufacturer. This is done by proposing a semi-parametric regression model instead of a fully non-para-
metric high capacity model such as decision trees, neural networks, nearest neighbors or kernel regression. RESPIRE also protects the calibration process against outliers by adopting a robust regression technique with provable guarantees. The resulting technique attains a sweet spot in neither overfitting nor underfitting when subjected to data in the wild. Specifically, RESPIRE offers the following advantages:
1. RESPIRE offers performance competitive to baseline techniques if tested on data from the training site in the same season. However, RESPIRE offers clear advantages when tested on data from a different site and/or from a different season.
2. RESPIRE offers provable guarantees of resilience to adversarial outliers.
3. RESPIRE models lend themselves to compression without sacrificing performance.
4. A lightweight transfer model is proposed that allows RESPIRE models to not just be used across sites and seasons, but across different sensors as well. This transfer does not require ground truth and can be done in a completely unsupervised manner. This is advantageous for large LCAQ sensor networks, where calibrating each sensor individually is expensive, laborious and time-consuming.
5. The semi-parametric nature of RESPIRE allows it to flag certain instances of overfitting that allowed identification of cases where readings from different sensors were swapped due to a firmware issue.
Key Takeaways. We summarize case study insights using empirical data from Section 5,
1. Most methods proposed in literature, and indeed generic implementation of popular machine learning models, offer excellent training performance, with train R2 values (the metric being the proportion of explained variance aka coefficient of determination) well above 0.95 in most cases. This indicates that most methods have sufficient capacity to explain the data. (fig - 4)
2. Performance drops appreciably even on test data taken from the same site and during the same season. This drop is sharper for high-capacity methods such as random forests and nearest neighbours, indicating a higher degree of overfitting, although all methods notice a drop. (fig - 5)
3. The drop is sharper when tested on the same site but a different season or a different site altogether. This indicates that site-specific characteristics and weather conditions such as temperature and humidity have a significant affect on calibration performance. (fig - 6)
4. When comparing performance across sensors, across sites and across seasons, RESPIRE offers the largest number of wins, followed by linear regression, followed by multi-layered perceptron. Other methods, such as GBDT, kernel regression, and nearest-neighbours, seem excessively prone to overfitting and perform well only if tested on the same site during the same season. (fig - 2b)
5. A possible cause of performance drop when tested on different site/season seems to be a certain degree of drift in the RGI readings, i.e. the ground truth itself. However, this can be readily corrected by learning a simple 1D adapter. This is suspected because (a) despite lower R2 values, predictions often closely track the ground truth in shape, being off by just a shift or a scale (b) learning a simple 1D adapter model causes significant rise in R2, and (c) RGI CO analyzers have to regularly -
undergo manual calibration and thus, zero-shifts or sensitivity changes are expected. (fig - 2c)
6. Another probable cause of performance drop seems to be the presence of outliers. This is indicated by the fact that in several instances, test R2 scores rise rapidly if a small, say 5%, fraction of test data points are excluded from evaluation. (fig - 8)
7. RESPIRE models can be transferred from one LCAQ sensor to another. The transfer performance can be enhanced by learning a self-supervised linear transfer model. (fig - 9)
8. RESPIRE models can be significantly compressed without much loss of performance. (fig - 14)
9. Their semi-parametric nature allows RESPIRE to flag certain cases of overfitting. (fig - 10)
2

2 Related Work
Low-cost air quality (LCAQ) sensors offer a promising solution for high spatiotemporal resolution air quality monitoring, supplementing traditional regulatory-grade CAAQMS sites [1, 8, 7]. However, the raw data from LCAQ sensors often suffers from low accuracy, drift, and cross-sensitivities to other pollutants and environmental conditions, necessitating extensive in-field calibration to ensure data reliability [6, 10]. Past research has focused on various field calibration methods using both line-
ar and non-linear regression models. While simpler models can be effective for some pollutants like O3 in certain environments [3], many studies demonstrate the superior performance of non-linear ML approaches. For instance, Topalović et al. [7] found that Artificial Neural Networks (ANNs) yielded better results for calibrating CO and O3 sensors compared to linear models. Similarly, Sahu et al. [1] proposed a non-parametric nearest-neighbors-based algorithm that improved the coefficient of determi-
nation (R2) metric by 4–20 percentage points for O3 and NOx over classical methods. Apostolopoulos et al. [6] also highlighted the promise of the Random Forest algorithm for calibrating LCAQ devices in urban settings. Multiple studies agree on the importance of incorporating factors such as ambient temperature and relative humidity (RH) into models to improve calibration accuracy [1, 8, 9], as is also corroborated by manufacturer instructions. Leveraging sensor cross-sensitivities by including mea-
surements of copollutants as predictors can enhance model performance. For example, Topalović et al. [7] identified NOx and PM2.5 as valuable predictors for CO calibration. In a novel approach, Apostolopoulos et al. [6] demonstrated that using raw sensor voltage signals directly within an ML algorithm, rather than manufacturer-calibrated values, can reduce inter-unit variability and improve calibration efficiency. The impact of the co-location period on calibration accuracy has also been investiga-
ted. The duration required for a stable calibration can vary by sensor type and is influenced by environmental variability and cross-sensitivities. Levy Zamora et al. [5] found that while improvements in model performance diminished for co-location periods longer than six weeks, the representativeness of environmental conditions during calibration was more critical than the absolute duration, indicating that a strategically chosen period that captures a diverse range of ambient operation condition-
s (say w.r.t. weather, pollution levels, etc) can be sufficient for achieving robust calibration, even if of a shorter duration.
3 Data Collection and Problem Setting
Deployments. Data was gathered at four deployment sites in the city of Lucknow namely Babasaheb Bhimrao Ambedkar University (26.77◦N, 80.92◦E), Central Institute of Medicinal and Aromatic Plants (26.89◦N, 80.98◦E), Gomti Nagar (26.86◦N, 81.00◦E) and Talkatora (26.83◦N, 80.89◦E). At each site, data was collected in two seasons, namely Winter (Oct-Dec 2023) and Spring (Feb-Apr 2024).
Instrumentation. A mobile van, that could transit across sites, was fitted with a variety of instruments. This included an array of 6 LCAQ sensor packages intended to measure ambient levels of several pollutants such as PM2.5, CO, O3, NOx , SOx , apart from meteorological parameters such as temperature and relative humidity (RH). However, in this work, we focus only on the CO sensors. The CO-B4 series of CO sensors manufactured by AlphaSense and temperature sensors manufactured by Bosch were used -
in the sensor packages. The sensor packages are identified using a unique 4-character code (1FEA, 5092, 5A2D, 5CB6, B5FF, D3EB). The van was also fitted with regulatory-grade instruments (RGI) [11] such as an Environmental Beta Attenuation Mass (E-BAM) monitor to measure PM2.5 concentration, and several gas analyzers to measure the concentrations of gases such as CO, O3, NOx , SOx [12]. However, for this work, we require reference readings only from the CO gas analyzer. Standard QA/QC steps were t-
aken to calibrate the gas analyzers using zero air and reference concentrations.
Final Datasets. The sites and seasons were uniquely identified using the first letter of their names i.e. site B, C, G, T and season W, S. This resulted in a total of 8 datasets that are uniquely identified by the site and season letters, separated by a hyphen. For example, data from the Talkatora site collected during the winter season is identified as T-W. For each dataset, timestamped values of measurements from all LCAQ and meteorological sensors from the 6 sensor packages was available alongs-
ide measurements offered by the RGI. The LCAQ sensors offered measurements at 1-minute intervals whereas the RGI offered data at 15-minute intervals. To resolve this, LCAQ data was averaged at 15-minute intervals.
3

Problem Statement. The sensing technology used in LCAQ CO gas sensors is electrochemical in nature [13]. For each timestamp t, the reference-grade gas analyzer provides a single reading say yt for the ambient CO level. On the other hand, the LCAQ sensor provides at each timestamp, two operating potential (OP) values, say OP1t, OP2t reported by the working and auxiliary electrodes situated on the sensor that are known to be correlated with the ambient levels of CO. Ambient temperature values Tt ar-
e also required to be measured since the sensitivity of sensor is known to be temperature dependent. Given this, the goal of LCAQ sensor calibration can be cast as a regression problem, that of estimating a function f of the operating potentials and ambient temperature values that well-approximates the readings offered by the RGI gas analyzer i.e. yt ≈ f (OP1
t , OP2
t , Tt).
4 RESPIRE: outlier REsistant Semi ParametrIc REgression
The RESPIRE method is based on two key insights – firstly, that the calibration model suggested by the sensor manufacturer does not require entirely non-linear models and secondly, being resistant to outliers in training data is beneficial to the calibration process.
Semi-parametric Regression. For the CO LCAQ sensor, the auxiliary electrode is not exposed to ambient air whereas the working electrode is exposed to ambient air. Thus, in a perfect scenario, ambient CO measurements could be obtained from the potential readings simply by subtracting the auxiliary electrode potential from the working electrode potential (to eliminate zero currents) and dividing by the sensitivity value of the sensor. However, as noted by the manufacturer [14], this simple model is -
frustrated by idiosyncrasies of the electrochemical reactions:
1. The effective surface areas of the electrodes are non-identical requiring multipliers to be introduced.
2. The surface areas are know to vary with temperature due to expansion and contraction in the membrane pores, making these multipliers temperature dependent.
3. The sensitivity of the sensor varies with temperature but the variation is not described in a simple closed-form expression and merely known via empirical graphs [13]
Although both linear [15], non-linear [16, 17, 18, 19, 20], and even non-parametric models have been proposed for calibration, it notable that the calibrations steps suggested by the manufacturer requires the model to be only partially non-linear. RESPIRE takes advantage of this – let x1t, x2t denote the two operating potentials recorded by the LCAQ CO sensor. Then RESPIRE models the ambient CO levels by treating the sensitivity parameters as nuisance variables and modeling them non-parametrically
yt ≈ w1(Tt) · x1t + w2(Tt) · x2t + b(Tt)
where the weights w1(Tt), w2(Tt) capture the temperature dependence of both the multiplier and sensitivity and b(Tt) is a temperature dependent bias term. As the nature of dependence of the multiplier and sensitivity on ambient temperature is unknown, RESPIRE models both nuisance parameters as nonparametric functions of temperature which serves as an auxiliary variable in this setting, thus yielding a semi-parametric model.
Training Algorithm. To avoid notational clutter, we first describe the algorithm for a simplified model where the independent variables are univariate and the auxiliary variable is denoted as z i.e. y ≈ w(z) · x + b(z). The case of multivariate independent variables is similar and discussed thereafter. Let there be N timestamps. Let y ∈ RN denote the vector of ground truth values at various timestamps (CO levels as measured by the RGI gas analyzer). Let X ∈ RN×N denote a diagonal matrix with the v-
alues of the independent variable x at various timestamps in the diagonal. Let w, b ∈ RN be vectors denoting the weights and bias values at various timestamps that depend on the value of the auxiliary variable z at that respective timestamp. To implement a non-parametric model for the weights and biases, we identify a Mercer kernel K with corresponding RKHS H and feature map φ : R → H. Let Z : H 7→ RN denote an operator composed as Z d=ef [φ(z1), φ(z2), . . . , φ(zN )]⊤ where φ(zt) ∈ H is the
4

feature map of the auxiliary variable at timestamp t. Given this, the weights and biases can be modeled as w = Zp, b = Zq where p, q ∈ H. The predictions given by this model are of the form
yˆ = Xw + b = XZp + Zq
Using the least squares loss along with Hilbertian regularization (where ∥·∥H denotes the Hilbertian norm in the RKHS H) yields the following Tikhonov-style optimization problem
min
p,q∈H
λ
2 · (∥p∥2
H + ∥q∥2
H) + ∥y − XZp − Zq∥2
2
Given the intractability of solving the primal directly, we introduce an auxiliary variable representing the residual r, a consequent constraint, namely r = y − XZp − Zq, and a corresponding Lagrangian dual variable βββ ∈ RN . Following standard steps, the following Lagrangian dual problem is obtained.
min
βββ∈RN βββ⊤(G + H)βββ + λ · ∥βββ∥2
2 − 2λ · βββ⊤y,
where G d=ef ZZ⊤ ∈ RN×N is the Gram matrix over the auxiliary variables and H d=ef XGX ∈ RN×N . Once the model has been learnt, making predictions on novel points is straightforward.
Inference. Given a novel point (x, z) ∈ R × R with independent variable x and auxiliary variable z, this model can make a prediction as
yˆ = w(z) · x + b(z)
To obtain the weight and bias values w(z), b(z), we note that the standard KKT conditions ensure Lagrangian stationarity with respect to the primal variables that gives us the following relations
p = Z⊤X⊤βββ
λ q = Z⊤βββ
λ
Thus, for the novel point, we get
w(z) = φ(z)⊤p = ⟨k, Xβββ⟩
λ
b(z) = φ(z)⊤q = ⟨k, βββ⟩
λ,
where k = [K(z, z1), K(z, z2), . . . , K(z, zN )]⊤ = φ(z)⊤Z⊤ ∈ RN is the vector of kernel values of the novel auxiliary variable with the train auxiliary variables. Thus, inference can be performed by computing
yˆ = ⟨k, Xβββ⟩
λ · x + ⟨k, βββ⟩
λ
Extensions to Multivariate Inputs. To handle calibration of CO sensors, we need to handle cases where the independent variable is multivariate, i.e., say each time produces a tuple of the form (x1, x2, z) where z is the auxiliary variable and (x1, x2) is the multivariate independent variable. This is because the sensor records two potentials OP1, OP2 at each timestamp. In this case, the output is modeled as
y ≈ w1(z) · x1 + w2(z) · x2 + b(z)
In vectorized notation, the predictions of the model would be of the form
yˆ = X1w1 + X2w2 + b = X1Zp1 + X2Zp2 + Zq,
where w1 = Zp1, w2 = Zp2, b = Zq where p1, p2, q ∈ H and X1, X2 ∈ RN×N are two diagonal matrices containing the two independent variables x1, x2 in their respective diagonals. The primal stationarity KKT conditions guarantee pi = Z⊤X⊤
i βββ
λ for i = 1, 2, resulting in a dual of the form
min
βββ∈RN βββ⊤(G + H1 + H2)βββ + λ · ∥βββ∥2
2 − 2λ · βββ⊤y,
5

(a) RESPIRE Training
1: Input: Independent vars X1, X2 ∈ RN×N , Gram matrix over auxiliary vars G ∈ RN×N , target y ∈ RN , regularization λ, corruption fraction α ∈ [0, 1], correction rate η ∈ [0, 1] 2: Output: Predictor parameters m, n, o ∈ RN 3: c ← 0 {Initialize null corruption} 4: while not converged do
5: {m, n, o} ← SPR(X1, X2, G, y − η · c, λ) 6: yˆ ← X1Gm + X2Gn + Go 7: c ← HT(y − yˆ, α · N ) 8: end while 9: return m, n, o
(b) RESPIRE Inference
1: Input: Test indep. vars x1, x2 ∈ R, aux kernel values k ∈ RN , learnt params m, n, o ∈ RN 2: Output: Prediction yˆ
3: return yˆ ← k⊤m · x1 + k⊤n · x2 + k⊤o
(c) Semi-parametric Regression (SPR)
1: Input: Independent vars X1, X2 ∈ RN×N , Gram matrix over auxiliary vars G ∈ RN×N , target y ∈ RN , regularization hyperparam. λ 2: Output: Predictor parameters m, n, o ∈ RN 3: Solve dual objective to obtain βββ
4: return m d=ef X1βββ
λ , n d=ef X2βββ
λ , o d=ef βββ
λ
(d) Hard Thresholding (HT)
1: Input: Vector r ∈ RN , sparsity k ∈ [N ]. 2: Output: Sparsified vector z 3: Let j1, j2, . . . , jN ∈ [N ] be the coordinates of r in decreasing order of magnitude i.e. |rj1 | ≥ |rj2 | ≥ . . . ≥ |rjN | 4: Initialize z ← 0 5: Assign zji = rji for all i ∈ [k] 6: return z
Figure 1: RESPIRE pseudocode describing the base training and inference procedures and robust learning
where Hi
d=ef XiGXi ∈ RN×N for i = 1, 2. Thus, the semi-parametric procedure outlined above extends
to the multivariate case simply by replacing H d=ef X1GX1 + X2GX2. The inference step is similarly
modified as follows:
yˆ = ⟨k, X1βββ⟩
λ · x1 + ⟨k, X2βββ⟩
λ · x2 + ⟨k, βββ⟩
λ
It is easy to see that the above procedure can readily handle any number of independent variables i.e., cases where each timestamp offers an auxiliary variable z as well as x1, x2, x3, . . . , xd where d ≥ 2.
Model Compression. Once a model βββ ∈ RN has been learnt, RESPIRE can compress the model by sparsifying it. Although various model compression techniques for kernel methods have been proposed in literature, RESPIRE adopts a straightforward hard-thresholding-based technique. First it chooses the top Nˆ coordinates in βββ for some value of Nˆ < N and sets the rest to 0, thus retaining only the most influential support vectors. The coordinates retained are fined tuned by solving a simple least square-
s problem yielding a sparse model with model size of Nˆ ≪ O (N ). In experiments, this compression does not adversely impact performance (see Figure 14.
4.1 Outlier-resistant Regression
Real-life deployments present several sources of outliers in data. Intermittent, short-lived spikes in CO levels present a challenge for calibration as LCAQ sensors may have slower response times as well smaller dynamic ranges given their modest construction. Given this, outlier-resistance becomes a valuable trait. Although robust regression methods with provable breakdown points have been extensively studied for linear models [21, 22, 23, 24, 25, 26, 27], extensions to robust non-parametric regre-
ssion are far less studied. We are not aware of any works that explicitly offer robustness guarantees for semi-parametric models. There are some works [28, 29, 30, 31] that address robust non-parametric regression but neither address semi-parametric regression explicitly and most do not offer explicit breakdown points. RESPIRE develops its robust semi-parametric regression (SPR) method by adapting the APIS method originally proposed in [31] non-parametric regression. The APIS method is a meta-algo-
rithm that, when adapted to the case of semi-parametric regression, results in the algorithm outlined in Figure 1. Suppose it is anticipated that an α-fraction of training points are outliers. Let SPR denote an execution of the semi-parametric regression procedure outlined in Figure 1(c) that yields prediction coefficients that can be used to make predictions on data points using the procedure outlined in Figure 1(b). Also, for any
6

Train SS (No Adaptation) SS (With Adaptation) Test Scenario
0
5
10
15
20
Total Number of Wins
21
23
22
5
10
12
13 12
13
16
11
7
Train & SS Performance: Win Counts Models DT GBDT KNN
KRR MLP
RR RESPIRE
(a) Win counts for various methods on train data as well as non-transfer (SS) scenarios, both with and without adaptation.
SX XS XX All Transfers Test Scenario
0
20
40
60
80
100
Total Number of Wins
244
10 23
7
12 57
15
27
8
12
16
36
9
25 22
56
14
56
31
101
9
45
55
109
Transfer Performance: Win Counts Models DT GBDT KNN
KRR MLP
RR RESPIRE
(b) Win counts on transfer (SX, XS, XX) cases and total win counts when no adapter was offered to any method.
SX XS XX All Transfers Test Scenario
0
20
40
60
80
100
120
Total Number of Wins
22
465
15 431
8
5
11 12
28
8
22 24
54
14
48 49
111
13
57 51
121
Transfer Performance: Win Counts (With Adaptation) Models DT GBDT KNN
KRR MLP
RR RESPIRE
(c) Win counts on transfer (SS, XS, XX) cases and total win counts when a 1D adapter was offered to all methods.
Figure 2: Leader boards for train, non-transfer (SS) and transfer (SX, XS, XX) experiments. The height of the bars indicate how many times a method delivered the (tied) best performance across all 6 sensors, on all sites during training, SS, SX, XS and XX experiments. The baseline methods DT, GBDT, KNN dominate train performance but perform poorly even in the SS transfer case where MLP, KRR and linear (RR) dominate. However, when considering non-trivial transfers such as SX, XS and XX, RESPIRE is -
the clear winner whether adaptation is offered or not. MLP and linear (RR) are the next best methods.
vector r ∈ RN and any k < N , let the hard thresholding operation HT(r, k) be defined as yielding an k-sparse vector obtained by retaining the k coordinates of v with highest magnitude (irrespective of sign) as is and setting the other N − k coordinates to zero, as outlined in Figure 1(d). RESPIRE performs outlier-resistant semi-parametric regression by initializing a corruption estimate vector c to zero and then alternating between learning the prediction parameters using the corrected targets, a-
nd re-estimating the correction vector, as outlined in Figure 1(a). The outlier correction rate hyperparameter η controls how aggressively are the estimated sparse outliers shaved off from the ground truth before proceeding and the value of η is tuned as a hyperparameter (see Section 5).
Breakdown Point Analysis. Although the APIS meta algorithm does extend to semi-parametric models, the breakdown point analysis presented in [31] does not. The breakdown analysis for RESPIRE is presented below under the following assumptions.
1. Adversary Model: the noise model considered in the calculations is the so-called fully adversarial model wherein an adversary can take choose to corrupt an arbitrary α fraction of the training targets, i.e., corrupt α · N coordinates of the training label vector y ∈ RN , in an arbitrary manner. To decide which coordinates to corrupt and by how much, the adversary is allowed full knowledge of the independent and auxiliary covariates i.e. X1, X2, G, as well as the true (uncorrupted) label vector -
y. It is notable that the covariates are assumed to suffer no adversarial corruption.
2. Full Correction: the analysis is presented for the setting η = 1 i.e. the estimated (sparse) outliers are completely eliminated during the correction step. This is required because the analysis assumes adversarial corruption. In practice, the outliers are not adversarial and a milder value of η < 1 is used after being tuned as a hyperparameter.
3. RBF Kernel: the calculations are presented for the case of the RBF kernel as (asymptotic) spectral bounds have been widely studied for this kernel.
4. Auxiliary Covariate Distribution the calculations assume that the auxiliary covariate z is uniformly distributed in the interval [0, 1]. This is an assumption inherited from spectral calculations for the RBF kernel and mostly serve to make the eigenvalue estimation easier. Real life data can be made to respect the [0, 1] interval bound by performing min-max normalization of the auxiliary (temperature) variable. If data does not satisfy the uniformity assumption, this would merely worsen the eig-
envalue bounds.
5. Independent Covariate Bound: the calculations assume that the independent covariates x1, x2 are bounded in a range [r, R]. This is a realistic assumption since for CO calibration, the independent variables are potentials that take values in a small range (typically in millivolts).
7

02-2712
02-2718
02-2800
02-2806
02-2812
02-2818
02-2900
02-2906
02-2912
02-2918
Timestamp
0.2
0.4
0.6
0.8
1.0
1.2
CO Concentration (ppm)
5A2D: T-W C-S (Test Data)
Ground Truth RESPIRE (R2 = 0.5139)* RESPIRE (Adapted) (R2 = 0.7154)* RR (R2 = 0.4291) RR (Adapted) (R2 = 0.5358)
(a) An XX transfer scenario with training done at site T on winter data and testing at site C on spring data. Notice how the model predictions closely track the ground truth but offer poor R2 scores due to bias errors. Once the adapter is applied, excellent R2 scores are achieved. RESPIRE wins on this transfer with linear (RR) being the next best method.
12-2400
12-2412
12-2500
12-2512
12-2600
12-2612
Timestamp
1
2
3
4
5
CO Concentration (ppm)
5A2D: C-W G-W (Test Data)
Ground Truth RESPIRE (R2 = 0.2576)* RESPIRE (Adapted) (R2 = 0.6972)* MLP (R2 = 0.1322) MLP (Adapted) (R2 = 0.6858)
(b) An XS transfer scenario during winter with training done on site C data and testing on site G data. Notice how the model predictions closely track the ground truth but offer poor R2 scores due to a bias error. Once the adapter is applied, excellent R2 is achieved. RESPIRE wins on this transfer with MLP being the next best method.
Figure 3: Two transfer scenarios demonstrating possible zero-shifts in RGI data being a contributor to poor R2 performance. A simple 1D adapter greatly improves performance in all cases for all methods.
Theorem 1. Given independent variables X1, X2 and Gram matrix G over the auxiliary variables, suppose the (uncorrupted) targets are generated as y∗ = (X1GX1 + X2GX2 + G)βββ∗ where βββ∗ ∈ RN is
spanned by the top s eigenvectors of X1GX1 + X2GX2 + G for s = O log N
log log N . Suppose the adversary,
when presented with X1, X2, G, y, βββ∗, decides to introduce corruptions so that the observed (corrupted) targets are generated as y = y∗ + b + e∗ where and b is an arbitrary k-sparse corruption signal for
k = O √N and e∗ denotes benign noise not introduced by the adversary. Then, if the independent
covariates x1, x2 are bounded in an interval, say [r, R] for r > 0 and R
r = O (1), and the auxiliary covariates z are distributed uniformly over the unit interval [0, 1] and if the Gram matrix G is generated
using the Gaussian kernel with the bandwidth parameter h ∈
hq 40
log N , 1
i
, then with probability at least
1 − O exp −n 2
5 , for any ε > 0, the RESPIRE procedure outlined in Figure 1 converges to a solution
βββˆ satisfying βββˆ − βββ∗
2
< ε + 7 · ∥e∗∥2 within O log 1
ε iterations.
Proof. It is notable that the benign noise e∗ can account for various factors such as
1. Non-adversarial noise, say Gaussian noise, in the uncorrupted targets
8

2. Modelling error, say if the uncorrupted targets are well-explained by the the top s eigenvectors, but require more eigenvectors to be perfectly explained
3. Non-adversarial covariate noise, say observation noise, in the covariates x1, x2, z
We first present the proof for the case when there is no benign noise i.e. e∗ = 0 i.e. there is no modelling error, covariate noise or non-adversarial target noise. The claimed result then follows from a direct application of [31, Lemma 9] and the fact that orthogonal projections are always contractive.
We first note that the uncorrupted signals can be expressed as y∗ = Fβββ∗ for F d=ef X1GX1 +X2GX2 + G which represents this as an instance purely non-parametric regression with Gram matrix F . Since X1, X2 are diagonal matrices, XiGXi = G ⊙ Ji where ⊙ denotes the coordinate-wise multiplication operation and Ji
d=ef xix⊤
i and xi ∈ RN is the vector created out of the diagonal entries of Xi. Since Ji is clearly a positive semi-definite (PSD) matrix and the set of PSD matrices is closed under pointwise multiplication, XiGXi is PSD whenever G is PSD. Since the set of PSD matrices is also closed under addition, F is a PSD matrix whenever G is a PSD matrix. These closure results over PSD matrices are standard but are replicated in Lemma 3 for sake of completeness. [31, Lemma 5] establishes that in the noiseless setting-
 i.e. when e∗ = 0, the alternating procedure adopted by RESPIRE offers exact recovery at a linear rate whenever 3 · Λunif
k (F ) < λs(F ) where λs(F ) is
the sth-largest eigenvalue of F and for any k > 0, the quantity Λunif
k (F ) denotes the largest eigenvalue of any principal k × k sub-matrix of F . A principal sub-matrix is one that projects a matrix onto an identical set of rows and columns.
Using Lemma 2, denoting Λ d=ef Λunif
k (G), λ d=ef λs(G) and using the simple observations Λunif
k (Xi) ≤ R and λN (Xi) ≥ r, we get the following results:
Λunif
k (F ) ≤ Λ · (2R2 + 1)
λs(F ) ≥ λ · max r2, 1
This implies that we require
Λ · (2R2 + 1)
λ · max {r2, 1} ≤ 1
3⇔Λ
λ ≤ max r2, 1
3(2R2 + 1)
Using results from [32, Theorem 2] and calculations from [31, Section C.3], the above is assured for the claimed ranges of s, k whenever R
r = O (1).
It is notable that in the noiseless case e∗ = 0, RESPIRE assures exact recovery, and a consistent estimate, at a linear rate of convergence. For noisy, ill-modeled case, the modelling error or stochastic noise is inherited into the estimate with a small constant multiplier.
Lemma 2. For any square, symmetric positive semi-definite matrix A ∈ RN×N , for any s ∈ [N ], let λs(A) be the sth-largest eigenvalue of A and for any k ∈ [N ], let Λunif
k (A) denote the largest eigenvalue
of any principal k × k sub-matrix of F . Furthermore, let A, B ∈ RN×N denote two square, symmetric PSD matrices and D ∈ RN×N denote an invertible diagonal matrix. Then
1. λs(A + B) ≥ max {λs(A), λs(B)}
2. Λunif
k (A + B) ≤ Λunif
k (A) + Λunif
k (B)
3. λs(DAD) ≥ λs(A) · λN (D)2
4. Λunif
k (DAD) ≤ Λunif
k (A) · (Λunif
k (D))2
Proof. We prove the parts separately.
1. Using the Horn’s inequalities [33], we get λs(A + B) ≥ maxi+j=n−s (λn−i(A) + λn−j(B)) ≥ max {λs(A), λs(B)}
2. Let S ⊂ [N ], |S| = k be the subset of rows and columns over which the values is achieved i.e.
Λunif
k (A+B) = λ1 ((A + B)S) = λ1(AS +BS). Using the Horn’s inequalities gives us λ1(AS +BS) ≤
λ1(AS ) + λ1(BS ) ≤ Λunif
k (A) + Λunif
k (B) where the last step follows from the definition of Λunif
k.
9

Table 1: Number of data points per dataset for each sensor
Dataset Sensor ID
Site-Season 5A2D 5CB6 1FEA 5092 B5FF D3EB
C-W 744 729 439 787 907 907 C-S 1102 564 283 714 1111 974 B-W 783 784 784 784 784 784 B-S 1068 1070 1069 1070 1070 1070 T-W 2430 2431 519 2431 2431 2431 T-S 1315 1318 783 1318 1318 1304 G-W 629 973 972 973 973 973 G-S 1122 1123 1025 1123 1123 1123
3. The matrices DAD and ADD share all eigenvalues since they are similar as D is assumed to be invertible. Using extensions of the Horn’s inequalities to products of matrices [34], we get λs(ADD) ≥ λs(A) · λN (DD) = λs(A) · (λN (D))2 where the last step follows as D is a diagonal matrix.
4. Let S ⊂ [N ], |S| = k be the subset of rows and columns over which the values is achieved i.e. Λunif
k (DAD) = λ1 ((DAD)S) λ1 (DSASDS) = λ1 (ASDSDS). This holds since D is a diagonal matrix and the arguments from part 3. Using the product Horn’s inequalities gives us λ1 (ASDSDS) ≤ λ1 (AS) · λ1 (DSDS) = λ1 (AS) · (λ1 (DS))2 ≤ Λunif
k (A) · (Λunif
k (D))2 where the last
step follows from the definition of Λunif
k.
Lemma 3. For any two square, symmetric positive semi-definite matrices A, B ∈ RN×N , the matrices A + B and A ⊙ B are also positive semi-definite where ⊙ denotes coordinate-wise multiplication.
Proof. We will use two different strategies to show the two parts. To show the first part, note that for any x ∈ RN , we have x⊤(A+B)x = x⊤Ax+x⊤Bx ≥ 0 since A, B are individually PSD. This establishes that A + B must be PSD too. For the second part, we note that PSD-ness entails that there must exist matrices U, V ∈ RN×N , not necessarily symmetric or PSD themselves, such that A = U U ⊤, B = V V ⊤. To show that A ⊙ B is PSD, we will construct a matrix W such that A ⊙ B = W W ⊤. Let ui, vi ∈ RN den-
ote the ith rows of the matrices U, V respectively. Then construct wi
d=ef ui ⊗ vi ∈ RN2 where ⊗ denotes the Kronecker product. For any i, j ∈ [N ], we then have
w⊤
i wj = (ui ⊗ vi)⊤(ui ⊗ vi) = trace uiv⊤
i
⊤ uiv⊤
i
= trace viu⊤
i uiv⊤
i = u⊤
i ui v⊤
i vi
The above shows that for any i, j ∈ [N ], the (i, j)th entry of W W → is the product of the (i, j)th entries of the matrices A and B. This finishes the proof.
5 Empirical Results
Experimental Setup. For each sensor package and dataset, timestamp alignment was done. Only those timestamps were retained where the CO sensor, temperature sensor and the CO gas analyzer all had valid readings. For various datasets (see Table 1 for dataset details) approximately 5002000 data points were available after carrying out this step. A temporal 80-20 split was created for each dataset by taking the first 80% timestamps as the train portion and the last 20% timestamps as the test portion. -
All experiments were carried out on a 64-bit machine with Intel® CoreTM i76500U CPU @ 2.50GHz, 4 cores, 16 GB RAM and Ubuntu 24.04 OS. RESPIRE code is available at https://github.com/purushottamkar/respire.
10

B-S
B-W
C-S
C-W
G-S
G-W
T-S
T-W
Train Site
DT
GBDT
KNN
KRR
MLP
RR
RESPIRE
Models
1.0000 0.9789 0.9857 0.9949 0.9976 0.9929 0.8998 0.9949
0.9449 0.9113 0.9730 0.9332 0.9891 0.9971 0.8796 0.9924
0.9505 0.9632 0.9572 0.9477 0.9897 0.9837 0.9111 0.9942
0.9198 0.9493 0.9729 0.9482 0.9875 0.9869 0.8953 0.9915
0.9299 0.9576 0.9438 0.9472 0.9838 0.9818 0.9028 0.9906
0.8762 0.8573 0.7767 0.8299 0.9721 0.9272 0.8808 0.9874
0.9153 0.9177 0.8627 0.8844 0.9806 0.9663 0.8962 0.9899
Sensor 5A2D - Training R2 Scores
Figure 4: All methods offer excellent performance during training.
B-S B-S
B-W B-W
C-S C-S
C-W C-W
G-S G-S
G-W G-W
T-S T-S
T-W T-W
Train Site Deployment Site
DT
GBDT
KNN
KRR
MLP
RR
RESPIRE
Models
-0.6886 0.6793 0.6428 0.5316 0.8735 0.8872 -0.4930 0.9638
-0.4633 0.7165 0.7498 0.6856 0.9234 0.9228 -0.4218 0.9630
-0.5323 0.6536 0.6551 0.4619 0.9528 0.9269 -0.3357 0.9670
-0.2496 0.6662 0.7443 0.6148 0.9636 0.9566 -0.2172 0.9704
-0.3900 0.7065 0.7499 0.5057 0.9785 0.9391 -0.1973 0.9687
0.0134 0.7736 0.6622 0.7268 0.9760 0.7043 0.1228 0.9582
-0.4104 0.5753 0.7217 0.6507 0.9748 0.9061 0.0233 0.9682
Sensor 5A2D - With Adaptation - SS
Figure 5: DT, GBDT, KNN show steep drops even with nontransfer SS testing.
B-S B-W
B-W B-S
C-S C-W
C-W C-S
G-S G-W
G-W G-S
T-S T-W
T-W T-S
Train Site Deployment Site
DT
GBDT
KNN
KRR
MLP
RR
RESPIRE
Models
0.5219 0.2454 0.7921 0.3293 0.6836 0.8953 0.8827 -0.3604
0.6113 0.0798 0.7711 0.4157 0.7236 0.8981 0.9095 -0.4667
0.6067 0.3100 0.8064 0.3506 0.8012 0.5390 0.8476 -0.5556
0.6622 0.3031 0.7161 0.7347 0.5180 0.8089 0.7038 -0.1019
0.6845 0.2381 0.7027 0.6952 0.4520 0.6395 0.9748 -0.5700
0.6026 -0.0265 0.6807 0.6300 0.3192 0.8444 0.9644 0.0771
0.6251 0.1122 0.8419 0.5232 0.4140 -0.1740 0.8428 -0.2732
Sensor 5A2D - With Adaptation - SX
Figure 6: RESPIRE offers comparable performance in all SX transfer cases.
B-S C-S
B-S G-S
B-S T-S
B-W C-W
B-W G-W
B-W T-W
C-S B-S
C-S G-S
C-S T-S
C-W B-W
C-W G-W
C-W T-W
G-S B-S
G-S C-S
G-S T-S
G-W B-W
G-W C-W
G-W T-W
T-S B-S
T-S C-S
T-S G-S
T-W B-W
T-W C-W
T-W G-W
Train Site Deployment Site
DT
GBDT
KNN
KRR
MLP
RR
RESPIRE
Models
0.1374 0.7693 -2.9377 0.6224 0.3630 0.5840 -0.3243 0.9154 -0.4853 0.5817 0.6019 0.7380 -0.3422 0.4106 -0.8859 0.6434 0.6281 0.9474 0.0161 0.1434 0.9304 0.6920 0.7549 0.2258
0.3808 0.7623 -1.5527 0.5833 0.3513 0.6158 -0.1256 0.8824 -0.3197 0.7065 0.2714 0.4619 -0.0607 0.5148 -0.3321 0.6976 0.6388 0.9717 -0.1077 0.3353 0.9324 0.7334 0.8126 0.3389
0.2886 0.7782 -1.9988 0.5485 0.4827 0.6878 0.0400 0.9093 -0.9748 0.6956 0.5282 0.6503 -0.1913 0.4852 -0.5608 0.1867 0.3149 0.9479 -0.1575 0.2733 0.8825 0.4948 0.7398 0.8859
0.4945 0.7608 -1.3740 0.4885 0.0485 -0.0367 0.1777 0.9262 -0.0263 0.7523 0.2300 0.2642 -0.1290 0.7339 -0.2330 0.7602 0.1228 0.9727 -0.1604 0.6848 0.9234 0.7144 0.7818 0.8977
0.2928 0.8301 -1.6600 0.5687 0.4163 0.9191 0.1671 0.9314 -0.1207 0.7114 0.6858 0.8584 -0.0453 0.5617 -0.1977 0.4712 0.5559 0.9722 -0.1284 0.4957 0.9459 0.6547 0.8369 0.7249
0.3573 0.8785 -0.2743 0.6687 -0.1300 0.9414 -0.0453 0.8763 0.0476 0.7668 0.0337 0.9481 0.1125 0.5317 0.0698 0.4538 0.7097 0.9529 0.0196 0.5502 0.9258 0.7227 0.8130 0.2981
0.5415 0.8010 -1.0423 0.6774 -0.2400 0.9445 0.2011 0.9720 0.0949 0.7265 0.6972 0.9723 0.0799 0.7345 -0.1850 -0.6997 -0.1149 0.8536 0.2398 0.4528 0.8929 0.7549 0.7061 0.3483
Sensor 5A2D - With Adaptation - XS
B-S C-W
B-S G-W
B-S T-W
B-W C-S
B-W G-S
B-W T-S
C-S B-W
C-S G-W
C-S T-W
C-W B-S
C-W G-S
C-W T-S
G-S B-W
G-S C-W
G-S T-W
G-W B-S
G-W C-S
G-W T-S
T-S B-W
T-S C-W
T-S G-W
T-W B-S
T-W C-S
T-W G-S
Train Site Deployment Site
DT
GBDT
KNN
KRR
MLP
RR
RESPIRE
Models
0.6820 0.5615 0.7121 0.4160 0.7267 -0.2854 0.8021 0.3351 0.7899 -0.3891 0.7715 -0.2702 0.7173 0.7734 0.8044 -0.2303 0.2563 -0.7931 0.6984 0.8123 0.5592 -0.0772 0.3854 0.9276
0.7507 0.5959 0.7494 0.6423 0.7370 0.2270 0.7706 0.3661 0.7916 -0.0338 0.8550 0.1120 0.7032 0.7954 0.8612 -0.0938 0.3541 -0.5688 0.7369 0.8218 0.6137 0.0035 0.3264 0.9624
0.7424 0.6033 0.7068 0.6505 0.7227 -0.2749 0.7311 0.5601 0.7283 -0.6838 0.8302 -0.5183 0.6841 0.7222 0.8649 -0.4476 -0.4218 -3.3318 0.5595 0.7840 0.6286 -0.0818 -0.2926 0.8966
0.7750 0.2277 0.2835 0.5152 0.5200 -0.4020 0.7712 0.5896 0.5700 -0.0856 0.8672 0.2662 0.7262 0.7102 0.4781 -0.0136 0.5846 -0.7611 0.7491 0.8287 0.6907 0.0230 0.4595 0.9712
0.7604 0.8482 0.9613 0.5836 0.8450 -0.0692 0.7924 0.7010 0.8625 0.0016 0.8873 0.0306 0.7378 0.7771 0.9659 -0.5496 0.1936 -3.4571 0.7594 0.8322 0.7943 0.0822 0.2356 0.9703
0.8443 0.6310 0.9602 0.6394 0.8859 0.1492 0.7857 -0.1854 0.9475 0.0237 0.9290 0.2088 0.7190 0.8210 0.9594 0.0447 -0.1550 -2.4550 0.6971 0.8347 0.4099 0.1066 0.5358 0.9734
0.6723 0.8870 0.9711 0.5140 0.8328 -0.0988 0.7610 0.2413 0.9661 -0.2574 0.8678 -0.1548 0.7384 0.6859 0.9721 -0.4809 -1.3351 -4.0613 0.6334 0.8406 -0.3421 0.1574 0.7154 0.9606
Sensor 5A2D - With Adaptation - XX
0.29 0.77 0.83 0.86 0.97 0.96 -1.10 0.99
0.40 0.25 -4.98 0.26 0.36 -1.81 -28.90 0.40
0.58 0.72 -6.53 0.86 0.90 0.94 -2.49
0.22 0.77 -0.55 0.84 0.97 0.95 -0.58
0.38 0.24 -68.25 0.27 0.35 -1.85 -30.72
0.22 0.77 0.69 0.75 0.97 0.95 0.11 0.96
0.39 0.25 -8.40 -0.84 0.38 -1.96 -16.87 -0.84
-1.71 0.79 0.48 0.85 0.85 0.90 0.21
0.29 0.77 0.06 0.82 0.97 0.96 -0.90
0.40 0.25 -70.68 0.09 0.39 -1.96 -30.25
S1
S2
S3
S4
S5
S1
S2
S3
S4
S5
B5FF 1FEA 1FEA B5FF
B-S
B-S
B-W
B-W
C-S
C-S
C-W
C-W
G-S
G-S
G-W
G-W
T-S
T-S
T-W
T-W
R2 Scores for SS Transfer
1.00
0.75
0.50
0.25
0.00
0.25
0.50
0.75
1.00
R2 Score
Figure 7: Heatmaps showing R2 performance of all baseline methods and RESPIRE on training, nontransfer testing (SS) and transfer testing (SX, XS, XX). 1D adapters were offered to all methods. The same colorbar applies to all heatmaps with dark green corresponding to excellent performance R2 → 1 and dark purple corresponding to poor performance R2 ≪ 0.
Baseline Methods. Standard implementations from the popularly used scikit-learn library [35] were used as baseline methods for empirical comparison. These included Regression Trees (DT), Gradientboosted Decision Trees (GBDT), k-Nearest Neighbors (KNN), Kernel Ridge Regression (KRR), Multilayered Perceptron (MLP), and Linear Ridge Regression (RR). The chosen baseline methods broadly cover the popular methods reported in prior literature for calibrating LCAQ CO sensors [5, 6, 7, 8, 9].
Hyperparameter Tuning. A range of hyperparameters was decided for each baseline method and RESPIRE. The list of hyperparameter ranges offered to each method is described in Table 2. For each experiment, a train dataset was chosen and for each and method participating in that experiment, hyperparameters were tuned using 3-fold cross-validation on the train portion of the dataset. The chosen hyperparameters were then used to train the final model on the entire train portion of that dataset. Bayesian-
 optimization was used to accelerate hyperparameter search for RESPIRE using a standard implementation from the scikit-optimize library [36]. On the other hand, an exhaustive grid search was offered to baseline methods to tune their hyperparameters.
Tuning of length Scale in the Matern Kernel. The selection of an appropriate length scale
11

0.00 0.05 0.10 0.15 0.20
0.0
0.2
0.4
0.6
0.8
1.0
Robust R2
Robust R2 vs.
RESPIRE RESPIRE (Adapted)
12-2406
12-2412
12-2418
12-2500
12-2506
12-2512
12-2518
12-2600
12-2606
12-2612
Timestamp
0
1
2
3
4
CO Concentration (ppm)
Time-series Plot
Ground Truth RESPIRE (R2 = 0.8836) RESPIRE (Adapted) (R2 = 0.9387)
5CB6: B-S G-W (Test Data)
0.00 0.05 0.10 0.15 0.20
0.0
0.2
0.4
0.6
0.8
1.0
Robust R2
Robust R2 vs.
RESPIRE RESPIRE (Adapted)
12-2400
12-2412
12-2500
12-2512
12-2600
12-2612
Timestamp
1
2
3
4
5
CO Concentration (ppm)
Time-series Plot
Ground Truth RESPIRE (R2 = 0.2576) RESPIRE (Adapted) (R2 = 0.6972)
5A2D: C-W G-W (Test Data)
Figure 8: Two cases indicating the presence of outliers in data. Test R2 is often diminished due to a few points. The boxes on the left titled “Robust R2 vs δ" show how test R2 rapidly improves if just a δ-fraction of the test data is excluded from evaluation. The boxes on the right show the corresponding time series of model predictions and ground truth. For the transfer C-W → G-W, a chunk of ground truth RGI data was missing and a very few bad predictions by the RESPIRE model caused R2 to fall m-
ore than 50 percentage points from 0.8 to less than 0.25 (if no adapter is used) and almost 20 percentage points from 0.95 to 0.7 (if adapter is used).
hyperparameter, ls, for the Matern kernel is crucial for achieving robust model generalization. In this work, we adopted a data-driven heuristic suggested by Garreau et. al. [37] to define a relevant search space for ls. The procedure commences with the computation of the distribution of pairwise Euclidean distances, d = ∥xi − xj∥2, for all feature vectors {xi, xj} in the training dataset. From this empirical distribution, a candidate set of length scales, lcand, was derived by sampling at specifi-
c quantiles (e.g., 0.1, 0.25, 0.5, 0.75, 0.9), ensuring that hyperparameter search adapted to the scale of the data.
Site-and-Season Transfer Experiments. To evaluate the ability of a model to perform on unseen sites and seasons, a variety of site-and-season transfer experiments were conducted. Recall from Section 3 that datasets are denoted by concatenating the site name and the season name, separated by a hyphen. Given this, four distinct transfers are studied:
1. SS source and target datasets correspond to the same site and same season
2. SX source and target datasets have the same site but different season
3. XS source and target datasets have the same season but different sites
4. XX source and target datasets have the different site and different season
12

Adapter Learning. In several cases, transfer experiments resulted in poor R2 scores simply due to predictions being off by a bias. This misrepresents the true performance of the model since the bias may have been introduced due to zero-shifts in the ground truth. To overcome this, a 1D adapter was trained on the model’s prediction and the ground truth. In experiments where adaptation is done, an adapter is offered to all methods. It is notable that in all transfer experiments, training and hyperp-
arameter tuning is done only on train dataset. If a 1D adapter is at all learnt, it is learnt only on the train part of the target dataset.
Sensor-to-Sensor Transfer Experiments. In addition to transfers across sites and seasons, transfers across sensors were also considered. Given a pair of source and target sensors, say 5A2D → 5CB6 used in Figure 9, five distinct results are presented:
1. (S1) the model’s R2 on source sensor data without adaptation
2. (S2) the model’s R2 on source sensor data with adaptation
3. (S3) the model’s R2 on source target data without transfer model and without adaptation
4. (S4) the model’s R2 on source target data with transfer model but without adaptation
5. (S5) the model’s R2 on source target data with transfer model and with adaptation
Transfer models, when learnt, were simply 2D-to-2D linear models trained to take operating potential (OP) values of the target sensor as input and predict the corresponding OP values for the source sensor as output. It is notable that this requires no supervision (no RGI CO readings required).
A Case of Swapped Sensors. RESPIRE’s semi-parametric model structure allows anomalous behavior, such as certain cases of overfitting, to be detected by inspecting the weights w1, w2 and bias b predicted by the learnt model as a function of the auxiliary variable (ambient temperature). Figure 10 shows that these values demonstrate abnormal variations for the the sensor packages 5092 and D3EB. This indicated overfitting which was further confirmed by inspecting performance of the S5-S2 R2 scores as -
shown in Figure 11. It turned out that in these two sensor packages, the readings for the CO and NOx sensors were swapped due to a firmware issue. Rectifying this issue immediately led to significant improvement in R2 scores for these two sensors (Figure 12) as well as the model weights w1, w2 and bias b exhibited much less erratic behavior thereafter (Figure 13). This chance exercise demonstrated the ability of semi-parametric models to offer not just explainable predictions, but also model weigh-
ts with diagnostic value.
6 Conclusion
This paper presented results of a LCAQ sensor calibration exercise done on data from a large and diverse deployment of sensors and corresponding RGI setup in a mobile facility that toured four sites across several months. Some of the key takeaways of this study include the care needed to avoid overpowered, high-capacity models that may offer good same-site-same-season performance, but struggle if the site or season is switched. The study presented favorable outcomes such as the success of sensor-t-
o-sensor transfer of models that may allow large AQM networks to be established without each sensor requiring individual calibration. The challenges of cross-site and cross-season transfers were also discussed with zero-shifts that can cause models to give deceptively poor performance. Fortunately, in several cases, this can be mitigated by learning a simple 1D adapter. This paper also presented the RESPIRE method for transferable calibration that closely aligns to manufacturer recommendations and-
 offers the best performance in transfer experiments. The model also makes interpretable predictions with diagnostic value which, in two cases, allowed an inadvertent swap of sensor values to be detected and corrected. Future work includes several directions such as experimenting with RESPIRE for calibrating gas sensors of other types such as O3, NOx . A more in-depth analysis of zero-shifts and drifts in both RGI and LCAQ data would be valuable to better understand the opportunities and limitatio-
ns of current calibration approaches. Time series calibration techniques that accommodate meta data can also offer improved performance, such as time-of-day information for O3 sensors.
13

Acknowledgment
The work was supported by grant no 001296 from the Clean Air Fund. The authors are thankful to the members of the ATMAN collaboration for helpful discussions and to the members of the CSE lab staff team, especially Mr. Brajesh Kumar Mishra, Mr. Saurabh Malhotra, Mr. Saurabh Jaiswal and Mr. Karan Shah for timely and generous help with compute infrastructure and logistics. PK thanks Microsoft Research and Tower Research for research grants.
References
[1] R. Sahu, A. Nagal, K. K. Dixit, H. Unnibhavi, S. Mantravadi, S. Nair, Y. Simmhan, B. Mishra, R. Zele, R. Sutaria, V. M. Motghare, P. Kar, and S. N. Tripathi. Robust statistical calibration and characterization of portable low-cost air quality monitoring sensors to quantify real-time O_3 and NO_2 concentrations in diverse environments. Atmospheric Measurement Techniques, 14(1):37–52, 2021.
[2] Andres Gonzalez, Adam Boies, Jacob Swanson, and David Kittelson. Field calibration of low-cost air pollution sensors. Atmospheric Measurement Techniques Discussions, pages 1–17, 2019. Preprint.
[3] L. Spinelle, M. Gerboles, M. G. Villani, M. Aleixandre, and F. Bonavitacola. Field calibration of a cluster of low-cost available sensors for air quality monitoring. Part A: Ozone and nitrogen dioxide. Sensors and Actuators B: Chemical, 215:249–257, 2015.
[4] H. S. Bhowmik, A. Shukla, V. Lalchandani, J. Dave, N. Rastogi, M. Kumar, V. Singh, and S. N. Tripathi. Inter-comparison of online and offline methods for measuring ambient heavy and trace elements and water-soluble inorganic ions (NO−
3 , SO2−
4 , NH+
4 , and Cl−) in PM2.5 over a heavily polluted megacity, Delhi. Atmospheric Measurement Techniques, 15(9):2667–2684, 2022.
[5] M. Levy Zamora, C. Buehler, A. Datta, D.R. Gentner, and K. Koehler. Identifying optimal co-location calibration periods for low-cost sensors. Atmospheric Measurement Techniques, 2023.
[6] I.D. Apostolopoulos, S. Androulakis, P. Kalkavouras, G. Fouskas, and S.N. Pandis. Calibration and inter-unit consistency assessment of an electrochemical sensor system using machine learning. Sensors, 2024.
[7] D. Topalović, M.D. Davidović, M. Jovanović, A. Bartonová, Z. Ristovski, and M. Jovašević-Stojanović. In search of an optimal in-field calibration method of low-cost gas sensors for ambient air pollutants: Comparison of linear, multilinear and artificial neural network approaches. Atmospheric Environment, 2019.
[8] C. Zuidema, C.S. Schumacher, E. Austin, G. Carvlin, T.V. Larson, E.W. Spalt, M. Zusman, A.J. Gassett, E. Seto, J.D. Kaufman, and L. Sheppard. Deployment, calibration, and cross-validation of low-cost electrochemical sensors for carbon monoxide, nitrogen oxides, and ozone for an epidemiological study. Sensors, 2021.
[9] R. Ariyaratne, M. A. Elangasinghe, D. G. G. P. Karunaratne, M. Levy-Zamora, A. Manipura, K. B. S. N. Jinadasa, and K. H. N. Abayalath. Understanding the effect of temperature and relative humidity on field calibration models and sensor sensitivities of multiple electrochemical carbon monoxide (CO) sensors in a tropical environment. Sensors and Actuators B: Chemical, 2023.
[10] F. Karagulian, R. Barbiere, M. Barbiere, M. Gerboles, L. Lagler, G. P. Malings, C. Spinelle, and L. et al. Review of the Performance of Low-Cost Sensors for Air Quality Monitoring. Atmosphere, 10(9):506, 2019.
[11] D. Bousiotis, A. Singh, M. Haugen, D. C. S. Beddows, S. Diez, K. L. Murphy, P. M. Edwards, A. Boies, R. M. Harrison, and F. D. Pope. Assessing the sources of particles at an urban background site using both regulatory instruments and low-cost sensors – a comparative study. Atmospheric Measurement Techniques, 14(6):4139–4155, 2021.
14

[12] Oil and Gas Online. B-Series Platform Overview.
[13] Alphasense Ltd. CO-B4 Carbon Monoxide Sensor Datasheet, 2022.
[14] Alphasense Ltd. Correcting for Background Currents in Four Electrode Toxic Gas Sensors, 2014.
[15] Arthur E. Hoerl and Robert W. Kennard. Ridge Regression: Biased Estimation for Nonorthogonal Problems. Technometrics, 12(1), 1970.
[16] Bernhard Schölkopf, Alexander Smola, and Klaus-Robert Müller. Nonlinear component analysis as a kernel eigenvalue problem. Neural Computation, 10(5), 1998.
[17] J. R. Quinlan. Induction of Decision Trees. Machine Learning, 1(1):81–106, 1986.
[18] Jerome H. Friedman. Greedy Function Approximation: A Gradient Boosting Machine. The Annals of Statistics, 29(5):1189–1232, 2001.
[19] David E. Rumelhart, Geoffrey E. Hinton, and Ronald J. Williams. Learning representations by back-propagating errors. Nature, 323(6088):533–536, 1986.
[20] Thomas M. Cover and Peter E. Hart. Nearest neighbor pattern classification. IEEE Transactions on Information Theory, 13(1):21–27, 1967.
[21] Ricardo A. Maronna. Robust ridge regression for high-dimensional data. Computational Statistics & Data Analysis, 55(10):2886–2894, 2011.
[22] Arnak S. Dalalyan and Yin Chen. Fused sparsity and robust estimation for linear models with unknown variance. In Advances in Neural Information Processing Systems 25, page 460–468, 2012.
[23] Yudong Chen, Constantine Caramanis, and Shie Mannor. Robust sparse regression under adversarial corruption. In Sanjoy Dasgupta and David McAllester, editors, Proceedings of the 30th International Conference on Machine Learning (ICML), volume 28 of Proceedings of Machine Learning Research, pages 774–782, Atlanta, Georgia, USA, 17–19 Jun 2013. PMLR.
[24] Brian McWilliams, Gabriel Krummenacher, Mario Lucic, and Joachim M. Buhmann. Fast and robust least squares estimation in corrupted linear models. In Advances in Neural Information Processing Systems 27, pages 415–423, 2014.
[25] Kush Bhatia, Prateek Jain, and Purushottam Kar. Robust regression via hard thresholding. In Advances in Neural Information Processing Systems 28, pages 721–729, 2015.
[26] Ilias Diakonikolas, Weihao Kong, and Alistair Stewart. Efficient algorithms and lower bounds for robust linear regression. In Proceedings of the Thirtieth Annual ACM-SIAM Symposium on Discrete Algorithms (SODA), pages 2745–2754. SIAM, 2019.
[27] Bhaskar Mukhoty, Govind Gopakumar, Prateek Jain, and Purushottam Kar. Globally-convergent iteratively reweighted least squares for robust regression problems. In Kamalika Chaudhuri and Masashi Sugiyama, editors, Proceedings of the 22nd International Conference on Artificial Intelligence and Statistics (AISTATS), volume 89 of Proceedings of Machine Learning Research, pages 313–322. PMLR, 16–18 Apr 2019.
[28] Jianqing Fan, T.-C. Hu, and Y. K. Truong. Robust non-parametric function estimation. Scandinavian Journal of Statistics, 21(4):433–446, 1994.
[29] Simon S. Du, Yining Wang, Sivaraman Balakrishnan, Pradeep Ravikumar, and Aarti Singh. Robust nonparametric regression under huber’s ε-contamination model. arXiv preprint, 2018.
[30] Pavel Čízek and Serhan Sadikoğlu. Robust nonparametric regression: A review. Wiley Interdisciplinary Reviews: Computational Statistics, 12(3):e1492, 2020.
[31] B. Mukhoty, S. Dutta, and P. Kar. Robust non-parametric regression via incoherent subspace projections. Machine Learning, 110:2941–2989, 2021.
15

Table 2: Hyperparameter Search Space
Hyper Parameter
Values / Range
Description Hyper Parameter
Values / Range
Description
RESPIRE Kernel Ridge (KRR)
α {0, 0.05, 0.1, 0.15, 0.2}
Proportion of outliers
λ {0.1, 1, 10} L2 Penalty
qls [0.1, 0.9]
(continuous)
Quantile for kernel lengthscale [37]
qls {0.1, 0.25, 0.5, 0.75, 0.9}
Quantile for kernel lengthscale [37] η [0.1, 1.0]
(continuous)
Outlier correction rate λ {0.1, 0.5, 1, 5, 10}
L2 Penalty
Decision Tree (DT) MLP
max_depth {5, 10, 20, 40} Max tree depth
hidden_layer _sizes
{(50,), (100,), (50,25)}
Hidden-layer architecture min_samples _split
{2, 5, 10} Samples to split
activation {relu, tanh} Activation function min_samples _leaf
{1, 2, 4} Samples per leaf
λ {1e-4, 1e-3, 1e-2}
L2 Penalty
Gradient Boosting (GBDT) Ridge (RR) & K-Nearest Neighbors (KNN)
n_estimators {50, 100, 200} Number of trees
RR: λ {0.1, 1, 10, 50, 100}
L2 Penalty
learning_rate {0.01, 0.1, 0.2} Shrinkage step KNN: n_neighbors
{3, 5, 7, 10, 15}
Size of neighborhood max_depth {3, 5, 7} Tree depth
[32] Ha Quang Minh, Partha Niyogi, and Yuan Yao. Mercer’s theorem, feature maps, and smoothing. In Proceedings of the 19th Annual Conference on Learning Theory (COLT), volume 4005 of Lecture Notes in Computer Science, pages 154–168. Springer, 2006.
[33] Allen Knutson and Terence Tao. Honeycombs and sums of Hermitian matrices. Notices of the American Mathematical Society, 48(2):175—-186, 2001.
[34] Alexander A. Klyachko. Random walks on symmetric spaces and inequalities for matrix spectra. Linear Algebra and its Applications, 319(1):37–59, 2000.
[35] Fabian Pedregosa, Gaël Varoquaux, Alexandre Gramfort, Vincent Michel, Bertrand Thirion, Olivier Grisel, Mathieu Blondel, Peter Prettenhofer, Ron Weiss, Vincent Dubourg, Jake VanderPlas, Alexandre Passos, David Cournapeau, Matthieu Brucher, Matthieu Perrot, and Édouard Duchesnay. Scikit-learn: Machine Learning in Python. Journal of Machine Learning Research, 12:2825–2830, 2011.
[36] Tim Head, Manoj Kumar, Holger Nahrstaedt, Gilles Louppe, and Iaroslav Shcherbatyi. ScikitOptimize: 0.9.0, 2021.
[37] D. Garreau, W. Jitkrittum, and M. Kanagawa. Large sample analysis of the median heuristic, 2018.
16

-0.4741 0.5685 0.7021 0.6547 0.9747 0.9041 0.0139 0.9674
-0.4108 0.5752 0.7170 0.6507 0.9748 0.9061 0.0262 0.9681
-1.5942 0.3456 0.8903 0.6972 0.8799 0.8880 0.4954 0.9105
-0.5933 0.5781 0.7760 0.6541 0.9791 0.9682 0.2711 0.9723
-0.4838 0.5617 0.8721 0.6339 0.9798 0.9668 -1.0120 0.9727
-0.6652 0.7329 0.9035 0.7515 0.9728 0.9604 -0.0524 0.9709
-0.7107 0.7409 0.9079 0.7470 0.9744 0.9608 -0.2975 0.9715
-0.0143 0.7601 0.3107 0.6169 0.8424 0.5431 -0.5622 0.9882
-0.6046 0.7228 0.8318 0.7535 0.9551 0.6859 -0.0465 0.9634
-0.6539 0.7278 0.8156 0.7493 0.9577 0.6967 0.1423 0.9654
S1
S2
S3
S4
S5
S1
S2
S3
S4
S5
5CB6 5A2D 5A2D 5CB6
B-S
B-S
B-W
B-W
C-S
C-S
C-W
C-W
G-S
G-S
G-W
G-W
T-S
T-S
T-W
T-W
R2 Scores for SS Transfer
0.8156 -1.3400 -0.9960 0.0126 0.3676 -0.9560 0.8700 0.0252
0.6251 0.1122 0.8419 0.5232 0.4140 -0.2354 0.8262 -0.2732
0.8956 -1.7179 -0.3221 -5.5695 0.8703 -0.8406 0.9018 -1.5735
0.8294 -1.3259 -1.0225 -0.9088 0.9475 -0.9207 0.8393 -0.4191
0.6099 0.1197 0.8281 0.7876 0.9499 -0.2098 0.8437 -0.8376
0.8188 -1.4018 -1.5234 -0.9434 0.9443 0.9011 0.8339 -0.2648
0.8221 0.0118 0.8220 0.9078 0.9575 0.9543 0.9462 -1.5473
0.5006 -1.2206 -2.5189 -0.0239 0.1290 0.7557 0.7484 0.4211
0.8141 -1.4030 -1.3881 -0.6948 0.3583 0.8679 0.8568 0.0247
0.8268 0.0347 0.8208 0.8676 0.3717 0.9296 0.9384 -0.9131
S1
S2
S3
S4
S5
S1
S2
S3
S4
S5
5CB6 5A2D 5A2D 5CB6
B-S
B-W
B-W
B-S
C-S
C-W
C-W
C-S
G-S
G-W
G-W
G-S
T-S
T-W
T-W
T-S
R2 Scores for SX Transfer
Figure 9: Sensor-to-sensor transfer experiments for the pair of sensors 5A2D and 5CB6 (in both directions) for SS and SX transfer situations. As described in text, five scenarios are explored. S1 vs S3 results show that the RESPIRE model can often be transferred without a transfer model being learnt. S3 vs S4 shows that learning a transfer model offers moderate benefits in some cases. S2 and S5 results correspond to S1 and S4 results, but with a 1D adapter learnt. The sensor-to-sensor adaptation e-
xercise revealed interesting patterns about the sensors – the median S5 R2 scores across all sensor-to-sensor transfers done from a sensor was positive for all the sensors except 5092 and D3EB. To investigate this further, Figure 11 shows KDE plots of the difference of S5 and S2 R2 scores after grouping the sensors into two groups: suspect (sensors 5092 and D3EB) and non-suspect (the rest of the sensors, except 1FEA since 1FEA had very few overlapping timestamps with other sensors).
15 20 25 30 35
0.001
0.0015
0.002
0.0025
0.003
0.005
0.01
0.015
0.02
0.025
0.03
0.035
Sensor: 5CB6 | Trained on: C-S
Temperature (°C)
Weight
Bias
20 25 30 35
−0.15
−0.1
−0.05
0
0.05
0.1
−2.4
−2.2
−2
−1.8
−1.6
Sensor: D3EB | Trained on: B-W
Temperature (°C)
Weight
Bias
Figure 10: RESPIRE’s semi-parametric model structure allows certain cases of overfitting to be detected. The figures above show the plot of weights w1, w2 and bias b as a function of the auxiliary variable (ambient temperature). The model on the left hand side has smooth variations whereas the one on the right has larger and sharper variations. A paired two-sided t-test on the performance of these two models on various transfer scenarios confirmed the model on the left outperformed the model on th-
e right with high confidence (p-value ≈ 0.001 in several cases).
17

0 1000 2000 3000 4000 coop1 Value
0.00
0.01
0.02
0.03
0.04
0.05
0.06
Density
Distribution of coop1 Values at T-W Site
Sensor ID (n=obs) 5A2D (n=2430) 5CB6 (n=2431) 1FEA (n=519) 5092 (n=2431) B5FF (n=2431) D3EB (n=2431)
50 100 150 200 250 300 350 400 coop2 Value
0.00
0.05
0.10
0.15
0.20
0.25
Density
Distribution of coop2 Values at T-W Site
Sensor ID (n=obs) 5A2D (n=2430) 5CB6 (n=2431) 1FEA (n=519) 5092 (n=2431) B5FF (n=2431) D3EB (n=2431)
1.00 0.75 0.50 0.25 0.00 0.25 0.50 0.75 1.00 R2 Score Difference (S5 - S2)
0
1
2
3
4
Density
Distribution of R2 Score Difference (S5 - S2) by Group
Transfer Category (n=obs) suspect to suspect (n=128) suspect to non-suspect (n=384) non-suspect to suspect (n=384) non-suspect to non-suspect (n=384)
Figure 11: Results that indicate towards malfunction in the sensor packages 5092 and D3EB. The OP1 and OP2 values of these two sensors take significantly different values than the other sensors. KDE plots of S5-S2 R2 scores suggests that the models trained on the suspect sensors’ data did not learn well in the first place and continue to perform poorly after sensor-to-sensor adaptation. The non-suspect sensors’ models continue to perform well even after adaptation on non-suspect sensors. It is als-
o notable that the RESPIRE model overfit on data offered by sensor D3EB as reported in Figure 10. This exercise was able to identify two suspect sensors for which it turned out (see Figures 12 and 13), the readings for the CO and NOx sensors were swapped.
18

DT GBDT KNN KRR MLP RR RESPIRE Models
B-S C-W
B-S G-W
B-S T-W
B-W C-S
B-W G-S
B-W T-S
C-S B-W
C-S G-W
C-S T-W
C-W B-S
C-W G-S
C-W T-S
G-S B-W
G-S C-W
G-S T-W
G-W B-S
G-W C-S
G-W T-S
T-S B-W
T-S C-W
T-S G-W
T-W B-S
T-W C-S
T-W G-S
Train Site Deployment Site
-0.1723 0.0231 0.1237 0.0944 0.1674 0.1533 0.1166
-0.0078 0.3156 0.3555 0.1883 0.3432 0.1722 0.2876
-0.0086 0.2003 0.1184 0.1046 0.1349 0.0764 0.1849
-0.6143 -0.4602 -0.4385 -0.2780 -0.7320 -0.9085 -0.4679
0.2609 0.1012 0.3304 0.2147 0.2377 0.3060 0.1809
-4.6977 -4.2243 -4.6617 -4.7888 -4.3137 -5.2383 -3.0448
-0.1093 -0.0339 -0.1154 0.0491 0.0637 0.0534 -0.3178
0.2858 0.3024 0.4116 0.2870 0.2713 0.3910 0.2711
0.2344 0.2907 0.2603 0.3435 0.3032 0.2566 0.2943
0.2378 0.2560 -0.2508 0.0710 -0.5002 -0.2955 -0.1960
0.1404 0.0873 0.2322 0.2796 0.0122 0.0993 -0.1104
-3.3797 -4.1635 -2.8394 -3.4746 -2.6864 -4.6748 -3.3981
-0.1094 -0.0629 -0.0291 0.0515 -0.0507 -0.0914 -0.3307
0.1953 0.2235 0.2369 0.2989 0.4208 0.3386 0.1920
0.4252 0.3262 0.5288 0.4322 0.2551 0.1746 0.2292
-0.2258 -0.2740 -0.0506 -0.3618 -0.8691 -0.0277 -0.4396
-0.3175 -0.2172 -0.3106 -0.4098 -0.6354 -0.4486 -0.4013
-3.9297 -3.0015 -3.3834 -3.8625 -4.5392 -5.0123 -4.4178
-0.0672 -0.1681 -0.3688 -0.0790 -0.2544 0.0099 -0.3936
0.1710 0.1997 0.2878 0.3237 0.2605 0.3139 0.4209
0.3203 0.3509 0.0730 0.2645 0.0844 0.2911 0.0191
-0.3849 -0.3919 -0.3476 -0.0536 -0.7054 0.2576 -0.4163
-0.3473 -0.7812 -0.3655 -0.7949 -1.0187 -0.5799 -0.9203
0.2619 0.1975 0.1995 0.2589 0.2707 0.1963 -0.0147
Sensor D3EB - With Adaptation - XX
DT GBDT KNN KRR MLP RR RESPIRE Models
B-S C-W
B-S G-W
B-S T-W
B-W C-S
B-W G-S
B-W T-S
C-S B-W
C-S G-W
C-S T-W
C-W B-S
C-W G-S
C-W T-S
G-S B-W
G-S C-W
G-S T-W
G-W B-S
G-W C-S
G-W T-S
T-S B-W
T-S C-W
T-S G-W
T-W B-S
T-W C-S
T-W G-S
Train Site Deployment Site
0.6972 0.7402 0.7448 0.7845 0.7325 0.7709 0.6684
0.7685 0.7795 0.7583 0.5467 0.8101 0.9413 0.8434
0.7450 0.7583 0.7317 0.3244 0.8141 0.9729 0.9480
0.4142 0.4507 0.3633 0.5766 0.5745 0.7223 0.7150
0.7122 0.7535 0.7719 0.7344 0.8594 0.8347 0.8548
-0.5976 -1.0775 -0.8089 -0.1125 -0.5144 -0.6639 -0.6065
0.7262 0.7326 0.6855 0.7496 0.7172 0.7315 0.7515
0.8548 0.8534 0.8173 0.7400 0.8912 0.9656 0.9523
0.8344 0.8374 0.8006 0.5718 0.8931 0.9683 0.9785
-0.2376 -0.2176 -0.3774 -0.5297 -0.2179 0.0286 0.1960
0.8626 0.9291 0.9082 0.8961 0.9202 0.9232 0.9403
-0.2175 -0.6361 -1.2546 -0.7776 -0.1840 -0.2763 -0.0895
0.7365 0.7194 0.7280 0.7276 0.7204 0.7187 0.7582
0.7525 0.7591 0.7461 0.7058 0.7642 0.7779 0.7789
0.7950 0.8133 0.8443 0.4790 0.9719 0.9693 0.9802
0.0445 0.1512 -0.9800 -0.3082 -0.0910 0.0658 -0.5354
0.5990 0.6895 -0.9700 0.4546 0.7454 0.7413 0.4762
-0.5101 -0.2681 -4.7272 -2.4521 -1.0270 -0.2169 -2.5830
0.7312 0.7205 0.6226 0.7255 0.6851 0.7135 0.7102
0.7243 0.8242 0.7917 0.8074 0.7570 0.7836 0.8797
0.8243 0.8860 0.8306 0.7966 0.9136 0.9636 0.9520
-0.0272 0.0445 -0.0512 0.0207 0.0966 0.1234 0.0324
0.6729 0.6773 0.2240 0.6602 0.4410 0.6652 0.6474
0.9586 0.9652 0.8785 0.9619 0.9505 0.9693 0.8804
Sensor D3EB - With Adaptation - XX
Figure 12: On the left hand side are the R2 scores for the XX transfer experiment on data from the D3EB sensor before the sensor swap was corrected. On the right hand side are results after the swap was corrected. Correction of the CO ↔ NOx swap led to significant improvement in performance across all methods and transfer experiments
20 25 30 35
−0.005
−0.004
−0.003
−0.002
−0.001
0
0.001
0.002
−0.19
−0.18
−0.17
−0.16
−0.15
−0.14
−0.13
Sensor: D3EB | Trained on: B-W
Temperature (°C)
Weight
Bias
1.00 0.75 0.50 0.25 0.00 0.25 0.50 0.75 1.00 R2 Score Difference (S5 - S2)
0.0
0.2
0.4
0.6
0.8
1.0
1.2
1.4
1.6
Density
Distribution of R2 Score Difference (S5 - S2) by Group
Transfer Category (n=obs) suspect to suspect (n=128) suspect to non-suspect (n=384) non-suspect to suspect (n=384) non-suspect to non-suspect (n=384)
Figure 13: Correcting the sensor swap led to significant improvement in the smoothness of the model parameters (as compared to Figure 10) and the distributions of the S5-S2 scores (as compared to Figure 11).
19

0.05 0.10 0.15 0.20 0.25 0.30 0.35 0.40 0.45 0.50
Model Compression Factor
100
10 1
10 2
10 3
10 4
0
10 4
10 3
10 2
10 1
100
R2 non-compressed - R2 compressed
Median R2 Drop on Various Train Sites (5A2D)
Training Site B-W B-S
C-W C-S
G-W G-S
T-W T-S
0.05 0.10 0.15 0.20 0.25 0.30 0.35 0.40 0.45 0.50
Model Compression Factor
100
10 1
10 2
10 3
10 4
0
10 4
10 3
10 2
10 1
100
R2 non-compressed - R2 compressed
Median R2 Drop on Various Train Sites (D3EB)
Training Site B-W B-S
C-W C-S
G-W G-S
T-W T-S
Figure 14: RESPIRE models are compressible. The figures show negligible difference in prediction R2 scores even when the model is compressed more than 90%.
20

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:04.456Z
- **Text Length:** 69954 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 20 of 20
