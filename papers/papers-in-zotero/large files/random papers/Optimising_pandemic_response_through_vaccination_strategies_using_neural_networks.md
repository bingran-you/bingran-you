# PDF Document: Zhai et al. - 2025 - Optimising pandemic response through vaccination strategies using neural networks.pdf

**File Path:** Zhai et al. - 2025 - Optimising pandemic response through vaccination strategies using neural networks.pdf

**Processed Date:** 2026-02-10T18:14:11.148Z

**File Size:** 5907.15 KB

**Total Pages:** 36

**Extracted Pages:** 36

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3194

**Title:** Optimising pandemic response through vaccination strategies using neural networks

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

OPTIMISING PANDEMIC RESPONSE THROUGH VACCINATION
STRATEGIES USING NEURAL NETWORKS
Chang Zhai
Department of Economics The University of Melbourne Carlton, VIC, 3053, Australia changzhai@unimelb.edu.au
Ping Chen
Department of Economics The University of Melbourne Carlton, VIC, 3053, Australia pche@unimelb.edu.au
Zhuo Jin
Macquarie Business School Macquarie University Sydney, NSW, 2109, Australia zhuo.jin@mq.edu.au
David Pitt
Department of Economics The University of Melbourne Carlton, VIC, 3053, Australia david.pitt@unimelb.edu.au
November 24, 2025
ABSTRACT
Epidemic risk assessment poses inherent challenges, with traditional approaches often failing to balance health outcomes and economic constraints. This paper presents a data-driven decision support tool that models epidemiological dynamics and optimises vaccination strategies to control disease spread whilst minimising economic losses. The proposed economic-epidemiological framework comprises three phases: modelling, optimising, and analysing. First, a stochastic compartmental model captures epide-
mic dynamics. Second, an optimal control problem is formulated to derive vaccination strategies that minimise pandemic-related expenditure. Given the analytical intractability of epidemiological models, neural networks are employed to calibrate parameters and solve the highdimensional control problem. The framework is demonstrated using COVID-19 data from Victoria, Australia, empirically deriving optimal vaccination strategies that simultaneously minimise disease incidence and governmental expendi-
ture. By employing this three-phase framework, policymakers can adjust input values to reflect evolving transmission dynamics and continuously update strategies, thereby minimising aggregate costs, aiding future pandemic preparedness.
Keywords Optimal Control · COVID-19 · Pandemic Risk · Machine learning · Epidemic Modelling · Neural Networks
arXiv:2511.16932v1 [stat.AP] 21 Nov 2025

1 Introduction
Recent outbreaks of the coronavirus have intensified the scientific investigation of infectious diseases. From the perspective of local governments, infectious diseases not only threaten public health but also impose substantial fiscal burdens. Given the significance of recent vaccination campaigns, vaccination plays a crucial role in preventing disease transmission. Consequently, we develop an economic epidemiological framework that assists social planners in minimizing overall pandemic-related e-
xpenses by adjusting vaccination rollout rates over time based on the progression of the disease. Figure 1 provides an overview of the framework, which is structured into three phases: modelling, optimizing, and analyzing. This framework incorporates actual disease data to study the evolution of the virus, develop an optimal vaccination strategy for the social planner, and generate a range of analytical insights. The proposed framework is applicable to epidemics that are not classified as catastro-
phic health crises, such as the Asian Flu, Swine Flu, and COVID-19. Specifically, if an epidemic has an extremely high case fatality rate (CFR) exceeding a critical threshold, likely around 10 to 20 percent or higher, then the government should prioritize saving lives over controlling aggregate spending, based on the intrinsic value of human life. In such scenarios, the societal and ethical imperative to prevent mass mortality outweighs cost-minimization policies. Therefore, we focus on the more c-
ommon noncatastrophic health crises and provide policymakers with a data-driven framework for developing optimal vaccination strategies during such periods of time. In addition, in real-world settings, government vaccination campaigns are continually adjusted by updating the input data or assumptions based on the available data. Thus, the goal of this paper is to offer social planners a toolkit capable of developing optimal vaccination strategies based on the most recent data, allowing governments-
 to update policies in response to changes in the external environment as the virus spreads.
Government Cost Function: Hyperparameter Assumptions
Stochastic Control Problem: Optimize Expenditures under the SVEI3RD Compartmental Model
Data on Pandemic Population Compartments Data on Government
Spending by Sectors
Physics-Informed Neural Network (PINN)
Obtain the Optimal Vaccination Administration Rate & Compare with Other Strategies
Vaccination Administration and Hospitalization Rate: Regression Analysis
Deep Neural Network (DNN) for High-dimensional Optimal Control
Sensitivity Analysis
Effects of Noise Intensities/ Infection rates
Effects of Vaccination / Economic Cost
Varies Vaccination Hesitancy/Stages of Time
Epidemic Model Economic Model
Modelling
Optimizing
Analyzing
Stochastic SVEI3RD Model: Parameter Calibration
Figure 1: Overview of the economic epidemiological model framework.
In developing the framework, two strands of the literature are reviewed. The first strand focuses on epidemic modelling and examines compartmental models that describe the progression of infectious disease transmission. The second addresses epidemic control problems within the field of economic epidemiology. By integrating insights from these two areas, our framework becomes data-driven, incorporates real-world dynamics, and provides actionable strategic guidance for policymakers. Developing a com-
prehensive understanding of infectious disease transmission is essential for shaping epidemic management strategies, and this focus underpins the first phase of our framework. Compartmental models represent a foundational tool in epidemiological research by enabling investigators to analyze the dynamics of disease spread and construct mathematical tools for understanding epidemics. In regard to the earliest investigations into an epidemic process, Kermack and McKendrick (1927) presents the fundame-
ntal Susceptible-Infectious-Recovered (SIR) model, which divides a population into three groups and describes their disease dynamics through a set of differential equations. Building on this foundation, researchers have expanded compartmental models by refining the underlying equations. For
2

example, Bailey (1975) examines the proportion of individuals who die from the disease and introduces an additional Dead state into the model. Moreover, Kemper (1978) incorporates a carrier stage, accounting for individuals who can transmit the disease without displaying symptoms, and provides notable insights into infection pathways. Another line of research investigates how vaccination influences epidemic spread. A representative study by Cohen et al. (2003) shows that vaccinating part of the p-
opulation can substantially reduce overall virus transmission. Furthermore, to capture the substantial difference in medical costs across infected individuals based on illness severity, Zhai et al. (2024) proposes a refined Susceptible-Exposed-Infected-with-3-Substates-Recovered-Dead (SVEI3RD) model that classifies infected individuals into mild, medium, and severe subgroups. This enhanced model provides a more comprehensive approach by subdividing the Infectious state, allowing governments to ali-
gn distinct economic costs more closely with real-world conditions. In addition, diseases spanning longer time horizons often involve additional factors such as new births, elderly mortality, and migration, each of which shapes the compartment populations. Grenfell et al. (2004) examines how host population dynamics affect viral transmission and evolution, noting that overall population size varies over time. A further consideration is the necessity of incorporating stochastic into the model in or-
der to account for the fluctuations of real-world changing conditions. As shown by Beddington and May (1977) and Allen (2008), stochastic models offer a more realistic representation of disease dynamics, enhancing the ability to analyze complex transmission patterns in uncertain settings. Accordingly, these models have gained prominence among researchers seeking richer insights into disease spread and more effective control measures. Building on these considerations, our framework begins by offeri-
ng policymakers a comprehensive stochastic compartmental model with vital dynamics that capture the dynamics of disease transmission. This advanced model design includes more states than traditional models, enabling a more detailed analysis of population dynamics and the stochastic terms allow the mathematic model to incorporate environmental noise. However, the high-dimensional structure of our compartmental model presents computational challenges for parameter estimation, since most traditional -
numerical methods lack the capacity to calibrate a large set of parameters simultaneously. To overcome this, we employ recent developments in deep learning by applying Physics Informed Neural Networks (PINN) introduced by Raissi et al. (2019) to calibrate the parameters of our compartmental model. This neural network approach is first applied to epidemiological models by Shaier et al. (2021), who introduces Disease Informed Neural Networks (DINN) and demonstrates their effectiveness in estimating -
parameters for compartmental models and providing accurate forecasts. While the DINN methodology is originally developed for parameter training of deterministic compartmental models, we extend this methodology to calibrate stochastic model parameters by simulating environmental noise through multiple Monte Carlo simulations and averaging the outcomes. Calibrating the parameters of our compartmental model allows us to study the disease’s actual progression, forming the foundation of the epidemic mo-
delling component of our proposed framework. For the economic part of the framework, we consider the government’s aggregate pandemic-related expenditures, consisting of four parts: vaccination policy implementation costs, quarantine subsidies, healthcare system expenditures, and economic losses. The integration of these two models constitutes the first modelling layer within our framework. The second phase of the study involves the formulation of the control problem that aligns with the policymake-
rs’ objective of reducing government expenditures by altering vaccination administration rates in response to disease progression. In addition to modelling the transmission dynamics of epidemic diseases, governments are particularly concerned with the broader impacts of pandemics. Historical evidence shows that past pandemics have significantly disrupted not only public health systems but also global economies, often triggering severe economic crises. This dual impact has heightened scholarly inte-
rest in economic epidemiology, with economists increasingly focused on devising optimal strategies for managing pandemics. McAdams (2021) surveys the literature, categorizing economic epidemiological models based on assumptions regarding immunity, transmission mechanisms, and economic impacts. Regarding the assessment of policy interventions, Giordano et al. (2020) emphasizes the importance of non-medical measures, while Glover et al. (2023) examines the intergenerational trade-offs and conflicts -
that pandemics create for policymakers. In the context of lockdown policies, studies by Acemoglu et al. (2021), Alvarez et al. (2021), Jones et al. (2021), Arias et al. (2023), and Dasaratha (2023) construct their optimal design and implementation. Garibaldi et al. (2024) distinguishes between static and dynamic externalities, comparing decentralized and optimal solutions when agents derive utility from social interactions. Additionally, Carnehl et al. (2023) and Chen et al. (2023) examine optimal-
 strategies for social distancing. Acemoglu et al. (2024) develops frameworks for optimal surveillance testing during epidemics. Regarding vaccination strategies, Tortorice et al. (2024) analyzes the government’s optimal funding levels for vaccine research and development to minimize pandemic costs. The labour market impact of pandemics has also received attention. For instance, Jackson and Ortego-Marti (2024) incorporates human capital losses from unemployment into macroeconomic models, showing t-
hat pandemics lead to significant reductions in total factor productivity. Most studies in the literature that address the control problem in economic epidemiology utilize simplistic compartmental models in order to address computational challenges. Although these models serve to reduce complexity, leveraging advancements in compartmental modelling allows for a more detailed representation of the disease transmission process. This, in turn, can significantly enhance the ability of governments to f-
ormulate effective policies during a pandemic. To address this gap, this paper employs a more comprehensive compartmental model to better capture the dynamics of
3

disease transmission. Furthermore, to tackle the computational difficulties, we draw on recent developments in the field of machine learning and utilize neural networks to solve the proposed high-dimensional control problem. In this context, we consider the social dilemma faced by local governments during outbreaks of infectious diseases. On one hand, prioritizing saving lives leads to significantly higher vaccination implementation costs, as the government aims to extensively promote the vaccina-
tion campaign and sustain a high rate of inoculation over an extended period. On the other hand, allocating fewer funds to vaccination efforts places greater pressure on the healthcare system, potentially leading to social dissatisfaction and increased healthcare system expenditures as the disease spreads rapidly. This trade-off is driven by the negative correlation between vaccination administration rates and hospitalization rates. As Amato et al. (2020) points out, higher vaccination rates are t-
ypically associated with reductions in hospitalizations. Building on this concept, we formulate the optimization problem to assist policymakers in seeking an optimal balance between these trade-offs during a disease outbreak. This optimization phase involves a high-dimensional stochastic control problem with disease dynamics governed by compartmental models. The literature indicates that obtaining analytical solutions for such problems is computationally intractable, and due to the "curse of dimen-
sionality" discussed by Bellman and Dreyfus (2015), most traditional methods are incapable of finding numerical solutions. Motivated by advances in scientific machine learning (SciML), particularly the use of deep learning to solve differential equations, we investigate the deep neural network developed by Han et al. (2016) to address the problem. This method has proven effective in solving high-dimensional stochastic differential equations (SDEs). In this case, the deep neural network architectur-
e approximates the control directly at each time point using feedforward subnetworks and connects outputs across time to form the final loss function. Utilizing this approach, we determine the optimal vaccination strategy under the proposed economic epidemiological model over time, enabling policymakers to make informed decisions. Finally, in the last layer of the proposed framework, we perform sensitivity analysis to examine how various factors affect our model framework. By conducting this analy-
sis, we identify critical parameters that influence the system’s outputs, thereby enabling us to guide policymakers’ decision-making processes more robustly. To demonstrate the application of our framework, we present a case study utilizing a real-time dataset1 containing the official historical COVID-19 records for each state of Australia. In relation to our analysis, records specific to Victoria were extracted for the purpose of determining parameters during the modelling process. Additionally, -
in order to support the detailed modelling of specific dose injections, we obtained a supplementary set of vaccination records from the Department of Health and Aged Care2 to work out the vaccination rates according to each dose. The numerical analysis shows that the government should prioritize vaccinations in the early stages, and then gradually decrease the vaccination rate once the disease is kept under control. This finding aligns with the optimal vaccination schedules computed for the theore-
tical epidemic in the study of Hethcote and Waltman (1973), indicating that early vaccination of susceptibles is a key strategy for preventing or controlling an epidemic and minimizing the aggregate cost of the vaccination program. In this case study, we find that although the government’s actual vaccination program reduced the number of infectious individuals relative to a constant vaccination strategy, our proposed framework could further reduce these numbers, thereby decreasing the associated e-
conomic costs even more. The results indicate that the recommended strategy not only eases the economic burden of the government, but also lessens the strain on the healthcare system by reducing the number of infected individuals at the same time. The key factors within the framework that drive the final outcomes are examined through a sensitivity analysis to assess policymakers’ responses to pandemics under uncertainty. The results show that in scenarios with high noise intensity, the government -
must allocate additional vaccinations to manage larger environmental fluctuations. For diseases with higher infection rates, the government is required to sustain a high vaccination administration rate over an extended period, leading to higher expenditures. We then examine how economic considerations influence vaccination strategies. When vaccination is more expensive, the framework recommends reducing vaccination administration rates more quickly. Conversely, when labour losses impose higher fin-
ancial costs on the government, policymakers appear more inclined to maintain high injection rates for a longer period. Finally, we evaluate the performance of our framework under differing levels of vaccination hesitancy and at various pandemic stages. This analysis offers policymakers valuable insights into the most effective vaccination strategies across a range of scenarios. The organization of the paper is as follows. Section 2 presents the compartmental framework and explains the constructio-
n of the economic cost function. Section 3 details the methodology of PINN for parameter calibration and describes the deep neural network approach used to address the high-dimensional stochastic control problem. Section 4 provides a numerical case study of Victoria, Australia, comparing the optimal vaccination strategies with alternative strategies based on cost and population dynamics. Section 5 evaluates the effects of key factors within the framework and examines vaccination strategies under v-
arious scenarios through sensitivity analysis. Finally, Section 6 concludes with a summary of the findings.
1COVID-19 Data for Australia. Available online at the address https://github.com/M3IT/COVID-19 Data. 2COVID-19 Vaccination Data. Available online at: https://www.health.gov.au/resources/publications.
4

