# PDF Document: Liang et al. - 2025 - Real-Time Lane-Level Crash Detection on Freeways Using Sparse Telematics Data.pdf

**File Path:** Liang et al. - 2025 - Real-Time Lane-Level Crash Detection on Freeways Using Sparse Telematics Data.pdf

**Processed Date:** 2026-02-10T18:16:24.821Z

**File Size:** 4419.71 KB

**Total Pages:** 18

**Extracted Pages:** 18

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3306

**Title:** Real-Time Lane-Level Crash Detection on Freeways Using Sparse Telematics Data

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Highlights
Real-Time Lane-Level Crash Detection on Freeways Using Sparse Telematics Data
Shixiao Liang, Chengyuan Ma*, Pei Li, Ph.D., Haotian Shi, Jiaxi Liu, Hang Zhou, Keke Long, Bofeng Cao, Todd Szymkowski, Xiaopeng Li
• A real-time crash detection framework that uses large-scale telematics data to achieve lane-level localization and reliable detection under sparse and low-frequency sampling.
• A general and adaptive modeling mechanism that discretizes vehicle trajectories into lane-aligned cells and characterizes normal driving behaviors for robust lane-level crash detection.
• Using large-scale Wisconsin telematics data and ground-truth crash reports, the detection algorithm achieved a 75% crash identification rate, with only 0.6% of non-crashes misclassified as crashes, while also detecting 13% of crashes more than 3 minutes before the record time in crash report.
arXiv:2511.18148v1 [eess.SY] 22 Nov 2025

Real-Time Lane-Level Crash Detection on Freeways Using Sparse Telematics Data
Shixiao Lianga, Chengyuan Ma*a, Pei Li, Ph.D.b, Haotian Shic,a, Jiaxi Liua, Hang Zhoua, Keke Longa, Bofeng Caod, Todd Szymkowskie and Xiaopeng Lia
aDepartment of Civil & Environmental Engineering, University of Wisconsin-Madison, Madison, WI, United States bDepartment of Civil & Architectural Engineering and Construction Management, University of Wyoming, Laramie, WY, United States cDepartment of Traffic Engineering & Key Laboratory of Road and Traffic Engineering of Ministry of Education, Tongji University, Shanghai, China dDepartment of Electrical & Computer Engineering, University of Wisconsin–Madison, Madison, WI, United States eWisconsi-
n Department of Transportation, Madison, WI, United States
ARTICLE INFO
Keywords:
Real-time crash detection Telematics data Spatial discretization Lane-level matching
ABSTRACT
Real-time traffic crash detection is critical in intelligent transportation systems because traditional crash notifications often suffer delays and lack specific, lane-level location information, which can lead to safety risks and economic losses. This paper proposes a real-time, lane-level crash detection approach for freeways that only leverages sparse telematics trajectory data. In the offline stage, the historical trajectories are discretized into spatial cells using vector crossproduct techni-
ques, and then are used to estimate an vehicle intention distribution and select an alert threshold by maximizing the F1-score based on official crash reports. In the online stage, incoming telematics records are mapped to these cells and scored for three modules: transition anomalies, speed deviations, and lateral maneuver risks, with scores accumulated into a cell-specific risk map. When any cell’s risk exceeds the alert threshold, the system issues a prompt warning. Relying solely on telematics-
 data, this real-time and low-cost solution is evaluated on a Wisconsin dataset and validated against official crash reports, achieving a 75% crash identification rate with accurate lane-level localization, an overall accuracy of 96%, an F1score of 0.84, and a non-crash–to-crash misclassification rate of only 0.6%, while also detecting 13% of crashes more than 3 minutes before the recorded crash time.
1. Introduction
Real-time traffic crash detection plays a critical role in enhancing traffic safety and enabling timely emergency responses (Huang, Wang and Sharma, 2020; Hussain, Li and Haque, 2024; Yuan, Abdel-Aty, Wang, Lee, Wang and Yu, 2018; Li and Abdel-Aty, 2022a; Li, Abdel-Aty, Cai and Yuan, 2020a). Reducing crash detection and clearance time by just one minute can yield significant safety and efficiency benefits. According to the Federal Highway Administration (2010), each additional minute of crash dura-
tion increases the likelihood of secondary crashes by approximately 2.8% , while reducing clearance time by one minute can cut total traffic delay by up to four minutes. These time savings also carry measurable economic significance: in Hong Kong, crash-related traffic delays in 2021 cost society approximately US $11.02 million, corresponding to an average of about US $0.26 per vehicle-minute of lost productivity and fuel consumption (Lian and Loo, 2024). Thus, even a one-minute improvement of cra-
sh detection and response could prevent multiple secondary crashes and save substantial societal costs, underscoring the critical importance of rapid, accurate crash alerts. Road traffic crash detection refers to the task of identifying when and where incidents occur based on available traffic data (e.g., aggregated traffic measures or vehicle trajectories). Current crash detection approaches fall into two broad categories based on the criteria of detection. (ElSahly and Abdelfatah, 2022). The fir-
st category focuses on using macroscopic, aggregated traffic indicators such as flow, density, and speed, to identify abnormal traffic conditions (Zhu, Wu, Fu, Wang, Zhang and Shangguan, 2021; Zhang, Liu, Yue, Li and Dong, 2023; Querfurth, Rehborn, Bernhardt, Guan, Huang and Hoffmann, 2025). While effective at identifying major crashes that cause network-wide congestion,
sliang85@wisc.edu (S. Liang); cma97@wisc.edu (C. Ma*); pei.li@uwyo.edu (P.L. Ph.D.); shihaotian95@tongji.edu.cn (H. Shi); jliu2487@wisc.edu (J. Liu); hzhou364@wisc.edu (H. Zhou); klong23@wisc.edu (K. Long); hzhou364@wisc.edu (B. Cao); todd.szymkowski@dot.wi.gov (T. Szymkowski); xli2485@wisc.edu (X. Li) ORCID(s):
S. Liang et al.: Preprint submitted to Elsevier Page 1 of 13

