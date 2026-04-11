# PDF Document: Molavipour et al. - 2025 - Robust Yield Curve Estimation for Mortgage Bonds Using Neural Networks.pdf

**File Path:** Molavipour et al. - 2025 - Robust Yield Curve Estimation for Mortgage Bonds Using Neural Networks.pdf

**Processed Date:** 2026-02-10T18:15:00.265Z

**File Size:** 4756.27 KB

**Total Pages:** 8

**Extracted Pages:** 8

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3507

**Title:** Robust Yield Curve Estimation for Mortgage Bonds Using Neural Networks

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Robust Yield Curve Estimation for Mortgage Bonds Using Neural Networks
Sina Molavipour, Alireza M. Javid, Cassie Ye, Björn Löfdahl, Mikhail Nechaev∗ {sina.molavipour,alireza.javid,cassie.ye,bjorn.lofdahl,mikhail.nechaev}@seb.se SEB Group, Stockholm, Sweden
Abstract
Robust yield curve estimation is crucial in fixed-income markets for accurate instrument pricing, effective risk management, and informed trading strategies. Traditional approaches, including the bootstrapping method and parametric Nelson-Siegel models, often struggle with overfitting or instability issues, especially when underlying bonds are sparse, bond prices are volatile, or contain hard-to-remove noise. In this paper, we propose a neural networkbased framework for robust yield curve estimati-
on tailored to small mortgage bond markets. Our model estimates the yield curve independently for each day and introduces a new loss function to enforce smoothness and stability, addressing challenges associated with limited and noisy data. Empirical results on Swedish mortgage bonds demonstrate that our approach delivers more robust and stable yield curve estimates compared to existing methods such as Nelson-Siegel-Svensson (NSS) and Kernel-Ridge (KR). Furthermore, the framework allows for the in-
tegration of domain-specific constraints, such as alignment with risk-free benchmarks, enabling practitioners to balance the trade-off between smoothness and accuracy according to their needs.
Keywords
Yield curve estimation, mortgage bond, neural network
1 Introduction
The yield curve is a fundamental building block that underpins the pricing, valuation, and risk measurement of a broad spectrum of financial instruments, including bonds, FRNs, repos, and various structured products. Accurate estimation of the term structure of interest rates, commonly referred to as the yield curve, holds paramount importance for a wide range of stakeholders, including investors, policymakers, and financial institutions. In risk management, yield curves provide essential input fo-
r calculating various risk measurements, such as sensitivities and value-at-risk. Different central banks that utilize yield curve information employ Yield Curve Control (YCC) to sell or buy bonds, thereby maintaining the long-term interest rate at the target level to stimulate investments, support the economy, and control inflation. Short-term treasury yields are reflecting market expectations of central banks’ policy changes, such as rate cuts or hikes. Traders rely on yield curve information to-
 decide on trading strategies, such as riding the yield curve to profit from the upward slope in a stable interest rate environment. Yield curves also reflect the overall market condition
Workshop on AI Meets Quantitative Finance (held within ICAIF 2025, Singapore, November 2025)
and expectation. The 10Y−2Y Treasury yield spread is an indicator of overall market expectations. An inverted yield curve may indicate expectations of lower future interest rates or a potential slowdown in future growth. While yield curve segments range from treasury yields and corporate bond yields to mortgage or covered bond yields, the overall estimation techniques can be horizontally applied regardless of the segments. The yield curve represents spot rates (current market yield) for bonds of d-
ifferent maturities, which can be estimated for a given set of bonds of similar features within a segment. The prominent influence of the yield curve in finance and economics suggests that any inaccuracies in its estimation can propagate into significant mis-pricings, suboptimal risk and trading management strategies, and potentially flawed monetary policy decisions. This establishes a high standard for model accuracy and robustness, thereby motivating the continuous pursuit of advanced estimation-
 methodologies. Analyzing and calibrating the estimated curves and rates are among the main daily routines in financial institutions. It is especially challenging for smaller market caps, with issuances often concentrated around short to mid-term periods and sparser over the long term, such as Swedish covered bonds. The estimation of the yield curve has evolved, shifting from flexible, non-parametric methods to more structured, parametric models. Early techniques often relied on spline-based metho-