2 Model formulation
In this section, we examine the first phase of our framework, which focuses on modelling. We begin by addressing the mathematical models used to represent epidemic dynamics. Following this, we develop the expression to quantify the government’s aggregate expenditure during a pandemic over time.
2.1 The epidemic model
2.1.1 The SVEI3RD model
For epidemic modelling, we employ the comprehensive SVEI3RD compartmental model to analyze disease transmission dynamics. This model builds on the foundational SIR framework, which divides the population into three compartments: S for susceptibles, I for infectious individuals, and R for those who have recovered during the pandemic. In this framework, we focus on the proportion of the total population in each compartment over time, denoted by St, It, and Rt. The key parameter β governs the infecti-
ous rate, while transitions from the Infectious state to the Recovered state depend on δ, which reflects the probability of recovery over time. To extend this fundamental model, we incorporate an additional Dead state, which accounts for individuals who succumb to the disease. The mortality rate among the infected population is captured by the parameter μ. In addition, the model is further enriched with the inclusion of Vaccinated and Exposed states. The Exposed state represents individuals who ar-
e infected but remain asymptomatic, effectively acting as carriers of the disease. The parameter γ specifies the incubation rate at which exposed individuals transition to the Infectious state. Vaccination dynamics are characterized by two additional parameters: σ, which measures the inefficiency of vaccination, and α, which represents the rate of vaccine administration.
Susceptible (S)
Vaccinated (V)
Exposed (E) Patients in the Hospital (I2)
Mild Infectious (I1)
Patients in the ICU (I3)
Recovered (R)
Dead (D)
β
α
p1
p2
δ2
ζ
ζ
ζ
ζ
ζ
ζ
ζ
Λ
σβ
γ
δ1
δ3
μ
Figure 2: Flow diagram of the SVEI3RD model.
As a feature of this model, the infected population is categorized into three subgroups based on the severity of the illness. In this framework, the initial stage of infection corresponds to individuals experiencing only mild symptoms that do not require hospitalization. These individuals are classified as being in state I1, which represents the first stage of infection. If symptoms worsen to a level requiring hospitalization, the individual transitions to the second infectious state, I2. A furthe-
r progression in severity, requiring admission to the Intensive Care Unit (ICU), moves the individual to the third stage, I3. The parameter p1 denotes the rate of transitioning from mild symptoms to hospitalization, while p2 represents the probability of requiring ICU care after hospitalization. Additionally, the model takes into account varying recovery rates δ1, δ2, and δ3, which correspond to different infectious stages to better reflect real-world conditions. Finally, it is assumed that only i-
ndividuals in the ICU are at risk of mortality, provided that all patients receive appropriate medical care as their condition worsens. Moreover, vital dynamics are also incorporated into the model, where Λ denotes the total inflow of population, capturing the effect of both births and net migration, and ζ denotes the outflow caused by deaths. Using these parameters, the model allows the population size to change over time as it accounts for new individuals entering through birth or immigration an-
d those leaving through death or emigration. Additionally, in this study, we incorporate stochasticity into the compartmental model structure. In real-world scenarios, environmental conditions often change unpredictably, leading to random disruptions in population systems. As a result, stochastic epidemic models that account for random noise have been widely developed. Compared to deterministic models, these stochastic approaches provide a more realistic depiction of disease dynamics. Following th-
e methodology outlined in Gray et al. (2011) and Din et al. (2020), we incorporate independent standard Brownian motions into each
5

compartment to represent fluctuations within the state population. The final compartmental model consists of a set of SDEs, depicted in Equation (1), with its corresponding flow chart illustrated in Figure 2. The detailed proof regarding the existence of unique positive solutions to this system of SDEs is provided in Appendix A.

            
            
dS = (Λ − (β1I1 + β2I2 + β3I3)S − αS − ζS)dt + σ1SdW1,t,
dV = (αS − (β1I1 + β2I2 + β3I3)σV − ζV )dt + σ2V dW2,t,
dE = ((β1I1 + β2I2 + β3I3)(S + σV ) − γE − ζE)dt + σ3EdW3,t,
dI1 = (γE − (δ1 + p1)I1 − ζI1)dt + σ4I1dW4,t,
dI2 = (p1I1 − (δ2 + p2)I2 − ζI2)dt + σ5I2dW5,t,
dI3 = (p2I2 − (δ3 + μ)I3 − ζI3)dt + σ6I3dW6,t,
dR = (δ1I1 + δ2I2 + δ3I3 − ζR)dt + σ7RdW7,t,
dD = (μI3)dt + σ8DdW8,t.
(1)
2.1.2 The dependence structure between vaccination administration and hospitalization
To account for the trade-offs faced by the government, we incorporate the dependence structure between the vaccination administration rate and the hospitalization rate into our model design. Our analysis assumes that vaccination efforts are distributed uniformly among all individuals classified as susceptible during the pandemic period. This assumption ensures that each individual in the Susceptible state has an equal likelihood of transitioning to the Vaccinated state. Furthermore, as the model f-
ocuses on a short timeframe, we assume that immunity conferred by vaccination remains effective throughout the model’s duration. Consequently, we do not account for the possibility of individuals re-entering the Susceptible state after transitioning to the Recovered state. Empirical evidence from the literature indicates a significant relationship between the hospitalization rate and the vaccination administration rate, as established by studies such as Uzun et al. (2022) and Amato et al. (2020). -
Building on the premise that the primary goal of vaccine development is to reduce hospitalizations, we propose that the hospitalization rate, defined as the transition rate from state I1 to I2, depends on changes in vaccination administration rates, which are captured by the rate at which susceptible individuals enter the Vaccinated state. This suggests that effective vaccination strategies lead to a decline in hospitalizations associated with the disease. In light of this, we revise our compartme-
ntal model to incorporate the hypothesis that the hospitalization rate, p1, is directly influenced by the control variable, vaccination administration rate, αt. This concludes the section on the epidemic model within our framework, which will serve as a tool to capture the dynamics of pandemic spread as well as the effects of vaccination. By employing this approach together with a subsequent economic cost model, we aim to determine the optimal vaccination strategy that achieves widespread and effi-
cient vaccination coverage while minimizing government expenditures.
2.2 The expenditure function
The primary objective of this work is to minimize the total government expenditures resulting from the pandemic. Drawing on the methodology of Caulkins et al. (2023), the objective function for our optimization problem encompasses four key components: vaccination costs, quarantine costs, economic costs, and healthcare costs. Vaccination costs identified as Vv(αt) represent the first component of government expenditures. According to a
report3 by the Australian Government, these costs accounted for a substantial share of public spending during the epidemic. Following the approach of Lenhart and Workman (2007), vaccination costs can be estimated based on the dose administration rate, expressed as
Vv(αt) = c1α2
t,
where c1 denotes the cost parameter associated with vaccine administration, and αt indicates the vaccination administration rate at time t. Furthermore, many countries implement lockdowns or mandatory quarantines for individuals at risk. Regarding these policies, some governments provide quarantine subsidies denoted as Vq(αt) during lockdown periods, which comprises another segment of government expenditures. We model this type of cost as
Vq(αt) = c2Et(αt).
This expression refers to the financial support provided by the government to individuals exposed to risk, a measure that is also essential during the pandemic. Another significant component of government expenditures during the pandemic is healthcare expenditures expressed as Vh(αt). Pandemic-related costs are influenced by the treatment expenses for individuals requiring different levels of
3Public health response to COVID-19. Available online at: https://www.aph.gov.au/About_Parliament/Parliamentary_Departments/ Parliamentary_Library/pubs/rp/BudgetReview202021/PublicHealthResponseCOVID-19.
6

care, which include medication, hospitalization, and intensive care. The parameters c3, c4, and c5 are chosen to capture these specific healthcare costs. As a result, the total healthcare cost is given by
Vh(αt) = c3I1,t(αt) + c4I2,t(αt) + c5I3,t(αt).
Finally, the last cost component in the expenditure function relates to the economic cost referred to as Vl(αt), which are primarily associated with the decline in economic output. Since our analysis focuses on the short term, the CobbDouglas production function is simplified under the assumption that capital adjustments are not feasible. Based on the premise that human capital is the main driver of production changes during an outbreak, we model the economic cost in terms of labour productivity. -
During the pandemic, we assume that individuals who are exposed to or infected with the disease cannot work. To capture the working population, we use ψ to represent the percentage of workers in the total population. This is defined as the product of the proportion of the working-age population and the labour force participation rate, which together reflect the share of workers relative to the overall population. Pandemic dynamics result in a reduction in total labour input and this leads to the f-
ollowing estimation of economic loss:
Vl(αt) = c6ψ{1 − [St(αt) + Vt(αt) + Rt(αt)]}.
Throughout this scenario, disease decreases the labour force over time, thus adversely impacting economic output. We estimate the resulting losses to the economy by quantifying these changes in the working population. To ensure clarity, the overall objective function is defined as:
J =E
ZT
0
Vv(αt) + Vq(αt) + Vh(αt) + Vl(αt) dt . (2)
This expression represents the sum of the four cost components over time: vaccination costs, quarantine subsidy costs, healthcare costs, and economic losses. The primary objective of the proposed framework is to minimize cumulative expenditures across these dimensions throughout the pandemic period. The optimization problem is therefore framed as minimizing cumulative expenditures, J, by adjusting the control variable, the vaccination administration rate, αt, over time. After formulating this cont-
rol setup, we demonstrate the existence of the solution to this stochastic control problem, as detailed in Appendix B.
3 Model solving
After developing our framework, we turn to the numerical methodologies used to address the proposed problem. In recent years, machine learning has garnered significant attention because of its broad range of potential applications across numerous scientific disciplines. Specifically, neural networks emerge as powerful, reliable, and efficient computational methods, largely because of their role as universal function approximators, as demonstrated by Hornik et al. (1989). According to Csáji et al. -
(2001), any nonlinear function can be approximated given a sufficient number of neurons and a well-chosen configuration. This principle underpins the development of neural networks for the study of dynamic systems. One well-known approach to using neural networks for dynamic systems is the Physics Informed Neural Networks (PINN), which enables the model to learn not only from observed data but also from the intrinsic dynamics within those data. PINN provides a robust framework for solving SDE-base-
d models and inferring parameters, as demonstrated by Raissi et al. (2019), Meng et al. (2020), and Chen et al. (2021). In the proposed framework, we apply this concept by estimating the compartmental model’s parameters using neural networks. Recent work has explored PINNs in the context of SIR-type compartmental models, where Berkhahn and Ehrhardt (2022), Ning et al. (2023), and He et al. (2023) show that PINNs are able to capture the complex dynamics of infectious diseases and calibrate model pa-
rameters within the system of equations. Accordingly, we employ this approach in the initial phase of our framework to estimate the unknown parameters in the compartmental model. Regarding the control problem in the second layer of the proposed framework, we survey the literature on numerical methodologies for solving high-dimensional control problems. It emerges that machine learning emulators can significantly reduce computation time once operational, outperforming traditional local process modu-
les. Consequently, deep neural networks possess powerful nonlinear fitting capabilities for approximating high-dimensional functions and offer strong potential to solve high-dimensional partial differential equations (PDEs). Numerous researchers have explored the use of neural networks for optimal control problems, including Effati and Pakdaman (2013), Han et al. (2016), Bach (2017), Böttcher et al. (2022), Ji et al. (2022), and Raissi (2024). Among these methods, each specific neural network stru-
cture tends to have its own advantages and drawbacks. Depending on the particular problem setup and the available training dataset, researchers should select the appropriate network architecture that is most suitable for their needs. Within our framework, we employ the approach developed by Han et al. (2016) to solve the stochastic optimal control problem. This fundamental method uses neural networks to derive the optimal control solution directly. Although more advanced network structures could a-
lso address this problem, they tend to be computationally demanding and require
7

large training datasets to ensure generalization, which would significantly increase data processing time. Given these considerations, our framework is designed to utilize the most recent disease transmission data and provide updated vaccination strategies to social planners in response to changing conditions. The control problem therefore should be solved within a reasonable timeframe. By balancing accuracy and computational efficiency, we have chosen this approach, and a more detailed discussio-
n of the selected network structure is presented in Section 3.2.
3.1 PINN for parameter calibration
Relying on the high-dimensional structure of our compartmental models, we utilize the PINN approach developed by Raissi et al. (2019) to numerically calibrate parameters in Equation 1). PINNs offer the advantage of combining data-fitting capabilities with adherence to the underlying physics of the system. This dual capability enables PINNs to accurately describe physical processes, which leads to their application in a broad array of solving differential equation problems. On the basis of this neu-
ral network framework, Shaier et al. (2021) extends the use of PINNs to SIR-type compartmental models by introducing the DINN approach. This approach demonstrates how neural networks can identify unique parameters and capture patterns of disease spread. By incorporating prior knowledge through the DINN framework, the model search space is effectively constrained, thus reducing the amount of data required. Building on this methodology, we also utilize PINNs with the structure shown in Figure 3. Thi-
s approach ensures that the network outputs remain consistent with the measured data and the physical laws described by the system of differential equations when estimating the parameters of the compartmental model. By leveraging this synergy between precise data fitting and compliance with physical laws, PINNs emerge as a powerful platform for addressing complex epidemiological challenges. To illustrate the application of PINN within our compartmental framework, we first introduce the notation us-
ed in designing the neural network for the SVEI3RD model. In this framework, the compartment states {Sti , Vti , Eti , I1,ti , I2,ti , I3,ti , Rti , Dti } are collectively denoted as Xti , while the set of trainable parameters {α, β1, β2, β3, σ, γ, δ1, δ2, δ3, p1, p2, μ} are referred to as Θ. Each time point is represented by ti, and the data consists of N points, ending at time tN . During the training process, the neural network is trained using data detailing the spread of the disease over time-
. As the model learns the underlying system dynamics, it generates estimations for the parameters driving these dynamics. Given that our compartmental model includes a wide range of parameters requiring calibration, we employ the procedure described in Shaier et al. (2021), which constrains the parameter search to predefined grids informed by existing literature. In addition, we evaluated the model’s performance using a test dataset to validate its prediction accuracy. In this case, the input of t-
he neural network is time variable ti, and its output is a tensor denoted as XtNi N which consists of {StNi N , VtiNN , EtNi N , I1N,tiN , I2N,tiN , I3N,tiN , RtNi N , DtNi N } and it provides an estimated representation of the
disease’s compartment states at each time step. The parameters of the differential equations Θ, which are associated with the physically constrained loss component, are iteratively adjusted to minimize the total loss function as part of the training process. The entire network is trained using the backpropagation algorithm introduced by Hecht-Nielsen (1992). Appendix C.1 summarizes the algorithm used to apply PINNs for deterministic compartmental model parameter estimation. In relation to the loss-
 function, the governing physical principles of the system of equations are integrated directly into the learning process. Specifically, there are two principal components to the loss function: a data fidelity component and a physics-based component. The data fidelity component represents the extent to which the neural network’s predictions match the empirical data, typically measured using the mean squared error (MSE) between the fitted results XtNi N
