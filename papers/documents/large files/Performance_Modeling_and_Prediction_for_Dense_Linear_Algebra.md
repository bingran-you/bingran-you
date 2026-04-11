# PDF Document: Peise - 2017 - Performance Modeling and Prediction for Dense Linear Algebra.pdf

**File Path:** Peise - 2017 - Performance Modeling and Prediction for Dense Linear Algebra.pdf

**Processed Date:** 2026-02-10T18:18:56.529Z

**File Size:** 5691.00 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2735

**Title:** Performance Modeling and Prediction for Dense Linear Algebra

**Collection:** Large Files

---

## Extracted Text Content

Performance Modeling and Prediction
for Dense Linear Algebra
Der Fakultät für Mathematik, Informatik und Naturwissenschaften der RWTH
Aachen University vorgelegte Dissertation zur Erlangung des akademischen
Grades eines Doktors der Naturwissenschaft
von
Elmar Peise, Master of Science
aus Aachen, Deutschland.
arXiv:1706.01341v1 [cs.PF] 1 Jun 2017



Abstract
This dissertation introduces measurement-based performance modeling and
prediction techniques for dense linear algebra algorithms. As a core principle,
these techniques avoid executions of such algorithms entirely, and instead predict
their performance through runtime estimates for the underlying compute kernels.
For a variety of operations, these predictions allow to quickly select the fastest
algorithm configurations from available alternatives. We consider two scenarios
that cover a wide range of computations:
To predict the performance of blocked algorithms, we design algorithm
independent performance models for kernel operations that are generated
automatically once per platform. For various matrix operations, instantaneous
predictions based on such models both accurately identify the fastest algorithm,
and select a near-optimal block size.
For performance predictions of BLAS-based tensor contractions, we pro
pose cache-aware micro-benchmarks that take advantage of the highly regular
structure inherent to contraction algorithms. At merely a fraction of a contrac
tion’s runtime, predictions based on such micro-benchmarks identify the fastest
combination of tensor traversal and compute kernel.
iii



Acknowledgments
First and foremost, I would like to express my sincere gratitude to my advisor
Paolo Bientinesi. While guiding me through my studies, he always embraced
my own ideas and helped me shape and develop them in countless discussions.
While he granted me freedom in many aspects of my work, he always had time
for anything between a quick exchange of thoughts and extensive brainstorming
sessions. Beyond our professional relationship, we enjoyed twisty puzzles and
board games in breaks from work, long game nights, and annual trips to SPIEL.
I consider my self lucky to have spend my time as a doctoral student with him
and his research group.
The HPAC group proved to be much more than a collection of researchers
working on remotely associated projects; my colleagues were not only a source
of incredibly valuable discussions and feedback regarding my work, we also
indulged in various unrelated arguments and exchanges over lunch and at
many other occasions. My thanks go to Edoardo Di Napoli, Diego Fabregat
Traver, Paul Springer, Jan Winkelmann, Henrik Barthels, Markus Höhnerbach,
Sebastian Achilles, William McDoniel, and Caterina Fenu, as well as our former
group members Matthias Petschow, Roman Iakymchuk, Daniel Tameling, and
Lucas Beyer.
I am grateful for financial support from the Deutsche Forschungs
gemeinschaft (DFG) through grant GSC 111 (the graduate school AICES)
and the Deutsche Telekomstiftung. Their programs not only funded my
work, but opened further opportunities in the form of seminars and workshops,
and connected me with like-minded students from various disciplines.
The RWTH IT Center provided and maintained an extremely reliable
infrastructure central to my work: the RWTH Compute Cluster. I thank its
v

staff not only for ensuring smooth operations but also for their competent and
detailed responses to my many inquiries and requests regarding our institute’s
cluster partition.
The AICES service team did their best to shield me from the bureaucracy
of contracts, stipends, and reimbursements. I am grateful they allowed me to
focus solely on my research.
Even more important than a gratifying work environment is forgetting about
it every once in a while. My friends played a bigger role in this effort than
probably most of them know, whether we were simply spending time hanging
out or playing games, went swimming, climbing or playing badminton, or taught
swimming and worked as lifeguards. You are too many to enumerate, but you
know who you are.
Finally, but most importantly, none of this would have been possible without
the endless and uncompromising support of may parents. You are the reason I
grew into the person I am today. Danke!
vi

Contents
1 Introduction 1
1.1 Performance Modeling for Blocked Algorithms . . . . . . . . . 3
1.1.1 Motivation: Blocked Algorithms . . . . . . . . . . . . . 4
1.1.2 Prediction through Performance Models . . . . . . . . 9
1.2 Micro-Benchmarks for Tensor Contractions . . . . . . . . . . . 10
1.2.1 Motivation: Tensor Contraction Algorithms . . . . . . 10
1.2.2 Prediction through Micro-Benchmarks . . . . . . . . . 13
1.3 Related Work . . . . . . . . . . . . . . . . . . . . . . . . . . . 14
1.3.1 Dense Linear Algebra Libraries and Algorithms . . . . 15
1.3.1.1 BLAS and LAPACK . . . . . . . . . . . . . 15
1.3.1.2 Blocked Algorithms . . . . . . . . . . . . . . 16
1.3.1.3 Alternatives to Blocked Algorithms . . . . . . 17
1.3.1.4 Distributed-Memory and Accelerators . . . . 18
1.3.2 Performance Measurements and Profiling . . . . . . . . 19
1.3.3 Performance Modeling and Predictions . . . . . . . . . 19
1.3.4 Tensor Contractions . . . . . . . . . . . . . . . . . . . 21
2 Performance Effects and Measurements 23
2.1 Performance Effects for Dense Linear Algebra Kernels . . . . . 24
2.1.1 Library Initialization Overhead . . . . . . . . . . . . . 24
2.1.2 Fluctuations . . . . . . . . . . . . . . . . . . . . . . . . 25
2.1.2.1 Background and System Noise . . . . . . . . . 25
2.1.2.2 Intel Turbo Boost . . . . . . . . . . . . . 27
2.1.2.3 Distinct Long-Term Performance Levels . . . 29
2.1.3 Thread Pinning . . . . . . . . . . . . . . . . . . . . . . 30
vii

Contents
2.1.4 Caching . . . . . . . . . . . . . . . . . . . . . . . . . . 31
2.1.5 Summary . . . . . . . . . . . . . . . . . . . . . . . . . 32
2.2 Measurements and Experiments: ELAPS . . . . . . . . . . . 33
2.2.1 The Sampler . . . . . . . . . . . . . . . . . . . . . . . 33
2.2.2 The ELAPS Python Framework . . . . . . . . . . . 36
2.3 Summary . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 39
3 Performance Modeling 41
3.1 Kernel Argument Analysis . . . . . . . . . . . . . . . . . . . . 42
3.1.1 Flag Arguments . . . . . . . . . . . . . . . . . . . . . . 45
3.1.2 Scalar Arguments . . . . . . . . . . . . . . . . . . . . . 47
3.1.3 Leading Dimension Arguments . . . . . . . . . . . . . 49
3.1.3.1 Alignment to Cache-Lines . . . . . . . . . . . 49
3.1.3.2 Set-Associative Cache Conflicts . . . . . . . . 50
3.1.4 Increment Arguments . . . . . . . . . . . . . . . . . . . 53
3.1.5 Size Arguments . . . . . . . . . . . . . . . . . . . . . . 55
3.1.5.1 Smalls Scale Behavior . . . . . . . . . . . . . 56
3.1.5.2 Piecewise Polynomial Behavior . . . . . . . . 57
3.1.6 Data Arguments . . . . . . . . . . . . . . . . . . . . . 59
3.1.7 Summary . . . . . . . . . . . . . . . . . . . . . . . . . 61
3.2 Model Generation . . . . . . . . . . . . . . . . . . . . . . . . . 62
3.2.1 Model Structure . . . . . . . . . . . . . . . . . . . . . . 63
3.2.2 Sample Distribution . . . . . . . . . . . . . . . . . . . 65
3.2.3 Repeated Measurements and Summary Statistics . . . 67
3.2.4 Relative Least-Squares Polynomial Fitting . . . . . . . 68
3.2.5 Adaptive Refinement . . . . . . . . . . . . . . . . . . . 70
3.3 Model Generator Configuration . . . . . . . . . . . . . . . . . 73
3.3.1 Configuration Parameters . . . . . . . . . . . . . . . . 73
3.3.2 Trade-Off and Configuration Selection . . . . . . . . . 75
3.3.3 Variations of the Default Configuration . . . . . . . . . 81
3.4 Summary . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 81
viii

Contents
4 Model-Based Predictions for Blocked Algorithms 83
4.1 Performance Prediction . . . . . . . . . . . . . . . . . . . . . . 84
4.2 Accuracy Quantification . . . . . . . . . . . . . . . . . . . . . 87
4.3 Accuracy Case Study: Cholesky Decomposition . . . . . . . . 89
4.3.1 Varying Problem Size . . . . . . . . . . . . . . . . . . . 90
4.3.2 Varying Block Size . . . . . . . . . . . . . . . . . . . . 94
4.3.3 Varying Problem Size and Block Size . . . . . . . . . . 95
4.3.4 Other Data-Types . . . . . . . . . . . . . . . . . . . . 97
4.3.5 Multi-Threaded BLAS . . . . . . . . . . . . . . . . . . 98
4.3.6 Summary . . . . . . . . . . . . . . . . . . . . . . . . . 100
4.4 Accuracy Study: Blocked LAPACK Algorithms . . . . . . . . 100
4.4.1 Single-Threaded BLAS . . . . . . . . . . . . . . . . . 103
4.4.2 Multi-Threaded BLAS . . . . . . . . . . . . . . . . . . 107
4.4.3 Summary . . . . . . . . . . . . . . . . . . . . . . . . . 110
4.5 Algorithm Selection . . . . . . . . . . . . . . . . . . . . . . . . 110
4.5.1 Cholesky Decomposition . . . . . . . . . . . . . . . . . 110
4.5.2 Triangular Inversion . . . . . . . . . . . . . . . . . . . 112
4.5.3 Sylvester Equation Solver . . . . . . . . . . . . . . . . 115
4.5.3.1 Algorithms . . . . . . . . . . . . . . . . . . . 116
4.5.3.2 Algorithm Selection . . . . . . . . . . . . . . 119
4.5.4 Summary . . . . . . . . . . . . . . . . . . . . . . . . . 121
4.6 Block Size Optimization . . . . . . . . . . . . . . . . . . . . . 122
4.6.1 Cholesky Decomposition . . . . . . . . . . . . . . . . . 123
4.6.2 Triangular Inversion . . . . . . . . . . . . . . . . . . . 126
4.6.3 LAPACK Algorithms . . . . . . . . . . . . . . . . . . 127
4.7 Summary . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 131
5 Cache Modeling and Prediction 133
5.1 Case Study: QR Decomposition on a Harpertown E5450 . 134
5.1.1 Timing Kernels in LAPACK’s dgeqrf . . . . . . . . . . 134
5.1.2 Cache-Aware Timings . . . . . . . . . . . . . . . . . . 136
5.1.3 Modeling the Cache . . . . . . . . . . . . . . . . . . . . 139
ix

Contents
5.1.4 Varying the Setup . . . . . . . . . . . . . . . . . . . . . 142
5.2 Application to Other Algorithms . . . . . . . . . . . . . . . . 144
5.2.1 Cholesky Decomposition: dpotrfU . . . . . . . . . . . . 145
5.2.2 Inversion of a Triangular Matrix: dtrtriLN . . . . . . . . 146
5.2.3 Summary . . . . . . . . . . . . . . . . . . . . . . . . . 147
5.3 Feasibility on Modern Hardware . . . . . . . . . . . . . . . . . 148
5.3.1 In- and Out-of-Cache Timings . . . . . . . . . . . . . . 149
5.3.2 Algorithm-Aware Timings . . . . . . . . . . . . . . . . 153
5.4 Summary . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 155
6 Micro-Benchmarks for Tensor Contractions 157
6.1 Algorithm Generation . . . . . . . . . . . . . . . . . . . . . . 158
6.2 Runtime Prediction . . . . . . . . . . . . . . . . . . . . . . . . 162
6.2.1 Example Contraction: Cabc := AaiBibc . . . . . . . . . . 163
6.2.2 Repeated Execution . . . . . . . . . . . . . . . . . . . 165
6.2.3 Operand Access Distance . . . . . . . . . . . . . . . . . 167
6.2.4 Cache Prefetching . . . . . . . . . . . . . . . . . . . . . 172
6.2.5 Prefetching Failures . . . . . . . . . . . . . . . . . . . . 174
6.2.6 First Loop Iterations . . . . . . . . . . . . . . . . . . . 175
6.3 Results . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 177
6.3.1 Changing the Setup for Cabc := AaiBibc . . . . . . . . . 178
6.3.2 Vector Contraction: Ca := AiajBji . . . . . . . . . . . . 179
6.3.3 Challenging Contraction: Cabc := AijaBjbic . . . . . . . 180
6.3.4 Efficiency Study . . . . . . . . . . . . . . . . . . . . . . 184
6.4 Summary . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 185
7 Conclusion 187
7.1 Outlook . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 188
A Terminology: Performance and Efficiency 189
A.1 Workload . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 190
A.1.1 Floating-Point Operations . . . . . . . . . . . . . . . . 190
A.1.2 Data Volume and Movement . . . . . . . . . . . . . . . 192
x

Contents
A.1.3 Arithmetic Intensity . . . . . . . . . . . . . . . . . . . 193
A.2 Runtime . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 195
A.3 Performance and Attained Bandwidth . . . . . . . . . . . . . 196
A.4 Hardware Constraints . . . . . . . . . . . . . . . . . . . . . . . 197
A.5 Efficiency . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 200
A.5.1 Compute-Bound Efficiency . . . . . . . . . . . . . . . . 200
A.5.2 Bandwidth-Bound Efficiency . . . . . . . . . . . . . . . 202
A.5.3 The Roofline Model . . . . . . . . . . . . . . . . . . . . 203
A.6 Other Metrics . . . . . . . . . . . . . . . . . . . . . . . . . . . 206
B Dense Linear Algebra Routines and Libraries 207
B.1 Storage Format . . . . . . . . . . . . . . . . . . . . . . . . . . 207
B.1.1 Scalars . . . . . . . . . . . . . . . . . . . . . . . . . . . 208
B.1.2 Vectors . . . . . . . . . . . . . . . . . . . . . . . . . . . 208
B.1.3 Matrices . . . . . . . . . . . . . . . . . . . . . . . . . . 208
B.2 Basic Linear Algebra Subprograms . . . . . . . . . . . 209
B.2.1 BLAS Level 1 . . . . . . . . . . . . . . . . . . . . . . . 210
B.2.2 BLAS Level 2 . . . . . . . . . . . . . . . . . . . . . . . 211
B.2.3 BLAS Level 3 . . . . . . . . . . . . . . . . . . . . . . . 212
B.3 Linear Algebra PACKage . . . . . . . . . . . . . . . . . 216
B.4 Implementations . . . . . . . . . . . . . . . . . . . . . . . . . 223
C Hardware 227
C.1 Harpertown E5450 . . . . . . . . . . . . . . . . . . . . . . 227
C.2 Sandy Bridge-EP E5-2670 . . . . . . . . . . . . . . . . . . 228
C.3 Ivy Bridge-EP E5-2680 v2 . . . . . . . . . . . . . . . . . . 228
C.4 Haswell-EP E5-2680 v3 . . . . . . . . . . . . . . . . . . . 229
C.5 Broadwell i7-5557U . . . . . . . . . . . . . . . . . . . . . 230
List of Examples 231
List of Figures 235
xi

Contents
List of Tables 241
Bibliography 243
xii

1 Introduction
Software developers in scientific computing are often faced with performance
critical decisions such as the choice of algorithms, configuration parameters,
hardware platforms, and software libraries. This dissertation presents novel
techniques and tools to guide such decisions for dense linear algebra com
putations with accurate yet fast performance predictions. These predictions
avoid the otherwise common exhaustive execution and timing of all potential
alternatives, and thereby shorten the decision-making process both in compute
time and developer effort.
The task of accurately predicting the performance of dense linear algebra
algorithms is particularly challenging due to the complexity of the performance
related factors: The runtime of compute-kernels is not only non-linear in the
problem size due to multi-threading and kernel-internal caching effects, but is
also influenced by data locality and caching in sequences of such kernels. As a re
sult, analytical performance predictions are either extremely rough and complex,
or hardware-dependent; in contrast, this work investigates measurement-based
techniques that are tailored to represent the kernel-specific performance effects.
The goal of measurement-based predictions is to estimate the performance of
an algorithm both accurately and notably faster than the algorithm execution
itself. These requirements lead to two practical alternatives as the basis for
performance predictions: an algorithm-independent database of performance
models for the building blocks that are automatically generated once per
platform, or micro-benchmarks that execute a fraction of the algorithm’s
building blocks and extrapolate their runtime. Neither of these alternatives
is applicable in all situations, and which one is more suitable depends on the
type algorithm. By addressing two different types of operations that are at
1

1 Introduction
the core of many dense computations, this work investigates both alternatives:
Blocked algorithms are predicted through algorithm-independent performance
models, and tensor contraction algorithms are predicted through cache-aware
micro-benchmarks.
Contributions
The main contributions of this work are the following:
• ELAPS, a lightweight yet portable and universal performance measure
ment framework for dense linear algebra routines and algorithms,
• Methods and tools for the automated generation of highly accurate
performance models for compute kernels,
• Model-based performance predictions of blocked algorithms for optimal
algorithm selection and configuration,
• A study on the influence of caching on kernel invocations within blocked
algorithms, and
• Cache-aware micro-benchmarks to predict BLAS-based tensor contrac
tions for optimal algorithm selection.
Outline
The remainder of this dissertation is structured as follows:
• Chapter 1 proceeds to introduce blocked algorithms and tensor contrac
tions, and motivates our performance prediction goals in Sections 1.1
and 1.2. It concludes with an overview of related work in Section 1.3.
• Chapter 2 addresses common performance characteristics of compute
kernels, and introduces ELAPS, a novel framework for performance
measurements that serves as the basis for the following Chapters.
• Chapter 3 presents the design and automatic generation of performance
models, and analyzes their accuracy.
2

