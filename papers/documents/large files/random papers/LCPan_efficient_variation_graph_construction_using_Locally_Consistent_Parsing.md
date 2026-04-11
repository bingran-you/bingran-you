# PDF Document: Ashyralyyev et al. - 2025 - LCPan efficient variation graph construction using Locally Consistent Parsing.pdf

**File Path:** Ashyralyyev et al. - 2025 - LCPan efficient variation graph construction using Locally Consistent Parsing.pdf

**Processed Date:** 2026-02-10T18:16:27.566Z

**File Size:** 344.29 KB

**Total Pages:** 18

**Extracted Pages:** 18

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3620

**Title:** LCPan: efficient variation graph construction using Locally Consistent Parsing

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

LCPan: efficient variation graph construction using Locally Consistent Parsing
Akmuhammet Ashyralyyev1, Zülal Bingöl1, Begüm Filiz Öz1, Salem Malikic2, Uzi Vishkin3, S. Cenk Sahinalp2, and Can Alkan1
1 Dept of Computer Engineering, Bilkent University, Ankara 06800, Turkey
akmuhammet@bilkent.edu.tr, zulal.bingol@bilkent.edu.tr, filiz.oz@ug.bilkent.edu.tr, calkan@cs.bilkent.edu.tr
2 Cancer Data Science Laboratory, Center for Cancer Research, National Cancer Institute, National Institutes of Health, Bethesda, MD 20892, United States
salem.malikic@nih.gov, cenk.sahinalp@nih.gov
3 University of Maryland Institute for Advanced Computer Studies (UMIACS), College Park, MD 20742 United States
vishkin@umd.edu
Abstract. Efficient and consistent string processing is critical in the exponentially growing genomic data era. Locally Consistent Parsing (LCP) addresses this need by partitioning an input genome string into short, exactly matching substrings (e.g., “cores”), ensuring consistency across partitions. Labeling the cores of an input string consistently not only provides a compact representation of the input but also enables the reapplication of LCP to refine the cores over multiple iterations, provid-
ing a progressively longer and more informative set of substrings for downstream analyses. We present the first iterative implementation of LCP with Lcptools and demonstrate its effectiveness in identifying cores with minimal collisions. Experimental results show that the number of cores at the ith iteration is O(n/ci) for c ∼ 2.34, while the average length and the average distance between consecutive cores are O(ci). Compared to the popular sketching techniques, LCP produces significantly fewer c-
ores, enabling a more compact representation and faster analyses. To demonstrate the advantages of LCP in genomic string processing in terms of computation and memory efficiency, we also introduce LCPan, an efficient variation graph constructor. We show that LCPan generates variation graphs >10× faster than vg, while using >13× less memory.
Keywords: Locally consistent parsing, genome representation, variation graph
1 Background
Advances in genomic sequencing technologies and reductions in sequencing costs have significantly increased the production of sequencing data over the last two decades. These advancements have boosted the development of a plethora of computational methods for various use cases, including building genome assemblies [1], pangenome graph construction [2], phylogenetic analysis [3], and metagenome classification [4]. Due to the immense size of genomic sequence data, many of the computational approache-
s for various tasks such as genome assembly [1], metagenome distance estimation [5], read mapping [6], copy number variation (CNV) genotyping [7], and large-scale sequence database search [8] rely on representing, storing and indexing data as contiguous segments/substrings of length k (i.e., k-mers). However, indexing all possible k-mers uses excessive memory resources. Alternatively, compressed (e.g., Burrows-Wheeler Transformation [9] and FM-index [10]) or hash-based set membership data structur-
es (e.g., Bloom filters [11]) can be used for smaller memory footprints with the cost of slower lookups [12].
arXiv:2511.12205v2 [q-bio.GN] 18 Nov 2025

To reduce memory requirements while keeping the advantages of constant time querying, Roberts et al. proposed to build a sketch of the data, and index only a subset of k-mers, called minimizers [13], that can be broadly classified into two classes. The simpler class, called universal minimizers, includes only k-mers with a hash value less than a specified threshold [14], which are used, for example, in the rust-mdbg tool to quickly build minimizer-space de Bruijn graphs [15]. The second method fi-
nds the k-mers with the minimum hash values within all substrings of size w (i.e., window) over the input string. Minimap2, a state-of-the-art sequence alignment tool, uses this window-based approach to efficiently map long reads to the reference genomes [16]. An alternative approach to sampling substrings is Universal Hitting Set (UHS) [17], a set of k-mers included in every sequence of length L. The main drawback of this approach is that computing a minimal set for a given k and L is NP-hard [17-
], and thus approximation algorithms and heuristic methods are employed instead [17,18]. In order to address accuracy loss in the presence of sequencing errors, strobemers [19] were introduced to concatenate selected minimizers to improve indexing and error tolerance. Alternatively, syncmers [20] select k-mers based on specific subsequence properties, offering better conservation, lower sampling density, and higher error tolerance compared to classical minimizers. As an alternative to the aforemen-
tioned sketching techniques, Locally Consistent Parsing (i.e., LCP) [21,22] proposes a string partitioning method with consistent data reduction for building dictionaries like indexes. Sahinalp and Vishkin introduced LCP based on the Deterministic Coin Tossing (DCT) [23] technique, to construct suffix trees in parallel efficiently. LCP was also applied to pattern matching [21,24] and edit distance computation [25]. A practical but non-iterative variant of LCP was implemented to boost the Lempel-Zi-
v algorithm for compressing biological sequences [26]. Later, locally consistent grammar-based text compression was proposed in [27]. Other applications of LCP, such as approximate string comparison and text indexing, can be found in [28,29,30]. In this article, we introduce a generalized, iterative, and practical implementation of LCP, called Lcptools, providing an experimental analysis of the properties of the cores compared to minimizers, syncmers, MinHash sketches and UHS. The analysis highlig-
hts that LCP cores are fewer in number and exhibit longer but more consistent distribution throughout the processed string. We also demonstrate the utility of LCP for variation graph construction using our novel algorithm LCPan that outperforms vg, the state-of-the-art variation graph constructor, in both running time (> 10×) and memory usage (> 13×), while demonstrating slightly better alignment accuracy using GraphAligner [31] on HiFi data. We note that both LCPan and vg generate variation graph-
s using a linear reference genome and a VCF file that contains genomic variation, where alternatives like pggb [32] and Minigraph-Cactus [33] build variation graphs using fully assembled contigs and scaffolds. We therefore limit our comparisons to only using vg for data consistency.
2 Results
Locally Consistent Parsing (LCP) is a string processing technique that partitions and labels strings into nearly equal-length substrings, known as cores [21,22]. Unlike sketching techniques, LCP ensures that (1) the cores have a uniform positional distribution over the input string, (2) identical cores share the same labels, and (3) each character in the input string is included in at least one core. In this section, we provide our analysis of the properties of LCP cores at different levels, as we-
ll as LCPan efficiency. For our experiments, we used a server with an Intel Xeon CPU (2.2 GHz) with 112 cores and 768 GB of main memory.
2