ds—such as quadratic, cubic, exponential, and B-splines [8, 9], which provided flexibility and could fit observed data well. However, these methods often led to unstable or irregular shapes, especially at the short and long ends of the curve [10]. To address these issues, the NelsonSiegel (NS) model was introduced in [10], offering a simple parametric form that aimed to capture key properties of a well-behaved yield curve, including smoothness, continuity, and the ability to represent both level a-
nd slope changes. Svensson later extended this model by adding more flexibility to the curve’s shape [12], which is referred to as the Nelson-Siegel-Svensson (NSS) model. Later on, the dynamic Nelson-Siegel (DNS) model extends this framework by modeling the evolution of the yield curve’s underlying factors over time, enabling forecasting and capturing the temporal dynamics of interest rates based on historical data [3, 4]. In contrast to the NSS method, functional approximation can be achieved thr-
ough a linear combination of kernel functions and weights, where the functions are determined by solving an error loss function based on bond prices or yield rates. In a recent paper, authors in [5] introduce a kernel ridge (KR) model and show a closed-form solution by introducing a regularized loss incorporating smoothness of the curve, and argue that the estimates outperform existing parametric and non-parametric methods. From a machine learning standpoint, estimating the yield curve from bond d-
ata can be treated as a functional approximation problem, where feedforward neural networks are known to be effective
arXiv:2510.21347v1 [cs.LG] 24 Oct 2025

Sina Molavipour, Alireza M. Javid, Cassie Ye, Björn Löfdahl, Mikhail Nechaev
[6]. While neural networks (NN) have been previously used for forecasting the yield curve over time [1, 7], for example by extending the dynamic Nelson-Siegel (DNS) framework, we use neural networks to model the yield curve independently for each day, without relying on temporal dependency across days, as a direct extension of NSS and KR models which has not been attempted in the literature. We demonstrate that core properties of the yield curve—such as smoothness and stability—can be enforced thr-
ough the design of a novel loss function during training. Our main contributions are:
(1) We demonstrate that our neural network-based model provides a more robust yield curve estimate compared to the existing methods, such as NSS and KR. (2) Our results demonstrate improved stability and reduced sensitivity to noise or fluctuations in bond prices, particularly in a small-data setting such as the Swedish mortgage bond market. (3) Our novel loss function enables the integration of domainspecific constraints (e.g., alignment with risk-free benchmarks), while balancing the trade-offs -
between accuracy and smoothness.
In Section 2, we define the problem of yield curve estimation based on a set of underlying bonds and review several standard estimation techniques. Section 3 presents our proposed neural network architecture and the corresponding loss functions used to regularize training. In Section 4, we describe our experimental setup. We begin with hyperparameter tuning, followed by an evaluation of our model’s performance in terms of robustness to outliers, day-to-day stability, and the trade-off between smoo-
thness and flexibility in a leave-one-out setup. Finally, Section 5 summarizes our findings and outlines potential directions for future research.
2 Preliminaries and related works
In this section, we cover some of the known methods for estimating the yield curve. Let y(t) be the spot yield rate at maturity time t, commonly in years. Let f (t) denote the forward curve at maturity t. The yield rate can then be computed as:
y(t) = 1
t
∫t
0
f (τ)dτ . (1)
In order to estimate the present value of a bond, the face-value and future cashflow payments must be discounted to the present time. Assuming a given yield curve y (t), the discount factor at time t can be calculated as:
d (t ) = e −ty (t ), (2)
where we use the notion of continuous compounding, although market practices may vary depending on the instrument. Consider a dataset of M bonds sold in the market on a given day. The present value of the bond j with nj periodic cashflows can be estimated as:
pˆj =
nj −1 ∑︁
i =1
c (i )
j d t (i)
j +c
(nj )
j + Fj d Tj , j ∈ 1, . . . , M. (3)
where t (i)
j s are cashflow dates (in years), c (i)
j is the cashflow amount
at time t (i)
j , and Fj is the face-value of the bond maturing at Tj =
t
(nj )
j . The present value of the bond can then be compared with its currently observed market price p j to evaluate the estimation
accuracy of the yield curve y (t). In other words, we would want to have ÍM
j=1 (p j − pˆj ) = 0 in an ideal situation. Estimating the yield curve, or equivalently, the discount curve, for this set of equations is non-trivial, and various approaches can be employed. According to (3), and the number of bonds observed in the market M, the problem is under-determined due to having discrete observations for a continuous function, resulting in a non-smooth curve that aims to satisfy this set of constraints. The resulting discrete points require interpolation to create a contin-
uous curve. However, naive interpolation can produce forward curves with negative rates or excessive volatility since we have f (t) = y(t) + t
dy (t )
dt .
One of the most fundamental techniques for constructing a zerocoupon yield curve is the bootstrapping method, which enables practitioners to derive appropriate discount rates from observable market bond quotes. The method incrementally builds the yield curve by solving for the implied spot rates sequentially, starting with the bond of the shortest maturity and then using that solution to solve for the bond with the second shortest maturity, and so forth. This recursive structure makes bootstrappin-
g particularly robust when a complete set of liquid bond instruments exists across the desired maturity spectrum. However, real-world limitations such as non-uniform maturities, pricing errors, and liquidity constraints can make the process sensitive to data quality and interpolation methods. The bootstrapping method is widely used in practice for constructing term structures of interest rates, particularly for risk-free rates such as those derived from government securities or Overnight Index Swa-
ps (OIS). While intuitive and relatively easy to implement, bootstrapping does not enforce smoothness across the curve, which can lead to local irregularities unless post-processing or interpolation (e.g., spline fitting) is applied.
2.1 Nelson-Siegel-Svensson
Nelson-Siegel [10] used a parsimonious parametric functional form to model the forward rate:
fNS (t ) = β0 + β1e − t
λ + β2
t
λ
e− t
λ , (4)
and accordingly, the yield curve is obtained using (1):
yNS (t ) = β0 + β1
1 − e −t/λ
t /λ
+ β2
1 − e −t/λ
t /λ
− e −t/λ . (5)
The motivation for this parametric model was to capture the common shapes of the yield curve, including monotonic forms and extreme points in specific parts of the curve. Later, more terms were added to the model by Svensson [12] to capture more complex behavior in the rates:
fNSS (t ) = β0 + β1e −t/λ1 + β2
t
λ1
· e −t/λ1 + β3
t
λ2
e −t/λ2 , (6)
which results in:
yNSS (t ) =β0 + β1
1 − e −t/λ1
t /λ1
+ β2
1 − e −t/λ1
t /λ1
− e −t/λ1 (7)
+ β3
1 − e −t/λ2
t /λ2
− e −t/λ2 . (8)
Although this model has been extensively applied in finance and banking [2, 11], it exhibits several limitations. A well-known issue

