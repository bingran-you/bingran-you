# PDF Document: Harris and Bani-Yaghoub - 2025 - Leveraging NCBI Genomic Metadata for Epidemiological Insights Example of Enterobacterales.pdf

**File Path:** Harris and Bani-Yaghoub - 2025 - Leveraging NCBI Genomic Metadata for Epidemiological Insights Example of Enterobacterales.pdf

**Processed Date:** 2026-02-10T18:17:40.009Z

**File Size:** 2167.23 KB

**Total Pages:** 19

**Extracted Pages:** 19

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3722

**Title:** Leveraging NCBI Genomic Metadata for Epidemiological Insights: Example of Enterobacterales

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Leveraging NCBI Genomic Metadata for Epidemiological Insights: Example of Enterobacterales
Bryan Harris, Majid Bani-Yaghoub∗
Division of Computing, Analytics & Mathematics, School of Science and Engineering, University of Missouri-Kansas City, 5100 Rockhill Rd., Kansas City, Missouri 64110, USA
Abstract
Numerous studies have utilized NCBI data for genomic analysis, gene annotation, and identifying disease-associated variants, yet NCBI’s epidemiological potential remains underexplored. This study demonstrates how NCBI datasets can be systematically leveraged to extract and interpret infectious disease patterns across spatial and temporal dimensions. Using Enterobacterales as a case study, we analyzed over 477,000 genomic records and metadata, including collection date, location, host species, and -
isolation source. We compared trends of Escherichia coli and Salmonella in NCBI data with CDC’s National Outbreak Reporting System (NORS). While both datasets showed consistent seasonal peaks and foodborne sources, NCBI data revealed broader host species (e.g., wildlife, environmental reservoirs), greater isolate diversity, and }ner spatial-temporal resolution. These insights were enabled by our open-source Python package, EpiNCBI_V1, developed for real-time downloading, }ltering, and cleaning of -
pathogen genomic metadata from NCBI. This work highlights the value of integrating genomic repositories into public health analytics to enhance surveillance, outbreak detection, and cross-species transmission tracking globally.
1 Introduction
The National Outbreak Reporting System (NORS) is a system governed by the Center for Disease Control (CDC) as a modern-day means for tracking and reporting of enteric disease outbreaks. The NORS Dashboard was launched in 2009 as a publicly accessible platform for standardized outbreak reporting by public health departments [5]. NORS collects data on outbreaks driven by transmissions classi}ed as foodborne, waterborne, person-to-person or via contact with animals. Indeterminate/Unknown tranmission -
vector data are also reported to NORS. Reports are submitted on a voluntary basis by local, state, and territorial health agencies, as well as CDC o{cials. [4]
Researchers have used NORS data extensively to understand the epidemiology of dizerent infectious diseases. This includes characterizing the relative contributions of dizerent transmission modes (e.g., person-toperson, foodborne) and etiologies such as norovirus in enteric outbreaks (person-to-person: 62%, foodborne: 24%, norovirus: 59%) [10], estimating transmissibility through reproduction number modeling in norovirus outbreaks (e.g., median R0 of 2.75, with variation by setting and season) [1],-
 and to estimate attribution of various pathogens in outbreaks sourced by various leafy greens as vectors of foodborne illness (e.g., an estimated 19.8% of all Eschericha Coli O157:H7 illnesses are attributed to Romaine lettuce.) [19].
In addition to NORS data, the National Center for Biotechnology Information (NCBI) ozers a wealth of biological datasets. NCBI is a uni}ed collection of multiple genomic databases such as GenBank and RefSeq which provide reference nucleotide and protein sequences. [3, 13]. NCBI was formally established by legislation on 4 November 1998 as a division of the National Library of Medicine (NLM). Unlike NORS, any individual or institution can submit data to NCBI through NCBI’s submission portal. Submis-
sions
∗Corresponding author. Email: baniyaghoubm@umkc.edu
1
arXiv:2511.14826v1 [q-bio.QM] 18 Nov 2025

