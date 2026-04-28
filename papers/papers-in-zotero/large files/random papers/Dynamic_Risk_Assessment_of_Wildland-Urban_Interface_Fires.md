# PDF Document: Hu et al. - Dynamic Risk Assessment of Wildland-Urban Interface Fires.pdf

**File Path:** Hu et al. - Dynamic Risk Assessment of Wildland-Urban Interface Fires.pdf

**Processed Date:** 2026-02-10T18:17:49.621Z

**File Size:** 533.57 KB

**Total Pages:** 22

**Extracted Pages:** 22

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3536

**Title:** Dynamic Risk Assessment of Wildland-Urban Interface Fires

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

1
Dynamic Risk Assessment of Wildland-Urban Interface Fires
Yusheng Hu1, Huaiyi Pan1, Shaobo Zhong2, Liying Zhang3
1. School of Management Science and Engineering, Beijing Information Science and Technology
University, Beijing 102206, China;
2. Institute of Urban Systems Engineering, Beijing Academy of Science and Technology, Beijing
100089, China;
3. School of Science, China University of Mining and Technology-Beijing, Beijing 100083, China
Abstract: Wildland-Urban Interface (WUI) fires represent a compound disaster resulting from the
interactions between natural ecosystems and human settlements, characterized by significantly
dynamic evolving risks. However, most current risk assessment studies are based on static
frameworks, which struggle to effectively capture the dynamic changes in risk over time. To address
this issue, this paper proposes an innovative method that integrates a dynamic evaluation matrix,
grey incidence analysis, and an optimization model for the dynamic risk assessment of WUI fires.
This method incorporates time-series data by constructing a dynamic evaluation matrix,
subsequently calculates the weighted standardized matrix for each evaluated area and its local
volume matrices relative to the positive and negative ideal matrices. The dynamic differences
between the evaluated areas and the ideal state are quantified by calculating the grey incidence
degree, and an optimization model is established to solve for the superiority degree used for risk
ranking. Research demonstrates that this method not only simplifies the computational process but
also effectively captures the dynamic evolution patterns of fire risk across different areas, enabling
refined risk classification. Compared to existing static methods, this framework overcomes their
limitation in adequately representing risk dynamics, providing a more scientific basis for decision
making in the dynamic management and proactive prevention and control of WUI fires.
Keyword: Wildland-Urban Interface; Dynamic Fire Risk Assessment; Ideal Matrix Method; Grey
Incidence Analysis; Superiority Degree
1. Introduction
The world currently faces three major crises: climate change, biodiversity loss, and environmental
pollution, which necessitate a fundamental shift in how humanity coexists with nature. Given this
context, incorporating urban forests into urban planning and construction has become imperative.
This approach fosters harmony between urban areas and the natural environment, establishing a
critical trajectory for ecological urban development in the new century. Indeed, enhancing urban
forest initiative is the most crucial element of urban ecological projects, playing a pivotal role in
improving urban ecology and guiding cities onto a civilized development path defined by
sustainable production, improved livelihoods, and healthy ecosystems.

2
Data from the National Bureau of Statistics reveals that by the end of 2024, China's permanent
resident urbanization rate stood at 67%. This figure has soared by 56% since the end of 1949,
progressing at an average annual rate of 0.75%. This rapid urbanization has drastically escalated the
demand for resources, infrastructure, and services, placing immense strain on natural ecosystems.
In response to national development priorities and to advance the carbon peak and neutrality
objectives, the construction of forest cities has emerged as an urgent imperative. A forest city is a
healthy and stable ecosystem, predominantly of forests and trees, established within a city's
administrative boundaries. It is characterized by urban-rural integration and compliance with
standards for forest networks, forest health, ecological benefits, and culture, thereby achieving
harmonious coexistence between humans and nature.
The development of the forest city concept was pioneered in North America, with the United
States formalizing the term "forest city" in its 1962 Outdoor Recreation Resources Review. A decade
later, the U.S. Urban Forestry Act established legally binding coverage benchmarks, requiring 27%
urban forest coverage, 15% commercial area canopy cover, and 50% suburban forest coverage. This
model was subsequently adopted and advanced throughout the developed world. China's
engagement with this paradigm began in the 1990s. The movement was institutionalized in 2004
with the establishment of the "National Forest City" certification by the National Greening
Committee and the State Forestry Administration (now the National Forestry and Grassland
Administration). The parallel creation of the annual China Urban Forest Forum, guided by the
principle of "Bring forests into cities and let cities embrace forests," served as a strategic catalyst.
This framework aims to safeguard urban ecology, elevate city profiles, and underpin sustainable
regional economic development. The outcomes have been substantial. The roster of National Forest
Cities has expanded to 219 by the end of 2023. Nationally, forest coverage now stands at 24.02%,
with China leading the globe in planted forest area. Urban areas have seen marked improvements
in green coverage, park space per capita, and consecutive annual increases in forest stock,
collectively enhancing biodiversity conservation efforts.
The construction of forest cities inevitably increases the extent of the Wildland-Urban Interface
(WUI), a globally recognized zone of interface between human development and wildland
vegetation. The concept was first defined in the 1970s by Stanford physicist C.P. Butler within forest
fire research as the boundary where concentrations of natural fuels (trees, shrubs, grass) meet
artificial fuels (buildings, structures) [1]. The US Federal Register later provided a formal definition,
characterizing the WUI as the area where human development and activity meet or intermingle with
undeveloped wildland vegetation [2]. This definition clarifies the WUI's three essential elements:
human environments, wildland vegetation, and their dynamic interplay. WUI fires constitute a
distinct category, markedly different from conventional forest fires or urban fires. The complex
interplay of natural and anthropogenic factors in these areas creates an exceptionally high risk.
Uncontrolled WUI fires frequently lead to disasters with substantial socio-economic losses.

3
Consequently, nations such as the United States, Canada, and Australia have long emphasized WUI
fire research, a field that has demonstrably expanded in scale over recent decades. For China, the
rapid advancement of its forest city initiative, alongside current limitations in fire prevention and
suppression capacity, highlights a critical research gap. Undertaking systematic WUI fire risk
assessments and formulating targeted control strategies is thus an imperative for improving
governance efficacy and mitigating the frequency and consequences of these destructive fires.
Currently, most studies on WUI fire risk assessment focus on static evaluations, predominantly
based on traditional risk assessment frameworks. These approaches typically conduct overlay
analyses of fire hazards, vulnerability, and exposure levels but neglect the dynamic systemic nature
of WUI fire risks. Given that these risks evolve over time, integrating dynamic assessment is crucial
for enhancing the accuracy and scientific rigor of evaluations. To address this, our study employs
the ideal matrix method to construct a similarity incidence analysis model for dynamic fire risk
assessment. By calculating superiority degree to which the weighted standardized evaluation matrix
of evaluated area aligns with the positive ideal matrix, this model ranks the fire risk of different
areas and assigns corresponding risk levels. This method not only streamlines the computational
process but also effectively captures the dynamic evolution of fire risks across various evaluated
areas.
2. Literature Review
The risk assessment of WUI fire is fundamentally rooted in classic risk analysis and evaluation
theories, representing an extension of the disaster risk assessment methodologies developed for
forest fires and other natural hazards.
2.1. Definition of WUI
WUI represents a zone of convergence between wildland vegetation and human development,
creating a unique constellation of fire hazards owing to the intermingling of combustible biomass
and built structures. Globally, this risk is intensifying; urbanization and climate change are
recognized drivers behind the increasing frequency and severity of WUI fires [2]. Establishing an
operational definition of the WUI is therefore a foundational step for credible risk assessment.
Pioneering methodologies for its demarcation utilize land-use and housing density data [3].
Subsequent advances in remote sensing and high-resolution data have significantly refined these
techniques. A landmark contribution by Radeloff et al. (2018) synthesize satellite and census
information to generate a global WUI map, thereby underscoring the magnitude of the challenge:
39% of new residential constructions in the U.S. are situated within these high-risk areas.
2.2. Fire Risk Assessment Methods
2.2.1. Traditional Statistical Models
Early research on fire risk assessment primarily relies on logistic regression and generalized linear

