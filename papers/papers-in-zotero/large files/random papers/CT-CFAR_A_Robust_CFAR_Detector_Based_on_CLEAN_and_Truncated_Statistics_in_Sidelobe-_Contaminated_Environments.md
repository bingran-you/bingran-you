# PDF Document: Zhu et al. - CT-CFAR A Robust CFAR Detector Based on CLEAN and Truncated Statistics in Sidelobe- Contaminated En.pdf

**File Path:** Zhu et al. - CT-CFAR A Robust CFAR Detector Based on CLEAN and Truncated Statistics in Sidelobe- Contaminated En.pdf

**Processed Date:** 2026-02-10T18:16:46.980Z

**File Size:** 5140.16 KB

**Total Pages:** 15

**Extracted Pages:** 15

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3265

**Title:** CT-CFAR: A Robust CFAR Detector Based on CLEAN and Truncated Statistics in Sidelobe- Contaminated Environments

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

1 > REPLACE THIS LINE WITH YOUR MANUSCRIPT ID NUMBER (DOUBLE-CLICK HERE TO EDIT) <
CT-CFAR: A Robust CFAR Detector Based on CLEAN and Truncated Statistics in SidelobeContaminated Environments
Jiachen Zhu, Fangjiong Chen, Member, IEEE, Jie Wu, and Ming Xia

Abstract—This paper proposes a constant false alarm rate (CFAR) target detection algorithm based on the CLEAN concept and truncated statistics to mitigate the non-homogeneity of reference samples caused by sidelobe contamination and other abnormal interferences within the reference window. The proposed algorithm employs truncated statistics to separate target and noise components in the radar echo power spectrum, thereby restoring the homogeneity assumption of the reference window. In addition, le-
arnable historical sidelobe information is introduced to enhance the robustness and environmental adaptability of the detection process. Furthermore, based on multichannel echo data, a target reconstruction model that combines the Candan algorithm with least-squares estimation is established, incorporating the CLEAN concept to suppress sidelobe interference. Monte Carlo simulations and real-world measurement experiments demonstrate that the proposed CTCFAR algorithm achieves high-precision target -
detection without requiring prior knowledge of abnormal samples. Compared with various CFAR algorithms, the proposed approach overcomes the limitations of the reference window, accurately estimates the noise spectrum, and exhibits superior detection performance and computational efficiency in complex scenarios affected by sidelobe contamination.
Index Terms—CLEAN, truncated statistics, constant false alarm rate (CFAR), target detection, sidelobe contamination.
I. INTRODUCTION
ith the continuous advancement of radar technology [1], radar systems are gradually evolving from their traditional attributes of being bulky and costly toward miniaturization, affordability, and widespread accessibility [2]. This evolution has significantly promoted the pervasive deployment of radar technology in
Manuscript received November 1, 2025; accepted xxx xx, 2025. Date of publication xxx xx, 2025; date of current version xxx xx, 2025. This work was supported in part by the xxx (Corresponding author: Fangjiong Chen.)
Jiachen Zhu, and Fangjiong Chen are with the School of Electronic and Information Engineering, South China University of Technology, Guangzhou 510641, China. and also with the Guangdong Provincial Key Laboratory of Short-Range Wireless Detection and Communication, South China University of Technology, Guangzhou 510641, China. (e-mail: eezhujc@mail.scut.edu.cn; eefjchen@scut.edu.cn). Jie Wu is with the Southern Marine Science and Engineering Guangdong Laboratory (Guangzhou), Guangzhou, 511458, Chin-
a. (e-mail: wu_jie@gmlab.ac.cn). Ming Xia is with the School of Electronics and Information Engineering, Beihang University, Beijing 100083, China. (e-mail: xiaming@buaa.edu.cn). Digital Object Identifier
everyday life [3]. Among various radar architectures, frequency-modulated continuous-wave (FMCW) radar has garnered significant attention for its high range resolution, robust penetration capability, and notable resistance to environmental interference [4-6]. Consequently, it has been extensively deployed in a diverse range of applications, such as vital sign monitoring [7, 8], human activity recognition [9, 10], autonomous driving [11, 12], security surveillance [13, 14], and post-disaster search-
 and rescue [15]. As radar applications continue to expand into increasingly complex and dynamic environments, achieving reliable and high-precision target detection in multi-target and sidelobe-contaminated environments has become a critical challenge that directly impacts overall system performance [16]. Currently, the most widely adopted target detection algorithm for FMCW radar is the constant false alarm rate (CFAR) detector based on a sliding reference window [17]. This algorithm adaptively -
estimates the detection threshold from the observations within the reference window to distinguish targets from background noise. The primary distinction among various CFAR schemes lies in their methodology for estimating the local noise power. In homogeneous environments, the cell-averaging (CA)-CFAR is considered optimal algorithm for exponentially distributed clutter [18]. However, due to the presence of outliers such as sidelobe contamination caused by target spectral leakage, the reference ce-
lls often fail to satisfy the homogeneity assumption, resulting in severe degradation of CA-CFAR performance. The CA greatest-of (CAGO)-CFAR [19] and the CA smallest-of (CASO)-CFAR [20], as two variants of the CA-CFAR, provide a more comprehensive consideration of extreme clutter conditions within the reference window. However, the performance of CAGO-CFAR degrades significantly under target masking effects, while CASO-CFAR tends to generate higher false alarm rates near clutter edges. The variabi-
lity index (VI)-CFAR algorithm [21] leverages the advantages of mean-based CFAR algorithms. By analyzing the statistical dispersion of reference samples to compute the VI, it adaptively selects a suitable detection thresholding strategy. However, when the targets are located in heterogeneous environments or the background noise exhibits
W

