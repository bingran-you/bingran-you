# PDF Document: Rahal et al. - 2025 - Prediction of Retention Time in Larger Antisense Oligonucleotide Datasets using Machine Learning.pdf

**File Path:** Rahal et al. - 2025 - Prediction of Retention Time in Larger Antisense Oligonucleotide Datasets using Machine Learning.pdf

**Processed Date:** 2026-02-10T18:15:58.246Z

**File Size:** 942.37 KB

**Total Pages:** 17

**Extracted Pages:** 17

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3679

**Title:** Prediction of Retention Time in Larger Antisense Oligonucleotide Datasets using Machine Learning

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Prediction of Retention Time in Larger Antisense Oligonucleotide Datasets using Machine Learning
Manal Rahala, Bestoun S. Ahmeda, Christoph A. Bauerb, Johan Ulanderb and Jörgen Samuelssonc
aDepartment of Mathematics and Computer Science, , Karlstad 651 88, , Sweden bData Science and Modelling, Pharmaceutical Sciences, R&D, AstraZeneca, , Gothenburg, , Sweden cDepartment of Engineering and Chemical Sciences, , Karlstad 651 88, , Sweden
ARTICLE INFO
Keywords:
Machine learning comparison analysis model optimization oligonucleotides retention time
ABSTRACT
Antisense oligonucleotides (ASOs) are nucleic acid molecules with transformative therapeutic potential, especially for diseases that are untreatable by traditional drugs. However, the production and purification of ASOs remain challenging due to the presence of unwanted impurities. One tool successfully used to separate an ASO compound from the impurities is ion pair liquid chromatography (IPC). It is a critical step in separation, where each compound is identified by its retention time (tR) in th-
e IPC. Due to the complex sequence-dependent behavior of ASOs and variability in chromatographic conditions, the accurate prediction of tR is a difficult task. This study addresses this challenge by applying machine learning (ML) to predict tR based on the sequence characteristics of ASOs. Four ML models—Gradient Boosting, Random Forest, Decision Tree, and Support Vector Regression- were evaluated on three large ASOs datasets with different gradient times. Through feature engineering and grid sear-
ch optimization, key predictors were identified and compared for model accuracy using root mean square error, coefficient of determination R-squared, and run time. The results showed that Gradient Boost performance competes with the Support Vector Machine in two of the three datasets, but is 3.94 times faster to tune. Additionally, newly proposed features representing the sulfur count and the nucleotides residing at the first and last positions of a sequence found to improve the predictive power o-
f the models. This study demonstrates the advantages of ML-based tR prediction at scale and provides insights into interpretable and efficient utilization of ML in chromatographic applications.
1. Introduction
Oligonucleotides are nucleic acid-based molecules that target undruggable proteins in the human body for therapeutic purposes Thakur et al. (2022). Among them, Antisense oligonucleotides (ASOs), which are short, chemically modified, single-stranded DNA or RNA-based molecules that can target specific genes in the human system and influence their activity (Enmark et al. (2022), Roberts et al. (2020)). Recent advances in molecular biology have been mainly associated with the use of ASOs in advanced t-
herapeutic applications Egli and Manoharan (2023). Despite their transformative therapeutic potential, ASO production remains complex due to the presence of large amounts of impurities. These impurities must be analyzed and removed before an ASO can be administered as a drug, which significantly increases analysis costs. Given the innovative benefits of ASOs and the complexity of production, several approaches have been explored to optimize the analysis process. Among these approaches, machine lea-
rning (ML) is one of the most promising methods in terms of prediction accuracy. The separation process is considered difficult to perform analytically, given the nature of ASO and its closely related impurities Enmark et al. (2022). One of the most commonly used techniques to identify an ASO full-length product (FLP) and the produced impurities is ion-pair liquid chromatography (IPC) coupled with mass spectrometry Enmark et al. (2022). In IPC, the time a compound spends in the column before eluti-
ng is called retention time (tR), it is calculated from injection time to elution Moruz and Käll (2017). The method involves distributing the compounds between two phases, a mobile phase containing a mixture of water and an organic solvent that is continuously pumped through the stationary phase. Figure 1 illustrates the separation and identification steps in an IPC system.
manal.rahal@kau.se (M. Rahal); bestoun@kau.se (B.S. Ahmed); christoph.bauer@astrazeneca.com (C.A. Bauer); johan.ulander@astrazeneca.com (J. Ulander); jorgen.samuelsson@kau.se (J. Samuelsson) ORCID(s): 0000-0002-6035-6944 (C.A. Bauer)
: Preprint submitted to Elsevier Page 1 of 17
arXiv:2511.15753v1 [q-bio.OT] 19 Nov 2025

Oligonucleotide sample
Sample is injected into the column
1
3
tR
Signals from the detector
Detector
2
Start
The mobile phase is continuously pumped through the column
Separation happens inside the column
Detector detects eluting compounds
4
AAAAAAAAAAAAAAAAAA 8,680 C*A*C*G*T*G*ACTATG-P=O 7,431 GTGGGCCCAC 6,805 T*C*A*T*T*A*G*A*A*T*T*A 7,657
AAAAAAAAAAAAAAAAAA 12,971 C*A*C*G*T*G*ACTATG-P=O 10,259 GTGGGCCCAC 9,007 T*C*A*T*T*A*G*A*A*T*T*A 10,656
AAAAAAAAAAAAAAAAAA 20,123 C*A*C*G*T*G*ACTATG-P=O 14,508 GTGGGCCCAC 14,542 T*C*A*T*T*A*G*A*A*T*T*A 15,758
G1 - 11 min
G2 - 22 min
G3 - 44 min
5
Record tR for the eluted compounds
Time
Figure 1: Demonstration of the separation process of an ASO sample through IPC. Chemical modification is denoted by *.
First, the ASO sample is injected into the column, where the mobile phase helps to carry the sample through. As they propagate through the column, each compound in the mixture interacts differently with the stationary phase, resulting in separation. Some compounds elute early, while others strongly interact with the stationary phase and are retained longer inside the column. In this case, the amount of organic solvent is increased to decrease the strong interaction and control the tR. The change i-
n the amount of the organic solvent over time is called a gradient. As the compounds exit the system, they are detected. The recorded tR depends on sequence-specific properties and is measured at the peak of the signal. The uniqueness property of the tR allows for the identification of compounds. Recent studies have explored empirical and ML methods for predicting tR. This is feasible given the correlation between tR and nucleotide bases that form an ASO sequence. Mathematical models rely on nucle-
otide composition but struggle under varying experimental conditions. On the other hand, ML models, especially Support Vector Regression (SVR), have demonstrated improved performance due to their ability to model non-linear relationships. In an advanced stage, predicting tR would inform the selection of the optimal conditions for the separation of oligonucleotide compounds Enmark et al. (2022). As a result of knowing the optimal conditions for analysis, a controlled and reduced number of physical -
experiments are then required Samuelsson et al. (2019), thus significantly reducing experimentation costs and accelerating research in this field. The ability to transform the physiochemical properties of an ASO sequence into numerical quantities that an ML model understands offers remarkable prospects for optimization. Although current prediction approaches provide satisfactory results, there is a lack of understanding of their predictive power compared to other classically used ML models. Additi-
onally, these models are often trained on small datasets and lack comparative evaluations with alternative ML approaches on larger ASO datasets. One of the key focuses of this paper is to address this gap and evaluate the performance of various ML models compared to the methods currently in use. The second point of interest is to understand the influence of multiple features on the prediction of tR and to identify the most important predictors. This paper aims to show the application of ML for pre-
dicting tR in large datasets of synthetic ASO compounds. Given that the current application of ML in the case of tR prediction is limited to specific models, this paper presents a comparative perspective to fill this gap. It also aims to analyze and compare the performance of the various ML models in terms of multiple evaluation criteria. ML models are applied to three synthetic ASO datasets, where performance is evaluated according to three evaluation criteria: root mean square error (RMSE), R-sq-
uared coefficient of determination (R2), and run time. The input data are identically pre-processed before the application of each model to ensure a fair comparison. The contribution of this paper is summarized as follows:
1. Provide a comprehensive view on the use of ML in the optimization of chromatography applications 2. Perform in-depth analysis of the performance of multiple ML models to predict tR in large ASO datasets.
: Preprint submitted to Elsevier Page 2 of 17