4
models. For instance, Hanes et al. (2019) develop a coupled model using historical Canadian fire
data, integrating climate, vegetation, and human activity factors. Their results identify the drought
index and road density as pivotal predictive variables. In a more recent study, Liu et al. (2024)
employ a time series prediction model enhanced with an attention mechanism to estimate fire
occurrence probability. Furthermore, they integrate fire spread simulations using Cellular
Automaton and Monte Carlo methods to assess potential burn areas. This integrated methodology
facilitates a comprehensive risk assessment by evaluating both ignition likelihood and subsequent
spread potential. By integrating multi-source data, such as optical/microwave remote sensing,
meteorological, topographic, and human activity data, this method improves the model's sensitivity
to crucial factors like vegetation water content.
Despite these advancements, such models remain limited in capturing complex nonlinear
relationships and often depend on static datasets, which constrains their ability to represent dynamic
fire risks effectively.
2.2.2. Machine Learning
In recent years, machine learning (ML) techniques such as random forest, support vector machine,
and deep learning have been widely applied to enhance the accuracy of risk assessment. Xie et al.
(2022) explore the potential of integrating multiple ML algorithms for building wildfire risk
assessment models. They employ Bayesian optimization to tune the hyperparameters of several
models, including random forest, support vector machine, and extreme gradient boosting. Moreover,
they develop an integrated ML framework to generate wildfire risk grading maps and evaluate the
importance of various triggering factors. Similarly, Tonbul (2024) introduces an innovative
methodology for forest fire susceptibility mapping in the Mersin, Antalya, and Mugla provinces by
combining ML models with explainable artificial intelligence. The study utilizes three advanced
algorithms: extreme gradient boosting, gradient boosting machine, and light gradient boosting
machine, to produce susceptibility maps based on 14 conditioning factors spanning meteorological,
topographic, environmental, and anthropogenic variables. In a related effort, Naderpour et al. (2021)
propose a spatial framework to quantify forest fire risk in the Northern Beaches region of Sydney.
Their research identifies and spatially maps 36 significant indicators across multiple dimensions,
including topography, morphology, climate, human activities, social factors, and physical
characteristics. These indicators are used as inputs to an optimized deep neural network model,
which improves the performance of the multilayer perceptron in assessing forest fire susceptibility.
Most machine learning methods are inherently static, relying on historical or cross-sectional data.
They fail to effectively capture the dynamic evolution of risk factors (e.g., meteorology, vegetation
water content) over time, thereby limiting their responsiveness to real-time changes in risk.
2.2.3. Physics-based simulation model
Physics-based fire behavior models, such as FARSITE and FlamMap, assess fire risk by simulating
flame spread pathways and intensity. For example, Salis et al. (2021) integrate FARSITE with

5
building vulnerability data to quantify potential losses in the WUI region of Sardinia, Italy. In a
study focused on wood-frame contiguous villages in Western Hunan, Zhang et al. (2022) develop a
comprehensive risk assessment framework that accounts for multiple factors, including village
layout, street configuration, building materials, structural forms, energy use patterns, and fire
related behaviors. The researchers employ fire dynamics simulator (FDS) and SketchUp to visualize
and analyze fire combustion dynamics at both single-building and cluster scales, providing a basis
for targeted mitigation strategies. Simulation results derived from this approach can support the
optimization of fire protection measures for such vulnerable settlements.
While physics-based simulation models can mimic dynamic processes, their high computational
costs and stringent requirements for input data accuracy make them difficult to apply to large-scale,
rapid dynamic risk assessments.
2.2.4. Fire risk assessment model based on information technology
Recent years have witnessed the continued emergence of innovative fire risk assessment methods
leveraging information technology, applied in both built environments and natural ecosystems.
Through technological integration and interdisciplinary collaboration, significant improvements
have been made in fire prevention and control capabilities. For instance, Wang et al. (2021) apply
the fire risk assessment method for engineering (FRAME) to develop an evaluation index system
for buildings during their operation and maintenance phases. This system considers potential risk
levels, acceptable risk thresholds, and protection levels. Furthermore, the authors establish a
computational model for quantifying fire risk in these phases by incorporating building information
modeling (BIM) technology, and define a risk valuation standard to enhance building fire resilience.
Their results demonstrate that BIM can be effectively utilized in fire safety management, providing
a more intuitive and scientific basis for fire risk prevention and control. In a natural ecosystem
context, Nuthammachot and Stratoulias (2021) develop a GIS-based multi-criteria decision analysis
system for fire risk assessment and fire potential mapping in a peat swamp forest in Hua Sai District,
Thailand. The study analyzes 55 recorded fire occurrences in peat swamp areas between 2012 and
2016. Using the analytic hierarchy process (AHP) integrated with GIS, the authors evaluate a range
of contributing factors, including elevation, slope, aspect, precipitation, proximity to rivers and
settlements, and land use patterns. The findings reveal that the fire risk zones identified by the
proposed method align closely with historical fire incident data.
2.2.5. Fuzzy mathematical model
Fuzzy mathematics has emerged as a pivotal methodology for risk modeling in complex fire
scenarios, effectively quantifying the uncertainty, fuzziness, and multi-factor coupling
characteristics inherent in fire risk systems. Huang et al. (2022) introduce a novel fire risk
assessment approach for lithium-ion batteries during transportation and storage. Their method
identifies potential failure paths and basic events, and evaluates each of them using likelihood,
severity, and hazard control number to derive a hazard risk number (HRN) for fire accidents. These

