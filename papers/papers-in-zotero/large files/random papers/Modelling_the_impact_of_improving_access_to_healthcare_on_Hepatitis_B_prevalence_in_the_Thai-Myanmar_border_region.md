# PDF Document: Pham et al. - 2025 - Modelling the impact of improving access to healthcare on Hepatitis B prevalence in the Thai-Myanmar.pdf

**File Path:** Pham et al. - 2025 - Modelling the impact of improving access to healthcare on Hepatitis B prevalence in the Thai-Myanmar.pdf

**Processed Date:** 2026-02-10T18:16:01.830Z

**File Size:** 671.09 KB

**Total Pages:** 18

**Extracted Pages:** 18

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3707

**Title:** Modelling the impact of improving access to healthcare on Hepatitis B prevalence in the Thai-Myanmar border region

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Modelling the impact of improving access to healthcare on Hepatitis B prevalence in the Thai-Myanmar border region
Anh D. Phama, Robert Mossb, Wirichada Pan-ngumc,d, Rose McGreadye,f, Nicholas Gearda
a School of Computing and Information Systems, University of Melbourne, Melbourne, Victoria, Australia b Melbourne School of Population and Global Health, University of Melbourne, Melbourne, Victoria, Australia c Mahidol Oxford Tropical Medicine Research Unit, Faculty of Tropical Medicine, Mahidol University, Ratchawithi Rd, Bangkok, 10400, Thailand d Department of Tropical Hygiene, Faculty of Tropical Medicine, Mahidol University, Ratchawithi Rd, Bangkok, 10400, Thailand e Shoklo Malaria Research-
 Unit, Mahidol-Oxford Tropical Medicine Research Unit, Faculty of Tropical Medicine, Mahidol University, Mae Sot, Thailand f Centre for Tropical Medicine and Global Health, Nuffield Department of Medicine, University of Oxford, Oxford, United Kingdom
Conflict of interest The authors have no conflict of interest.
Financial support This study was carried out as part of AP’s PhD thesis, which is funded by Melbourne Research Scholarship from the University of Melbourne.
Authors’ contributions All author provided input for the conception of the study. AP implemented the model, conducted experiments, analysed the results and wrote the first draft of the manuscript. NG, RM and WP provided regular supervision and input. All authors read the manuscript, contributed to it by making edits and giving feedback, and approved the submission.
1
arXiv:2511.16096v1 [q-bio.OT] 20 Nov 2025

Abstract
Introduction In Thailand, Hepatitis B is still endemic despite a strong program to eliminate the disease. A higher prevalence is reported in the border region and among migrants due to physical, financial and cultural barriers. Policies and programs targeting the border region and migrant communities have been suggested. Models can be used to understand and quantify the impact of these policies, given they can capture the heterogeneity within the population.
Methods In this study, we developed an Agent-based model that captures the differences between the Thai and migrant populations living in this region, notably the higher level of mobility, lower access to healthcare, and the higher prevalence of Hepatitis B among migrants, by modelling the origin of each individual explicitly. We used the model to estimate future trends of Hepatitis B prevalence in Thailand near the border with Myanmar under different scenarios of intervention.
Results Our study shows that although the current intervention level is effective in the Thai population, it is insufficient to reach national elimination targets due to high prevalence in migrants. Improving access to healthcare for migrants and the border region could potentially help to reach elimination targets, and we quantified the level of improvement needed to achieve elimination.
Conclusion Although there already exist policies to make healthcare more accessible to migrants and the border regions, they are still not yet effective due to financial and cultural barriers. Bringing down those barriers could reduce Hepatitis B prevalence in those communities and regions and contribute to reaching elimination targets in a reasonable timeline.
Keywords agent-based modelling – infectious diseases – demographic heterogeneity – Hepatitis B – elimination - simulation
1 Introduction
Hepatitis B is the infection of the liver by the hepatitis B virus. Acute Hepatitis B can cause symptoms such as jaundice, vomiting and abdomen pain, while the chronic form often leads to more serious outcomes such as cirrhosis and cancer. Infants and children under 5 years old have a much higher risk of developing a Chronic infection. Hepatitis B is responsible for significant disease burden and death globally [1]. WHO aims to eliminate Hepatitis B by 2030, with the following elimination targets:-
 1) reducing new Hepatitis B cases by at least 90% compared to 2016; 2) reducing Hepatitis B mortality by at leat 65%; and 3) reducing Hepatitis B prevalence in children under 5 years old to less than 0.1%. In Thailand where Hepatitis B is endemic [2], current intervention methods include vaccination, prevention of mother to child transmission (by antiviral treatment and birth dose of the vaccine), and screening the general population and treating those diagnosed with the disease. Thailand started-
 the universal Hepatitis B vaccination program in the period from 1984 to 1992, immunoglobulin and antiviral treatment in 2018 and screening program in 2023. In 2022, Thailand announced the National Strategies to Eliminate Viral Hepatitis, which align its national targets with global goals set by the WHO. Despite a strong program to reduce Hepatitis B, a higher prevalence is reported in the Northwestern part of the country due to several reasons. One reason is the incoming flow of migrants and ref-
