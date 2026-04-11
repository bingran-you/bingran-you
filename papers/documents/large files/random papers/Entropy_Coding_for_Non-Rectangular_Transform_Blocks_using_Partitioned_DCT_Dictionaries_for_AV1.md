# PDF Document: Das et al. - 2025 - Entropy Coding for Non-Rectangular Transform Blocks using Partitioned DCT Dictionaries for AV1.pdf

**File Path:** Das et al. - 2025 - Entropy Coding for Non-Rectangular Transform Blocks using Partitioned DCT Dictionaries for AV1.pdf

**Processed Date:** 2026-02-10T18:13:39.041Z

**File Size:** 451.58 KB

**Total Pages:** 10

**Extracted Pages:** 10

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3277

**Title:** Entropy Coding for Non-Rectangular Transform Blocks using Partitioned DCT Dictionaries for AV1

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Entropy Coding for Non-Rectangular Transform Blocks
using Partitioned DCT Dictionaries for AV1
Priyanka Das, Tim Classen, and Mathias Wien
∗Lehrstuhl fu ̈r Bildgebung und Bildverarbeitung RWTH Aachen University
{priyanka.das,tim.classen,mathias.wien}@lfb.rwth-aachen.de
Abstract
Recent video codecs such as VVC and AV1 apply a Non-rectangular (NR) partitioning to combine prediction signals using a smooth blending around the boundary, followed by a rectangular transform on the whole block. The NR signal transformation is not yet supported. A transformation technique that applies the same partitioning to the 2D Discrete Cosine Transform (DCT) bases and finds a sparse representation of the NR signal in such a dictionary showed promising gains in an experimental setup outside -
the reference software. This method uses the regular inverse transformation at the decoder to reconstruct a rectangular signal and discards the signal outside the region of interest. This design is appealing due to the minimal changes required at the decoder. However, current entropy coding schemes are not well-suited for optimally encoding these coefficients because they are primarily designed for DCT coefficients. This work introduces an entropy coding method that efficiently codes these transfo-
rm coefficients by effectively modeling their properties. The design offers significant theoretical rate savings, estimated using conditional entropy, particularly for scenarios that are more dissimilar to DCT in an experimental setup.
Introduction
Traditionally, video codecs apply prediction, transformation (TX) and entropy coding on a rectangular block basis. A sinusoidal TX is applied to the full or subblock of the error signal after block prediction. Recently, AOMedia Video 1 (AV1) [1] codec introduced a compound tool known as Wedge mode, which combines two inter-inter or inter-intra prediction signals. This mode assigns the prediction signals to two NR regions by dividing a block using oblique angles. This mode uses an 8-pixel wide blen-
ding area around the prediction boundary. Similarly, Geometric Partition Mode (GPM) in VVC combines two inter-prediction signals using an adaptive blending. Both modes apply rectangular TX to the combined NR residuals. Currently, these modes provide an approximate NR partitioning for prediction signals. Enabling a true NR partitioning involves several additional steps: 1) applying a sharper transition at the NR prediction boundary, 2) performing TX on both NR blocks separately, 3) optimizing entro-
py coding for NR TX, and 4) adapting the deblocking filter to be usable at the NR boundary. Furthermore, AV1 includes a model-based rate estimation algorithm to reduce encoder complexity, which is trained on DCT coefficients. This algorithm should also be updated to accommodate the NR TX as well. Among available arbitrarily shaped TXs [2, 3, 4, 5, 6, 7, 8, 9, 10], two techniques [10] and [3] have received recent interest as an NR TX [11], [12]. The scheme described in [11] demonstrated promising g-
ains in an experimental setup.
arXiv:2511.21609v1 [eess.IV] 26 Nov 2025

