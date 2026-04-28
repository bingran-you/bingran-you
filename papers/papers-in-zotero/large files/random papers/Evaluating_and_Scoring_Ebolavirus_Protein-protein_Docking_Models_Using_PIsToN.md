# PDF Document: Shirali et al. - 2025 - Evaluating and Scoring Ebolavirus Protein-protein Docking Models Using PIsToN.pdf

**File Path:** Shirali et al. - 2025 - Evaluating and Scoring Ebolavirus Protein-protein Docking Models Using PIsToN.pdf

**Processed Date:** 2026-02-10T18:14:38.599Z

**File Size:** 769.43 KB

**Total Pages:** 14

**Extracted Pages:** 14

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3673

**Title:** Evaluating and Scoring Ebolavirus Protein-protein Docking Models Using PIsToN

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Evaluating and Scoring Ebolavirus
Protein-protein Docking Models Using PIsToN
Azam Shirali1, Vitalii Stebliankin1, Jimeng Shi1, Prem
Chapagain2,3, and Giri Narasimhan∗1,3
1Bioinformatics Research Group (BioRG), Knight Foundation School of Computing and Information Sciences, Florida International University, 11200 SW 8th St, Miami, 33199, USA. 2Department of Physics, Florida International University, 11200 SW 8th St, Miami, 33199, USA. 3Biomolecular Sciences Institute, Florida International University, 11200 SW 8th St, Miami, 33199, USA.
Abstract
Protein-protein docking is crucial for understanding how proteins interact. Numerous docking tools have been developed to discover possible conformations of two interacting proteins. However, the reliability and success of these docking tools rely on their scoring function. Accurate and efficient scoring functions are necessary to distinguish between native and non-native docking models to ensure the accuracy of a docking tool. Like in other fields where deep learning methods have been successfull-
y utilized, these methods have also introduced innovative scoring functions. An outstanding tool for scoring and differentiating native-like docking models from non-native or incorrect conformations is called Protein binding Interfaces with Transformer Networks (PIsToN). PIsToN significantly outperforms state-of-the-art scoring functions. Using models of complexes obtained from binding the Ebola Virus Protein VP40 to the host cell’s Sec24c protein as an example, we show how to evaluate docking mod-
els using PIsToN.
∗Correspondence: Giri Narasimhan, Bioinformatics Research Group (BioRG), Knight Foundation School of Computing and Information Sciences, Florida International University; 11200 SW 8th St, Modesto A. Maidique Campus, Miami, FL 33199, USA. Email: giri@fiu.edu, Ph: (+1) 305-348-3748
1
arXiv:2511.13583v1 [q-bio.BM] 17 Nov 2025

Keywords: Scoring function, protein-protein interactions, Ebola virus, Molecular docking, Deep learning
1 Introduction
Protein-protein binding plays a crucial role in many important biological processes and diseases. Most cellular processes, including signaling and immune responses, rely on protein-protein interactions. Undesired protein-protein binding can lead to diseases such as cancer, neurodegenerative disorders, and infectious diseases, including various viral infections. For instance, the Ebola virus uses host cell machinery at every stage of its life cycle—from entry to replication, assembly, and budding. -
It hijacks cellular pathways for producing viral proteins and assembling new virus particles, while also suppressing the immune response to ensure its survival and spread [1]. These processes essentially involve host protein - virus protein interactions. Computational methods such as protein-protein docking (e.g. with HDOCK [2], ZDOCK [3]) or multi-protein assembly predictions using AlphaFold 3.0 [4] can be used to determine the protein-protein complexes to investigate the assembly dynamics and bi-
nding mechanisms. Accurate prediction of the model complexes such as by scoring and ranking docking models is essential for understanding protein function, disease mechanisms, and therapeutic applications. However, developing accurate and efficient scoring functions to differentiate native from non-native structures presents a challenge. Without these scoring functions, the accuracy of docking tools cannot be guaranteed [5]. Considerable efforts have been dedicated to developing meaningful scoring-
 functions. This has involved various approaches, such as utilizing force fields and physics features, estimating binding affinity by summing up energy terms before and after bonding, and leveraging knowledge from statistical potentials of known 3D structures. With significant advancements in machine learning (ML) and deep learning (DL), alternative ML-based models have been introduced that can learn to estimate scoring functions and rank docking models. These models are capable of learning comple-