ugees from Myanmar and other countries, where Hepatitis B is often more prevalent than in Thailand [3, 4] due to low vaccination coverage [5]. Moreover, people living in this region, especially migrants, exhibit high mobility [6, 7] and frequently relocate over long distances to follow work opportunities or to escape conflicts. This makes it difficult to maintain regular heath check-ups
2

such as antenatal visits, where maternal Hepatitis B can be screened and treated. Finally, access to healthcare is varied between different sites and different cultures, limited by physical barriers and behavioural barriers [8]. For example, the practice of home birth, while very common in rural Myanmar and Thailand [9, 10], might lead to missing out on the crucial birth-dose of Hepatitis B vaccine especially when a trained attendant is not present. Moreover, although documented migrants are elig-
ible for healthcare services in Thailand for a fee, the majority of migrants are undocumented and thus have little to no access to healthcare [11, 12]. These factors result in a high prevalence and significant disease burden in this region, and creates pockets of disease that remains largely unaffected by intervention programs and poses a challenge to achieving elimination. [13, 14]. Focusing intervention more on those regions and ethnicities might significantly reduce disease prevalence and burde-
n [15]. In practice, this might translate to investing in more clinics and personnel in the border region, and adjusting government policy to further support and include migrants in healthcare budget. Conversely, recent funding cuts from host countries of the United Nations threaten to heavily disrupt humanitarian aid worldwide [16], including healthcare for refugees and migrants living in Thailand-Myanmar border [17]. However, the impact of such changes, whether positive or negative, is difficult-
 to measure due to the difficulty in monitoring health and vaccination status of an unstable population. Additionally, due to the main transmission route being vertical from mother to child, a long time horizon is required to observe the results of any changes. Models can help close this gap by providing rough estimates on the long-term outcome of different scenarios. These estimates can be then used to inform policy and optimise intervention strategies. There have been several modelling studies a-
bout Hepatitis B. In a study done in 2016 [18], the authors estimate future status of Hepatitis B worldwide under the current level of interventions as well as scenarios where interventions will be ramped up. The model incorporated the disease progression of Hepatitis B and all routes of transmission as well as demographic and economic data about each country, and suggested that the disease can only be eliminated in more than half of the world within reasonable time frame if interventions are ramp-
ed up significantly. Specifically, the requirements include bringing the coverage of infant vaccination, birth-dose vaccination and peripartum antiviral treatment to 90%, 80% and 80% respectively, as well as a population-wide test and treatment rate of 80%. Similar studies targetting specific countries have also made similar suggestions [19, 20]. In the context of of Thailand, one study investigated the impact of the new screening and treating campaign by the government launched in 2023 [21]. Most-
 previous studies used mathematical models involving one homogeneous population and did not represent the heterogeneity between different locations and ethnicities within the same country. Meanwhile, as mentioned above, the population in Northwestern Thailand represents a unique challenge, with high immigration and mobility rates [6, 7] as well as heterogeneous healthcare access [8, 15]. To capture the unique dynamics of the population, agent-based models might be more suited due to their innate a-
bility to represent heterogeneity. According to a recent review, there are very few agent-based models of Hepatitis B, and among which vertical transmission is often not represented [22]. The most relevant study is perhaps [23], in which a model was used to investigate the feasibility of eliminating Hepatitis B in Ontario, Canada. Although the model includes several relevant processes such as immigration and vertical transmission, the population was assumed to be relatively stable – once an immigr-
ant arrives, they are assumed to stay there – and access to healthcare was assumed to be homogenous. Although these assumptions might be relevant in Canada, they do not apply to Northwestern Thailand. Heterogeneity in healthcare access has been shown to affect the outcome of outbreaks and the endemic level of a disease [24]. Similarly, despite not often explicitly represented in models of disease transmission in dynamic populations [25], internal migration (such as between urban and
3

rural regions in the same country) can strongly influence how a disease spreads. For example, it was shown with mathematical models that if movement from and to an infected subpopulation is possible, then the disease will always remain endemic and reach an equilibrium point [26, 27]. In this study, we developed a model that captures special characteristics of the population, the disease Hepatitis B and the intervention methods implemented in Thailand. This model was calibrated to match the popula-
tion as well as the prevalence of Hepatitis B in Thailand at the present, and afterwards used to estimate future trends of Hepatitis B prevalence under different scenarios, specifically answering the following questions: How likely is it for Thailand to achieve a Hepatitis B prevalence of 0.1% or less in children less than 5 years old with 1) the current level of intervention? 2) changes to access to healthcare for migrants and border region? 3) changes to mobility, treatment and fertility rates? -
The results show that current intervention level is not sufficient to reach elimination targets if migrants are also taken into account and suggest that health policy in Thailand should do more to reach migrants and rural regions. We also briefly report and discuss the complexity of the model and what it allows us to do.
2 Methods
2.1 The model
The model needs to represent the different routes of transmission of Hepatitis B, as well as the interventions currently employed and considered in Thailand. It must also capture the unstable and mobile population in border regions, where individuals move around frequently and over long distances. Finally, it needs to represent the difference between regions and ethnicity – for example in remote vs urban, migrants vs Thai – in order to compare between strategies with different focuses. The model c-
onsists of individuals, structured in households and sites, as well as disease progression and transmission. The processes related to population and disease are simulated in discrete timesteps, with each timestep equivalent to one week in real-time.
2.1.1 Population model
The population consists of individuals, grouped into households and sites (Figure 1C). Individuals are characterised by their age, sex and origin (i.e. ethnicity). Individuals age at each timestep, potentially give births and die. Deaths are determined by age- and gender-specific death rates, while births are generated according to the growth rate of the population. In addition to births, new individuals are also added to the model in the form of immigration. Households form and dissolve at each t-
imestep following events such as marriages, divorces, moving out and deaths. Marriages, divorces and moving out events happen with pre-determined probabilities. People in the initial population are assigned a Thai origin, while those who enter through immigration are assigned a Migrant origin. Children are assigned the same origin as their parents. If a child has mixed parents, their origin will be randomly assigned to that of one parent. Death rates and birth rates depend on the origin of an indi-
vidual. The first generation of migrants – those who enter the country through immigration – use Myanmar’s growth and death rates instead due to the majority of migrants in this area coming from Myanmar [28]. Individuals born in Thailand are subjected to Thailand’s growth rates and death rates – including people with migrant origin. Each household belongs to a site. Sites represent physical areas (such as villages, cities or regions) with a particular level of access to healthcare. We assume that -
people only interact within their site. At each timestep, households have a probability to move to a different site, modelling the process of relocation. Movement probabilities between different sites are determined by input parameters
4