Leveraging social media news
these techniques often suffer from substantial detection delays because they rely on traffic disturbances gradually propagating through the network. Their spatial resolution is inherently coarse, typically limited to corridor-level anomalies rather than precise lane-level roadway segments, which highlights a persistent gap in fine-grained crash localization research. Existing macroscopic studies rarely evaluate the exact spatial accuracy of crash localization, leaving the problem underexplored. No-
netheless, many operational and safety applications require much finer spatial resolution than macroscopic indicators can provide, because effective countermeasures rely on knowing the exact lane affected by an incident. Achieving lane-level precision is therefore critical for enabling proactive lane changes, maintaining smoother traffic flow, and reducing the likelihood of secondary crashes. On the other hand, microscopic methods employ either roadside sensing or vehicle trajectory data to detect-
 abnormal maneuvers at the lane level (Rocky, Wu and Zhang, 2024). Approaches relying on roadside cameras, LiDAR, or other fixed sensors can provide highly accurate localization but require costly infrastructure and dense deployments, which limits scalability (Qu, Shen, Yang, Zhang and Zhang, 2024b). Methods based on high-fidelity vehicle trajectories achieve comparable precision but often depend on proprietary or high-frequency data that are difficult to obtain in real time. Moreover, even when h-
igh-quality vehicle trajectory data are available, few studies have achieved lane-level accuracy without relying on additional sensor fusion. Therefore, these limitations highlight the need for a scalable and cost-effective data source that can capture vehicle-level dynamics while avoiding the deployment burden of dense roadside sensors or proprietary high-frequency datasets. Telematics data, collected from in-vehicle GPS and communication systems, can provide time-stamped trajectories and speed p-
rofiles of individual vehicles, enabling microscopic observation of traffic dynamics at a large scale (Herfort, Lautenbach, Porto de Albuquerque, Anderson and Zipf, 2023; Kan, Tang, Kwan, Ren, Liu and Li, 2019). Recent industry reports further indicate that telematics systems have already reached an estimated 79 percent penetration among new vehicles worldwide in 2024, suggesting that such data sources are becoming increasingly ubiquitous (Insight, 2025). Owing to their wide availability and low d-
eployment cost, such data support low-latency, real-time crash detection at lane-level granularity while remaining scalable to nationwide deployment. However, although modern GPS technology can achieve sub-meter positioning accuracy, the trajectories collected through large-scale telematics platforms are typically temporally sparse because most providers transmit data at intervals of three to five seconds. On freeways, where vehicles travel at high speeds, this upload frequency results in long spa-
tial gaps between consecutive points. In addition, only about five to seven percent of vehicles in the total traffic stream are represented in these data, which further limits the completeness of the reconstructed traffic state (Insight, 2025). Leveraging such incomplete trajectories to identify abnormal traffic patterns remains challenging. To improve spatial precision, scholars have begun developing machine learning frameworks that snap sparse vehicle telematics records to detailed lane geometri-
es for microscopic crash risk inference (Li and Abdel-Aty, 2022b; Kubin, Bianconcini, de Andrade, Simoncini, Taccari and Sambo, 2021; Dai, Zong, Zhang, Li, Chuyo, Zheng and Gao, 2023; Qu, Shen, Yang and Zhang, 2024a; Santos, Dias and Amado, 2022; Huang et al., 2020; Li, Abdel-Aty and Yuan, 2020b; Li and Abdel-Aty, 2022a). While these learning-based approaches achieve promising results, they often lack physical interpretability. Recent studies have explored physics-enhanced learning frameworks that-
 combine data-driven models with physical priors (Lee and Chang, 2025; Liang, Chen, Long, Zhang, Li and Ke, 2025), yet their implementation in crash detection still requires high-frequency data or specialized sensors (e.g., built-in accelerometers (Sharma, Reddy and Karthik, 2016)). Despite these advances, a gap remains for lightweight and scalable methods that can operate effectively on sparse telematics data. Furthermore, most machine learning approaches rely on large labeled datasets and numero-
us contextual features (e.g., speed limits, weather, or infrastructure conditions), which constrains their generalizability and precision when applied solely to telematics data. Consequently, detecting crashes from sparse and low-granularity telematics trajectories therefore remains an open challenge(Pang, Chawla, Liu and Zheng, 2013; Roy and Hasan, 2024; Kandiboina, Ravichandra-Mouli, BasultoElias, Knickerbocker, Hawkins and Sharma, 2025). To make effective use of these trajectories, one must ext-
ract and accumulate subtle abnormal driving behaviors such as sudden lane changes and decelerations that are often observed upstream of the crash site as drivers maneuver to bypass the blockage (Shi, Zhang, Qiao and Sadek, 2025). To address this, we propose a novel model-free framework that separates the offline model-building stage from the real-time detection stage to enable an efficient and adaptive crash detection process. In the offline stage, raw telematics records are matched to lane geomet-
ries and discretized into spatial cells to mitigate sampling sparsity. Historical trajectories are used to construct a vehicle intention distribution under normal conditions. The alert threshold is then determined by maximizing the F1-score, leveraging crash times, report times, and other relevant information from the official crash reports (Powers, 2020). After preparing all these data, in the online detection stage, each incoming telematics
S. Liang et al.: Preprint submitted to Elsevier Page 2 of 13

Leveraging social media news
Figure 1: Overview of the real-time crash detection framework
record is assigned to its corresponding cell based on the same algorithm in the offline stage. For each assigned cell, we compute three risk metrics. The first metric measures how unexpected the observed transition is relative to the vehicle intention distribution. The second metric quantifies the degree of speed deviation from normal traffic conditions. The third identifies abnormal lane change maneuvers. These risk metrics are weighted summed to update a dynamic risk map every second. Whenever t-
he accumulated risk in any cell exceeds the safety alarm threshold, the system issues a prompt warning with precise lane-level localization. The main contributions of this study are as follows:
1. A real-time crash detection framework that integrates large-scale telematics data for lane-level localization, enabling efficient crash detection even under sparse and low-frequency trajectories. 2. A general and adaptive modeling mechanism that spatially discretizes vehicle trajectories into lane-aligned cells and characterizes normal driving behaviors, providing a robust foundation for lane-level crash detection. 3. Using large-scale Wisconsin telematics data and ground-truth crash reports, t-
he detection algorithm achieved a 75% crash identification rate, with only 0.6% of non-crashes misclassified as crashes, while also detecting 13% of crashes more than 3 minutes before the record time in crash report.
The remainder of this paper is organized as follows. Section 2 details our methodology. Section 3 describes the dataset and experimental setup and presents the results. Section 4 concludes and outlines future research directions.
2. Methodology
In this section, we address the problem of detecting freeway crashes in real time using sparse telematics data collected from CVs. The task relies on two types of information: (i) large-scale historical CV trajectories and official crash reports, which are used to learn normal driving patterns and to calibrate model parameters, and (ii) streaming real-time telematics data, which provide instantaneous observations of vehicle behavior. Our objective is to design a lane-level crash detection method t-
o continuously monitor freeway segments and identify abnormal driving behaviors indicative of a crash. The final output of the methodology is a real-time crash detection signal that specifies whether a crash has occurred and, if so, the corresponding lane-level location.
2.1. Framework Overview
Figure 1 illustrates the overall structure of the proposed crash detection framework, which consists of an offline analysis stage and an online detection stage. The offline stage relies on a large-scale historical telematics dataset  = {S∗
i,t ∣ i ∈ , t = 1, ... , T }, where each raw telematics record is given by S∗
i,t = (lati,t, loni,t, vi,t), denoting
the reported latitude, longitude, and instantaneous speed of vehicle i at time t. These records are transformed into discretized states Si,t = (xi,t, yi,t, vi,t), where xi,t denotes the lane index and yi,t denotes the longitudinal segment index
S. Liang et al.: Preprint submitted to Elsevier Page 3 of 13