6
indicators are further broken down into sub-indicators, which are synthesized using a fuzzy logic
framework to ensure comprehensive evaluation. To enhance battery safety, threshold limits are
proposed for four aspects: the synthesized HRN, HRNs of all failure paths, and the likelihood and
severity of all basic events. A case study on marine battery transportation confirms that the method
accurately assesses fire risks and pinpoints potential issues.
In a related development, Wang et al. (2024) propose an innovative fire risk assessment model
for large-scale commercial and high-rise buildings using an intuitionistic fuzzy set approach
integrated with social graph theory. Their method provides a scientific and objective weighting
mechanism that synthesizes positive, negative, and hesitant judgments from multiple experts while
accounting for their individual importance. To validate the model, fire safety data is collected from
11 buildings. Comparative analysis with existing methods demonstrates the robustness and
reliability of the proposed weighting strategy.
Information technology-based models and fuzzy mathematics, although excellent in handling
spatial information and uncertainty, often produce assessment results that are static "snapshots,"
lacking continuous characterization of risk sequences.
2.2.6. Multi-criteria decision making model
In the field of fire risk assessment, multi-criteria decision-making (MCDM) models have become
essential tools for balancing technical feasibility, economic cost, and social benefits in complex
scenarios, owing to their capacity to integrate multidimensional indicators and dynamically assign
weights. In recent years, research has increasingly incorporated heterogeneous factors, such as
hazard drivers, exposure, vulnerability, and emergency response capacity, using methods like the
AHP and the Technique for order preference by similarity to ideal solution (TOPSIS). These
developments have enabled a shift in risk assessment from single-threshold judgments toward multi
objective collaborative optimization. For example, Gulum et al. (2021) conceptualize post
earthquake fire risk assessment as an MCDM problem and propose a two-level evaluation
framework. The authors first determine the importance weights of relevant criteria using the
interval-valued neutrosophic AHP (IVN-AHP) method. They then apply the interval-valued
neutrosophic TOPSIS (IVN-TOPSIS) approach to rank districts in the Anatolian side of Istanbul
according to their post-earthquake fire risk levels. The proposed methodology is implemented with
real-world data to identify the highest-risk districts in Istanbul, Turkey.
In another study, Parvar et al. (2024) employ a multi-criteria evaluation method to generate a fire
risk map by analyzing both natural and anthropogenic factors, enabling the identification of
vulnerable areas. The study further examines the relationship between fire occurrences and key
influencing element, such as meteorological conditions, land surface temperature (LST), and
precipitation, with the occurrence of fire in different years. Using CHIRPS and Landsat data, LST
changes and precipitation are assessed, while MODIS products are utilized to track 23-year
variations in fire-affected areas within the study region. Although multi-criteria decision-making

7
models can effectively integrate multidimensional indicators, their traditional forms often lack
consideration for the performance differences of evaluation objects across time series during weight
setting and alternative ranking. This makes it difficult to handle dynamic evaluation matrices and
thus fails to reflect the fluctuation of risk levels over time.
Existing methods exhibit significant shortcomings in achieving an assessment framework
that can both comprehensively consider multi-source heterogeneous indicators and effectively
quantify the temporal dynamics of risk. To bridge this research gap, this paper proposes an
innovative method that integrates dynamic evaluation matrices, grey incidence analysis, and an
optimization model. This method incorporates time-series data by constructing a dynamic
evaluation matrix, utilizes local volume matrices and grey incidence degree to quantify the dynamic
differences between the evaluated areas and the ideal state, and finally solves for the superiority
degree through an optimization model. This enables the dynamic and refined ranking and
classification of WUI fire risks. This framework aims to overcome the static limitations of existing
methods and provide a more scientific basis for decision-making in the dynamic management and
proactive prevention and control of fire risk.
3. Comprehensive Analysis of Critical Risk Factors for WUI Fires
WUI fires constitute a compound disaster paradigm, originating from the complex interactions at
the nexus of natural ecosystems and human settlements. In the context of ongoing global
urbanization and intensifying climate change, WUI fire risks are undergoing a marked non-linear
intensification. The occurrence of these fires is attributable to a constellation of factors, including
vegetation fuel loads, structural attributes, anthropogenic ignition sources, topographic features, and
climatic variables, that act in concert to drive fire behavior.
3.1. Risk Factors Related to Vegetation
The spatial continuity of vegetation plays a critical role in facilitating fire spread by forming
continuous "fuel corridors." In a WUI fire risk assessment, Ghermandi (2016) emphasizes the
influence of vegetation type (e.g., forest and grassland), fuel load, and spatial continuity on fire
propagation. Specifically, forests with low horizontal vegetation continuity exhibit a reduced
likelihood of fire spread. Syphard et al. (2017) apply the Integral Index of Connectivity to WUI
areas in the western United States and find that for every 10% increase in continuous vegetation
cover, the rate of fire spread increases by 22%. Notably, in forest-grassland transition zones, highly
continuous vegetation can enable fires to cross natural barriers such as rivers and bare ground,
thereby directly threatening human settlements. Furthermore, Syphard et al. (2024) explore
geographical variations in fire regimes under climate change, identifying terrain, climate, and
vegetation distribution as key influencing factors.
Variations in the physical and chemical properties of different vegetation types significantly affect
ignition thresholds and fire intensity. For example, coniferous forests such as pine and eucalyptus

8
exhibit fire intensities 2-3 times greater than those in broad-leaved forests due to their high volatile
oil content (Keeley & Syphard, 2019). In arid environments, shrubs such as California sagebrush
function as "flammable barriers" at the WUI due to their extremely low moisture content (<5%) and
dense canopy structure (Fernandes et al., 2013). Syphard et al. (2022) investigate the transition from
shrubland to grassland in Southern California, identifying short-interval fires as the primary driver
and evaluating the implications of such vegetation shifts on fire risk.
3.2. Risk Factors Associated with Buildings and Human Activities
Low-density scattered development (1-5 buildings per hectare) significantly increases fire exposure
risk. Radeloff et al. (2018) use GIS simulations to demonstrate that dispersed building layouts
reduce the effectiveness of firebreaks by 60% and decrease the efficiency of firefighting resource
allocation by 35%. Moreover, combustible building materials such as wooden roofs and fences can
exacerbate local fire outbreaks when intermingled with vegetation (Cohen, 2010).
Road network design critically affects emergency response capabilities. Calkin et al. (2014)
emphasize that roads narrower than 4 meters or gated community entrances in WUI areas can delay
the arrival of firefighting vehicles by 30-50%. Aging power infrastructure also poses a significant
hazard; Balch et al. (2017) report that 12-25% of WUI fires in the United States are caused by power
line faults or transformer failures.
Human-caused ignition sources, including open-air burning and vehicle sparks, account for over
80% of WUI fire ignitions (Syphard et al., 2017). Calviño et al. (2017) investigate the interacting
factors influencing fire ignition risk, including vegetation type, topographic characteristics, and
WUI location. Additionally, they examine human activities and motivations associated with fires,
assessing whether these factors vary by vegetation type and WUI context. Their results reveal
significant interactions among topography, vegetation type, and WUI location.
3.3. Risk Factors of Topography and Climate
Topography and climate significantly influence the ignition and spread of WUI fires. Slope is a key
factor governing the speed and intensity of fire propagation. Steep slopes substantially accelerate
upslope flame spread by altering heat radiation pathways and airflow patterns. Alexandre et al.
(2016), through field observations and numerical simulations, demonstrate that for every 10-degree
increase in slope, the rate of fire spread increases by 15-20%, while fire line intensity can rise by
more than 30%. In valley terrain, the combined effect of slope and canyon-induced airflow creates
a "chimney effect," dramatically increasing the vertical velocity of flames and leading to high
intensity, uncontrollable wildfires.
Aspect indirectly affects vegetation flammability by regulating solar radiation exposure. Moritz
et al. (2014), analyzing temperate forest fire data across the Northern Hemisphere, find that sun
facing slopes (e.g., south-facing) experience prolonged solar exposure, leading to lower surface
evaporation and vegetation moisture content that is 20-40% lower than on shaded slopes, thereby
increasing flammability. Additionally, sun-facing slopes often support coniferous forests with low