AB C
Figure 1: The structure of the population model. 1A: the modelled region – Northwestern border of Thailand. 1B: three sites represented in the model, with arrows showing relocation between them. 1C: individuals belong to households, which in turn belong to sites. TODO add some generalisation in discussion about applying it to other contexts
and also modified by origin – migrants are assumed to be less stable and thus relocate more often. Other than movement, there are no other interactions between Sites - for example, individuals do not marry individuals from another site. The included sites constitute a simplified representation of Northwestern Thailand. They include a small city close to the border (such as Mae Sot), where vaccination and treatment for Hepatitis B are accessible; the surrounding border region (such as Tak province)-
 where healthcare is much less available; and a larger city further away with accessible healthcare and higher density of Thai nationals (such as Chiang Mai or Bangkok). Migrants come from other countries, mainly Myanmar, to the border city and the surrounding region and eventually to the large city (Figure 1B).
2.1.2 Disease model
Birth
Susceptible Acute Chronic Death
Vaccinated Recovered Treated
α
γ
β
γ′ δ η
ε ε′ ζ
Figure 2: Hepatitis B disease progression from birth.
Figure 2 shows the overall progression of the Hepatitis B in our model. The main route of transmission is vertical, from mother to child at birth (γ). If not infected at birth, individuals enter Susceptible state (β). While an individual is Susceptible, contacts with infected household members and infected people in the same site can lead to an Acute infection (γ′). Acute infections can either
5

Recover (ε) or lead to a Chronic infection (δ) – Individuals with chronic infections can sometimes Recover (ε′), albeit at a very low rate; undergo Treatment (ζ); or die from the disease (η).
Horizontal transmission The probability of a person being infected (γ′) horizontally at each time step is given by:
γ′ = 1 − e−foiisH (1)
where f oiisH is the force of infection on an individual in age class i, belonging to a household H [29], at site s. The force of infection, foi, is made up of components of community and household transmission:
f oiisH = qh × IH
(NH − 1)
| {z }
Household Transmission
+ qc ×
X
ηij
Ij,s
Nj,s
| {z }
Community Transmission
(2)
where:
• qh = Household transmission coefficient
• qc = Community transmission coefficient
• IH = The number of infected individuals in the household
• NH = The number of individuals in the household
• ηij = Number of daily community contacts between age groups i and j
• Ij,s = The number of infected individuals in age group j at site s
• Nj,s = The number of individuals in the age group j at site s
Intervention Interventions include vaccination, prevention of mother-to-child transmission (PMTCT) and screening & treatment. We assume that children are either Vaccinated (α) or not. PMTCT significantly reduces the chance of transmitting the disease from an Acutely or Chronically infected mother to her newborn. Finally, a certain percentage of Chronically infected individuals are screened and Treated at each timestep (ζ). Access to healthcare varies between sites and between different ethnicities-
. Both the origin and the site of an individual affect the final probability of getting vaccinated or treated (Eq. 3).
probT (i) = coverageT × origin access(i) × site access(i) (3)
At birth, a child of an uninfected mother can become Vaccinated with the probability determined by Vaccination coverage, or otherwise Susceptible. If the mother is infected with Hepatitis B, the child can also become Infected. In that case, the probability of the child becoming Infected is given by:
γ = (1 − probP MT CT (i)) × probMT CT (4)
where:
• probP MT CT (i) = probability of receiving effective PMTCT intervention, given in Eq. 3
• probMT CT = probability of an Infected mother transmitting to her child without intervention (0.95 and 0.7 for Chronically and Acutely infected mothers, respectively)
6