The technique utilizes the existing inverse rectangular TX block at the decoder to reconstruct a rectangular signal and discard the signal outside the NR region of interest. This design is particularly desirable due to the minimal changes required at the decoder. However, the corresponding TX coefficient distribution differs from the distribution which is observed with DCT-transform. This TX technique uses a sparse representation method along with an overcomplete dictionary, where the dictionary -
elements, also known as atoms are correlated with their neighbors. This results in non-zero TX coefficients surrounded by zeros. Thereby, although the TX coefficients have high energy concentration in the top-left corner, similar to DCT, their spatial compaction is significantly lower. Furthermore, similar to DCT, a weak correlation is observed between non-zero TX coefficients within a neighborhood. The existing entropy coding methods [13],[14] in the codecs are tailored to DCT properties and are -
not optimally suited for them. This work investigates an entropy coding scheme to enable true NR partitioning in AV1, using the NR TX from [11] with minimal design changes. The scheme efficiently encodes sparse TX coefficients, where a weak correlation is observed in neighboring non-zero TX coefficients and a strong correlation exists among neighboring atoms. The final algorithm presented here is tailored to AV1 and NR-TX described in [11]. However, the general principles of the presented entropy -
coding design can be used to encode sparse TX coefficients based on the properties of the corresponding dictionary.
Related Work
Entropy Coding
Entropy measures the theoretical lower bound of the achievable rate for a given set of source symbols. Most popular codecs apply prediction, TX, and quantization to achieve a low-entropy block of integer coefficients to be transmitted. These blocks are encoded into the bitstream using entropy coding schemes such as run-length, Variable length (VLC), Huffman, or Arithmetic coding. The methods presented in [15, 16, 17] use a combination of run-length and VLC. However, VLC uses fixed, predefined tabl-
es that do not adapt to the actual symbol statistics. The fixed connection between codeword and symbol has been relaxed later in Context Adaptive VLCs. In contrast, arithmetic coders do not require a pre-defined table. They use decision rules and a well-defined state at the arrival of a new symbol, allowing the decoder to reconstruct a group of symbols whenever possible. Arithmetic coders were initially designed for codecs in [18, 16, 19, 20, 21]. An arithmetic coder easily accommodates inter-symb-
ol redundancies by defining contexts and using conditional probabilities to approach conditional entropy. All modern codecs employ such arithmetic coding with symbol adaptivity, such as CABAC [14] and level-map M -ary arithmetic coding in AV1 [13]. Since this work is designed based on AV1, the corresponding entropy coding scheme is summarized in the following.
Entropy Coding scheme in AV1
AV1 [1] employs an adaptive M -ary symbol arithmetic coding scheme with a level-map approach to encode quantized TX coefficients block. The block is first mapped into a

1D vector using a scan. Three different scans (zig-zag, column and row) are employed based on TX (2D, vertical 1D, horizontal 1D). They are decomposed into 4 symbols: sign bit, base range (BR) {0, 1, 2, > 2}, low range (LR) {0, 1, 2, > 2}, high range [0, 215]. These symbols are encoded using an M -ary arithmetic coding and an adaptive probability model. The contexts for the probability models are designed separately for BR and LR symbols by exploiting the high correlation of DCT coefficients with-
 their spatial neighbors and coefficients in the same frequency band. A neighborhood of 5 (illustrated in Fig. 2-b below) and 3 coefficients are considered for BR and LR symbols respectively for 2D TX. The sum of the absolute value of the coefficients in this neighborhood is categorized into ranges [0, {1, 2}, {3, 4}, {5, 6}, {>= 7}] to establish contexts for the BR symbol AC coefficients. To leverage the weak correlation among coefficients within the same frequency bands, the block is divided int-
