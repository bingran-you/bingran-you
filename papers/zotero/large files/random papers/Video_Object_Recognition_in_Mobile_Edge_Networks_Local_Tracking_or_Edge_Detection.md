# PDF Document: Guo et al. - 2025 - Video Object Recognition in Mobile Edge Networks Local Tracking or Edge Detection.pdf

**File Path:** Guo et al. - 2025 - Video Object Recognition in Mobile Edge Networks Local Tracking or Edge Detection.pdf

**Processed Date:** 2026-02-10T18:18:00.217Z

**File Size:** 2918.17 KB

**Total Pages:** 12

**Extracted Pages:** 12

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3300

**Title:** Video Object Recognition in Mobile Edge Networks: Local Tracking or Edge Detection?

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

1
Video Object Recognition in Mobile Edge
Networks: Local Tracking or Edge Detection?
Kun Guo, Member, IEEE, Yun Shen, Xijun Wang, Member, IEEE, Chaoqun You, Member, IEEE, Yun Rui, Senior Member, IEEE, and Tony Q. S. Quek, Fellow, IEEE
Abstract—Fast and accurate video object recognition, which relies on frame-by-frame video analytics, remains a challenge for resource-constrained devices such as traffic cameras. Recent advances in mobile edge computing have made it possible to offload computation-intensive object detection to edge servers equipped with high-accuracy neural networks, while lightweight and fast object tracking algorithms run locally on devices. This hybrid approach offers a promising solution but introduces a new c-
hallenge: deciding when to perform edge detection versus local tracking. To address this, we formulate two longterm optimization problems for both single-device and multidevice scenarios, taking into account the temporal correlation of consecutive frames and the dynamic conditions of mobile edge networks. Based on the formulation, we propose the LTEDAda in single-device setting, a deep reinforcement learningbased algorithm that adaptively selects between local tracking and edge detection, accordin-
g to the frame rate as well as recognition accuracy and delay requirement. In multi-device setting, we further enhance LTED-Ada using federated learning to enable collaborative policy training across devices, thereby improving its generalization to unseen frame rates and performance requirements. Finally, we conduct extensive hardwarein-the-loop experiments using multiple Raspberry Pi 4B devices and a personal computer as the edge server, demonstrating the superiority of LTED-Ada.
Index Terms—Edge computing, object detection, object tracking, object recognition, video analytics
I. INTRODUCTION
The proliferation of camera deployments in domains such as urban safety and traffic flow monitoring has generated an unprecedented volume of video data [2]–[4]. To extract meaningful insights from these data, video object recognition, built upon object recognition across consecutive frames, has emerged as a critical technology [5]–[7]. There are primarily two types of object recognition technologies: object detection and object tracking. In object detection, a pre-trained neural network model is u-
sed to process video frames, offering high
A preliminary version of this paper has been accepted for presentation at IEEE/CIC ICCC 2025 [1]. K. Guo, Y. Shen, and Y. Rui are with the School of Communications and Electronics Engineering, East China Normal University, Shanghai 200241, China (e-mail: kguo@cee.ecnu.edu.cn, 52285904009@stu.ecnu.edu.cn, yrui@ce.ecnu.edu.cn) X. Wang is with the School of Electronics and Information Technology, Sun Yat-sen University, Guangzhou 510006, China (e-mail: wangxijun@mail.sysu.edu.cn) (Corresponding autho-
r: Xijun Wang.)
C. You is with the School of Computer Science, Fudan University, Shanghai 200438, China (e-mail: chaoqunyou@gmail.com) T. Q. S. Quek is with the Information Systems Technology and Design Pillar, Singapore University of Technology and Design, Singapore 487372 (e-mail: tonyquek@sutd.edu.sg).
recognition accuracy at the cost of increased latency and computational load. In contrast, object tracking leverages temporal redundancy between consecutive frames and is considered a promising solution for fast, low-latency object recognition. However, tracking-based methods may suffer from degraded accuracy over time or in the presence of rapid scene changes. To harness the complementary strengths of object detection and tracking, edge-assisted video object recognition has emerged as a promising-
 solution. In this paradigm, computation-intensive object detection is offloaded from the device to edge servers via mobile edge networks [8]–[10], while lightweight object tracking is performed locally on the device. To be more specific, edge detection is applied to keyframes that exhibit significant changes or rich visual content, whereas local tracking propagates object information from the most recent keyframe across intermediate frames. This brings forth a critical question: how to select the-
 keyframes for fast and accurate video object recognition? In other words, when should edge detection be triggered, and when is local tracking sufficient, with respect to the temporal correlation of consecutive frames and the dynamic conditions of mobile edge networks? To this end, we formulate two long-term optimization problems that account for the dynamic frame arrivals, network conditions, and queuing management. One is for the singledevice scenario, and the other for the multi-device scenario-
, with the achievable reward for each frame defined as a weighted sum of recognition accuracy, handling delay, and waiting delay. To solve the single-device problem, we propose a deep reinforcement learning (DRL)-based video object recognition algorithm named LTED-Ada, which intelligently selects between local tracking and edge detection, adapting to the frame rates as well as recognition accuracy and delay requirements. For the multi-device case, we incorporate federated learning into LTED-Ada, e-
nabling its generalization capability on unseen frame rates and performance requirements. Finally, we conduct extensive hardware-in-the-loop experiments to demonstrate the superiority of LTED-Ada. The main contributions of this paper are threefold and can be summarized as follows:
• Frame Rate Adaptation via Queue Awareness: We model the queuing systems on both the device and the edge server to account for varying frame rates. This enables precise delay calculation for each frame, regardless of whether it is processed with local tracking or offloaded for edge detection. By incorporating queue lengths as a part of the states in the DRL-based decision
arXiv:2511.20716v1 [cs.CV] 25 Nov 2025

2
making process, the proposed LTED-Ada dynamically adapts to different frame rates.
• Generalization Enhancement through Multi-Device Collaboration: To improve the generalization capability of LTED-Ada, we incorporate federated learning to enable collaborative policy learning across multiple devices. This allows the employed Deep Q-Network (DQN) model on each device to learn from a broader set of state-action pairs, enhancing its robustness to unseen frame rates and performance requirements.
• Hardware-in-the-Loop Experiments for Realistic Environment Validation: We conduct extensive experiments using multiple Raspberry Pi 4B devices and a personal computer (PC) serving as the edge server to emulate realistic mobile edge computing environments. Experimental results demonstrate that the LTED-Ada outperforms multiple baselines by effectively balancing recognition accuracy and delay across a wide range of frame rates and performance requirements.
The rest of this paper is organized as follows: In Section II, we summarize the related works. In Section III, we give the system model. In Sections IV and V, we formulate the long-term optimization problem and propose the LTED-Ada in single- and multi-device scenario, respectively. Experimental results are showcased in Section VI. Finally, we draw conclusions in Section VII.
II. RELATED WORKS
In this section, we review mainstream research in the field of video object recognition, which can be categorized into two groups based on frame rates. The first targets lightload scenarios, characterized by lower frame rates and no frame stacking. The second focuses on heavy-load scenarios, involving high frame rates and frame queuing.
A. Methods for Light-load Scenarios
The proposed approaches for dynamically selecting between edge detection and local tracking primarily fall into two categories: threshold-based methods and direct decision methods. In threshold-based methods, a frame is offloaded to the edge server for object detection when a predefined threshold is triggered; otherwise, it is processed locally via object tracking [11]–[14]. In contrast, direct decision methods cast the offloading decision as a binary variable within an optimization problem, which-
 is then solved to determine the decision [15], [16]. In the threshold-based category, Glimpse, a continuous, real-time object recognition system, proposed in [11], switched between neural network-based detection at the edge and optical flow-based tracking locally, based on a fixed pixel deviation threshold between the current frame and the most recent keyframe. More adaptive approaches have also been explored. For instance, [12] employed a lightweight neural network to perform local detection and-
 tracking, offloading frames with low-confidence objects or high inter-frame deviation to the edge, and incorporated periodic feedback from the edge server to adjust thresholds dynamically. [13]