2.1 Properties of LCP Cores
We analyzed the properties of the cores on the first fully assembled human genome (CHM13v2.0) generated by the Telomere-to-Telomere Consortium (T2T) [34]. We measured several metrics at each level up to level-8: 1) the number of identified cores, 2) the number of unique core labels, 3) the distances between the starting locations of cores, 4) the lengths of the underlying strings represented by the cores, and 5) the execution time to partition the input string up to the specified LCP level. Table -
1 summarizes our findings and demonstrates that the entire genome can be represented by only 3.6 million cores at level 8, and each level nearly halves the number of cores. As shown in Table 1, the total number of cores decreases progressively as the levels increase, from approximately 1.4 billion at level-1 to only 3.6 million at level-8. Between each successive level, the core count is reduced by a factor of 0.43. Because the reduction is consistent across successive levels, we can estimate the -
number of cores in each level for any given input string. This, in turn, enables us to calculate the memory footprint and the computational overhead for many genomic data applications. Conversely, the average distance between the starting coordinates of subsequent cores is 2.25 bp in level-1, and it reaches 854.87 bp in level-8. This change corresponds to a fold increase ranging from approximately 2.25 to 2.34 between levels.
Table 1. The experimental results of LCP on CHM13v2.0
LCP Level 1 2 3 4 5 6 7 8
Total # of Cores 1,385,807,259 595,674,177 253,384,737 108,531,321 46,426,965 19,885,308 8,514,640 3,646,315 Unique Cores 1,395 517,688 159,701,016 93,601,379 42,859,941 18,795,370 8,191,525 3,563,854 Exec. Time (sec) 71.94 68.72 31.31 13.65 5.68 2.48 1.04 0.44
Avg Distance 2.25 5.23 12.30 28.72 67.14 156.76 366.10 854.87 StdDev Distance 1.04 1.85 4.21 8.74 19.95 45.24 104.24 241.08
Avg Length 3.67 10.47 26.58 63.84 151.23 354.89 830.88 1,941.85 StdDev Length 1.01 1.90 4.32 8.83 19.49 43.02 97.57 222.96
Decrease in Core Count 0.44 0.43 0.43 0.43 0.43 0.43 0.43 0.43 Increase in Avg Length 3.67 2.85 2.54 2.40 2.37 2.35 2.34 2.34 Increase in Avg Distance 2.25 2.33 2.35 2.33 2.34 2.33 2.34 2.34
Total Size (GB) 56.79 24.41 10.38 4.45 1.90 0.81 0.35 0.15
We used Lcptools to generate LCP statistics using the CHM13v2.0 genome with a single iteration of DCT. Decrease in Core Cnt. is the proportional reduction in the number of cores compared to the previous level. Increase in Avg Len. is the proportional increase in the average core length compared to the previous level. Increase in Avg Dist is the proportional increase in the average distance between start positions of consecutive cores compared to the previous level. Notably, while the decrease in t-
he core count is consistently 0.43, the increase in the average core length and the increase in the average distance converge to 1/0.43 = 2.33.
Next, we examined the average length of the sequences represented by cores at each level. At the first level, the average core length is 3.67, aligning with expectations since LMIN, LMAX, and SSEQ cores (given an alphabet of four letters) each span only three characters, whereas RINT cores are longer. The core lengths increase steadily at higher levels, exceeding 1.9 kb by level 8. We then compared the LCP method against commonly used sketching methods, namely minimizers, syncmers, UHS, and MinHas-
h, using the same input genome to assess the performance of each method regarding the number of selected k-mers and the distances between each selected
3