generated by the neural network and the observed values Xti over time. The physics-based term, in contrast, ensures that the neural network’s predictions conform to the physical laws underlying the system. Since the PINN architecture is designed to calibrate deterministic compartmental models, the physical residual loss is computed by comparing the automated differentiation of the neural network X ̇ tNi N = {S ̇tNi N , V ̇tiNN , E ̇ tNi N , I ̇1N,tiN , I ̇2N,tiN , I ̇3N,tiN , R ̇ tNi N , D ̇ tNi N-
 } with
the ordinary differential equations (ODEs) governing compartments over time. Accordingly, the aggregate loss function for a general PINN, which is a weighted summation of these two terms, is defined as:
L = λDataLData + λDE LDE ,
8

where
LData = 1
N
N
X
i=1
(Xti − XNN
ti )2
=1
N
N
X
i=1
(Sti − SNN
ti )2 + (Vti − V NN
ti )2 + (Eti − ENN
ti )2 + (I1,ti − INN
1,ti )2
+(I2,ti − INN
2,ti )2 + (I3,ti − I NN
3,ti )2 + (Rti − RNN
ti )2 + (Dti − DNN
ti )2
and
LDE = 1
N
N
X
i=1
[Λ − (β1I1,ti + β2I2,ti + β3I3,ti )Sti − αSti − ζSti − S ̇ NN
ti ]2
+[αSti − (β1I1,ti + β2I2,ti + β3I3,ti )σVti − ζVti − V ̇ NN
ti ]2
+[(β1I1,ti + β2I2,ti + β3I3,ti )(Sti + σVti ) − γEti − ζEti − E ̇ NN
ti ]2
+[γEti − (δ1 + p1)I1,ti − ζI1,ti − I ̇NN
1,ti ]2
+[p1I1,ti − (δ2 + p2)I2,ti − ζI2,ti − I ̇NN
2,ti ]2
+[p2I2,ti − (δ3 + μ)I3,ti − ζI3,ti − I ̇NN
3,ti ]2
+[δ1I1,ti + δ2I2,ti + δ3I3,ti − ζRti − R ̇ NN
ti ]2
+[μI3,ti − D ̇ NN
ti ]2 .
In this context, the hyperparameters λData and λDE define the relative weights assigned to data fidelity and adherence to physical laws within the overall loss function. By adjusting these parameters, researchers can control the trade-off between the model’s fidelity to specific data points and its compliance with governing physical equations, thereby enhancing its predictive capability. Moreover, to account for the stochastic nature of our compartmental model, we
Input Layer
Hidden Layers Output Layer
S
Automatic Differentiation
t
Data Loss LData
Physicsinformed Loss LDE
V
E
I1
R
D
I2
I3
Θ∗
Neural network with unknown parameter set Θ
Update
Minimize Loss
Physics-driven learning
Figure 3: Structural overview of the Physics Informed Neural Network (PINN).
modify the PINN algorithm by incorporating an inner loop that performs Monte Carlo iterations by iteratively updating the iteration value of j, and the total number of such iterations is represented as NMC. To capture the stochasticity
9

of the compartmental model, we perform repeated simulations using varying random noise inputs and compute their average effects. For the construction of the loss function in this stochastic setting, we employ the Euler-Maruyama discretization method, which allows the process to be updated based on the SDE terms. The discrete update equations for each compartment are detailed as follows:
SDE
ti+1,j = SN N
ti,j + [Λ − (β1INN
1,ti,j + β2I NN
2,ti,j + β3I NN
3,ti,j )SN N
ti,j − αtSNN
ti,j − ζSNN
ti,j ]∆t + σ1
√
∆t∆W1,ti,j ,
V DE
ti+1,j = V N N
ti,j + [αtSNN
ti,j − (β1INN
1,ti,j + β2I NN
2,ti,j + β3I NN
3,ti,j )σV NN
ti,j − ζV NN
ti,j ]∆t + σ2
√
∆t∆W2,ti,j ,
EDE
ti+1,j = EN N
ti,j + [(β1INN
1,ti,j + β2I NN
2,ti,j + β3I NN
3,ti,j )(SNN
ti,j + σV NN
ti,j ) − γENN
ti,j − ζENN
ti,j ]∆t + σ3
√
∆t∆W3,ti,j ,
I DE
1,ti+1,j = I N N
1,ti,j + [γENN
ti,j − (δ1 + p1(αt))INN
1,ti,j − ζI NN
1,ti,j ]∆t + σ4
√
∆t∆W4,ti,j ,
I DE
2,ti+1,j = I N N
2,ti,j + [p1(αt)INN
1,ti,j − (δ2 + p2)INN
2,ti,j − ζI NN
2,ti,j ]∆t + σ5
√
∆t∆W5,ti,j ,
I DE
3,ti+1,j = I N N
3,ti,j + [p2I NN
2,ti,j − (δ3 + μ)INN
3,ti,j − ζI NN
3,ti,j ]∆t + σ6
√
∆t∆W6,ti,j ,
RDE
ti+1,j = RN N
ti,j + (δ1INN
1,ti,j + δ2I NN
2,ti,j + δ3I NN
3,ti,j − ζRNN
ti,j )∆t + σ7
√
∆t∆W7,ti,j ,
DDE
ti+1,j = DN N
ti,j + μI NN
3,ti,j ∆t + σ8
√
∆t∆W8,ti,j .
In this set of equations, the time step size is denoted by ∆t = ti+1 − ti, and Z is defined as the set of noise intensity parameters given by {σ1, σ2, σ3, σ4, σ5, σ6, σ7, σ8}, each scaled by the square root of ∆t. The term ∆Wti,j represents the increment at each time point during the j-th iteration and follows a standard normal distribution. Under this model configuration, the overall loss function is calculated as the average over iterations, denoted as:
L = λDataLData + λDE LDE = λDataLData + 1
NM C
NM C X
j=1
λDE LDE,j ,
where
LData = 1
N
N
X
i=1
(Sti − S ̄NN
ti )2 + (Vti − V ̄ NN
ti )2 + (Eti − E ̄NN
ti )2 + (I1,ti − I ̄NN
1,ti )2
+ (I2,ti − I ̄NN
2,ti )2 + (I3,ti − I ̄NN
3,ti )2 + (Rti − R ̄NN
ti )2 + (Dti − D ̄ NN
ti )2
with
S ̄NN
ti = 1
NM C
NM C X
j=1
Sti,j , V ̄ NN
ti = 1
NM C
NM C X
j=1
Vti,j , E ̄NN
ti = 1
NM C
NM C X
j=1
Eti,j , I ̄NN
1,ti = 1
NM C
NM C X
j=1
I1,ti,j ,
I ̄NN
2,ti = 1
NM C
NM C X
j=1
I2,ti,j , I ̄NN
3,ti = 1
NM C
NM C X
j=1
I3,ti,j , R ̄NN
ti = 1
NM C
NM C X
j=1
Rti,j , D ̄ NN
ti = 1
NM C
NM C X
j=1
Dti,j , .
and
LDE,j = 1
N
N −1
X
i=0
(SDE
ti+1 − SN N
ti+1 )2 + (V DE
ti+1 − V N N
ti+1 )2 + (EDE
ti+1 − EN N
i+1 )2 + (IDE
1,ti+1 − I N N
1,ti+1 )2
+(I DE
2,ti+1 − I N N
2,ti+1 )2 + (I DE
3,ti+1 − I N N
3,ti+1 )2 + (RDE
ti+1 − RN N
ti+1 )2 + (DDE
ti+1 − DN N
ti+1 )2 ,
The detailed algorithm for this stochastic disease neural network modelling is presented in Algorithm C.2. Through this iterative process, the method improves the stability of parameter estimates by mitigating the influence of randomness.
3.2 Deep neural network for high-dimensional stochastic control
Following the estimation of parameters for the compartmental model, we turn to the methodology for deriving the numerical solution to the control problem. The formulation of our compartmental model results in a stochastic control problem that is inherently high-dimensional. In traditional stochastic control theory, problems are typically addressed using the dynamic programming principle. However, such methods often face significant technical challenges when applied to high-dimensional settings, pa-
rticularly due to the issue of "the curse of dimensionality", as described in Bellman and Dreyfus (2015). As a result, it becomes essential to consider modern machine learning techniques as a viable alternative.
10

αt0 αt1 · · · αtN−1
J (t0, Xt0 ) J (t1, Xt1 ) · · · J (tN−1, XtN−1 ) J (tN , XtN )
htH0 htH1 · · · htHN−1
··· ··· ··· ···
ht00 ht01 · · · ht0N−1
Xt0 Xt1 · · · XtN−1 XtN
Wt1 − Wt0 · · · WtN−1 − WtN−2 WtN − WtN−1
t = t1 t = tN−1 t = tN
Figure 4: Neural network architecture for solving the high-dimensional control problem.
Recent advancements in artificial intelligence have demonstrated remarkable progress across various complex challenges, highlighting that deep neural networks can be highly useful in addressing high-dimensional problems. Accordingly, we utilize the network proposed by Han et al. (2016) to solve the optimal control problem. Rather than estimating the value function, this approach directly approximates the control at each time step. Specifically, this neural network employs multiple feedforward subn-
etworks, each tasked with approximating the control variable at an individual time step, and these subnetworks are collectively trained to form the deep neural network. According to our model, the aggregate government expenditure serves as the loss function for the neural network, with the vaccination administration rate functioning as the control variable. The proposed problem is formulated as:
min
αtn ,n=0,...,N−1 E[JtN |Xt0 ] = min
αtn ,n=0,...,N −1 E[
N −1
X
n=0
jtn (Xtn , atn (Xtn )) + jtN (XtN )|Xt0 ],
where jtn (Xtn , αtn ) denotes the intermediate cost, and jtN (XtN ) denotes the final cost, which results in JtN , repre
senting the total cost. Also, we define the cumulative cost as Jtn = Pn
τ=0 jtτ (Xtτ , αtτ (Xtτ )) with n < N .
In this case, adapting the weights and bias parameters of the subnetwork allows us to directly approximate the control variable while minimizing the objective function. Accordingly, the optimization problem arising from our control framework is stated as follows:
min
{φtn }N−1
n=0
N −1
X
n=0
jtn (Xtn , αtn (Xtn |φtn )) + jtN (XtN ),
where Xtn is the set of compartment state variables, φtn represents the parameters inside each subnetwork we aim to optimize, and αtn denotes the control variable. The general network structure is illustrated in Figure 4 and is characterized by three types of connections. The core component of the network is a set of multilayer feedforward neural networks, which are used to approximate the control variables at each time point tn, represented as Xtn → ht1n → · · · → htHn → αtn . The parameters φtn -
within each
subnetwork are adjusted during the training process. The second type of connection concerns the transition of combined state and noise variables over time. This process is denoted by (Xtn , αtn , Wtn+1 − Wtn ) → Xtn+1 , allowing for the linkage of subnetworks across different time points. Finally, the third type of connection directly contributes to the network’s final output, described as (Xtn , αtn , Jtn ) → Jtn+1 . Based on this structural design, the operation of the proposed deep neural netwo-
rk begins with sampling the noise terms ∆Wtn = Wtn+1 − Wtn at each time step. These noise terms are then combined with state proportion data and a feedforward neural network is subsequently applied to approximate the control variable at each point in time. Following this step, the total expenditure for the modelling
11

period is calculated, serving as the deep neural network’s cost function. For implementation, the neural network is constructed and trained using the TensorFlow library. Parameter optimization is conducted by employing the Adam optimizer to minimize the overall loss function.
4 Numerical case study
In this section, we present a numerical case study that utilizes data from Victoria, Australia, drawn from the COVID-19 pandemic. We analyze the optimal vaccination strategy within the economic epidemiology framework. This case study demonstrates the practicality and applicability of the proposed approach.
4.1 The Victoria dataset
To conduct the numerical analysis, historical COVID-19 data for Victoria were obtained from the COVID-19 Australia dataset4. This dataset includes a variety of variables, which are detailed in Table 1. The dataset provides daily COVID-19 records for all Australian states. For this study, records specific to Victoria, Australia, during the COVID-19 pandemic, are extracted to analyze the disease transmission process in the modelling phase.
Date State Confirmed Confirmed_cum Deaths Deaths_cum Tests Tests_cum Recovered Recovered_cum Hosp Hosp_cum Vaccines Vaccines_cum ICU ICU_cum
Table 1: Key variables from the Australian COVID-19 dataset.
An exploratory data analysis is performed before fitting the theoretical models to the observed data. The number of confirmed cases is interpreted as the total count of individuals infected with COVID-19. Death and recovery records are directly incorporated into the model framework to calculate values for the Dead and Recovered states. The dataset also classifies infected individuals by symptom severity. Individuals requiring hospitalization are categorized as "Hosp" and "Hosp_cum", while those ad-
mitted to the Intensive Care Unit are listed as "ICU" and "ICU_cum". The number of mildly infected individuals was estimated by subtracting the total number of hospitalized and intensive care patients from the overall infection count at each point in time. Additionally, testing data is used to approximate the number of exposed individuals. In accordance with Victorian Government guidelines, testing is offered to individuals exhibiting symptoms indicative of COVID-19; thus, those tested are assumed-
 to be exposed to the virus.
Dataset State Initial Popn Proportion Dataset State Initial Popn Proportion
Training Set S 0.554181 Test Set S 0.191591 Training Set V 0.429185 Test Set V 0.779949 Training Set E 0.010225 Test Set E 0.009535 Training Set I1 0.001827 Test Set I1 0.001896 Training Set I2 0.000075 Test Set I2 0.000044 Training Set I3 0.000014 Test Set I3 0.000006 Training Set R 0.004361 Test Set R 0.016773 Training Set D 0.000132 Test Set D 0.000206
Table 2: Initial population proportions in training and test sets.
This dataset is limited because it records only the total number of vaccinations administered per day without distinguishing between injection types, such as the first dose, the second dose, and booster doses. To address this limitation and support data modelling, we obtain a supplementary dataset containing detailed vaccination records from the Department of Health and Aged Care5. Using this dataset, we calculate the vaccination administration rates for each dose and derive the relevant coverage -
percentages based on the official reports. Furthermore, we partition the dataset into training and test sets, selecting the starting point of the training set to coincide with a phase when vaccination coverage in Victoria reaches a relatively stable stage. The training dataset spans two months, from October 4, 2021, to December 2, 2021, while the test dataset encompasses a three-week period starting on December 3, 2021. To calculate the state proportions, the number of individuals in each compartm-
ent is divided by the total population. Table 2 displays the initial compartmental proportions for both the training and test sets. For
4COVID-19 Data for Australia. Available online at the address https://github.com/M3IT/COVID-19 Data. 5COVID-19 Vaccination Data. Available online at: https://www.health.gov.au/resources/publications.
12

