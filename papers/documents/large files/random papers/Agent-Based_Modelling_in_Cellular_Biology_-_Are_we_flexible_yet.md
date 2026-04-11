# PDF Document: Pleyer - 2025 - Agent-Based Modelling in Cellular Biology - Are we flexible yet.pdf

**File Path:** Pleyer - 2025 - Agent-Based Modelling in Cellular Biology - Are we flexible yet.pdf

**Processed Date:** 2026-02-10T18:17:33.299Z

**File Size:** 1135.84 KB

**Total Pages:** 8

**Extracted Pages:** 8

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3641

**Title:** Agent-Based Modelling in Cellular Biology - Are we flexible yet?

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Preprint
Agent-Based Modelling in Cellular Biology
Are we flexible yet?
Jonas Pleyer 1,∗
1Freiburg Center for Data Analysis, Modeling and AI, University of Freiburg, Freiburg im Breisgau, Germany
Correspondence*: Jonas Pleyer jonas.pleyer@fdm.uni-freiburg.de
ABSTRACT
Cellular Agent-Based Models are commonly employed to describe a variety biological systems. Over the course of the past years, many modeling tools have emerged which solve particular research questions. In this short opinion piece, we argue that existing frameworks lack flexibility compared to the inherent underlying complexity that they should be able to represent. We extract overarching principles of widely used software solutions across multiple domains and compare these with existing Agent-Bas-
ed Models (ABMs). We come to the conclusion that existing ABMs lack in flexibility which hinders overall progress of the field.
Keywords: Agent-Based Model, Individual, Cell, Biology, Library, Flexibility
1 INTRODUCTION
ABMs have become indispensable tools in the study of complex systems. Their applications cover topics in Ecology Grimm and Railsback (2013), Social Sciences Bankes (2002), Autonomous Cars Karolemeas et al. (2024), Spread of COVID infections Shattock et al. (2022) and many more. They utilize descriptions on the level of individual entities such as cells, organisms or humans, called agents, to build up models of complex systems. They aim to study the emergence of collective behaviors as a result of -
IndividualBased (IB) interactions. In the field of biology, cells can be considered the fundamental building blocks of nature, comprising many complex systems such as bacterial communities Nagarajan et al. (2022), organs Dutta-Moscato et al. (2014), plants Merks et al. (2011) and tissues Thorne et al. (2007). They are particularly suited to capture effects such as heterogeneity, spatial phenomena and provide a natural way to think in terms of cellular processes.
In order to quickly construct new simulations, many frameworks have emerged which simplify the process of model design Pleyer and Fleck (2023). However, despite their wide applicability, most of these models rely on a cellular representation which is baked into the respective ABM and can not simply be modified by the user. Furthermore, these models often come with a large set of parameters that need to be specified in order to obtain a working simulation which results in problems with respect to i-
nterpretability and parameter estimation of the model.
1
arXiv:2511.12161v1 [q-bio.CB] 15 Nov 2025

Pleyer et al.
With this text, we argue that cellular ABMs need to become more flexible with respect to design of agents and environment in order to tackle the aforementioned challenges. We further argue that many groundbreaking modeling techniques have been preceded by strong results and made popular by generalist tools which are able to solve a whole class of problems, thereby enabling many researchers to access the novel method.
2 PRINCIPLES OF FOUNDATIONAL TOOLS
Over the past years, a variety of foundational techniques have greatly influenced scientific research by enabling advanced workflows and providing novel insights. We focus on a subset of methods which are so fundamental that their usage spans across almost all disciplines and can target a variety of problems. Due to their foundational nature, each method comes with many tools which have been developed such that researchers are not concerned with implementation details but can focus on the scientif-
ic question at hand.
2.1 Selected Foundational Methods
Ordinary Differential Equations (ODEs) are one example of a fundamental method which is applied across all sciencies and are mostly used to describe the dynamics of various systems. Their mathematical form is rather simple which makes it easy for computationally inclined researchers to implement numerical solvers and has led to the developmend of many numerical libraries which are frequently reused. Examplse are the Boost library Mulansky et al. (2011) or the Julia package DifferentialEquations.jl-
 Rackauckas and Nie (2017). When considering spatial effects, Partial Differential Equations (PDEs) provide a natural way to extend ODEs although the added structure also requries deeper mathematical knowledge and more complex numerical solvers. Widely used tools are OpenFoam Weller et al. (1998) for fluid simulations or FEniCS Baratta et al. (2023); Scroggs et al. (2022b,a); Alnaes et al. (2014) for finite-element workflows. In contrast, Many-Body Simulations (MBSs) describe the dynamics of spati-