1.1 Performance Modeling for Blocked Algorithms
• Chapter 4 predicts the runtime and performance of blocked algorithms
based on such models, and uses the predictions to select platform-specific
optimal algorithm configurations.
• Chapter 5 studies the influence of caching on the runtime of compute
kernels within blocked algorithms and the feasibility of integrating caching
effects into predictions.
• Chapter 6 is devoted to the prediction of BLAS-based tensor contractions.
It describes the creation of cache-aware micro-benchmarks that, for a
given contraction, allow to identify the fastest algorithm(s).
• Chapter 7 concludes this dissertation, summarizes the presented tech
niques and results, and gives an overview of potential extensions of this
work.
The main chapters are supplemented by three appendices:
• Appendix A introduces readers new to high-performance computing to
performance-related terminology and concepts.
• Appendix B gives an overview of the BLAS and LAPACK interfaces,
their kernels used in this work, and relevant implementations.
• Appendix C details the hardware used throughout this work.
1.1 Performance Modeling
for Blocked Algorithms
We aim to predict the performance of blocked algorithms with the goals of
1) selecting the fastest algorithm from a set of mathematically equivalent
alternatives, and 2) tuning their algorithmic block size. In the following,
Section 1.1.1 introduces the concept of blocked algorithms, and exposes their
inherent optimization challenges, and Section 1.1.2 gives a brief overview of
our approach to address these challenges using on performance models.
3

1 Introduction
Readers familiar with blocked algorithms and the influence of block sizes
may skip the introduction to these concepts in Section 1.1.1, and focus on our
prediction approach in Section 1.1.2 on Page 9.
1.1.1 Motivation: Blocked Algorithms
Blocked algorithms are commonly used to exploit the performance of optimized
BLAS Level 3 kernels1 in other matrix operations, such as decompositions,
inversions, and reductions. Every blocked algorithm traverses its input matrix
(or matrices) in steps of a fixed block size; in each step of this traversal, it
exposes a set of sub-matrices to which it applies a series of updates. Through
these updates, it progresses with the computation and obtains a portion of
the operation’s result; once the matrix traversal completes, the entire result is
computed.
Example 1.1: Blocked algorithms for the Cholesky decomposition
Figure 1.1 illustrates blocked algorithms for a simple yet representative
operation: the lower-triangular Cholesky decomposition
L LT := A
of a symmetric positive definite (SPD) matrix A ∈ Rn×n in lower-triangular
storage (LAPACK: dpotrfL2). For this operation there exist three different
blocked algorithms. Each algorithm traverses A diagonally from the top
left to the bottom-right and computes the Cholesky factor L in place.
At each step of the traversal, the algorithm exposes the sub-matrices shown
in Figure 1.1a and makes progress by applying the algorithm-dependent
updates in Figures 1.1b to 1.1d. Before these updates, the sub-matrix A00,
1 The Basic Linear Algebra Subprograms (BLAS) form the basis for high-performance in dense linear algebra. See Appendices A and B. 2 Appendix B gives an overview of the BLAS and LAPACK routines used throughout this work. When specified, the subscripts indicate the values of the flag arguments, which identify the variant of the operation; e.g., in dpotrfL the L corresponds to the argument uplo indicating a lower-triangular decomposition.
4

1.1 Performance Modeling for Blocked Algorithms
A11
A21 A22
b
b
n
n
A00
A10 A11
A20 A21 A22
b
bb
b
n
n
A00
A10 A11
A20 A21 A22
2b
2b b
b
n
n
...
(a) Blocked matrix traversal
traverse A along :
dtrsmRLTN: A10 := A10 A−T
00
dsyrkLN: A11 := A11 − A10 A1T0 dpotf2LN: A11A1T1 := A11
(b) Algorithm 1
traverse A along :
dsyrkLN: A11 := A11 − A10 A1T0 dpotf2LN: A11A1T1 := A11
dgemmNT: A21 := A21 − A20 A1T0
dtrsmRLTN: A21 := A21 A−T
11
(c) Algorithm 2
traverse A along :
dpotf2LN: A11A1T1 := A11
dtrsmRLTN: A21 := A21 A−T
11
dsyrkLN: A22 := A22 − A21 A2T1
(d) Algorithm 3
Figure 1.1: Blocked algorithms for the lower-triangular Cholesky decomposition.
5

1 Introduction
which in the first step is of size 0 × 0, already contains a portion of the
Cholesky factor L ; after the updates, the sub-matrices A10 and A11 also
contain their portions of L , and in the next step become part of A00. Once
the traversal reaches the bottom-right corner (i.e., A00 is now of size n × n),
the entire matrix is factorized.
Blocked algorithms pose two optimization challenges:
• For each operation there typically exist several alternative algorithms,
which are mathematically equivalent in exact arithmetic; however, even
if such algorithms perform the same number of floating point operations,
they may differ significantly in performance.
• For each algorithm, the block size influences the number of traversal
steps and the sizes and shapes of the exposed sub-matrices, and thus the
performance of the kernels applied to them.
What makes matters more complicated is that the optimal choice depends
on various factors, such as the hardware , the number of threads, the kernel
implementations, and the problem size.
Example 1.2: Performance of alternative algorithms
Figure 1.2 shows the performance of the three blocked Cholesky decomposi
tions from Figure 1.1 with block size b = 128 and increasing problem size n
on a 12-core Haswell-EP E5-2680 v33 with single- and multi-threaded
OpenBLAS.
In both the single- and multi-threaded scenarios, algorithm 3 ( ) is
the fastest among the three alternatives for all problem sizes. On a single
core and for problem size n = 4152, it is 27.40 % and 12.89 % faster than,
respectively, algorithms 1 ( ) and 2 ( ), and it reaches up to 91.01 %
of the processor’s theoretical peak performance (red line at the top of
the plot). On all 12 of the processor’s cores, algorithm 3 ( ) still reaches
an efficiency of 69.70 %, and outperforms algorithms 1 ( ) and 2 ( )
by, respectively, 5.21× and 1.92×.
3 Appendix C provides an overview of the processors used throughout this work.
6

1.1 Performance Modeling for Blocked Algorithms
Algorithm: 1 2 3
0 1000 2000 3000 4000
0
10
20
30
40
50
problem size n
performance [GFLOPs/s]
(a) 1 thread
0 1000 2000 3000 4000
0
100
200
300
400
problem size n
performance [GFLOPs/s]
(b) 12 threads
Figure 1.2: Performance of the three blocked Cholesky decomposition algorithms.
(b = 128, Haswell-EP E5-2680 v3, OpenBLAS, median of 10 repetitions)
Although algorithm 3 ( ) is clearly the fastest in this and many other
scenarios, LAPACK’s dpotrfL implements algorithm 2 ( ).
For other operations, the choice becomes more complicated, since no single
algorithm is the fastest for all problem sizes and scenarios. For instance,
for the single-threaded inversion of a lower-triangular matrix A := A−1,
two different algorithms are the fastest for small and large matrices; with
the performance differing by up to 13 % in either direction (Section 4.5.2).
Example 1.3: Influence of the block size on performance
Let us consider the blocked Cholesky decomposition algorithm 3 ( in
Figure 1.2) with fixed problem sizes n = 1000, 2000, 3000, and 4000 and
varying block size b. Figure 1.3 presents the performance of these algorithm
executions for 1 and 12 threads on the Haswell-EP E5-2680 v3 using
OpenBLAS: Single-threaded, the optimal block size increases from b = 96
7

1 Introduction
n = 1000 n = 2000 n = 3000 n = 4000
0 100 200 300
0
10
20
30
40
50
block size b
performance [GFLOPs/s]
(a) 1 thread
0 100 200 300
0
100
200
300
400
block size b
performance [GFLOPs/s]
(b) 12 threads
Figure 1.3: Performance of the blocked Cholesky decompositions algorithm 3 for varying block sizes.
(Haswell-EP E5-2680 v3, OpenBLAS, median of 10 repetitions)
for n = 1000 to b = 184 for n = 4000. On 12 cores, on the other hand, the
performance is less smooth and the optimal choices for b are between 56
and 112.
Figure 1.3 demonstrates the importance of selecting the block size dy
namically: If we use b = 184, which is optimal for n = 4000 on one core,
for n = 1000 on 12 cores we only reach 77.62 % of the algorithm’s optimal
performance. On the other hand, LAPACK’s default block size b = 64
(which is close to the optimal b = 56 for n = 1000 on 12 cores) would reach
95.95 % of the optimal single-threaded performance for n = 4000.
8

1.1 Performance Modeling for Blocked Algorithms
1.1.2 Prediction through Performance Models
Naturally, both the best algorithm and its optimal block size for a given
scenario (operation, problem size, hardware, kernel library, multi-threading)
can be determined through exhaustive performance measurements; however,
this is extremely time consuming and thus often impractical. Instead we aim
to determine the optimal configuration without executing any of the alternative
algorithms. For this purpose, we use the hierarchical structure of blocked
algorithms: Their entire computation is performed in a series of calls to a few
kernel routines; hence, by accurately estimating the runtime of these kernels,
we can predict an entire algorithm’s runtime and performance.
In order to estimate the kernel runtimes, let us study how these kernels
are used: In each algorithm execution, the same set of kernels is invoked
repeatedly—once for each step of the blocked matrix traversal. Each invocation,
however, works on operands of different size depending on the progress of the
algorithms’ traversal, the input problem size, and the block size. In short, we
need to estimate the performance of only a few kernels, yet with potentially
wide ranges of operand sizes.
Our solution is performance modeling, as detailed in Chapter 3: Based on a
detailed study of how a kernel’s arguments (i.e., flags, operand sizes, etc.) affect
its performance, we design performance models in the form of piecewise multi
variate polynomials. These models are generated automatically once for each
hardware and software setup and subsequently provide accurate performance
estimates at a tiny fraction of the kernel’s runtime.
Using such estimates, we predict the performance of blocked algorithms, as
presented in Chapter 4. These fast predictions prove to be highly accurate, and
allow us to both rank the blocked algorithms for a given operation according to
their performance, and find near-optimal values for the algorithmic block sizes.
While our models yield accurate performance estimates for individual kernel
executions, they do not capture the performance influence of caching between
kernels. Prior to the invocation of each compute kernel in an algorithm, typically
only a portion of its operands are in cache, and loading operands from main
9

1 Introduction
memory increases the kernel runtime. Chapter 5 investigates how caching effects
can be accounted for in blocked algorithms, and attempts to combine pure
in- and out-of-cache estimates into more accurate prediction. However, while
the results look promising on a rather old Harpertown E5450, the analysis
reveals that on modern processors the effect caching on kernel performance
is so complex that accounting for it in algorithm-independent performance
models to further improve our prediction accuracy is infeasible.
1.2 Micro-Benchmarks for Tensor
Contractions
Tensor contractions play an increasingly important role in various scientific
computations, such as machine learning [13], general relativity [62, 64], and
quantum chemistry [21, 34]. Following a brief introduction to BLAS-based ten
sor contraction algorithms and their performance in Section 1.2.1, Section 1.2.2
gives an overview of how predictions based on micro-benchmarks are used to
rank alternative algorithms for a given contraction.
1.2.1 Motivation: Tensor Contraction Algorithms
Computationally, tensor contractions are generalizations of matrix-vector and
matrix-matrix products to operands of higher dimensionality. While BLAS
covers contractions of up to two-dimensional operands (i.e., matrices), there
are no equivalently established and standardized high-performance libraries for
general tensor contractions. Fortunately, just as a matrix-matrix products can
be decomposed into sequences of matrix-vector products, higher dimensional
tensor contractions can be cast in terms of matrix-matrix or matrix-vector
kernels. (A broader overview of alternative approaches is given in Section 1.3.4.)
Example 1.4: Tensor contraction algorithms
Let us consider the contraction Cabc := AaiBibc (in Einstein notation), which
10

1.2 Micro-Benchmarks for Tensor Contractions
for c = 1:c for a = 1:a for b = 1:b ddot: C[a,b,c] += A[a,:] B[:,b,c]
+=
(a) Algorithm cab-ddot
for b = 1:b for c = 1:c dgemvN: C[:,b,c] += A[:,:] B[:,b,c]
+=
(b) Algorithm bc-dgemv
for b = 1:b
dgemmNN: C[:,b,:] += A[:,:] B[:,b,:] +=
(c) Algorithm b-dgemm
Figure 1.4: Sample of algorithms for the tensor contraction Cabc := AaiBibc. All slicings are visualized in blue; the kernel operands (the intersections) are in red. The name of each algorithm stems from the dimensions its for-loops index and its BLAS kernel.
is visualized as follows:
a
b
c
C := a
i
Ai
b
c
B.
The entries C[a,b,c] of the resulting three-dimensional tensor C ∈ Ra×b×c
are computed as
∀a∀b∀c : C[a,b,c] := ∑
i
A[a,i]B[i,b,c] .
As further described in Section 6.1, this contraction can be performed by a
total of 36 alternative algorithms, each consisting of one or more for-loops
with a single BLAS kernel at its core. Three examples of such algorithms
using BLAS Level 1, 2, and 3 kernels are shown in Figure 1.4. These
11

1 Introduction
kernel: dgemm dger dgemv daxpy ddot
0 200 400 600 800 1000
0
1
2
3
4
5
6
tensor size a = b = c
performance [GFLOPs/s]
(a) Contraction Cabc := AaiBibc
(i = 8, Sandy Bridge-EP E5-2670, 1 thread)
0 200 400 600 800 1000
0
50
100
150
tensor size a = b = c
performance [GFLOPs/s]
(b) Contraction Cabc := AijaBjbic
(i = j = 32, Ivy Bridge-EP E5-2680 v2, 10 threads)
Figure 1.5: Performance of tensor contraction algorithms.
(OpenBLAS, median of 10 repetitions)
algorithms use MATLAB’s “:” slicing notation4 to access matrices and
vectors within the tensors A, B, and C; the resulting operand shapes within
the tensors passed to the BLAS kernel are shown alongside the algorithms.
Each tensor contraction can be computed via BLAS kernels through many
even hundreds—of algorithms, each with its own performance behavior. The
optimization challenge of identifying the fastest among such a set of alternative
algorithms is especially difficult due to the in practice commonly encountered
skewed dimensions (i.e., one or more dimensions are extremely small) for which
most BLAS implementations are typically not optimized.
4 The index “:” in a tensor refers to all elements along that dimension, e.g., A[a,:] is the a-th row of A.
12

1.2 Micro-Benchmarks for Tensor Contractions
Example 1.5: Performance of contraction algorithms
Let us consider the tensor contraction Cabc := AaiBibc from Example 1.4
with tensors A ∈ Rn×8, B ∈ R8×n×n, and thus C ∈ Rn×n×n; for n = 100,
this can be visualized as follows:
a
b
c
C := a
i
Ai
b
c
B.
Figure 1.5a presents the performance of all 36 algorithms for this contrac
tion on a Harpertown E5450 with single-threaded OpenBLAS. While
the two dgemm-based algorithms ( ) are clearly faster than the others,
they differ in performance by up to 23.32 %; with other kernels the differ
ence are even more extreme, exceeding a factor of 60 for the daxpy-based
algorithms ( ).
Figure 1.5b showcases the performance of algorithms for the more com
plex contraction Cabc := AijaBjbic on all 10 cores of an Ivy Bridge-EP
E5-2680 v2 using multi-threaded OpenBLAS. In this scenario, the per
formance of the dgemm-based algorithms alone differs by up to 3×.
One could argue that only dgemm-based algorithms are viable candidates
to achieve the best performance; while for the most part this observation is
true, due to skewed dimensions, even the performance of only these algorithms
can differ dramatically. Furthermore, some contractions (e.g., Ca := AiajBji)
cannot be implemented via dgemm in the first place. Therefore, we aim at
the accurate prediction of any BLAS-based contraction, irrespective of which
kernel is used.
1.2.2 Prediction through Micro-Benchmarks
At first sight the situation seems similar to the selection of blocked algorithms:
We want to avoid exhaustive performance measurements and select the best
algorithm without executing any of the alternatives; our strategy is once again to
predict each algorithm’s performance by estimating its invoked kernel’s runtime.
13

1 Introduction
However, while performance models accurately estimates the performance of
such kernels for many operand sizes, they perform rather poorly for operations
with skewed dimensions: For extremely thin or small operands, BLAS kernels
exhibit strong size-dependent performance fluctuations, which are impractical
to capture and represent in performance models.
While we cannot rely on performance models, analyzing the structure of
tensor contraction algorithms suggests a different approach: In contrast to
blocked algorithms, a contraction algorithm performs its entire computation in
a series of calls to a single BLAS kernel of with operands of fixed size. Based
on this observation, we estimate the performance of such calls by constructing
a small set of micro-benchmarks that executes the kernel only a few times,
and thus performs only a fraction of the algorithm’s computation. Since
memory locality plays an especially important role in contractions with skewed
dimensions, we carefully recreate the stat of the processor’s caches within the
micro-benchmarks to time the kernel in conditions analogous to those in the
actual algorithm.
Based on such micro-benchmarks, we can predict the total runtime of con
traction algorithms for tensors of various shapes and sizes. These predictions
reliably single out the fastest algorithm from a set of alternatives several orders
of magnitude faster than a single algorithm execution.
1.3 Related Work
This overview of related research is structured as follows: Section 1.3.1 summa
rizes the history and state-of-the-art of dense linear algebra (DLA) libraries and
algorithms, Section 1.3.2 addresses performance measurements and profiling
tools, Section 1.3.3 presents performance modeling and prediction efforts, and
Section 1.3.4 discusses developments in high-performance tensor contractions.
14

