# PDF Document: Sebastian et al. - 2017 - Temporal correlation detection using computational phase-change memory.pdf

**File Path:** Sebastian et al. - 2017 - Temporal correlation detection using computational phase-change memory.pdf

**Processed Date:** 2026-02-10T18:15:46.970Z

**File Size:** 3852.53 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2734

**Title:** Temporal correlation detection using computational phase-change memory

**Collection:** Large Files

---

## Extracted Text Content

Temporal correlation detection using computational phase-change memory
Abu Sebastian,1, a) Tomas Tuma,1 Nikolaos Papandreou,1 Manuel Le Gallo,1 Lukas Kull,1 Thomas Parnell,1 and Evangelos Eleftheriou1
IBM Research – Zurich, S ̈aumerstrasse 4, 8803 R ̈uschlikon, Switzerland.
For decades, conventional computers based on the von Neumann architecture have performed computation by repeatedly transferring data between their processing and their memory units, which are physically separated. As computation becomes increasingly data-centric and as the scalability limits in terms of performance and power are being reached, alternative computing paradigms are searched for in which computation and storage are collocated. A fascinating new approach is that of computational memory-
 where the physics of nanoscale memory devices are used to perform certain computational tasks within the memory unit in a non-von Neumann manner. Here we present a large-scale experimental demonstration using one million phase-change memory devices organized to perform a high-level computational primitive by exploiting the crystallization dynamics. Also presented is an application of such a computational memory to process real-world data-sets. The results show that this co-existence of computatio-
n and storage at the nanometer scale could be the enabler for new, ultra-dense, low power, and massively parallel computing systems.
In today’s computing systems based on the conventional von Neumann architecture (Fig. 1(a)), there are distinct memory and processing units. The processing unit comprises the arithmetic and logic unit (ALU), a control unit and a limited amount of cache memory. The memory unit typically comprises dynamic random-access memory (DRAM), where information is stored in the charge state of a capacitor. Performing an operation (such as an arithmetic or logic operation), f , over a set of data stored in the-
 DRAM, A, to obtain the result, f (A), requires a sequence of steps in which the data must be obtained from the memory, transferred to the processing unit, processed, and stored back to the memory. This results in a significant amount of data being moved back and forth between the physically separated memory and processing units. This costs time and energy, and constitutes an inherent bottleneck in performance.
Processing unit
Control unit
ALU Cache
Memory
Bank #1
...
FETCH
STORE
ab
"bottleneck"
Memory
...
c
Computational memory control unit
Control signal
Control signal
d
Electrical input (I)
Number of operations
Bank #N
CONTROL
Processing unit
Control unit
ALU Cache
CONTROL
Bank #N
Bank #1
Computational
memory
Conventional
memory
Resistive memory elements
Control signal
FIG. 1. The concept of computational memory (a) Schematic of the von Neumann computer architecture, where the memory and computing units are physically separated. A denotes information stored in a memory location. To perform a computational operation f (A) and to store the result in the same memory location, data is shuttled back and forth between the memory and the processing unit. (b) An alternative architecture where f (A) is performed in place in the same memory location. (c) Computational mem-
ory achieves this by relying on the state dynamics of a large collection of memristive devices denoted by h. Depending on the operation to be performed, a suitable electrical signal is applied to the memory devices. The conductance of the devices evolves in accordance with the electrical input, and the result of the operation can be retrieved by reading the conductance at an appropriate time instance. (d) An example of the widely observed accumulative dynamics in memristive devices. By repeated ap-
plication of an electrical pulse to the devices, the conductance increases progressively.
To overcome this, a tantalizing prospect is that of transitioning to a hybrid architecture where certain operations, such as f , can be performed at the same physical location as where the data is stored (Fig. 1(b)). Such a memory unit that facilitates
a)Electronic mail: ase@zurich.ibm.com
arXiv:1706.00511v1 [cs.ET] 1 Jun 2017

2
such collocated computation is referred to as computational memory. There are recent reports of the use of DRAM to perform bulk bit-wise operations1 and fast row copying2 within the DRAM chip. However, a new class of emerging nanocale devices, namely, resistive memory or memristive devices with their multi-level and non-volatile storage capability as well as sufficient richness of dynamics are particularly well suited for computational memory. In these devices, information is stored in their resis-
tance/conductance states and these devices can remember the history of the current that has flowed through them3–5. The essential idea behind computational memory is not to treat memory as a passive storage entity, but to exploit the dynamics of the memory devices to realize computation exactly at the place where the data is stored. The data is stored in the conductance state of the device, denoted by G, as in a conventional memory unit, and the computational task (e.g. f (A)) is performed by appl-
ying appropriate electrical signals that “imprint” the result of the computation in the very same memory device (Fig. 1(c)). For example, to implement additive arithmetics, accumulative dynamics can be used whereby the conductance evolves monotonically as a function of the number of electrical pulses applied to the devices (Fig. 1(d)). Besides its collocated nature, this type of computation is massively parallel, and achieves high areal/power efficiency as well as speed. An early proposal for the -
use of memristive devices for in-place computing was the realization of certain logical operations using a circuit based on TiOx-based memory devices6. The same memory devices are used simultaneously to store the inputs, perform the logic operation, and store the resulting output. More complex logic units based on this initial concept were proposed7–9. Implementations of logical operations using other physical phenomena were also proposed, such as ferroelectric domain switching induced by the tip -
of a scanning probe microscope10 and the crystallization11 and melting12 of phase-change materials. In these memristive logic applications, one exploits only the binary resistance states of the devices. Matrix vector multiplication using Ohm’s law and Kirchhoff’s law is another computational primitive that can be realized very efficiently using resistive memory devices. Massively parallel, memory-centric hardware accelerators based on this concept are now becoming an important subject of research1-
3–17. However, to date, a few experimental reports go beyond a proof-of-concept demonstration. In this paper, we present an algorithm whereby the crystallization dynamics of a type of resistive memory device, namely, phase-change memory (PCM) devices, are exploited to implement a high-level computational primitive. Subsequently, we present a large-scale experimental demonstration of the computational memory concept using an array of one million PCM devices. We also present an application of such a-
 computational memory to process real-world data-sets such as weather data.
