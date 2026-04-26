# PDF Document: Das et al. - 2014 - Control strategy for anaesthetic drug dosage with interaction among human physiological organs using.pdf

**File Path:** Das et al. - 2014 - Control strategy for anaesthetic drug dosage with interaction among human physiological organs using.pdf

**Processed Date:** 2026-02-10T18:17:34.923Z

**File Size:** 311.15 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2722

**Title:** Control strategy for anaesthetic drug dosage with interaction among human physiological organs using optimal fractional order PID controller

**Collection:** Large Files

---

## Extracted Text Content

Control Strategy for Anaesthetic Drug Dosage with
Interaction Among Human Physiological Organs
Using Optimal Fractional Order PID Controller
Saptarshi Das1,2 1. School of Electronics and Computer Science, University of Southampton, Southampton SO17 1BJ, UK. Email: s.das@soton.ac.uk, saptarshi@pe.jusl.ac.in
Sourav Das2 and Koushik Maharatna1 2. Department of Power Engineering, Jadavpur University, LB-8, Sector 3, Kolkata-700098, India. Email: das_sourav@live.in, km3@ecs.soton.ac.uk
Abstract—In this paper, an efficient control strategy for physiological interaction based anaesthetic drug infusion model is explored using the fractional order (FO) proportional integral derivative (PID) controllers. The dynamic model is composed of several human organs by considering the brain response to the anaesthetic drug as output and the drug infusion rate as the control input. Particle Swarm Optimisation (PSO) is employed to obtain the optimal set of parameters for PID/FOPID controller st-
ructures. With the proposed FOPID control scheme much less amount of drug-infusion system can be designed to attain a specific anaesthetic target and also shows high robustness for ±50% parametric uncertainty in the patient’s brain model.
Keywords—anaesthetic drug; dosage control; fractional order PID controller; physiological organs; PSO
I. INTRODUCTION
Control strategy formulation for anaesthetic drug dosage is very crucial in clinical surgery and falls in a particular category of biomedical system design known as pharmacology [1-3]. In pharmacology, there are two major steps involved known as pharmacokinetics and pharmacodynamics [4]. The anaesthetic drug injected in a patient’s body gets infused in the arterial blood flow and then the arterial blood carrying the drug reaches to different physiological organs. Determining the drug concentration-
 in arterial blood flow and in different tissues i.e. dosage to concentration is known as the pharmacokinetics. The interaction of the drug with different physiological organs and the overall effect of the drug i.e. concentration to effect is known as pharmacodynamics [4]. Amongst many others anaesthetic drugs, fentanyl is widely used in relief of acute pain like cancer [5] and in different surgeries [6]. The drug dosage in clinical surgery is generally controlled by the Electroencephalogram (EEG)-
 recording during the anaesthesia [7] until a predefined unconsciousness in not reached which can be characterized by observing slow oscillations in EEG signals. Since different physiological organs have different time constants to absorb, react and finally release the drug again in the blood stream, their interaction and contribution on the overall physiological dynamics of anaesthetic study is highly complex and may lead clinicians to misinterpret the observed event. As an example, some organs m-
ay store the drug in a larger extent or reacts to the drug slowly than the others and its immediate effect on the reduction of fast
oscillations in EEG waves may not be significant. This type of phenomena may confuse the clinicians to enhance the drug dosage to attend a pre-specified EEG activity indicative to an anaesthetic state in a typical case which might be lifethreatening for the patient. In this scenario a physiological model based simulation study is necessary to device a control strategy with possible variation in patient’s mathematical model from the nominal case, since over dosage of the drug by an open-loop type E-
EG observation based control may endanger the patient in the process of anaesthesia. A realistic (data-based) model for control strategy formulation can thus be implemented for automated anaesthesia in clinical surgery using brain activity (EEG) monitoring as a sensory feedback to the comparator to generate the tracking error. This results in a control action going to an actuator to pump the drug into patient’s body [8], using a prior knowledge of the set-point or reference as quantitative measure-
 of consciousness [4, 8].