1.3 Related Work
1.3.1 Dense Linear Algebra Libraries and Algorithms
We begin with a brief history of the fundamental DLA libraries BLAS and
LAPACK and prominent implementations in Section 1.3.1.1. We then focus on
blocked algorithms and their tuning opportunities in Section 1.3.1.2, and finally
give an overview of alternative algorithms and libraries for distributed-memory
and accelerator hardware in, respectively, Sections 1.3.1.3 and 1.3.1.4.
1.3.1.1 BLAS and LAPACK
The development of standardized DLA libraries began in 1979 with the inception
of the Basic Linear Algebra Subprograms (BLAS) [63], a FORTRAN
interface specification for, initially, various “Level 1” scalar and vector opera
tions. It was subsequently extended to kernels for “Level 2” matrix-vector [40]
and “Level 3” matrix-matrix [39] operations in, respectively, 1988 and 1990.
The aim of the BLAS specification is to enable performance portable appli
cations: DLA codes reach high performance on different hardware by using
architecture-specific BLAS implementations. Although computer architectures
have evolved dramatically in the last 40 years, this principle of performance
portability is still at the core of all current DLA libraries.
The BLAS specification is accompanied by a reference implementation [95]
that, while fully functional and well documented, is deliberately simple and
thus slow; to reach high performance, users instead link with optimized BLAS
implementations. The oldest open-source implementation still in use is the
Automatically Tuned Linear Algebra Software (ATLAS) [84, 85,
86, 94], first released in 1997; this auto-tuning based library’s main proficiency
is to yield decent performance on a wide range of hardware platforms with
little developer and user effort. The first major open-source implementation
hand-tuned for modern processors with cache hierarchies was GotoBLAS [50,
51, 106]. It reaches up to around 90 % of a processor’s peak floating-point
performance for both sequential and multi-threaded Level 3 kernels and good
bandwidth-bound performance for Level 1 and 2 operations. After Goto
BLAS’s discontinuation in 2010, its code-base and approach were picked up and
15

1 Introduction
extended to more recent processors in the OpenBLAS library [117], which is
currently the fastest open-source implementation for many architectures. Also
inspired by GotoBLAS’s approach is the fairly recent BLAS-like Library
Instantiation Software (BLIS) [73, 80, 81, 96], an open-source framework
that provides optimized kernels for basic DLA operations, such as the BLAS,
based on one hand-tuned micro-kernel per architecture.
In addition to open-source implementations, many hardware vendors maintain
and distribute their own high-performance BLAS, e.g., Intel’s Math Kernel
Library (MKL) [108], Apple’s framework Accelerate [104], and IBM’s
Engineering and Scientific Subroutine Library (ESSL) [103].
BLAS forms the basis for DLA libraries covering more advanced operations.
The earliest library built on top of first BLAS Level 1 and later Level 2 was
LINPACK [38, 114], a package of solvers for linear equations and least-squares
problems from the 1970s and 1980s. LINPACK together with EISPACK [47,
100], a collection of eigenvalue solvers, was superseded by the Linear Algebra
PACKage (LAPACK) [16, 110] in 1992. LAPACK has since been extended
with new features and algorithms, and is still under active development. Just
like BLAS, LAPACK functions as a de-facto standard interface specification
for many advanced DLA operations; libraries such as OpenBLAS and MKL
adopt its interface and provide tuned implementations of various routines.
For more details on BLAS and LAPACK, and their kernels and implemen
tations used throughout this work, see Appendix B.
1.3.1.2 Blocked Algorithms
LAPACK uses blocked algorithms for most of its dense operations. The core
idea behind these algorithms is to leverage a processor’s cache hierarchy by
increasing the spacial and temporal locality of operands, as well as casting
most of an operation’s computation in terms of BLAS Level 3 kernels. As a
result, complex operations can reach performance levels close to the hardware’s
theoretical peak.
However, for each operation, there typically exist multiple alternative blocked
16

1.3 Related Work
algorithms, of which LAPACK offers only one, but not always the fastest.
The alternative algorithms for a given operation can be derived from its
mathematical formulation systematically [24] and automatically [44, 45]. Based
on these principles, libFLAME [92, 93, 111] offers many alternative algorithms
for each operation, and for several operations provides more efficient default
algorithms than LAPACK. In this work we consider libFLAME’s blocked
algorithms for various operations, and aim to predict which of them is most
efficient for given scenarios.
Another caveat of blocked algorithms is their block sizes, which need to be
carefully tuned to maximize performance. Since this is a well-known aspect of
blocked algorithms [23, 83], LAPACK encapsulates and exposes all its tuning
parameters in ilaenv, a central routine that is used to configure the library at
compile time; for many operations the block sizes used by LAPACK’s reference
implementation of ilaenv (64 for most algorithms) have been too small on recent
hardware for quite some time. Although the necessity of optimizing block sizes
is well understood and taken care of by implementations such as MKL, it
remains non-trivial, and in fact few end-users and application-developers are
aware of it. The automated model-based optimization of the block size for
blocked algorithms is the second major goal of this work.
1.3.1.3 Alternatives to Blocked Algorithms
An alternative to blocked algorithms is recursive algorithms, which avoid both
the algorithm selection and block-size optimization. They are also known as
“cache oblivious” algorithms [27, 46] since they minimize the data-movement
between cache levels [53]. Recursion has been suggested for many DLA opera
tions, such as the LU decomposition [49, 77], the Cholesky decomposition [82],
triangular matrix inversion [61], two-sided linear systems [19], tall-and-skinny
QR factorization [42], and Sylvester-type equation solvers [60, 119].
However, since no readily-available recursion-based library comparable to
LAPACK existed, we developed the Recursive LAPACK collection
(ReLAPACK) [4, 120]. ReLAPACK provides recursive implementations for
17

1 Introduction
48 LAPACK routines, and outperforms not only the reference implementation
but in many cases also optimized libraries such as OpenBLAS and MKL.
A second alternative to blocked algorithms tailored to shared-memory sys
tems are task-based algorithms-by-blocks, also known as “block algorithms” or
“tiled algorithms”. However, these algorithms not only introduce a specialized
storage scheme of matrices “by block”, but also require custom task scheduling
mechanisms. Implementations of such schedulers include QUARK [90] as part
of PLASMA [14], DAGuE [26], SMPSs [18], and SuperMatrix [33].
1.3.1.4 Distributed-Memory and Accelerators
Distributed-memory systems and super-computers are indispensable for large
scale DLA computations. The first noteworthy extension of the BLAS and
the LAPACK to this domain was the Scalable Linear Algebra PACK
age (ScaLAPACK) [25, 121], written in FORTRAN and based on BLAS,
LAPACK, and the Message Passing Interface (MPI). However, ScaLA
PACK is only sparingly updated (last in 2012), and, instead, the state of the
art for distributed-memory DLA is Elemental [71, 102], an actively developed
C++ library, based on libFLAME’s methodology in and object-oriented and
templated programming techniques.
Since accelerators such as Xeon-Phi coprocessors and graphics proces
sors lend themselves well to compute-intensive operations, they are a natural
target for DLA codes. While some classic BLAS implementations such as
ATLAS, BLIS, and MKL, can be used on the x68-based Xeon Phis, sepa
rate libraries are required for graphics processors: NVIDIA’s cuBLAS [98]
provides high-performance BLAS kernels for CUDA-enabled graphics cards,
and clBLAS [97] targets OpenCL-capable devices. Furthermore, Matrix
Algebra on GPU and Multicore Architectures (MAGMA) [78, 115]
targets BLAS and LAPACK operations on heterogeneous systems (e.g., CPU
+ GPU).
18

1.3 Related Work
1.3.2 Performance Measurements and Profiling
Runtime measurements of both application codes and algorithms are crucial in
the investigation of performance behaviors, bottlenecks, as well as optimization
and tuning in general; hence, numerous tools facilitate such measurements.
Simple timers are accessible in virtually any language and environment: e.g.,
time in Unix, rdtsc in x86 assembly, gettimeofday() in C, omp_get_wtime()
in OpenMP, tic and toc in MATLAB, and timeit in Python. Several
more advanced tools profile executions of functions and communications in
applications by tracing or sampling: e.g., gprof [52, 105], VAMPIR [127],
TAU [72, 124], Scalasca [48, 122], and Intel’s VTune [109]. While such
tools are invaluable in the performance analysis of application codes, their
generality makes them somewhat unwieldy for our purposes of investigating DLA
kernel performance. Therefore, we designed Experimental Linear Algebra
Performance Studies (ELAPS) [2, 101], a framework for performance
measurements and analysis of DLA routines and algorithms, further detailed
in Section 2.2.
1.3.3 Performance Modeling and Predictions
Predicting and modeling application performance is an important aspect of
high-performance computing, and the term “performance modeling” is used to
describe many different techniques and approaches. This section gives a brief
overview of such approaches with focus on methods for DLA algorithms.
The well-established Roofline model [87] does not predict performance, but
relates an algorithm’s attained performance to the hardware’s potential: As
detailed in A.5.3, it allows to evaluate an execution’s resource efficiency by
relating its algorithm’s arithmetic intensity and int performance relative to the
hardware’s peak main-memory bandwidth and floating-point performance. It
has been applied, implemented, and extended in numerous publications, such
as [59, 65, 70]. Notably, Benner et al. use the roofline model (the arithmetic
intensity in particular) to optimize the block size for a blocked matrix inversion
algorithm [23].
19

1 Introduction
Model-based performance tuning of BLAS implementations was suggested
for both ATLAS [91] and BLIS [66], showing that near-optimal BLAS perfor
mance can be reached without measurement-based autotuning: Instead they,
e.g., select blocking sizes according to the BLAS implementation and the target
processor’s cache sizes. Note that these approaches are used to tune BLAS
kernels, and do not actually predict their performance; hence they cannot serve
as a basis for our predictions.
Previous work in our research group by Iakymchuk et al. constructed accurate
analytical performance models for small DLA kernels [56, 57]. These models
target problems that fit within a Harpertown E5450’s last-level cache (L2),
and are based on the number of memory-stalls and arithmetic operations as
well as their overlap incurred by specific kernel implementations. As such, they
require not only a deep understanding of the processor architecture, but also
a detailed analysis of the kernel implementation. While the resulting models
yield accurate predictions within a few percent of reference measurements, they
are not easily extended to larger problems and other operations. Therefore, this
work instead considers automatically generated, measurement-based models.
Alonso et al. construct piecewise runtime and energy models—somewhat
similar to those presented in this work—for the BLIS implementations of
dgemm and dtrsm [15] on a Sandy Bridge-EP E5-2620. However, their
approach is based on extensive knowledge of BLIS [66], and their models
only represent one degree of freedom (by considering only square matrices or
operations on panel matrices with fixed width/height). Their average runtime
model accuracy for dgemm and dtrsm is, respectively, 1.5 % and 4.5 %, with
local errors of up to, respectively, 4.5 % and 7 %. Catalán et al. extend this work
to multi-threaded dgemm, dtrsm, and dsyrk in order to predict the performance
of a blocked Cholesky decomposition algorithm with fixed block size [32];
their average runtime prediction errors are 3.7 % and 2.4 %, depending on the
parallelization within BLIS. In contrast to these publications, the modeling
framework presented in this work, which was developed around the same time,
is fully automated, applicable to any BLAS- or LAPACK-like routine, not
20

1.3 Related Work
limited to one implementation and hardware, and offers models with multiple
degrees of freedom.
In a separate effort Yamamoto constructs measurement-based, yet hardware
and implementation-independent models in the form of a series of univariate
polynomials (one kernel argument is represented by the polynomial, the other
varied in the series) for several BLAS Level 3 kernels [88, 89]. These models
are used to predict the performance of both a blocked reduction to tridiagonal
form [88] and a blocked multishift QR algorithm [89]. The resulting prediction
error on an unspecified AMD Opteron is reported to be below 10 % for
the single-threaded tridiagonalization, and is on average around 10 % for the
QR algorithm using multi-threaded BLAS. In contrast, the more general
piecewise models proposed in this work yield considerable smaller prediction
errors for various blocked algorithms.
Several research projects model the performance of distributed-memory appli
cations. A general purpose approach by Calotoiu et al. builds basic performance
models for kernels in application codes based on performance profiling [30, 31],
allowing to investigate the complexity and scalability of application components.
In the field of distributed-memory DLA, most modeling efforts target ScaLA
PACK using domain-specific knowledge through, e.g., polynomial fitting [67]
or hierarchical modeling of kernels [36].
1.3.4 Tensor Contractions
Tensor contractions are at the core of scientific computations, such as machine
learning [13], general relativity [62, 64], and quantum chemistry [21, 34].
Since generally speaking such contractions are high-dimensional matrix-matrix
multiplications, they are closely related to BLAS Level 3 operations, and in fact
most contractions can be cast in terms of one or more calls to dgemm, either
by adding loops or transpositions; this is implemented in many frameworks,
such as the Tensor Contraction Engine (TCE) [54, 125], the Cyclops
Tensor Framework (CTF) [74, 99], the MATLAB Tensor Toolbox [17,
116], and libtensor [43, 112].
21

1 Introduction
In contrast to these implementations, which rely on a single algorithm for
each contraction (potentially selected through heuristics), previous work in
our group by Di Napoli et al. investigated the automated generation of all
alternative BLAS-based algorithms [37]. Chapter 6 picks up this work and
presents a performance prediction framework for such algorithms that allow to
automatically identify the fastest algorithm [6].
More recent and ongoing work in our group by Springer et al. attempts to go
break the barrier between contraction algorithms and dgemm implementations.
Following the structured design of BLIS [80], they propose code generators that
provide high-performance algorithms tailored to specific contraction problems
that reach close to optimal performance [75]. Their tools construct numerous
alternative implementations, and identify the fastest through a combination of
heuristics and micro-benchmarks.
22

2 Performance Effects
and Measurements
This work is concerned with predicting the performance of dense linear algebra
routines and algorithms through measurement-based performance models and
micro-benchmarks. To fully focus on modeling and prediction in the following
chapters, we here establish how accurate runtime measurements are obtained,
and address common influences on such measurements and their effects. Fur
thermore, we presents a performance measurement tool and framework tailored
to dense linear algebra routines that we developed to serve as the foundation
for the experiments, models, and benchmarks throughout this work.
In detail, this chapter covers the following material:
• Section 2.1 presents common effects observed when measuring the run
time of dense linear algebra routines. In particular, it addresses library
initialization overhead, fluctuations (e.g., due to system noise and varying
processor frequency), thread pinning, and caching.
• Section 2.2 introduces the ELAPS Framework that evolved from the
performance measurement tools developed for this work. ELAPS pro
vides the Sampler, a low-level tool for measurements of BLAS- and
LAPACK-like dense linear algebra routines, as well as a Python frame
work with a graphical user interface and various utility functions to set
up experiments and process their results.
Additionally, for readers new to performance studies, Appendix A provides an
introduction into the terminology and concepts of topics such as computational
workload, timings, performance, hardware limitations, and efficiency.
23

2 Performance Effects and Measurements
OpenBLAS BLIS MKL reference
1st dgemm 1.10 ms 1.32 ms 8.14 ms 37.96 ms 2nd dgemm 0.90 ms 0.95 ms 0.86 ms 37.93 ms overhead 0.20 ms 0.38 ms 7.28 ms 0.04 ms
Table 2.1: BLAS library initialization overhead for two identical dgemmNNs.
(m = n = k = 200, Sandy Bridge-EP E5-2670, 1 thread)
2.1 Performance Effects for Dense Linear
Algebra Kernels
At the core of any study on performance are accurate runtime measurements.
However, while in principle, timing a computation is as simple as “start timer
compute–stop timer”, obtaining reliable and stable timings is not trivial. In this
section, we present the most relevant effects and influences on measurements of
dense linear algebra routines; in particular, we address initialization overhead
(Section 2.1.1), different types of fluctuations (Section 2.1.2), thread pinning
(Section 2.1.3), and caching (Section 2.1.4).
2.1.1 Library Initialization Overhead
Many high-performance dense linear algebra libraries, such as optimized imple
mentations of BLAS and LAPACK, perform of initializations (e.g., hardware
detection, buffer allocation, etc.) the first time one of their kernels is invoked.
These initializations imply an overhead that can significantly increase the first
library invocation’s runtime.
Example 2.1: Library initialization overhead
Table 2.1 presents the runtime of two consecutive matrix-matrix multipli
cations C1 := A1 B1 + C1 and C2 := A2 B2 + C2 (dgemmNN) with
disjoint A1 , A2 , B1 , B2 , C1 , C2 ∈ R200×200 on a Sandy Bridge-EP
E5-2670 with single-threaded OpenBLAS, BLIS, and MKL; the two
calls to dgemm are the first and only invocations of BLAS in program.
24