9
moisture and high volatile content, further elevating fire probability and spread rates.
Long-term drought and extreme weather events serve as critical drivers of WUI fires. During the
severe drought in California from 2012 to 2016, the Climatic Water Deficit (CWD) increased by
50%, resulting in a 2.3-fold increase in fire frequency compared to the historical average (Williams
et al., 2019). Strong winds exceeding 30 km/h can propagate fires through ember transport,
extending the fire front distance to 4-6 times that under calm wind conditions (Calkin et al., 2014).
Jolly et al. (2015) further show that the global Fire Weather Index (FWI) increased by 35% between
1979 and 2013, significantly prolonging the high-risk period for WUI fires. Moreover, Abatzoglou
et al. (2019) indicate that rising temperatures and shifting precipitation patterns not only lengthen
the fire season but also expand the potential risk area for WUI fires.
4. Fire Risk Assessment Model Based on Volumetric Incidence Degree
4.1. Principles and Methods of Fire Risk Assessment Model
Assuming that the dynamic fire risk assessment for WUI involves n evaluated areas U1, U2,
,Un and m evaluation indices 1 2
, ,..., m
E E E with corresponding weights 1, 2, ..., m .
Additionally, the time weights of each evaluated area over T periods are 1, 2,..., T
   . Let the
evaluation value of the i-th evaluated area i
U for index E j in period t be denoted as ( )
Aij t
(i = 1, 2,..., n; j = 1, 2,..., m; t = 1, 2,...,T ) . Then, the evaluation matrix of all evaluated areas
under risk evaluation indices 1 2
, ,..., m
E E E in period t can be expressed as
11 12 1
21 22 2
12
() () ()
() () ()
()
() () ()
m
m
n n nm
at qt a t
at at a t
At
at a t a t
  
=  

Here, the i-th row represents the evaluation values of i
U for indices 1 2
, ,..., m
E E E in period t .
The evaluation values of i
U across all indices over T periods can be represented as a matrix:
()
11 1
22 2 12
(1) (2) ( )
(1) (2) ( )
, ,...,
(1) (2) ( )
ii i
ii i i i i iT
im im im
a a aT
a a aT
A AA A
a a aT
  
= = 


(1)
This is referred to as the dynamic evaluation matrix of i
U.
Due to potential differences in measurement units and orders of magnitude among the evaluation
indices, direct dynamic risk assessment of WUI is not feasible. Therefore, it is necessary to

10
standardize the dynamic evaluation matrices Ai (i = 1, 2, ..., n) for each evaluated area. If the
evaluation index E j is benefit-oriented (i.e., a larger value indicates higher risk), then ( )
aij t can
be standardized as
( ) min min ( )
( ) max max ( ) min min ( )
ij ij
it ij ij ij
it
it
at at
bt at at
−
= − (2)
If the evaluation index E j is cost-oriented (i.e., a larger value indicates lower risk), then ( )
aij t
can be standardized as
max max ( ) ( )
( ) max max ( ) min min ( )
ij ij
it ij ij ij
it
it
at at
bt at at
−
= − (3)
If the evaluation index E j is intermediate-type (i.e., value closer to the median indicates higher
risk), then ( )
aij t can be standardized as
() ()
( ) 1 max max ( ) ( )
ij j ij ij j
it
at Mt
bt at M t
−
= − − (4)
where j
M represents the median value of the intermediate-type risk index E j during period t .
If the evaluation index E j is interval-type (i.e., a larger value within a specific interval indicates
higher risk), then ( )
aij t can be standardized to
() ()
1 , () ()
max{ ( ) min min ( ), max max ( ) ( )}
() 1 () () ()
() ()
1 , () ()
max{ ( ) min min ( ), max max ( ) ( )}
l
ij ij l ij ij
lu ij ij ij ij
it i t
lu ij ij ij ij
u
ij ij u ij ij
lu ij ij ij ij
it i t
at at at at
at at at at
bt at at at
at at at at
at at at at
−
−
− −

=  

−
− 
−−

After standardization, the standardized evaluation matrix for indices 1 2
, ,..., m
E E E in period t
is obtained for each evaluated area:
11 12 1
21 22 2
12
() () ()
() () ()
()
() () ()
m
m
n n nm
bt bt b t
bt bt b t
Bt
bt b t b t
  
=  

In this matrix, the i-th row represents the standardized evaluation values of area i
U for indices
12
, ,..., m
E E E in period t .

11
The standardized evaluation values of area ( 1, 2,..., )
Ui i = n under m evaluation indices
across T periods are represented as a standardized dynamic evaluation matrix:
()
11 1
22 2 12
(1) (2) ( )
(1) (2) ( )
, ,...,
(1) (2) ( )
ii i
ii i i i i iT
im im im
b b bT
b b bT
B BB B
b b bT
  
= = 


.
The index weight vector 1 2
( , ,..., m)
 =    and the time weight vector 1 2
( , ,..., T )
 =    are
multiplied by the standardized dynamic evaluation matrix of area ( 1, 2,..., )
Ui i = n to obtain the
weighted standardized evaluation matrix:
11 1 11 2 11
22 1 22 2 22
12
(1) (2) ( )
(1) (2) ( )
( ( )) ( ( ) )
(1) (2) ( )
i i iT
i i iT i ij m T j ij t m T
m im m im m im T
b b bT
b b bT
C ct bt
b b bT
    
    

    

  
= = = 


. (5)
This study employs the weighted standardized evaluation matrix and a similarity matrix incidence
degree model to conduct dynamic fire risk assessments. Let ( )
c j+ t and ( )
c j− t denote the
maximum and minimum evaluated values of index E j for all evaluated areas across different
periods, where
( ) max ( )
j ij
i
ct ct
+ = , - ( ) min ( )
j ij
i
c t = c t ,j = 1,2,..., m; t = 1,2,...,T (6)
Using ( )
c j+ t and ( )
c j− t as fundamental elements, the weighted matrices for dynamic fire risk
assessment are constructed as:
11 1
22 2
2
(1) (2) ( )
(1) (2) ( )
(1) ( ) ( )
mm
c c cT
c c cT
C
c cm cT
++ +
++ + +
++ +
  
=  


and
11 1
22 2
2
(1) (2) ( )
(1) (2) ( )
(1) ( ) ( )
mm
c c cT
c c cT
C
c cm cT
−− −
−− − −
−− −
  
=  


Here, C + and C − represent the positive ideal matrix and the negative ideal matrix, respectively,
constructed from the maximum and minimum values of all evaluation indices for all areas in each
period. In dynamic fire risk assessment, the evaluated area corresponding to the positive ideal matrix
represents the highest risk scenario. However, it is rare for the weighted matrix of an evaluated area
to perfectly align with either the positive or negative ideal matrices. Therefore, the risk level of each
evaluated area can be determined by evaluating its proximity to these ideal matrices. This study
applies a similarity incidence analysis model to address the issue of risk ranking for each evaluated
area in the dynamic fire risk assessment.