Leveraging social media news
on the roadway based on the map geometry of the study corridor. The set of all possible cell locations is denoted by  = {(x, y)}, so that the spatial component of each discretized state satisfies (xi,t, yi,t) ∈ . Using the historical dataset  , the offline stage learns the vehicle intention distribution that characterizes normal longitudinal and lateral driving behaviors under non-crash conditions. In addition, official crash reports aligned with telematics trajectories are used to calibrate th-
e alert threshold T ∗ and other model parameters required for real-time detection. During online operation, streaming telematics records S∗
i,t arrive sequentially from a time-varying set of vehicles
i ∈ t. Each record is converted into a discretized state Si,t = (xi,t, yi,t, vi,t). For each time step, the system evaluates
three instantaneous risk components at the visited cell (xi,t, yi,t): the position transition risk Rp
i,t, the speed deviation risk Rs
i,t, and the lateral maneuver risk Rl
i,t. These per-vehicle risks are aggregated over all vehicles in the same cell and
accumulated through time to form a dynamic risk map Rt(x, y). Whenever a vehicle traverses a cell, the accumulated risk at that cell is reset, indicating that the region has been directly observed and verified to be safe. A crash alarm is issued when the accumulated risk at any cell exceeds the offline-calibrated threshold T ∗, and the corresponding cell (x, y) is reported as the detected crash location. Through this integration of historical intention patterns and real-time behavioral evidence, t-
he framework achieves lane-level crash detection under sparse connected-vehicle penetration.
2.2. Offline Calibration Stage 2.2.1. Discretization
Discretization maps each raw telematics record S∗
i,t = (lati,t, loni,t, vi,t) into a unique cell-level state Si,t =
(xi,t, yi,t, vi,t), where xi,t is the lane index and yi,t is the longitudinal segment index. This mapping replaces free-floating GPS coordinates with a structured grid, reduces raw data complexity, supports efficient computation of transition probabilities, and provides the computational foundation for rapid online risk-score updates. Operating on a fixed grid further enables accumulated risk values to be visualized and updated with minimal overhead even under sparse CV penetration rate. To determ-
ine the lane index xi,t, we employ a lane-matching algorithm that assigns each telematics record to its corresponding lane using geometric rules based on publicly available map data such as OpenStreetMap (OSM). Traditional lane-detection techniques such as hidden Markov models, least-squares optimization, or fuzzy logic (Yang, Tang, Stewart, Dong, Zhang and Li, 2018; Hansson, Korsberg, Maghsood, Nordén et al., 2020) are computationally expensive, and image-based approaches (Guo, Zhou, Dong, Bian, -
Li and Xiao, 2024; Rabe, Meinke, Necker and Stiller, 2016) require continuous video streams unavailable in sparse CV data. Given improving GPS accuracy, a geometric method based on vector cross-product provides an efficient and robust alternative. To perform lane matching, we first construct the reference geometry required for mapping each telematics record to its corresponding lane. Starting from the map-based centerline of the roadway, we obtain them from publicly available digital maps such as -
OSM. Based on these centerline points, we generate the reference line used for lane determination. For divided or one-way facilities, the centerline directly represents the travel direction; for bidirectional roadways, the centerline is laterally offset by half of the total carriageway width to create separate reference lines for each travel direction. Each reference line is then interpolated into a dense sequence of vertices to ensure consistent spatial resolution for projecting telematics points-
 and computing lateral offsets. With the reference geometry defined, each telematics record can be assigned to its lane using a geometric lanematching procedure. For each record S∗
i,t = (lati,t, loni,t, vi,t), we represent its position (lati,t, loni,t) in the local roadway
frame as point A. A perpendicular is dropped from A to the selected reference line to obtain the foot point C. We then take the next telematics sample of the same vehicle in timeS∗
i,t+1, denoting (lati,t+1, loni,t+1) as point B, and form the
vectors ⃗ ⃖CA and ⃗ ⃖AB. Their cross product determines the direction of A relative to the reference line: the sign of its z-component, following the right-hand rule, indicates whether A lies to the left or right of the reference line. The signed lateral offset is then computed as
δ = signedDist(A, C),
representing the perpendicular distance from A to the reference line, with negative values on the left and positive values on the right. This continuous offset is discretized into the lane index xi,t using
xi,t =
⎢
⎢
⎢ ⎣
δ + W∗
2 w
⎥
⎥
⎥ ⎦
+ 1,
S. Liang et al.: Preprint submitted to Elsevier Page 4 of 13

