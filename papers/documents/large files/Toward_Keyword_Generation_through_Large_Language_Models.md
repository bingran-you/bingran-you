# PDF Document: Lee et al. - 2023 - Toward Keyword Generation through Large Language Models.pdf

**File Path:** Lee et al. - 2023 - Toward Keyword Generation through Large Language Models.pdf

**Processed Date:** 2026-02-10T18:15:40.239Z

**File Size:** 556.47 KB

**Total Pages:** 12

**Extracted Pages:** 12

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2834

**Title:** Toward Keyword Generation through Large Language Models

**Collection:** Large Files

---

## Extracted Text Content

☰ Article Navigation
Toward Keyword Generation through Large Language Models
Wanhae Lee (https://orcid.org/0000-0002-1411-0388), Department of Computer Science and
Engineering, University of Seoul, Korea, Republic of, iwanhae@uos.ac.kr (mailto:iwanhae@uos.ac.kr)
Minki Chun (https://orcid.org/0000-0002-0241-9329), Department of Computer Science and
Engineering, University of Seoul, Korea, Republic of, cna81136@uos.ac.kr (mailto:cna81136@uos.ac.kr)
Hyeonhak Jeong (https://orcid.org/0000-0002-2748-8195), Department of Computer Science and
Engineering, University of Seoul, Korea, Republic of, uosmorrie24@uos.ac.kr
(mailto:uosmorrie24@uos.ac.kr)
Hyunggu Jung (https://orcid.org/0000-0002-2967-4370), Department of Computer Science and
Engineering, University of Seoul, Korea, Republic of and Department of Artificial Intelligence, University of Seoul,
Korea, Republic of, hjung@uos.ac.kr (mailto:hjung@uos.ac.kr)
DOI: https://doi.org/10.1145/3581754.3584126 (https://doi.org/10.1145/3581754.3584126)
IUI '23 Companion: 28th International Conference on Intelligent User Interfaces
(https://doi.org/10.1145/3581754), Sydney, NSW, Australia, March 2023
It is essential to understand research trends for researchers, decision-makers, and investors. One way to analyze research trends is to collect and
analyze author-defined keywords in scientific papers. Unfortunately, while author-defined keywords are beneficial to researchers aiming to
figure out the trends of their research fields, 45% of scientific papers in Microsoft Academic Graph did not contain their author-defined
keywords. Additionally, six of the top seven AI conferences neither collect nor disclose keywords. This paper proposes a method for generating
the keywords using Galactica, a pre-trained large language model published by Meta. We evaluate this method's performance by comparing the
keywords provided by authors in the CoRL’22 and report characteristics of the generated keywords. Our study shows the F1 score of our
proposed method was ten times better than that of previous studies, and 42.7% of the generated keywords are relevant to author-defined
keywords.
CCS Concepts: • Computing methodologies →→ Information extraction;
Keywords: keywords, language model, text generation, text mining
ACM Reference Format:
Wanhae Lee, Minki Chun, Hyeonhak Jeong, and Hyunggu Jung. 2023. Toward Keyword Generation through Large Language Models. In 28th
International Conference on Intelligent User Interfaces (IUI '23 Companion), March 27–31, 2023, Sydney, NSW, Australia. ACM, New York,
NY, USA 4 Pages. https://doi.org/10.1145/3581754.3584126 (https://doi.org/10.1145/3581754.3584126)
(http://www.acm.org)
(http://www.acm.org)

1 INTRODUCTION
Research trends provide researchers, decision-makers, and investors with insight into the current and future
direction of a particular field of study. They help researchers identify potential research topics [34], decision
makers identify potential areas of need and focus resources [31], and investors shape their funding portfolios to
support research to address identified gaps in knowledge [1, 21]. One way to identify the research trends is to
analyze the author-defined keywords. For instance, researchers proposed a variety of methods to extract research
trends by leveraging author-defined keywords (e.g., the frequency of the author-defined keywords [20], keyword
network [8]). Prior studies show use cases of keywords to find research trends [32, 33, 35]. Although keywords
are beneficial to researchers aiming to leverage research papers as data for their studies (e.g., exploring research
trends), researchers face challenges in leveraging keywords because not all published articles include author
defined keywords. For example, 45% of the metadata in Microsoft Academic Graph [25], one of the most
authoritative research article databases [14], does not contain keywords [32]. Six of the top seven conferences in
AI, when sorted by h5-index in January 2023 [24], neither collect nor disclose keywords. Previous studies
predicted the keywords of a given paper by examining the keywords of related articles [4, 7] or using keyword
extraction techniques (e.g., natural language processing [2, 10, 16, 17, 22, 29, 30] and deep learning [17, 18]).
Nevertheless, prior studies have three limitations. First, while the concept of "keyness" is not well defined,
previous studies provided their definitions [9]. Second, numerous variables that exist in the natural language were
not considered. Lastly, they did not use a large language model (LLM) that responds to the questions without clear
definitions about a specific concept [6], and handling multiple variables in natural language was not an issue, as
LLM already showed the ability to understand the context [26] and mimic human conversation [13, 27].
This paper proposes a keyword generation method leveraging an LLM and demonstrates the performance of the
method by comparing the performance of our method with existing non-LLM-based methods, KeyBERT [12] and
RAKE [23]. The contribution of this study to the IUI community is that we offered an underlying technology for
an LLM and machine communication regarding keyword generation. Our proposed method is potentially
applicable in various ways, such as visualizing keyword data to analyze research trends to support decision-makers
and providing researchers with generated metadata to support them in conducting their literature review study.
2 PROCEDURE
Figure 1: Overview of the keyword generation procedure.

To create a method generating keywords and evaluate the performance of the method, we went through the
following four steps: (1) model selection, (2) data collection, (3) keyword generation, and (4) evaluation.
Galactica [28], a large language model published by Meta, was used to generate keywords for research papers
published at the Conference on Robot Learning (CoRL) 2022.
2.1 Model Selection
Out of existing LLMs, we determined an LLM suitable for generating keywords for a research paper. First, we
created a list of 42 architectures supported by the Huggingface API [15]. Second, we searched for a published pre
trained model available on architecture on the list. As a result, Galactica was chosen for our keyword generation
task because it was specifically trained with large sets of scientific papers, and the training process is similar to
generating keywords [28].
2.2 Data Collection
To create a method for generating keywords for a research paper, we collected the text of the following items for
each scientific paper: titles, abstracts, and author-defined keywords. The inclusion criteria for research papers are
as follows: (1) The data was generated after July 2022 to ensure that the data is not included in the Galactica
model's training data; (2) The papers are classified as AI papers in Google Scholar ; (3) Title, abstract, and author
defined keywords are open to the public. Papers published at the CoRL’22 conference met our criteria. We
collected the title, abstract, and author-defined keywords of the research papers published in CoRL’22. As a result,
we identified 195 papers, consiting 34 papers accepted in the oral session and 161 in the poster session,
respectively. We excluded two papers accepted to the poster session because they did not contain their keywords.
2.3 Keyword Generation
To automate the process of generating keywords corresponding to the title and abstract of the paper, we used four
models (i.e., Galactica 125M, Galactica 1.3B, Galactica 6.7B, and Galactica 30B) consisting of different amounts of
parameters. The following steps show how our method generates the keywords for each paper (see Figure 1): (1)
obtain string data containing title and abstract information from a source. The string “Keywords:” is attached to
the end of the obtained string to trigger an LLM to generate keywords. (2) generate subsequent sentences of a
given text obtained from the previous step using the Galactica models. We adopted a beam search algorithm for
text generation [11] and used disjunctive positive constraints [19] to make the delimiter “,” and “;” be included
between keywords. (3) examine whether the generated keyword strings are valid. A valid string is a non-empty
string that ends with “</s>”, an end-of-sequence token used in the Galactica model, and follows the regular
expression “[0-9A-z (),.–;’]*”. An empty string array will return if an invalid keyword string is generated. (4)
obtain a string array of keywords by separating the generated keyword string with delimiters “,” or “;”. Finally, (5)
convert upper cases in each keyword string into lower cases and remove all whitespaces at both ends. We obtained
an array of keyword strings from the title and abstract text.
1

2.4 Evaluation
Figure 2: Box-plots describing the distribution of precision and recall values of a Galactica 30B
model's performance with each beam size.

To evaluate the performance of the proposed method, we measured the success rate to see how well an LLM
generates keywords in a given format, evaluated precision, recall, and F1 score to compare with existing methods,
and analyzed the generated keywords to identify the characteristics of the generated keywords. First, to measure
the success rate, we looked at the percentage of papers that produced one or more keywords using different beam
sizes, each of which indicates the number of surviving candidates at each step of the beam search process. We
varied the beam size from 1 (equivalent to a depth-first search) until we identify a combination that generated one
or more keywords for all input data. Second, we measured the precision, recall, and F1 score of our proposed and
existing methods generating keywords. Finally, to figure out the characteristics of the generated keywords, we
manually analyze generated keywords’ characteristics by classifying them into five categories: (1) irrelevant: a
generated keyword is irrelevant to author-defined keywords. (2) minor difference: a generated keyword slightly
differs f distribution of precision androm author keywords. (3) acronym: a generated keyword is an acronym for
author-defined keywords (or vice versa). (4) specific: a generated keyword is more specific than an author-defined
keyword. (5) ambiguous: a generated keyword is more ambiguous than an author-defined keyword. We defined a
relevant keyword as a keyword not classified into any irrelevant keywords.
Table 1: Success rates of keyword generation by each model and beam size. Galactica 30B with beam size 4
succeed in generating keywords from all given articles. BS stands for “beam size.”
Model BS 1 BS 2 BS 3 BS 4
Galactica 125M 36% 93% 97% 98%
Galactica 1.3B 38% 89% 87% 90%
Galactica 6.7B 79% 97% 98% 98%
Galactica 30B 34% 97% 99% 100%
Table 2: Analysis of the relevance of keywords generated by the Galactica 30B model with beam size 3 compared
to author-defined keywords.
Type Relevant Count Percent
Irrelevant No 387 57.3%
Correct Keyword 167 24.7%
Ambiguous 58 8.6%
Minor Difference Yes 48 7.1%
Specific 11 1.6%
Acronym 4 0.6%
Generated Keyword (Total) 675 100.0%
Table 3: Performance comparison of Galactica 30B model with given beam sizes and existing keyword extract
methods.

Generated Keywords Model Performance
Method Total Mean Precision Recall F1 Score
beam size 1 299 1.53 0.231 0.196 0.212
beam size 2 718 3.68 0.224 0.246 0.234
beam size 3 675 3.46 0.247 0.255 0.251
beam size 4 653 3.35 0.239 0.239 0.239
KeyBERT 975 5.00 0.021 0.031 0.025
RAKE 1,950 10.00 0.011 0.034 0.017
3 RESULTS
Our findings revealed that the bigger the parameter size and the larger the beam size generally performed better at
generating one or more keywords, with the exception of Galactica 1.3B (see Table 1). The Galactica 30B model
with a beam size 3 outperformed the others with an F1 score that was more than ten times higher than KeyBERT
and RAKE (see Table 3). As shown in Figure 2, the Galactica 30B model with a beam size of 3 performed better
than other methods in precision. However, its recall value did not change significantly. Also, the model with beam
size 1 achieved high precision and recall even though it often failed to generate keywords. 42.7% of the keywords
generated by the Galactica 30B model with a beam size 3 were relevant to the keywords defined by authors
(see Table 2).
4 DISCUSSION AND CONCLUSIONS
We proposed a method generating keywords for a research paper by leveraging an LLM and text of the titles and
abstracts of published research papers. We determined the model and beam size combination that successfully
generates keywords from all articles. We evaluated the performance of our methods in terms of performance,
accuracy, and F1 score. The analysis of the generated keywords through our method revealed that an LLM has the
potential to generate keywords in a machine-parsable form. Also, this study showed our proposed method
performed ten times better than the existing method, KeyBERT, in terms of the F1 score. 42.7% of the keywords
generated by our method were relevant to the author-defined keywords of the published articles in CoRL’22.
While our method using an LLM tended to show a better performance, it is questionable why more than half of the
generated keywords were irrelevant. We suspected the inconsistent keyword assignment among authors might
cause the issue, as reported in prior studies [3, 5]. Future work still remains to evaluate the feasibility and validity
of our proposed LLM-based method with potential stakeholders, such as researchers, decision-makers, and
investors, to confirm that the method is applicable to a real-world scenario.

ACKNOWLEDGMENTS
This work was supported by the National Research Foundation of Korea(NRF) grant funded by the Korea
government(MSIT) (No. 2020R1G1A1009133).

REFERENCES
[1] José Luis Aleixandre-Tudó, Lourdes Castelló-Cogollos, José Luis Aleixandre, and Rafael Aleixandre
Benavent. 2019. Renewable energies: Worldwide trends in research, funding and international
collaboration. Renewable Energy 139(2019), 268–278.
https://doi.org/10.1016/j.renene.2019.02.079
(https://doi.org/10.1016/j.renene.2019.02.079) Navigate to
[2] S. Anjali, Nair M. Meera, and M.G. Thushara. 2019. A Graph based Approach for Keyword Extraction from
Documents. In 2019 Second International Conference on Advanced Computational and Communication
Paradigms (ICACCP). IEEE, Piscataway, NJ, USA, 1–4.
https://doi.org/10.1109/ICACCP.2019.8882946
(https://doi.org/10.1109/ICACCP.2019.8882946) Navigate to
[3] Saman Behrouzi, Zahra Shafaeipour Sarmoor, Khosrow Hajsadeghi, and Kaveh Kavousi. 2020. Predicting
scientific research trends based on link prediction in keyword networks. Journal of Informetrics 14, 4
(2020), 101079. https://doi.org/10.1016/j.joi.2020.101079
(https://doi.org/10.1016/j.joi.2020.101079) Navigate to
[4] Ido Blank, Lior Rokach, and Guy Shani. 2016. Leveraging metadata to recommend keywords for academic
papers. Journal of the Association for Information Science and Technology 67, 12(2016), 3073–3091.
https://doi.org/10.1002/asi.23571 (https://doi.org/10.1002/asi.23571) Navigate to
[5] Tsair-Wei Chien, Yu Chang, and Hsien-Yi Wang. 2018. Understanding the productive author who
published papers in medicine using National Health Insurance Database: A systematic review and meta
analysis. Medicine (Baltimore) 97, 8 (Feb. 2018), e9967.
https://doi.org/10.1097/MD.0000000000009967
(https://doi.org/10.1097/MD.0000000000009967) Navigate to
[6] John Joon Young Chung, Wooseok Kim, Kang Min Yoo, Hwaran Lee, Eytan Adar, and Minsuk Chang.
2022. TaleBrush: Sketching Stories with Generative Pretrained Language Models. In Proceedings of the
2022 CHI Conference on Human Factors in Computing Systems (New Orleans, LA, USA) (CHI ’22).
Association for Computing Machinery, New York, NY, USA, Article 209, 19 pages.
https://doi.org/10.1145/3491102.3501819 (https://doi.org/10.1145/3491102.3501819)
Navigate to
[7] Sujatha Das Gollapalli and Cornelia Caragea. 2014. Extracting Keyphrases from Research Papers Using
Citation Networks. Proceedings of the AAAI Conference on Artificial Intelligence 28, 1 (June 2014).
https://doi.org/10.1609/aaai.v28i1.8946 (https://doi.org/10.1609/aaai.v28i1.8946)
Navigate to
[8] Arjun Duvvuru, Sagar Kamarthi, and Sivarit Sultornsanee. 2012. Undercovering research trends: Network
analysis of keywords in scholarly articles. In 2012 Ninth International Conference on Computer Science
and Software Engineering (JCSSE). IEEE, Piscataway, NJ, USA, 265–270.
https://doi.org/10.1109/JCSSE.2012.6261963 (https://doi.org/10.1109/JCSSE.2012.6261963)
Navigate to

[9] Nazanin Firoozeh, Adeline Nazarenko, Fabrice Alizon, and Béatrice Daille. 2020. Keyword extraction:
Issues and methods. Natural Language Engineering 26, 3 (2020), 259–291.
https://doi.org/10.1017/S1351324919000457 (https://doi.org/10.1017/S1351324919000457)
Navigate to
[10] Michelle Xiao-Lin Foo, Luca Della Libera, and Ilhan Aslan. 2022. Papr Readr Bot: A Conversational Agent
to Read Research Papers. In Proceedings of the 4th Conference on Conversational User Interfaces (Glasgow,
United Kingdom) (CUI ’22). Association for Computing Machinery, New York, NY, USA, Article 39, 4 pages.
https://doi.org/10.1145/3543829.3544536 (https://doi.org/10.1145/3543829.3544536)
Navigate to
[11] Markus Freitag and Yaser Al-Onaizan. 2017. Beam Search Strategies for Neural Machine Translation. In
Proceedings of the First Workshop on Neural Machine Translation. Association for Computational
Linguistics, Stroudsburg, PA, USA, 56–60. https://doi.org/10.18653/v1/w17-3207
(https://doi.org/10.18653/v1/w17-3207) Navigate to
[12] Maarten Grootendorst. 2020. KeyBERT: Minimal keyword extraction with BERT.
https://doi.org/10.5281/zenodo.4461265 (https://doi.org/10.5281/zenodo.4461265)
Navigate to
[13] Perttu Hämäläinen, Mikke Tavast, and Anton Kunnari. 2022. Neural Language Models as What If? 
Engines for HCI Research. In 27th International Conference on Intelligent User Interfaces (Helsinki,
Finland) (IUI ’22 Companion). Association for Computing Machinery, New York, NY, USA, 77–80.
https://doi.org/10.1145/3490100.3516458 (https://doi.org/10.1145/3490100.3516458)
Navigate to
[14] Anne-Wil Harzing and Satu Alakangas. 2017. Microsoft Academic: is the phoenix getting wings?
Scientometrics 110, 1 (Jan. 2017), 371–383. https://doi.org/10.1007/s11192-016-2185-x
(https://doi.org/10.1007/s11192-016-2185-x) Navigate to
[15] Huggingface. 2023. Auto Classes. https://huggingface.co/docs/transformers/model_doc/auto
(https://huggingface.co/docs/transformers/model_doc/auto) Accessed on 01, 03, 2023.
Navigate to
[16] Selvani Deepthi Kavila and D. Fathima Rani. 2016. Information Extraction from Research Papers Based
on Statistical Methods. In Proceedings of the Second International Conference on Computer and
Communication Technologies, Suresh Chandra Satapathy, K. Srujan Raju, Jyotsna Kumar Mandal, and
Vikrant Bhateja (Eds.). Springer India, New Delhi, 573–580. https://doi.org/10.1007/978-81-322
2526-3_59 (https://doi.org/10.1007/978-81-322-2526-3_59) Navigate to
[17] Muhammad Qasim Khan, Abdul Shahid, M. Irfan Uddin, Muhammad Roman, Abdullah Alharbi, Wael
Alosaimi, Jameel Almalki, and Saeed M. Alshahrani. 2022. Impact analysis of keyword extraction using
contextual word embedding. PeerJ Computer Science 8 (May 2022), e967.
https://doi.org/10.7717/peerj-cs.967 (https://doi.org/10.7717/peerj-cs.967) Navigate to
[18] Soojeong Kim, Sunho Choi, and Junhee Seok. 2021. Keyword Extraction in Economics Literatures using
Natural Language Processing. In 2021 Twelfth International Conference on Ubiquitous and Future
Networks (ICUFN). IEEE, Piscataway, NJ, USA, 75–77.

https://doi.org/10.1109/ICUFN49451.2021.9528546
(https://doi.org/10.1109/ICUFN49451.2021.9528546) Navigate to
[19] Zhongyang Li, Xiao Ding, Ting Liu, J. Edward Hu, and Benjamin Van Durme. 2020. Guided Generation of
Cause and Effect. In Proceedings of the Twenty-Ninth International Joint Conference on Artificial
Intelligence, IJCAI-20, Christian Bessiere (Ed.). International Joint Conferences on Artificial Intelligence
Organization, Somerset, NJ, USA, 3629–3636. https://doi.org/10.24963/ijcai.2020/502
(https://doi.org/10.24963/ijcai.2020/502) Main track. Navigate to
[20] Wei Lu, Shengzhi Huang, Jinqing Yang, Yi Bu, Qikai Cheng, and Yong Huang. 2021. Detecting research
topic trends by author-defined keyword frequency. Information Processing & Management 58, 4 (2021),
102594. https://doi.org/10.1016/j.ipm.2021.102594
(https://doi.org/10.1016/j.ipm.2021.102594) Navigate to
[21] Ilya Rahkovsky, Autumn Toney, Kevin W Boyack, Richard Klavans, and Dewey A Murdick. 2021. AI
research funding portfolios and extreme growth. Front. Res. Metr. Anal. 6 (April 2021), 630124.
https://doi.org/10.3389/frma.2021.630124 (https://doi.org/10.3389/frma.2021.630124)
Navigate to
[22] Eman Y. Rezqa and Rebhi S. Baraka. 2021. Document Classification Based on Metadata and Keywords
Extraction. In 2021 Palestinian International Conference on Information and Communication Technology
(PICICT). IEEE Computer Society, Los Alamitos, CA, USA, 18–24.
https://doi.org/10.1109/PICICT53635.2021.00016
(https://doi.org/10.1109/PICICT53635.2021.00016) Navigate to
[23] Stuart Rose, Dave Engel, Nick Cramer, and Wendy Cowley. 2010. Automatic Keyword Extraction from
Individual Documents. John Wiley & Sons, Ltd, Hoboken, NJ, USA, Chapter 1, 1–20.
https://doi.org/10.1002/9780470689646.ch1 (https://doi.org/10.1002/9780470689646.ch1)
Navigate to
[24] Google Scholar. 2023. Artificial Intelligence - Google Scholar Metrics.
https://scholar.google.es/citations?
view_op=top_venues&hl=en&vq=eng_artificialintelligence
(https://scholar.google.es/citations?
view_op=top_venues&hl=en&vq=eng_artificialintelligence) Accessed on 01, 03, 2023.
Navigate to
[25] Arnab Sinha, Zhihong Shen, Yang Song, Hao Ma, Darrin Eide, Bo-June (Paul) Hsu, and Kuansan Wang.
2015. An Overview of Microsoft Academic Service (MAS) and Applications. In Proceedings of the 24th
International Conference on World Wide Web (Florence, Italy) (WWW ’15 Companion). Association for
Computing Machinery, New York, NY, USA, 243–246. https://doi.org/10.1145/2740908.2742839
(https://doi.org/10.1145/2740908.2742839) Navigate to
[26] Sangho Suh and Pengcheng An. 2022. Leveraging Generative Conversational AI to Develop a Creative
Learning Environment for Computational Thinking. In 27th International Conference on Intelligent User
Interfaces (Helsinki, Finland) (IUI ’22 Companion). Association for Computing Machinery, New York, NY,
USA, 73–76. https://doi.org/10.1145/3490100.3516473
(https://doi.org/10.1145/3490100.3516473) Navigate to

[27] Mikke Tavast, Anton Kunnari, and Perttu Hämäläinen. 2022. Language Models Can Generate Human
Like Self-Reports of Emotion. In 27th International Conference on Intelligent User Interfaces (Helsinki,
Finland) (IUI ’22 Companion). Association for Computing Machinery, New York, NY, USA, 69–72.
https://doi.org/10.1145/3490100.3516464 (https://doi.org/10.1145/3490100.3516464)
Navigate to
[28] Ross Taylor, Marcin Kardas, Guillem Cucurull, Thomas Scialom, Anthony Hartshorn, Elvis Saravia,
Andrew Poulton, Viktor Kerkez, and Robert Stojnic. 2022. Galactica: A Large Language Model for Science.
https://doi.org/10.48550/ARXIV.2211.09085 (https://doi.org/10.48550/ARXIV.2211.09085)
Navigate to
[29] M. G. Thushara, M. S. Krishnapriya, and Sangeetha S Nair. 2017. A model for auto-tagging of research
papers based on keyphrase extraction methods. In 2017 International Conference on Advances in
Computing, Communications and Informatics (ICACCI). IEEE, Piscataway, NJ, USA, 1695–1700.
https://doi.org/10.1109/ICACCI.2017.8126087
(https://doi.org/10.1109/ICACCI.2017.8126087) Navigate to
[30] M. G. Thushara, M. S. Krishnapriya, and Sangeetha S. Nair. 2018. Domain Classification of Research
Papers Using Hybrid Keyphrase Extraction Method. In Recent Findings in Intelligent Computing
Techniques, Pankaj Kumar Sa, Sambit Bakshi, Ioannis K. Hatzilygeroudis, and Manmath Narayan Sahoo
(Eds.). Springer Singapore, Singapore, 387–398. https://doi.org/10.1007/978-981-10-8636-6_40
(https://doi.org/10.1007/978-981-10-8636-6_40) Navigate to
[31] Hai Wang, Zeshui Xu, Hamido Fujita, and Shousheng Liu. 2016. Towards felicitous decision making: An
overview on challenges and trends of Big Data. Information Sciences 367-368 (2016), 747–765.
https://doi.org/10.1016/j.ins.2016.07.007 (https://doi.org/10.1016/j.ins.2016.07.007)
Navigate to
[32] Choujun Zhan, Zhuohui Dong, and Jingxiang Ye. 2018. The evolution of keywords co-occurrence network
based on MAG dataset, 1800–2017. In 2018 IEEE Symposium on Product Compliance Engineering - Asia
(ISPCE-CN). IEEE, Piscataway, NJ, USA, 1–4. https://doi.org/10.1109/ISPCE-CN.2018.8805769
(https://doi.org/10.1109/ISPCE-CN.2018.8805769) Navigate to
[33] Wei Zhang, Qingpu Zhang, Bo Yu, and Limei Zhao. 2015. Knowledge map of creativity research based on
keywords network and co-word analysis, 1992–2011. Quality & Quantity 49, 3 (01 May 2015), 1023–1038.
https://doi.org/10.1007/s11135-014-0032-9 (https://doi.org/10.1007/s11135-014-0032-9)
Navigate to
[34] Qiang Zhou, Jin Pei, Josiah Poon, Alexander Y. Lau, Li Zhang, Yuhua Wang, Chang Liu, and Linfang
Huang. 2019. Worldwide research trends on aristolochic acids (1957–2017): Suggestions for researchers.
PLOS ONE 14, 5 (May 2019), 1–23. https://doi.org/10.1371/journal.pone.0216135
(https://doi.org/10.1371/journal.pone.0216135) Navigate to
[35] Lin Zhu, Xiantao Liu, Sha He, Jun Shi, and Ming Pang. 2015. Keywords co-occurrence mapping
knowledge domain research base on the theory of Big Data in oil and gas industry. Scientometrics 105, 1 (01
Oct. 2015), 249–260. https://doi.org/10.1007/s11192-015-1658-7
(https://doi.org/10.1007/s11192-015-1658-7) Navigate to

FOOTNOTE
Corresponding author.
https://scholar.google.com/ (https://scholar.google.com/)
Permission to make digital or hard copies of part or all of this work for personal or classroom use is granted
without fee provided that copies are not made or distributed for profit or commercial advantage and that copies
bear this notice and the full citation on the first page. Copyrights for third-party components of this work must be
honored. For all other uses, contact the owner/author(s).
IUI '23 Companion, March 27–31, 2023, Sydney, NSW, Australia
© 2023 Copyright held by the owner/author(s).
ACM ISBN 979-8-4007-0107-8/23/03.
DOI: https://doi.org/10.1145/3581754.3584126 (https://doi.org/10.1145/3581754.3584126)
⁎
1

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:40.239Z
- **Text Length:** 26580 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 12 of 12
