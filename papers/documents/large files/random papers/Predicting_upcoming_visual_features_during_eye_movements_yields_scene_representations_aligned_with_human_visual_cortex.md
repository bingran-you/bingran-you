# PDF Document: Thorat et al. - Predicting upcoming visual features during eye movements yields scene representations aligned with h.pdf

**File Path:** Thorat et al. - Predicting upcoming visual features during eye movements yields scene representations aligned with h.pdf

**Processed Date:** 2026-02-10T18:13:55.205Z

**File Size:** 3460.25 KB

**Total Pages:** 28

**Extracted Pages:** 28

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3698

**Title:** Predicting upcoming visual features during eye movements yields scene representations aligned with human visual cortex

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Predicting upcoming visual features during eye movements yields scene
representations aligned with human visual cortex
Sushrut Thorat1, Adrien Doerig1,2, Alexander Kroner1, Carmen Amme1, Tim C. Kietzmann1
1Institute of Cognitive Science, Osnabrück University, Osnabrück 49069, Germany 2Department of Education and Psychology, Freie Universität, Berlin 14195, Germany
Corresponding author: Dr. Sushrut Thorat 50/111, Institute of Cognitive Science, Osnabrück University, Osnabrück 49069, Germany sushrut.thorat94@gmail.com +49541969-3035
Author Contributions: ST, AD, AK, CA, TCK designed research; ST, AD, AK contributed analytic tools; ST performed research; ST analyzed data; ST, AD, AK, CA, TCK wrote the paper.
Competing Interest Statement: The authors declare no competing interests.
Classification: Biological Sciences (Neuroscience), Physical Sciences (Computer Sciences)
Keywords: scene representation, active vision, scanpaths, self-supervised learning, human visual cortex
Abstract
Scenes are complex, yet structured collections of parts, including objects and surfaces, that exhibit spatial and semantic relations to one another. An effective visual system therefore needs unified scene representations that relate scene parts to their location and their co-occurrence. We hypothesize that this structure can be learned self-supervised from natural experience by exploiting the temporal regularities of active vision: each fixation reveals a locally-detailed glimpse that is statisti-
cally related to the previous one via co-occurrence and saccade-conditioned spatial regularities. We instantiate this idea with Glimpse Prediction Networks (GPNs)—recurrent models trained to predict the feature embedding of the next glimpse along human-like scanpaths over natural scenes. GPNs successfully learn co-occurrence structure and, when given relative saccade location vectors, show sensitivity to spatial arrangement. Furthermore, recurrent variants of GPNs were able to integrate informatio-
n across glimpses into a unified scene representation. Notably, these scene representations align strongly with human fMRI responses during natural-scene viewing across mid/high-level visual cortex. Critically, GPNs outperform architectureand dataset-matched controls trained with explicit semantic objectives, and match or exceed strong modern vision baselines, leaving little unique variance for those alternatives. These results establish next-glimpse prediction during active vision as a biological-
ly plausible, self-supervised route to brain-aligned scene representations learned from natural visual experience.
Significance statement
While humans actively explore scenes with their eyes, current AI vision models largely ignore this dynamic process. We show that a neural network, trained to predict the visual content of the next eye fixation, develops internal representations that closely resemble those found in the human brain. Our model, which learns without any human labels, outperforms models trained on object recognition or image captions in matching fMRI data from people viewing scenes. This finding suggests that the brain-
’s rich scene understanding may arise from predicting sequential visual experience. Additionally, the work opens a biologically inspired route to build AI that sees and understands the world more like we do.
1

Introduction
The advent of neuroconnectionism in the past decade delivered image-computable models of visual-cortex representations of natural object images (Richards et al., 2019; Doerig et al., 2023). While most prior success was reported for representations of single (natural) objects (e.g., Yamins & DiCarlo, 2016), natural scenes pose a tougher challenge. Scenes contain multiple objects, occlusions, surfaces, and backgrounds, all of which are in spatial and semantic relations with each other (Peelen & Down-
ing, 2017; Epstein & Baker, 2019). What approach could yield neural networks that are able to unify these scene parts and their relations into brain-aligned scene representations?
Recent studies turned to large-language model (LLM) embeddings of scene captions. These embeddings contain information of namable scene parts and their relations, which were used as a supervised learning target. Networks trained with this objective acquired representations that aligned better with scene representations across visual cortex than object-classification networks (Wang et al. 2023; Doerig et al. 2025). Yet, two issues with this approach remain. First, the LLM embeddings are themselves -
based on large amounts of training data, raising questions about their biological plausibility (Frank, 2023). Second, LLM embeddings were also shown to align with scene representations of macaques, who do not have access to complex language (Conwell et al. 2025). These observations raise the question of how such rich, brain-aligned scene representations could be learned without language.
We propose that an answer lies in the information available to the brain during active vision. Humans explore the world through sequences of fixations, with each fixation delivering a high-resolution glimpse of a part of the visual scene in front of us (Yarbus, 1967). Sequences of glimpses are rich sources of information. For example they encode co-occurrence statistics of scene parts (e.g., tiles → sink is likely; tiles → whale is not; Kaiser et al. 2019) as well as information about their spatia-
l arrangement, conveyed by saccadic efference copies (e.g., from a car, an upward eye movement tends to reveal sky, not road; Summerfield et al., 2020). To induce these statistics into neural networks, we take inspiration from computational work on structure discovery in sequences (Elman, 1990): we propose that predicting the visual features of the upcoming glimpse could serve as a meaningful objective, as it requires knowing what scene parts could occur next given the saccade. Additionally, recur-
rence could help build a unified scene representation: executing sequential predictions may benefit from the ability to integrate information over glimpses in order to improve future predictions. Following this logic, we hypothesized that predicting the next glimpse features with a recurrent architecture may constitute an objective that would lead to rich, unified, scene representations.
To test this hypothesis, we designed Glimpse Prediction Networks (GPNs): recurrent deep neural networks trained to predict the post-saccadic features—operationalized as high-level embeddings of glimpse pixels from pretrained networks—in human-like glimpse sequences over natural-scene images. Model variants include GPNs with/without recurrence and with/without saccadic information. We report that GPNs are able to acquire knowledge of feature co-occurrence and, when saccade information is made avail-
able, spatial arrangement of natural scene parts. With recurrence, they can infer and integrate such relationships across parts in novel scenes. Importantly, while being trained in an entirely self-supervised manner, GPNs’ internal representations are found to align well with scene representations in human visual cortex, better than data/parameter-matched networks supervised to predict caption embeddings, and state-of-the-art vision and vision-language neural networks. These findings highlight a b-
iologically meaningful path towards self-supervised models of human scene representation.
2

Results
Glimpse Prediction Networks (GPNs) implement a contrastive objective (Oord et al., 2018; Bakhtiari et al., 2021) with the aim of predicting the (high-level) embedding of the next saccade target (glimpse), given a sequence of prior fixations and saccadic efferent copies (inter-glimpse displacements). That is, the generated prediction should be closer (in cosine similarity terms) to the embedding of the next glimpse and farther from the embeddings of other glimpses from the same scene or other scene-
s. To better understand the impact of the various ingredients, GPN variants were created using a 2x2 design with the factors recurrence (presence denoted as R, implemented as a LSTM or its non-recurrent equivalent), and saccade target location (presence denoted with S), implemented as a 2D displacement vector from the center of the given glimpse to the center of the next glimpse (Figure 1A). The model variant with neither recurrence nor saccadic efferent copies was denoted B (baseline). Human-like-
 input glimpse sequences were modeled using DeepGaze3 (Kümmerer et al., 2022), over Common Objects in Context (COCO) scene images (Lin et al., 2014). To obtain a high-level embedding of the glimpses, we used a self-supervised SimCLR-trained ResNet50, but note that similar results can be obtained with other supervised and self-supervised backbones (RN50-ILSVRC and DiNOv2-B; see Figures S1 & S2).
