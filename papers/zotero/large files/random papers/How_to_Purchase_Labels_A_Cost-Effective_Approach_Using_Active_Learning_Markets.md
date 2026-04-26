# PDF Document: Huang and Pinson - 2025 - How to Purchase Labels A Cost-Effective Approach Using Active Learning Markets.pdf

**File Path:** Huang and Pinson - 2025 - How to Purchase Labels A Cost-Effective Approach Using Active Learning Markets.pdf

**Processed Date:** 2026-02-10T18:15:51.511Z

**File Size:** 1219.43 KB

**Total Pages:** 29

**Extracted Pages:** 29

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3458

**Title:** How to Purchase Labels? A Cost-Effective Approach Using Active Learning Markets

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

How to Purchase Labels? A Cost-effective Approach Using Active
Learning Markets
Xiwen Huang∗ Pierre Pinson†
Abstract
We introduce and analyse active learning markets as a way to purchase labels, in situations where analysts aim to acquire additional data to improve model fitting, or to better train models for predictive analytics applications. This comes in contrast to the many proposals that already exist to purchase features and examples. By originally formalizing the market clearing as an optimization problem, we integrate budget constraints and improvement thresholds into the label acquisition process. We fo-
cus on a single-buyer-multiple-seller setup and propose the use of two active learning strategies (variance based and query-by-committee based), paired with distinct pricing mechanisms. They are compared to a benchmark random sampling approach. The proposed strategies are validated on real-world datasets from two critical application domains: real estate pricing and energy forecasting. Results demonstrate the robustness of our approach, consistently achieving superior performance with fewer labels-
 acquired compared to conventional methods. Our proposal comprises an easy-to-implement practical solution for optimizing data acquisition in resource-constrained environments.
Keywords: Data markets, Active learning, Data acquisition
1 Introduction
In today’s data-driven economy, data is often referred to as the “new oil”, reflecting its critical role in driving technological innovation and economic growth. The global market for data analytics is projected to expand significantly in the coming years, growing from USD 348.21 billion in 2024 to USD 924.39 billion in 2032, with a compound annual growth rate of 13.9% [Fortune Business Insights, 2023]. The rapid proliferation of data, generated on massive scales daily, has paved the way for advan-
ces in big data analytics, offering innovative solutions in areas such as transportation, energy, real estate, and healthcare, among others. As an example, in the UK, Citymapper leverages freely available real-time transportation data to enhance urban navigation and improve public transport efficiency [Tavmen, 2020]. However, in many cases, the ownership of data is distributed among heterogeneous agents, while data is deemed a commodity that must be strategically acquired. For instance, as busines-
ses increasingly recognize the importance of predictive capabilities, many face the challenge of acquiring the necessary volume and quality of data to train machine learning models. It is of utmost importance to develop appropriate platforms and market ecosystems supporting the sharing, valuation, and acquisition of data. To set the scene, consider the following two scenarios. First, an analyst in a real estate company wants to train a model to predict house prices in a certain area. The analyst h-
as access to all transactions history of houses from their company. Also, in order to have more training data, they may obtain information
∗Dyson School of Design Engineering, Imperial College London. Email: xiwen.huang23@imperial.ac.uk. †Dyson School of Design Engineering, Imperial College London; Department of Technology, Management and Economics, Technical University of Denmark; CoRE, Aarhus University. Email: p.pinson@imperial.ac.uk.
1
arXiv:2511.20605v1 [cs.LG] 25 Nov 2025

about other houses with different characteristics (e.g., numbers of rooms, distance to local transportation and schools, etc.). However, the corresponding labels (i.e., the actual prices at which these houses were sold) may not be public, while being necessary for training. How should the analyst decide which labels to acquire and at what price? Second, an analyst in the energy sector aims to build a model to forecast energy consumption for an educational building using time-series data from vari-
ous sources. Data from other buildings (labels) could be very useful to additionally train the model. Given a limited budget, what strategy should be used to acquire these additional labels? In a general setup, we place ourselves in a supervised learning framework, where data for input features (equivalently referred to as explanatory variables) may be abundant, while the availability of labels (i.e., values for the target variable) is limited. To develop the idea and a proof of concept, we specif-
ically use linear regression. Linear regression has many practical advantages, including simplicity, interpretability, and the availability of a closed-form solution for parameter estimates. Furthermore, linear regression has also been used by others as a basis to introduce various types of data markets [Dekel et al., 2010, Cummings et al., 2015a], which produces important market properties such as incentive compatibility and truthfulness. However, one should be able to broaden the concepts presen-
ted to a class of models that is more general than linear regression only. For instance, as discussed by Pinson et al. [2022], data markets developed for the linear regression case can be readily generalized to the case of regression models that are linear in their parameters; this includes, for instance, polynomial- and spline-based regression. In our framework, an analyst seeks to acquire additional labels to improve model fitting, or to improve the predictive performance of the model at hand. T-
hese may be highly dependent on the availability and quality of the labels that are used. Labels may be difficult or costly to obtain. Existing approaches to data and information markets fall into various categories. Given an analytics task at hand, one may purchase solutions for that task (as in prediction markets), or one may purchase actual data to be used as input to solving that analytics task. For descriptive and predictive analytics, this may translate to having (i) observation markets and -
(ii) feature markets (also referred to as regression markets). In the first case, the buyer aims to acquire complete rows (with values for both input features and the target variable) to have more data to train their model. In the second case, emphasis is placed on purchasing additional features (i.e., complete columns) to augment the model at hand and to improve their ability to explain variations in the target variable. These markets have been extensively studied [Agarwal et al., 2019, Pinson et-
 al., 2022] and are mainly based on Shapley values to define revenues and payments. Alternatively, Han et al. [2022] proposed the use of Lasso-based estimation to elicit the willingness to pay of data buyers. Moreover, existing research often emphasizes bulk data acquisition or continuous data delivery, such as in Data as a Commodity (e.g., Amazon Mechanical Turk) or Data as a Service (e.g., Google BigQuery). These approaches fall short of addressing the need for targeted and cost-effective data a-
cquisition, especially for machine learning applications where high-quality, informative data points are more valuable than large quantities of generic data. At the same time, the growing presence of platforms such as AWS Data Exchange, Ocean Protocol, and crowdsourcing markets like Amazon Mechanical Turk demonstrates that market-style procurement of data is already a practical reality. What remains unexplored is how to integrate active learning principles into these emerging markets to guide sele-
ctive, budget-constrained acquisition of the most informative labels—which is the gap this paper addresses. In contrast, here, we introduce a new type of data market to specifically purchase labels. We refer to such markets as active learning markets, since active learning serves as a basis for acquiring labels in a value-oriented manner. In active learning markets, buyers possess full feature sets, but only a subset of values for the target variable of interest. This calls for strategic acquisiti-
on of additional labels to improve model performance. This setup closely mirrors real-world scenarios faced by companies where the resources for data acquisition (for the target variable) may be limited. Despite advances in data monetization and pricing models [Agarwal et al., 2019, Mehta et al., 2021], frameworks often overlook budget constraints and fail to propose efficient strategies for buyers to prioritize high-value data points. Furthermore, although studies
2

such as Cummings et al. [2015b] propose variance-constrained mechanisms for data selection, they do not accommodate budget constraints and strategic selection of the data to be purchased. This gap is particularly pronounced in industries such as energy forecasting, where data acquisition is expensive, but essential to achieve high prediction accuracy [Wang et al., 2023, Settles, 2011]. We bridge this research gap by introducing and analyzing active learning markets. Our core contribution is then -
to incorporate both overall budget constraints and minimum improvement requirements in data acquisition problems. This dual consideration is a departure from traditional data purchase problems. Second, we extend the use of the active learning principle within a data market context. Eventually, we showcased the interest of our proposal based on case studies inspired by real-world applications. To realize these contributions, we first define the market setup, introducing the market participants and -
the key components of the underlying resource allocation problem. We then formalize that resource allocation problem within an optimization framework. Rather than solving this optimization problem directly, we use active learning as a greedy approach to data acquisition. This is based on two alternative active learning strategies (variance-based active learning, VBAL, and query-by-committee-based active learning, QBCAL), each paired with distinct data pricing mechanisms. For comparison, we used a -
random sampling corrected strategy as a benchmark. To validate our proposed strategies, we apply them to real-world datasets in two critical domains: real estate pricing and energy forecasting. Through these applications, we analyse and discuss the salient features of active learning markets, with the aim of underlining their practical value in optimizing data acquisition under various constraints. The remainder of this work is organized as follows. Section 2 introduces the preliminaries of data m-
arkets in general and of active learning markets in particular. Section 3 provides an overview of our active learning marketplace and details our VBAL-based and QBCAL-based approaches while using random sampling corrected strategy as a benchmark. Section 4 presents our proposal for the active learning market for 2 different real-world applications and discusses the results from the perspective of both the analyst and the sellers. Section 5 concludes the work while offering perspectives for future -
work.
2 Introducing active learning markets
After briefly discussing current challenges within data valuation, we introduce how active learning markets fit within the current landscape of data markets for analytics applications. We subsequently describe market participants, the core optimization problem for purchasing labels, and related pricing considerations.
2.1 Data valuation
Data, as an asset, has three unique characteristics that distinguish it from traditional goods, each presenting its own set of challenges. First, data can be easily replicated at zero cost, introducing new issues in data pricing [Acemoglu et al., 2022, Mehta et al., 2021, Liang et al., 2018, Pei, 2020, Yu and Zhang, 2017, Li et al., 2014]. Second, data is generated in vast volumes and at high velocity. For instance, according to Statista [2024], the data generated in 2025 is estimated at reaching -
181 zettabytes, increased by more than 150% compared to the data generated in 2023—120 zettabytes. This massive scale creates significant challenges for big data analytics [Maheshwari et al., 2021, Mariani and Wamba, 2020, Wang and Wang, 2020]. Third, data ownership is distributed by companies, each with heterogeneous preferences due to differing privacy concerns and competitive dynamics [Abbas et al., 2021, Busch-Casler and Radic, 2022, OECD, 2018]. Addressing these challenges requires new paradi-
gms for data marketplaces, particularly given that the value of data is not intrinsic, but highly dependent on its context—its quality, timeliness, and relevance to specific analytics tasks.
3