Therefore the task of the controller design in the present scenario can be summarised as minimising the tracking error of the brain response given by the Hill equation, modified Hill equation (in frequency domain) and bispectral index (BIS) of EEG by delicately manipulating the drug input to the patient [4]. A realistic mathematical model for fentanyl drug was developed in [9-10] and is known as Mapleson-Higgins model. The Mapleson model was composed of a few set of algebraic equations derived fro-
m biochemistry. In this model, each organ of human body like lungs, peripheral shunt, kidney, gut and spleen, liver, other viscera, muscle, fat, sample brain is considered as a separate compartment. It is also assumed that each of the organs gets equal arterial blood flow. Mahfouf et al. [11] translated the static algebraic equation based Mapleson model into a dynamic model which considers the temporal variation in the drug concentration at the inlet and outlet of each physiological organ. They al-
so carried out model reduction of the large dynamical system for generalized predictive control (GPC) design. In this paper, we use the original (unreduced) higher order dynamic model in order to design efficient control scheme. It has been shown by Das et al. [12]-[13] that fractional order (FO) controllers are very effective in handling higher order dynamics due to their inherent infinite-dimensional nature over integer order controllers which formulates the scope of the present study. Control s-
trategies for anaesthetic dosage have been formulated on much simpler models using PID controllers [14]-[16], fuzzy

[17] and neuro-fuzzy [18] controllers in earlier research. Wada et al. [19] developed a more detailed physiological system level pharmacokinetic model without any control scheme. A three state nonlinear compartmental model for clinical pharmacology has been described for different control studies including adaptive control [20], neural network control [21-22], nonnegative dynamical systems [23], disturbance rejection control [24]. Results of clinical trials of anaesthesia control scheme, based on-
 three-compartmental model with noise EEG measurements has been reported in Haddad et al. [25] for 10 patients. The focus of the present study is to formulate an optimal FO control strategy [26-28] with the dynamical model reported in Mahfouf et al. [11] considering interaction amongst physiological organs.
The rest of the paper is organised as follow: section II describes the overall system model for different physiological organs and their interaction with the drug. The optimal controller design task is described in section III and the system simulation in section IV. The paper ends with the conclusion in section V, followed by the references.
II. DYNAMIC MODEL OF FENTANYL INTERACTION WITH PHYSIOLOGICAL ORGANS
A. Overall System Description for Automated Anaesthesia
Fig. 1. Overall fentanyl dose-effect model with proposed control strategy.
As described earlier, the first static model of fentanyl interaction from pharmacokinetics and pharmacodynamics point of view was known as Mapleson model [9]-[10]. Mahfouf et al. [11] extended the concept for dynamic models by representing each organs dynamics with ordinary differential equations or single-input-single-output (SISO) continuous time transfer function models. The model mainly captures the drug flow from one organ to other and not the drug concentration in a specific organ. The drug -
is added through intravenous (IV) injection which gets infused in the arterial blood and then is perfused in all organs with a fraction of the total arterial blood flow. The brain reaction to the drug ( )
yt ,
manifested in the form of EEG is evaluated using the Hillequation or some index like BIS and then fed-back for comparison with the target anaesthetic level to generate an error ( )
e t which will be minimised by the FOPID or PI λDμ
controller to generate a control action ( )
u t , giving a command
to the actuator or mechanical pump to pump the drug (Fig. 1).
B. Dynamical Model for Each Human Organs
Mahfouf et al. [11] developed individual system models by applying system identification techniques on original Mapleson model with the consideration of 70 kg body weight and 6.481/min cardiac output which represent a base-case clinical scenario. In order to study the generalising capability of the model outside the nominal range, an interpolation based model identification has been reported in [11] for realistic variation either in body-weight, cardiac output or simultaneously both of them. From -
the generalized interpolated scheme, a patient model was developed with 93 kg body weight, 5.41/min body weight while 100μg of fentanyl has been injected over a period of 60 sec. The corresponding interpolated transfer function models [11] of various human organs are described in (1)-(9).
86
Fat 2
1.437 10 1.722 10
0.4126 0.0003241
s
Gs s
−−
−×+ ×
=+ +
(1)
()
2
GLungs = 64.78 s + 4.17 s + 6.97 (2)
5
Gut-spleen 2
1.34 10 0.001604
0.9059 0.09356
s
Gss
−
−× +
=+ +
(3)
()
GKidneys = 0.0132 s + 0.7436 (4)
()
GLiver = 0.006243 s + 0.04257 (5)
()
GOther-viscera = 0.001725 s + 0.09009 (6)
75
Muscle 2
2.764 10 3.312 10
0.4152 0.001867
s
Gs s
−−
−×+ ×
=+ +
(7)
()
5
GBrain 1.614 10 s 0.1533
−
= × + (8)
()
6
GNasal 5.459 10 s 0.08507
−
= × + (9)
The peripheral shunt has been modelled as only as a gain without any time constants i.e. K peripheral-shunt = 0.0241 . The
above models explain the dynamic relationship between the outgoing drug concentration in the blood flow from each tissue and the incoming arterial pool drug amount whereas it cannot model the drug concentration in each issue. If the drug concentration in the outgoing flow from brain is represented as Cb , then the drug effect on the brain be calculated by the Hill
equation (10) using the effect-site concentration at 50% of drug effect ( 50
EC = 7.8 ng/ml) and steepness or slope factor (γ ).
() ( )
50
Effect EC , 4.3
bb b
CC C
= γ γ + γ γ = (10)
III. OPTIMAL CONTROL SCHEME OF DRUG INFUSION WITH FRACTIONAL ORDER PID CONTROLLER
A. Choice of the Control Objective
In clinical practices of anaesthesia, computer controlled drug infusion is generally adopted to meet a target