GPNs learn the spatial co-occurrence of scene parts and integrate across them
To first ensure that GPNs produce meaningful predictions, we qualitatively assessed the behavior of GPN-RS, the variant with the lowest prediction loss, on held-out COCO scenes (‘test-515’). As seen in Figure 1B (examples across variants in Figure S1), an input embedding of a glimpse containing an elephant’s face, accompanied by a saccade towards the bottom-right, led the GPN to predict an embedding that aligned best with a glimpse containing the trunk and feet of the same elephant (across all gli-
mpses from all held-out scenes). In another scene, a bottom-left saccade from a glimpse containing some clouds in the sky led the GPN to predict an embedding that aligned best with a glimpse from a plausible train-scene. After receiving the subsequent glimpse input, containing the body of a bus, along with a bottom-right saccade, its prediction corrected, aligning best with a glimpse containing a tire of that bus. These examples suggest GPN-RS successfully learned about the co-occurrence and spati-
al arrangement of glimpse features in natural scenes.
To quantify this learning of glimpse co-occurrence, due to training for glimpse predictions, we compared the alignment of the GPN predictions, given the first glimpse, with other glimpses from the same scene and with glimpses from the other scenes. Indeed, paired tests revealed a higher alignment for other glimpses from the same scene than glimpses from other scenes for all GPN variants (mean difference of
cosines, ￼ > 0.41, Wilcoxon signed-rank tests: W = 0, FDR-adjusted p = 5.9 × 10-8; N = 25 batches of 206 glimpse sequences each; Figure 1C). Additionally, the cosine similarity of the GPNs’ predictions to
the embedding of the input glimpse was much lower than 1 (￼ ￼ > 0.34, Wilcoxon signed-rank tests: W = 0, FDR-adjusted p = 5.9 × 10-8), and the prediction’s similarity to embeddings of glimpses from other scenes was close to zero ( < 0.002 for the GPNs, but = 0.37 for ‘Input’—a baseline condition revealing effects expected given the cosine similarities amongst the input glimpse embeddings). These results suggest GPNs learned a transformation that effectively orthogonalized glimpses from different s-
cenes while maintaining similarity between glimpses within scenes, a sign that they accounted for the co-occurrence of glimpses.
To quantify the learning of glimpse spatial arrangements due to saccadic information, we compared the alignment of the GPN predictions, given the first glimpse, with the next glimpse and with other glimpses from the same scene. Indeed, a 2x2 (recurrence x saccade presence) repeated measures test revealed a main effect of saccades (W = 0, Holm-adjusted p = 1.7 × 10-7; no interaction with recurrence, W = 152, Holm-adjusted p = 0.79; and no main effect of recurrence, W = 97, Holm-adjusted p = 0.16; F-
igure 1C).
3