2.1 Performance Effects for Dense Linear Algebra Kernels
The timings show that the libraries have substantially different overheads:
• The reference BLAS implementation has a negligible overhead but is
around 40× slower than the optimized libraries.
• OpenBLAS and BLIS are optimized for the Sandy Bridge, and
when first invoked, these libraries perform some initializations, such
allocating auxiliary buffers, that introduce an overhead of, respectively,
0.20 ms and 0.38 ms.
• In addition to the allocation of auxiliary buffers, MKL dynamically de
tect the processor architecture to accordingly select optimized kernels.
Hence it has by far the largest overhead of 7.28 ms, which dominates
its first invocation’s runtime.
Since we mostly use optimized libraries such as OpenBLAS, BLIS, and
MKL, we counter the initialization overhead by simply preceding any set of
measurements with an unrelated kernel invocation.
2.1.2 Fluctuations
Once the initialization overhead is overcome, repeated timings of the same
kernel on the same data may still exhibit significant performance fluctuations.
Such fluctuations can be caused by a variety of effects, such as background
applications and system noise (Section 2.1.2.1), Intel Turbo Boost (Sec
tion 2.1.2.2), or other changes in processor frequency (Section 2.1.2.3).
2.1.2.1 Background and System Noise
The potentially most disturbing, yet also quite easily avoidable source of fluctu
ations are other background processes competing for the processor’s resources.
Example 2.2: Influence of background noise
Figure 2.1 presents the runtime of 1000 repetitions of the matrix-matrix
multiplication C := A B + C (dgemmNN) with A , B , C ∈ R100×100
on a Broadwell i7-5557U (as part of MacBook Pro with Apple’s
25

2 Performance Effects and Measurements
Broadwell i7-5557U, Accelerate, heavy noise Sandy Bridge-EP E5-2670, MKL, minimal noise
0 100 200 300 400 500 600 700 800 900 1000
0
0.1
0.2
0.3
0.4
repetition
runtime [ms]
Figure 2.1: Runtime fluctuations dgemmNN caused by background processes and system noise.
(m = n = k = 100, 1 thread)
framework Accelerate and a Sandy Bridge-EP E5-2670 (as part of
RWTH’s computing cluster) with MKL.
On the Broadwell i7-5557U ( ) with various other applications run
ning in the background (e.g., browser and music player), the fluctuations
are enormous: The measurement standard deviation is over 4× the mean
runtime. On the Sandy Bridge-EP E5-2670 ( ) with no other user
applications running during measurements, the fluctuations are already
much smaller at 2.36 % of the average time. For larger problem sizes, the
fluctuations are considerably smaller, and quickly fall below 0.1 %.
While these type of fluctuations can be avoided to some extend by en
suring that no other applications run during measurements, they cannot be
avoided altogether even with exclusive access to dedicated high-performance
hardware—the remaining fluctuations are known as system noise. Hence, for our
26

2.1 Performance Effects for Dense Linear Algebra Kernels
experiments, models, and micro-benchmarks all our measurements are repeated
at least five times and summary statistics of the runtime (or performance) are
presented, such as the minimum or median.
2.1.2.2 Intel Turbo Boost
Compute-bound dense linear algebra computations, such as BLAS Level 3 and
LAPACK-level routines, benefit directly from increased processing frequencies.
Therefore, they usually trigger Intel Turbo Boost and constantly run at the
maximum turbo frequency if possible. Since this frequency cannot be sustained
indefinitely on most machines, the processor frequency is eventually lowered
and henceforth fluctuates to keep the hardware within its power and thermal
limits.
Example 2.3: Turbo Boost
Figure 2.2 presents the runtime of repeated matrix-matrix multiplications
C := A B + C (dgemmNN) with A , B , C ∈ R1300×1300 alongside
the processor’s temperature and frequency1 on both cores of a Broadwell
i7-5557U with multi-threaded Accelerate; in this experiment, no other
resource intensive programs run in the background.
In the beginning, the processor is at a cool 53 ◦C ( ) and each dgemmNN
takes about 60 ms ( ) at the maximum turbo frequency of 3.4 GHz ( ).
The processor temperature increases steadily up to 105 ◦C around repeti
tion 200 (12 s into the experiment); at this point the frequency is reduced
and continuously adjusted between 3 GHz and 3.2 GHz such that this tem
perature threshold is not exceeded. This change in frequency, as well as its
fluctuations towards the end have a direct effect on the dgemmNN’s runtime:
It increases by about 10 % to roughly 67 ms.
The behavior of Turbo Boost depends enormously on the computation
environment: While on a work-station or laptop system the processor tem
perature increases rapidly and the maximum turbo frequency is not sustained
for long, on dedicated high-performance compute clusters, efficient cooling
1 Obtained through the IntelPower Gadget.
27

2 Performance Effects and Measurements
temperature frequency runtime
60
80
100
temperature [◦C]
2
2.5
3
3.5
frequency [GHz]
0 100 200 300 400 500 600 700
60
80
100
repetition
runtime [ms]
Figure 2.2: Effect of Turbo Boost on the runtime of dgemmNN. (Note: y-axes are not 0-based.)
(m = n = k = 1300, Broadwell i7-5557U, 2 threads, Accelerate)
allows for the processor to operate at the maximum turbo frequency for much
longer, if not indefinitely. However, even in our main computing facilities at
the RWTH IT Center, we observed notable fluctuations of the frequency
below its maximum with negative impacts on our measurement quality and
stability.
Throughout this work, we consider processors with and without enabled
Turbo Boost. While the performance of these two cases is not directly
comparable, we consider our methodologies for both scenarios. In particular,
Turbo Boost is disabled on our Sandy Bridge-EP E5-2670 (unless
28

2.1 Performance Effects for Dense Linear Algebra Kernels
Sandy Bridge-EP E5-2670 Haswell-EP E5-2680 v3
0 100 200 300 400 500 600 700 800 900 1000
0
100
200
300
400
repetitions
runtime [ms]
Figure 2.3: Varying runtime for a skewed dgemmNN over a period of time.
(m = k = 4000, n = 200, 1 thread, OpenBLAS)
otherwise stated) and enabled on our Haswell-EP E5-2680 v3—an overview
of all hardware configurations is given in Appendix C.
2.1.2.3 Distinct Long-Term Performance Levels
Even with Turbo Boost disabled, a processor’s speed is not always fixed
to its base frequency and we instead observed jumps between two or more
performance levels.
Example 2.4: Performance levels
Figure 2.3 presents the runtime of 1000 repetitions of the matrix-matrix
multiplication C := A B + C (dgemmNN) with A ∈ R4000×4000 and
B, C ∈ R4000×200 on a Sandy Bridge-EP E5-2670 and a Haswell-EP
E5-2680 v3 (both with Turbo Boost disabled) with single-threaded
OpenBLAS.
On both systems, we can clearly make out two distinct runtime levels: on
29

2 Performance Effects and Measurements
the Sandy Bridge, the measurements jump between 354 ms and 359 ms,
which are 1.4 % apart, and on the Haswell with twice the floating-point
performance per cycle, the two levels at 205 ms and 213 ms differ by 3.9 %.
There is no discernible pattern to the jumps between these levels and the
processors commonly stay at the same level for 10 s or longer (50 repetitions
at 200 ms each).
Since we found no means to eradicate this type of fluctuations, we adopt
our measurement setups to account for them: Whenever we have more than
one measurement point (e.g., varying the routines or problem sizes), we not
only repeat each measurement several times in isolation, but also shuffle the
repetitions. As a result, the repetitions for each data point are spread across
the entire experiment duration and summary statistics such as the minimum
and median yield a stable runtime estimate for only one performance level.
In summary, we can avoid or account for various types of fluctuations within
our measurements.
2.1.3 Thread Pinning
Which processor cores a program runs on is generally controlled by the operating
system, and in fact most system schedulers every now and then move threads
between cores at runtime. However, since dense linear algebra kernels immensely
rely on temporal data locality within the cache hierarchy and caches shared
across multiple cores, moving or physically separating threads may significantly
decrease a computation’s efficiency. Counteracting these effects by restricting
threads to physical cores is called thread pinning.
Example 2.5: Thread pinning
Figure 2.4 presents the compute-bound efficiency (see Appendix A.5) of the
matrix-matrix multiplication C := AT B + C with A , C ∈ R64×2000
and B ∈ R2000×2000 (an example taken from within LAPACK’s blocked
dlauum) using OpenBLAS with an increasing number of threads on a
two-socket Sandy Bridge-EP E5-2670 system with and without thread
pinning.
30

2.1 Performance Effects for Dense Linear Algebra Kernels
without pinning with pinning
12345678
0
20
40
60
80
100
0.00 % 7.47 %
8.81 %
13.59 %
18.23 % 22.19 % 23.09 %
28.08 %
#threads
efficiency [%]
Figure 2.4: Effects of thread pinning on the compute-bound efficiency of a multi-threaded dgemmTN. Annotations: speedup of over .
(m = 64, n = k = 2000, Sandy Bridge-EP E5-2670, OpenBLAS, median of 100 repetitions)
While the single-threaded dgemm is not affected by pinning, with two
threads, the execution pinned to two cores of one socket ( ) is 7.47 % faster
than the unpinned version ( ); this difference increases with the number of
threads up to 28.08 % on 8 cores.
To ensure that BLAS implementations reach their full potential, throughout
this work all measurements are performed with threads pinned to the cores of
a single processor.
2.1.4 Caching
The location of operands in a computer’s memory hierarchy—also referred
to as the cache precondition—can have significant influence on a routine’s
performance; an operation whose operands already reside in the processor’s
cache (called an in-cache scenario or operating on “warm” data) is faster
31

2 Performance Effects and Measurements
OpenBLAS BLIS MKL reference
out-of-cache 0.60 ms 1.27 ms 0.68 ms 6.81 ms in-cache 0.33 ms 1.02 ms 0.41 ms 6.63 ms overhead 0.27 ms 0.25 ms 0.27 ms 0.18 ms
Table 2.2: Influence of caching on the execution time of dgemv.
(m = n = 1000, Sandy Bridge-EP E5-2670, 1 thread, median of 100 repetitions)
than the same operation that has to load its operands from the slow main
memory (out-of-cache, “cold” data). This effect is strongest for memory bound
operations that cannot amortize memory stalls with computations.
Example 2.6: Caching
Table 2.2 presents the runtime of the matrix-vector multiplication y :=
A x + y (dgemv) with A ∈ R1000×1000 either in- or out-of-cache2 and
the same x, y ∈ R1000 on one core of a Sandy Bridge-EP E5-2670 with
different BLAS implementations.
Even though the implementations differ by more than 10× in runtime,
the overhead of loading A from main memory is comparable between
0.18 ms and 0.27 ms; for OpenBLAS, this corresponds to a runtime increase
of over 80 %. Furthermore, the overhead is identical for the two fastest
implementations MKL and OpenBLAS, a little lower for the less optimal
BLIS, and lowest for the totally unoptimized reference implementation.
The cache precondition of an operation, i.e., which of its operands are where
in the memory hierarchy, largely depends on the operation’s context within an
algorithm or application. Chapters 5 and 6 address caching in more detail.
2.1.5 Summary
This section studied various effects on the performance of dense linear al
gebra computations. While some can be avoided altogether, others can be
2 To place A out of cache, each repetition uses a different memory location for it.
32

2.2 Measurements and Experiments: ELAPS
accounted for by specific measurement setups. In the remainder of this work,
all measurements are accordingly configured to yield stable results.
2.2 Measurements and Experiments: ELAPS
This section introduces Experimental Linear Algebra Performance Studies
(ELAPS), the performance measurement framework that serves as the basis for
all experiments, modeling procedures, and benchmarks throughout this work.
ELAPS was initially developed specifically for our modeling and benchmarking
applications, but has since evolved into a versatile general purpose tool-set for
various dense linear algebra performance experiments. It is available as an
open-source project on GitHub [101].
ELAPS consists of two layers: The bottom layer offers the Sampler, a low
level tool for runtime and performance counter measurements (Section 2.2.1);
the top layer is a Python framework that, among other features, offers user
friendly access to performance experiments and a graphical user interface
(Section 2.2.2).
Publication
The work presented in section is in parts based on research published in:
[2] Elmar Peise and Paolo Bientinesi. The ELAPS Framework: Experimental Linear Algebra Performance Studies. Technical report. Under review for The International Journal of High Performance Computing Applications. AICES, RWTH Aachen University, Nov. 2016. arXiv: 1504.08035 [cs.PF].
2.2.1 The Sampler
The Sampler is a command-line performance measurement tool written in
C/C++; it essentially times arbitrary executions of dense linear algebra
routines. Each Sampler instance typically provides access to all BLAS and
LAPACK routines from one—potentially machine-specific—implementation
33

2 Performance Effects and Measurements
(e.g., OpenBLAS, BLIS, or MKL), but it is easily extended to other routines
with similar interfaces at compile time.
At runtime, the input to the Sampler determines which routine invocations
are executed and timed. The interface provides the following work-flow:
1. Read from standard input a list of calls, i.e., routine names with corre
sponding lists of arguments.
2. Execute the specified calls, and measuring their runtime in terms of pro
cessor cycles; optionally track further performance counters through the
Performance Application Programming Interface (PAPI) [28,
118].
3. Print the measured performance numbers to standard output.
The Sampler provides configuration options and commands that enable a
wide range of performance studies:
• Routine operands can be individually allocated, subdivided, and ini
tialized; this allows to create specific preconditions for calls, such as
symmetric positive definite matrices and the placement of operands in
the cache hierarchy.
• Any routine that follow the interface conventions of BLAS and LAPACK
(see Appendix B) can be sampled.
• Parallel regions allow to execute several routines in parallel through
OpenMP. Within such regions, sequential blocks allow run parallel
sequences of calls instead.
• Hardware counters (e.g., for cache misses or stalls) can be analyzed
through PAPI.
We conclude this section with an example of simple performance experiments
in the Sampler. A more detailed presentation of the sampler is given in [2], and
a complete specification of its interface can be found in its documentation [101].
34

2.2 Measurements and Experiments: ELAPS
Example 2.7: The Sampler
We interactively start a Sampler linked with OpenBLAS on a Haswell
EP E5-2680 v3. To measure the runtime of the matrix-matrix multipli
cation C := A B + C (dgemmNN) with A , B , C ∈ R1000×1000,
we first allocate three double-precision operands of size 1000 × 1000 =
1 000 000 doubles as follows:
dmalloc A 1000000 dmalloc B 1000000 dmalloc C 1000000
To also study the number of Level 3 cache misses, we enable the PAPI
counter PAPI_L3_TCM:
set_counters PAPI_L3_TCM
Next, we pass five repeated dgemm-calls to the Sampler and start the
measurements with the command go:
dgemm N N 1000 1000 1000 1 A 1000 B 1000 1 C 1000 dgemm N N 1000 1000 1000 1 A 1000 B 1000 1 C 1000 dgemm N N 1000 1000 1000 1 A 1000 B 1000 1 C 1000 dgemm N N 1000 1000 1000 1 A 1000 B 1000 1 C 1000 dgemm N N 1000 1000 1000 1 A 1000 B 1000 1 C 1000 go
After roughly 340 ms, we receive the following output:
146867632 47155 143853672 10981 143771180 7144 143439224 6764 143589228 6542
Here, each line corresponds to one of the five dgemm invocations, while
the first and second entry, respectively, report the number of cycles and
Level 3 cache misses. The first dgemmNN causes considerable more cache
misses than the following and has a slightly higher runtime.
35

2 Performance Effects and Measurements
Next, we measure y := 1.5x + y (daxpy) with x, y ∈ R100 000 using ad-hoc
memory locations for the vectors:
daxpy 100000 1.5 [100000] 1 [100000] 1 daxpy 100000 1.5 [100000] 1 [100000] 1 daxpy 100000 1.5 [100000] 1 [100000] 1 daxpy 100000 1.5 [100000] 1 [100000] 1 daxpy 100000 1.5 [100000] 1 [100000] 1
We end the input stream (ctrl+D) and the Sampler produces the fol
lowing output before terminating:
209740 760 157047 0 156753 0 157022 0 157088 0
Of the five daxpys only the first caused 760 cache misses because it
needs to load the kernel itself (the operands were randomized prior to the
measurements and thus are still in cache); as a result, the first execution of
the inherently memory-bound BLAS Level 1 kernel took about 27 % longer
than the following.
While the Sampler can be used interactively, its interface mainly intended
for scripting, which allows its use in various components throughout this work.
For interactive use, the ELAPS Python Framework offers a user-friendly
interface and tools.
2.2.2 The ELAPS Python Framework
The ELAPS Python Framework provides a comprehensive set of tools to
facilitate easy and fast, yet powerful performance experimentation in dense
linear algebra. It covers various aspects of performance studies:
• Users can easily design experiments either through Python scripts or a
specialized graphical user interface (GUI): the PlayMat. Such experi
ments allow to investigate how performance and efficiency vary depending
36

2.2 Measurements and Experiments: ELAPS
on factors such as caching, algorithmic parameters, problem size, and
parallelism. The experiment design is assisted by features such as built-in
knowledge of BLAS and LAPACK signatures and the automatic prop
agation of problem sizes to various operands within and across routine
calls.
• With a simple click (or a method call), an experiment’s measurements
are executed using a compiled Sampler. Here, a wide range of execution
setups are possible, ranging from local executions on laptops, workstations,
or interactive nodes to remote executions on accelerators or clusters and
super-computers through batch-job schedulers.
• The measurements result in experiment reports that can be evaluated
through further tools and a separate GUI: the Viewer. These cover the
core aspects of performances analyses, such as applying different metrics
(e.g., runtime [ms], performance [GFLOPs/s], efficiency [%]), combining
measurement repetitions into summary statistics (e.g., minimum, median,
mean), generating publication-quality plots, and exporting raw data.
Since we are concerned with performance modeling and prediction, covering
ELAPS’s whole spectrum of features for performance experimentation would
exceed this work’s focus and scope—interested readers are referred to [2] and
encouraged to clone the project from GitHub [101]. At this point, we limit
the presentation of ELAPS to two examples: one that demonstrates the
installation process, and another that shows a typical workflow of designing
and evaluating a performance experiment through the GUIs.
Example 2.8: ELAPS installation
In this example, we work on a dedicated Sandy Bridge-EP E5-2670
remotely through ssh; OpenBLAS, Python 2.7, PyQt4, and matplotlib
are already available. We begin by cloning ELAPS:
$ git clone https://github .com/elmar−peise/ELAPS.git [...]
$ cd ELAPS
37

2 Performance Effects and Measurements
Next, we create a Sampler configuration Sampler/cfg/OpenBLAS.cfg
(from the provided template) to compile a Sampler with OpenBLAS:
$ cd Sampler $ cat cfg/OpenBLAS.cfg . ./ gathercfg .sh DFLOPS_PER_CYCLE=8 LINK_FLAGS="−L/path/to/openblas/lib/ \ −lopenblas −lgfortran" BACKEND_PREFIX="OPENBLAS_NUM_THREADS={nt}" $ ./make.sh cfgs/OpenBLAS.cfg [...]
$ cd ..
As part of the configuration file, gathercfg.sh automatically detects various
hardware properties, such as the processor model and frequency, and number
of available sockets, cores, and (hyper-)threads.
Now ELAPS is ready for experimentation.
Example 2.9: ELAPS workflow
To evaluate the OpenBLAS library on our Sandy Bridge-EP E5-2670,
we measure the performance of the representative BLAS Level 1, 2, and 3
kernels ddot, dgemv, and dgemm. We start the PlayMat (bin/PlayMat)
and through a few clicks construct the experiment shown in Figure 2.5. It
consists of the three operations α := xT y (ddot), y := A x + y (dgemvN),
and C := A B + C (dgemmNN) with A , B , C ∈ Rn×n and x, y ∈
Rn, and increasing problem size n = 10, 20, . . . , 1500; for each problem size
the three operations are repeated 10 times.
A further click starts the experiment execution on the Sampler compiled
in Example 2.8. We open the resulting report in the Viewer and quickly
obtain a plot of the three routines’ median performance as seen in Figure 2.6.
The results show that the performance of the compute-bound dgemmNN
quickly increases with the problem size and plateaus around 19.3 GFLOPs/s;
considering the Sandy Bridge’s single-threaded peak floating-point perfor
mance of 20.8 GFLOPs/s (Turbo Boost disabled), this corresponds to an
efficiency of 92.79 %. The performance of the memory-bound dgemvN and
38

2.3 Summary
Figure 2.5: Setting up an ELAPS experiment in the PlayMat via X11.
ddot on the other hand is considerably lower and only reaches, respectively,
6.7 GFLOPs/s and 2.3 GFLOPs/s. However, from problem size n = 800
to 1000, the performance of these kernels drops by roughly a factor of 2,
because their operands (3n2 + 2n doubles) are larger than the last-level
cache (L3) of 20 MiB beyond n = 935.
2.3 Summary
This chapter covered the basic phenomena and tools encountered throughout
39

2 Performance Effects and Measurements
Figure 2.6: The ELAPS Viewer showing a performance plot.
this work: It gave an overview of important effects on the performance of dense
linear algebra kernels, including overheads, fluctuations, thread pinning, and
caching. It then introduced the runtime and performance measurement and
analysis framework ELAPS, which serves as the basis for all experiments,
modeling procedures, and benchmarks throughout this work.
40

3 Performance Modeling
Many dense linear algebra operations, such as matrix decompositions, reduc
tions, and inversions are commonly implemented as blocked algorithms. Since
such algorithms generally cast their entire computation as a sequence of calls to
BLAS Level 3 and unblocked LAPACK kernels, we predict their runtime by
estimating and summing the runtime of these calls. To motivate how we obtain
such estimates for the underlying kernels, recall (from Section 1.1.1) that every
blocked algorithm traverses the input matrix (or matrices) with a fixed block
size, and in each traversal step it performs the same kernel operations on the
exposed sub-matrices. The sizes of these sub-matrices depend on three factors:
the input problem size, the block size, and the traversal progress. Therefore,
in order to predict blocked algorithms, we seek a procedure to estimate the
runtime of a few compute kernels with potentially widely varying operand sizes.
Our solution to obtain such estimates is measurement-based performance
models: For each hardware and software setup and each compute kernel, we
construct a separate performance model that represents the kernel’s runtime
as a function of its arguments. To efficiently obtain highly accurate models, we
tailor them specifically to dense linear algebra computations.
The remainder of this chapter is concerned with the design and automated
generation of such models:
• To guide the development of our models, Section 3.1 studies how the
runtime of dense linear algebra kernels depends on their arguments.
The study reveals the effects of different argument types: While some
have little to no effect and can thus be safely ignored in our models to
41

3 Performance Modeling
reduce their complexity (i.e., their dimensionality), others require careful
treatment.
• Based on these insights, Section 3.2 introduces the structure of our perfor
mance models and their automated adaptive-refinement-based generation.
• Section 3.3 presents the configuration options of the modeling process
and analyzes the resulting models. It studies the trade-off between low
model generation cost versus high accuracy, and determines a suitable
configuration to generate all models for our predictions.
Following the design and generation of our models, Chapter 4 employs them
to predict the performance of blocked algorithms and evaluate the predictions’
accuracy and practical value.
Publication
The work presented in this chapter is in parts based on research previously
published in:
[8] Elmar Peise and Paolo Bientinesi. Cache-aware Performance Modeling and Prediction for Dense Linear Algebra. Technical report. AICES, RWTH Aachen University, Nov. 2014. arXiv: 1409.8602 [cs.PF].
[11] Elmar Peise and Paolo Bientinesi. “Performance Modeling for Dense Linear Algebra”. In: 2012 SC Companion: High Performance Computing, Networking Storage and Analysis. SCC ’12. IEEE Computer Society, Nov. 2012, pages 406416. doi: 10.1109/SC.Companion.2012.60.
[12] Elmar Peise. “Hierarchical Performance Modeling for Ranking Dense Linear Algebra Algorithms”. Master’s thesis. Aachen Institute for Computational Engineering Science, RWTH Aachen, May 2012. arXiv: 1207.5217 [cs.PF].
3.1 Kernel Argument Analysis
Although maximizing our models’ accuracy is our primary focus, we aim to
avoid unnecessary complexity and generation cost. For this purpose, we base
our model design on domain-specific knowledge regarding the performance
42

3.1 Kernel Argument Analysis
influence of various kernel arguments, which is built up and illustrated in this
section.
While dense linear algebra kernels typically have between 5 and 15 arguments,
these arguments’ semantics divide them among a small set of argument types.
These argument types play distinct roles in the kernel operation, and heave
significantly different effects on the attained performance. In the following we
study each argument type, and then use the obtained knowledge to design
performance models to best represent the observed features.
We consider the following argument types, which cover all BLAS and most
LAPACK routines:
• Flag arguments identify the form of the operation, such as the order of
operands and transpositions (Section 3.1.1).
• size arguments specify the operand sizes (Section 3.1.5).
• Scalar arguments contain real or complex scalars that typically multiply
(parts of) an operation (Section 3.1.2).
• Data arguments are (pointers to) vector and matrix operands (Sec
tion 3.1.6).
• Leading dimension arguments accompany matrix arguments and specify
the distance in memory between two consecutive entries in each matrix row
(Section 3.1.3); they allow algorithms to operate not only on contiguously
stored matrices but also on sub-matrices.
• Increment arguments similarly accompany vectors and specify the distance
between consecutive entries (Section 3.1.4); they allow to operate not
only on contiguous (column) vectors but, e.g., on rows of matrices.
Example 3.1: Argument types
Let us consider dtrsm, the double-precision triangular linear system solver
with multiple right-hand-sides (e.g., B := A−1 B ). This representative
BLAS Level 3 kernel contains most of the above argument types, and is a
key component for many LAPACK-level algorithms; hence it is an ideal
43

3 Performance Modeling
candidate to illustrate both the semantics of the argument types in this
example and their performance effects in the following sections.
dtrsm is invoked with 11 arguments:
dtrsm(side, uplo, transA, diag, m, n, alpha, A, ldA, B, ldB)
flags
sizes
scalar data
leading dimensions
.
The semantics of these arguments are as follows:
• side, uplo, transA, and diag are flag arguments.
– side ∈ {L, R} determines from which side B is multiplied with
A−1, i.e., the left ( B := A−1 B ) or right ( B := B A−1),
– uplo ∈ {L, U} indicates a lower- or upper-triangular system matrix
( A or A ),
– transA ∈ {N, T} specifies whether A appears non-transposed
or transposed, and
– diag ∈ {N, U} determines whether the diagonal entries of A are
stored normally or all implicitly equal to 1, making A „unit
triangular”.
All 24 = 16 combinations of these four flag arguments are possible. For
instance, (side, uplo, transA, diag) = (L, U, N, N) identifies the operation
B := A−1 B , and (R, L, T, N) yields B := B A−T .
• m and n are size arguments; they determine the size of B ∈ Rm×n
and accordingly A ∈ Rm×m if side = L and A ∈ Rn×n if side = R.
• alpha is a scalar argument; it multiplies the whole linear system, i.e.,
B := α A−1 B .
• A and B are data arguments; they represent the operands A and B
(as pointers to their first entries).
44

3.1 Kernel Argument Analysis
• ldA and ldB are leading dimension arguments for, respectively, A
and B.
A brief overview of not only dtrsm but all BLAS and LAPACK routines
used throughout this work and their arguments is given in Appendix B.
In the following, we consider the influence of each argument type on the
performance of kernels, and determine how they shall be handled in our models.
3.1.1 Flag Arguments
Flag arguments accept only a few discrete values—in most cases two. However,
since they specify which form of the operation is performed, they may trigger
entirely different execution branches in kernel implementations, and thus result
in independent runtimes.
Example 3.2: Flag arguments
Figure 3.1 shows the runtime of
dtrsm(side
side
, uplo
uplo
, transA
transA
, diag
diag
, 256
m
, 256
n
, 1.0
alpha
,A
A
, 256
ldA
,B
B
, 256
ldB
),
i.e., an operation like B := A−1 B with A , B ∈ R256×256, for all
16 combinations of the flag arguments side, uplo, transA, and diag on a
Sandy Bridge-EP E5-2670 and a Haswell-EP E5-2680 v3 with
single-threaded OpenBLAS, BLIS, and MKL.
Across all systems and libraries, we encounter a large spectrum of perfor
mance dependencies, which cannot be summarized in a single pattern. In
particular, each argument influences the runtime of the implementations
differently:
• For non-square B ∈ Rm×n, side affects the dtrsm’s minimal FLOP
count: While for side = L its cost is m2n FLOPs, for side = R it is
mn2 FLOPs. Hence changing the value of side will generally lead to
an entirely different runtime.
Since this example uses m = n = 256, the dtrsm requires at least
45

3 Performance Modeling
Sandy Bridge-EP E5-2670: OpenBLAS BLIS MKL Haswell-EP E5-2680 v3: OpenBLAS BLIS MKL
L L N N
L L N U
L L T N
L L T U
L U N N
L U N U
L U T N
L U T U
R L N N
R L N U
R L T N
R L T U
R U N N
R U N U
R U T N
R U T U
0
0.2
0.4
0.6
0.8
1
1.2
1.4
1.6
runtime [ms]
side uplo transA diag
Figure 3.1: Runtime of dtrsm as a function of its flag arguments.
(m = n = 256, 1 thread, median of 100 repetitions)
2563 FLOPs for both values of side. However, in our measurements,
side still has the largest impact on performance, which is most evident
for OpenBLAS: While on the Sandy Bridge ( ) the dtrsm takes
on average 104.52 μs (8.35 %) longer for side = L than with side = R,
on the Haswell-EP E5-2680 v3 ( ) side = L is 82.845 μs (9.06 %)
slower than side = R.
• The effects of uplo and transA are closely related, which is most
evident in BLIS ( , ). Possibly due to the similarity of the operations,
(uplo, transA) = (L, N) and (U, T) commonly share a runtime that is
different from (L, T) and (U, N).
• diag has almost no influence on the runtime of most implementations.
46

3.1 Kernel Argument Analysis
Only MKL ( , )—the fastest implementation across all setups—takes
advantage of diag = U, and avoids the division instructions.
Note that both the magnitude of the flag arguments’ influence as well
as the type of the resulting runtime characteristics vary both from one
architecture to another and between implementations.
Since flag arguments can have a decisive impact on a kernel’s runtime with
no general discernible patters across architectures and implementations, we will
generate a separate performance (sub-)model for each different combination of
flags. However, note that in our target range of algorithms, we encounter only
a limited set of such combinations, and will therefore not generate models for
all possibilities.
3.1.2 Scalar Arguments
At first sight, scalar arguments should not have any effect on a kernel’s runtime
after all, they only scale a kernel operand independent of the argument’s value.
However, at closer inspection, we find that for certain values—namely −1, 0,
and 1—this multiplication can be avoided altogether. Since in applications and
algorithms, scalar arguments to kernels are almost exclusively −1, 0, and 1,
most kernel implementations feature optimized execution branches for these
values. Just as for flag arguments, such branches can noticeably impact a
kernel’s runtime and performance.
Example 3.3: Scalar arguments
Figure 3.2 shows the runtime of
dtrsm( L
side
,L
uplo
,N
transA
,N
diag
, 100
m
, 800
n
, alpha
alpha
,A
A
, 100
ldA
,B
B
, 100
ldB
),
i.e., B := αA−1 B with A ∈ R100×100 and B ∈ R100×800, for α ∈
{0.6, 0, −1, 1} on a Sandy Bridge-EP E5-2670 and a Haswell-EP
E5-2680 v3 with single-threaded OpenBLAS, BLIS, and MKL. While
α = 0.6 represents the “general case”, α = 0, −1, and 1 are special values
47

3 Performance Modeling
α = 0.6 α = −1 α = 1 α = 0
OpenBLAS BLIS MKL OpenBLAS BLIS MKL
0
0.2
0.4
0.6
0.8
1
runtime [ms]
Sandy Bridge-EP E5-2670 Haswell-EP E5-2680 v3
Figure 3.2: Runtime of dtrsmLLNN with different values for α.
(m = 100, n = 800, 1 thread, median of 100 repeititons)
for which implementations can avoid multiplications—in algorithms and
applications α = 1 and −1 are the most common values.
All implementations take advantage of α = 0 ( ). In this case, the
dtrsmLLNN only sets B := 0 and no computations are performed. Fur
thermore, all implementations treat α = −1 ( ) just like the general
case ( ) resulting in the same runtime.
α = 1 ( ) is handled differently by the three implementations: While
BLIS attains the same performance as for α = 0.6 and −1, OpenBLAS
and MKL are on average 9.66 % faster compared to these cases, indicating
optimizations that avoid multiplications with 1. While we can appreciate
that OpenBLAS and MKL are faster for α = 1, put into perspective the
increase in runtime for other values of α is surprisingly high: In our example,
scaling B accounts for only 1 % of the dtrsmLLNN’s minimal FLOP-count,
yet makes the operation almost 10 % slower.
To represent the influence of scalar arguments on kernel performance in our
48

3.1 Kernel Argument Analysis
models, we will treat them like flag arguments with the four possible values −1,
0, 1, and “any other value”. Since blocked algorithms almost exclusively use
the values −1 and 1, we will not observe a four-fold increase in the complexity
of our models.
3.1.3 Leading Dimension Arguments
Leading dimension arguments determine the memory access strides of kernels
that load multiple columns of a matrix simultaneously. They only have a small
influence on kernel performance, but we need to be aware of certain patterns
to avoid undesirable effects when generating our performance models.
3.1.3.1 Alignment to Cache-Lines
Data is moved through the memory hierarchy in blocks of 64 bytes (= 8 doubles)
called cache-lines.1 Hence using multiples of the cache-lines size as memory
access strides typically shows a more regular and often better performance
compared to other strides.
Example 3.4: Aligning leading dimensions to cache-lines
Figure 3.3 shows the runtime of
dtrsm( L
side
,L
uplo
,N
transA
,N
diag
, 256
m
, 256
n
, 1.0
alpha
,A
A
, ld
ldA
,B
B
, ld
ldB
),
i.e., B := A−1 B with A , B ∈ R256×256, for leading dimensions2
ld = 256, . . . , 320 in steps of 1 on a Sandy Bridge-EP E5-2670 and a
Haswell-EP E5-2680 v3 with single-threaded OpenBLAS, BLIS, and
MKL.
For all setups, the dtrsmLLNN’s runtime exhibits some regular pattern
in terms of the leading dimension arguments—with an average amplitude
of 2.19 %. However the patterns are quite different: While OpenBLAS’s
runtime on the Sandy Bridge ( ) drops equally at every even leading
1 The cache-line size is generally not fixed but for most processors it is 64 byte. 2 Since A and B have 256 rows, the leading dimensions are at least 256.
49

3 Performance Modeling
Sandy Bridge-EP E5-2670: OpenBLAS BLIS MKL Haswell-EP E5-2680 v3: OpenBLAS BLIS MKL
256 264 272 280 288 296 304 312 320
0
0.2
0.4
0.6
0.8
1
1.2
1.4
leading dimension ld
time [ms]
Figure 3.3: Runtime of dtrsm as a function of its leading dimension arguments on a small scale. Dotted lines: multiples of 8.
(m = n = 256, 1 thread, median of 100 repetitions)
dimension, MKL on the Haswell ( ) dips only at multiples of 4, and on
the Sandy Bridge ( ) it has stronger dips at multiples of 8. BLIS on
the other hand shows the exact opposite behavior: On both platforms ( ,
) its runtime spikes slightly at multiples of 8.
Independent of the specific behavior of each setup, a smooth runtime curve
is obtained when only multiples of 8 are considered as leading dimensions.
To avoid small performance irregularities, we will generate our models using
multiples of the cache-line size for leading dimensions—in double-precision:
multiples of 8.
3.1.3.2 Set-Associative Cache Conflicts
The Level 1 and 2 caches in our processors are 8-way set-associative: They are
divided into sets of 8 cache-lines, and when a cache-line is loaded, its address’s
50

3.1 Kernel Argument Analysis
least significant bits determine which of the sets it is assigned to; within the
set, an architecture-dependent cache replacement policy determines in which
of the 8 slots it is stored. When the address space is accessed contiguously,
consecutive cache-lines are loaded into consecutive sets, and the cache is filled
evenly. In the worst case, however, the address space is accessed with a stride
equal to the number of sets, and all loaded cache-lines are associated to the
same set: Only 8 cache-lines are cached, and each additional line results in
a cache conflict miss causing a recently loaded line to be evicted. This effect
should be avoided whenever possible.
On recent Intel Xeon processors, the Level 1 data cache (L1d) fits 32 KiB
organized as 64 sets of 8 cache-lines. A memory location with address a is a
part of cache-line ba/64c (due to the size of 64 byte per line) and assigned to set
ba/64c mod 64 (due to the capacity of 64 sets). The Level 2 cache (L2) in turn
fits 256 KiB in 1024 sets; here address a is assigned to set ba/64c mod 1024.
In a double-precision matrix stored with leading dimension ld, consecutive
elements in each row are 8ld bytes apart (1 double = 8 bytes). Hence, for
ld = 512, the consecutive row elements starting at address a0 are stored
at ai = a0 + 8ld · i = a0 + 4096i, and associated to the same set in the L1d cache:
⌊ ai
64
⌋
mod 64 =
⌊ a0 + 4096i 64
⌋
mod 64
=
(⌊ a0
64
⌋
+ 64i
)
mod 64
=
⌊ a0
64
⌋
mod 64.
The same problem occurs for leading dimensions that are multiples of 512,
and even below 512 powers of 2 have a similar effect: E.g., with ld = 256 the
elements of a row are associated to only two of the cache’s 64 sets. Similarly,
for the L2 cache with 1024 sets, consecutive row-elements are associated to the
same cache set for leading dimensions that are multiples of 8192, and multiples
of 4096 utilize only two sets.
51

3 Performance Modeling
Sandy Bridge-EP E5-2670: OpenBLAS BLIS MKL Haswell-EP E5-2680 v3: OpenBLAS BLIS MKL
0 1024 2048 3072 4096 5120 6144 7168 8192
0
0.2
0.4
0.6
0.8
1
1.2
1.4
leading dimension ld
runtime [ms]
Figure 3.4: Runtime of dtrsmLLNN as a function of its leading dimension arguments on a large scale. Dotted lines: multiples of 512.
(m = n = 256, 1 thread, median of 100 repetitions)
Example 3.5: Cache conflict misses caused by leading dimensions
Figure 3.4 shows the runtime of
dtrsm( L
side
,L
uplo
,N
transA
,N
diag
, 256
m
, 256
n
, 1.0
alpha
,A
A
, ld
ldA
,B
B
, ld
ldB
),
i.e., B := A−1 B with A , B ∈ R256×256, for leading dimensions ld =
256, . . . , 8320 in steps of 128 on a Sandy Bridge-EP E5-2670 and a
Haswell-EP E5-2680 v3 with single-threaded OpenBLAS, BLIS, and
MKL.
For most setups the runtime spikes above the baseline at multiples
of 512. However, the average magnitude of these spikes ranges from 0.14 %
for BLIS on the Sandy Bridge ( ) to 8.37 % for OpenBLAS on
the Haswell ( ). Especially for OpenBLAS ( , ), there are
52

3.1 Kernel Argument Analysis
additional, yet lower spikes of 1.40 % at multiples of 256. Furthermore, on
the Haswell for both OpenBLAS ( ) and BLIS ( ) the spikes are
especially high at ld = 4096 and 8192, exceeding the baseline by, respectively,
6.55 % and 11.24 %.
To prevent distortions from unfortunate leading dimensions in our model
generation altogether, we will avoid multiples of 256 for these arguments.
Note that by using leading dimensions that are multiples of 8, yet not
of 256 in our measurements, our models will not yield accurate predictions
for kernel invocations that do not follow this pattern. However, predicting
the performance of such unfortunate invocations, which can be systematically
avoided, is not part of our models’ purpose and would exceed the scope of this
work.
3.1.4 Increment Arguments
With our focus on predicting algorithms that primarily use BLAS Level 3
(matrix-matrix operations) and unblocked LAPACK kernels, the performance
of vector operations is not our primary focus. However, to make our performance
modeling technique applicable to all types of operations, this section briefly
studies the influence of increment arguments on kernel performance.
Increment arguments directly determine the memory access strides of vector
operands. In algorithms and applications, they are typically either 1 to access
contiguous vectors (e.g., columns of matrices) or the leading dimension of a
matrix, i.e., 1, to access matrix rows. While in the first case, a vector of
length n occupies bn/8c cache-lines,3 in the second case it is spread across
n cache-lines. As a result, increments of 1 cause less data movement and are
thus favorable in terms of performance.
Beyond the ideal increment of 1, the influences of increment arguments on
performance exhibit periodic patterns similar to those for leading dimensions.
However, in comparison the resulting effects are commonly far more severe
3 Assuming the first entry is aligned to the beginning of a cache-line.
53

3 Performance Modeling
Sandy Bridge-EP E5-2670: OpenBLAS BLIS MKL Haswell-EP E5-2680 v3: OpenBLAS BLIS MKL
0 16 32 48 64 80 96
0
1
2
3
4
5
6
vector increment inc
time [μs]
(a) daxpy (BLAS Level 1)
(n = 1024)
0 16 32 48 64 80 96
0
50
100
150
200
250
300
vector increment inc
time [μs]
(b) dtrsv (BLAS Level 2)
(n = 512)
Figure 3.5: Runtime of daxpy and dtrsvLNN as a function of their increment arguments. Dotted lines: multiples of 16.
(1 thread, median of 100 repetitions)
because cache misses directly increase the runtime for bandwidth-bound (matrix
)vector operations.
Example 3.6: Increment arguments in BLAS Level 1
Figure 3.5a shows the runtime of the BLAS Level 1 calls
daxpy(1024
n
, 2.0
alpha
,X
X
, inc
incX
,Y
Y
, inc
incY
),
i.e., y := 2x + y with x, y ∈ R1024, for increments inc = 1, . . . , 100 in steps
of 1 on a Sandy Bridge-EP E5-2670 and a Haswell-EP E5-2680 v3
with single-threaded OpenBLAS, BLIS, and MKL.
The results for all three implementations are similar on both systems: The
daxpy’s runtime is shortest for inc = 1, and increases steadily until inc = 8;
54

3.1 Kernel Argument Analysis
the difference in performance between these two cases lies between 3.53× for
BLIS on the Sandy Bridge ( ) (whose BLAS Level 1 is not optimized
for our architectures) and 18.29× for MKL on the Haswell ( ).
Beyond inc = 8, the runtime spikes above a steady baseline of 3.20 μs on
the Sandy Bridge ( , , ) and 2.73 μs on the Haswell ( , ,
) by up to 95.88 % at each multiple of 32 and slightly less by 16.80 %
for other multiples of 16.
Example 3.7: Increment arguments in BLAS Level 2
Figure 3.5b shows the runtime of the BLAS Level 2 calls
dtrsv( L
uplo
,N
trans
,N
diag
, 512
n
,A
A
, 1000
ldA
,X
X
, inc
incX
),
i.e., x := A−1x with A ∈ R512×512 and x ∈ R512, for increments inc =
1, . . . , 100 in steps of 1 on a Sandy Bridge-EP E5-2670 and a Haswell
EP E5-2680 v3 with single-threaded OpenBLAS, BLIS, and MKL.
We immediately notice that BLIS on the Haswell ( ) has runtime
spikes similar to those for daxpy, which hints at an implementation of dtrsv
in terms of BLAS Level 1 kernels. For all other setups, the runtime is
considerably smoother with the exception of MKL ( , ), which shows
small spikes of 6.03 % at multiples of 16.
Since in practice increments are either 1 or equal to the leading dimension
of a matrix, we will treat them in our models like flag arguments that take
the values 1 and “any large value”, for which we avoid multiples of 16 to avoid
outlier measurements.
3.1.5 Size Arguments
A kernel’s size arguments determine its minimal FLOP-count and thus directly
influence on its runtime. In the following, we study this influence first for
small changes in the operand sizes (Section 3.1.5.1) and then on a larger scale
(Section 3.1.5.2).
55

3 Performance Modeling
Sandy Bridge-EP E5-2670: OpenBLAS BLIS MKL Haswell-EP E5-2680 v3: OpenBLAS BLIS MKL
256 264 272 280 288 296 304 312 320
0
0.5
1
1.5
2
2.5
matrix size m = n
runtime [ms]
Figure 3.6: Runtime of dtrsmLLNN as a function of its size arguments on a small scale. Dotted lines: multiples of 8.
(1 thread, median of 100 repetitions)
3.1.5.1 Smalls Scale Behavior
Optimizations of compute kernels commonly involve vectorization and loop
unrolling of length 4 or 8. These optimizations typically have a direct influence
on a kernel’s runtime for small variations of the size arguments.
Example 3.8: Small variations of size arguments
Figure 3.6 shows the runtime of
dtrsm( L
side
,L
uplo
,N
transA
,N
diag
,n
m
,n
n
, 1.0
alpha
,A
A
, 400
ldA
,B
B
, 400
ldB
),
i.e., B := A−1 B with A , B ∈ Rn×n, for n = 256, . . . , 320 in steps of 1
on a Sandy Bridge-EP E5-2670 and a Haswell-EP E5-2680 v3 with
single-threaded OpenBLAS, BLIS, and MKL.
All setups show periodic patterns in their runtimes. While these patterns
56

3.1 Kernel Argument Analysis
differ between the implementations, most have local runtime minima at
multiples of 4, and all of them have minima at multiples of 8.
To avoid runtime artefacts introduced by vectorization and loop unrolling,
we will build our models on measurements that use multiples of 8 for all size
arguments.
3.1.5.2 Piecewise Polynomial Behavior
Since an operation’s minimal FLOP-count is generally a (multivariate) polyno
mial function of the size arguments, one might expect that (for compute-bound
kernels) it translates directly into an equally polynomial runtime. However,
since a kernel’s performance is generally not constant for varying operand
sizes, a single polynomial is often insufficient to accurately represent a kernel’s
runtime for large ranges of problem sizes.
Example 3.9: Polynomial fitting for size arguments
Figure 3.7a shows the runtime of
dtrsm( L
side
,L
uplo
,N
transA
,N
diag
,n
m
,n
n
, 1.0
alpha
,A
A
, 1000
ldA
,B
B
, 1000
ldB
),
i.e., B := A−1 B with A , B ∈ Rn×n, with n = 24, . . . , 536 in steps
of 16 on a Sandy Bridge-EP E5-2670 and a Haswell-EP E5-2680 v3
with single-threaded OpenBLAS, BLIS, and MKL.
At first sight, the runtime for all setups follows a smooth cubic behavior
perfectly in line with the operation’s minimal cost of n3 FLOPs. However,
if for each setup we fit the measurements with a single cubic polynomial
that minimizes the least-squares relative error (details in Section 3.2.4), we
are left with the approximation error shown in Figure 3.7b. The absolute
relative approximation error4 lies between 0.86 % for BLIS on the Sandy
Bridge ( ) and 11.22 % for OpenBLAS on the Haswell ( ); on
average it is 5.30 %.
If we look closer at the approximation errors in Figure 3.7b—especially
for OpenBLAS on the Haswell ( )—we observe a piecewise smooth(er)
57

3 Performance Modeling
Sandy Bridge-EP E5-2670: OpenBLAS BLIS MKL Haswell-EP E5-2680 v3: OpenBLAS BLIS MKL
0 100 200 300 400 500
0
2
4
6
8
10
problem size n
runtime [ms]
(a) Runtime
−10
0
10
0 100 200 300 400 500
−10
0
10
problem size n
relative error [%]
(b) Error for one polynomial
−10
0
10
0 100 200 300 400 500
−10
0
10
problem size n
relative error [%]
(c) Error for two polynomials
−10
0
10
0 100 200 300 400 500
−10
0
10
problem size n
relative error [%]
(d) Error for three polynomials
Figure 3.7: Runtime and error of piecewise cubic polynomial fits dtrsmLLNN. Dashed lines: polynomial boundaries.
(1 thread, median of 100 repetitions)
58

3.1 Kernel Argument Analysis
behavior. Motivated by this observation, we now fit not one polynomial
to each data-set but two: one for the first half (n ≤ 280) and one for the
second half (n ≥ 280). For this two-split polynomial fit the approximation
error is shown in Figure 3.7c: The largest error is now reduced to 5.25 %
for MKL on the Haswell ( ), and the average error is 2.55 %—less
than half of the original approximation error. (Based on a more detailed
analysis, a better splitting point than 24+536
2 = 280 could have been chosen,
but as Figure 3.7b shows such choices would be notably different for each
setup.) Within the new approximation, the error for the second polynomial
(n ≥ 280) is already quite low—on average 0.38 %. Hence, in a second step,
we further subdivide only the first half of the domain (n ≤ 280) at n = 152,
and generate a new approximation consisting of three polynomials. As
Figure 3.7d shows, the error of this approximation is below 1.28 % ( ) in
all cases and on average 0.71 %.
To account for the not purely polynomial influence of a kernel’s size arguments
on its runtime, we will represent it in our models through piecewise polynomials.
Details on the such piecewise polynomial representations and their automated
generation are given in Sections 3.2.4, 3.2.5, and 3.3.
3.1.6 Data Arguments
With few exceptions (such as eigensolvers), the executed instructions and thus
the runtime of kernels do not depend on their operands’ numerical values.
However, the runtime may depend on where these operands are located within
the memory hierarchy: Kernels whose operands reside in cache prior to their
invocation run faster.
4 For a polynomial p(x) fit to measurements y1, . . . , yN in points x1, . . . , xN we consider the error 1/N ∑N
i=1|yi − p(xi)|/yi. Note that the least-squares fitting minimizes not this sum of absolute relative errors but the sum of squared relative errors.
59

3 Performance Modeling
in-cache A in-cache B in-cache out-of-cache
OpenBLAS BLIS MKL OpenBLAS BLIS MKL
0
0.2
0.4
0.6
0.8
1
1.2
1.4
1.6
runtime [ms]
Sandy Bridge-EP E5-2670 Haswell-EP E5-2680 v3
Figure 3.8: Runtime of dtrsmLLNN with in-cache and out-of-cache operands.
(m = n = 256, 1 thread, median of 100 repetitions)
Example 3.10: Data arguments
Figure 3.8 shows the runtime of
dtrsm( L
side
,L
uplo
,N
transA
,N
diag
, 256
m
, 256
n
, 1.0
alpha
,A
A
, 256
ldA
,B
B
, 256
ldB
),
i.e., B := A−1 B with A , B ∈ R256×256, for A and B a-priori either
in- or out-of-cache on a Sandy Bridge-EP E5-2670 and a Haswell-EP
E5-2680 v3 with single-threaded OpenBLAS, BLIS, and MKL.
Across all setups, the pure in-cache scenario ( ) is consistently faster than
out-of-cache ( ) by between 7.75 % (OpenBLAS on the Sandy Bridge)
and 45.08 % (MKL on the Haswell). While the scenarios where either
only A or only B is in-cache ( , ) are always between these extremes,
which of the two is faster depends on both the architectures and the BLAS
implementation.
60

3.1 Kernel Argument Analysis
The exact effects of caching on kernel runtime and performance are hard
to predict. However, since blocked algorithms operate on matrices with high
locality, we will generate our models with in-cache operands where possible: By
repeating each measurement twice, the most-recently-used portions of a kernel’s
operands (the entire operands for small operations) from the first repetition
are in-cache prior to the second repetition. Only these second repetitions’
measurements are used to construct our models.
We will revisit caching in more detail in Chapters 5 and 6.
3.1.7 Summary
This section studied the effects of various argument types on kernel runtime.
In summary, these effects and our decisions on how to represent them in our
models are as follows:
• Flag arguments (Section 3.1.1) can invoke separate execution branches
within kernel implementations. Hence we will generate a separate sub
model for each relevant combination of flag arguments.
• Scalar arguments (Section 3.1.2) affect the performance of kernels only
for the special values that allow to avoid certain arithmetic operations.
Hence we will scalars them just like flags with the possible values −1, 0,
1, and “any other value”.
• Size arguments (Section 3.1.5) greatly influence a kernel’s runtime by
determining its minimal FLOP-count. While this FLOP-count is usually
polynomial in the operand sizes, a kernel’s runtime can typically not be
represented accurately by a single polynomial. Hence, we will model the
effect of size arguments on runtime as piecewise polynomials. Further
more, to avoid small-scale runtime artefacts, we will ensure that in all
measurements all size arguments are multiples of 8.
• Data arguments (Section 3.1.6) do not affect the runtime of targeted
kernels through their numeric values. However, the operand’s location
61

3 Performance Modeling
in the processor’s memory hierarchy prior to a kernel invocation may
lead to different performance. While we could account for this effect
by generating separate models for specific memory preconditions (such
as in- and out-of-cache), we will focus on models based on repeated
measurements that correspond to in-cache data for operands smaller than
the cache.
• Leading dimension arguments (Section 3.1.3) generally have only a minor
effect on kernel runtime, but they should be choose as multiples of 8,
yet not of 512. To generate our models, we will hence set all leading
dimensions to a constant value, such as 5000.
• Increment arguments (Section 3.1.4) are typically 1 or equal to a matrix’s
leading dimension. We will hence treat them as flag arguments with
the two values 1 and “any large value”. Since multiples of 16 as leading
dimensions can incur runtime spikes, especially in BLAS Level 1 kernels,
we will choose a fixed large value for the second case that is not a multiple
of 16, such as 5000.
Based on these decisions on how to represent the influence of various argu
ment types on kernel runtime in our measurement-based performance models,
the following section describes our models’ structure and their automated
generation.
3.2 Model Generation
After analyzing the performance effects of various argument types on dense
linear algebra kernels in the previous section, we now turn to the design and
generation of our performance models.
Section 3.2.1 introduces the model structure and how their coverage is
configured. The following sections detail how each model (and sub-model)
is generated based on measurements: Section 3.2.2 describes the selection of
measurement points in the kernel’s argument space; Section 3.2.3 discusses
62

3.2 Model Generation
Haswell-EP E5-2680 v3 12 threads MKL
...
Sandy Bridge-EP E5-2670 1 thread OpenBLAS
dgemm . . .
dtrsm
(side, uplo, transA, diag, alpha) =
(R, L, N, N, −1) . . .
(L, L, N, N, 1)
(m, n) ∈
[24, 4152] × [24, 536] . . .
[24, 536] × [24, 4152]
setup model case domain polynomial
Figure 3.9: Structure of the performance models.
how repeated measurements at these points are used to compute summary
statistics of the expected kernel runtime; Section 3.2.4 specifies how set of
measurements is least-squares fitted with a single polynomial; and finally
Section 3.2.5 introduces the adaptive refinement approach that covers the range
of problem sizes with piecewise polynomials.
3.2.1 Model Structure
Based on the analyses of how a kernel’s different argument types affect its
performance in Section 3.1, we arrive at the structure for our performance
models depicted in Figure 3.9.
For each setup consisting of the hardware platform, number of threads,
63

3 Performance Modeling
and the BLAS implementation, a separate set of models is generated. Inde
pendent kernels can be modeled for each setup.
Each model represents the runtime of one kernel (e.g., dtrsm or dgemm):
It is essentially a function of the kernel’s arguments that returns runtime
estimates.5 To account for variations in kernel runtime for fixed arguments,
each estimate is not a single number, but a set of basic summary statistics,
such as minimum, median, average, and standard deviation.
Each model takes two sets of kernel arguments into account:
• Flag and scalar arguments (and increment arguments for vector opera
tions) are limited to a few discrete values: the distinct options for flags
and the values −1, 0, 1, and “any other value” for scalars (and either 1
or a “any large value” for increments). For a given kernel invocation, the
combination of these argument values identifies one of several discrete
cases . To best match the application scenario, each model can be
configured to represent only a subset of these cases.
• Size arguments take values from potentially large ranges of problem sizes.
In our models, these represented ranges are specified as (collections of)
rectangular (generally: hyper-cuboidal) domains . For each model
and case, these domains can be separately selected.
All other arguments, such as data arguments and leading dimensions, are not
represented in our models.
For each case and domain, we generate a separate sub-model that represents
the kernel runtime as a piecewise polynomial. Each polynomial piece
actually consists of a small list of polynomials corresponding to the modeled
runtime summary statistics.
Since implementing the composition of models from sub-models and the
corresponding separation and treatment of argument types is fairly straight
forward, the following sections focuses on the generation of a single sub-model.
5 Optionally further performance counters provided by the Sampler or derived metrics can be modeled. However, throughout this work we solely focus on runtime models.
64

3.2 Model Generation
3.2.2 Sample Distribution
For a fixed setup, discrete case, and rectangular domain, we model a kernel’s
runtime by taking a series of measurements—referred to as samples—and fitting
a polynomial to the measured runtime. The first step is to select a sampling
point distribution, i.e., a set of points in the domain at which the kernel runtime
is measured.
An intuitive option would be to (pseudo-)randomly distribute the sampling
points within the domain. However, this approach does not guarantee that,
e.g., points close to the domain’s boundary are well represented in the sampling
set, which in these areas greatly reduces the accuracy of polynomials fitted
to such data. Hence we do not use random sampling point distributions, and
instead consider two regular grid patterns:
• The simplest structured pattern is a regular Cartesian grid that covers
the whole domain evenly with points. In one dimension, a Cartesian grid
of n points x0, . . . , xn−1 between 0 and 1 is defined as
xi = i
n−1 .
With regards to the adaptive refinement approach (see Section 3.2.5), the
Cartesian grid’s advantage is its high sample reuse: When the domain
is divided in two along one dimension, all points of the original grid are
also points in the two new grids. Hence, the number of points in which
new measurement are required is reduced significantly.
• However, fitting a polynomial behavior with an even distribution of sam
ples is not ideal. A better alternative is to use Chebyshev nodes [29, Sec
tion 8.3], which minimize the approximation error by essentially moving
the sampling points closer to the region’s boundaries. In one dimension,
the n Chebyshev nodes x0, . . . , xn−1 between −1 and 1 are given by
xi = cos
( 2i + 1
2n π
)
.
65

3 Performance Modeling
1D re
use 2D 3D
(a) Caresian
(b) Chebyshev
Figure 3.10: Sampling point distributions and reuse.
In contrast to the Cartesian grid with perfect sample reuse, the Chebyshev
nodes offer no reuse at all. Furthermore, they do not include points on
the domain’s boundary. We hence use a slightly modified configuration
that moves the Chebyshev nodes to include the boundary:
xi = cos
(i
n − 1π
)
.
We refer do these points as a Chebyshev grid.
Example 3.11: Sampling point distributions
Figure 3.10 visualizes the two alternative sampling point distributions for
1D, 2D, and 3D domains. We select 4 points along the first dimension,
5 along the second, and 3 along the third.
The point reuse is shown for the 1D case: When the domain is split in
66

3.2 Model Generation
half, all points from the original Cartesian grid are reused in the refined
grid, and only three new points are generated; for the Chebyshev grid,
however, only the two outermost points are reused, while the other two
are not matched by points in the refined grid, and five new points are
generated.
Once the sampling points are chosen, we avoid implementation-dependent per
formance artefacts of size argument increments in steps of 1 (see Section 3.1.5.1)
by rounding all generated grid points to multiples of 8 along each dimension.
3.2.3 Repeated Measurements and Summary Statistics
Based on the kernel and the modeled cases, each sampling point is turned into
a measurement call: While the flag, size, and scalar arguments are determined
by the case and the point, the leading dimensions are set to a fixed large value
(such as 5000), and the operand sizes are deduced automatically.
To both avoid outliers and represent measurement fluctuations in our models,
each such constructed measurement call is then executed by the Sampler (see
Section 2.2.1) not only once, but repeatedly—typically between 5 and 20 times.
To avoid the effects of frequency fluctuations (see Section 2.1.2.2 and 2.1.2.3),
the repetitions for each measurement call are not executed in a single batch
but shuffled among all calls’ repetitions to obtain measurements across the
whole Sampler execution for each call. Furthermore, each repetition, executes
the measurement call twice in a row, to ensure consistent cache preconditions,
which offer high temporal locality (“warm” data) for small operations.
Once obtained, the collected measurement results for each call are turned
into summary statistics: minimum, median, maximum, average, and standard
deviation. In the next step, each of these statistics is fitted with a separate
polynomial.
67

3 Performance Modeling
3.2.4 Relative Least-Squares Polynomial Fitting
The starting point for the polynomial fitting procedure is a set of sampling
points x1, . . . , xN ∈ Rd (from the d-dimensional range of size arguments) and
corresponding measurement values yi ∈ R (i.e., per summary statistic).6 As
the set of polynomial basis functions, we use monomials m1, . . . , mM : Rd → R
whose maximum degree is determined by the kernel’s asymptotic complexity
(given by its minimal FLOP-count), yet may be further increased. The polyno
mial p is constructed as a linear combination of these monomials with weights
β1, . . . , βM ∈ R:
p(x) =
N
∑
j=1
βjmj(x) .
Example 3.12: Polynomial basis functions
If we model the runtime of dtrsmLLNN by letting its cost of m2n FLOPs
determine the maximum monomial degree, we use a bivariate polynomial
in x = (x1, x2) of the form
p(x) = β1 + β2x1 + β3x2 + β4x21 + β5x1x2 + β6x21x2 =
6
∑
j=1
βjmj(x) ,
i.e., with the monomial basis
m1(x) = 1 m2(x) = x1 m3(x) = x2
m4(x) = x21 m5(x) = x1x2 m6(x) = x21x2 .
Had we chosen to increase the monomial degree in each dimension by one,
we would use a polynomial with the 12 basis monomials:
m1(x) = 1 m2(x) = x1 m3(x) = x2
m4(x) = x21 m5(x) = x1x2 m6(x) = x22
m7(x) = x31 m8(x) = x21x2 m9(x) = x1x22
6 Technically, we have xi ∈ N0d and y ∈ N0; however, for the fitting procedure these points are treated as floating-point tuples.
68

3.2 Model Generation
m10(x) = x31x2 m11(x) = x21x22 m12(x) = x31x22 .
The weights βj are chosen by minimizing the squared relative error
S(β1, . . . , βM ) :de=f
N
∑
i=1
( yi − p(xi)
yi
)2
=
N
∑
i=1

1 −
M
∑
j=1
βj mj (xi )
yi


2
.
With
β :de=f

      
β1
β...2
βM

      
and X :de=f

           
m1(x1)
y1
m2(x1)
y1
· · · mM (x1)
y1
m1(x2)
y2
m2(x2)
y2
· · · mM (x2)
y2
... ... . . . ...
m1(xN )
yN
m2(xN )
yN
· · · mM (xN )
yN

           
,
this error can be expressed as
S(β) =
∥ ∥
∥1 − X β
∥ ∥ ∥
2
=
(
1−X β
)T (
1−X β
)
= 1 − 2 βT XT 1 + βT XT X β .
Since S(β) is convex, we can find its minimum by setting its derivative to zero:
∂S
(
β
)
∂β = −2 XT 1 + 2 XT X β = 0 .
Rewritten as (
XT X
)
β = XT 1 ,
this is known as the normal equations, which have a unique solution because,
since the mj are linearly independent, X has full rank. To obtain a numerically
stable solution of the normal equations, we use numpy’s linalg.lstsq, which is
based on the singular value decomposition of X.
69

3 Performance Modeling
3.2.5 Adaptive Refinement
So far, we have determined how sampling points are chosen in a given rectangular
(generally: hyper-cuboidal) domain, how summary statistics are computed from
repeated measurements in these points, and how a multivariate polynomial is
fitted to one of these statistics. We now describe how a domain is adaptively
subdivided and fitted with a piecewise function consisting of such polynomials.
The basis for this adaptive subdivision is an error measure for the approx
imation accuracy. To compute this measure, we consider the polynomial fit
of a selected reference statistic; typical choices are the minimum or median
since they are insensitive to fluctuations. For the selected reference statistic,
we compute the point-wise absolute relative error ei for the polynomial ap
proximation p in each measurement point xi with respect to the measurement
statistic yi:
ei
:de=f
∣ ∣ ∣ ∣ ∣
yi − p(xi)
yi
∣ ∣ ∣ ∣ ∣
.
Next, the error measure is computed from the set of errors {e1, . . . , eN } as its
average, maximum, or ninetieth percentile.
Based on this error measure, the adaptive refinement process subdivides the
initial domain as follows: It starts by sampling the entire domain and fits one
polynomial to all measurements (for each statistic). If either the error measure
for this approximation is below a specified error bound (i.e., a threshold value)
or the size of the domain along each dimension is below a configurable minimum
width, the process terminates. Otherwise, the domain is split in half along its
relatively largest dimension: If along each dimension i the domain spans the
interval [li, ui], we choose the dimension for which ui/li is the largest. Along
this dimension s, the new interval is split in half7 (rounded to the nearest
7 We choose the interval’s center, since it guarantees the most regular subdivision. A more guided choice would require either advanced knowledge of the kernel implementation or a significantly higher sampling resolution.
70

3.2 Model Generation
multiple of 8) at
ms
:de=f round
( ls + us
2 ,8
)
=8
⌊ ls + us + 8 16
⌋
,
and the new domains are defined by the intervals [ls, ms] and [ms, us]. The
process is applied recursively to both new domains until either the error bound
or the minimum width is reached.
Note that the resulting performance models are not smooth because the
polynomial pieces are not required to match at the boundaries. Since our
applications do not require any continuity in our models, this does not pose a
problem. Hence, we do not apply, e.g., splines to generate smooth models at
increased cost.
Example 3.13: Adaptive refinement
Figure 3.11 illustrates the adaptive refinement process for
dtrsm( L
side
,L
uplo
,N
transA
,N
diag
,m
m
,n
n
, 1.0
alpha
,A
A
, 5000
ldA
,B
B
, 5000
ldB
),
i.e., B := A−1 B with A A ∈ Rm×m and B ∈ Rm×n, with m ∈ [24, 536]
and n ∈ [24, 4152] on a Sandy Bridge-EP E5-2670 with single-threaded
OpenBLAS. We use a Chebyshev sampling point distributions with 6
and 5 values along, respectively, dimensions m and n, and apply adaptive
refinement to fit a piecewise polynomial to the minimum of 15 measurement
repetitions until either the maximum error across the sampling points falls
below 1 % or all domain dimensions fall below 64.
The initial distribution of sampling points is shown in Figure 3.11a. The
polynomial fit to samples in these points has an error measure of 4.21 %.
Since this exceeds the error bound of 1 %, the domain is split in half along
the (relatively) larger dimension n at n = 4152+24
2 = 2088.
The sampling points for the two new domains are displayed in Figure 3.11b;
the error measure for their newly fitted polynomials is 3.36 % (n ≤ 2088)
71

3 Performance Modeling
error measure: 0 % 1 % 2 % 3 % 4 % 5 %
24 4152
24
536
error: 4.21 %
n
m
(a) Initial sampling points and fit
24 2088 4152
24
536
3.36 % 0.59 %
n
m
(b) First refinement step
24 1056 2088 4152
24
536
1.13 % 0.83 % 0.59 %
n
m
(c) Second refinement step
(d) Further refinement steps
Figure 3.11: Modeling through adaptive refinement for dtrsmLLNN.
(Sandy Bridge-EP E5-2670, 1 thread, OpenBLAS)
72

3.3 Model Generator Configuration
and 0.59 % (n ≥ 2088). While the latter is already below the error bound
of 1 %, the approximation for n ≤ 2088 is further refined.
After the next refinement step (Figure 3.11c) the error is reduced to 1.13 %
(n ≤ 1056) and 0.83 % (1056 ≤ n ≤ 2088). As illustrated in Figure 3.11d,
further steps are applied until the error measure is globally below 1 % after a
total 8 refinements—the process was solely terminated by globally reaching
the target error bound and not the minimum width of 64.
While the sampler configuration in this example was chosen to demon
strate the adaptive refinement process, the increased number of polynomial
pieces for smaller problem sizes is typical and in practice commonly triggers
the minimum-width termination criterion. However, for kernels with a cubic
asymptotic complexity (such as BLAS Level 3), generating models for such
small problem sizes is quite cheep compared to larger sizes.
With the adaptive refinement procedure, we can now generate models for a
wide range of dense linear algebra kernels, and proceed to take a closer look at
the generated models.
3.3 Model Generator Configuration
We now discuss the configuration options of the adaptive refinement process,
and examine how they affect the model accuracy and generation cost. We then
select a default configuration to generate the models used for our performance
predictions in Chapter 4.
3.3.1 Configuration Parameters
The adaptive refinement is controlled by a total of eight configuration parameters.
They allow to control the model accuracy, but also affect the time spent for the
required measurements. The eight parameters regulate the model generation
as follows:
• To represent the runtime of a kernel, the monomial basis for the fitted
polynomials needs to at least cover the kernel’s asymptotic complexity (i.e.,
73

3 Performance Modeling
its minimal FLOP-count). To better represent performance variations,
however, the maximum degree of the monomials can be increased in
each each dimension (i.e., size argument). We refer to this increase as
overfitting; practical values are between 0 and 2.
• To fit a polynomial to a routine’s runtime, the number of sampling
points along each dimension needs to be at least one more than the
corresponding polynomial degree. However, since this minimal number
of points yields a polynomial that fits the measurements perfectly, we
cannot use it to compute an approximation error. We hence increase
the number of sampling points per dimension by at least one, and to
further improve the approximation accuracy, further points can be added;
we refer to the total number of points added as oversampling; practical
values are values between 1 and 10.
• We introduced two alternatives to distribute sampling points on grids that
cover the domains of problem sizes: a Cartesian grid and a Chebyshev
grid.
• For each sampling point, we perform several measurement repetitions;
practical values are between 5 and 20.
• From the repetitions, we compute several runtime summary statistics:
minimum, median, maximum, average, and standard deviation. One
of these is selected as the reference statistic; practical choices are the
minimum and median.
• From the absolute relative errors in the reference statistic for all sampling
points, we compute the error measure which is these relative errors’
average, maximum, or 90th percentile.
• The first termination criterion for the adaptive refinement process is the
approximation accuracy: The refinement stops when the computed error
measure is below a target error bound; practical values for this bound are
between 1 % and 5 %.
74

3.3 Model Generator Configuration
• The second termination criterion is the size of the domains: The refine
ment stops when a new domain is smaller than a minimum width along
all dimensions; typical values are 32 and 64.
3.3.2 Trade-Off and Configuration Selection
In the following, we analyze the accuracy of our models and their generation
cost, and select a configuration to generate the models for the performance
predictions in the Chapter 4.
We consider the model generation for
dtrsm( L
side
,L
uplo
,N
transA
,N
diag
,m
m
,n
n
, 1.0
alpha
,A
A
, 5000
ldA
,B
B
, 5000
ldB
),
i.e., B := A−1 B with A ∈ Rm×m and B ∈ Rm×n, for sizes m ∈ [24, 536]
and n ∈ [24, 4152] on a Sandy Bridge-EP E5-2670 and a Haswell-EP
E5-2680 v3 using single-threaded OpenBLAS, BLIS, and MKL.
For each setup, our first step is to exhaustively measure the dtrsmLLNN’s
runtime 15 times in all points (m, n) in the domain [24, 536] × [24, 4152] at
which both m and n are multiples of 8—a total of 504 075 measurements.
These measurements are used both as the basis for our model generation and
to evaluate the model accuracy across the entire domain (contrary to the model
generation, which can only evaluate the error in its sampling points).
We generate models for all 2880 configurations obtained from combining the
parameter values shown in Table 3.1. These configurations result in a wide
range of models with significantly different accuracies and generation costs. To
evaluate them, we quantify the model error as the averaged relative error of
the predicted minimum runtime p(xi) relative to the measured minimum yi
across all N = 33 605 points xi of the domain:
model error :de=f 1
N
N
∑
i=1
|p(xi) − yi|
yi
;
75

3 Performance Modeling
parameter values
overfitting 0, 1, 2 oversampling 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 distribution grid Cartesian, Chebyshev measurement repetitions 5, 10, 15 reference statistic minimum, median error measure 90th percentile, maximum target error bound 1 %, 2 % minimum width 32, 64
Table 3.1: Configuration parameters for the model generation and their studied values.
model error model cost minimum maximum minimum maximum
overfitting 1 0 0 1 oversampling 10 2 1 9 distribution grid Cartesian Chebyshev Cartesian Cartesian measurement repetitions 15 5 5 5 reference statistic median minimum minimum median error measure maximum 90th perc. maximum maximum target error bound 1 % 2 % 2 % 1 % minimum width 32 32 64 32
model error 0.12 % 0.92 % 0.73 % 0.22 % model cost 5.48 min 1.68 s 0.96 s 15.49 min
Table 3.2: Model configuration parameters for minimum and maximum error and cost.
(Sandy Bridge-EP E5-2670, 1 thread, OpenBLAS)
furthermore, we define the model cost as the total runtime of the required
measurements used as samples.
Example 3.14: Model accuracy
Figure 3.12 shows the structure and point-wise accuracy of the four models
with minimum and maximum accuracy and cost for single-threaded Open
BLAS on a Sandy Bridge-EP E5-2670; Table 3.2 lists the corresponding
configurations. Both the cheapest and least accurate model use only a single
76

3.3 Model Generator Configuration
012345 absolute relative error [%]
24 1056 2088 3120 4152
24
536
n
m
(a) Least accurate (model error: 0.92 %; cost: 1.68 s)
24 1056 2088 3120 4152
24
536
n
m
(b) Most accurate (model error: 0.12 %; cost: 5.48 min)
24 1056 2088 3120 4152
24
536
n
m
(c) Least expensive (model error: 0.73 %; cost: 0.96 s)
24 1056 2088 3120 4152
24
536
n
m
(d) Most expensive (model error: 0.22 %; cost: 15.49 min)
Figure 3.12: Accuracy and structure of models for dtrsmLLNN.
(Sandy Bridge-EP E5-2670, 1 thread, OpenBLAS)
77

3 Performance Modeling
polynomial for the entire domain but also offer only poor accuracy. The
expensive and accurate models on the other hand subdivide the domain
repetitively, and thus find a better fitting piecewise polynomial.
The accuracy and cost of all 2880 generated models for each setup are
presented in Figure 3.13a; in this plot, the preferable models with low error
and cost are found close to the origin. All setups share the same general trend:
Models with low accuracy are quite cheap, while models with high accuracy
are more expensive. Hence we are faced with a trade-off between accuracy and
cost. However, the configuration selection is not straight-forward: Models with
practically identical accuracy are up to a factor of 16 apart in generation cost,
and a cheap and accurate configuration for one setup may be neither for other
setups. In the following, we describe how we approach the search-space of all
considered configurations, and identify a desirable default configuration that
we subsequently use to generate the models for all setups and kernels needed
for our performance predictions in Chapter 4.
Before we begin to reduce our search space, we notice that on the Haswell,
the models for both BLIS ( ) and MKL ( ) are on average less than half
as accurate than for the other setups. The cause is a rather jagged perfor
mance behavior, which is difficult to represent accurately. Hence, to identify a
good default configuration, we consider only the Sandy Bridge ( , , ) and
OpenBLAS on the Haswell ( ).
Our first step is to prune by accuracy: We discard any configuration that
for any of the considered setups yields a model error larger than 1.5× the
minimum error for that setup; in other words, all remaining configurations
generate models that are at most 50 % less accurate than the most accurate
model. This step reduces the number of potential configurations from 2880
to 163; all remaining configurations use an oversampling value of 3 or higher,
and a target error bound of 1 %. Figure 3.13b shows the 163 remaining models’
accuracy and cost.
Our second step is to similarly prune by cost: We discard any configuration
that for any considered setup takes longer than the first quartile in generation
78

3.3 Model Generator Configuration
Sandy Bridge-EP E5-2670: OpenBLAS BLIS MKL Haswell-EP E5-2680 v3: OpenBLAS BLIS MKL
0 0.5 1 1.5 2 2.5 3 3.5
0
10
20
30
40
50
60
model error [%]
model cost [min]
(a) All 2880 configurations
0 0.5 1 1.5
0
10
20
30
40
50
60
model error [%]
model cost [min]
(b) Within 2× of most accurate
0 0.5 1 1.5
0
10
20
30
40
default configuration
model error [%]
model cost [min]
(c) Below 10th percentile in cost
Figure 3.13: Model configuration trade-off in accuracy versus cost and steps towards selecting a default configuration.
(1 thread, error in the minimum measure)
79

3 Performance Modeling
overfitting
oversampling
distribution
grid
measurement
repetitions
reference
statistic
error
measure
target error
bound
minimum
width
(1) 0 4 Chebyshev 10 median maximum 1 % 32
(2) 0 4 Chebyshev 15 minimum maximum 1 % 32
(3) 1 5 Chebyshev 10 median maximum 1 % 32
(4) 1 5 Chebyshev 10 minimum maximum 1 % 32
(5) 1 8 Cartesian 5 minimum maximum 1 % 32 (6) 2 4 Cartesian 5 median maximum 1 % 64 (7) 2 4 Cartesian 10 median maximum 1 % 32 (8) 2 4 Chebyshev 10 median maximum 1 % 32
(9) 2 4 Chebyshev 10 median maximum 1 % 64
(10) 2 4 Chebyshev 10 minimum maximum 1 % 32
(11) 2 4 Chebyshev 10 minimum maximum 1 % 64
(12) 2 4 Chebyshev 15 minimum maximum 1 % 32
(13) 2 4 Chebyshev 15 minimum maximum 1 % 64
(14) 2 7 Cartesian 10 minimum maximum 1 % 32
Table 3.3: Model generator configurations remaining after pruning. Bold: majority value. Blue: default configuration.
time for that setup; in other words, the remaining models are all within the
25 % that are generated the fastest. This step further reduces the number of
potential configurations from 163 to 14, as shown in Figure 3.13c.
The parameter values for the 14 remaining configurations are shown in
Table 3.3. For each parameter, we can find one value that is common to at
least 8 of the 14 configurations (highlighted in bold). We choose our default
configuration by selecting this most common value for each parameter. It
corresponds to line (10) in Table 3.3 (highlighted in blue), and is marked for
each setup in Figure 3.13c. Note that it also serves as a good choice between
accuracy and cost for BLIS ( ) and MKL ( ) on the Haswell, which were
not included in the pruning process.
80

3.4 Summary
3.3.3 Variations of the Default Configuration
While the configuration was found to yield good accuracies at reasonable costs
for almost all encountered kernels, it proves to be quite expensive for kernels
with three degrees of freedom, which for the predictions in Chapter 4 only
applies to dgemm with its three size arguments m, n, and k. To reduce the
modeling cost for this kernel, we adjust the default configuration by reduce the
overfitting from 2 to 0, and increasing the minimum width from 32 to 64.
Furthermore, the performance of BLAS kernels becomes less smooth when
we bring multi-threading into the picture. Hence, to avoid excessive partitioning
as seen in Figure 3.12d, we increase the minimum width for all models to 64,
and for dgemm to 256.
3.4 Summary
This chapter first studied the effects of various kernel argument types on
performance, and then introduced the structure of our performance models
and their automated measurement-based generation. Since this generation
process offers various configuration parameters, we studied the trade-off between
the resulting models’ accuracy and generation cost, and concluded with the
selection of default configurations, which are used to generate all models for
the following chapter’s performance predictions.
81



4 Model-Based Predictions
for Blocked Algorithms
With accurate performance models at hand, we predict the runtime and per
formance of blocked algorithms in order to both select the fastest algorithm
for a given operation from available alternatives and tune its block size. We
thereby arrive at a near-optimal solution entirely without executing any of the
potential algorithms and configurations; compared to tuning through empirical
measurements, accurate model-based performance predictions are orders of
magnitude faster.
For this chapter, we generated performance models to predict all studied
algorithms with problem sizes up to n = 4152 and block sizes between b = 24
and 536. E.g., our models for dtrsm each cover 4 cases (combinations of flag
argument values) and domains (ranges of problem sizes) of size [24, 536] ×
[24, 4152].
We begin by introducing runtime, performance, and efficiency predictions for
executions of blocked algorithms in Section 4.1, followed by accuracy metrics
for such predictions in Section 4.2. Next, we present a detailed study on
the prediction accuracy for a blocked Cholesky decomposition under various
conditions in Section 4.3 and a broader accuracy evaluation for a range of
blocked LAPACK algorithms in Section 4.4. We then apply our predictions
to identify the fastest blocked algorithms for different operations in Section 4.5,
and finally determine near-optimal block sizes for a range of algorithms in
Section 4.6.
83

4 Model-Based Predictions for Blocked Algorithms
Publication
The work presented in this chapter is in parts based on research previously
published in:
[4] Elmar Peise and Paolo Bientinesi. Recursive Algorithms for Dense Linear Algebra: The ReLAPACK Collection. Technical report. Accepted for publication in the ACM Trans. Math. Softw. AICES, RWTH Aachen University, Feb. 2016. arXiv: 1602.06763 [cs.MS].
[8] Elmar Peise and Paolo Bientinesi. Cache-aware Performance Modeling and Prediction for Dense Linear Algebra. Technical report. AICES, RWTH Aachen University, Nov. 2014. arXiv: 1409.8602 [cs.PF].
[11] Elmar Peise and Paolo Bientinesi. “Performance Modeling for Dense Linear Algebra”. In: 2012 SC Companion: High Performance Computing, Networking Storage and Analysis. SCC ’12. IEEE Computer Society, Nov. 2012, pages 406416. doi: 10.1109/SC.Companion.2012.60.
[12] Elmar Peise. “Hierarchical Performance Modeling for Ranking Dense Linear Algebra Algorithms”. Master’s thesis. Aachen Institute for Computational Engineering Science, RWTH Aachen, May 2012. arXiv: 1207.5217 [cs.PF].
4.1 Performance Prediction
Based on our performance models, we now predict the runtime and performance
of individual blocked algorithm executions. For each algorithm, the problem
size and the block size uniquely determine the exact sequence of calls (i.e.,
kernel invocations). For each call C in this sequence and a selected hardware
and software setup, our performance models provide a runtime estimate test(C).
Summing these estimates yields our runtime prediction
tpred
:de=f ∑
calls C
test(C) . (4.1)
Example 4.1: Runtime prediction
Table 4.1 lists the sequence of calls to invert a lower-triangular matrix of
size n = 800 (i.e., A := A−1 with A ∈ R800×800) using blocked algorithm 1
84

4.1 Performance Prediction
step call C test(C)
dtrmm( R
side
,L
uplo
,N
transA
,N
diag
, 300
m
,0
n
, 1.0
alpha
, A00
A
, 800
ldA
, A10
B
, 800
ldB
) 0.00 ms
1 dtrsm( L
side
,L
uplo
,N
transA
,N
diag
, 300
m
,0
n
, -1.0
alpha
, A11
A
, 800
ldA
, A10
B
, 800
ldB
) 0.00 ms
dtrti2( L
uplo
, 300
n
, A11
A
, 800
ldA
) 2.64 ms
dtrmm( R
side
,L
uplo
,N
transA
,N
diag
, 300
m
, 300
n
, 1.0
alpha
, A00
A
, 800
ldA
, A10
B
, 800
ldB
) 1.71 ms
2 dtrsm( L
side
,L
uplo
,N
transA
,N
diag
, 300
m
, 300
n
, -1.0
alpha
, A11
A
, 800
ldA
, A10
B
, 800
ldB
) 2.07 ms
dtrti2( L
uplo
, 300
n
, A11
A
, 800
ldA
) 2.64 ms
dtrmm( R
side
,L
uplo
,N
transA
,N
diag
, 200
m
, 600
n
, 1.0
alpha
, A00
A
, 800
ldA
, A10
B
, 800
ldB
) 4.15 ms
3 dtrsm( L
side
,L
uplo
,N
transA
,N
diag
, 200
m
, 600
n
, -1.0
alpha
, A11
A
, 800
ldA
, A10
B
, 800
ldB
) 2.17 ms
dtrti2( L
uplo
, 200
n
, A11
A
, 800
ldA
) 0.85 ms
tpred: 16.22 ms
Table 4.1: Sequence of calls, runtime estimates, and accumulated prediction for the inversion of a lower-triangular matrix with blocked algorithm 1.
(n = 800, b = 300, Sandy Bridge-EP E5-2670, OpenBLAS, 1 thread, statistic: median)
(Figure 1.1b on Page 5) with block size b = 300; for each call the table’s
last column presents median runtime estimates from performance models
for a Sandy Bridge-EP E5-2670 with single-threaded OpenBLAS. The
sum of these estimates is our runtime prediction for the entire algorithm:
tpred = 16.22 ms.
Note that with block size b = 300, the algorithm traverses the input
matrix of size n = 800 in three steps, and in each step the sub-matrices A00,
A10, and A11 refer to different portions of A , i.e., after every three calls in
Table 4.1. As a result, the first two calls perform no operations since their
size arguments n are 0 (i.e., their operand operand A10 has a width of 0);
hence their estimated runtime is 0 ms.
Our performance models estimate the runtime of kernel invocations not as a
single number but as a range of summary statistics: minimum temsitn, median tmed
est ,
85

4 Model-Based Predictions for Blocked Algorithms
maximum tmax
est , mean (average) tμ
est, and standard deviation teσst. Each of these
statistics is also available for our prediction:
ts
pred
:de=f ∑
calls C
ts
est(C) for s ∈ {min, med, max, μ} , (4.2)
tσ
pred
:de=f
√ ∑
calls C
teσst(C)2 . (4.3)
Note that the definition for the standard deviation tpσred assumes uncorrelated
estimates teσst(C).
Example 4.2: Prediction summary statistics
For the algorithm execution in Example 4.1, our predictions yield the
following summary statistics:
tpmriend = 16.18 ms tmed
pred = 16.22 ms tmax
pred = 16.46 ms
tμ
pred = 16.25 ms tσ
pred = 95.88 μs .
The predictions indicate only minimal runtime fluctuations: The predicted
standard deviation tpσred is only 0.59 % of the mean tμ
pred.
Predictions for derived metrics, such as performance and (compute-bound)
efficiency, are obtained from the runtime prediction in combination with prop
erties of the operation and the execution hardware (see Appendix A):
• The performance prediction ppred is computed from the runtime prediction
and the operation’s cost (i.e., minimal FLOP-count):
ppmriend
:de=f cost
tmax
pred
pmed
pred
:de=f cost
tmed
pred
pmax
pred
:de=f cost
tpmriend
(4.4)
pμ
pred
:de=f cost
tμ
pred

1 + tpσred2
tμ
pred
2

 pσ
pred
:de=f cost × tpσred
tμ
pred
2 . (4.5)
Note that the definitions of the performance prediction’s mean pμ
pred
and standard deviation ppσred are, respectively, second- and first-order
approximations through Taylor expansions [22, Section 4.3.2].
86

4.2 Accuracy Quantification
• The efficiency prediction epred is obtained from the performance prediction
and the processor’s peak (floating-point) performance:
es
pred
:de=f pspred
peak performance for s ∈ {min, med, max, μ, σ} . (4.6)
Example 4.3: Performance and efficiency predictions
Following Examples 4.1 and 4.2, we consider that the inversion of a triangular
matrix of size n = 800 has a minimal cost of 1
6 n(n + 1)(2n + 1) FLOPs =
170 986 800 FLOPs and obtain the following performance prediction:
ppmriend = 10.39 GFLOPs/s pmax
pred = 10.57 GFLOPs/s
pmed
pred = 10.54 GFLOPs/s
pμ
pred = 10.52 GFLOPs/s pσ
pred = 62.09 MFLOPs/s .
If we compare this prediction to the Sandy Bridge-EP E5-2670’s
theoretical single-threaded peak performance of 20.8 GFLOPs/s, we arrive
at the following efficiency prediction:
epmriend = 49.93 % emed
pred = 50.68 % emax
pred = 50.81 %
eμ
pred = 50.59 % eσ
pred = 0.30 % .
4.2 Accuracy Quantification
We evaluate the accuracy of our performance models by comparing their predic
tions to measurements. For this purpose, we time the predicted algorithm ten
times (with the Sampler), and compute the summary statistics minimum tmmienas,
median tmed
meas, maximum tmax
meas, mean tμmeas, and standard deviation tσmeas. In
contrast to our predictions, measurement statistics for other metrics, such as
performance pmeas and efficiency emeas, are obtained by first computing the met
ric value for each individual data-point, and then applying the corresponding
statistic.
87

4 Model-Based Predictions for Blocked Algorithms
Example 4.4: Algorithm performance measurements
Measuring the runtime of the triangular matrix inversion from Example 4.1
ten times yields the following results:
16.25 ms 16.27 ms 16.26 ms 16.27 ms 16.26 ms
16.26 ms 16.28 ms 16.27 ms 16.26 ms 16.26 ms .
From these repetitions, we obtain the following summary statistics:
tmmienas = 16.25 ms tmed
meas = 16.26 ms tmax
meas = 16.25 ms
tμ
meas = 16.26 ms tσ
meas = 7.61 μs .
These measurements exhibit even less fluctuations than our models pre
dicted (Example 4.2): The runtime standard deviation tσmeas is only 0.05 % of
the mean tμmeas.
We compute the prediction error xerr for any metric x as the difference
between the prediction and the measurement:
xs
err
:de=f xs
pred − xs
meas for x ∈ {t, p, e}, s ∈ {min, med, max, μ, σ} .
To compare the prediction error for different algorithms and problem sizes,
we relate it to the predicted metric (e.g., the median measured runtime). For
this purpose, we compute the relative error (RE) xRE with respect to the
measurement:
xs
RE
:de=f xesrr
xsmeas
for x ∈ {t, p, e}, s ∈ {min, med, max, μ, σ} .
Furthermore, to average errors across multiple data-points (e.g., problem sizes
or setups), we use the absolute relative error (ARE) xARE:
xs
ARE
:de=f |xs
RE| for x ∈ {t, p, e}, s ∈ {min, med, max, μ, σ} .
88

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:56.529Z
- **Text Length:** 147264 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
