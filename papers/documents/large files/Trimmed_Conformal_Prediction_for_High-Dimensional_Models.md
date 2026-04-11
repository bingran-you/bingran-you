# PDF Document: Chen et al. - 2016 - Trimmed Conformal Prediction for High-Dimensional Models.pdf

**File Path:** Chen et al. - 2016 - Trimmed Conformal Prediction for High-Dimensional Models.pdf

**Processed Date:** 2026-02-10T18:14:01.674Z

**File Size:** 167.37 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2727

**Title:** Trimmed Conformal Prediction for High-Dimensional Models

**Collection:** Large Files

---

## Extracted Text Content

arXiv:1611.09933v1 [math.ST] 29 Nov 2016
Trimmed Conformal Prediction for High-Dimensional Models
Wenyu Chen1, Zhaokai Wang1, Wooseok Ha1, and Rina Foygel Barber1
1Department of Statistics, University of Chicago
December 1, 2016
Abstract
In regression, conformal prediction is a general methodology to construct prediction intervals in a distribution-free manner. Although conformal prediction guarantees strong statistical property for predictive inference, its inherent computational challenge has attracted the attention of researchers in the community. In this paper, we propose a new framework, called Trimmed Conformal Prediction (TCP), based on two stage procedure, a trimming step and a prediction step. The idea is to use a prelimi-
nary trimming step to substantially reduce the range of possible values for the prediction interval, and then applying conformal prediction becomes far more efficient. As is the case of conformal prediction, TCP can be applied to any regression method, and further offers both statistical accuracy and computational gains. For a specific example, we also show how TCP can be implemented in the sparse regression setting. The experiments on both synthetic and real data validate the empirical performanc-
e of TCP.
1 INTRODUCTION
High-dimensional data are omnipresent in many scientific fields such as computational biology, and accordingly modern statistical inference has been evolving rapidly to develop tools that are valid in high-dimensional data. Though most research focuses explicitly on constructing and providing the confidence sets of the parameters of interest, they inevitably require strong assumptions on the data generation distribution or noise distribution. In contrast, recent work by Lei et al. [2] studies a ge-
neral framework for predictive inference under no distribution assumptions and only requiring the exchangeability of the training data and a new test data point. In their work, the main tool allowing the distribution free predictive inference is a method called “conformal prediction”, first proposed by Vovk et al. [4, 5, 6] in the context of sequential classification and regression problems. To put it simply, conformal prediction is a way of exploiting the exchangeability of the residuals by treat-
ing them equally and sorting in the magnitudes—we provide a more detailed background in the next section. While conformal prediction is a powerful method to construct the prediction intervals in a distribution free manner, as pointed out by Lei et al. [2], it it usually computationally prohibitive. To avoid the computational issue, the authors also propose an alternative procedure based on sample splitting, called “split conformal prediction”. Although the sample splitting method can reduce the co-
mputational cost drastically, the obvious drawback is losing the full power of the available sample, which is problematic as it can substantially increase the width of the resulting prediction intervals. In this paper, we address such issue and propose an efficient algorithm, Trimmed Conformal Prediction (TCP). TCP consists of a trimming step and a prediction step: in the trimming step, potential y values for the test point are rapidly preprocessed to determine which y values are most unlikely; th-
ese are then “trimmed” away. Then in the prediction step, we apply the conformal prediction algorithm only on this restricted set of y values, to construct the prediction intervals more efficiently. The key idea of TCP is that by performing conformal prediction on a small set of candidate y values, the computation can be improved significantly. Of course this comes at the price of losing some confidence
1