12
4.2. Incidence Degree Between the Dynamic Evaluation Matrix of Each Evaluated
Area and the Positive-Negative Ideal Matrix
The absolute incidence degree of a matrix, derived from sequence incidence degree, does not fully
satisfy the completeness axioms of incidence or the order-preserving property under scalar
multiplication transformations. To overcome these limitations, this study adopts the volumetric
incidence degree to measure the closeness between the dynamic evaluation matrix of the WUI and
the positive/negative ideal matrices.
Definition 1 Let ( ij )m n
C c
= denote a behavior matrix, and ( ij )m n
C c
= represent the zero
starting-point image of C . Define
1, 1 1, , 1
63
ij i j i j i j ij
cc c c
d ++ + +
++
= + (7)
Then ( 1) ( 1)
( ij ) m n
D d − −
= is referred to as the local volume matrix of B .
Definition 2 Assume that the local volume matrices of the behavior matrix of the reference factor,
(0) (0)
()
ij m n
C c
= , and the behavior matrix of factor k , ( ) ( )
()
kk ij m n
C c
= (k = 1,2,..., s) , are given
by ( ) ( )
( 1) ( 1)
()
kk ij m n
D d − −
= . Let
0 (0) ( )
||
kk ij ij ij
d = d − d (8)
Then the matrix 0 0
( 1) ( 1)
()
kk ij m n
D d − −
= is referred to as the volume difference matrix between
factor k and the reference factor over the corresponding region. Let
0
max max max max k
ij
i jk
d = d, 0
min min min min k
ij
i jk
d = d.
Then max
d and min
d are called the maximum volume difference and the minimum volume
difference, respectively.
The volume difference matrix serves as a tool to measure the similarity between two factors
within a specific region. A larger volume difference indicates a greater disparity in the changing
trends of the two factors in that region.
Definition 3 Let (0) (0)
()
ij m n
C c
= and ( ) ( )
()
kk ij m n
C c
= (k = 1,2,..., s) be the behavioral matrix
of the reference factor and factor k , respectively. The volume difference matrix between (0)
C
and (k )
C is denoted as 0 0
( 1) ( 1)
()
kk ij m n
D d − −
= , with maximum and minimum elements being
max
d and min
d , respectively. The grey incidence coefficient matrix ( ) ( )
( 1) ( 1)
()
kk ij m n
G g − −
= of
factor k relative to the reference factor is then defined by

13
max () 0 max max max min
1, 0
,0
kk ij ij
d
g d dd
dd
=

= −

−

(9)
The volumetric incidence degree of factor k with respect to the reference factor is given by
()
11
(0) ( )
( , ) ( 1)( 1)
mn
k ij ij
k
g
CC m n
 ==
=− −

(10)
Since the volumetric incidence degree incorporates the influence of known factors on the
incidence degree, it satisfies the wholeness axiom of incidence. Moreover, as this incidence model
assumes local similarity among matrices, it effectively avoids misjudgment in the incidence degree
for fluctuating behavior matrices.
4.3. Optimizing Dynamic Fire Risk Assessment for the WUI
Let i+ denote the similarity incidence degree between the weighted standardized evaluation
matrix of the evaluated area Ui and the positive ideal matrix, and i− (i = 1,2,..., n) represent
that with the negative ideal matrix. A larger value of i+ indicates that the weighted standardized
evaluation matrix of Ui is closer to the positive ideal matrix C + , implying a higher risk level for
the area. Conversely, a larger value of i− suggests that the matrix is closer to the negative ideal
matrix C − , indicating a lower risk level. Typically, the evaluated area with the highest risk exhibits
the strongest similarity to the positive ideal matrix and the weakest similarity to the negative ideal
matrix. Let si denote the superiority degree to which the weighted standardized evaluation matrix
of Ui belonging to the positive ideal matrix C + . Consequently, the superiority degree of the
same matrix belonging to the negative ideal matrix C − is 1 − si . To determine the superiority
degree, the following optimization model is established:
22
1
min ( ) {[(1 ) ] ( ) }
n
i i ii i
H s  s
+−
=
=− +

s,
where 1 2
s ( , ,..., n )
= s s s is the vector of superiority degrees for all evaluated areas. Let
() 0
i
H
s
=

s.
Then, it follows that
22
( ) 2(1 )( ) 2 ( )
i i ii i
H ss
s 
+−
 =− − +

s.

14
Consequently,
2
22
()
() ()
i i
ii
s

+
+−
= + . (11)
Since si reflects the degree to which the weighted standardized evaluation matrix of evaluated
area Ui aligns with the positive ideal matrix, a larger value of si indicates a higher risk level for
Ui . Therefore, the superiority degree can be used as a criterion for ranking fire risks in the WUI.
4.4. Determination of the Comment Set
In the fire dynamic risk assessment, the risk levels are categorized into 7 grades: {extremely low
risk, low risk, slightly low risk, medium risk, slightly high risk, high risk, extremely high risk}. The
corresponding risk comment set V for these evaluated areas is defined as:
  
1234567
V = v , v , v , v , v , v , v = 0.1, 0.2, 0.4, 0.6, 0.7, 0.8, 0.9 .
The risk degree in the comment set is directly proportional to the risk level. If a risk degree falls
between two adjacent risk level, the higher level is adopted. For instance, if the risk degree is 0.3,
the risk level is classified as "slightly low risk".
Based on the above analysis, the fire risk assessment process can be summarized in the following
steps:
(1) Determine the dynamic evaluation matrix Ai for each evaluated area.
(2) Normalize the dynamic evaluation matrix Ai to obtain the standardized dynamic
evaluation matrix Bi .
(3) Calculate the weighted standardized evaluation matrix Ci for each evaluated area, as well
as the positive and negative ideal matrices C + and C − .
(4) Calculate the local volume matrix Di for each weighted standardized evaluation matrix,
and the local volume matrices D+ and D− for the positive and negative ideal matrices.
(5) Determine the volume difference matrices (i)
D+ and (i)
D− between the local volume
matrix of each evaluated area and the local volume matrices of the positive and negative ideal
matrices.
(6) Calculate the grey incidence coefficient matrices (i)
G+ and (i)
G− for each volume
difference matrix (i)
D+ and (i)
D− .
(7) Calculate the incidence degrees i+ and i− for grey incidence coefficient
matrices (i)
G+ and (i)
G− , respectively.

15
(8) Establish an optimization model for WUI fire risk assessment to derive the superiority
degree si for each evaluated area.
(9) Compare the superiority degrees si of each evaluated area to determine the risk ranking
and the risk levels.
5. Case Study Analysis
This section presents dynamic risk assessments at 6 different time points for 3 evaluated areas as
case studies. The study involves an extensive review of relevant domestic and international literature,
supplemented by in-depth surveys and interviews. Based on the findings, an evaluation index system
for assessing the risk of fire occurrence in the WUI is developed, as shown in the table below.
Table 1: Index System for Assessing Fire Occurrence Risk in WUI
Primary Index Secondary Index
the Condition of Combustible Materials in the
WUI
the Fuel Load in the WUI
Moisture Content of Combustible Materials in
the WUI
Spatial Distribution of Combustible Materials
in the WUI
Surrounding Environment of the Transitional
Zone in the WUI
Uncontrolled Fire Spread in Agricultural,
Forestry, and Livestock Production Regions
Domestic Fire Use in Daily Life
Population Density Distribution
Road Network Density
Meteorological Conditions in the WUI
Precipitation Levels
Relative Humidity
Air Temperature
Wind Velocity
Topographical Characteristics in the WUI
Slope Gradient
Slope Aspect
Topographic Position
Elevation Above Sea Level
Using the scaling expansion method, the weight vector of the index system can be determined as
=(0.1458,0.1303,0.1114,0.0666,0.0612,0.0585,0.0559,0.0650,0.0542,0.0451,
0.0376,0.0450,0.0430,0.0411,0.0392)