3. Evaluate the impact of newly proposed features on the prediction of tR.
The remainder of this paper is organized as follows. Section 2 describes the work done in the application of tR prediction, highlighting the common use of the support vector machine (SVM) method in the literature. Since this paper follows an experimental approach, the experimental dataset is described in Section 3.1 and the work methodology is described in Section 3. Section 4 presents the results of the performance-based evaluation and the analytically deduced conclusions. Section 5 presents the -
overall summary of the work.
2. Related work
The prediction of tR in IPC has various applications besides protein identification. In particular, predictions are used to optimize experiments in silico before performing physical experiments. In this context, digital simulations are critical to narrow down the number of physical experiments performed. Combined with the prediction of other chromatography parameters, chemists can easily learn useful information about the behavior of the compounds. Therefore, partial or full automation of this pro-
cess is much needed to improve the ASOs analysis methods and infer valuable insights. For these reasons, many researchers have investigated the prediction of the retention behavior of nucleotide sequences. The research efforts investigated two types of nucleic acid compounds (peptides and oligonucleotides) using a wide range of methods (mathematical and ML approaches) and various composition modifications (such as phosphorothioated and non-phosphorothioated). To date, the different approaches to p-
redict the tR of oligonucleotides are few compared to peptides Enmark et al. (2022). In the literature, there are only a few notable models that predict tR for IPC separation of oligonucleotides, including Gilar et al. (2002), Sturm et al. (2007), Studzińska and Buszewski (2015), Liang et al. (2018), and Kohlbacher et al. (2006). Researchers used multiple approaches that can be grouped into non-ML and ML-based methods. In fact, the oligonucleotide prediction methods started and evolved with simple-
 mathematical models, most notably the model proposed in Gilar et al. (2002). The mathematical model considers five input variables, mainly representing the amount of each nucleotide and the total length of the sequence. The model then calculates the contribution of each nucleotide and predicts the tR. Gilar’s model performed well at high temperatures. However, the accuracy decreased significantly at low temperatures because of the influence of low temperatures on the compound’s structure, making -
it difficult to predict. Despite their advantages of ease of use and effectiveness with small datasets, non-ML methods did not deliver excellent prediction performance Enmark et al. (2022). In particular, these models have limitations in fully leveraging the potential of all features within the oligonucleotide sequence. Nevertheless, Gilar et al.’s successful mathematical model Gilar et al. (2002) was considered a notable milestone in advancing research in this field. The limitations in Gilar et a-
l. (2002) motivated other researchers, such as in Kohlbacher et al. (2006); Sturm et al. (2007), to develop more generalized models based on machine learning, inspired by the use of Support Vector Machines (SVM) in peptides. Although the SVM model was trained on only 72 oligonucleotide sequences, it has significantly improved prediction accuracy compared to the non-ML approaches. This improvement was due to the model’s capability to represent nonlinear relationships Sturm et al. (2007). In fact, b-
ased on the successful application of SVM in Kohlbacher et al. (2006), SVM was later used extensively in tR prediction studies, typically using small, curated datasets. In this paper, ML-based methods in the literature have been examined and their performance and applications evaluated to provide a comparative perspective for our approach. ML-based approaches were first used to predict the tR for peptides, which are molecular compounds that share common characteristics with oligonucleotides. One o-
f the earliest ML-based studies is Petritis et al. (2003), where a neural network was trained on approximately 7000 peptides to predict the elution time of 5200 peptides using 20 input features. However, the availability of large experimental data to train the NN significantly limited the practicality of applying ML Moruz et al. (2010). Therefore, the subsequent work in (Klammer et al. (2007), Moruz et al. (2010)) proposed variations of the SVM-based models that can be adequately trained using a s-
mall dataset of peptides. In Klammer et al. (2007), the SVR model was introduced as a generalized adaptable approach that predicts with high accuracy, regardless of the experimental conditions. Most importantly, it could achieve high-accuracy predictions using a small training dataset. In Moruz et al. (2010), a new approach to the prediction of tR was presented. Unlike the approach to use experimentally pre-identified peptides to train an ML model, a two-step selection and calibration approach was-
 proposed in Moruz et al. (2010). For the selection stage, a sample denoted as a control sample, consisting of 50 to 100 peptides, was separated under specific experimental conditions. The resulting observed retention times are then used to select a model from a collection of pre-trained SVR models. The control sample was also used to tune the selected model for the experimental conditions that are
: Preprint submitted to Elsevier Page 3 of 17

being evaluated. Once the ML model has been selected and calibrated, it was used to predict the tR on unseen data. Consequently, these advances in prediction approaches for peptides fundamentally guided research efforts to predict the tR of oligonucleotides at a later stage. Following the successful use of SVR in peptides and non-phosphorothioated oligonucleotides, the model was used to predict the tR for phosphorothioated ASOs in Enmark et al. (2022). The dataset was around 100 ASO compounds, wh-
ere the influence of three different gradient runs on the retention behavior was investigated. It is important to note that phosphorothioated ASOs are chemically modified oligonucleotides in which the oxygen atom is replaced with a sulfur atom in the backbone of the phosphate group, resulting in a more stable compound Khvorova and Watts (2017). In contrast to Sturm et al. (2007), the frequencies of nucleotide bases A, T, C, and G in a sequence were found to be more important than other extracted f-
eatures. In addition, when compared with Gilar et al. model, SVR remarkably performed better at accurately predicting tR, achieving lower RMSE at all gradient slopes. Recent advancements in ML approaches have further improved tR prediction. Liu et al. Liu et al. (2024) leveraged deep learning models with large-scale data sets such as MassBank to improve the prediction accuracy of small molecule retention in liquid chromatography, showcasing the power of deep learning to manage variability and stan-
dardization challenges. Randazzo et al. applied ML models, specifically XGBoost, to predict tR for small molecules in nano-HPLC, highlighting that ensemble approaches significantly improved prediction accuracy compared to traditional methods Randazzo et al. (2020). Furthermore, Wolfer et al. showed that the use of ML in UPLC-MS for the identification of metabolites in untargeted profiling was highly effective, further supporting the importance of model choice and optimization for chromatographic a-
nalysis Wolfer et al. (2016). To date, most research in tR prediction for ASOs has focused on small datasets (typically around 100 compounds) and relied primarily on SVR models. While SVR is efficient and has demonstrated high accuracy, little is known about how it compares with other ML models in larger ASO datasets under varying experimental conditions. This paper aims to fill this gap by evaluating and comparing four ML models (SVR, Gradient Boosting, Random Forest, and Decision Tree) on three -
large ASO datasets. It also investigates the impact of newly proposed sequencederived features on the prediction accuracy.
3. Methodology
This section outlines the dataset and the ML pipeline used to predict the tR for the ASO compounds described in Section 3.1. The rationale for selecting specific predictive features, the motivation behind the choice of ML models, and the overall experimental design is thoroughly described. All steps, including data preprocessing, feature extraction, model training, hyperparameter tuning, and performance evaluation, were implemented in Python 3.9.7 using Scikitlearn 0.24.2 and other relevant librar-
ies.
3.1. Dataset
The data used in this experiment are obtained from three chromatography experiments on three different gradient times, gradient one (G1 = 11 min), gradient two (G2 = 22 min), and gradient three (G3 = 44 min). In analytical chemistry, the selection of the gradient time for separation is determined by balancing the efficiency of separation and cost. The separation scientist aims to extrapolate the optimal condition by finding a sufficiently good separation performance within a short time. A narrower-
 range would make the construction of three distinct gradient models more challenging, and a wider range would affect the execution time of the experiments. Therefore, G2 was selected as a balanced reference for both run time and separation performance. Then, a shorter (G1) and a longer time (G3) were selected to ensure enough variability in the chromatography conditions, leading to sufficient differences in the performance of the different ML models for each gradient time. However, a very short t-
