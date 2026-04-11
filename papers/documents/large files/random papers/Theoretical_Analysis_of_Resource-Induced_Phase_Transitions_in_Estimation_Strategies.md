# PDF Document: Tottori and Kobayashi - 2025 - Theoretical Analysis of Resource-Induced Phase Transitions in Estimation Strategies.pdf

**File Path:** Tottori and Kobayashi - 2025 - Theoretical Analysis of Resource-Induced Phase Transitions in Estimation Strategies.pdf

**Processed Date:** 2026-02-10T18:17:22.601Z

**File Size:** 2741.42 KB

**Total Pages:** 20

**Extracted Pages:** 20

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3608

**Title:** Theoretical Analysis of Resource-Induced Phase Transitions in Estimation Strategies

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Theoretical Analysis of Resource-Induced Phase Transitions in Estimation Strategies
Takehiro Tottori1, 2 and Tetsuya J. Kobayashi2
1Laboratory for Neural Computation and Adaptation, RIKEN Center for Brain Science, 2-1 Hirosawa, Wako, Saitama 351-0198, Japan 2Institute of Industrial Science, The University of Tokyo, 4-6-1 Komaba, Meguro, Tokyo 153-8505, Japan (Dated: November 14, 2025)
Organisms adapt to volatile environments by integrating sensory information with internal memory, yet their information processing is constrained by resource limitations. Such limitations can fundamentally alter optimal estimation strategies in biological systems. For example, recent experiments suggest that organisms exhibit nonmonotonic phase transitions between memoryless and memory-based estimation strategies depending on sensory reliability. However, an analytical understanding of these resou-
rce-induced phase transitions is still missing. This Letter presents an analytical characterization of resource-induced phase transitions in optimal estimation strategies. Our result identifies the conditions under which resource limitations alter estimation strategies and analytically reveals the mechanism underlying the emergence of discontinuous, nonmonotonic, and scaling behaviors. These results provide a theoretical foundation for understanding how limited resources shape information processi-
ng in biological systems.
Introduction.– Organisms adapt to changing environments by integrating sensory information with internal memory [1–10]. However, the resources they can devote to information processing are intrinsically limited [1125], which in turn shapes their optimal estimation strategies. For example, when energy resources are sufficient, organisms can engage in deliberative decision-making, whereas under severe resource limitations their behavior tends to become more reactive [26–28]. Moreover, recent experim-
ents suggest that although organisms exploit their internal memory when sensory information is moderately uncertain, they abandon it when sensory uncertainty is either too low or too high [29]. Despite these observations, a theoretical framework that explains when and how resource limitations induce phase transitions in optimal estimation strategies remains missing. By employing optimal control theory, we previously developed a general framework for identifying optimal estimation strategies under -
resource limitations [30–34]. By applying this framework to a minimal model of biological information processing, we found that resource limitations induce a phase transition between memoryless and memory-based estimation strategies [Fig. 1] [33, 34]. This transition also exhibits several nontrivial features, including discontinuity, nonmonotonicity, and a scaling relation, even in a linear-quadratic-Gaussian (LQG) setting [Fig. 2] [33, 34]. The observed nonmonotonicity qualitatively agrees with r-
ecent experimental results [29], such that memory-based estimation is optimal only when sensory uncertainty is moderate. However, these findings were obtained from numerical simulations, and their mechanism is yet to be clarified. This letter elucidates the mechanism underlying the resource-induced phase transition. Our analysis clarifies when and how resource limitations induce phase transitions in optimal estimation strategies, and reveals their discontinuous, nonmonotonic, and scaling behaviors-
 analytically. These results provide a theoretical foundation for understanding resource-constrained information pro
cessing in biological systems. Model.– We formulate a minimal model of biological information processing, in which an organism estimates an environmental state xt ∈ R by integrating noisy observation yt ∈ R and internal memory zt ∈ R [33, 34]. The environmental state xt ∈ R evolves according to an Ornstein-Uhlenbeck process [Fig. 1(a)] [2, 3, 16]:
dxt = −xtdt + √Ddωt, (1)
where ωt is a standard Wiener process and D > 0 denotes the intensity of state fluctuations. The organism cannot observe xt directly but receives a noisy measurement yt ∈ R drawn from a Gaussian distribution with mean xt and variance E > 0 [Fig. 1(b)]:
yt ∼ N (yt|xt, E). (2)
To utilize past information, the organism maintains an internal memory zt ∈ R, which is updated as
dzt = vtdt + √F dξt, (3)
where ξt is a standard Wiener process and F > 0 denotes the intensity of intrinsic noise [Fig. 1(c,e)]. The control function vt = v(yt, zt) determines how the organism encodes past observations into memory. The organism estimates the environmental state xt by integrating the current observation yt with the internal memory zt as xˆt = xˆ(yt, zt) [Fig. 1(d,f)].
The optimal state estimator xˆ∗ and memory control v∗ are defined as the minimizers of the following objective:
xˆ∗, v∗ := arg mxˆ,ivn J [xˆ, v], (4)
J [xˆ, v] := Tli→m∞
1
TE
[
∫T
0
(Q(xt − xˆt)2 + M vt2
) dt
]
. (5)
The first and second terms in Eq. (5) represent the state estimation error and the memory control cost, respectively. The parameters Q > 0 and M > 0 quantify energy availability and limitation, respectively. Increasing
arXiv:2511.10184v1 [physics.bio-ph] 13 Nov 2025

2
FIG. 1. (a) Environmental state xt. (b) Noisy observation yt. (c,e) Internal memory zt. (d,f) Optimal estimator xˆt∗. Thin red and cyan curves are 100 sample trajectories, whereas thick red and magenta curves are their means. While memoryless estimation strategy (Πzx, Πzz = 0) is optimal at Q = 100 (c,d), memory-based one (Πzx, Πzz ̸= 0) is optimal at Q = 1000 (e,f). The rest of the parameters are set to F = 1 and M = 1.
FIG. 2. (a,b) Πzx and Πzz as functions of Q and E. Blue, green, and orange dots are the numerical solutions of the observation-based Riccati equation, and correspond to zero, intermediate, and high memory control gains, respectively. The blue and orange dots are optimal in the blue and orange regions, respectively, whereas the green dots never become optimal. (c) Phase boundaries with respect to E and Q/M F . Blue, green, and orange curves vary Q, M , and F , respectively. The rest of the paramete-
rs are set to 1.
Q or decreasing M allows the organism to invest more energy in estimation. This problem corresponds to the LQG problem in optimal control theory [35–37], since the dynamics are linear and Gaussian [Eqs. (1)–(3)] and the cost is quadratic [Eq. (5)]. By employing optimal control theory, the solution satisfying the stationary condition of J[xˆ, v] is given by
xˆ∗(y, z) = Ep(x|y,z)[x] = Kxyy + Kxzz, (6)
v∗(y, z) = −M −1Πzxxˆ∗(y, z) − M −1Πzzz, (7)
where the estimation gains Kxy and Kxz and control gains Πzx and Πzz are the solutions of the observationbased Riccati equation [see Sec. I in Supplemental Material] [33, 34]. However, this equation is multivariable and nonlinear, making analytical treatment intractable. Therefore, the previous work investigated it numerically [33, 34]. Numerical Results.– Before presenting the analytical results, we briefly summarize the numerical results of Eqs. (6) and (7) [33, 34]. At low energy availability (-
Q = 100), the memory control gains, Πzx and Πzz, vanish, indicating that no observational information is encoded into the memory zt [Fig. 1(c,d)]. As a result, the organism estimates the environmental state xt solely based on the current observation yt, corresponding to
memoryless estimation. In contrast, when more energy is available (Q = 1000), Πzx and Πzz take nonzero values, and memory-based estimation becomes optimal [Fig. 1(e,f)]. These results demonstrate a qualitative change in estimation strategies depending on energy availability. This phase transition is discontinuous even though this model is linear and Gaussian [Fig. 2(a)]. At low Q, Πzx = Πzz = 0 is the only solution and clearly optimal. As Q increases, Πzx, Πzz ̸= 0 emerge discontinuously, while Πz-
x = Πzz = 0 remains optimal. After further increase of Q, the optimal solution discontinuously switches from Πzx = Πzz = 0 to Πzx, Πzz ̸= 0. This indicates that estimation strategies change qualitatively with energy availability. While increasing Q induces a monotonic transition from memoryless to memory-based estimation [Fig. 2(a)], increasing the observation noise E leads to a nonmonotonic transition [Fig. 2(b)]. At low E, memoryless estimation is optimal since the current observation contains s-
ufficient information. As E increases, the current observation becomes less reliable, and memorybased estimation becomes favorable. However, when E becomes too large, memory control becomes ineffective, and memoryless estimation again becomes optimal. This nonmonotonic phase transition is also observed in recent human experiments [29]. Furthermore, the state noise