Robust Yield Curve Estimation for Mortgage Bonds Using Neural Networks
is the lack of robustness in its estimations. In practical applications, the bond dataset often undergoes cleaning, with bonds being added or removed depending on market conditions. As a result, the estimated yield curves derived from these parsimonious models can vary significantly, particularly in the short/long end of the curve.
2.2 Kernel-ridge method
In this approach, the discount function is modeled by kernel functions. In a recent work [5], the authors show that there is a unique closed-form solution when using this model to optimize the price error while incorporating smoothness conditions in the objective function:
min
d
ÍM
j=1 ω j (p j − pˆj )2 + λ||d ||2, (9)
for some smoothness parameter λ > 0, where the norm in the second term is defined by the weighted average of the first and second derivative of d (·) to ensure the smoothness (see [5]). Then, by writing the kernel representation for the discount function as below, the optimization problem can be solved:
dˆ(t) = 1 + ÍL
l=1 αlk (t, tl ). (10)
k (t, tl ) are kernel functions that form a RKHS (reproducing kernel Hilbert space). So, the corresponding kernel matrix K is constructed by Kml = k (tm, tl ). The closed-form solution determines both the weights αl and the K based on boundary conditions on the smoothness criteria. In this paper, we refer to this method as KR where we set the weights ω j as inversely proportional to the squared duration
D j , that is ω j = 1
M
1
(Dj pj )2 , which approximates the mean squared
yield fitting error as stated in [5]. We found that this choice of ω j results in a smoother yield curve that is less sensitive to sporadic price changes in small-sized markets such as mortgage bonds.
3 Neural network estimation
Neural networks are well-studied methods in machine learning and are widely used to estimate complex models due to their approximation power. In this paper, we investigate how neural networks can be used to estimate the yield curve y (t), and tailor the objective function to reflect more complex criteria on the obtained curve. We argue that the main advantage of using neural networks is robustness in estimation and their flexibility to handle extra criteria, such as maintaining the economical reas-
onableness of the curve in various market conditions. Since the mortgage bond market is commonly less liquid and populated than other markets (particularly in Sweden), the available data for training is relatively limited. Consequently, we adopt simple feed-forward neural network architectures with shallow layers and a small number of neurons to ensure effective parameter training. The quest for the most suitable architecture to achieve the best estimation accuracy is out of the scope of this pape-
r. For a given activation function φ (.), our model takes the maturity time t as input and produces the estimated yield rate yˆ(t) at the output layer:
yˆ(t) = ÍH
i=1 viφ (wi · t + bi ) + c, (11)
where H is the number of hidden neurons.
3.1 Loss function
There are various ways to explain a “good” yield curve. When constructing yield curves for mortgage-backed securities, analysts must strike a delicate balance between market accuracy and economic plausibility. This trade-off arises from two competing objectives:
(1) Accuracy: The curve must precisely replicate observed market prices of mortgage bonds to ensure valid risk management calculations and hedge effectiveness. This can also be seen by comparing the yield values with the yield-tomaturity (YTM) of the underlying bonds. (2) Economic Reasonableness: The curve must maintain a logical relationship in terms of smoothness and trend with risk-free benchmarks.
The comparison between the present value of bonds and their market prices is a well-established technique for addressing the accuracy of the estimation. This can be reflected in:
Lerror = 1
M
ÍM
j=1 (p j − pˆj )2. (12)
Additional criteria can guide the estimation toward a more wellbehaved yield curve. A key aspect of conventional methods is the use of relatively smooth functions to model the yield curve. This smoothness can be enforced in the objective function by incorporating derivative terms of the estimated yield curve. Consider a set of N ordered fixed maturity grid points t® = [t1, . . . , tN ]. Then, by computing the slope of the estimated curve at these points, we add the following penalty term to (12):
Lsmooth = max
i=2,...,N
| yˆ(ti ) − yˆ(ti−1)
ti − ti−1
|. (13)
Another criterion to consider is the economical reasonableness of the estimated curve in various market conditions. For instance, to evaluate the risk premium of a mortgage bond, it is common practice to compare the bond’s yield to a benchmark yield curve. One widely used benchmark is an OIS (Overnight Index Swap) or RFR (Risk-Free Rate) curve, which is considered nearly risk-free. Unlike mortgage and corporate bond yield curves, OIS/RFR curves have minimal credit risk and liquidity premia. Such c-
urves include the SOFR (Secured Overnight Financing Rate) curve in the U.S. market, the €STR (Euro Short-term Rate) in the Eurozone, and the STINA (SEK Overnight Index Swaps) in the Swedish market. To fulfill this criterion, we introduce the penalty term below:
Ltrend = 1
N
ÍN
i=2
(yˆ (ti ) −yˆ (ti−1 ) ) − (yOIS (ti ) −yOIS (ti−1 )) ti −ti −1
. (14)
By compiling the above penalty terms as the total loss, we have:
L = Lerror + γ1Lsmooth + γ2Ltrend, (15)
where γ1 and γ2 are hyperparameters indicating the weight of each penalty term in the overall loss. To train the network, we feed the cashflow dates of each bond to the network and first obtain the estimated spot yield rates. The corresponding discount factors are then computed using (2). Then, the loss L is calculated, and we update the network’s parameters using backpropagation. This process is iterated for all bonds in the training set, which is denoted as one epoch. We run this process for a c-
ertain number of epochs, which will be tuned as a hyperparameter.