o regions where the same contexts are used. Fig. 2-e below illustrates examples of two block sizes. Contexts are also shared across different block sizes. In total, there are 22 different contexts, including one for the DC coefficient. The updating rate of the probability model depends on how frequently a symbol occurs at the frame level.
Transformation technique:
The TX technique described in [11] utilizes a partitioned DCT dictionary to transform an NR signal. The corresponding NR region from the nearest larger rectangular DCT serves as the basis for constructing the dictionary. The number of atoms in such dictionary equals the bounding box area. Next, the Orthogonal Matching Pursuit (OMP) [22] is used to obtain a sparse representation of the NR signal within the overcomplete dictionary. The method presented in [11] uses this representation to linearly co-
mbine the unused part of the DCT to extend the shape of the NR signal to a rectangular one. A regular DCT is then applied on the entire block to derive the TX coefficients. The key advantage of this method is that the inverse TX step at the decoder remains almost untouched. A regular inverse DCT is applied on the TX coefficient block, and only the the region of interest is considered for reconstruction. If the sparse representation has negligible loss, it can be directly used as TX coefficients wi-
th appropriate scaling eliminating the need for further extension mechanism. In contrast, for lossy OMP approximations, the extension technique will provide better quality. While a near-lossless OMP approximation, the extension technique provided slight gain in high bitrates, it also added more complexity. Due to this, the scaling method is employed in the current work.
NR shapes in AV1 wedge mode
AV1 adopted 16 wedges using angles {0◦, 27◦, 63◦, 90◦, 117◦, 153◦} for 9 block sizes with dimensions {8, 16, 32}. Each wedge mode generates 2 NR regions. Excluding the 72 rectangular shapes, there are a total of 216 NR regions; however, these are not all unique. A bounding box with dimensions 2m, m ∈ N is applied around an NR region. Some NR regions of aspect ratio 1:4 can be subdivided into one rectangular and one NR region. By employing rotation, mirroring, and transposition on these shapes, a s-
et of 19 unique NR blocks can be derived.

Type 1 Type 2 Type 3 Type 3 Type 4 Type 5
0
1
0.5
(8, 16) : 8 (16, 32) : 8 (8, 32) : 8
( 4, 8) : 8 ( 8, 16) : 24 (16, 32) : 16
( 8, 8) : 16 (16, 16) : 16 (32, 32) : 16 ( 8, 16) : 24 (16, 32) : 8
( 8, 8) : 8 (16, 16) : 8 (32, 32) : 8 ( 8, 16) : 8 (16, 32) : 8 ( 8, 32) : 8
( 8, 16) : 8 (16, 32) : 8
Figure 1: Top: NR shapes for different types, example of correlation of an atom at position (3,3) in a 5 × 5 neighborhood for each type. Below: Number of cases of each NR shape, characterized by blocksize and type
Two properties of the NR shapes are; 1) ra : the ratio between the area of the NR region and the bounding box. 2) SH: presence of diagonal symmetry or closer to rectangles due to longer parallel lines. Based on these properties, the blocks can be categorized into the following 5 types. Each type is exemplified with parameters in the form of (width×height, wedge index, region). This form is used in the rest of the paper to specify an NR block.
Type 1: ra ≈ 1
4 , (e.g. 16×8, 9, 1)
Type 2: ra = 1
2 , SH: diagonal symmetry (e.g. 8×16, 2, 1)
Type 3: ra = 1
2 , SH: closer to rectangle (e.g. 8×16, 1, 1)
Type 4: ra ≈ 3
4 , SH: diagonal symmetry (e.g. 8×16, 14, 1)
Type 5: ra ≈ 3
4 , SH: closer to rectangle(e.g. 8×16, 10, 1)
Fig. 1 gives a complete list of the number of cases for these 19 unique NR shapes characterized by their block type and size. The blocksize (w, h) in the figure refers to both w×h and h×w. 92% of the NR shapes are either square or 1:2. Only the blocks with 1:2 aspect ratio cover all the block types.
Dictionary Analysis:
The TX coefficient properties are linked directly to the properties of the dictionary. The dictionaries are created by partitioning DCT bases, resulting in one dictionary for each unique NR shape. This section discusses the unique correlation pattern for each dictionary type, which is the key property linked to the TX coefficients’ behaviour. The ra property of a block is inversely proportional to the dictionary’s overcompleteness. Higher ra values and sh closer to a rectangle generate dictionarie-
s closer to the DCT. These overcomplete dictionaries have a correlation between neighboring atoms. The correlation is found to be negligible if the l1 distance between atoms is higher than 5. The inter-atom correlation distribution in a dictionary is similar for a single NR block type as introduced in section . This distribution for each atom in the

