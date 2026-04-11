# PDF Document: Liu - 2025 - A Robust State Filter Against Unmodeled Process And Measurement Noise.pdf

**File Path:** Liu - 2025 - A Robust State Filter Against Unmodeled Process And Measurement Noise.pdf

**Processed Date:** 2026-02-10T18:16:24.379Z

**File Size:** 228.74 KB

**Total Pages:** 4

**Extracted Pages:** 4

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3389

**Title:** A Robust State Filter Against Unmodeled Process And Measurement Noise

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

A Robust State Filter Against Unmodeled Process And Measurement Noise
Weitao LIU
Abstract
This paper introduces a novel Kalman filter framework designed to achieve robust state estimation under both process and measurement noise. Inspired by the Weighted Observation Likelihood Filter (WoLF), which provides robustness against measurement outliers, we applied generalized Bayesian approach to build a framework considering both process and measurement noise outliers.
Introduction
The Kalman Filter (KF) is a cornerstone of estimation theory and stochastic filtering. For linear dynamical systems with Gaussian process and measurement noise, the KF provides the optimal minimum-mean-square-error (MMSE) state estimate via a recursive predict–update cycle. (Kalman 1960) However, KF has several assumptions that may lead to performance degradation when violated:
Linear assumption of state transition model and measurement model A very common approach is to use Extended Kalman Filter (EKF), which uses first-order approximation to avoid nonlinearity. Another common class of practice is to use sigma-point methods to perform deterministic sampling, with Unscented Kalman Filter (UKF) and Cubature Kalman Filter (CKF) as two widely used novel variants. (Van Der Merwe and Wan 2004)
Assumption of Gaussian measurement noise KF and EKF assume Gaussian noise and are derived from a leastsquares (MMSE) criterion, so it can be sensitive to measurement outliers. (Wang et al. 2018; Duran-Martin et al. 2024) There’s a large quantity of literature aiming at addressing this measurement model misspecification problem. One common approach is to use different measurement noise model. This includes variants using Student’s t, Laplace, or other mixture models. (Wang et al. 2017; Huang et al.-
 2016a; Gong et al. 2023; Yu, Gu, and Su 2024; Huang et al. 2019, 2016b). Another common approach is to use M-estimation. This includes variants using Huber’s loss to blend l1 and l2 norms. (Karlgaard and Schaub 2007; Boncelet and Dickinson 1983; Gandhi and Mili 2010). Alternatively, Kalman Smoothing methods are also proposed
Copyright © 2026, Association for the Advancement of Artificial Intelligence (www.aaai.org). All rights reserved.
to use a post-processing to refine past estimations, therefore reducing impact of non-Gaussian measurements. The variants include simple ones like fixed-lag and fixed-point smoother (Lu, Wang, and Li 2012), Rauch–Tung–Striebel (RTS) smoothers (Gandhi and Mili 2010) and other Robust smoothers (Aravkin, Burke, and Pillonetto 2013)
Correct pre-determined covariance matrices In KF setting, the process noise matrix Q and measurement noise matrix R is pre-determined, which often deviates from true ones in common practice. When the covariance of noises are not correct or the noises are time-varying signals, the performance of standard KF or EKF may be poor or even diverge. Multiple methods have been proposed to estimate covariance (e.g. Akhlaghi, Zhou, and Huang 2017; Long et al. 2019; Zhang et al. 2017; Yin et al. 2023; Chen et-
 al. 2015), and handling time-varying noise (e.g. Jia et al. 2020). . There are also other simulation-based methods like Sequential Monte-Carlo (SMC) methods, also known as Particle Filters (PF), which also falls into the general category of Bayesian Filtering. SMC methods are much more flexible but requires more computational power. (Doucet, Freitas, and Gordon 2001) As an extension of PF and KF, Ensemble Kalman Filter (EnKF), which represents the state distribution using an ensemble of simulatio-
ns, is proposed as a novel framework being adaptive like Monte-Carlo methods, but reduces computational complexity compared to SMC methods as it keeps similar assumptions as KF. (Evensen 2003) While many Kalman filter variants address one of these problems, achieving robustness to both innovations and outliers is challenging due to trade-offs between responding speed and robustness against outliers. Inspired by the WoLF approach by Duran-Martin et al. (2024), we propose a Kalman Filter Framework t-
hat adaptively weights process noise and measurement noise, effectively addressing both innovative and additive outliers. Our work offers several advantages: 1. Easy Implementation and Efficiency: The method has a structure similar to the standard Kalman Filter, ensuring straightforward implementation and low computational cost. 2. Robustness to Misspecification: It adapts effectively to inaccuracies in specifying process and measurement noise. 3. Extensibility: The approach can be readily extende-
d to other Kalman Filter variants.
arXiv:2511.19157v1 [stat.ML] 24 Nov 2025