introduced an online learning algorithm to adaptively tune the motion deviation threshold for triggering detection. [14] further enhanced adaptability by jointly tuning a cumulative deviation threshold and frame resolution using contextual multi-armed bandit learning to optimize recognition accuracy and processing rate. Direct decision methods, on the other hand, determine the offloading strategy by solving an optimization problem over a batch of arriving frames, without explicitly managing frame -
queuing. For instance, [15] addressed the offloading problem to multiple edge servers under minimum detection frequency constraints, aiming to maximize recognition accuracy while satisfying delay requirements. [16] proposed a link-adaptive scheme to jointly optimizes offloading decision and resolution selection. Fixed thresholds simplify decision-making, but lack the adaptability required to handle dynamic or changing scenes. Adaptive thresholding provides greater flexibility and responsiveness bu-
t still struggles in scenarios involving high frame rates and computational load. Direct decision methods benefit from global optimization over a short-term observation window, yet they often overlook inter-window dependencies, which become critical under continuous and dynamic frame arrivals. In summary, existing approaches face significant limitations under heavy-load scenarios, due to the absence of frame queue management.
B. Methods for Heavy-load Scenarios
In heavy-load scenarios, frame queuing becomes a critical factor in decision-making for object tracking and detection [17]–[19]. Similar to the light-load scenarios, the methods in the heavy-load scenarios can also be divided into thresholdbased methods and direct decision methods. For example, a tile-level “detect+track” framework with adaptive tracker configuration was proposed in [20], where tracking priorities are dynamically updated to give precedence to high-speed objects. For a more flexibl-
e tracking and detection switching, [21] adopted the DRL to dynamically adjust both the deviation threshold and the set of frames to be processed within each decision epoch. As a specialized approach, parallel detection and tracking has been developed to handle heavy-load conditions and is categorized into intra-frame and inter-frame parallelism. Using inter-frame parallelism, [22] developed a real-time system where detection and tracking operate concurrently across frames: while one frame undergo-
es detection, a lightweight tracker handles subsequent frames arriving during the detection interval. Intra-frame parallelism has been adopted by works such as [23] and [24]. In detail, [23] proposed an on-device system for high-resolution videos that performs tracking across most regions within a single frame, invoking detection only in areas where tracking is unreliable (e.g., due to insufficient feature points). [24] introduced a trackingaware patching strategy that identifies regions likely to-
 suffer from tracking failure and compacts them for detection. Naturally, intra-frame parallelism can be integrated into the interframe parallelism to enable faster video object recognition. A key limitation of these parallel strategies [22]–[24] is that they require both a detector and a tracker to be deployed

3
Fig. 1. An illustration of video object recognition in mobile edge networks.
simultaneously on the device, which imposes significant hardware and energy demands, limiting their suitability for resource-constrained environments. Meanwhile, although the DRL-based adaptive threshold approach in [21] demonstrates strong performance under high-load conditions, incorporating threshold selection into the decision space significantly expands the action set, resulting in high training complexity and learning overhead.
C. Summary and This Work
To enable efficient decision-making across both light- and heavy-load scenarios, we initiate our exploration in this paper. A preliminary version of this work has been accepted for presentation at IEEE/CIC ICCC 2025 [1], where we focused on algorithm design in a single-device setting. In this extended version, we further explore a more realistic multi-device environment, present a generalized system model, enhance the algorithm’s generalization capability, and provide additional experimental resul-
ts.
III. SYSTEM MODEL
In this section, we elaborate on the arrival and object recognition of video frames, successively. Further, the related metrics are defined to evaluate the recognition performance.
A. Frame Arrival
As shown in Fig. 1, we consider a mobile edge network, comprised of an access point connecting to an edge server and K camera devices. Each device is able to capture and store the video frames. For high-efficiency video object recognition, we consider that the device with weak computing capability is responsible for the object tracking and the edge server with powerful computing capability is deployed with a large neural network model for object detection. Always, the device can flexibly configure-
 frame rates to capture the video frame. The higher the frame rate is, the more smooth the video is but the higher the computational load is. Conversely, the lower the frame rate is, the less smooth the video is but the lower the computation load is. In this regard, the frame rate has a significant impact on the recognition performance.
Generally, we consider that a device k ∈ K ≜ {1, ..., K} captures a set of frames Fk = {1, ..., Fk} with frame rate 1/∆fk, which is in frames per second (FPS). Note that, Fk and ∆fk denote the number of frames and the capture interval between adjacent frames on device k. We assume that device k and edge server are equipped with First-in-First-out (FIFO) queues to store the video frames [18], [25], referred to as local queue Qk and edge queue Q0, respectively. Specifically, Qk on device k is used t-
o store its all frames waiting for object recognition and Q0 is used to store the frames from all devices for object detection. In this paper, we pay attention on the following two cases with the queue stability guaranteed:
• Light-load case: In this case, ∆fk is no smaller than the time for local tracking and that for edge detection in one frame. That is, there is no frames in queue Qk waiting for the object recognition on device k. • Heavy-load case: In this case, ∆fk is no smaller than the time for local tracking in one frame, but no larger than the time for edge detection in one frame. That is, queue Qk becomes loaded when some frames are processed with edge detection, and remains empty when all frames (except fo-
r the initial one) are processed with local tracking.
For a more smaller ∆fk, frames may be stacked in queue Qk, thereby breaking the queue stability. To deal with this case, it is inevitable to consider the admission control scheme, which is out of our scope [18], [26].
B. Object Recognition
It is observed from Fig. 1 that a general device k is equipped with a decision module to determine where to process the head frame in its buffer queue. Particularly, we introduce ak,f ∈ {0, 1} to indicate whether device k tracks the objects in frame f by itself (i.e., ak,f = 1) or detects the objects in frame f with the assistance of edge server (i.e., ak,f = 0). An illustration of object detection and tracking process is presented in Fig. 2 and described in the following.
1) Object Detection: The device sends the frame to edge server, which is deployed with a pre-trained neural network model (e.g., Faster R-CNN [27] and YOLO [28]) for object detection. After the edge server finishes object detection, the recognition results (e.g., object classes) and bounding boxes are obtained and returned back to the device. As shown in Fig. 2(b), there may be multiple bounding boxes after object detection in frame f of device k, whose set is expressed as BD
k,f = {1, ..., BD
k,f } and corresponding ground truth is denoted by the set BG
k,f = {1, ..., BG
k,f }. For any bounding box b ∈ BD
k,f , we can calculate the Intersection Over Union (IoU) between it and its ground truth b∗ ∈ BG
k,f as follows:
IoUb,b∗ = Overlap(b, b∗)
Union(b, b∗) , (1)
where Overlap(b, b∗) and Union(b, b∗) represent the overlapped area and the union area between boxes b and b∗.