2.1.3 Data
Various sources of data are used to parameterise the model. For population model, we used publicly available data such as population growth rate, immigration rate, and age-specific death rates from Thailand and Myanmar [30, 31, 32]. The specific movement rates between sites are set so that the border city and border region have an even mix of Thai nationals and migrants (approximately 1:1 ratio) while mainly Thai nationals make up the population of the large city (Thai:migrant ratio of approximate-
ly 4:1) – these ratios are derived from personal communication with stakeholders working in the area. In addition, the population is roughly distributed in 1:1:2 ratio for the border city, border region and large city respectively, which roughly resembles the urban:rural population ratio of Thailand (around 55% of Thai population live in urban areas [33]) and the size difference between Mae Sot and Chiang Mai. Disease parameters such as vertical transmission rate, probability of developing chronic-
 infection and probability of recovering come from epidemiological studies as well as previous modelling studies in Hepatitis B [34, 35, 23]. Some parameters cannot be found in literature but can be roughly estimates using a relevant statistic. Marriage rate is estimated using percentage of people who are never married in several age-groups [36], while divorce rate is estimated using marriage success rate. Specific parameters and data sources can be found in Table S1 and Table S2.
2.2 Experiments
2.2.1 Calibration
Initially, the population is random generated with some existing data, such as age and household size distribution. The population model is then simulated for 100 years. The purpose is to remove any artifacts from the initial generation so that the synthetic population is more realistic and representative of a real population – 100 years are adequate for the initial randomly generated population to be completely replaced by a populated created by the dynamic processes in the model. Afterwards, a n-
umber of infections are seeded into the population, and the combined population and disease model continued to run for 60 years. As before, the purpose is to allow the disease to spread and realistically distributed among the population and to reach a state of equilibrium. After the total burn-in period of 160 years described above, we start the three intervention methods (vaccination, PMTCT and treatment). This starting point correlates with the year 1984. The model is then run for 40 years to re-
ach the present time. For parameters which we cannot find direct values in the literature or relevant statistics to estimate indirectly, we run the model with different values to find one that best fits real data. For the population model, annual moving out probability is not available. We use Thailand’s household size distribution from The Household Socio-Economic Survey 2024 to calibrate those parameters. Specifically, we sampled 20 values uniformly distributed in the range [0%, 1%] and choose t-
he value that produces the lowest Mean Squared Error against real data. In terms of disease transmission, unknown parameters include horizontal transmission rate and treatment coverage. We use the historical prevalence as well as age-specific prevalence of Hepatitis B in Thailand to calibrate them. Specifically, we sample horizontal transmission coefficient in the range of [10−6, 10−4] and choose the value that, after epidemic burn-in, produces the best fit to prevalence reported in 1984 (around 1-
0%). Afterwards, we sample annual treatment probability in the range of [1%, 10%] and choose the value that produces the best fit to prevalence trajectory from 1984 to 2024 as well as age-specific prevalence reported by some studies [2, 37, 38].
7

2.2.2 Likelihood of reaching elimination target with current intervention level
In this experiment, we investigate the likelihood of reaching a prevalence of 0.1% or less in children less than 5 years old under the current level of intervention. Specifically, we assume that access to healthcare will remain at the same level, meaning migrants only have 60% access to vaccination and treatment compared to a Thai person, and people living in border region only have 50% access compared to those living in the city or village. We run the model for 20 years from now and record preval-
ence in children under 5 years old over that period. We run 50 simulations in total with different random seeds and aggregate the results.
2.2.3 Impact of changes to healthcare access
In the first experiment, we quantify the impact of improving access to healthcare. Firstly, all migrants have 90% access to healthcare compared to Thai nationals instead of only 60% (in base scenario). Secondly, healthcare access in the border region is improved to 75% that of the city and border village instead of 50% (in base scenario). In the second experiment, we quantify the impact of reducing access to healthcare in a border city. Specifically, people living in the border city have the same -
level of access compared to the surrounding border region – 50% that of the large city. In each Scenario, we run the model for 20 years from now and record prevalence in children under 5 years old over that period. We run 50 simulations in total with different random seeds and aggregate the results. In addition to comparing to the elimination target of 0.1%, we also compare the outcome to the baseline scenario to quantify the impact more concretely.
Table 1: Experiment parameters
Scenario Large city
access (%)
Border city access (%)
Border region access (%)
Migrant access (%)
Treatment rate (%/year)
Mobility level (%)
Population growth
Base 100 100 50 60 7.5 100 same as
2024
Improved access 100 100 75 90 7.5 100 same as
2024
Reduced access 100 50 50 60 7.5 100 same as
2024
Higher treatment
rate 100 100 50 60 10.5 100 same as
2024
Reduced mobility 100 100 50 60 7.5 50 same as
2024
Falling fertility 100 100 50 60 7.5 100
projected by UN World Prospects
2.2.4 Sensitivity analyses: future treatment coverage, mobility and fertility
In this experiment we explore changes to some model assumptions, such as treatment coverage, mobility in border region and fertility, and their impact on the outcome of the model. There are three scenarios in total: 1) treatment rate will be 40% higher, 2) mobility will decrease by 50%,
8