al systems on the basis of many interacting particles. GROMACS Abraham et al. (2015) and LAMPPS Thompson et al. (2022) both target classical molecular dynamics where the latter focusses on materials modeling but also arguably provides better flexibility while the latter is considered to be faster. Finally, in the past years, Deep Neural Networks (DNNs) have been applied to a variety of problems such as protein folding Jumper et al. (2021) or biomedical image segmentation Ronneberger et al. (2015).-
 These have been enabled by tools such as PyTorch Ansel et al. (2024) and TensorFlow Abadi et al. (2015).
2.2 Shared Principles
Despite their differences in applications and technical details, all of these tools exhibit similar unifying characteristics. Every individual component of these tools can be formulated using mathematical methods although numerically obtained results are often not derivable by a purely mathematical approach. This is also true for computations involving stochatic effects such as stochastic ODEs or approximate calculations. This generalized concept can be observed across all levels of complexity. Fu-
rthermore, since many of these methods have been established for numerous years, they follow mathematical notions which are rooted in a description that is mostly agreed upon in the respective field. A particular problem is defined by a given a set of initially known properties (i.e. initial values, labeled data, etc.) and a mathematical description. In the case of dynamical systems one could ask what the temporal evolution of a given set of initial values is over a given time interval. But other -
questions such as: "Which parameters allow me to represent this set
Preprint 2

Pleyer et al.
of datapoints most optimally?" are also valid. The mathematical description links these quantities together and a suitable solver can be chosen which accomplishes the mapping most effectively.
The previously mentioned tools have only emerged once the corresponding method was already popularized. However, the reason that these methods became popular in the first place was due to their strong results either in academic or industrial settings. Tools which make it easy to exploit these methods and deliver exceptional performance are a key cornerstone for why these methods continued to be popular after initial success. One prominent example where a technological advancement led to the popula-
rization of a particular method can be seen in the case of DNNs. Training these networks on Graphical Processing Units (GPUs) Raina et al. (2009) via the gradient descent Rumelhart et al. (1986) optimization method was crucial for their breakthrough and only recently recognized with the nobel prize Werbos (1982); Linnainmaa (1976); The Royal Swedish Academy of Sciences (2024).
Finally, another important aspect is that the presented methods have the capability to be very complex but also to be arbitrarily reducable such that no parameters are left. This means that in the case of an ODE given by
∂tx = f(t, x) (1)
any mathematically expressable term can be inserted for f(t, x), allowing for complex models. But despite this flexibility, we can still choose f = 0, thus eliminating any model properties. These statements hold true for ODEs, PDEs and most MBSs. It is a key feature that all of these tools allow scaling of the complexity scale without requiring a given starting point which enables core modeling techniques such as model reduction and model validation.
Figure 1. Schematic representation of a typical modeling approach. It is in principle possible to start at any arrow. A mathematical model is implemented within a computational framework which results in predictions that can be compared with biological data. This comparison nurishes our understanding of reality and allows us to formulate more appropriate models which starts the cycle again.
Preprint 3

Pleyer et al.
2.3 General Modeling Approach
In order to construct models which can describe biological systems and interactions therein, a common workflow is usually applied. This scheme (see Figure 1) involves multiple steps: A mathematical model is translated into computational form which provides novel insights which can finally be compared with data in order to embed the model within biological reality. To close the circle, researchers have to align the mathematical model to the biological reality. The model can be extended by including-
 additional effects or simplified i.e. for parameter estimation purposes. Furthermore, when constructing new models it is important to be able to build up models from scratch without having to rely on existing work such that minimal models with low amounts of parameters can be constructed.