concentration infusion (TCI) rather than manually controlling the infusion rate [8, 14, 15, 22, 25]. Most of these techniques rely on open loop control which assumes that the population model is a good representative of any patient which may not be valid in many cases. A more sensible scheme should be to continuously monitor brain response (EEG) to the drug-dosage and use it as a feedback mechanism to minimise the set-point tracking error by an efficient controller structure. The control signal e-
ssentially modifies the intravenous drug infusion rate and should not be violently manipulated to reach a faster anaesthetic effect. So apart from minimizing the tracking error ( )
e t , it is also an important task to minimize the variation
(or derivative) of the drug infusion rate to prevent any sudden shock in the automated IV injection pump and chance of infusing large amount of drug in small time i.e. an increased control effort ( )
u t . The objective function for the optimal
controller design has been formulated as (11) as a weighted sum of Integral of Time multiplied Squared Error (ITSE) and Integral of Squared Deviation Control Output (ISDCO).
() ()
()
( 2)
2
12
0
J w t e t w u t dt
∞
= ⋅⋅ + Δ
∫ (11)
B. Controller Structure and its Tuning Using PSO Optimiser
Fractional order PI λDμ controller design with various other time domain performance criteria has been explored in Das et al. [12] and the results shows that squared error term in (11) puts more penalties on the tracking error and the time multiplication term makes the overall response faster and reduces the chance of loop oscillations in later stages. It is evident that such a tracking criterion will definitely increase the required control effort whose variation (temporal derivative) is thus add-
ed as a minimising criteria in (11). The above control objective is to be met by an integer and fractional order PID controller structure (12) where the controller gains
{}
,,
pid
K K K and the integro-differential orders{ }
λ, μ are to
be tuned with a global optimisation algorithm.
() ( )
pi d
C s K K s Ks
λμ
= + + (12)
For PID controller only the gains are to be optimized by considering the orders as unity. In (12), each FO operator is continuously rationalised within the optimization process using
a 5th order Oustaloup’s recursive approximation or ORA (13)
for a chosen frequency band of { } { }
22
, 10 ,10
lb
ω ωω −
∈=
rad/sec [29] and the rationalised pole-zero and gains are given
by{ }
, k, k
K ω ω′ .
( )( )
() ()
(1 ) 2 (1 ) 2 21 21
,,
N
kk kN kN kN
NN
k bhb k bhb h
sK s s
K
γ
γ γγ
ωω
ω ωωω ω ωωω ω
=− + ++ + +− ++
′
++
′
= ==
∏ (13)
Here, the PID/FOPID controller parameters are optimized using the PSO algorithm which is a widely used global optimiser. The swarm starts with particles having velocity vi
and position xi and in each time step they try to move towards the global best with latest value of the best found solution for
individual particle or pbest ( pi ) and that of the global swarm
or gbest ( pg ), while the velocity and positions are manipulated
over successive iterations using (14), until all particles converges to the global best solution.
( ) () () ()
( ) () ()
()
( ) () ( )
11 2 2
1
11
i i ii gi
i ii
vt vt c pt xt c p t xt
xt xt vt
+ =ω + φ − + φ −
+ = + + (14)
Here, { } { }
c1,c2 = 0.5,1 are known as the inertia factor, cognitive
learning rate and social learning rate and{ }
φ1,φ2 are uniformly
distributed random variables within the interval [ ]
0,1 . The
parameterω, known as the inertia factor for the swarm is linearly varied from 0.9 to 0.1. In the present study, the unconstrained version of PSO is employed with only bound on the controller parameters as{ } [ ]
, , 0.001,10
pid
K K K ∈ and
{ }[ ]
λ,μ ∈ 0, 2 . Due the implementation issues of ORA for FO
operators for{ }
λ, μ > 1 , we explored four classes of FOPID
structures (15) and tested the tracking performance and control effort of each controller structure.
{}
() ( ) ( ) {}
()
12
34
FOPID , 1 ; FOPID 1, 1 ;
FOPID 1, 1 ; FOPID , 1
λμ λ μ
λ μ λμ
→ < →< >
→> < → >
(15)
IV. SIMULATION, RESULTS AND DISCUSSION
Fig. 2. Convergence characterteristics of different controller structures.
TABLE I. OPTIMUM VALUES OF THE CONTROLLER PARAMETERS
Controller Jmin
Controller parameters
Kp Ki Kd λ μ
PID 499.2007 3.8243 8.6647 0.001 - 
FOPID1 58.3018 0.0212 2.3014 0.0783 0.8301 0.1013
FOPID2 792.1196 5.5757 3.3381 0.001 0.798 0.1488
FOPID3 68.721 0.2106 1.5393 0.001 0.001 0.021
FOPID4 728.6634 0.4213 1.6329 0.001 0.5237 0.1033
The PSO based optimal parameter selection is carried out for the 5 controller structure with a goal of minimizing the objective function (11) by considering a step input target at