Problem formulation
In this section, we formulate the state-space model setting in KF setting. In state-space filtering problems, we are interested in a state vector x ∈ Rm while only observing a corresponding observation vector y ∈ Rd. Given an initial state x0, the state-space model is defined as:
xt = ft(xt−1, ut) (1) yt = ht(xt, vt) (2)
Here, xt, yt are the state vector and the measurement vector for each time. ft is the function that transforms xt−1 to xt, with the effect from a process noise vector ut ∼ N (0, Qt). ht is the function that maps the state vector xt to the corresponding measurement vector yt, with the effect from a measurement noise vector vt ∼ N (0, Rt). This also yields the standard Bayesian prediction:
p(xt|y1···t−1) (3)
=
ZZ
p(xt|xt−1, ut)p(xt−1|y1···t−1)p(ut) dutdxx−1 (4)
and update:
p (xt|y1:t) = p (yt|xt) p (xt|y1:t−1)
p (yt|y1:t−1) (5)
where
p (yt|y1:t−1) =
ZZ
p (yt|xt, vt) p (xt|y1:t−1) dvtdxt (6)
Kalman filter
Kalman filter assumes additive zero-mean Gaussion Noise and linear ft, ht. Then the model is defined as:
xt = Ftxt−1 + ut (7)
yt = Htxt−1 + vt (8)
Here xt, yt represents the random variables, and ut ∼ N (0, Qt), vt ∼ N (0, Rt). Then derived from the standard Bayesian formula, the prediction step is defined as:
xt|t−1 = Ftxt−1|t−1 (9)
Σt|t−1 = FtΣt−1|t−1F T
t + Qt (10)
and the update step
Σ−1
t = Σ−1
t|t−1 + H ⊤
t R−1
t Ht (11)
Kt = ΣtH⊤
t R−1
t (12)
xt|t = xt|t−1 + Kt (yt − Htxt) (13)
This is also known as the information form of Kalman Filter. When addressing nonlinearity, EKF uses first-order approximation of Ft, Ht, sigma-points variants like UKF or CKF propogate sigma points to get estimatation.
Weighted observation likelihood filter
Duran-Martin et al. (2024) proposed a robust KF framework called Weighted observation likelihood filter (WoLF) inspired by Generalized Bayes. In the update step:
p (xt|y1:t) ∝ p (yt|xt) p (xt|y1:t−1) (14)
the posterior is changed to a generalized posterior:
q (xt|y1:t) ∝ exp (−lt(yt)) q (xt|y1:t−1) (15)
with
lt(yt) = −W 2(yt, yˆt) log q(yt|xt) (16)
with W : R2 → R a weighting function that controls the impact of new measurement. When using linear approximation and accepting Gaussian assumptions, the modified update step can be formulated as follow:
yˆt = ht(xt|t−1) (17)
ωt = W (yt, yˆt) (18)
Σ−1
t = Σ−1
t|t−1 + ω2
t H⊤
t R−1
t Ht (19)
Kt = ω2
t ΣtH⊤
t R−1
t (20)
xt|t = xt|t−1 + Kt (yt − yˆt) (21)
By setting outlying measurements lower weight, the filter gains robustment against measurement outliers by reducing information gain. However, when unmodeled state change occurs, it also limits the filter from converging fast to the new state.
Robust Loss-based Filter
To address this issue, we propose a mathematically guaranteed framework that considers both process and measurement noise. Relevent proof can be found in Appendix, here we provide the intuitive formulation. Recall the standard Bayesian prediction:
p (xt|y1:t) ∝ p (yt|xt) p (xt|y1:t−1) (22)
here we set both part related to Q, R to generalized posterior:
q (xt|yt) ∝ exp (−lt(yt)) exp (−γt(xt, Q)) (23)
When using linear approximation and accepting Gaussian assumptions, we can express the prediction step as below:
xt|t−1 = Ftxt−1|t−1 (24)
Σt|t−1 = ΛtFtΣt−1|t−1F T
t ΛT
t + ΩtQtΩT
t (25)
and same update step as in WoLF:
yˆt = ht(xt|t−1) (26)
ωt = W (yt, yˆt) (27)
Σ−1
t = Σ−1
t|t−1 + ω2
t H⊤
t R−1
t Ht (28)
Kt = ω2
t ΣtH⊤
t R−1
t (29)
xt|t = xt|t−1 + Kt (yt − yˆt) (30)
Our Robust Loss-based Filter (RoLF) enhances the Kalman Filter by adding two user-defined matrices, Λt and Ωt, to improve robustness. Λt scales the propagated covariance Σt−1|t−1 through the transition matrix Ft, while Ωt adjusts the process noise Qt. Both are derived from user-specified loss functions, allowing RoLF to handle process outliers and adapt to noise misspecifications effectively. Much previous work aimed at achieving robustness to process noise in Kalman filtering can be viewed as spe-
cial cases within our RoLF framework.