4
Fig. 2. An illustration of object detection and tracking in frames.
Further, the mean IoU achieved by the object detection in frame f of device k, is written as:
mIoUD
k,f =
P
b∈BD
k,f
IoUb,b∗
BG
k,f
. (2)
Note that, we adopt the number of bounding boxes in ground truth set, i.e., BG
k,f , for the mean IoU, due to the fact that some objects maybe missed through the object detection. 2) Object Tracking: For convenience, we refer the detection frame to as the keyframe, which is used for object tracking in the subsequent frames. As shown in Fig. 2(c) and (d), the device firstly finds out the corner points from the detected bounding boxes of the previous keyframe, and then tracks these corner points in the current frame, using some typical methods (e.g., optical flow [29] and kern-
elized correlation filters [30]), to output the bounding boxes. Corner points are pixels with unique local structures in an image, usually locating at the intersections of image edges or at the locations with significant texture changes. These points exhibit good stability in image transformation and are therefore suitable for tracking [31]. Denote by BT
k,f = {1, ..., BT
k,f }
the set of bounding boxes from the object tracking in frame f of device k. After the object tracking, the mean IoU for the corresponding frame is thus calculated as
mIoUT
k,f =
P
b∈BT
k,f
IoUb,b∗
BG
k,f
. (3)
C. Recognition Metrics
To measure the performance of object recognition, we adopt the recognition accuracy, handling delay, and waiting delay as the metrics. The detailed definitions include several notations, which are summarized in Table I for convenience, and are given in the following.
1) Recognition Accuracy: The mean IoU in (2) and (3) are in the range of 0 to 1, and thus are used to measure the detection accuracy and tracking accuracy, respectively. With the consideration of decision action ak,f , we then define the recognition accuracy for frame f of device k, by
Ak,f = (1 − ak,f )mIoUD
k,f + ak,f mIoUT
k,f . (4)
2) Handling Delay: We define handling delay as the time required to process a frame directly, without any waiting. For frame f of device k, it is expressed as
Hk,f = (1 − ak,f )(dUT
k,f + dD
k,f + dDT
k,f ) + ak,f dT
k,f . (5)
TABLE I THE NOTATION DEFINITIONS FOR FRAME f OF DEVICE k.
Notations Definitions Ak,f Recognition accuracy mIoUD
k,f Mean IoU for object detection mIoUT
k,f Mean IoU for object tracking
Hk,f Handling delay dUT
k,f Uplink transmission delay dDT
k,f Downlink transmission delay dD
k,f Detection delay dT
k,f Tracking delay
Wk,f Waiting delay w0
k,f Waiting delay in queue Q0 τ0
k,f Arrival time in queue Q0 tD
k,f Detection completion time on edge server wk,f Waiting delay in queue Qk τk,f Arrival time in queue Qk tT
k,f Tracking completion time on device k Tk,f Completion time
Specifically, if local tracking is performed for the frame, the handling delay equals the tracking delay dT
k,f . Otherwise, edge detection is executed and the handling delay equals the sum of the detection delay dD
k,f and the communication delay, which includes the uplink transmission delay dUT
k,f for frame uploading and the downlink transmission delay dDT
k,f for the detection result downloading. 3) Waiting Delay: The frame is processed one by one and thus, the waiting delay for frame f of device k is given by
Wk,f = (1 − ak,f )(wk,f + w0
k,f ) + ak,f wk,f , (6)
where wk,f and w0
k,f are the waiting delay in queue Qk and Q0, respectively. That is, if the frame is processed with local tracking, it only experiences waiting in queue Qk and its waiting delay equals to wk,f ; otherwise, the frame goes through both queue Qk and Q0, and its waiting delay is a sum of wk,f and w0
k,f .
Picking the calculation of wk,f as an example, we show its dependencies on the arrival time of frame f in queue Qk, i.e., τk,f , and the completion time of its previous frame, i.e., Tk,f−1, as follows:
• If frame f is the first one in queue Qk, it can be directly processed without any waiting delay. • If frame f arrives in queue Qk before its previous frame is completed, its waiting delay is equal to Tk,f−1 − τk,f , otherwise, is zero.