The weight vector corresponding to the 6 time points is given by

16
= (0.21,0.15,0.25,0.12,0.18,0.09)
Based on expert ratings for the 15 indices, the dynamic assessment matrices for the 3 evaluated
areas across 6 time points are denoted as
1
20 30 35 40 25 50 45 20 55 40 60 70 65 80 60
30 40 45 45 30 55 50 30 60 50 55 70 65 80 60
25 35 30 35 40 50 55 35 50 45 65 70 65 80 60
30 40 50 40 35 45 35 25 60 55 50 70 65 80 60
40 30 45 50 30 55 40 45 65 40 50 70 65 80 60
45 50 35 30 45 40 50 35 45 35 65 70 65 80 60
A
   
=    

,
T

2
25 35 40 35 30 45 40 25 50 45 55 60 75 70 65
35 30 35 40 35 50 45 35 55 40 65 60 75 70 65
30 40 25 45 40 55 50 30 45 50 55 60 75 70 65
35 45 30 35 30 40 30 35 40 30 50 60 75 70 65
45 35 35 30 35 50 45 45 60 45 40 60 75 70 65
40 45 30 40 45 40 35 30 40 50 55 60 75 70 65
A
   
=    

T

3
40 50 30 20 65 50 55 30 40 55 50 80 70 60 50
30 40 25 30 60 55 50 40 50 50 60 80 70 60 50
35 45 35 40 55 60 60 45 55 40 65 80 70 60 50
45 35 40 45 50 45 65 50 45 35 45 80 70 60 50
50 55 45 35 45 55 55 55 65 40 45 80 70 60 50
45 40 35 25 40 65 40 35 45 45 50 80 70 60 50
A
   
=    

T

Here, a higher score for an index indicates a higher level of risk in the evaluated area.
From expression (2), the standard dynamic evaluation matrix can be obtained by normalizing the
dynamic evaluation matrix. The resulting standardized dynamic evaluation matrices are as follows:
1
0 0 0.4 0.67 0 0.4 0.43 0 0.6 0.4 0.8 0.88 0 1 0.67
0.33 0.4 0.8 0.83 0.13 0.6 0.57 0.29 0.8 0.8 0.6 0.88 0 1 0.67
0.17 0.2 0.2 0.5 0.38 0.4 0.71 0.43 0.4 0.6 1 0.88 0 1 0.67
0.33 0.4 1 0.67 0.25 0.2 0.14 0.14 0.8 1 0.4 0.88 0 1 0.67
0.67 0 0.8 1 0.13 0.6 0.29 0.7
B=
1 1 0.4 0.4 0.88 0 1 0.67
0.5 0.36 0.2 0.2 0.31 0 0.31 0.27 0.08 0.9 0.38 0.88 0 1 0.67
T
        

17
2
0.17 0.2 0.6 0.5 0.13 0.2 0.29 0.14 0.4 0.6 0.6 0.75 1 0.5 1
0.5 0 0.4 0.67 0.25 0.4 0.43 0.43 0.6 0.4 1 0.75 1 0.5 1
0.33 0.4 0 0.83 0.38 0.6 0.57 0.29 0.2 0.8 0.6 0.75 1 0.5 1
0.5 0.6 0.2 0.5 0.13 0 0 0.43 0 0 0.4 0.75 1 0.5 1
0.83 0.2 0.4 0.33 0.25 0.4 0.43 0.7
B=
1 0.8 0.6 0 0.75 1 0.5 1
0.67 0.6 0.2 0.67 0.5 0 0.14 0.29 0 0.8 0.6 0.75 1 0.5 1
T
        
3
0.67 0.8 0.2 0 1 0.4 0.71 0.29 0 1 0.4 1 0.5 0 0
0.33 0.4 0 0.33 0.88 0.6 0.57 0.57 0.4 0.8 0.8 0.1 0.5 0 0
0.5 0.6 0.4 0.67 0.75 0.8 0.86 0.71 0.6 0.4 1 0 0.5 0 0
0.83 0.2 0.6 0.83 0.63 0.2 1 0.86 0.2 0.2 0.2 1 0.5 0 0
1 1 0.8 0.5 0.5 0.6 0.71 1 1 0.4 0.2 1 0.5 0 0
0.83 0
B=
.4 0.4 0.71 0.83 1 0.29 0.43 0.2 0.6 0.4 1 0.5 0 0
T
        
From expression (5), the weighted standardized evaluation matrices are derived:
1
0 0 0.01 0.01 0 0 0.01 0 0.01 0 0.01 0.01 0 0.01 0.01
0.01 0.01 0.01 0.01 0 0.01 0 0 0.01 0.01 0 0.01 0 0.01 0
0.01 0.01 0.01 0.01 0.01 0.01 0.01 0.01 0.01 0.01 0.01 0.01 0 0.01 0.01
0.01 0.01 0.01 0.01 0 0 0 0 0.01 0.01 0 0 0 0 0
0.02 0 0.02 0.01 0 0.01 0 0.01 0.0
C=
1 0 0 0.01 0 0.01 0
0.01 0 0 0 0 0 0 0 0 0 0 0 0 0 0
T
        
1
0.01 0.01 0.01 0.01 0 0 0 0 0 0.01 0 0.01 0.01 0 0.01
0.01 0 0.01 0.01 0 0 0 0 0 0 0.01 0.01 0.01 0 0.01
0.01 0.01 0 0.01 0.01 0.01 0.01 0 0 0.01 0.01 0.01 0.01 0.01 0.01
0.01 0.01 0 0 0 0 0 0 0 0 0 0 0.01 0 0
0.02 0 0.01 0 0 0 0 0.01 0.01 0 0 0.01 0.01 0 0.01
0.01 0.01 0 0 0
C=
0000000000
T
        
3
0.02 0.02 0 0 0.01 0 0.01 0 0 0.01 0 0.01 0 0 0
0.01 0.01 0 0 0.01 0.01 0 0.01 0 0.01 0 0 0 0 0
0.02 0.02 0.01 0.01 0.01 0.01 0.01 0.01 0.01 0 0.01 0 0.01 0 0
0.01 0 0.01 0.01 0 0 0.01 0.01 0 0 0 0.01 0 0 0
0.03 0.02 0.02 0.01 0.01 0.01 0.01 0.01 0.01 0 0 0.01 0 0 0
0.01 0
C=
0 0 0 0.01 0 0 0 0 0 0 0 0 0
T
        
From expression (6), the positive ideal matrix C + and negative ideal matrix C − are determined
as follows:

18
0.02 0.02 0.01 0.01 0.01 0 0.01 0 0.01 0.01 0.01 0.01 0.01 0.01 0.01
0.01 0.01 0.01 0.01 0.01 0.01 0 0.01 0.01 0.01 0.01 0.01 0.01 0.01 0.01
0.02 0.02 0.01 0.01 0.01 0.01 0.01 0.01 0.01 0.01 0.01 0.01 0.01 0.01 0.01
0.01 0.01 0.01 0.01 0 0.01 0.01 0
C+ = .01 0.01 0.01 0 0.01 0.01 0.01 0.01
0.03 0.02 0.02 0.01 0.01 0.01 0.01 0.01 0.01 0 0 0.01 0.01 0.01 0.01
0.01 0.01 0 0 0 0.01 0 0 0 0 0 0 0 0 0
T
        