a.
||xNt ||0 = 0
||xNt ||0 > 0
||xNc ||0 = 0
||xNc ||0 = 1
...
||xNc ||0 = |Nc|
||xNc ||0 = |Nc| − 1
...
...
||xNo ||1 = 0
||xNo ||1 = 1
...
||xNo ||1 ≥ 12
C1 C2 C3
when |Nc| ≥ 3
b.
NDCT
c.
Nt Nc No
d.
Chosen |Nc| = 3
e.
(16×16, 1, 1)
0123
43210
345678012
(16×8, 9, 1)
0123
43210
0123
DCT Context map |Nc| map Proposed Context
map
Figure 2: a. Full context tree for entropy coding of non-rectangular transform coefficients, b. Nt for DCT, c. Definition of N types, d. For CT-s, e. Context map used for DCT, |Nc| map, Designed context map
neighborhood is also similar within a single dictionary, but varies in magnitude based on the location due to the properties of the DCT. Fig. 1 illustrates the correlation distribution of the atom at (3,3) position in the neighborhood for an exemplary dictionary of each block type. Diagonal symmetry (Types: 1,2,4) exhibits a near-perfect checkerboard pattern independent of the aspect ratio of the block. The dimension along which the polygon resembles the rectangle more (perpendicular to the parall-
el lines) exhibits higher correlation (Type: 3,5). The overall correlation in the dictionary is higher for types: 1,2,3 and therefore, the TX coefficients have more dissimilar properties to those of the DCT; thereby, designing an efficient entropy coding scheme is more crucial.
Properties of the TX coefficients
The TX coefficients have the following properties:
1. l0 sparse or significantly high number of zeros;
2. The highly correlated atoms produce TX coefficients that are unlikely to be non-zero together;
3. The coefficients are highly correlated with their neighbors where the atoms are orthogonal;
4. High concentration of energy in the top left corner.
The first two properties are unique to this TX technique. In contrast, the last two properties are also observed in DCT coefficients and have already been utilized in the existing entropy coding scheme in AV1.

Proposed entropy coding
The current work aims to design an entropy coding scheme that effectively combines all the TX coefficient properties described in section . The zig-zag scan and decomposition into 4 symbols, as described in section , are maintained due to similar properties. The key novelty is in designing the contexts for NR coefficients. This section starts with designing a full context tree by extracting relevant information from already decoded symbols. This is followed by a scheme to simplify the context tree-
. However, these trees are designed for a single position. In the last section, a design to combine different positions for all NR shapes is described. This design is to be integrated into the AOM Video Model (AVM).
Full context tree (CT-f )
This section introduces a novel context design technique that combines the extracted conditions C1, C2 and C3 from the already decoded symbols in an immediate bottomright neighborhood Nt of the current pixel. The neighborhood is defined by locations where the l1 distance is ≤ nnbd. A correlation is observed among neighboring TX coefficients, when the corresponding atoms are orthogonal or nearly orthogonal. Unlike DCT, certain non-zero neighboring coefficients reduce the likelihood of a non-zero co-
efficient at the current location. To parameterize these two properties, the Nt is divided into two neighborhood: a correlated neighborhood Nc (where the located atom has correlation ≥ thc) and an orthogonal neighborhood No (= Nt \ Nc). An example of these neighborhoods is depicted in Fig. 2-c. For simplicity, the set of coefficients and the size associated with a neighborhood N are defined as |N | and xN , respectively. The conditions are:
• C1 : ||xNt||0 = 0, if Nt has only zeros
• C2 : ||xNc||0, number of non-zero coefficients in Nc
• C3 : ||xNo||1, l1 norm of the coefficients in No
The outcomes of these conditions are concatenated into successive branches to model the context in a full tree as shown in Fig. 2-a. The path to each leaf of the tree defines a unique context. If C1 is zero, the current coefficient is likely to be zero. Otherwise, other conditions are checked. C2 will have values from {0,1,...,|Nc|}, which is locationdependant. When an entire Nc is occupied, the current coefficient is likely to be zero. In this case, this condition is sufficient for the context. O-
n the other hand, when C2 is zero, the neighborhood behaves similarly to DCT. C3 is defined to have values {0,1,...,12}. If C2 is zero, it is not possible for C3 to be zero. The total number of contexts is equal to the number of leaves : (||xNc||0 + 1)×13 when |Nc| < 3, otherwise ||xNc||0 ×13+1.
Context tree merging (CT-m)
A CT-f generally is highly complex. This section describes a method to merge the CT-f to reduce the complexity. The theoretical lower bound of the rate for a system