Leveraging social media news
where W ∗ is the carriageway width associated with the selected reference line and w is the nominal lane width. Adding W ∗∕2 shifts δ from [−W ∗∕2, W ∗∕2] to [0, W ∗], and dividing by w partitions the cross section into uniformly spaced lanes, with the floor operator producing a one-based integer lane index. The complete procedure is summarized in Algorithm 1.
Algorithm 1 Lane Matching
Require: road segment of interest (latc, lonc), road identifier IDc, telematics records ∗, lane width w, lane count n, search radius r, OSM tags: oneway, dual_carriageway 1: filter ′ by proximity to (latc, lonc) within radius r 2: retrieve from OSM the centerline C and tags oneway, dual_carriageway 3: compute total width W ← w × n 4: if oneway = yes or dual_carriageway = yes then 5: C∗ ← C, W ∗ ← W , n∗ ← n 6: else
7: d ← W ∕4 8: CL ← offset(C, +d), CR ← offset(C, −d)
9: C∗ ← arg minX∈{CL,CR} dist(X, (latc, lonc))
10: W ∗ ← W ∕2, n∗ ← n∕2 11: end if 12: for all A = S∗
i,t ∈ ′ do
13: CA ← arg minc∈C∗ dist(A, c)
14: B ← next(S∗
i,t) ⊳ next telematics record of same vehicle i
15: C⃗ A ← A − CA
16: A⃗ B ← B − A 17: z ← (C⃗ A × A⃗ B)z
18: if z > 0 then s ← right 19: elses ← lef t 20: end if
21: δ ← signedDist(A, CA)
22: laneIdx ← ⌊(δ + W ∗∕2)∕w⌋ + 1 23: record (laneIdx, s) for A 24: end for
25: Output: laneIdx and side s for all telematics records in ′
After assigning each telematics record a lane index xi,t, we segment each lane longitudinally into fixed-length intervals, and each telematics record is assigned a longitudinal segment index yi,t. The pair (xi,t, yi,t) therefore identifies the unique cell visited by vehicle i at time t, completing the cell-level representation Si,t = (xi,t, yi,t, vi,t). In our dataset, GPS timestamps arrive approximately every 3 s. At typical freeway speeds (approximately 75 mph or 33.5 m/s), a vehicle travels abo-
ut 100 m within this interval, so we adopt 10 m longitudinal segments when defining the index yi,t. In practice, dividing each lane into roughly ten 10 m cells provides sufficient spatial resolution without overcrowding consecutive samples in the same cell. Curvilinear sections of roadway are not problematic, as OSM provides dense centerline vertices that allow the curved alignment to be well approximated by multiple short polylines. Considering the inherent GPS noise, the resulting longitudinal s-
egmentation remains robust under this geometric interpolation. This speed-adaptive rule yields uniformly occupied cells along each trajectory. By combining the lane index xi,t with the longitudinal segment index yi,t, we obtain the final discretized state Si,t with minimal sampling bias.
2.2.2. Vehicle Intention Distribution Extraction
Through the discretization procedure described above, each raw telematics record S∗
i,t is mapped to a cell-level state
Si,t = (xi,t, yi,t, vi,t), providing a consistent spatiotemporal representation for modeling normal driving behavior. This structure enables the extraction of a vehicle intention distribution, which captures the most likely next cell a vehicle will occupy under routine traffic conditions.
S. Liang et al.: Preprint submitted to Elsevier Page 5 of 13

Leveraging social media news
For each historical trajectory in  and for every time step t, we record the transition from the current cell (xi,t, yi,t) to the next observed cell (xi,t+1, yi,t+1) one timestamp later (3 s). For a fixed origin cell (x, y), all transitions of the
form (x, y) → (x′, y′) are aggregated across all vehicles and all days in the 7-day historical window. Normalizing these aggregated counts yields an empirical transition probability:
P
((x, y) → (x′, y′)),
which represents the estimated statistical expectation that a vehicle in cell (x, y) will move to cell (x′, y′) in the next 3 s interval. The resulting vehicle intention distribution characterizes routine longitudinal and lateral movements across the corridor and forms the statistical baseline for our risk analysis, following a goal-prediction framework (Gan, Shi, Li, Wu, An, You, Li, Ma, Ma and Ran, 2025). Transitions with high probability encode typical behavior, whereas any observed transition -
Si,t → Si,t+1 that deviates substantially from these high-probability patterns is flagged as anomalous and treated as a potential risk factor.
2.2.3. Threshold Determination
In the offline stage, in addition to extracting the vehicle intention distribution from historical trajectories, we also use historical crash reports to calibrate the alert threshold for the real-time detection system. For each crash sample in the offline dataset, we run the complete risk-scoring procedure. This produces an accumulated risk map Rt(x, y) for every cell (x, y) over time. For each crash event, we record the maximum accumulated risk value attained within the affected spatiotemporal re-
gion. We then evaluate a range of candidate thresholds T by comparing whether Rt(x, y) ≥ T would correctly identify the crash in a validation set. For each candidate threshold, we compute precision, recall, and the corresponding F1-score based on the binary detection outcomes. The optimal threshold T ∗ is chosen as the value that maximizes the F1-score across all validation samples. During real-time operation, the system continuously maintains the accumulated risk score Rt(x, y) for every cell.
An alert is triggered whenever any cell exceeds the offline-calibrated threshold T ∗, providing a lane-level early-warning mechanism based on deviations from routine driving behavior.
2.3. Online Detection Stage
The offline calibration stage provides two key components for real-time detection: the vehicle intention distribution P ((x, y) → (x′, y′)), which represents normal driving behavior across the discretized grid , and the optimized crash alert threshold T ∗. These components are then applied to incoming telematics data to dynamically compute a risk score. The risk scoring process translates observed trajectories S∗
i,t = (lati,t, loni,t, vi,t) into discretized states
Si,t = (xi,t, yi,t, vi,t) and evaluates deviations from normal driving patterns. At each time step t, a vehicle’s state at cell (xi,t, yi,t) is evaluated by three complementary modules: transition anomaly detection, speed deviation analysis, and lateral maneuver risk assessment. Their weighted sum produces a comprehensive risk score capable of triggering real-time alerts. These module outputs are continuously accumulated on a spatial risk map {At(x, y) ∶ (x, y) ∈ }. To prevent these accumulated v-
alues from growing indefinitely, a reset indicator φt(x, y) is applied. When φt(x, y) = 1, the cell’s accumulated risk At(x, y) is cleared, indicating that a new trajectory has passed through and the area is free of immediate hazards. This mechanism maintains numerical stability and ensures that the risk map reflects only recent, unrecovered anomalies. The following subsections describe each module in detail.
2.3.1. Position Transition Risk
To detect unlikely trajectory changes, we compare each cell transition of a vehicle from Si,t to Si,t+1 against the vehicle intention distribution from offline analysis stage. Under normal conditions, vehicles follow high-probability transitions, whereas low-frequency transitions indicate abnormal movement. Therefore, transitions with low empirical frequency signal abnormal behavior. We measure this surprise via a negative log-likelihood transform because the negative log term penalizes the violat-
ion of highly probable transitions: when a transition with large expected probability P fails to occur, the term − ln(1 − P ) produces a high risk value. :
Rp
i,t(xi,t, yi,t) = − ln
(
1 − P ((xi,t, yi,t) → (xi,t+1, yi,t+1)))
. (1)
Here, P ((x, y) → (x′, y′)) is the empirical intention distribution estimated from historical trajectories. A high transition probability yields small risk, while rare transitions produce large penalties. A cutoff εp is applied to exclude
S. Liang et al.: Preprint submitted to Elsevier Page 6 of 13