k-mer. The LCP levels were selected as 2 and 3 because the average length of the cores is similar to the commonly used k-mer sizes in practice. We selected k = 15 and w = 10 for the canonical minimizers as these are the default values in the popular minimizer-based alignment tool, Minimap2 [16]. For the syncmer analysis, we selected k = 15, s = 4, and t = 0, allowing s-mers to be located only at the beginning of the k-mer, based on the recommended settings in the original publication [20]. For th-
e UHS analysis, we downloaded the pre-computed k-mer sets released by the authors [17]4 for k = 13 and L = 20. We then mapped these k-mers to the CHM13v2.0 assembly and retained only those that matched exactly. Finally, for MinHash, we analyzed the default Mash sketch size of 1,000 k-mers, and additionally 5 million k-mers (k = 31), which roughly corresponds to the number of cores in LCP level 8.
As shown in Table 2, for k = 15, we found over 665 million minimizers in CHM13v2.0, among which 92.6 million were unique. Syncmer count was smaller, at 371 million with 58 million unique. Since UHS are computed independently from a reference genome, the unique count was smaller, at 20.6 million. Still, when mapped to the genome, it returned 983.5 million locations, the highest value among all techniques tested. This is likely because the UHS set contained many k-mers with long homopolymers. MinHas-
h is the coarsest-grained sketching method in our tests. As expected, it showed the smallest number of k-mers, which is a user-defined parameter. Similar to our LCP analysis, we calculated the average distances between each pair of minimizers, syncmers, UHS, and MinHash. On average, the distance between two consecutive minimizers was 4.69 nucleotides for k = 15, whereas the distance between two consecutive syncmers was 8.40 nucleotides. UHS k-mers were more densely organized in the genome, where t-
he average distance was 3.16 nucleotides. Once again, MinHash demonstrated the widest range of distances between selected k-mers, with 454.42 bp average distance for the large sketch size (5 million) and 2.78 Mb distance for the default sketch size of 1,000 in Mash. The cores in LCP level-2 were, on average, 10.47 bp, and in level-3, were, on average, 26.58 bp; the former is slightly shorter, and the latter is slightly longer than the minimizer and syncmer lengths we considered. Although shorter, -
the number of level-2 cores was less than that of minimizers for k = 15. Importantly, the number of unique level-2 cores is several orders of magnitude smaller than the minimizers or syncmers of any size, thanks to consistent identification of cores using LCP. The number of level-3 cores is less than all the alternatives we considered, except MinHash. Perhaps most importantly, among all the other sketches, LCP deviates less proportionally from the average distances. Higher LCP levels show even low-
er numbers of cores, therefore reducing the computational cost for storage, indexing, and query (Table 1).
We note that finding minimizers and syncmers requires only a linear scan of the input string and simple lexicographic comparison, therefore faster than identifying cores in LCP in practice. Computing UHS, on the other hand, is NP-hard [17]; thus, the UHS k-mer sets can only be approximated. However, the granularity of sketches generated by LCP is adjustable using different levels. Therefore, depending on the specific use case, longer but fewer or shorter but more frequent cores can be used. On the-
 other hand, higher LCP levels are constructed by parsing lower levels; therefore, cores at several levels can be computed in one pass of the input string. Similar flexibility by minimizers and syncmers can be achieved only by changing the parameters k, w, and s, which will require multiple passes on the input string and incur significant bottlenecks on both the sketching method’s run time and memory footprint. However, we leave a rigorous comparison of LCP with sketching methods for read mapping -
as future work.
4 https://acgt.cs.tau.ac.il/docks/
4

Table 2. Properties of Minimizers, Syncmers, and UHS compared to LCP in CHM13v2.0.
Metric Minimizer Syncmer UHS LCP-2 LCP-3 MinHash-1K MinHash-5M
K-mer size† 15 15 13 10.47 26.58 31 31 Window size‡ 10 − 20 - - - S-mer size − 4 - - - - Total k-mers 665.1M 371.1M 983.5M 595.7M 253.4M 1.1K 6.9M Unique k-mers 92.6M 58M 20.6M 0.5M 159.7M 1K 5M Avg Distance 4.69 8.40 3.16 5.23 12.30 2.78M 454.42 StdDev Distance 3.15 8.20 1.36 1.85 4.21 3.2M 463.73
†We show the average core length for LCP, and ‡ L for UHS. We also provide the statistics for MinHash using sketch sizes of 1,000 and 5,000,000.
2.2 Properties of LCPan Graphs and Construction Performance
Table 3. Experimental evaluation of LCPan and VG using the HPRC data set on GRCh38
Metric LCPan (4) LCPan (5) LCPan (6) LCPan (7) VG
Total # Segments 408,484,050 196,921,188 106,364,013 67,566,361 490,391,209 Total # Links 423,677,516 212,114,654 121,557,479 82,759,827 519,013,255
Avg. Seg. Len. 26.18 54.32 100.56 158.31 28.23 StdDev Seg. Len. 11.80 31.99 80.56 184.44 9.67
Exec. Time (sec) 475.98 421.04 391.49 375.14 4958.44 Peak memory (GB) 8.62 6.99 6.25 5.89 114.56 Output r/GFA (GB) 44.24/28.11 26.61/18.94 19.10/15.05 15.89/13.40 -/33.83
We compared graph construction metrics between LCPan and VG using the HPRC data set [35] on GRCh38. The table shows the total number of segments, total number of links, execution time, average segment length, standard deviation of segment length, memory usage (RSS), and output size for different LCP levels of LCPan and VG.
We constructed variation graphs, with varying LCP levels, using the human reference genome (GRCh38) as the backbone and the genomic variations released by the Human Pangenome Reference Consortium [35]. We first evaluated the performance of LCPan at different LCP levels. We observed a consistent decrease in the number of segments in LCPan, from 408 million at level-4 to 67 million at level-7. The number of links followed a similar pattern, decreasing from 423 million to 82 million between levels 4 -
and 7. The average segment length increased from 26.18 bp to 158.31 bp as the LCP level increased, while the standard deviation of the segment lengths rose from 11.80 bp to 184.44 bp. Reducing the number of segments and links helped decrease the memory usage from 8.63 GB to 5.89 GB. We also observed a similar decreasing trend in the final output size in GFA and rGFA formats up to level-7. vg generated a variation graph with an average segment length of 28.23 bp, comparable to LCP level-4, and a st-
andard deviation of 9.67 bp. However, it used significantly more memory at 114.56 GB. LCPan was >10× faster than vg at level-4 while using 13.29× less memory, with additional improvements at higher LCP levels. Note that vg cannot process large inputs, particularly for chromosomes that contain tens of millions of base pairs5 and
5 https://github.com/vgteam/vg/issues/4152
5