3 CONSTRUCTING CELLULAR AGENT-BASED MODELS
When constructing an ABM, researchers are faced with the question if they should start bottom-up, by defining core ingredients of the model by themselves or if a preexisting ABM can be reused for their purpose. Both approaches bear challenges and provide advantages which we want to highlight now.
3.1 Using an existing ABM
In our previous work, we have reviewed a variety of ABMs Pleyer and Fleck (2023). Almost all of them assume a particular cellular and environmental representation. The most common choice for cellular shape is the soft-spheroid model Ghaffarizadeh et al. (2018); Gorochowski et al. (2012) while only a few select ABMs providing support for ellipses, cylinders Kang et al. (2014) or other representations. Although more variability exists for the description of extracellular compounds, most models choos-
e a diffusionbased approach Breitwieser et al. (2021). Any particular choice for these representations is fundamental to the dynamics which these models are capable of describing and will carry over in other aspects such as growth, physical interactions and intracellular processes. Furthermore, we observed that existing ABMs carry a large set of non-optional parameters which need to be specified in order to be able to use the model. These parameters can be problems for methods such as model reduct-
ions since they are intrinsic to the chosen ABM and can not be simply removed. If they can not be known from literature values or determined by parameter estimation techniques, researchers need to take great care in how the values of said parameters influence obtained results. Before choosing a particular ABM, researchers need to evaluate if the model in question is capable of describing the desired phenomena and can be fully parametrized by the given biological context. Once work has started with-
in a particular modeling environment, switching to a different ABM is often tedious and costly in time. These observations present significant practical limitations on the ability of researchers to find a suitable model for the given biological problem at hand. They also lead to problems when employing model reduction techniques and make it difficult to follow best principles such as Ockam’s Razor Sober (2015) during model development.
3.2 From a clean Slate
Another option is to build up a model starting from a clean slate. When deciding on this approach it is still possible to harness existing tools as long as they are capable of describing the desired cellular properties and provide enough flexibility to perform model reduction and parameter estimation techniques. General-purpose tools such as Netlogo Wilensky (1999) which are not specifically tailored towards biological questions can thus be a viable option. However, due to their generalized nature-
, they may lack desired functionalities specifically taylored to biological problems and will thus involve additional
Preprint 4

Pleyer et al.
work during model development. The case where no existing framework is used and almost all code is written by the researchers themselves, presents a very labor-intensive approach to solving the problem, even when utilizing libraries for linear algebra and numerical solvers. This approach also involves another class of challenges involving correctness of implemented algorithms and accuracy of numerical results. The resulting ABM is often highly tailored to a specific niche or the respective researc-
h question at hand, thus limiting its ability to be reused in other contexts.
3.3 Building Blocks
In contrast to the two approaches described before, there exists another path which has not been fully realized yet. That is to disect the components of cell-agents into building blocks. In order for this approach to be valuable, researchers need to be able to construct external building blocks without having to rely on existing functionalities. Furthermore we believe that widespread adoption can only be achieved if a tool can provide sufficiently many predefined building blocks which can be reuse-
d by researchers for their respective field of research. This procedure is closely followed in the development of large software libraries where it is desirable to provide reusable parts that can be freely combined. Our own ABM cellular_raza Pleyer and Fleck (2025) aims to push further into this direction by separating abstract mathematical concepts from numerical solvers and implemented building blocks. However, it is too early to tell if this particular approach has the potential to become the d-
e-facto standard for constructing novel ABMs. Another promising framework is BioDynaMo Breitwieser et al. (2021) which also considers building blocks and provides a modular design. Although it exhibits groundbreaking performance it is yet to be applied across a diverse range of topics and only supports a small set of building blocks at the time of writing.
4 CONCLUSION
ABMs have already proven to be useful tools in describing cellular systems and their emergent phenomena. Furthermore, due to their individual-based treatment of cells, they provide an intuitive way of bridging the gap from single-cell studies to collective phenomena. However, in order for these tools to become widely applicable and easily reusable, a more flexible approach which allows better reusability and customizability is required. Frameworks which are too specialized or lack in performance w-
ill be unable to support the exploratory nature that the diverse field of biology has to offer. Furthermore, a more unified mathematical treatment would allow for the construction of more generalized libraries that can be reused by researchers across topics ranging from microbiology over human stem cells to plant cells. The construction of either a widely used generalized library or a unified mathematical framework, would provide the necessary abstractions to allow researchers to flexibly conceive-
 and implement novel ABMs. Only then can this field live up to the standards of explorability and flexibility that are common in other areas of research.
Preprint 5