in the prediction intervals, but in practice the loss is almost negligible. Our main theoretical result provides a simple and rigorous quantification of the loss of the coverage rate due to the trimming step. To manifest the computational benefits of our algorithm, we also apply our method to the sparse linear model; here we use the lasso [3] as our prediction algorithm, and show that an easy trimming step can form a relatively small set of candidate y values for the conformal prediction algorith-
m. In total, our algorithm requires far fewer calls of the lasso solver while losing almost no coverage rate in practice. Hebiri [1] also considered conformal prediction based on the lasso estimator, but they do not take account for the change of the support when adding a new test point to the training data and thus their method does not offer a guarantee of finite sample coverage. On the other hand, our method guarantees the exact finite sample coverage while enjoying fast computation. We also de-
monstrate the superior performance of our method through a series of numerical experiments and real data applications.
2 BACKGROUND
2.1 Sparse Models and the Lasso
In the task of predicting the response y at new feature point x, linear regression is often preferred due to its simplicity and interpretability. In the high-dimensional regime where p > n, it is natural to assume that the regression coefficient is sparse. Under such assumption, the most popular approach is by solving the l1-penalized least squares problem, also known as the lasso [3], given by
̂β = arg min
β∈Rp
{1
2 ‖Y − Xβ‖2
2 + λ‖β‖1
}
, (1)
where Y ∈ Rn is the response while X ∈ Rn×p contains the p potential features. One attractive
property of the lasso (1) is that it selects only a few variables in the solution ̂β, resulting a sparse model. While many results are known guaranteeing strong accuracy of the lasso solution when the assumed sparse linear model is true or approximately true (e.g. [8, 7]), in practice we cannot know whether we are in such a setting, and assessing the predictive accuracy of the lasso without such assumptions is critical.
2.2 Conformal Prediction
Conformal prediction [5] seeks to provide reliable prediction intervals for new data points without assuming that the model used for prediction is necessarily true. The only assumption is that the training and test data points are exchangeable. Let ̂μ : X → R denote a fitted regression function, which is determined by an unordered sample of n + 1 many (x, y) points, and maps x values to predicted y values. Let (X1, Y1), . . . , (Xn, Yn) be our training data, and let (Xn+1, Yn+1) be the new test po-
int where Xn+1 is known while Yn+1 is the true but unknown response value. The key idea is that if we were able to fit ̂μ using this entire sample of size n + 1, {(Xi, Yi) : i = 1, . . . , n + 1}, then the exchangeability of the n + 1 data points implies that the residuals, ̂ri = Yi − ̂μ(Xi), are exchangeable as well. In particular, the residual ̂rn+1 of the test point is equally likely to rank anywhere in the list, and so the event that |̂rn+1| is in the bottom 1 − α quantile of |̂r1|, . . . , |̂-
rn+1| has probability at least 1 − α. Of course, we cannot compute ̂μ and ̂r since they depend on the unknown test point value Yn+1. Instead, define ̂μy to be the fitted regression function using data points (X1, Y1), . . . , (Xn, Yn), (Xn+1, y) and let
̂ry = (Y1 − ̂μy(X1), . . . , Yn − ̂μy(Xn), y − ̂μy(Xn+1))
be the residuals using this function on this set of n + 1 data points. Note that if we happen to choose
2

y = Yn+1 we recover the original values, i.e. ̂μYn+1 = ̂μ and ̂rYn+1 = ̂r. Then define
Y=
{
y ∈ R : |(̂ry)n+1| is in the bottom 1 − α quantile of |(̂ry)1|, . . . , |(̂ry)n+1|
} .
For y = Yn+1, since ̂ry = ̂r, we see that this statement must hold with probability at least 1 − α. That is,
P {Yn+1 ∈ Y} ≥ 1 − α,
giving the desired probability of coverage for the prediction interval Y.
2.3 Split Conformal Prediction
While the conformal prediction method described above gives the desired statistical properties (namely, the correct coverage level without assuming any model or distribution), computationally it can be quite challenging. The reason is that the regression model must be fitted once for each value y which is being considered—technically, we would have to fit a model ̂μy for all y ∈ R, although in practice a large and fine grid of y values may be used. If the model is computationally demanding, this p-
rocess can be inefficient. To address this, Lei et al. [2] propose a split conformal prediction procedure, where ̂μsplit is fitted on half the training sample, {(Xi, Yi) : i ∈ I1} where I1 ⊂ [n] is a set of size |I1| = n/2, while the remaining half is used to obtain an empirical distribution of the residuals. Specifically, defining residuals (̂rsplit)i = Yi − ̂μsplit(Xi) for i ∈ I2 = [n]\I1, then the prediction interval is given by
Ysplit = {y ∈ R : |y − ̂μsplit(Xn+1)| is in the bottom (1 − α) quantile of {|(̂rsplit)i| : i ∈ I2 ∪ {n + 1}} }.
As pointed out in [2] this set can simply be computed as the interval
Ysplit = ̂μsplit(Xn+1) ± ̂r∗
split
where ̂rs∗plit is the ⌈(1 − α) · (n/2 + 1)⌉-st smallest value among {|(̂rsplit)i| : i ∈ I2}.
This gives the same target coverage level, while only requiring one regression ̂μsplit to be computed; the drawback is that the intervals are likely to be wider, as the model is fitted with only n/2 many samples and is therefore less accurate.
3 METHOD
Before presenting our method, we motivate it with a simple example. For the original form of conformal prediction, except in some special cases like linear regression where the resulting interval can be computed in closed form, in general we would need to choose some finite range [−ymax, ymax] within which we select a grid of y values that we test for inclusion in Y. An intuitive choice for ymax is to choose the largest value of the training data, ymax = max1≤i≤n |Yi|. We can justify this theoreti-
cally by observing that, due to exchangeability,
P
{
|Yn+1| > max
1≤i≤n |Yi|
}
≤1
n + 1,
and so
P {Yn+1 ∈ Y ∩ [−ymax, ymax]} ≥ 1 − α − 1
n + 1 , (2)
giving nearly the nominal coverage level. (Here Y is the output of conformal prediction run on the full range y ∈ R, as described in Section 2.2.) Our method, TCP, can be viewed as a generalization of this idea, and is summarized with these two steps:
3