x transfer functions that map a combination of chemical, physical, and geometrical features to predict scoring functions. Among the state-of-the-art methods, PIsToN (evaluating Protein binding Interfaces with Transformer Networks) uses a trained deep learning model
2

that can differentiate native-like docking models from non-native and incorrect conformations [6]. In PIsToN, each protein interface is represented as a set of 2D images. These images represent various geometric, physical, and biochemical properties, capturing atomic-level information of relevant protein characteristics. Additionally, empirical-based energy terms serve as “hybrid” inputs to the neural network. PIsToN represents binding interfaces as pairs of two-dimensional multi-channel images a-
nd then utilizes a trained Vision Transformer (ViT) [7] neural network. It explicitly integrates interaction properties, including atomic distances, relatively accessible surface areas (RASA), van der Waals interactions, complementary surface charges, hydrophobicity values, and more. PIsToN has demonstrated superior performance, significantly outperforming state-of-the-art methods on several wellknown datasets [6]. The term “explainability” refers to the ability of a deep learning model to transpa-
rently demonstrate the rationale behind its decisions, making it easier to comprehend why specific outcomes are predicted. In PIsToN, explainability is crucial because it enables users to not only see the score of a docking model but also understand the factors that influenced that score. The PIsToN architecture uses multi-attention ViT, which helps to emphasize important regions where proteins bind and identify which features (shape, charge, hydropathy, etc.) are most critical to score a model ef-
ficiently (see [6] for more details). Based on our knowledge, PIsToN is the first scoring function to provide explainability, enhancing its trustworthiness for protein docking models. In this chapter, we will introduce how to use PIsToN as a scoring function for protein-protein docking models and run it on Ebola virus docking models. For this, we take the Ebola virus’s structural matrix protein VP40 binding to the host cell’s Sec24c protein as an example of host-virus protein-protein binding. The -
VP40-Sec24c binding aids in transportation to the plasma membrane, ultimately contributing to the development of Ebola virus disease [8]. The VP40 protein of the Ebola virus is able to associate with the plasma membrane of the host cell and has the capacity to form virus-like particles independently [8]. Computational models are used to study the VP40 binding site on Sec24c, which is essential for developing effective vaccines and speeding up the vaccine design process. The organization of this ch-
apter is as follows: Section 2 explains the required inputs and their formats, along with other materials needed for using PIsToN. In Section 3, we will guide users through the installation and the process of creating their own docking
3

models. Additionally, in Section 4, we will demonstrate how to utilize PIsToN on the docking models of the Ebola virus. Important and useful notes are listed in Section 5 to provide additional information to readers and users.
2 Materials
2.1 Input Format
The input to PIsToN is the 3D structure of docking models (in PDB format) of a complex with two interacting proteins. Protein Data Bank (PDB) [9] files must have the element symbol of the atoms in columns 77-78. All docking models that need to be scored are required to be listed in a text file, with each complex shown on a separate line in the following format: PID ch1 ch2. In this format, PID represents the name of the PDB file, while ch1 and ch2 represent the names of the chains in the first and-
 second proteins, respectively. By running PIsToN, all docking models in the list are scored and saved as an output in csv format. PIsToN assigns a score in the range [−2, 2] to each docking model. Docking models with lower scores are considered to have near-native conformations. Therefore, an ideal binding corresponds to a score of -2, while a score of 2 indicates the most unlikely binding interface and represents a non-native docking model.
2.2 Data Preprocessing
To use PIsToN, we start by preparing and preprocessing the data. For each docking model in PDB format, we create an interface map by projecting surface features from the binding interface of the individual interacting proteins. This results in a multi-channel image, with each channel focused on a specific feature type. Before applying the machine learning model, the data is transformed into 2D images, a method that has been successfully employed in other machine learning applications, such as mach-
ine vision. To generate feature maps, we followed the following steps:
1. First, we refined the protein structures to include side-chain flexibility using FireDock (Fast Interaction Refinement in Molecular Docking) [10]. We then computed the binding free energy terms, such as van
4