consistency, individuals are categorized as vaccinated only if they have received two doses of the vaccine. Figure 6 provides a visualization of the cumulative number of vaccine doses administered in Victoria, highlighting the training and test periods. In this figure, the cyan segment corresponds to the training period, while the deep blue segment represents the test period6.
4.2 Modelling parameters
4.2.1 Regression relationship
We initiate our numerical analysis by investigating the relationship between hospitalization rates and vaccination administration rates. Studying this relationship prior is crucial for formulating the control problem in a well-founded manner. To identify this correlation using empirical evidence, we perform a regression analysis with the real-life dataset described in Section 4.1.
Figure 5: Correlation between hospitalization rates and vaccination administration rates.
0
1000000
2000000
3000000
4000000
5000000
6000000
22-Feb-21 22-Mar-21 22-Apr-21 22-May-21 22-Jun-21 22-Jul-21 22-Aug-21 22-Sep-21 22-Oct-21 22-Nov-21 22-Dec-21
Number of Injections
Cumulative Numbers of First and Second Dose Injections in Victoria
Training Data Test Data First Dose Injections Second Dose Injections
Figure 6: Trajectory of first and second dose vaccination rollout in Victoria, Australia.
It is essential to first disaggregate the total changes in each infectious state into distinct inflow and outflow components to facilitate the analysis. This is because both entries into and exits from compartments contribute to the state population changes over time. Using the change in recovered individuals, denoted by ∆Rt, and weighting it by the proportion of mildly infected individuals to the total infected population at that time, we quantify the number of individuals leaving the state I1, r-
epresented as ∆−I1,t. From this, the inflows into state I1, represented by ∆+I1,t, are derived by subtracting the outflows from the total observed change in the state, as expressed in Equation (3). A similar methodology is applied to separate the inflows and outflows from states I2 and I3, with all calculations ensuring adherence to the principle of non-negative population movements.

       
       
∆+I1,t = ∆I1,t − ∆−I1,t = max(0, ∆I1,t + I1,t
I1,t + I2,t + I3,t
∆Rt)
∆+I2,t = ∆I2,t − ∆−I2,t = max(0, ∆I2,t + I2,t
I1,t + I2,t + I3,t
∆Rt)
∆+I3,t = ∆I3,t − ∆−I3,t = max(0, ∆I3,t + I3,t
I1,t + I2,t + I3,t
∆Rt)
(3)
The vaccination administration rate is determined by dividing the number of vaccination injections by the number of individuals who can be vaccinated. Moreover, the rate at which mild infections progress to a severity requiring hospitalization is quantified using the hospital transmission rate, calculated as:
p1,t = ∆+I2,t
I1,t−1
.
To estimate the empirical parameters, we conducted a regression analysis using historical data from Victoria, Australia. Our results indicate that the relationship between vaccination administration rates and hospitalization rates can be expressed as:
p1(αt) = 0.0060 − 0.1341αt
with a p-value of less than 10−8, underscoring the statistical significance of this relationship. As illustrated in Figure 5, hospitalization rates decrease as vaccination administration rates increase. This finding aligns with the results of
6Victoria COVID-19 Breakdown. Available online at: https://covidbaseau.com/vic/.
13

Chen (2021), who documents a negative linear relationship between vaccination rates and transmission rates among symptomatic individuals requiring hospitalization. The observed relationship is also intuitively plausible, as rising vaccination rates protect a larger proportion of the population, resulting in a decline in hospitalization rates. This analysis underscores the important economic trade-off. Although increasing vaccination rates entails higher public expenditures on immunization program-
s, it simultaneously reduces healthcare budgets by decreasing hospitalization rates. Further, while expanding vaccination increases policy costs, it produces fiscal benefits through reduced healthcare spending. The empirically observed inverse relationship between vaccination and hospitalization rates confirms the validity of the control problem design, which seeks to minimize total government expenditures.
4.2.2 Vital dynamic parameters
For the parameter calibration of the compartmental model in this case study, we first estimate the inflow parameter Λ and the outflow parameter ζ, which are linked to vital dynamics. These parameters can be directly estimated using data from public sources, and we rely on literature-based approximations to determine these values. The overall population inflow into the system occurs through the Susceptible state, considering the effects of both births and net migration. For the birth rate, we utili-
ze statistics from the ABS report7, calculating it by dividing the total number of births (75,363 in 2021) in Victoria by the overall population and converting this value into a daily rate. This yields a birth rate of 0.0000315. Additionally, the net migration rate is also derived from ABS statistics , which indicates 13,100 net migrants in the fourth quarter of 2021. Based on this, the net migration rate for Victoria is estimated as 0.0000217 on a daily basis. Combining these two rates gives us a-
n overall population inflow rate as
Λ = 0.0000217 + 0.0000315 = 0.000053.
Moreover, we calculate the death rate based on life expectancy, following a similar methodology to Adak et al. (2021). According to Victoria’s sex ratio in 2021, the average life expectancy is calculated as the weighted average of male and female life expectancies, and the corresponding daily mortality rate is calculated as:
ζ= 1
(81.7 × 0.98
1.98 + 85.7 × 1
1.98 ) × 365 = 0.000033.
Parameters Values Source Parameters Values Source
Λ 0.000053 Assumed ζ 0.000033 Assumed β1 0.28120 Calibrated σ1 0.09275 Calibrated β2 0.15838 Calibrated σ2 0.03887 Calibrated β3 0.03880 Calibrated σ3 0.07517 Calibrated σ 0.06352 Calibrated σ4 0.06302 Calibrated γ 0.30954 Calibrated σ5 0.07878 Calibrated δ1 0.28505 Calibrated σ6 0.06123 Calibrated δ2 0.28269 Calibrated σ7 0.06110 Calibrated δ3 0.14206 Calibrated σ8 0.06199 Calibrated p2 0.14310 Calibrated μ 0.00420 Calibrated
Table 3: Description of parameters in the baseline setting.
4.2.3 Deterministic VS stochastic SVEI3RD model fitting
In this section, we compare the fitted results for the proposed stochastic model with its deterministic version, as specified in Equation (4), to evaluate the necessity of incorporating stochastic elements in the framework. We employ the PINN approach, as described in Section 3.2, to estimate the parameter set Θ in the compartmental system using our training data. Because the PINN method is highly data-intensive, as highlighted by Karniadakis et al. (2021), we implement data augmentation to improv-
e its learning performance. Following the recommendations of Wen et al. (2020), we apply cubic splines as a robust method to interpolate training data points, thus transforming daily frequency data into higher-frequency datasets. Specifically, we augment the data points to five, ten, and twenty times their original daily frequency. Using the augmented data, we train our neural network with the training dataset to calibrate parameter values tailored to this case study. In order to assess the effect-
iveness of the model, no changes are made to the test dataset.
7Deaths, Australia. Available online at: https://www.abs.gov.au/statistics/people/population/deaths-australia/2022
14


                          
                          
dS
dt = Λ − (β1I1 + β2I2 + β3I3)S − αS − ζS,
dV
dt = αS − (β1I1 + β2I2 + β3I3)σV − ζV,
dE
dt = (β1I1 + β2I2 + β3I3)S + (β1I1 + β2I2 + β3I3)σV − γE − ζE,
dI1
dt = γE − (δ1 + p1)I1 − ζI1,
dI2
dt = p1I1 − (δ2 + p2)I2 − ζI2,
dI3
dt = p2I2 − (δ3 + μ)I3 − ζI3,
dR
dt = δ1I1 + δ2I2 + δ3I3 − ζR,
dD
dt = μI3.
(4)
We utilize the Adam optimizer from the Tensorflow package, developed by Kingma (2014), to update weights, biases, and dynamic parameters in our neural network design. Through iterative parameter updates, the algorithm works to minimize the loss function and improve the accuracy of model predictions. In this case study, our neural network architecture comprises four hidden layers, each with 128 neurons. The tanh activation function is applied to all hidden layers, while the sigmoid function is used-
 for the output layer. The learning rate is set to 10−6, and the model is trained for 100, 000 epochs. We set the number of Monte Carlo iterations NMC to five to average out the noisy effect. Furthermore, the regularization parameters are set equally, with λData = λDE = 1 for data loss and residual loss.
Test MSE Test MAE
Number of Data points (N ) Search grid Deterministic Stochastic Deterministic Stochastic
Ndays×1 10% 0.00544343 0.00427258 0.00433145 0.00306000 50% 0.00506920 0.00427108 0.00395384 0.00305833 90% 0.00505704 0.00427115 0.00394915 0.00305878
Ndays×5 10% 0.00544348 0.00418813 0.00433146 0.00297853 50% 0.00507398 0.00418457 0.00395876 0.00296288 90% 0.00506203 0.00418470 0.00395400 0.00296323
Ndays×10 10% 0.00544343 0.00418795 0.00433145 0.00297842 50% 0.00507392 0.00418471 0.00395866 0.00296296 90% 0.00505700 0.00418476 0.00394918 0.00296320
Ndays×20 10% 0.00544343 0.00418805 0.00433145 0.00297849 50% 0.00506919 0.00418478 0.00395387 0.00296319 90% 0.00505700 0.00418480 0.00394928 0.00296316
Table 4: Evaluation of model calibration outcomes using test set data.
To evaluate the model’s performance, we compare the fitted results of the deterministic and stochastic models and use the test MSE and mean absolute error (MAE) to assess the quality of the fit. The results of our model fitting procedure, presented in Table 4, show that across all cases, the stochastic model significantly outperforms the deterministic model. For the search ranges of parameters, we employ a search grid of 50% around the initial parameter assumptions, which is appropriate for our da-
taset. Moreover, selecting the data frequency for the stochastic model is also essential. Generally, increasing the number of data points used in training the model enhances the representation of the training dataset’s performance. However, overfitting the neural network can occur when there are too many interpolated data points. When balancing predictability and interpretability, we find that the test MSE and MAE increase when the number of data points rises from fivefold to tenfold within a 50% -
search grid. Therefore, we select a model with fivefold data points. The calibrated parameters are shown in Table 3, along with a graphical representation of the model fitting performance on key compartments in Figure 7. In this context, the Vaccinated and Recovered states have relatively large population proportions compared to the other compartments. Due to these relatively large proportions, the neural network assigns greater weight to aligning these two states, resulting in a closer fit to the-
 corresponding observable data
15

Figure 7: Results of model fitting with PINN.
points. In the second and third panels of Figure 7, the Exposed and Mild Infected compartments exhibit periodic patterns. According to Soukhovolsky et al. (2021), cyclical fluctuations with a period of approximately seven days may occur without obvious biological causes, potentially reflecting social effects. One hypothesis is that the so-called “weekend effect” influences these cycles, because individuals presenting initial disease symptoms often seek medical attention only after the weekend, at -
the start of the following week. Since this cyclical behavior does not affect the overall trajectory of disease transmission over longer time horizons, we consider the proposed neural network sufficiently robust to capture the primary trends in the Exposed and Mild Infected populations.
4.2.4 Expenditure function parameters
In this section, we examine how the parameters for the pandemic-related cost function are selected. Upon formulating our objective function in Section 2.2, it is imperative to appropriately weigh each component of total government expenditure, as variations in these weight factors can impact the optimal vaccination strategy derived. Firstly, according to the report by Informed Decision8, the working-age population in Victoria is 81.8%, and the participation rate is 61.1%, resulting in the labour p-
roportion parameter ψ being approximately 50%. Subsequently, we estimate the other parameters in the cost function. By analyzing historical data from the Australian government, we calibrate the weights of each component to reflect the actual cost profile, thus enhancing the model’s ability to apply to real-life scenarios. According to the Parliament of Australia’s report9, expenditures relating to COVID-19 are mainly classified as economic response expenses, as well as costs associated with policy-
 campaigns and healthcare. Within the economic sector, a significant portion of the government’s expenditure was allocated to the JobKeeper program and the JobMaker Hiring Credit. Drawing on official records from the Australian Government, we compile total government expenditures in this category across the financial years 2019-20, 2020-21, and 2021-22 to assess the total economic assistance provided by the government in relation to the past pandemic.
8Australia Community Profile. Available online at https://profile.id.com.au/australia/employment-status?BMID=50. 9Budget Review 2020-21. Available online at: https://parlinfo.aph.gov.au/parlInfo/search/display/display.w3p;query=Id %3A%22library%2Fprspub%2F7622081%22.
16

Furthermore, we categorize the rest of government spending into policy-related costs and healthcare system costs based on the Australian Institute of Health and Welfare report10, which details government’s expenditures in response to COVID-19 from 2019–20 to 2021–22. We filter the data to include only expenditures related to the national and state governments and assume that direct healthcare costs encompass spending in the categories of "public health", "private hospitals", and "public hospitals-
". Thus, all other expenditures are classified as policy-related expenses in our case study. The analysis indicates that economic losses account for a substantial share of COVID-19-related costs in Australia, comprising approximately 75%. In comparison, policy-related costs constitute 9%, while healthcare system costs represent 16%. Figure 8 illustrates a financial year breakdown of policy expenditures, highlighting a significant increase in 2021–22 compared to the initial phase of the pandemic. T-
his growth reflects the Australian government’s intensified efforts to expand vaccine administration beginning in mid-2021, resulting in substantial spending during the third financial year following the onset of COVID-19.
Cost components Parameters Values
Vaccination cost c1 100 Quarantine cost c2 20 Medicine cost c3 50 Hospial cost c4 200 ICU cost c5 1000 Economic cost c6 100
Table 5: Parameters of the cost objective function for pandemic response.
We base our parameter assumptions for the expenditure expression on the actual expenditures incurred by the Australian government during the COVID-19 pandemic, as summarized in Table 5. In practice, payments for medical expenses vary among infected individuals and reflect the severity of their symptoms. Patients with severe symptoms are expected to incur higher medical costs. In the context of the recent Coronavirus pandemic, Kaier et al. (2020) reports that costs per non-ventilated ICU day range -
between 924 and 1074, and Ohsfeldt et al. (2021) demonstrates that treating patients in the ICU is nearly five times as expensive as treating other patients in a public hospital. Accordingly, we assume that the cost of regular hospital care is 200 per patient per day, represented as c4 = 200, while the expense for intensive care amounts to 1, 000 per patient per day, expressed as c5 = 1, 000. Furthermore, we compare our model’s expenditure pattern with the government’s actual expenditure structure-
. With the actual vaccination administration rate from the modelling period, we calculate the summation of vaccination administration costs and quarantine subsidies,
E[R T
o Vv(αt) + Vq(αt)dt], as described in Section 2.2, to represent the aggregate policy-related costs in our model. In
addition, E[R T
o Vl(αt)dt] is used to represent the economic loss, and E[R T
o Vh(αt)dt] represents the direct expenditures
related to the healthcare system. This approach ensures our cost model closely reflects the actual expenditure proportions for each category by the local government, as shown in Figure 8. Accordingly, the parameters are selected based on the specific expenditure profile for the particular modelling period of this case study.
Economic Cost 74.94%
Healthcare Cost 16.02%
Policy Cost 9.04%
Australian Government COVID-19 Expenditure
2021-22: 4.99%
2020-21: 2.82%
2019-20: 1.24% Economic Cost 73.53%
Healthcare Cost 14.83%
Policy Cost 11.63%
Model Expenditure
Figure 8: Comparison of actual (left) and modelled (right) government expenditures by component across vaccination strategies.
10Health system spending on the response to COVID-19 in Australia 2019-20 to 2021-22. Available online at: https://www.aihw.gov.au/reports/health-welfare-expenditure/health-system-spending-on-the-response-to-covid-19/data
17