I. RESULTS
Dynamics of phase-change memory devices
Input current
Width
Power
PCM device
Thermal dynamics
+
a
b
0 20 40 60 80 100
0
1
2
Thermal resistance (K/μW)
Amorphous thickness (nm)
400 500 600 700 800 900
0.0
0.1
0.2
0.3
0.4
0.5
0.6
Crystal growth velocity (nm/ns)
Temperature (K)
c
d
FIG. 2. Crystallization dynamics (a) Schematic of a mushroom-type PCM device showing the phase configurations. (b) Illustration of the crystallization dynamics. When an electrical signal with power Pinp is applied to a PCM device, significant Joule heating occurs. The resulting temperature distribution across the device is determined by the thermal environment, in particular the effective thermal resistance, Rth. The effective thickness of the amorphous region, ua, evolves in accordance with the t-
emperature at the amorphous–crystalline interface, Tint, and the temperature dependence of crystal growth, vg. Experimental estimates of (c) Rth and (d) vg.
A PCM device consists of a nanometric volume of phase-change material sandwiched between two electrodes. A schematic illustration of a PCM device with mushroom-type device geometry is shown in Fig. 2(a))18. In an as-fabricated device, the material is in the crystalline phase. When a current pulse of sufficiently high amplitude is applied to the PCM device (typically

3
referred to as the RESET pulse), a significant portion of the phase-change material melts due to Joule heating. When the pulse is stopped abruptly, the molten material quenches into the amorphous phase because of glass transition. In the resulting RESET state, the device will be in the low conductance state as the amorphous region blocks the bottom electrode. The size of the amorphous region is captured by the notion of an effective thickness, ua19. PCM devices exhibit a rich dynamic behavior with-
 an interplay of electrical, thermal and structural dynamics that forms the basis for their application as computational memory. The electrical transport exhibits a strong field and temperature dependence20. Joule heating and the thermal transport pathways ensure that there is a strong temperature gradient within the PCM device. Depending on the temperature in the cell, the phasechange material undergoes structural changes, such as phase transitions and structural relaxation21,22. In our demonstra-
tion, we focus on a specific aspect of the PCM dynamics: the crystallization dynamics capturing the progressive reduction in the size of the amorphous region due to the amorphous to crystalline phase transition (Fig. 2(b)). When a current pulse (typically referred to as the SET pulse) is applied to a PCM device in the RESET state such that the temperature reached in the cell via Joule heating is high enough, but below the melting temperature, a part of the amorphous region crystallizes. At the nan-
ometer scale, the crystallization mechanism is dominated by crystal growth due to the large amorphouscrystalline interface area and the small volume of the amorphous region21. The crystallization dynamics in such a PCM device can be approximately described by
dua
dt = −vg(Tint), (1)
where vg denotes the temperature-dependent growth velocity of the phase-change material; Tint = Rth(ua)Pinp + Tamb is the temperature at the amorphous–crystalline interface, and ua(0) = ua0 is the initial effective amorphous thickness21. Tamb is the ambient temperature, and Rth is the effective thermal resistance that captures the thermal resistance of all possible heat pathways.
Experimental estimates of Rth and vg are shown in Fig. 2(c) and Fig. 2(d), respectively21. From the estimate of Rth as a function of ua, one can infer that the hottest region of the device is slightly above the bottom electrode and that the temperature within the device monotonically decreases with increasing distance from the bottom electrode. The estimate of vg shows the strong temperature dependence of the crystal growth rate. Up to approx. 550 K, the crystal growth rate is negligible whereas i-
t is maximum at approx. 750 K. As a consequence of Equation (1), ua progressively decreases upon the application of repetitive SET pulses and hence the low-field conductance progressively increases. In subsequent discussions, the RESET and SET pulses will be collectively referred to as write pulses. It is also worth noting that in a circuit-theoretic representation, the PCM device can be viewed as a generic memristor, with ua serving as an internal state variable23,24.
Detecting statistical correlations using computational memory
In this section, we show how the crystallization dynamics of PCM devices can be exploited to perform a high-level computational task, such as that of detecting statistical correlations between event-based data streams. Such problems arise in a multitude of application areas such as, the Internet of Things (IoT), life sciences, networking, social networks and large scientific experiments25. For example, one could generate an event-based data stream based on the presence or absence of a specific wor-
d in a collection of tweets. Sensory data processing is another promising application area, especially with sensors such as the dynamic vision sensor26. One can also view correlation detection as a key constituent of unsupervised learning where one of the objectives is to find correlated clusters in data streams. In a generic formulation of the problem, let us assume that there are N discrete-time binary stochastic process arriving at a correlation detector (see Fig. 3(a)). Let Xi = {Xi(k)} be one-
 of the processes. Then Xi(k) is a random variable with probabilities