Pleyer et al.
REFERENCES
[Dataset] Abadi, M., Agarwal, A., Barham, P., Brevdo, E., Chen, Z., Citro, C., et al. (2015). TensorFlow: Large-scale machine learning on heterogeneous systems. Software available from tensorflow.org Abraham, M. J., Murtola, T., Schulz, R., Páll, S., Smith, J. C., Hess, B., et al. (2015). Gromacs: High performance molecular simulations through multi-level parallelism from laptops to supercomputers. SoftwareX 12, 1925. doi:10.1016/j.softx.2015.06.001 Alnaes, M. S., Logg, A., Ølgaard, K. B., Rognes,-
 M. E., and Wells, G. N. (2014). Unified form language: A domain-specific language for weak formulations of partial differential equations. ACM Transactions on Mathematical Software 40. doi:10.1145/2566630
Ansel, J., Yang, E., He, H., Gimelshein, N., Jain, A., Voznesensky, M., et al. (2024). PyTorch 2: Faster Machine Learning Through Dynamic Python Bytecode Transformation and Graph Compilation. In 29th ACM International Conference on Architectural Support for Programming Languages and Operating Systems, Volume 2 (ASPLOS ’24) (ACM). doi:10.1145/3620665.3640366 Bankes, S. C. (2002). Agent-based modeling: A revolution? Proceedings of the National Academy of Sciences 99, 71997200. doi:10.1073/pnas.07208-
1299 [Dataset] Baratta, I. A., Dean, J. P., Dokken, J. S., Habera, M., Hale, J. S., Richardson, C. N., et al. (2023). DOLFINx: the next generation FEniCS problem solving environment. preprint. doi:10.5281/zenodo.10447666 Breitwieser, L., Hesam, A., de Montigny, J., Vavourakis, V., Iosif, A., Jennings, J., et al. (2021). Biodynamo: a modular platform for high-performance agent-based simulation. Bioinformatics 38, 453460. doi:10.1093/bioinformatics/btab649 Dutta-Moscato, J., Solovyev, A., Mi, Q., Ni-
shikawa, T., Soto-Gutierrez, A., Fox, I. J., et al. (2014). A multiscale agent-based in silico model of liver fibrosis progression. Frontiers in Bioengineering and Biotechnology 2. doi:10.3389/fbioe.2014.00018 Ghaffarizadeh, A., Heiland, R., Friedman, S. H., Mumenthaler, S. M., and Macklin, P. (2018). Physicell: An open source physics-based cell simulator for 3-d multicellular systems. PLOS Computational Biology 14, e1005991. doi:10.1371/journal.pcbi.1005991 Gorochowski, T. E., Matyjaszkiewicz, A.-
, Todd, T., Oak, N., Kowalska, K., Reid, S., et al. (2012). Bsim: An agent-based tool for modeling bacterial populations in systems and synthetic biology. PLoS ONE 7, e42790. doi:10.1371/journal.pone.0042790 Grimm, V. and Railsback, S. F. (2013). Individual-based Modeling and Ecology (Princeton University Press). doi:10.2307/j.ctt5hhnk8 Jumper, J., Evans, R., Pritzel, A., Green, T., Figurnov, M., Ronneberger, O., et al. (2021). Highly accurate protein structure prediction with alphafold. Nature 59-
6, 583589. doi:10.1038/s41586-021-03819-2 Kang, S., Kahan, S., McDermott, J., Flann, N., and Shmulevich, I. (2014). Biocellion: accelerating computer simulation of multicellular biological system models. Bioinformatics 30, 31013108. doi:10.1093/bioinformatics/btu498 Karolemeas, C., Tsigdinos, S., Moschou, E., and Kepaptsoglou, K. (2024). Shared autonomous vehicles and agent based models: a review of methods and impacts. European Transport Research Review 16. doi:10.1186/s12544-024-00644-2 Linnainm-
aa, S. (1976). Taylor expansion of the accumulated rounding error. BIT 16, 146160. doi:10.1007/bf01931367 Merks, R. M., Guravage, M., Inzé, D., and Beemster, G. T. (2011). Virtualleaf: An open-source framework for cell-based modeling of plant tissue growth and development. Plant Physiology 155, 656666. doi:10.1104/pp.110.167619
Preprint 6