Experiment
In this section, we provide a simple scenario of estimating the position of a object moving on 2D plane with GARCH process noise in velocity.
Loss function selection
In this section, we employ the Mahalanobis-based weighting function for the measurement loss:
W (yt, yˆt) = 1 + ∥R−1/2
t (yt − yˆt)∥22 c2
!−1/2
(31)
Previous works have used Mahalanobis-distance–based weights and p-Huber / Mahalanobis three-stage weight functions for robust filtering, showing improved empirical performance compared with other kernels(Gao et al. 2019; Hu 2022; Javanfar 2023). For process-noise robustness we adapt ideas from the Strong Tracking Filter (STF) literature(Liu et al. 2020; Zhou and Frank 1996):
Vt = ρHtΣt−1|t−1HT
t + Rt + (1 − ρ)ytyT
t (32)
θ = max(1, tr(Vt − Rt − HtQt−1HtT )
tr(HtFt−1Σt−1|t−1FtT−1HtT ) ) (33)
Σt|t−1 = θΛtFtΣt−1|t−1F T
t ΛT
t + ΩtQt (34)
where ρ is a user-specified smoothing parameter, and yt is the difference between predicted and real measurement.
Problem Setting
The dataset represents a 2D Generalized Autoregressive Conditional Heteroskedasticity (GARCH) process with mixture measurements, simulating a dynamic system with unknown large perturbance in process. The state vector includes position and velocity components (x, vx, y, vy), and perturbed by Gaussian noise with fixed variances for position and GARCH-driven variances for velocity. The measurement noise consists primarily of Gaussian noise, with a small probability of large-scale outliers.
To highlight the performace in handling extreme outliers caused by outliers, we also evaluating the 5% largest losses highlights the filter’s robustness, which is critical for assessing performance in worst-case scenarios.
Conclusion
In this paper, we introduced the Robust Loss-based Filter (RoLF), a novel Kalman filter framework that extends the Weighted Observation Likelihood Filter (WoLF) by incorporating generalized Bayesian principles to address both process and measurement noise outliers. Through our experiments on a 2D GARCH process with mixture measurements, RoLF demonstrated superior robustness, effectively mitigating the impact of outliers in both process and measurement noise while achieving lower worst-case losses -
compared to standard Kalman filters and WoLF. Evaluating the 5% largest losses is particularly insightful as it emphasizes the filter’s performance in extreme scenarios, where robustness against severe outliers is most critical. Our approach not only maintains computational efficiency and ease of implementation but also offers extensibility to other Kalman filter variants.
References
Akhlaghi, S.; Zhou, N.; and Huang, Z. 2017. Adaptive adjustment of noise covariance in Kalman filter for dynamic state estimation. In 2017 IEEE Power & Energy Society General Meeting, 1–5.
Aravkin, A. Y.; Burke, J. V.; and Pillonetto, G. 2013. Sparse/Robust Estimation and Kalman Smoothing with Nonsmooth Log-Concave Densities: Modeling, Computation, and Theory. arXiv:1301.4566.
Boncelet, C. G.; and Dickinson, B. W. 1983. An approach to robust Kalman filtering. In The 22nd IEEE Conference on Decision and Control, 304–305.
Chen, B.; Liu, X.; Zhao, H.; and Pr ́ıncipe, J. C. 2015. Maximum Correntropy Kalman Filter. arXiv:1509.04580.
Doucet, A.; Freitas, N.; and Gordon, N. 2001. An Introduction to Sequential Monte Carlo Methods. Sequential Monte Carlo Methods in Practice. Springer, Berlin.
Duran-Martin, G.; Altamirano, M.; Shestopaloff, A. Y.; Sa ́nchez-Betancourt, L.; Knoblauch, J.; Jones, M.; Briol, F.X.; and Murphy, K. 2024. Outlier-robust Kalman Filtering through Generalised Bayes. arXiv:2405.05646.
Evensen, G. 2003. The ensemble Kalman Filter: Theoretical formulation and practical implementation. Ocean Dynamics, 53(4): 343–367.