(16 × 16, 1, 1) (16 × 8, 9, 1)
a.
Conditional entropy
b.
-0.02
0.00
0.07
0.15 c.
-0.02
0.00
0.07
0.34
Scan positions Scan positions
Figure 3: a. Full and merged tree of first 25 positions, b. ∆Hts heatmap (16 × 16, 1, 1), c. ∆Hts heatmap (16 × 8, 9, 1)
with a set of contexts {S1} and a set of symbols {S2} is the conditional entropy H(S2|S1) = − P
i∈S2
P
j∈S1 p(i, j) log p(i|j). A merging of leaves at C3 is applied for each node at C2 to simplify the design. Starting from the first leaf, two neighboring leaves are successively merged if the loss of conditional entropy of the overall system remains below a threshold ∆. If the neighbors can not be merged, the process moves to the next leaf and applies the same criteria. The lower bound of the number of contexts is |Nc| + 1.
Context simplification for integration (CT-s)
The analysis of NR shapes in section motivated the focus on NR shapes with square and 1:2 bounding box and types 1-3. This leads to 9 unique shapes. A unique context map is designed for these 9 cases by combining the context map defined for DCT and the correlated position map essential to the context tree design. A merged tree is trained for the positions with the same number in the context map. The design and conditional probabilities will be integrated into the reference software to code TX coef-
ficients for the NR region. Fig. 2-e illustrates two such cases. Some slight modifications are applied to simplify the design, such as combining a few groups together and treating a few positions with a |Nc| differing by ±1 equivalently. Instead of designing a dynamic Nc for each case, the three most commonly used |Nc| = 3 and |Nc| = 2 as illustrated in Fig. 2-d are stored, along with a lookup table to access them efficiently.
Experimental Setup and Results
Data:
The NR TX method has been implemented in the AVM research-v2.0.0 [23] software. 17 frames of Class A3, A4 and A5 videos from AOM Common Testing Conditions [24] are encoded. The TX coefficients during the trial encoding from frames 3, 7, 11 and 15 are used as the dataset. These frames are chosen due to the expected larger motions. The data for each case is randomly divided into 8:2 ratio for training and testing, respectively.