P[Xi(k) = 1] = p (2)
P[Xi(k) = 0] = 1 − p, (3)
for 0 ≤ p ≤ 0.5. Let X j be another discrete-time binary stochastic processes with the same value of parameter p. Then the correlation coefficient of the random variables Xi(k) and Xj(k) at time instant k is defined as
c = Cov[Xi(k), Xj(k)]
√Var[Xi(k)]Var[Xj(k)] . (4)
Processes Xi and X j are said to be correlated if c > 0 or uncorrelated otherwise. The objective of the correlation detection problem is to detect, in an unsupervised manner, an unknown subset of these processes that are mutually correlated. As schematically illustrated in Fig. 3(b), one way to solve this problem is by obtaining an estimate of the uncentered covariance matrix corresponding the processes denoted by
Rˆi j = 1
K
K
∑
k=1
Xi(k)Xj(k). (5)

4
Detector
...
Uncentered covariance matrix
Cluster A
Cluster B
Cluster C
magnitude
A
B
Projection
Clustering
Uncorrelated
Time
Conductance
Correlated
Calculate M(k)
Phase change devices
Matrix-based algorithm
Realization using computational memory
a
b
c
Determine
SET Pulse
FIG. 3. Temporal correlation detection (a) Schematic of N stochastic binary processes, some correlated and the remainder uncorrelated, arriving at a correlation detector. (b) One approach to detect the correlated groups is to obtain an uncentered covariance matrix. By summing the elements of this matrix along a row or column, we can obtain some kind of numerical weights corresponding to the N processes and can differentiate the correlated from the uncorrelated group based on their magnitude. (c) A-
lternatively, the correlation detection problem can be realized using computational memory. Here, each process is assigned to a single PCM device. Whenever the process takes the value 1, a SET pulse is applied to the PCM device. The amplitude or the width of the SET pulse is chosen to be proportional to the instantaneous sum of all processes. By monitoring the conductance of the memory devices, we can decipher the correlated groups.
Next, by summing the elements of this matrix along a row or column, we can obtain certain numerical weights corresponding to the processes denoted by Wˆ i = ∑N
j=1 Rˆi j. It can be shown that if Xi belongs to the correlated group with correlation coefficient
c > 0, then
E[Wˆ i] = (N − 1)p2 + p + (Nc − 1)cp(1 − p). (6)
Nc denotes the number of processes in the correlated group. In contrast, if Xi belongs to the uncorrelated group, then
E[Wˆ i] = (N − 1)p2 + p. (7)
Hence by monitoring Wˆ i in the limit of large K, we can determine which processes are correlated with c > 0. Moreover, it can be seen that with increasing c and Nc, it becomes easier to determine whether a process belongs to a correlated group.
We can show that this rather sophisticated problem of correlation detection can be efficiently solved using a computational memory module comprising PCM devices by exploiting the crystallization dynamics. By assigning each incoming process to a single PCM device, the statistical correlation can be calculated and stored in the very same device as the data passes through the memory. The way it is achieved is schematically depicted in Fig. 3(c): At each time instance, k, a “collective momentum”, M(k)-
 = ∑N
j=1 Xj(k), that corresponds to the instantaneous sum of all processes is calculated. The calculation of M(k) incurs little computational effort as it just counts the number of non-zero events at each time instance. Next, an identical SET pulse is applied potentially in parallel to all the PCM devices for which the assigned binary process has a value of 1. The duration or amplitude of the SET pulse is chosen to be a linear function of M(k). For example, let the duration of the pulse, δt(k) = CM(k) -
= C ∑N
j=1 Xj(k). For the sake of simplicity, let us assume that the interface temperature, Tint, is independent of the amorphous thickness, ua. As the pulse amplitude is kept constant, vg(Tint) = G , where G is a constant. Then from Equation 1, the absolute value of the change in the amorphous thickness of the ith phase-change device at the kth discrete-time instance is
δ uai (k) = δ t(k)vg(Tint) = CG
N
j= ∑1
Xj(k) (8)

5
The total change in the amorphous thickness after K time steps can be shown to be
∆uai (K) =
K
∑
k=1
δ uai (k)Xi(k)
= CG
K
∑
k=1
N
j= ∑1
Xi (k)X j (k)
= CG
N
j= ∑1
K
∑
k=1
Xi (k)X j (k)
= KCG
N
j= ∑1
Rˆi j
= KCG Wˆ i. (9)
Hence, from Equations 6 and 7, if Xi is one of the correlated processes, then ∆uai will be larger than if Xi is one of the uncorrelated processes. Therefore by monitoring ∆uai or the corresponding resistance/conductance for all phase-change devices, we can determine which processes are correlated.
Experimental platform
Word Line
Bit Line
Read
Voltage Write pulse parameters
Write circuitry
ADC
Multiplexer
Measure of device conductance
Multiplexer
Read circuitry
ab
MATLAB EMBEDDED
PROCESSOR
HOST COMPUTER FPGA BOARDS/AFE
HARDWARE MODULES
AFE CIRCUITRY
PCM CHIP
EXPERIMENTAL PLATFORM
ETHERNET ETHERNET
READ/WRITE CIRCUTRY
MEMORY ARRAY
0 10 20 30 40 50
0
2
4
6
8
10
12
Conductance (μS)
Number of pulses
50μA 60μA 70μA 80μA 90μA 100μA
cd
0 10 20 30 40 50
-2
0
2
4
6
8
10
12
14
16
Conductance (μS)
Number of pulses
0 5 10 15 20 25
0
500
1000
Number of devices
Conductance (μS)
After 10 pulses After 40 pulses
FIG. 4. Experimental platform and characterization results (a) Schematic illustration of the experimental platform showing the main components. (b) The PCM array is organized as a matrix of word lines (WL) and bit lines (BL), and the chip also integrates the associated read/write circuitries. (c) The mean accumulation curve of 10,000 devices showing the map between the device conductance and the number of pulses. The devices achieve a higher conductance value with increasing SET current and also w-
ith increasing number of pulses. (d) The mean and standard deviation associated with the accumulation curve corresponding to the SET current of 100 μA. Also shown are the distributions of conductance values obtained after application of the 10th and 40th SET pulses.
Next, we present experimental demonstrations of the concept. The experimental platform (schematically shown in Fig. 4(a)) is built around a prototype PCM chip that comprises 3 million PCM devices. More details on the chip are presented in the methods section. As shown in Fig. 4(b)), the PCM array is organized as a matrix of word lines (WL) and bit lines (BL). In addition to the PCM devices, the prototype chip integrates the circuitry for device addressing and for write and read operations. The PCM-
 chip is interfaced to a hardware platform comprising two field programmable gate array (FPGA) boards and an analog-front-end (AFE) board. The AFE board provides the power supplies as well as the voltage and current reference sources for the PCM chip. The FPGA boards are used to implement the overall system control and data management as well as the interface with the data