Sina Molavipour, Alireza M. Javid, Cassie Ye, Björn Löfdahl, Mikhail Nechaev
Figure 1: Hyperparameter tuning for learning rate (LR), number of epochs, γ1, and γ2 in a falling market (3/6/2024). Left: varying LR and epochs. Center: varying γ2. Right: varying γ1.
Table 1: RMSEytm in a falling market, γ1 = 103, γ2 = 104
LR = 10−7 LR = 10−8 LR = 10−9
epochs=200 0.2110 0.1972 4.2559 epochs=500 0.2033 0.1790 3.6105 epochs=1000 0.2929 0.1726 2.5843
4 Experiments
4.1 Data & models
In this study, we used mortgage bonds on the Swedish market. Each bond is represented by its market price, cashflow dates, cashflow amounts, and its maturity. Data are collected by the SEB Group’s market risk team and consist of ∼60 bonds per day with a wide spread of maturities between a few weeks and more than 15 years. In practice, it is expected that the estimated Swedish mortgage yield curve follows the trends of the SEKOIS curve, with extreme points occurring relatively close; therefore, we -
used the SEKOIS curve as the risk-free benchmark in (14). To argue the advantages of using our proposed NN-based model, we compare the estimations of the yield curve against the widely used parametric model NSS [12], and the recent non-parametric KR model [5].
4.2 Hyperparameter selection
The neural network architecture used in our experiments consists of a single-layer network with three neurons and a tanh activation function as per equation (11), which we found to be sufficiently capable for the estimation task. To select the hyperparameters for our model, we examine the effect of varying the learning rate (LR), number of training epochs, and the parameters γ1 and γ2. We investigate the accuracy by computing the root-mean-square error (RMSE) between the bonds’ YTM and the estimat-
ed yield at the corresponding maturities:
RMSEytm =
√︂1
M
ÍM
j=1 y (t j ) − YT Mj
2, (16)
where tj is the time to maturity of the j-th bond.
Table 2: RMSEytm in a falling market, LR = 10−8, epochs= 103
γ2 = 0 γ2 = 102 γ2 = 104 γ2 = 105
γ1 = 0 1.9426 1.8472 0.1486 0.2982 γ1 = 103 1.3825 1.2787 0.1726 0.2982 γ1 = 105 0.2325 0.2319 0.2306 0.1942
Figure 1 illustrates the results in a falling market scenario in which we estimate the yield curve using different choices of the hyperparameters. Note that the individual bonds are plotted in each figure in terms of their YTM, which differs from the spot yield shown on the Y-axis. Therefore, the best-fitting curve that passes through all individual bonds’ YTMs does not necessarily lead to the best price accuracy. The associated RMSEytm values are reported in Tables 1 and 2. Although increasing γ1-
 leads to a smoother estimated curve (See Figure 1-right), it does not necessarily reduce the RMSE, as evident from Table 2. A larger γ2 encourages the estimated curve to follow the SEKOIS benchmark more closely, often resulting in a more realistic shape. However, this may cause the model to deviate from market-observed prices, thereby increasing the RMSEytm. The influence of LR and the number of training epochs is summarized in Table 1. The results suggest that at least 500 epochs are required fo-