After accounting for (i.e. subtracting) the cosine similarities expected from Input, we found better alignment with the next glimpse than other glimpses from the same scene for GPNs-RS/S (averaged
differences across variants; mean difference of cosines, = 0.11, W = 0, FDR-adjusted p = 1.2 × 10-7)
but not for GPNs-R/B ( = 4.6 × 10-4, W = 161, FDR-adjusted p = 0.98). These results suggest that, with access to saccades, GPNs successfully learned a transformation accounting for the spatial arrangement of glimpses in scenes.
Figure 1. Glimpse Prediction Networks (GPNs) and their behavior. (A) GPNs took glimpse embeddings, and predicted the next glimpse embeddings in a sequence, with optional access to saccades (S) and recurrence (R). They were trained with a contrastive prediction loss. (B) On held-out COCO test scenes, the GPN-RS-SimCLR next-glimpse embedding predictions aligned best with embeddings of co-occurring glimpses adhering to the spatial arrangement signaled by the saccade (e.g. feet of the elephant are pre-
dicted to be bottom-right of its face). (C, left) Across all COCO test scenes, given the central glimpse (#0), the GPN predictions had higher cosines to embeddings of other glimpses from the same scene than to embeddings of glimpses from other scenes (which were orthogonalized; not expected given the Input), signaling co-occurrence learning. The provision of saccades made the predictions better aligned with next-glimpse embeddings than to embeddings of other glimpses from the same scene, signaling-
 spatial arrangement learning. (C, right) The prediction loss decreased with increasing exposure to glimpses for GPNs with access to recurrence, signaling integration of information across glimpses. ‘Input’ refers to the condition where an identity transformation was assumed to reveal cosine similarities expected given the input glimpse embeddings. Error bars show 95% CIs (although here they are miniscule).
4

An important design aspect towards learning unified scene representations was the inclusion of recurrence, which was expected to enable GPNs to integrate information across glimpses in service of improving future glimpse predictions. Starting with the GPNs without recurrence, GPNs-B/S, we observed
that the prediction loss varied with glimpse number (Friedman tests, >= 59, FDR-adjusted p = 1.3 × 10-11) and was lowest for the first, central, glimpse (reflecting Input statistics). The addition of recurrence resulted in a prediction loss that was lower compared to the corresponding non-recurrent GPNs, an effect that became increasingly evident with increasing glimpse number (Wilcoxon signed-rank comparisons
over loss difference correlations with glimpse number; GPN-RS vs GPN-S: mean = 0.79, W = 0,
FDR-adjusted p = 1.1 × 10-7; GPN-R vs GPN-B: = 0.39, W = 37, FDR-adjusted p = 3.3 × 10-4). These results suggest that, with access to recurrence, GPNs learned a transformation that drove information integration across glimpses in scenes.
To further assess the properties of the observed integration across glimpses, we conducted an analysis on artificial scenes that violated natural spatial co-occurrence statistics. This revealed that GPN-RS had acquired the ability to integrate information over arbitrary scenes by learning to path integrate the saccades and associate glimpse embeddings with their absolute locations (Figure S3) - a notable ability that goes beyond statistical co-occurrence learning, pointing towards GPNs-RS’s abilit-
y to perform in context learning (Brown et al., 2020).
Taken together, our analyses suggest that GPNs learned transformations that contextualized the glimpse embeddings by including: (i) across scenes, information about co-occurrence, and spatial arrangement (given saccades), of scene parts, and (ii) integrated information across glimpses seen in the current scene (given recurrence). Based on these observations, we consider that the sequences of glimpse embeddings were transformed into more holistic scene representations.
GPN internal representations align with scene representations in visual cortex
Given that the GPN internal representations could be characterized as scene representations that contextualise and integrate scene parts, we assessed if those representations could serve as models of natural-scene representation in the human visual cortex. Scene representations were obtained from the Natural Scenes Dataset (NSD; Allen et al., 2022). We considered the special-515 COCO scenes that all participants observed. Importantly, GPNs were not trained on these scenes. To assess the alignment -
of the internal representations of the GPNs with representations in the visual cortex, we conducted representational similarity analyses (RSA; Kriegeskorte & Mur, 2008). Across scenes, for a given glimpse number in the sequences and a layer of a given GPN, we computed a representational dissimilarity matrix (RDM) and compared it with an RDM of a given region-of-interest (ROI) in the brain. RDM agreement was assessed via non-negative linear regression, as seen in Figure 2A, and we report the varian-
ce of the ROI RDM explained by the GPN RDM. We primarily focus on the alignment of GPN representations to the representations observed in the high-level ventral stream ROI, which subsumes high-level object and scene areas, such as the PPA (Epstein & Kanwisher, 1998; ‘ventral’ ROI from the NSD streams definition; hereafter termed ventral visual cortex, VVC).
We started by characterizing the influence of the various GPN components (saccades, recurrence, and backbones) on VVC-alignment. For this, we computed the best alignment score for each GPN variant and backbone across all glimpse numbers and layers (detailed results in Table S5). The degree of VVC-alignment depended on an interaction of the inclusion of recurrence and saccades, and the
backbone (2x2x3 repeated-measures analysis; 3-way interaction: = 14.3, p = 8 × 10-4; Figure 2B, left
panel), with an overall positive reliance on recurrence (main effect; mean difference, = 0.028, W = 0,
5

Holm-adjusted p = 0.02) and, interestingly, a negative reliance for saccadic information ( = -0.026, W = 0, Holm-adjusted p = 0.02). This negative influence of saccades was found throughout the brain, as indicated by a searchlight analysis that revealed GPN-R-SimCLR to be in better alignment than GPN-RS-SimCLR across the whole brain (Figure S4). Importantly, for each GPN variant and backbone, the best alignment score was higher than the maximum alignment of their input glimpse embeddings
(denoted by black dotted lines in Figure 2B; across all GPNs, > 0.04, W = 0, FDR-adjusted p = 0.0078). These results suggest that the GPNs, taking the co-occurrence of scene parts into account and integrating information across them, did transform glimpse embeddings into scene representations aligned with representations of full natural scenes in the ventral visual cortex.
Next, to assess if the glimpse prediction objective, as opposed to the dataset (NSD images were taken from COCO, which could have better aligned the non-COCO trained backbone embeddings) and architecture (additional layers and recurrence, which could have increased expressivity), was essential for achieving the increased degree of representational alignment with VVC, we trained equivalent Glimpse Stitching Networks (GSNs) with two previously-studied objectives (Doerig et al., 2025), while keeping -
the architecture and dataset matched to the most VVC-aligned, GPN-R-SimCLR. Classification-GSN (cGSN) was trained to categorize the objects in the scene, and Semantic-GSN (sGSN) was trained to predict the semantic embeddings (MPNet-based) of the corresponding scene captions. As seen in Figure 2B (left panel), both the GSN variants exhibited lower VVC-alignment than GPN-R-SimCLR (cGSN: mean
difference, = 0.088, W = 0, FDR-adjusted p = 0.0078; sGSN: = 0.075, W = 0, FDR-adjusted p = 0.0078). This result highlights the utility of the glimpse prediction objective, rather than the dataset or architecture changes, in acquiring scene representations aligned with the ventral visual cortex.
To assess how the VVC-alignment of the GPNs compared to related and state-of-art approaches, we benchmarked the VVC-alignment across a large number of alternative models. First, we considered self-supervised vision network families that were trained with objectives that fostered learning part-whole relationships by aligning representations across image parts (DINO, Caron et al., 2021; iJEPA, Assran et al., 2023; MAE, He et al., 2022). Second, we considered visuo-semantic network families that were-
 trained to align visual representations of scenes with representations of their corresponding captions (CLIP, Radford et al., 2021; SigLiP2, Tschannen et al. 2025; BLT_MPNet, Doerig et al., 2025). Third, we considered network families with state-of-art alignment with occipitotemporal cortex (Conwell et al., 2024; EfficientNet, Tan & Le, 2019; LeViT, Graham et al. 2021; HardCoReNAS, Nayman et al., 2021). Fourth, we considered the three backbone variants used for GPN (RN50-ILSVRC, RN50-SimCLR, and -
DiNOv-B) and DeepGaze3 (the generation of human-like fixations could involve human-like scene representation), as strong baselines. For each family of networks, we report the best observed alignment score across all networks and their corresponding layers in those families (Figure 2B, left panel). To account for the possibility that a central glimpse might provide better alignment than the full scene (the typical input), given that the participants fixated centrally in the NSD experiment, we furth-
ermore report the maximum score across the full scene vs central glimpse comparisons for all alternative models.
GPN-R with the SimCLR backbone achieved the highest VVC alignment overall (Figure 2B). Amongst all alternative models tested, an EfficientNet (B3 variant, trained for image classification on the ILSVRC dataset), presented with the central glimpse, was best aligned with VVC scene representations (alignment results for all the networks tested can be seen in Table S5). Amongst the self-supervised networks, a DINO-trained network (DINOv2-ViT-L14 variant) was the best-aligned. Yet, GPNs-B/R with the Si-
mCLR backbone had significantly higher alignment than both of these networks (mean differences across
comparisons of GPN variants and backbones with the two best networks, > 0.028, W = 36, FDR-adjusted p = 0.016). In sum, the scene representations emerging due to the glimpse prediction
6

objective, given the SimCLR backbone, surpassed the state-of-the-art models of scene representations in the ventral visual cortex.
Figure 2. Alignment of GPNs and state-of-art models to scene representations in ventral visual cortex (VVC). (A) Representational dissimilarity matrices (RDMs) were computed from scene representations in VVC and the networks. Alignment was quantified as the variance of VVC RDM explained by a model RDM via non-negative linear regression. (B, left) GPNs had higher alignment than their input glimpse embeddings (dotted black lines). Amongst the GPNs, GPN-R-SimCLR had the highest VVC-alignment. Overall-
, recurrence helped but saccades hurt the alignment. GPN-R-SimCLR alignment was higher than Glimpse Stitching Networks (GSNs) trained with the same architecture but different objectives: to predict the classes of objects in the scenes (cGSN) or semantic embeddings of scene captions (sGSN). A large number of state-of-the-art models had lower VVC-alignment than the GPNs-B/R-SimCLR (highest alignment across those models, for EfficientNet-B3, is indicated by the dashed red line). Moreover, other model-
s explained little to no unique variance over that explained by GPN-R-SimCLR (right axis, square markers). (B, right) Already for the first glimpse, the VVC-alignment of GPN-R-SimCLR’s LSTM output was almost twice the alignment of its glimpse input. This alignment increased with further exposure to glimpses in the sequences. Error bars indicate 95% CIs.
Although GPN-R-SimCLR explained the most variance in VVC amongst all the networks tested, it could have been the case that it explained different variance to the alternative models, as the objectives, architectures, and training datasets exhibit substantial variation. To assess this possibility, we conducted
7

variance-partitioning analyses. As seen in Figure 2B (left panel, right y-axis), the highest unique variance explained by any other network (over GPN-R-SimCLR), was observed for EfficientNet ( = 0.019, W = 0, p = 0.007). Yet, 90% of variance explained by EfficientNet was accounted for by the GPN. The unique variance explained by the other networks was much lower, and we did not find evidence for cGSN and sGSN explaining any unique variance ( < 4 × 10-4, W = 0, FDR-adjusted p = 0.33). In sum, GPN--
R-SimCLR largely subsumed the variance explained in VVC by alternative, large-scale networks, which had access to the full scene images (during training and test) and in some cases access to rich semantic information through scene captions.
To test whether the high GPN alignment is specific to VVC, we extended our analysis to the other NSD streams ROIs: early, midventral, midlateral, lateral, midparietal, and parietal. First, for GPN-R-SimCLR,
the increase in alignment over input glimpse embeddings held across these ROIs ( > 0.012, W = 0, FDR-adjusted p = 0.0078; Figure S7). Second, GPN-R-SimCLR showed higher alignment than the GSNs
across these ROIs (vs. max GSN alignments, > 0.0058, W < 2, FDR-adjusted p < 0.015; Fig. S7). Third, relative to the best-aligned alternative model for each ROI, GPN-R-SimCLR was higher in
midparietal and parietal ROIs ( > 0.01, W < 3, FDR-adjusted p < 0.05), similar in midventral, midlateral,
and lateral ROIs ( > −0.0075, W > 3, FDR-adjusted p > 0.082), and lower only in the early ROI ( = −0.06, W = 0, FDR-adjusted p = 0.023; Fig. S7)—understandably, as alternative models could better capture low-level features. Finally, in midparietal and parietal ROIs, where GPN-R-SimCLR surpassed
alternatives, it explained 88% of the total variance explained by any other model (Fig. S7). These results indicate that the glimpse-prediction objective yields scene representations aligning with large swaths of mid/high-level visual cortex, outperforming parameter- and dataset-matched controls and matching or exceeding strong large-scale baselines, subsuming most of the variance they explain.
Having observed that GPN-R-SimCLR, trained in a self-supervised fashion, marks the new state of the art in scene representation alignment for NSD, we asked which layer, and hence computation, drives this effect. As seen in Figure 2B (right panel), the RDMs of ‘glimpse_input’ accounted for ~10% of the variance of VVC RDMs. For the first (central) glimpse, the LSTM output (lstm_out) nearly doubled this alignment (mean increase Δ = 0.099, W = 0, N = 8, p = 0.0078). With additional glimpses, the align-
ment of lstm_out increased further (mean Spearman rho between the alignment gain and glimpse number, = 0.97, W = 0, p = 0.0078). Notably, this increase in alignment was higher than expected by sequential averaging of glimpse input representations (‘glimpse_seqadd’, reminiscent of building sentence embeddings from word embeddings; comparison of the maximum alignment of ‘lstm_out’ vs
‘glimpse_seqadd’: = 0.127, W = 0, p = 0.0078). Critically, the best alignment was found at the LSTM output layer, which outperformed both the input and the prediction output layer (e.g., at glimpse #5, the prediction layer alignment was lower than lstm_out; Δ = 0.04, W = 0, p = 0.0078). Intermediate layers did not show comparable gains. We observed such maximum VVC-alignment in the LSTM output layer across all the GPN variants and backbones (Figure S8; and also the midparietal/parietal ROIs, see F-
igure S7). In sum, GPNs transform input glimpse embeddings into a mid/high-level visual-cortex-aligned internal state, optimized for a prediction of the next-glimpse embedding.
Discussion
By taking stock of information available to the primate visual system, we here presented a self-supervised learning objective that predicts a high-level embedding of the next-glimpse in a sequence of human-like eye-movements. This approach, termed Glimpse Prediction Networks (GPNs), resulted in networks that successfully internalize the co-occurrence of scene parts and their spatial arrangement, and that integrate information across glimpses into a rich scene representation. Remarkably, these emer-
gent representations outperformed their input-glimpse features in their alignment with scene representations
8

across visual cortex, as well as Glimpse Stitching Networks trained to predict scene objects or caption embeddings, and in mid/high-level visual cortex, equated or outperformed previously reported state-of-the-art ventral stream models, including large-scale foundation models.
The most intriguing finding of the current study was that the variance in ventral visual cortex (VVC; as well as midparietal/parietal) scene representations explained by diverse models, supervised, self-supervised, vision-only, and visuo-semantic, was largely subsumed by that explained by the best-aligned GPN (GPN-R-SimCLR). This suggests that the shared variance chiefly hinges on what GPN-R-SimCLR captured: co-occurrence of scene parts and an integration across them. This convergence suggests a c-
ommon structure for cortical scene representation alignment across current models (Huh et al,. 2024). Notably, the results suggest that previously reported LLM–brain alignment (Wang et al. 2023; Doerig et al. 2025) might be mediated primarily by co-occurrence structure - the same signals that underpin distributional semantics in language models that emerge through a similar objective: next-token prediction (Harris, 1954; Mikolov et al., 2013; Brown et al., 2020).
An unexpected result was that adding the saccade signal reduced GPN alignment with scene representations, across the brain, in NSD. Although ventral stream responses are sensitive to object co-occurrence (Bar & Aminoff, 2003; Bonner & Epstein, 2021) and to spatial arrangement (Kaiser & Peelen, 2018), GPN–VVC alignment did not improve when the model was given saccades that introduce spatial-arrangement information. This holds true for the parietal ROI too which overlaps with PPC/IPS that are sensit-
ive to relative positional and configural information (Chafee et al., 2007; Ayzenberg & Behrmann, 2022). This result either reflects (i) limited spatial-arrangement information in NSD responses (due to the participants’ central fixation and sparse memorization tasks) or (ii) a mismatch between how GPNs encode spatial arrangement and how cortex does. Disambiguating these accounts is an important next step towards improving these models of visual cortex scene representation, which, despite setting a-
 new state of the art, currently explain less than half of the variance shared across participants.
In sum, by highlighting the utility of predicting upcoming features during eye movements, our results point towards the next generation of self-supervised models of human cortical scene representation: networks based on the general principle of discovering the structure of the world through temporal, sensorimotor predictions (Elman, 1990; O'regan & Noë, 2001; LeCun, 2022). The success of GPNs originates from taking stock of the signals available to the visual system, rather than following the ‘com-
putational opportunism’ of testing large-scale models engineered towards AI performance, and thereby underlines the importance of cognitive computational neuroscience to emancipate itself, at least to a degree, from AI engineering (Linsley et al., 2025).
Materials and Methods
Network architectures
Glimpse Prediction Networks (GPN)
Given an ordered sequence of fixations and the associated glimpse { , }, and a backbone , GPNs predict the backbone’s embedding of the next glimpse, i.e.
,
where S controls if the saccade vector (inter-glimpse displacement) is available, and R controls if the previous hidden state is available. If R is True, GPN contains a LSTM with 3 layers with hidden-size of 1024 (implemented with the PyTorch LSTM class; Paszke et al., 2019). If False, it instead contains the forward pass of the same LSTM with the recurrent components set to zero. The glimpse embedding and saccade vector were transformed to 512D each, concatenated, and passed on to the LSTM. The L-
STM
9

output was projected to a 341D hidden layer, from which a projection served as the prediction. Layer-norm was used on all layers except the LSTM layers (but it was used on the LSTM output). Dropout was used in all the glimpse representations and in the LSTM. ReLU was used on all non-LSTM layers except the prediction layer.
Glimpse Stitching Networks (GSNs) used the same architecture, but different prediction output sizes, corresponding to their targets—caption embedding for Semantic-GSN (sGSN) and multihot object classification for Classification-GSN (cGSN). Additionally, for cGSN—which predicts multihot labels of objects in the COCO scenes—no layernorm was used on the prediction layer. The “stitching into a target representation, using recurrent networks” process was inspired by previous work (Thompson et al., 2024-
).
GPN architecture search
The aforementioned architectural configuration was decided by running a hyperparameter sweep over the
#layers (1, 3, 5) and hidden size (512, 1024, 2048) of the LSTM, and the input ( ) and LSTM dropout (
) parameters (0,1, 0.25, 0.5), to optimize the prediction loss for GPN-RS-ILSVRC on the ‘train’/’val’ sets. For all the other GPNs (and for the GSNs), the dropout parameters alone were optimized for lowering prediction loss on the ‘train’/’val’ set. The dropout parameters chosen for each GPN/GSN are listed in Table S5. Final training was performed on the larger ‘train-515’ set and evaluation was carried out on the ‘test-515’ set.
To verify the validity of the trained GSNs, we assessed their VVC-alignment. First, as seen in Figure 2B, we note that the GSNs replicated a previously-reported finding: the caption embedding prediction objective (sGSN) yielded better alignment with VVC than the object class prediction objective (cGSN;
mean difference, = 0.017, W = 0, p = 0.0078; Doerig et al., 2015). Additionally, the degree of
VVC-alignment of sGSN was comparable (slightly higher, = 0.02, W = 0, p = 0.0078) to the previously-reported alignment based on a different recurrent architecture trained only on full COCO scenes (BLT_MPNet).
Network objectives
Contrastive prediction loss
A contrastive prediction loss was used to train the GPNs, as shown in Figure 1A. The positive and negative pairs were sampled from a batch of glimpse sequences from randomly-selected scenes (ordered to form an epoch). Cosine similarity to the target glimpse embedding was maximized, whereas the cosine similarity to the embeddings of other glimpses from the same sequence and glimpses from other sequences was minimized, with equally shared weighting of the average similarities. To avoid minimizing si-
milarity to instances of glimpse refixation, we filtered out negative pairs with cosine similarities higher than 0.999.
For sGSN, a cosine similarity loss was used to maximize the alignment to the target caption embedding and minimize the alignment to other scenes’ caption embeddings. For cGSN, Binary-Cross-Entropy (BCE) loss with the multihot target vectors was minimized.
Training details
The learning rate was reduced on the plateau of the training loss, until it reached 10-8, when training was stopped. However, prior to this, if the validation loss increased by more than 1% from the minimum validation loss recorded, training was stopped. The checkpoint with the lowest validation loss was saved.
10

Image datasets
COCO scenes & glimpses
Scene images were taken from the 2017 train split of the Common Objects in Context (COCO) dataset. 256px central crops were considered after scaling the smallest side of each image to 256px. DeepGaze3 was used to sample 10 fixation sequences for each scene (both the order of fixations and the prior distribution of fixations across scenes positively influenced the VVC-alignment results for GPN-R-SimCLR shown in Figure 2B; see Figure S9). Each sequence contained 7 fixations, all starting at the cent-
er of the images. 91px glimpse crops were extracted centered on these fixations, corresponding to a 3-degree window (approximately the full-width at half-maximum, FWHM, of retinal cone density; see Figure 5 from Legras et al., 2018), assuming the image extended 8.4 degrees of visual field (corresponding to the display parameters from NSD). Semantic embeddings of the captions of the COCO scenes were obtained through MPNet (768D; details in Doerig et al. 2025). Multihot labels signaling the presence-
 of 91 object classes in the scenes were also obtained from the COCO dataset.
The data was split into three sets: ‘train’ with ~43k, ‘val’ with ~2k, ‘test’ with the ~73k COCO scenes that are part of NSD (following Doerig et al., 2025). We also created two more splits, ‘train-515’ with ~115k scenes (pooling from ‘train’ and ‘test’) and ‘test-515’ with the special-515 scenes that each participant saw thrice in NSD. The original, smaller, train/val splits were used for running fast hyperparameter sweeps. The ‘train-515’ split was created to train GPNs/GSNs with the maximum amo-
unt of data available that does not overlap with the test set of interest—the special-515 scenes from NSD.
Backbone feature encoders
Three encoders were used to extract high-level embeddings of these glimpses: Resnet-50 trained on ILSVRC dataset to classify images (v1; He et al., 2016) and one trained with SimCLR (Chen et al., 2020), and a ViT trained with DINO on LVD-142M (v2, B/14; Oquab et al., 2023). The AvgPool layer responses of the ResNets (2048D), and the output embedding of DINO (768D), were used as glimpse embeddings.
Prediction was conducted in high-level embedding space, as opposed to directly on glimpse pixels, as pixel-based prediction would require a much larger generative network and has been shown to rely on features uninformative for high-level perception of objects (Balestriero & LeCun, 2022; 2024). Pretrained backbones were used, as training the backbone with our procedure did not yield meaningful behavioral and neural alignment results, possibly owing to poor feature learning due to low diversity of -
the COCO images (~115k images), as compared to ILSVRC (~1M images) or LVD-142M images that the backbones were trained on.
Behavioral analysis
To assess if the GPNs were sensitive to co-occurrence and spatial arrangement of glimpses in natural scenes, and if they could integrate information across glimpses to improve future predictions, we compared the GPN predictions with the relevant target glimpse embeddings. For example, a sensitivity to co-occurrence was indicated by the prediction being better aligned (higher cosine similarity) with embeddings of glimpses from the same scene than from other scenes. These comparisons were conducted -
within batches of glimpse sequences over the ‘test-515’ scenes. In total, we used 5150 glimpse sequences (10 per scene) which were distributed randomly into 25 batches of 206 glimpse sequences each.
Brain alignment analysis
11

Natural Scenes Dataset
Neural scene representations were acquired from the Natural Scenes Dataset (NSD). Each of the 8 participants saw up to 10,000 scene images, performing a long-term continuous recognition task. For our analyses comparing GPNs and other models to brain representations, we used the set of 515 scene images that all 8 participants saw three times. Each of the 8 participants’ betas (from condition-tied GLMs conducted on the BOLD responses) were transformed to the ‘fsaverage’ space, and betas were acquire-
d from 7 regions-of-interest (ROIs) from the streams definition, provided in NSD—early, midlateral, midventral, midparietal, ventral, lateral, and parietal. Their definitions, from the NSD manual, can be found in the SI Appendix. Betas were averaged across those repeats to get more robust estimates of neural response.
Alignment based on linear regression
To assess the representational alignment between the representations from a brain ROI and a network layer, representational similarity analysis (RSA) was used, which quantifies the alignment between representational geometries i.e. the alignment of principal dimensions of representational variation. Representational dissimilarity matrices (RDMs) were computed from the ROI betas and from the network layer, using pairwise Pearson correlation distances, for the special-515 scenes. The alignment was c-
omputed using non-negative linear regression (scikit-learn, positive=True; Pedregosa et al. 2011), as
shown in Figure 2A. Specifically, the lower triangle of each RDM was flattened, standardized ( , ), and the linear regression parameters were fitted to minimize the squared error with respect to the flattened lower triangle of the ROI RDM. This choice was made to make the alignment readily amenable to the variance partitioning analysis explained next. The pattern of results looked similar when using Pearson correlation between the brain and model RDMs (Figure S10; which is typically used in RSA; K-
riegeskorte & Mur, 2008).
Variance partitioning analysis
Unique variance of an ROI RDM (A) explained by a network RDM (B), compared to variance explained by GPN RDM (C), is computed as the variance of A explained jointly by B and C minus the variance of A explained by C alone. The variance explained is computed using non-negative linear regression.
Subject shared variance
Per ROI, we computed an estimate of the shared variance across subjects as a benchmark of how much variance a single model could capture across subjects in NSD: iteratively, we computed the variance explained (via non-negative linear regression) in the left-out-subject’s RDM by the the average RDMs of n-1 subjects, and reported the average explained variance. This corresponds to the lower bound of the noise ceiling in typical RSA frameworks.
Comparison networks
Brain alignment of the GPNs were compared to a large number of related and state-of-art approaches. For each family of networks, we considered openly-available small, medium-sized, and the largest variants. Per ROI, alignment was computed with the RDMs over the special-515 scenes (and also their central 91px crops) per network variant and layer. The best alignment score across variants and their layers was associated with the network family. All the network families and variants tested, and their -
layers with the best alignment scores to ventral ROI from NSD are reported in Table S5.
12

Statistical analyses
We performed all comparisons on bounded similarity metrics—cosine similarity ([-1, 1]) and variance
explained ( [0,1])—using nonparametric tests. Unless stated otherwise, tests were two-sided with = 0.05.
Paired two-level or one-sample tests
We used the Wilcoxon signed-rank test (SciPy; Virtanen et al., 2020). We report the Wilcoxon W statistic (sum of the ranks of the differences above or below zero, whichever is smaller) and the p-value. Zero differences were excluded (SciPy’s default), and exact p-values were used when available; otherwise the large-sample approximation with continuity correction was used.
>2 levels (within-subject)
We used the Friedman test (SciPy), reporting and the p-value.
Multiple comparisons correction
When multiple posthoc/independent Wilcoxon/Friedman tests were conducted simultaneously (e.g., several layers in one analysis; data apriori independent), we controlled the false discovery rate with Benjamini–Hochberg (BH-FDR) (statsmodels; Seabold & Perktold, 2010). Instead, when correcting a small, pre-specified set of planned contrasts (e.g., main-effect/interaction summaries; data apriori shared and restructured), we controlled the family-wise error rate with Holm adjustment (statsmodels).
Hierarchical 2×2×N design (recurrence × saccade × backbone)
For each subject we formed interaction summaries as the average contrast
,
and tested whether these differed across backbones using the Friedman test. Because the three-way interaction was significant in our data, we did not proceed to simple-effects follow-ups. Main-effect summaries were formed as averages over the other factor, e.g. for recurrence:
,
and assessed with Wilcoxon signed-rank tests; p-values across main-effect summaries were Holm-adjusted. When N = 1, we tested the interaction and both main-effect summaries with Wilcoxon signed-rank tests and applied Holm correction across the three tests.
Acknowledgments
We would like to thank Victoria Bosch for the discussion that kickstarted the project, and all members of Kietzmann lab for the discussions that enriched the proceedings.
Funding sources: European Research Council’s (ERC) Starting grant #101039524 “TIME” (AD, CA, TCK), Schweizerischer Nationalfonds (SNF) grant #203018 (AD).
Data sharing plans
Open-source datasets and comparison networks were used. The scripts to train GPNs and GSNs, and to evaluate them and other networks, can be found at: https://github.com/KietzmannLab/GPN. The data
13

required to run the analyses reported in this paper can be found at: https://doi.org/10.17605/OSF.IO/G29PD.
References
1. Allen, E. J., St-Yves, G., Wu, Y., Breedlove, J. L., Prince, J. S., Dowdle, L. T., ... & Kay, K. (2022). A massive 7T fMRI dataset to bridge cognitive neuroscience and artificial intelligence. Nature neuroscience, 25(1), 116-126. 2. Assran, M., Duval, Q., Misra, I., Bojanowski, P., Vincent, P., Rabbat, M., ... & Ballas, N. (2023). Self-supervised learning from images with a joint-embedding predictive architecture. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognit-
ion (pp. 15619-15629). 3. Ayzenberg, V., & Behrmann, M. (2022). The dorsal visual pathway represents object-centered spatial relations for object recognition. Journal of Neuroscience, 42(23), 4693-4710. 4. Bakhtiari, S., Mineault, P., Lillicrap, T., Pack, C., & Richards, B. (2021). The functional specialization of visual cortex emerges from training parallel pathways with self-supervised predictive learning. Advances in Neural Information Processing Systems, 34, 25164-25178. 5. Balestriero, R., & -
LeCun, Y. (2022). Contrastive and non-contrastive self-supervised learning recover global and local spectral embedding methods. Advances in Neural Information Processing Systems, 35, 26671-26685. 6. Balestriero, R., & LeCun, Y. (2024). Learning by reconstruction produces uninformative features for perception. arXiv preprint arXiv:2402.11337. 7. Bar, M., & Aminoff, E. (2003). Cortical analysis of visual context. Neuron, 38(2), 347-358. 8. Bonner, M. F., & Epstein, R. A. (2021). Object representatio-
ns in the human brain reflect the co-occurrence statistics of vision and language. Nature communications, 12(1), 4081. 9. Brown, T., Mann, B., Ryder, N., Subbiah, M., Kaplan, J. D., Dhariwal, P., ... & Amodei, D. (2020). Language models are few-shot learners. Advances in neural information processing systems, 33, 1877-1901. 10. Caron, M., Touvron, H., Misra, I., Jégou, H., Mairal, J., Bojanowski, P., & Joulin, A. (2021). Emerging properties in self-supervised vision transformers. In Proceedings of-
 the IEEE/CVF international conference on computer vision (pp. 9650-9660). 11. Chafee, M. V., Averbeck, B. B., & Crowe, D. A. (2007). Representing spatial relationships in posterior parietal cortex: single neurons code object-referenced position. Cerebral Cortex, 17(12), 2914-2932. 12. Chen, T., Kornblith, S., Norouzi, M., & Hinton, G. (2020). A simple framework for contrastive learning of visual representations. In International conference on machine learning (pp. 1597-1607). PmLR. 13. Conwell, C-
., Prince, J. S., Kay, K. N., Alvarez, G. A., & Konkle, T. (2024). A large-scale examination of inductive biases shaping high-level visual representation in brains and machines. Nature communications, 15(1), 9383. 14. Conwell, C., McMahon, E., Jagadeesh, A., Vinken, K., Sharma, S., Prince, J. S., ... & Isik, L. (2025). Monkey See, Model Knew: Large Language Models Accurately Predict Visual Brain Responses in Humans and Non-Human Primates. bioRxiv, 2025-03. 15. Doerig, A., Sommers, R. P., Seeliger,-
 K., Richards, B., Ismael, J., Lindsay, G. W., ... & Kietzmann, T. C. (2023). The neuroconnectionist research programme. Nature Reviews Neuroscience, 24(7), 431-450. 16. Doerig, A., Kietzmann, T. C., Allen, E., Wu, Y., Naselaris, T., Kay, K., & Charest, I. (2025). High-level visual representations in the human brain are aligned with large language models. Nature Machine Intelligence, 1-15.
14

17. Elman, J. L. (1990). Finding structure in time. Cognitive science, 14(2), 179-211. 18. Epstein, R., & Kanwisher, N. (1998). A cortical representation of the local visual environment. Nature, 392(6676), 598-601. 19. Epstein, R. A., & Baker, C. I. (2019). Scene perception in the human brain. Annual review of vision science, 5(1), 373-397. 20. Frank, M. C. (2023). Bridging the data gap between children and large language models. Trends in Cognitive Sciences, 27(11), 990-992. 21. Graham, B., El-N-
ouby, A., Touvron, H., Stock, P., Joulin, A., Jégou, H., & Douze, M. (2021). Levit: a vision transformer in convnet's clothing for faster inference. In Proceedings of the IEEE/CVF international conference on computer vision (pp. 12259-12269). 22. Harris, Z. S. (1954). Distributional structure. Word, 10(2-3), 146-162. 23. He, K., Zhang, X., Ren, S., & Sun, J. (2016). Deep residual learning for image recognition. In Proceedings of the IEEE conference on computer vision and pattern recognition (pp. 7-
70-778). 24. He, K., Chen, X., Xie, S., Li, Y., Dollár, P., & Girshick, R. (2022). Masked autoencoders are scalable vision learners. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition (pp. 16000-16009). 25. Huh, M., Cheung, B., Wang, T., & Isola, P. (2024). The platonic representation hypothesis. arXiv preprint arXiv:2405.07987. 26. Kaiser, D., & Peelen, M. V. (2018). Transformation from independent to integrative coding of multi-object arrangements in human visua-
l cortex. NeuroImage, 169, 334-341. 27. Kaiser, D., Quek, G. L., Cichy, R. M., & Peelen, M. V. (2019). Object vision in a structured world. Trends in cognitive sciences, 23(8), 672-685. 28. Kriegeskorte, N., Mur, M., & Bandettini, P. A. (2008). Representational similarity analysis-connecting the branches of systems neuroscience. Frontiers in systems neuroscience, 2, 249. 29. Kümmerer, M., Bethge, M., & Wallis, T. S. (2022). DeepGaze III: Modeling free-viewing human scanpaths with deep learning. Jo-
urnal of Vision, 22(5), 7-7. 30. LeCun, Y. (2022). A path towards autonomous machine intelligence version 0.9. 2, 2022-06-27. Open Review, 62(1), 1-62. 31. Legras, R., Gaudric, A., & Woog, K. (2018). Distribution of cone density, spacing and arrangement in adult healthy retinas with adaptive optics flood illumination. PloS one, 13(1), e0191141. 32. Lin, T. Y., Maire, M., Belongie, S., Hays, J., Perona, P., Ramanan, D., ... & Zitnick, C. L. (2014). Microsoft coco: Common objects in context. In Euro-
pean conference on computer vision (pp. 740-755). Cham: Springer International Publishing. 33. Linsley, D., Feng, P., & Serre, T. (2025). Better artificial intelligence does not mean better models of biology. arXiv preprint arXiv:2504.16940. 34. Mikolov, T., Chen, K., Corrado, G., & Dean, J. (2013). Efficient estimation of word representations in vector space. arXiv preprint arXiv:1301.3781. 35. Nayman, N., Aflalo, Y., Noy, A., & Zelnik, L. (2021). Hardcore-nas: Hard constrained differentiable neu-
ral architecture search. In International Conference on Machine Learning (pp. 7979-7990). PMLR. 36. O'regan, J. K., & Noë, A. (2001). A sensorimotor account of vision and visual consciousness. Behavioral and brain sciences, 24(5), 939-973. 37. Oord, A. V. D., Li, Y., & Vinyals, O. (2018). Representation learning with contrastive predictive coding. arXiv preprint arXiv:1807.03748. 38. Oquab, M., Darcet, T., Moutakanni, T., Vo, H., Szafraniec, M., Khalidov, V., ... & Bojanowski, P. (2023). Dinov2: L-
earning robust visual features without supervision. arXiv preprint arXiv:2304.07193.
15