2.2 Alternative data market setups
One can think of data markets for analytics in different ways, depending on the type of data to be acquired and the way they may be used as input to analytics tasks. Data purchase generally refers to the acquisition of additional data points from data sellers against some form of monetary transaction. Analysts may engage in data purchase to improve the fit of their model and to improve the predictive performance of their model. Within a supervised learning framework, let Ω = {1, . . . , P} index t-
he set of input features. For each p ∈ Ω, the p-th input feature is denoted by x p (also referred to as an explanatory variable). Let Y denote the target variable (also known as response variable). As a basis for introducing data markets, we restrict ourselves to a simpler linear regression framework. The notation x is used for the observations of the features in Ω and y for the observed values of the target variable Y . Let N denote the total number of observations, for both input features and re-
sponse variable. We start by introducing two cases which have already been explored within the scientific literature, before introducing our novel framework.
X1 · · · · · · XP Y
...1
K
K...+1
N
(a) Observation market
X1 · · · XMXM+1· · · XP Y
...12
...
N
(b) Feature market
X1 · · · · · · XP Y
...1
K
K...+1
N
(c) Active learning market
Figure 1: Graphical representations of observation, feature and active learning markets, based on both design matrix and response vector (grey: data/features owned by the buyer; white: data/features the sellers may offer).
In the first case, which we refer to as observation market, the analyst may already own, or have access to, a number of observations for both explanatory variables and the response variable they are interested in. This situation is illustrated in Figure 1 (a). There, the analyst already has the first K rows and may be interested in purchasing additional rows (from the N − K they do not have already). In the second case, which we refer to as feature market (the term regression market has also been -
used in the literature, see Pinson et al. [2022], for instance), the analyst has access to all N observations for M input features, as well as for the response variable of interest. The analyst may then be interested in purchasing additional columns, i.e., data for additional P − M potential features that they do not already have access to. An example of the observation market is that of an e-commerce site (e.g. Amazon) predicting customer lifetime value, where available observations consist of pa-
st purchases, frequency purchases, and customer demographics. The analyst may be interested in purchasing additional data for these same features from another e-commerce site (e.g., Shein). With more comprehensive data available, the analyst may improve the fit of their model(s) and/or improve their generalizability. In parallel, for the feature market, an example is that of two wind farms buying data from each other. Each wind farm will have their own features, e.g., local measurements and weathe-
r forecasts, and may be interested in purchasing measurements and weather forecasts from the other wind farm. In contrast, here we introduce active learning markets (which may be equivalently seen as label markets). We define DL the labelled data that the analyst already has access to (including observations for both explanatory and target variables), DU the unlabelled data that is either owned by data sellers or can be obtained (e.g., through public sources), and DML the missing labels that are o-
wned exclusively by data sellers. The analyst is interested in purchasing some of these labels. An example active learning market is illustrated in Figure 1(c), based on the following sets of data:
4

DL = {(x1i, x2i, . . . , xPi, yi) , i = 1, 2, . . . , K } , (1a)
DU = x1 j , x2 j , . . . , xP j , j = K + 1, . . . , N , (1b)
DML = y j , j = K + 1, . . . , N . (1c)
where K < N. Here, the data analyst has DL and DU with all the features for all N observations, while the data sellers have DML with the target variables for N − K observations.
2.3 Active learning market: Participants
In the active learning market, let A represent the data analyst and S j ( j = 1, 2, . . . , m) the data sellers, where m = N − K denotes the total number of data sellers and each seller has a unique label y j ∈ DML. In the more general case, there may be fewer than m sellers and they may own more than 1 label each. However, this does not change the market setup in any way, and we consider this simpler setup in which each seller has a single label only for simplicity. The data analyst A works with -
several defined components. Note that we use the term data analyst for the data buyer, to be consistent with the terminology used by, e.g., Cummings et al. [2015b]. Identified data DL comprises the data set owned by the analyst, including both features and their corresponding target values (that is, the corresponding labels). The unlabelled data DU consists of data points that the analyst can access, covering values for all relevant features, but without associated labels for the target variable o-
f interest. The analyst is willing to pay (WTP) φ, which represents what the analyst is ready to spend (per unit cost, e.g., £, $, ¥) for a unit improvement in some model performance metric L. For instance, both the variance of model estimates and the mean square error of model-based forecasts will be used in the following. Here, we treat φ as a constant, reflecting ex-ante scenarios in which the analyst has no prior information to differentiate among candidate labels and therefore sets a uniform -
value for performance improvement. This simplification follows the tradition of single-parameter environments in mechanism design, where each participant’s valuation or cost is summarized by a single scalar parameter (e.g., Ghosh and Roth [2011], Cummings et al. [2015a], Agarwal et al. [2019]). Such models provide tractability while still capturing key buyer–seller interactions. In practice, this corresponds to organizations that translate forecast errors into well-defined financial costs (e.g., i-
nventory misallocation or excess capacity), which naturally yield a constant willingness to pay per unit of accuracy. Additionally, our analysis is conducted in the batch active learning setting; therefore, the buyer’s willingness to pay (WTP) is assumed constant over time rather than dynamically updated. The potential variation of WTP in online or adaptive settings is discussed in Section 5.2. The analyst also establishes a model performance threshold α, which defines the maximum expected decreas-
e in the model performance metric (assuming that the metric is negatively oriented) for which they are ready to pay. In parallel, the data purchase budget B specifies the maximum amount the analyst may be able to spend to purchase data. Data sellers, on the other hand, are characterized by the labels they own, gathered in the set DML, which are made available to the analyst for purchase. These labels are not shared with the analyst prior to the purchase, since active learning will allow one to dec-
ide which label the analyst wants to acquire, without having used that label yet. Each data seller has a willingness to sell (WTS), denoted η j, which represents the minimum price each seller is willing to accept for their label y j.
2.4 How the market operates
Having defined the participants and their attributes, we now formalize the operation of the market. The mechanism must determine both the allocation of labels to be purchased and the corresponding prices. Formally, the market operates as a mapping F a
L , which, based on input data DL, DU, DML and given the (linear) regression model M chosen by the analyst and the loss function l of interest, performs both resource
5

allocation (i.e., choosing the labels to be purchased and from which seller) and pricing of these labels, i.e.,
F
a
L : (DL, DU, DML; M, l) → Dac
ML, p (2)
where Dac
ML ⊆ DML is the set of data eventually purchased and transferred to the analyst, while p = { p j | y j ∈
D ac
ML} is the set of prices for these labels, used as a basis for defining revenues and payments for both analysts and sellers. At the core of the resource allocation problem is the label purchase decision. It involves a binary variable z j, which is used to indicate whether the label is purchased or not. The rule is such that the improvement l j in the loss function l has to be greater than a threshold defined by the label price and the analyst’s willingness to pay, for the label to be purchased. Th-
is writes
zj =



1, l j ≥
ηj
φ
0, otherwise
(3)
Regarding the pricing of the labels actually purchased, we consider two alternatives which are to be seen as the most extreme cases. That is, the pricing can be based either on the buyer or on the offer from the seller. In a single-buyer-multiple seller setup, one cannot rely on supply-demand equilibrium concepts, as would be the case for more general resource allocation problems with multiple buyers and multiple sellers. Here, in a seller-centric pricing approach (SC), the price is defined as p j-
 = η j, which corresponds to the willingness to sell for the label y j. Following a buyer-centric (BC) pricing approach, instead, each purchased label y j is priced as p j = φl j, i.e., reflecting the willingness to pay φ and the perceived value of the label l j. These two approaches can be seen as extreme cases since labels will only be purchased if φl j ≥ η j, and then any price p j ∈ [η j, φl j] could be acceptable to both both buyer and the seller. As a by-product of market clearing, the analy-
st can estimate a set of parameters θˆ(DL, DU, Dac
ML) based on their own data, as well as acquired labels,
for their regression model. The analyst also deduces the estimate of the overall loss function by acquiring
D ac
ML ⊆ DML. We write l j the loss reduction induced by acquiring the label y j .
In principle, acquiring the labels y j ∈ Dac
ML leads to an overall reduction ΔL in the loss function of interest. It can be expressed as
ΔL = L (DL, DU; M, l) − L (DL, DU, Dac
ML; M, l) (4)
where the first and second terms are the overall loss values before and after acquiring the labels in Dac
ML,
respectively. In the following, the type of loss functions we will consider will include the variance of parameter estimates and the generalized prediction performance (i.e., Mean Squared error, MSE, on a validation set).
2.5 Data purchase as an optimisation problem
Based on the data market framework introduced in Section 2.2, we then formulate our simplified label acquisition problem. Consider a data analyst who wishes to purchase labels from a set of sellers to improve some negatively-oriented metric l (the lower, the better) related to their regression model (e.g., variance of parameter estimates or some measure of prediction error). The key challenge is to decide which labels y j ∈ DML should be acquired. Conceptually, assuming that each data point contri-
butes with an additive improvement l j, we have a combinatorial optimization problem with budget constraints. Indeed, the data analyst has a budget limit B and an expected threshold α for the reduction of the loss function. In practical applications, those constraints can be excessively strict, potentially leading to an insufficient number of purchased data points. To mitigate this issue, we relax the constraints as either the budget or loss function threshold is met. Therefore the simplified setu-
p can be defined as
6