are processed or rejected in accordance with NLM’s GenBank and SRA Data Processing document [12]. It ozers scientists access to a large and wide variety of publicly available biological data, including genomic sequencing data for many dizerent organisms, including gene and genomic data, as well as viruses. [11]. Similar to NORS, there are many applications of NCBI data in epidemiology. For example, Campylobacter jejuni genomic data sourced from the NCBI Pathogen Detection Database is used to unde-
rstand the distribution of virulence genes in a set of Campylobacter jejuni genomes [14]. NCBI data can also be cross-referenced with other datasources such as the Food Safety and Inspection Service (FSIS) outbreak database to }nd similarities or dizerences in distributions of serovar and isolation source for Salmonella strains [16].
In light of these examples, NORS and NCBI appear to naturally complement each other for epidemiology and infectious disease research. While some articles exist that compare and contrast NCBI data to other outbreak sources [15], to the best of our knowledge, no research article has contrasted NORS and NCBI for epidemiological studies. Part of the issue is the lack of tools that can streamline the process of comparing data from these two sources. The present study aims to }ll this gap. In particular-
, NORS data can be downloaded directly from NORS’s website; however, there is a degree of di{culty involved in obtaining NCBI data in a clean and ready-to-use format. Three main categories of data packages are currently available: genome, gene, and virus. Users can customize the contents of any data package. Genomic data can be obtained by direct download and some curated programs. Direct downloads from NCBI’s website are in the form of zip }les. This enables researchers to download a full dataset-
 of submissions for any choice of pathogen. On the other hand, the NCBI curated programs download the data from the command-line, which allows for experienced programmers to create sophisticated programs to e{ciently download, format, and }lter data tailored to a speci}c pathogen(s) for their research needs. For custom analytics solutions, neither of these options includes a protocol for cleaning the data.
While data submitted to NCBI may be corrected in the instance of clerical errors of a typographical nature, several errors of type have been observed. Although packages such as ShinyR could potentially be used for dizerent outbreak database comparisons [15], there seem to be no Python packages for the purposes of comparing NCBI submission data with NORS data. With the understanding that NCBI and NORS data }t well together, we develop and test a robust automated tool in Python to assist researchers-
 in analyzing patterns in NCBI genomic data submissions. We call the }rst version of this package, EpiNCBI, which sequentially downloads, formats, cleans, and visualizes detailed NCBI metadata such as isolation source and host, submitter, year and month of submission, and serotype. To validate the EpiNCBI-V1 package, we apply it to NCBI data associated with E. Coli and Salmonella and compare the resulting analyses with corresponding NORS data. Hence, the present study demonstrates the capabilities-
 of the developed Python package to uncover trends, seasonality, and patterns present in NCBI data that may be overlooked in NORS data.
The rest of this paper is organized as follows. In Section 2, we provide the methodology used for data collection, Python tool development, and data visualization. Section 3 will illustrate the patterns that are present in the curated data sets obtained from the NCBI and NORS, the databases, when they are compared simultaneously. Section 4 rewinds the discussion of main }ndings and plans for further development of EpiNCBI Python package.
2 Materials and Methods
2.1 Overview
We prepare a data pipeline to illustrate the process involved in this study. The process for obtaining and pre-processing NCBI genomic submission data is illustrated in a six-compartment diagram in Figure 1. The pipeline is executed by an author-designed Python package in collaboration with two tools developed by NCBI. The order of the steps is the process is choosing the data, downloading the data with }ltering, formatting the data with a 2nd }ltering, pivoting the data, cleaning the data, and vi-
sualizing the data alongside NORS outbreak data. We gave the name EpiNCBI_V1 to this Python package to exemplify its
2

use for obtaining NCBI data for epidemiological studies. The ”V1” tag shows this is the }rst assembled version of the code, and the authors plan to expand its functionality in future work.
NCBI Databases
Choose genomic pathogen
Filter the raw data Visualize the data
Pivot the raw data
Accession Name Value Submitter GCA_015325.1 Location Riverbank CDC GCA_015325.1 Sub Date Jan-19 CDC GCA_015325.1 Serotype O157:H7 CDC
GCA_015426.1 Location Farm, cattle FDA
Accession Location Sub Date Serotype Submitter GCA_015325.1 Riverbank Jan-19 O157:H7 CDC
GCA_015426.1
Farm, cattle 02-2019 O26:H11 FDA
GCA_015527.1 Swine pen 2020 O157:H7 FSGIS
Accession
Environment Year Month Serotype Submitter
GCA_015325.1 Water 2019 1 O157:H7 CDC
GCA_015426.1 Farm 2019 2 O26:H11 FDA
GCA_015527.1 Farm 2020 O157:H7 FSGIS
Clean the data
Download and filter the raw assembly data. Filter out sequencing data, set date cutoff
Gene Genome Virus
{accession, “GCA_015325.1”; value,
“{serotype, “O151:H7”....}” ....}
datasets.exe
dataformat.exe
Figure 1: Pipeline for obtaining NCBI genomic data using the developed Python tool “EpiNCBI_V1.
2.2 Python Tool Development
The EpiNCBI_V1 Python Tool is developed as follows. The data analysis pipeline begins with the selection of a genomic pathogen by the user, as shown in compartment one of Figure 1. NCBI databases feature gene, genomic, and virus data [11]. For our study, we will focus only on genomic data, but it can be extended to the other two databases. To begin, EpiNCBI_V1 requests a single NCBI-de}ned taxonomy ID from the user to designate the genomic pathogen they’d like data for. For example, the data used -
in the development of this study used Escherichia Coli and Salmonella taxonomy IDs 562 and 590 respectively. Other taxonomy IDs may be found directly by searching for a speci}c pathogen’s name on the NCBI website.
After the user inputs a valid taxonomy ID, EpiNCBI_V1 calls an executable program named ”Datasets”, developed by NCBI. Datasets facilitates the initial download and }ltering of the NCBI genomic data based on the Taxonomy ID entered by the user and date range speci}ed. Other }lters are available when calling Datasets, including options for the download of genomic sequences along with their assembly metadata. We opted to download only assembly metadata, and }ltered out any sequence data that the met-
adata is describing. We also }lter by submission date, to include only samples submitted to NCBI before 2024 to align our analysis with NORS, which only includes outbreak data up to the end of 2023. The data is then downloaded from NCBI’s servers as a .jsonl }le. [11].
3