t = 1 min and has been reported in Table I. The located minima
( min
J ) in Table I show that the FOPID1 structure with
{}
λ, μ < 1 gives the most optimal result than other FOPID
variants and PID controller which is counter-proved by the PSO convergence characteristic, corresponding to FOPID1. In
most of the case low derivative gain implies that a PI/PIλ type controller is more suitable for this particular system.
A. Performance on Nominal Patient Model
With the optimal parameters of the PID/FOPID controller in Table 1, the nominal anaesthetic drug delivery system, described in (1)-(10) and Fig. 1 is now simulated and the tracking performance and required control efforts are compared in Fig. 3 and Fig. 4 respectively. It is evident that although the with PID controller the tracking is much faster, it needs more amount of drug infusion within a short period of time (5 mins). Whereas the FOPID1 structure meets the same anaesthetic target while push-
ing much less amount of drug into patient’s body over a longer period of time (20 mins).
Fig. 3. Tracking performance for different controller structures.
Fig. 4. Control effort for different controller structures.
B. Robustness of Control Scheme in Perturbed Condition
In the previous subsection, the simulations have been reported for the nominal model whereas it is highly likely that the model differs significantly for different patients and for different conditions of the same patient. Since the brain model directly affects the output of the system as shown in Fig. 1, i.e. the brain response to fentanyl drug directly feedback to the controller, we here report simulation studies of the brain response for the drug in a ±50% dc gain perturbation scenario.
Testing vulnerability of control loops with dc gain variation is a widely used robustness measure and has been described in Das et al. [12]. The dc gain of the nominal brain model is
1.0528×10-4. The rest of the physiological organs i.e. peripheral-shunt, kidney, liver, other-viscera, muscle, fat, nasal receive the same arterial blood flow in Mapleson model described in Fig. 1, but does not directly affect the output ( )
yt.
Hence, they will have much less influence if the respective parameters are perturbed. Fig. 5-6 reports simulations with the best found cases of PID and FOPID controller respectively under a ±50% dc gain perturbation in the brain model (8).
Fig. 5. Tracking performance and control effort with PID controller for ±50% dc-gain perturbation of the brain model.
Fig. 6. Tracking performance and control effort with FOPID controller for ±50% dc-gain perturbation of the brain model.
It is evident from Fig. 5 that for a decrease in the dc-gain of nominal brain model, the control effort rapidly increases, signifying that more drug is injected into the patient’s body. It is evident that the rise time of the PID controlled system is much faster (10 mins), but the amount of drug-injected is significantly high (17-35 units). On contrary, the FOPID controller in Fig. 6 provides a relatively slower tracking performance (50 mins). But there is a significant amount of saving in the dru-
g injection level which is bounded within 7-18 units even in the perturbed condition. In clinical practices, meeting the specified unconsciousness level is not the sole criterion because this may create a sudden shock in different human physiological systems which may be harmful for the patient [8]. Also, in order to attain same level of anaesthetic effect but within a shorter time- period, the drug concentration in brain needs to be raised rapidly which has both economical