6
processing unit. The experimental platform is operated from a host computer, and a Matlab environment is used to coordinate the experiments. An extensive array-level characterization of the PCM devices was conducted prior to the experimental demonstrations. In one experiment, 10,000 devices were arbitrarily chosen and were first RESET by applying a rectangular current pulse of 1 μs duration and 440 μA amplitude. After RESET, a sequence of SET pulses of 50 ns duration were applied to all the device-
s, and the resulting device conductance values were monitored after the application of each pulse. The map between the device conductance and the number of pulses is referred to as an accumulation curve. The accumulation curves corresponding to different SET currents are shown in Fig. 4(c). These results clearly show that the mean conductance increases monotonically with increasing SET current (in the range from 50 μA and 100 μA) and with increasing number of SET pulses. From Fig. 4(d), it can als-
o be seen that there is significant variability associated with the evolution of the device conductance values. This variability arises from inter-device as well as intra-device variability. The intra-device variability is traced to the differences in the atomic configurations of the amorphous phase created via the melt-quench process after each RESET operation27,28. Besides the variability arising from the crystallization process, additional fluctuations in conductance also arise from 1/ f noise2-
9 and drift variability30.
Experimental demonstration with a million correlated processes
de
0 50 100 150 200 250
1000
2000
3000
4000
5000
6000
magnitude (a.u.)
50 100 150 200 250
50
100
150
200
250
Detector
...
Precipitation
Weather station
Geographical regions
0 50 100 150 200 250
150
200
Total precipitation
Station index
Real-time
NOAA data
Uncentered covariance matrix f
1000processes
1000 processes
1 Million devices
Correlated Uncorrelated
Fixed-rate event streams
0 5 10 15
0.0
5.0k
10.0k
15.0k
20.0k
Number of devices
Conductance (μS)
870.0k
~~ Uncorrelated
Correlated
ab
0 μS 10 μS
c
0 μS 7 μS
k=252
k=1312 k=10000
1000 devices
1000 devices k=15
01234567
0
20
40
60
80
100
120
140
Number of weather stations
Conductance (μS)
FIG. 5. Experimental results (a) A million processes are mapped to the pixels of a 1000 × 1000 pixel black-and-white composite image of Albert Einstein and his signature [both taken from31]. The pixels turn on and off in accordance with the instantaneous binary values of the processes. (b) Evolution of device conductance over time, showing that the devices corresponding to the correlated processes go to a high conductance state. (c) Distribution of the device conductance shows that the algorithm i-
s able to pick out most of the correlated processes. (d) Generation of a binary stochastic process based on the rainfall data from 270 weather stations across the USA. (e) The uncentered covariance matrix reveals several small correlated groups, along with a predominant correlated group. (f) Map of the device conductance levels after the experiment shows that the devices corresponding to the predominant correlated group have achieved a higher conductance value.
In a first demonstration of correlation detection, we created the input data artificially, and generated one million binary stochastic processes organized in a two-dimensional grid (Fig. 5(a)). We arbitrarily chose a subset of 95,525 processes, which we mutually correlated with a relatively weak instantaneous correlation coefficient of 0.1, whereas the other 904,475 were uncorrelated. The objective was to see if we can detect these correlated processes using the computational memory approach. Each-
 stochastic process was assigned to a single PCM device. First, all devices were RESET by applying a current pulse of 1 μs duration and 440 μA amplitude. In this experiment, we chose to modulate the SET current while maintaining a constant pulse
duration of 50 ns. At each time instance, the SET current is chosen to be equal to 0.002 ∗ M(k) μA, where M(k) = ∑N
j=1 Xj(k) is equal to the collective momentum. This rather simple calculation was performed in the host computer. Alternatively, it could be