with VCF files that contain millions of variations. To manage such large data sets, we followed the vg user manual to process the genome in segments and then merged the output using the vg combine command. The construction of variation subgraphs was completed in 35 minutes using 9.18 GB of memory, while merging required an additional 47.5 minutes and 114.56 GB of memory. In addition to the construction time, vg requires an additional ∼11 minutes and 91 GB of memory to convert the output graph to -
GFA format.
2.3 Scaling to multiple threads
11
1
Fig. 1. Multi-thread scaling analysis of LCPan using HPRC data on GRCh38. Memory and run time of graph construction using different numbers of threads.
LCPan first processes the reference genome to build the backbone graph sequentially and then assigns the set of variations to multiple threads to amend the graph. The partition consistency provided by LCP enables LCPan to efficiently scale computation into multiple threads. To evaluate the parallelization performance, we constructed the same variation graph using different numbers of threads (Figure 1). We observed that the memory usage was not significantly affected across different thread settin-
gs. Meanwhile, LCPan speed was improved up to 16 threads, and more threads did not improve the run time. This plateau in thread scaling is caused by two limiting factors: sequential processing of the reference genome and the task allocation speed of the main thread that distributes the processing to the worker threads.
2.4 Alignment accuracy
We next evaluated the accuracy of read mapping to variation graphs generated by LCPan and vg, using various read (PacBio HiFi and ONT) and variation graph data sets. As outlined in the introduction, a direct comparison with pggb and Minigraph-Cactus is methodologically inconsistent because LCPan and vg construct variation graphs by augmenting a linear reference with variants
6

from a VCF file, whereas pggb and Minigraph-Cactus build graphs de novo using multiple wholegenome assemblies. We therefore limited our comparisons to only vg. We performed the experiments with chromosomes 1, 10, and 22 (GRCh38), which provide a range of lengths and repeat/duplication complexity.
We constructed both LCPan and vg variation graphs using only chromosomes 1, 10, and 22 (GRCh38) and the variants released by the Human Pangenome Reference Consortium (HPRC) [35]. vg constructed the graph in 6m 18s using 12.91 GB of memory, while LCPan constructed the graph in only 2m 16s using 2.17 GB of memory. We set the k-mer size in the vg graph to 64 and the LCP level to 5 for LCPan to make the average segment sizes (i.e., lengths of the sequences represented in nodes) comparable. The resulti-
ng graphs included segments of average lengths 56.25 bp and 55.17 bp for LCPan and vg, respectively.
Next, we aligned both PacBio HiFi and ONT reads generated from the HG002 sample by the Telomere-to-Telomere (T2T) Consortium (v1.0 assembly polishing/mapping data) [36], to the constructed variation graphs. Since LCPan is focused solely on variation graph construction, and vg is optimized for short read data [37], we used GraphAligner [31] with 96 threads in our mapping experiments for both types of graphs.
Table 4. GraphAligner alignment results for PacBio HiFi and ONT reads aligned on LCPan and VG graphs from chromosomes 1, 10, and 22.
Graph LCPan VG
Dataset PacBio HiFi ONT PacBio HiFi ONT
Input Reads 820,665 281,312 820,665 281,312 Reads w/ align. 820,665 281,306 820,665 281,308
Align. Time (hh:mm:ss) 06:49:06 06:19:06 08:12:07 07:42:47 Memory (GB) 82.01 114.57 83.08 103.29
Precision 0.40 0.41 0.38 0.41 Recall 0.70 0.70 0.72 0.71 F1 0.51 0.51 0.50 0.52
The average lengths of PacBio HiFi and ONT reads are 15,955 bp and 47,000 bp, respectively, corresponding to ∼30× depth of coverage. Precision, recall, and F1 values are comparable across all tests, while LCPan-based alignment using GraphAligner is ∼1.2× faster.
We used the structural variation (SV) call sets released by the the Genome in a Bottle Project [38]6 using the pbsv tool [39], as a proxy to calculate alignment accuracies. Our evaluation involved calculating precision, recall, and F1-scores, with a tolerance of a ±100 bp margin around the SV breakpoints. To ensure a fair comparison, we also generated SV calls using the pbsv tool, and restricted the variations to match the ground truth. Table 4 summarizes the mapping results. Nearly all reads were-
 aligned to the vg and LCPan graphs across two data sets. However, we observe that GraphAligner completed alignments on the LCPan graph ∼1.2× faster than on the vg graph, though it required slightly more memory on the ONT dataset. Overall, performance metric values for accuracy across different data sets using LCPan and vg graphs remained consistent.
6 https://ftp-trace.ncbi.nlm.nih.gov/ReferenceSamples/giab/data/AshkenazimTrio/analysis/
7

3 Discussion
In this paper, we showed that LCP provides a consistent, uniform, and efficient approach for genomic string partitioning. We also showed that LCP helps improve computational efficiency and parallelization of variation graph construction. One of the key features of the LCP technique is its flexibility in selecting levels, allowing the adjustment of the granularity of the cores based on the requirements of specific use cases. For example, middle-level (i.e., 4-5) can be more appropriate for genomic -
data compression, where large CNV discovery could be achieved using higher levels. LCP can also be used in place of k-mers or minimizers in genome assembly using long and accurate reads. The relationships between levels and the length and distance properties at each level could also be utilized; for example, a hierarchical strategy can be used to align long sequences. However, the analysis of “best practices” for LCP level selection for each potential use case requires rigorous analysis and experi-
mentation, which we leave as future work. We also demonstrated that using LCP, our variation graph construction method, LCPan, significantly reduces memory consumption while maintaining high computational efficiency. Partition consistency supplied by LCP enables better parallelization, more efficient resource utilization, leading to lower memory usage and faster execution times. Experimental results show that LCPan consistently outperforms vg in execution speed and scales well with an increasing n-
umber of threads. While LCPan currently only implements the graph-building step, vg is an all-inclusive tool that builds the graph, aligns reads, and genotypes variants. Although vg supports multi-threading, its performance did not scale efficiently with an increasing number of threads. On the other hand, even without indexing and cache optimizations, LCPan surpasses vg in graph construction efficiency while reducing memory usage and execution time. This demonstrates the inherent efficiency of LCP-
based variation graph construction. However, a formal analysis for alignment accuracy remains as future work. Although originally developed more than 30 years ago, the practical use of Locally Consistent Parsing remained limited. LCP applies, in theory, to various problems arising from sequence analysis, such as edit distance approximation [28], string embeddings [25], memory-efficient text indexing [29], and compression [27]. Here, we provide an API to enable researchers to fully exploit the LCP -
method for different use cases. Our implementation can easily be extended for non-DNA alphabets, enabling the processing of, for example, protein sequences. Further research using LCP, made practical through Lcptools, will potentially prove the efficiency and accuracy of various algorithms and impact biomedical research.
4 Methods
The key properties of LCP have been formally defined earlier in [22]:
Definition 1. Partition Consistency: Given an input string S, suppose that a substring Xi starts at position i and Xj starts at position j. If Xi = Xj, then with a possible exception of left and right margins, Xi and Xj are partitioned in the same way.
Definition 2. Labeling Consistency: All cores that consist of the same characters are assigned the same labels.
Note that these properties of LCP supersede the window guarantee provided by sketching techniques since all of the input string is represented within cores.
8