3
FIG. 3. Discriminant Θ [Eq. (10)] and optimal memory control gain Φz∗y [Eq. (9)] for Φzz = 1. D is set to 1.
D also induces a similar nonmonotonic phase transition [33, 34]. Similar to the transition with respect to Q, those with respect to M and F also occur monotonically but in the opposite direction: increasing M or F induces a transitions from memory-based to memoryless estimation [33, 34]. Moreover, the phase boundaries with respect to Q, M , and F collapse onto a single curve when plotted against Q/M F [Fig. 2(c)], indicating a scaling relation among these parameters. While the scaling relation Q/M-
 is trivial, the scaling relation Q/M F is not because Q and M represent energy availability, whereas F characterizes intrinsic noise. Theoretical Analysis.– In this Letter, we analytically clarify the mechanism of these numerically observed phenomena in the resource-induced phase transitions. The main obstacle hindering analytical treatment is the complexity of the observation-based Riccati equation, which must be solved to determine the estimation gains Kxy and Kxz and the control gains Πzx and -
Πzz [Eqs. (6) and (7)]. To overcome this difficulty, we reformulate the memory control function as a linear function of the observation y and memory z:
vΦ(y, z) := −Φzyy − Φzzz, (8)
where Φzy ∈ R and Φzz ≥ 0. Φzy is the control gain for encoding observational information, whereas Φzz provides negative feedback to suppress memory fluctuations. This reformulation does not compromise optimality because the optimal memory control function v∗(y, z) is also linear [Eq. (7)]. Moreover, this reformulation enables us to derive an analytical expression of the objective function J [see Sec. II in Supplemental Material]. First, we fix Φzz and optimize only Φzy. From the stationarity cond-
ition ∂J/∂Φzy = 0, we obtain the following optimal control gain [see Sec III. in Supplemental Material]:
Φz∗y = 0, ±
√
(Φzz + 1)2 (D + 2E) F {D + 2 (Φzz + 1) E} D
(√Θ − 1
)
, (9)
Θ := 4ΦzzD2E2 (Q/M F )
(Φzz + 1) {D + 2 (Φzz + 1) E} (D + 2E)2 . (10)
When Θ ≤ 1, the only real solution is Φz∗y = 0, meaning that no observational information is encoded into mem
FIG. 4. (a,b,c) J as functions of Φzy and Φzz. Red and magenta curves represent ∂J/∂Φzy = 0 and ∂J/∂Φzz = 0, respectively, while cyan lines indicate Φzz = 0.26. (d) Φz∗y as a function of Q. Cyan curves are the intersections between ∂J/∂Φzy = 0 and Φzz = 0.26, whereas magenta curves correspond to the intersections between ∂J/∂Φzy = 0 and ∂J/∂Φzz = 0. The rest of the parameters are set to 1.
ory. Thus, the memoryless estimation strategy is optimal. On the other hand, when Θ > 1, nonzero real solutions Φz∗y ̸= 0 emerge, indicating that memory-based estimation can be optimal. Therefore, Θ serves as a discriminant identifying the phase boundary between memoryless and memory-based estimation. Θ captures the scaling relation Q/M F because it depends on Q, M , and F only through this form [Eq. (10)]. Θ increases monotonically with increasing Q/M F , which accounts for the monotonic phase tr-
ansitions with respect to Q, M , and F . In contrast, the dependence of Θ on E and D is more intricate [Fig. 3(a)]. When E ≪ D, Θ ≈ 4 (Q/M F ) (Φzz + 1)−1 ΦzzD−1E2, which increases with increasing E or decreasing D. Conversely, when E ≫ D,
Θ ≈ (Q/M F ) (Φzz + 1)−2 ΦzzD2E−1, which decreases with increasing E or decreasing D. Therefore, Θ also accounts for the nonmonotonic phase transitions with respect to E and D. However, Eqs. (9) and (10) do not capture the discontinuity of the phase transition, since Φz∗y varies continuously from zero to nonzero values [Fig. 3(b)]. In fact, the intersections between ∂J/∂Φzy = 0 [Fig. 4(a-c), red] and Φzz = constant [Fig. 4(a-c), cyan] change continuously from zero to nonzero values as Q increases -
[Fig. 4(d), cyan]. This result suggests that the simultaneous optimization of both Φzy and Φzz is essential to produce the discontinuous phase transition. Indeed, the intersections between ∂J/∂Φzy = 0 [Fig. 4(a-c), red] and ∂J/∂Φzz = 0 [Fig. 4(a-c), magenta] emerge discontinuously at nonzero values as Q increases [Fig. 4(d), magenta]. These results indicate that the discontinuity arises from the simultaneous optimization of two distinct memory control gains:

4
FIG. 5. (a) Red, magenta, green, and orange curves indicate ∂J/∂Φzy = 0, ∂J/∂Φzz = 0, ∂JQ/∂Φzz = 0, and ∂JM /∂Φzz = 0, respectively. The rest of the parameters are set to 1. (b) Magenta, green, and orange curves are the parameter values at which ∂J/∂Φzz = 0, ∂JQ/∂Φzz = 0, and ∂JM /∂Φzz = 0 intersect tangentially with ∂J/∂Φzy = 0, respectively. The magenta curve (ΘT = 1) is obtained numerically, whereas the green (ΘQ = 1) and orange (ΘM = 1) curves are obtained analytically from Eqs. (14) and (15),-
 respectively. Blue, green, and orange regions correspond to ΘQ < 1, 1 ≤ ΘQ and ΘM < 1, and 1 ≤ ΘM , respectively. The control gains Πzx and Πzz obtained numerically from the observation-based Riccati equation are zero at black dots and take nonzero values at red dots.
Φzy, which encodes the observational information, and Φzz, which stabilizes the memory state. We next investigate the simultaneous optimization of Φzy and Φzz more analytically. While ∂J/∂Φzy = 0 can be solved analytically, ∂J/∂Φzz = 0 is intractable analytically. To address this issue, we decompose the objective function J into the state estimation error JQ and the memory control cost JM as follows:
J = JQ + JM , (11)
JQ := Tli→m∞
1
TE
[
∫T
0
Q(xt − xˆt)2dt
]
, (12)
JM := Tli→m∞
1
TE
[
∫T
0
M vt2dt
]
. (13)
Although ∂J/∂Φzz = 0 is intractable, its components ∂JQ/∂Φzz = 0 and ∂JM /∂Φzz = 0 are more tractable. Moreover, the values of Φzz that satisfy ∂JQ/∂Φzz = 0 [Fig. 5(a), green] and ∂JM /∂Φzz = 0 [Fig. 5(a), orange] serve as the upper and lower bounds, respectively, for the value of Φzz that satisfies ∂J/∂Φzz = 0 [Fig. 5(a), magenta] [see Sec. IV B in Supplemental Material]. Thus, analyzing ∂JQ/∂Φzz = 0 and ∂JM /∂Φzz = 0 enables us to identify the necessary and sufficient conditions for the intersec-
tion between ∂J/∂Φzy = 0 and ∂J/∂Φzz = 0. The conditions under which ∂JQ/∂Φzz = 0 and ∂JM /∂Φzz = 0 intersect with ∂J/∂Φzy = 0 are given by ΘQ ≥ 1 and ΘM ≥ 1, respectively, where
ΘQ = 2β2δ
(1 + 2β)2 (1 + 4β) , (14)
ΘM ≈ β2δ
(1 + 2β)2 {
(1 + 6β) + √4β (4 + 13β)
} , (15)
with β := E/D and δ := QD/M F [see Sec. IV C and D in Supplemental Material]. These expressions suggest that the key parameters governing the resource-induced phase transitions are only β and δ: β represents sensory uncertainty, and δ represents energy availability or memory accuracy. This observation can be analytically demonstrated without approximation [see Sec. IV A in Supplemental Material]. Since δ includes Q/M F , it captures the scaling relation. In addition, while ΘQ and ΘM vary monotonic-
ally with δ, they exhibit nonmonotonic dependence on β [Fig. 5(b), green and orange curves], thereby reproducing the nonmonotonic behavior.
We then define the condition under which ∂J/∂Φzz = 0 intersects with ∂J/∂Φzy = 0 as ΘT ≥ 1. Although ΘT is analytically intractable, ΘQ ≥ ΘT ≥ ΘM always holds [Fig. 5(b), green, magenta, and orange curves], because the values of Φzz that satisfy ∂JQ/∂Φzz = 0 [Fig. 5(a), green] and ∂JM /∂Φzz = 0 [Fig. 5(a), orange] serve as the upper and lower bounds, respectively, for the value of Φzz that satisfies ∂J/∂Φzz = 0 [Fig. 5(a), magenta] [see Sec. IV B in Supplemental Material]. When ΘQ < 1 [Fig. 5(b), -
blue region], ΘT < 1 always holds, and ∂J/∂Φzy = 0 and ∂J/∂Φzz = 0 do not intersect. Thus, nonzero memory control gains do not emerge [Fig. 5(b), black dots]. In contrast, when ΘM ≥ 1 [Fig. 5(b), orange region], ΘT ≥ 1 always holds, and ∂J/∂Φzy = 0 and ∂J/∂Φzz = 0 intersect. Consequently, nonzero memory control gains emerge [Fig. 5(b), red dots]. Finally, when ΘQ ≥ 1 and ΘM < 1 [Fig. 5(b), green region], it remains ambiguous whether nonzero memory control gains emerge or not [Fig. 5(b), black and -
red dots]. Since this analytical classification [Fig. 5(b), blue, green, and orange regions] is consistent with the numerical result [Fig. 5(b), black and red dots], we thereby establish an analytical foundation for the resource-induced phase transitions.
Discussion.– In this Letter, we analytically clarified the mechanism for the discontinuous, nonmonotonic, and scaling behaviors in the resource-induced phase transitions. Discontinuous phase transitions in informationprocessing strategies have also been reported within the information bottleneck framework [38–42]. While the information bottleneck formulates resource limitations in terms of mutual information, our optimal control framework expresses them through control costs [30–34]. Despite these-
 modeling differences, both frameworks exhibit discontinuous phase transitions even in linear-Gaussian settings, suggesting that such discontinuities could be characteristic of resource-limited information processing.