1. Trimming step: apply conformal prediction with a fast but less accurate method to construct a prediction interval Ytrim (which is wide, but generally will be much smaller than [−ymax, ymax]).
2. Prediction step: apply conformal prediction with a slow but accurate regression model, working only over the restricted set Ytrim.
The goal is to obtain (nearly) the same accuracy as the second (slow) model, while saving significant computation time by only fitting this slow regression model over a restricted range Ytrim. To achieve this goal we consider two possibilities: trimming via a preliminary conformal prediction step, or a split conformal prediction step.
Trimming with Conformal Prediction Suppose we are equipped with two regression algorithms, one fast (and inaccurate) and one slow (and highly accurate), which each map a (unordered) data set of size n + 1 to a predictive function, denoted as ̂μfast and ̂μslow, respectively. For any y ∈ R, let (̂μfast)y denote the model ̂μfast fitted to data set (X1, Y1), . . . , (Xn, Yn), (Xn+1, y), and let (̂rfast)y denote the residuals of this model. Define (̂μslow)y, (̂rslow)y analogously. Our algorithm is give-
n by the steps:
1. Trimming step:
Ytrim =
{
y ∈ R : |((̂rfast)y)n+1| is in the bottom (1 − αtrim) quantile
of |((̂rfast)y)1|, . . . , |((̂rfast)y)n+1|
} .
2. Prediction step:
Ypredict =
{
y ∈ Ytrim : |((̂rslow)y)n+1| is in the bottom (1 − αpredict) quantile
of |((̂rslow)y)1|, . . . , |((̂rslow)y)n+1|
} .
Note the computational advantage: the slow model (̂μslow)y only needs to be fitted over y ∈ Ytrim (or rather, over a grid of y values covering Ytrim), rather than over all y ∈ R. (In practice, the trimming step may need to be carried out over a finite grid of y values, as well.) In fact, we can consider a special case: if we choose the fast method ̂μfast to simply predict a value of zero always, ̂μfast ≡ 0, and set αtrim = 1
n+1 , then this reduces to the method described earlier where
conformal prediction is computed only on the empirical range [−ymax, ymax], since the first step of our algorithm would compute Ytrim = [−ymax, ymax], and would then test only those y values in this range for inclusion into Ypredict.
Trimming with Split Conformal Prediction In some cases, we may prefer to use a split conformal prediction approach for the trimming step. In this setting, consider again two regression algorithms, ̂μsplit and ̂μslow. We then carry out the steps:
1. Trimming step: apply split conformal prediction using ̂μsplit, namely, fit ̂μsplit to the first half of the training data, then define
Ytrim = ̂μsplit(Xn+1) ± ̂rs∗plit
where ̂rs∗plit is the ⌈(1 − αtrim)(n/2 + 1)⌉-th smallest absolute residual of ̂μsplit on the second half
of the training data.
2. Prediction step: same as before.
4