Pleyer et al.
Mulansky, M., Ahnert, K., Simos, T. E., Psihoyios, G., Tsitouras, C., and Anastassi, Z. (2011). Metaprogramming applied to numerical problems. In AIP Conference Proceedings (AIP), 15821585. doi:10.1063/1.3637933
Nagarajan, K., Ni, C., and Lu, T. (2022). Agent-based modeling of microbial communities. ACS Synthetic Biology 11, 35643574. doi:10.1021/acssynbio.2c00411
Pleyer, J. and Fleck, C. (2023). Agent-based models in cellular systems. Frontiers in Physics 10. doi:10.3389/fphy.2022.968409
Pleyer, J. and Fleck, C. (2025). cellular_raza: Cellular agent-based modeling from a clean slate. Journal of Open Source Software 10, 7723. doi:10.21105/joss.07723
Rackauckas, C. and Nie, Q. (2017). Differentialequations.jl–a performant and feature-rich ecosystem for solving differential equations in julia. Journal of Open Research Software 5, 15
Raina, R., Madhavan, A., and Ng, A. Y. (2009). Large-scale deep unsupervised learning using graphics processors. In Proceedings of the 26th Annual International Conference on Machine Learning (ACM), ICML 09, 873880. doi:10.1145/1553374.1553486
Ronneberger, O., Fischer, P., and Brox, T. (2015). U-net: Convolutional networks for biomedical image segmentation. In Medical Image Computing and Computer-Assisted Intervention – MICCAI 2015, eds. N. Navab, J. Hornegger, W. M. Wells, and A. F. Frangi (Cham: Springer International Publishing), 234–241
Rumelhart, D. E., Hinton, G. E., and Williams, R. J. (1986). Learning representations by back-propagating errors. Nature 323, 533536. doi:10.1038/323533a0
Scroggs, M. W., Baratta, I. A., Richardson, C. N., and Wells, G. N. (2022a). Basix: a runtime finite element basis evaluation library. Journal of Open Source Software 7, 3982. doi:10.21105/joss.03982
Scroggs, M. W., Dokken, J. S., Richardson, C. N., and Wells, G. N. (2022b). Construction of arbitrary order finite element degree-of-freedom maps on polygonal and polyhedral cell meshes. ACM Transactions on Mathematical Software 48, 18:1–18:23. doi:10.1145/3524456
Shattock, A. J., Le Rutte, E. A., Dünner, R. P., Sen, S., Kelly, S. L., Chitnis, N., et al. (2022). Impact of vaccination and non-pharmaceutical interventions on sars-cov-2 dynamics in switzerland. Epidemics 38, 100535. doi:10.1016/j.epidem.2021.100535
Sober, E. (2015). Ockham’s Razors (Cambridge, England: Cambridge University Press)
[Dataset] The Royal Swedish Academy of Sciences (2024). The Nobel Prize in Physics 2024. https:
//www.nobelprize.org/prizes/physics/2024/summary/. Awarded to John J. Hopfield and Geoffrey E. Hinton “for foundational discoveries and inventions that enable machine learning with artificial neural networks”
Thompson, A. P., Aktulga, H. M., Berger, R., Bolintineanu, D. S., Brown, W. M., Crozier, P. S., et al. (2022). Lammps - a flexible simulation tool for particle-based materials modeling at the atomic, meso, and continuum scales. Computer Physics Communications 271, 108171. doi:10.1016/j.cpc.2021.108171
Thorne, B. C., Bailey, A. M., and Peirce, S. M. (2007). Combining experiments with multi-cell agent-based modeling to study biological tissue patterning. Briefings in Bioinformatics 8, 245257. doi:10.1093/bib/bbm024
Weller, H. G., Tabor, G., Jasak, H., and Fureby, C. (1998). A tensorial approach to computational continuum mechanics using object-oriented techniques. Computers in Physics 12, 620631. doi:10.1063/1.168744
Werbos, P. J. (1982). Applications of advances in nonlinear sensitivity analysis (Springer-Verlag). 762770. doi:10.1007/bfb0006203
Preprint 7

Pleyer et al.
Wilensky, U. (1999). NetLogo. Center for Connected Learning and Computer-Based Modeling, Northwestern University, Evanston, IL
Preprint 8

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:33.299Z
- **Text Length:** 22743 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 8 of 8