and 3) population (both Thai and migrant populations) will follow projected growth rate instead of the current growth rate. As before, in each scenario, we run the model for 20 years from now and record prevalence in children under 5 years old over that period. We run 50 simulations in total with different random seeds and aggregate the results.
3 Results
3.1 Calibration
We found that a annual rate of leaving home of 0.025% produces the best fit in terms of household size distribution to real data. Although there is still a small bias in our model towards smaller households, generally we are able to match the important characteristics of Thailand population quite well in age structure and household size distribution (Figure S1).
AB
Figure 3: The synthetic prevalence trends match historical data. In 3A, red dots represent Hepatitis B prevalence reported in seroprevalence studies, and the error bars represent the 90% Confidence Interval of each data point. In 3B, red bars represent age-specific prevalence reported in several studies, and grey bars represent the prevalence observed in the model.
In terms of disease, we found that an annual treatment rate of 7.5% would produce the best fit to data. Figure 3 shows that the prevalence trajectory in our model somewhat matches historical prevalence in Thailand. The notable level of discrepancy in historical prevalence reported by previous studies may have been caused by differences in the cohorts and methodology. For example, the 1985 study by Brown et al [39] was conducted in leprosy resettlement villages, which were suggested to have a sligh-
tly higher Hepatitis B prevalence compared to the general population, while the 2006 study by Chongsrisawat et al [40] was conducted with a younger cohort compared to Thailand’s real age distribution. In addition to prevalence trajectory, the model reproduces similar trends in age-specific prevalence to those reported in Thailand [2, 37, 38].
3.2 Likelihood of reaching elimination target with current intervention level
According to our model, the current level of intervention is unlikely to be sufficient to achieve the elimination target within the next 20 years. Specifically, if only Thai children 0-5 years old are
9

considered, prevalence will reach 0.1% in 2035; however, prevalence among both migrant and Thai children will only drop to 0.33% in 2045 (Figure 5). In terms of sites, even the large city with access to healthcare and majority Thai population would only reach the target from 2040.
3.3 Impact of changes to healthcare access
Figure 4: Projected prevalence of Hepatitis B in the populations, 20 years from now, of different sites and different origins.
50 simulations were run for each scenario. The central lines represent the mean prevalence in those 50 simulations, while the shaded regions represent the range of prevalence within 90% Confidence Interval.
Improving access for migrants and border region (green lines in Figure 4 and Figure 5) shows some impact when compared to the base scenario. Particularly, prevalence in the general population after 20 years falls to 0.64% from 1% in the base scenario. However, the impact is much more significant when looking at prevalence among children 0-5 years old. Specifically, the elimination target can be achieved in the whole population, with Hepatitis B prevalence among 0-5 year-olds in the large city reac-
hing the 0.1% mark around 2045. Even in the border city and region (which have a high number of incoming migrants), this figure is reduced to very close to elimination target (0.14%) compared to the baseline scenario. Among Thai children under 5 years old, prevalence will drop to 0.1% in 2030 and then further to almost 0% in 2040. Unsurprisingly, reducing healthcare access has almost the opposite effect, making reaching elimination target extremely unlikely. By the end of the period, prevalence am-
ong children in all sites and of both origins will be around 0.52%, almost twice that of the base scenario.
10

Figure 5: Projected prevalence of Hepatitis B in children 0-5 years old, 20 years from now, of different sites and different origins.
50 simulations were run for each scenario. The central lines represent the mean prevalence in those 50 simulations, while the shaded regions represent the range of prevalence within 90% Confidence Interval.
11

3.4 Impact of potential changes in population, mobility and treatment rate
Figure 6 show that outcomes of the model, in terms of prevalence among children 0-5 years old, do not vary greatly when assuming a decreasing natural growth rate in the near future. Similarly, increasing treatment rate by 40% and reducing mobility by 50% both do not have a significant impact on children prevalence.
Figure 6: Prevalence of Hepatitis B in children 0-5 years old in simulated population, 20 years from now, under different assumptions in population growth, mobility and treatment.
50 simulations were run for each scenario. The central lines represent the mean prevalence in those 50 simulations, while the shaded regions represent the range of prevalence within 90% Confidence Interval.
4 Discussion
This study explored the impact of public health policies that improve healthcare access for migrants and remote regions in Northwestern Thailand, using an agent-based model adapted to the unique characteristics of this region. Our results show that HBV prevalence among Thai infant and children less than 5 years old can be reduced to to less than 0.1% by 2035 under the current level of intervention. However, if migrants are taken into account, under the assumption that the majority of them will set-
tle in Thailand after some time, current level of intervention will not be enough to reach that target even by 2045. By focusing on the healthcare access of this group as well as the border regions, the situation could be improved significantly. Specifically, if migrants can assess healthcare at a level close to
12