Because .jsonl }les contain nested .json lines, they are not compatible with many data analysis programs. To remedy this, EpiNCBI_V1 calls another NCBI-developed program named “Dataformat”. Dataformat is a tool designed to convert the .jsonl format data to either a .tsv }le, or an .xlsx }le for analysis in data spreadsheet programs [11]. Dataformat was also designed with column }lters in mind. The downloaded raw data contains many more columns than were used for this study. EpiNCBI_V1 ultilizes D-
ataformat to only keep four columns; accession, assminfo-biosample-attribute-name, assminfo-biosample-attribute-value, and submitter, and saves the result as a .tsv }le to avoid data truncation that occurs when saved as an .xlsx }le with too many rows. The 3rd panel in Figure 1 illustrates a sample of E. Coli data after the Dataformat tool is applied in our study.
To further optimize analysis, we want to have individual rows in our .tsv }le correspond to exactly one assembly submission, and have all the downloaded metadata for individual assemblies in exactly one row. We did not identify a particular tool curated by NCBI to do this task. EpiNCBI_V1 }lls this gap by pivoting the }ltered raw data with the pivot_table function, so that every }eld in the attribute name column becomes a new column in the formatted data, with values equal to the adjacent attribut-
e value column entry. This leads to the creation of approximately 580 new columns of data, one for each unique entry found in the assminfo-biosample-attribute-name column, of which we only keep eight: Geographic Location, Date of Collection, Strain, Host, Serotype, Isolation Source, and Source Type. A small sample of the data after pivoting is shown in the fourth compartment in Figure 1 .
The last step EpiNCBI_V1 carries out in Figure 1 is cleaning the pivoted data. We observed that the columns representing geographic location, collection date, and isolation source contain entries that ozer insights in multiple areas. For time series analysis, we use a string search function to separate the collection data column into month and year. For location analysis, we use word lookup. For example, an entry in geographic location may read ”river in jackson mississippi” of which we can extrac-
t the state name ”Mississippi” and an environment of contamination ”Water Source”. Some geographic location entries only contained major cities, or state abbreviations. To infer and extract state information, we utilized a lookup table obtained from the GitHub page of Plotly, a popular module with the opensource Python package MatPlotLib commonly used for generating customized data visualization solutions. This lookup table contains 300 of the most populated cities in the US, accompanied by their -
state location. If a geographic location entry contains a city on this list, EpiNCBI_V1 replaces the entry with the state name. Other lookup tables used for analysis by EpiNCBI_V1 can be found on the author’s GitHub page [8].
2.3 New Data Acquisition System
With Figure 1 established, EpiNCBI_V1 provides a solution to accessing formatted, clean, and ready-to-use genomic assembly data in the NCBI databases with minimal ezort. The source code for EpiNCBI_V1 is assembled into a Python }le, EpiNCBI_V1.py, available at the author’s GitHub page [8], with additional documentation found in the ReadMe.txt }le in the root of the project folder. The ReadMe }le contains details for installing Python, running EpiNCBI_V1.py locally, and a brief overview of the majo-
r functions inside EpiNCBI_V1.py that carry out the actions of the Figure 1.
2.4 NCBI-NORS Comparative Analysis
EPiNCBI_V1 concludes with saving the data in .csv format. The .csv }les are then utilized by other software packages to perform data visualization or data-driven modeling. A few examples of data visualization are heat maps showing disease incidence across regions, time-series plots of infection dynamics, network diagrams of host–pathogen interactions, and bar/box plots comparing intervention scenarios. Examples of data-driven modeling based on the NCBI and NORS datasets are predictive models of ou-
tbreak dynamics using machine learning classi}ers, regression models identifying key environmental or demographic risk factors, time-series forecasting of incidence trends, and compartmental or agent-based simulations calibrated
4