Experiments:
The entropy coding scheme from AV1 is implemented outside the software as a baseline for comparison. The training data set is used to calculate the conditional probabilities {ptr(i|j)} for both the proposed schemes and the baseline. Additionally, the contexts {S1} are established for the merged tree. The {ptr(i|j)} and {S1} are used to calculate the conditional entropy Hts = − P
i∈S2
P
j∈S1 pts(i, j) log ptr(i|j) for {S2} of BR symbols in the test data set for both schemes for evaluation, where pts(i, j) is determined in the test dataset. A CT-f and CT-m are designed for each position, covering all resultant NR shapes with dimensions in {8,16} using the training data. The baseline’s {ptr(i|j)} are calculated for each position separately for a fair comparison. From the tested parameters nnbd = {2, 3, 4} and thc = {0.09, 0.15, 0.2, 0.25}, results indicate that nnbd = 4 and thc = 0-
.2 performs best. Fig. 3-a presents 2 examples of position-wise Hts in the zig-zag scanned vector for Type 3 (16 × 16, 1, 1) and Type 1 (16 × 8, 9, 1). The total block count in the dataset is ∼ 70K and ∼140K respectively. The proposed methods improve performance across all examined positions. The merged tree for (16×16, 1, 1) typically has contexts between 5 and 9 with minimal loss compared to the full tree, while the tree for (16 × 8, 9, 1) has either 6 or 7 contexts with negligible loss. The res-
ults for the same blocks and datasets using the CT-s are shown as an example in Fig. 3-b,c. The {ptr(i|j)} of the baseline is calculated for the positions with identical contexts together using the AV1 context map. The results for Types 1-3 are discussed in this section. Types 4, 5 are also tested, but they provided minimal gains, which is expected. The figure illustrates the difference in Hts between the baseline and the simplified scheme (∆Hts). Positive values imply an improved performance. For-
 (16 × 8, 9, 1), Fig. 3-c, gains are observed for all positions except one, while (16 × 16, 1, 1), Fig. 3-b shows improved performance mainly in the top-left corner and bottom-right diagonal half. A slight loss is noted in some mid-frequency positions within the area indicated between the lines in Fig. 3-b. Table 1 presents the overall results for the Type 1-3 NR shapes. It presents the parameters: #ctxaom: number of contexts in aom, #ctx: number of contexts in CT-s, ∆H : sum of ∆Hts for all posit-
ions, ∆Htl: the same in the top-left diagonal region, #NP: number of
Table 1: number of contexts and entropy savings
Bd Type #ctxaom #ctx ∆H ∆Htl #NP #NPtl
4, 8 2 4 6 .65 .51 1 1 8, 8 3 4 8 1.38 .93 2 0 8, 16 1 4 4 3.68 2.57 1 1 8, 16 2 4 4 1.41 .68 10 10 8, 16 3 4 8 3.13 2.15 5 5 16, 16 3 4 9 2.84 .94 36 33

locations where a loss is observed, #NPtl: the same in the top-left diagonal region. There is a consistent gain observed for all the cases. The 16×16 Type 3 is the case where more losses are observed.
Conclusion
This work presented a novel entropy coding design for NR transformation using partitioned DCT and OMP. The design provides performance improvement for block types where the transform coefficients behave very differently than those of DCT coefficients. The design is to be implemented in the reference software for these block types as a part of future work. Future work also includes testing possible design improvements such as considering the l1 norm in the correlated neighborhood and different scan-
 patterns for the block types closer to a rectangle.
References
[1] J. Han, B. Li, D. Mukherjee, C.-H. Chiang, A. Grange, C. Chen, H. Su, S. Parker, S. Deng, U. Joshi, Y. Chen, Y. Wang, P. Wilkins, Y. Xu, and J. Bankoski, “A technical overview of AV1,” Proceedings of the IEEE, vol. 109, no. 9, pp. 1435–1462, 2021. [2] T. Sikora and B. Makai, “Shape-adaptive DCT for generic coding of video,” IEEE Transactions on Circuits and Systems for Video Technology, vol. 5, no. 1, pp. 59–62, Feb 1995. [3] P. Kauff and K. Schuur, “Shape-adaptive DCT with block-based DC sepa-
ration and ∆DC correction,” IEEE Transactions on Circuits and Systems for Video Technology, vol. 8, no. 3, pp. 237–242, June 1998. [4] M. Gilge, T. Engelhardt, and R. Mehlan, “Coding of arbitrarily shaped image segments based on a generalized orthogonal transform,” Signal Processing: Image Communication, vol. 1, no. 2, pp. 153–180, Oct. 1989. [5] W. Hu, G. Cheung, A. Ortega, and O. C. Au, “Multiresolution Graph Fourier Transform for compression of piecewise smooth images,” IEEE Transactions on Ima-
ge Processing, vol. 24, no. 1, pp. 419–433, 2015. [6] W. Hu, G. Cheung, and A. Ortega, “Intra-prediction and Generalized Graph Fourier Transform for image coding,” IEEE Signal Processing Letters, vol. 22, no. 11, pp. 1913–1917, 2015. [7] A. Kaup, “Object-based texture coding of moving video in MPEG-4,” IEEE Transactions on Circuits and Systems for Video Technology, vol. 9, no. 1, pp. 5–15, Feb 1999. [8] H. H. Chen, M. Reha Civanlar, and B. G. Haskell, “A block transform coder for arbitrarily shape-
d image segments,” in Proceedings of 1st International Conference on Image Processing, vol. 1, Nov 1994, pp. 85–89 vol.1. [9] J. W. Yi, S. J. Cho, W. J. Kim, S. D. Kim, and S. J. Lee, “A new coding algorithm for arbitrarily shaped image segments,” Signal Processing: Image Communication, vol. 12, p. 231–242, Jun 1998. [10] A. Kaup and T. Aach, “Segment-oriented coding of textured images based on successive approximation,” in Proceedings of ICSIPNN ’94. International Conference on Speech, Image Proc-
essing and Neural Networks, April 1994, pp. 197–200 vol.1.
[11] P. Das, N. Horst, and M. Wien, “Coding of non-rectangular signals with block-based transforms,” in 2020 IEEE International Conference on Image Processing (ICIP), 2020, pp. 1152–1156.