Leveraging social media news
transitions whose empirical probability is negligibly small. Such low probabilities may arise from data sparsity or estimation noise in the historical trajectories and typically correspond to infrequently visited cells. Without filtering, these cells can accumulate small but persistent risk values over time during normal driving. Applying this cutoff, together with the periodic cell-level reset described earlier, prevents these residual risks from inflating the overall risk score and ensures numer-
ical stability.
2.3.2. Speed Deviation Risk
Freeway crashes often involve sudden speed drops. For each discretized state Si,t = (xi,t, yi,t, vi,t), we flag scenarios where the instantaneous speed vi,t falls below a reference speed vth:
Rs
i,t(xi,t, yi,t) =
⎧
⎪
⎨
⎪ ⎩
vth − vi,t
vth
, vi,t ≤ vth,
0, vi,t > vth.
(2)
2.3.3. Lateral Maneuver Risk
Frequent lane changes within a confined area can signal lane blockage caused by a crash or hazard. When a lane is temporarily occupied, vehicles often move laterally to adjacent lanes to bypass the obstruction and then return once the lane becomes clear. Hence, consecutive lane-change events detected at the same location over a short period indicate potential incident-related disturbances. We detect a lane-change event by comparing successive lane indices xi,t ≠ xi,t−1. and assign a risk score for-
 each occurrence:
Rl
i,t(xi,t, yi,t) = 1{xi,t ≠ xi,t−1}. (3)
The indicator 1{⋅} equals one when a vehicle moves laterally between lanes in one timestep. Cells where lane-change events occur repeatedly over consecutive timesteps accumulate higher risk, reflecting the likelihood of temporary blockage or crash-induced detours in that segment.
2.3.4. Total Risk Score
The risk components defined above represent vehicle-level quantities evaluated at each time step for the discretized state Si,t. To obtain a spatially aggregated measure over the discretized grid, each vehicle’s instantaneous risk is mapped to its corresponding spatial cell (xi,t, yi,t) ∈  and summed with those of all vehicles currently occupying that same cell. This aggregation produces a cell-level representation of abnormality that reflects collective traffic behavior:
̄Rm
t (x, y) =
∑
i∶ xi,t=x, yi,t=y
Rm
i,t(xi,t, yi,t), m ∈ {p, s, l}. (4)
Here, m indexes the three modules: position transition risk, speed deviation risk, and lateral maneuver risk. Cells with many vehicles exhibiting similar anomalies naturally accumulate larger cell-level risks, providing robustness against noise in individual trajectories. These aggregated cell-level risks are then combined to form the total instantaneous risk for each cell:
̄Rt(x, y) = wp ̄Rp
t (x, y) + ws ̄Rs
t (x, y) + wl ̄Rl
t (x, y), (5)
where the nonnegative coefficients (wp, ws, wl) are calibrated offline. To capture abnormal behavior that persists over time, we define the accumulated risk for each cell (x, y) by At(x, y), initialized with A0(x, y) = 0. The accumulated risk grows as long as anomalies continue to occur near that location. However, when a new trajectory passes through a cell, that cell is directly observed to be navigable, and thus temporarily hazard-free. To reflect this, a cell-level reset mechanism is introduce-
d:
At(x, y) = (1 − φt(x, y)) [At−1(x, y) + ̄Rt(x, y)], (6)
S. Liang et al.: Preprint submitted to Elsevier Page 7 of 13

Leveraging social media news
where φt(x, y) ∈ {0, 1} is a reset indicator equal to 1 iff there exists some vehicle i such that (xi,t, yi,t) = (x, y) at time t. When φt(x, y) = 1, the cell risk is cleared to zero because the region has been directly traversed and verified as safe. This prevents false escalation of long-term accumulated risk and maintains numerical stability. A lane-level crash alert is issued the first time
At(x, y) ≥ T ∗, (7)
where T ∗ is the crash threshold selected during offline calibration using historical crash reports. This additive and accumulative structure enables the system to fuse short-term anomalies and sustained abnormal behavior into a coherent spatiotemporal risk metric. Whenever the accumulated risk in any cell exceeds T ∗, the system immediately emits a crash alert and reports the cell (x, y) as the detected crash location. We summarized the whole methodology into the following algorithm 2.
3. Experiment
3.1. Dataset and Experimental Setup
The dataset used in this study spans the entire United States and covers two meteorologically distinct, continuous one-week periods: a summer week (August 4–10, 2024) and a winter week (January 9–15, 2024). The nationwide summer dataset alone contains approximately 11.4 terabytes of telematics data stored across 208,840 Parquet files, totaling about 1.1 × 1011 GPS observations sampled at 3-second intervals. To complement this large-scale data, the winter dataset adds an additional 215 gigabytes of-
 high-resolution telematics records covering the entire state of Wisconsin. This combination of nationwide coverage, fine-grained temporal sampling, and cross-seasonal variation provides a robust basis for evaluating real-time crash detection. The data span a wide range of roadway geometries, regional driving behaviors and traffic densities, allowing rigorous assessment of the system’s generalization and operational robustness. For this study, we restrict our analysis to vehicle trajectories locat-
ed within Wisconsin, as all crash reports originate from this region. To avoid confounding delays caused by signalized intersections, we further restrict our attention to crashes on freeway segments. Figure Figure 2 illustrates a representative crash case in Milwaukee during August 2024. The left figure shows the spatial location of the crash along the I-94 freeway segment. The right figure presents the corresponding time–space trajectories of vehicles approaching the crash site, with the crash oc-
curring at 06:43 on August 5, 2024. Vehicle trajectories are extracted within a fixed radius (approximately 200m) centered at the crash point, covering a 25-minute window before and after the incident. Each trajectory is color-coded by instantaneous speed. The evident slowdown and clustering of trajectories downstream clearly indicate the congestion induced by the crash. Based on the filtered trajectories obtained around the crash point, we further construct the vehicle intention distribution for -
this segment. The telematics data are exceptionally rich. Over the seven-day window, more than 360 000 trajectory points were recorded, with the majority concentrated in the main travel lanes (see Figure 3(d)). Figure 3(a) presents the daily distribution of GPS samples, and Figure 3(b) shows the hourly distribution on the crash day (August 5th). In addition, Figure 3(c) visualizes the statewide spatial density map of telematics points, highlighting highcoverage regions along major freeway corridor-
s. Together, these distributions demonstrate the dataset’s comprehensive temporal and spatial coverage necessary for robust crash detection.
3.2. Discretization and vehicle intention distribution Extraction
In the offline stage, following Section 2.2 and Algorithm 1, we first discretize the area surrounding the crash location as shown in Figure 4(a) and (b). In the spatial dimension we discretize laterally by lane and longitudinally using speed-dependent segments. For lateral segmentation, if OSM provides explicit lane-width tags, we use those values; otherwise we default to the U.S. freeway standard lane width of 3.7 m (Hancock and Wright, 2013). For longitudinal segmentation in this example, with a-
 posted speed limit of 75 mph (≈ 33.5 m/s), we use 10 m cells so that a vehicle travels roughly 10 cells between three-second samples. This rule-based design balances spatial resolution against the sparsity of three-second telemetry. Considering the noise of telematics data, moderate variations in lane width or segment length have minimal effect on detection performance. Next, we apply this process to the 360 000+ trajectory points collected over the seven-day period. After filtering by heading no-