Below, we describe a simple variant of LCP, expressed in terms of four rules, to identify cores in an input string from a given alphabet (e.g., the 4-letter DNA alphabet). We will later show how to apply LCP iteratively using DCT in Section 4.1.
1. Local Minimum Rule (LMIN): A substring w, |w| = 3, w = xyz, is a core, if the middle character y is a proper local minimum (w.r.t. the lexicographic ordering of the characters). Specifically, for x ̸= y and y ̸= z, the middle character y must satisfy x > y and y < z. 2. Local Maximum Rule (LMAX): A substring w, |w| = 3, w = xyz, is a core, if the middle character y is a proper local maximum, and neither x nor z is a local minimum. Specifically, for w = xyz that appears within the superstring sx-
yzt, the middle character y satisfies x < y, y > z, and additionally s ≤ x and z ≥ t. 3. Repetitive Interior Rule (RINT): A substring w, |w| > 3 is a core if all its characters except the first and the last characters are identical. Specifically, for w = xyiz, where i > 1, x ̸= y, and y ̸= z, the substring w satisfies the condition of being a core. 4. Stranded Sequence Rule (SSEQ): A substring w, |w| > 2 is a core if its characters are either strictly increasing or decreasing w.r.t. the lexicograp-
hic order, and only the first and last characters are part of either a LMIN, LMAX, or a RINT cores. Specifically, if w = xyza0 . . . anklm, where n ≥ 1 and xyz and klm are identified as cores and z < a0 < . . . < an < k or z > a0 > . . . > an > k, then za0 . . . ank is a core (SSEQ type).
Figure 2 depicts an example of the cores identified in a short DNA sequence. As the cores are identified, the two-bit encoding of the underlying characters (i.e., A = 00, C = 01, G = 10, T = 11) is used to form the core’s bitstream. Note that we use the term core alphabet to refer to the bitstreams that form the cores, specifically the DNA encoding used in the first LCP iteration.
TCCGACGTAGTGCT
11 01 01 10 00 01 10 11 00 10 11 10 01 11
11010110
100001
011011
110010
101110
100111
A:00 C:01 G:10 T:11
Fig. 2. Processing a string using LCP. Here, blue underlines the core that satisfies the Local Minimum core, green represents a Local Maximum core, red corresponds to a Repetitive Interior core, and yellow denotes a Stranded Sequence core.
Given any input string7, LCP ensures that the distances between consecutive cores are small. We now show that the cores identified through the rules above satisfy the Contiguity Property and the Adjacency Property. We provide the lemma definitions below and the formal proofs in the Supplementary Note.
Lemma 1. Contiguity Property: There are no gaps between any pair of consecutive cores identified by LCP.
7 From this point on, we will use the terms string and sequence interchangeably.
9

The contiguity property guarantees that the cores fully represent the input string and all characters in the input are included in at least one core.8
Lemma 2. Adjacency Property: within a substring of length 3, at most 2 characters can be the starting positions of the cores.
The adjacency property dictates that for w = xyzlmn, if xyz is a core, the next two cores cannot start simultaneously at y and z. As the number of cores that start in a window of size 3 cannot exceed 2, we can assert that, in the worst case, the total number of cores will be bounded by 2n/3, where n is the length of the input string. The worst case occurs, for example, in S = gcggcggcg . . . gcg, where c < g. In this sequence, the number of LMIN cores (e.g., gcg) will be n/3, and the number of RIN-
T cores (e.g., cggc) will be n/3 − 1, resulting in a total of 2n/3 − 1 cores. However, if LMAX and SSEQ cores are also identified in the string, the cores are positioned further apart, leading to a smaller number of cores.
4.1 Iterative Application of Locally Consistent Parsing
Our goal is to apply LCP iteratively to increase the distances between consecutive cores while reducing their number and increasing their length by a constant factor. However, since the core bitstreams are larger than the string’s alphabet (in our context, DNA), directly applying the LCP rules to these bitstreams would increase the distances without constraints. To address this, starting from the second LCP iteration (i > 1), the bitstreams and LCP operations depend on the reduction in alphabet si-
ze via DCT.9 After this reduction in alphabet size, the string of core bitstreams will satisfy both Lemmas 1 and 2, maintaining an even distance distribution and compact length; thus, LCP can be applied iteratively.
... 100001 011011 11101011 101110 011011 ...
... 11 1000 00 01 ...
Fig. 3. DCT for reducing bitstreams to a new alphabet. Each block above corresponds to the bitstream of a core. The DCT compares each core’s bitstream to its left neighbor to form a shorter alphabet. E.g., the least significant bit of the core bitstream 11101011, which differs from its left neighbor 011011 at the fourth index (counting from the right and starting at index 0). The value of this bit is 0. Therefore, DCT replaces the core bitstream 11101011 with the concatenation of the bits of 4, an-
d the value of the differing bit, resulting in 1000. The figure shows the reduced alphabet inferred by the DCT for each core bitstream, on which LCP can be applied.
As described in Figure 3, DCT takes the bitstreams of cores at level i as input, compares each core’s bitstream with its left neighbor, and finds the least significant bit where it differs from the right. Then, it replaces the original bitstream with a shorter bit string formed by concatenating the index of the differing bit with the value of the corresponding bit. If the number of bits representing a
8 This may be violated by a small number of characters at the extreme ends of the input string. 9 When fully applied, the DCT reduces the alphabet size to 2, enabling a uniform bitstream length of 6, which is crucial for maintaining consistency in later LCP iterations.
10