that of Thai nationals and border regions have more access to healthcare, then the target children prevalence can be reached. In that scenario, even if there remain sites with higher prevalence than the target, the gap is still narrowed significantly and elimination is much more likely. We also explored one potential scenario where access to healthcare is reduced in the border city, potentially due to reduced funding. Our results show that it leads to much higher prevalence in children less than -
5 years old, in some sites twice as high compared to the baseline scenario. This can potentially undo a lot of the progress made in recent years. Our sensitivity analysis shows that some potential future changes, such as in treatment rate, mobility and population growth, have little impact on prevalence among children 0-5 years old. Our results are consistent with many modelling studies of Hepatitis B [21, 18] and confirm that increasing access to health interventions such as vaccine, PMTCT and sc-
reening followed by treatment would be required to achieve some of the target elimination goals. Compare to previous studies, we model origin explicitly and assume that people of migrant origin have less access to healthcare compared to those of Thai origin. This leads to a gap in the Hepatitis B prevalence between Thai nationals and migrants, as well as higher prevalence and a longer timeline to reach elimination targets. Due to continued migration from neighbouring countries and Thailand economy-
’s reliance on migrants [28, 41], we believe our model provides estimates that more closely match reality compared to studies that mainly focus on Thai people. Our findings have several implications on public health. Firstly, prevalence varies greatly between urban and remote sites, and Thai and people of other origins. As such, depending on the selection method, studies can give biased results regarding Hepatitis B status. In terms of public health, although there are already some policies and pr-
ograms to make healthcare more accessible to migrants and the border regions, they are still not yet effective due to financial and cultural barriers [11]. Bringing down those barriers could reduce Hepatitis B prevalence in those communities and regions and contribute to reaching elimination targets in a reasonable timeline. As mentioned in Section 1, in practice this can mean reducing financial costs of healthcare services [42], adopting and promoting cost-effective treatment [43], or training ho-
me birth attendants and midwives to make sure vaccines are consistently administered (similar to Safe Birth for All [10]). Conversely, significant funding cuts [16], especially in border cities where migrants – the most vulnerable group – account for a large portion of the population, are greatly detrimental to the progress towards elimination of Hepatitis B. Finally, we predict that the recently launched screening and treating campaign will not have significant impact on children prevalence in th-
e near future, and so will changes to population growth and mobility. In this study, modelling origin and site explicitly allows us to quantify the impact of public health policies that target migrants and remote regions, as well as future changes to mobility. Previously, this level of complexity was not often explored in agent-based modelling of Hepatitis B. Moreover, by calibrating the model to closely match previous and current Hepatitis B prevalence in Thailand, we ensure that the model produc-
es estimates that are reasonably reliable. Finally, modelling Hepatitis B with an Agent-based model allows us to incorporate age-dependent chronic risk as well as vertical transmission rates directly from clinical studies. There are several limitations to our study. Firstly, we made several assumptions that might influence the outcome. We assume that vaccination is fully effective – if a child is vaccinated, they remains vaccinated for the rest of their life – and that all people not vaccinated at-
 birth do not attend catch-up vaccination. In reality, protection from vaccines often reduce with time, and people who work in certain fields might get a booster or catch-up vaccination. However, we believe that these assumptions have little impact on prevalence of the chronic state, firstly because they potentially cancel out each other and especially because adults have a very low chance to develop chronic Hepatitis B. We also assume that some demographic parameters, such as death rate or marria-
ge
13

rate, would remain the same in the future. This might not be the case and might change the outlook of the disease. In addition to those assumptions, some modelling decisions are also important. We model movement between sites as a random process with certain rates, while in reality this is more complex and involves individuals making decisions based on factors such as work opportunity, healthcare access and military conflicts. We do not model sexual transmission explicitly, instead we model house-
hold transmission and a small degree of community transmission as a proxy. Whether this provides a good approximation is to be investigated.
5 Acknowledgements
References
[1] World Health Organization. Hepatitis B. url: https://www.who.int/en/news-room/factsheets/detail/hepatitis-b.
[2] Charline Leroi et al. “Prevalence of chronic hepatitis B virus infection in Thailand: a systematic review and meta-analysis”. In: International Journal of Infectious Diseases 51 (2016), pp. 3643.
[3] Sayamon Hongjaisee et al. “Prevalence and factors associated with hepatitis B and D virus infections among migrant sex workers in Chiangmai, Thailand: A cross-sectional study in 2019”. In: International Journal of Infectious Diseases 100 (2020), pp. 247–254.
[4] Caroline Lee, Theophilus I Emeto, and Nick Walsh. “Prevalence of hepatitis B virus amongst refugees, asylum seekers and internally displaced persons in low-and middle-income countries: A systematic review”. In: Journal of Viral Hepatitis 30.1 (2023), pp. 4–18.
[5] August CT Anderson et al. “Coverage, inequity and predictors of hepatitis B birth vaccination in Myanmar from 2011–2016: results from a national survey”. In: BMC health services research 22.1 (2022), p. 516.
[6] Jonathan Rigg and Albert Salamanca. “Connecting lives, living, and location: Mobility and spatial signatures in Northeast Thailand, 1982–2009”. In: Critical Asian Studies 43.4 (2011), pp. 551–575.
[7] Natthani Meemon et al. “Transnational mobility and utilization of health services in northern Thailand: Implications and challenges for border public health facilities”. In: Journal of Primary Care & Community Health 12 (2021), p. 21501327211053740.
[8] Suprawee Khongthanachayopit and Wongsa Laohasiriwong. “Accessibility to health services among migrant workers in the Northeast of Thailand”. In: F1000Research 6 (2017).
[9] Kyu Kyu Than et al. “The potential of task shifting selected maternal interventions to auxiliary midwives in Myanmar: a mixed-method study”. In: BMC Public Health 18.1 (2018), p. 99.
[10] United Nations Population Fund. Safe Birth for All - Thailand project report. url: https: //thailand.unfpa.org/en/Safe-Birth-for-All-TH-report.
[11] Andrea K ̈onig et al. “A systematic scoping review on migrant health coverage in Thailand”. In: Tropical Medicine and Infectious Disease 7.8 (2022), p. 166.
[12] International Organization for Migration. Overview of Myanmar Nationals in Thailand. url: https : / / thailand . iom . int / sites / g / files / tmzbdl1371 / files / documents / 2025 03/myanmar_migrants_thailand_jan25_final-1.pdf.
14

