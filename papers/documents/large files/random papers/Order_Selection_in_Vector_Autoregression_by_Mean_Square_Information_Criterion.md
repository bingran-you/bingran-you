# PDF Document: Hellstern and Shojaie - 2025 - Order Selection in Vector Autoregression by Mean Square Information Criterion.pdf

**File Path:** Hellstern and Shojaie - 2025 - Order Selection in Vector Autoregression by Mean Square Information Criterion.pdf

**Processed Date:** 2026-02-10T18:14:20.175Z

**File Size:** 597.16 KB

**Total Pages:** 28

**Extracted Pages:** 28

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3462

**Title:** Order Selection in Vector Autoregression by Mean Square Information Criterion

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Order Selection in Vector Autoregression by Mean Square
Information Criterion
Michael Hellstern1 and Ali Shojaie1
1Department of Biostatistics, University of Washington
Abstract
Vector autoregressive (VAR) processes are ubiquitously used in economics, finance, and biology. Order selection is an essential step in fitting VAR models. While many order selection methods exist, all come with weaknesses. Order selection by minimizing AIC is a popular approach but is known to consistently overestimate the true order for processes of small dimension. On the other hand, methods based on BIC or the Hannan-Quinn (HQ) criteria are shown to require large sample sizes in order to accur-
ately estimate the order for larger-dimensional processes. We propose the mean square information criterion (MIC) based on the observation that the expected squared error loss is flat once the fitted order reaches or exceeds the true order. MIC is shown to consistently estimate the order of the process under relatively mild conditions. Our simulation results show that MIC offers better performance relative to AIC, BIC, and HQ under misspecification. This advantage is corroborated when forecasting -
COVID-19 outcomes in New York City. Order selection by MIC is implemented in the micvar R package available on CRAN.
1 Introduction
In vector autoregressive (VAR) models, each variable is modeled as a linear function of the multivariate time series over prior lags. VARs were first introduced in macroeconometrics by Sims (1980) and have since become standard for macroeconomic forecasting. They have also become essential tools in a range of other fields, including in biomedical applications; in neuroscience to analyze functional connectivity in the brain (Seth et al., 2015) and in epidemiology to predict COVID-19 cases (Kitaoka -
and Takahashi, 2023). A fundamental problem in fitting VAR models is how to choose the lag order: using too few lags may result in underfitting, while too many lags can lead to overfitting, both decreasing the accuracy of forecasts. Incorrect selection of the lag order can also impact the selection of the relevant variables in the VAR model, resulting in ambiguous interpretations, especially when the goal is to infer Granger causal effects (Shojaie and Fox, 2022). Unfortunately, the lag order is t-
ypically unknown and must be chosen either by prior knowledge or in a data-dependent way. Perhaps the most popular VAR order selection method is to choose the order that minimizes an information theoretic criterion, commonly the Akaike’s Information Criterion (AIC) (Akaike, 1973, 1974). Minimizing the AIC selects the model with the lowest negative log likelihood plus a penalty term on the number of independently adjustable parameters. Despite its popularity, AIC has several drawbacks for use in VA-
R models. The first stems from AIC’s inherent reliance on the likelihood. In the context of VAR models, this often amounts to assuming a Gaussian likelihood, which results in simplifying the log likelihood term to the log determinant of the prediction error matrix. When the errors are not Gaussian, this simplification of the likelihood is no longer valid. The second is that AIC may not provide a consistent estimate of the VAR order (Lütkepohl, 2005, Corollary 4.2.1). Although this limitation impro-
ves as the dimension of the process increases and is negligible for VAR models of dimension greater than 5 (Paulsen and Tjøstheim, 1985), it nonetheless limits the applicability of AIC. This lack of consistency is highlighted in the simulation results in the left panel of Figure 1. The plot shows that in the univariate case, AIC reaches its peak accuracy of 0.6 at around n = 2000 and does not improve substantially as n increases to 5000. These results are in contrast to those presented in the righ-
t panel of Figure 1 for a 10 dimensional VAR model: in this case, AIC has nearly perfect accuracy for n ≥ 2000. Shortly after AIC was introduced, additional VAR order selection criteria were proposed, namely the Bayesian information criterion, (BIC, Schwarz, 1978) and the Hannan-Quinn (HQ) criterion (Hannan and Quinn, 1979; Quinn, 1980). Similar to AIC, the BIC criterion relies on the likelihood, which in the case of Gaussian errors amounts to the log determinant
1
arXiv:2511.19761v1 [stat.ME] 24 Nov 2025