2 > REPLACE THIS LINE WITH YOUR MANUSCRIPT ID NUMBER (DOUBLE-CLICK HERE TO EDIT) <
complex statistical characteristics, the spatial subsetting mechanism of VI-CFAR may fail to guarantee reliable detection performance. To mitigate the adverse effects of interfering targets and clutter edges on threshold estimation, an effective approach is to sort and examine the reference samples [22]. Specifically, the ordered statistics (OS)-CFAR [23] arranges the reference cells in descending order and selects the k-th ranked sample as the background noise estimate for accurate threshold comp-
utation. However, this algorithm typically requires prior knowledge of the number of interfering targets or clutter edges to determine the optimal k parameter setting. The trimmed mean (TM)-CFAR [24], a generalized extension of OS-CFAR, discards a certain number of the highest and lowest ranked samples and averages the remaining ones to estimate the background noise level. Studies have shown that the detection performance of TM-CFAR is susceptible to the trimming ratio, and its optimal parameters -
similarly depend on prior knowledge of the operating environment [25]. Furthermore, with the continuously improving resolution of millimeterwave radar systems, the traditional sliding-window-based noise estimation strategies employed by conventional CFAR algorithms may no longer be effective [17]. For multi-target scenarios, the truncated statistics (TS)CFAR [26] employs maximum likelihood estimation (MLE) to determine a truncated threshold, thereby achieving the separation of targets from anomalo-
us interferences. However, when the number of observations is limited or the data distribution exhibits strong right-skewness, the MLE may become unstable or unsolvable. This limitation hinders the reliable determination of a threshold that satisfies the constraint conditions [27, 28]. Furthermore, in multi-target environments, abnormal interferences such as target sidelobes can contaminate the reference window samples, leading to biased noise estimation and degraded detection performance. To miti-
gate the influence of such outliers on threshold estimation, the CLEAN concept [29], which iteratively removes detected targets and their corresponding sidelobe artifacts, has been introduced into radar target detection. The sparsity adaptive correlation maximization (SACM)CFAR [30] achieves target detection by analyzing the correlation between the radar intermediate-frequency (IF) signal and the sensing matrix, and iteratively removes detected targets based on the CLEAN concept to effectively sup-
press sidelobe interference. Alternatively, the Sidelobe Suppression (SS)-CFAR separates target and noise components through second-order differential statistics and incorporates the CLEAN concept to mitigate target sidelobes. While these CLEAN-based target detection algorithms have demonstrated remarkable effectiveness in improving detection accuracy and suppressing sidelobe interference, certain limitations persist. Specifically, the SACM-CFAR relies on a compressive
sensing-based detection framework, which makes maintaining a stable false alarm rate challenging under varying Signal-toNoise Ratio (SNR) or sparsity conditions [31]. Meanwhile, the SS-CFAR employs a noise estimation strategy based on second-order differential statistics, which may introduce estimation bias, consequently degrading detection performance and increasing the false alarm probability. Therefore, the development of accurate background noise estimation methods and the design of a robust i-
nterference suppression mechanism are paramount to ensuring stable detection performance in complex environments. The rapid evolution of deep learning (DL) has stimulated considerable interest in algorithms that exploit the multi-level feature abstraction capability of neural networks to extract radar echo characteristics [32]. The DL-CFAR [33], as the first CFAR detector based on neural networks, demonstrates superior performance over traditional approaches in mitigating masking effects and suppr-
essing sidelobes. However, its training and validation datasets originate predominantly from anechoic chambers, which fail to account for the random noise and complex interference characteristic of real-world environments. Further advancing this field, the range-Doppler (RD) heatmap-based target detection approach [34] incorporates the spatial offset between the target and the local window center, and designs a detection head with both classification and regression functionalities to achieve targe-
t recognition and precise localization. Although such neural network-based detection algorithms provide new research directions for radar target detection, they still face challenges such as the difficulty of acquiring sufficient training data, high annotation costs, and limited model generalization. Therefore, further studies and improvements are required. Based on the preceding analysis, this paper proposes a novel CFAR detection algorithm, the CLEAN and truncatedstatistics CFAR (CT-CFAR), desig-
ned for sidelobe interference environments. The proposed algorithm employs TS to effectively separate target and noise components within the radar echo power spectrum, thereby restoring the homogeneity assumption of the reference window. Concurrently, we introduce learnable historical sidelobe information to enhance the robustness and environmental adaptability of the detection process. Furthermore, we develop a target reconstruction model by combining the Candan algorithm [35] with least-squares -
(LS) estimation [36] using multi-channel echo data, and incorporate the CLEAN concept [29], achieving effective suppression of target-induced sidelobe interference. The main contributions of this paper are summarized as follows: 1) TS-based noise modeling and estimation. We establish and analyze a mathematical model that considers the signal composition and statistical characteristics of the radar echo power spectrum after non-coherent

3 > REPLACE THIS LINE WITH YOUR MANUSCRIPT ID NUMBER (DOUBLE-CLICK HERE TO EDIT) <
accumulation (NCA). Based on the conditional expectation of background noise, we derive the relationship between TS and noise distribution, and design an iterative strategy to accurately estimate the echo noise, thereby restoring the homogeneity of the reference samples. 2) Development of an adaptive threshold estimation mechanism. We designed an adaptive threshold mechanism that incorporates a learnable historical sidelobe information matrix. The mechanism allows the detection threshold to dynami-
cally adjust to the surrounding environment, thereby significantly enhancing the algorithm’s robustness and environmental adaptability. 3) Construction of a CLEAN-based sidelobe suppression strategy. We construct a sidelobe suppression strategy based on the CLEAN concept. Specifically, we formulate a multi-channel target reconstruction model by integrating the Candan [35] algorithm with LS estimation using multi-channel echo data. Then employ the CLEAN concept to iteratively remove target componen-
ts, which mitigates target-induced sidelobe interference and enhances detection accuracy. The remainder of this article is organized as follows. Section II presents the problem formulation and its corresponding mathematical model. Section III details the proposed CT-CFAR algorithm. In Section IV, Monte Carlo simulations first validate the accuracy of CT-CFAR in background noise estimation, followed by evaluations of target detection performance and sidelobe suppression capability. Subsequently, ex-
periments using real-world measurement data demonstrate the algorithm’s effectiveness under practical conditions. Finally, Section V concludes the paper and discusses directions for future research.
II. PROBLEM FORMULATION
A. Target Signal Model
An FMCW radar estimates the range and velocity of targets by transmitting a chirp signal whose instantaneous frequency increases linearly over time. The radar system generally comprises an antenna array, a frequency mixer, an analog-todigital converter (ADC), and a digital signal processor [37]. Given the potential for nonlinearities in the transmitter, the transmitted waveform of the FMCW radar is defined as
  
2n
j2 2
T Te , 0,
fct K t
c
St A t T



 




  (1)
where AT denotes the amplitude of the transmitted signal, fc denotes the initial carrier frequency of the chirp signal,
c
K  B T denotes the sweep frequency slop, B denotes the sweep bandwidth of the signal, Tc denotes the period of the chirp signal, andn denotes the phase noise. When the electromagnetic wave propagates at the speed of
light c , the received signal can be regarded as a time-delayed replica of the transmitted signal reflected from the target. At time t, for a target located at a distance R0 from the radar and moving with a radial velocity v , the two-way propagation delay t  can be defined as
  
0
2.
R vt
tc

 (2)
Therefore, the received signal  
SR t of an FMCW radar can be expressed as
  
  
    
2 n
j2 2
R R e , 0,
cK
ft t t t
c
S t A nt t T
 


   




   (3)
where R T
A  kA denotes the amplitude of the received signal, k denotes the channel loss, and  
n t denotes the complex Gaussian additive noise. By mixing the transmitted signal  
ST t and the received signal  
SR t , and subsequently passing the result through a low-pass filter, the IF signal  
SIF t can be obtained, which can be expressed as
   b d 0
j2 j
IF IFe ,
f ft
S t A   
 (4)
where b 0
f  2KR c denotes the beat frequency, d 2 c
f  vf c denotes the Doppler frequency, 0 denotes the phase constant. To further discretize the IF echo model and extend it to the multi-target case, we assume that the radar receiver consists of a uniform linear array with L antenna elements. The received signal is the superposition of echoes from K targets. Each radar frame comprises M chirps, and each chirp contains N sampled points. The elements of the RD matrix N M
l

S  corresponding to the l-th antenna can be expressed as


    
b, d, d , PRI 0 ,
j2 j , 1
,
e ,,
k ks k k
l
K f f nT f mT mk l k l k
nm
A a nm
 
 



S
w (5)
where m,k
A , fb,k , and fd,k denote the complex envelope, beat frequency, and Doppler frequency, respectively, of the k-th target IF signal.  
lk
a  denotes the l-th antenna of the steering vector of the k-th target, which is expressed as
   1 sin
e j2 k ,
ld
lk
a





 (6)
where d denotes the isolation between antenna, k denotes the incident angle of the k-th target, and c
 c f denotes the wavelength. Additionally,  2 
[ , ] 0,
wl n m    denotes the complex Gaussian white noise with zero mean and variance 2 .
The multi-antenna received signal Sl is processed via twodimensional fast Fourier transform (2D-FFT) along the fasttime and slow-time dimensions, yielding the power spectrum matrix that contains target information, also known as RD information (RDI). Subsequently, NCA is performed on the RDI along the antenna dimension to construct the CFAR detection matrix used for target detection. The overall signal processing flow for the millimeter-wave radar is shown in Fig. 1.

4 > REPLACE THIS LINE WITH YOUR MANUSCRIPT ID NUMBER (DOUBLE-CLICK HERE TO EDIT) <
B. Hypothesis Testing for Target Detection
The CFAR detector of the FMCW radar estimates the background noise of the targets through a sliding window and sequentially detects each cell under test (CUT) in the RDI based on the locally estimated threshold to distinguish the target signal from the noise. To mitigate the influence of adjacent targets on the CUT, guard cells are typically set around the CUT. The corresponding target detection discriminant can be expressed as