der Waals, desolvation, insideness, hydrogen and disulfide bonds, electrostatics, and π-stacking, cation–π and aliphatic interactions of the refined structures.
2. Next, we cropped the docking models to within a specified distance from the center of interaction as the geometric center of contact points.
3. The solvent-excluded surface was then triangulated and re-scaled to a granularity of 1  ̊A using the MaSIF data preparation module [11].
4. We calculated patches and their associated features for each protein individually on the interface. Each patch consists of vertices on a triangulated protein surface within a defined geodesic distance from the interaction center. Additional features such as shape index, curvature, hydrogen-bond potential, charge, and hydropathy were computed for each surface point on a surface using the MaSIF data preparation module [11]. We also computed an image for the patch distance, which is generated from-
 a grid of Euclidean distances between points on the two protein surfaces that project corresponding points on the patch pair. Finally, Relative Accessible Surface Area (RASA) was computed for each patch residue using DSSP v2.3 [12].
5. Finally, we converted patch features into an image with pixel intensities proportional to the feature values. Surface points on patches were projected onto a 2D plane using a multidimensional scaling algorithm [13].
All these steps were saved in user-specified folders in the output directory (see Section 4 for details).
3 Methods
In this section, we will guide readers through all the necessary steps for installing and running PIsToN.
3.1 Installation
Step 1: Obtain the PIsToN code
5

First, download the PIsToN code repository. This repository includes all the scripts, configuration files, and resources needed to run the trained model. Use git, a version control system, to download (or “clone”) the latest version of the repository to your local machine using the command:
git clone https://github.com/stebliankin/piston
The above command creates a new directory named piston in your current working directory and will contain all the files needed to run PIsToN. Next, navigate to the piston directory using cd command as shown below:
cd piston
Finally, ensure that the main script, piston, has the correct permissions to be executed as a program:
chmod +x piston
Step 2: Install required Python packages in the Conda environment For optimal performance and no package conflicts, a dedicated Conda environment is recommended for installing required packages and their dependencies. Conda creates an isolated execution environment for PIsToN. Use the following commands to achieve this:
conda create -n piston python=3.7 source activate piston
The version of Python to be used is python=3.7. The environment is then activated by the source command. Next, the necessary Python packages are installed using the following command:
pip3 install \ tqdm \ einops \ keras-applications==1.0.8 \ opencv-python==4.5.5.62 \ pandas \ torch==1.10.1 \ biopython --upgrade \ plotly \
6

torchsummary \ torchsummaryX \ scipy \ sklearn \ matplotlib \ seaborn \ ml_collections \ kaleido \ -U scikit-learn \ pdb2sql
To execute PIsToN on specific docking models, MaSIF and FireDock must be installed. MaSIF can be installed using the data preparation module given in its GitHub site: https://github.com/LPDI-EPFL/masif. FireDock can be installed using the following link: https://www.cs.tau.ac.il//~ppdock/ FireDock/download.html.
Alternative Step 2: Install required Python packages using the Singularity container
For users utilizing an HPC (High-Performance Computing) cluster, using a Singularity container can simplify the setup process and ensure consistent runs of PIsToN across different systems. Download the pre-built Singularity container piston.sif, which includes all necessary dependencies, using the following command:
wget https://users.cs.fiu.edu/~vsteb002/piston_sif/piston.sif
This container was built with Singularity version 3.5.3 and includes all preconfigured dependencies required to run PIsToN. The detailed Singularity definition file piston.def, which describes the environment setup, can be found in the repository under the env folder. This file is particularly useful to understand or modify the environment configuration. Successful completion of the above steps prepares PIsToN to assess docking models and score them. An example of its usage is provided below in th-
e next section.
7