rth degree from telematics data and snapping to the derived road centerline based on OSM road geometry, we isolate the crash-affected segment freeway. Using the vehicle intention distribution extraction method in Section 2.2, we count transitions from each source cell and normalize them to derive the vehicle intention distribution. Figure 4(c)
S. Liang et al.: Preprint submitted to Elsevier Page 8 of 13

Leveraging social media news
Algorithm 2 Crash Detection: Offline and Online Stages
Require: historical telematics dataset  = {S∗
i,t}, historical crash records, lane width w, lane count n, transition cutoff
εp, speed baseline vth(x, y), module weights (wp, ws, wl).
Offline Stage
1: Discretize all records S∗
i,t = (lati,t, loni,t, vi,t) into Si,t = (xi,t, yi,t, vi,t) via map-matching and longitudinal
segmentation. 2: Estimate empirical transition probabilities P ((x, y) → (x′, y′)) from non-crash portions of  . 3: Estimate normal speed baselines vth(x, y) for each cell.
4: Determine alert threshold T ∗ by maximizing validation F1-score based on official crash reports. 5: Calibrate risk module weights (wp, ws, wl).
Online Stage
6: Initialize accumulated risk R0(x, y) ← 0 for all (x, y) ∈ . 7: for each time step t = 1, 2, ... do 8: Receive telematics records {S∗
i,t = (lati,t, loni,t, vi,t) ∶ i ∈ t}.
9: Discretize each record to Si,t = (xi,t, yi,t, vi,t) and retrieve (xi,t−1, yi,t−1) if available. (Per-vehicle instantaneous risks at (xi,t, yi,t)) 10: for each vehicle i ∈ t do
11: Position-transition risk:
Rp
i,t(xi,t, yi,t) =
⎧
⎪
⎨
⎪ ⎩
− ln
(
1 − P ((xi,t−1, yi,t−1) → (xi,t, yi,t)))
, if P > εp,
0, otherwise.
12: Speed risk:
Rs
i,t(xi,t, yi,t) = max
(
0, vth(xi,t, yi,t) − vi,t
vth(xi,t, yi,t)
)
.
13: Lateral maneuver risk:
Rl
i,t(xi,t, yi,t) = 1{ xi,t ≠ xi,t−1 }.
14: end for
(Aggregate per-vehicle risks to cell level) 15: for each occupied cell (x, y) at time t do 16: ̄Rm
t (x, y) ←
∑
i∶ xi,t=x, yi,t=y
Rm
i,t(x, y) for m ∈ {p, s, l}
17: ̄Rt(x, y) ← wp ̄Rp
t (x, y) + ws ̄Rs
t (x, y) + wl ̄Rl
t (x, y) 18: end for
(Update accumulated risk map and detect crashes) 19: for each cell (x, y) ∈  do 20: φt(x, y) ← 1{∃ i ∶ xi,t = x, yi,t = y} ⊳ reset if any vehicle enters (x, y)
21: Rt(x, y) ← (1 − φt(x, y)) [ Rt−1(x, y) + ̄Rt(x, y) ]
22: if Rt(x, y) ≥ T ∗ then
23: EMITCRASHALERT((x, y), t) 24: end if 25: end for 26: end for
S. Liang et al.: Preprint submitted to Elsevier Page 9 of 13

Leveraging social media news
Table 1
Threshold vs. Precision, Recall and F1-Score
Threshold Precision Recall F1-score
0.000 0.186 1.000 0.313 16.084 0.619 1.000 0.765 18.076 0.600 0.923 0.727 20.442 0.632 0.923 0.750 23.142 0.667 0.923 0.774 26.410 0.706 0.923 0.800 28.182 0.750 0.923 0.828 30.000 0.800 0.923 0.857 39.008 0.750 0.692 0.720 60.000 0.727 0.615 0.667 62.300 0.889 0.615 0.727 90.000 0.875 0.538 0.667 120.000 1.000 0.538 0.700 150.000 1.000 0.462 0.632
highlights one source cell (red outline). The resulting spatial distribution shows the likelihood of transitions after three seconds, with darker blue indicating higher probability. Every cell in the discretized grid is equipped with this vehicle intention distribution. As part of the offline stage, we replay the algorithm 2 using telematics trajectories and official crash reports from the summer dataset (August 2024) to calibrate the alert threshold. Specifically, we sweep T across the range of o-
bserved accumulated risk scores and, for each candidate, compute precision, recall, and F1-score. Table 1 summarizes these results, showing that the maximum F1-score of 0.857 occurs at T = 30, which is adopted as the final alert threshold T ∗.
3.3. Online Risk Score Dynamics
In the online stage, each incoming telematics record S∗
i,t = (lati,t, loni,t, vi,t) is immediately converted into its
discretized state Si,t = (xi,t, yi,t, vi,t) using the lane-matching algorithm (Algorithm 1) together with longitudinal
segmentation. Once the spatial cell (xi,t, yi,t) is obtained, three complementary risk components Rp
i,t, Rs
i,t, and Rl
i,t are
computed at that cell. Because these components contribute differently to crash inference, we weight them with factors wp = 3, ws = 2, and wl = 4, respectively, reflecting the relative importance of abrupt lateral maneuvers (highest weight), unusual position transitions, and abnormal speed deviation. The instantaneous risk contributed by vehicle i at time t is therefore
Ri,t(xi,t, yi,t) = wp Rp
i,t(xi,t, yi,t) + ws Rs
i,t(xi,t, yi,t) + wl Rl
i,t(xi,t, yi,t).
These per-vehicle risks are aggregated across all vehicles occupying the same cell to obtain the cell-level risk ̄Rt(x, y), which is then accumulated through time via the risk map At(x, y). If a vehicle traverses cell (x, y) at time t, the reset indicator φt(x, y) = 1 clears the accumulated risk, indicating that the local hazard has been resolved.
Whenever any cell satisfies At(x, y) ≥ T ∗, the system immediately triggers a lane-level crash alert. Figure 5 illustrates the evolution of the lane-level risk map for the crash event discussed in the online stage. The first frame in this figure (06:36:08) shows normal traffic conditions with uniformly low risk levels. In the sequence of four frames of Figure 5 (06:45:29 to 06:45:53), the system begins to capture the disturbance once new telematics records become available. Because only a very sma-
ll number of vehicles passed the crash location between 06:43 and 06:45 due to data sparsity, the system could not observe any abnormal behavior during that window. When the density of observations increases at 06:45:29, likely due to the onset of congestion, the first visible signs of abnormal behavior appear, including simultaneous slowdowns and lane changes that are inconsistent with the offline intention distribution. These anomalies cause the risk to rise quickly, and by 06:45:41 the maximum -
score reaches 30.6 > T ∗=30, which triggers an alert approximately 1.2 minutes before the official report time. The final frame of Figure 5 (06:47:35) shows continued growth of the risk around the crash location, matching the evolution of the actual crash and refining the detected lane-level location over time.
S. Liang et al.: Preprint submitted to Elsevier Page 10 of 13