Ind I d
1
0
,n
CUT ,
rv
x T


(7)
where  
Ind , Ind CUT
rv
x

  denotes the CUT element located at the rInd -th row and vInd -th column of the CFAR detection matrix, 0 denotes the case where the CUT contains only noise, 1 denotes the case where the CUT contains both target and noise, 
1, 2, , N
T  g x x  x denotes the local detection threshold corresponding to CUT, and 1
{ }N
ii
x
 denotes the reference cells in the sliding window. The nonlinear function g maps 1
{ }N
ii
x

to a non-negative real number, which serves as the local noise estimate of the current CUT. The scaling factor  is used to control the algorithm’s desired false alarm probability PFA .
III. PROPOSED CT-CFAR DETECTOR
The CLEAN algorithm was originally proposed for radio interferometric imaging [29], where astronomers employed its iterative update mechanism to deconvolve the instrument’s point spread function and reconstruct the true sky brightness distribution. Inspired by this concept, we introduce the CLEAN concept into FMCW radar target detection to mitigate the influence of target-induced sidelobes. Meanwhile, considering that the target energy is primarily concentrated in the main lobe and typically much -
higher than the background noise, we incorporate TS concept [26] to separate target and noise components, thereby restoring the homogeneity of reference cells and enabling mean-based threshold estimation for optimal detection performance. Therefore, this section proposes a robust CFAR target detection algorithm, the CTCFAR, which achieves accurate detection in environments contaminated by sidelobes.
The flowchart of the CT-CFAR algorithm is shown in Fig. 2, which mainly consists of three components.
A. Background Noise Estimation Based on TS
By applying a 2D-FFT to the multi-channel FMCW radar echoes as defined in (5), the power spectrum of the l-th channel, denoted as N M
l

S    , is defined as
 
         
 
0,
1 1 -j2 -j2
00
1 sin
j2
j
1
, ,e e
ee ,
, ,,
k k
N M pn qm
NM
ll nm ld
K
kk nm l k
ll
pq nm
p q pq
pq pq














SS
SS W
XW
(8)
where the   1
kN n

S  ,   1
kM m

S   , target information
NM l

X   , and noise information N M
l

W   , are defined as
    
b, d,
1 j2
0
e,
k ksp
N nf f T
kN
n n
p
 
 




S (9)
    d, PRI
1 j2
, 0
e,
kq
M mf T
kM
m mk m
q A  





S (10)
         
0,
1 sin
j2
j
1
, ee ,
k k
ld
K
kk l nm k
pq p q







X S S (11)
 
1 1 -j2 -j2
00
, ,e e .
N M pn qm
NM
ll nm
pq nm  


 
W w (12)
Among them, Wl is assumed to follow a complex Gaussian distribution, defined as
   2
, 0, .
Wl p q   NM (13)
To improve the detection probability, NCA is commonly employed to enhance the target signal power. After NCA across the L channel, the CFAR detection matrix NCA
N M
P  is defined as
 
 
 

  
2 NCA
1
22
11
*
1
s n sn
,,
,,
2 ,,
, , ,,
L
l l
LL
ll ll L
ll l
pq pq
pq pq
pq pq
pq pq pq











PS
XW
XW
PP P
(14)
where   denotes the operation of taking the real part, the components s
NM
P  , n
N M
P   , and sn
N M
P 
Fig. 1. FMCW radar signal processing flow. In the figure, B is the sweep bandwidth, fc is the starting frequency, Tc is the chirp duration, t  is the echo time delay, and fIF is the intermediate frequency of the target echo.

5 > REPLACE THIS LINE WITH YOUR MANUSCRIPT ID NUMBER (DOUBLE-CLICK HERE TO EDIT) <
correspond to the target component, the noise component, and the signal-noise cross-term component, respectively. These elements are explicitly defined as
   2
s 1
, ,,
L
l l
pq pq


P X (15)
   2
n 1
, ,,
L
l l
pq pq


P W (16)
    

sn
1
, 2 , ,.
L
ll l
pq pq pq

P    X W (17)
For the component Pn , the complex noise term Wl is modeled as a circularly symmetric complex Gaussian random variable, i.e.,  2 
[ , ] 0,
Wl p q   NM . Based on this assumption, the power of each complex sample follows an exponential distribution. Therefore, when summing over L independent samples, Pn follows a Gamma distribution with shape parameter L and scale parameter 2
NM , specifically  
Pn p, q   L, , (18)
where 2
  NM .
In this case, the expectation z of Pn is readily obtained as
n,
zz
P L    L
    

 (19)
where P denotes the spatial average power of matrix P ,
defined as
   11
1 ,.
MN
qp
P pq
NM
 
   P (20)
Given that L is known, the distribution of the background noise Pn can thus be uniquely determined when z is fixed. To accurately estimate Pn and thus achieve effective separation of target and noise components, we derive and present the complete solution process for s , starting from the conditional expectation of Pn . The details are presented as follows. Since Wl follows a circularly symmetric complex Gaussian distribution with zero mean, the expected value of Psn is 0, which implies that
PNCA Ps Pn ,
 

 
 

   (21)
In radar echoes, the target power is typically concentrated in the main lobe and is significantly higher than the background noise. The cross-term represents a zero-mean random fluctuation that diminishes as the number of NCA channels increases. Under medium-to-high SNR conditions, its statistical contribution to the total power spectrum is negligible. therefore, PNCA can be regarded as a purely signal component containing only the target and its sidelobe information. Based on this, when vectoriz-
ing NCA
P and applying a truncation threshold t, the remaining samples 1
{ }N
ii
x
 
 mainly originate from noise. Consequently, the mean of these truncated samples can be approximated by the conditional expectation of the noise power Pn below the same threshold, which can be formalized as

1
1 |,
N
i i
x ZZ t
N



    (22)
where Z denotes the noise power random variable Pn . The PDF of Pn ,  
;,
fZ z   , can be expressed as
  
  
1 ,
1
1
;, e
1 e,
z
z
z
Z LL
Lz L L z
fz z
z
LL
 


  






(23)
where   L denotes the shape parameter of the Gamma distribution, and   z L denotes the scale parameter of the Gamma distribution. The cumulative distribution function (CDF) of Pn ,  
FZ z , can be expressed as
  

,0
,
;, ;, ,
z
zz
ZZ
LL
L Lz
F z f x dx L



 
   
 (24)
where   1
0
, ex
x dx

   
  denotes the incomplete Gamma
function. The conditional expectation of Pn under the threshold t ,
Fig. 2. Flowchart of the CT-CFAR algorithm.

6 > REPLACE THIS LINE WITH YOUR MANUSCRIPT ID NUMBER (DOUBLE-CLICK HERE TO EDIT) <

 Z | Z  t , can be expressed as
  

 
0 1,
|,
,
t Z z Z
xf x dx L u
Z Z t F T L Lu



 

 (25)
where z
u  Lt  .
Assuming that Pn is truncated by the threshold T , the acceptable false alarm rate PFA satisfies   FA
P X T P . Accordingly, the relationship between the CDF and PFA can be expressed as
 
 
FA
,,
1 q,
z Z
LT
L Lu
P FT L L





  
  (26)
where |
q tT z
u u LT 

 .
As shown in (26), once PFA is given, uq is uniquely determined. The threshold T can then be written as a function of z ,  z  q z
T   u  L . Correspondingly, the conditional expectation  
 Z | Z  t can be further expressed as 

|,
z zu
 Z Z  T    g (27)
where    

1, ,
u qq
g   L  u L L u , which is a constant when PFA is given. Based on the above relationship, once the acceptable false alarm probability PFA is given, and an initial estimate of z for the background noise distribution is obtained (e.g., by taking the median, mean, or truncated mean of the original sequence), the truncation threshold  z 
T  is uniquely determined by  z  q z
T   u  L . With the truncated samples
1
{ }N
ii
x
 
 thus obtained, the sample mean of these data satisfies