with reported outbreak data [9, 2, 6, 7, 17].
In the present work, we compare NORS and NCBI datasets for the pathogens E. Coli and Salmonella using a combination of time-series, barcharts, and heatmaps to uncover new insights, while noting that EpiNCBI_V1 is compatible with other pathogens as well not used in this study. The primary reason for choosing these two pathogens is that they are members of an important gram-negative family of pathogens responsible for frequent outbreaks and food poisoning in the US, with several cases of hospitaliza-
tions and development of antimicrobial resistance.
3 Results
3.1 Overview
The EpiNCBI_V1 package was built using E. Coli and Salmonella as references, but is able to be applied other other organisms in the NCBI genome databases as well, for example, EpiNCBI_1 has been veri}ed to follow the data pipeline in Figure 1 for Campylobacter jejuni (Taxonomy ID = 197) and for Listeria (Taxonomy ID = 1637), presenting further opportunities for novel epidemiological research. With a pipeline in place for end-to-end data acquisition, we now present results for NORS and NCBI data wi-
th EpiNCBI_V1 applied to E. Coli and Salmonella (i.e., NCBI taxonomy ID 562 and 590, respectively). Below are the spatialtemporal analyses associated with these two pathogens.
For E. Coli NCBI data, the download step resulted in 281,487 submissions. Two more }lters were applied submissions for both pathogens were further }ltered to only include submissions collected with a geographic location containing the string ”USA”, ”UNITED STATES”, or a state name within the US, or a city name within the top 300 most populous cities in the US. This }ltering showed 113,858 samples of E. Coli within the US, and 363,207 samples of Salmonella within the US. For a state-by-state analys-
is, US-based samples were further }ltered based on if their geographic location contained either an exact state name or abbreviation, or contained a city that falls on the list of the top 300 most populous cities. We observed 45,913 samples of E. Coli with state-level information, and similarly for Salmonella we obtained 531,912 records.
3.2 Time Series Analysis
The processed data can be analyzed to identify temporal trends and possible seasonality. Figure S1 in the supplementary document provides descriptive statistics of the main submitter of data associated with these two pathogens to NCBI. It can be seen that a signi}cant portion of data is submitted by organizations other than the CDC. Furthermore, Figures S2-S5 in the supplementary document provide additional details on NORS data. This includes the number of outbreaks by top ten pathogens (Figure S2-
), temporal changes in the number of outbreaks reported by NORS (Figure S3), Word cloud of etiologies (Figure S4), and a comparison of the temporal pattern of outbreaks by Norovirus as the pathogen causing the highest number of outbreaks and Enterobacterales and other pathogens (Figure S5).
Figure 2 illustrates NORS and NCBI submission data from January of 1998 through the end of December 2023. Analysis of the time-series data shows an uptrend from 2013 to 2019, followed by a sharp increase in NCBI sample submissions during the COVID-19 pandemic (2019–2022). However, a downtrend in submissions is observed in 2023. Only NCBI samples that included a collection year and month in the metadata are counted. The NORS data follows a seasonal trend, in Summer outbreaks are more prevalent than-
 Winter outbreaks. Before 2013, NCBI submission data counts of E. Coli and Salmonella initially are very small prior to 2013. In 2013 the number of NCBI submissions increases exponentially. This increase in submissions coincides with the launch of GenomeTrakr [18]. NCBI submission data for E. Coli and Salmonella also displays seasonal trends with Summer peaks and Winter lows.
Figure S6 in the supplementary document displays cumulative bar charts for NORS and NCBI submission data at the monthly level for E. Coli and Salmonella. NCBI submissions require a collection month for inclusion in Figure S6. Namely, 72,144 NCBI records for E. Coli and 253,304 NCBI records for Salmonella
5