4 Using PIsToN to Score protein-protein Dock
ing Models
4.1 Preparing Docking Models
In this section, we will use PIsToN to evaluate and rank the docking models obtained from the binding of VP40 to the host cell’s Sec24c protein. We will also describe the results and their significance. The docking models need to be obtained first, before using PIsToN. This can be achieved, for example, by following the steps below:
1. Download the VP40 3D structure from the PDB (PDB ID: 7jzj)
2. The PDB structure has missing residues and they need to be filled so that the structure of a continuous sequence is used. A complete sequence without the missing residues can be downloaded from UniProt.Download the complete sequence (in Fasta format) from UniProt ID Q05128 (https://www.uniprot.org/uniprotkb/Q05128/entry#sequences).
3. Use the SwissModel [14] webserver (https://swissmodel.expasy.org/ interactive) to fill in missing residues. For this, copy and paste the sequence obtained from UniProt and search for templates. Once the templates are suggested, use 7jzj.2.A as the template to build the VP40 dimer model. Download the modeled PDB file of the VP40 dimer structure.
4. Repeat the previous steps for human Sec24c. Utilize the sequence from UniProt ID P53992, search for a template, and finally use 3eh2.1.A as the template.
5. Use the HDOCK [2] server (or any of several freely available docking servers) to generate docking models for the complex involving VP40 and Sec24c (in PDB format). HDOCK can generate 100 docking models and can rank them based on their quality. We suggest downloading the top 10 docking models.
6. Finally, use PIsToN to score the top docking models as described below.
8

4.2 Evaluating Docking Models
Having prepared the docking models, we execute PIsToN for evaluating the binding interfaces and ranking models as described below.
1. Change the current directory to where PIsToN is downloaded and create a new folder named Models. Move the docking models to this folder.
2. Navigate to this directory by cd /path/to/Models
3. List all the files containing the docking models in a text file named models list.txt. Each line in this file contains the name of a file with one docking model and specifies the chains of the two proteins separated by an underscore ( ) (see Section 2). For example, the text lines may look like this:
model-1_AB_C model-2_AB_C model-3_AB_C
Each of the three docking models in the example above contains the VP40 dimer with chains A and B and the Sec24c protein with chain A. We renamed the Sec24c protein chain to chain C to ensure distinct chain names used in the two proteins.
4. Run the Python script below with the specified arguments:
python ../piston.py infer --pdb_dir ./ --list ./models_list.txt --out_dir ./piston_out
The infer module calculates PIsToN scores for docking models and generates visual representations of the associated interface maps.
Option --pdb dir specifies the path to the PDB files of the docking models.
9

Option --list specifies the file with the list of docking models.
Option --out dir is the directory where the output files will be saved.
5. The output generated by PIsToN is organized into several files.
PIsToN scores.csv: Contains PIsToN scores in csv format, where lower scores indicate better binding. Table 1 shows the scores (rounded to 4 decimal places) obtained for the Ebola virus docking models. See section 2 for details.
Table 1: PIsToN scores for Ebola virus docking models
Docking Model Score model-2 -0.744 model-4 -0.540 model-7 0.009 model-10 0.022 model-1 0.452 model-9 0.508 model-3 0.633 model-8 0.864 model-5 0.941 model-6 0.999
These scores represent PIsToN’s predictions of the strength of the interaction between the two proteins in the complex, a crucial piece in our understanding of the complex. Docking models that obtained a score less than zero are classified as near-native and correct models, while those that obtained scores more than zero are classified as non-native and incorrect models.
gird 16R: A directory containing interface maps in NumPy format.
intermediate files: This folder contains the intermediate files created by PIsToN, including protein structures after various processing steps such as protonation, refinement, cropping, and the many patches of interest.
patch vis: This folder contains html files with interactive visualizations of interface maps.
10

As model-2 is ranked as the best model by PIsToN among all 10 docking models, we visualized its interface maps in Figure 1.)
Figure 1: The interactive patch pair for model-2 using its html file in patch vis folder.
PIsToN helps us to analyze the essential features and binding sites that led to a classification decision. Figure 2 is drawn to identify significant features contributing the most, where PIsToN identified it as a correct model. For model-2 PIsToN paid the greatest attention to RASA when predicting it as a near-native model. PIsToN can help to identify the significant pixels and find the region of significance, which for model-2 was close to the interface. A portion of the structure of model-2 at t-
he interface is depicted in Figure 2-B, with significant residues highlighted by PIsToN.
5 Notes
• The complex of Ebola virus matrix protein VP40 and human Sec24c was used as an example to show how to run PIsToN to assess proteinprotein docking models.
• Note that the PDB files of docking models must contain the element symbol of the atoms in columns 77-78.
• The docking models cannot contain any underscores ( ) in their filenames.
11

Figure 2: A) Identifying significant features and corresponding significant pixels from the spatial attention map for model-2. The color of each pixel signifies the value of the corresponding feature on a patch. B) Structure of model-2 at the interface. Significant residues are highlighted as a red strand. The residues of interest in the binding are ARG-94, LEU-95, GLY-96, GLY110, and ASP-291.
• The same procedure can be followed for other protein-protein complexes.
• More details on using PIsToN can be found here: https://github. com/stebliankin/piston/tree/main
References
[1] Annalisa M VanHook. How Ebola shuts down antiviral signaling. Science Signaling, 7(339):ec216–ec216, 2014.
[2] Yumeng Yan, Huanyu Tao, Jiahua He, and Sheng-You Huang. The HDOCK server for integrated protein–protein docking. Nature protocols, 15(5):1829–1852, 2020.
[3] Brian G Pierce, Kevin Wiehe, Howook Hwang, Bong-Hyun Kim, Thom Vreven, and Zhiping Weng. ZDOCK server: interactive docking prediction of protein–protein complexes and symmetric multimers. Bioinformatics, 30(12):1771–1773, 2014.
12