In addition, our work analytically revealed nonmonotonic phase transitions with respect to sensory uncertainty. Similar nonmonotonic transitions have been reported by recent human experiments [29]. These experiments have also reported that increasing environmental volatility induces a monotonic phase transition from memory-based to memoryless estimation strategies [29]. Our framework analytically reproduces this behavior as well [see Sec. V in Supplemental Material]. These results suggest that hum-
an information processing may also be

5
characterized by resource limitations. Memory-based information processing [Fig. 1(e,f)] could correspond to coherent feed-forward loops (cFFLs) [43–47]. A cFFL consists of a fast direct pathway and a slow indirect pathway, which filters out short-lived and spurious signals by integrating these inputs. Such motifs are known to be highly overrepresented in transcriptional, signaling, and neural networks compared with random networks [48–50]. Our framework may offer a
statistical perspective on when and how cFFLs become more adaptive than simpler direct pathways.
The first author was supported by JST ACT-X (Grant Number JPMJAX24LB) and Special Postdoctoral Researcher (SPDR) Program at RIKEN. This research was supported by JST CREST (Grant Number JPMJCR2011) and JSPS KAKENHI (Grant Number 25H01365).
[1] T. J. Kobayashi, Implementation of Dynamic Bayesian Decision Making by Intracellular Kinetics, Physical Review Letters 104, 228104 (2010). [2] M. Hinczewski and D. Thirumalai, Cellular Signaling Networks Function as Generalized Wiener-Kolmogorov Filters to Suppress Noise, Physical Review X 4, 041017 (2014). [3] N. B. Becker, A. Mugler, and P. R. ten Wolde, Optimal Prediction by Cellular Signaling Networks, Physical Review Letters 115, 258103 (2015). [4] T. Mora and I. Nemenman, Physical Limit -
to Concentration Sensing in a Changing Environment, Physical Review Letters 123, 198101 (2019). [5] K. Nakamura and T. J. Kobayashi, Connection between the Bacterial Chemotactic Network and Optimal Filtering, Physical Review Letters 126, 128102 (2021). [6] R. A. Heinonen, L. Biferale, A. Celani, and M. Vergassola, Optimal policies for Bayesian olfactory search in turbulent flows, Physical Review E 107, 055105 (2023). [7] J. Rode, M. Novak, and B. M. Friedrich, Information Theory of Chemotactic Age-
nts Using Both Spatial and Temporal Gradient Sensing, PRX Life 2, 023012 (2024). [8] K. Krishnamurthy, M. R. Nassar, S. Sarode, and J. I. Gold, Arousal-related adjustments of perceptual biases optimize perception in dynamic environments, Nature Human Behaviour 1, 0107 (2017). [9] A. T. Piet, A. El Hady, and C. D. Brody, Rats adopt the optimal timescale for evidence integration in a dynamic environment, Nature Communications 9, 4265 (2018). [10] A. Kutschireiter, M. A. Basnak, R. I. Wilson, and J. -
Drugowitsch, Bayesian inference in ring attractor networks, Proceedings of the National Academy of Sciences 120, e2210622120 (2023). [11] G. Lan, P. Sartori, S. Neumann, V. Sourjik, and Y. Tu, The energy–speed–accuracy trade-off in sensory adaptation, Nature Physics 8, 422 (2012). [12] C. C. Govern and P. R. ten Wolde, Energy Dissipation and Noise Correlations in Biochemical Sensing, Physical Review Letters 113, 258102 (2014). [13] C. C. Govern and P. R. ten Wolde, Optimal resource allocation in c-
ellular sensing systems, Proceedings of the National Academy of Sciences 111, 17486 (2014). [14] A. H. Lang, C. K. Fisher, T. Mora, and P. Mehta, Thermodynamics of Statistical Inference by Cells, Physical Review Letters 113, 148103 (2014). [15] S. Ito and T. Sagawa, Maxwell’s demon in biochemical signal transduction with feedback loop, Nature Communications 6, 7498 (2015). [16] A. J. Tjalma, V. Galstyan, J. Goedhart, L. Slim, N. B. Becker, and P. R. ten Wolde, Trade-offs between cost
and information in cellular prediction, Proceedings of the National Academy of Sciences 120, e2303078120 (2023). [17] S. J. Bryant and B. B. Machta, Physical Constraints in Intracellular Signaling: The Cost of Sending a Bit, Physical Review Letters 131, 068401 (2023). [18] G. Nicoletti and D. M. Busiello, Tuning Transduction from Hidden Observables to Optimize Information Harvesting, Physical Review Letters 133, 158401 (2024). [19] S. B. Laughlin, R. R. de Ruyter van Steveninck, and J. C. Anderson-
, The metabolic cost of neural information, Nature Neuroscience 1, 36 (1998). [20] P. Lennie, The Cost of Cortical Computation, Current Biology 13, 493 (2003). [21] J. G. Burns, J. Foucaud, and F. Mery, Costs of memory: lessons from ’mini’ brains, Proceedings of the Royal Society B: Biological Sciences 278, 923 (2010). [22] F. Lieder and T. L. Griffiths, Resource-rational analysis: Understanding human cognition as the optimal use of limited computational resources, Behavioral and Brain Sciences 43-
, e1 (2020). [23] R. Polan ́ıa, D. Burdakov, and T. A. Hare, Rationality, preferences, and emotions with biological constraints: it all starts from our senses, Trends in Cognitive Sciences 28, 264 (2024). [24] G. Tavoni, V. Balasubramanian, and J. I. Gold, What is optimal in optimal inference?, Current Opinion in Behavioral Sciences Artificial Intelligence, 29, 117 (2019). [25] R. Bhui, L. Lai, and S. J. Gershman, Resource-rational decision making, Current Opinion in Behavioral Sciences Value base-
d decision-making, 41, 15 (2021). [26] D. Kahneman, Thinking, Fast and Slow (Farrar, Straus and Giroux, 2011). [27] M. T. Gailliot, R. F. Baumeister, C. N. DeWall, J. K. Maner, E. A. Plant, D. M. Tice, L. E. Brewer, and B. J. Schmeichel, Self-control relies on glucose as a limited energy source: Willpower is more than a metaphor., Journal of Personality and Social Psychology 92, 325 (2007). [28] E. Masicampo and R. F. Baumeister, Toward a Physiology of Dual-Process Reasoning and Judgment: Lemonade-
, Willpower, and Expensive Rule-Based Analysis, Psychological Science 19, 255 (2008). [29] G. Tavoni, T. Doi, C. Pizzica, V. Balasubramanian, and J. I. Gold, Human inference reflects a normative balance of complexity and accuracy, Nature Human Behaviour 6, 1153 (2022). [30] T. Tottori and T. J. Kobayashi, Memory-Limited Partially Observable Stochastic Control and Its Mean-Field Control Approach, Entropy 24, 1599 (2022). [31] T. Tottori and T. J. Kobayashi, Forward-Backward Sweep Method for the Sys-
tem of HJB-FP Equations in

6
Memory-Limited Partially Observable Stochastic Control, Entropy 25, 208 (2023). [32] T. Tottori and T. J. Kobayashi, Decentralized Stochastic Control with Finite-Dimensional Memories: A Memory Limitation Approach, Entropy 25, 791 (2023). [33] T. Tottori and T. J. Kobayashi, Resource limitations induce phase transitions in biological information processing, Physical Review Research 7, L042012 (2025). [34] T. Tottori and T. J. Kobayashi, Theory for optimal estimation and control under resource limit-
ations and its applications to biological information processing and decision-making, Physical Review Research 7, 043048 (2025). [35] J. Yong and X. Y. Zhou, Stochastic Controls (Springer New York, New York, NY, 1999). [36] M. Nisio, Stochastic Control Theory, Probability Theory and Stochastic Modelling, Vol. 72 (Springer Japan, Tokyo, 2015).
[37] A. Bensoussan, Estimation and Control of Dynamical Systems, Interdisciplinary Applied Mathematics, Vol. 48 (Springer International Publishing, Cham, 2018). [38] N. Tishby, F. C. Pereira, and W. Bialek, The information bottleneck method (2000), arXiv:physics/0004057. [39] G. Chechik, A. Globerson, N. Tishby, and Y. Weiss, Information Bottleneck for Gaussian Variables, Journal of Machine Learning Research 6, 165 (2005). [40] F. Creutzig, A. Globerson, and N. Tishby, Past-future information bott-
leneck in dynamical systems, Physical Review E 79, 041925 (2009). [41] V. Sachdeva, T. Mora, A. M. Walczak, and S. E. Palmer, Optimal prediction with resource constraints using the
information bottleneck, PLOS Computational Biology 17, e1008743 (2021). [42] V. Galstyan, A. Tjalma, and P. R. t. Wolde, Intuitive dissection of the Gaussian information bottleneck method with an application to optimal prediction (2025), arXiv:2507.05183 [q-bio].
[43] U. Alon, An Introduction to Systems Biology: Design Principles of Biological Circuits, 2nd ed. (Chapman and Hall/CRC, 2019). [44] U. Alon, Network motifs: theory and experimental approaches, Nature Reviews Genetics 8, 450 (2007). [45] S. Mangan, A. Zaslaver, and U. Alon, The Coherent Feedforward Loop Serves as a Sign-sensitive Delay Element in Transcription Networks, Journal of Molecular Biology 334, 197 (2003). [46] S. Mangan and U. Alon, Structure and function of the feed-forward loop netwo-
rk motif, Proceedings of the National Academy of Sciences 100, 11980 (2003). [47] E. Dekel, S. Mangan, and U. Alon, Environmental selection of the feed-forward loop circuit in gene-regulation networks, Physical Biology 2, 81 (2005). [48] R. Milo, S. Shen-Orr, S. Itzkovitz, N. Kashtan, D. Chklovskii, and U. Alon, Network Motifs: Simple Building Blocks of Complex Networks, Science 298, 824 (2002). [49] S. S. Shen-Orr, R. Milo, S. Mangan, and U. Alon, Network motifs in the transcriptional regulation -
network of Escherichia coli, Nature Genetics 31, 64 (2002). [50] R. Milo, S. Itzkovitz, N. Kashtan, R. Levitt, S. Shen-Orr, I. Ayzenshtat, M. Sheffer, and U. Alon, Superfamilies of Evolved and Designed Networks, Science 303, 1538 (2004).