39. Paszke, A., Gross, S., Massa, F., Lerer, A., Bradbury, J., Chanan, G., ... & Chintala, S. (2019). Pytorch: An imperative style, high-performance deep learning library. Advances in neural information processing systems, 32. 40. Pedregosa, F., Varoquaux, G., Gramfort, A., Michel, V., Thirion, B., Grisel, O., ... & Duchesnay, É. (2011). Scikit-learn: Machine learning in Python. the Journal of machine Learning research, 12, 2825-2830. 41. Peelen, M. V., & Downing, P. E. (2017). Category selectivi-
ty in human visual cortex: Beyond visual object recognition. Neuropsychologia, 105, 177-183. 42. Radford, A., Kim, J. W., Hallacy, C., Ramesh, A., Goh, G., Agarwal, S., ... & Sutskever, I. (2021). Learning transferable visual models from natural language supervision. In International conference on machine learning (pp. 8748-8763). PmLR. 43. Richards, B. A., Lillicrap, T. P., Beaudoin, P., Bengio, Y., Bogacz, R., Christensen, A., ... & Kording, K. P. (2019). A deep learning framework for neuroscien-
ce. Nature neuroscience, 22(11), 1761-1770. 44. Seabold, S., & Perktold, J. (2010). Statsmodels: econometric and statistical modeling with python. SciPy, 7(1), 92-96. 45. Summerfield, C., Luyckx, F., & Sheahan, H. (2020). Structure learning and the posterior parietal cortex. Progress in neurobiology, 184, 101717. 46. Tan, M., & Le, Q. (2019). Efficientnet: Rethinking model scaling for convolutional neural networks. In International conference on machine learning (pp. 6105-6114). PMLR. 47. Thompson-
, J. A., Sheahan, H., Dumbalska, T., Sandbrink, J. D., Piazza, M., & Summerfield, C. (2024). Zero-shot counting with a dual-stream neural network model. Neuron, 112(24), 4147-4158. 48. Tschannen, M., Gritsenko, A., Wang, X., Naeem, M. F., Alabdulmohsin, I., Parthasarathy, N., ... & Zhai, X. (2025). Siglip 2: Multilingual vision-language encoders with improved semantic understanding, localization, and dense features. arXiv preprint arXiv:2502.14786. 49. Virtanen, P., Gommers, R., Oliphant, T. E., H-
aberland, M., Reddy, T., Cournapeau, D., ... & Van Mulbregt, P. (2020). SciPy 1.0: fundamental algorithms for scientific computing in Python. Nature methods, 17(3), 261-272. 50. Wang, A. Y., Kay, K., Naselaris, T., Tarr, M. J., & Wehbe, L. (2023). Better models of human high-level visual cortex emerge from natural language supervision with a large and diverse dataset. Nature Machine Intelligence, 5(12), 1415-1426. 51. Yamins, D. L., & DiCarlo, J. J. (2016). Using goal-driven deep learning models t-
o understand sensory cortex. Nature neuroscience, 19(3), 356-365. 52. Yarbus, A. L. (1967). Eye movements during perception of complex objects. In Eye movements and vision (pp. 171-211). Springer US.
16