r convergence, and a learning rate of LR = 10−8 consistently yields the low RMSEytm across scenarios. This is further supported by the behavior of the estimated curve with LR = 10−8 and 1000 epochs in Figure 1, where the curve remains above SEKOIS and exhibits stable behavior in both the short- and long-term segments. We ultimately select LR = 10−8, 1000 epochs, γ1 = 103, and γ2 = 104 for the remainder of the experiment in this paper, unless otherwise specified. Although γ1 = 0 results in a lower -
RMSEytm as observed in Table 2, we strike a balance between low RMSEytm and desirable curve characteristics in our experiments.
4.3 Robustness to outliers
In this section, we compare different methods and evaluate the robustness of their estimated yield curves to the existence of outliers in the dataset. We first perturb the training data, either by changing the bond prices or removing bonds entirely, and then measure the

Robust Yield Curve Estimation for Mortgage Bonds Using Neural Networks
Figure 2: Robustness test for NSS, KR, and NN when perturbing the price of a bond with maturity 12.3Y by 3, 5, and 10% increase.
sensitivity of each method using RMSE and maximum absolute difference (MAD) between the original unperturbed yield curve y (t) and a reference yield curve y ̃(t) as follows:
RMSEcurve =
√︂1
N
ÍN
i=1 (y (ti ) − y ̃ (ti ))2, (17)
MAD = max
t
|y (t) − y ̃(t)|, (18)
where y ̃(t) is the perturbed yield curve. The maturity grid points ti that we use to compute RMSEcurve are: 1D, 1W, 2W, 1M, 2M, 3M, 6M, 9M, 12M, 15M, 18M, 21M, 2Y, 3Y, 4Y, 5Y, 6Y, 7Y, 8Y, 9Y, 10Y, 12Y, 15Y, 20Y, 25Y, 30Y. First, we visually compare the extent to which the yield curve is affected by different methods when the price of a single bond (with a maturity of approximately 12 years) increases by 3%, 5%, or 10% on a given day. These scenarios test how well the models handle the presence of-
 outliers, for example, when a callable bond is included in the dataset. For each case, we report perturbation RMSEcurve and MAD in bps (basis points) for the case of 10% perturbation and compare our NN with existing methods. The results are shown in Figure 2. The NSS model performs poorly even under small perturbations, particularly at long maturities. Although it can be argued that there are fewer bonds at longer maturities, both the KR and our NN model manage to handle the long tail of the curv-