ime will not be good enough from a chemistry point of view, as separation will compounds will not separate as they should. The change in the gradient concentration results in a new tR for each unique compound, as illustrated in Figure 1. The tR of the compounds, recorded at the three gradient runs, is the target variable in this experiment. During each of the gradients, 45 different FLPs of ASOs compounds go through the separation process, where each FLP loses one nucleotide at a time, and a new c-
ompound is produced. As the newly separated compound, commonly known as a shortmer, exits the system, it is detected by the detector as a signal. Then tR is calculated for every detected signal, as illustrated in Figure 1. This process results in the collection of a total of 876 non-null tR data points corresponding to FLPs and their separated shortmers. The recorded tR is specific to the chosen gradient run, thus resulting in three different datasets of ASO compounds and tR pairs, one for each gr-
adient run. As a result, the
: Preprint submitted to Elsevier Page 4 of 17

Table 1
Sample of the ASO compounds and their observed tR per each gradient time.
# Sequence tR (min)
G1 (11 min) G2 (22 min) G3 (44 min)
1 T*C*A*TTAGAA*T*T*A 7.901 11.113 15.921
2 T*C*A*TTAGAA*T*T*A-P=O 7.869 11.031 15.775
3 C*A*TTAGAA*T*T*A 7.624 10.510 14.699
4 C*A*TTAGAA*T*T*A-P=O 7.608 10.444 14.601
5 A*TTAGAA*T*T*A 7.298 9.841 13.346
6 A*TTAGAA*T*T*A-P=O 7.282 9.711 13.134
Table 2
Percentages A, T, C, and G in the first and last positions in ASO sequences.
Nucleotide base % of nucleotide base
in first position
% of nucleotide base
in Last position
A 24.4% 44.1%
T 27.9% 14.7%
C 23.3% 31.0%
G 24.1% 10.0%
size of the data in G1 and G2 is 876 data points, while G3 includes 870 non-null data points. An example of an FLP and its separated compounds is illustrated in Table 1 along with the gradient-specific retention times. Each sequence of ASO compounds is a combination of four different nucleotide bases adenine (A), thymine (T), cytosine (C), and guanine (G). These bases form specific pairs (A with T and G with C), together forming a sequence that is an input for the ML model. The sequence could incl-
ude other atoms, such as sulfur. In this dataset, sulfur atoms are denoted in *, forming partially or fully phosphorothioated sequences. The raw data consist of 876 unique phosphorothioated and non-phosphorothioated synthetic ASO sequences and their experimentally obtained retention times. The dataset includes 8-, 12-, 16-, and 20-long ASO sequences. The compounds were chosen so that A, T, C, and G are randomly combined at different positions in the sequence. Of the 876 compounds, 79.6% are partia-
lly or fully phosphorothioated with sulfur. A sequence ending with -P=O denotes the loss of a sulfur atom at any position in the sequence. Regarding the nucleotide base in the first position, it is almost equally distributed among the four nucleotide bases. However, for the last position, 75.1% have either A or C at the end of the sequence, with A dominating at 44.1%. The range of observed tR differs among the three gradient times. The higher the gradient, the slower a compound elutes. Therefore, -
the longer a compound can be retained in an IPC system. The maximum recorded tR for G1, G2, and G3 is 9.395, 14.762, and 21.795 min, respectively. In fact, most compounds elute in a specific time window, as shown in Figure 2.
3.2. Feature Extraction
The feature selection process is crucial to the performance of ML models. Fortunately, the composition of the ASOs sequences allows various features to be derived. In this paper, the iterative process combined with domain knowledge expertise allowed stepwise experimentation and a selection of features to be included. Table 3 below describes the characteristics that were derived from the input data and included in the comparison analysis as independent variables. For simpler reporting and analysis,-
 the derived features were grouped into five categories: COUNT, CONTACT, SCONTACT, SuCOUNT, and POSITION. The COUNT group includes four features that represent the frequency of each nucleotide and the total length of the sequence. CONTACT group includes the ordered occurrences of dinucleotides, a total of 16 features. SCONTACT is similar to the CONTACT group but captures the frequencies of the
: Preprint submitted to Elsevier Page 5 of 17

23456789
4
6
8
10
12
14
16
18
20
Retention time (min)
Sequence length
(a) Gradient 1 (11 min)
2 3 4 5 6 7 8 9 10 11 12 13 14 15
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
Retention time (min)
Sequence length
(b) Gradient 2 (22 min)
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23
4
6
8
10
12
14
16
18
20
Retention time (min)
Sequence length
(c) Gradient 3 (44 min)
Figure 2: Distribution of tR across G1, G2, and G3
unordered di-nucleotides and has six features. SuCOUNT represents the total number of sulfur atoms in a sequence. Finally, the POSITION group identifies the nucleotides in the first and last positions of a sequence. The first three groups of features were inherited from a previous study Sturm et al. (2007). In this paper, the POSITION and the SuCOUNT features were introduced as new groups to be investigated, and their impact on the models’ predictive power was analyzed. In total, 30 features were -
derived from the compounds’ sequences, forming the ML input data from all three datasets.
: Preprint submitted to Elsevier Page 6 of 17