1
Supplemental Material for: Theoretical Analysis of Resource-Induced Phase Transitions in Estimation Strategies
Takehiro Tottori1,2 and Tetsuya J. Kobayashi2
1Laboratory for Neural Computation and Adaptation, RIKEN Center for Brain Science, 2-1 Hirosawa, Wako, Saitama 351-0198, Japan 2Institute of Industrial Science, The University of Tokyo, 4-6-1 Komaba, Meguro, Tokyo 153-8505, Japan
CONTENTS
I. Review of Previous Work 1
II. Reformulation of Control Function 2
A. Analytical Expression of Covariance Matrix Σ ̃ 3 B. Analytical Expression of Objective Function J 3
III. Optimization of Only Φzy at Fixed Φzz 5
IV. Simultaneous Optimization of Φzy and Φzz 6 A. Scaling Relation 6 B. Relationship between ∂J/∂Φzz = 0, ∂JQ/∂Φzz = 0, and ∂JM /∂Φzz = 0 8 C. Analysis of the Intersection between ∂J/∂Φzy = 0 and ∂JQ/∂Φzz = 0 8 D. Analysis of the Intersection between ∂J/∂Φzy = 0 and ∂JM /∂Φzz = 0 10
V. Phase Transition with respect to Environmental Volatility 12
References 13
I. REVIEW OF PREVIOUS WORK
In this section, we briefly review the optimality condition derived in the previous work [1, 2]. The previous work introduced the following extended variables: extended state x ̃t, extended observation y ̃t, extended control u ̃t, and extended standard Wiener process ω ̃t.
x ̃t :=
( xt zt
)
, y ̃t :=
( yt zt
)
, u ̃t :=
( xˆt vt
)
, ω ̃t :=
( ωt ξt
)
. (S1)
By using these extended variables, the minimal model described in the main text can be transformed into the following linear-quadratic-Gaussian (LQG) problem in optimal control theory:
dx ̃t =
(A ̃x ̃t + B ̃u ̃t
)
dt + σ ̃dω ̃t, y ̃t ∼ N (y ̃t|H ̃ x ̃t, E ̃), u ̃t = u ̃(y ̃t),
J [u ̃] := Tli→m∞
1
TE
[∫ T
0
(
x ̃t⊤Q ̃x ̃t − 2x ̃t⊤S ̃u ̃t + u ̃t⊤R ̃u ̃t
)
dt
]
, u ̃ = arg mu ̃in J[u ̃], (S2)
where the parameters are given by
A ̃ :=
( −1 0 00
)
, B ̃ :=
(0 0 01
)
, σ ̃ :=
( √D 0
0 √F
)
, H ̃ :=
(1 0 01
)
, E ̃ :=
(E 0 00
)
,
Q ̃ :=
(Q 0 00
)
, S ̃ :=
(Q 0 00
)
, R ̃ :=
(Q 0 0M
)
. (S3)

2
By employing Pontryagin’s minimum principle on the probability density function space [1–9], the solution that satisfies the optimality condition δJ ̃/δu ̃ = 0 is given by
u ̃∗(y ̃) = −R ̃−1 (  ̃ΠB ̃ − S ̃
)⊤ K ̃ y ̃, (S4)
where K ̃ := Σ ̃ H ̃ ⊤(E ̃ + H ̃ Σ ̃ H ̃ ⊤)−1 is the estimation gain matrix because it satisfies K ̃ y ̃ = Ep(x ̃|y ̃)[x ̃]. Σ ̃ and  ̃Π are the covariance matrix and the control gain matrix, respectively, which are the solutions of the following steady-state equations:
O = σ ̃σ ̃⊤ +
(
A ̃ − B ̃R ̃−1 (  ̃ΠB ̃ − S ̃
)⊤ K ̃ H ̃
)
Σ ̃ + Σ ̃
(
A ̃ − B ̃R ̃−1 (  ̃ΠB ̃ − S ̃
)⊤ K ̃ H ̃
)⊤
, (S5)
O = Q ̃ + A ̃⊤  ̃Π + Π ̃ A ̃ −
(  ̃ΠB ̃ − S ̃
) R ̃−1 (Π ̃ B ̃ − S ̃
)⊤
+
(
I − K ̃ H ̃
)⊤ (  ̃ΠB ̃ − S ̃
) R ̃−1 (  ̃ΠB ̃ − S ̃
)⊤ (
I − K ̃ H ̃
)
. (S6)
Therefore, the optimal solution [Eq. (S4)] is obtained by solving Eqs. (S5) and (S6). Eq. (S6) is similar to the Riccati equation in the standard optimal control theory [10–12], but the last term is additional because this work considers partial and noisy observations. Eq. (S6) is referred to as the observation-based Riccati equation [1, 2]. If the extended observation y ̃t is identical to the extended state x ̃t, i.e., H ̃ = I and E ̃ = O, the last term of the observation-based Riccati equation v-
anishes, reducing it to the standard Riccati equation. From Eqs. (S3) and (S4), the optimal state estimator xˆ∗ and memory control v∗ are calculated as follows:
( xˆ∗(y, z) v∗(y, z)
)
=−
(Q 0 0M
)−1 (( Πxx Πxz
Πzx Πzz
)( 0 0
01
)
−
(Q 0 00
))⊤ ( Kxy Kxz
Kzy Kzz
)( y
z
)
=
( Kxyy + Kxzz
−M −1Πzx (Kxyy + Kxzz) − M −1Πzz (Kzyy + Kzzz)
)
. (S7)
The estimation gain matrix K ̃ := Σ ̃ H ̃ ⊤(E ̃ + H ̃ Σ ̃ H ̃ ⊤)−1 is calculated as follows:
K ̃ =
( Σxx Σxz Σzx Σzz
)( 1 0
01
)⊤ (( E 0
00
)
+
(1 0 01
) ( Σxx Σxz
Σzx Σzz
)( 1 0
01
)⊤)−1
=
( (E + Σx|z
)−1 Σx|z
(E + Σx|z
)−1 EΣxzΣz−z1 01
)
, (S8)
where Σx|z := Σxx − Σ2xzΣz−z1 is the conditional variance of the state x given the memory z. Therefore, the optimal
state estimator xˆ∗ and memory control v∗ are given by
xˆ∗(y, z) = (E + Σx|z
)−1 Σx|zy + (E + Σx|z
)−1 EΣxzΣz−z1z, (S9)
v∗(y, z) = −M −1Πzxxˆ∗(y, z) − M −1Πzzz. (S10)
To obtain xˆ∗(y, z) and v∗(y, z), it is necessary to solve Eqs. (S5) and (S6) to determine Σ ̃ and  ̃Π. However, these equations are analytically intractable due to their multivariable and nonlinear nature. Therefore, the previous work investigated them numerically [1, 2]. In numerical calculations, the steady-state equation of the precision matrix Λ ̃ := Σ ̃ −1, i.e.,
O=−
(
A ̃ − B ̃R ̃−1 (  ̃ΠB ̃ − S ̃
)⊤ K ̃ H ̃
)⊤
Λ ̃ − Λ ̃
(
A ̃ − B ̃R ̃−1 (Π ̃ B ̃ − S ̃
)⊤ K ̃ H ̃
)
− Λ ̃σ ̃σ ̃⊤Λ ̃, (S11)
is more practical than that of the covariance matrix Σ ̃ [Eq. (S5)] because the elements of Λ ̃ converge to 0 when those of Σ ̃ diverge to ∞. Therefore, Eq. (S11) is employed in numerical experiments instead of Eq. (S5).
II. REFORMULATION OF CONTROL FUNCTION
To enable analytical treatment, we reformulate the control function as a linear function of the observation y and memory z:
vΦ(y, z) := −Φzyy − Φzzz, (S12)