e more effectively. In the comparison between the KR and NN models, it is evident that our model is superior in handling perturbations across different maturities, indicating that it is more robust when dealing with outliers and noise in the market. Next, we compare the sensitivity of each method when removing one or more samples from the data. We randomly drop 1, 5, and 10 bonds from the data for a given day and compare RMSEcurve and MAD for each case, averaged over 10 Monte Carlo (MC) simulation-
s. The results are shown in Figure 3, where we compare our NN model with KR and NSS (using the same random seed). The NSS model is highly sensitive to the removal of bonds from the estimation. Although the KR model is more robust than the NSS, perturbations in the curve at medium maturities affect the smoothness of the curve and are larger than those in our model, making the NN model more appealing in practice.
4.4 Stability across days
In this section, we demonstrate that NN estimations are less sensitive to changes in bond prices over time. Flexible models, such as high-degree splines, may chase idiosyncratic price movements rather than accurately reflecting accurate rate expectations. Bid-ask spreads in thin markets such as mortgage bonds introduce noise that standard models might misinterpret as rate changes. As a measure of the stability of the curve, over a span of 1 year in history, we calculate:
(1) RMSEcurve where y ̃ (t) is the yield curve of previous day. (2) Hit Rate as the percentage of days where RMSEcurve< 10 bps. A hit rate of > 90% is considered stable for liquid tenors. (3) Daily yield rate estimation for maturities 6M, 2Y, and 10Y and comparing with SEKOIS rates.
Figure 4 shows the comparison between our NN model with KR and NSS in terms of the difference between today’s curve and the previous day. We use different maturity buckets to illustrate the RMSEcurve in different regimes. For a stable model, it is undesirable to observe large spikes in the calculated RMSEcurve. It is evident that the NN model exhibits smaller spikes and consistently higher hit rates compared to NSS across different maturity buckets, and it outperforms the KR model in hit rate in m-
ost experiments. The comparisons in Figure 5 reveal that our model behaves more rationally compared to the risk-free rates for all three maturity examples. For shorter maturity (6M), the corresponding estimated rates using the KR and NSS models fall below the SEKOIS rate on many days, which is not justifiable. For 2Y and 10Y maturities, the models perform similarly, with the NSS model showing occasional spikes, which can be due to the high sensitivity of this model.
4.5 Smoothness vs flexibility trade-off
In this section, the two objectives of "accuracy" and "economical reasonableness" in Section 3 are revisited in more extensive scenarios. We consider three different days in history with noticeably different shapes of the SEKOIS curve (market scenarios). To experiment with the out-of-sample performance, we exclude one bond in the training and compute the yield error and price error using the excluded sample. Then leave-one-out (LOO) yield RMSEytm is

Sina Molavipour, Alireza M. Javid, Cassie Ye, Björn Löfdahl, Mikhail Nechaev
Figure 3: Robustness test for NSS, KR, and NN when randomly dropping 1, 5, and 10 bonds from the dataset for 10 MC simulations. The solid line is the yield curve estimated using all bonds. The dashed lines show the curves after randomly dropping bonds.
Table 3: RMSEytm comparison across maturity buckets and market scenarios.
Model Flat (3/6/2020) Rising (1/6/2022) Falling (3/6/2024)
Full <2Y 2Y–10Y >10Y Full <2Y 2Y–10Y >10Y Full <2Y 2Y–10Y >10Y
NSS 0.2060 0.4163 0.0152 0.0525 0.1332 0.2254 0.0627 0.1585 0.1204 0.1488 0.0992 0.1846 KR 0.0180 0.0151 0.0125 0.0426 0.0774 0.0572 0.0629 0.1542 0.1296 0.1427 0.1053 0.2390 NN 0.1564 0.2494 0.1142 0.0871 0.2504 0.4519 0.1273 0.1451 0.1779 0.1058 0.1969 0.1589 NN (γ1 = 0) 0.0882 0.1260 0.0692 0.0903 0.1431 0.2527 0.0646 0.1402 0.1512 0.1507 0.1519 0.1469
calculated on average over 10 Monte Carlo simulations as a measure of pricing accuracy, while the behavior of our estimated curve is compared against the SEKOIS curve and an in-house calibrated curve (at SEB Group) for three different days and compared against existing methods such as KR and NSS (see Figure 6). In the example of the rising market (2020-06-03), the KR and NN models have a justified spread relative to the SEKOIS curve and SEB-calibrated
curves, while the NSS model performs poorly at short maturities. In the flat market example (2022-06-01), the NN model has the advantage of estimating a smoother curve than the KR model, and more justified rates at the long tail. Finally, in the falling market example (2024-06-03), the NN model shows better estimations compared to KR and NSS, as the KR model falls below the SEKOIS curve at