Table 3
Overview of the derived groups of characteristics and description.
Feature group: number Number of features Feature description
COUNT: 1-4 4 features Frequencies of nucleotide bases A, T, C, and G in a sequence
COUNT: 5 1 feature Length of a sequence
CONTACT: 6 - 21 16 features Frequency of occurrences of ordered di-nucleotides i.e.,
frequency of occurrence of AA, AT, AC, AG, TA, TT, TG,
TC, CA, CT, CG, CC, GA, GT, GG, and GC.
SCONTACT: 22 - 27 6 features Frequency of occurrences of unordered di-nucleotides
i.e the occurrence of AT_TA, AG_GA, AC_CA,
GT_TG, CT_TC, CG_GC
SuCOUNT: 28 1 feature Number of sulfur atoms in a sequence
POSITION: 29 1 feature Nucleotide base in the first position
POSITION: 30 1 feature Nucleotide base in the last position
Table 4
A sample of the encoded data fed to ML models as input data.
Sequence Fa Ft Fg Fc Length AT AC TA TG GA CT AT_TA AC_CA TG_GT GA_AG CT_TC Fsulf First Last
TG*ACTATG 2 3 2 1 8 1 1 1 2 1 1 2 1 2 1 1 2 1 3
In ML problems, the features strongly influencing the target variable are often unknown. Therefore, testing all possible combinations of features is necessary to realize the best estimator. In previous research, the COUNT group of features was recognized as highly influential in predicting tR Enmark et al. (2022). However, other feature groups were shown to be less influential and only increase computational time. This paper tests all 31 possible combinations of feature groups and outputs the best-
-optimized estimator combined with the optimal feature selection.
3.3. Motivation for the selection of models
As part of this paper, several ML models were selected and evaluated in the three datasets. The careful selection of models resulted in the choice of Random Forest (RF), Gradient Boosting (GB), Decision Tree (DT), and SVR algorithms. Since being introduced in 2001 Breiman (2001), the RF algorithm has proven to be a successful algorithm for classification and regression problems Esteve et al. (2023). The algorithm is based on randomly selecting input samples from the training set to build the predi-
ctor trees. In addition to bagging, another aspect of randomization is introduced through the randomized selection of features at each node Dai et al. (2022). Then, the aggregated prediction decision is made by averaging the predictions of the individual trees Esteve et al. (2023). RF is an ensemble-based algorithm built to reduce overfitting and increase accuracy Chung et al. (2023). Given its work method, RF is considered a relatively robust, simple, and fast algorithm for outliers. The RF algor-
ithm is described in detail in Breiman (2001). The second selected algorithm is GB. GB is another ensemble-based algorithm with high prediction accuracy compared to other models Chung et al. (2023). Boosting is an approach that improves the predictive power of a learning algorithm by iteratively combining weak learners Bentéjac et al. (2021). This iterative process of increasing the weights of the wrongly classified examples results in a relatively accurate model Bentéjac et al. (2021). GB is one -
form of regression tree boosting, which is based on gradient descent minimization Chung et al. (2023). Regarding the DT algorithm, it follows the divide-and-conquer strategy to represent the learned knowledge, mimicking human reasoning Bentéjac et al. (2021). The advantage of the DT algorithm comes from its ability to break down complex decisions into explainable ones such that the selection rules are represented in the branches of the tree Bukhari et al. (2022). The algorithm is considered fast a-
nd efficient with small datasets and results in a group of rules used in the prediction of unseen data Mahoto et al. (2023). In fact, interpretability is considered one of the most
: Preprint submitted to Elsevier Page 7 of 17

Fa: 2 Ft: 3 Fg: 2 Fc: 1 Length: 8
AT: 1 AC: 1 TA: 1 TG: 2 GA: 1 CT: 1
AT_TA: 2 AC_CA: 1 TG_GT: 2 AG_GA: 1 CT_TC: 1
Fsulf: 2
First: 1 Last: 3
Data Encoding
T*G*ACTATG Machine Learning Application
Figure 3: Encoding the composition characteristics of an ASO sequence into quantitative features in preparation for the application of ML models.
significant advantages of single-tree models Costa and Pedreira (2023). Since smaller trees are less prone to overfitting, pre-prune and post-prune methods are used to enhance generalizability Yuan et al. (2021). In this sense, the goal is to construct the simplest possible tree with the lowest error value. Finally, SVM was selected because it offers an alternative to other learning methods that aim to minimize the mean squared error. The novelty of SVM comes from the so-called kernel trick, which-
 enables efficient execution of the algorithm Drucker et al. (1999). The SVM method finds two hyper-planes in the high-dimensional space that best separate the data into two classes while maximizing the margin between them Chapelle et al. (1999). An advantage of SVM is that it is relatively insensitive to the size of the training examples in each class Drucker et al. (1999). This characteristic motivated researchers to use this method dominantly in tR estimation. However, it should be noted that t-
he training time of the SVM algorithms can increase considerably in proportion to the size of the training examples Drucker et al. (1999). The SVM is famously used in classification problems but can also be applied to regression problems Kurani et al. (2023), as in this case study. Then, it is called SVR.
3.4. Training and evaluating ML models
Raw data are rarely numeric; they are usually collected as a combination of different types, such as nominal, ordinal, numerical, images, and text. However, several popular ML models can only work with numeric quantities Matos et al. (2022). The model can then deduce the relations among these numerical quantities and learn something useful about the data. In this paper, 30 characteristics were derived from the composition of the compounds and transformed into a comprehensible format by the ML mode-
ls. Figure 3 shows an example of encoding ’T*G*ACTATG’ into values that the ML model understands. Fa, Ft, Fg, and Fc represent the frequency of occurrence of each of the nucleotide bases in the sequence. For example, in the sequence ’T*G*ACTATG’, the adenine nucleotide base occurs 2 times. The second group of features represents the ordered occurrence of dinucleotides, where in this example, the AT dinucleotide occurs only once in the sequence. Whereas, the unordered occurrence of AT_TA is observe-
d twice in the sequence. Two sulfur atoms are present and represented in the Fsulf frequency. The ’First’ and the ’Last’ features, representing the first and last positions in the sequences, are encoded such that A:0, T:1, C:2, G:3. In Figure 3, only the features with non-zero values are shown. As a result of the encoding pre-processing task, the data fed to the ML model includes a dataframe of the encoded numerical representation of each sequence in the form of columns. It should be noted that th-
e feature derivation and encoding process has been applied similarly to the train and test datasets. For every gradient dataset, the data is divided into 80% train set and the remaining 20% is a test set. The test set is never used for developing the ML model, so that part of the data is kept independent from the learned distribution in the train set Karasiak et al. (2022). This allows for fair evaluation and performance comparison among the selected models. For the purpose of a fair comparison, a-
ll models were evaluated on the same test set. Two essential optimization steps were performed for every selected model, involving hyperparameter tuning and optimal feature selection. The two steps were combined, where a three-fold cross-validation grid search was performed for each unique combination of features. The grid search results were evaluated, and the optimal parameters and feature groups per model were recorded. Table 5 summarizes the different combinations of parameters in the grid tha-
t were tested to optimize the performance of the ML models, where the chosen parameters for each of the models are marked in bold. All ML applications, including the hyperparameter tuning, were performed using Python version 3.9.7 and supported by the scikit-learn version 0.24.2 and other relevant libraries.
: Preprint submitted to Elsevier Page 8 of 17