0 0 0 0 0 0 0 0 0 0 0 0.01 0 0 0
0.01 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0.01 0.01 0 0.01 0.01 0.01 0.01 0 0 0 0.01 0 0 0 0
0.01 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0.02 0 0.01 0 0 0 0 0.01 0.01 0 0 0.01 0 0 0
0.01 0 0 0 0 0 0 0 0 0 0 0 0 0 0
T
C−
   
=     
From expression (7), the local volume matrices corresponding to each weighted standardized
evaluation matrix and the positive/negative ideal matrices are presented below.
1
0 0000000000000
0.01 0 0 0 0 0 0 0 0 0 0 0 0 0
0.01 0 0 0 0 0 0 0 0 0 0 0 0 0
0.01 0 0 0 0 0 0 0 0 0 0 0 0 0
0.01 0 0 0 0 0 0 0 0 0 0 0 0 0
T
D
   
=
  

2
0 0000000000000
0 0000000000000
0.01 0 0 0 0 0 0 0 0 0 0 0 0 0
0.01 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0000000000000
T
D
   
=
  

3
0.01 0.01 0 0 0 0 0 0 0 0 0 0 0 0
0.01 0 0 0 0 0 0 0.01 0 0 0 0 0 0
0.01 0 0.01 0 0 0 0 0.01 0 0 0 0 0 0
0.01 0 0.01 0 0 0 0 0.01 0 0 0 0 0 0
0 0 0 0000 0 000000
T
D
−−
 
−  
= − 
−  

0.01 0 0 0 0 0 0 0 0 0 0 0 0 0
0.01 0 0 0 0 0 0 0 0 0 0 0 0 0
0.01 0.01 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0000000000
0 0.01 0 0.01 0 0 0 0 0 0 0 0 0 0
T
D+
−  
−  
=− −
  
−−


19
0 0000000000000
0 0000000000000
0.01 0 0 0 0 0 0 0 0 0 0 0 0 0
0.01 0 0 0 0 0 0 0 0 0 0 0 0 0
0.01 0 0 0 0 0 0 0 0 0 0 0 0 0
T
D−
   
=
  

From expression (8), the volume difference matrices between the local volume matrices of each
weighted standardized evaluation matrix and the local volume matrix of the positive ideal matrix can
be derived as follows.
(1)
0.01 0.01 0 0 0 0 0 0 0 0 0 0 0 0
0.01 0.01 0 0 0 0 0 0 0 0 0 0 0 0
0.01 0.01 0 0 0 0 0 0 0 0 0 0 0 0
0.01 0 0 0 0 0 0 0 0 0 0 0 0 0
0.01 0.01 0 0 0 0 0 0 0 0 0 0 0 0
T
D+
   
=
  

(2)
0.01 0 0 0 0 0 0 0 0 0 0 0 0 0
0.01 0 0 0 0 0 0 0 0 0 0 0 0 0
0.01 0 0 0 0 0 0 0 0 0 0 0 0 0
0.01 0 0.01 0 0 0 0 0 0 0 0 0 0 0
0.01 0 0 0 0 0 0 0 0 0 0 0 0 0
T
D+
   
=
  

(3)
00 0 00000000000
00 0 00000000000
0 0 0.01 0 0 0 0 0 0 0 0 0 0 0
0 0 0.01 0 0 0 0 0 0 0 0 0 0 0
0 0 0.01 0 0 0 0 0 0 0 0 0 0 0
T
D+
   
=
  

From expression (9), the grey incidence matrices between each weighted standardized evaluation
matrix and the positive ideal matrix can be obtained as follows.
(1)
0.35 0.44 0.89 0.93 0.86 0.96 0.91 0.97 0.93 0.89 0.96 0.94 0.94 0.99
0 0.44 0.97 0.91 0.83 0.96 0.91 0.96 0.89 0.91 0.99 0.92 0.99 0.99
0.21 0.43 0.95 0.81 0.82 0.94 0.92 0.89 0.89 0.83 0.97 0.97 0.93 1.00
0.17 0.65 0.87 0.68 0.68 0.93 0.92 0
G+ =
.99 0.82 0.84 0.99 0.89 0.92 0.97
0.30 0.43 0.92 0.72 0.69 0.89 0.89 0.93 0.89 0.90 0.99 0.89 0.88 0.98
T
      


20
(2)
0.54 0.88 0.85 0.92 0.86 0.94 0.90 0.98 0.97 0.96 0.95 0.96 0.99 0.97
0.29 0.95 0.71 0.75 0.80 0.90 0.98 0.87 1.00 0.89 0.99 0.96 0.98 1.00
0.25 0.89 0.67 0.76 0.76 0.98 0.84 0.80 0.96 0.97 0.95 0.97 1.00 0.97
0.28 0.79 0.62 0.86 0.69 0.99 0.
G+ =
98 0.89 0.98 0.91 0.98 0.98 0.95 0.96
0.43 0.86 0.76 0.68 0.66 0.96 0.90 0.97 0.83 0.88 0.95 0.96 0.94 0.89
T
      

(3)
0.92 0.95 0.96 0.90 1.00 1.00 1.00 0.96 0.92 0.98 0.99 0.89 0.94 0.92
0.96 0.98 0.65 0.80 1.00 1.00 1.00 0.84 0.85 0.98 0.86 0.73 0.97 0.97
0.93 0.88 0.54 0.71 1.00 1.00 1.00 0.81 0.99 0.95 0.86 0.89 0.96 0.93
0.85 0.87 0.48 0.81 1.00 1.00 1.
G+ =
00 0.85 0.93 0.99 0.93 0.95 0.86 0.83
0.97 0.73 0.52 0.82 0.98 1.00 1.00 0.76 0.81 0.97 0.92 0.95 0.82 0.75
T
      

From expression (10), the volumetric incidence degree between each weighted standardized
evaluation matrix and the positive ideal matrix can be derived as follows.
+
01=0.89 , +
02 =0.92 , +
03 =0.96
Similarly, the volumetric incidence degree between each weighted standardized evaluation matrix
and the negative ideal matrix can be obtained as follows.
0−1=0.97 ,0−2 =0.93 ,0−3 =0.89
From expression (11), the superiority degree of each weighted standardized evaluation matrix
relative to the positive ideal matrix can be derived as follows.
s1=0.46 , s2 =0.50 , s3=0.54
Thus, among 3 evaluated areas, area 3 exhibits the highest risk level, followed by area 2, while area
1 demonstrates the lowest risk. According to the risk classification principle outlined in Section 4.4,
the risk levels of 3 evaluated areas are categorized as medium.
6. Conclusion
This paper addresses the challenge of dynamic fire risk assessment in the WUI. By applying the
ideal matrix method, a matrix similarity incidence analysis model for dynamic fire risk assessment
is developed. The fire risk of each evaluated area is ranked based on the incidence coefficients
between their weighted standardized evaluation matrices and both the positive and negative ideal
matrices, with corresponding risk levels assigned. The results indicate that the matrix similarity
incidence analysis model not only simplifies the computational process but also effectively captures
the dynamic evolution of fire risks across different evaluated areas.
Conflict of Interests
The authors declare that there is no conflict of interests regarding the publication of this paper.