[13] Mary Ellen Gilder et al. “Who is protected? Determinants of hepatitis B infant vaccination completion among a prospective cohort of migrant workers in Thailand during the COVID-19 pandemic”. In: International Journal for Equity in Health 21.1 (2022), p. 190.
[14] Nawarat Posuwan et al. “Towards the elimination of viral hepatitis in Thailand by the year 2030”. In: Journal of Virus Eradication 6.3 (2020), p. 100003.
[15] Tristan Banks et al. “High hepatitis B seroprevalence and risk factors for infection in pregnant women on the Thailand-Myanmar border”. In: Journal of infection in developing countries 04 (2016).
[16] UNHCR. Funding cuts threaten the health of nearly 13 million displaced people. url: https: / / www . unhcr . org / news / briefing - notes / unhcr - funding - cuts - threaten - health nearly-13-million-displaced-people.
[17] Aimee Keay. Uncertainty for Myanmar refugees in Thailand. url: https://actforpeace. org.au/uncertainty-for-myanmar-refugees-in-thailand/.
[18] Shevanthi Nayagam et al. “Requirements for global elimination of hepatitis B: a modelling study”. In: The Lancet Infectious Diseases 16.12 (2016), pp. 1399–1408.
[19] Lan Zou, Weinian Zhang, and Shigui Ruan. “Modeling the transmission dynamics and control of hepatitis B virus in China”. In: Journal of theoretical biology 262.2 (2010), pp. 330–338.
[20] Karen McCulloch et al. “Modeling progress toward elimination of hepatitis B in Australia”. In: Hepatology 71.4 (2020), pp. 1170–1181.
[21] Myka Sarajan et al. “WORKING TOWARDS HEPATITIS B ELIMINATION BY 2030: MODELING APPROACH TO OPTIMIZE STRATEGIES TO REDUCE MOTHER-TO-CHILD TRANSMISSION”. In: JITMM Proceedings 11 (2023), pp. 28–38.
[22] Seun Ale, Elizabeth Hunter, and John D Kelleher. “Agent based modelling of blood borne viruses: a scoping review”. In: BMC infectious diseases 24.1 (2024), p. 1411.
[23] Feng Tian et al. “Feasibility of hepatitis B elimination in high-income countries with ongoing immigration”. In: Journal of hepatology 77.4 (2022), pp. 947–956.
[24] Oscar Patterson-Lomba et al. “Modeling the role of healthcare access inequalities in epidemic outcomes”. In: Mathematical Biosciences & Engineering 13.5 (2016), pp. 1011–1041.
[25] Signe Møgelmose, Karel Neels, and Niel Hens. “Incorporating human dynamic populations in models of infectious disease transmission: a systematic review”. In: BMC Infectious Diseases 22.1 (2022), p. 862.
[26] Hongbin Guo and Michael Y Li. “Impacts of migration and immigration on disease transmission dynamics in heterogeneous populations”. In: Discrete Contin. Dyn. Syst. Ser. B 17.7 (2012), pp. 2413–2430.
[27] Miller Cer ́on G ́omez, Eduardo Ibarguen Mondrag ́on, and Carmen A Ramı ́rez Bernate. “Assessing the effect of migration and immigration rates on the transmission dynamics of infectious diseases”. In: Journal of Applied Mathematics and Computing 69.5 (2023), pp. 3819–3834.
[28] United Nations. 2024 Thailand Migration Report. url: https://thailand.iom.int/resources/ thailand-migration-report-2024.
[29] Nicholas Geard et al. “Synthetic population dynamics: A model of household demography”. In: Journal of Artificial Societies and Social Simulation 16.1 (2013), p. 8.
[30] Myanmar Central Statistical Organisation. Vital statistics. url: https://www.csostat.gov. mm/Content/PublicationAndRelease/2023/3.htm.
15