This procedure again offers a computational advantage over simply applying the costly regression method ̂μslow to a large grid of y values (without a trimming step). Of course, we also have the option of simply using split conformal prediction; relative to this option, we instead have a statistical advantage—since we are using the full sample size n to build our predictive interval Ypredict, we expect to have a narrower interval than if we had used the less accurate model ̂μsplit which is fitted -
only on a sample of size n/2. We will see these tradeoffs in practice in our experiments below.
Theoretical Guarantee As expected, our algorithm (in either form) offers a coverage guarantee that combines the coverage levels of the two steps:
Theorem 1. If the data points (X1, Y1), . . . , (Xn+1, Yn+1) are exchangeable, then either version of the TCP method gives coverage level
P {Yn+1 ∈ Ypredict} ≥ 1 − αtrim − αpredict.
Before proving this result, we note that this result reduces to the coverage level given in (2) in the special case where we choose ̂μfast ≡ 0.
Proof. We see that Ytrim is simply the conformal prediction interval determined by the fast regression model ̂μfast (in the first version of the method) or the interval determined by split conformal inference with ̂μsplit (in the second version). Furthermore, defining
Y ̃predict =
{
y ∈ R : |((̂rslow)y)n+1| is in the bottom (1 − αpredict) quantile
of |((̂rslow)y)1|, . . . , |((̂rslow)y)n+1|
} ,
this is the conformal prediction interval calculated with the slow model ̂μslow. Then, using existing results on conformal prediction (or split conformal prediction), we know that P {Yn+1 ∈ Ytrim} ≥
1 − αtrim and P
{
Yn+1 ∈ Y ̃predict
}
≥ 1 − αpredict. By definition of our algorithm, we can also see that
Ypredict = Ytrim ∩ Y ̃predict, which proves the desired coverage level.
3.1 Application to Sparse Regression with the Lasso
For the sparse linear model setting, as mentioned before, we would often like to perform conformal prediction with the lasso (1) but cannot afford to refit the lasso over a long list of y values (e.g. over a fine grid spanning the range [−ymax, ymax]). We note here that the lasso is known to be easy to solve if the support and signs of the solution
̂β are known in advance—the solution then takes a closed form. After fitting the lasso to some
y∗ ∈ [−ymax, ymax], we might then hope that the support and signs of ̂β would remain unchanged across this entire interval; this could easily be checked using the KKT optimality conditions for the lasso solution, and we would then avoid a second call to the lasso algorithm. Unfortunately, in practice, we have found that the support changes many times (even dozens of times) across this range even in simple simulations. As an alternative, we run our two-stage algorithm with a more aggressive trimmin-
g step to reduce the trial set farther. We now give the details.
3.1.1 Trimming Step
For the trimming step, we consider two possibilities:
5