7
done in one of the FPGA boards. Next, the on-chip write circuitry was instructed to apply a SET pulse with the calculated SET current to all the PCM devices for which Xi(k) = 1. To minimize the execution time, we chose not to program the devices if the SET current is less than 25 μA. The SET pulses were applied sequentially. However, if the chip has multiple write circuitries that can operate in parallel, then it is also possible to apply the SET pulses in parallel. This process of applying SET pu-
lses was repeated at every time instance. The maximum SET current applied to the devices during the experiment was 80 μA. As described earlier, owing to the temporal correlation between the processes, the devices assigned to those processes are expected to go to a high conductance state. We periodically read the conductance values of all PCM devices using the onchip read circuitry and the on-chip ADC. The resulting map of the conductance values are shown in Fig. 5(b). Also shown is the correspondi-
ng distribution of the conductance values (Fig. 5(c)). This distribution shows that we can distinguish between the correlated and the uncorrelated processes. The inaccuracies are attributed to the variability and conductance fluctuations discussed earlier. However, it is remarkable that in spite of these issues, we are able to perform the correlation detection with significantly high accuracy. Note that there are several applications, such as sensory data processing, where these levels of accuracy-
 could be sufficient. Moreover, there are also ways to improve the accuracy by using multiple devices to interface with a single random process. The conductance fluctuations can also be minimized using concepts such as projected phase change memory32. Another issue is that of the limited dynamic range of the conductance values. There is a limit to the ua and hence the maximum conductance values that the devices can achieve. The accumulation curves in Fig. 4(d) clearly show that the mean conductanc-
e values begin to saturate after the application of a certain number of pulses. This means that the correlations have to be detected within a reasonable amount of time dictated by this “dynamic range”. Hence, once the correlation has been detected, then the devices need to be RESET, and the operation has to be resumed to detect subsequent correlations. The application of shorter SET pulses is one way to increase the dynamic range. Unfortunately, in the PCM chip we experimented with, we were limite-
d to a minimum pulse width of 50 ns. The use of multiple devices to interface with the random processes can also enlarge the dynamic range. As per Equation (6), we would expect the level of separation between the distributions of correlated and uncorrelated groups to increase with increasing values of the correlation coefficient. This could be experimentally confirmed. The experimental results show that the correlated groups can be detected down to very low correlation coefficients such as c = 0.0-
1 even though it will be difficult to make a precise evaluation of the correlation coefficient. Moreover, this concept could potentially also be used to detect multiple correlated groups having different correlation coefficients.
Experiment with the weather data
A second demonstration is based on real-world data from 270 weather stations across the USA. Over a period of 6 months, the rainfall data from each station constituted a binary stochastic process that was applied to the computational memory at one-hour time steps. The process took the value 1 if rainfall occurred in the preceding one-hour time window, else it was 0 (Fig. 5(d)). An analysis of the uncentered covariance matrix shows that several correlated groups exist and that one of them is predom-
inant. As expected, also a strong geographical correlation with the rainfall data exists (Fig. 5(e)). Correlations between the rainfall events are also reflected in the geographical proximity between the corresponding weather stations. To detect the predominant correlated group using computational memory, we used the same approach as above, but with 4 PCM devices interfacing with each weather station data. The four devices were used to improve the accuracy. At each instance in time, the SET curren-
t was calculated to be equal to 0.0013 ∗ M(k) μA. Next, the PCM chip was instructed to program the 270 × 4 devices sequentially with the calculated SET current. The on-chip write circuitry applies a write pulse with the calculated SET current to all PCM devices for which Xi(k) = 1. We chose not to program the devices if the SET current is less than 25 μA. The duration of the pulse was fixed to be 50 ns, and the maximum SET current applied to the devices was 80 μA. The resulting device conductance -
map (averaged over the four devices per weather station) shows that the conductance values corresponding to the predominant correlated group of weather stations are comparably higher (Fig. 5(f)). Based on a threshold conductance value chosen to be 2 μS, we can classify the weather stations into correlated and uncorrelated weather stations. We can also make comparisons with established unsupervised classification techniques such as k-means clustering. It was seen that, out of the 270 weather statio-
ns, there was a match for 245 weather stations. The computational memory approach classified 12 stations as uncorrelated which were marked correlated by the k-means clustering approach. Similarly, the computational memory approach classified 13 stations as correlated which were marked uncorrelated by the k-means clustering approach. Given the simplicity of the computational memory approach, it is remarkable that it can achieve this level of similarity with such a sophisticated and well-established-
 classification algorithm.
II. DISCUSSION
The scientific relevance of the presented work is that we have convincingly demonstrated the ability of computational memory to perform certain high-level computational tasks in a non-von Neumann manner by exploiting the dynamics of resistive memory

8
devices. We have also demonstrated the concept experimentally at the scale of a million PCM devices. Even though in the experimental demonstrations using the prototype chip, we programmed the devices sequentially, we could also program them in parallel given the availability of sufficient number of write modules. A hypothetical computational memory module performing correlation detection need not be substantially different from conventional memory modules. The main constituents of such a module wi-
ll also be a memory controller and a memory chip. Tasks such as computing M(k) can easily be performed in the memory controller. The memory controller can then convey the write/read instructions to the memory chip. It can be shown that in such a computational memory module, we could accelerate the correlation detection task by a factor of 200 compared to stateof-the-art computing hardware. In order to quantify the time, we measured the performance of various different implementations that can be e-
xecuted on an IBM Power System S822LC system. This system has 2 POWER8 CPUs (each comprising 10 cores) and 4 Nvidia Tesla P100 graphical processing units (attached using the NVLink interface). An alternate approach to using PCM devices will be to design an application-specific chip where the accumulative behavior of PCM is emulated using complementary metal-oxide semiconductor (CMOS) technology using adders and registers. However, even at a relatively large 90 nm-technology node, the areal footpri-
nt of the computational phase-change memory is much smaller than that of CMOS-only approaches even though the dynamic power consumption is comparable. By scaling the devices to smaller dimensions and by using shorter write pulses, these gains are expected to increase several fold33,34. The ultra-fast crystallization dynamics and non-volatility ensure a multi-time-scale operating window ranging from a few tens of nanoseconds to years. These attributes are particularly attractive for slow processes,-
 where the leakage of CMOS would dominate dynamic power because of low utilization rate. It can be shown that a single-layer spiking neural network can also be used to detect temporal correlations35. The eventbased data-streams can be translated to pre-synaptic spikes to a synaptic layer. Based on the synaptic weights, the postsynaptic potentials are generated and added to the membrane potential of a leaky integrate-and-fire neuron. The temporal correlations between the presynaptic input spikes an-