Robust Yield Curve Estimation for Mortgage Bonds Using Neural Networks
Figure 4: RMSEcurve w.r.t to the previous day along with Hit Rate of RMSE < 10 bps over a period of 1 year.
short maturities and the NSS model exhibits unjustifiably increasing rates at the long end. Having a smooth behavior and justified with respect to SEKOIS comes at the price of losing accuracy as indicated in Table 3. When we regularize the loss function less in the NN model (γ1 = 0), the RMSEytm drops and falls in the same range as other estimators.
5 Conclusion
We demonstrated that utilizing neural networks for yield curve estimation can provide a more robust and stable estimate, particularly in smaller and relatively less liquid markets, such as the Swedish mortgage bond market. We compared our results against NSS and KR in various market conditions and achieved a smoother curve in all scenarios. This, however, is achieved at the cost of sacrificing the accuracy of the curve in terms of yield RMSE on LOO samples. In this way, NNs provide a framework tha-
t allows analysts to tune the model to their specific needs and balance the trade-off between
accuracy and economic reasonableness as they see fit. Optimization of the NN architecture is a potential future direction for improving the RMSE of our model. Incorporating temporal data to enable yield curve forecasting using neural networks is another promising area for future research.
References
[1] Tarek Bahaa Aly and Ahmed A El-Masry. 2025. Yield Curves Prediction Using Artificial Neural Network Regression Multitask Learning. Available at SSRN. (2025). https://ssrn.com/abstract=5200759 [2] David Jamieson Bolder and David Stréliski. 1999. Yield curve modelling at the bank of canada. (1999). [3] Francis X Diebold and Canlin Li. 2006. Forecasting the term structure of government bond yields. Journal of econometrics 130, 2 (2006), 337–364. [4] Francis X Diebold, Canlin Li, and Vivian Z Yue.-
 2008. Global yield curve dynamics and interactions: a dynamic Nelson–Siegel approach. Journal of Econometrics 146, 2 (2008), 351–363. [5] Damir Filipovic, Markus Pelger, and Ye Ye. 2022. Stripping the Discount Curve a Robust Machine Learning Approach. Swiss Finance Institute Research Paper No. 22-24, Forthcoming, Management Science (2022).

Sina Molavipour, Alireza M. Javid, Cassie Ye, Björn Löfdahl, Mikhail Nechaev
Figure 5: Stability test when estimating the yield of a specific maturity, namely, 6-month, 2-year, and 10-year, compare to the benchmark SEKOIS rate over a period of 1 year.
Figure 6: Comparing an example of LOO estimated yield curve for three different days representing a flat, rising, and falling market condition. Dropped bond is chosen from the bucket of <2Y maturities.
[6] Kurt Hornik, Maxwell B. Stinchcombe, and Halbert L. White. 1989. Multilayer feedforward networks are universal approximators. Neural Networks 2 (1989), 359–366. https://api.semanticscholar.org/CorpusID:2757547 [7] Piero C Kauffmann, Hellinton H Takada, Ana T Terada, and Julio M Stern. 2022. Learning forecast-efficient yield curve factor decompositions with neural networks. Econometrics 10, 2 (2022), 15. [8] J. Huston McCulloch. 1971. Measuring the Term Structure of Interest Rates. The Journal -
of Business 44, 1 (1971), 19–31. http://www.jstor.org/stable/2351832
[9] J Huston McCulloch. 1975. The tax-adjusted yield curve. The Journal of Finance 30, 3 (1975), 811–830. [10] Charles R. Nelson and Andrew F. Siegel. 1987. Parsimonious Modeling of Yield Curves. The Journal of Business 60, 4 (1987), 473–489.
[11] Per Nymand-Andersen. 2018. Yield curve modelling and a conceptual framework for estimating yield curves: evidence from the European Central Bank’s yield curves. Number 27. ECB Statistics Paper. [12] Lars EO Svensson. 1994. Estimating and interpreting forward interest rates: Sweden 1992-1994.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:00.265Z
- **Text Length:** 32240 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 8 of 8