Table 5
Hypertuning parameter grids for the different ML models
Model Parameter Grid
GB
• ’max_depth’: [5, 10, 15, 20, 50]
• ’learning_rate’: [0.001, 0.01, 0.1, 0.2]
• ’n_estimators’: [100, 500, 1000]
• ’max_leaf_nodes’: [2, 5, 10]
RF
• ’n_estimators’: [int(x) for x in [ 10, 82.5, 155, 227.5, 300]]
• ’max_depth’: [int(x) for x in [5, 60, 115, ... 500]]
• ’min_samples_split’: [2, 4]
• ’min_samples_leaf’: [1, 2]
DT
• ’max_depth’: [2, 10, 20, 30, 40, 100]
• ’min_samples_split’: [2, 4, 8]
• ’min_samples_leaf’: [1, 2, 4, 6, 8]
SVR
• ’C’: [1., 21.3877551, 62.16326, ...1000.]
• ’gamma’: [0.1, 0.01, 0.001]
• ’epsilon’:[0.0001, 0.00011111, 0.00012222, 0.0002]
• ’kernel’: ’rbf’
The grid search method used aims to minimize RMSE as an objective function, which refers to the average error between the observed and predicted tR values. RMSE is an absolute error measurement that is commonly used for model fitting, selection, and comparisons with other models Karunasingha (2022). RMSE is given in the following equation:
RMSE =
√ √
√
√1
n
n
∑
i=1
(yi −ŷ i)2 (1)
RMSE is not the only metric observed in our paper. Other evaluation metrics, such as R2 and run time, are also recorded. R2 provides a useful indication of the explained variance in the fitted model Rights and Sterba (2023). Figure 4 describes the steps performed from data preparation to the application of ML, which resulted in the selection of the best estimators. The choice of hyperparameters for each model, except for the SVR, is based on observations made from previous trials with a smaller bu-
t very similar dataset. The choice of hyperparameters for the SVR model is inspired by a previous study by Enmark et al. in which they tested the SVR model Enmark et al. (2022). However, the SVR hyperparameter space has been slightly adjusted for the purpose of achieving a feasible tuning run time.
4. Results and Discussion
Four ML models, SVR, GB, RF, and DT, were trained and evaluated across three ASO datasets (G1, G2, G3). To evaluate the performance of these models, several criteria were selected and reported in Table 6. Figures 5, 6, and 7 visualize the observed versus predicted tR for the ML models tested in G1, G2 and G3, respectively. Accuracy criteria
are reported as RMSE training and test, and R2. In addition, the hyperparameter tuning run time is recorded in minutes.
: Preprint submitted to Elsevier Page 9 of 17

Random split of dataset into 80% train and 20% test datasets.
3. Record evaluation results per features combination per model.
4. Record the best estimator results per model across all features combinations (R2, RMSE, Tuning runtime, Best features).
Remove records with null tR values and duplicate records.
Data Collection from chromatography experiments. 2. Hyperparameter tuning per ML model.
1. Select unique combination of features groups.
Repeat steps 1-4 for the four machine learning models
Repeat steps 1-3 for all unique combinations of the features and record results
Figure 4: From data collection to ML step-by-step block diagram. Data preparation and ML phases are repeated for each of the three datasets.
Table 6
Evaluation of the performance of ML models in train and test datasets for the three gradients.
Gradient ML model RMSE train R2 train RMSE test R2 test Run time (min) Best estimator’s features
Gradient 1
SVR 0.334 0.912 0.442 0.861 404.443 SCONTACT, POSITION
RF 0.295 0.94 0.508 0.772 52.570 CONTACT, SCONTACT
GB 0.368 0.906 0.439 0.830 47.606 COUNT, SCONTACT, POSITION
DT 0.29 0.94 0.501 0.778 0.345 COUNT, CONTACT, POSITION
Gradient 2
SVR 0.641 0.917 0.953 0.783 223.26 COUNT, SuCOUNT
RF 0.586 0.93 0.977 0.772 53.206 COUNT, SuCOUNT, SCONTACT
GB 0.316 0.98 1.021 0.75 47.565 COUNT, SuCOUNT, CONTACT, POSITION
DT 0.505 0.949 0.986 0.767 0.345 COUNT, POSITION
Gradient 3
SVR 1.0 0.92 1.08 0.925 177.494 COUNT, SuCOUNT, CONTACT
RF 1.035 0.942 1.17 0.928 73.284 COUNT, CONTACT, SCONTACT
GB 1.1 0.926 1.18 0.925 108.84 COUNT, POSITION
DT 0.505 0.949 0.986 0.767 0.345 COUNT, POSITION
Finally, the most influential predictors selected by the best estimator in each model are noted. The designed metrics grid allows us to compare the performance of ML models in terms of accuracy, speed, and complexity. Overall, the best estimators across all gradients relied mainly on the length of the sequences and the frequencies of nucleotide bases, in addition to their position. Hence, it is concluded that the features in the COUNT group positively influenced the predictability task. SVR is the-
 least sensitive model to the variations in data points, and RF is the most sensitive. The flexibility of a model is important to achieve accurate predictions, but increased flexibility also leads to learning noise. Furthermore, newly suggested features representing the sulfur count and the nucleotides residing at the first and last positions of a sequence have shown to improve the predictive power of the models, as seen in the G1, G2, and G3 results. The GB model was tuned in 68.0 min compared to-
 the SVR, which, on average, required 4.47 hours. The average tuning run time for the RF model was 59.68 and 0.34 min for the DT model. The DT model was the fastest among all
: Preprint submitted to Elsevier Page 10 of 17

2 3 4 5 6 7 8 9 10 Observed tR(min)
3
4
5
6
7
8
9
Predicted tR(min)
(a) SVR
2 4 6 8 10 Observed tR(min)
3
4
5
6
7
8
9
Predicted tR(min)
(b) Gradient boost
2 4 6 8 10 Observed tR(min)
3
4
5
6
7
8
9
Predicted tR(min)
(c) Random Forest
2 3 4 5 6 7 8 9 10 Observed tR(min)
3
4
5
6
7
8
9
Predicted tR(min)
(d) Decision tree
Figure 5: Observed versus predicted tR for G1 test dataset.
three models, with a remarkable difference in run time, but yielded the highest error across all three datasets due to overfitting.
4.1. Performance on the G1 dataset
In terms of RMSE, the models performed best in the G1 dataset. This is expected given that the G1 data are the least noisy among the three datasets. In the G1 dataset, the performance of SVR and GB was relatively close, with GB performing slightly better than SVR as shown in Figure 5. GB achieved an RMSE test of 0.439 min in G1, while SVR recorded 0.442 min. SVR utilized 8 of the 30 features to achieve the best result, while GB needed an additional 5 features to achieve a similar result. However, -
the hyperparameter tuning of the SVR model was 8.49 times slower than GB. On average, tuning the SVR was the most computationally expensive, recording the slowest run time in the G2 dataset at 6.74 hours. SCONTACT and POSITION, the newly introduced features, were identified together or individually as important features for achieving the lowest average error. This shows that the arrangement of di-nucleotides has a certain influence on the prediction of tR. In addition to SCONTACT and POSITION, GB -
utilized the COUNT group of features to achieve the lowest RMSE. COUNT group is expected to be of great importance, as proven in (Enmark et al., 2022).
4.2. Performance on the G2 dataset
For the G2 dataset, SVR and RF competed for the first and second best performing models. SVR outperformed RF with RMSE test of 0.953 min. However, the RF hyperparameter tuning was 4.16 times faster and produced results in 53.2 min. In this dataset, COUNT and SuCOUNT were shown to be influential in achieving the best results. In addition to both groups, RF also identified the SCONTACT group as important.
4.3. Performance on the G3 dataset
The four models were also trained and tested in the G3 dataset, and RF showed the best performance. All models performed poorly in this dataset compared to their performance in the G1 dataset. This is due to the volatility and the experimental noise reflected in the G3 data. The noisy nature of this dataset also influenced the hyperparameter optimization time, as it significantly increased the average time for RF and GB by 1.81 times. GB was always the fastest across all gradients. However, SVR re-
corded the lowest tuning run time compared to G2 and G1 despite the sensitive nature of the data in G3. But, SVR remained computationally expensive compared to the other three models. As the best-performing model on this dataset, SVR identified that the COUNT, SuCOUNT, and CONTACT features are all important. This suggests that the ordered arrangement of di-nucleotides can impact the prediction error.
4.4. G3 In-Depth Error Analysis
The poor performance of the different ML models in G3, compared to G1 and G2 datasets, is explained by the noisiness and unpredictable nature of this dataset. Therefore, an in-depth error analysis is performed on the G3 dataset to understand the least predictable compounds. The results of the analysis are shown in Table 7, 8, and 9. The G3 test dataset includes 173 unique ASO compounds. In total, 95 predicted values of tR were underestimated by the bestperforming SVR model, and 78 predictions were-
 overestimated. The histogram in Figure 8 shows the tendency of the SVR model to underestimate tR. The residual plot in Figure 8 shows the predicted values on the x-axis and the residual values on the y-axis. The residual values are calculated by subtracting the predicted tR values from the observed tR