constraint and physiological ill-effects along with faster mechanical pumping needed for automated drug-delivery. Whereas a smoother and bounded control action with less amount of drug infusion into the patient can attain the same level of anaesthesthetic fentanyl drug, if equipped with an efficient control strategy i.e. using proposed optimal FOPID controller.
V. CONCLUSION
The paper devises a new fractional order control strategy for automatic fentanyl drug dosage control for anaesthesia in clinical practices. The proposed FOPID control scheme requires less amount of dug to be injected than with a PID controller to meet same anaesthetic target. The smoother control action provided by FOPID controller outperforms classical PID controller in a sense of restricting the chance of feeling a sudden shock in the brain response due to rapid increase in the amount of anaesth-
etic drug concentration in arterial blood flow within a very short time interval. Future work may be directed towards validation of the control scheme applied on Mapleson’s dynamic model, with real clinical data.
REFERENCES
[1] M.C.K. Khoo, “Physiological control systems: analysis, simulation and estimation”, IEEE Press Series on Biomedical Engineering, 2000.
[2] G.D. Baura, “System theory and practical applications of biomedical systems”, IEEE Press Series on Biomedical Engineering, 2002.
[3] R.B. Northorp, “Signals and systems analysis in biomedical engineering”, CRC Press, 2010.
[4] J.M. Bailey and W.M. Haddad, “Drug dosing control in clinical pharmacology”, IEEE Control Systems Magazine, vol. 25, no. 2, pp. 3551, Apr. 2005.
[5] R.K. Portenoy et al., “Oral transmucosal fentanyl citrate (OTFC) for the treatment of breakthrough pain in cancer patients: a controlled dose titration study”, Pain, vol. 79, no. 2–3, pp. 303-312, Feb. 1999.
[6] K.J.S. Anand, W.G. Sippell, and A.Aynsley Green, “Randomised trial on fentanyl anaesthesia in preterm babies undergoing surgery: effects on the stress response”, The Lancet, vol. 329, no. 8527, pp. 243-248, Jan. 1987.
[7] N. Ty Smith et al. “EEGs during high-dosage fentanyl-, sufentanil-, or morphine-oxygen anesthesia”, Anesthesia & Analgesia, vol. 63, no. 4, pp. 386-393, 1984.
[8] H. Schwilden and H. Stoeckel, “Effective therapeutic infusions produced by closed-loop feedback control of methohexital administration during total intrvanous anesthesia with fentanyl”, Anesthesiology, vol. 73, no. 2, pp. 225-229, 1990.
[9] N.R. Davis and W.W. Mapleson, “A physiological model for the distribution of injected agents, with special reference to pethidine”, British Journal of Anaesthesia, vol. 70, no. 3, pp. 248-258, 1993.
[10] W.W. Mapleson, “Circulation-time models of the uptake of inhaled anaesthetics and data for quantifying them”, British Journal of Anaesthesia, vol. 45, no. 4, pp. 319-334, 1973.
[11] M. Mahfouf, D.A. Linkens, and D. Xue, “A new generic approach to model reduction for complex physiologically based drug models”, Control Engineering Practice, vol. 10, no. 1, pp. 67-81, Jan. 2002.
[12] S. Das, S. Saha, S. Das, and A. Gupta, “On the selection of tuning methodology for FOPID controllers for the control of higher order processes”, ISA Transactions, vol. 5, no. 3, pp. 376-388, July 2011.
[13] S. Das, A. Gupta, and S. Das, “Generalized frequency domain robust tuning of a family of fractional order PI/PID controllers to handle higher
order process dynamics”, Advanced Material Research, vol. 403-408 (MEMS, NANO and Smart Systems), pp. 4859-4866, 2012.
[14] D.A. O’Hara, D.K. Bogen, and A. Noordergraaf, “The use of computer controlling the delivery of anesthesia”, Anesthesiology, vol. 77, no. 3, pp. 563-581, 1992.
[15] T. Sakai, A. Matsuki, P.F. White, and A.H. Giesecke, “Use of an EEGbiseptral closed-loop delivery system for administering propofol”, Acta Anaesthesia Scandinavica, vol. 44, no. 8, pp. 1007-1010, Sep. 2000.
[16] R.R. Jaklitsch and D.R. Westenskow, “A model-based self-adjusting two-phase controller for vacuronium-induced muscle relaxation during anesthesia”, IEEE Transactions on Biomedical Engineering, vol. BME34, no. 8, pp. 583-594, Aug. 1987.
[17] J.S. Shieh, D.A. Linkens, and J.E. Peacock, “Hierarchical rule-based and self-organizing fuzzy logic control for depth of anaesthesia”, IEEE Transactions on Systems, Man, and Cybernetics-Part C: Applications and Reviews, vol. 29, no. 1, pp. 98-109, Feb. 1998.
[18] M. Mahfouf, C.S. Nunes, D.A. Linkens, and J.E. Peacock, “Modelling and multivariable control in anaesthesia using neural-fuzzy paradigms: part II. closed loop control of simultaneous administration of propofol and remifentanil”, Artificial Intelligence in Medicine, vol. 35, no. 3, pp. 207-213, Nov. 2005.
[19] D.R. Wada, D.R. Stanski, and W.F. Ebling, “A PC-based graphical simulator for physiological pharmacokinetic models”, Computer Methods and Programs in Biomedicine, vol. 46, no. 3, pp. 245-255, Apr. 1995.
[20] W.M. Haddad, T. Hayakawa, and J.M. Bailey, “Adaptive control for nonlinear compartmental dynamical systems with applications to clinical pharmacology”, Systems & Control Letters, vol. 55, no. 1, pp. 62-70, Jan. 2006.
[21] W.M. Haddad, J.M. Bailey, T. Hayakawa, and N. Hovakimyan, “Neural network adaptive output feedback control for intensive care unit sedation and intraoperative anesthesia”, IEEE Transactions on Neural Networks, vol. 18, no. 4, pp. 1049-1066, Jul. 2007.
[22] W.M. Haddad and J.M. Bailey, “Closed-loop control for intensive care unit sedation”, Best Practice & Research Clinical Anaesthesiology, vol. 23, no. 1, pp. 95-114, Mar. 2009.
[23] W.M. Haddad, T. Hayakawa, and J.M. Bailey, “Adaptive control for non-negative and compartmental dynamical systems with applications to general anesthesia”, International Journal of Adaptive Control and Signal Processing, vol. 17, no. 3, pp. 209-235, Apr. 2003.
[24] K. Volyanskyy, W.M. Haddad, and J.M. Bailey, “Adaptive disturbance rejection control for compartmental systems with application to intraoperative anesthesia influence by hemorrhage and hemodilution effects”, International Journal of Adaptive Control and Signal Processing, vol. 23, no. 1, pp. 1-29, Jan. 2009.
[25] W.M. Haddad, K.Y. Volyanskyy, J.M. Bailey, and J.J. Im, “Neuroadaptive output feedback control for automated anesthesia with noisy EEG measurements”, IEEE Transactions on Control Systems Technology, vol. 19, no. 2, pp. 311-326, Mar. 2011.
[26] S. Das, I. Pan, S. Das, and A. Gupta, “Master-slave chaos synchronization via optimal fractional order PIλDμ controller with bacterial foraging algorithm”, Nonlinear Dynamics, vol. 69, no. 4, pp. 2193-2206, Sep. 2012.
[27] S. Das, I. Pan, K. Halder, S. Das and A. Gupta, “LQR based improved discrete PID controller design via optimum selection of weighting matrices using fractional order integral performance index”, Applied Mathematical Modelling, vol. 37, no. 6, pp. 4253-4268, Mar. 2013.
[28] I. Pan and S. Das, “Intelligent fractional order systems and control: an introduction”, Series: Studies in Computational Intelligence, vol. 438, 2013, Springer-Heidelberg.
[29] F. Merrikh-Bayat, “Rules for selecting the parameters of Oustaloup recursive approximation for the simulation of linear feedback systems containing PIλDμ controller”, Communications in Nonlinear Science and Numerical Simulation, vol. 17, no. 4, pp. 1852-1861, Apr. 2012.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:34.923Z
- **Text Length:** 25920 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