contained submission months. Figure S6 asserts the claims that both NORS and NCBI data follow a seasonal trend, with higher numbers of reports during the Summer months, with a peak in July and a low in February. The data for both E. Coli and Salmonella appear to exhibit a one or two-month delay in reporting, as the maximum and minimum values for NCBI and NORS are shifted one or two months ahead of the maximum and minimum of the US average temperature curve. Figure 3 clearly shows that the NCBI su-
bmissions associated with Salmonella and E. coli have increased over the time. There are also clear seasonal patterns in the data. Note that CDC submissions have been scaled by 1/100. In this case, some submission patterns become visible. For E. Coli and Salmonella, the CDC has been the top distributor until early 2023. While it is unlikely the CDC ceased submitting samples in early 2023, it is more likely that CDC either submits samples in batches, or delays reporting until the new year. Other in-
stitutions only submitted samples during certain years. Most institutions also show evidence of seasonality in their submission timelines.
Additional time series plots can be found in the supplementary document. Speci}cally, Figure S7 shows that the number of outbreaks caused by Salmonella is two to three times higher than those caused by E. coli.
1998 2000 2002 2004 2006 2008 2010 2012 2014 2016 2018 2020 2022
0
5
10
15
20
25
30
Outbreaks and Submissions
NORS E. coli Outbreaks
(a)
1998 2000 2002 2004 2006 2008 2010 2012 2014 2016 2018 2020 2022
0
10
20
30
40
50
60
Outbreaks and Submissions
NORS Salmonella Outbreaks NCBI Salmonella Submissions (scaled by 1/100)
(b)
Figure 2: Time series comparisons of NCBI submission and NORS outbreaks data. Bacterial strains: (a) E. coli and (b) Salmonella.
3.3 Spatial Data Analysis
The downloaded NCBI data also contains }elds for isolation source and geographic location at the state level. Figure 4 depicts four maps of the US, each exhibiting areas of interest related to E. Coli and Salmonella. Figures 4 (a) exhibits states with the highest and lowest total number of E. Coli counts in NCBI submissions and NORS outbreak sources. Red states that are top ten in NCBI submission geographic location and top ten in NORS outbreak state of origin. Green states show states that are bo-
ttom ten in NCBI submission geographic location and bottom ten in NORS outbreak state of origin. Yellow states depict states that are bottom ten in NCBI submission geographic location and top eleven in NORS outbreak state of origin. Lastly, blue states are in the top ten in NCBI submission geographic location and in the bottom ten in NORS outbreak state of origin. Figure 4 (b) shows a similar situation to Figure a), except the total submitted count for NCBI and NORS data of each state is divided b-
y their respective population in million, exhibiting E. Coli prevalence patterns. For example, Texas was a top 10 submitter for NCBI submissions and NORS outbreak sources, but when the number of counts and number of outbreaks are divided by the state’s population, Texas is no longer one of the top ten states for submissions or outbreaks. Figures 4 (c)
6

2010 2011 2012 2013 2014 2015 2016 2017 2018 2019 2020 2021 2022 2023
0
100
200
300
400
E. coli Submission Counts
CDC FDA ICM ISU MIT NCBI UF UTMDA WRAIR WS
(a)
2010 2011 2012 2013 2014 2015 2016 2017 2018 2019 2020 2021 2022 2023
0
100
200
300
400
500
600
Salmonella Submission Counts
CDC CFSAN FDA FDH MDH NCBI NYSDOH TXAM UCM WQEB
(b)
Figure 3: Time series of NCBI submission counts by top ten submitters. (CDC scaled by 1/100) (2009-2023)
TX
CO
NV
MT
WA
TN
OH
PA
WV
RI
ME
NH
VT
NV KS
SD IA
FL
NY
(a) (b)
TX
CA
NV
WY
WT ND MN
WI OH
PA
NY
VT
RI
(c)
NV UT
MN
FL
NJ DE
MA
HI
AK
(d)
Figure 4: Overlaps between NCBI and NORS data for E. coli (panel a) and Salmonella (panels c). Panels (b) and (d) correspond to data normalized by the population of each state (i.e., per capita in million). Red: overlaps between top 10 NCBI submissions and outbreak, Green=overlaps of bottom 10 submissions and outbreaks, Yellow: top 11 outbreaks, bottom 10 submissions; Blue: bottom 10 outbreaks, top 10 submissions.
7

and (d) represent the number of submissions associated with Salmonella.
We can also use NCBI data to de}ne broad categories for Chi-square testing. For this, we classi}ed each US submission according to its isolation source and host columns, and created a new category }eld classifying each submission as having been derived from beef, fruit, humans, pork, turkey, or water. We conducted a Chi-square independence test to assess independence in the category-state pairings. Such information is not present in the NORS data, which can help public health o{cials and researche-
rs better interpret outbreak dynamics and inform decision-making.
Beef
Fruit
Human Pork
Turkey
Water
Minnesota
Michigan
Massachusetts
Iowa
Illinois
Florida
Connecticut
Colorado
Arizona
19.76
32.18
44.59
Farm Fruit
Human Pork
Water
Texas
Rhode Island
New York
Missouri
Minnesota
Michigan
Maryland
Hawaii
Georgia
Arizona
23.63
37.87
52.10
Figure 5: Bubble charts for the top ten contributors to the chi-square test for independence statistic by state and source for E. Coli (left) and Salmonella (right). The largest contributors are red. Smaller contributors are in green.
4 Discussion and Conclusion
In the present work, we developed a Python tool (EpiNCBI V1 p) that enables researchers to access curated and standardized NCBI genomic metadata for epidemiological modeling and analyses. EpiNCBI V1 p supports a wide range of applications, including data-driven modeling, visualization of temporal and spatial trends, and evidence-based decision-making. To illustrate its utility, we compared curated NCBI data with NORS reports of Salmonella and E. coli outbreaks, highlighting the added value of inte-
grating genomic and epidemiological data streams.
To reproduce the cleaning and analysis in this paper, the authors have prepared a GitHub page containing the programs and code scripts used to generate each dataset used to obtain the }gures in this paper, as well as the supplementary document [8]. The code contains comments throughout highlighting the Python functions used to carry out each compartment in 1. Looking ahead, future developments will focus on expanding compatibility with additional surveillance platforms, enhancing real-time data pr-
ocessing, and strengthening applications in genomic surveillance, One Health initiatives, and rapid outbreak response.
A number of issues were encountered while working with NCBI datasets Sample submissions to NCBI do not have a strict format to adhere to, and many }elds are voluntary. Submission dates do not always follow the same formatting, reported strains are not always consistent (e.g., O157 vs O157:H7 vs 157), and a number of other }elds we are interested in require a large amount of time to be spent in cleaning the data.
8