1
1| .
N
i z zu i
x ZZ T g
N 


 
    (28)
Therefore, the mean value z of the background noise Pn can be estimated as
1
1
ˆ.
N
zi i
u
x
gN



    (29)
The updated ˆz is then substituted into the threshold equation  z 
T  to obtain the updated truncation threshold Tˆ . The samples are then truncated with this new threshold to further estimate the mean of the original distribution. These steps are iteratively repeated until ˆz converges, and the convergence criterion is defined as
ˆ,
zz
z
tol
 


  (30)
where z denotes the mean value of the previous estimate,  denotes the infinitesimally small positive regularization parameter introduced to ensure numerical stability, and tol denotes the tolerable error. When the convergence criterion is satisfied, the estimated ˆ
z represents the mean of the Gamma distribution corresponding to the background noise Pn . Accordingly, the scale parameter  can be derived as   ˆz L , thus enabling accurate estimation of the background noise distribution in the power spectrum after the NCA of radar echoes. The estimated
background noise matrix is denoted as G
N M
N   , and the CFAR detection matrix is updated as
NCA NCA G ,
P   P  N (31) where NCA
N M
P    denotes the updated CFAR detection matrix. Since the fast-time and slow-time dimensions of FMCW radar are typically on the order of 102 or higher, the resulting RD matrix contains tens of thousands of observation samples. Consequently, by applying the iterative algorithm described above, the mean of the truncated samples can effectively converge to the conditional expectation of the original (untruncated) Gamma distribution, thereby ensuring the consistency and unbiasedness of the estimati-
on.
B. Target Detection Based on Adaptive Thresholding
In homogeneous environments, the CA-CFAR is considered the optimal detector model for exponentially distributed clutter [18]. In the previous subsection, we derived the relationship between the conditional expectation of the truncated statistic and the mean of the background noise, and achieved precise estimation of the echo background noise through iterative updates. The resulting estimated background noise matrix satisfies the assumptions of independence, identical distribution, and homogeneity,-
 thereby fulfilling the prerequisite for mean-based CFAR detectors to achieve optimal detection performance. On the other hand, to enhance the robustness of target detection, a learnable historical sidelobe accumulation matrix,
S
NM
N   , is introduced in the proposed CT-CFAR algorithm. This matrix serves as a dynamic, learned penalty factor to suppress false alarms induced by target sidelobe contamination. N S is initialized to zero and iteratively learned throughout the detection process. Specifically, whenever a cell is confirmed as a target in the current iteration, a predefined neighborhood (e.g., a rectangular region of semi-width r ) around the target cell is cumulatively updated within N S . This update serves to qu-
antify and record the predicted energy of the sidelobe interference emanating from that target. By incorporating N S into the threshold calculation, the deviation caused by missing sidelobe interference can be compensated for, thereby further improving the robustness and accuracy of the detection results. On this basis, if the index of the CUT in PNCA along the slow-time dimension is vInd , then its detection threshold can be defined as

Ind
Ind
C GS 1
UT [ , ] [ , ] ,
21
Nvr
i jv r
T ij ij
Nr


 

    N N (32)
where  denotes the multiplication factor that controls the PFA , and r denotes the reference window half-length of the target in the slow time dimension. In our experimental setup, r is set to 2, following established empirical practices [30, 38],

7 > REPLACE THIS LINE WITH YOUR MANUSCRIPT ID NUMBER (DOUBLE-CLICK HERE TO EDIT) <
to minimize the extent of the local region while ensuring adequate coverage of the target’s main lobe.
C. Target SS Based on CLEAN
Assuming the FMCW radar possesses L array channels and the CUT is the largest target value in PNCA , it can be expressed as
  
Ind , Ind CUT NCA
max .
rv
x
 P (33)
The presence of a target at NCA Ind Ind
[r ,v ]
P is determined by the condition  
Ind Ind CU
,
CUT T
rv
x  T , in which case the target information is recorded. To achieve effective target SS, the CFAR detection matrix PNCA can be subtracted by the non-coherently accumulated power spectrum of the current target, which effectively removes the target information contained in PNCA . However, since the detected frequencies are aligned with the discrete sampling grid, reconstructing the target echo according to the detected beat and Doppler frequencies using (4) will result in a peak-like characterist-
ic at the corresponding target position in the processed signal’s spectrum. To address this issue, the Candan frequency refinement algorithm [35] is employed to obtain high-precision estimates of the target’s beat and Doppler frequencies, thereby improving the accuracy of target echo reconstruction. A complex exponential signal  
y n is defined as     
2 , 0,1, , 1
j fn
y n Ae n N
 
    (34)
where f denotes the signal frequency, which can be represented in terms of the FFT frequency bin as 
p
f  n  N . Here, np denotes the integer frequency bin index, and  denotes the positive real number located within 
1 2, 1 2 [39]. The Candan algorithm calculates the true frequency of the target based on the complex values of three adjacent points:  1
p
y n  ,  p
y n , and  1
p
y n  . This is achieved by estimating the deviation  between the true position of the target peak and the index np . The deviation  is defined as        
11
C,
2 11
pp N
pp p
yn yn yn yn yn
 
 
 

  

 (35)
where  p 
y n represents the complex value of the frequencybin sample at np , and {1, 2, }
CN   is the window parameter. For the power spectrum matrix Sl of each channel, three complex samples indexed by Ind Ind
[r 1, v ] , Ind Ind
[r , v ] , and
Ind Ind
[r 1, v ] are successively extracted along the fast-time dimension. The fractional frequency bias of the detected target in each channel, R 1
{ }L
ll

 , is then calculated using (35). Similarly, three complex samples indexed by Ind Ind
[r , v 1] ,
Ind Ind
[r , v ] , and Ind Ind
[r , v 1] are successively extracted along the slow-time dimension from the power spectrum matrix Sl of each channel. The fractional frequency bias of the detected target in the Doppler frequency for each channel, V 1
{ }L
ll

 , is then calculated using (35).
By averaging the frequency biases R 1
{ }L
ll

 and V 1
{ }L
ll


separately, the high-precision range index rˆInd and velocity index vˆInd corresponding to  
Ind , Ind CUT
rv
x can be expressed as
Ind Ind R 1
1
ˆ,
L
l l
r r L

   (36)
Ind Ind V 1
1
ˆ,
L
l l
v v L

   (37)
where rˆInd and vˆInd denote the high-precision beat frequency and Doppler frequency indices corresponding to  
Ind , Ind CUT
rv
x, respectively. Based on the range and velocity resolution of the FMCW radar, the target’s distance and velocity can then be accurately estimated. After accurately estimating the target’s distance and velocity, substituting these into the Xl term of (8) yields the power spectrum , N M
l

G   , corresponding to the singlechannel echo after 2D-FFT. However, the amplitude of this power spectrum is still unknown, necessitating further estimation of its complex envelope to achieve precise characterization of the target signal. To effectively address the issue of potential gain and phase inconsistencies among different antennas, we utilize multi-antenna data within the target region of the RD matrix to construct a LS-based multiantenna fitting method, thereby enabling robust reconstru-
ction of the target’s non-coherently accumulated power spectrum distribution. The specific algorithmic process is as follows. Considering that the target signal is typically concentrated in the main lobe and adjacent sidelobes, we truncate a neighborhood centered at Ind Ind
[, ]
Gl r v to serve as the template matrix, which is expressed as
.
rr p

G   (38)
The template matrix is vectorized column by column into a vector 2r1
g .
The observation data 1
{ }L
l l
S are processed by extracting the corresponding neighborhood based on the template matrix Gp , resulting in the observation tensor rrL
   . By unfolding this tensor channel by channel, we obtain the observation matrix 2rL