4.3 Control results
4.3.1 The optimal vaccination strategy
After determining the parameters of the economic epidemiological model, we apply the neural network detailed in Section 3.2 to derive the numerical solution for our case study. For this case study, the subnetwork architecture consists of an input layer of initial compartmental proportions, three hidden layers, and an output layer illustrating the vaccination administration rate at each time point. In this setup, the tanh function is chosen as the activation function for the input and all hidden la-
yers, and the number of iterations is set at 10,000. Given that neural network outputs depend on the seed settings, we perform this process five times using different seed values and compute the average result to obtain the final output.
Figure 9: Optimal vaccination administration rates from multiple runs in the base case scenario.
Figure 10: Average loss values from multiple runs in the base case scenario.
As a first step, we evaluate the stability of the numerical results before considering the rationale for the optimal solution. Given the nature of neural networks, Figure 9 displays the optimal control solutions across five runs, demonstrating consistent results that support the stability of our numerical outcomes. In addition, we also examine changes in the loss function to verify convergence. As illustrated in Figure 10, the loss function value decreases as the number of iterations increases and-
 it eventually converges. Therefore, we consider the numerical solution to our control problem to be reliable. Under our baseline setting, the numerical solution corresponding to the optimal vaccination administration rate is shown as the cyan line in Figure 11. According to this optimal vaccination strategy, the government should initially implement a large number of vaccinations. Subsequently, the dose injection rate should gradually decrease as the virus becomes controlled. As a result, the pro-
posed strategy can effectively reduce government expenditures by managing a gradual decrease in vaccination administration rates.
4.3.2 Alternative strategies
Once we have determined the optimal vaccination strategy within our control framework, we conduct an analysis to compare our strategy with three alternative scenarios. The first comparison is with the government’s historical vaccination rate, depicted as the purple line in Figure 11 over the modelling period. Second, we consider a constant vaccination rate, which is equal to the average of actual vaccination rates over the period, regardless of the disease’s progression. This is represented by the-
 orange line, which shows the fixed vaccination rate throughout the modelling period. The final scenario examines the case where there is no vaccination, capturing the natural progression of the virus without intervention, corresponding to the red line at the bottom of the figure. We begin by comparing the optimal vaccination administration rate with the actual rate implemented by the government. Our analysis shows a divergence between the government’s approach and the proposed optimal strategy du-
ring the first half of the modelling period. According to our optimal strategy, the government should have launched vaccination programs at a high rate. This finding aligns with Acuña-Zegarra et al. (2021), which advocates for a high initial vaccination rate to achieve broad coverage and curb the virus’s spread early. Notably, the actual rate implemented by the government begins slowly and then increases over time, differing from the recommended strategy. This initial slow rollout is likely due to-
 uncertainties surrounding the newly introduced vaccine, leading us to consider vaccination hesitancy, discussed further in Section 5.3.1. Furthermore, our analysis reveals a close alignment between the recommended vaccination administration rates and the Australian government’s strategy during the latter half of the modelling period. As a result, the Victorian government effectively determines the strategy for controlling virus spread during the later stages of the pandemic, when they have gained-
 sufficient experience to decide the best course of action to be taken.
18

Figure 11: Comparison of optimal vaccination administration rates with alternative strategies.
No Vaccination Constant Vaccination
Actual Vaccination Optimal Vaccination
0
5
10
15
20
25
30
35
40
45
50
25.2
27.26
27.09
34.83
5.08
5.67
8.61
10.95
3.99
3.6
3.33
2.11
Cost
Government Expenditures under Various Vaccination Strategies
Policy Cost Healthcare Cost Economic Cost
Figure 12: Allocation of government expenditures by component under various vaccination strategies.
4.3.3 Population dynamics comparsion
As a subsequent step, we examine the population dynamics across different compartments over time in response to various vaccination strategies. Our focus is on the states E, I1, I2, and I3, analyzing how different vaccination administration rates influence both the number of individuals exposed to the virus and the progression of infections of varying severities over time. This analysis aims to investigate the differential impact of these strategies on virus progression through the evolution of st-
ate populations. By contrasting the development pathways of the virus under diverse vaccination regimes, we seek to gain insight into the effectiveness and limitations of each strategy in mitigating and controlling the spread of the virus. When examining the number of individuals exposed to the virus, the top left graph in Figure 13 illustrates that, without vaccination, a substantial portion of the population remains at risk. This is evidenced by the red line appearing at the top of the data seri-
es. In contrast, the other three vaccination strategies lead to a significant reduction in the number of exposed individuals over time. Notably, the optimal vaccination strategy, which features a high initial injection rate, achieves a more rapid decline in exposure than the other two strategies. This is shown by the cyan line consistently being the lowest. Following an analysis of the exposed population, we move to the changes within the infected compartments, specifically those who are mildly in-
fected, those requiring hospitalization, and those with severe symptoms that require intensive care. The last three graphs in Figure 13 illustrate these changes. As in the exposed population graph, the scenario without vaccination experiences significant increases in the number of infected individuals across all symptom levels compared to scenarios that utilize vaccination. Comparing all three strategies with vaccination involved, the constant vaccination administration rate proves to be less effe-
ctive in reducing the number of individuals infected across all severity levels, especially patients in hospitals or ICUs. It is evident from the graphs in the second row that the yellow lines are substantially higher than the purple and cyan lines. These results suggest that maintaining a constant vaccination administration rate throughout the period would not be effective in preventing the spread of the disease. Furthermore, in the case of the actual vaccination strategy implemented by the gover-
nment, it is evident that the number of infected patients significantly decreases when compared to the no and constant vaccination administration approaches. This decrease highlights the effectiveness of the past Victorian government’s vaccination campaign, which was launched with an initial upswing followed by a gradual decline during the COVID-19 pandemic. Such an approach played a significant role in controlling the spread of the disease and alleviating societal pressures. In addition, the opti-
mal vaccination strategy developed in Section 4.3.1 demonstrates further potential to reduce the number of infections more rapidly and sustain the lowest proportion of infected individuals over a longer duration. Consequently, it is regarded as the most effective strategy evaluated in this case study. While the government’s existing initiatives are commendable, it is considered that further enhancements can be made to control the disease through the proposed optimal strategy under our framework.
4.3.4 Expenditures comparsion
After analyzing changes in population dynamics, we turn to the costs associated with various government strategies. Table 6 presents a comparison of total expenditures under the four scenarios, with the corresponding graphical representation in Figure 12. In this case, we break down total government expenditures into categorized sectors and compare expenditures within each group separately. The results are displayed in Figure 14. For clarity in this analysis,
19

Figure 13: Comparison of policy impacts on exposed, mildly infected, hospitalized, and ICU populations.
we consolidate the vaccination cost and quarantine subsidy expenses as outlined in Section 4.2.4, referring to them collectively as the aggregate policy cost.
Strategy Policy cost Healthcare cost Economic cost Total
No vaccination 2.11 10.95 34.89 47.89
Constant vaccination 3.33 8.61 27.09 39.03
Actual vaccination 3.60 5.67 27.26 36.53
Optimal vaccination 3.99 5.08 25.20 34.27
Table 6: Comparison of government expenditures under different strategies.
We begin by considering the scenario with no vaccination during the modelling period. In this case, overall expenditures significantly exceed the other three vaccination strategies, as reflected in the highest red bar on the left in Figure 12. Although no costs are incurred for vaccination administration in the first scenario, increased exposure to the disease results in higher quarantine costs, thereby increasing the aggregate policy costs. In terms of healthcare system costs, the proportion of i-
nfected individuals requiring hospitalization and ICU is considerably higher in the absence of vaccination, which drives up healthcare expenditures. As a result of the widespread transmission of the virus, substantial economic losses have been incurred. Consequently, the total governmental expenditure reaches its highest level in the absence of vaccines. Following this, we examine the constant vaccination approach and the actual rollout of the government. Under the government’s actual strategy, po-
licy costs are higher than they would be under the uniform vaccination approach. This occurs because the government significantly increases vaccination administration rates at the beginning of the period, which leads to a rise in policy costs. Meanwhile, healthcare expenditures under the actual vaccination strategy are lower compared to a constant vaccination approach, as fewer individuals require hospitalization or intensive care. In
20

Figure 14: Comparison of policy expenditures on cost components during disease progression.
terms of economic costs, the actual vaccination strategy is intermediate between the zero vaccination strategy and the optimal strategy. The results of this study suggest that, under pressure from social and healthcare system capacities, the Victorian government effectively reduces the number of severe cases through vaccination, but at the expense of vaccination deployment costs and reduced economic productivity. This rationale prompts our study on optimal strategy analysis, aiming to reduce the o-
verall governmental cost while simultaneously lowering the burden on the healthcare system. Based on the analysis of all vaccination plans, we find that the optimal vaccination strategy achieves the lowest overall cost, as indicated by the cyan bar being the lowest in Figure 12. However, regarding policy costs, this optimal approach incurs the highest vaccination expense compared to other scenarios, as depicted by the highest curve of the cyan line in the top right graph of Figure 14. The reason f-
or this substantial vaccination cost lies in the high injection rate recommended by the optimal strategy. Nevertheless, excluding the rollout expense, the government could achieve significant reductions in other cost areas, with the cyan lines being the lowest in the remaining graphs of Figure 14. Specifically, the optimal vaccination strategy reduces healthcare costs by more than 50% compared to the zero vaccination strategy. The results align with the previously observed population data for stat-
e I1, I2, and I3 in Figure 13, suggesting that by adopting the appropriate strategy, the government could also alleviate the hospital burden. Moreover, this optimal vaccination strategy minimizes economic losses. Thus, by optimally regulating the vaccination administration rate, the government can minimize total expenditures while effectively reducing both social and hospital pressures by reducing the number of infections across all levels of illnesses. In this manner, the proposed strategy is exp-
ected to balance costs and benefits, resulting in a viable compromise during the pandemic.
5 Sensitivity Analysis
In this section, we examine how uncertainty affects the optimal vaccination policy by utilizing parameter settings that differ from the policymaker’s previous beliefs. Based on the works of Knight (1921) and Arrow (1951), we first differentiate between risk and uncertainty. When model parameters are known, risk represents the range of possible outcomes. Conversely, uncertainty arises when model parameters are unknown or potentially misspecified. Within our
21

framework, we introduce risk by allowing the disease to spread in a non-deterministic manner. Furthermore, uncertainty emerges when the true parameters governing the transmission and severity of a disease are obscured. In light of these uncertainties, the policymakers should consider the implications of different parameter settings when making decisions. Consequently, we conduct a range of sensitivity tests to evaluate the key parameters’ impacts embedded in the framework.
5.1 Uncertainty inside the compartmental model
5.1.1 Effect of noise intensities
Based on recent studies by Adak et al. (2021), Barnett et al. (2023), and Gunasekaran et al. (2023), it is essential to examine the impact of risk in the stochastic system by modifying the set of noise intensity parameters. Following the concept of La Torre et al. (2024), to formulate vaccination strategies under varying external risks, policymakers should evaluate the effect of differing noise levels on the proposed model design. In relation to this numerical case study, we examine three addition-
al sets of noise intensity values compared to our baseline. Using the values from Table 3 as a reference level, we multiply the set of calibrated noise intensity levels Z = {σ1, σ2, σ3, σ4, σ5, σ6, σ7, σ8} by factors of 0.1, 0.5, and 2. These correspond to scenarios with tiny, small, and large noise levels, respectively.
Figure 15: Comparison of optimal vaccination strategies under base case and different noise intensity levels.
Tiny Noise Small Noise Base Case Large Noise
0
5
10
15
20
25
30
35
40
25.6
25.2
24.18 23.16
5.14
5.08
4.91
4.75
3.98
3.99
3.81
3.17
Cost
Government Expenditures under Various Vaccination Strategies
Policy Cost Healthcare Cost Economic Cost
Figure 16: Comparison of expenditures on cost components under base case and different noise intensity levels.
It is crucial to examine the evolution of optimal vaccination strategies under different levels of noise intensity. Figure 15 illustrates how vaccination rollout paths change with varying noise levels, while Figure 16 presents the corresponding expenditures for each scenario. The results indicate that the reduction in vaccination administration rates midway through the period is less pronounced when noise intensity is high, as shown by the dark blue line. This finding demonstrates that heightened -
uncertainty compels risk-averse policymakers to adopt a more conservative vaccination strategy, sustaining a high vaccination administration rate over a prolonged period. Consequently, this approach incurs higher costs than the other scenarios, with the dark blue bar in Figure 16 representing the highest total expense. In contrast, under conditions of reduced stochastic noise, the proposed vaccination strategy, depicted by the green line, declines more rapidly over time, ultimately lowering aggreg-
ate expenditure levels. We then break down the aggregate costs into components and analyze them in detail. First, as the bottom bar in Figure 16 appears to be trending upward with increasing noise intensity, this suggests that the policy expenditure increases with an increase in noise intensity. At the same time, other costs are likely to increase with increasing levels of stochastic noise as well. Observations from this indicate that environmental fluctuations have a significant impact on both th-
e choice of vaccination rollout plans and the overall expenditures of the government. Consequently, policymakers should exercise caution when determining the noise intensity parameters for compartmental models pertaining to the pandemic.
5.1.2 Effect of infection rates
As the infection rate parameters within the compartmental model, represented by β1, β2 and β3, are the key driving factors of the spread of infectious diseases, we modify these parameters in our configurations and determine the optimal vaccination strategies based on the varying infection rates. To account for more severe diseases, we increase all βs by 50%, setting them to 1.5 times the values in Table 3. Conversely, for a less severe virus, all β parameters are halved to account for a mild infec-
tion. Furthermore, we reduce the infection rates by 90% in an extreme scenario, corresponding to a situation with a minimal number of infections. The effectiveness of our optimal policy is evaluated by analyzing
22

the cost savings that the proposed strategy achieved over the scenario in which the government maintains a constant vaccination administration rate, irrespective of any changes in the epidemic over time.
Tiny infection Mild infection Base Case Large Infection
0
10
20
30
40
50
60
41.44
25.2
17.01
13.27 5.07
3.99 3.46
3.22 8.24 5.08
3.51
2.79
Cost
Government Expenditures under Various Vaccination Strategies
Policy Cost Health System Cost Economic Cost
Figure 17: Comparison of expenditures under base case and different infection rate levels.
Policy Savings Healthcare Savings Economic Savings
−2
0
2
4
6
8
−0.76
1.62
0.16
−0.75
2.14
0.44
−0.66
3.53
1.9
−0.33
7.15
7.75
Optimal Policy Savings Compared to constant Vaccination Policies
Tiny Infection Mild Infection Base Case Large Infection
Figure 18: Comparison of cost savings between optimal and constant vaccination strategies under base case and different infection rates.
To begin with, we examine how optimal government expenditure is affected by different infection rates. As shown in Figure 17, when the infection rate increases by 50%, overall expenditure nearly doubles. The fourth bar illustrates a significant increase in spending across all components of the cost function compared to the third bar, which represents our base case optimal expenditure. Furthermore, when the infection rate is halved, or reduced to only 10% of the base case setting, overall pandemic--
related costs decrease significantly, with the economic expenditure sector being the most impacted. Additionally, following a similar approach to Acemoglu et al. (2021), we analyze the government savings achievable through the implementation of the optimal control approach compared to the constant vaccination strategy. Our findings indicate that the government can save more money by applying the proposed framework to obtain the optimal administration strategy during a severe disease outbreak compa-
red to the case of a mild virus. The dark blue bar, corresponding to the high infection scenario in Figure 18, illustrates significant savings in the healthcare and economic categories. Conversely, using this control strategy for a less severe disease tends to save a small percentage of funds compared to a uniform injection strategy over time. Therefore, during severe pandemics, it is imperative that the government prioritizes control strategies and makes rapid adjustments to plans in response to -
changing conditions, as this approach would result in significant savings for the country.
5.2 Uncertainty inside the expenditure function
5.2.1 Effect of vaccination costs
Subsequently, we examine the uncertainty associated with the parameters of the expenditure function. To analyze the sensitivity of cost parameters related to various components, we employ an approach similar to that described in Pike et al. (2014). With respect to vaccination policy costs, we consider three alternative levels. The first two scenarios explore reductions in current policy spending, achieved by multiplying the vaccination cost parameter c1 by factors of 0.1 and 0.5, respectively. The-
 third scenario involves an increase in current policy spending by doubling the value of c1. Taking into account different levels of policy costs, we analyze how the recommended strategy evolves over time and find that government spending on vaccination plays a pivotal role in shaping the optimal vaccination rollout. Figure 19 demonstrates that the optimal vaccination rate declines at a faster pace as government expenditures for vaccination implementation increase. The dark blue line, which corres-