Leveraging social media news
Table 2
Confusion matrix of crash detection results
Actual Total Predicted Crash Non-crash
Crash 62 3 65 Non-crash 21 488 509
Total 83 491 574
3.4. Overall Performance
To further evaluate the system performance, we extend the online validation to include both the summer and winter datasets. The alert threshold T ∗ and component weights (wp, wl, ws), calibrated from the summer data, are applied directly to the winter dataset without retraining or parameter adjustment. As shown in Fig. 6(a), a portion of the crash cases can be detected earlier than the official report time, demonstrating that the system is capable of identifying emerging disturbances in advance wh-
en sufficient telematics observations are available. Table 2 summarizes the combined detection results across all evaluated cases. Out of 83 crash events, 62 are successfully detected, yielding a crash detection rate of 74.7%. Among 491 non-crash cases, only three false alarms occur, resulting in a precision of 95.4% and an overall F1 score of 0.84. The results are also shown in Fig. 6(b). It is worth noting that the missed crashes mainly correspond to minor incidents that produce no observable di-
sturbance in lane-level trajectories, such as vehicles pulling over, mechanical failures, or low-speed fender-benders occurring on the shoulder. For example, one undetected case in the crash reports describes a vehicle pulling onto the right shoulder and catching fire without affecting mainline traffic flow. Such events, although officially classified as crashes, do not materially influence lane-level behavior and therefore fall outside the scope of real-time traffic impact detection. Consequently-
, the proposed framework remains highly effective for safety-critical crashes that generate measurable be
4. Conclusion
This study introduces a novel real-time, lane-level crash detection framework that relies exclusively on sparse telematics data and road geometry from OSM. In the offline stage, we perform low-cost lane matching using a vector cross-product method and discretize vehicle trajectories into spatial cells to mitigate data sparsity. During the online stage, each incoming telematics record is evaluated for position transition anomalies, speed deviations, and abnormal lane-change maneuvers, and these ris-
k components are accumulated in a lane-specific map. When the accumulated risk in any cell surpasses the threshold determined offline via F1-score optimization, the system issues an immediate alert with precise lane-level localization, enabling timely warnings that can help prevent secondary collisions and reduces associated economic losses and casualties. To comprehensively validate the framework, we conducted experiments on combined summer (August 2024) and winter (January 2024) datasets coverin-
g freeway segments across Wisconsin. A total of 83 crash events and 491 noncrash control periods were analyzed. The proposed method successfully detected 62 crashes while producing only three false alarms, yielding a detection rate of 74.7%, a precision of 95.4%, an overall F1-score of 0.84, and an accuracy of 96.0%. Notably, 13% of the detected crashes were identified 3 minutes before the official report time. The missed cases were primarily minor incidents that caused no measurable disturbance i-
n lane-level trajectories, whereas all major lane-blocking crashes were accurately localized to the correct lanes. These results demonstrate that the framework generalizes well across seasons and maintains robust detection and localization performance under diverse traffic and environmental conditions. Future work will explore learning-based intention models that integrate kinematic structure and historical trajectory features. At present, parameters such as risk module weights are determined thro-
ugh empirical tuning, and learningbased methods could automatically optimize these quantities from data. As the dataset grows, threshold calibration may also be refined to account for peak and off-peak periods, roadway types, and regional driving patterns. With greater computational resources, the framework could further adapt its parameters in real time to improve detection speed and accuracy.
S. Liang et al.: Preprint submitted to Elsevier Page 11 of 13

Leveraging social media news
5. Acknowledgments
We gratefully acknowledge the support and guidance provided by the Center for Connected and Automated Transportation project “Evaluation of Vehicle Telematics and Infrastructure-based Connected Vehicle Data for RealTime Safety and Mobility Applicationin" in this work.
References
Dai, C., Zong, C., Zhang, D., Li, G., Chuyo, K., Zheng, H., Gao, F., 2023. Human-like lane-changing trajectory planning algorithm for humanmachine conflict mitigation. Journal of Intelligent and Connected Vehicles 6, 46–63. ElSahly, O., Abdelfatah, A., 2022. A systematic review of traffic incident detection algorithms. Sustainability 14, 14859. Federal Highway Administration, 2010. Traffic Incident Management (TIM) Performance Measurement Outreach Fact Sheet. Technical Report FHWA-HOP-10-010. U.S.-
 Department of Transportation, Federal Highway Administration. URL: https://ops.fhwa.dot.gov/ publications/fhwahop10010/appb.htm.