AR(2) VAR10(3)
0 1,000 2,000 3,000 4,000 5,000 0 1,000 2,000 3,000 4,000 5,000
0.0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1.0
n
Accuracy
Method MIC AIC HQ BIC
Figure 1: Accuracy of various order selection methods in detecting the order of simulated AR(2) (left) and VAR10(3) (right) processes. Vertical lines represent standard errors. Accuracy is measured as the proportion of simulations where the correct order was chosen. See Section 5 for more details.
of the prediction error, plus a penalty on the number of model parameters. The HQ criterion is not likelihood-based but it too relies on the log determinant of the prediction error plus a penalty. Although all three criteria use the log determinant of the prediction error, they differ in the penalty used. Denoting by n the number of observations, AIC uses a penalty of (2/n)(#parameters), while HQ and BIC use penalties of ((2 log log n)/n)(#parameters) and ((log n)/n)(#parameters), respectively. Th-
is change of penalty is essential: if the underlying process is a stationary and stable VAR with standard white noise, it can be shown that both HQ and BIC consistently estimate the true order of the process (Lütkepohl, 2005, Corollary 4.2.2). However, while HQ and BIC are consistent, simulation results in Figure 1 show they perform poorly for small sample sizes when the dimension of the process increases to a moderate size. To address the above limitations of existing order selection methods, we -
propose a new method, mean squared information criterion (MIC). MIC is likelihood-free, consistent, and performs well in a variety of simulation settings. Our criterion leverages the novel observation that the expected squared error loss is constant when the fitted VAR order is at least as large as the true model order. We establish the consistency of MIC under mild assumptions and show that, compared with AIC, HQ, and BIC, it performs well in a variety of simulation settings and forecasting on re-
al data. The rest of the paper is structured as follows. In Section 2, we motivate our new information criterion and show that the expected squared error loss is constant when the fitted order is at least as large as the true model order. We extend this observation to the multivariate case and present theoretical results in Section 3, introduce our estimator in Section 4 and compare its performance to AIC, HQ and BIC using simulated data in Section 5. We apply our method to a financial application-
 and COVID-19 forecasting in Section 6 and end with a discussion in Section 7. Notation: We use uppercase letters X, Y, Z to denote random variables. We will use subscript t to denote the time component as in Zt. When Z or Zt are random vectors, the components can be accessed by Zj, Zt,j, respectively. Observed values of random variables are written in lowercase as in zt. Additionally, observed vectors and matrices are denoted using bold lowercase and uppercase letters as in z and Z, respectively.-
 Hats or tildes will be used to specify
sample estimates of population quantities, e.g. Γˆ0 and Γ ̃0 represent different sample estimates of Γ0.
2 A new idea
We begin with the univariate case. Let Zt be a stationary univariate time series. Without loss of generality, we assume Zt is a mean zero process, as in practice, we can subtract the sample mean from the data. We denote the hth autocovariance
2

of Zt as γh = E (ZtZt−h) and denote Yt = Zt, Xp = Zt−1 . . . Zt−p . We wish to study the behavior of the expected squared error loss as a function of different orders p up to a prespecified maximum order, pmax. Specifically, we study
LAR(p, β) := E
h
(Yt − Xpβ)2i
.
In this case, β is a nuisance parameter. For fixed p, LAR(p, β) is the usual least squares problem and we can solve for β
to get βp∗ = E XpT Xp
−1 E XpT Yt . Plugging βp∗ back in to the expected loss and simplifying, we get a loss that only depends on p, for which we use the shorthand notation LAR(p):
LAR(p) = E Y 2
t − E XT
p Yt
T E XT
p Xp
−1 E XT
p Yt .
By stationarity of Zt, this simplifies to
LAR(p) = γ0 − γ1 . . . γp

     
γ0 γ1 γ2 . . . γ1 γ0 γ1 . . . γ2 γ1 γ0 . . .
... ... ... . . .
γp−1 γp−2 γp−3 . . . γ0

     
−1

 
γ1
...
γp


.
Note that up to this point we have only assumed Zt is stationary and have made no assumptions on the structure of the data generating process. Now suppose Zt is not only stationary but is also a stable AR(p0) process, that is,
Zt = a1Zt−1 + · · · + ap0 Zt−p0 + εt,
where E (εt) = 0, E εt2 = σε2 and E (εsεt) = 0 for s ̸= t. Then, γh has a known form and we can calculate the expected squared error loss for each p = 0, . . . , pmax (Lütkepohl, 2005, pp. 26-30). For p = 0, there are no prior lags as predictors so we get that LAR(0) = γ0. We now observe that the expected squared error loss should be flat after the true order p0. This is because the first p0 lags should contain all the information needed for prediction. Furthermore, the error of the process is whi-
te noise and thus unpredictable. Therefore, the lowest achievable expected squared error should be the variance of the error. In Figure 2, we compute the expected squared error loss for several AR processes and see that our intuition holds. It can be seen that the expected squared error loss is indeed flat once the fitted order is at least as large as the true order p0 and
the eventual value of the expected loss is the variance of the error, σε2. The behavior of the loss observed in Figure 2 can be proven mathematically and follows immediately from the multivariate case proved in Theorem 1 in the next section. Given this behavior, if we add an appropriately sized penalty to the fitted order p and consider orders large enough (pmax > p0), we should be able to design a correct order selection procedure in the sense that when the process is AR(p0) we will recover the t-
rue order p0. Specifically, the true order can be found as
p0 = arg min
p∈{0,...,pmax }
LAR(p) + λp .
If λ is too large, we would underestimate the order. However, we must also have λ > 0 to avoid multiple solutions and an undefined parameter. In practice, we rarely deal with univariate time series so in the next section we extend these concepts to the multivariate case.
3 Extension to the multivariate case
In this section, we extend the concepts of Section 2 to the multivariate case and show a similar behavior of the expected
squared error loss. Suppose Zt = Zt,1, . . . , Zt,k
T is a k-dimensional column vector. We assume that Zt is a stable process, as formalized in Assumption 1 (stability) in Section A. The hth autocovariance matrix is defined as Γh = E ZtZT
t−h ∈ Rk×k. Note that Γh is not symmetric in general, but Γh = ΓT
−h. Similar to the univariate case,
we define Yt = Zt, Xp = ZtT−1 . . . ZtT−p
T , where Yt ∈ Rk×1 and Xp ∈ Rkp×1. We study the expected squared error loss at different values of p,
LVAR(p, Ap) := E
h
(Yt − ApXp)T (Yt − ApXp)
i
.
3

0.7
0.8
0.9
1
1.1
1.2
1.3
1 2 3 4 5 6 7 8 9 10 p
Population Loss
AR Order 3 4 7
Figure 2: Population loss for AR(3), AR(4), and AR(7) processes with σε2 = 1.2, 0.7, 0.9 respectively. As the fitted
order increases to the true order the expected loss decreases monotonically to σε2. The true order for each line is denoted by a hollow circle.
We proceed by profiling out Ap. For fixed p, we have A∗p = E YtXpT E XpXpT
−1. Similar to the univariate case, we plug A∗p back into the expected loss which we denote as LVAR(p) after simplification. It is shown in Section B that
LVAR(p) = Tr (Γ0) − Tr

  
Γ1 . . . Γp

 
Γ0 . . . Γp−1
... ...
ΓpT−1 . . . Γ0

 
−1 
 
Γ...1T
ΓpT

 

  
. (1)
For p = 0 there are no prior lags as predictors so we get that LVAR(0) = Tr (Γ0). Similar to the univariate case, if Zt is a stable VAR(p0) process, the multivariate loss decreases until the fitted order is equal to the true order at which point the population loss is constant with a value of Tr(Σε). This behavior of the loss is formally stated in Theorem 1. The assumptions are stated in Appendix A
Theorem 1 (Flat Loss). Suppose Zt is a VAR(p0) process with standard white noise. That is, Zt = Pp0
i=1 AiZt−i + εt
where E (εt) = 0, E εtεtT = Σε and E εtεsT = 0 for t ̸= s. If Assumption 1 (stability), Assumption 2 (invertibility), and Assumption 3 (irreducibility) hold, then
(
LVAR(p) < LVAR(p − 1) if p ≤ p0
LVAR(p) = Tr(Σε) if p ≥ p0 .
Assumptions 1 to 3 are mild and standard assumptions which hold in many applications. Further discussion on the assumptions is provided in Section A. For LVAR(p0), Theorem 1 implies both LVAR(p0) < LVAR(p0 − 1) and LVAR(p0) = Tr(Σε). If we penalize the fitted order p by an appropriate amount, and use pmax > p0, we would obtain a procedure that recovers the true order, p0. This is formally stated in Corollary 1.
Corollary 1. Let M = min (LVAR(p0 − 1) − LVAR(p0), [LVAR(p0 − 2) − LVAR(p0)] /2, . . . , [LVAR(0) − LVAR(p0)] /p0). Then, for a VAR(p0) process that satisfies the conditions of Theorem 1 and for λ ∈ (0, M ) and pmax > p0 we have
p0 = arg min
p∈{0,...,pmax }
LVAR(p) + λp .
4

To estimate p0, we need to estimate LVAR(p) + λp for each p.While we use the form LVAR(p) with the autocovariance matrices to establish the theoretical results, LVAR(p) can be expressed as the expected squared error loss:
LVAR(p) = E
h
Yt − A∗pXp
T Yt − A∗pXp
i
. Therefore, a natural estimator of LVAR(p) is the sample squared error
loss, as defined formally below. Let {zt}tn=1 denote the observed k-dimensional time series of length n. To estimate the squared error loss
based on the least squares estimate of A∗p at a fitted order p, we denote Yp = z1+p, . . . , zn ∈ Rk×(n−p), xt,p =
ztT−1 . . . ztT−p
T ∈ Rkp×1 and Xp = x1+p,p . . . xn,p ∈ Rkp×(n−p). The number of data points in Xp and Yp depends on the fitted order p as fitting a VAR(p) model requires the p prior data points as covariates. As a result, we only have n − p usable data points for a VAR(p) model. With these definitions, an estimate of the squared error loss at a fitted order p using the least squares estimates of A∗p is given by
LˆVAR(p) = 1
n − p Tr Yp − AˆpXp
T
Yp − AˆpXp
=1
n − p Tr Yp − AˆpXp Yp − AˆpXp
T
,
(2)
where Aˆp = YpXpT XpXpT
−1 and we used Tr(AT B) = Tr(ABT ). With (2) and using λ ∈ (0, M ), we can define the estimated order based on the mean-squared information criterion (MIC), p∗MIC, as
p∗MIC = arg min
p∈{0,...,pmax }
LˆVAR(p) + λp . (3)
Note that to use this estimator in practice, we need to specify the tuning parameter λ. We defer this to Eq. (4) below. To
solve the minimization problem in Eq. (3), we can compute LˆVAR(p) for each p = 0, . . . , pmax. Theorem 2 establishes
the consistency of LˆVAR(p).
Theorem 2 (Consistency of Loss). Under the assumptions of Theorem 1, we have that
LˆVAR(p) − LVAR(p) = oP (n−1/2+δ) ,
for all δ > 0.
As shown in the proof of Theorem 2 (see Section C.3), the consistency of LˆVAR(p) relies on the consistency of the
sample autocovariances and the rate of convergence of LˆVAR(p) is the same as the rate of convergence of the sample autocovariance. One benefit of the proposed information criterion is that it does not rely on the form of the likelihood. In fact, Theorem 2 will hold as long as the sample autocovariance is consistent, with the rate of convergence matching that of the sample autocovariance. An immediate consequence of Theorem 2 is consistency of p∗MIC.
Corollary 2 (Consistency of order estimate). Under the assumptions of Theorem 1, we have that
p∗MIC →p p0,
where →p denotes convergence in probability.
While our theoretical analyses and implementation estimate LVAR(p) using the least squares estimate of A∗p, it is
possible to use other estimators, such as the Yule-Walker estimate of A∗p, and prove similar results. However, we chose to use the least squares estimate due to better small sample performance and lower bias (Lütkepohl, 2005; Tjøstheim and Paulsen, 1983). It is worth noting that, as pointed out in Lütkepohl (2005, pp. 86), the least squares and Yule-Walker estimators of A∗p are asymptotically equivalent for stable processes, which are the focus of this work.
4 MIC estimator of VAR order
Our theoretical analyses in Section 3 assume λ ∈ (0, M ) is known. However, λ is unknown in practice and needs to be selected. The flat loss concept from Theorem 1 tells us that once the fitted order exceeds the true order, the loss should be constant. In practice, there is sampling variability so the loss will never completely stabilize. We generate an estimate of this variability using a “self-tuning” approach.
5

In our self-tuning approach, we fit models from lag order pmax + 1 to 2pmax and take the absolute value of the mean of the difference between each loss and the subsequent loss to estimate the amount of variability, or noise, in the loss. While it is possible to use orders larger than 2pmax, the trade-off is fitting larger order models consumes more prior data points as covariates and reduces sample size. We find that 2pmax works well in practice. Specifically, our self-tuning approach computes
MD = mean LˆVAR(pmax) − LˆVAR(pmax + 1), . . . , LˆVAR(2pmax − 1) − LˆVAR(2pmax) .
We then scale MD by pn/(k2 log(n)) to get
λST = MD
rn
k2 log(n) .
With this choice of λ, our estimator is defined as
pˆMIC = arg min
p∈{0,...,pmax }
LˆVAR(p) + λSTp . (4)
We next discuss the choice of MD as well as the scaling pn/(k2 log(n)). Due to the flat loss property, each LˆVAR(pmax + i) − LˆVAR(pmax + i + 1) should represent an estimate of how the sample loss changes when we have exceeded the true order and increase the fitted order by 1. We average over pmax of these to reduce the variance in this estimate. When computing the mean, subsequent differences cancel and this quantity can be simplified as
MD = LˆVAR(pmax) − LˆVAR(2pmax)
pmax
.
Thus, MD can be computed efficiently as it only requires fitting one additional regression of order 2pmax. It is also
worth noting that LˆVAR(pmax), . . . , LˆVAR(2pmax) converge to the same asymptotic distribution and are asymptotically perfectly correlated. In this instance, the correlation is beneficial as it further reduces the variance of our estimate since for two random variables, X, Y , Var(X − Y ) = Var(X) + Var(Y ) − 2Cov(X, Y ). To understand why it is necessary to scale MD, consider the case where we instead use λST = MD. To simplify notation and provide a more concrete setting, consider pmax = 10. Wi-
th these, the score for order 2pmax := 20 based on Eq. (4) becomes
LˆVAR(20) + LˆVAR(10) − LˆVAR(20)
10 20 = 20
10 LˆVAR(10) − 10
10 LˆVAR(20)
= LˆVAR(10) + LˆVAR(10) − LˆVAR(20)
10 10 , (5)
where we have assumed that LˆVAR(10) > LˆVAR(20) so we can ignore the absolute value in MD. While it is possible
that LˆVAR(10) < LˆVAR(20) due to the different datasets used in fitting each model—e.g. LˆVAR(10) is estimated using
n − 10 observations while LˆVAR(20) uses n − 20 observations—this is unlikely. The last equation on the right hand side of Eq. (5) is exactly the value of the penalized loss for order pmax = 10. In other words, setting λST = MD treats models pmax and 2pmax as equally viable. However, these models are not equally viable and we want to enforce a belief that higher orders are less likely. Thus, we need to choose a penalty that is larger than MD. One way to do this is to scale MD by a factor greater t-
han 1. From Theorem 2, we know that
LˆVAR(p) = LVAR(p) + oP (n−1/2+δ) ∀ δ > 0 so scaling by n1/2 is too fast. In practice, we find that pn/ log(n) works well. Lastly, we scale by 1/k since each additional order fitted requires estimating k more parameters than the prior order (see the proof of Theorem 1).
4.1 Relationship between MIC and other criteria
We now compare our method, MIC, to AIC, BIC, and HQ. For ease of comparison, we write the estimated error
covariance matrix as Σˆ p.
Σˆ p = 1
n − p Yp − AˆpXp Yp − AˆpXp
T
.
6

Note that Tr(Σˆ p) = LˆVAR(p). Denoting the natural logarithm as log, the criteria considered can be written as follows
MIC(p) = Tr(Σˆ p) + MD
rn
k2 log(n) p AIC(p) = log Σˆ p + 2
nk2p ;
BIC(p) = log Σˆ p + log n
n k2p HQ(p) = log Σˆ p + 2 log log n
n k2p .
The above formulations show that all criteria rely on the same estimate of the error matrix Σˆ p and differ only in how they use it—Tr() or log | · |—and penalize that information. The advantage of MIC is that it is consistent and likelihood-free. Our simulation results also show that MIC works well empirically.
4.2 Alternative choices of λ
We also considered two other methods to select the order based on the flat loss concept discussed in Section 3. The first method, which we refer to as MIC-sp, uses MIC with a penalty λsp that is chosen by splitting the data into train and test sets. Due to the time-dependent nature of our data, we use the first 70% of observations as training and the remainder as
test data. Models from pmax to 2pmax are fit on the training data to estimate Aˆp and their prediction errors computed on the test data are denoted as e.g. Σˆ test,pmax . We set
λsp = mean Tr(Σˆ test,pmax ) − Tr( ˆΣtest,pmax+1) , . . . , Tr(Σˆ test,2pmax−1) − Tr(Σˆ test,2pmax ) .
Due to the flat loss property, each of these differences should be 0 and any sample variability should be captured in λsp. We further consider a procedure, which we denote as MIC-mt. We again use a 70-30 train-test split and fit VAR models of order 0, . . . , pmax on the train dataset. Similarly, we compute the errors of each fitted model on the test data. MIC-mt then chooses the order 0, . . . , pmax that minimizes the test error. Simulations comparing all three methods in the case of a diagonal -
covariance matrix with Gaussian errors are shown in Figure S7. The results show that MIC, which indicates the MIC method with self-tuned λ, performs the best across a variety of sample sizes and dimensions. It is only consistently outperformed by MIC-sp in the AR(2) case. Results for other simulations in Section 5 are not shown but are qualitatively similar. Thus, we proceed with our proposed self-tuning approach for selecting λ.
5 Simulations
5.1 Order selection accuracy
In this section, we compare the accuracy of MIC, AIC, BIC, and HQ order selection methods using simulated data. In general, we will use VARk(p) to denote the dimension k and order p of the process. We will also use U(a, b) to denote a Uniform distribution with support (a, b). We consider VAR models with 4 different dimensions and 3 different error structures. The first is an autoregressive process of order 2, AR(2), with parameters (0.3, 0.1). The second is a VAR2(2) process. The entries of the fi-
rst lag coefficient matrix are 25% sparse and randomly drawn from either a U(0.1, 0.3) or a U(−0.3, −0.1) each with 50% probability. The entries of the second lag coefficient matrix are 50% sparse and randomly drawn from either a U(0.07, 0.2) or a U(−0.2, −0.07) each with 50% probability. The third simulation setting is a VAR5(3). All lag coefficient matrices have 60% sparsity. In the first lag coefficient matrix, the non-zero entries are drawn from a U(0.1, 0.3) or a U(−0.3, −0.1) each with equal-
 probability. The second lag coefficient matrix uses a U(0.1, 0.2) or a U(−0.2, −0.1) while the third uses a U(0.05, 0.1) or a U(−0.1, −0.05). The fourth simulation setting is a VAR10(3) process where the first lag coefficient matrix has 40% sparsity and the non-zero entries are drawn from a U(0.1, 0.3) or a U(−0.3, −0.1). The second lag coefficient matrix has 80% sparsity, but the remaining entries are drawn from a U(−0.2, 0.2). The final lag coefficient matrix has 80% sparsity with remaining ent-
ries drawn from a U(−0.1, 0.1). All coefficient matrices are generated once and the same matrices are used throughout the simulations. Stability for each setting is verified using the method of Lütkepohl (2005, pp. 14 - 17). All datasets are simulated using three error structures. The first is mean-zero Gaussian errors with an identity covariance matrix while the second uses a randomly generated covariance matrix. The covariance matrix is generated by generating a k × k matrix with entries drawn f-
rom a U(−3, 3). The matrix is then symmetrized by left multiplying by its transpose. We enforce a maximum condition number of 100 for each matrix by consecutively adding 0.001 to diagonal elements until the condition number is met. After the covariance matrix is reconditioned, it is scaled to
7

have unit variances. The third error structure is a Gaussian mixture model with 5 components. Each component is Gaussian where the mean vector is generated from a U(−5, 5). For each k, we then subtract the mean across all 5 components so that the mean of the component means is 0. The covariances are k × k matrices with entries drawn from a U(−3, 3). The matrices are subsequently symmetrized, reconditioned, and rescaled as explained above. We simulate n = 250, 500, 1000, 2000, 5000 observations fo-
r each setting except for VAR10(3) where n = 250 is excluded as the number of parameters exceeds the number of data points. Lastly, we consider a VAR3(2) process that switches between one of two regimes. Both regimes share the same lag coefficient matrices and error covariances but differ in their means. Since both regimes are order 2, the true order is 2. The regime mean vectors are generated from U(−0.5, 0.5) and the regime switches every 10% of observations. For example, if n = 5000, there are -
nine regime swtiches at n = 500, 1000, 1500, . . . , 4500. Due to the time-dependent switching mean, this process is not stationary and we present these results to study how the methods perform under misspecification. For this process, the first lag coefficient matrix is 30% sparse with entries randomly drawn from a U(0.1, 0.3) or U(−0.3, −0.1) while the second is 60% sparse with entries drawn from a U(0.1, 0.2) or U(−0.2, −0.1). The errors are generated from a Gaussian distribution with mean zero-
 and randomly generated covariance matrix as above. Prior to analyzing the data, each of the three process components is centered so the overall mean of the components is 0. We compute each criteria, MIC, AIC, BIC, and HQ, for p = 0, . . . , 10 := pmax. The estimated orders for each criteria are those that achieve the minimum value. That is,
pˆCRITERION = arg min
p∈{0,...,pmax }
CRITERION(p) .
For each error structure and VAR model, we simulate B = 250 data sets and compute the proportion of times the correct order is estimated. That is, we use
Accuracy = 1
B
B
X
b=1
I(pˆCRITERION = p0) .
The simulation results are summarized in Figures 3 to 6. When errors are diagonal Gaussian and the dimension is large, MIC outperforms AIC, HQ, and BIC, as shown in Figure 3. This makes sense as in this setting AIC, HQ, and BIC all use the entire error matrix, including the off-diagonals, through the determinant. When the true errors are diagonal, the estimated off-diagonals can contain incorrect information. On the other hand, MIC only uses the diagonals and so discards the potentially misleading-
 off-diagonal information. For diagonal errors with small sample sizes and small dimension, HQ, and BIC perform slightly better, but MIC is still competitive. As previously noted, AIC is not consistent for the AR(2) and VAR2(2) processes. Results for non-diagonal Gaussian errors in Figure 4 show much better performance for AIC, BIC, and HQ. MIC still appears to consistently estimate the order as sample size increases, but the small sample performance is now worse relative to the other methods. Thi-
s makes sense as there is useful information contained in the off-diagonals of the error matrix that AIC, BIC, and HQ can leverage while MIC does not. It is also worth noting that the performance of MIC relative to other methods improves as the dimension of the process increases. We see similar trends for Gaussian mixture errors in Figure 5. Note that performance is sometimes better and sometimes worse than the corresponding results in Figure 4. This is likely due to variation in the simulated err-
or covariances and means. For the misspecification simulation—the VAR3(2) switching process in Figure 6—the performance of AIC, BIC, and HQ deteriorates as sample size increases. While the performance of AIC deteriorates fastest, all methods except MIC have an accuracy of 0 for n = 5000. Conversely, the accuracy of MIC increases a n increases suggesting it consistently estimates the true order. To investigate this further, we explore the performance of each method with much larger sample sizes in -
Figure S8 and find that the results are consistent with Figure 6. That is, AIC, BIC, and HQ all have 0 accuracy for n > 20000. In contrast, MIC shows robust performance and perfectly estimates the order for all sample sizes in Figure S8. While MIC is outperformed by AIC, BIC, and HQ when the true error matrix has off-diagonal elements, it offers better performance when the true error matrix is diagonal and appears to be more robust to misspecification as shown by the performance in the VAR3(2) swi-
tching setting. Thus, MIC offers a viable alternative to AIC/BIC/HQ, as in many practical applications errors are unlikely to be Gaussian. In Section 6, we investigate the performance of MIC compared to AIC/BIC/HQ by comparing forecast performance on two datasets.
8

VAR5(3) VAR10(3)
AR(2) VAR2(2)
0 1,000 2,000 3,000 4,000 5,000 0 1,000 2,000 3,000 4,000 5,000
0.0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1.0
0.0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1.0
n
Accuracy
Method MIC AIC HQ BIC
Figure 3: Diagonal Gaussian errors. Simulation results for accuracy of specific order selection method and simulation setting with diagonal Gaussian errors. Vertical lines indicate standard errors.
VAR2(2) VAR5(3) VAR10(3)
0 1,000 2,000 3,000 4,000 5,000 0 1,000 2,000 3,000 4,000 5,000 0 1,000 2,000 3,000 4,000 5,000
0.0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1.0
n
Accuracy
Method MIC AIC HQ BIC
Figure 4: Non-diagonal Gaussian errors. Simulation results for accuracy of specific order selection method and simulation setting with non-diagonal Gaussian errors. Vertical lines indicate standard errors.
9

VAR2(2) VAR5(3) VAR10(3)
0 1,000 2,000 3,000 4,000 5,000 0 1,000 2,000 3,000 4,000 5,000 0 1,000 2,000 3,000 4,000 5,000
0.0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1.0
n
Accuracy
Method MIC AIC HQ BIC
Figure 5: Gaussian mixture errors. Simulation results for accuracy of specific order selection method and simulation setting with Gaussian mixture errors. Vertical lines indicate standard errors.
VAR3(2) switching
0 1,000 2,000 3,000 4,000 5,000
0.0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1.0
n
Accuracy
Method MIC AIC HQ BIC
Figure 6: VAR3(2) switching. Simulation results for accuracy of specific order selection method and simulation setting. Vertical lines indicate standard errors.
10

5.2 Over and under selection probability
As previously mentioned, it is known that AIC does not provide a consistent estimate of the VAR order when the dimension is small. To investigate this, we compare the likelihood of over and under selection of the model order for each of the order selection methods using simulations. Since MIC uses an estimated λ, we evaluate its theoretical properties with an oracle λ value, which we denote as MIC-oracle. Specifically, we choose λoracle = M/2 where M is defined in Corollary 1. The results for diag-
onal Gaussian errors are shown in Figures S9 and S10 while the non-diagonal gaussian errors are shown in Figure S11. Overall, we see that MIC-oracle tends to select an order that is larger than the true order (over selection) while the alternative methods AIC, BIC, and HQ, tend to select an order that is smaller than the true order (under selection). Figure S11 shows that, when the dimension of the process is large and errors are non-diagonal Gaussian, MIC-oracle suffers from worse over selection -
relative to the under selection from AIC, BIC, and HQ.
6 Applications
In this section, we apply our MIC method to two different forecasting problems and compare it to AIC, BIC, and HQ. The first problem is financial forecasting, while the second is forecasting COVID-19 outcomes. In both problems, we follow Nicholson et al. (2020) by comparing the weighted mean squared forecast error (wMSFE). In both problems, the first 80% of observations are used to estimate the order for MIC, AIC, BIC, and HQ, while the last 20% are used for evaluating the forecast accuracy. Forma-
lly, if n represents the total number of observations, then the first T1 = ⌊0.8n⌋ data points are used to estimate the order for each method and the remaining observations are used for testing. We use a rolling window of size T1 to perform one-step ahead forecasts. That is, if t indexes the observation we are forecasting, then we use observations t − T1, . . . , t − 1 as the rolling window. For each rolling window, we standardize each variable in the series by subtracting the mean and dividing by -
the standard deviation. The observation we are forecasting is also standardized using the mean/SD from the rolling window. We then fit a VAR model corresponding to the orders chosen by MIC, AIC, BIC, and HQ to this standardized rolling window and predict observation t. The wMSFE for method m is computed over all series and forecast time points as
wMSFE(m) = 1
k(n − T1)
k
X
i=1
n
X
t=T1 +1
yi,t − yˆm
i,t
σˆi
2 ,
where σˆi is the standard deviation of the variable i computed over the forecast observations.
6.1 Daily realized stock variances
We compare the forecast performance of VAR models with order selected by MIC, AIC, BIC, and HQ using data from the Oxford-Man Institute of Quantitative Finance obtained from an older version of the mfGARCH R package, https://github.com/onnokleen/mfGARCH, from Conrad and Kleen (2020). Specifically, we analyze 5-minute return daily realized variances for up to 17 stocks from January 3, 2000 to June 27, 2018 (n = 4, 847). We perform two analyses: one using the same k = 16 stocks as in Nicholson et al-
. (2020) as well as k = 7 stocks from Son et al. (2023). Many stocks from Nicholson et al. (2020) and Son et al. (2023) overlap and there are only 17 total unique stocks. Due to high levels of missingness (34%) we exclude OMXSPI, an index of the Stockholm Stock Exchange, from our analysis based on the Son et al. (2023) stocks. A full list of the stocks analyzed is given in Section E. All data are log-transformed to make them stationary. As we are not specifically interested in high-dimensional app-
lications we estimate the order for each order selection method using a pmax = 10, equivalent to two trading weeks. Forecast results for both the k = 16 and k = 7 analysis are displayed in Table 1. Overall, we see that the methods considered give very similar forecast accuracy despite a large range of orders. For example, in Table 1(a), the order varies from a low of 2 chosen by BIC to a high of 9 chosen by MIC.
6.2 COVID-19 in New York City
We next compare the performance of order selection methods in forecasting COVID-19 outcomes in New York City. Daily data on deaths, cases, and hospitalizations in New York City due to COVID-19 are available starting February 29, 2020 at City of New York’s website. We analyze data from February 29, 2020 to July 8, 2024 (n = 1, 592). All data are
11

AIC BIC HQ MIC
Order 7 2 4 9
k = 16 Forecast Error 0.485 0.504 0.487 0.491
Order 8 4 6 6
k = 7 Forecast Error 0.493 0.497 0.492 0.492
Table 1: Comparison of order selection methods based on weighted Mean Squared Forecast Error for daily realized stock variances for k = 16 stocks and k = 7 stocks. Order selected by each method is also included.
first differenced to make them stationary and we use pmax = 30. As a check, we run an Augmented Dickey-Full test (ADF, Said and Dickey, 1984) and a Kwiatkowski-Phillips-Schmidt-Shin (KPSS, Kwiatkowski et al., 1992) test for each series after differencing. The null hypothesis of the ADF test is that a unit root is present in the time series while the null hypothesis of the KPSS test is that the series is trend-stationary. All series pass the ADF test with p < 0.01 and the KPSS test with p > 0.1. Fo-
recast results are displayed in Table 2. We see that AIC, BIC, and HQ all fit models using around a month’s worth of prior data points (p = 30) to forecast the next day. However, these models are substantially worse than the model fitted using MIC order selection, which only uses around a week of prior data points (p = 8). In fact, the forecast accuracy of the model fitted using MIC is around 30% better than the accruacy of those fit by AIC/BIC/HQ.
AIC BIC HQ MIC
Order 30 24 30 8 Forecast Error 1.334 1.301 1.334 1.036
Table 2: Comparison of order selection methods based on weighted Mean Squared Forecast Error for COVID-19 outcomes. Order selected by each method is also included.
7 Discussion
In this paper, we proposed the mean square information criterion (MIC), a new approach for estimating the order of VAR processes. MIC is based on a key new observation: the flatness of the expected squared error loss after the fitted order exceeds the true order. We show, under relatively mild assumptions, that the true order can be estimated consistently by minimizing the MIC. Specifically, consistency of MIC only requires consistent estimates of the autocovariances. Our proposed method, MIC, was-
 compared to three other order selection criteria, AIC, BIC, and HQ, based on the proportion of simulations in which the correct order was correctly estimated. Simulation settings ranged from univariate to 10-dimensional VAR models with between 250 to 5,000 observations. Simulations included both Gaussian and Gaussian mixture error structures, as well as a regime switching VAR3(2) model. While outperformed in Gaussian errors and small sample sizes, relative to the other criteria, MIC showed the be-
st performance when the process had regime changes. As errors are unlikely ever Gaussian, these results suggest that MIC can be very useful in practice. This is confirmed in our data applications where order selection via MIC achieved comparable forecast accuracy for daily realized stock variance and substantially better accuracy in forecasting COVID-19 outcomes in NYC when compared to order selected via AIC, BIC, or HQ. An interesting direction for future work is to extend the proposed method to -
high-dimensional settings. In high dimensions, we can substitute the least squares estimate by e.g. ridge or LASSO estimators. Alternatively, estimates of the autocovariances in high dimensions may be used and plugged directly into the loss. It would then be interesting to compare the resulting estimator to recently proposed regularization-based approaches (Shojaie and Michailidis, 2010; Shojaie et al., 2012; Nicholson et al., 2017).
12

References
Hirotugu Akaike. Information theory and an extension of the maximum likelihood principle. In 2nd International Symposium on Information Theory, pages 267–81, 1973.
Hirotugu Akaike. A new look at the statistical model identification. IEEE Transactions on Automatic Control, 19(6): 716–723, 1974.
Christian Conrad and Onno Kleen. Two are better than one: volatility forecasting using multiplicative component garch-midas models. Journal of Applied Econometrics, 35(1):19–45, 2020.
Jean Gallier et al. The schur complement and symmetric positive semidefinite (and definite) matrices (2019). URL https://www. cis. upenn. edu/jean/schur-comp. pdf, 2020.
Edward J Hannan and Barry G Quinn. The determination of the order of an autoregression. Journal of the Royal Statistical Society: Series B, 41(2):190–195, 1979.
Takayoshi Kitaoka and Harutaka Takahashi. Improved prediction of new covid-19 cases using a simple vector autoregressive model: evidence from seven new york state counties. Biology Methods and Protocols, 8(1):bpac035, 2023.
Denis Kwiatkowski, Peter CB Phillips, Peter Schmidt, and Yongcheol Shin. Testing the null hypothesis of stationarity against the alternative of a unit root: How sure are we that economic time series have a unit root? Journal of econometrics, 54(1-3):159–178, 1992.
Tzon-Tzer Lu and Sheng-Hua Shiou. Inverses of 2× 2 block matrices. Computers & Mathematics with Applications, 43(1-2):119–129, 2002.
Helmut Lütkepohl. New introduction to multiple time series analysis. Springer Science & Business Media, 2005.
William B Nicholson, David S Matteson, and Jacob Bien. VARX-L: Structured regularization for large vector autoregressions with exogenous variables. International Journal of Forecasting, 33(3):627–651, 2017.
William B Nicholson, Ines Wilms, Jacob Bien, and David S Matteson. High dimensional forecasting via interpretable vector autoregression. Journal of Machine Learning Research, 21(166):1–52, 2020.
Jostein Paulsen and Dag Tjøstheim. On the estimation of residual variance and order in autoregressive time series. Journal of the Royal Statistical Society: Series B, 47(2):216–228, 1985.
Kaare Brandt Petersen, Michael Syskind Pedersen, et al. The matrix cookbook. Technical University of Denmark, 7 (15):510, 2008.
Barry G Quinn. Order determination for a multivariate autoregression. Journal of the Royal Statistical Society: Series B, 42(2):182–185, 1980.
Said E Said and David A Dickey. Testing for unit roots in autoregressive-moving average models of unknown order. Biometrika, 71(3):599–607, 1984.
Gideon Schwarz. Estimating the dimension of a model. The Annals of Statistics, pages 461–464, 1978.
Anil K Seth, Adam B Barrett, and Lionel Barnett. Granger causality analysis in neuroscience and neuroimaging. Journal of Neuroscience, 35(8):3293–3297, 2015.
Ali Shojaie and Emily B Fox. Granger causality: A review and recent advances. Annual Review of Statistics and Its Application, 9(1):289–319, 2022.
Ali Shojaie and George Michailidis. Discovering graphical granger causality using the truncating lasso penalty. Bioinformatics, 26(18):i517–i523, 2010.
Ali Shojaie, Sumanta Basu, and George Michailidis. Adaptive thresholding for reconstructing regulatory networks from time-course gene expression data. Statistics in Biosciences, 4:66–83, 2012.
13

Christopher A Sims. Macroeconomics and reality. Econometrica, pages 1–48, 1980.
Bumho Son, Yunyoung Lee, Seongwan Park, and Jaewook Lee. Forecasting global stock market volatility: The impact of volatility spillover index in spatial-temporal graph-based model. Journal of Forecasting, 42(7):1539–1559, 2023.
Dag Tjøstheim and Jostein Paulsen. Bias of some commonly-used time series estimates. Biometrika, 70(2):389–399, 1983.
14

Appendix
Table of Contents
A Assumptions 16
B Simplifying multivariate loss 16
B.1 Simplifying equalities . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16
B.2 Simplifying the loss . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 18
C Proofs 18
C.1 Flat loss . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 18
C.2 Penalized loss recovers true order . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20
C.3 Consistency of sample loss . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20
D Additional simulation results 24
E Daily realized stock variances 28
15

A Assumptions
In this section, we list the assumptions used in our analyses and provide a brief discussion of each. All these assumptions are mild.
Assumption 1. Zt ∈ Rk×1 is a stable mean zero process. That is, det(Ik − A1z − · · · − Ap0 zp0 ) ̸= 0 for |z| ≤ 1.
This stability condition is standard and is identical to that used in Lütkepohl (2005, Eq. (2.1.12)). Note that stability implies stationarity (Lütkepohl, 2005, Proposition 2.1) and this assumption is required to replace second order expectations with autocovariances. That is, Assumption 1 is required to have E ZtZT
t−h = Γh. It is also required to use the Yule-Walker equations.
Assumption 2.
E Xpmax X T
pmax =

   
Γ0 Γ1 . . . Γpmax−1
Γ1T Γ0 . . . Γpmax−2
... ...
ΓpTmax−1 ΓpTmax−2 . . . Γ0

   
,
is invertible.
Note that due to the quadratic form of E Xpmax XpTmax , this matrix is symmetric and positive semidefinite. By assuming invertibility, we ensure this matrix is also positive definite. We also only need to make this assumption for pmax and we will have positive definiteness for all E Xpmax XpTmax for i = 1, . . . pmax since a matrix is positive definite if and only if all its principle minors are positive (see Lütkepohl (2005) Appendix A.8.3). The kith principle minor of E Xpmax XpTmax is det E XiX-
T
i . Again, E XiXT
i is symmetric and positive semi-definite so ensuring a positive determinant ensures strictly positive eigenvalues and thus positive definiteness. In all simulation settings this assumption has been met.
Assumption 3. We assume that for a VAR(p0) process when p < p0,
Γ1 . . . Γp−1

 
Γ0 . . . Γp−1
... ...
ΓpT−1 . . . Γ0

 
−1 
 
Γ...1T
ΓpT


 − Γp ̸= 0.
This assumption essentially states that we need at least p0 lags to generate the pth autocovariance Γp. This is a mild assumption. For example, it is implicitly made in Lütkepohl (2005, Eq. (2.1.37)) where for a VAR(p0) process, the autocovariance matrix is determined by the prior p0 lags.
B Simplifying multivariate loss
In this section, we show that the profiled loss can be written as
E
h
Yt − A∗
pXp
T Yt − A∗
pXp
i
= Tr (Γ0) − Tr

  
Γ1 . . . Γp

 
Γ0 . . . Γp−1
... ...
ΓpT−1 . . . Γ0

 
−1 
 
Γ...1T
ΓpT

 

  
.
To write the profiled loss in this way, we will need to replace expectations with atuocovariances as in E ZtZT
t−h = Γh.
Thus Assumption 1 (stability) is required.
B.1 Simplifying equalities
To begin, we first compute some expectations that will be needed to simplify the loss. We make note of several identities we will use. First, vec(A)T vec(B) = Tr(AT B) and vec(ABC) = (CT ⊗ A)vec(B). The jth row and column of Γi are denoted as Γi,j· and Γi,·j respectively.
16

We also note that E XpT ⊗ XpT ∈ R1×k2p2 and can be written as
E XT
p ⊗ XT
p = E Zt−1,1 . . . Zt−1,k Zt−2,1 . . . Zt−p,k ⊗ Zt−1,1 . . . Zt−1,k Zt−2,1 . . . Zt−p,k
=E

        
[ Zt2−1,1 . . . Zt−1,1Zt−1,k Zt−1,1Zt−2,1 . . . Zt−1,1Zt−2,k . . . Zt−1,1Zt−p,k
Zt−1,2Zt−1,1 . . . Zt−1,2Zt−1,k Zt−1,2Zt−2,1 . . . Zt−1,2Zt−2,k . . . Zt−1,2Zt−p,k
... ... ... ... ...
Zt−1,kZt−1,1 . . . Zt−1,kZt−1,k Zt−1,kZt−2,1 . . . Zt−1,kZt−2,k . . . Zt−1,kZt−p,k
Zt−2,1Zt−1,1 . . . Zt−2,1Zt−1,k Zt−2,1Zt−2,1 . . . Zt−2,1Zt−2,k . . . Zt−2,1Zt−p,k
... ... ... ... ... ]

        
.
We have
E Zt2−1,1 . . . Zt−1,1Zt−1,k
T = Γ0,·1.
Similarly,
E Zt−1,1Zt−2,1 . . . Zt−1,1Zt−2,k
T = Γ−1,·1 = (Γ1T )·1 ,
E Zt−1,1Zt−p,1 . . . Zt−1,1Zt−p,k
T = ΓT
p−1 ·1 .
We define
C :=
[Γ0,·1 (Γ1T )·1 (Γ2T )·1 . . . (ΓpT−1)·1
Γ0,·2 (Γ1T )·2 (Γ2T )·2 . . . (ΓpT−1)·2
... ...
Γ0,·k (Γ1T )·k (Γ2T )·k . . . (ΓpT−1)·k
Γ1,·1 Γ0,·1 (Γ1T )·1 . . . (ΓpT−1)·k
... ...
Γp−1,·k Γp−2,·k Γp−3,·k . . . Γ0,·k] .
Note that each element in C is ∈ Rk×1. For example, both Γ0,·1 and (Γ1)·T1 are ∈ Rk×1. Thus, C ∈ Rk×kp2 , and we can write
E XT
p ⊗ XT
p = vec(C)T
= vec

   

   
Γ0 Γ1 . . . Γp−1 Γ1T Γ0 . . . Γp−2
... ...
ΓpT−1 ΓpT−2 . . . Γ0

   

   
T
.
Using a similar idea, we have that
E XT
p ⊗YT
t = E Zt−1,1 . . . Zt−1,k Zt−2,1 . . . Zt−p,k ⊗ Zt,1 . . . Zt,k
= vec Γ1 . . . Γp
T.
For space considerations, we do not write out the steps in detail. The method proceeds similarly to the above. Next,
E XpXT
p =E

   

   
Zt−1
Zt−2
...
Zt−p

   
ZtT−1 ZtT−2 . . . ZtT−p

   
=E

   

   
Zt−1ZtT−1 Zt−1ZtT−2 . . . Zt−1ZtT−p
Zt−2ZtT−1 Zt−2ZtT−2 . . . Zt−2ZtT−2
... ...
Zt−pZtT−1 Zt−pZtT−2 . . . Zt−pZtT−p

   

   
=

   
Γ0 Γ1 . . . Γp−1 Γ1T Γ0 . . . Γp−2
... ...
ΓpT−1 ΓpT−2 . . . Γ0

   
.
17

Lastly,
E YtXT
p = Γ1 . . . Γp .
B.2 Simplifying the loss
We can now proceed in simplifying the population loss. First, note that
E
h
Yt − A∗
pXp
T Yt − A∗
pXp
i
=E YT
t Yt − 2E Y T
t A∗
pXp + E XT
p A∗T
p A∗
pXp
= Tr (Γ0) − 2E XT
p ⊗YT
t vec A∗
p + E XT
p ⊗ XT
p vec A∗T
p A∗
p
= Tr (Γ0) − 2 Tr

 

 
Γ...1T
ΓpT


 A∗
p


 + Tr

 

 
Γ0 . . . Γp−1
... ...
ΓpT−1 . . . Γ0


 A∗T
p A∗
p


.
Now, A∗pT = E XpXpT
−1,T E YtXpT
T=

 
Γ0 . . . Γp−1
... ...
ΓpT−1 . . . Γ0

 
−1,T 
 
Γ...1T
ΓpT


. Thus,

 
Γ0 . . . Γp−1
... ...
ΓpT−1 . . . Γ0


 is
symmetric and so is its inverse. Therefore, using Tr(AT B) = Tr(ABT ), we get
E
h
Yt − A∗
pXp
T Yt − A∗
pXp
i
= Tr (Γ0) − Tr

 

 
Γ...1T
ΓpT


 A∗
p

 
= Tr (Γ0) − Tr

  
Γ1 . . . Γp

 
Γ0 . . . Γp−1
... ...
ΓpT−1 . . . Γ0

 
−1 
 
Γ...1T
ΓpT

 

  
.
C Proofs
In this section, we prove Theorems 1 and 2 and Corollary 1. Specifically, Section C.1 focuses on Theorem 1, Section C.2 proves Corollary 1, and Section C.3 proves Theorem 2.
C.1 Flat loss
In this section, we prove Theorem 1 which establishes that the loss decreases until the true order p0 at which point it remains constant at Tr(Σε). The proof proceeds in several steps. We first relate the loss at fitted order p to the loss at fitted order p − 1. In the second step, we consider the cases when p > p0 and p ≤ p0 separately. Finally, we show that the loss at p0 is equal to Tr(Σε).
Proof of Theorem 1. Recall that
LVAR(p) := Tr (Γ0) − Tr

  
Γ1 . . . Γp

 
Γ0 . . . Γp−1
... ...
ΓpT−1 . . . Γ0

 
−1 
 
Γ...1T
ΓpT

 

  
.
To express LVAR(p) as a function of LVAR(p − 1), we partition the matrices as follows
Γ1 . . . Γp−1 Γp := g Γp ,
18


      
Γ0 . . . Γp−2 Γp−1 Γ1T . . . Γp−3 Γp−2
... ... ...
ΓpT−2 . . . Γ0
...
ΓpT−1 . . . Γ1T Γ0

      
:= B CT
C D . (6)
Now, using from the 2 x 2 block matrix inversion formula (Lu and Shiou, 2002),

 
Γ0 . . . Γp−1
... ...
ΓpT−1 . . . Γ0

 
−1
= B CT
CD
−1
= B−1 + B−1CT HCB−1 −B−1CT H
−HCB−1 H ,
where H = (D − CB−1CT )−1 is the inverse of the Schur-complement of block B. Carrying out the multiplication,
Γ1 . . . Γp

 
Γ0 . . . Γp−1
... ...
ΓpT−1 . . . Γ0

 
−1 
 
Γ...1T
ΓpT


 = g Γp
B−1 + B−1CT HCB−1 −B−1CT H −HCB−1 H
gT
ΓpT
= gB−1gT + gB−1CT HCB−1gT − ΓpHCB−1gT − gB−1CT HΓT
p + ΓpHΓT
p.
Thus,
LVAR(p) = Tr (Γ0) − Tr gB−1gT + gB−1CT HCB−1gT − ΓpHCB−1gT − gB−1CT HΓT
p + ΓpHΓT
p
= LVAR(p − 1) − Tr gB−1CT HCB−1gT − ΓpHCB−1gT − gB−1CT HΓT
p + ΓpHΓT
p
= LVAR(p − 1) − Tr gB−1CT HCB−1gT + Tr ΓpHCB−1gT + Tr gB−1CT HΓT
p − Tr ΓpHΓT
p
= LVAR(p − 1) − Tr gB−1CT − Γp H gB−1CT − Γp
T.
Note that this relationship holds in general. To get this result we only rely on Assumption 1 (stability) and Assumption 2 (invertibility). Now we use that the true process is VAR(p0) to study the loss when p > p0. If p > p0, from the Yule-Walker equations,
Γ1 . . . Γp−1 = A1 . . . Ap0

   
Γ0 Γ1 . . . Γp−2 Γ−1 Γ0 . . . Γp−3
... ...
Γ−(p0−1) Γ−(p0−2) . . . Γ−(p0−(p−1))

   
.
We can extend this to
Γ1 . . . Γp−1 = A1 . . . Ap0 0 . . . 0

   
Γ0 Γ1 . . . Γp−2 Γ−1 Γ0 . . . Γp−3
... ...
Γ2−p Γ3−p . . . Γ0

   
.
Using that Γ−i = ΓT
i and substituting in the definitions of B and g and under Assumption 2 (invertibility),
gB−1CT = A1 . . . Ap0 0 . . . 0

 
Γp−1
...
Γ1


 = Γp .
Thus, for any p > p0
LVAR(p) = LVAR(p − 1) .
19

Next, we study the loss when p ≤ p0. From Assumption 2 (invertibility), the matrix

 
Γ0 . . . Γp−1
... ...
ΓpT−1 . . . Γ0

 
is positive definite for all p = 1, . . . , pmax. From Proposition 2.2 of Gallier et al. (2020), the Schur-complement of block B in Eq. (6) is also positive definite and hence so is the inverse, H. From Assumption 3 (irreducibility), when p ≤ p0,
gB−1CT − Γp := ∆ ̸= 0 .
Recall our equation relating LVAR(p) to LVAR(p − 1):
LVAR(p) = LVAR(p − 1) − Tr gB−1CT − Γp H gB−1CT − Γp
T.
Using δT
i to denote the ith row of ∆,
Tr ∆H∆T =
k
X
i=1
δT
i Hδi .
Since H is positive definite and δi ̸= 0 for at least one i = 1, . . . , k, Tr ∆H∆T > 0 and thus
LVAR(p) < LVAR(p − 1) .
Lastly, we show that the loss flattens out at Tr(Σε). Since LVAR(p) = LVAR(p − 1) when p > p0, it suffices to show that LVAR(p0) = Tr(Σε):
LVAR(p0) = Tr (Γ0) − Tr

  
Γ1 . . . Γp0

 
Γ0 . . . Γp0−1
... ...
ΓpT0−1 . . . Γ0

 
−1 
 
Γ...1T
ΓpT0

 

  
= Tr(Γ0) − Tr
p0
X
i=1
AiΓ−i
!
= Tr (Γ0 − (Γ0 − Σε)) = Tr(Σε) ,
where in the second line we use ΓT
i = Γ−i, and in the third line we use the form of Γ0 from Lütkepohl (2005, Eq. (2.1.36)).
C.2 Penalized loss recovers true order
In this section, we prove Corollary 1 which states that, for the correct choice of penalty, the true VAR order can be recovered by penalizing the population loss.
Proof of Corollary 1. We first show that for p > p0, LVAR(p) + λp > LVAR(p0) + λp0. This follows immediately by noting that LVAR(p) − LVAR(p0) = 0 from Theorem 1 and λp > λp0 for p > p0 as λ > 0. Next, we show that for p < p0, LVAR(p) + λp > LVAR(p0) + λp0. Since p = p0 − i for some i, it suffices to show that λ < (LVAR(p0 − i) − LVAR(p0)) /i for every i = 1, . . . , p0. This holds by definition of λ in Corollary 1.
C.3 Consistency of sample loss
Next, we prove Theorem 2 which establishes that LˆVAR(p) converges to the population loss LVAR(p). This is proved
using Lemma 1 and the convergence of Γˆi to Γi.
20

Lemma 1. Consider the function
f (G) = Tr

      
Γ00 − Γ01 . . . Γ0p

     
Γ10 Γ11 Γ12 . . . Γ1p−1
(Γ11)T Γ20 Γ21 . . . Γ2p−2
(Γ12)T (Γ21)T Γ30 . . . Γ3p−3
... . . . ... (Γ1p−1)T (Γ2p−2)T (Γ3p−3)T . . . Γp
0

     
−1

 
(Γ01)T
...
(Γ0p)T

 

      
,
where the elements of the input vector G ∈ R k2(p+2)(p+1)
2 are denoted as
G=
h⃗Γ00 ⃗Γ01 . . . ⃗Γ0p ⃗Γ10 . . . ⃗Γp
0 ⃗Γ11 . . . ⃗Γp−1
1 ⃗Γ12 . . . ⃗Γp−2
2 . . . ⃗Γ1p−1
i
,
and ⃗Γ := vec(Γ)T is used to define the row vector formed by stacking the columns of Γ and transposing. The subscripts represent the autocovariance lag of interest while the superscripts represent (possibly) different estimates of that autocovariance. That is, Γi
h represents the ith estimate of the hth autocovariance.
If G and Gˆ are defined such that the corresponding inverses in f (G), f (Gˆ) and f ((1 − ν)G + νGˆ) exist for all ν ∈ (0, 1), then f (G) is Lipschitz continuous with respect to G. That is
f (Gˆ) − f (G) ≤ L Gˆ − G 1 ,
for some L < ∞.
The proof of Lemma 1 is deferred until after the proof of Theorem 2 for clarity of presentation. The proof of Theorem 2 proceeds by first showing that the least squares estimator of the loss can be expressed in terms of many different autocovariance estimators. Next, we show that the autocovariance estimators in the least squares estimator of the loss are asymptotically equivalent to the autocovariance estimators that use all available data. Finally, this fact is combined with Lemma 1 to establish-
 consistency and the rate of the least squares estimator of the loss.
Proof of Theorem 2. Consider our least squares estimator of the loss,
LˆVAR(p) = 1
n − p Tr Yp − AˆpXp Yp − AˆpXp
T
=1
n − p Tr YpYT
p − YpXT
p XpXT
p
−1 XpYT
p
= Tr 1
n − p YpYT
p− 1
n − p YpXT
p
1
n − p XpXT
p
−1 1
n − p XpYT
p
!
,
where for de-meaned data,
1
n − p YpYT
p= 1
n−p
n
X
t=1+p
(zt − z)(zt − z)T
1
n − p YpXT
p= 1
n−p
n
X
t=1+p
(zt − z) (xt,p − z)T
=1
n−p
h
Pn
t=1+p (zt − z) (zt−1 − z)T . . . Pn
t=1+p (zt − z) ztT−p − z
i
1
n − p XpXT
p= 1
n−p
n
X
t=1+p

 
(zt−1 − z)
...
(zt−p − z)

 
h
(zt−1 − z)T . . . (zt−p − z)T i
=1
n−p
n
X
t=1+p

 
(zt−1 − z) (zt−1 − z)T (zt−1 − z) (zt−2 − z)T . . . (zt−1 − z) (zt−p − z)T
... ...
(zt−p − z) (zt−1 − z)T (zt−p − z) (zt−2 − z)T . . . (zt−p − z) (zt−p − z)T


.
21

By examining 1
n−p XpXpT we can see that slightly different estimates of the same autocovariance are used. For example,
the diagonals of 1
n−p XpXpT show that p different estimates of Γ0 are used. Similarly p − 1 different estimates of Γ1
are used and p − 2 different estimates of Γ2 are used and so on. All the matrices used in estimating the least squares loss can be written as
ˆΓl−m,p = 1
n−p
n
X
t=1+p
(zt−m − z)(zt−l − z)T for l ∈ {0, 1, . . . , p}, 0 ≤ m ≤ l .
These estimators do not use all available data to estimate the autocovariances. For example, to estimate the autocovariance l − m = 1, it is possible to use observations 2, . . . , n. However, the least squares estimator uses only observations p + 1, . . . , n. We denote the autocovariance estimates that use all available data as
 ̃Γl−m = 1
n
n
X
t=(l−m)+1
(zt − z)(zt−(l−m) − z)T .
Let γ ̃l−m = (Γ ̃l−m)ij and γl−m = (Γl−m)ij. Then, under the assumptions of Theorem 1, it is shown in Quinn (1980) that n1/2−δ(γ ̃l−m − γl−m) converges almost surely to 0 for all δ > 0. Thus, n1/2−δ(γ ̃l−m − γl−m) also converges in probability to 0, which implies that |γ ̃l−m − γl−m| = oP (n−1/2+δ). These rates are not immediately applicable to
γˆl−m,p so we next establish that |γˆl−m,p − γl−m| = oP (n−1/2+δ) by simplifying Γˆl−m,p. We start by re-indexing the sum in ˆΓl−m,p with j = t − m. Then,
Γˆl−m,p = 1
n−p
n−m
X
j=p−m+1
(zj − z)(zj−(l−m) − z)T .
With this formulation, it is easy to see that the difference between Γ ̃l−m and ˆΓl−m,p is that Γ ̃l−m has the additional indices t = {(l − m) + 1, . . . , p − m} and t = {n − m + 1, . . . , n} in the sum and also uses a scaling of 1/n instead of 1/(n − p). Note that the number of the extra terms does not grow with n and instead only depends on l, m, p. Thus, these terms are o(1/n). The explicit relationship between the two is given by
Γ ̃l−m = n − p
n

Γˆl−m,p + 1
n−p


p−m
X
j=(l−m)+1
(zj − z)(zj−(l−m) − z)T +
n
X
j=n−m+1
(zj − z)(zj−(l−m) − z)T



.
(7) Using Eq. (7), we can write
|γˆl−m,p − γl−m| = n
n − p γ ̃l−m − o(n−1) − γl−m
= n−p
n − p γ ̃l−m + p
n − p γ ̃l−m − γl−m − o(n−1)
≤ |γ ̃l−m − γl−m| + oP (n−1) + o(n−1)
= oP (n−1/2+δ) ,
where in the second to last line we used the fact that γ ̃l−m converges in probability so γ ̃l−mp/(n − p) = oP (n−1). Since Assumption 2 holds by the assumptions of Theorem 1 and the data is drawn from a continuous distribution, we can apply Lemma 1 to see that
|LˆVAR(p) − LVAR(p)| ≤ L Gˆ − G∗
1
|LˆVAR(p) − LVAR(p)| ≤ L k2(p + 2)(p + 1)
2 oP (n−1/2+δ)
|LˆVAR(p) − LVAR(p)| = oP (n−1/2+δ) .
Note that the Gˆ is the input formed by the relevant autocovariance matrices used in the least squares loss and G∗ is the input consisting of the true autocovariance matrices as given in Eq. (8).
22

Proof of Lemma 1. For ease of notation, let
V (G) := Γ01 . . . Γ0p ,
T (G) :=

 
Γ10 . . . Γ1p−1
... ...
(Γ1p−1)T . . . Γp
0


.
With this, we have that,
f (G) = Tr Γ00 − V (G)T (G)V (G)T . .
To simplify notation further, we will suppress the dependence on G in the notation of V (G), T (G) and use the
shorthands V := V (G) and T := T (G). Let Gi be the ith element of G. Using ∂Tr(h(G))
∂Gi = Tr ∂h(G)
∂Gi , we have that
∂f (G) ∂Gi
= Tr ∂Γ00
∂Gi
− ∂V
∂Gi
T −1V T − V ∂T −1
∂Gi
V T − V T −1 ∂V T
∂Gi
.
From (59) of Petersen et al. (2008), ∂T −1
∂Gi = −T −1 ∂T
∂Gi T −1. Thus,
∂f (G) ∂Gi
= Tr ∂Γ00
∂Gi
− ∂V
∂Gi
T −1V T + V T −1 ∂T
∂Gi
T −1V T − V T −1 ∂V T
∂Gi
.
Note that each of ∂Γ0
0
∂Gi , ∂V
∂Gi , ∂T
∂Gi are matrices containing 1 in the entries of Γ00, V, T where Gi is present and 0 otherwise. While matrix multiplication and the trace are continuous functions in general, matrix inversion is a continuous
function only over the set of invertible matrices. However since we have assumed that G, Gˆ are such that the inverses exist, we conclude that f (G) is continuously differentiable. By the mean value theorem and Hölder’s inequality
f (Gˆ) − f (G) ≤ ∇f ((1 − ν)G + νGˆ) ∞
Gˆ − G 1 ,
for some ν ∈ (0, 1). Since ∂f(G)
∂Gi is continuous for each Gi, it is bounded on any closed interval including between G
and Gˆ. Thus ∇f ((1 − ν)G + νGˆ) ∞
is bounded and
f (Gˆ) − f (G) ≤ L Gˆ − G 1 ,
for some L < ∞.
Remark 1. As shown in the proof of Theorem 2, the least squares estimator, Aˆp, uses multiple estimates of the autocovariances Γi. Thus, it is necessary to define G and f (G) in Lemma 1 to allow for multiple estimators of
autocovariances Γi. In practice, however, the estimates of each of the autocvoariances Γi used in Aˆp are nearly identical.
Remark 2. It is worth noting that if we define
G∗ = ⃗Γ0 ⃗Γ1 . . . ⃗Γp ⃗Γ0 . . . ⃗Γ0 ⃗Γ1 . . . ⃗Γ1 ⃗Γ2 . . . ⃗Γ2 . . . ⃗Γp−1 , (8)
where Γi are the ith population autocovariances, then under Assumption 2, f (G∗) = LVAR(p). That is, f (G∗) is the expected squared error loss at fitted order p.
Remark 3. We require G and Gˆ to be such that the inverses in f (G), f (Gˆ), f ((1 − ν)G + νGˆ) exist for all ν ∈ (0, 1), as the inverse function is only continuous over the set of invertible matrices. In our theoretical analysis of Theorem 2,
this holds by Assumption 2 and the fact that Gˆ is generated from a continuous distribution so that the inverse in f (Gˆ)
exists with probability 1 and similarly the inverse in f ((1 − ν)G + νGˆ) is also exists with probability 1 for all ν ∈ (0, 1).
To better understand teh structure of ∂Γ0
0
∂Gi , ∂V
∂Gi , ∂T
∂Gi mentioned in the proof of Lemma 1, we consider two examples.
23

Example 1. For the first example consider taking the partial derivative with respect to the first component, G1 = (Γ00)1,1.
That is, G1 is the (1, 1) entry of the Γ00 parameter. Then, the partial derivatives are
∂Γ00 ∂G1
=

   
1 0 ... 0 0 0 ... 0
... ... ...
0 0 ... 0

   
,
∂V ∂G1
= 0,
∂T ∂G1
= 0.
Example 2. For the second example consider taking the partial derivative with respect to the (k2(2p + 1) + 1)-th component in G. We have that Gk2(2p+1)+1 = (Γ11)1,1. The resulting partial derivatives are
∂Γ00
∂ Gk2 (2p+1)+1
= 0,
∂V
∂ Gk2 (2p+1)+1
= 0,
∂T
∂ Gk2 (2p+1)+1
=

             
0k×k

 
1 0 ... 0
... . . .
0 0 ... 0


 . . . 0k×k

 
1 0 ... 0
... . . .
0 0 ... 0


 0k×k . . . 0k×k
... . . . ...
0k×k 0k×k . . . 0k×k

             
.
D Additional simulation results
In this section, we present additional simulation results. In Figure S7 we compare order selection by minimizing MIC with λST (denoted as MIC) to the alternative procedures, MIC-sp and MIC-mt, from Section 4.2. Recall that MIC-sp uses MIC with a penalty λsp that is chosen by using a 70-30 train-test split of the data while MIC-mt also uses a 70-30 split but chooses the order 0, . . . , pmax that minimizes the test error. Overall we see that MIC offers the best performance over all settings and sam-
ple sizes. In Figure S8 we study the performance of each order selection method for large sample sizes in the VAR3(2) switching simulation setting. MIC is the only method that consistently estimates the true order for all sample sizes. Lastly, as discussed in Section 5.2, we compare the likelihood of over and under selection of the true model order for MIC using an oracle λ to each of the competing order selection methods. The results in Figures S9 to S11 show that MIC-oracle tends to over select -
the true order while the alternative methods tend to under select the true order. Moreover, as seen in Figure S11, the probability of over selection in MIC-oracle may be worse than the corresponding probability of under selection from AIC, BIC, and HQ when the dimension is large and the errors are non-diagonal Gaussian.
24

VAR5(3) VAR10(3)
AR(2) VAR2(2)
0 1,000 2,000 3,000 4,000 5,000 0 1,000 2,000 3,000 4,000 5,000
0.0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1.0
0.0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1.0
n
Accuracy
Method MIC MIC-sp MIC-mt
Figure S7: Diagonal Gaussian errors. Simulation results comparing accuracy of different MIC order selection methods. Vertical lines indicate standard errors.
VAR3(2) switching
20,000 40,000 60,000 80,000 100,000
0.0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1.0
n
Accuracy
Method MIC AIC HQ BIC
Figure S8: VAR3(2) switching. Large sample size simulation results. Vertical lines indicate standard errors. Points have been jittered by 0.02 in the vertical and 1000 in the horizontal directions to improve readability.
25

AR(2)
0.0
0.1
0.2
0.3
0.4
0.5
0.6
AR(2)
0.0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8 AR(2)
-1
0
1
2
3
4
5
6
7
8
VAR2(2)
0 1,000 2,000 3,000 4,000 5,000
0.0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
n
VAR2(2)
0 1,000 2,000 3,000 4,000 5,000
0.0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
n
VAR2(2)
250 500 1,000 2,000 5,000
-2
-1
0
1
2
3
4
5
6
7
8
n
Prob. over selection
Prob. under selection
Diff. from selected to true order
Method MIC-oracle AIC HQ BIC
Figure S9: Diagonal Gaussian errors. Simulation results for over and under selection of order with diagonal Gaussian errors. Vertical lines indicate standard errors. Points in the over and under selection plots have been jittered by 0.02 in the vertical and 50 in the horizontal directions to improve readability.
VAR5(3)
0 1,000 2,000 3,000 4,000 5,000
0.0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1.0
VAR5(3)
0 1,000 2,000 3,000 4,000 5,000
VAR5(3)
250 500 1,000 2,000 5,000
-3
-2
-1
0
1
2
3
4
5
6
7
VAR10(3)
1,000 2,000 3,000 4,000 5,000
0.0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1.0
n
VAR10(3)
1,000 2,000 3,000 4,000 5,000 n
VAR10(3)
500 1,000 2,000 5,000
-2
-1
0
1
2
3
4
5
6
7
n
Prob. over selection
Prob. under selection
Diff. from selected to true order
Method MIC-oracle AIC HQ BIC
Figure S10: Diagonal Gaussian errors. Simulation results for over and under selection of order with diagonal Gaussian errors. Vertical lines indicate standard errors. Points in the over and under selection plots have been jittered by 0.02 in the vertical and 50 in the horizontal directions to improve readability.
26

VAR2(2)
0.0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
VAR2(2)
0.0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1.0 VAR2(2)
0
1
2
3
4
5
6
7
8
VAR5(3)
0 1,000 2,000 3,000 4,000 5,000
0.0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1.0
VAR5(3)
0 1,000 2,000 3,000 4,000 5,000
0.00
0.05
0.10
0.15
0.20
0.25
0.30 VAR5(3)
250 500 1,000 2,000 5,000
-3
-2
-1
0
1
2
3
4
5
6
7
VAR10(3)
1,000 2,000 3,000 4,000 5,000
0.0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1.0
n
VAR10(3)
1,000 2,000 3,000 4,000 5,000 n
VAR10(3)
500 1,000 2,000 5,000
-2
-1
0
1
2
3
4
5
6
7
n
Prob. over selection
Prob. under selection
Diff. from selected to true order
Method MIC-oracle AIC HQ BIC
Figure S11: Non-diagonal Gaussian errors. Simulation results for over and under selection of order with non-diagonal Gaussian errors. Vertical lines indicate standard errors. Points in the over and under selection plots have been jittered by 0.02 in the vertical and 50 in the horizontal directions to improve readability.
27

E Daily realized stock variances
Table S3 shows the stocks and their corresponding descriptions that were included in the financial forecasting analysis from Section 6.1. A check mark in the k = 16 or k = 7 column indicates that the stock was included in the corresponding analysis shown in Table 1.
Stock Description k = 16 k = 7
AEX Amsterdam Exchange Index ✓ AORD All Ordinaries Index ✓ BFX Belgium Bell 20 Index ✓ BVSP BOVESPA Index ✓ DJI Dow Jones Industrial Average ✓ FCHI Cotation Assist ́ee en Continu Index ✓ ✓ FTSE Financial Times Stock Exchange Index 100 ✓ ✓ GDAXI Deutscher Aktienindex ✓ ✓ HSI HANG SENG Index ✓ ✓ IXIC Nasdaq stock index ✓ KS11 Korea Composite Stock Price Index ✓ ✓ MXX IPC Mexico ✓ N225 Tokyo stock exchange index ✓ RUT Russel 2000 ✓ SPX Standard & Poor’s 500 market index ✓ ✓ SSMI Swiss market index ✓ -
STOXX50E EURO STOXX 50 ✓
Table S3: Stocks analyzed in financial application
28

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:20.175Z
- **Text Length:** 67574 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 28 of 28