ponds to higher vaccination costs, remains consistently below the lines representing lower-cost scenarios. In cases where vaccination is more expensive, governments are likely to slow down vaccination efforts more rapidly. This deceleration allows resources to be redirected toward post-pandemic recovery and reconstruction initiatives. On the other hand, when the cost of vaccination implementation has only a marginal impact on overall expenditures, governments can pursue a more gradual reduction in-
 the vaccination rate.
5.2.2 Effect of economic costs
Considering that the government’s expenditures on financial support constitute the most significant component of overall expenses, we also examine how variations in economic costs impact the outcomes of our optimal vaccination strategy. According to Jackson et al. (2020), the Australian Government provides substantial financial support during the COVID-19 pandemic. Similar to Section 5.2.1, we examine three additional values of the economic cost parameter
23

Figure 19: Comparison of optimal vaccination strategies under base case and different vaccination cost levels.
Figure 20: Comparison of optimal vaccination strategies under base case and different economic cost levels.
c6 relative to our baseline setting, using multiplying factors of 0.1, 0.5, and 2. These correspond to tiny, small, and large economic costs compared to our baseline setting. Accordingly, the optimal vaccination time paths for each scenario are depicted in Figure 20. In situations where the government provides substantial support during a pandemic, the optimal vaccination rate decreases at a slower pace, as illustrated by the dark blue line. Conversely, when government support is significantly dim-
inished, represented by the green line, the vaccination rate declines more rapidly, leading to a reduction in overall spending. This outcome aligns with expectations, given that policymakers are likely to aim to curb disease spread more aggressively when economic losses are substantial.
5.3 Other scenarios
5.3.1 Varies vaccination hesitancy
This section examines the impact of changes in vaccination hesitancy on optimal vaccination strategies within our framework. As mentioned in Section 4.3.2, a crucial factor influencing the optimal vaccination administration rates is the maximum feasible rollout rate achievable by the government. This is connected to the concept of vaccination hesitancy, which, according to MacDonald et al. (2015), is defined by the World Health Organization (WHO) as a “delay in acceptance or refusal of safe vaccin-
es despite the availability of vaccination services”. To establish effective search grids for the control variable, it is important to consider this concept. In our baseline analysis, the control variable’s range is determined by the maximum and minimum daily vaccination administration rates observed during the modelling period. However, individual preferences regarding vaccination can change rapidly depending on the severity of the viral infection. Thus, it is more common for vaccination acceptan-
ce rates to fluctuate over time rather than remain constant. Generally, acceptance rates are initially low at the outset of a vaccine campaign, but as the public becomes more aware of the vaccine’s efficacy, hesitancy tends to decrease over time. Furthermore, Edwards et al. (2021) suggests that the demand for vaccination tends to increase following a pandemic outbreak, with individuals more eager to receive vaccinations after the emergence of a severe outbreak. According to the proposed strategy o-
btained in Section 4.3.1, the optimal vaccination administration rate is highest at the beginning of the period. However, achieving such an elevated initial rate may be impractical due to significant hesitancy at the outset. To address this challenge, we consider the temporal evolution of attitudes toward vaccination. Biddle et al. (2021) finds a 10% reduction in hesitancy during the COVID-19 pandemic between August 2020 and January 2021. In light of this, we examine scenarios with hesitancy ratio-
s of 15% and 30%. These adjustments reduce the upper limit of our control variable to 70% and 85% of the baseline value. Moreover, we examine the scenario of reduced vaccination hesitancy, which may be linked to the increased popularity of vaccination in post-outbreak periods. This change increases the maximum injection rate by a factor of 1.15 and results in an expanded control range. Changes in individual attitudes toward vaccination impact the optimal vaccination policy in our case study, as il-
lustrated in Figure 21. In scenarios of high vaccination hesitancy, the green line indicates a compression in the range of the control variable and a decrease in the maximum possible injection rate. Furthermore, we also analyze the benefits of implementing an optimal vaccination policy by comparing the aggregate expenditure level achieved through the control framework to those under the constant vaccination policy. In this case, the government realizes significant savings in scenarios with reduced-
 vaccination hesitancy, as shown in Figure 22. Accordingly, from the perspective of
24

Figure 21: Comparison of optimal vaccination strategies under base case and different vaccination hesitancy levels.
Policy Savings Healthcare Savings Economic Savings
−1.00
−0.50
0.00
0.50
1.00
1.50
2.00
2.50
3.00
0.48
0.08
0.43
0.05
0.35
1.31
−0.38
0.59
2.06
−0.82
0.80
2.70
Optimal Policy Savings Compared to constant Vaccination Policies
Large Hesitancy Mild Hesitancy Base Case Opposite Hesitancy
Figure 22: Comparison of cost savings between optimal and constant vaccination strategies under base case and different vaccination hesitancy levels.
the government, promoting the vaccine campaign and emphasizing its benefits in the early stages of vaccination is crucial for enhancing the effectiveness of the vaccination strategy. Increasing positive public perceptions of vaccination fosters high levels of acceptance, thereby significantly reducing aggregate expenditures.
5.3.2 Various stages of time
In practice, the government’s vaccination rollout plan is expected to evolve over time as external environmental conditions change. Social planners should continuously update the vaccination administration campaign to ensure alignment with the latest situation of the virus. In this section, we examine the optimal vaccination plan with different initial vaccinated population proportions, as compared to Table 2, relating this to different phases of the vaccination rollout. In the case of Victoria, t-
he government develops an overall vaccination strategy11 prior to the administration of the first dose, which is published in late 2020. Despite this, the vaccination plan experiences slight delays due to supply-side issues, with the first dose being administered in February 2021. During the initial months, the actual rollout rate of the first dose is relatively low, likely due to the healthcare system not being fully operational during that period. Following the maturation of the system and incre-
ased public acceptance of vaccination, the rate of administration rises substantially. In the intermediate phase of first-dose distribution, the Australian government prioritizes promoting the administration of the second dose. As a result of the healthcare system’s improved efficiency and experience, the coverage rate for the second dose increases at a faster pace than that of the first dose, as illustrated in Figure 6. Considering our aim to provide policy recommendations to the government over -
various time periods, we conduct an analysis of our model across different stages of the vaccination process. These stages are represented by varying percentages of vaccinated individuals. This analysis uses a baseline scenario that occurs during the middle stages of second-dose injections, when most settings have stabilized, and about 43% of the population has received vaccinations. We examine changes in optimal policy by adjusting the percentage of vaccinated individuals to 25%, 75%, 80%, 85%, 9-
0%, and 95%. As shown in Figure 23, in the early stages, maintaining a higher vaccination rate is essential for effective control. However, when the vaccinated proportion reaches approximately 90%, the optimal administration rates gradually decrease, indicating that a lower ongoing rate suffices to contain the virus. Thus, by analyzing these different stages of time, our framework enables policymakers to develop adequate vaccination strategies tailored to the prevailing conditions at each phase of-
 the rollout.
6 Conclusion
Pandemics of emerging infectious diseases pose significant threats to global health and the economy. This paper aims to provide policymakers with a comprehensive framework in economic epidemiology that assists in developing optimal vaccination strategies during pandemics, thereby reducing government expenditures. This framework comprises three phases: modelling, optimizing, and analyzing. By employing this structured approach, governments can leverage the most recent data and continuously update p-
olicy responses over time in accordance with the progression of the
11Australia’s COVID-19 Vaccine Rollout. Available online at: https://www.anao.gov.au/work/performance-audit/australia-covid19-vaccine-rollout
25

Figure 23: Comparison of optimal vaccination strategies across phases of vaccination coverage.
virus. In the modelling phase, we utilize observed data to train the model and calibrate parameters to accurately reflect the conditions under investigation. This initial phase incorporates both epidemiological and economic data records. We implement the comprehensive stochastic SVEI3RD compartmental model to capture the dynamics of the pandemic and employ PINNs to effectively estimate the parameters of the epidemic model. For the government’s pandemic-related expenditures, we construct an overall-
 cost function that encompasses vaccination implementation costs, quarantine subsidies, healthcare expenditures, and economic losses. By breaking down aggregate expenditures into various components, social planners can adjust parameter assumptions in the cost function based on their beliefs and align them with specific local economic conditions. Moving to the optimization stage, we address the government’s trade-off during a pandemic, where simultaneously achieving low hospitalization rates and mi-
nimizing vaccination campaign expenditures is challenging. Thus, our focus is on identifying the optimal vaccination administration strategy that lowers the government’s overall pandemic-related costs over time. Given the complexity of this high-dimensional stochastic control problem, we apply deep neural networks to determine the optimal vaccination strategy within our model framework. In the final phase of our framework, we analyze the impacts of key parameters through a series of sensitivity te-
sts. Furthermore, to demonstrate the implementation of our framework, we construct a numerical case study using real-world data from Victoria. Our case study examines the optimal vaccination administration rates for Victoria during the COVID-19 pandemic. By comparing our proposed solution to the actual vaccination rollout plan, we find that the
26

Victorian government made significant progress in managing the pandemic during its later phases. However, our framework has the potential to further reduce the burden on the public healthcare system throughout the entire modelling period. The proposed optimal approach effectively suppresses the spread of the disease while reducing aggregate costs to local governments. Additionally, we conduct a sensitivity analysis of our framework for the case study, which provides policymakers with insights int-
o how the driving factors influence final optimal vaccination campaign decisions. Our analysis reveals that factors such as increased noise intensity levels, higher infection rates, reduced vaccination rollout costs, and enhanced governmental economic support can induce social planners to maintain a persistently high vaccination administration rate over an extended period. We also consider the impact of vaccine hesitancy and different time stages. In this case, policymakers can gain a comprehensiv-
e understanding of how to adjust rollout plans over time, enabling effective planning as external conditions change. In summary, our study aims to develop guidelines for policymakers by providing valuable strategic insights on managing pandemics and preparing for future outbreaks. While our framework offers valuable insights, there are several ways in which the modelling can be improved to enhance accuracy. For instance, because we focus on short-term vaccination strategies, our model does not acc-
ount for the possibility of reinfection after recovery. Incorporating the transition from the Recovered state back to the Susceptible state would enhance the model if the modelling period were extended. Furthermore, regarding the neural network employed to solve the optimal control problem, we utilize a foundational deep neural network to address this stochastic optimal control challenge. Given the rapid advancement in machine learning, recent studies (e.g., Han et al. (2018) and Ji et al. (2020))-
 have built upon this approach by transforming the optimal control problem into a forward-backward stochastic differential equation (FBSDE) problem. Thus, we could consider using alternative deep neural network architectures to solve our problem, potentially enhancing the efficiency and accuracy of our modelling. Additionally, since the results of the neural network depend on the range of the control variable, further research could be conducted to analyze this issue, which would be beneficial for-
 planning future vaccination programs. As a final remark, the recent outbreak has posed significant challenges for both the public and governments worldwide. While we cannot change what has already occurred, learning from the past remains crucial. To enable policymakers to prepare for future pandemics, it is essential to understand how pandemics spread and to develop appropriate management strategies over time. If this difficult period prompts a re-evaluation of pandemic responses and facilitates -
the development of optimal policies through analytical and empirical modelling, we glean valuable lessons from past experience. In this spirit, we write this paper to stimulate further research by economists on epidemic-related social planner problems. Given the uncertainty surrounding future pandemics, researchers are urged to develop effective frameworks to assist policymakers in both preparing for and responding to potential outbreaks.
27

A Prove of existence to the stochastic system
Theorem 1. For any initial values (S0, V0, E0, I1,0, I2,0, I3,0, R0, D0) ∈ R8+, there exists a unique positive solution (St, Vt, Et, I1,t, I2,t, I3,t, Rt, Dt) of Equation 1 on t ≥ 0 and the solution will remain in R8+ with probability 1.
Proof. As the coefficients of the considered equation are locally defined and satisfy the Lipschitz condition with respect to the available initial data for various compartments, namely (S0, V0, E0, I1,0, I2,0, I3,0, R0, D0) ∈ R8+, there exists one local solution for (St, Vt, Et, I1,t, I2,t, I3,t, Rt, Dt) on the time interval t ∈ [0, τe), where τe represent the occurrence time. To establish that the solution is global, we demonstrate that τe = ∞ almost surely. Define a sufficiently large non-negat-
ive real constant k0, ensuring that the initial values of all states are contained within the
interval [ 1
k0 , k0].
Then, we define the stopping time
τk = t ∈ [0, τk) : 1
k ≥ min{St, Vt, Et, I1,t, I2,t, I3,t, Rt, Dt}
or max{St, Vt, Et, I1,t, I2,t, I3,t, Rt, Dt} ≤ k for ∀k ≥ k0.
In this case, we assume that inf φ = ∞ when φ represents the void set. The stopping time τk grows monotonically as k → ∞. Take limk→∞ τk = τ∞ with τe ≥ τ∞ almost surely. If ∀t ∈ [0, τk), we demonstrate that τ∞ = ∞ almost surely. Furthermore, we establish that τe = ∞ almost surely, with
the state variables (St, Vt, Et, I1,t, I2,t, I3,t, Rt, Dt) ∈ R8+. Consequently, it follows that τe = ∞ almost surely. If the stated assumption is not valid, then there exist two constants 0 < T and ε ∈ (0, 1) for P (τ∞ ≤ T ) > ε. Further,
we define an operator H : R8+ → R+, as
H(S, V, E, I1, I2, I3, R, D) = (S + V + E + I1 + I2 + I3 + R + D) − 8
−(logS + logV + logE + logI1 + logI2 + logI3 + logR + logD)
Applying the basic inequality, which states that ∀x > 0, − log x + x − 1 ≥ 0, we write H ≥ 0. Assuming that k ≥ k0 and T > 0, we then use Ito’s result to obtain:
dH(S, V, E, I1, I2, I3, R, D) = LH(S + V + E + I1 + I2 + I3 + R + D)dt + σ1(S − 1)dW1,t + σ2(V − 1)dW2,t
+ σ3(E − 1)dW3,t + σ4(I1 − 1)dW4,t + σ5(I2 − 1)dW5,t + σ6(I3 − 1)dW6,t
+ σ7(R − 1)dW7,t + σ8(D − 1)dW8,t
where LH: R8+ → R+ is given by the following definition:
LH(S + V + E + I1 + I2 + I3 + R + D) = (1 − 1
S )[Λ − (β1I1 + β2I2 + β3I3)S − αS − ζS]
+ (1 − 1
V )[αS − (β1I1 + β2I2 + β3I3)σV − ζV ] + (1 − 1
E )[(β1I1 + β2I2 + β3I3)S + (β1I1 + β2I2 + β3I3)σV − γE − ζE]
+ (1 − 1
I1
)[γE − (δ1 + p1)I1 − ζI1] + (1 − 1
I2
)[p1I1 − (δ2 + p2)I2 − ζI2] + (1 − 1
I3
)[p2I2 − (δ3 + μ)I3 − ζI3]
+ (1 − 1
R )(δ1I1 + δ2I2 + δ3I3 − ζR) + (1 − 1
D )μI3 + 1
2 (σ2
1 + σ2
2 + σ2
3 + σ2
4 + σ2
5 + σ2
6 + σ2
7 + σ2
8)
28