3
where Φzy ∈ R and Φzz ≥ 0. This reformulation does not degrade performance because the optimal control function
v∗(y, z) [Eq. (S10)] is given by the following linear function:
v∗(y, z) = −M −1Πzxxˆ∗(y, z) − M −1Πzzz
= −M −1Πzx
{(E + Σx|z
)−1 Σx|zy + (E + Σx|z
)−1 EΣxzΣz−z1z
}
− M −1Πzzz
= − M −1Πzx
(E + Σx|z
)−1 Σx|z
} {{ } Φz∗y
y − M −1 {
Πzx
(E + Σx|z
)−1 EΣxzΣz−z1 + Πzz
}
} {{ } Φz∗z
z, (S13)
where Φz∗y and Φz∗z are the control gains that satisfy the optimality condition in the previous work [1, 2].
As shown below, this reformulation enables us to derive the analytical expressions of the covariance matrix Σ ̃ (Sec. II A) and the objective function J (Sec. II B).
A. Analytical Expression of Covariance Matrix  ̃Σ
When the control function is given by Eq. (S12), the steady-state equation for the covariance matrix Σ ̃ becomes
O = D ̃ +
(A ̃ − B ̃Φ ̃ H ̃
) Σ ̃ + Σ ̃
(A ̃ − B ̃Φ ̃ H ̃
)⊤
. (S14)
If the control gain matrix is given by Φ ̃ = R ̃−1(Π ̃ B ̃ − S ̃)⊤K ̃ , Eq. (S14) becomes Eq. (S5). However, it is analytically intractable because K ̃ := Σ ̃ H ̃ ⊤(E ̃ + H ̃ Σ ̃ H ̃ ⊤)−1 introduces nonlinearity. In contrast, when Φ ̃ is fixed independently of Σ ̃ , this nonlinearity is avoided, and Eq. (S14) becomes linear, allowing for analytical solutions. Substituting the parameters [Eq. (S3)] into Eq. (S14), we obtain
(0 0 00
)
=
(D 0 0F
)
+
(( −1 0 00
)
−
(0 0 01
) ( Φyy Φyz
Φzy Φzz
)( 1 0
01
)) ( Σxx Σxz
Σzx Σzz
)
+
( Σxx Σxz Σzx Σzz
) (( −1 0
00
)
−
(0 0 01
) ( Φyy Φyz
Φzy Φzz
)( 1 0
01
))⊤
=
(D 0 0F
)
+
( −1 0 −Φzy −Φzz
) ( Σxx Σxz
Σzx Σzz
)
+
( Σxx Σxz Σzx Σzz
) ( −1 −Φzy 0 −Φzz
)
. (S15)
As a result, Σxx, Σxz, and Σzz are given by
Σxx = D
2 , (S16)
Σxz = − ΦzyΣxx
Φzz + 1 = − ΦzyD
2 (Φzz + 1) , (S17)
Σzz = F − 2ΦzyΣxz
2Φzz
= Φz2yD + (Φzz + 1) F
2 (Φzz + 1) Φzz
. (S18)
We note that Σxz = Σzx holds because Σ ̃ is a symmetric matrix. Furthermore, the conditional variance Σx|z := Σxx − Σ2xzΣz−z1 is given by
Σx|z = Φz2yD + (Φzz + 1)2 F
(Φzz + 1) {Φz2yD + (Φzz + 1) F }
D
2 . (S19)
B. Analytical Expression of Objective Function J
The objective function is given by
J := Tli→m∞
1
TE
[∫ T
0
(
x ̃t⊤Q ̃x ̃t − 2x ̃t⊤S ̃u ̃t + u ̃t⊤R ̃u ̃t
)
dt
]
. (S20)

4
When the extended control is given by u ̃t := −Φ ̃ y ̃t, it becomes
J = Tli→m∞
1
TE
[∫ T
0
(
x ̃t⊤Q ̃x ̃t + 2x ̃t⊤S ̃Φ ̃ y ̃t + y ̃t⊤Φ ̃ ⊤R ̃Φ ̃ y ̃t
)
dt
]
. (S21)
In the long-time limit T → ∞, the probability distribution of the extended state x ̃ converges to the following stationary distribution:
p(x ̃) = N
(
x ̃
∣ ∣
∣0, Σ ̃
)
. (S22)
For simplicity, we consider the case where the mean of x ̃ is zero, whereas the extension to nonzero means is straightforward [2]. From Eq. (S21) and (S22), we obtain
J=
∫∫
p(y ̃|x ̃)p(x ̃)
[
x ̃⊤Q ̃x ̃ + 2x ̃⊤S ̃Φ ̃ y ̃ + y ̃⊤Φ ̃ ⊤R ̃Φ ̃ y ̃
]
dx ̃dy ̃
= tr
{(Q ̃ + 2S ̃Φ ̃ H ̃ + H ̃ ⊤Φ ̃ ⊤R ̃Φ ̃ H ̃
) Σ ̃ + Φ ̃ ⊤R ̃Φ ̃ E ̃
}
. (S23)
The parameters Q ̃, S ̃, R ̃, H ̃ , and E ̃ are given by Eq. (S3). In addition, from
u ̃ := −Φ ̃ y ̃ ⇒
( xˆ∗
vΦ
)
=−
( − (E + Σx|z
)−1 Σx|z − (E + Σx|z
)−1 EΣxzΣz−z1
Φzy Φzz
)( y
z
)
, (S24)
Φ ̃ is given by
( Φxx Φxz Φzx Φzz
)
=
( − (E + Σx|z
)−1 Σx|z − (E + Σx|z
)−1 EΣxzΣz−z1
Φzx Φzz
)
. (S25)
As a result, Eq. (S23) is calculated as follows:
J = Q EΣx|z
E + Σx|z
+ M {Φz2y (Σxx + E) + 2ΦzyΦzzΣxz + Φz2zΣzz
} . (S26)
The first and second terms correspond to the state estimation error and the memory control cost, respectively. To clarify this point, we decompose the objective function J into the state estimation error JQ and the memory control cost JM as follows:
J = JQ + JM , (S27)
JQ := Q EΣx|z
E + Σx|z
, (S28)
JM := M {Φz2y (Σxx + E) + 2ΦzyΦzzΣxz + Φz2zΣzz
} . (S29)
Substituting the analytical expressions of Σxx, Σxz, Σzz, and Σx|z [Eqs. (S16)–(S19)], JQ and JM can be rewritten as follows:
JQ = Q
{
Φz2yD + (Φzz + 1)2 F
}
DE
Φz2y {D + 2 (Φzz + 1) E} D + (Φzz + 1)2 (D + 2E) F , (S30)
JM = M Φz2yD + 2Φz2y (Φzz + 1) E + Φzz (Φzz + 1) F
2 (Φzz + 1) . (S31)

5
III. OPTIMIZATION OF ONLY Φzy AT FIXED Φzz
We first analyze the stationary condition ∂J/∂Φzy = 0 at fixed Φzz. From Eqs. (S27), (S30), and (S31), the stationary condition ∂J/∂Φzy = 0 is given by
0 = ∂J
∂Φzy
= ∂JQ
∂Φzy
+ ∂JM
∂Φzy
, (S32)
∂JQ
∂Φzy
= Q −4ΦzyΦzz (Φzz + 1)2 D2E2F
[
Φz2y {D + 2 (Φzz + 1) E} D + (Φzz + 1)2 (D + 2E) F
]2 , (S33)
∂JM
∂Φzy
= M Φzy {D + 2 (Φzz + 1) E}
Φzz + 1 . (S34)
Eq. (S32) is calculated as follows:
0 = ∂J
∂Φzy
= ∂JQ
∂Φzy
+ ∂JM
∂Φzy
⇒ 0 = Q −4ΦzyΦzz (Φzz + 1)2 D2E2F
[
Φz2y {D + 2 (Φzz + 1) E} D + (Φzz + 1)2 (D + 2E) F
]2 + M Φzy {D + 2 (Φzz + 1) E}
Φzz + 1
⇒ 0 = Φzy
[
−4QΦzz (Φzz + 1)3 D2E2F
+M {D + 2 (Φzz + 1) E}
[
{D + 2 (Φzz + 1) E} DΦz2y + (Φzz + 1)2 (D + 2E) F
]2]
⇒ 0 = Φzy
[
−4QΦzz (Φzz + 1)3 D2E2F
+M {D + 2 (Φzz + 1) E}3 D2
(
Φz2y + (Φzz + 1)2 (D + 2E) F
{D + 2 (Φzz + 1) E} D
)2

⇒ 0 = Φzy

−4 QΦzz (Φzz + 1)3 E2F
M {D + 2 (Φzz + 1) E}3 +
(
Φz2y + (Φzz + 1)2 (D + 2E) F
{D + 2 (Φzz + 1) E} D
)2

⇒ 0 = Φzy
(
Φz2y + (Φzz + 1)2 (D + 2E) F
{D + 2 (Φzz + 1) E} D + 2
√
QΦzz (Φzz + 1)3 E2F
M {D + 2 (Φzz + 1) E}3
)
} {{ } ̸=0
×
(
Φz2y + (Φzz + 1)2 (D + 2E) F
{D + 2 (Φzz + 1) E} D − 2
√
QΦzz (Φzz + 1)3 E2F
M {D + 2 (Φzz + 1) E}3
)
⇒ 0 = Φzy
(
Φz2y + (Φzz + 1)2 (D + 2E) F
{D + 2 (Φzz + 1) E} D − 2
√
QΦzz (Φzz + 1)3 E2F
M {D + 2 (Φzz + 1) E}3
)
. (S35)
As a result, the solutions that satisfy ∂J/∂Φzy = 0 are given by Φz∗y = 0 or
Φz∗y = ±
√ √
√ √2
√
QΦzz (Φzz + 1)3 E2F
M {D + 2 (Φzz + 1) E}3 − (Φzz + 1)2 (D + 2E) F
{D + 2 (Φzz + 1) E} D
=±
√
(Φzz + 1)2 (D + 2E) F {D + 2 (Φzz + 1) E} D
(√Θ − 1
)
, (S36)
where
Θ := 4ΦzzD2E2
(Φzz + 1) {D + 2 (Φzz + 1) E} (D + 2E)2
Q
M F . (S37)

6
As discussed in the main text, these solutions account for the scaling relation Q/M F and the nonmonotonic phase transitions with respect to D and E. However, they fail to capture the discontinuity of the resource-induced phase transitions. This means that the stationary condition ∂J/∂Φzy = 0 alone cannot explain the emergence of the discontinuity.
IV. SIMULTANEOUS OPTIMIZATION OF Φzy AND Φzz
To account for the discontinuity of the resource-induced phase transitions, we analyze ∂J/∂Φzz = 0 as well as ∂J/∂Φzy = 0. From Eqs. (S27), (S30), and (S31), ∂J/∂Φzz = 0 is given by
0 = ∂J
∂Φzz
= ∂JQ
∂Φzz
+ ∂JM
∂Φzz
, (S38)
∂JQ
∂Φzz
= Q 2Φz2yD2E2 {(Φzz + 1) (Φzz − 1) F − Φz2yD}
[
Φz2y {D + 2 (Φzz + 1) E} D + (Φzz + 1)2 (D + 2E) F
]2 , (S39)
∂JM
∂Φzz
= M (Φzz + 1)2 F − Φz2yD
2 (Φzz + 1)2 . (S40)
This stationary condition is analytically intractable because it is a high-order equation of Φzz and Φzy. Nevertheless, we are able to derive some analytical results for this stationary condition. This section is organized as follows: In Sec. IV A, we show that the scaling relation Q/M F still holds in the simultaneous optimization of Φzy and Φzz without approximation. In Sec. IV B, we show that the solutions to ∂JQ/∂Φzz = 0 and ∂JM /∂Φzz = 0 provide upper and lower bounds, respectively, for the s-
olution to ∂J/∂Φzz = 0. In Sec. IV C and IV D, we analyze the conditions under which ∂JQ/∂Φzz = 0 and ∂JM /∂Φzz = 0 intersect with ∂J/∂Φzy = 0, respectively. The former gives a necessary condition under which ∂J/∂Φzz = 0 intersect with ∂J/∂Φzy = 0, whereas the latter gives a sufficient condition.
A. Scaling Relation
In this subsection, we analytically demonstrate that the scaling relation Q/M F remains valid even in the simultaneous optimization of Φzy and Φzz. From Eqs. (S38), (S39), and (S40), the stationary condition ∂J/∂Φzz = 0 is calculated as follows:
0 = QD
MF
2(D
F Φz2y
)(E D
)2 {(Φzz + 1) (Φzz − 1) − ( D
F Φz2y
)}
[{1 + 2 (Φzz + 1) E
D
}(D
F Φz2y
) + (Φzz + 1)2 (1 + 2 E
D
)]2 + (Φzz + 1)2 − ( D
F Φz2y
)
2 (Φzz + 1)2 . (S41)
By introducing the reparameterization
α := Q
M , β := E
D , γ := F
D , δ := αγ−1, (S42)
Eq. (S41) is rewritten as
0 = δ 2 (γ−1Φz2y
) β2 {(Φzz + 1) (Φzz − 1) − (γ−1Φz2y
)}
[
{1 + 2 (Φzz + 1) β} (γ−1Φz2y
) + (Φzz + 1)2 (1 + 2β)
]2 + (Φzz + 1)2 − (γ−1Φz2y
)
2 (Φzz + 1)2 . (S43)
This result shows that the functional form of Φz2y is given by
Φz2y = γf (Φzz, β, δ) , (S44)
where f is a function of Φzz, β, and δ that satisfies Eq. (S43). By using Eq. (S42), the solution to the stationary condition ∂J/∂Φzy = 0 [Eqs. (S36) and (S37)] is rewritten as follows:
Φz2y = γ (Φzz + 1)2(1 + 2β)
{1 + 2(Φzz + 1)β}
(√
4Φzz β 2
(Φzz + 1) {1 + 2(Φzz + 1)β} (1 + 2β)2 δ − 1
)
. (S45)

7
FIG. S1. J as functions of Φzy and Φzz. Red, magenta, green, and orange curves indicate ∂J/∂Φzty = 0, ∂J/∂Φzz = 0, ∂JQ/∂Φzz = 0, and ∂JM /∂Φzz = 0, respectively. The rest of the parameters are set to 1.
Substituting Eq. (S44) into Eq. (S45), we obtain
f (Φzz, β, δ) = (Φzz + 1)2(1 + 2β)
{1 + 2(Φzz + 1)β}
(√
4Φzz β 2
(Φzz + 1) {1 + 2(Φzz + 1)β} (1 + 2β)2 δ − 1
)
. (S46)
As a result, the functional form of Φzz is given by
Φzz = g (β, δ) , (S47)
where g is a function of β and δ that satisfies Eq. (S46). Furthermore, the functional form of Φz2y is given by
Φz2y = γh (β, δ) , (S48)
where h (β, δ) := f (g (β, δ) , β, δ). Eqs. (S47) and (S48) show that the phase transition depends only on β and δ. γ determines only the scale of Φz2y and does not affect the phase transition except through δ := αγ−1. In particular, since δ includes the scaling relation Q/M F , it holds even in the simultaneous optimization of Φzy and Φzz.

8
B. Relationship between ∂J/∂Φzz = 0, ∂JQ/∂Φzz = 0, and ∂JM /∂Φzz = 0
Although ∂J/∂Φzz = 0 is analytically intractable, ∂JQ/∂Φzz = 0 and ∂JM /∂Φzz = 0 are more tractable. Specifically, from Eqs. (S39) and (S40), we obtain the following solutions:
∂JQ
∂Φzz
= 0 ⇒ γ−1Φz2y = (Φzz + 1) (Φzz − 1) ⇒ Φzz =
√
γ−1Φz2y + 1, (S49)
∂JM
∂Φzz
= 0 ⇒ γ−1Φz2y = (Φzz + 1)2 ⇒ Φzz =
√
γ−1Φz2y − 1, (S50)
where γ := F/D. In this subsection, we demonstrate that the values of Φzz that satisfy ∂JQ/∂Φzz = 0 [Fig. S1, green] and ∂JM /∂Φzz = 0 [Fig. S1, orange] serve as upper and lower bounds, respectively, for the value of Φzz satisfying ∂J/∂Φzz = 0 [Fig. S1, magenta]. This result enables us to derive the necessary and sufficient conditions under which ∂J/∂Φzy = 0 and ∂J/∂Φzz = 0 intersect. The details are discussed in Sec. IV C and IV D. From Eq. (S43), ∂J/∂Φzz = 0 becomes
w (γ−1Φz2y, Φzz, β, δ) {(Φzz + 1) (Φzz − 1) − γ−1Φz2y
} + (Φzz + 1)2 − γ−1Φz2y = 0, (S51)
where
w (γ−1Φz2y, Φzz, β, δ) := 4β2δ (γ−1Φz2y
) (Φzz + 1)2
[
{1 + 2 (Φzz + 1) β} (γ−1Φz2y
) + (Φzz + 1)2 (1 + 2β)
]2 ≥ 0. (S52)
Eq. (S51) is calculated as follows:
Φzz =
√
(w + 1)2 γ−1Φz2y + w2 − 1
(w + 1) . (S53)
From
∂Φzz
∂w = w +
√
w2 + (w + 1)2 γ−1Φz2y
(w + 1)2 √
w2 + (w + 1)2 γ−1Φz2y
≥ 0 (S54)
and w ≥ 0, we obtain the following inequality:
√
γ−1Φz2y − 1
} {{ } ∂JM /∂Φzz =0
= Φzz(w = 0) ≤ Φzz(w) ≤ Φzz(w = ∞) =
√
γ−1Φz2y + 1
} {{ } ∂JQ/∂Φzz =0
. (S55)
This result shows that the values of Φzz satisfying ∂JQ/∂Φzz = 0 and ∂JM /∂Φzz = 0 are the upper and lower bounds, respectively, for the value of Φzz satisfying ∂J/∂Φzz = 0.
C. Analysis of the Intersection between ∂J/∂Φzy = 0 and ∂JQ/∂Φzz = 0
In this subsection, we analyze the intersection between ∂J/∂Φzy = 0 and ∂JQ/∂Φzz = 0. Since Φzz satisfying ∂JQ/∂Φzz = 0 is the upper bound for Φzz that satisfies ∂J/∂Φzz = 0, the condition under which ∂JQ/∂Φzz = 0 intersects with ∂J/∂Φzy = 0 gives a necessary condition where ∂J/∂Φzz = 0 intersects with it. From ∂J/∂Φzy = 0 [Eq. (S45)] and ∂JQ/∂Φzz = 0 [Eq. (S49)], we obtain the following equation:
(Φzz + 1) (Φzz − 1) = (Φzz + 1)2(1 + 2β)
{1 + 2(Φzz + 1)β}
(√
4Φzz β 2
(Φzz + 1) {1 + 2(Φzz + 1)β} (1 + 2β)2 δ − 1
)
. (S56)
Rearranging this equation, we obtain the following equation:
F (Φzz) = 0, (S57)

9
0.0 0.5 1.0 1.5 2.0
Φzz
−50
0
50
100
150
200
F
β = 1.0
δ = 10.0
δ = 30.0
δ = 50.0
FIG. S2. F as a functions of Φzz [Eq. (S58)]. Black and red dashed lines indicate F = 0 and Φzz = 1, respectively.
where
F (Φzz) := 2β3Φz4z + β2 (5 + 6β) Φz3z + 2β (1 + β) (2 + 3β) Φz2z +
{
(1 + β)2 (1 + 2β) − β2δ
}
Φzz − β2δ. (S58)
The derivatives of F (Φzz) are given by
∂F (Φzz)
∂Φzz
= 8β3Φz3z + 3β2 (5 + 6β) Φz2z + 4β (1 + β) (2 + 3β) Φzz +
{
(1 + β)2 (1 + 2β) − β2δ
}
, (S59)
∂2F (Φzz) ∂Φz2z
= 24β3Φz2z + 6β2 (5 + 6β) Φzz + 4β (1 + β) (2 + 3β) , (S60)
∂3F (Φzz) ∂Φz3z
= 48β3Φzz + 6β2 (5 + 6β) , (S61)
∂4F (Φzz) ∂Φz4z
= 48β3. (S62)
∂2F (Φzz)/∂Φz2z > 0, ∂3F (Φzz)/∂Φz3z > 0, and ∂4F (Φzz)/∂Φz4z > 0 hold for Φzz ≥ 0. Moreover, F (0) = −β2δ < 0.
These results indicate that F (Φzz) = 0 always has a positive root [Fig. S2]. Since Φz2y = γ(Φz2z − 1) [Eq. (S49)],
Φzz ≥ 1 is required to ensure the nonnegativity of Φz2y. This condition is satisfied when F (1) ≤ 0, where
F (1) = (1 + 4β) (1 + 2β)2 − 2β2δ. (S63)
Whether F(1) ≤ 0 holds or not is determined by the following discriminant:
ΘQ := 2β2δ
(1 + 2β)2 (1 + 4β) . (S64)
When ΘQ ≥ 1, F (1) ≤ 0 is satisfied, and ∂J/∂Φzy = 0 and ∂JQ/∂Φzz = 0 intersect. Since Φzz satisfying ∂JQ/∂Φzz = 0 is the upper bound for Φzz that satisfies ∂J/∂Φzz = 0, ∂JQ/∂Φzz = 0 always intersects with ∂J/∂Φzy = 0 when ∂J/∂Φzz = 0 intersects with it. Thus, ΘQ ≥ 1 gives a necessary condition where ∂J/∂Φzy = 0 and ∂J/∂Φzz = 0 intersect. When ΘQ < 1, ∂J/∂Φzy = 0 and ∂J/∂Φzz = 0 do not intersect and nonzero memory control gains do not emerge. From β := E/D and δ := QD/M F , ΘQ is rewritten as foll-
ows:
ΘQ := 2D2E2
(D + 2E)2 (D + 4E)
Q
M F . (S65)
This expression explains the nonmonotonic phase transitions with respect to D and E, and also confirms the scaling relation Q/M F .

10
FIG. S3. (a) G as a functions of Φzz [Eq. (S68)]. Black dashed line indicates G = 0. (b) Blue and orange curves are the parameters where G(Φzz) = 0 [Eq. (S68)] and G ̃(Φzz) = 0 [Eq. (S73)] have a positive root, respectively. While the blue curve is obtained numerically, the orange curve is given by ΘM = 1 [Eq. (S80)].
D. Analysis of the Intersection between ∂J/∂Φzy = 0 and ∂JM /∂Φzz = 0
In this subsection, we analyze the intersection between ∂J/∂Φzy = 0 and ∂JM /∂Φzz = 0. Since Φzz satisfying ∂JM /∂Φzz = 0 is the lower bound for Φzz that satisfies ∂J/∂Φzz = 0, the condition under which ∂JM /∂Φzz = 0 intersects with ∂J/∂Φzy = 0 gives a sufficient condition where ∂J/∂Φzz = 0 intersects with it. From ∂J/∂Φzy = 0 [Eq. (S45)] and ∂JM /∂Φzz = 0 [Eq. (S50)], we obtain the following equation:
Φz2y = γ (Φzz + 1)2(1 + 2β)
{1 + 2(Φzz + 1)β}
(√
4Φzz β 2
(Φzz + 1) {1 + 2(Φzz + 1)β} (1 + 2β)2 δ − 1
)
. (S66)
Rearranging this equation, we obtain the following equation:
G(Φzz) = 0, (S67)
where
G(Φzz) := 2β3Φz4z + β2 (5 + 12β) Φz3z
+ β (1 + 2β) (4 + 13β) Φz2z +
{
(1 + 2β)2 (1 + 6β) − β2δ
}
Φzz + (1 + 2β)3 . (S68)
The derivatives of G(Φzz) are given by
∂ G (Φzz )
∂Φzz
= 8β3Φz3z + 3β2 (5 + 12β) Φz2z + 2β (1 + 2β) (4 + 13β) Φzz +
{
(1 + 2β)2 (1 + 6β) − β2δ
}
, (S69)
∂ 2 G (Φzz ) ∂Φz2z
= 24β3Φz2z + 6β2 (5 + 12β) Φzz + 2β (1 + 2β) (4 + 13β) , (S70)
∂ 3 G (Φzz ) ∂Φz3z
= 48β3Φzz + 6β2 (5 + 12β) , (S71)
∂ 4 G (Φzz ) ∂Φz4z
= 48β3. (S72)
∂2G(Φzz)/∂Φz2z > 0, ∂3G(Φzz)/∂Φz3z > 0, and ∂4G(Φzz)/∂Φz4z > 0 hold for Φzz ≥ 0. Moreover, G(0) = (1 + 2β)3 > 0.
These results indicate that whether G(Φzz) = 0 has positive roots or not depends on ∂G(Φzz)/∂Φzz: At least, when ∂G(Φzz)/∂Φzz ≥ 0, G(Φzz) = 0 does not have positive roots [Fig. S3(a)]. However, a direct analysis of G(Φzz) = 0 is challenging because G(Φzz) is a fourth-order function. To address this issue, we approximate G(Φzz) by a second-order

11
expansion around the origin as follows:
G(Φzz) ≈ G ̃(Φzz) := G(0) + ∂G(0)
∂Φzz
Φzz + 1
2
∂2G(0) ∂Φz2z
Φz2z
= (1 + 2β)3 +
{
(1 + 2β)2 (1 + 6β) − β2δ
}
Φzz + β (1 + 2β) (4 + 13β) Φz2z. (S73)
The solutions of G ̃(Φzz) = 0 are given by
Φzz =
{
β2δ − (1 + 2β)2 (1 + 6β)
}
±
√{
β2δ − (1 + 2β)2 (1 + 6β)
}2 − 4β (1 + 2β)4 (4 + 13β)
2β (1 + 2β) (4 + 13β) . (S74)
To ensure that Φzz is real, the following condition must hold:
{
β2δ − (1 + 2β)2 (1 + 6β)
}2 − 4β (1 + 2β)4 (4 + 13β) ≥ 0
⇒ β4δ2 − 2β2 (1 + 2β)2 (1 + 6β) δ + (1 + 2β)4 (1 − 4β − 16β2) ≥ 0. (S75)
This equality is satisfied when
δ = β2 (1 + 2β)2 (1 + 6β) ±
√
β4 (1 + 2β)4 (1 + 6β)2 − β4 (1 + 2β)4 (1 − 4β − 16β2)
β4
=
(1 + 2β)2 {
(1 + 6β) ± √4β (4 + 13β)
}
β2 . (S76)
Thus, Eq. (S75) becomes
δ≤
(1 + 2β)2 {
(1 + 6β) − √4β (4 + 13β)
}
β2 ,
(1 + 2β)2 {
(1 + 6β) + √4β (4 + 13β)
}
β2 ≤ δ. (S77)
Furthermore, to ensure that Φzz is nonnegative, the following condition must hold:
β2δ − (1 + 2β)2 (1 + 6β) ≥ 0 ⇒ δ ≥ (1 + 2β)2 (1 + 6β)
β2 . (S78)
From Eqs. (S77) and (S78), the condition under which G ̃(Φzz) = 0 has positive solutions is given by
δ≥
(1 + 2β)2 {
(1 + 6β) + √4β (4 + 13β)
}
β2 . (S79)
As a result, the condition under which ∂J/∂Φzy = 0 and ∂JM /∂Φzz = 0 intersect is approximately given by the following discriminant:
ΘM := β2δ
(1 + 2β)2 {
(1 + 6β) + √4β (4 + 13β)
} . (S80)
When ΘM ≥ 1, G(Φzz) ≈ G ̃(Φzz) = 0 has positive roots, and ∂JM /∂Φzz = 0 intersects with ∂J/∂Φzy = 0. Since Φzz satisfying ∂JM /∂Φzz = 0 is the lower bound for Φzz that satisfies ∂J/∂Φzz = 0, ∂J/∂Φzz = 0 always intersects with ∂J/∂Φzy = 0 when ∂JM /∂Φzz = 0 intersects with it. Thus, ΘM ≥ 1 gives a sufficient condition where ∂J/∂Φzy = 0 and ∂J/∂Φzz = 0 intersect. When ΘM ≥ 1, ∂J/∂Φzy = 0 and ∂J/∂Φzz = 0 intersect and nonzero memory control gains emerge. We note that ΘM is an approximate discriminan-
t because the forth-order equation G(Φzz) = 0 is approximated
with the second-order equation G ̃(Φzz) = 0. Nevertheless, the approximate discriminant ΘM is highly consistent
with the exact one [Fig. S3(b)]. Therefore, the approximate equation G ̃(Φzz) = 0 captures the behavior of the exact equation G(Φzz) = 0.

12
Moreover, ΘQ > ΘM always holds. It is consistent with the fact that the values of Φzz satisfying ∂JQ/∂Φzz = 0 and ∂JM /∂Φzz = 0 serve as the upper and lower bounds, respectively, for the value of Φzz that satisfies ∂J/∂Φzz = 0. From β := E/D and δ := QD/M F , ΘM is rewritten as follows:
ΘM := D2E2
(D + 2E)2 {
(D + 6E) + √4E (4D + 13E)
}
Q
M F . (S81)
This expression explains the nonmonotonic phase transitions with respect to D and E, and also confirms the scaling relation Q/M F .
V. PHASE TRANSITION WITH RESPECT TO ENVIRONMENTAL VOLATILITY
Recent human experiments have reported that while increasing sensory uncertainty induces a nonmonotonic phase transition between memoryless and memory-based estimation strategies, increasing environmental volatility induces a monotonic transition from memory-based to memoryless estimation strategies [13]. In the main text, we analytically demonstrated the nonmonotonic phase transition with respect to sensory uncertainty, which has also been reported numerically in our previous work [1, 2]. In cont-
rast, it remains unclear whether our framework can capture the monotonic transition associated with environmental volatility. In this section, we analytically demonstrate this transition and confirm it through numerical experiments. To incorporate environmental volatility, we reformulate the environmental state dynamics as follows:
dxt = −εxtdt + √εDdωt, (S82)
where ε > 0. In the steady state, the autocorrelation function is given by
E [xtxt+τ ] = D
2 exp(−ετ ). (S83)
Since larger ε accelerates the decay of the past environmental information, ε characterizes the environmental volatility. The rest of the formulation is the same as in the main text. In this problem setting, the steady-state equation of the covariance matrix is given by
(0 0 00
)
=
( εD 0 0F
)
+
( −ε 0 −Φzy −Φzz
) ( Σxx Σxz
Σzx Σzz
)
+
( Σxx Σxz Σzx Σzz
) ( −ε −Φzy 0 −Φzz
)
. (S84)
By multiplying ε−1, we obtain
(0 0 00
)
=
(D 0 0 ε−1F
)
+
( −1 0
−ε−1Φzy −ε−1Φzz
) ( Σxx Σxz
Σzx Σzz
)
+
( Σxx Σxz Σzx Σzz
) ( −1 −ε−1Φzy
0 −ε−1Φzz
)
. (S85)
In addition, the objective function can be calculated as follows:
J [xˆ, v] = Tli→m∞
1
TE
[∫ T
0
(Q(xt − xˆt)2 + M vt2
) dt
]
= Tli→m∞
1
TE
[∫ T
0
(
Q(xt − xˆt)2 + M (−Φzyy − Φzzz)2)
dt
]
= Tli→m∞
1
TE
[∫ T
0
(
Q(xt − xˆt)2 + ε2M (−ε−1Φzyy − ε−1Φzzz)2)
dt
]
. (S86)
Therefore, by replacing F , M , Φzy, and Φzz with F ′ := ε−1F , M ′ := ε2M , Φ′zy := ε−1Φzy, and Φ′zz := ε−1Φzz, respectively, the same discussion is possible. Under this replacement, β := E/D remains the same, whereas δ := QD/M F changes as
δ′ = Q′
M′
D′
F′ = 1
ε
Q M
D
F =δ
ε . (S87)

13
10−2 10−1 100 101 102
environmental volatility ε
10−3
10−2
10−1
100
101
102
103
sensory uncertanity β
FIG. S4. Phase transitions with respect to environmental volatility ε and sensory uncertainty β. Black and red dots indicate the memoryless and memory-based estimation strategies, respectively. These dots are obtained by solving the observationbased Riccati equation numerically. Magenta, green, and orange curves represent the parameter values at which ∂J/∂Φzz = 0, ∂JQ/∂Φzz = 0, and ∂JM /∂Φzz = 0 intersect tangentially with ∂J/∂Φzy = 0, respectively. The magenta curve (ΘT = 1) is obtained numerical-
ly, whereas the green (ΘQ = 1) and orange (ΘM = 1) curves are obtained analytically from Eqs. (S88) and (S89), respectively. Blue, green, and orange regions correspond to ΘQ < 1, 1 ≤ ΘQ and ΘM < 1, and 1 ≤ ΘM , respectively. In the numerical calculations, ε and E vary, while the other parameters are fixed at D = 1.0, F = 0.01, Q = 1.0, and M = 1.0.
Therefore, increasing environmental volatility ε is the same as decreasing energy availability or memory accuracy δ, which explains the monotonic phase transition from memory-based to memoryless estimation strategies [13]. We verify these analytical insights by numerically solving the observation-based Riccati equation [Eqs. (S5) and (S6)]. The numerical procedure to solve the observation-based Riccati equation follows the same method as in our previous work [1, 2]. The result is shown in Fig. S4.-
 Figure S4 shows that while sensory uncertainty β induces a nonmontonic phase transition between memoryless and memory-based estimation strategies, environmental volatility ε induces a monotonic transition from memory-based to memoryless estimation strategies. Furthermore, in this problem setting, the analytical discriminants ΘQ and ΘM are modified as follows:
ΘQ = 2β2
(1 + 2β)2 (1 + 4β)
δ
ε , (S88)
ΘM = β2
(1 + 2β)2 {
(1 + 6β) + √4β (4 + 13β)
}
δ
ε . (S89)
When ΘQ < 1 [Fig. S4, blue region], only memoryless estimation strategies appear [Fig. S4, black dots], whereas when ΘM ≥ 1 [Fig. S4, orange region], only memory-based estimation strategies appear [Fig. S4, red dots]. Therefore, our analytical discriminants remain valid even when environmental volatility ε varies.
[1] T. Tottori and T. J. Kobayashi, Resource limitations induce phase transitions in biological information processing, Physical Review Research 7, L042012 (2025). [2] T. Tottori and T. J. Kobayashi, Theory for optimal estimation and control under resource limitations and its applications to biological information processing and decision-making, Physical Review Research 7, 043048 (2025). [3] A. Bensoussan, J. Frehse, and S. C. P. Yam, The Master equation in mean field theory, Journal de Mathe ́mat-
iques Pures et Appliqu ́ees 103, 1441 (2015). [4] A. Bensoussan, J. Frehse, and S. C. P. Yam, On the interpretation of the Master Equation, Stochastic Processes and their Applications 127, 2093 (2017).
[5] R. Carmona and F. Delarue, Probabilistic Theory of Mean Field Games with Applications I , Probability theory and stochastic modelling No. volume 83 (Springer Nature, Cham, 2018).
[6] R. Carmona and F. Delarue, Probabilistic Theory of Mean Field Games with Applications II , Probability Theory and Stochastic Modelling, Vol. 84 (Springer International Publishing, Cham, 2018).

14
[7] T. Tottori and T. J. Kobayashi, Memory-Limited Partially Observable Stochastic Control and Its Mean-Field Control Approach, Entropy 24, 1599 (2022). [8] T. Tottori and T. J. Kobayashi, Forward-Backward Sweep Method for the System of HJB-FP Equations in Memory-Limited Partially Observable Stochastic Control, Entropy 25, 208 (2023). [9] T. Tottori and T. J. Kobayashi, Decentralized Stochastic Control with Finite-Dimensional Memories: A Memory Limitation Approach, Entropy 25, 791 (2023). [10] J. -
Yong and X. Y. Zhou, Stochastic Controls (Springer New York, New York, NY, 1999). [11] M. Nisio, Stochastic Control Theory, Probability Theory and Stochastic Modelling, Vol. 72 (Springer Japan, Tokyo, 2015). [12] A. Bensoussan, Estimation and Control of Dynamical Systems, Interdisciplinary Applied Mathematics, Vol. 48 (Springer International Publishing, Cham, 2018). [13] G. Tavoni, T. Doi, C. Pizzica, V. Balasubramanian, and J. I. Gold, Human inference reflects a normative balance of complexity an-
d accuracy, Nature Human Behaviour 6, 1153 (2022).

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:22.601Z
- **Text Length:** 56429 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 20 of 20