[12] M. Bl ̈aser, J. Schneider, J. Sauer, and M. Wien, “Geometry-based partitioning for predictive video coding with transform adaptation,” in 2018 Picture Coding Symposium (PCS), 2018, pp. 134–138. [13] J. Han, C.-H. Chiang, and Y. Xu, “A level-map approach to transform coefficient coding,” in 2017 IEEE International Conference on Image Processing (ICIP), 2017, pp. 3245–3249. [14] D. Marpe, H. Schwarz, and T. Wiegand, “Context-based adaptive binary arithmetic coding in the h.264/avc video compre-
ssion standard,” IEEE Transactions on Circuits and Systems for Video Technology, vol. 13, no. 7, pp. 620–636, 2003. [15] P. Tudor, “Mpeg-2 video compression,” Electronics & communication engineering journal, vol. 7, no. 6, pp. 257–264, 1995.
[16] ITU, H.263: Video Coding for Low Bitrate Communication, Std. ITU-T Recommendation H.263, 2005.
[17] ISO, Information technology-Coding of audio-visual objects-Part 2: Visual, Std. ISO/IEC 14 496-2:2004, 2004. [18] C. Gonzales, “DCT coding of motion sequences including arithmetic coder,” ISO/IEC JCT1/SC2/WP8, MPEG, 89/187, 1989.
[19] D. Marpe and H. L. Cycon, “Very low bit-rate video coding using wavelet-based techniques,” IEEE transactions on circuits and systems for video technology, vol. 9, no. 1, pp. 85–94, 1999. [20] G. Heising, D. Marpe, H. L. Cycon, and A. P. Petukhov, “Wavelet-based very low bitrate video coding using image warping and overlapped block motion compensation,” IEE Proceedings-Vision, Image and Signal Processing, vol. 148, no. 2, pp. 93–101, 2001. [21] S.-J. Choi and J. W. Woods, “Motion-compensated 3-
-D subband coding of video,” IEEE Transactions on image processing, vol. 8, no. 2, pp. 155–167, 1999.
[22] Y. C. Pati, R. Rezaiifar, and P. S. Krishnaprasad, “Orthogonal matching pursuit: Recursive function approximation with applications to wavelet decomposition,” in Proceedings of 27th Asilomar conference on signals, systems and computers. IEEE, 1993, pp. 40–44. [23] Alliance for Open Media, “The 2nd anchor of AVM,” https://gitlab.com/AOMediaCodec/avm/-/tree/research-v2.0.0, Apr. 2023. [24] X. Zhao, Z. R. Lei, A. Norkin, T. Daede, and A. Tourapis, “AOM Common Test Conditions v2.0.” Alliance for -
Open Media, Codec Working Group, Document: CWGB075, 2021.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:39.041Z
- **Text Length:** 27075 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 10 of 10