LH = Λ − (β1I1 + β2I2 + β3I3)S − αS − ζS + αS − (β1I1 + β2I2 + β3I3)σV − ζV
+ (β1I1 + β2I2 + β3I3)(S + σV ) − γE − ζE
+ γE − (δ1 + p1)I1 − ζI1
+ p1I1 − (δ2 + p2)I2 − ζI2
+ p2I2 − (δ3 + μ)I3 − ζI3
+ δ1I1 + δ2I2 + δ3I3 − ζR
+ μI3 + 1
2 (σ2
1 + σ2
2 + σ2
3 + σ2
4 + σ2
5 + σ2
6 + σ2
7 + σ2
8)
− [Λ
S + (β1I1 + β2I2 + β3I3) + α + ζ]
− [ αS
V + (β1I1 + β2I2 + β3I3)σ + ζ]
− [(β1I1 + β2I2 + β3I3) S + σV
E + γ + ζ]
− [γ E
I1
+ (δ1 + p1) + ζ]
− [p1
I1
I2
+ (δ2 + p2) + ζ − p2
I2
I3
+ (δ3 + μ) + ζ]
− [(δ1I1 + δ2I2 + δ3I3) 1
R + ζ] − μ I3
D
LH ≤ 1
2 (σ2
1 + σ2
2 + σ2
3 + σ2
4 + σ2
5 + σ2
6 + σ2
7 + σ2
8)
+ Λ + β1 + β2 + β3 + α + σ + γ + δ1 + p1 + δ2 + p2 + δ3 + μ + 7ζ = K
This implies that the mathematical form of K is non-negative, and it does not depend on either the state variable or the independent variable.
dH(S, V, E, I1, I2, I3, R, D) ≤ Kdt + σ1(S − 1)dW1,t + σ2(V − 1)dW2,t + σ3(E − 1)dW3,t
+ σ4(I1 − 1)dW4,t + σ5(I2 − 1)dW5,t + σ6(I3 − 1)dW6,t
+ σ7(R − 1)dW7,t + σ8(D − 1)dW8,t
Integrating the equation above, we obtain
E H(S(τk ∧ T ), V (τk ∧ T ), E(τk ∧ T ), I1(τk ∧ T ), I2(τk ∧ T ), I3(τk ∧ T ), R(τk ∧ T ), D(τk ∧ T ))
≤H(S0, V0, E0, I1,0, I2,0, I3,0, R0, D0) + E
Z τk∧T
0
K dt
≤H(S0, V0, E0, I1,0, I2,0, I3,0, R0, D0) + T K
Set Ωk = {τk ≤ T } for k ≥ k1, we obtain P (Ωk) ≥ ε. In this case, for each ω from Ω(ω), there must exist one or
more than one S(τk, ω), V (τk, ω), E(τk, ω), I1(τk, ω), I2(τk, ω), I3(τk, ω), R(τk, ω), D(τk, ω) which equals 1
k or k. As a result, H(S(τk), V (τk), E(τk), I1(τk), I2(τk), I3(τk), R(τk), D(τk)) is no less than ( 1
k − 1 + log k) and (k −
1 − log k), and we obtain
H(S(τk), V (τk), E(τk), I1(τk), I2(τk), I3(τk), R(τk), D(τk)) ≥ ( 1
k − 1 + log k) ∧ (k − 1 − log k)
Hence, we get
H(S0, V0, E0, I1,0, I2,0, I3,0, R0, D0) + T K
≥ E[1Ω(ω)H(S(τk), V (τk), E(τk), I1(τk), I2(τk), I3(τk), R(τk), D(τk))]
≥ ε[(k − log k − 1) ∧ ( 1
k + log k − 1)]
where 1Ω(ω) represents the indicating operator of ω. By letting k → ∞, this leads to the contradiction ∞ > H(S0, V0, E0, I1,0, I2,0, I3,0, R0, D0) + T K = ∞. This contradiction implies that τ∞ = ∞ almost surely, thereby completing the proof.
29

B The existence of control solution
Theorem 2. For any X ∈ R8+, if J(α∗) is finite, then the stochastic optimal control problem admits an optimal control.
Proof. To establish the existence of the optimal control, it suffices to verify that conditions [C1]-[C3] are satisfied for Equation 1, as the finiteness of the cost functional J(·) at the optimal control follows directly from the bounded nature of Xt and αt.
C1 Since the set for the control variable α is closed and bounded, it follows that the set is a compact metric space under the usual metric.
C2 As Theorem 1 guarantees the existence of positive global solutions for Equation 1, the functions b and Z are established to be Lipschitz continuous.
C3 From the study of Boyd and Vandenberghe (2004), a set C ⊂ Rn is convex if the line segment connecting any two points in C lies entirely within C. Specifically, for any x1, x2 ∈ C and for any 0 ≤ θ ≤ 1, it holds that θx1 + (1 − θ)x2 ∈ C.
In this case, we need to prove that, for every (t, X), the set (b, ZZT , J) is convex in C ⊆ R8, which ensures the existence of the optimal control variable. Since
Z = ZT =

        
σ1St 0 0 0 0 0 0 0 0 σ2Vt 0 0 0 0 0 0 0 0 σ3Et 0 0 0 0 0 0 0 0 σ4I1,t 0 0 0 0 0 0 0 0 σ5I2,t 0 0 0 0 0 0 0 0 σ6I3,t 0 0 0 0 0 0 0 0 σ7Rt 0 0 0 0 0 0 0 0 σ8Dt

        
and
ZZT (t, Xt, αt) =

         
σ12St2 0 0 0 0 0 0 0
0 σ22Vt2 0 0 0 0 0 0
0 0 σ32Et2 0 0 0 0 0
0 0 0 σ42I12,t 0 0 0 0
0 0 0 0 σ52I22,t 0 0 0
0 0 0 0 0 σ62I32,t 0 0
0 0 0 0 0 0 σ72Rt2 0
0 0 0 0 0 0 0 σ82Dt2

         
,
ZZT is independent of α, the set ZZT is convex. Then, consider f = c1α2 + c2Et + c3I1,t + c4I2,t + c5I3,t + c6ψ[1 − (St + Vt + Et)], we let f1, f2 be two such elements given by f1 = c1α12 + c2Et + c3I1,t + c4I2,t + c5I3,t + c6ψ[1 − (St + Vt + Et)] and f2 = c1α22 + c2Et + c3I1,t + c4I2,t + c5I3,t + c6ψ[1 − (St + Vt + Et)] where α1, α2 ∈ C.
Let 0 ≤ θ ≤ 1, then θf1 + (1 − θ)f2 = c2Et + c3I1,t + c4I2,t + c5I3,t + c6ψ[1 − (St + Vt + Et)] + c1[θα12 + (1 − θ)α22]. Since y = α2 is convex, ∃α3 ∈ C where θα12 + (1 − θ)α22 = α32.
Therefore, θf1 + (1 − θ)f2 = c2Et + c3I1,t + c4I2,t + c5I3,t + c6ψ[1 − (St + Vt + Et)] + c1α32. Hence, the set {f |α ∈ C} is convex. Then, we are left to prove that {((b1, b2, b3, b4, b5, b6, b7, b8)|u ∈ U )} is convex, where

            
            
b1 = Λ − (β1I1 + β2I2 + β3I3)S − αS − ζS,
b2 = αS − (β1I1 + β2I2 + β3I3)σV − ζV,
b3 = (β1I1 + β2I2 + β3I3)S + (β1I1 + β2I2 + β3I3)σV − γE − ζE,
b4 = γE − (δ1 + p1)I1 − ζI1,
b5 = p1I1 − (δ2 + p2)I2 − ζI2,
b6 = p2I2 − (δ3 + μ)I3 − ζI3,
b7 = δ1I1 + δ2I2 + δ3I3 − ζR,
b8 = μI3.
(5)
We obtain b1 + b2 + b3 + b4 + b5 + b6 + b7 + b8 = Λ − ζ(S + V + E + I1 + I2 + I3 + R) and we let D = Λ − ζ(S + V + E + I1 + I2 + I3 + R).
30

Define bp =

        
bp
1(t)
bp
2(t)
bp
3(t)
bp
4(t)
bp
5(t)
bp
6(t)
bp
7(t)
bp
8(t)

        
and bq =

        
bq
1(t)
bq
2(t)
bq
3(t)
bq
4(t)
bq
5(t)
bq
6(t)
bq
7(t)
bq
8(t)

        
be two distinct non-zero vectors.
Since θbp + (1 − θ)bq = θD + (1 − θ)D = D, we conclude that the set (b|α ∈ C) is convex. Hence, for every (t, X), the set (b, ZZT , f ) is convex in C ⊂ R8. Therefore, from Theorem 5.3 in the textbook of Yong and Zhou (1999), the existence of optimal control is guaranteed.
31

C Model fitting algorithms
C.1 Deterministic Model Fitting
Algorithm 1 Deterministic Data Fitting
Require: t, St, Vt, Et, I1,t, I2,t, I3,t, Rt, Dt
Randomly initialize weights w, biases b and parameters set Θ for epoch in epochs do Obtain the values of each compartment of the SVEI3RD model with the input as t: {StNi N , VtiNN , EtNi N , I1N,tiN , I2N,tiN , I3N,tiN , RtNi N , DtNi N } = N N (ti)
Calculate the data loss function denoting the mismatch of the output of the neural network and observation data ( i representing the number of data points):
LData = 1
N
N
X
i=1
(Sti − SNN
ti )2 + (Vti − V NN
ti )2 + (Eti − ENN
ti )2 + (I1,ti − INN
1,ti )2
+(I2,ti − INN
2,ti )2 + (I3,ti − I NN
3,ti )2 + (Rti − RNN
ti )2 + (Dti − DNN
ti )2
Obtain the auto-differentiation values {S ̇tNi N , V ̇tiNN , E ̇ tNi N , I ̇1N,tiN , I ̇2N,tiN , I ̇3N,tiN , R ̇ tNi N , D ̇ tNi N }
Work out the residual loss represents the mean of the sum of squared residual errors from each compartment:
LDE = 1
N
N
X
i=1
[Λ − (β1I1,ti + β2I2,ti + β3I3,ti )Sti − αSti − ζSti − S ̇ NN
ti ]2
+[αSti − (β1I1,ti + β2I2,ti + β3I3,ti )σVti − ζVti − V ̇ NN
ti ]2
+[(β1I1,ti + β2I2,ti + β3I3,ti )(Sti + σVti ) − γEti − ζEti − E ̇ NN
ti ]2
+[p1I1,ti − (δ2 + p2)I2,ti − ζI2,ti − I ̇NN
1,ti ]2
+[p1I1,ti − (δ2 + p2)I2,ti − ζI2,ti − I ̇NN
2,ti ]2
+[p2I2,ti − (δ3 + μ)I3,ti − ζI3,ti − I ̇NN
3,ti ]2
+(δ1I1,ti + δ2I2,ti + δ3I3,ti − ζRti − R ̇ NN
ti )2
+(μI3,ti − D ̇ NN
ti )2
Calculate the total loss function as:
L = λDE LDE + λDataLData
Update w, b and the dynamic parameters set Θ by using the Adam optimizer toolkit in Tensorflow. end for
32