: Preprint submitted to Elsevier Page 11 of 17

2 4 6 8 10 12 14 16 Observed tR(min)
4
6
8
10
12
14
Predicted tR(min)
(a) SVR
2 4 6 8 10 12 14 16 Observed tR(min)
4
6
8
10
12
14
Predicted tR(min)
(b) Gradient boost
2 4 6 8 10 12 14 16 Observed tR(min)
4
6
8
10
12
14
Predicted tR(min)
(c) Random Forest
2 4 6 8 10 12 14 16 Observed tR(min)
4
6
8
10
12
14
Predicted tR(min)
(d) Decision tree
Figure 6: Observed versus predicted tR for G2 test dataset.
0 5 10 15 20 25 Observed tR(min)
2.5
5.0
7.5
10.0
12.5
15.0
17.5
20.0
Predicted tR(min)
(a) SVR
0 5 10 15 20 25 Observed tR(min)
2.5
5.0
7.5
10.0
12.5
15.0
17.5
20.0
22.5
Predicted tR(min)
(b) Gradient boost
0 5 10 15 20 25 Observed tR(min)
2.5
5.0
7.5
10.0
12.5
15.0
17.5
20.0
22.5
Predicted tR(min)
(c) Random Forest
2 4 6 8 10 12 14 16 Observed tR(min)
4
6
8
10
12
14
Predicted tR(min)
(d) Decision tree
Figure 7: Observed versus predicted tR for G3 test dataset.
10 8 6 4 2 0 2 4 Residual
0
20
40
60
80
100
120
140
Frequency
(a) Histogram showing the frequency of overestimated and underestimated predictions.
0 5 10 15 20 Predicted tR(min)
10
8
6
4
2
0
2
4
Residual
(b) Residual plot showing the difference (min) between the observed and the predicted tR
Figure 8: Error Analysis plots referring to the test results of the optimized SVR model on G3 dataset.
values. Positive residual values represent underestimated predictions, and negative residual values represent overly estimated predictions values. Based on the error analysis visualizations in Figure 8, the anomalies that had the highest residuals, whether they were over- or underestimated, are described in Table 7. The sequences listed in Table 7 had residual values greater than one or less than -1. Table 7 shows that all ASO sequences with large residuals have lost a sulfur atom, which is repres-
ented by (-P=O) at the end of the sequence. The majority of the ASO sequences are 20 nucleotide long and fully phosphorothioated. A similar histogram and residual plot are plotted for the RF results as shown in Figure 9. Consequently, the sequences corresponding to the highest residual values are listed in Table 8. Except for sequence #4 in Table 7, all sequences that were greatly over- or underestimated by the SVR were also difficult to accurately predict by the RF
: Preprint submitted to Elsevier Page 12 of 17

Table 7
ASO sequences with the highest residual values in the G3 dataset. SVR predictions are labeled as over- or underestimated based on the calculated negative or positive values of residuals.
# Sequence Observed tR Predicted tR Residual Over/underestimation
(min) (min) (min)
1 G*T*G*G*G*T*G*G*G*T*G*G*G*T*G*G*G*T-P=O 6.363 16.927 -10.563 overestimated
2 A*T*C*A*G*T*A*T*T*A*A*A*A*T*T*T*T*C*A-P=O 12.951 20.392 -7.441 overestimated
3 A*C*T*A*T*G-P=O 2.371 4.909 -2.537 overestimated
4 T*T*T*T*T*T*T*T*T*T*T*T*T*T*T*T*T*T-P=O 19.701 20.770 -1.069 overestimated
5 T*TTATCGGCGGG*A*A*C*A-P=O 20.552 18.551 2.000 underestimated
6 A*T*C*G*G*C*G*G*G*A*A*C*A-P=O 19.746 15.819 3.926 underestimated
12 10 8 6 4 2 0 2 4 Residual
0
20
40
60
80
100
120
Frequency
(a) Histogram showing the frequency of overestimated and underestimated predictions.
0 5 10 15 20 Predicted tR(min)
12
10
8
6
4
2
0
2
4
Residual
(b) Residual plot showing the difference (min) between the observed and the predicted tR
Figure 9: Error Analysis plots referring to the test results of the optimized RF model on G3 dataset.
model. However, in the case of RF, the list of sequences with large residuals is longer, ranging between -11.3 and 3.98. All the sequences are fully or partially phosphorothioated sequences, of which 40% have lost a sulfur atom. In Figure 10, both the histogram and the residual graph are presented for the GB estimator that performs the best. Sequences commonly recognized by SVR as difficult to predict also had high residual values in the GB results, as shown in Table 9.
5. Conclusions and Outlook
This paper addresses the challenge of predicting tR for ASOs in IPC, a critical step in compound identification and impurity analysis. For this purpose, the performance of four ML models, SVR, GB, RF, and DT, on three large ASO datasets under varying gradient conditions was investigated. Our results show that SVR achieved the highest prediction accuracy and lowest error across datasets, but required significantly more tuning time. GB offered comparable performance, particularly in low-noise datase-
ts, and was at least five times faster. Newly introduced features, such as SuCOUNT and POSITION, improved model performance across the board. In contrast to earlier studies in literature that were limited to small datasets and single-model evaluations, our comparative analysis offers a broader perspective on multi-model effectiveness for the prediction of tR at scale. The results show that the models incorporating multiple features consistently outperformed those relying solely on COUNT for tR pre-
diction across all tested models. In G3 dataset, the three ML models consistently struggled with sequences longer than 20 nucleotides, fully phosphorothioated, and lost a sulfur atom. The presented models offer promising news for the industrial production, separation, and purification of ASOs. First, the good accuracy of tR prediction allows efficient sample characterization. Based solely on the ASO sequence
: Preprint submitted to Elsevier Page 13 of 17