Gandhi, M. A.; and Mili, L. 2010. Robust Kalman Filter Based on a Generalized Maximum-Likelihood-Type Estimator. IEEE Transactions on Signal Processing, 58(5): 2509–2520.
Gao, B.; et al. 2019. A Robust Cubature Kalman Filter with Abnormal Observation Identification and Adaptive Scaling. Sensors, 19(23): 5149.
Gong, B.; He, J.; Wang, G.; and Peng, B. 2023. A Covariance Adaptive Student’s t Based Kalman Filter. arXiv:2309.09565.
Hu, H. 2022. Robust Estimation in Continuous–Discrete Cubature Kalman Filter. Applied Sciences, 12(16): 8167.
Huang, Y.; Zhang, Y.; Li, N.; and Chambers, J. 2016a. Robust student’s t based nonlinear filter and smoother. IEEE Transactions on Aerospace and Electronic Systems, 52(5): 2586–2596.
Huang, Y.; Zhang, Y.; Li, N.; Mohsen.Naqvi, S.; and Chambers, J. 2016b. A robust Student’s t based cubature filter. In 2016 19th International Conference on Information Fusion (FUSION), 9–16.
Huang, Y.; Zhang, Y.; Shi, P.; Wu, Z.; Qian, J.; and Chambers, J. A. 2019. Robust Kalman Filters Based on Gaussian Scale Mixture Distributions With Application to Target Tracking. IEEE Transactions on Systems, Man, and Cybernetics: Systems, 49(10): 2082–2096.
Javanfar, E. 2023. Measurement-outlier robust Kalman filter for discrete-time systems. ISA Transactions.
Jia, G.; Huang, Y.; Bai, M. B.; and zhang, Y. 2020. A Novel Robust Kalman Filter With Non-stationary Heavytailed Measurement Noise**This work was supported in part by the National Natural Science Foundation of China under Grants 61903097 and 61773133, in part by the Fundamental Research Funds for the Central Universities under Grants 3072019CFJ0411 and GK204026025901. Corresponding author is Y. L. Huang. IFAC-PapersOnLine, 53(2): 368–373. 21st IFAC World Congress.
Kalman, R. E. 1960. A New Approach to Linear Filtering and Prediction Problems. Transactions of the ASMEJournal of Basic Engineering, 82(Series D): 35–45.
Karlgaard, C. D.; and Schaub, H. 2007. Huber-Based Divided Difference Filtering. Journal of Guidance, Control, and Dynamics, 30(3): 885–891.
Liu, J.; Wang, P.; Zha, F.; et al. 2020. A Strong Tracking Mixed-Degree Cubature Kalman Filter Method and Its Application in a Quadruped Robot. Sensors, 20: 2251.
Long, Z.; Zhang, X.; Peng, X.; and Yang, G. 2019. An Improved Adaptive Extended Kalman Filter Used for Target Tracking. In 2019 Chinese Automation Congress (CAC), 1017–1022.
Lu, X.; Wang, H.; and Li, M. 2012. Kalman fixed-interval and fixed-lag smoothing forwireless sensor systems with multiplicative noises. In 2012 24th Chinese Control and Decision Conference (CCDC), 3023–3026.
Van Der Merwe, R.; and Wan, E. A. 2004. Sigma-point kalman filters for probabilistic inference in dynamic statespace models. Ph.D. thesis. AAI3129163.
Wang, H.; Li, H.; Fang, J.; and Wang, H. 2018. Robust Gaussian Kalman Filter With Outlier Detection. IEEE Signal Processing Letters, 25(8): 1236–1240.
Wang, H.; Li, H.; Zhang, W.; and Wang, H. 2017. Laplace l1 robust Kalman filter based on majorization minimization. In 2017 20th International Conference on Information Fusion (Fusion), 1–5.
Yin, Z.; Yang, J.; Ma, Y.; Wang, S.; Chai, D.; and Cui, H. 2023. A Robust Adaptive Extended Kalman Filter Based on an Improved Measurement Noise Covariance Matrix for the Monitoring and Isolation of Abnormal Disturbances in GNSS/INS Vehicle Navigation. Remote Sensing, 15(17).
Yu, B.; Gu, H.; and Su, W. 2024. A Robust Interacting Multi-Model Multi-Bernoulli Mixture Filter for Maneuvering Multitarget Tracking under Glint Noise. Sensors, 24(9).
Zhang, Y.; Wang, J.; Sun, Q.; and Gao, W. 2017. Adaptive Cubature Kalman filter based on the variance-covariance components estimation. The Journal of Global Positioning Systems, 15(1).
Zhou, D. H.; and Frank, P. M. 1996. Strong tracking Kalman filtering of nonlinear time-varying stochastic systems with coloured noise: application to parameter estimation and empirical robustness analysis. International Journal of Control, 65: 295–307.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:24.379Z
- **Text Length:** 16363 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 4 of 4