SI Appendix
NSD ‘streams’ ROI definitions
From the NSD data manual (https://cvnlab.slite.page/p/X_7BBMgghj#c5894a3b):
Early visual cortex [early] ROI:
The early visual cortex ROI was drawn as the union of the V1v, V1d, V2v, V2d, V3v and V3d ROIs from the Wang 2015 retinotopic atlas. Additionally, V2v and V2d were connected such that the part of the occipital pole typically containing foveal representations was also included. The same was repeated for V3v and V3d.
Intermediate [mid] ROIs:
Three intermediate ROIs were drawn corresponding to each of the three streams: ventral, lateral and parietal. All three ROIs border the early visual cortex ROI on the posterior side.
The intermediate ventral ROI was drawn to reflect the inferior boundary of hV4 from the Wang atlas and to include the inferior occipital gyrus (IOG), with the anterior border of the ROI drawn based on the anterior edge of the inferior occipital sulcus (IOS).
The intermediate lateral ROI was drawn directly superior to the intermediate ventral ROI, with the superior and anterior borders determined as the LO1 and LO2 boundaries from the Wang atlas.
The intermediate parietal ROI was drawn directly superior to that, reflecting exactly the borders of the union of V3A and V3B from the Wang atlas (Wang et al., 2015).
Higher-level ROIs:
Three higher-level ROIs were drawn for each of the ventral, lateral and parietal streams, bordering their respective intermediate ROIs on their posterior edges.
The ventral ROI was drawn to follow the anterior lingual sulcus (ALS), including the anterior lingual gyrus (ALG) on its inferior border and to follow the inferior lip of the inferior temporal sulcus (ITS) on its superior border. The anterior border was drawn based on the midpoint of the occipital temporal sulcus (OTS).
The lateral ROI was drawn such that the higher-level ventral ROI was its inferior border and the superior lip of the superior temporal sulcus (STS) was used to mark the anterior/superior boundary. The rest of the superior boundary traced the edge of angular gyrus, up to the tip of the posterior STS (pSTS).
The parietal ROI was drawn to reflect the boundary of the lateral ROI on its inferior edge and to otherwise trace the borders of and include the union of IPS0, IPS1, IPS2, IPS3, IPS4, IPS5 and SPL1 from the Wang atlas.
17

Figure S1. Qualitative assessment of the behavior of GPNs across variants and backbones (see Figure 1B for reference).
18

Figure S2. Quantitative assessment of the behavior of GPNs across variants (see Figure 1C for reference) for, (A) the SimCLR backbone, (B) the ILSVRC backbone, and (C) the Dinov2-B backbone.
19

Figure S3. Behavioral assessment of glimpse integration (SimCLR backbone). As shown in Figure 1B–C, GPN-RS leveraged spatial arrangement and integrated across glimpses to improve future-glimpse prediction. A plausible mechanism is the path integration of saccades that anchors glimpse embeddings to absolute locations, i.e. tracking what is where. (A) We fit 5-fold cross-validated linear regressions to
predict absolute position (x,y; averaged across axes) from model representations across layers and glimpse numbers in the sequences. In GPN-RS, variance explained in the first LSTM layer stayed near 1 as glimpses accrued, consistent with path integration. This effect was absent in the initialized GPN-RS (‘Init’) and in GPNs-R/S after training, indicating that recurrence and saccades are required to learn path integration. (B) Path integration implies that refixations should cue the correct content-
 at that location. We tested three conditions over 1,000 fixation sequences (first four fixations) from the test-515 set (example scenes are depicted), simulating refixations from glimpse #3 toward each of the four locations (setup inset shown on the right): (i) Actual glimpses (natural co-occurrence/arrangement), (ii) Randomly-sampled glimpses (glimpse embeddings across scenes randomly assigned to fixations to violate co-occurrence and arrangement), and (iii) Shuffled-embedding inputs (embedding -
dimensions independently shuffled per glimpse to destroy natural glimpse features). GPN-RS retrieved the correct target embedding under all three conditions; GPN-S succeeded only for ‘Actual glimpses’, as expected without recurrent integration. GPN-R could not succeed for any condition, as expected without saccadic inputs. Together, these results indicate that GPN-RS learned a general embedding–location binding mechanism (Smolensky, 1990). Error bars in (B) show 95% CIs.
20