Y   , which is expressed as 
1, 2, , L ,
Y  y y  y (39)
where 2r 1
l

y   denotes the observation vector for the l-th channel. The relationship between the observation matrix Y and the template vector g can be modeled as
Y  gα  n, (40) where   1
1, 2, , L
  aL 
α     denotes the channel complex gain vector, l denotes the complex coefficient of the l-th antenna, and 2rL
n   denotes the additive noise matrix. Based on the LS criterion, the optimal complex gain vector  can be obtained as
2 F
ˆ  arg min  ,
α
α Y gα (41)
where F
||  || denotes the Frobenius norm. Consequently, the objective function  
J α is defined as

8 > REPLACE THIS LINE WITH YOUR MANUSCRIPT ID NUMBER (DOUBLE-CLICK HERE TO EDIT) <
   

2
F tr ,
H
J α  Y  gα  Y  gα Y  gα (42)
where  
tr  denotes the trace of the matrix.  
J α can be further expanded as
  
tr .
H H HH HH
J α  Y Y Y gα  α g Y  α g gα (43)
By taking the derivative of  
J α with respect to αH and setting it to zero, the closed-form solution for 1
ˆ
L
α   is obtained as
ˆ,
H
H

gY
α g g (44)
where  denotes a very small positive regularization parameter, used to ensure the stability of numerical computation. Consequently, the estimated power spectrum vector 2
ˆ
rL
g   can be expressed as gˆ  gαˆ. (45)
This estimated vector gˆ is then reshaped into a three
dimensional tensor ˆ rrL
G   and subsequently cropped to
ˆ
NM L
G   via zero-padding. The resulting power spectrum matrix after NCA along the channel dimension is denoted by
CUT
NM
P   . Consequently, based on the CLEAN concept, the CFAR detection matrix PNCA can be updated as
NCA NCA CUT .

P  P  P (46) Simultaneously, the learnable historical sidelobe matrix, N S , is updated as
S S CUT ,
N  N  P (47) where PCUT denotes the matrix that retains only the target sidelobe information after setting CUT Ind Ind
P [r , v ] to zeros. Through the above steps, effective suppression of target sidelobes can be achieved. This iterative process continues until the CFAR detector no longer identifies any cells in the updated matrix PNCA that satisfy the detection threshold, at which point the target estimation of the radar echo is considered complete. The CT-CFAR algorithm is summarized in Algorithm 1.
IV. EXPERIMENTS
In this section, radar echoes are first simulated under an additive complex Gaussian noise environment to evaluate the performance metrics of the proposed target detector. Subsequently, the algorithm is further validated using real human posture data collected by a cascaded millimeter-wave radar. Finally, the execution efficiency is analyzed based on the runtime of each algorithm. To ensure the reliability of the experimental results, all performance metrics are obtained through 100 independent st-
andard Monte Carlo trials. In the simulation experiments with a given SNR, the noise power is set according to the average power of the noiseless simulated echo signal. The main parameters used in the FMCW radar simulation experiments are listed in TABLE 1.
TABLE 1
SIMULATION PARAMETERS
Parameter Value Starting frequency 77 GHz Sweep slope 120.023 MHz us Sweep bandwidth 3.413 GHz Sampling rate 9000 Ksps Number of samples per chirp 256 Number of samples per frame 128
A. Evaluation Metrics
1) Probability of Detection The detection performance of a target detection algorithm is typically characterized by the detection probability Pd , also referred to as the recall rate, which is defined as
TP d P
,
N
PN
 (48)
where NTP denotes the number of true positive samples (correctly detected), and NP denotes the total number of positive samples. A higher recall rate signifies superior detection performance, reflecting the actual detection capability of the detector. 2) Probability of False Alarm The false alarm probability Pfa is an important metric for evaluating the false reporting rate of FMCW radar target detection algorithms [40], and is defined as
FP fa
N
,
N
P  N (49)
where NFP denotes the number of false positive samples (negative samples incorrectly identified as positive), and NN denotes the total number of negative samples. A lower Pfa indicates fewer false detections, corresponding to better detection performance. It should be noted that PFA is a preset hyperparameter that controls the false alarm probability of the target detector, and it differs from the empirically measured Pfa defined here. In practical applications, Pfa and Pd are often mutually const-
rained, requiring a trade-off between detection sensitivity and false alarm control.
Algorithm 1 CT-CFAR Input: Sl , PFA , tol Initialize: 2
NCA 1| |
L l
l

P S , NS  0

G NCA FA
Noise estima
N , Tˆ  tion P , P , tol
NCA NCA G
P  P  N
While PNCA is not empty:   
Ind , Ind CUT NCA
max ,
rv
x
P  
TCUT  Threshold NG , NS
If  
Ind Ind CU
,
CUT T
rv
x T
Save the target information


Ind , Ind CUT CUT
Reconstruct power spectrum , r v
P  Sl x 
CUT CUT Ind Ind
r ,v 0
P  P 
NCA NCA CUT

P  P  P , S S CUT
N N P Else Break
Output: Detection result, Tˆ

9 > REPLACE THIS LINE WITH YOUR MANUSCRIPT ID NUMBER (DOUBLE-CLICK HERE TO EDIT) <
3) Probability of Accurate Detection The accuracy Pa is an important indicator for evaluating the overall performance of a target detection algorithm. It intuitively reflects the global performance of the detector by jointly considering the correct detections of both positive and negative samples. It is defined as
TP a
TP FP
.
N
PN N
  (50)
B. Background Noise Estimation Results
According to (18), the background noise in the noncoherently accumulated echo power spectrum adheres to a Gamma distribution. To evaluate the performance of the proposed CT-CFAR in noise estimation, we employ the background noise estimation methods from SS-CFAR [38] and TS-CFAR [26] as comparative baselines. Specifically, the background noise directly estimated by CT-CFAR and that obtained based on the estimated truncation threshold are compared with those of the two baseline methods and the true -
background noise distribution, respectively. This set of comparisons is designed to assess the reconstruction accuracy of the noise component in the echo power spectrum for each algorithm. The background noise estimation performance of various target detection algorithms is evaluated under different SNR conditions through simulations based on radar echoes that include 20 randomly located targets with randomized ranges and velocities. Fig. 3 illustrates the root-mean-square error
(RMSE) between the estimated and true background noise parameters obtained by each algorithm as the SNR varies. In this figure, 1
CT-CFAR represents the noise distribution estimated by CT-CFAR, while 2
CT-CFAR denotes the noise distribution derived by applying the truncation threshold (estimated by CT-CFAR) to the observed samples. Experimental results show that as the SNR increases, the RMSE of the estimated noise distribution parameters relative to the original noise gradually decreases for all methods, and
1
CT-CFAR consistently maintains the optimal background noise estimation performance. Fig. 4 shows the background noise estimation results of different target detection algorithms under an SNR=0dB. Subplots (a)-(e) illustrate the PDFs of the true noise, the noise directly estimated by CT-CFAR, the noise obtained by CTCFAR with truncation thresholding, the noise estimated by SS-CFAR using second-order difference-based truncation statistics, and the noise estimated by TS-CFAR using threshold-based tru-
ncation, respectively. The red curves indicate the MLE fitted distributions. The experimental results show that the 1
CT-CFAR (Fig. 4 (b)) exhibits the highest morphological consistency with the true noise distribution (Fig. 4 (a)). Fig. 4 (f) further depicts the corresponding quantilequantile (Q-Q) plot, where the data points of the 1
CT-CFAR align more closely with the theoretical quantiles (diagonal line) than those of the other methods, indicating the best fitting performance. The robustness of each algorithm in background noise
Fig. 3. Performance of Gamma parameter estimation methods across different SNRs, the inset shows an enlarged view of the SNR range from -3dB to 5dB. (a) RMSE of shape parameter. (b) RMSE of scale parameter. (c) RMSE of mean. (d) RMSE of variance.