Trimming via Ridge Regression For the ridge regression option, the fast model ̂μfast is given by the penalized least squares regression
̂βridge = arg min
β∈Rp
{1
2 ‖Y − Xβ‖2
2+ ρ
2 ‖β‖2
2
}
= (X⊤X + ρIp)−1X⊤Y,
where X ∈ R(n+1)×p and Y ∈ Rn+1 contain the full (training and test) data. In this case we can solve for Ytrim in closed form, for the n + 1 residuals can be written as (̂rfast)y = u + vy, a linear function in y, where
u=
[Y1:n
0
]
− X(X⊤X + ρIp)−1X⊤
[Y1:n
0
]
, v=
[0n 1
]
− X(X⊤X + ρIp)−1Xn+1.
For each i, then, the inequality |((̂rfast)y)n+1| ≤ |((̂rfast)y)i| holds in the interval enclosed by un+1−ui
vi −vn+1 and −un+1−ui
vi+vn+1 . Denote the smaller of these two values as ci and the larger as di; we can show that maxi ci ≤ mini di always, since for all i, the interval [ci, di] contains the value y∗ = −un+1/vn+1, which is the unique value for y ensuring a zero residual value, i.e. ((̂rfast)y)n+1 = 0. Finally, choose endpoints cridge ≤ y∗ ≤ dridge such that [ci, di] ⊆ [cridge, dridge] is violated for exactly αtrim(n + 1) many values i ∈ [n]; this gives the trimmed range, Ytrim = [cridge, dridge]. In particular, if α-
trim = 1
n+1 ,
then we can simply set Ytrim = [mini∈[n] ci, maxi∈[n] di].
Trimming via Split Conformal Inference with Lasso Alternately, we can apply the lasso to half of the training data, indexed by I1 ⊂ [n] with |I1| = n/2, then use this fitted model for trimming via split conformal inference. Specifically, define
̂βtrim = arg min
β∈Rp
{1
2 ‖YI1 − XI1 β‖2
2 + λ‖β‖1
}
. (3)
We then set
Ytrim = Xn⊤+1 ̂βtrim ± ̂r∗
split
where, as before, ̂rs∗plit is the ⌈(1 − αtrim)(n/2 + 1)⌉-th smallest value among
{|Yi − Xi⊤ ̂βtrim| : i ∈ I2 = [n]\I1}.
In particular, if we choose αtrim = 1
n/2+1 , then we obtain Ytrim = Xn⊤+1 ̂βtrim ± maxi∈[n] |Yi − Xi⊤ ̂βtrim|.
3.1.2 Prediction Step
For the prediction step, we simply apply the conformal prediction algorithm using lasso regression as the base method, over only the restricted trial set y ∈ Ytrim (or, in practice, a fine grid of points over this set). Specifically, writing
̂βy = arg min
β∈Rp
{ 1 2
∥∥∥∥
[Y1:n
y
]
− Xβ
∥∥∥∥
2
2
+ λ‖β‖1
}
,
we define
Ypredict =
{
y ∈ Ytrim : |y − Xn⊤+1 ̂βy| is in the bottom (1 − αpredict) quantile of
|Y1 − X⊤
1 ̂βy|, . . . , |Yn − Xn⊤ ̂βy|, |y − Xn⊤+1 ̂βy|
} .
6

4 EMPIRICAL RESULTS
We now test our method empirically, both on simulated data and on real data from the Capital Bikeshare program in Washington DC. Code to reproduce our experiments is available online.1
4.1 Simulation Studies
We generate simulated data to compare the performance of four algorithms: conformal inference with the lasso on the trial set [−ymax, ymax] (denoted as “MaxTrim” in our results); trimmed conformal inference using ridge regression to produce Ytrim (“RidgeTrim”); trimmed conformal inference where Ytrim is obtained via split conformal inference with the lasso (“SplitTrim”); and split conformal inference with the lasso [2] (“Split”). Note that MaxTrim, which performs conformal inference on the interva-
l [−ymax, ymax], is essentially how conformal prediction is implemented in practice since, for methods such as lasso that must be rerun for each new y value, we cannot perform conformal prediction over the entire real line y ∈ R. In each case we aim for 90% coverage. For the trimmed methods, we set αtrim as small as possible, namely αtrim = 1
n+1 (or αtrim = 1
(n/2)+1 for trimming with split conformal inference); see Section 3 for details on this. Since this is very small, we then set αpredict = 0.1 to obtain (nearly) 90% coverage.
4.1.1 Settings
We generate data from a linear model, Y = Xβ + ǫ, where:
• The p features (the columns of X) are generated either with i.i.d. N (0, 1) entries, or are generated with high correlations, with the rows of X drawn i.i.d. from a N (0, Σ) distribution, where Σi,j = 0.9|i−j|;
• The noise is generated either as ǫi
i.i∼.d. N (0, 1) or ǫi
i.i∼.d. t(5), the t distribution with 5 degrees of freedom;
• The true signal β is given βi = 2 for i ∈ S, where the true support S is a set of size k chosen at random, and βi = 0 for i 6∈ S.
Our methods will be run with desired level α = 0.1. We use λ = √n log(p) for normal noise case, and
λ=
√
5
3 n log(p) for t noise case (when we use split conformal inference, and the effective sample size
is n/2, we use λ = √(n/2) log(p) or
√
5
3 (n/2) log(p)).
4.1.2 Results
Table 1 displays our results for the setting n = 200, p = 2000, k = 10, across both feature and noise models; we record the coverage level for each method, as well as the width of the trial set Ytrim (which should be interpreted as the computational cost—note that this is not relevant for split conformal inference, which only ever fits the model once), and the width of the resulting prediction interval Ypredict. Results are averaged over 500 trials. In Figures 1 and 2, we show the widths of Ypredi-
ct and Ytrim when the number of features varies, p = 100, 200, . . . , 3000, with n = 200 and k = 10 fixed. We do the same in Figures 3 and 4 when instead n = 200, p = 2000 are fixed and we vary the true model size, k = 2, 4, . . . , 30. For these figures, we show results only for the normal noise model and the uncorrelated features model. Results are averaged over 500 trials. From the simulation, we see that the three TCP methods (MaxTrim, RidgeTrim, and SplitTrim) give substantially narrower pre-
diction intervals than split conformal prediction. With more features
1Available at https://www.stat.uchicago.edu/~ rina/conformal.html.
7