Figure S4. Searchlight analysis to compare the alignment of GPN-R-SimCLR vs GPN-RS-SimCLR across the brain. Searchlight spheres with a radius of 6 voxels, i.e. covering ~900 voxels, were used. Pearson correlation was used to quantify alignment. No spheres revealed a higher alignment with GPN-RS-SimCLR than with GPN-R-SimCLR. Correlations for spheres that were significant (p < 0.05; FDR-adjusted across the brain) are shown.
Table S5. The networks tested for VVC-alignment. Network family names, sources, names of the best-aligned layers and the inputs (full scene / central 91px glimpse), and the alignment score (average
across 8 participants) are mentioned. The best scores within each family are highlighted. , refer to input and LSTM dropout values for the GPNs and GSNs. TH refers to PyTorch Hub (torch.hub); HF refers to Hugging Face; timm refers to the PyTorch Image Models collection from HF.
Network ( , ) / Source Input
Avg. VVC-alignment
GPNs
GPN-B-ILSVRC 0.1, 0.1 glimpse 0, lstm_out 0.16
GPN-S-ILSVRC 0.1, 0.1 glimpse 0, lstm_out 0.13
GPN-R-ILSVRC 0.25, 0.25 glimpse 4, lstm_out 0.18
GPN-RS-ILSVRC 0.1, 0.1 glimpse 4, lstm_out 0.16
GPN-B-SimCLR 0.1, 0.1 glimpse 0, lstm_out 0.22
GPN-S-SimCLR 0.1, 0.1 glimpse 3, lstm_out 0.16
GPN-R-SimCLR 0.25, 0.1 glimpse 5, lstm_out 0.23
GPN-RS-SimCLR 0.1, 0.1 glimpse 4, lstm_out 0.20
GPN-B-Dinov2B 0.1, 0.1 glimpse 0, lstm_out 0.13
GPN-S-Dinov2B 0.1, 0.1 glimpse 3, lstm_out 0.10
GPN-R-Dinov2B 0.1, 0.1 glimpse 4, lstm_out 0.14
GPN-RS-Dinov2B 0.1, 0.1 glimpse 2, lstm_out 0.15
GSNs
cGSN-R-SimCLR 0.5, 0.25 glimpse 0, joint_proj 0.14
sGSN-R-SimCLR 0.5, 0.5 glimpse 0, joint_proj 0.16
21