core bitstream is k, DCT will produce a reduced bitstream of length log(k)+1. Here, k represents the number of bits in the original core bitstream, and log(k)+1 corresponds to the binary representation of the differing bit’s index and its value10.
Fig. 4. Overview of the LCP with DCT and Labeling Paradigm.
Thus, in iteration i > 1, after applying DCT on bitstreams and then LCP on newly computed alphabets, we can identify level-(i + 1) cores. Let x be the core at level-(i + 1), which is composed of level-i cores y, z, w, . . ., i.e. x = yzw . . . Suppose that the DCT reduced alphabet size for these cores is y′, z′, w′, . . .; then the level-(i + 1) core bitstream for x will be the concatenation of these bit strings, namely, y′z′w′ . . .. Since DCT consistently reduces each occurrence of the combinati-
on yzw . . . to the same bitstream representation, the cores are guaranteed to align consistently in the resulting bitstream. Equipped with DCT, each iteration of LCP will reduce the number of cores while increasing the average length of a core and the average distance between two consecutive cores by a constant factor c. As shown earlier, while this constant c is at least 3/2, in practice c ∼ 2.34 as demonstrated in Table 1. The cores identified in iteration i are said to be of level-i cores. The-
re will be ∼ n/ci cores of level-i, representing substrings of length O(ci); the average distance between consecutive cores will be ci. LCP runs in time linear with the length of the input string at each level. Since the number of cores decreases geometrically by a factor of c at each level, the running time of LCP for all levels is linear in the length of the original input string.
4.2 Labeling Paradigm of LCP Cores
A key concern in the LCP technique is the process of assigning labels to LCP cores. This step is essential, as the assigned labels represent the underlying string and must be as distinct as possible.
10 It is possible to apply DCT again to the DCT-reduced core bitstreams to further decrease the alphabet size. However, in this implementation, we apply DCT only once.
11

To achieve this, we follow the following approach to labeling cores. For a core x at level i > 1, and if it is composed of level-(i−1) cores y, z, w, . . ., then the label for x is assigned as x′′ = ψ(y′′, z′′, w′′, . . .). Here, ψ is a hash function designed to combine the labels y′′, z′′, w′′, . . . to ensure the distinctiveness of the new core label x′′. For labeling level-1 cores, the labels are directly derived from the characters of the underlying string, ensuring that each character or sub-
string is uniquely represented.
Figure 4 illustrates these high-level concepts of LCP, DCT, and labeling, to provide a comprehensive visual summary of the overall process.
1
2
3-4
GACG TCCGACGTGGTG CT
TAAG
AAA
A DEL INS INDEL SNP
GACG TCC
TAAG
GA
AAA
CG T
A
G GT G CT
Fig. 5. Overview of the LCPan Method.
4.3 String Processing with Lcptools
We have developed Lcptools as a C-based application programming interface (API) that implements the LCP method, which iteratively processes input strings and generates cores at multiple levels. Lcptools is primarily designed for processing genomic sequences as it assumes the input strings are generated from the DNA alphabet (i.e., Σ = {A, C, G, T }). Lcptools also includes functions to save and load the cores for later usage. To enhance the flexibility and usability of Lcptools, we provide several-
 options to perform LCP, such as custom alphabet encoding. Finally, labels are assigned to cores using MurmurHash [40] as ψ, ensuring efficient and consistent hashing for labeling (Figure 4).
12

4.4 Variation Graph Construction with LCPan
To highlight the efficiency and accuracy gained using the LCP technique for string processing, we developed LCPan, a variation graph construction tool that leverages the Lcptools API to partition strings rapidly. The state-of-the-art variation graph construction tool, vg, internally constructs the graph, performs all computations within it, such as simplification, and then serializes the result, which ultimately leads to high resource consumption. Unlike vg, LCPan facilitates better memory utiliza-
tion, leading to smaller storage and memory requirements while maintaining near-uniform partitioning. As illustrated in Figure 5, LCPan applies the following steps for pangenome graph construction:
1 Process each input genome up to a specified LCP level to partition into cores. 2 Cluster variations that originate within each LCP core. 3 Further partition each LCP core to integrate the variations. 4 Link the variations to the backbone reference genome.
Finally, for both ends of the sequences, we allocate separate segments to represent the reference sequence completely. Note that there might be at most two such segments in a given ungapped sequence.
Data availability
An open source (BSD 3-Clause License) implementation of Lcptools is available at https://
github.com/BilkentCompGen/lcptools and LCPan is available at https://github.com/BilkentCompGen/ lcpan.
13