5
On this basis, wk,f is expressed as:
wk,f =
(
0, f = 1,
max(0, Tk,f−1 − τk,f ), f = 2, . . . , F. (7)
In a similar way, for frame f of device k processed with edge detection, its waiting delay in queue Q0 is given by
w0
k,f =
(
0, if being the first frame,
max(0, tD
k′,f ′ − τ 0
k,f ), otherwise, (8) where τ 0
k,f is its arrival time in queue Q0 and tD
k′,f′ is the detection completion time of its previous frame, labeled as frame f ′ of device k′. In (7) and (8), τk,f is known and the other times, including Tk,f , τ 0
k,f , and τ D
k,f , depend on the detection and tracking decision. In detail, the completion time for frame f of device k is given by
Tk,f = (1 − ak,f )(tD
k,f + dDT
k,f ) + ak,f tT
k,f , (9)
where tT
k,f and tD
k,f are the tracking completion time on device k and detection completion time on edge server, respectively. Consequently, (9) means that if the frame is processed with local tracking, its completion time equals to its tracking completion time, otherwise, equal to a sum of the detection completion time and the downlink transmission delay of detection results. Moreover, since tracking relies on detection results, the first frame on each device must be processed using edge detection, after which sub-
sequent frames can be handled with local tracking. Hence, for frame f of device k, once it is processed with local tracking, its tT
k,f is written as:
tT
k,f = max(Tk,f−1, τk,f ) + dT
k,f , f = 2, ..., F, (10)
where the first term represents the tracking start time, defined as the later of the frame arrival time and the completion time of its previous frame, and dT
k,f denotes the tracking delay. Once the frame is processed with edge detection, its tD
k,f has the following recursive form:
tD
k,f =
(
τ0
k,f + dD
k,f , if being the first frame,
max(τ 0
k,f , tD
k′,f ′ ) + dD
k,f , otherwise, (11) which means that in queue Q0, only the first frame is processed immediately with edge detection without any waiting. For each subsequent frame, the detection start time is the later of its arrival time and the detection completion time of the previous frame. In (11), dD
k,f denotes the detection delay and the frame arrival time in queue Q0 is given by
τ0
k,f =
(
dUT
k,f , f = 1,
max(Tk,f−1, τk,f ) + dUT
k,f , f = 2, . . . , F, (12)
where dUT
k,f denotes the uplink transmission delay. For the first frame in queue Qk, its arrival time in queue Q0 is equal to its uplink transmission delay. For each subsequent frame, the uplink transmission starts at the later of its arrival time in queue Qk and the completion time of the previous frame. Its arrival time in queue Q0 is then the sum of the uplink transmission start time and the transmission delay.
IV. PROBLEM FORMULATION AND ALGORITHM DESIGN
IN SINGLE-DEVICE SCENARIO
In this section, we focus on a single-device scenario to emphasize the design of an objective recognition algorithm that adapts to varying frame rates and performance requirements. To this end, we first formulate a long-term optimization problem and then leverage the DRL to make judicious decisions on edge detection and local tracking.
A. Problem Formulation
To achieve a balance between the recognition accuracy and delay, we define the achievable reward after processing frame f of device k as follows:
Rk,f = Ak,f − αkHk,f − βkWk,f , (13)
where positive αk and βk are regarded as importance factors of the handling delay and waiting delay, respectively. The larger αk (or βk) is, the smaller the handling delay (or the waiting delay) is. Note that, we assign different importance factors to devices to reflect their distinct performance requirements. For instance, some devices may prioritize high recognition accuracy even at the expense of increased delay (e.g. detailed object classification), while others may emphasize low recognition d-
elay over high accuracy (e.g., real-time object avoidance). For a general device k, its achievable average reward can thus be maximized by optimizing the following problem:
(P0) max
ak,f
1 F
F
X
f =1
Rk,f
s.t. C1: ak,f ∈ {0, 1} , ∀f,
where Rk,f varies across frames, due to time-varying communication conditions and fluctuating computing capability in mobile edge networks, as well as dynamic changes in scene content. In addition, C1 means that frame f is either processed with local tracking (i.e., ak,f = 1) or edge detection (i.e., ak,f = 0). Problem (P0) falls in the category of long-term optimization problem, which can be addressed effectively with the DRL.
B. DRL-based Algorithm Design
We rewrite problem (P0) as a Markov decision process (MDP), comprised of state, action, and reward. Specifically, when processing frame f , device k as the agent first captures a state sk,f from the time-varying environment, then outputs an action ak,f based on the state, and finally attain a reward rk,f to guide the subsequent action decisions. The detailed definitions of sk,f , ak,f , and rk,f are given below.
• State: For frame f of device k, the state is defined as
sk,f = {ok,f , lk,f , vk,f } . (14)
Therein, ok,f represents the pixel deviation between frame f and its previous keyframe, described as:
ok,f =
n
ox
k,f , oy
k,f
o
, (15)

6
Algorithm 1 LTED-Ada in single-device scenario 1: Training phase:
2: For a general device k, initialize θk and θ−
k = θk; 3: for episode = 1, ..., E do 4: Observe state sk,1 and execute action ak,1 = 0; 5: for f = 2, ..., F do
6: Observe state sk,f and execute action ak,f as (20); 7: Obtain reward rk,f and next state sk,f+1; 8: Store transition (sk,f , ak,f , rk,f , sk,f+1) in replay memory Dk; 9: Every κ1 frames, randomly sample a mini-batch from replay memory Dk to update θk using the Adam optimizer1; 10: Every κ2 frames, update θ−
k = θk; 11: end for 12: end for
13: Output optimal θ∗
k; 14: Inference phase:
15: Observe state sk,f for any frame f and output ak,f =
arg maxak,f ∈{0,1} Q(sk,f , ak,f ; θ∗
k ).
where ox
k,f and oy
k,f are the average absolute offsets along the x-axis and y-axis, respectively, between the corner points in the detected bounding boxes of the keyframe and their corresponding points in frame f of device k. Besides, lk,f also includes two elements:
lk,f =
n
lFinv
k,f , lQlen
k,f
o
, (16)
which represent the interval between frame f of device k and its previous keyframe, as well as the current queue length in Qk excluding frame f of device k. Last but not least, vk,f is given by
vk,f = vU
k,f , vD
k,f , (17)
which refer to the average transmission rates for frame uploading and detected result downloading, respectively. • Action: The action taken by device k is to decide whether to perform local tracking on frame f or offload it for edge detection. In accordance with C1 in problem (P0), the action is defined as
ak,f ∈ {0, 1} . (18)
• Reward: With aligning with the objective function of problem (P0), the reward of device k is defined as
rk,f = Rk,f . (19)
Then, we adopt the classical Deep Q-Network (DQN) for algorithm design [32]. The proposed algorithm, LTED-Ada, short for Local Tracking and Edge Detection with Adaptation, adaptively selects between local tracking and edge detection, according to the frame rates and performance requirements. The complete LTED-Ada is summarized in Algorithm 1, which includes two phases: DQN training and inference.
1Note that, this step is triggered when the number of samples in replay memory Dk exceeds the mini-batch size. Once the replay memory Dk is full, newly generated sample is stored by randomly discarding an older sample.
Fig. 3. Schematic diagram of DQN training in the proposed LTED-Ada.
A sketch of the training phase is illustrated in Fig. 3, in which a DQN with model parameter θk is trained on device k to approximate the state-value function Q(sk,f , ak,f ; θk). Further, device k makes a decision for frame f following the ε-greedy policy:
a∗
k,f =



Random selection between 0 and 1, with prob. ε
arg max
ak,f ∈{0,1}
Q(sk,f , ak,f ; θk), with prob. 1 − ε.
(20) The other important point in the training phase is to update model parameter θk. To this end, a replay memory Dk is used to store samples from historical transitions. Specifically, a transition for frame f of device k is described as (sk,f , ak,f , rk,f , sk,f+1). Besides, a targe DQN with model parameter θ−
k is exploited to assist in θk update. In detail, the loss function used for θk update is defined as
Lk(θk) = E(s,a,r,s′)∈Dk
Qˆ(s, a) − Q(s, a; θk)
2
, (21)
where Qˆ(s, a) is given by
Qˆ(s, a) =



r, if terminal
r + γ max
a′ ∈{0,1}
Q(s′, a′; θ−
k ), if not terminal.
(22) For non-terminal states, Q(s′, a′; θ−
k ) is the output of target
DQN with state s′ and action a′, as well as, γ ∈ [0, 1) is a discount factor, which determines the significance of future reward relative to the immediate reward. If the current state is terminal (i.e., when f = F in Algorithm 1), Qˆ(s, a) is set to the immediate reward r without considering the future reward. The Adam optimizer is employed to update θk with a learning rate of η. In Algorithm 1, steps 2-13 outline the complete DQN training phase for the single-device scenario, which consists of E -
episodes. In each episode, F frames with labeled bounding boxes are used for the reward calculation and subsequently for the loss calculation in (21). It is noted that, frame 1, being the initial frame, must be processed with edge

7
detection (as specified in step 4). Furthermore, the model parameter θk is updated every κ1 frames (as described in step 9) and synchronized to the target DQN model θ−
k every κ2 frames (as described in step 10). Upon completion of the DQN training phase, the optimal model parameter θ∗
k is achieved and used during the inference phase. As described in step 15, device k first observes the state for the current frame, then leverages θ∗
k to compute Q-values for all possible actions, and finally selects the action with the highest Q-value.
V. ALGORITHM EXTENSION TO MULTI-DEVICE
SCENARIO
In the multi-device scenario, the LTED-Ada designed for the single device scenario (i.e., Algorithm 1) cannot be directly applied due to several limitations. First, the waiting delay in queue Q0 on the edge server becomes substantial when multiple devices simultaneously request edge detection. Second, as the device’s requirements dynamically evolve to accommodate varying task demands, such as switching from real-time object avoidance to detailed object classification, the limited generalization ca-
pability of Algorithm 1 restricts its ability to make judicious decisions between local tracking and edge detection. To overcome these challenges, we tailor LTED-Ada for a multi-device setting with evolving frame rates and performance requirements, aiming to maximize the sum of average rewards across all devices, as follows:
(P1) max
ak,f
1 F
K
X
k=1
F
X
f =1
Rk,f
s.t. C2: ak,f ∈ {0, 1} , ∀k, ∀f.
Problem (P1) shares the same properties as problem (P0). Therefore, we reformulate it as an MDP and then apply the DRL to solve it as well. In the multi-device scenario, the definitions of state, action, and reward for frame f of device k are given below:
• State: The state is defined as
sk,f = ok,f , l′
k,f , vk,f , (23)
with l′
k,f given by
l′
k,f =
n
lFinv
k,f , lQlen
k,f , l0,Qlen
k,f
o
, (24)
where lFinv
k,f and lQlen
k,f have the same definitions as that
in (16). Additionally, l0,Qlen
k,f is introduced to indicate the length of queue Q0 on the edge server, when device k starts to process frame f . • Action and reward: The action and reward are the same as that defined in single-device scenario, following (18) and (19), respectively.
Then, we enhance LTED-Ada by incorporating a federated DQN training phase alongside a distributed inference phase. The complete algorithm is summarized in Algorithm 2. During the training phase (steps 2-13), all devices train the same DQN model in parallel. For each device k, its DQN with model parameter θk is trained locally, with the assistance of a
Fig. 4. Federated training process in the proposed LETD-Ada.
Algorithm 2 LTED-Ada in multi-device scenario 1: Federated training phase:
2: Initialize and broadcast θglobal to all devices; 3: for all device k in parallel do 4: for episode = 1, ..., E do 5: Obtain state sk,1 and execute action ak,1 = 0; 6: for f = 2, ..., F do
7: Invoke steps 6-10 in Algorithm 1; 8: Every κ3 frames, device k uploads θk to the edge server to update θglobal as (25); 9: The edge server immediately broadcasts the updated θglobal, and device k sets θk = θglobal; 10: end for 11: end for 12: end for
13: Output optimal θ∗
global;
14: Distributed inference phase: 15: for all device k in parallel do 16: Obtain state sk,f for any frame f and output ak,f =
arg maxak,f ∈{0,1} Q(sk,f , ak,f ; θ∗
k) with θ∗
k = θ∗
global.
17: end for
target DQN with model parameter θ−
k in step 7. To enable θk to adapt to varying frame rates and performance requirements, a key point lies in steps 8-9, where θk is updated in a federated manner [33]. Particularly, every κ3 frames, device k uploads θk to the edge server for the global model update:
θglobal = 1
K
K
X
k=1
θk, (25)
which is then immediately distributed back to device k for sequential θk update. For clarity, the federated training process is illustrated in Fig. 4. This approach allows the global model θglobal to capture the knowledge learned from multiple devices, enhancing the generalization capability of local model θk at each device k. After the federated training phase terminates, the optimal global model θ∗
global is attained and used for the distributed inference. As described in steps 15-17, each device k updates its model parameter to θk = θ∗
global and
selects the action corresponding to the maximum Q-value.

8
Fig. 5. Experimental setup with three Raspberry Pi 4B devices and a PC as the edge server.
TABLE II CONFIGURATIONS OF THE PC AND RASPBERRY PI 4B.
Equipment PC Raspberry Pi 4B
OS 64-bit Windows 11 Debian 10 (buster)
CPU Intel® CoreTM i5-12400F Quad-core Cortex-A72
GPU GTX 1660 SUPER VideoCore VI GPU
Memory 64 GB DDR4 4 GB LPDDR4
VI. EXPERIMENTAL RESULTS
In this section, we evaluate the performance of LTEDAda in both single-device and multi-device scenarios through hardware-in-the-loop experiments. We first give the experimental setups, followed by extensive results and discussions.
A. Experimental Setups
To simulate a real mobile edge network, we use three Raspberry Pi 4B devices and a PC as the edge server, whose configurations are listed in Table II. All devices capture the same traffic video with 300 continuous frames [34] but with different capture intervals and diverse performance requirements on the recognition accuracy and delay. Each device is equipped with a decision modular to determine whether one frame is processed with edge detection or local tracking, using the proposed LTED-Ada. Mor-
eover, the device employs the Lucas-Kanade optical flow algorithm for local tracking [29], with a per-frame tracking delay of approximately 0.47 seconds. The PC performs edge detection using a Faster RCNN model with a ResNet-101 backbone [27], incurring a per-frame detection delay of around 1.38 seconds. Wireless communication between the device and PC is established via 5 GHz Wi-Fi at a rate of 88.5 Mbps, resulting in an uplink transmission delay of 0.07 seconds and a negligible downlink delay. F-
ig. 5 shows our experimental setup, where a frame detected on the PC is displayed on the left side of the monitor and a frame tracked on the device is displayed on the right side through a remote desktop control tool, Virtual Network Computing (VNC) viewer. Unless otherwise specified, the default parameter settings for our proposed LTED-Ada are summarized in Table III.
TABLE III ALGORITHM PARAMETER SETTINGS.
Parameter Value
Hidden layers in DQN 128 Discount factor γ 0.95 Replay memory size 10000 Mini-Batch size 64 κ1, κ2, κ3 2, 100, 300 ε0, εmin, εdecay 1, 0.001, 0.9999 η0, ηdecay 0.001, 0.1
In detail, the trained DQN consists of three fully connected layers, with a hidden layer of 128 neurons. During training, an ε-greedy policy is used for decision making. We initialize ε = ε0 and update it each iteration according to ε = ε∗εdecay. Once ε reaches εmin, it is set to ε = 0. Additionally, the learning rate is initialized as η = η0 and decayed every 10000 iterations by η = η0 ∗ ηdecay. For comparisons, we adopt the following baselines:
• Local tracking without detection (LTw/oD): Except for the first frame, all frames are processed at the device with local tracking; • Edge detection without tracking (EDw/oT): All frames are offloaded to the edge server for object detection; • Local tracking and edge detection with fixed inter-frame interval (LTED-IntV): The frame is offloaded to the edge server for object detection with fixed inter-frame interval set to 15. During the interval, the arriving frames are processed at the device wit-
h local tracking; • Local tracking and edge detection with fixed pixel deviation (LTED-DeV): Edge detection is performed for a frame when the pixel deviation between it and its previous keyframe is greater than a predefined threshold set to 10, otherwise local tracking is performed for this frame [11]; • Random local tracking and edge detection (LTED-Rand): For a frame, local tracking or edge detection occurs, each with a probability of 0.5; • Parallel local tracking and edge detection (LTED-Paral-
): When a frame is processed with edge detection, the frames arriving during the detection of the last keyframe are processed concurrently with local tracking [22]; • Individual DQN based local tracking and edge detection (LTED-Indiv): Each device trains its own DQN to make object recognition decisions on its frames, without collaboration among devices.
We make comparisons with the consideration of different frame rates (determined by ∆fk) and performance requirements (characterized by αk and βk). By adjusting (∆fk, αk, βk), we can get manifold combinations of load mode and performance requirement for device k. Note that, we use symbol ’/’ in the light-load mode, which can not only represent all possible ∆fk making the waiting frames in queue Qk empty, but also represent arbitrary βk due to the zero waiting delay.

9
0 250 500 750 1000 Number of episodes
-15000
-10000
-5000
0
Average total reward
Light Load (/, 0.5, /) Heavy Load (0.5, 0.5, 1) Heavy Load (0.7, 0.5, 1) Heavy Load (0.7, 0.5, 0.5)
Fig. 6. Convergence of the LTED-Ada in single-device scenario.
(/,0.5,/) (0.5,0.5,1) (0.7,0.5,1) (0.7,0.5,0.5) Parameter configurations of ( fk, k, k)
100
0
100
200
300
Values
Total recognition accuracy Total handling delay (s) Total waiting delay (s) Total rewards
Fig. 7. Performance comparisons of the LTED-Ada with different load modes and performance requirements, in single-device scenario.
B. Performance of the Proposed Algorithm
In this subsection, we evaluate the convergence behavior and inference performance of the LTED-Ada in both singledevice and multi-device scenarios.
1) Single-Device Scenario: Fig. 6 shows the convergence of the proposed LTED-Ada, with (∆fk, αk, βk) set as (/, 0.5, /), (0.5, 0.5, 1), (0.7, 0.5, 1), and (0.7, 0.5, 0.5), respectively. We observe that the LTED-Ada faster converges to higher average total reward in light-load mode, due to the absence of complex queueing at the device. When the computational load is heavier (i.e., ∆fk is smaller), the LTED-Ada converges more slowly to a lower average total reward. This is likely because more frames-
 accumulate in the queue, leading to increased waiting delays, or more frames are processed using local tracking, which significantly reduces recognition accuracy. Additionally, as βk increases, the penalty for waiting delay becomes more severe, further hindering convergence and lowering the overall reward. Fig. 7 shows the performance of the proposed LTED-Ada, under different (∆fk, αk, βk) settings. In the light-load mode with (/, 0.5, /), the total recognition accuracy, handling delay, and rewar-
d are greater than that in the heavy-load mode with
0 50 100 150 200 250 300 Frame index
0
20
40
60
80
Number of frames for edge detection
Light Load (/, 0.5, /) Heavy Load (0.5, 0.5, 1) Heavy Load (0.7, 0.5, 1) Heavy Load (0.7, 0.5, 0.5)
Fig. 8. Decision results of the LTED-Ada with different load modes and performance requirements, in single-device scenario.
(0.5, 0.5, 1), (0.7, 0.5, 1), and (0.7, 0.5, 0.5). This is because, the LTED-Ada has zero waiting delay in the light-load mode, which gives a chance for more frames to be processed with edge detection. Through the comparisons in the heavy-load mode, it is confirmed that with smaller ∆fk, more frames are stacked on the device during the edge detection of one frame. Hence, to avoid exorbitant waiting delay, more frames are selected to be processed with local tracking, along with reduced recognition -
accuracy, handling delay, waiting delay, and reward. In addition, when βk becomes larger, the waiting delay will be reduced by tracking more frames. Even though, the impact of waiting delay on the reward is still significant, thereby resulting in worse reward. The underlying trends observed in Fig. 7 can be further explained by Fig. 8, which presents the decision results of the LTED-Ada with different load modes and performance requirements. In the light load scenario with (/, 0.5, /), the number -
of frames processed by edge detection is the highest, and the interval between two detection frames is the shortest. As ∆fk decreases, the detection intervals become larger, and fewer frames are processed with edge detection. An extreme case occurs under heavy load with (0.5, 0.5, 1), where all frames are processed using local tracking to reduce recognition delay at the expense of accuracy. 2) Multi-Device Scenario: In the multi-device scenario, we consider three devices with distinct load modes a-
nd performance requirements. As illustrated in Fig. 9, device 1 is configured with (/, 0.5, 0.5), device 2 with (0.7, 0.5, 0.5), and device 3 with (0.7, 0.5, 1) in the training phase. It can be seen that, the convergence performance of LTED-Ada in the multi-device setting closely aligned with that observed in the single-device case. Notably, device 1, operating under a lightload mode, quickly achieves the highest average total reward. In contrast, device 3, which imposes the strictest penalty on w-
aiting delay, exhibits the lowest total reward. During the inference phase, we consider 300 frames with varying frame rates and performance requirements. Specifically, the first 100 frames are set with (/, 0.5, 0.5), the middle 100 frames with (0.7, 0.5, 0.5), and the final 100 frames with

10
0 250 500 750 1000 Number of episodes
-45000
-30000
-15000
0
Average total reward
Device 1 (/, 0.5, 0.5) Device 2 (0.7, 0.5, 0.5) Device 3 (0.7, 0.5, 1)
Fig. 9. Convergence of the LTED-Ada in multi-device scenario.
Device 1 (/,0.5,0.5) Device 2 (0.7,0.5,0.5) Device 3 (0.7,0.5,1) Devices with distinct parameter configurations of ( fk, k, k)
50
0
50
100
150
200
250
Values
Total recognition accuracy Total handling delay (s) Total waiting delay (s) Total rewards
Fig. 10. Performance comparisons among 3 devices using the LTED-Ada.
(0.7, 0.5, 1). In Fig. 10, we observe that device 1 achieves the highest total reward while device 3 achieves the lowest total reward. Notably, the total accuracy and total rewards are lower compared to the single-device results in Fig. 7, under the same parameter settings. This is because, the increase in the number of devices leads to a heavier load on the edge server. To reduce the waiting delay caused by the edge queuing, each device chooses to decrease the frequency of edge detection.
C. Performance Comparisons with Single Device
In this subsection, we select appropriate baselines for comparison with our proposed LTED-Ada in single-device scenario under both light- and heavy-load modes. It is important to note that we specifically compare the baseline LTEDParal with LTED-Ada in the heavy-load mode and exclude comparisons in the light-load mode, due to LTED-Paral’s consideration of the waiting queue on the device. Fig. 11 shows the comparisons under light-load mode, with parameter (∆fk, αk, βk) set as (/, 0.5, /). As expect-
ed, the LTED-Ada achieves the highest total reward. In comparison to EDw/oT and LTw/oD, LTED-Ada outperforms both due to its flexible selection between local tracking and edge
LTED-Ada EDw/oT LTw/oD LTED-IntV LTED-Rand LTED-DeV Algorithms
−100
0
100
200
300
400
500
Values
Total recognition accuracy Total handling delay (s) Total rewards
Fig. 11. Performance comparisons in single-device and light-load scenario, with (∆fk, αk, βk) = (/, 0.5, /).
LTED-Ada (0.5,0.5,1)
LTED-Ada (0.7,0.5,1)
LTED-Paral (0.5,0.5,1)
LTED-Paral (0.7,0.5,1) Parameter configurations of ( fk, k, k)
100
0
100
200
300
Values
Total recognition accuracy Total handling delay (s) Total waiting delay (s) Total rewards
Fig. 12. Performance comparisons in single-device and heavy-load scenarios, with (∆fk, αk, βk) set as (0.5, 0.5, 1) and (0.7, 0.5, 1).
detection. For the EDw/oT, it achieves the highest recognition accuracy, but results in a remarkable increase in handling delay. In contrast, LTw/oD exhibits the lowest handling delay, but significantly sacrifices recognition accuracy. Furthermore, the LTED-Ada can flexibly adjust the inter-frame interval for edge detection, giving it an advantage over the LTEDIntV and LTED-Dev. Finally, when compared with the LTEDRand, the LTED-Ada performs better overall. The LTEDRand, due to its suboptimal prob-
ability setting, processes more frames with edge detection, leading to improved recognition accuracy but deteriorated delay and even reward. In Fig. 12, we compare the LTED-Ada with LTEDParal, where two heavy-load scenarios are considered with (∆fk, αk, βk) set to (0.5, 0.5, 1) and (0.7, 0.5, 1), respectively. In the LTED-Paral, the number of frames processed via local tracking is determined by ∆fk. As ∆fk decreases (i.e., the load increases), more frames accumulate in the local queue and are proc-
essed locally, resulting in a slight improvement in total reward at the cost of reduced recognition accuracy. This marginal gain highlights the limited adaptability of LTED-Paral to load variation. In contrast, the proposed

11
LTEDAda
EDw/oT LTw/oD LTEDIntV
LTEDRand
LTEDDeV
LTEDParal Algorithms
−400
0
400
800
1200
1600
Values
Total recognition accuracy Total handling delay (s) Total waiting delay (s) Total rewards
Fig. 13. Performance comparisons of different algorithms with 3 devices, where (∆fk, αk, βk) are set as (/, 0.5, 0.5), (0.7, 0.5, 0.5), and (0.7, 0.5, 1), respectively, during the training phase.
LTEDAda
LTEDIndiv
Device 1 (/,0.5,0.5)
Device 2 (0.7,0.5,0.5)
Device 3 (0.7,0.5,1) Algorithms
100
0
100
200
300
400
500
Values
Total recognition accuracy Total handling delay (s) Total waiting delay (s) Total rewards
Fig. 14. Performance comparisons between the LTED-Ada and LTED-Indiv with 3 devices, where (∆fk, αk, βk) are set as (/, 0.5, 0.5), (0.7, 0.5, 0.5), and (0.7, 0.5, 1), respectively, during the training phase.
LTED-Ada responds to heavier loads by adaptively increasing the use of local tracking, significantly boosting total reward compared to the LTED-Paral.
D. Performance Comparisons with Multiple Devices
Considering multiple devices, we compare the proposed LTED-Ada with all baseline algorithms previously used in single-device scenario. Additionally, to highlight the benefits of collaborative learning, we compare the LTED-Ada with LTED-Indiv, which trains DQN models independently for each device. During both the training and inference phases, all devices are configured using the same parameters as described in Section VI-B. As shown in Fig. 13, the LTED-Ada achieves the highest reward by effective-
ly balancing the recognition accuracy and delay. Note that, the EDw/oT, LTED-Rand, and LTED-DeV tend to process more frames using edge detection, leading to excessively high waiting delays and low rewards. To maintain clarity in the illustration, the results of these three
0 50 100 150 200 250 300 Frame index
0
20
40
60
80
Number of frames for edge detection
Device 1 (/,0.5,0.5) with LTED-Ada Device 2 (0.7,0.5,0.5) with LTED-Ada Device 3 (0.7,0.5,1) with LTED-Ada Device 1 (/,0.5,0.5) with LTED-Indiv Device 2 (0.7,0.5,0.5) with LTED-Indiv Device 3 (0.7,0.5,1) with LTED-Indiv
Fig. 15. Decision results of the LTED-Ada and LTED-Indiv, with varying frame rates and performance requirements in multi-device scenario.
schemes on the these two metrics are omitted. Compared to the LTw/oD, the LTED-Ada offers the flexibility to offload certain frames for edge detection, enhancing recognition accuracy and reward. Furthermore, the LTED-Ada processes more frames using local tracking than the LTED-IntV and LTED-Paral. Hence, it significantly reduces the recognition delay, particularly the waiting delay, while maintaining an acceptable level of recognition accuracy, ultimately leading to a higher overall reward. We fur-
ther compare the LTED-Ada with LTED-Indiv in Fig. 14, along with the individual performance of the three devices under LTED-Indiv. For comparison, the individual performance of the three devices under LTED-Ada is shown in Fig. 10. By analyzing these two figures, we observe that the LTED-Ada achieves a higher total reward than LTEDIndiv overall. However, it does not consistently outperform the LTED-Indiv in terms of individual device rewards. For example, devices 1 and 2 achieve higher rewards with-
 the LTED-Ada, while device 3 performs worse. This discrepancy is expected due to the averaging effect inherent in federated learning during the training phase of LTED-Ada. To further illustrate the generalization capability of LTEDAda, we present the decision results of both LTED-Ada and LTED-Indiv in Fig. 15. During the inference phase, each device processes 300 frames arriving with varying frame rates and performance requirements. Specifically, the first 100 frames are configured with (/, 0.5, -
0.5), the middle 100 with (0.7, 0.5, 0.5), and the final 100 with (0.7, 0.5, 1). Using LTED-Indiv as the baseline, we observe that device 1 significantly reduces the number of frames selected for edge detection in the last 200 frames under LTED-Ada, indicating an improved adaptability to heavier load due to knowledge shared from other devices. Device 2 increases the number of frames offloaded for edge detection in the first 100 frames and reduces it in the last 100 frames. Device 3 also selects mo-
re frames for edge detection in the first 200 frames than in the last 100. These results confirm that the LTED-Ada, through collaborative training among devices, better adapts to varying frame rates and performance requirements than LTED-Indiv.

12
VII. CONCLUSIONS
Considering the temporal correlation of consecutive frames and the dynamic conditions of mobile edge networks, we have proposed the LTED-Ada, a DRL-based video object recognition algorithm running on resource-constrained devices. The LTED-Ada intelligently selects between local tracking and edge detection, adapting to varying frame rates and performance requirements. Extensive hardware-in-the-loop experimental results have demonstrated that the proposed LTEDAda outperforms multiple baselines in bo-
th single-device and multi-device scenarios, maximizing the total reward by effectively balancing recognition accuracy, handling delay, and waiting delay.
REFERENCES
[1] Y. Shen, K. Guo, X. Wang, R. Gao, and Y. Rui, “Adaptive object tracking and detection for video recognition in mobile edge networks,” in Proc. IEEE/CIC ICCC, Shanghai, China, Aug. 2025, pp. 1–6. [2] Y. Yan, S. Zhang, X. Wang, N. Chen, Y. Chen, Y. Liang, M. Xiao, and S. Lu, “VisFlow: Adaptive content-aware video analytics on collaborative cameras,” in Proc. IEEE INFOCOM, May 2024, pp. 2019–2028. [3] C. Rong, J. H. Wang, J. Liu, J. Wang, F. Li, and X. Huang, “Scheduling massive camera streams to-
 optimize large-scale live video analytics,” IEEE/ACM Trans. Netw., vol. 30, no. 2, pp. 867–880, 2022. [4] Y. Nan, S. Jiang, and M. Li, “Large-scale video analytics with cloud-edge collaborative continuous learning,” ACM Trans. Sen. Netw., vol. 20, no. 1, Article 14, 23 pages, Oct. 2023. [5] R. Xu, S. Razavi, and R. Zheng, “Edge video analytics: A survey on applications, systems and enabling techniques,” IEEE Commun. Surv. Tutor., vol. 25, no. 4, pp. 2951–2982, 2023. [6] G. Ciaparrone, F. Luque Sá-
nchez, S. Tabik, L. Troiano, R. Tagliaferri, and F. Herrera, “Deep learning in video multi-object tracking: A survey,” Neurocomput., vol. 381, no. C, pp. 61–88, Mar. 2020. [7] H. Liu and G. Cao, “Deep learning video analytics through online learning based edge computing,” IEEE Trans. Wireless Commun., vol. 21, no. 10, pp. 8193–8204, 2022. [8] J. Shao, X. Zhang, and J. Zhang, “Task-oriented communication for edge video analytics,” IEEE Trans. Wireless Commun., vol. 23, no. 5, pp. 4141–4154, 2024. [-
9] T. Murad, A. Nguyen, and Z. Yan, “Dao: Dynamic adaptive offloading for video analytics,” in Proc. ACM MM, Lisboa, Portugal, Oct. 2022, pp. 3017–3025. [10] K. Guo, R. Gao, W. Xia, and T. Q. S. Quek, “Online learning based computation offloading in MEC systems with communication and computation dynamics,” IEEE Trans. Commun., vol. 69, no. 2, pp. 1147–1162, Nov. 2021. [11] T. Y.-H. Chen, H. Balakrishnan, L. Ravindranath, and P. Bahl, “Glimpse: Continuous, real-time object recognition on mobile dev-
ices,” ACM GetMobile, vol. 20, no. 1, pp. 26–29, Nov. 2016. [12] Z. Wang, X. He, Z. Zhang, Y. Zhang, Z. Cao, W. Cheng, W. Wang, and Y. Cui, “Edge-assisted real-time video analytics with spatial–temporal redundancy suppression,” IEEE Internet Things J., vol. 10, no. 7, pp. 6324–6335, Dec. 2023. [13] M. Hanyao, Y. Jin, Z. Qian, S. Zhang, and S. Lu, “Edge-assisted online on-device object detection for real-time video analytics,” in Proc. IEEE INFOCOM, Vancouver, BC, Canada, May. 2021, pp. 1–10. [14] -
P. Dai, Y. Chao, X. Wu, K. Liu, and S. Guo, “Context-aware offloading for edge-assisted on-device video analytics through online learning approach,” IEEE Trans. Mob. Comput., vol. 23, no. 12, pp. 12 76112 777, 2024. [15] Y. Liang, S. Zhang, and J. Wu, “Online optimization of offloading video analytics tasks to multiple edges for accuracy maximization,” in Proc. IEEE ICASSP, Hyderabad, India, Apr. 2025, pp. 1–5. [16] R. Cong, Z. Zhao, L. Zhang, and G. Min, “Kite: link-adaptive and realtime object d-
etection in dynamic edge networks,” IEEE Trans. Mob. Comput., vol. 23, no. 12, pp. 15 224–15 237, 2024. [17] A. Khochare, A. Krishnan, and Y. Simmhan, “A scalable platform for distributed object tracking across a many-camera network,” IEEE Trans. Parallel Distrib. Syst., vol. 32, no. 6, pp. 1479–1493, 2021.
[18] K. Guo, H. Yang, P. Yang, W. Feng, and T. Q. S. Quek, “Matching while learning: Wireless scheduling for age of information optimization at the edge,” China Commun., vol. 20, no. 3, pp. 347–360, 2023. [19] K. Guo and T. Q. S. Quek, “On the asynchrony of computation offloading in multi-user MEC systems,” IEEE Trans. Commun., vol. 68, no. 12, pp. 7746–7761, Sep. 2020. [20] Z. Yang, X. Wang, J. Wu, Y. Zhao, Q. Ma, X. Miao, L. Zhang, and Z. Zhou, “Edgeduet: Tiling small object detection for edge a-
ssisted autonomous mobile vision,” IEEE/ACM Trans. Netw., vol. 31, no. 4, pp. 1765–1778, Dec. 2022. [21] Y. Wang, Z. Liu, Y. Zhao, X. Wang, and C. Qiu, “Enabling real-time video analytics with adaptive sampling and detection-based tracking in edge computing,” in Proc. IEEE GLOBECOM, Kuala Lumpur, Malaysia, Dec. 2023, pp. 3554–3559. [22] M. Liu, X. Ding, and W. Du, “Continuous, real-time object detection on mobile devices without offloading,” in Proc. IEEE ICDCS, Singapore, Singapore, Nov. 2020, pp-
. 976–986. [23] Z. Cao, Y. Cheng, Y. Hu, A. Lu, J. Liu, and Z. Li, “Using physical dynamics: Accurate and real-time object detection for high-resolution video streaming on internet of things devices,” IEEE Internet Things J., vol. 11, no. 12, pp. 22 494–22 507, Apr. 2024. [24] K. Yang, J. Yi, K. Lee, and Y. Lee, “Flexpatch: Fast and accurate object detection for on-device high-resolution live video analytics,” in Proc. IEEE INFOCOM, London, United Kingdom, May. 2022, pp. 18981907. [25] K. Guo, M. -
Sheng, J. Tang, T. Q. S. Quek, and Z. Qiu, “Exploiting hybrid clustering and computation provisioning for green C-RAN,” IEEE J. Sel. Areas Commun., vol. 34, no. 12, pp. 4063–4076, Dec. 2016. [26] Y. Li, T. Jiang, M. Sheng, and Y. Zhu, “QoS-aware admission control and resource allocation in underlay device-to-device spectrum-sharing networks,” IEEE J. Sel. Areas Commun., vol. 34, no. 11, pp. 28742886, Nov. 2016. [27] S. Ren, K. He, R. Girshick, and J. Sun, “Faster R-CNN: Towards real-time object de-
tection with region proposal networks,” IEEE Trans. Pattern Anal. Mach. Intell., vol. 39, no. 6, pp. 1137–1149, Jun. 2016. [28] J. Redmon, S. Divvala, R. Girshick, and A. Farhadi, “You only look once: Unified, real-time object detection,” in IEEE CVPR, Las Vegas, NV, USA, Jun. 2016, pp. 779–788. [29] B. D. Lucas and T. Kanade, “An iterative image registration technique with an application to stereo vision,” in Proc. IJCAI, vol. 2, Vancouver, Canada, Aug. 1981, pp. 674–679. [30] J. F. Henriques, R.-
 Caseiro, P. Martins, and J. Batista, “High-speed tracking with kernelized correlation filters,” IEEE Trans. Pattern Anal. Mach. Intell., vol. 37, no. 3, pp. 583–596, Mar. 2015. [31] C. Harris, M. Stephens et al., “A combined corner and edge detector,” in Proc. Alvey vision conference, vol. 15, no. 50. Manchester, UK: Citeseer, Aug. 1988, pp. 147–151. [32] V. Mnih, K. Kavukcuoglu, D. Silver, A. Graves, I. Antonoglou, D. Wierstra, and M. A. Riedmiller, “Playing Atari with deep reinforcement learnin-
g,” CoRR, vol. abs/1312.5602, Aug. 2013. [33] K. Guo, Z. Chen, H. H. Yang, and T. Q. S. Quek, “Dynamic scheduling for heterogeneous federated learning in private 5G edge networks,” IEEE J. Sel. Topics Signal Process., vol. 16, no. 1, pp. 26–40, 2022. [34] K. Du, A. Pervaiz, X. Yuan, A. Chowdhery, Q. Zhang, H. Hoffmann, and J. Jiang, “Server-driven video streaming for deep learning inference,” in Proc. ACM SIGCOMM, New York, NY, USA, Jul. 2020, pp. 557–570.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:00.217Z
- **Text Length:** 59495 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 12 of 12