Table 8
ASO sequences with the highest residual values in the G3 dataset. RF predictions are labeled as over- or underestimated based on the calculated negative or positive values of residuals.
# Sequence Observed tR Predicted tR Residual Over/underestimation
(min) (min) (min)
1 G*T*G*G*G*T*G*G*G*T*G*G*G*T*G*G*G*T-P=O 6.363 17.672 -11.308 overestimated
2 A*T*C*A*G*T*A*T*T*A*A*A*A*T*T*T*T*C*A-P=O 12.951 19.012 -6.061 overestimated
3 C*G*C*G*T*G*T*T*T*T*T*A 14.314 17.490 -3.175 overestimated
4 A*C*T*A*T*G-P=O 2.371 4.280 -1.908 overestimated
5 G*G*C*G*G*G*C*C*A*G*C*A-P=O 13.749 15.291 -1.54 overestimated
6 C*G*G*T*GCCTGGCCCCC 17.460 18.477 -1.016 overestimated
7 A*A*G*G*C*G*G*T*GCCTGGCCCCC 20.091 19.076 1.015 underestimated
8 T*TTATCGGCGGG*A*A*C*A-P=O 20.552 19.453 1.098 underestimated
9 T*A*T*C*T*C*T*A 8.863 7.732 1.131 underestimated
10 A*G*AGCCTGCC*C*G*G*C 17.102 15.742 1.359 underestimated
11 T*T*A*G*A*A*T*T*A 11.210 9.808 1.402 underestimated
12 T*C*G*A*G*A*C*T*A 10.410 8.718 1.692 underestimated
13 T*T*A*T*C*T*C*T*A 10.668 8.736 1.931 underestimated
14 G*G*T*G*G*G*T*G*G*G*T*G*G*G*T*G*G*G*T 17.878 15.501 2.376 underestimated
15 A*T*C*G*G*C*G*G*G*A*A*C*A-P=O 19.746 15.765 3.980 underestimated
10 8 6 4 2 0 2 4 Residual
0
20
40
60
80
100
120
140
Frequency
(a) Histogram showing the frequency of overestimated and underestimated predictions.
0 5 10 15 20 Predicted tR(min)
10
8
6
4
2
0
2
4
Residual
(b) Residual plot showing the difference (min) between the observed and the predicted tR .
Figure 10: Error Analysis plots referring to the test results of the optimized GB model on G3 dataset.
data, the predicted tR can be used to identify a chromatographic peak. The additional availability of mass spectrometric information confirms and solidifies the assignment. Second, and perhaps more important from a sustainability point of view, the ability to predict ASO separation profiles based on sequence reduces the need for extensive physical experiments. The application of tR prediction models may go in lock-step with the development of analytical chemistry methods. The challenges that remai-
n lie in the diversity of ASOs and related compounds; therefore, future research should focus on advanced ML-driven feature engineering, particularly for ASO conjugates and other novel entities emerging in the drug discovery and development field.
: Preprint submitted to Elsevier Page 14 of 17

Table 9
ASO sequences with the highest residual values in G3 dataset. GB predictions are labeled as over- or underestimated based on the calculated negative or positive values of residuals.
# Sequence Observed tR Predicted tR Residual Over/underestimation
(min) (min) (min)
1 A*T*C*A*G*T*A*T*T*A*A*A*A*T*T*T*T*C*A-P=O 12.951 19.223 -6.272 overestimated
2 G*T*G*G*G*T*G*G*G*T*G*G*G*T*G*G*G*T-P=O 6.363 17.325 -10.962 overestimated
3 A*C*T*A*T*G-P=O 2.371 4.447 -2.076 overestimated
4 A*G*A*G*C*C*T*G*C*C*C*G*G*C-P=O 14.996 16.438 -1.442 overestimated
5 T*T*A*T*C*T*C*T*A 10.668 9.432 1.235 underestimated
6 T*TTATCGGCGGG*A*A*C*A-P=O 20.552 18.855 1.697 underestimated
7 A*T*C*G*G*C*G*G*G*A*A*C*A-P=O 19.746 16.251 3.494 underestimated
Some of the threats to validity encountered during this research are outlined in this section. One such threat concerns model performance, which is inherently dependent on the dataset used, potentially affected by noise introduced during experimental trials. Outliers and noise may correspond to some of the wrongly selected peaks during the data collection phase, which imposes an uncertainty risk on the achieved results. However, it is assumed that the models avoid increasing their complexity so as-
 not to explain the special noise cases. Additionally, the nature of the oligonucleotide data, in particular the relationship between shorter and longer sequences, may influence the performance of the ML models.
Acknowledgement
This work was supported by the Swedish Knowledge Foundation via the KKS SYNERGY project “Improved Methods for Process and Quality Controls using Digital Tools—IMPAQCDT” (grant number 20210021). In this project, we are grateful to Gergely Szabados and Patrik Forssén from the Department of Engineering and Chemical Sciences, Karlstad University for their contribution to the experimental work and data preprocessing.
References
Bentéjac, C., Csörgő, A., Martínez-Muñoz, G., 2021. A comparative analysis of gradient boosting algorithms. Artificial Intelligence Review 54, 1937–1967. Breiman, L., 2001. Random forests. Machine Learning 45, 5–32. URL: https://doi.org/10.1023/A:1010933404324, doi:10.1023/A: 1010933404324.
Bukhari, S., Webber, J., Mehbodniya, A., 2022. Decision tree based ensemble machine learning model for the prediction of zika virus t-cell epitopes as potential vaccine candidates. Scientific Reports 12, 7810. doi:10.1038/s41598-022-11731-6. Chapelle, O., Haffner, P., Vapnik, V.N., 1999. Support vector machines for histogram-based image classification. IEEE Transactions on Neural Networks 10, 1055–1064. doi:10.1109/72.788646. Chung, D., Jeong, P., Kwon, D., Han, H., 2023. Technology acceptance pre-
diction of robo-advisors by machine learning. Intelligent Systems with Applications 18, 200197. URL: https://www.sciencedirect.com/science/article/pii/S2667305323000224, doi:https: //doi.org/10.1016/j.iswa.2023.200197.
Costa, V.G., Pedreira, C.E., 2023. Recent advances in decision trees: An updated survey. Artificial Intelligence Review 56, 4765–4800. Dai, Y., Khandelwal, M., Qiu, Y., Zhou, J., Monjezi, M., Yang, P., 2022. A hybrid metaheuristic approach using random forest and particle swarm optimization to study and evaluate backbreak in open-pit blasting. Neural Computing and Applications 34, 1–16. doi:10.1007/ s00521-021-06776-z.
Drucker, H., Wu, D., Vapnik, V.N., 1999. Support vector machines for spam categorization. IEEE Transactions on Neural networks 10, 1048–1054. Egli, M., Manoharan, M., 2023. Chemistry, structure and function of approved oligonucleotide therapeutics. Nucleic Acids Research 51, 2529–2573. URL: https://doi.org/10.1093/nar/gkad067, doi:10.1093/nar/gkad067, arXiv:https://academic.oup.com/nar/article-pdf/51/6/2529/49761413/gkad067.pdf.
Enmark, M., Häggström, J., Samuelsson, J., Fornstedt, T., 2022. Building machine-learning-based models for retention time and resolution predictions in ion pair chromatography of oligonucleotides. Journal of Chromatography A 1671. URL: https://www.sciencedirect. com/science/article/pii/S0021967322001972, doi:https://doi.org/10.1016/j.chroma.2022.462999.
: Preprint submitted to Elsevier Page 15 of 17