References
1. Steinberg, K. M. et al. Building and improving reference genome assemblies. Proceedings of the IEEE 105, 422–435 (2017). 2. Computational Pan-Genomics Consortium. Computational pan-genomics: status, promises and challenges. Briefings in Bioinformatics 19, 118–135 (2018).
3. Kapli, P., Yang, Z. & Telford, M. J. Phylogenetic tree building in the genomic age. Nature reviews. Genetics 21, 428–444 (2020). 4. Pinto, Y. & Bhatt, A. S. Sequencing-based analysis of microbiomes. Nature reviews. Genetics (2024). 5. Ondov, B. D. et al. Mash: fast genome and metagenome distance estimation using MinHash. Genome Biology 17, 132 (2016). 6. Li, H. Aligning sequence reads, clone sequences and assembly contigs with BWA-MEM. arXiv preprint arXiv:1303.3997 (2013).
7. Shen, F. & Kidd, J. M. Rapid, paralog-sensitive CNV analysis of 2457 human genomes using QuicK-mer2. Genes 11 (2020). 8. Solomon, B. & Kingsford, C. Fast search of thousands of short-read sequencing experiments. Nature biotechnology 34, 300–302 (2016). 9. Burrows, M. & Wheeler, D. J. A block sorting lossless data compression algorithm. Tech. Rep., Digital Equipment Corporation (1994). 10. Ferragina, P. & Manzini, G. Opportunistic data structures with applications. In Foundations of Computer Sci-
ence, 2000. Proceedings. 41st Annual Symposium on, 390–398 (2000). URL http://ieeexplore.ieee.org/ stamp/stamp.jsp?arnumber=892127.
11. Bloom, B. H. Space/time trade-offs in hash coding with allowable errors. Communications of the ACM 13, 422–426 (1970). 12. Marchet, C. et al. Data structures based on k-mers for querying large collections of sequencing data sets. Genome Research 31, 1–12 (2021). 13. Roberts, M., Hayes, W., Hunt, B. R., Mount, S. M. & Yorke, J. A. Reducing storage requirements for biological sequence comparison. Bioinformatics 20, 3363–3369 (2004). 14. DeBlasio, D., Gbosibo, F., Kingsford, C. & Marçais, G. Prac-
tical universal k-mer sets for minimizer schemes. In Proceedings of the 10th ACM International Conference on Bioinformatics, Computational Biology and Health Informatics, BCB ’19, 167–176 (Association for Computing Machinery, New York, NY, USA, 2019). 15. Ekim, B., Berger, B. & Chikhi, R. Minimizer-space de Bruijn graphs: Whole-genome assembly of long reads in minutes on a personal computer. Cell systems 12, 958–968.e6 (2021). 16. Li, H. Minimap2: pairwise alignment for nucleotide sequences. Bioin-
formatics 34, 3094–3100 (2018). 17. Orenstein, Y., Pellow, D., Marçais, G., Shamir, R. & Kingsford, C. Compact universal k-mer hitting sets. In Frith, M. C. & Pedersen, C. N. S. (eds.) Algorithms in Bioinformatics - 16th International Workshop, WABI 2016, Aarhus, Denmark, August 22-24, 2016. Proceedings, vol. 9838 of Lecture Notes in Computer Science, 257–268 (Springer, 2016). 18. Ekim, B., Berger, B. & Orenstein, Y. A randomized parallel algorithm for efficiently finding near-optimal universal hi-
tting sets. In Schwartz, R. (ed.) Proceedings of the 24th Annual International Conference on Research in Computational Molecular Biology (RECOMB) 2020, vol. 12074 of Lecture Notes in Computer Science, 37–53 (Springer, Padua, Italy, 2020). 19. Sahlin, K. Effective sequence similarity detection with strobemers. Genome research 31, 2080–2094 (2021). 20. Edgar, R. Syncmers are more sensitive than minimizers for selecting conserved k ‐mers in biological sequences. PeerJ 9, e10805 (2021). 21. Sahinalp, -
S. C. & Vishkin, U. On a parallel-algorithms method for string matching problems. In Bonuccelli, M. A., Crescenzi, P. & Petreschi, R. (eds.) Algorithms and Complexity, Second Italian Conference, CIAC ’94, Rome, Italy, February 23-25, 1994, Proceedings, vol. 778 of Lecture Notes in Computer Science, 22–32 (Springer, 1994). 22. Sahinalp, S. C. & Vishkin, U. Symmetry breaking for suffix tree construction. In Leighton, F. T. & Goodrich, M. T. (eds.) Proceedings of the Twenty-Sixth Annual ACM Symposium-
 on Theory of Computing, 23-25 May 1994, Montréal, Québec, Canada, 300–309 (ACM, 1994).
23. Cole, R. & Vishkin, U. Deterministic coin tossing and accelerating cascades: micro and macro techniques for designing parallel algorithms. In Hartmanis, J. (ed.) Proceedings of the 18th Annual ACM Symposium on Theory of Computing, May 28-30, 1986, Berkeley, California, USA, 206–219 (ACM, 1986).
14

24. Sahinalp, S. C. & Vishkin, U. Efficient approximate and dynamic matching of patterns using a labeling paradigm. In 37th Annual Symposium on Foundations of Computer Science, FOCS ’96, Burlington, Vermont, USA, 14-16 October, 1996, 320–328 (IEEE Computer Society, 1996). 25. Batu, T., Ergun, F. & Sahinalp, C. Oblivious string embeddings and edit distance approximations. In Proceedings of the Seventeenth Annual ACM-SIAM Symposium on Discrete Algorithm, SODA ’06, 792–801 (Philadelphia, PA, USA, 20-
06). URL http://dl.acm.org/citation.cfm?id=1109557.1109644.
26. Hach, F., Numanagic, I., Alkan, C. & Sahinalp, S. C. SCALCE: boosting sequence compression algorithms using locally consistent encoding. Bioinformatics 28, 3051–3057 (2012). 27. Diaz-Dominguez, D. Efficient terabyte-scale text compression via stable local consistency and parallel grammar processing. arXiv preprint arXiv:2411.12439 (2024).
28. Batu, T. & Sahinalp, S. C. Locally consistent parsing and applications to approximate string comparisons. In Proceedings of DLT 2005, 22–35 (Springer, Palermo, Italy, 2005). 29. Birenzwige, O., Golan, S. & Porat, E. Locally consistent parsing for text indexing in small space. In Proceedings of the Thirty-First Annual ACM-SIAM Symposium on Discrete Algorithms, SODA ’20, 607–626 (Society for Industrial and Applied Mathematics, USA, 2020). URL https://dl.acm.org/doi/10.5555/3381089.3381126. 30. D-
íaz-Domínguez, D., Navarro, G. & Pacheco, A. An lms-based grammar self-index with local consistency properties. In International Symposium on String Processing and Information Retrieval, 100–113 (Springer, 2021). 31. Rautiainen, M. & Marschall, T. GraphAligner: rapid and versatile sequence-to-graph alignment. Genome biology 21, 253 (2020). 32. Garrison, E. et al. Building pangenome graphs. Nature Methods 21, 2008–2012 (2024). 33. Hickey, G. et al. Pangenome graph construction from genome alignment-
s with Minigraph-Cactus. Nature biotechnology (2023).
34. Nurk, S. et al. The complete sequence of a human genome. Science 376, 44–53 (2022). 35. Liao, W.-W. et al. A draft human pangenome reference. Nature 617, 312–324 (2023). 36. Hansen, N. F. et al. A complete diploid human genome benchmark for personalized genomics. bioRxiv (2025). 37. Ma, J., Cáceres, M., Salmela, L., Mäkinen, V. & Tomescu, A. I. Chaining for accurate alignment of erroneous long reads to acyclic variation graphs. Bioinformatics 39 (2023). 38. Zook, J. M. et al. A robust benchmar-
k for detection of germline large deletions and insertions. Nature Biotechnology 38, 1347–1355 (2020). 39. Pacific Biosciences. pbsv: PacBio structural variant SV calling and analysis tools (2025). URL https://github. com/PacificBiosciences/pbsv. Accessed 1 July 2025. 40. Appleby, A. Murmurhash (2008). URL https://github.com/aappleby/smhasher.
Ethics declarations
Ethics approval and consent to participate
Not applicable.
Consent for publication
Not applicable.
Competing interests
No competing interest is declared.
Author contributions statement
A.A., Z.B., U.V., S.C.S., and C.A. developed the methods and conceived the experiments. A.A. and B.F.O. conducted the experiments. A.A., Z.B., S.M., S.C.S., and C.A. wrote and reviewed the manuscript.
15