No two cleaning methods will yield the same results. The provided data in the }elds for isolation source and host are often not speci}c, and require some inference to determine what source each individual sample was extracted from. (i.e., an isolation source of ”urine” does not specify if the host was animal or human). Additionally, categorizing the isolation source and host columns analysis was determined using a limited number of keyword searches.
In conclusion, the variability and inconsistency of NCBI sample submissions highlight the challenges of relying on non-standardized metadata. Despite these limitations, careful curation and cleaning can still yield valuable insights for epidemiological analysis.
5 Acknowledgments
The Authors would like to acknowledge Sudhiksha Kumar (Division of Computing, Analytics & Mathematics, School of Science and Engineering, University of Missouri-Kansas City) and Supraja Kanagala (Division of Computing, Analytics & Mathematics, School of Science and Engineering, University of Missouri-Kansas City) for their contributions in making this work possible.
References
[1] David J. Allen, John J. Gray, Miren Iturriza-Gómara, et al. Transmissibility of norovirus in the United States, 2009–2017. Emerging Infectious Diseases, 26(8):1824–1831, 2020.
[2] G. Babanejaddehaki, A. An, M. Papagelis, et al. Disease Outbreak Detection and Forecasting: A Review of Methods and Data Sources. arXiv preprint arXiv:2410.17290, 2024.
[3] Dennis A. Benson, Mark Cavanaugh, Karen Clark, et al. GenBank. Nucleic Acids Research, 41(D1):D36D42, 2013.
[4] Centers for Disease Control and Prevention. NORS Data.
[5] Mattison CP, Dunn M, Wikswo ME, Kambhampati A, Calderwood L, Balachandran N, et al. NonNorovirus Viral Gastroenteritis Outbreaks Reported to the National Outbreak Reporting System. Emerg Infect Dis, 27(2):560–564, 2021.
[6] J. Gao, R. Sharma, C. Qian, L. M. Glass, J. Spaeder, J. Romberg, et al. STAN: Spatio-Temporal Attention Network for Pandemic Prediction Using Real World Evidence. arXiv preprint arXiv:2008.04215, 2020.
[7] S. Gao, A. K. Chakraborty, R. Greiner, M. A. Lewis, and H. Wang. Early detection of disease outbreaks and non-outbreaks using incidence data: A framework using feature-based time series classi}cation and machine learning. PLoS Computational Biology, 21(2):e1012782, 2025.
[8] Bryan Harris. Github page for downloading and cleaning. https://github.com/52738592625/ bryan-research, 2025. Accessed: 2025-06-22.
[9] Wei-Hua Hu, Hui-Min Sun, Yong-Yue Wei, and Yuan-Tao Hao. Global infectious disease early warning models: An updated review. Infectious Medicine, 3(2):79–92, 2024.
[10] Jesse Y. Lively, Aaron T. Curns, and Aron J. Hall. Enteric disease outbreaks reported through the National Outbreak Reporting System, United States, 2009–2019. Clinical Infectious Diseases, 74(11):19061914, 2022.
[11] O’Leary NA, Cox E, Holmes JB, Anderson WR, Falk R, Hem V, Tsuchiya MTN, Schuler GD, Zhang X, Torcivia J, Ketter A, Breen L, Cothran J, Bajwa H, Tinne J, Meric PA, Hlavina W, and Schneider VA. Exploring and retrieving sequence and metadata for species across the tree of life with NCBI Datasets. Sci Data, page 732, 2024.
9