[31] World Health Organisation. Thailand Life Table. url: https://apps.who.int/gho/data/ view.searo.61640?lang=en.
[32] United Nations. 2024 World Population Prospects. url: https://population.un.org/wpp/.
[33] UN Desa et al. “World urbanization prospects: the 2018 revision”. In: Population Division, department of economic and social affairs, United Nations Secretariat (2018).
[34] Jacek Juszczyk. “Clinical course and consequences of hepatitis B infection”. In: Vaccine 18 (2000), S23–S25.
[35] Wan-Hsin Wen et al. “Mother-to-infant transmission of hepatitis B virus infection: significance of maternal viral load and strategies for intervention”. In: Journal of hepatology 59.1 (2013), pp. 24–30.
[36] Lindy Williams, Philip Guest, and Anchalee Varangrat. “Early 40s and still unmarried: A continuing trend in Thailand”. In: International Journal of Comparative Sociology 47.2 (2006), pp. 83–116.
[37] Nawarat Posuwan et al. “The success of a universal hepatitis B immunization program as part of Thailand’s EPI after 22 years’ implementation”. In: PloS one 11.3 (2016), e0150499.
[38] Pornjarim Nilyanimit et al. “Significant reduction in Hepatitis B virus infections following 32 years of universal Hepatitis B vaccination as part of EPI, Thailand”. In: Scientific Reports 15.1 (2025), p. 1167.
[39] AE Brown et al. “Hepatitis B antigen and antibody in patients with leprosy: a study of three resettlement villages in Thailand.” In: Asian Pacific Journal of Allergy and Immunology 7.2 (1989), pp. 89–93.
[40] Voranush Chongsrisawat et al. “Hepatitis B seroprevalence in Thailand: 12 years after hepatitis B vaccine integration into the national expanded programme on immunization”. In: Tropical Medicine & International Health 11.10 (2006), pp. 1496–1502.
[41] United Nations Economic, Social Commission for Asia, the Pacific, et al. Asia-Pacific migration report 2020: Assessing implementation of the global compact for migration. United Nations, 2020.
[42] Piya Hanvoravongchai, Natthawut Iangtanarat, and Nyein Chan Oo. “Assessing Demand, Feasibility, and Development Strategies for EPI Vaccine Management and Financing for Myanmar Migrant Children along Thai Border”. In: 2025 World Congress on Health Economics. IHEA. 2025.
[43] Chawisar Janekrongtham et al. “Cost-effectiveness of tenofovir prophylaxis during pregnancy for the elimination of mother-to-child transmission of the hepatitis B virus: real-world analysis from Thailand”. In: BMJ open 13.7 (2023), e067275.
[44] Ivan Gentile and Guglielmo Borgia. “Vertical transmission of hepatitis B virus: challenges and solutions”. In: International journal of women’s health (2014), pp. 605–611.
[45] Kenneth C Hyams. “Risks of chronicity following acute hepatitis B virus infection: a review”. In: Clinical Infectious Diseases 20.4 (1995), pp. 992–1000.
[46] Luiz Caetano Da Silva et al. “Spontaneous hepatitis B surface antigen clearance in a long-term follow-up study of patients with chronic type B hepatitis. Lack of correlation with hepatitis C and D virus superinfection”. In: Journal of gastroenterology 31 (1996), pp. 696–701.
16

S1 Extra figures and tables
Table S1: Population model parameters
Parameter Description Values &
sources
Population growth rate Annually, both through natural growth and immigration.
UN World population prospects [32]
Immigration rate Annual rate of change in population size due to immigration.
UN World population prospects [32]
Age-specific fertility probabil
ity Probability distribution of age of the mother of a birth
Obtained by fertility rates
Death rates Annual Age- and sex-specific probabilities of death by sex and
year of age.
Thailand life table, WHO [31]
Couple formation parameters Age range that a currently single individual is eligible to form
a couple, and annual probability that this will occur. (18, 60), 9%
Partner age difference (mean, standard deviation)
Parameters governing the age difference between partners dur
ing couple formation. 2, 2
Couple dissolution parameters Age range that a currently coupled individual is eligible dis
solve that couple, and annual probability that this will occur.
(18, 60), 0.5%
Leaving home parameters
Minimum age at which an individual currently living with a parent/guardian will form a new single-person household, and annual probability that this will occur.
18, 0.25%
Figure S1: The synthetic population compared to Thailand population
17

Table S2: Disease model parameters
Parameter Description Values & sources
γ Mother-to-child transmission probability 90% [44]
δ probability of developing a chronic infection from an acute in
fection
varies by age, from 90% (newborns) to 10% (adults) [45]
ε probability of recovering from an acute infection 1 − δ
ε′ annual probability of recovering from a chronic infection 1% [46]
η annual probability of dying from a chronic infection 0.7% [23]
qh, qc Horizontal transmission coefficients qh: 10−4 (assumed), qc:
4.7 ∗ 10−6 (calibrated)
coveragevaccine ideal vaccination coverage (Thai nationals in a large city) 98% (assumed)
coverageP MT CT
ideal antiviral treatment coverage for pregnant women with
Hep B (Thai nationals in a large city) 80% (assumed)
coveragetreatment ideal annual treatment coverage (Thai nationals in a large city) 7.5% (calibrated)
18

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:01.830Z
- **Text Length:** 46407 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 18 of 18