C.2 Stochastic Model Fitting
Algorithm 2 Stochastic Data Fitting
Require: t, St, Vt, Et, I1,t, I2,t, I3,t, Rt, Dt, NMC where NMC is the number of iteration over the SDE. Randomly initialize weights w, biases b and dynamic parameter sets Θ and Z. for epoch in epochs do for j = 1 to NMC do
Obtain the values of each compartment of the SVEI3RD model with the input as t:
SNN
ti,j , V NN
ti,j , ENN
ti,j , I NN
1,ti,j , I N N
2,ti,j , I N N
3,ti,j , RN N
ti,j , DNN
ti,j , W1,ti,j , W2,ti,j , W3,ti,j , W4,ti,j , W5,ti,j , W6,ti,j ,
W7,ti,j , W8,ti,j = N N (ti, j)
Set {SDE
t0,j , V DE
t0,j , EDE
t0,j , I DE
1,t0,j , I DE
2,t0,j , I DE
3,t0,j , RDE
t0,j , DDE
t0,j } = {S0, V0, E0, I1,0, I2,0, I3,0, R0, D0}
for time step i = 0 to N − 1 do Calculate the SDE terms by using Euler-Maruyama discretization: StDi+E1,j = SN N
ti,j + (Λ − (β1INN
1,ti,j + β2I NN
2,ti,j + β3I NN
3,ti,j )SN N
ti,j − αSNN
ti,j − ζSNN
ti,j )∆t + σ1
√∆t∆W1,ti,j
VtiD+E1 = V N N
ti,j + (αSNN
ti,j − (β1INN
1,ti,j + β2I NN
2,ti,j + β3I NN
3,ti,j )σV NN
ti,j − ζV NN
ti,j )∆t + σ2
√∆t∆W2,ti,j
EDE
ti+1,j = EN N
ti,j + ((β1INN
1,ti,j + β2I NN
2,ti,j + β3I NN
3,ti,j )(SNN
ti,j + σV NN
ti,j ) − γENN
ti,j − ζENN
ti,j )∆t
+σ3
√∆t∆W3,ti,j I DE
1,ti+1,j = I N N
1,ti,j + (γENN
ti,j − (δ1 + p1INN
1,ti,j − ζI NN
1,ti,j )∆t + σ4
√∆t∆W4,ti,j
I2D,tEi+1,j = I N N
2,ti,j + (p1I NN
1,ti,j − (δ2 + p2)INN
2,ti,j − ζI NN
2,ti,j )∆t + σ5
√∆t∆W5,ti,j
I DE
3,ti+1,j = I N N
3,ti,j + (p2I NN
2,ti,j − (δ3 + μ)INN
3,ti,j − ζI NN
3,ti,j )∆t + σ6
√∆t∆W6,ti,j
RDE
ti+1,j = RN N
ti,j + (δ1INN
1,ti,j + δ2I NN
2,ti,j + δ3I NN
3,ti,j − ζRNN
ti,j )∆t + σ7
√∆t∆W7,ti,j
DDE
ti+1,j = DN N
ti,j + (μINN
3,ti,j )∆t + σ8
√∆t∆W8,ti,j
end for
Calculate the physical imposed loss across time:
LDE,j = 1
N
PN −1
i=0 [(SDE
ti+1,j − SN N
ti+1,j )2 + (V DE
ti+1,j − V N N
ti+1,j )2 + (EDE
ti+1,j − EN N
ti+1,j )2 + (I DE
1,ti+1,j − I N N
1,ti+1,j )2
+(I DE
2,ti+1,j − I N N
2,ti+1,j )2 + (I DE
3,ti+1,j − I N N
3,ti+1,j )2 + (RDE
ti+1,j − RN N
ti+1,j )2 + (DDE
ti+1,j − DN N
ti+1,j )2
end for
Calculate the overall physical imposed loss across iterations:
LDE = 1
NM C
PNM C
j=1 LDE,j
Calculate the data loss for each compartment across iterations:
S ̄tNiN = 1
NM C
PNM C
j=1 Sti,j , V ̄tiNN = 1
NM C
PNM C
j=1 Vti,j , E ̄tNiN = 1
NM C
PNM C
j=1 Eti,j , I ̄1N,tNi = 1
NM C
PNM C
j=1 I1,ti,j ,
I ̄2N,tNi = 1
NM C
PNM C
j=1 I2,ti,j , I ̄3N,tNi = 1
NM C
PNM C
j=1 I3,ti,j , R ̄tNiN = 1
NM C
PNM C
j=1 Rti,j ,
D ̄ tNiN = 1
NM C
PNM C
j=1 Dti,j ,
Obtain the overall data loss across all time points:
LData = 1
N
PN
i=1[(Sti − S ̄tNiN)2 + (Vti − V ̄tiNN)2 + (Eti − E ̄tNiN)2 + (I1,ti − I ̄1N,tNi )2 + (I2,ti − I ̄2N,tNi )2
+(I3,ti − I ̄3N,tNi )2 + (Rti − R ̄tNiN)2 + (Dti − D ̄ tNiN)2]
Thus, the total loss function is denoted as:
L = λDataLData + λDE LDE
Update w, b, Θ and Z by using the Adam optimizer in Tensorflow to minimize the total loss function. end for
33

References
Acemoglu, D., Chernozhukov, V., Werning, I., and Whinston, M. D. (2021). Optimal targeted lockdowns in a multigroup sir model. American Economic Review: Insights, 3(4):487--502.
Acemoglu, D., Fallah, A., Giometto, A., Huttenlocher, D., Ozdaglar, A., Parise, F., and Pattathil, S. (2024). Optimal adaptive testing for epidemic control: combining molecular and serology tests. Automatica, 160:111391.
Acuña-Zegarra, M. A., Díaz-Infante, S., Baca-Carrasco, D., and Olmos-Liceaga, D. (2021). Covid-19 optimal vaccination policies: A modeling study on efficacy, natural and vaccine-induced immunity responses. Mathematical Biosciences, 337:108614.
Adak, D., Majumder, A., and Bairagi, N. (2021). Mathematical perspective of covid-19 pandemic: Disease extinction criteria in deterministic and stochastic models. Chaos, Solitons & Fractals, 142:110381.
Allen, L. J. (2008). An introduction to stochastic epidemic models. In Mathematical Epidemiology, pages 81--130. Springer.
Alvarez, F., Argente, D., and Lippi, F. (2021). A simple planning problem for covid-19 lock-down, testing, and tracing. American Economic Review: Insights, 3(3):367--382.
Amato, M., Werba, J. P., Frigerio, B., Coggi, D., Sansaro, D., Ravani, A., Ferrante, P., Veglia, F., Tremoli, E., and Baldassarre, D. (2020). Relationship between influenza vaccination coverage rate and covid-19 outbreak: an italian ecological study. Vaccines, 8(3):535.
Arias, J. E., Fernández-Villaverde, J., Rubio-Ramírez, J. F., and Shin, M. (2023). The causal effects of lockdown policies on health and macroeconomic outcomes. American Economic Journal: Macroeconomics, 15(3):287--319.
Arrow, K. J. (1951). Alternative approaches to the theory of choice in risk-taking situations. Econometrica: Journal of the Econometric Society, pages 404--437.
Bach, F. (2017). Breaking the curse of dimensionality with convex neural networks. Journal of Machine Learning Research, 18(19):1--53.
Bailey, N. T. (1975). The mathematical theory of infectious diseases and its applications. Charles Griffin & Company Ltd.
Barnett, M., Buchak, G., and Yannelis, C. (2023). Epidemic responses under uncertainty. Proceedings of the National Academy of Sciences, 120(2):e2208111120.
Beddington, J. R. and May, R. M. (1977). Harvesting natural populations in a randomly fluctuating environment. Science, 197(4302):463--465.
Bellman, R. E. and Dreyfus, S. E. (2015). Applied dynamic programming, volume 2050. Princeton University Press.
Berkhahn, S. and Ehrhardt, M. (2022). A physics-informed neural network to model covid-19 infection and hospitalization scenarios. Advances in Continuous and Discrete Models, 2022(1):61.
Biddle, N., Edwards, B., Gray, M., and Sollis, K. (2021). Change in vaccine willingness in australia: August 2020 to january 2021. MedRxiv, pages 2021--02.
Böttcher, L., Antulov-Fantulin, N., and Asikis, T. (2022). Ai pontryagin or how artificial neural networks learn to control dynamical systems. Nature Communications, 13(1):333.
Boyd, S. and Vandenberghe, L. (2004). Convex Optimization. Cambridge University Press.
Carnehl, C., Fukuda, S., and Kos, N. (2023). Epidemics with behavior. Journal of Economic Theory, 207:105590.
Caulkins, J. P., Grass, D., Feichtinger, G., Hartl, R. F., Kort, P. M., Kuhn, M., Prskawetz, A., Sánchez-Romero, M., Seidl, A., and Wrzaczek, S. (2023). The hammer and the jab: Are covid-19 lockdowns and vaccinations complements or substitutes? European Journal of Operational Research, 311(1):233--250.
Chen, K., Pun, C. S., and Wong, H. Y. (2023). Efficient social distancing during the covid-19 pandemic: Integrating economic and public health considerations. European Journal of Operational Research, 304(1):84--98.
Chen, Y. T. (2021). The effect of vaccination rates on the infection of covid-19 under the vaccination rate below the herd immunity threshold. International Journal of Environmental Research and Public Health, 18(14):7491.
Chen, Z., Liu, Y., and Sun, H. (2021). Physics-informed learning of governing equations from scarce data. Nature Communications, 12(1):6136.
Cohen, R., Havlin, S., and Ben-Avraham, D. (2003). Efficient immunization strategies for computer networks and populations. Physical Review Letters, 91(24):247901.
34

Csáji, B. C. et al. (2001). Approximation with artificial neural networks. Faculty of Sciences, Etvs Lornd University, Hungary, 24(48):7.
Dasaratha, K. (2023). Virus dynamics with behavioral responses. Journal of Economic Theory, 214:105739.
Din, A., Khan, A., and Baleanu, D. (2020). Stationary distribution and extinction of stochastic coronavirus (covid-19) epidemic model. Chaos, Solitons & Fractals, 139:110036.
Edwards, B., Biddle, N., Gray, M., and Sollis, K. (2021). Covid-19 vaccine hesitancy and resistance: Correlates in a nationally representative longitudinal survey of the australian population. PloS one, 16(3):e0248892.
Effati, S. and Pakdaman, M. (2013). Optimal control problem via neural networks. Neural Computing and Applications, 23:2093--2100.
Garibaldi, P., Moen, E. R., and Pissarides, C. A. (2024). Static and dynamic inefficiencies in an optimizing model of epidemics. Economic Theory, 77(1):9--48.
Giordano, G., Blanchini, F., Bruno, R., Colaneri, P., Di Filippo, A., Di Matteo, A., and Colaneri, M. (2020). Modelling the covid-19 epidemic and implementation of population-wide interventions in italy. Nature Medicine, 26(6):855-860.
Glover, A., Heathcote, J., Krueger, D., and Ríos-Rull, J.-V. (2023). Health versus wealth: On the distributional effects of controlling a pandemic. Journal of Monetary Economics, 140:34--59.
Gray, A., Greenhalgh, D., Hu, L., Mao, X., and Pan, J. (2011). A stochastic differential equation sis epidemic model. SIAM Journal on Applied Mathematics, 71(3):876--902.
Grenfell, B. T., Pybus, O. G., Gog, J. R., Wood, J. L., Daly, J. M., Mumford, J. A., and Holmes, E. C. (2004). Unifying the epidemiological and evolutionary dynamics of pathogens. Science, 303(5656):327--332.
Gunasekaran, N., Vadivel, R., Zhai, G., and Vinoth, S. (2023). Finite-time stability analysis and control of stochastic sir epidemic model: A study of covid-19. Biomedical Signal Processing and Control, 86:105123.
Han, J. et al. (2016). Deep learning approximation for stochastic control problems. arXiv preprint arXiv:1611.07422.
Han, J., Jentzen, A., and E, W. (2018). Solving high-dimensional partial differential equations using deep learning. Proceedings of the National Academy of Sciences, 115(34):8505--8510.
He, M., Tang, S., and Xiao, Y. (2023). Combining the dynamic model and deep neural networks to identify the intensity of interventions during covid-19 pandemic. PLOS Computational Biology, 19(10):e1011535.
Hecht-Nielsen, R. (1992). Theory of the backpropagation neural network. In Neural Networks for Perception, pages 65--93. Elsevier.
Hethcote, H. W. and Waltman, P. (1973). Optimal vaccination schedules in a deterministic epidemic model. Mathematical Biosciences, 18(3-4):365--381.
Hornik, K., Stinchcombe, M., and White, H. (1989). Multilayer feedforward networks are universal approximators. Neural Networks, 2(5):359--366.
Jackson, J. K., Weiss, M. A., Schwarzenberg, A. B., and Nelson, R. M. (2020). Global economic effects of COVID-19: In brief. Congressional Research Service.
Jackson, P. and Ortego-Marti, V. (2024). Skill loss during unemployment and the scarring effects of the covid-19 pandemic. Labour Economics, 88:102516.
Ji, S., Peng, S., Peng, Y., and Zhang, X. (2020). Three algorithms for solving high-dimensional fully coupled fbsdes through deep learning. IEEE Intelligent Systems, 35(3):71--84.
Ji, S., Peng, S., Peng, Y., and Zhang, X. (2022). Solving stochastic optimal control problem via stochastic maximum principle with deep learning method. Journal of Scientific Computing, 93(1):30.
Jones, C., Philippon, T., and Venkateswaran, V. (2021). Optimal mitigation policies in a pandemic: Social distancing and working from home. The Review of Financial Studies, 34(11):5188--5223.
Kaier, K., Heister, T., Wolff, J., and Wolkewitz, M. (2020). Mechanical ventilation and the daily cost of icu care. BMC Health Services Research, 20:1--5.
Karniadakis, G. E., Kevrekidis, I. G., Lu, L., Perdikaris, P., Wang, S., and Yang, L. (2021). Physics-informed machine learning. Nature Reviews Physics, 3(6):422--440.
Kemper, J. T. (1978). The effects of asymptomatic attacks on the spread of infectious disease: a deterministic model. Bulletin of Mathematical Biology, 40(6):707--718.
Kermack, W. O. and McKendrick, A. G. (1927). A contribution to the mathematical theory of epidemics. Proceedings of the Royal Society of London Series A, 115(772):700--721.
35

Kingma, D. P. (2014). Adam: A method for stochastic optimization. arXiv preprint arXiv:1412.6980.
Knight, F. H. (1921). Risk, uncertainty and profit. Hart, Schaffner and Marx.
La Torre, D., Marsiglio, S., Mendivil, F., and Privileggi, F. (2024). Stochastic disease spreading and containment policies under state-dependent probabilities. Economic Theory, 77(1):127--168.
Lenhart, S. and Workman, J. T. (2007). Optimal Control Applied to Biological Models. Chapman and Hall/CRC.
MacDonald, N. E. et al. (2015). Vaccine hesitancy: Definition, scope and determinants. Vaccine, 33(34):4161--4164.
McAdams, D. (2021). The blossoming of economic epidemiology. Annual Review of Economics, 13(1):539--570.
Meng, X., Li, Z., Zhang, D., and Karniadakis, G. E. (2020). Ppinn: Parareal physics-informed neural network for time-dependent pdes. Computer Methods in Applied Mechanics and Engineering, 370:113250.
Ning, X., Jia, L., Wei, Y., Li, X.-A., and Chen, F. (2023). Epi-dnns: Epidemiological priors informed deep neural networks for modeling covid-19 dynamics. Computers in Biology and Medicine, 158:106693.
Ohsfeldt, R. L., Choong, C. K.-C., Mc Collam, P. L., Abedtash, H., Kelton, K. A., and Burge, R. (2021). Inpatient hospital costs for covid-19 patients in the united states. Advances in Therapy, 38:5557--5595.
Pike, J., Bogich, T., Elwood, S., Finnoff, D. C., and Daszak, P. (2014). Economic optimization of a global strategy to address the pandemic threat. Proceedings of the National Academy of Sciences, 111(52):18519--18523.
Raissi, M. (2024). Forward--backward stochastic neural networks: deep learning of high-dimensional partial differential equations. In Peter Carr Gedenkschrift: Research Advances in Mathematical Finance, pages 637--655. World Scientific.
Raissi, M., Perdikaris, P., and Karniadakis, G. E. (2019). Physics-informed neural networks: A deep learning framework for solving forward and inverse problems involving nonlinear partial differential equations. Journal of Computational Physics, 378:686--707.
Shaier, S., Raissi, M., and Seshaiyer, P. (2021). Data-driven approaches for predicting spread of infectious diseases through dinns: Disease informed neural networks. arXiv preprint arXiv:2110.05445.
Soukhovolsky, V., Kovalev, A., Pitt, A., Shulman, K., Tarasova, O., and Kessel, B. (2021). The cyclicity of coronavirus cases:“waves” and the “weekend effect”. Chaos, Solitons & Fractals, 144:110718.
Tortorice, D., Rappuoli, R., and Bloom, D. E. (2024). The economic case for scaling up health research and development: Lessons from the covid-19 pandemic. Proceedings of the National Academy of Sciences, 121(26):e2321978121.
Uzun, O., Akpolat, T., Varol, A., Turan, S., Bektas, S. G., Cetinkaya, P. D., Dursun, M., Bakan, N., Ketencioglu, B. B., Bayrak, M., et al. (2022). Covid-19: vaccination vs. hospitalization. Infection, pages 1--6.
Wen, Q., Sun, L., Yang, F., Song, X., Gao, J., Wang, X., and Xu, H. (2020). Time series data augmentation for deep learning: A survey. arXiv preprint arXiv:2002.12478.
Yong, J. and Zhou, X. (1999). Stochastic Controls: Hamiltonian Systems and HJB Equations. Springer New York.
Zhai, C., Chen, P., Jin, Z., and Siu, T. K. (2024). Epidemic modelling and actuarial applications for pandemic insurance: a case study of victoria, australia. Annals of Actuarial Science, pages 1--28.
36

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:11.148Z
- **Text Length:** 129559 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 36 of 36