Acknowledgments
We thank Ricardo Román-Brenes for technical support during the implementation phase, Mahmud Sami Aydın for their insightful comments and suggestions, and Ege Şirvan for helpful discussions on the early versions of variation graph construction.
Funding
This work was partially supported by the European Union’s Horizon Programme for Research and Innovation under grant agreement No. 101047160, project BioPIM, and the Intramural Program of the National Cancer Institute.
16

Supplementary Material
Proofs
Contiguity and Adjacency Properties
Lemma 1. Contiguity Property: no gaps exist between any pair of consecutive cores identified by LCP.
The contiguity property guarantees that cores fully represent the input string and prevents any characters in the input string from not being included in any core. We prove that LCP satisfies this property below.
Proof. Given a substring w = xyzlmn, one of the following must be correct.
1. If xyz is an LMIN core, then the substring zlm or lmn may satisfy the LMAX rule (y < z < l and l > m ≥ n; or y < z < l < m and m > n), assuming n is not the middle character of another LMIN core. On the other hand, if the lexicographic order of subsequent characters increases (i.e., y < z < l < m < n), the SSEQ rule will apply after LMIN until the downstream of the input string includes an LMIN, LMAX, or RINT core. Finally, if z = l or l = m, a RINT core will follow an LMIN core. 2. If xyz is a-
n LMAX core, then the substring zlm or lmn may satisfy the LMIN rule (y > z > l and l < m; or y > z > l > m and m < n). Alternatively, if the lexicographic order of subsequent characters decreases (i.e., y > z > l > m > n), the SSEQ rule will apply after LMAX until the downstream of the input string includes an LMIN, LMAX, or RINT core. Finally, if z = l or l = m; a RINT core will follow an LMAX core. 3. If xyz is a RINT core (i.e., xyz = xyiz, i > 1), then the substring zlm or lmn may satisfy the-
 LMIN rule (y > z > l and l < m; y > z > l > m and m < n). The RINT substring xyz can also be followed by an LMAX core where zlm or lmn may satisfy the LMAX rule (y < z < l and l > m; or y < z < l < m and m > n). If the lexicographic order of subsequent characters decreases (i.e., y > z > l > m > n), or increases (i.e., y < z < l < m < n), an SSEQ core will follow the RINT core until one of the LMIN, LMAX, or RINT rules is satisfied. If z = l or l = m, the RINT core will be followed by another RIN-
T core. 4. By definition, an SSEQ core shares characters with its neighbor, concluding the correctness of the Contiguity Property.
⊓⊔
We showed in Lemma 1 that a string can be fully represented without gaps using cores. Below, we show that there is an upper bound on the number of potential cores for a given string; this has implications for the efficiency of string processing and indexing. In fact, we demonstrate that the number of cores is a constant factor smaller than the length of the input string after LCP processing11. For that, we define the Adjacency Property as follows.
Lemma 2. Adjacency Property: within a substring of length 3, there could be at most 2 characters that could be the starting positions of cores.
11 The number of cores is further reduced after each iterative call to LCP; the cores identified in iteration i are called level i cores.

Similar to Lemma 1, the correctness of Lemma 2 can be proven by analyzing the possible placement of cores in substrings of length three.
Proof. Given a string w = xyzlmn, one of the following must be correct.
1. If xyz is an LMIN core, then zlm or lmn may be an LMAX core (i.e., z ̸= l and l ̸= m). By definition, no local minimum can exist adjacent to an LMAX core. Hence, they do not overlap for more than one character (i.e., an LMAX core cannot start with y). On the other hand, the closest RINT core after an LMIN core in w can be in yzlm, if z = l. The next core after yzlm can only start with l since the prefix of no core may be a repeat. Similarly, by definition, an SSEQ core may start only at or afte-
r z. 2. If xyz is an LMAX core, the closest LMIN core may only start at z. The closest RINT core could start at y if z = l, but in that case, no other core may start at z for the same reason outlined above. Again, the same reasoning applies to the next SSEQ core that follows an LMAX core. 3. If xyiz is a RINT core (i > 1), the closest possible cores may start after i characters. For example, if w = xyyznm, then xyyz is a RINT core, and the next LMIN, LMAX, or SSEQ core may start at yzn . . .. 4. I-
f xyz is an SSEQ core, the closest possible core may start after the third character (i.e., it may be zlm).
I

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:27.566Z
- **Text Length:** 49421 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 18 of 18