d the neuronal firing events result in an evolution of the synaptic weights due to a feedback-driven competition among the synapses. In the steady state, the correlations between the individual input streams can be inferred from the distribution of the synaptic weights or the resulting firing activity of the postsynaptic neuron. Recently, it was shown that in such a neural network, PCM devices can serve as the synaptic elements36. One could argue that the synaptic elements serve as some form of co-
mputational memory. Even though both approaches aim to solve the same problem, there are some notable differences. In the neural network approach, it is the spike-timing-dependent-plasticity rule and the network dynamics that enable correlation detection. One could use any passive multi-level storage element to store the synaptic weight. Also note that the neuronal input is derived based on the value of the synaptic weights. It is challenging to implement such a feedback architecture within a comp-
utational memory unit. Such feedback architectures are also likely to be much more sensitive to device variabilities and nonlinearities and are not well suited for detecting very low correlations35. Detection of statistical correlations is just one of the computational primitives that could be realized using the crystallization dynamics. Another application of crystallization dynamics is that of finding factors of numbers proposed originally by Wright et al.37–39. Assume that a PCM device is initi-
alized in such a way that after the application of X number of pulses, the conductance exceeds a certain threshold. To check whether X is a factor of Y , Y number of pulses are applied to the device, re-initializing the device each time the conductance exceeds the threshold. It can be seen that if after the application of Y pulses, the conductance of the device is above the threshold, then X is a factor of Y . Another fascinating application of crystallization dynamics is to realize matrix-vector -
multiplications. To multiple an N × N matrix, A, with a N × 1vector, x, the elements of the matrix and the vector can be translated into the durations and amplitudes of a sequence of crystallizing pulses applied to an array of N PCM devices. It can be shown that by monitoring the conductance levels of the PCM devices, one gets a good estimate of the matrix-vector product. Note that such an approach is superior to the more common approach using Ohm’s law and Kirchhoff’s law that require N × N devic-
es. In addition to crystallization dynamics, one could also exploit other rich dynamic behavior in PCM devices, such as the dynamics of structural relaxation. Whenever an amorphous state is formed via the melt-quench process, the resulting unstable glass state relaxes to an energetically more favorable “ideal” glass state22,40–42. This structural relaxation, which codes the temporal information of the application of write pulses, can be exploited to perform tasks such as detection of rates of proc-
esses in addition to their temporal correlations. It is also foreseeable that by further coupling the dynamics of these devices we can potentially solve even more intriguing problems. Suggestions of such memcomputing machines that could solve certain nondeterministic polynomial (NP) problems in polynomial (P) time by exploiting attributes such as inherent parallelism, functional polymorphism and information overhead are being actively investigated43,44. The concepts presented in this work could al-
so be extended to the optical domain using devices such as photonic PCM45. In such an approach, optical signals will be used to program the devices instead of electrical signals. These concepts are also not limited to PCM devices: several other memristive device technologies exist that possess sufficiently rich dynamics to serve as computational memory46. However, it is worth noting that PCM technology is arguably the most advanced resistive memory technology at present with a very well establishe-
d multi-level storage capability18. The read endurance is assumed to be unlimited. There are also recent reports of more than 1012 RESET/SET endurance47. Note that in our experiments, we mostly apply only the SET pulses, and in this case the endurance is expected to be substantially higher. To summarize, we have presented the first significant experimental demonstration of the concept of computational memory where the rich dynamic behavior of phase-change memory devices is used to execute a high-l-
evel machine-learning algorithm almost entirely in the memory array. We have demonstrated the co-existence of computation and storage at the nanometer scale

9
that could enable massively parallel computing systems of the future.
METHODS
Phase-change memory chip
The PCM devices were integrated into the chip in 90 nm CMOS technology29. The phase-change material is doped Ge2Sb2Te2 (d-GST). The bottom electrode has a radius of ∼ 20 nm and a length of ∼ 65 nm, and was defined using a sub-lithographic keyhole transfer process48. The phase-change material is ∼ 100 nm thick and extends to the top electrode. Two types of devices are available on-chip. They differ by the size of their access transistor. The first sub-array contains 2 million devices. In the second-
 sub-array, which contains 1 million devices, the access transistors are twice as large. All experiments in this work were done on the second sub-array, which is organized as a matrix of 512 word lines (WL) and 2048 bit lines (BL). The selection of one PCM device is done by serially addressing a WL and a BL. A single selected device can be programmed by forcing a current through the BL with a voltage-controlled current source. For reading a PCM cell, the selected BL is biased to a constant voltage-
 of 200 mV. The resulting read current is integrated by a capacitor, and the resulting voltage is then digitized by the on-chip 8-bit cyclic analog-to-digital convertor (ADC). The total time of one read is 1 μs. The readout characteristic is calibrated via the use of on-chip reference poly-silicon resistors.