Esteve, M., Aparicio, J., Rodriguez-Sala, J.J., Zhu, J., 2023. Random forests and the measurement of super-efficiency in the context of free disposal hull. European Journal of Operational Research 304, 729–744. URL: https://www.sciencedirect.com/science/article/ pii/S0377221722003381, doi:https://doi.org/10.1016/j.ejor.2022.04.024.
Gilar, M., Fountain, K.J., Budman, Y., Neue, U.D., Yardley, K.R., Rainville, P.D., Russell II, R.J., Gebler, J.C., 2002. Ion-pair reversedphase high-performance liquid chromatography analysis of oligonucleotides: Retention prediction. Journal of Chromatography A 958, 167–182. URL: https://www.sciencedirect.com/science/article/pii/S0021967302003060, doi:https://doi.org/10.1016/ S0021-9673(02)00306-0.
Karasiak, N., Dejoux, J.F., Monteil, C., Sheeren, D., 2022. Spatial dependence between training and test sets: another pitfall of classification accuracy assessment in remote sensing. Machine Learning 111, 2715–2740. Karunasingha, D.S.K., 2022. Root mean square error or mean absolute error? use their ratio as well. Inf. Sci. 585, 609—-629. URL: https://doi.org/10.1016/j.ins.2021.11.036, doi:10.1016/j.ins.2021.11.036.
Khvorova, A., Watts, J.K., 2017. The chemical evolution of oligonucleotide therapies of clinical utility. Nature biotechnology 35, 238–248. doi:10.1038/nbt.3765.
Klammer, A.A., Yi, X., MacCoss, M.J., Noble, W.S., 2007. Improving tandem mass spectrum identification using peptide retention time prediction across diverse chromatography conditions. American Chemical Society 79, 6111–6118. doi:https://doi.org/10.1021/ac070262k. Kohlbacher, O., Quinten, S., Strum, M., Mayr, B.M., Huber, C.G., 2006. Structure–activity relationships in chromatography: Retention prediction of oligonucleotides with support vector regression. Angewandte Chemie International Edition 4-
5, 7009–7012. URL: https://onlinelibrary. wiley.com/doi/abs/10.1002/anie.200602561, doi:https://doi.org/10.1002/anie.200602561.
Kurani, A., Doshi, P., Vakharia, A., Shah, M., 2023. A comprehensive comparative study of artificial neural network (ann) and support vector machines (svm) on stock forecasting. Annals of Data Science 10, 183–208. Liang, C., Qiao, J.Q., Lian, H.Z., 2018. A novel strategy for retention prediction of nucleic acids with their sequence information in ionpair reversed phase liquid chromatography. Talanta 185, 592–601. URL: https://www.sciencedirect.com/science/article/pii/ S0039914018303771, doi:https:-
//doi.org/10.1016/j.talanta.2018.04.030.
Liu, Y., Yoshizawa, A.C., Ling, Y., Okuda, S., 2024. Insights into predicting small molecule retention times in liquid chromatography using deep learning. Journal of Cheminformatics URL: https://www.x-mol.com/paper/1843713238096601088.
Mahoto, N.A., Shaikh, A., Sulaiman, A., Reshan, M.S.A., Rajab, A., Rajab, K., 2023. A machine learning based data modeling for medical diagnosis. Biomedical Signal Processing and Control 81, 104481. URL: https://www.sciencedirect.com/science/article/pii/ S1746809422009351, doi:https://doi.org/10.1016/j.bspc.2022.104481.
Matos, L.M., Azevedo, J., Matta, A., Pilastri, A., Cortez, P., Mendes, R., 2022. Categorical attribute transformation environment (cane): A python module for categorical to numeric data preprocessing. Software Impacts 13, 100359. URL: https://www.sciencedirect.com/science/ article/pii/S2665963822000720, doi:https://doi.org/10.1016/j.simpa.2022.100359.
Moruz, L., Käll, L., 2017. Peptide retention time prediction. Mass Spectrometry Reviews 36, 615–623. URL: https:// analyticalsciencejournals.onlinelibrary.wiley.com/doi/abs/10.1002/mas.21488, doi:https://doi.org/10.1002/mas. 21488.
Moruz, L., Tomazela, D., Käll, L., 2010. Training, selection, and robust calibration of retention time models for targeted proteomics. Journal of Proteome Research 9, 5209–5216. doi:https://doi.org/10.1021/pr1005058.
Petritis, K., Kangas, L.J., Ferguson, P.L., Anderson, G.A., Pasa-Tolić, L., Lipton, M.S., Auberry, K.J., Strittmatter, E.F., Shen, Y., Zhao, R., Smith, R.D., 2003. Use of artificial neural networks for the accurate prediction of peptide liquid chromatography elution times in proteome analyses. Analytical Chemistry 75, 1039–1048. doi:10.1021/ac0205154. Randazzo, G.M., Tonoli, D., Hambye, S., Guillarme, D., Jeanneret, F., Nurisso, A., 2020. Machine learning to predict retention time of small molecul-
es in nano-hplc. Analytical and Bioanalytical Chemistry URL: https://doi.org/10.1007/s00216-020-02905-0, doi:10.1007/ s00216-020-02905-0.
Rights, J.D., Sterba, S.K., 2023. R-squared measures for multilevel models with three or more levels. Multivariate Behavioral Research 58, 340–367. URL: https://doi.org/10.1080/00273171.2021.1985948, doi:10.1080/00273171.2021.1985948, arXiv:https://doi.org/10.1080/00273171.2021.1985948. pMID: 35476605.
Roberts, T.C., Langer, R., Wood, M.J.A., 2020. Advances in oligonucleotide drug delivery. Nature Reviews Drug Discovery 19, 673–694. doi:https://doi.org/10.1038/s41573-020-0075-7.
Samuelsson, J., Eiriksson, F.F., Åsberg, D., Thorsteinsdóttir, M., Fornstedt, T., 2019. Determining gradient conditions for peptide purification in rplc with machine-learning-based retention time predictions. Journal of Chromatography A 1598, 92–100. URL: https://www.sciencedirect. com/science/article/pii/S0021967319303115, doi:https://doi.org/10.1016/j.chroma.2019.03.043.
Studzińska, S., Buszewski, B., 2015. Different approaches to quantitative structure–retention relationships in the prediction of oligonucleotide retention. Journal of Separation Science 38, 2076–2084. Sturm, M., Quinten, S., Huber, C.G., Kohlbacher, O., 2007. A statistical learning approach to the modeling of chromatographic retention of oligonucleotides incorporating sequence and secondary structure data. Nucleic acids research 35, 4195–4202. URL: https://doi.org/10. 1093/nar/gkm338, doi:10.1093/-
nar/gkm338.
Thakur, S., Sinhari, A., Jain, P., Jadhav, H.R., 2022. A perspective on oligonucleotide therapy: Approaches to patient customization. Frontiers in Pharmacology 13. URL: https://www.frontiersin.org/articles/10.3389/fphar.2022.1006304, doi:10.3389/fphar.2022. 1006304.
Wolfer, A.M., Lozano, S., Umbdenstock, T., Croixmarie, V., Arrault, A., Vayer, P., 2016. Uplc-ms retention time prediction: A machine learning approach for metabolite identification in untargeted profiling. Metabolomics 12, 1–13. URL: https://link.springer.com/article/10. 1007/s11306-015-0888-2, doi:10.1007/s11306-015-0888-2.
Yuan, Z., Meng, L., Gu, X., Bai, Y., Cui, H., Jiang, C., 2021. Prediction of nox emissions for coal-fired power plants with stacked-generalization ensemble method. Fuel 289, 119748. URL: https://www.sciencedirect.com/science/article/pii/S0016236120327447, doi:https:
: Preprint submitted to Elsevier Page 16 of 17

//doi.org/10.1016/j.fuel.2020.119748.
: Preprint submitted to Elsevier Page 17 of 17

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:58.246Z
- **Text Length:** 60343 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 17 of 17