10 > REPLACE THIS LINE WITH YOUR MANUSCRIPT ID NUMBER (DOUBLE-CLICK HERE TO EDIT) <
estimation is further examined at an SNR of 0dB. Fig. 5 presents boxplots showing the statistical characteristics of estimation errors for each method. The elliptical regions highlight the median and 95% confidence intervals of the estimation errors. Experimental results show that 1
CT-CFAR achieves the median closest to the true distribution and the narrowest confidence interval, indicating superior accuracy, stability, and consistency with the true noise distribution compared to the other detection algorithms.
C. Detection Performance Evaluation 1) Simulation Experiments A Monte Carlo simulation is conducted to comprehensively evaluate the target detection performance of the proposed CTCFAR algorithm. In each independent trial, the simulated radar echoes contain 20 targets randomly distributed in range and velocity. To emulate realistic scenarios with stationary
objects, up to half of the targets are randomly assigned zero velocity in each run. All performance metrics are averaged over 100 Monte Carlo trials to ensure statistical reliability and objectivity. For fair comparison, the PFA of all CFAR detectors is uniformly set to 3
10 . In sliding-window-based detectors, the numbers of half-window reference cells are set to 10 in the fast-time dimension and 6 in the slow-time dimension, with 5 guard cells on each side. The OS-CFAR employs the median as its order statistic, while the TM-CFAR uses three cut cells on each side for truncation. For the proposed CT-CFAR, the false-alarm probability for internal noise estimation PFA and the convergence tolerance tol for the iterative process are set to 3
10 and 5
10 , respectively. Fig. 6 shows the detection performance of the proposed CTCFAR algorithm with that of other target detection algorithms
Fig. 4. Comparison of background noise modeling and distribution fitting results for different estimation methods at SNR = 0dB. (a) True background noise. (b) 1
CT-CFAR fitting. (c) 2
CT-CFAR fitting. (d) SS-CFAR fitting. (e) TS-CFAR fitting. (f) Q-Q plot of the five distributions.
Fig. 5. Boxplot of algorithm results with median and 95% bootstrap confidence intervals at SNR = 0dB. The elliptical regions highlight the median and 95% confidence intervals of the estimation errors.

11 > REPLACE THIS LINE WITH YOUR MANUSCRIPT ID NUMBER (DOUBLE-CLICK HERE TO EDIT) <
under different SNR conditions. Specifically, Fig. 6 (a) shows the detection probability Pd of each algorithm as a function of the SNR. As illustrated, the Pd of all algorithms increases monotonically with SNR and gradually saturates around 15dB, beyond which the improvement rate slows down. Among all the compared algorithms, CT-CFAR consistently exhibits the best detection performance across most SNR ranges. In the low-SNR region (SNR < -17dB), OS-CFAR and CASO-CFAR temporarily outperform others -
due to their tendency to adopt lower detection thresholds. However, as SNR increases, CT-CFAR and SS-CFAR surpass them and maintain superior detection probabilities. CASO-CFAR, TMCFAR, and TS-CFAR also achieve competitive performance, but their detection capability is degraded by the influence of target sidelobes and outliers within the reference window, which bias the threshold estimation. CA-CFAR suffers from a similar issue because its reference cells fail to meet the background homogeneity ass-
umption, leading to inferior detection performance. In addition, CAGO-CFAR shows the lowest detection sensitivity in multi-target scenarios owing to the masking effect. Overall, these results confirm that CTCFAR achieves the highest detection sensitivity and robustness among all compared algorithms, demonstrating its effectiveness under varying SNR conditions. Fig. 6 (b) shows the false alarm probability Pfa of each target detection algorithm as a function of SNR. As illustrated in the figure, CT--
CFAR is the only algorithm that maintains the lowest and nearly constant false alarm probability across the entire SNR range. In contrast, the Pfa of all other
algorithms increases significantly with rising SNR. Among the others, OS-CFAR, CASO-CFAR, TM-CFAR, and TS-CFAR exhibit the most rapid increase in Pfa . This is mainly because a higher SNR introduces more target sidelobes and noise components that are mistakenly detected as targets, thereby increasing the number of false alarms. In comparison, CAGOCFAR and CA-CFAR demonstrate stronger SS capability, but at the cost of reduced target detection performance (i.e., lower Pd ). SS-CFAR maintains a relat-
ively low false alarm rate while achieving detection performance comparable to CTCFAR, making its overall performance second only to CTCFAR. Fig. 6 (c) shows the precision Pa of each target detection algorithm as a function of SNR. As illustrated, although the overall precision of CT-CFAR slightly decreases with increasing SNR, it consistently maintains the highest level across the entire SNR range, demonstrating significantly superior performance compared to the other algorithms. In contrast, the-
 precision of the remaining detection algorithms initially increases and then decreases, a trend consistent with the observations in Fig. 6 (b). Overall, CT-CFAR also exhibits the best performance in terms of precision, maintaining a low false alarm rate while achieving high target recall and precision, which proves its robustness and reliability in target detection. Fig. 7 presents the detection performance of various algorithms at an SNR=0dB with respect to the PFA .Fig. 7 (a) shows the receiver-
 operating characteristic (ROC) curves for all algorithms. As observed, both CT-CFAR and SS-CFAR
Fig. 6. Performance evaluation of different CFAR algorithms for various SNRs at 3
PFA 10
 . (a) Detection probability. (b) False alarm probability. (c) Precision.
Fig. 7. Performance evaluation of different CFAR algorithms for various false alarm probability at SNR=0dB. (a) ROC curves. (b) False alarm probability. (c) Precision.

12 > REPLACE THIS LINE WITH YOUR MANUSCRIPT ID NUMBER (DOUBLE-CLICK HERE TO EDIT) <
exhibit relatively small performance fluctuations with respect to the PFA and maintain stable detection results. Among them, the proposed CT-CFAR consistently achieves superior performance across the entire SNR range, demonstrating higher detection accuracy and robustness than all other algorithms. Fig. 7 (b) and Fig. 7 (c) respectively present the curves of the Pfa and Pa as a function of the prescribed PFA . Consistent with the ROC curve results, both CT-CFAR and SS-CFAR exhibit strong stability-
 with respect to variations in PFA . However, CT-CFAR shows even smaller performance fluctuations and maintains more consistent metrics across different PFA levels, indicating superior robustness compared to SS-CFAR and the other algorithms. Fig. 8 shows the performance comparison of each target detection algorithms in scenarios with varying numbers of targets under the conditions of 3
PFA 10
 and SNR=0dB. It can be observed that as the number of targets in the echo increases, the detection capability of all algorithms generally decreases. CT-CFAR consistently maintains the optimal detection performance across all target density scenarios. Nevertheless, in terms of Pfa and Pa , CT-CFAR significantly outperforms the other algorithms. Overall, although CTCFAR’s detection capability is slightly inferior to the bestperforming algorithms in high target density scenarios, it still maintains-
 a high level of stability and detection performance. 2) Measurement Experiments An experiment in a 10.7 m × 7.6 m empty classroom is carried out to assess the real-world detection performance of