PI Trial set Coverage width width (%)
Uncorr. features
N (0, 1)
MaxTrim 4.39 38.06 90.4 RidgeTrim 4.39 36.22 90.4 SplitTrim 4.39 10.06 90.2 Split 6.35 — 89.6
t(5)
MaxTrim 5.54 38.51 92.0 RidgeTrim 5.54 36.99 92.0 SplitTrim 5.54 13.76 92.0 Split 8.27 — 91.8
High corr. features
N (0, 1)
MaxTrim 4.41 38.18 91.2 RidgeTrim 4.40 26.50 91.0 SplitTrim 4.41 9.09 91.0 Split 5.77 — 89.6
t(5)
MaxTrim 5.55 39.02 90.0 RidgeTrim 5.54 27.88 89.8 SplitTrim 5.54 12.53 90.0 Split 7.34 — 91.8
Table 1: Results of the simulated data experiment, for uncorrelated or highly correlated features, and for N (0, 1) or t(5) distributed noise, for settings n = 200, p = 2000, k = 10. Desired coverage level is 1 − α = 90%. “Trial set width” is the width of Ytrim for the trimmed conformal prediction methods, and should be viewed as a proxy for computational cost.
Dimension p
0 500 1000 1500 2000 2500 3000
PI width
0
2
4
6
8
MaxTrim RidgeTrim SplitTrim Split
Figure 1: Width of prediction intervals (PIs) for all methods, as the number of features p varies. The results for MaxTrim, RidgeTrim, and SplitTrim are nearly identical and cannot be distinguished in the plot.
Dimension p
0 500 1000 1500 2000 2500 3000
Trial set width
0
10
20
30
40
MaxTrim RidgeTrim SplitTrim
Figure 2: Width of trial sets for all methods, as the number of features p varies; this width is a proxy for computational cost. (The split conformal inference method is not included as it only fits the lasso model once in any setting.)
p or a larger true model size k, the gap between split conformal inference and the TCP methods increases—this is intuitive, as using the full sample size becomes more important for accuracy as the
8

Sparsity k
0 5 10 15 20 25 30
PI width
0
10
20
30
40
MaxTrim RidgeTrim SplitTrim Split
Figure 3: Width of prediction intervals (PIs) for all methods, as the size k of the true model varies. The results for MaxTrim, RidgeTrim, and SplitTrim are nearly identical and cannot be distinguished in the plot.
Sparsity k
0 5 10 15 20 25 30
Trial set width
0
20
40
60
80
MaxTrim RidgeTrim SplitTrim
Figure 4: Width of trial sets for all methods, as the size k of the true model varies; this width is a proxy for computational cost. (The split conformal inference method is not included as it only fits the lasso model once in any setting.)
problem becomes more difficult. In terms of computational cost, among the three trimmed methods, SplitTrim is always the most aggressive, giving the sharpest (smallest) Ytrim. RidgeTrim is more conservative for this data, but nonetheless improves over MaxTrim. The coverage is near the desired level of 90% for all methods in all settings.
4.2 Real Data Analysis
In this data analysis, we study the rental records of the Capital Bikeshare program in Washington DC.2 The data consists of bike rental records noting the date, time, and locations of the rental and return of each bicycle used in the program. We aggregate this data to record only the total number of rentals originating at each station on each day. We will choose one station to use as the response and the rest will be features; that is, we will predict the number of rentals originating at one stati-
on on a given day, as a function of the number of rentals at each of the other stations. As the business expands, more bike stations are added. Therefore, we only pick a period of time when no new stations appears: the 93 days from Nov. 7, 2010 through Feb. 7, 2011. There are 107 stations with activity during these days. Choosing one station j∗ ∈ {1, . . . , 107} as the response and one day i∗ ∈ {1, . . . , 93}, as the test point, we therefore have p = 106 many stations given by the remaining feat-
ures {1, . . . , 107}\{j∗}, and n = 92 training data points given by the remaining days {1, . . . , 93}\{i∗}.
2Capital Bikeshare data is publicly available at https://www.capitalbikeshare.com/trip-history-data.
9