[12] National Library of Medicine. NLM GenBank and SRA Data Processing, 2023. Accessed: 2025-08-24.
[13] Nuala A. O’Leary, Mark W. Wright, J. Rodney Brister, et al. Reference sequence (RefSeq) database at NCBI: current status, taxonomic expansion, and functional annotation. Nucleic Acids Research, 44(D1):D733–D745, 2016.
[14] Pedro Panzenhagen et al. The distribution of Campylobacter jejuni virulence genes in genomes worldwide derived from the NCBI pathogen detection database. Genes, 12(10), 2021.
[15] Moez Sanaa et al. GenomeGraphR: a user-friendly open-source web application for foodborne pathogen whole genome sequencing data integration, analysis, and visualization. PloS One, 14(2), 2019.
[16] Moez Sanaa et al. Comparison of Serovar Reporting Frequency in the United States Department of Agriculture Food Safety and Inspection Service and the National Center for Biotechnology Information Pathogen Detection Databases of Salmonella Strains Isolated from Livestock. Food Protection Trends, 45(2), 2025.
[17] Morgan K. Steele, Aron J. Hall, Katia Koelle, Karen Levy, Lance A. Waller, Ben A. Lopman, Mary E. Wikswo, and Andreas Handel. Characterizing Norovirus Transmission from Outbreak Data, United States, 2009–2017. Emerging Infectious Diseases, 26(8):1537–1545, 2019.
[18] Ruth E. Timme, Maria Sanchez Leon, and Marc W. Allard. Utilizing the public GenomeTrakr database for foodborne pathogen traceback. In Foodborne bacterial pathogens: methods and protocols, pages 201–212. Springer, 2018.
[19] Xuerui Yang and Robert Scharz. Foodborne illnesses from leafy greens in the United States: attribution, burden, and cost. Journal of Food Protection, 2024.
10

Supplementary Document for Leveraging NCBI Genomic Metadata for Epidemiological Insights: Example of Enterobacterales
Bryan Harris, Majid Bani-Yaghoub∗
Division of Computing, Analytics & Mathematics, School of Science and Engineering, University of Missouri-Kansas City, 5100 Rockhill Rd., Kansas City, Missouri 64110, USA
List of Figures
S1 (NCBI) Pie charts for data submissions for E. Coli (left), and Salmonella (Right). Although the majority of samples for both pathogens were submitted by CDC, there is a signi}cant percentage of samples that were submitted by other entities; approximately 32% for E. Coli, and 12% for Salmonella. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 S2 (NORS) Bar charts of more signi}cant pathogens causing outbreaks for time intervals of 19982008, 2009-2014, 2015-2020, 2-
020-2023 obtained from NORS data . . . . . . . . . . . . . . . . 3 S3 (NORS) In the time series data, there are two major jumps. The }rst jump is associated with the launch of the Foodborne Disease Outbreak Surveillance System in 1997, and the second is related to the launch of the National Outbreak Reporting System (NORS) in 2009. The jumps represent sharp increases in reporting e{ciency for outbreaks, and do not necessarily represent a sharp increase in outbreaks occurring. . . . . . . . . . . .-
 . . . . . . . . . . . . . 3 S4 (NORS) Word Cloud of Etiologies. The word cloud shows that ’Norovirus unknown’ and Norovirus Genogroup 1 and 2 are the main pathogens for outbreaks in the US. Thereafter, salmonella and E coli are the primary causes of outbreaks reported in the US. . . . . . . . . . 4 S5 (NORS) Given that Salmonella, E. Coli are both members of the order Enterobacterales, a comparison between time series of Enterobacterales and Norovirus-causing outbreaks in the US reveals interesti-
ng results. We can observe periodic behaviors in both time series The main dizerence is the peak values as E. Coli, Salmonella mainly have peak values during the Summer, where whereas Norovirus mostly occurs during Winter/Spring. . . . . . . . . . . . . 5 S6 (NCBI and NORS) Figures a) and b) provide a follow up to the claim of having higher numbers of outbreaks during Summer, where it can be seen that for both pathogens the numbers are much higher during June with a possible delay in reporting the-
 outbreaks which are pushed to July . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 S7 (NORS) This }gure shows that the number of outbreaks caused by Salmonella or two to three times higher than those caused by E. Coli. We can still observe synchronized peaks between outbreaks caused by these two pathogens . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 S8 (NORS) The states with the highest number of reported outbreaks during 2009 to -
2023 are displayed. Focusing on the last two years of the study, it can be seen that by scaling the number of outbreaks according to the population of each state V identify states with per capita highest outbreaks which has been represented in the table. . . . . . . . . . . . . . . . 6 S9 (NORS) The states with the highest number of reported outbreaks during 2009 to 2023. . . . 7 S10 (NORS) The states with the highest number of reported outbreaks associated with E. Coli from 2009 to 2023. Note tha-
t the top plot and each }gure corresponds to reported numbers of outbreaks and the bottom plot in each }gure corresponds to numbers of outbreaks per capita. 7
∗Corresponding author. Email: baniyaghoubm@umkc.edu
1