the proposed CT-CFAR algorithm. The subject, positioned 1.5m away from the radar, maintained a half-raised arm posture. Data are collected using a TI AWR2243 radar comprising a four-chip cascaded array [41], which is mounted on a tripod at a height of 1.2 m. Detailed radar parameters are listed in TABLE 2, and the experimental setup is shown in Fig. 9. Fig. 10 shows the noise estimation performance of the CTCFAR algorithm in the measurement environment. Fig. 10 (a) shows the estimated background n-
oise and its corresponding fit. Since the cascaded radar possesses 192 array channels after MIMO virtualization, its distribution can be approximated by a Gaussian distribution according to the central limit theorem. In the Shapiro-Wilk test [42] conducted at a significance level of 0.01, the CT-CFAR estimated background noise failed to reject the Gaussian distribution hypothesis, the empirical fitting results are consistent with theoretical analysis. Fig. 10 (b) shows the corresponding Q-Q plot, -
confirming that the estimated Gamma distribution effectively approximates the statistical characteristics of the true background noise. Fig. 11 shows the side-view projection of target detection results in the range dimension for CT-CFAR and several comparative CFAR algorithms. In the figure, the thick green line represents the zero-Doppler component, while red boxes indicate potential false alarm detections. Since only stationary targets are present in the measurement scenario, the true targets a-
re theoretically expected to lie primarily along the
Fig. 9. Measurement environment. A subject stands with arms half-raised.
Fig. 8. Performance evaluation of different CFAR algorithms for various numbers of targets at 3
PFA 10
 and SNR=0dB. (a) Detection probability. (b) False alarm probability. (c) Precision.
Fig. 10. Noise estimation performance of CT-CFAR in the measurement environment. (a) background noise distribution estimation. (b) Q-Q plot.

13 > REPLACE THIS LINE WITH YOUR MANUSCRIPT ID NUMBER (DOUBLE-CLICK HERE TO EDIT) <
zero-Doppler line. TABLE 2 Radar Configuration Parameters Parameter Value Starting frequency 77 GHz Sweep slope 100 MHz us Sweep bandwidth 3.2 GHz Sampling rate 8000 Ksps Number of samples per chirp 256 Number of samples per frame 64 The experimental results indicate that CT-CFAR and SSCFAR exhibit the best overall detection performance,
effectively mitigating spectral leakage along both fast-time and slow-time dimensions. However, the target-noise separation strategy employed by SS-CFAR, which relies on second-order difference statistics, may lead to a biased threshold estimation, resulting in a marginally higher false alarm rate compared to CT-CFAR. CAGO-CFAR, CA-CFAR, and TM-CFAR also perform well in mitigating spectral leakage, but their detection sensitivity is relatively low due to the masking effect. In contrast, OS-CFAR an-
d CASO-CFAR demonstrate strong detection capability for weak targets, yet their insufficient suppression of noise and sidelobe energy increases the likelihood of misclassification, leading to
Fig. 11. Comparison of range-domain side-view projections of RDI detection results obtained by different CFAR algorithms. Red boxes denote potential false-alarm targets. (a) CT-CFAR. (b) CASO-CFAR. (c) CAGO-CFAR. (d) CA-CFAR. (e) OSCFAR. (f) TM-CFAR. (g) SS-CFAR.
Fig. 12. Comparison of radar point clouds obtained by different CFAR target detection algorithms. The box shows an enlarged view of the human posture region. (a) CT-CFAR. (b) CASO-CFAR. (c) CAGO-CFAR. (d) CA-CFAR. (e) OS-CFAR. (f) TMCFAR. (g) SS-CFAR.

14 > REPLACE THIS LINE WITH YOUR MANUSCRIPT ID NUMBER (DOUBLE-CLICK HERE TO EDIT) <
elevated false alarm rates. Fig. 12 shows the radar point cloud results obtained using CT-CFAR and several comparative CFAR algorithms as target detectors, following angle-of-arrival estimation. The magnified details of the human body region are highlighted by the boxes in the figure. The experimental results indicate that CT-CFAR and SSCFAR achieve the best overall detection performance, exhibiting strong suppression of target masking effects and sidelobe-induced false alarms, thereby more accura-
tely reconstructing human body contours. In terms of local details, CT-CFAR provides spatial resolution comparable to CASOCFAR and OS-CFAR, and, compared to SS-CFAR, is better able to preserve the full features of target postures.
D. Runtime Performance Evaluation
To evaluate the computational efficiency of various CFAR algorithms, we analyze their program runtime using both simulation and actual measurement experiments. Fig. 13 shows the comparison of the execution times for different CFAR algorithms. Specifically, Fig. 13 (a) shows the variation of runtime with SNR in the simulation experiments. The runtimes of SSCFAR and TS-CFAR increase markedly as SNR rises, with SS-CFAR showing the most significant growth, while the runtimes of the other detection alg-
orithms remain largely unaffected by changes in SNR. Overall, CT-CFAR consistently achieves the highest computational efficiency across all SNR levels. Fig. 13 (b) shows the runtime as a function of the number of targets in the simulated experiments. As the number of targets increases, SS-CFAR exhibits a steep rise in runtime, whereas the other algorithms show only minor increases, keeping computational costs within an acceptable range. Fig. 13 (c) shows the runtime results obtained from measured -
data. Consistent with the simulation findings, CTCFAR maintains superior execution efficiency in real-world experiments as well.
V. CONCLUSION
In this paper, we propose CT-CFAR to address the nonhomogeneity of the reference window caused by sidelobe
contamination. Unlike mainstream mean-based, order-statistic, and truncated CFAR variants, CT-CFAR does not rely on prior knowledge of anomalous samples; instead, it adaptively separates target and noise spectra to restore the homogeneity assumption of the reference window. The proposed method achieves this while preserving detection capability and estimation accuracy, and it additionally offers superior computational efficiency. The proposed CT-CFAR algorithm achieves precise separation between t-
arget and noise spectra through TS, restoring the optimal detection conditions of mean-based CFAR algorithms while incorporating learnable historical sidelobe information to enhance robustness. Multi-antenna observations are used to reconstruct target echoes via the Candan algorithm and LS estimation, and the integration of the CLEAN concept effectively suppresses sidelobe interference. Monte Carlo simulations and real-world measurements validate that CT-CFAR accurately separates target and noise -
components and significantly reduces false alarms. Compared with mainstream mean-based, orderstatistic, and advanced CFAR algorithms such as TS-CFAR and SS-CFAR, CT-CFAR demonstrates superior detection capability, accuracy, and computational efficiency. Nevertheless, CT-CFAR exhibits limited detection performance when multiple targets are closely spaced, with inter-target distances on the order of 1-2 range resolution cells. Future work will focus on modeling and joint detection of closely spaced -
targets to further enhance the algorithm’s performance in dense target scenarios.
REFERENCES
[1] M. Jiang, G. Xu, H. Pei et al., “4D High-resolution imagery of point clouds for automotive MmWave radar,” IEEE Transactions on Intelligent Transportation Systems, 2023.
[2] P. Zhao, C. X. Lu, J. Wang et al., "mid: Tracking and identifying people with millimeter wave radar." pp. 33–40. [3] D. Zhang, X. Zhang, Z. Yin et al., “mmrotation: Unlocking versatility of a single mmwave radar via horizontal mobility and azimuthal rotation,” IEEE Transactions on Mobile Computing, 2025.
[4] X. Huang, J. Zhu, Z. Tian et al., “An adaptive algorithm for generating 3D point clouds of the human body based on 4D millimeter-wave radar,” Review of Scientific Instruments, vol. 95, no. 1, 2024.
[5] Z. Zhao, S. Qiu, Y. Zhang et al., “Vessel Target Detection Method Based on an Improved CFAR Method in Nighttime Remote Sensing Images,”
Fig. 13. Runtime analysis of different CFAR algorithms. (a) Runtime vs. SNR at 3
PFA 10
 . (b) Runtime vs. number of targets at 3
PFA 10
 and SNR=0dB. (c) Runtime in measurement experiments.