DINO
dinov2_vitb14 (Dinov2-B) TH: facebookresearch/dinov2 central glimpse, blocks.11.mlp.fc1
0.15
dinov2_vitl14 TH: facebookresearch/dinov2 central glimpse, blocks.23.norm2
0.15
dinov2_vitg14_reg TH: facebookresearch/dinov2 central glimpse, blocks.22.norm2
0.10
dino_webssl_1b HF: facebook/webssl-dino1b-full2b -224
central glimpse, encoder.layer.21.mlp.weights _in
0.12
dino_webssl_3b HF: facebook/webssl-dino3b-full2b -224
central glimpse, encoder.layer.16.norm2
0.12
dino_webssl_7b HF: facebook/webssl-dino7b-full8b -518
central glimpse, encoder.layer.20.norm2
0.11
dinov3_vitb16 HF: facebook/dinov3-vitb16-pretrai n-lvd1689m
central glimpse, layer.8.norm2
0.13
dinov3_convnext_large HF: facebook/dinov3-convnext-lar ge-pretrain-lvd1689m
central glimpse, stages.2.layers.20.depthwise _conv
0.15
dinov3_vit7b16 HF: facebook/dinov3-vit7b16-pretr ain-lvd1689m
central glimpse, layer.21.mlp.act_fn
0.12
iJEPA
ijepa_vith14_1k HF: jmtzt/jmtzt/ijepa_vith14_1k
full scene, encoder.layer.24.intermediat e.dense
0.10
ijepa_vitg16_22k HF: jmtzt/ijepa_vitg16_22k central glimpse, encoder.layer.31.intermediat e.dense
0.11
MAE
mae_vitb HF: facebook/vit-mae-base central glimpse, encoder.layer.8.intermediate. dense
0.08
mae_vitl HF: facebook/vit-mae-large central glimpse, encoder.layer.14.intermediat e.dense
0.09
mae_vith HF: facebook/vit-mae-huge central glimpse, encoder.layer.15.intermediat e.dense
0.11
mae_webssl_300m HF: facebook/webssl-mae300m-ful l2b-224
full scene, encoder.layer.14.attention.att ention
0.07
mae_webssl_1b HF: facebook/webssl-mae1b-full2b
central glimpse, encoder.layer.21.intermediat
0.10
22