We set α = 0.1, and repeat our experiment with each station as the response, i.e. j∗ = 1, 2, . . . , 107, and average our results over these 107 runs. For choosing i∗, we consider two settings:
• “Random day” setting. We pick a random day i∗ from the 93 data points. Results are averaged over 10 randomly selected days.
• “Last day” setting. We pick the most recent day as the test point, i.e. i∗ = 93. This is more practical for real time analysis and prediction, since in practice we would typically use past data (from the first 92 days) to predict upcoming events (the present day, i.e. the 93rd day). However, as behavior patterns may change over time, this setting violates the exchangeability assumption, and the coverage properties of the conformal inference methods may not hold.
Table 2 shows the average coverage rates for the four algorithms under the two different test methods.
PI Trial set Coverage width width (%)
Random day
MaxTrim 11.09 37.21 92.1 RidgeTrim 11.08 21.40 92.1 SplitTrim 10.96 18.03 92.1 Split 11.47 — 88.3
Last day
MaxTrim 11.36 37.19 86.0 RidgeTrim 11.38 22.34 86.0 SplitTrim 11.14 18.15 86.0 Split 11.43 — 85.0
Table 2: Results for the Capital Bikeshare data experiment, for the “random day” and the “last day” settings. Desired coverage level is 1 − α = 90%.
Despite slight numerical differences, in the “random day” setting, the average coverage rates are all close to the desired level 1 − α = 90%. For the “last day” setting, however, the coverage level is noticeably lower, presumably due to the violation of exchangeability in this setting. In this experiment, the prediction intervals are all quite similar in length (however, it is worth noting that the split conformal inference method achieves slightly lower coverage at roughly the same interval lengt-
h compared to the other methods), while the trimmed conformal prediction methods indeed show substantial reduction in computation time (as measured by the length of the trial set, Ytrim) relative to conformal prediction applied to the broad interval [−ymax, ymax].
5 DISCUSSION
In this paper, we present a fast two-stage algorithm for conformal prediction, called Trimmed Conformal Prediction (TCP). In the trimming step, the most unlikely y values are trimmed away quickly, and in the prediction step, the conformal prediction algorithm is applied over this reduced range of potential y values. Our empirical results on simulated and real data show that TCP achieves computational gains over conformal prediction without the trimming step, while offering sharper prediction inter-
vals (a statistical advantage) compared to split conformal prediction. This is highly desirable in the high-dimensional data analysis, where we are faced with both statistical and computational challenges.
References
[1] Mohamed Hebiri. Sparse conformal predictors. Statistics and Computing, 20(2):253–266, 2010.
10

[2] Jing Lei, Max G’Sell, Alessandro Rinaldo, Ryan J Tibshirani, and Larry Wasserman. Distributionfree predictive inference for regression. arXiv preprint arXiv:1604.04173, 2016.
[3] Robert Tibshirani. Regression shrinkage and selection via the lasso. Journal of the Royal Statistical Society. Series B (Methodological), pages 267–288, 1996.
[4] Vladimir Vovk, Ilia Nouretdinov, and Alex Gammerman. On-line predictive linear regression. The Annals of Statistics, 37(3):1566–1590, 2009.
[5] Volodya Vovk, Alex Gammerman, and Craig Saunders. Machine-learning applications of algorithmic randomness. Proceedings of the 16th International Conference on Machine Learning, pages 444–453, 1999.
[6] Volodya Vovk, Alex Gammerman, and Glenn Shafer. Algorithmic learning in a random world. Springer, New York, 2005.
[7] Martin J Wainwright. Sharp thresholds for high-dimensional and noisy sparsity recovery usingconstrained quadratic programming (lasso). IEEE transactions on information theory, 55(5): 2183–2202, 2009.
[8] Peng Zhao and Bin Yu. On model selection consistency of lasso. Journal of Machine Learning Research, 7:2541–2563, 2006.
11

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:01.674Z
- **Text Length:** 29317 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