min
{zj }
m ∑︁
j =1
z j p j (5a)
subject to l ̃ = l −
m ∑︁
j =1
z j l j (5b)
ηj
lj
≤ φ , ∀ j (5c)
pj =
(
φ l j (BC)
η j (SC)
, ∀ j (5d)
m ∑︁
j =1
z j p j ≤ B ⊥ l ̃ ≤ α , ∀ j (5e)
z j ∈ {0, 1} (5f)
where the price p j is defined as p j = φ l j or p j = η j, following the BC and SC pricing approaches, respectively (as expressed in (5d)). Problem (5) is intentionally presented as a simplified, stylized abstraction of the label-purchase process. Its additive and separable structure assumes that the benefits from purchasing labels can be written as Í
j z j l j. This is, of course, a simplification: in real-world data-purchase settings, the value of data is typically state-dependent—the contribution of label j depends on which other labels have already been acquired—and information may be shared across labels. Hence, the effective contribution of label j is generally a function of (z1, . . . , z j), and market participants may behave strategically. The formulation in (5) therefore does not aim to capture the full richness of market dynamics; ra-
ther, it serves as an analytically tractable benchmark that highlights the allocation trade-offs that motivate our active-learning framework. Although the simplified structure in (5) superficially resembles a knapsack formulation, applying knapsack algorithms directly is infeasible in our setting. Knapsack methods—exact, approximate, or heuristic [Martello and Toth, 1990, Bourdache and Perny, 2019]—all require that the utilities of all items be known in advance. In our context, these utilities cor-
respond to the realised improvement from labeling each point, which can only be observed after the label has been purchased. This makes classical knapsack approaches unsuitable for strategic and limited label acquisition. Moreover, even if approximate utilities were available, the combinatorial nature of the problem combined with the scale of modern datasets renders exact solvers and approximation schemes computationally burdensome. In contrast, active learning provides a scalable and adaptive alt-
ernative: it uses estimators of label utility that can be updated as labels are acquired, without requiring all labels to be observed upfront [Cacciarelli and Kulahci, 2024]. While knapsack algorithms offer strong optimality guarantees when item utilities are fully known, this assumption is unrealistic here. Active learning trades global optimality guarantees for adaptability and computational feasibility, making it more practical for real-world large-scale label acquisition tasks.
2.6 Market properties
The proposed active learning market adheres to the following desirable market properties. (i) Budget Balance
A market is budget-balanced if the sum of revenues on the seller side is equal to the sum of payments on the buyer side. In a single-buyer-multiple-seller setup like ours, for both pricing approaches considered, it is straightforward to see that the buyer readily pays the sellers on an individual label basis, ensuring budget balance by construction in (5a). The market is then budget-balanced by design. (ii) Symmetry
7

Symmetry holds if sellers with identical contributions l j and identical willingness-to-sell η j are treated equivalently. From our definition of prices in (5d), i.e.,
pj =
(
φl j, buyer-centric pricing
η j, seller-centric pricing (6)
we can see that if l j = l′
j and η j = η′
j , then p j = p′
j. Moreover, the selection decision in (5f) depends solely on l j, η j and φ, ensuring that there is no preference in the case of having sellers with identical information and willingness to sell. Note that symmetry holds only in the simplified formulation of (5). In our active learning market, utilities are updated adaptively, so if two labels contain similar information, acquiring one naturally reduces the marginal value of the other. As a result, exact symmetry does not persist in practice—an e-
xpected and even beneficial property, as it discourages spending on labels that add little new information. We emphasise that the symmetry discussed here is a property of the stylised optimisation formulation, not an assumed behavioural property of the active learning process itself.
(iii) Truthfulness.
Truthfulness, also referred to as incentive compatibility, is the property such that, for all agents involved, it is a weakly dominant strategy to truthfully reveal their preferences through the market mechanism. Our setting does not aim to fully model strategic behaviour; rather, we use “truthfulness” in an operational sense: under the simple market rules we adopt, deviating from truthful reporting does not increase a participant’s expected payoff. Here, this would translate into sellers providin-
g their true labels while revealing their true willingness to sell. On the buyer’s side, this would translate to truthfully revealing their willingness to pay. This property should hold regardless of the pricing approach chosen in (5d) (buyer-centric or seller-centric). On the buyer side, reporting the truthful willingness to pay (WTP) is operationally optimal. If the analyst understates their WTP, they may fail to acquire labels that are quite informative, thereby reducing overall model performan-
ce. Conversely, overstating the WTP may result in purchasing labels whose value does not justify the payment, making the purchase strictly suboptimal. On the seller side, changing the WTS cannot increase the seller’s expected payoff. This is because, under both pricing mechanisms, a label must first pass the market’s selection criterion in (5c) before it can be purchased. Increasing the WTS η j always makes it harder for the label to satisfy this criterion, and therefore directly lowers the probab-
ility of being selected. Decreasing the WTS does not increase the payment received. Hence, even before considering the pricing rule, manipulating the WTS cannot improve expected revenue because it interferes with the basic eligibility to be purchased. Even if one imagines removing the selection criterion entirely, increasing the WTS still does not benefit the seller. In principle, a seller might try to raise the WTS up to the buyer’s budget threshold B, since this is the maximum amount that the bu-
yer could ever pay. However, the seller does not know the buyer’s budget: it is internal information available only to the analyst. Therefore, in both BC and SC, manipulating the WTS cannot improve the seller’s expected payoff. Another consideration is on data quality - if the data provided is not true, then the probability of the modified data being purchased is lower than the probability of purchasing the true data, therefore the expected utility is lower as well. For these reasons, and within t-
he scope of our simplified, non-strategic market structure, truthful revelation is operationally advantageous for both buyers and sellers. (iv) Individual Rationality
Individual rationality is satisfied if all sellers entering the market are not in a potential loss-making position. In view of the definition of our pricing approaches, constraints (5c) and (5d) ensure that the payment will only be such that p j ≥ η j. On the analyst side, while labels are only purchased if they lead to a loss reduction, the constraint (5e) ensures that they achieve a desirable level of loss reduction within the budget constraint. (v) Zero-Element.
8

The zero-element property requires that no transaction should occur when a seller does not provide a data point or provides a data point with no value (i.e., l j = 0). In the relaxed optimisation problem (5), this property holds automatically: if l j = 0, the point neither contributes to the model-improvement requirement nor lowers the analyst’s total cost. Hence the optimal solution sets z j = 0, and the corresponding payment satisfies
z j p j = 0, ∀ j : l j = 0. (7)
In contrast, the behaviour differs once pricing rules are applied in the algorithms. Under buyer-centric (BC) pricing, the payment rule p j = φl j ensures p j = 0 whenever l j = 0, so the zero-element condition is operationally true. However, in seller-centric (SC) pricing, a label must be acquired before its improvement can be evaluated, and the price p j = η j applies to any acquired label irrespective of l j. Thus, while the zero-element property holds cleanly at the level of the relaxed optimi-
sation problem, it cannot be enforced at the payment level under SC pricing. Later, in Section 3.3 and 4, we show how active learning strategies reduce the frequency with which non-improving points are queried in practice, thereby mitigating the impact of this limitation under SC pricing.
3 Methodology
Solving (5) is not tractable in practice, in view of the combinatorial nature of the optimisation problem. In contrast, here, we introduce an active learning framework that allows one to operationalize data purchasing under budget constraints. It should be seen as a greedy approach to solving the original problem. The existing literature on active learning often overlooks transactional frictions and assumes access to all labels without cost (or at the same cost). Our framework fills this methodolo-
gical gap by explicitly modelling the acquisition of labels as a market interaction, where data is traded between sellers and a data analyst constrained by a budget and incentivized by model performance gains. This section proceeds by describing the modelling structure, evaluation metrics, and the specific learning strategies deployed.
3.1 Modelling framework
To simulate this process, we model a dynamic market environment, visualized in Figure 2, where a data analyst begins with a small labelled dataset DL and a large pool of unlabelled data DU while data providers possess missing labels DML. At each iteration, the analyst computes model performance based on the current labelled data DL and evaluates whether the acquisition of an additional data point is expected to reduce the loss l of the model. A purchase decision is made only if the marginal loss r-
eduction l j, achieved by purchasing a data point y j ∈ DML, justifies its cost, subject to a budget constraint B. Data points are integrated into the model only if their contribution is positive and cost-effective, and this process continues until the budget is exhausted or a predefined performance threshold α is met.
3.2 Quality metrics
3.2.1 Focus on estimation quality
In many applications, accurate parameter estimation is essential for interpreting relationships between input features and target outcomes. In fields such as real estate or pharmaceuticals, regression coefficients serve as interpretable measures—indicating, for example, how location or size affects property prices, or how dosage influences drug efficacy. In such contexts, the focus is on in-sample model fit and the stability of estimated parameters. We adopt the linear regression model as the foun-
dation.
Yk = x⊤
k β + εk, ∀k, (8)
9

Participants
Data Analyst:
Labelled data DL Unlabelled data DU Budget B Model performance threshold α Willingness to pay (WTP) φ
Data Sellers:
Missing labels DML Willingness to sell (WTS) ηj
Initialisation & Approach
Train initial model on DL Initialise cost c = 0 Initialise model performance l̃
Active learning strategy
Variance-based active learning QBC-based active learning
Select data point from DU
Add to DL , remove from DML
Compute price using BC or SC
c > B or l̃ < α ?
Update model performance l̃, cumulative cost c
No
Active learning
End
Yes
Acquire its label from DML,
compute model improvement lj*
Label acquired but not used
Yes
No
Good data point?
Figure 2: Overview of the active learning market. Random Sampling Corrected (RSC) serves as the baseline method, in which data points are selected randomly rather than through active learning and are purchased only if their labels yield positive model improvement. This baseline is omitted from the diagram for clarity.
where Yk is the response variable, xk is the vector of input features for sample k, β is the coefficient vector, and εk denote the error term. Under standard assumptions, the variance of the estimated parameters is:
Var[β] = (X⊤X)−1 σ2
Y (9)
which highlights the role of data geometry—via the information matrix X⊤X—in determining estimation precision. In the above, σ2
Y is the variance of the response variable Y . Lower parameter variance implies greater model stability and more reliable interpretation.
3.2.2 Focus on predictive ability
In forecasting-oriented domains such as energy demand prediction or financial modelling, model performance is primarily assessed by its ability to generalize to unseen data. Rather than focusing on parameter interpretability, these applications prioritize minimizing out-of-sample prediction error. To quantify this, the mean squared error (MSE) is employed as the primary evaluation metric. In this study, we use a validation-based evaluation approach. The model is trained on an initially labelled da-
taset, and candidate data points are acquired from an unlabelled pool using various active learning strategies. Model performance is evaluated on a separate, held-out validation set that simulates future or independent data. This setup reflects practical decision-making scenarios, in which the effectiveness of data acquisition must be measured against a real-world prediction task. Formally, given a linear regression model as defined in (8), the predictions Yˆk are evaluated using:
L= 1
N
N ∑︁
k=1
(Yk − Yˆk)2, (10)
i.e., with a Mean Squared Error (MSE) criterion, where Yk and Yˆk denote the true and predicted values in the validation set (with N forecast-observation pairs). The goal of each acquisition strategy is to improve the model performance in this validation set while respecting budget constraints.
3.3 Data purchase strategies
The data purchase problem addressed in this paper is inherently constrained by budget and governed by heterogeneous pricing. Active learning, a framework designed to select the most informative data point under
10

label scarcity, provides a principled foundation for addressing such challenges [Zheng and Padmanabhan, 2006, 2002]. In particular, active learning allows the analyst to determine which data points should be acquired to maximize model improvement while minimizing redundant or uninformative acquisitions. Active learning strategies are typically divided into two families: optimization-based and heuristic-based approaches [Cohn et al., 1996, Tong, 2001, Settles, 2011]. Optimization-based methods rel-
y on objective functions that formalize notions of informativeness, such as uncertainty reduction or expected loss. In contrast, heuristicbased approaches draw on approximations or model ensembles to identify uncertain points. In our study, we focus on one strategy from each category: variance-based active learning (VBAL), rooted in optimal experimental design, and Query-by-Committee active learning (QBCAL), a heuristic method based on committee disagreement. As a benchmark, we include a random sa-
mpling corrected (RSC) strategy.
3.3.1 Variance-Based Active Learning (VBAL)
Variance-based active learning (VBAL) is based in Optimal Experimental Design (OED), which provides criteria for selecting data points that most effectively reduce model uncertainty in regression tasks [Lu et al., 2024, Atkinson, 1996, Atkinson and Bailey, 2001, Atkinson et al., 2007]. A central quantity in OED is the information matrix X⊤X, derived from the feature X of the labelled dataset [Zheng and Padmanabhan, 2006]. Several classical criteria operate on this matrix to guide selection: D-opti-
mality seeks to minimize the volume of the confidence ellipsoid around the regression coefficients by maximizing det(X⊤X); The A-optimality minimizes the average variance of the coefficient estimates by minimizing tr(X⊤X)−1; and the G-optimality focuses on predictive reliability, aiming to minimize the maximum prediction variance in the design space. While D and A-optimality optimize parameter estimation globally, G-optimality is more aligned with our goal: ensuring that predictions are uniformly -
reliable across all regions of the input space. In formal terms, G-optimality minimizes the worst-case prediction variance, defined as
mXin max
x∈X
x⊤ (X⊤X)−1x (11)
where X ∈ Rn× p stacks the currently labelled covariates as rows; X ⊂ Rp is the candidate design space; and x ∈ X is a column vector. We assume X has full column rank so that X⊤X is invertible; when this matrix is ill-conditioned early in the process, we replace (X⊤X)−1 with (X⊤X + λI)−1 for a small λ > 0. However, in our setting, instead of optimizing the entire design, we operate in a sequential and budgetconstrained environment where data is acquired one point at a time. Therefore, we adopt a g-
reedy approximation of G-optimality by selecting, at each step, the candidate data point with the highest unscaled prediction variance (UPV):
x∗ = arg max
x ∈DU
x⊤ (X⊤X)−1x (12)
This UPV score reflects the epistemic uncertainty of the model on each candidate and acts as a local pointwise surrogate for G-optimality. Though it does not yield a globally optimal design, it is well-suited for iterative acquisition under limited budget and incomplete information. In both active-learning strategies and the RSC baseline, pricing follows an ex-post mechanism. The analyst first proposes to purchase a candidate point and, after acquiring its label, temporarily augments the model wit-
h this labelled point for evaluation purposes. This allows her to compute the realised improvement l j. Only after observing l j is the price p j determined—e.g., via constraint (5d) under the buyer-centric scheme. Thus, she proposes a purchase, inspects the actual contribution of the point, and then pays a price directly tied to its realised value. This ex-post pricing structure is standard in many practical settings (e.g., value-based pricing, performance-contingent payments) and naturally integ-
rates into our label purchase problem here. Eventually, the detailed approach to implementing VBAL is described in Algorithm 1.
11

Algorithm 1 Variance-Based Active Learning (VBAL) Algorithm
1: Input:
Labelled data: DL = {(x1i, x2i, . . . , xPi, yi) | i = 1, 2, . . . , K }
Unlabelled data: DU = x1 j , x2 j , . . . , xP j | j = K + 1, . . . , N
Missing labels: DML = y j | j = K + 1, . . . , N Budget: B Model performance threshold: α Willingness to pay: φ Willingness to sell: η j 2: Output: Updated DL and reduced DML
3: Initialise total cost c ← 0, purchase number t ← 0 and current loss l ̃ ← Loss(Model(DL))
4: while c < B and l ̃ > α do
5: Select x j∗ according to the prediction–variance criterion (using (12)) 6: Acquire y j∗ , t ← t + 1 ⊲ The label must be purchased first to compute the loss reduction 7: Temporarily compute the loss reduction:
l j∗ = l ̃ − Loss Model(DL ∪ {(x j∗ , y j∗ )})
8: if l j∗ > 0 and η j∗ /l j∗ ≤ φ then ⊲ good data point
9: DL ← DL ∪ {(x j∗ , y j∗ )}, DML ← DML \ {y j∗ }
10: Compute price:
p j∗ =
(
φl j∗ (Buyer-centric)
η j∗ (Seller-centric)
11: l ̃ ← l ̃ − l j∗ 12: else ⊲ bad data point 13: DML ← DML \ {y j∗ } ⊲ label acquired but never used 14: Compute price:
p j∗ =
(
0 (Buyer-centric)
η j∗ (Seller-centric)
15: end if
16: c ← c + p j∗ ⊲ Update total cost 17: end while
3.3.2 Query-by-Committee-Based Active Learning (QBCAL)
In addition to VBAL, we employ Query-by-Committee-based active learning (QBCAL) as a robust alternative for data acquisition under uncertainty. QBCAL is particularly well-suited to settings in which a single model may provide unreliable or overconfident uncertainty estimates, especially in the presence of sparse labelled data, model misspecification, or complex, multimodal feature spaces. By leveraging model disagreement as a proxy for epistemic uncertainty, QBCAL enables the identification of dat-
a points where the current labelled set provides insufficient or inconsistent information. Classical QBCAL approaches in classification typically fall into two categories: vote entropy [Freund et al., 1997, Argamon-Engelson and Dagan, 1999], which quantifies disagreement among classifiers by evaluating the entropy of predicted labels, and margin confidence [Abe and Mamitsuka, 1998, Settles, 2011], which prioritizes points with the smallest difference between the most probable class labels. Althoug-
h effective in classification tasks, these strategies are not directly applicable in regression settings where the output is continuous rather than categorical. To adapt QBCAL to our regression-based context, we adopt a variance-based formulation that directly measures prediction dispersion. At each iteration, a model committee M = {M1, M2, . . . , Mm} is trained
12

using bootstrap replicates of the current labelled dataset DL. For each candidate point x j ∈ DU, the predictive uncertainty is quantified by the variance of the committee output:
Var(yˆ (x j)) = 1
M
M ∑︁
m=1
yˆm (x j ) − y ̄ˆ (x j ) 2 (13)
where yˆm(x j) is the prediction of the model Mm and y ̄ˆ (x j) is the mean prediction of all members of the committee. The candidate with the highest predictive variance is selected as the most informative. As in VBAL, the analyst estimates the expected loss reduction l j and evaluates whether the point satisfies the cost-efficiency constraint given in (5c). If the expected benefit is positive and the acquisition cost is within budgetary limits, the point is added to the labelled dataset, the mod-
el is updated, and the budget is adjusted. This process continues until the performance threshold α is achieved or the available budget B is fully consumed. The detailed version of QBCAL is in Algorithm 2.
Algorithm 2 Query-by-Committee Active Learning (QBCAL)
1: Input: Labelled data DL, Unlabelled data DU, Missing labels DML, Budget B, Model performance threshold α, WTP φ, WTS η j 2: Output: Updated DL, reduced DML
3: Initialise total cost c ← 0, purchase number t ← 0 and current loss l ̃ ← Loss(Model(DL))
4: while c < B and l ̃ > α do 5: Train a committee of models on DL using bootstrap sampling 6: for each x j ∈ DU do 7: Compute predictive variance Var(yˆ (x j )) using (13) ⊲ Selection criterion 8: end for
9: Select the most ambiguous point: x j∗ = arg max
x j ∈DU
Var(yˆ (x j ))
10: Acquire the label y j∗ , t ← t + 1 and temporarily compute the loss reduction
l j∗ = l ̃ − Loss Model(DL ∪ {(x j∗ , y j∗ )})
11: Compute the price p j∗ as in Algorithm 1 12: if l j∗ > 0 and η j∗ /l j∗ ≤ φ then
13: DL ← DL ∪ {(x j∗ , y j∗ )}, l ̃ ← Loss(Model(DL)) 14: end if
15: DML ← DML \ {y j∗ } ⊲ label is acquired in all cases
16: c ← c + p j∗
17: end while
3.3.3 Random Sampling Corrected (RSC) strategy
The Random Sampling Corrected (RSC) strategy, formally detailed in Algorithm 3, serves as a baseline in our analysis. It allows us to evaluate the benefits of more sophisticated active learning strategies against a simple, non-informed approach that still incorporates basic cost awareness. The method is based on traditional random sampling, but is corrected to avoid unproductive data acquisitions. At each iteration, the data analyst randomly selects a data point from the pool of unlabelled data wi-
th missing labels, denoted DML. This selected data point is evaluated by estimating the potential reduction in model loss l j that would result from incorporating it into the labelled dataset DL. If this estimated loss reduction is positive—i.e., if the data point is expected to improve the model, and the cost-effectiveness of this data point satisfies the constraint given in (5c), then the data point is purchased. Upon purchase, the data point is removed from DML, added
13

to DL, and the model is retrained with the augmented dataset. The total cost c is updated by adding the price of the newly acquired data point. This process repeats until the budget is exhausted or the model reaches the desired performance level. While RSC does not leverage structure in the feature space or model uncertainty, it avoids purchasing uninformative or harmful data points, making it a reasonable benchmark for evaluating active learning methods.
Algorithm 3 Random Sampling Corrected (RSC) Algorithm
1: Input: Labelled data DL, Unlabelled data DU, Missing labels DML, Budget B, Model performance threshold α, WTP φ, WTS η j 2: Output: Updated DL and reduced DML
3: Initialise total cost c ← 0, purchase number t ← 0 and current loss l ̃ ← Loss(Model(DL))
4: while c < B and l ̃ > α do
5: Randomly select an index j with x j ∈ DU and y j ∈ DML 6: Acquire y j , t ← t + 1 ⊲ number of purchased data points 7: Temporarily compute the loss reduction
l j = l ̃ − Loss Model(DL ∪ {(x j , y j )})
8: Set the price
pj =



φ l j (l j > 0, Buyer-centric)
0 (l j ≤ 0, Buyer-centric)
η j (∀l j , Seller-centric)
9: if l j > 0 then
10: DL ← DL ∪ {(x j , y j )}, l ̃ ← Loss(Model(DL)) 11: end if
12: DML ← DML \ {y j } ⊲ label is acquired in all cases 13: c ← c + p j 14: end while
4 Real-world applications
Our proposed active learning markets can be applied to broad scenarios, either to improve estimation quality, or to improve predictive ability. Therefore, here we focus on the real estate data set and the energy building data set, respectively. Under each dataset, we use active learning as our data purchase strategy to show how our strategy can (i) improve cost-efficiency in decision making, (ii) benefit both the analyst and the sellers, and (iii) ensure robustness in real-world applications.
4.1 Focus on estimation quality
4.1.1 Dataset and case-study
We used a public real estate data set from Sindian District, New Taipei City [Yeh, 2021], containing key transaction features (date, age, MRT distance, convenience stores) and unit-area price. A linear regression model is used to explain the variation in prices.
4.1.2 What are the effects of applying active learning?
We set the WTP at φ = 1200 (£/Δ), budget at B = £15, and a target improvement of 20%. To introduce controlled heterogeneity on the seller side, the WTS η j is generated synthetically from the “distance to MRT”
14

feature:
η j = d0 + d1 1 −
X3 j − X3
X3 − X3
!
,
with d0 = 0.1, d1 = 0.5, and [X3, X3] the observed range. This serves only to induce heterogeneous seller costs (e.g., privacy, effort, reluctance) in a controlled manner; it does not imply that property characteristics determine economic WTS. Prices follow (5d), with all other parameters identical in BC and SC. Under BC (Figure 3), VBAL and QBCAL reach higher improvement (21.17%, 21.23%) than RSC (20.01%) at similar cost (≈ 10). Under SC (Figure 4), they again improve faster while costing far les-
s (£4.90–£4.96 vs £10.34). A summary is provided in Table 1.
Statistical validation. To confirm that the observed average cost differences are statistically significant, we applied the non-parametric Wilcoxon signed-rank test. The test compared each active learning method (VBAL and QBCAL) with the random sampling corrected (RSC) baseline across 50 paired runs under both pricing schemes. Table 2 reports the two-sided p-values and median cost differences. All comparisons yield p < 0.05, indicating significant differences in cost performance. Under buyer-centr-
ic (BC) pricing, VBAL and QBCAL show notably lower median average costs than RSC (−16.409 and −16.499), while under seller-centric (SC) pricing, both also achieve smaller but consistent reductions (−0.059 and −0.027). These results confirm that the cost-efficiency advantages of the proposed methods are statistically robust rather than due to random variation.
Table 1: Comparison of Data Purchasing Strategies: Estimation-quality-focused scenario
Strategy Approach B exhausted? α met? Bought Spent (£) Improvement (%) Avg. Cost (£/data)
VBAL BC No Yes 11 10.56 21.17 0.96
SC No Yes 11 4.90 21.17 0.45
QBCAL BC No Yes 11 10.59 21.23 0.96
SC No Yes 11 4.96 21.23 0.45
RSC BC No Yes 20 9.98 20.01 0.50
SC No Yes 20 10.34 20.01 0.52
Table 2: Wilcoxon signed-rank test comparing active learning methods with RSC baseline (estimationquality-focused scenario)
Approach Comparison p-value Median Δ (Method – RSC)
BC VBAL vs RSC 1.47 × 10−8 −16.409 BC QBCAL vs RSC 6.99 × 10−9 −16.499 SC VBAL vs RSC 1.35 × 10−13 −0.059 SC QBCAL vs RSC 4.01 × 10−4 −0.027
4.1.3 Does active learning improve cost-efficiency for analysts?
Beyond the averages reported in Table 1, a more revealing picture arises when we track how cost efficiency evolves from the analyst’s perspective. Figure 5 illustrates the cumulative average of the cost-efficiency ratio, Δv/Δc, achieved up to the data points purchased, where Δv represents the reduction in posterior variance
15

1 5 9 13 17 21
Data points purchased
0
5
10
15
20
Model improvement [%]
Improvement threshold = 20%
VBAL QBCAL RSC
(a) Model improvement
1 5 9 13 17 21
Data points purchased
0
2
4
6
8
10
12
14
Cumulative budget [£]
Budget Limit = 15
VBAL QBCAL RSC
(b) Cumulative budget
Figure 3: Buyer-centric pricing approach (the starting point is not purchasing any data point)
1 5 9 13 17 21
Data points purchased
0
5
10
15
20
Model improvement [%]
Improvement threshold = 20%
VBAL QBCAL RSC
(a) Model improvement
1 5 9 13 17 21
Data points purchased
0
2
4
6
8
10
12
14
Cumulative budget [£]
Budget Limit = 15
VBAL QBCAL RSC
(b) Cumulative budget
Figure 4: Seller-centric pricing approach (the starting point is not purchasing any data point)
due to each data point, and Δc denotes its associated price. A higher value of Δv/Δc indicates a greater reduction in variance per unit cost. As shown in this figure, VBAL and QBCAL consistently outperform the baseline RSC method. Note that we report dynamics only for SC because, under constraints (5c)–(5d) in the optimization problem (5), the cost-efficiency ratio in BC is fixed at 1/φ and thus omitted.
4.1.4 Do pricing approaches affect sellers?
To assess how pricing schemes influence sellers’ revenue, we examine the set of sellers selected under the BC and SC approaches, ranking them in descending order by their BC revenue. Figure 6 reports the revenue differences between the two schemes. The x-axis represents the number of sellers rather than specific IDs; the two adjacent bars correspond to the same seller under BC and SC. The results show that data prices in BC are consistently higher than in SC. In the buyer-centric scheme, the analy-
st allocates her budget to
16

1 3 5 7 9 11 13 15 17 19 21
Data points purchased
2
4
6
8
v/ c [×10 3 TWD2/£]
VBAL QBCAL RSC
Figure 5: Analyst’s side analysis on SC approach: variance reduction per unit cost. Results are represented as cumulative averages (i.e., as the average up to that data point purchased).
maximize improvement and is willing to pay more for highly informative labels, resulting in substantially higher revenue for the most valuable sellers. In contrast, the seller-centric scheme spreads the budget more evenly, producing smaller revenue differences between sellers. In general, BC rewards high-value sellers more strongly by highlighting informativeness, while SC produces a more balanced distribution of revenue across the market.
1 2 3 4 5 6 7 8 9 10
Seller rank (ordered by BC)
0.0
0.5
1.0
1.5
2.0
Revenue [£]
BC (Buyer-centric) SC (Seller-centric)
(a) VBAL
123456789
Seller rank (ordered by BC)
0.0
0.5
1.0
1.5
2.0
Revenue [£]
BC (Buyer-centric) SC (Seller-centric)
(b) QBCAL
1 5 9 13 17 21
Seller rank (ordered by BC)
0.0
0.5
1.0
1.5
2.0
Revenue [£]
BC (Buyer-centric) SC (Seller-centric)
(c) RSC
Figure 6: Revenue comparison for sorted data sellers under buyer-centric and seller centric pricing approaches
4.1.5 Is Our Active Learning Strategy Robust?
For all robustness experiments in this section, we evaluate the algorithms using the number of effectively purchased data points — the subset of acquired points that were actually incorporated into the model and contributed to improvement. This distinguishes true learning progress from mere expenditure. To assess robustness, we performed two Monte Carlo–based analyses: the first examined how random data perturbations affect performance, and the second explored the sensitivity to key model and econ-
omic parameters.
17

Data Variability. A Monte Carlo simulation with 1,000 replications was conducted by repeatedly resampling subsets of the original data, with a model-improvement threshold fixed at 20%. Figures 7 and 8 show the resulting distributions of effectively purchased data points (i.e., data points used to improve the model) for buyer-centric (BC) and seller-centric (SC) pricing schemes. VBAL and QBCAL exhibit concentrated frequency distributions (Figures 7a–b and 8a–b), indicating stable behaviour across -
replications, while the random baseline (RSC) produces flatter distributions (Figures 7c and 8c), reflecting higher variability and lower robustness.
4 5 7 9 11
Effectively purchased data points
0
100
200
300
400
Frequency
(a) VBAL
2 4 6 8 11
Effectively purchased data points
0
100
200
300
400
Frequency
(b) QBCAL
9 14 19 24 30
Effectively purchased data points
0
100
200
300
400
Frequency
(c) RSC
Figure 7: Monte-Carlo simulation for the buyer-centric pricing approach
1 3 6 8 11
Effectively purchased data points
0
100
200
300
400
Frequency
(a) VBAL
1 3 6 8 11
Effectively purchased data points
0
100
200
300
400
Frequency
(b) QBCAL
9 13 18 23 28
Effectively purchased data points
0
100
200
300
400
Frequency
(c) RSC
Figure 8: Monte-Carlo simulation for the seller-centric pricing approach
Parameter Sensitivity. A second Monte Carlo analysis evaluated how key parameters affect performance in the estimation-quality-focused setting. We varied (i) the WTP of the buyer (φ), (ii) the WTS scaling coefficient of the seller (d1), and (iii) the budget limit (B), holding all other parameters at baseline (the improvement threshold was raised to 90% to clarify WTP trends). Figures 9a–9f and Table 4 (Appendix) show that VBAL and QBCAL maintain smooth, monotonic purchase patterns, whereas RSC exh-
ibits irregular fluctuations due to its non-adaptive design. As d1 increases, stricter acceptance reduces purchases, with occasional local increases when the remaining budget allows high-value purchases. Overall, VBAL and QBCAL acquire fewer but more informative samples than RSC, demonstrating stronger selectivity and cost efficiency.
18

1000 1050 1100 1150 1200
Willingness to Pay [£/TWD2 ]
8
10
12
14
16
18
20
Effectively purchased data points
VBAL QBCAL RSC
(a) WTP variation under BC pricing
1000 1050 1100 1150 1200
Willingness to Pay [£/TWD2 ]
8
10
12
14
16
18
20
Effectively purchased data points
VBAL QBCAL RSC
(b) WTP variation under SC pricing
0.5 1.0 1.5 2.0 2.5
WTS scaling coefficient d1
8
10
12
14
16
18
20
Effectively purchased data points
VBAL QBCAL RSC
(c) WTS variation under BC pricing
0.5 1.0 1.5 2.0 2.5
WTS scaling coefficient d1
4
6
8
10
12
14
16
18
Effectively purchased data points
VBAL QBCAL RSC
(d) WTS variation under SC pricing
10 15 20 25 30
Budget limit B [£]
15
30
45
60
75
90
105
Effectively purchased data points
VBAL QBCAL RSC
(e) Budget variation under BC pricing
10 15 20 25 30
Budget limit B [£]
15
20
25
30
35
40
45
50
55
Effectively purchased data points
VBAL QBCAL RSC
(f) Budget variation under SC pricing
Figure 9: Sensitivity analyses of the buyer’s willingness-to-pay (φ), the seller’s willingness-to-sell (WTS) scaling coefficient (d1), and the budget limit (B). The left column shows the results for buyer-centric (BC) pricing, while the right column corresponds to seller-centric (SC) pricing.
19

4.2 Focus on predictive ability
Although active learning in the estimation-quality-focused scenario shows promising results, it is equally important to evaluate performance in a predictive-ability-focused setting, where the emphasis is on generalization.
4.2.1 Case study and dataset
We use the BDG2 dataset [Wang et al., 2022], which contains the hourly energy consumption of 1,636 buildings from 2016 to 2017. For illustration, we consider an educational building (“Rachael”) as the data analyst and identify its most similar building (“Madge”) via Euclidean distance in the feature space, treating it as the data seller. Each observation includes the month, weekday, day, hour, holiday indicator, air temperature, and energy consumption. We adopt a sliding-window approach using only-
 the “value” characteristic (hourly consumption) to construct lagged inputs: the consumption of the past seven days’ at 24-hour intervals (e.g. t−168, t−144, . . . , t−24), with the current hour’s consumption at time t as the prediction target. Then a linear forecasting model is trained on these lagged features.
Label availability. Although the BDG2 data set contains complete hourly labels, we simulate a market environment in which labels Y must be purchased at the time of use. This mimics realistic settings where timely, cleaned, and query-ready data carry an access cost—even if such data may later become freely available (as in IoT systems). In our batch-learning setup, labels become available only when purchased, consistent with the market-based learning framework. In this experiment, model-improvement-
 threshold is set to 20% and the budget is B = £1200. The analyst’s WTP is φ = 50 (£/ΔMSE). As in Section 3.2.2, “Rachael” represents the analyst and “Madge” is the seller. The WTS of the seller is set uniformly at η = 30 (£/label). The mechanism sensitivity constant is set to 30 and scaled by the feature-normalisation factor γ, giving an effective sensitivity of 30γ.
4.2.2 What are the effects of applying active learning?
Table 3 compares the performance of the proposed active learning strategies (VBAL and QBCAL) with the random sampling corrected strategy (RSC). In the BC setting, VBAL and QBCAL achieve similar levels of model improvement (∼ 17%) at lower average cost per data point (£12.81 and £7.68, respectively) relative to RSC (£13.53). In the SC setting, the average cost per data point is identical between methods by design, so performance differences arise solely from the selectivity of the strategies rather-
 than from the pricing. The trends in model improvement and accumulated cost closely mirror those in Section 4.1.2 and are omitted for brevity. Statistical testing for BC is not repeated here as well. Under the seller-centric mechanism, costs are fully determined by fixed willingness-to-sell (WTS) values, making statistical testing not applicable.
Table 3: Comparison of Data Purchasing Strategies: Predictive-ability-focused scenario
Strategy Approach B ? α? Data Bought Spent (£) Improvement (%) Avg. Cost (£/data)
VBAL BC Yes No 97 1242.77 17.12 12.81
SC Yes No 40 1200.00 11.12 30.00 QBCAL BC Yes No 159 1221.84 16.83 7.68
SC Yes No 40 1200.00 11.39 30.00 RSC BC Yes No 90 1217.52 16.77 13.53
SC Yes No 40 1200.00 12.70 30.00
20

4.2.3 Does active learning improve cost-efficiency for analysts?
Similarly in Section 4.1.3, Figure 10 illustrates the accumulative cost-efficiency metric, denoted by ΔMSE/Δc, as more data points are purchased. The VBAL and QBCAL strategies consistently achieve higher ΔMSE/Δc values than RSC, indicating greater model improvement per unit cost. This demonstrates that the active learning-based approaches provide higher returns on labeling investment, particularly under limited budgets.
1 5 9 13 17 21 25 29 33 37 41
Data point purchased
0
25
50
75
100
125
150
175
MSE/ c [×10 3 TWD2/£]
VBAL QBCAL RSC
Figure 10: Analyst’s side analysis for the SC approach: MSE reduction per unit cost. Results are represented as cumulative averages (i.e., as the average up to that data point purchased)
4.2.4 Do pricing approaches affect sellers?
Figure 11 highlights the differences in the revenue distributions for sellers under the BC and SC pricing approaches. The BC approach results in a more concentrated revenue distribution compared to the SC approach. This suggests that BC pricing prioritizes sellers whose data points deliver the greatest utility, ensuring that compensation is more closely aligned with the quality and contribution of their data. In contrast, the broader revenue distribution in the SC approach indicates a less targete-
d allocation of compensation, potentially reducing incentives for sellers to offer high-utility data. Such findings highlight the effectiveness of the BC approach in incentivizing high-quality sellers and fostering efficient data markets by concentrating resources where they are most impactful.
1 5 9 11
Seller rank (ordered by BC)
0
50
100
150
200
250
300
Revenue [£]
BC (Buyer-centric) SC (Seller-centric)
(a) VBAL
159
Seller rank (ordered by BC)
0
50
100
150
200
250
300
Revenue [£]
BC (Buyer-centric) SC (Seller-centric)
(b) QBCAL
1 5 9 13 17 21 24
Seller rank (ordered by BC)
0
50
100
150
200
250
300
Revenue [£]
BC (Buyer-centric) SC (Seller-centric)
(c) RSC
Figure 11: Revenue difference for each data seller under different acquisition and pricing approaches
21

4.2.5 Is our active learning strategy robust?
Data Variability We ran 1,000 Monte Carlo iterations with a fixed 20% improvement target. Figures 12 and 13 report the distributions of the data points needed under BC and SC, respectively. VBAL and QBCAL show narrow, stable distributions, indicating strong robustness to random data variation, while RSC exhibits substantially wider spread.
Parameter Sensitivity We examine robustness through two analyses: (i) one-at-a-time parameter variations (Figure 14) and (ii) a Monte Carlo study over 50 random splits (summary in Table 5, Appendix). Figures 14a–14b show the effect of WTP: in BC, VBAL and QBCAL purchase more data as φ increases up to 50, then decline once the budget constraint (5e) binds; in SC, effective purchases decrease monotonically with WTP, while RSC fluctuates due to its non-adaptive design. Figures 14c–14d vary the seller-
’s WTS scale, and all methods buy fewer labels as the WTS increases. Figures 14e–14f vary budget limits (with the improvement threshold raised to 90% to sharpen trends): more budget leads to more acquisitions, with VBAL and QBCAL consistently requiring fewer points than RSC. In general, both VBAL and QBCAL remain selective and cost-effective across all settings.
8 16 24 32
Effectively purchased data points
0
30
60
90
120
150
Frequency
(a) VBAL
8 16 24 32
Effectively purchased data points
0
30
60
90
120
150
Frequency
(b) QBCAL
50 100 150 200
Effectively purchased data points
0
30
60
90
120
150
Frequency
(c) RSC
Figure 12: Monte-carlo simulation for the buyer-centric approach
8 16 24 32
Effectively purchased data points
0
30
60
90
120
150
Frequency
(a) VBAL
8 16 24 32
Effectively purchased data points
0
30
60
90
120
150
Frequency
(b) QBCAL
10 15 20 25 30
Effectively purchased data points
0
30
60
90
120
150
Frequency
(c) RSC
Figure 13: Monte Carlo simulation for the seller-centric approach
22

30 40 50 60 70
Willingness to pay [£/TWD2]
15
30
45
60
75
90
105
120
135
Effectively purchased data points
VBAL QBCAL RSC
(a) WTP variation under BC pricing
30 40 50 60 70
Willingness to pay [£/TWD2]
6
8
10
12
14
16
18
20
22
Effectively purchased data points
VBAL QBCAL RSC
(b) WTP variation under SC pricing
12345
WTS scaling factor
0
8
16
24
32
40
48
56
64
72
Effectively purchased data points
VBAL QBCAL RSC
(c) WTS variation under BC pricing
12345
WTS scaling factor
0
3
6
9
12
15
18
21
Effectively purchased data points
VBAL QBCAL RSC
(d) WTS variation under SC pricing
800 1000 1200 1400 1600
Budget limit B [£]
0
25
50
75
100
125
150
175
200
225
Effectively purchased data points
VBAL QBCAL RSC
(e) Budget variation under BC pricing
800 1000 1200 1400 1600
Budget limit B [£]
9
12
15
18
21
24
27
Effectively purchased data points
VBAL QBCAL RSC
(f) Budget variation under SC pricing
Figure 14: Sensitivity analyses of the buyer’s willingness-to-pay (φ), the seller’s willingness-to-sell (WTS) scaling coefficient (γ), and the budget limit (B). The left column shows the results for buyer-centric (BC) pricing, while the right column corresponds to seller-centric (SC) pricing.
23

5 Conclusions and perspectives for future work
5.1 Conclusions
Active learning markets are introduced as a way to purchase labels using active learning approaches, as motivated by real-world applications. The proposed framework addresses challenges prevalent across various industrial sectors, including real estate and energy forecasting, which serve as the primary scenarios in our analysis. Specifically, we employ two active learning approaches for cost-effective data acquisition: variance-based active learning (VBAL) and Query-by-Committee active learning (Q-
BCAL). Additionally, we examine two distinct pricing mechanisms – buyer-centric (BC) and seller-centric (SC)—representing extreme real-world conditions. Our analysis highlights the payment structure for data analysts and compares revenue distributions among data sellers under the proposed active learning approaches and established benchmarks. This work yields three key findings. First, both VBAL and QBCAL demonstrate significant costefficiency in purchasing data when benchmarked against a random s-
ampling approach. Second, under the two extreme pricing conditions, active learning leads to a more concentrated revenue distribution. Third, while both VBAL and QBCAL outperform random sampling in BC and SC pricing scenarios, practical market designs may benefit from hybrid pricing mechanisms to better define data prices in active learning markets. Importantly, our study is the first to conceptualize the active learning market while building on prior research into observation and feature markets.-
 The methodologies employed—spanning machine learning, active learning, and optimal experimental design (OED)—offer a rich foundation for future exploration.
5.2 Future works
Efficient data purchase is becoming crucial in our data-driven economies. Our proposed innovative active learning market provides a strong foundation to address this significant problem by offering a trade-off between cost and efficiency. Building on this success, further advancements can enhance its applicability. First, while current data is purchased in a batch setting, real-world data may arrive continuously as a stream, creating opportunities to develop a real-time label market. Second, a val-
uable extension is to investigate the multiplebuyer-multiple-seller settings which involve competition between sellers and buyers in a resource-constrained environment. In such competitive environments, game-theoretic tools and combinatorial optimization methods (e.g., knapsack heuristics) may play a larger role, complementing active learning in analyzing pricing, market dynamics, and efficiency. Additionally, a one-shot formulation of VBAL is also possible, even in the single-buyer–multiple-selle-
r case, where the budget is allocated in a single step. This connects naturally to knapsack heuristics, but requires the strong assumption that the utilities (or priorities) of all labels are known in advance. For this reason, we focus on iterative allocation, which better reflects adaptive practice, while leaving one-shot variants as an interesting theoretical direction for future work. Third, the design of the market for data and information requires careful reconsideration. Unlike traditional c-
ommodities, the uniqueness of data lies in defining both willingness to pay and willingness to sell, as its value is highly context-dependent. For data buyers, their WTP may depend on relevance of tasks, timeliness of sharing, quality of data, among others. For data sellers, their WTS can be influenced by the cost of acquiring data (and storing or sharing it), heterogeneous competition, or privacy constraints. Studying these interplay factors will provide a more comprehensive understanding of how -
the data market should be structured. Through modelling those dynamics, one can develop more rigorous pricing mechanisms that incorporate strategic behaviour, and thus ensure a fair, efficient, and incentive-compatible data market in the real-world scenarios. Fourth, while our empirical results are strong, we note that deriving formal performance or regret guarantees is particular challenging in our setting. Classical theoretical results in active learning typically assume that
24

all labels have identical unit cost, while our market-based setting allows heterogeneous prices that depend on sellers’ costs or preferences. This means that performance depends jointly on label informativeness and cost, and utilities evolve adaptively as labels are acquired, making standard analyses inapplicable. Developing theoretical guarantees in such heterogeneous-cost settings is therefore a challenging but important direction for future research. Finally, while our framework currently focu-
ses on linear regression and models linear in parameters, extending it to non-convex models such as deep neural networks is an important direction. Estimating label value in such settings is substantially more challenging due to non-convex optimization landscapes, stochastic training procedures, and state dependence. Possible avenues include using influence functions, gradient-based embeddings, or Bayesian uncertainty estimates to approximate label utilities.
A Monte Carlo results
This appendix reports additional Monte Carlo simulation results that complement the main estimation results presented in Sections 4.1.5 (Table 4) and 4.2.5 (Table 5). For each configuration, we vary key model parameters—namely willingness-to-pay (WTP) φ, willingness-to-sell (WTS) scaling coefficient η, and budget limit B—and report the mean and interquartile range of purchased data points across 50 independent runs. These results illustrate the robustness of the proposed pricing schemes and their -
sensitivity to parameter variations.
Table 4: Monte Carlo summary (50 runs) for estimation quality under the buyer-centric (BC) and sellercentric (SC) pricing schemes. Values denote mean [p25–p75] of purchased data points.
BC SC
Parameter / Value VBAL QBCAL RSC VBAL QBCAL RSC
WTP φ [£/TWD2]
1000 7.56 [7.00–8.00] 7.84 [7.00–8.00] 6.94 [1.00–14.75] 7.40 [7.00–8.00] 7.22 [6.00–8.00] 15.32 [15.00–20.00] 1050 7.60 [7.00–8.00] 7.98 [7.00–9.00] 6.50 [1.00–14.75] 7.42 [7.00–8.00] 7.40 [6.00–8.00] 15.32 [15.00–20.00] 1100 7.66 [7.00–8.00] 8.02 [7.00–9.00] 6.20 [1.00–14.00] 7.46 [7.00–8.00] 7.42 [6.25–8.00] 15.32 [15.00–20.00] 1150 7.70 [7.00–8.00] 8.08 [7.00–8.75] 6.00 [1.00–14.00] 7.60 [7.00–8.00] 7.58 [6.25–8.00] 15.32 [15.00–20.00] 1200 7.74 [7.00–8.00] 8.10 [7.00–8.75] 5.76 [1.00–14.00] 7-
.66 [7.00–8.00] 7.66 [7.00–8.00] 15.32 [15.00–20.00]
WTS scaling coefficient η
0.5 7.74 [7.00–8.00] 8.10 [7.00–8.75] 5.76 [1.00–14.00] 7.66 [7.00–8.00] 7.66 [7.00–8.00] 15.32 [15.00–20.00] 1.0 7.12 [6.00–8.00] 7.42 [7.00–8.00] 5.76 [1.00–14.00] 5.80 [5.00–7.00] 4.48 [2.25–6.75] 11.76 [12.00–15.00] 1.5 6.58 [6.00–7.00] 6.52 [5.25–8.00] 5.76 [1.00–14.00] 3.96 [2.00–5.75] 2.64 [1.00–4.00] 8.22 [8.00–11.00] 2.0 6.32 [5.00–8.00] 5.78 [3.00–8.00] 5.76 [1.00–14.00] 2.66 [2.00–4.00] 1.72 [1.00–3.00] 6.44 [7.00–8.75] 2.5 5.74 [4.00–7.00] 5.34 [3.00–7.00] 5.76 [1.00–14.00] 2.06 [1.00–-
2.00] 1.22 [0.00–2.00] 5.34 [5.00–7.00]
Budget limit B [£]
10 7.50 [7.00–8.00] 7.84 [7.00–8.00] 3.54 [1.00–4.50] 7.48 [7.00–8.00] 7.10 [6.00–8.00] 13.56 [14.00–17.00] 15 7.74 [7.00–8.00] 8.10 [7.00–8.75] 5.76 [1.00–14.00] 7.66 [7.00–8.00] 7.66 [7.00–8.00] 15.32 [15.00–20.00] 20 7.74 [7.00–8.00] 8.10 [7.00–8.75] 8.14 [1.00–15.75] 7.72 [7.00–8.00] 7.90 [7.00–8.75] 15.38 [15.00–20.00] 25 7.74 [7.00–8.00] 8.10 [7.00–8.75] 12.94 [9.50–17.75] 7.72 [7.00–8.00] 7.98 [7.00–8.75] 15.38 [15.00–20.00] 30 7.74 [7.00–8.00] 8.10 [7.00–8.75] 15.08 [14.25–19.75] 7.74 [7.0-
0–8.00] 8.00 [7.00–8.75] 15.38 [15.00–20.00]
25

Table 5: Monte Carlo summary (50 runs) for predictive ability. Values denote the mean and interquartile range [p25–p75] of effectively purchased data points.
BC SC
Parameter / Value VBAL QBCAL RSC VBAL QBCAL RSC
WTP φ [£/TWD2]
30 8.84 [7.25–10.00] 8.96 [7.00–11.00] 120.36 [71.50–159.75] 6.62 [5.00–8.00] 5.80 [4.00–8.00] 22.18 [20.00–24.00] 40 10.36 [8.00–13.00] 10.60 [7.25–13.00] 113.76 [53.75–159.75] 7.96 [6.00–10.00] 7.02 [5.00–9.00] 22.18 [20.00–24.00] 50 10.46 [7.00–13.75] 10.98 [7.00–14.00] 88.88 [35.00–141.50] 9.00 [7.00–11.00] 8.20 [5.25–11.00] 22.18 [20.00–24.00] 60 10.24 [7.00–14.00] 10.42 [6.00–13.00] 70.90 [25.25–125.50] 9.86 [8.00–12.00] 8.84 [6.00–12.00] 22.18 [20.00–24.00] 70 9.56 [6.00–13.00] 10.10 [7.00–-
13.00] 59.62 [21.25–103.00] 10.44 [8.00–12.75] 9.40 [7.00–12.00] 22.18 [20.00–24.00]
WTS scaling coefficient η
1 10.46 [7.00–13.75] 10.98 [7.00–14.00] 88.88 [35.00–141.50] 9.00 [7.00–11.00] 8.20 [5.25–11.00] 22.18 [20.00–24.00] 2 6.70 [5.00–8.00] 6.76 [5.25–8.00] 88.88 [35.00–141.50] 4.56 [3.00–6.00] 3.94 [3.00–5.00] 11.02 [10.00–12.00] 3 4.64 [3.25–6.00] 5.00 [3.25–7.00] 88.88 [35.00–141.50] 2.78 [1.25–4.00] 2.44 [1.00–3.00] 7.52 [6.00–9.00] 4 3.56 [2.00–5.00] 3.80 [3.00–5.00] 88.88 [35.00–141.50] 1.76 [1.00–3.00] 1.60 [1.00–2.00] 5.22 [4.00–6.00] 5 2.76 [1.00–4.00] 2.94 [1.00–4.00] 88.88 [35.00–141.50] 1-
.20 [0.00–2.00] 1.14 [0.00–2.00] 4.18 [3.00–5.00]
Budget limit B [£]
800 7.42 [5.00–9.75] 8.02 [6.00–9.75] 53.94 [20.25–68.00] 7.76 [6.00–9.00] 6.86 [5.00–9.00] 14.90 [13.00–16.75] 1000 9.20 [6.00–12.75] 9.56 [6.00–12.00] 70.90 [25.25–125.50] 8.46 [7.00–10.00] 7.62 [5.25–10.00] 18.72 [16.00–20.00] 1200 10.46 [7.00–13.75] 10.98 [7.00–14.00] 88.88 [35.00–141.50] 9.00 [7.00–11.00] 8.20 [5.25–11.00] 22.18 [20.00–24.00] 1400 11.44 [8.25–14.00] 11.90 [8.00–14.75] 106.36 [46.50–154.00] 9.50 [7.00–11.75] 8.68 [6.00–11.00] 25.36 [23.00–28.00] 1600 12.12 [9.25–15.00] 12.56 [-
9.00–16.00] 116.78 [57.00–159.75] 9.82 [7.25–12.00] 9.08 [7.00–11.75] 28.80 [26.00–31.75]
26

References
Antragama Ewa Abbas, Wirawan Agahari, Montijn Van de Ven, Anneke Zuiderwijk, and Mark De Reuver. Business data sharing through data marketplaces: A systematic literature review. Journal of Theoretical and Applied Electronic Commerce Research, 16(7):3321–3339, 2021.
Naoki Abe and Hiroshi Mamitsuka. Query learning strategies using boosting and bagging. In Proceedings of the Fifteenth International Conference on Machine Learning, ICML ’98, page 1–9, San Francisco, CA, USA, 1998. Morgan Kaufmann Publishers Inc. ISBN 1558605568.
Daron Acemoglu, Ali Makhdoumi, Azarakhsh Malekian, and Asu Ozdaglar. Too much data: Prices and inefficiencies in data markets. American Economic Journal: Microeconomics, 14(4):218–256, 2022.
Anish Agarwal, Munther Dahleh, and Tuhin Sarkar. A marketplace for data: An algorithmic solution. In Proceedings of the 2019 ACM Conference on Economics and Computation, pages 701–726, 2019.
Shlomo Argamon-Engelson and Ido Dagan. Committee-based sample selection for probabilistic classifiers. Journal of Artificial Intelligence Research, 11:335–360, 1999.
Anthony Atkinson, Alexander Donev, and Randall Tobias. Optimum experimental designs, with SAS, volume 34. OUP Oxford, 2007.
Anthony C Atkinson. The usefulness of optimum experimental designs. Journal of the Royal Statistical Society Series B: Statistical Methodology, 58(1):59–76, 1996.
Anthony C Atkinson and RA18412651037 Bailey. One hundred years of the design of experiments on and off the pages of biometrika. Biometrika, 88(1):53–97, 2001.
Nadjet Bourdache and Patrice Perny. Active preference learning based on generalized gini functions: Application to the multiagent knapsack problem. In Proceedings of the AAAI conference on artificial intelligence, volume 33, pages 7741–7748, 2019.
Julia Busch-Casler and Marija Radic. Personal data markets: A narrative review on influence factors of the price of personal data. In International Conference on Research Challenges in Information Science, pages 3–19. Springer, 2022.
Davide Cacciarelli and Murat Kulahci. Active learning for data streams: a survey. Machine Learning, 113 (1):185–239, 2024.
David A Cohn, Zoubin Ghahramani, and Michael I Jordan. Active learning with statistical models. Journal of artificial intelligence research, 4:129–145, 1996.
Rachel Cummings, Stratis Ioannidis, and Katrina Ligett. Truthful linear regression. In Conference on Learning Theory, pages 448–483. PMLR, 2015a.
Rachel Cummings, Katrina Ligett, Aaron Roth, Zhiwei Steven Wu, and Juba Ziani. Accuracy for sale: Aggregating data with a variance constraint. In Proceedings of the 2015 conference on innovations in theoretical computer science, pages 317–324, 2015b.
Ofer Dekel, Felix Fischer, and Ariel D Procaccia. Incentive compatible regression learning. Journal of Computer and System Sciences, 76(8):759–777, 2010.
27

Fortune Business Insights. Big data analytics market size, share & covid-19 impact analysis, by component (solutions, services), by deployment (on-premise, cloud), by enterprise size (large enterprises, smes), by industry (bfsi, it and telecommunications, retail, healthcare, government, manufacturing), and regional forecast, 2023–2030, 2023. URL https://www.fortunebusinessinsights.com/big-data-analytics-market-106179. Accessed: 2024-09-27.
Yoav Freund, H Sebastian Seung, Eli Shamir, and Naftali Tishby. Selective sampling using the query by committee algorithm. Machine learning, 28:133–168, 1997.
Arpita Ghosh and Aaron Roth. Selling privacy at auction. In Proceedings of the 12th ACM conference on Electronic commerce, pages 199–208, 2011.
Liyang Han, Pierre Pinson, and Jalal Kazempour. Trading data for wind power forecasting: A regression market with lasso regularization. Electric Power Systems Research, 212:108442, 2022.
Chao Li, Daniel Yang Li, Gerome Miklau, and Dan Suciu. A theory of pricing private data. ACM Transactions on Database Systems (TODS), 39(4):1–28, 2014.
Fan Liang, Wei Yu, Dou An, Qingyu Yang, Xinwen Fu, and Wei Zhao. A survey on big data market: Pricing, trading and protection. Ieee Access, 6:15132–15154, 2018.
Charles Lu, Baihe Huang, Sai Praneeth Karimireddy, Praneeth Vepakomma, Michael Jordan, and Ramesh Raskar. DAVED: Data Acquisition via Experimental Design for Data Markets. arXiv e-prints, art. arXiv:2403.13893, March 2024. doi: 10.48550/arXiv.2403.13893.
Sumit Maheshwari, Prerna Gautam, and Chandra K Jaggi. Role of big data analytics in supply chain management: current trends and future perspectives. International Journal of Production Research, 59 (6):1875–1900, 2021.
Marcello M Mariani and Samuel Fosso Wamba. Exploring how consumer goods companies innovate in the digital age: The role of big data analytics companies. Journal of Business Research, 121:338–352, 2020.
Silvano Martello and Paolo Toth. Knapsack problems: algorithms and computer implementations. John Wiley & Sons, Inc., 1990.
Sameer Mehta, Milind Dawande, Ganesh Janakiraman, and Vijay Mookerjee. How to sell a data set? pricing policies for data monetization. Information Systems Research, 32(4):1281–1297, 2021.
OECD. Personalized pricing in the digital era. Technical report, OECD Publishing, 2018. URL https://www.oecd.org. Accessed: 2024-10-07.
Jian Pei. A survey on data pricing: from economics to data science. IEEE Transactions on knowledge and Data Engineering, 34(10):4586–4608, 2020.
Pierre Pinson, Liyang Han, and Jalal Kazempour. Regression markets and application to energy forecasting. Top, 30(3):533–573, 2022.
Burr Settles. From theories to queries: Active learning in practice. In Proc. Active Learn. and Experimental Design Workshop, AISTATS 2010, pages 1–18. JMLR Workshop and Conference Proc., 2011.
Statista. Amount of data generated worldwide from 2010 to 2025, 2024. URL https://www.statista.com. Accessed: 2024-10-07.
28

G ̈unes ̧ Tavmen. Data/infrastructure in the smart city: Understanding the infrastructural power of citymapper app through technicity of data. Big Data & Society, 7(2):2053951720965618, 2020.
Simon Tong. Active learning: theory and applications. Stanford University, 2001.
Chenxi Wang, Dalin Qin, Qingsong Wen, Tian Zhou, Liang Sun, and Yi Wang. Adaptive probabilistic load forecasting for individual buildings. iEnergy, 1(3):341–350, 2022.
Jianxiao Wang, Feng Gao, Yangze Zhou, Qinglai Guo, Chin-Woo Tan, Jie Song, and Yi Wang. Data sharing in energy systems. Advances in Applied Energy, 10:100132, 2023.
William Yu Chung Wang and Yichuan Wang. Analytics in the era of big data: The digital transformations and value creation in industrial marketing. Industrial Marketing Management, 86:12–15, 2020.
I-Cheng Yeh. Real estate valuation data set. UCI Machine Learning Repository, 2021. URL https://archive.ics.uci.edu/dataset/477/real+estate+valuation+data+set. Accessed: 2024-11-26.
Haifei Yu and Mengxiao Zhang. Data pricing strategy based on data quality. Computers & Industrial Engineering, 112:1–10, 2017.
Zhiqiang Zheng and Balaji Padmanabhan. On active learning for data acquisition. In 2002 IEEE International Conference on Data Mining, 2002. Proceedings., pages 562–569. IEEE, 2002.
Zhiqiang Zheng and Balaji Padmanabhan. Selectively acquiring customer information: A new data acquisition problem and an active learning-based solution. Management Science, 52(5):697–712, 2006.
29

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:51.511Z
- **Text Length:** 85022 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 29 of 29