-224 e.dense
mae_webssl_3b HF: facebook/webssl-mae3b-full2b -224
central glimpse, encoder.layer.14.intermediat e.dense
0.08
CLIP
clip_RN50 github: openai/CLIP: RN50 full scene, visual.layer4.1.bn1
0.11
clip_vitb github: openai/CLIP: ViT-B/16 central glimpse, visual.transformer.resblocks. 8.ln_2
0.13
clip_vitl github: openai/CLIP: ViT-L/14@336px
central glimpse, visual.transformer.resblocks. 11.attn
0.09
SigLIP
siglip2_b HF:
google/siglip2-base-patch16-2 24
central glimpse, vision_model.encoder.layers. 7.layer_norm2
0.17
siglip2_l HF: google/siglip2-large-patch16-2 56
central glimpse, vision_model.encoder.layers. 12.mlp.fc1
0.14
siglip2_g HF: google/siglip2-giant-opt-patch 16-384
central glimpse, vision_model.encoder.layers. 15.mlp.fc1
0.13
BLT_MPNet Doerig et al. 2025 (personal communication)
full scene, layernorm_layer_9_time_0
0.13
EfficientNet
efficientnet_b1 torchvision models central glimpse, features.6.3.block.2.fc1
0.18
efficientnet_b3 torchvision models central glimpse, features.6.4.block.2.fc1
0.19
efficientnet_b7 torchvision models central glimpse, features.6.6.block.2.fc1
0.17
LeViT
levit_128 timm: levit_128.fb_dist_in1k central glimpse, stages.2.blocks.0.attn.qkv.lin ear
0.18
levit_256 timm: levit_256.fb_dist_in1k full scene, stages.1.blocks.0.attn
0.13
levit_384 timm: levit_384.fb_dist_in1k central glimpse, stages.1.blocks.0.attn
0.13
HardCoreNAS
hardcorenas_a timm: hardcorenas_a.miil_green_in1 k
full scene, blocks.5.1.se.conv_reduce
0.17
23

hardcorenas_d timm:
hardcorenas_d.miil_green_in1 k
central glimpse, blocks.5.1.se.conv_reduce
0.18
hardcorenas_f timm: hardcorenas_f.miil_green_in1 k
full scene, blocks.4.3.se.act1 0.17
RN50-ILSVRC torchvision models: v1 full scene, layer4.1.bn2 0.13
RN50-SimCLR lightly-ai:
simclrv1-imagenet1k-resnet50 -1x
full scene, avgpool 0.12
DG3 github: matthias-k/DeepGaze central glimpse, features.features.1.features. denseblock3.denselayer28.n orm2
0.14
Figure S6. Alignment of GPNs with SimCLR backbone and comparison networks across the streams ROIs (see Figure 2B for reference). Per ROI, the alignment of the GSNs and the best-aligned comparison network for that ROI are shown.
24

Figure S7. Alignment of all the GPNs and comparison networks for the (A) midparietal, and (B) parietal streams ROIs (see Figure 2B for reference).
25

Figure S8. VVC-alignment of GPN variants and backbones across layer and glimpse numbers in the sequences (see Figure 2B, right panel, for reference).
26

Figure S9. VVC-alignment of variants of GPN-R-SimCLR trained with differing glimpse sequences. For GPN-R-SimCLR glimpses were sampled using DeepGaze3 (DG3). To assess the importance of DG3 fixations in generating VVC-aligned scene representations, seen in Figure 2B, we considered three more conditions. (i) DG3p: within each fixation sequence, the fixation order was permuted (barring glimpse 0), (ii) DG3r: the fixation locations per sequence were randomly sampled from all possible fixation locatio-
ns across the scenes (barring glimpse 0), capturing the prior distribution of DG3 fixations (center-biased), and (iii) random: the fixation locations were sampled uniformly-randomly from the scenes (barring glimpse 0). Six pairwise comparisons revealed that (i) the prior centered-biased fixation distribution of DG3 was
important to acquire VVC-aligned scene representations (DG3r - random; mean difference, = 0.031, W = 0, FRD-adjusted p = 0.0078); (ii) scene-conditioned fixation distributions increased the alignment (DG3p
- DG3r; = 0.043, W = 0, FRD-adjusted p = 0.0078); and (iii) the sequence of scene-conditioned
fixations further increased alignment (GPN-R-SimCLR - DG3p; = 0.013, W = 0, FRD-adjusted p = 0.0078). Notably, the variant with random glimpses still improved alignment with VVC over the
max-alignment of input glimpse embeddings (for the central glimpse; dotted line; = 0.04, W = 0, p = 0.0078). These results suggest the glimpse prediction objective improved VVC-alignment, even when random glimpses were provided. However, the use of DeepGaze 3 fixation sequences were critical to the high VVC-alignment of emergent scene representations in GPN-R-SimCLR.
27

Figure S10. VVC-alignment of GPNs and comparison networks, using Pearson correlation, instead of
non-negative linear regression’s , as the measure (see Figure 2B for reference).
28

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:55.205Z
- **Text Length:** 67055 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 28 of 28