Gan, R., Shi, H., Li, P., Wu, K., An, B., You, J., Li, L., Ma, J., Ma, C., Ran, B., 2025. Goal-based neural physics vehicle trajectory prediction model. Transportation Research Part C: Emerging Technologies 179, 105283. Guo, Y., Zhou, J., Dong, Q., Bian, Y., Li, Z., Xiao, J., 2024. A lane-level localization method via the lateral displacement estimation model on expressway. Expert Systems with Applications 243, 122848. Hancock, M.W., Wright, B., 2013. A policy on geometric design of highways and s-
treets. American Association of State Highway and Transportation Officials: Washington, DC, USA 3, 20. Hansson, A., Korsberg, E., Maghsood, R., Nordén, E., et al., 2020. Lane-level map matching based on hmm. IEEE Transactions on Intelligent Vehicles 6, 430–439. Herfort, B., Lautenbach, S., Porto de Albuquerque, J., Anderson, J., Zipf, A., 2023. A spatio-temporal analysis investigating completeness and inequalities of global urban building data in openstreetmap. Nature Communications 14, 3985. Huan-
g, T., Wang, S., Sharma, A., 2020. Highway crash detection and risk estimation using deep learning. Accident Analysis & Prevention 135, 105392. Hussain, F., Li, Y., Haque, M.M., 2024. Integrating machine learning and extreme value theory for estimating crash frequency-by-severity via ai-based video analytics. Communications in Transportation Research 4, 100147. Insight, B., 2025. The Global Automotive OEM Telematics Market, 10th Edition. Technical Report. Berg Insight. Includes estimates that 79 p-
ercent of new cars sold globally in 2024 were equipped with embedded telematics and that the EU market is expected to reach full penetration by 2025. Kan, Z., Tang, L., Kwan, M.P., Ren, C., Liu, D., Li, Q., 2019. Traffic congestion analysis at the turn level using taxis’ gps trajectory data. Computers, Environment and Urban Systems 74, 229–243. Kandiboina, R., Ravichandra-Mouli, V., Basulto-Elias, G., Knickerbocker, S., Hawkins, N., Sharma, A., 2025. Real-time freeway crash detection framework usi-
ng connected vehicle waypoint data. Transportation Research Record 2679, 565–578. Kubin, L., Bianconcini, T., de Andrade, D.C., Simoncini, M., Taccari, L., Sambo, F., 2021. Deep crash detection from vehicular sensor data with multimodal self-supervision. IEEE Transactions on Intelligent Transportation Systems 23, 12480–12489. Lee, J., Chang, J.S., 2025. Physics-informed neural network model for predictive risk assessment and safety analysis. Transportation Research Record 2679, 675–700. Li, P., Ab-
del-Aty, M., 2022a. A hybrid machine learning model for predicting real-time secondary crash likelihood. Accident Analysis & Prevention 165, 106504. Li, P., Abdel-Aty, M., 2022b. Real-time crash likelihood prediction using temporal attention–based deep learning and trajectory fusion. Journal of transportation engineering, Part A: Systems 148, 04022043. Li, P., Abdel-Aty, M., Cai, Q., Yuan, C., 2020a. The application of novel connected vehicles emulated data on real-time crash potential prediction -
for arterials. Accident Analysis & Prevention 144. Li, P., Abdel-Aty, M., Yuan, J., 2020b. Real-time crash risk prediction on arterials based on lstm-cnn. Accident Analysis & Prevention 135, 105371. Lian, T., Loo, B.P., 2024. Cost of travel delays caused by traffic crashes. Communications in Transportation Research 4, 100124. Liang, S., Chen, W., Long, K., Zhang, P., Li, X., Ke, J., 2025. Theory foundation of physics-enhanced residual learning. arXiv preprint arXiv:2509.00348 . Pang, L.X., Chawla,-
 S., Liu, W., Zheng, Y., 2013. On detection of emerging anomalous traffic patterns using gps data. Data & Knowledge Engineering 87, 357–373. Powers, D.M., 2020. Evaluation: from precision, recall and f-measure to roc, informedness, markedness and correlation. arXiv preprint arXiv:2010.16061 . Qu, Q., Shen, Y., Yang, M., Zhang, R., 2024a. Towards efficient traffic crash detection based on macro and micro data fusion on expressways: A digital twin framework. IET Intelligent Transport Systems 18, 272-
5–2743. Qu, Q., Shen, Y., Yang, M., Zhang, R., Zhang, H., 2024b. Expressway traffic incident detection using a deep learning approach based on spatiotemporal features with multilevel fusion. Journal of Transportation Engineering, Part A: Systems 150, 04024020. Querfurth, L., Rehborn, H., Bernhardt, B., Guan, Y., Huang, W., Hoffmann, S., 2025. Crash localization and traffic impact assessment via spatiotemporal analysis of connected vehicle data. Accident Analysis & Prevention 214, 107956. Rabe, J.,-
 Meinke, M., Necker, M., Stiller, C., 2016. Lane-level map-matching based on optimization, in: 2016 IEEE 19th International Conference on Intelligent Transportation Systems (ITSC), IEEE. pp. 1155–1160. Rocky, A., Wu, Q.J., Zhang, W., 2024. Review of accident detection methods using dashcam videos for autonomous driving vehicles. IEEE Transactions on Intelligent Transportation Systems 25, 8356–8374.
S. Liang et al.: Preprint submitted to Elsevier Page 12 of 13

Leveraging social media news
Roy, S., Hasan, S., 2024. Advance real-time detection of traffic incidents in highways using vehicle trajectory data. arXiv preprint arXiv:2408.16773 .
Santos, K., Dias, J.P., Amado, C., 2022. A literature review of machine learning algorithms for crash injury severity prediction. Journal of safety research 80, 254–269. Sharma, H., Reddy, R.K., Karthik, A., 2016. S-carcrash: Real-time crash detection analysis and emergency alert using smartphone, in: 2016 International Conference on Connected Vehicles and Expo (ICCVE), IEEE. pp. 36–42. Shi, Y., Zhang, W., Qiao, C., Sadek, A.W., 2025. Leveraging high-resolution connected vehicle data for incident -
detection, management, and analysis: An exploratory study. Transportation Research Record , 03611981251346764. Yang, X., Tang, L., Stewart, K., Dong, Z., Zhang, X., Li, Q., 2018. Automatic change detection in lane-level road networks using gps trajectories. International Journal of Geographical Information Science 32, 601–621. Yuan, J., Abdel-Aty, M., Wang, L., Lee, J., Wang, X., Yu, R., 2018. Real-time crash risk analysis of urban arterials incorporating bluetooth, weather, and adaptive signal co-
ntrol data. arXiv preprint arXiv:1805.07826 . Zhang, Y., Liu, F., Yue, S., Li, Y., Dong, Q., 2023. Accident detection and flow prediction for connected and automated transport systems. Journal of Advanced Transportation 2023, 5041509. Zhu, W., Wu, J., Fu, T., Wang, J., Zhang, J., Shangguan, Q., 2021. Dynamic prediction of traffic incident duration on urban expressways: A deep learning approach based on lstm and mlp. Journal of intelligent and connected vehicles 4, 80–91.
S. Liang et al.: Preprint submitted to Elsevier Page 13 of 13

Leveraging social media news
Figure 2: Crash location and corresponding time-space diagram
Figure 3: Telematics data coverage and density for the freeway segment
S. Liang et al.: Preprint submitted to Elsevier Page 14 of 13

Leveraging social media news
Figure 4: Illustration of spatial–temporal discretization and vehicle intention distribution extraction.
S. Liang et al.: Preprint submitted to Elsevier Page 15 of 13

Leveraging social media news
Figure 5: Sequential lane-level risk map figuress with annotated maximum risk scores.
S. Liang et al.: Preprint submitted to Elsevier Page 16 of 13

Leveraging social media news
Figure 6: Detection performance evaluation.
S. Liang et al.: Preprint submitted to Elsevier Page 17 of 13

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:24.821Z
- **Text Length:** 54851 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 18 of 18