15 > REPLACE THIS LINE WITH YOUR MANUSCRIPT ID NUMBER (DOUBLE-CLICK HERE TO EDIT) <
IEEE Transactions on Geoscience and Remote Sensing, vol. 62, pp. 1–13, 2024. [6] L. Fan, J. Wang, Y. Chang et al., “4D mmWave radar for autonomous driving perception: A comprehensive survey,” IEEE Transactions on Intelligent Vehicles, vol. 9, no. 4, pp. 4606–4620, 2024. [7] Y. Qiu, Z. Deng, and X. Huang, “Unified complex-valued high-resolution frequency representation with cross-domain attention for radar-based physiological state recognition,” Pattern Recognition, vol. 172, pp. 112488, 2026/04/01-
/, 2026. [8] G. Paterniani, D. Sgreccia, A. Davoli et al., “Radar-based monitoring of vital signs: A tutorial overview,” Proceedings of the IEEE, vol. 111, no. 3, pp. 277–317, 2023. [9] J. Zhu, X. Huang, Z. Deng et al., “mRadHPRS: Human Pose Recognition System From Point Clouds Generated Through a Millimeter-Wave Radar,” IEEE Transactions on Aerospace and Electronic Systems, vol. 61, no. 2, pp. 3227–3242, 2025. [10]X. Li, Y. Qiu, Z. Deng et al., “Lightweight Multiattention Enhanced Fusion Network -
for Omnidirectional Human Activity Recognition With FMCW Radar,” IEEE Internet of Things Journal, vol. 12, no. 5, pp. 5755–5768, 2025. [11]Y. Yang, J. Liu, T. Huang et al., “RaLiBEV: Radar and LiDAR BEV fusion learning for anchor box free object detection systems,” IEEE Transactions on Circuits and Systems for Video Technology, 2024.
[12]J. Schramm, N. Vödisch, K. Petek et al., "Bevcar: Camera-radar fusion for bev map and object segmentation." pp. 1435–1442. [13]G. Sebestyen, I. Stoica, and A. Hangan, "Human activity recognition and monitoring for elderly people." pp. 341–347. [14]G. Longo, E. Russo, A. Armando et al., “Attacking (and defending) the maritime radar system,” IEEE Transactions on Information Forensics and Security, vol. 18, pp. 3575–3589, 2023. [15]J. Zhang, M. Xing, and Y. Xie, “FEC: A feature fusion framework f-
or SAR target recognition based on electromagnetic scattering features and deep CNN features,” IEEE Transactions on Geoscience and Remote Sensing, vol. 59, no. 3, pp. 2174–2187, 2020. [16]Y. Sim, J. Heo, Y. Jung et al., “Design of Reconfigurable Radar Signal Processor for Frequency Modulated Continuous Wave Radar,” IEEE Sensors Journal, 2025.
[17]S. D. Howard, and G. V. Weinberg, “Optimal predictive inference and noncoherent CFAR detectors,” IEEE Transactions on Aerospace and Electronic Systems, vol. 56, no. 4, pp. 2603–2615, 2019. [18]P. P. Gandhi, and S. A. Kassam, “Optimality of the cell averaging CFAR detector,” IEEE Transactions on Information Theory, vol. 40, no. 4, pp. 1226–1228, 1994. [19]V. G. Hansen, "Constant false alarm rate processing in search radars. in radar—present and future." p. 325. [20]G. V. Trunk, “Range resolutio-
n of targets using automatic detectors,” IEEE Transactions on Aerospace and Electronic Systems, no. 5, pp. 750755, 2007. [21]M. E. Smith, and P. K. Varshney, “Intelligent CFAR processor based on data variability,” IEEE Transactions on Aerospace and Electronic Systems, vol. 36, no. 3, pp. 837–847, 2000. [22]X. Xu, Y. Li, C. Yeh et al., “IGAMF: Adaptive CFAR detection and blind speed sidelobe suppression for high-speed target in homogeneous environment,” IEEE Transactions on Aerospace and Electronic-
 Systems, 2025. [23]S. lake, “OS-CFAR theory for multiple targets and nonuniform clutter,” IEEE Transactions on Aerospace and Electronic Systems, vol. 24, no. 6, pp. 785–790, 1988. [24]P. P. Gandhi, and S. A. Kassam, “Analysis of CFAR processors in nonhomogeneous background,” IEEE Transactions on Aerospace and Electronic systems, vol. 24, no. 4, pp. 427–445, 1988. [25]S. Himonas, "Adaptive censored greatest-of CFAR detection." pp. 247255. [26]D. Tao, S. N. Anfinsen, and C. Brekke, “Robust CFAR det-
ector based on truncated statistics in multiple-target situations,” IEEE Transactions on Geoscience and Remote Sensing, vol. 54, no. 1, pp. 117–134, 2016.
[27]D. Tao, A. P. Doulgeris, and C. Brekke, “A segmentation-based CFAR detection algorithm using truncated statistics,” IEEE Transactions on
Geoscience and Remote Sensing, vol. 54, no. 5, pp. 2887–2898, 2016. [28]R. G. Zefreh, M. R. Taban, M. M. Naghsh et al., “Robust CFAR detector based on censored harmonic averaging in heterogeneous clutter,” IEEE Transactions on Aerospace and Electronic Systems, vol. 57, no. 3, pp. 1956–1963, 2020. [29]J. Högbom, “Aperture synthesis with a non-regular distribution of interferometer baselines,” Astronomy and Astrophysics Supplement, Vol. 15, p. 417, vol. 15, pp. 417, 1974. [30]Z. Cao, J. Li, C. Song -
et al., “Compressed Sensing-Based Multitarget CFAR Detection Algorithm for FMCW Radar,” IEEE Transactions on Geoscience and Remote Sensing, vol. 59, no. 11, pp. 9160–9172, 2021. [31]A. Cohen, W. Dahmen, and R. DeVore, “Compressed sensing and best kterm approximation,” Journal of the American mathematical society, vol. 22, no. 1, pp. 211–231, 2009. [32]Z. Cao, W. Fang, Y. Song et al., “DNN-based peak sequence classification CFAR detection algorithm for high-resolution FMCW radar,” IEEE Transactions-
 on Geoscience and Remote Sensing, vol. 60, pp. 1–15, 2021. [33]C.-H. Lin, Y.-C. Lin, Y. Bai et al., "DL-CFAR: A novel CFAR target detection method based on deep learning." pp. 1–6. [34]C. Wang, J. Tian, J. Cao et al., “Deep learning-based UAV detection in pulse-Doppler radar,” IEEE Transactions on Geoscience and Remote Sensing, vol. 60, pp. 1–12, 2021. [35]Ç. Candan, “Fine resolution frequency estimation from three DFT samples: Case of windowed data,” Signal Processing, vol. 114, pp. 245250, 2015-
. [36]R. I. Jennrich, “Asymptotic properties of non-linear least squares estimators,” The Annals of Mathematical Statistics, vol. 40, no. 2, pp. 633–643, 1969. [37]S. Rao, “Introduction to mmWave sensing: FMCW radars,” Texas Instruments (TI) mmWave Training Series, pp. 1–11, 2017.
[38]J. Zhu, X. Huang, J. Liu et al., “Robust CFAR detector based on CLEAN for sidelobe suppression,” IEEE Sensors Journal, vol. 24, no. 9, pp. 14930–14942, 2024. [39]Ç. Candan, “A method for fine resolution frequency estimation from three DFT samples,” IEEE Signal processing letters, vol. 18, no. 6, pp. 351354, 2011. [40]Z. Liang, J. Gai, X. Chen et al., “A Method for Threshold Setting and False Alarm Probability Evaluation for Radar Detectors,” Signal Processing, vol. 207, pp. 108930, 2023. [41]T-
. Instruments, "AWRx cascaded radar RF evaluation module (MMWCAS-RF-EVM)," 2020. [42]N. M. Razali, and Y. B. Wah, “Power comparisons of shapiro-wilk, kolmogorov-smirnov, lilliefors and anderson-darling tests,” Journal of Statistical Modeling and Analytics, vol. 2, no. 1, pp. 21–33, 2011.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:46.980Z
- **Text Length:** 64671 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 15 of 15