[4] Josh Abramson, Jonas Adler, Jack Dunger, Richard Evans, Tim Green, Alexander Pritzel, Olaf Ronneberger, Lindsay Willmore, Andrew J Ballard, Joshua Bambrick, et al. Accurate structure prediction of biomolecular interactions with AlphaFold 3. Nature, pages 1–3, 2024.
[5] Azam Shirali, Vitalii Stebliankin, Ukesh Karki, Jimeng Shi, Prem Chapagain, and Giri Narasimhan. A comprehensive survey of scoring functions for protein docking models. BMC bioinformatics, 26(1):25, 2025.
[6] Vitalii Stebliankin, Azam Shirali, Prabin Baral, Jimeng Shi, Prem Chapagain, Kalai Mathee, and Giri Narasimhan. Evaluating protein binding interfaces with transformer networks. Nature Machine Intelligence, 5(9):1042–1053, 2023.
[7] Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, et al. An image is worth 16x16 words: Transformers for image recognition at scale. In International Conference on Learning Representations, 2020.
[8] Nisha Bhattarai, Elumalai Pavadai, Rudramani Pokhrel, Prabin Baral, Md Lokman Hossen, Robert V Stahelin, Prem P Chapagain, and Bernard S Gerstman. Ebola virus protein vp40 binding to sec24c for transport to the plasma membrane. Proteins: Structure, Function, and Bioinformatics, 90(2):340–350, 2022.
[9] Helen M Berman, John Westbrook, Zukang Feng, Gary Gilliland, Talapady N Bhat, Helge Weissig, Ilya N Shindyalov, and Philip E Bourne. The protein data bank. Nucleic acids research, 28(1):235–242, 2000.
[10] Nelly Andrusier, Ruth Nussinov, and Haim J Wolfson. FireDock: fast interaction refinement in molecular docking. Proteins: Structure, Function, and Bioinformatics, 69(1):139–159, 2007.
[11] Pablo Gainza, Freyr Sverrisson, Frederico Monti, Emanuele Rodola, Davide Boscaini, Michael M Bronstein, and Bruno E Correia. Deciphering interaction fingerprints from protein molecular surfaces using geometric deep learning. Nature Methods, 17(2):184–192, 2020.
[12] Wouter G Touw, Coos Baakman, Jon Black, Tim AH Te Beek, Elmar Krieger, Robbie P Joosten, and Gert Vriend. A series of pdb-related
13

databanks for everyday needs. Nucleic acids research, 43(D1):D364D368, 2015.
[13] Al Mead. Review of the development of multidimensional scaling methods. Journal of the Royal Statistical Society: Series D (The Statistician), 41(1):27–39, 1992.
[14] Stefan Bienert, Andrew Waterhouse, Tjaart AP De Beer, Gerardo Tauriello, Gabriel Studer, Lorenza Bordoli, and Torsten Schwede. The SWISS-MODEL repository–new features and functionality. Nucleic acids research, 45(D1):D313–D319, 2017.
14

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:38.599Z
- **Text Length:** 22842 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 14 of 14