Generation of one million correlated processes and experimental details
Let Xr be a discrete binary process with probabilities P(Xr(k) = 1) = p and P(Xr(k) = 0) = 1 − p. Using Xr, N binary processes can be generated via the stochastic functions
P(Xi(k) = 1|Xr(k) = 1) = p + √c(1 − p) (10)
P(Xi(k) = 1|Xr(k) = 0) = p(1 − √c) (11)
P(Xi(k) = 0) = 1 − P(Xi(k) = 1). (12)
It can be shown that E(Xi(k)) = p and Var(Xi(k)) = p(1 − p). Moreover, if two processes Xi and X j are both generated using Equations 10 to 12, then the correlation coefficient between the two processes can be shown to be equal to c. For the experiment presented, we chose an Xr where p = 0.01. A million binary processes were generated. Of these, Nc = 95, 525 are correlated with c > 0. The remaining 904,475 processes are mutually uncorrelated. Each process is mapped to one pixel of a 1000 × 1000 pi-
xel black-and-white image of Albert Einstein: black pixels are mapped to the uncorrelated processes, and white pixels are mapped to the correlated processes. The seemingly arbitrary choice of Nc arises from the need to match with the white pixels of the image. The pixels turn on and off in accordance with the binary values of the processes. One phase-change memory device is allocated to each of the one million processes.
Generation of weather data-based processes and experimental details
The weather data was obtained from the National Oceanic and Atmospheric Administration (http://www.noaa.gov/) database of quality-controlled local climatological data. It provides hourly summaries of climatological data from approximately 1600 weather stations in the United States of America. The measurements were obtained over a 6-month period from January 2015 to June 2015 (181 days, 4344 hours). We generated one binary stochastic process per weather station. If it rained in any given period of -
1 hour in a particular geographical location corresponding to a weather station, then the process takes the value 1; else it will be 0. For the experiments on correlation detection, we picked 270 weather stations with similar rates of rainfall activity.
ACKNOWLEDGEMENTS
We would like to thank the PCM teams at IBM Research - Zurich and the IBM T. J. Watson Research Center, USA. A.S. would like to acknowledge partial financial support from the ERC Consolidator Grant 682675.
AUTHOR CONTRIBUTIONS
A.S. and T.T. conceived the idea. A.S., N.P., M.L.G. and T.T. performed the experiments. A.S. and T.T. analyzed the data. L.K. and T.P. contributed to the circuit design and signal-processing aspects, respectively. E.E. provided managerial support and critical comments. A.S. wrote the manuscript with input from all the authors.

10
1Seshadri, V. et al. Buddy-ram: Improving the performance and efficiency of bulk bitwise operations using dram. arXiv preprint arXiv:1611.09988 (2016). 2Seshadri, V. et al. Rowclone: fast and energy-efficient in-dram bulk data copy and initialization. In Proceedings of the 46th Annual IEEE/ACM International Symposium on Microarchitecture, 185–197 (ACM, 2013).
3Strukov, D. B., Snider, G. S., Stewart, D. R. & Williams, R. S. The missing memristor found. Nature 453, 80–83 (2008). 4Chua, L. Resistance switching memories are memristors. Applied Physics A 102, 765–783 (2011). 5Wong, H.-S. P. & Salahuddin, S. Memory leads the way to better computing. Nature Nanotechnology 10, 191–194 (2015). 6Borghetti, J. et al. ‘memristive’ switches enable ‘stateful’ logic operations via material implication. Nature 464, 873–876 (2010).
7Kvatinsky, S. et al. Magic: Memristor-aided logic. IEEE Transactions on Circuits and Systems II: Express Briefs 61, 895–899 (2014).
8Zha, Y. & Li, J. Reconfigurable in-memory computing with resistive memory crossbar. In Proceedings of the 35th International Conference on ComputerAided Design, 120 (ACM, 2016). 9Vourkas, I. & Sirakoulis, G. C. Emerging memristor-based logic circuit design approaches: A review. IEEE Circuits and Systems Magazine 16, 15–30 (2016). 10Ievlev, A. et al. Intermittency, quasiperiodicity and chaos in probe-induced ferroelectric domain switching. Nature Physics 10, 59–66 (2014). 11Cassinerio, M., Ciocchi-
ni, N. & Ielmini, D. Logic computation in phase change materials by threshold and memory switching. Advanced Materials 25, 5975–5980 (2013). 12Loke, D. et al. Ultrafast phase-change logic device driven by melting processes. Proceedings of the National Academy of Sciences 111, 13272–13277 (2014). 13Burr, G. W. et al. Experimental demonstration and tolerancing of a large-scale neural network (165 000 synapses) using phase-change memory as the synaptic weight element. IEEE Transactions on Electron De-
vices 62, 3498–3507 (2015).
14Shafiee, A. et al. Isaac: A convolutional neural network accelerator with in-situ analog arithmetic in crossbars. In Proceedings of the 43rd International Symposium on Computer Architecture, 14–26 (IEEE Press, 2016).
15Chi, P. et al. Prime: A novel processing-in-memory architecture for neural network computation in ReRAM-based main memory. In Proceedings of the 43rd International Symposium on Computer Architecture, 27–39 (IEEE Press, 2016).
16Bojnordi, M. N. & Ipek, E. Memristive boltzmann machine: A hardware accelerator for combinatorial optimization and deep learning. In IEEE International Symposium on High Performance Computer Architecture (HPCA), 1–13 (IEEE, 2016).
17Burr, G. W. et al. Neuromorphic computing using non-volatile memory. Advances in Physics: X 2, 89–124 (2017). 18Burr, G. W. et al. Recent progress in phase-change memory technology. IEEE Journal on Emerging and Selected Topics in Circuits and Systems 6, 146–162 (2016). 19Sebastian, A., Papandreou, N., Pantazi, A., Pozidis, H. & Eleftheriou, E. Non-resistance-based cell-state metric for phase-change memory. Journal of Applied Physics 110, 084505 (2011). 20Le Gallo, M., Kaes, M., Sebastian, A. & K-
rebs, D. Subthreshold electrical transport in amorphous phase-change materials. New Journal of Physics 17, 093035 (2015). 21Sebastian, A., Le Gallo, M. & Krebs, D. Crystal growth within a phase change memory cell. Nature Communications 5, 4314 (2014). 22Raty, J. Y. et al. Aging mechanisms in amorphous phase-change materials. Nature Communications 6 (2015). 23Corinto, F., Civalleri, P. P. & Chua, L. O. A theoretical approach to memristor devices. IEEE Journal on Emerging and Selected Topics in Circ-
uits and Systems 5, 123–132 (2015). 24Ascoli, A., Corinto, F. & Tetzlaff, R. Generalized boundary condition memristor model. International Journal of Circuit Theory and Applications 44, 60–84 (2016). 25Lazer, D., Kennedy, R., King, G. & Vespignani, A. The parable of google flu: traps in big data analysis. Science 343, 1203–1205 (2014). 26Liu, S.-C. & Delbruck, T. Neuromorphic sensory systems. Current opinion in neurobiology 20, 288–295 (2010). 27Tuma, T., Pantazi, A., Le Gallo, M., Sebastian, A. &-
 Eleftheriou, E. Stochastic phase-change neurons. Nature Nanotechnology 11, 693–699 (2016). 28Le Gallo, M., Tuma, T., Zipoli, F., Sebastian, A. & Eleftheriou, E. Inherent stochasticity in phase-change memory devices. In 46th European Solid-State Device Research Conference (ESSDERC), 373–376 (IEEE, 2016).
29Close, G. et al. Device, circuit and system-level analysis of noise in multi-bit phase-change memory. In IEEE International Electron Devices Meeting (IEDM), 29–5 (IEEE, 2010). 30Pozidis, H. et al. A framework for reliability assessment in multilevel phase-change memory. In 4th IEEE International Memory Workshop (IMW), 1–4 (IEEE, 2012). 31Wikipedia. Albert Einstein (2016). URL https://en.wikipedia.org/wiki/Albert_Einstein. Online; accessed: 2016-08-17. 32Koelmans, W. W. et al. Projected phase-cha-
nge memory devices. Nature communications 6 (2015). 33Xiong, F., Liao, A. D., Estrada, D. & Pop, E. Low-power switching of phase-change materials with carbon nanotube electrodes. Science 332, 568–570 (2011). 34Loke, D. et al. Breaking the speed limits of phase-change memory. Science 336, 1566–1569 (2012). 35Gu ̈tig, R., Aharonov, R., Rotter, S. & Sompolinsky, H. Learning input correlations through nonlinear temporally asymmetric hebbian plasticity. The Journal of neuroscience 23, 3697–3714 (2003).-
 36Tuma, T., Le Gallo, M., Sebastian, A. & Eleftheriou, E. Detecting correlations using phase-change neurons and synapses. IEEE Electron Device Letters 37, 1238–1241 (2016). 37Wright, C. D., Liu, Y., Kohary, K. I., Aziz, M. M. & Hicken, R. J. Arithmetic and biologically-inspired computing using phase-change materials. Advanced Materials 23, 3408–3413 (2011). 38Wright, C. D., Hosseini, P. & Diosdado, J. A. V. Beyond von-neumann computing with nanoscale phase-change memory devices. Advanced Function-
al Materials 23, 2248–2254 (2013). 39Hosseini, P., Sebastian, A., Papandreou, N., Wright, C. D. & Bhaskaran, H. Accumulation-based computing using phase-change memories with fet access devices. IEEE Electron Device Letters 36, 975–977 (2015).
40Boniardi, M. & Ielmini, D. Physical origin of the resistance drift exponent in amorphous phase change materials. Applied Physics Letters 98, 243506 (2011). 41Fantini, P., Ferro, M., Calderoni, A. & Brazzelli, S. Disorder enhancement due to structural relaxation in amorphous ge2sb2te5. Applied Physics Letters 100, 213506 (2012). 42Zipoli, F., Krebs, D. & Curioni, A. Structural origin of resistance drift in amorphous gete. Physical Review B 93, 115201 (2016). 43Traversa, F. L. & Di Ventra, M. Univ-
ersal memcomputing machines. IEEE Transactions on Neural Networks and Learning Systems 26, 2702–2715 (2015). 44Di Ventra, M. & Pershin, Y. V. Just add memory. Scientific American 312, 56–61 (2015). 45Rı ́os, C. et al. Integrated all-photonic non-volatile multi-level memory. Nature Photonics 9, 725–732 (2015). 46Waser, R. & Aono, M. Nanoionics-based resistive switching memories. Nature Materials 6, 833–840 (2007). 47Kim, W. et al. Ald-based confined pcm with a metallic liner toward unlimited endura-
nce. In IEEE International Electron Devices Meeting (IEDM), 4–2 (IEEE, 2016). 48Breitwisch, M. et al. Novel lithography-independent pore phase change memory. In IEEE Symposium on VLSI Technology, 100–101 (IEEE, 2007).

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:46.970Z
- **Text Length:** 48804 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