S11 (NORS) The states with the highest number of reported outbreaks associated with Salmonella from 2009 to 2023. Note that the top plot and each }gure corresponds to reported numbers of outbreaks and the bottom plot in each }gure corresponds to numbers of outbreaks per capita of the reported state. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 S12 (NORS) US map highlighting the top states for E. Coli based on Figure S10 . . . . . . . . . 8 S13 (NORS) US map -
highlighting the top states for Salmonella based on Figure S11 . . . . . . . 9
Contents
1 Descriptive Statistics of NORS and NCBI Data 2
2 Temporal analysis of data 2
3 Spatial analysis of data 2
1 Descriptive Statistics of NORS and NCBI Data
This section shows count }gures for NORS and NCBI that are neither spatial nor temporal in nature.
CDC
61.9%
FDA
22.8%
NCBI
7.9%
Other
7.4%
CDC
87.8%
CFSAN
5.9%
FDA
4.6%
Other
1.7%
Figure S1. (NCBI) Pie charts for data submissions for E. Coli (left), and Salmonella (Right). Although the majority of samples for both pathogens were submitted by CDC, there is a signi}cant percentage of samples that were submitted by other entities; approximately 32% for E. Coli, and 12% for Salmonella.
2 Temporal analysis of data
This section provides additional details, results, and diagnostics for the temporal analyses (e.g., model }t over time, change-point checks, forecast error pro}les).
3 Spatial analysis of data
This section contains supplementary maps and spatial diagnostics.
2

Figure S2. (NORS) Bar charts of more signi}cant pathogens causing outbreaks for time intervals of 19982008, 2009-2014, 2015-2020, 2020-2023 obtained from NORS data
Figure S3. (NORS) In the time series data, there are two major jumps. The }rst jump is associated with the launch of the Foodborne Disease Outbreak Surveillance System in 1997, and the second is related to the launch of the National Outbreak Reporting System (NORS) in 2009. The jumps represent sharp increases in reporting e{ciency for outbreaks, and do not necessarily represent a sharp increase in outbreaks occurring.
3

Figure S4. (NORS) Word Cloud of Etiologies. The word cloud shows that ’Norovirus unknown’ and Norovirus Genogroup 1 and 2 are the main pathogens for outbreaks in the US. Thereafter, salmonella and E coli are the primary causes of outbreaks reported in the US.
4

Figure S5. (NORS) Given that Salmonella, E. Coli are both members of the order Enterobacterales, a comparison between time series of Enterobacterales and Norovirus-causing outbreaks in the US reveals interesting results. We can observe periodic behaviors in both time series The main dizerence is the peak values as E. Coli, Salmonella mainly have peak values during the Summer, where whereas Norovirus mostly occurs during Winter/Spring.
40
60
80
100
US Average Temperature (°F)
Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec
0
100
200
300
400
500
Salmonella Submissions and Outbreaks
NORS Outbreaks NCBI Submissions (scaled by 1/100) US Average Temperature
(b)
40
60
80
100
US Average Temperature (°F)
Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec
0
100
200
300
400
500
Salmonella Submissions and Outbreaks
NORS Outbreaks NCBI Submissions (scaled by 1/100) US Average Temperature
(b)
Figure S6. (NCBI and NORS) Figures a) and b) provide a follow up to the claim of having higher numbers of outbreaks during Summer, where it can be seen that for both pathogens the numbers are much higher during June with a possible delay in reporting the outbreaks which are pushed to July
5

Figure S7. (NORS) This }gure shows that the number of outbreaks caused by Salmonella or two to three times higher than those caused by E. Coli. We can still observe synchronized peaks between outbreaks caused by these two pathogens
Maine
Vermont
Rhode Island
West Virginia
Wisconsin
Minnesota
Oregon
State (2021-2023)
Outbreaks per Million per Year Multistate N/A Rhode Island 66.364 Colorado 46.437 Montana 35.455 Maine 32.821 Minnesota 32.5 Oregon 29.457 Wisconsin 28.983 Nebraska 27.544 Vermont 27.222
West Virginia 23.704
Study periods: 2009-2014, 2015-2019 and 2021-2023
Figure S8. (NORS) The states with the highest number of reported outbreaks during 2009 to 2023 are displayed. Focusing on the last two years of the study, it can be seen that by scaling the number of outbreaks according to the population of each state V identify states with per capita highest outbreaks which has been represented in the table.
6

Figure S9. (NORS) The states with the highest number of reported outbreaks during 2009 to 2023.
Figure S10. (NORS) The states with the highest number of reported outbreaks associated with E. Coli from 2009 to 2023. Note that the top plot and each }gure corresponds to reported numbers of outbreaks and the bottom plot in each }gure corresponds to numbers of outbreaks per capita.
7

Figure S11. (NORS) The states with the highest number of reported outbreaks associated with Salmonella from 2009 to 2023. Note that the top plot and each }gure corresponds to reported numbers of outbreaks and the bottom plot in each }gure corresponds to numbers of outbreaks per capita of the reported state.
Figure S12. (NORS) US map highlighting the top states for E. Coli based on Figure S10
8

Figure S13. (NORS) US map highlighting the top states for Salmonella based on Figure S11
9

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:40.009Z
- **Text Length:** 39985 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 19 of 19