21
Acknowledgments
This work was supported by National Natural Science Foundation of China (No. 72174031), the
Fundamental Research Funds for the Central Universities (No. 2023ZKPYLX02).
Reference
[1] Cohen, J. D. Preventing disaster: home ignitability in the wildland-urban interface. Journal of Forestry. 2000,
98(3), 15-21.
[2] Radeloff, V. C., Hammer, R. B., Stewart, S. I., et al. The wildland–urban interface in the United States.
Ecological Applications. 2005, 15(3), 799-805.
[3] Stewart, S. I., Radeloff, V. C., Hammer, R. B., et al. Defining the wildland–urban interface. Journal of Forestry.
2007, 105(4), 201-207.
[4] Radeloff, V. C., Helmers, D. P., Kramer, H. A., et al. Rapid growth of the US wildland-urban interface raises
wildfire risk. Proceedings of the National Academy of Sciences. 2018, 115(13), 3314-3319.
[5] Hanes, C. C., Wang, X., Jain, P., et al. Fire-regime changes in Canada over the last half century. Canadian
Journal of Forest Research. 2019, 49(3), 256-269.
[6] Liu, X., Zheng, C., Wang, G., et al. Integrating Multi-Source Remote Sensing Data for Forest Fire Risk
Assessment. Forests. 2024, 15(11), 2028.
[7] Xie, L., Zhang, R., Zhan, J., et al. Wildfire risk assessment in Liangshan Prefecture, China based on an
integration machine learning algorithm. Remote Sensing. 2022, 14(18), 4592.
[8] Tonbul, H. Integrating ensemble machine learning and explainable AI for enhanced forest fire susceptibility
analysis and risk assessment in Türkiye’s Mediterranean region. Earth Science Informatics. 2024, 17(6), 5709
5731.
[9] Naderpour, M., Rizeei, H. M., Ramezani, F. Forest fire risk prediction: A spatial deep neural network-based
framework. Remote Sensing. 2021, 13(13), 2513.
[10] Salis, M., Arca, B., Del Giudice, L., et al. Application of simulation modeling for wildfire exposure and
transmission assessment in Sardinia, Italy. International Journal of Disaster Risk Reduction. 2021, 58, 102189.
[11] Zhang, F., Shi, L., Liu, S., et al. CFD-based framework for fire risk assessment of contiguous wood-frame
villages in the western Hunan region. Journal of Building Engineering. 2022, 54, 104607.
[12] Wang, L., Li, W., Feng, W., et al. Fire risk assessment for building operation and maintenance based on BIM
technology. Building and Environment. 2021, 205, 108188.
[13] Nuthammachot, N., Stratoulias, D. Multi-criteria decision analysis for forest fire risk assessment by coupling
AHP and GIS: Method and case study. Environment, Development and Sustainability. 2021, 23(12), 17443
17458.
[14] Huang, P., Hu, G., Yong, Z., et al. Fire risk assessment of battery transportation and storage by combining
fault tree analysis and fuzzy logic. Journal of Loss Prevention in the Process Industries. 2022, 77, 104774.
[15] Wang, Y., Zheng, R., Li, M. Risk assessment of fire safety in large-scale commercial and high-rise buildings
based on intuitionistic fuzzy and social graph. Journal of Building Engineering. 2024, 89, 109165.
[16] Gulum, P., Ayyildiz, E., Gumus, A. T. A two level interval valued neutrosophic AHP integrated TOPSIS
methodology for post-earthquake fire risk assessment: An application for Istanbul. International Journal of
Disaster Risk Reduction. 2021, 61, 102330.
[17] Parvar, Z., Saeidi, S., Mirkarimi, S. Integrating meteorological and geospatial data for forest fire risk
assessment. Journal of Environmental Management. 2024, 358, 120925.
[18] Ghermandi, L., Beletzky, N. A., de Torres Curth, M. I, et al. From leaves to landscape: A multiscale approach
to assess fire hazard in wildland-urban interface areas. Journal of Environmental Management. 2016,183, 925
937.

22
[19] Syphard, A. D., Keeley, J. E., Pfaff, A. H., et al. Human presence diminishes the importance of climate in
driving fire activity across the United States. Proceedings of the National Academy of Sciences. 2017, 114(52),
13750-13755.
[20] Syphard, A. D., Velazco, S. J. E., Rose, M. B., et al. The importance of geography in forecasting future fire
patterns under climate change. Proceedings of the National Academy of Sciences. 2024, 121(32), e2310076121.
[21] Keeley, J. E., Syphard, A. D. Twenty-first century California, USA, wildfires: fuel-dominated vs. wind
dominated fires. Fire Ecology. 2019, 15(1), 1-15.
[22] Fernandes, P. M., Davies, G. M., Ascoli, D., et al. Prescribed burning in southern Europe: developing fire
management in a dynamic landscape. Frontiers in Ecology and the Environment. 2013, 11(s1), e4-e14.
[23] Syphard, A. D., Brennan, T. J., Rustigian‐Romsos, H., et al. Fire‐driven vegetation type conversion in southern
California. Ecological Applications. 2022, 32(6), e2626.
[24] Radeloff, V. C., Helmers, D. P., Kramer, H. A., et al. Rapid growth of the US wildland-urban interface raises
wildfire risk. Proceedings of the National Academy of Sciences. 2018, 115(13), 3314-3319.
[25] Cohen, J. The wildland-urban interface fire problem. Fremontia. 2010, 38 (2)-38 (3): 16-22.
[26] Calkin, D. E., Cohen, J. D., Finney, M. A., et al. How risk management can prevent future wildfire disasters
in the wildland-urban interface. Proceedings of the National Academy of Sciences. 2014, 111(2), 746-751.
[27] Balch, J. K., Bradley, B. A., Abatzoglou, J. T., et al. Human-started wildfires expand the fire niche across the
United States. Proceedings of the National Academy of Sciences. 2017, 114(11), 2946-2951.
[28] Calviño-Cancela, M., Chas-Amil, M. L., García-Martínez, E. D., et al. Interacting effects of topography,
vegetation, human activities and wildland-urban interfaces on wildfire ignition risk. Forest Ecology and
Management. 2017, 397, 10-17.
[29] Alexandre, P. M., Stewart, S. I., Keuler, N. S., et al. Factors related to building loss due to wildfires in the
conterminous United States. Ecological Applications. 2016, 26(7), 2323-2338.
[30] Moritz, M. A., Batllori, E., Bradstock, R. A., et al. Learning to coexist with wildfire. Nature. 2014, 515(7525),
58-66.
[31] Williams, A. P., Abatzoglou, J. T., Gershunov, A., et al. Observed impacts of anthropogenic climate change
on wildfire in California. Earth's Future. 2019, 7(8), 892-910.
[32] Jolly, W. M., Cochrane, M. A., Freeborn, P. H., et al. Climate-induced variations in global wildfire danger
from 1979 to 2013. Nature Communications. 2015, 6(1), 7537.
[33] Abatzoglou, J. T., Williams, A. P., Barbero, R. Global emergence of an-thropogenic climate change in fire
weather indices. Geophysical Research Letters. 2019, 46(1), 326-336.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:49.621Z
- **Text Length:** 55838 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 22 of 22
