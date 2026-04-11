# PDF Document: Quantum computing a gentle introduction - Rieffel, Polak.pdf

**File Path:** Quantum computing a gentle introduction - Rieffel, Polak.pdf

**Processed Date:** 2026-02-10T18:16:27.059Z

**File Size:** 6957.03 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 1000

**Title:** Quantum computing a gentle introduction - Rieffel, Polak

**Collection:** Textbooks > Physics > Quantum Information and Computation

---

## Extracted Text Content

QUANTUM COMPUTING

Scientiﬁc and Engineering Computation William Gropp and Ewing Lusk, editors; Janusz Kowalik, founding editor
A complete list of the books in this series can be found at the back of this book.

QUANTUM COMPUTING
A Gentle Introduction Eleanor Rieffel and Wolfgang Polak
The MIT Press Cambridge, Massachusetts London, England

©2011 Massachusetts Institute of Technology
All rights reserved. No part of this book may be reproduced in any form by any electronic or mechanical means (including photocopying, recording, or information storage and retrieval) without permission in writing from the publisher.
For information about special quantity discounts, please email special_sales@mitpress.mit.edu
This book was set in Syntax and Times Roman by Westchester Book Group. Printed and bound in the United States of America.
Library of Congress Cataloging-in-Publication Data Rieffel, Eleanor, 1965– Quantum computing : a gentle introduction / Eleanor Rieffel and Wolfgang Polak.
p. cm.—(Scientiﬁc and engineering computation) Includes bibliographical references and index. ISBN 978-0-262-01506-6 (hardcover : alk. paper) 1. Quantum computers. 2. Quantum theory. I. Polak, Wolfgang, 1950– II. Title. QA76.889.R54 2011 004.1—dc22
2010022682
10 9 8 7 6 5 4 3 2 1

Contents
Preface xi
1 Introduction 1
I QUANTUM BUILDING BLOCKS 7
2 Single-Qubit Quantum Systems 9 2.1 The Quantum Mechanics of Photon Polarization 9 2.1.1 A Simple Experiment 10 2.1.2 A Quantum Explanation 11 2.2 Single Quantum Bits 13 2.3 Single-Qubit Measurement 16 2.4 A Quantum Key Distribution Protocol 18 2.5 The State Space of a Single-Qubit System 21 2.5.1 Relative Phases versus Global Phases 21 2.5.2 Geometric Views of the State Space of a Single Qubit 23 2.5.3 Comments on General Quantum State Spaces 25 2.6 References 25 2.7 Exercises 26
3 Multiple-Qubit Systems 31 3.1 Quantum State Spaces 32 3.1.1 Direct Sums of Vector Spaces 32 3.1.2 Tensor Products of Vector Spaces 33 3.1.3 The State Space of an n-Qubit System 34 3.2 Entangled States 38 3.3 Basics of Multi-Qubit Measurement 41 3.4 Quantum Key Distribution Using Entangled States 43 3.5 References 44 3.6 Exercises 44
4 Measurement of Multiple-Qubit States 47 4.1 Dirac’s Bra/Ket Notation for Linear Transformations 47 4.2 Projection Operators for Measurement 49

vi

Contents

4.3 Hermitian Operator Formalism for Measurement 53 4.3.1 The Measurement Postulate 55
4.4 EPR Paradox and Bell’s Theorem 60 4.4.1 Setup for Bell’s Theorem 62 4.4.2 What Quantum Mechanics Predicts 62 4.4.3 Special Case of Bell’s Theorem: What Any Local Hidden Variable Theory Predicts 63 4.4.4 Bell’s Inequality 64
4.5 References 65 4.6 Exercises 66
5 Quantum State Transformations 71 5.1 Unitary Transformations 72 5.1.1 Impossible Transformations: The No-Cloning Principle 73 5.2 Some Simple Quantum Gates 74 5.2.1 The Pauli Transformations 75 5.2.2 The Hadamard Transformation 76 5.2.3 Multiple-Qubit Transformations from Single-Qubit Transformations 76 5.2.4 The Controlled-NOT and Other Singly Controlled Gates 77 5.3 Applications of Simple Gates 80 5.3.1 Dense Coding 81 5.3.2 Quantum Teleportation 82 5.4 Realizing Unitary Transformations as Qua-
ntum Circuits 84 5.4.1 Decomposition of Single-Qubit Transformations 84 5.4.2 Singly-Controlled Single-Qubit Transformations 86 5.4.3 Multiply-Controlled Single-Qubit Transformations 87 5.4.4 General Unitary Transformations 89 5.5 A Universally Approximating Set of Gates 91 5.6 The Standard Circuit Model 93 5.7 References 93 5.8 Exercises 94
6 Quantum Versions of Classical Computations 99 6.1 From Reversible Classical Computations to Quantum Computations 99 6.1.1 Reversible and Quantum Versions of Simple Classical Gates 101 6.2 Reversible Implementations of Classical Circuits 103 6.2.1 A Naive Reversible Implementation 103 6.2.2 A General Construction 106 6.3 A Language for Quantum Implementations 110 6.3.1 The Basics 111 6.3.2 Functions 112 6.4 Some Example Programs for Arithmetic Operations 115 6.4.1 Efﬁcient Implementation of AND 1-
15 6.4.2 Efﬁcient Implementation of Multiply-Controlled Single-Qubit Transformations 116 6.4.3 In-Place Addition 117 6.4.4 Modular Addition 117 6.4.5 Modular Multiplication 118 6.4.6 Modular Exponentiation 119

Contents

vii

6.5 References 120 6.6 Exercises 121
II QUANTUM ALGORITHMS 123
7 Introduction to Quantum Algorithms 125 7.1 Computing with Superpositions 126 7.1.1 The Walsh-Hadamard Transformation 126 7.1.2 Quantum Parallelism 128 7.2 Notions of Complexity 130 7.2.1 Query Complexity 131 7.2.2 Communication Complexity 132 7.3 A Simple Quantum Algorithm 132 7.3.1 Deutsch’s Problem 133 7.4 Quantum Subroutines 134 7.4.1 The Importance of Unentangling Temporary Qubits in Quantum Subroutines 134 7.4.2 Phase Change for a Subset of Basis Vectors 135 7.4.3 State-Dependent Phase Shif-
ts 138 7.4.4 State-Dependent Single-Qubit Amplitude Shifts 139 7.5 A Few Simple Quantum Algorithms 140 7.5.1 Deutsch-Jozsa Problem 140 7.5.2 Bernstein-Vazirani Problem 141 7.5.3 Simon’s Problem 144 7.5.4 Distributed Computation 145 7.6 Comments on Quantum Parallelism 146 7.7 Machine Models and Complexity Classes 148 7.7.1 Complexity Classes 149 7.7.2 Complexity: Known Results 150 7.8 Quantum Fourier Transformations 153 7.8.1 The Classical Fourier Transform 153 7.8.2 The Quantum Fourier Transform 1-
55 7.8.3 A Quantum Circuit for Fast Fourier Transform 156 7.9 References 158 7.10 Exercises 159
8 Shor’s Algorithm 163 8.1 Classical Reduction to Period-Finding 164 8.2 Shor’s Factoring Algorithm 164 8.2.1 The Quantum Core 165 8.2.2 Classical Extraction of the Period from the Measured Value 166 8.3 Example Illustrating Shor’s Algorithm 167 8.4 The Efﬁciency of Shor’s Algorithm 169 8.5 Omitting the Internal Measurement 170 8.6 Generalizations 171 8.6.1 The Discrete Logarithm Problem 172 8.6.2 Hidden Subgroup Problems 172

viii

Contents

8.7 References 175 8.8 Exercises 176
9 Grover’s Algorithm and Generalizations 177 9.1 Grover’s Algorithm 178 9.1.1 Outline 178 9.1.2 Setup 178 9.1.3 The Iteration Step 180 9.1.4 How Many Iterations? 181 9.2 Amplitude Ampliﬁcation 183 9.2.1 The Geometry of Amplitude Ampliﬁcation 185 9.3 Optimality of Grover’s Algorithm 188 9.3.1 Reduction to Three Inequalities 189 9.3.2 Proofs of the Three Inequalities 191 9.4 Derandomization of Grover’s Algorithm and Amplitude Ampliﬁcation 193 9.4.1 Approach 1: Modifying Each Step 194 9.4.2 Approach -
2: Modifying Only the Last Step 194 9.5 Unknown Number of Solutions 196 9.5.1 Varying the Number of Iterations 197 9.5.2 Quantum Counting 198 9.6 Practical Implications of Grover’s Algorithm and Amplitude Ampliﬁcation 199 9.7 References 200 9.8 Exercises 201
III ENTANGLED SUBSYSTEMS AND ROBUST QUANTUM COMPUTATION 203
10 Quantum Subsystems and Properties of Entangled States 205 10.1 Quantum Subsystems and Mixed States 206 10.1.1 Density Operators 207 10.1.2 Properties of Density Operators 213 10.1.3 The Geometry of Single-Qubit Mixed States 215 10.1.4 Von Neumann Entropy 216 10.2 Classifying Entangled States 218 10.2.1 Bipartite Quantum Systems 218 10.2.2 Classifying Bipartite Pure States up to LOCC Equivalence 222 10.2.3 Quantifying Entanglement in Bipartite Mixed States 224 10.2.4 Multipartite Entanglement 22-
5 10.3 Density Operator Formalism for Measurement 229 10.3.1 Measurement of Density Operators 230 10.4 Transformations of Quantum Subsystems and Decoherence 232 10.4.1 Superoperators 233 10.4.2 Operator Sum Decomposition 234 10.4.3 A Relation Between Quantum State Transformations and Measurements 238 10.4.4 Decoherence 239 10.5 References 240 10.6 Exercises 240

Contents

ix

11 Quantum Error Correction 245 11.1 Three Simple Examples of Quantum Error Correcting Codes 246 11.1.1 A Quantum Code That Corrects Single Bit-Flip Errors 246 11.1.2 A Code for Single-Qubit Phase-Flip Errors 251 11.1.3 A Code for All Single-Qubit Errors 252 11.2 Framework for Quantum Error Correcting Codes 253 11.2.1 Classical Error Correcting Codes 254 11.2.2 Quantum Error Correcting Codes 257 11.2.3 Correctable Sets of Errors for Classical Codes 258 11.2.4 Correctable Sets of Errors for Quantum-
 Codes 259 11.2.5 Correcting Errors Using Classical Codes 261 11.2.6 Diagnosing and Correcting Errors Using Quantum Codes 264 11.2.7 Quantum Error Correction across Multiple Blocks 268 11.2.8 Computing on Encoded Quantum States 268 11.2.9 Superpositions and Mixtures of Correctable Errors Are Correctable 269 11.2.10 The Classical Independent Error Model 270 11.2.11 Quantum Independent Error Models 271 11.3 CSS Codes 274 11.3.1 Dual Classical Codes 274 11.3.2 Construction of CSS Codes from Classical-
 Codes Satisfying a Duality Condition 275 11.3.3 The Steane Code 278 11.4 Stabilizer Codes 280 11.4.1 Binary Observables for Quantum Error Correction 280 11.4.2 Pauli Observables for Quantum Error Correction 282 11.4.3 Diagnosing and Correcting Errors 283 11.4.4 Computing on Encoded Stabilizer States 285 11.5 CSS Codes as Stabilizer Codes 289 11.6 References 290 11.7 Exercises 291
12 Fault Tolerance and Robust Quantum Computing 293 12.1 Setting the Stage for Robust Quantum Computation 294 12.2 Fault-Tolerant Computation Using Steane’s Code 297 12.2.1 The Problem with Syndrome Computation 297 12.2.2 Fault-Tolerant Syndrome Extraction and Error Correction 298 12.2.3 Fault-Tolerant Gates for Steane’s Code 300 12.2.4 Fault-Tolerant Measurement 303 12.2.5 Fault-Tolerant State Preparation of |π/4 304 12.3 Robust Quantum Computation 305 12.3.1 Concatenated Coding 306 12.3.2 A Thre-
shold Theorem 308 12.4 References 310 12.5 Exercises 310
13 Further Topics in Quantum Information Processing 311 13.1 Further Quantum Algorithms 311 13.2 Limitations of Quantum Computing 313

x

Contents

13.3 Further Techniques for Robust Quantum Computation 314 13.4 Alternatives to the Circuit Model of Quantum Computation 316
13.4.1 Measurement-Based Cluster State Quantum Computation 317 13.4.2 Adiabatic Quantum Computation 318 13.4.3 Holonomic Quantum Computation 319 13.4.4 Topological Quantum Computation 320 13.5 Quantum Protocols 320 13.6 Insight into Classical Computation 321 13.7 Building Quantum Computers 322 13.8 Simulating Quantum Systems 325 13.9 Where Does the Power of Quantum Computation Come From? 326 13.10 What if Quantum Mechanics Is Not Quite Correct? 327
APPENDIXES 329
A Some Relations Between Quantum Mechanics and Probability Theory 331 A.1 Tensor Products in Probability Theory 331 A.2 Quantum Mechanics as a Generalization of Probability Theory 337 A.3 References 339 A.4 Exercises 339
B Solving the Abelian Hidden Subgroup Problem 341 B.1 Representations of Finite Abelian Groups 341 B.1.1 Schur’s Lemma 344 B.2 Quantum Fourier Transforms for Finite Abelian Groups 345 B.2.1 The Fourier Basis of an Abelian Group 345 B.2.2 The Quantum Fourier Transform Over a Finite Abelian Group 347 B.3 General Solution to the Finite Abelian Hidden Subgroup Problem 348 B.4 Instances of the Abelian Hidden Subgroup Problem 350 B.4.1 Simon’s Problem 350 B.4.2 Shor’s Algorithm: Finding the Period of a -
Function 351 B.5 Comments on the Non-Abelian Hidden Subgroup Problem 351 B.6 References 351 B.7 Exercises 352
Bibliography 353 Notation Index 365 Index 369

Preface
Quantum computing is a beautiful combination of quantum physics, computer science, and information theory. The purpose of this book is to make this exciting research area accessible to a broad audience. In particular, we endeavor to help the reader bridge the conceptual and notational barriers that separate quantum computing from conventional computing.
The book is concerned with theory: what changes when the classical model underpinning conventional computing is replaced with a quantum one. It contains only a brief discussion of the ongoing efforts to build quantum computers, an active area which is still so young that it is impossible even for experts to predict which approaches will be most successful. While this book is about theory, it is important to ground the discussion of quantum computation in the physics that motivates it. For this rea-
son, the text includes discussions of quantum physics and experiments that illustrate why the theory is deﬁned the way it is.
We precisely deﬁne concepts used in quantum computation and emphasize subtle distinctions. This rigor is motivated in part by our experience working with members of the joint FXPAL1/PARC2 reading group and with reviewing papers by authors new to the ﬁeld. Mistakes commonly arise due to a lack of precision. For example, we take care to distinguish a quantum state from a vector that represents it. We make clear which notions are basis dependent (e.g., superposition) and which are not (e.g., entangle-
ment), and emphasize the dependence of certain notions (e.g., entanglement) on a particular tensor decomposition. The distinction between tensor decompositions and direct sum decompositions, both used extensively in quantum mechanics, is discussed explicitly in both quantum mechanical and classical probabilistic settings. Deﬁnitions are carefully motivated. For example, instead of starting with axioms for density operators or mixed states, the deﬁnitions of these concepts are motivated by a discus-
sion of what can be deduced about a subsystem from measurements of the subsystem alone.
One advantage of dealing only with theory, and not with the efforts to build quantum computers, is that the amount of quantum physics and supporting mathematics needed is reduced. We are able to develop all of the necessary quantum mechanics within the book; no previous exposure to quantum physics is required. We give careful and precise descriptions of fundamental concepts— such as quantum state spaces, quantum measurement, and entanglement—before covering the

xii

Preface

standard quantum algorithms and other quantum information processing tasks such as quantum key distribution and quantum teleportation.
The intent of this book is to make quantum computing accessible to a wide audience of computer scientists, engineers, mathematicians, and anyone with a general interest in the subject who knows sufﬁcient mathematics. Basic concepts from college-level linear algebra such as vector spaces, linear transformations, eigenvalues, and eigenvectors are used throughout the book. Afew sections require more mathematics; familiarity with group theory is required for sections 8.6.1 and 8.6.2, appendix B, and m-
uch of chapter 11. Group theory is reviewed in boxes, but readers who have never seen group theory should consult a book on the subject or skip those sections.
While we hope our book lives up to the gentle of its title, reading it will require effort. Many of the concepts are subtle and unintuitive, and much of the notation unfamiliar. Readers will need to spend time working with the concepts and notations to develop a level of ﬂuency at each stage. For example, even readers with signiﬁcant mathematical background may not have worked much with tensor products and may not be familiar with the relation of tensor product spaces to their component spaces. Th-
e early chapters of the book develop these notions carefully, since they are absolutely fundamental to quantum information processing. It is well worth the effort to master them, as well as the concise Dirac notation in which they are generally expressed, but mastery will require effort. The precise nature of these mathematical formalisms provides a means of working with quantum concepts before fully understanding them. Intuition for quantum mechanics and quantum information processing will develo-
p from playing with the formal mathematics.
The book emphasizes features of quantum mechanics that give quantum computation its power and are responsible for its limitations. Neither the extent of the power of quantum computation nor its limitations have been fully understood. Research challenges remain not only in building quantum computers and developing novel algorithms and protocols, but also in answering fundamental questions as to the source of quantum computing’s power and the reasons for its limitations. This book examines what is k-
nown about what quantum computers can and cannot do, and also explores what is known about why.
The focus on the reasons underlying quantum computing’s effectiveness results in the inclusion of topics frequently left out of other expositions of the subject. For example, one theme of the book is the relationship of quantum information processing to probability. That many quantum algorithms are nonprobabilistic is emphasized. A section is devoted to modiﬁcations of Grover’s original algorithm that preserve the speed-up but return a solution with certainty. On the other hand, the strong formal -
resemblance between quantum theory and probability theory is described in detail and distinctions are highlighted, illuminating, for example, how entanglement differs from correlation, and the difference between a superposition and a mixture.
As another example, while quantum entanglement is the most common explanation given for why quantum information processing works, multipartite entanglement remains poorly understood. Bipartite entanglement is much better understood but has limited use for understanding quantum computation. The book includes sections on multipartite entanglement, a topic often left

Preface

xiii

out of introductory books, and discusses bipartite entanglement. Discussions of multipartite entanglement require examples, which made it natural to include a section on cluster states, the fundamental entanglement resource used for cluster state, or one-way, quantum computation. Cluster state quantum computation and adiabatic quantum computation, two alternatives to the standard circuit model, are brieﬂy introduced and their strengths and applications discussed.
As a ﬁnal example, while the conversion between general classical circuits and reversible classical circuits is a purely classical topic, it is the heart of the proof that anything a classical computer can do, a quantum computers can do with comparable efﬁciency. For this reason, the book includes a detailed account of this piece of classical, but nonstandard, computer science.
This is not a book about quantum mechanics. We treat quantum mechanics as an abstract mathematical theory and consider the physical aspects only to elucidate theoretical concepts. We do not discuss issues of interpretation of quantum mechanics; the occasional use of terms such as quantum parallelism, for example, is not to be construed as an endorsement of one or another particular interpretation.
Acknowledgments
We are enormously indebted to Michael B. Heaney and Paul McEvoy, both of whom read multiple versions of many of the chapters and provided valuable comments each time. It is largely due to their steadfast belief in this project that the book reached completion. The FXPAL/PARC reading group enabled us to discover which expository approaches worked and which did not. The group’s comments, struggles, and insights spurred substantial improvements in the book. We are grateful to all of the members of th-
at group, particularly Dirk Balfanz, Stephen Jackson, and Michael Plass. Many thanks to Tad Hogg and Marc Rieffel for their feedback on some of the most technical and notationally heavy sections. Thanks also go to Gene Golovchinsky for suggestions that clariﬁed and streamlined the writing of an early draft, to Livia Polanyi for suggestions that positively impacted the ﬂow and emphasis, to Garth Dales for comments on an early draft that improved our wording and use of notation, and to Denise Greave-
s for extensive editorial assistance. Many people provided valuable comments on drafts of the tutorial3 that was the starting point for this book. Their comments improved this book as well as the tutorial. We gratefully acknowledge the support of FXPAL for part of this work. We are grateful to our friends, to our family, and especially to our spouses for their support throughout the years it took us to write this book.
Notes
1. FX Palo Alto Laboratory. 2. Palo Alto Research Center. 3. E. G. Rieffel and W. Polak. An introduction to quantum computing for non-physicists. ACM Computing Surveys, 32(3):300–335, 2000.

1 Introduction
In the last decades of the twentieth century, scientists sought to combine two of the century’s most inﬂuential and revolutionary theories: information theory and quantum mechanics. Their success gave rise to a new view of computation and information. This new view, quantum information theory, changed forever how computation, information, and their connections with physics are thought about, and it inspired novel applications, including some wildly different algorithms and protocols. This view and-
 the applications it spawned are the subject of this book.
Information theory, which includes the foundations of both computer science and communications, abstracted away the physical world so effectively that it became possible to talk about the major issues within computer science and communications, such as the efﬁciency of an algorithm or the robustness of a communication protocol, without understanding details of the physical devices used for the computation or the communication. This ability to ignore the underlying physics proved extremely powerful-
, and its success can be seen in the ubiquity of the computing and communications devices around us. The abstraction away from the physical had become such a part of the intellectual landscape that the assumptions behind it were almost forgotten. At its heart, until recently, information sciences have been ﬁrmly rooted in classical mechanics. For example, the Turing machine is a classical mechanical model that behaves according to purely classical mechanical principles.
Quantum mechanics has played an ever-increasing role in the development of new and more efﬁcient computing devices. Quantum mechanics underlies the working of traditional, classical computers and communication devices, from the transistor through the laser to the latest hardware advances that increase the speed and power and decrease the size of computer and communications components. Until recently, the inﬂuence of quantum mechanics remained conﬁned to the lowlevel implementation realm; it had no-
 effect on how computation or communication was thought of or studied.
In the early 1980s, a few researchers realized that quantum mechanics had unanticipated implications for information processing. Charles Bennett and Gilles Brassard, building on ideas of Stephen Wiesner, showed how nonclassical properties of quantum measurement provided a provably secure mechanism for establishing a cryptographic key. Richard Feynman, Yuri Manin, and others recognized that certain quantum phenomena—phenomena associated with so-called

2

1 Introduction

entangled particles—could not be simulated efﬁciently by a Turing machine. This observation led to speculation that perhaps these quantum phenomena could be used to speed up computation in general. Such a program required rethinking the information theoretic model underlying computation, taking it out of the purely classical realm.
Quantum information processing, a ﬁeld that includes quantum computing, quantum cryptography, quantum communications, and quantum games, explores the implications of using quantum mechanics instead of classical mechanics to model information and its processing. Quantum computing is not about changing the physical substrate on which computation is done from classical to quantum, but rather changing the notion of computation itself. The change starts at the most basic level: the fundamental unit of -
computation is no longer the bit, but rather the quantum bit or qubit. Placing computation on a quantum mechanical foundation led to the discovery of faster algorithms, novel cryptographic mechanisms, and improved communication protocols.
The phrase quantum computing does not parallel the phrases DNA computing or optical computing: these describe the substrate on which computation is done without changing the notion of computation. Classical computers, the ones we all have on our desks, make use of quantum mechanics, but they compute using bits, not qubits. For this reason, they are not considered quantum computers. A quantum or classical computer may or may not be an optical computer, depending on whether optical devices are used -
to carry out the computation. Whether the computer is quantum or classical depends on whether the information is represented and manipulated in a quantum or classical way. The phrase quantum computing is closer in character to analog computing because the computational model for analog computing differs from that of standard computing: a continuum of values, rather than only a discrete set, is allowed. While the phrases are parallel, the two models differ greatly in that analog computation does no-
t support entanglement, a key resource for quantum computation, and measurements of a quantum computer’s registers can yield only a small, discrete set of values. Furthermore, while a qubit can take on a continuum of values, in many ways a qubit resembles a bit, with its two discrete values, more than it does analog computation. For example, as we will see in section 4.3.1, only one bit’s worth of information can be extracted from a qubit by measurement.
The ﬁeld of quantum information processing developed slowly in the 1980s and early 1990s as a small group of researchers worked out a theory of quantum information and quantum information processing. David Deutsch developed a notion of a quantum mechanical Turing machine. Daniel Bernstein, Vijay Vazirani, and Andrew Yao improved upon his model and showed that a quantum Turing machine could simulate a classical Turing machine, and hence any classical computation, with at most a polynomial time slow-
down. The standard quantum circuit model was then deﬁned, which led to an understanding of quantum complexity in terms of a set of basic quantum transformations called quantum gates. These gates are theoretical constructs that may or may not have direct analogs in the physical components of an actual quantum computer.
In the early 1990s, researchers developed the ﬁrst truly quantum algorithms. In spite of the probabilistic nature of quantum mechanics, the ﬁrst quantum algorithms, for which superiority

1 Introduction

3

over classical algorithms could be proved, give the correct answer with certainty. They improve upon classical algorithms by solving in polynomial time with certainty a problem that can be solved in polynomial time only with high probability using classical techniques. Such a result is of no direct practical interest, since the impossibility of building a perfect machine reduces any practical machine running any algorithm to solving a problem only with high probability. But such results were of hi-
gh theoretical interest, since they showed for the ﬁrst time that quantum computation is theoretically more powerful than classical computation for certain computational problems.
These results caught the interest of various researchers, including Peter Shor, who in 1994 surprised the world with his polynomial-time quantum algorithm for factoring integers. This result provided a solution to a well-studied problem of practical interest. A classical polynomial-time solution had long been sought, to the point where the world felt sufﬁciently conﬁdent that no such solution existed that many security protocols, including the widely used RSA algorithm, base their security entirel-
y on the computational difﬁculty of this problem. It is unknown whether an efﬁcient classical solution exists, so Shor’s result does not prove that quantum computers can solve a problem more efﬁciently than a classical computer. But even in the unlikely event that a polynomial-time classical algorithm is found for this problem, it would be an indication of the elegance and effectiveness of the quantum information theory point of view that a quantum algorithm, in spite of all the unintuitive aspect-
s of quantum mechanics, was easier to ﬁnd.
While Shor’s result sparked a lot of interest in the ﬁeld, doubts as to its practical signiﬁcance remained. Quantum systems are notoriously fragile. Key properties, such as quantum entanglement, are easily disturbed by environmental inﬂuences that cause the quantum states to decohere. Properties of quantum mechanics, such as the impossibility of reliably copying an unknown quantum state, made it look unlikely that effective error-correction techniques for quantum computation could ever be found. F-
or these reasons, it seemed unlikely that reliable quantum computers could be built.
Luckily, in spite of serious and widespread doubts as to whether quantum information processing could ever be practical, the theory itself proved so tantalizing that researchers continued to explore it. As a result, in 1996 Shor and Robert Calderbank, and independently Andrew Steane, saw a way to ﬁnesse the seemingly show-stopping problems of quantum mechanics to develop quantum error correction techniques. Today, quantum error correction is arguably the most mature area of quantum information pro-
cessing.
How practical quantum computing and quantum information will turn out is still unknown. No fundamental physical principles are known that prohibit the building of large-scale and reliable quantum computers. Engineering issues, however, remain. As of this writing, laboratory experiments have demonstrated quantum computations with several quantum bits performing dozens of quantum operations. Myriad promising approaches are being explored by theorists and experimentalists around the world, but much u-
ncertainty remains as to how, when, or even whether, a quantum computer capable of carrying out general quantum computations on hundreds of qubits will be built.

4

1 Introduction

Quantum computational approaches improve upon classical methods for a number of specialized tasks. The extent of quantum computing’s applicability is still being determined. It does not provide efﬁcient solutions to all problems; neither does it provide a universal way of circumventing the slowing of Moore’s law. Strong limitations on the power of quantum computation are known; for many problems, it has been proven that quantum computation provides no signiﬁcant advantage over classical computatio-
n. Grover’s algorithm, the other major algorithm of the mid1990s, provides a small speedup for unstructured search algorithms. But it is also known that this small speedup is the most that quantum algorithms can attain. Grover’s search algorithm applies to unstructured search. For other search problems, such as searching an ordered list, quantum computation provides no signiﬁcant advantage over classical computation. Simulation of quantum systems is the other signiﬁcant application of quantum comp-
utation known in the mid-1990s. Of interest in its own right, the simulation of increasingly larger quantum systems may provide a bootstrap that will ultimately lead to the building of a scalable quantum computer.
After Grover’s algorithm, there was a hiatus of more than ﬁve years before a signiﬁcantly new algorithm was discovered. During that time, other areas of quantum information processing, such as quantum error correction, advanced signiﬁcantly. In the early 2000s, several new algorithms were discovered. Like Shor’s algorithm, these algorithms solve speciﬁc problems with narrow, if important, applications. Novel approaches to constructing quantum algorithms also developed. Investigations of quantum si-
mulation from a quantum-information-processing point of view have led to improved classical techniques for simulating quantum systems, as well as novel quantum approaches. Similarly, the quantum-information-processing point of view has led to novel insights into classical computing, including new classical algorithms. Furthermore, alternatives to the standard circuit model of quantum computation have been developed that have led to new quantum algorithms, breakthroughs in building quantum computer-
s, new approaches to robustness, and signiﬁcant insights into the key elements of quantum computation.
However long it takes to build a scalable quantum computer and whatever the breadth of applications turns out to be, quantum information processing has changed forever the way in which quantum physics is understood. The quantum information processing view of quantum mechanics has done much to clarify the character of key aspects of quantum mechanics such as quantum measurement and entanglement. This advancement in knowledge has already had applications outside of quantum information processing to -
the creation of highly entangled states used for microlithography at scales below the wavelength limit and for extraordinarily accurate sensors. The precise practical consequences of this increased understanding of nature are hard to predict, but the uniﬁcation of the two theories that had the most profound inﬂuence on the technological advances of the twentieth century can hardly fail to have profound effects on technological and intellectual developments throughout the twenty-ﬁrst.
Part I of this book covers the basic building blocks of quantum information processing: quantum bits and quantum gates. Physical motivation for these building blocks is given and tied to the key quantum concepts of quantum measurement, quantum state transformations, and entanglement between quantum subsystems. Each of these concepts is explored in depth. Quantum key

1 Introduction

5

distribution, quantum teleportation, and quantum dense coding are introduced along the way. The ﬁnal chapter of part I shows that anything that can be done on a classical computer can be done with comparable efﬁciency on a quantum computer.
Part II covers quantum algorithms. It begins with a description of some of the most common elements of quantum computation. Since the advantage of quantum computation over classical computation is all about efﬁciency, part II carefully deﬁnes notions of complexity. Part II also discusses known bounds on the power of quantum computation. A number of simple algorithms are described. Full chapters are devoted to Shor’s algorithm and Grover’s algorithm.
Part III explores entanglement and robust quantum computation. A discussion of quantum subsystems leads into discussions of quantifying entanglement and of decoherence, the environmental errors affecting a quantum system because it is really a part of a larger quantum system. The elegant and important topic of quantum error correction ﬁlls a chapter, followed by a chapter on techniques to achieve fault tolerance. The book ﬁnishes with brief descriptions and pointers to references for many quantum -
information processing topics the book could not cover in depth. These include further quantum algorithms and protocols, adiabatic, cluster state, holonomic, and topological quantum computing, and the impact quantum information processing has had on classical computer science and physics.

I QUANTUM BUILDING BLOCKS
Quantum mechanics, that mysterious, confusing discipline, which none of us really understands, but which we know how to use. —Murray Gell-Mann [126]

2 Single-Qubit Quantum Systems
Quantum bits are the fundamental units of information in quantum information processing in much the same way that bits are the fundamental units of information for classical processing. Just as there are many ways to realize classical bits physically (two voltage levels, lights on or off in an array, positions of toggle switches), there are many ways to realize quantum bits physically. As is done in classical computer science, we will concern ourselves only rarely with how the quantum bits are rea-
lized. For the sake of concretely illustrating quantum bits and their properties, however, section 2.1 looks at the behavior of polarized photons, one of many possible realizations of quantum bits.
Section 2.2 abstracts key properties from the polarized photon example of section 2.1 to give a precise deﬁnition of a quantum bit, or qubit, and a description of the behavior of quantum bits under measurement. Dirac’s bra / ket notation, the standard notation used throughout quantum information processing as well as quantum mechanics, is introduced in this section. Section 2.4 describes the ﬁrst application of quantum information processing: quantum key distribution. The chapter concludes with a -
detailed discussion of the state space of a single-qubit system.
2.1 The Quantum Mechanics of Photon Polarization
A simple experiment illustrates some of the nonintuitive behavior of quantum systems, behavior that is exploited to good effect in quantum algorithms and protocols. This experiment can be performed by the reader using only minimal equipment: a laser pointer and three polaroids (polarization ﬁlters), readily available from any camera supply store. The formalisms of quantum mechanics that describe this simple experiment lead directly to a description of the quantum bit, the fundamental unit of quant-
um information on which quantum information processing is done. The experiment not only gives a concrete realization of a quantum bit, but it also illustrates key properties of quantum measurement. We encourage you to obtain the equipment and perform the experiment yourself.

10

2 Single-Qubit Quantum Systems

2.1.1 A Simple Experiment Shine a beam of light on a projection screen. When polaroid A is placed between the light source and the screen, the intensity of the light reaching the screen is reduced. Let us suppose that the polarization of polaroid A is horizontal (ﬁgure 2.1).
Next, place polaroid C between polaroid A and the projection screen. If polaroid C is rotated so that its polarization is orthogonal (vertical) to the polarization of A, no light reaches the screen (ﬁgure 2.2).

A
Figure 2.1 Single polaroid attenuates unpolarized light by 50 percent.
C A
Figure 2.2 Two orthogonal polaroids block all photons.

2.1 The Quantum Mechanics of Photon Polarization

11

C B
A
Figure 2.3 Inserting a third polaroid allows photons to pass.
Finally, place polaroid B between polaroids A and C. One might expect that adding another polaroid will not make any difference; if no light got through two polaroids, then surely no light will pass through three! Surprisingly, at most polarization angles of B, light shines on the screen. The intensity of this light will be maximal if the polarization of B is at 45 degrees to both A and C (ﬁgure 2.3).
Clearly the polaroids cannot be acting as simple sieves; otherwise, inserting polaroid B could not increase the number of photons reaching the screen.
2.1.2 A Quantum Explanation For a bright beam of light, there is a classical explanation of the experiment in terms of waves. Versions of the experiment described here, using light so dim that only one photon at a time interacts with the polaroid, have been done with more sophisticated equipment. The results of these single photon experiments can be explained only using quantum mechanics; the classical wave explanation no longer works. Furthermore, it is not just light that behaves in this peculia-
r way. The quantum mechanical explanation of the experiment consists of two parts: a model of a photon’s polarization state and a model of the interaction between a polaroid and a photon. The description of this experiment, and the deﬁnition of a qubit, use basic notions of linear algebra such as vector, basis, orthonormal, and linear combination. Linear algebra is used throughout the book; we brieﬂy remind readers of the meanings of these concepts in section 2.2. Section 2.6 suggests some books o-
n linear algebra.
Quantum mechanics models a photon’s polarization state by a unit vector, a vector of length 1, pointing in the appropriate direction. We write |↑ and |→ for the unit vectors that represent vertical and horizontal polarization respectively. Think of |v as a vector with some arbitrary label v. In quantum mechanics, the standard notation for a vector representing a quantum state

12

b a

v =a +b

2 Single-Qubit Quantum Systems

Figure 2.4 Measurement of state |v = a|↑ + b|→ by a measuring device with preferred basis {|↑ , |→ }.

is |v , just as v or v are notations used for vectors in other settings. This notation is part of a

more general notation, Dirac’s notation, that will be explained in more detail in sections 2.2 and

4.1. An arbitrary polarization can be expressed as a linear combination |v = a|↑ + b|→ of the

two basis vectors |↑ and |→ . For example, | = √1 |↑ + √1 |→ is a unit vector representing

2

2

polarization of 45 degrees. The coefﬁcients a and b in |v = a|↑ + b|→ are called the amplitudes

of |v in the directions |↑ and |→ respectively (see ﬁgure 2.4). When a and b are both non-zero,

|v = a|↑ + b|→ is said to be a superposition of |↑ and |→ .

Quantum mechanics models the interaction between a photon and a polaroid as follows. The

polaroid has a preferred axis, its polarization. When a photon with polarization |v = a|↑ +

b|→ meets a polaroid with preferred axis |↑ , the photon will get through with probability

|a|2 and will be absorbed with probability |b|2; the probability that a photon passes through the

polaroid is the square of the magnitude of the amplitude of its polarization in the direction of the

polaroid’s preferred axis. The probability that the photon is absorbed by the polaroid is the square

of the magnitude of the amplitude in the direction perpendicular to the polaroid’s preferred axis.

Furthermore, any photon that passes through the polaroid will now be polarized in the direction of

the polaroid’s preferred axis. The probabilistic nature of the interaction and the resulting change

of state are features of all interactions between qubits and measuring devices, no matter what their

physical realization.

In the experiment, any photons that pass through polaroid A will leave polarized in the direction

of polaroid A’s preferred axis, in this case horizontal, |→ . A horizontally polarized photon has

no amplitude in the vertical direction, so it has no chance of passing through polaroid C, which

was given a vertical orientation. For this reason, no light reaches the screen. Had polaroid C

been in any other orientation, a horizontally polarized photon would have some amplitude in the

direction of polaroid C’s preferred axis, and some photons would reach the screen.

To understand what happens once polaroid B, with preferred axis | , is inserted, it is helpful

to write the horizontally polarized photon’s polarization state |→ as

|→ = √1 | − √1 | .

2

2

2.2 Single Quantum Bits

13

Any photon that passes through polaroid A becomes horizontally polarized, so the amplitude

of any such photon’s state |→ in the direction | is √1 . Applying the quantum theory we just
2

learned tells us that a horizontally polarized photon will pass through polaroid B with probability

1 2

=

| √1 |2. Any 2

photons

that

have

passed

through

polaroid

B

now

have

polarization

|

. When

these photons hit polaroid C, they do have amplitude in the vertical direction, so some of them

(half ) will pass thorough polaroid C and hit the screen (see ﬁgure 2.3). In this way, quantum

mechanics explains how more light can reach the screen when the third polaroid is added, and it

provides a means to compute how much light will reach the screen.

In summary, the polarization state of a photon is modeled as a unit vector. Its interaction with a

polaroid is probabilistic and depends on the amplitude of the photon’s polarization in the direction

of the polaroid’s preferred axis. Either the photon will be absorbed or the photon will leave the

polaroid with its polarization aligned with the polaroid’s preferred axis.

2.2 Single Quantum Bits

The space of possible polarization states of a photon is an example of a quantum bit, or qubit. A qubit has a continuum of possible values: any state represented by a unit vector a|↑ + b|→ is a legitimate qubit value. The amplitudes a and b can be complex numbers, even though complex amplitudes were not needed for the explanation of the experiment. (In the photon polarization case, the imaginary coefﬁcients correspond to circular polarization.)
In general, the set of all possible states of a physical system is called the state space of the system. Any quantum mechanical system that can be modeled by a two-dimensional complex vector space can be viewed as a qubit. (There is redundancy in this representation in that any vector multiplied by a modulus one [unit length] complex number represents the same quantum state. We discuss this redundancy carefully in sections 2.5 and 3.1.) Such systems, called twostate quantum systems, include photon-
 polarization, electron spin, and the ground state together with an excited state of an atom. The two-state label for these systems does not mean that the state space has only two states—it has inﬁnitely many—but rather that all possible states can be represented as a linear combination, or superposition, of just two states. For a two-dimensional complex vector space to be viewed as a qubit, two linearly independent states, labeled |0 and |1 , must be distinguished. For the theory of quantum infor-
mation processing, all two-state systems, whether they be electron spin or energy levels of an atom, are equally good. From a practical point of view, it is as yet unclear which two-state systems will be most suitable for physical realizations of quantum information processing devices such as quantum computers; it is likely that a variety of physical representation of qubits will be used.
Dirac’s bra / ket notation is used throughout quantum physics to represent quantum states and their transformations. In this section we introduce the part of Dirac’s notation that is used for quantum states. Section 4.1 introduces Dirac’s notation for quantum transformations. Familiarity and ﬂuency with this notation will help greatly in understanding all subsequent material; we strongly encourage readers to work the exercises at the end of this chapter.

14

2 Single-Qubit Quantum Systems

In Dirac’s notation, a ket such as |x , where x is an arbitrary label, refers to a vector representing a state of a quantum system. A vector |v is a linear combination of vectors |s1 , |s2 , . . . , |sn if there exist complex numbers ai such that |v = a1|s1 + a2|s2 + · · · + an|sn .
A set of vectors S generates a complex vector space V if every element |v of V can be written as a complex linear combination of vectors in the set: every |v ∈ V can be written as |v = a1|s1 + a2|s2 + · · · + an|sn for some elements |si ∈ S and complex numbers ai. Given a set of vectors S, the subspace of all linear combinations of vectors in S is called the span of S and
is denoted span(S). A set of vectors B for which every element of V can be written uniquely as a
linear combination of vectors in B is called a basis for V . In a two-dimensional vector space, any
two vectors that are not multiples of each other form a basis. In quantum mechanics, bases are
usually required to be orthonormal, a property we explain shortly. The two distinguished states, |0 and |1 , are also required to be orthonormal.
An inner product v2|v1 , or dot product, on a complex vector space V is a complex function deﬁned on pairs of vectors |v1 and |v2 in V , satisfying

• v|v is non-negative real, • v2|v1 = v1|v2 , and • (a v2| + b v3|)|v1 = a v2|v1 + b v3|v1 ,

where z is the complex conjugate z = a − ib of z = a + ib. Two vectors |v1 and |v2 are said to be orthogonal if v1|v2 = 0. A set of vectors is orthogonal
i√f all of its members are orthogonal to each other. The length, or norm, of a vector |v is ||v | =
v|v . Since all vectors |x representing quantum states are of unit length, x|x = 1 for any state vector |x . A set of vectors is said to be orthonormal if all of its elements are of length one and orthogonal to each other: a set of vectors B = {|β1 , |β2 , . . . , |βn } is orthonormal if βi|βj = δij for all i, j , where

δij =

1 if i = j 0 otherwise.

In quantum mechanics we are mainly concerned with bases that are orthonormal, so whenever
we say basis we mean orthonormal basis unless we say otherwise.
For the state space of a two-state system to represent a quantum bit, two orthonormal distinguished states, labeled |0 and |1 , must be speciﬁed. Apart from the requirement that |0 and |1
be orthonormal, the states may be chosen arbitrarily. For instance, in the case of photon polarization, we may choose |0 and |1 to correspond to the states |↑ and |→ , or to | and | . We follow the convention that |0 = |↑ and |1 = |→ , which implies that | = √1 (|0 + |1 ) and
2
| = √1 (|0 − |1 ). In the case of electron spin, |0 and |1 could correspond to the spin-up and
2
spin-down states, or spin-left and spin-right. When talking about qubits, and quantum information processing in general, a standard basis {|0 , |1 } with respect to which all statements are made
must be chosen in advance and remain ﬁxed throughout the discussion. In quantum information

2.2 Single Quantum Bits

15

processing, classical bit values of 0 and 1 will be encoded in the distinguished states |0 and |1 .

This encoding enables a direct comparison between bits and qubits: bits can take on only two

values, 0 and 1, while qubits can take on not only the values |0 and |1 but also any superposition

of these values, a|0 + b|1 , where a and b are complex numbers such that |a|2 + |b|2 = 1.

Vectors and linear transformations can be written using matrix notation once a basis has been

speciﬁed. That is, if basis {|β1 , |β2 } is speciﬁed, a ket |v = a|β1 + b|β2 can be written

a b

;

a ket |v corresponds to a column vector v, where v is simply a label, a name for this vector. The

conjugate transpose v† of a vector

⎛⎞ a1
v = ⎜⎝ ... ⎟⎠ is v† = ( a1, . . . , an ) .

an

In Dirac’s notation, the conjugate transpose of a ket |v is called a bra and is written v|, so

⎛⎞ a1
|v = ⎜⎝ ... ⎟⎠ and

v| = ( a1, . . . , an ) .

an

A bra v| corresponds to a row vector v†.

Given two complex vectors

⎛⎞

⎛⎞

a1

b1

|a = ⎜⎝ ... ⎟⎠ and |b = ⎜⎝ ... ⎟⎠ ,

an

bn

the standard inner product a|b is deﬁned to be the scalar obtained by multiplying the conjugate

transpose a| = ( a1, . . . , an ) with |b :

⎛⎞

a|b

=

a||b

b1 = ( a1, . . . , an ) ⎜⎝ ... ⎟⎠ =

n

ai bi .

bn

i=1

When a = |a and b = |b are real vectors, this inner product is the same as the standard dot

product on the n dimensional real vector space Rn: a|b = a1b1 + · · · + anbn = a · b. Dirac’s choice of bra and ket arose as a play on words: an inner product a|b of a bra a| and a ket |b

is sometimes called a bracket. The following relations hold, where v = a|0 + b|1 : 0|0 = 1,

1|1 = 1, 1|0 = 0|1 = 0, 0|v = a, and 1|v = b.

In the standard basis, with ordering {|0 , |1 }, the basis elements |0 and |1 can be expressed

as

1 0

and

0 1

, and a complex linear combination |v

= a|0 + b|1

can be written

a. b

16

2 Single-Qubit Quantum Systems

This choice of basis and order of the basis vectors are mere convention. Representing |0 as

1 0

and |1 as

0 1

or representing |0

as √1
2

1 −1

and |1 as √1 1 21

would be equally

good as long as it is done consistently. Unless otherwise speciﬁed, all vectors and matrices in this

book will be written with respect to the standard basis {|0 , |1 } in this order.

A quantum state |v is a superposition of basis elements {|β1 , |β2 } if it is a nontrivial linear combination of |β1 and |β2 , if |v = a1|β1 + a2|β2 where a1 and a2 are non-zero. For the term superposition to be meaningful, a basis must be speciﬁed. In this book, if we say “super-

postion” without explicitly specifying the basis, we implicitly mean with respect to the standard

basis.

Initially the vector/matrix notation will be easier for many readers to use because it is familiar.

Sometimes matrix notation is convenient for performing calculations, but it always requires the

choice of a basis and an ordering of that basis. The bra / ket notation has the advantage of being

independent of basis and the order of the basis elements. It is also more compact and suggests

correct relationships, as we saw for the inner product, so once it becomes familiar, it is easier to

read and faster to use.

Instead of qubits, physical systems with states modeled by three- or n-dimensional vector

spaces could be used as fundamental units of computation. Three-valued units are called qutrits,

and n-valued units are called qudits. Since qudits can be modeled using multiple qubits, a model

of quantum information based on qudits has the same computational power as one based on qubits.

For this reason we do not consider qudits further, just as in the classical case most people use a

bit-based model of information.

We now have a mathematical model with which to describe quantum bits. In addition, we need

a mathematical model for measuring devices and their interaction with quantum bits.

2.3 Single-Qubit Measurement

The interaction of a polaroid with a photon illustrates key properties of any interaction between a measuring device and a quantum system. The mathematical description of the experiment can be used to model all measurements of single qubits, whatever their physical instantiation. The measurement of more complicated systems retains many of the features of single-qubit measurement: the probabilistic outcomes and the effect measurement has on the state of the system. This section considers only measu-
rements of single-qubit systems. Chapter 4 discusses measurements of more general quantum systems.
Quantum theory postulates that any device that measures a two-state quantum system must have two preferred states whose representative vectors, {|u , |u⊥ }, form an orthonormal basis for the associated vector space. Measurement of a state transforms the state into one of the measuring device’s associated basis vectors |u or |u⊥ . The probability that the state is measured as basis vector |u is the square of the magnitude of the amplitude of the component of the state in the direction of the basis -
vector |u . For example, given a device for measuring the polarization of

2.3 Single-Qubit Measurement

17

photons with associated basis {|u , |u⊥ }, the state |v = a|u + b|u⊥ is measured as |u with probability |a|2 and as |u⊥ with probability |b|2.

This behavior of measurement is an axiom of quantum mechanics. It is not derivable from

other physical principles; rather, it is derived from the empirical observation of experiments with

measuring devices. If quantum mechanics is correct, all devices that measure single qubits must

behave in this way; all have associated bases, and the measurement outcome is always one of the

two basis vectors. For this reason, whenever anyone says “measure a qubit," they must specify

with respect to which basis the measurement takes place. Throughout the book, if we say “measure

a qubit" without further elaboration, we mean that the measurement is with respect to the standard

basis {|0 , |1 }. Measurement of a quantum state changes the state. If a state |v = a|u + b|u⊥ is measured

as |u , then the state |v changes to |u . A second measurement with respect to the same basis will

return |u with probability 1. Thus, unless the original state happens to be one of the basis states,

a single measurement will change that state, making it impossible to determine the original state

from any sequence of measurements.

While the mathematics of measuring a qubit in the superposition state a|0 + b|1 with respect to

the standard basis is clear, measurement brings up questions as to the meaning of a superposition.

To begin with, the notion of superposition is basis-dependent; all states are superpositions with

respect to some bases and not with respect to others. For instance, a|0 + b|1 is a superposition

with respect to the basis {|0 , |1 } but not with respect to {a|0 + b|1 , b|0 − a|1 }.

Also, because the result of measuring a superposition is probabilistic, some people are tempted

to think of the state |v = a|0 + b|1 as a probabilistic mixture of |0 and |1 . It is not. In particular,

it is not true that the state is really either |0 or |1 and that we just do not happen to know which.

Rather, |v is a deﬁnite state, which, when measured in certain bases, gives deterministic results, while in others it gives random results: a photon with polarization | = √1 (|↑ + |→ ) behaves
2
deterministically when measured with respect to the Hadamard basis {| , | }, but it gives

random results when measured with respect to the standard basis {|↑ , |→ }. It is okay to think

of a superposition |v = a|0 + b|1 as in some sense being in both state |0 and state |1 at the

same time, as long as that statement is not taken too literally: states that are combinations of |0

and |1 in similar proportions but with different amplitudes, such as √1 (|0 + |1 ), √1 (|0 − |1 )

2

2

and √1 (|0 + i|1 ), represent distinct states that behave differently in many situations.

2

Given that qubits can take on any one of inﬁnitely many states, one might hope that a single

qubit could store lots of classical information. However, the properties of quantum measurement

severely restrict the amount of information that can be extracted from a qubit. Information about

a quantum bit can be obtained only by measurement, and any measurement results in one of only

two states, the two basis states associated with the measuring device; thus, a single measurement

yields at most a single classical bit of information. Because measurement changes the state, one

cannot make two measurements on the original state of a qubit. Furthermore, section 5.1.1 shows

that an unknown quantum state cannot be cloned, which means it is not possible to measure a

qubit’s state in two ways, even indirectly by copying the qubit’s state and measuring the copy.

18

2 Single-Qubit Quantum Systems

Thus, even though a quantum bit can be in inﬁnitely many different superposition states, it is possible to extract only a single classical bit’s worth of information from a single quantum bit.
2.4 A Quantum Key Distribution Protocol
The quantum theory introduced so far is sufﬁcient to describe a ﬁrst application of quantum information processing: a key distribution protocol that relies on quantum effects for its security and for which there is no classical analog.
Keys—binary strings or numbers chosen randomly from a sufﬁciently large set—provide the security for most cryptographic protocols, from encryption to authentication to secret sharing. For this reason, the establishment of keys between the parties who wish to communicate is of fundamental importance in cryptography. Two general classes of keys exist: symmetric keys and public-private key pairs. Both types are used widely, often in conjunction, in a wide variety of practical settings, from secure e--
commerce transactions to private communication over public networks.
Public-private key pairs consist of a public key, knowable by all, and a corresponding private key whose secrecy must be carefully guarded by the owner. Symmetric keys consist of a single key (or a pair of keys easily computable from one another) that are known to all of the legitimate parties and no one else. In the symmetric key case, multiple parties are responsible for guarding the security of the key.
Quantum key distribution protocols establish a symmetric key between two parties, who are generally known in the cryptographic community as Alice and Bob. Quantum key distribution protocols can be used securely anywhere classical key agreement protocols such as Difﬁe-Hellman can be used. They perform the same task; however, the security of quantum key distribution rests on fundamental properties of quantum mechanics, whereas classical key agreement protocols rely on the computational intractabilit-
y of a certain problem. For example, while Difﬁe-Hellman remains secure against all known classical attacks, the problem on which it is based, the discrete logarithm problem, is tractable on a quantum computer. Section 8.6.1 discusses Shor’s quantum algorithm for the discrete log problem.
The earliest quantum key distribution protocol is known as BB84 after its inventors, Charles Bennett and Gilles Brassard, and the year of the invention. The aim of the BB84 protocol is to establish a secret key, a random sequence of bit values 0 and 1, known only to the two parties, Alice and Bob, who may use this key to support a cryptographic task such as exchanging secret messages or detecting tampering. The BB84 protocol enables Alice and Bob to be sure that if they detect no problems while at-
tempting to establish a key, then with high probability it is secret. The protocol does not guarantee, however, that they will succeed in establishing a private key.
SupposeAlice and Bob are connected by two public channels: an ordinary bidirectional classical channel and a unidirectional quantum channel. The quantum channel allows Alice to send a sequence of single qubits to Bob; in our case we suppose the qubits are encoded in the polarization states of individual photons. Both channels can be observed by an eavesdropper Eve. This situation

2.4 A Quantum Key Distribution Protocol

19

classical channel

Alice

quantum channel

Bob

Eve

Figure 2.5 Alice and Bob wish to agree on a common key not known to Eve.

is illustrated in ﬁgure 2.5. To begin the process of establishing a private key, Alice uses quantum or classical means to generate a random sequence of classical bit values. As we will see, a random subset of this sequence will be the ﬁnal private key. Alice then randomly encodes each bit of this sequence in the polarization state of a photon by randomly choosing for each bit one of the following two agreed-upon bases in which to encode it: the standard basis,
0 → |↑
1 → |→ ,
or the Hadamard basis,

0 →| 1 →|

= √1 (|↑ + |→ )
2
= √1 (|↑ − |→ ).
2

She sends this sequence of photons to Bob through the quantum channel. Bob measures the state of each photon he receives by randomly picking either basis. Over
the classical channel, Alice and Bob check that Bob has received a photon for every one Alice has sent, and only then do Alice and Bob tell each other the bases they used for encoding and decoding (measuring) each bit. When the choice of bases agree, Bob’s measured bit value agrees with the bit value that Alice sent. When they chose different bases, the chance that Bob’s bit matches Alice’s is only 50 percent. Without revealing the bit values themselves, which would also reveal the values to Eve, -
there is no way for Alice and Bob to ﬁgure out which of these bit values agree and which do not. So they simply discard all the bits on which their choice of bases differed. An average of 50 percent of all bits transmitted remain. Then, depending on the level of

20

2 Single-Qubit Quantum Systems

assurance they require, Alice and Bob compare a certain number of bit values to check that no eavesdropping has occurred. These bits will also be discarded, and only the remaining bits will be used as their private key.
We describe one sort of attack that Eve can make and how quantum aspects of this protocol guard against it. On the classical channel, Alice and Bob discuss only the choice of bases and not the bit values themselves, so Eve cannot gain any information about the key from listening to the classical channel alone. To gain information, Eve must intercept the photons transmitted by Alice through the quantum channel. Eve must send photons to Bob before knowing the choice of bases made by Alice and Bob, b-
ecause they compare bases only after Bob has conﬁrmed receipt of the photons. If she sends different photons to Bob, Alice and Bob will detect that something is wrong when they compare bit values, but if she sends the original photons to Bob without doing anything, she gains no information.
To gain information, Eve makes a measurement before sending the photons to Bob. Instead of using a polaroid to measure, she can use a calcite crystal and a photon detector; a beam of light passing through a calcite crystal is split into two spatially separated beams, one polarized in the direction of the crystal’s optic axis and the other polarized in the direction perpendicular to the optic axis. A photon detector placed in one of the beams performs a quantum measurement: the probability with whi-
ch a photon ends up in one of the beams can be calculated just as described in section 2.3.
Since Alice has not yet told Bob her sequence of bases, Eve does not know in which basis to measure each bit. If she randomly measures the bits, she will measure using the wrong basis approximately half of the time. (Exercise 2.10 examines the case in which Eve does not even know which two bases to choose from.) When she uses the wrong basis to measure, the measurement changes the polarization of the photon before it is resent to Bob. This change in the polarization means that, even if Bob measure-
s the photon in the same basis as Alice used to encode the bit, he will get the correct bit value only half the time.
Overall, for each of the qubits Alice and Bob retain, if the qubit was measured by Eve before she sent it to Bob, there will be a 25 percent chance that Bob measures a different bit value than the one Alice sent. Thus, this attack on the quantum channel is bound to introduce a high error rate that Alice and Bob detect by comparing a sufﬁcient number of bits over the classical channel. If these bits agree, they can conﬁdently use the remaining bits as their private key. So, not only is it likely th-
at 25 percent of Eve’s version of the key is incorrect, but the fact that someone is eavesdropping can be detected by Alice and Bob. Thus Alice and Bob run little risk of establishing a compromised key; either they succeed in creating a private key or they detect that eavesdropping has taken place.
Eve does not know in which basis to measure the qubits, a property crucial to the security of this protocol, because Alice and Bob share information about which bases they used only after Bob has received the photons; if Eve knew in which basis to measure the photons, her measurements would not change the state, and she could obtain the bit values without Bob and Alice noticing anything suspicious. A seemingly easy way for Eve to overcome this obstacle is for her to copy the qubit, keeping a copy -
for herself while sending the original on to Bob. Then she can measure her copy

2.5 The State Space of a Single-Qubit System

21

later after learning the correct basis from listening in on the classical channel. Such a protocol is defeated by an important property of quantum information. As we will show in section 5.1.1, the no-cloning principle of quantum mechanics means that it is impossible to reliably copy quantum information unless a basis in which it is encoded is known; all quantum copying machines are basis dependent. Copying with the wrong machine not only does not produce an accurate copy, but it also changes the -
original in much the same way measuring in the wrong basis does. So Bob and Alice would detect attempts to copy with high probability.
The security of this protocol, like other pure key distribution protocols such as Difﬁe-Hellman, is vulnerable to a man-in-the-middle attack in which Eve impersonates Bob to Alice and impersonates Alice to Bob. To guard against such an attack, Alice and Bob need to combine it with an authentication protocol, be it recognizing each other’s voices or a more mathematical authentication protocol.
More sophisticated versions of this protocol exist that support quantum key distribution through noisy channels and stronger guarantees about the amount of information Eve can gain. In the noisy case, Eve is able to gain some information initially, but techniques of quantum error correction and privacy ampliﬁcation can reduce the amount of information Eve gains to arbitrarily low levels as well as compensate for the noise in the channels.
2.5 The State Space of a Single-Qubit System
The state space of a classical or quantum physical system is the set of all possible states of the system. Depending on which properties of the system are under consideration, a state of the system consists of any combination of the positions, momenta, polarizations, spins, energy, and so on of the particles in the system. When we are considering only polarization states of a single photon, the state space is all possible polarizations. More generally, the state space for a single qubit, no matter-
 how it is realized, is the set of possible qubit values,
{a|0 + b|1 },
where |a|2 + |b|2 = 1 and a|0 + b|1 and a |0 + b |1 are considered the same qubit value if
a|0 + b|1 = c(a |0 + b |1 ) for some modulus one complex number c.
2.5.1 Relative Phases versus Global Phases That the same quantum state is represented by more than one vector means that there is a critical distinction between the complex vector space in which we write our qubit values and the quantum state space itself. We have reduced the ambiguity by requiring that vectors representing quantum states be unit vectors, but some ambiguity remains: unit vectors equivalent up to multiplication by a complex number of modulus one represent the same state. The multip-
le by which two vectors representing the same quantum state differ is called the global phase and has no physical meaning. We use the equivalence relation |v ∼ |v to indicate that |v = c|v for some complex global phase c = eiφ. The space in which two two-dimensional complex vectors are considered equivalent if they are multiples of each other is called complex projective space of dimension one.

22

2 Single-Qubit Quantum Systems

This quotient space, a space obtained by identifying sets of equivalent vectors with a single point in the space, is expressed with the compact notation used for quotient spaces:
CP1 = {a|0 + b|1 }/ ∼ .

So the quantum state space for a single-qubit system is in one-to-one correspondence with the points of the complex projective space CP1. We will make no further use of CP1 in this book,

but it is used in the quantum information processing literature.

Because the linearity of vector spaces makes them easier to work with than projective spaces

(we know how to add vectors and there is no corresponding way of adding points in projec-

tive spaces), we generally perform all calculations in the vector space corresponding to the

quantum state space. The multiplicity of representations of a single quantum state in this vec-

tor space representation, however, is a common source of confusion for newcomers to the

ﬁeld.

A physically important quantity is the relative phase of a single-qubit state a|0 + b|1 . The

relative phase (in the standard basis) of a superposition a|0 + b|1 is a measure of the angle in

the complex plane between the two complex numbers a and b. More precisely, the relative phase
is the modulus one complex number eiφ satisfying a/b = eiφ|a|/|b|. Two superpositions a|0 +

b|1 and a |0 + b |1 whose amplitudes have the same magnitudes but that differ in a relative

phase represent different states.

The physically meaningful relative phase and the physically meaningless global phase should

not be confused. While multiplication with a unit constant does not change a quantum state vector,

relative phases in a superposition do represent distinct quantum states: even though |v1 ∼ eiφ|v1 ,

the

vectors

√1 2

(eiφ |v1

+ |v2

)

and

√1 2

(|v1

+ |v2

) do not represent the same state. We must always

be cognizant of the ∼ equivalence when we interpret the results of our computations as quantum

states.

A few single-qubit states will be referred to often enough that we give them special labels:

√

|+ = 1/ 2(|0 + |1 )

(2.1)

√

|− = 1/ 2(|0 − |1 )

(2.2)

√

|i = 1/ 2(|0 + i|1 )

(2.3)

√

|−i = 1/ 2(|0 − i|1 ).

(2.4)

The basis {|+ , |− } is referred to as the Hadamard basis. We sometimes use the notation {| , | } for the Hadamard basis when discussing photon polarization.
Some authors omit normalization factors, allowing vectors of any length to represent a state where two vectors represent the same state if they differ by any complex factor. We will explicitly write the normalizations factors, both because then the amplitudes have a more direct relation to the measurement probabilities and because keeping track of the normalization factor provides a check that helps avoid errors.

2.5 The State Space of a Single-Qubit System

23

2.5.2 Geometric Views of the State Space of a Single Qubit While we primarily use vectors to represent quantum states, it is helpful to have models of the single-qubit state space in which there is a one-to-one correspondence between states and points in the space. We give two related but different geometric models with this property. The second of these, the Bloch sphere model, will be used in section 5.4.1 to illustrate single-qubit quantum transformations, and in chapter 10 it will be generaliz-
ed to aid in the discussion of single-qubit subsystems. These models are just different ways of looking at complex projective space of dimension 1. As we will see, complex projective space of dimension 1 can be viewed as a sphere. First we show that it can be viewed as the extended complex plane, the complex plane C together with an additional point traditionally labeled ∞.

Extended Complex Plane C ∪ {∞} A correspondence between the set of all complex numbers and single-qubit states is given by

a|0 + b|1 → b/a = α

and its inverse

α → 1 |0 + α |1 .

1 + |α|2

1 + |α|2

The preceding mapping is not deﬁned for the state with a = 0 and b = 1. To make this correspondence one-to-one we need to add a single point, which we label ∞, to the complex plane and deﬁne ∞ ↔ |1 . For example, we have

|0 → 0

|1 → ∞

|+ → + 1

|− → − 1

|i → i

|−i → − i.

We now describe another useful model, related to but different from the previous one.

Bloch Sphere Starting with the previous representation, we can map each state, represented by the complex number α = s + it, onto the unit sphere in three real dimensions, the points (x, y, z) ∈ C satisfying |x|2 + |y|2 + |z|2 = 1, via the standard stereographic projection

(s, t) →

2s

2t 1 − |α|2

|α|2 + 1 , |α|2 + 1 , |α|2 + 1

,

24
1

2 Single-Qubit Quantum Systems

–

–i

i

+

0
Figure 2.6 Location of certain single-qubit states on the surface of the Bloch sphere.
further requiring that ∞ → (0, 0, −1). Figure 2.6 illustrates the following correspondences: |0 → (0, 0, 1) |1 → (0, 0, −1) |+ → (1, 0, 0) |− → (−1, 0, 0) |i → (0, 1, 0) |−i → (0, −1, 0).
We have given three representations of the quantum state space for a single-qubit system.
1. Vectors written in ket notation: a|0 + b|1 with complex coefﬁcients a and b, subject to
|a|2 + |b|2 = 1, where a and b are unique up to a unit complex factor. Because of this factor, the
global phase, this representation is not one-to-one. 2. Extended complex plane: a single complex number α ∈ C or ∞. This representation is oneto-one. 3. Bloch sphere: points (x, y, z) on the unit sphere. This representation is also one-to-one.
As we will see in section 10.1, the points in the interior of the sphere also have meaning for quantum information processing. For historical reasons, the entire ball, including the interior, is called the Bloch sphere, instead of just the states on the surface, which truly form a sphere. For

2.6 References

25

this reason, we refer to the state space of a single-qubit system as the surface of the Bloch sphere (ﬁgure 2.6).
One of the advantages of the Bloch sphere representation is that it is easy to read off all possible bases from the model; orthogonal states correspond to antipodal points of the Bloch sphere. In particular, every diameter of the Bloch sphere corresponds to a basis for the single-qubit state space.
The illustration we gave in ﬁgure 2.4 differs from the Bloch sphere representation of singlequbit quantum states in that the angles are half that of those in the Bloch sphere representation: in particular, the angle between two states in ﬁgure 2.4 has the usual relation to the inner product, whereas in the Bloch sphere representation the angle is twice that of the angle in the inner product formula.
2.5.3 Comments on General Quantum State Spaces The states of all quantum systems satisfy certain properties that are encapsulated by a linear differential equation called the Schrödinger wave equation. For this reason, solutions to the Schrödinger equation are called wave functions, so all quantum states have representations as wave functions. For the theory of quantum information processing, we do not need to concern ourselves with properties speciﬁc to any of the various possible physical realiz-
ations of quantum bits, so we do not need to look at the details of speciﬁc wave function solutions; we can simply view wave functions as abstract vectors which we will denote by kets such as |→ or |0 .
Since the Schrödinger equation is linear, the addition of two solutions to the Schrödinger equation or a constant multiple of a solution of the Schrödinger equation are also solutions to the Schrödinger equation. Thus, the set of solutions to the Schrödinger equation for any quantum system is a complex vector space. Furthermore, the set of solutions has a natural inner product. For the theoretical aspects of quantum information processing, considering only ﬁnite dimensional vector spaces usually s-
ufﬁces. We simply mention that, in the inﬁnite dimensional case, the space of solutions satisﬁes the conditions needed to form a Hilbert space. Hilbert spaces are frequently mentioned in the literature, since they are the most general case, but in most papers on quantum information processing, the Hilbert spaces discussed are ﬁnite-dimensional, in which case they are nothing more or less than ﬁnite-dimensional complex vector spaces. We discuss the state spaces of multiple-qubit systems in chapter -
3. Just as in the single-qubit case, there is redundancy in this model. In fact, there is greater redundancy in the vector space representation of larger quantum systems, which leads to a signiﬁcantly more complicated geometry.
2.6 References
The early essays of Feynman and Manin can be found in [119, 120, 121] and [202, 203] respectively. The bra / ket notation was ﬁrst introduced by Dirac in 1958 [103]. It is found in most quantum mechanics textbooks and is used in virtually all papers on quantum computing.

26

2 Single-Qubit Quantum Systems

More information about linear algebra, in particular proofs of facts stated here, can be found in any linear algebra text, including Strang’s Linear Algebra and Its Applications [265] and Hoffman and Kunze’s Linear Algebra [152], or in a book on mathematics for physicists such as Bamberg and Sternberg’s A Course in Mathematics for Students of Physics [30].
The BB84 quantum key distribution protocol was developed by Charles Bennett and Gilles Brassard [42, 43, 45] building on work of Stephen Wiesner [284]. A related protocol was shown to be unconditionally secure by Lo and Chau [198]. Their proof was later simpliﬁed by Shor and Preskill [255] and extended to BB84. Another proof was given by Mayers [206]. The BB84 protocol was ﬁrst demonstrated experimentally by Bennett et al. in 1992 over 30 cm of free space [37]. Since then, several groups have demo-
nstrated this protocol and other quantum key distribution protocols over 100 km of ﬁber optic cable. Bienfang et al. [51] demonstrated quantum key distribution over 23 km of free space at night, and Hughes et al. have achieved distances of 10 km through free space in daylight [156]. See the ARDA roadmap [157], the QIPC strategic report [295], and Gisin et al. [130] for detailed overviews of implementation efforts and the challenges involved. The companies id Quantique, MagiQ, and SmartQuantum curr-
ently sell quantum cryptographic systems implementing the BB84 protocol. Other quantum key distribution protocols exist. Exercise 2.11 develops the B92 protocol, and section 3.4 describes Ekert’s entanglement-based quantum key distribution protocol.
While we explain all quantum mechanics needed for the topics covered in this book, the reader may be interested in books on quantum mechanics. Countless books on quantum mechanics are available. Greenstein and Zajonc [140] give a readable high-level exposition of quantum mechanics, including descriptions of many experiments. The third volume of the Feynman Lectures on Physics [122] is accessible to a large audience. A classical explanation of the polarization experiment is given in the ﬁrst volume-
. Shankar’s textbook [247] deﬁnes much more of the notation and mathematics required for performing calculations than do the previously mentioned books, and it is quite readable as well. Other textbooks, such as Liboff [194], may be more appropriate for readers with a physics background.
2.7 Exercises
Exercise 2.1. Let the direction |v of polaroid B’s preferred axis be given as a function of θ , |v = cos θ |→ + sin θ |↑ , and suppose that the polaroids A and C remain horizontally and vertically polarized as in the experiment of Section 2.1.1. What fraction of photons reach the screen? Assume that each photon generated by the laser pointer has random polarization.
Exercise 2.2. Which pairs of expressions for quantum states represent the same state? For those pairs that represent different states, describe a measurement for which the probabilities of the two outcomes differ for the two states and give these probabilities. a. |0 and −|0 b. |1 and i|1

2.7 Exercises

27

c. √1 (|0 + |1 ) and √1 (−|0 + i|1 )

2

2

d. √1 (|0 + |1 ) and √1 (|0 − |1 )

2

2

e. √1 (|0 − |1 ) and √1 (|1 − |0 )

2

2

f. √1 (|0 + i|1 ) and √1 (i|1 − |0 )

2

2

g. √1 (|+ + |− ) and |0
2

h. √1 (|i − |−i ) and |1
2

i. √1 (|i + |−i ) and √1 (|− + |+ )

2

2

j. √1 |0 + eiπ/4|1 and √1 e−iπ/4|0 + |1

2

2

Exercise 2.3. Which states are superpositions with respect to the standard basis, and which are not? For each state that is a superposition, give a basis with respect to which it is not a superposition. a. |+

b. √1 (|+ + |− )
2

c. √1 (|+ − |− )
2

√

d.

3 2

|+

−

1 2

|−

)

e. √1 (|i − |−i )
2

f. √1 (|0 − |1 )
2

Exercise 2.4. Which of the states in 2.3 are superpositions with respect to the Hadamard basis, and which are not?

Exercise 2.5. Give the set of all values of θ for which the following pairs of states are equivalent. a. |1 and √1 |+ + eiθ |−
2

b. √1 |i + eiθ |−i and √1 |−i + e−iθ |i

2

2

√

√

c.

1 2

|0

−

3 2

|1

and eiθ

1 2

|0

−

3 2

|1

Exercise 2.6. For each pair consisting of a state and a measurement basis, describe the possible

measurement outcomes and give the probability for each outcome.

√

a.

3 2

|0

−

1 2

|1

, {|0 , |1 }

28

2 Single-Qubit Quantum Systems

√

b.

3 2

|1

−

1 2

|0

, {|0 , |1 }

c. |−i , {|0 , |1 }

d. |0 , {|+ , |− }

e. √1 (|0 − |1 ), {|i , |−i }
2

f. |1 , {|i , |−i }

√

√

g.

|+

,

{

1 2

|0

+

3 2

|1

,

3 2

|0

−

1 2

|1

}

Exercise 2.7. For each of the following states, describe all orthonormal bases that include that state. a. √1 (|0 + i|1 )
2

b.

1+i 2

|0

−

1−i 2

|1

c. √1 |0 + eiπ/6|1
2

√

d.

1 2

|+

−

i

3 2

|−

Exercise 2.8. Alice is confused. She understands that |1 and −|1 represent the same state. But

she does not understand why that does not imply that √1 (|0 + |1 ) and √1 (|0 − |1 ) would be

2

2

the same state. Can you help her out?

Exercise 2.9. In the BB84 protocol, how many bits do Alice and Bob need to compare to have a 90 percent chance of detecting Eve’s presence?

Exercise 2.10. Analyze Eve’s success in eavesdropping on the BB84 protocol if she does not even know which two bases to choose from and so chooses a basis at random at each step. a. On average, what percentage of bit values of the ﬁnal key will Eve know for sure after listening to Alice and Bob’s conversation on the public channel?
b. On average, what percentage of bits in her string are correct?
c. How many bits do Alice and Bob need to compare to have a 90 percent chance of detecting Eve’s presence?

Exercise 2.11. B92 quantum key distribution protocol. In 1992 Bennett proposed the following quantum key distribution protocol. Instead of encoding each bit in either the standard basis or the Hadamard basis as is done in the BB84 protocol, Alice encodes her random string x as follows

0 → |0 1 → |+ = √1 (|0 + |1 )
2

and sends them to Bob. Bob generates a random bit string y. If yi = 0 he measures the i th qubit in the Hadamard basis {|+ , |− }, if yi = 1 he measures in the standard basis {|0 , |1 }. In this protocol, instead of telling Alice over the public classical channel which basis he used to measure

2.7 Exercises
z

29
z

y

y

x

y
x
Figure 2.7 Bloch sphere representation of single-qubit quantum states.
each qubit, he tells her the results of his measurements. If his measurement resulted in |+ or |0 Bob sends 0; if his measurement indicates the state is |1 or |− , he sends 1. Alice and Bob discard all bits from strings x and y for which Bob’s bit value from measurement yielded 0, obtaining strings x and y . Alice uses x as the secret key and Bob uses y . Then, depending on the security level they desire, they compare a number of bits to detect tampering. They discard these check bits from their k-
ey. a. Show that if Bob receives exactly the states Alice sends, then the strings x and y are identical strings. b. Why didn’t Alice and Bob decide to keep the bits of x and y for which Bob’s bit value from measurement was 0? c. What if an eavesdropper Eve measures each bit in either the standard basis or the Hadamard basis to obtain a bit string z and forwards the measured qubits to Bob? On average, how many bits of Alice and Bob’s key does she know for sure after listening in on the public class-
ical? If Alice and Bob compare s bit values of their strings x and y , how likely are they to detect Eve’s presence?
Exercise 2.12. Bloch Sphere: Spherical coordinates: a. Show that the surface of the Bloch sphere can be parametrized in terms of two real-valued parameters, the angles θ and φ illustrated in ﬁgure 2.7. Make sure your parametrization is in one-to-one correspondence with points on the sphere, and therefore single-qubit quantum states, in the range θ ∈ [0, π] and φ ∈ [0, 2π ] except for the points corresponding to |0 and |1 . b. What are θ and φ for each of the states |+ , |− , |i , and |−i ?

30

2 Single-Qubit Quantum Systems

Exercise 2.13. Relate the four parametrizations of the state space of a single qubit to each other: Give formulas for a. vectors in ket notation b. elements of the extended complex plane c. spherical coordinates for the Bloch sphere (see exercise 2.12) in terms of the x, y, and z coordinates of the Bloch sphere.
Exercise 2.14. a. Show that antipodal points on the surface of the Block sphere represent orthogonal states. b. Show that any two orthogonal states correspond to antipodal points.

3 Multiple-Qubit Systems
The ﬁrst glimpse into why encoding information in quantum states might support more efﬁcient computation comes when examining systems of more than one qubit. Unlike classical systems, the state space of a quantum system grows exponentially with the number of particles. Thus, when we encode computational information in quantum states of a system of n particles, there are vastly more possible computation states available than when classical states are used to encode the information. The extent to wh-
ich these large state spaces corresponding to small amounts of physical space can be used to speed up computation will be the subject of much of the rest of this book.
The enormous difference in dimension between classical and quantum state spaces is due to a difference in the way the spaces combine. Imagine a macroscopic physical system consisting of several components. The state of this classical system can be completely characterized by describing the state of each of its component pieces separately. A surprising and unintuitive aspect of quantum systems is that often the state of a system cannot be described in terms of the states of its component pieces. St-
ates that cannot be so described are called entangled states. Entangled states are a critical ingredient of quantum computation.
Entangled states are a uniquely quantum phenomenon; they have no classical counterpart. Most states in a multiple-qubit system are entangled states; they are what ﬁlls the vast quantum state spaces. The impossibility of efﬁciently simulating the behavior of entangled states on classical computers suggested to Feynman, Manin, and others that it might be possible to use these quantum behaviors to compute more efﬁciently, leading to the development of the ﬁeld of quantum computation.
The ﬁrst few sections of this chapter will be fairly abstract as we develop the mathematical formalism to discuss multiple-qubit systems. We will try to make this material more concrete by including many examples. Section 3.1 formally describes the difference between the way quantum and classical state spaces combine, the difference between the direct sum of two or more vector spaces and the tensor product of a set of vector spaces. Section 3.1 then explores some of the implications of this differ-
ence, including the exponential increase in the dimension of a quantum state space with the number of particles. Section 3.2 formally deﬁnes entangled states and begins to describe their uniquely quantum behavior. As a ﬁrst illustration of the usefulness of this behavior, section 3.4 discusses a second quantum key distribution scheme.

32

3 Multiple-Qubit Systems

3.1 Quantum State Spaces

In classical physics, the possible states of a system of n objects, whose individual states can be described by a vector in a two-dimensional vector space, can be described by vectors in a vector space of 2n dimensions. Classical state spaces combine through the direct sum. However, the combined state space of n quantum systems, each with states modeled by two-dimensional vectors, is much larger. The vector spaces associated with the quantum systems combine through the tensor product, resulting in-
 a vector space of 2n dimensions. We begin by reviewing the formal deﬁnition of a direct sum as well as of the tensor product in order to compare the two and the difference in size between the resulting spaces.

3.1.1 Direct Sums of Vector Spaces The direct sum V ⊕ W of two vector spaces V and W with bases A = {|α1 , |α2 , . . . , |αn } and B = {|β1 , |β2 , . . . , |βm } respectively is the vector space with basis A ∪ B = {|α1 , |α2 , . . . , |αn , |β1 , |β2 , . . . , |βm }. The order of the basis is arbitrary. Every element |x ∈ V ⊕ W can be written as |x = |v ⊕ |w for some |v ∈ V and |w ∈ W . For V and W of dimension n and m respectively, V ⊕ W has dimension n + m:

dim(V ⊕ W ) = dim(V ) + dim(W ).

Addition and scalar multiplication are deﬁned by performing the operation on the two component vector spaces separately and adding the results. When V and W are inner product spaces, the standard inner product on V ⊕ W is given by

( v2| ⊕ w2|)(|v1 ⊕ |w1 ) = v2|v1 + w2|w1 .

The vector spaces V and W embed in V ⊕ W in the obvious canonical way, and the images are

orthogonal under the standard inner product.

Suppose that the state of each of three classical objects O1, O2, and O3 is fully described by two

parameters, the position xi and the momentum pi. Then the state of the system can be described

by the direct sum of the states of the individual objects:

⎛⎞

x1 p1

⊕

x2 p2

⊕

x3 p3

= ⎜⎜⎜⎜⎜⎜⎜⎝

x1 p1 x2 p2 x3

⎟⎟⎟⎟⎟⎟⎟⎠ .

p3

More generally, the state space of n such classical objects has dimension 2n. Thus the size of the state space grows linearly with the number of objects.

3.1 Quantum State Spaces

33

3.1.2 Tensor Products of Vector Spaces The tensor product V ⊗ W of two vector spaces V and W with bases A = {|α1 , |α2 , . . . , |αn } and B = {|β1 , |β2 , . . . , |βm } respectively is an nm-dimensional vector space with a basis consisting of the nm elements of the form |αi ⊗ |βj where ⊗ is the tensor product, an abstract binary operator that satisﬁes the following relations:
(|v1 + |v2 ) ⊗ |w = |v1 ⊗ |w + |v2 ⊗ |w
|v ⊗ (|w1 + |w2 ) = |v ⊗ |w1 + |v ⊗ |w2
(a|v ) ⊗ |w = |v ⊗ (a|w ) = a(|v ⊗ |w ).
Taking k = min(n, m), all elements of V ⊗ W have form
|v1 ⊗ |w1 + |v2 ⊗ |w2 + · · · + |vk ⊗ |wk
for some vi ∈ V and wi ∈ W . Due to the relations deﬁning the tensor product, such a representation is not unique. Furthermore, while all elements of V ⊗ W can be written
α1(|α1 ⊗ |β1 ) + α2(|α2 ⊗ |β1 ) + · · · + αnm(|αn ⊗ |βm ),
most elements of V ⊗ W cannot be written as |v ⊗ |w , where v ∈ V and w ∈ W . It is common to write |v |w for |v ⊗ |w .

Example 3.1.1 Let V and W be two-dimensional vector spaces with orthonormal bases A = {|α1 , |α2 } and B = {|β1 , |β2 } respectively. Let |v = a1|α1 + a2|α2 and |w = b1|β1 + b2|β2 be elements of V and W . Then
|v ⊗ |w = a1b1|α1 ⊗ |β1 + a1b2|α1 ⊗ |β2 + a2b1|α2 ⊗ |β1 + a2b2|α2 ⊗ |β2 .
If V and W are vector spaces corresponding to a qubit, each with standard basis {|0 , |1 }, then V ⊗ W has {|0 ⊗ |0 , |0 ⊗ |1 , |1 ⊗ |0 , |1 ⊗ |1 } as basis. The tensor product of two single-qubit states a1|0 + b1|1 and a2|0 + b2|1 is a1a2|0 ⊗ |0 + a1b2|0 ⊗ |1 + a2b1|1 ⊗ |0 + a2b2|1 ⊗ |1 .
To write examples in the more familiar matrix notation for vectors, we must choose an ordering for the basis of the tensor product space. For example, we can choose the dictionary ordering {|α1 |β1 , |α1 |β2 , |α2 |β1 , |α2 |β2 }.

Example 3.1.2 With the dictionary ordering of the basis for the tensor product space, the tensor

product of the unit vectors with matrix representation |v = √1 (1, −2)† and |w = √1 (−1, 3)†

5

10

is the unit vector |v ⊗ |w = √1 (−1, 3, 2, −6)†.

52

34

3 Multiple-Qubit Systems

If V and W are inner product spaces, then V ⊗ W can be given an inner product by taking the product of the inner products on V and W ; the inner product of |v1 ⊗ |w1 and |v2 ⊗ |w2 is given by
( v2| ⊗ w2|) · (|v1 ⊗ |w1 ) = v2|v1 w2|w1 ,
The tensor product of two unit vectors is a unit vector, and given orthonormal bases {|αi } for V and {|βi } for W , the basis {|αi ⊗ |βj } for V ⊗ W is also orthonormal. The tensor product V ⊗ W has dimension dim(V ) × dim(W ), so the tensor product of n two-dimensional vector spaces has 2n dimensions.
Most elements |w ∈ V ⊗ W cannot be written as the tensor product of a vector in V and a vector in W (though they are all linear combinations of such elements). This observation is of crucial importance to quantum computation. States of V ⊗ W that cannot be written as the tensor product of a vector in V and a vector in W are called entangled states. As we will see, for most quantum states of an n-qubit system, in particular for all entangled states, it is not meaningful to talk about the state of a-
 single qubit of the system.
A tensor product structure also underlies probability theory. While the tensor product structure there is rarely mentioned, a common source of confusion is a tendency to try to impose a direct sum structure on what is actually a tensor product structure. Readers may ﬁnd it useful to read section A.1, which discusses the tensor product structure inherent in probability theory, which illustrates the use of tensor product in another, more familiar, context. Readers may also wish to do exercises A.1 t-
hrough A.4.
3.1.3 The State Space of an n-Qubit System Given two quantum systems with states represented by unit vectors in V and W respectively, the possible states of the joint quantum system are represented by unit vectors in the vector space V ⊗ W . For 0 ≤ i < n, let Vi be the vector space, with basis {|0 i, |1 i}, corresponding to a single qubit. The standard basis for the vector space Vn−1 ⊗ · · · ⊗ V1 ⊗ V0 for an n-qubit system consists of the 2n vectors
{|0 n−1 ⊗ · · · ⊗ |0 1 ⊗ |0 0,
|0 n−1 ⊗ · · · ⊗ |0 1 ⊗ |1 0,
|0 n−1 ⊗ · · · ⊗ |1 1 ⊗ |0 0,
...,
|1 n−1 ⊗ · · · ⊗ |1 1 ⊗ |1 0}.
The subscripts are often dropped, since the corresponding qubit is clear from position. The convention that adjacency of kets means the tensor product enables us to write this basis more compactly:

3.1 Quantum State Spaces

35

{|0 · · · |0 |0 ,

|0 · · · |0 |1 ,

|0 · · · |1 |0 ,

...,

|1 · · · |1 |1 }.

Since the tensor product space corresponding to an n-qubit system occurs so frequently throughout quantum information processing, an even more compact and readable notation uses |bn−1 . . . b0 to represent |bn−1 ⊗ · · · ⊗ |b0 . In this notation the standard basis for an n-qubit system can be written

{|0 · · · 00 , |0 · · · 01 , |0 · · · 10 , . . . , |1 · · · 11 }.

Finally, since decimal notation is more compact than binary notation, we will represent the state |bn−1 . . . b0 more compactly as |x , where bi are the digits of the binary representation for the decimal number x. In this notation, the standard basis for an n-qubit system is written
{|0 , |1 , |2 , . . . , |2n − 1 }.

The standard basis for a two-qubit system can be written as

{|00 , |01 , |10 , |11 } = {|0 , |1 , |2 , |3 },

and the standard basis for a three-qubit system can be written as

{|000 , |001 , |010 , |011 , |100 , |101 , |110 , |111 }

= {|0 , |1 , |2 , |3 , |4 , |5 , |6 , |7 }.

Since the notation |3 corresponds to two different quantum states in these two bases, one a

two-qubit state, the other a three-qubit state, in order for such notation to be unambiguous, the

number of qubits must be clear from context.

We often revert to a less compact notation when we wish to set apart certain sets of qubits,

to indicate separate registers of a quantum computer, or to indicate qubits controlled by differ-

ent people. If Alice controls the ﬁrst two qubits and Bob the last three, we may write a state

as

√1 (|00
2

|101

+ |10

|011

), or even as

√1 (|00
2

A|101

B + |10

A|011

B ), where the subscripts

indicate which qubits Alice controls and which qubits Bob controls.

Example 3.1.3 The superpositions

√1 |0 + √1 |7 = √1 |000 + √1 |111

2

2

2

2

36

3 Multiple-Qubit Systems

and

1 (|1 + |2 + |4 + |7 ) = 1 (|001 + |010 + |100 + |111 )

2

2

represent possible states of a three-qubit system.

To use matrix notation for state vectors of an n-qubit system, the order of basis vectors must be established. Unless speciﬁed otherwise, basis vectors labeled with numbers are assumed to be sorted numerically. Using this convention, the two qubit state

1 |00

i + |01

+ √1

|11

= 1 |0

i + |1

+ √1

|3

2

2

2

22

2

will have matrix representation

⎛1⎞

⎜⎜⎜⎝

2 i 2
0

⎟⎟⎟⎠ .

√1 2

We use the standard basis predominantly, but we use other bases from time to time. For example,

the following basis, the Bell basis for a two-qubit system, {| + , | − , | + , | − }, where

|

+

√ = 1/ 2(|00 + |11

√ | − = 1/ 2(|00 − |11

√

(3.1)

| + = 1/ 2(|01 + |10

|

−

√ = 1/ 2(|01 − |10 ,

is important for various applications of quantum information processing including quantum teleportation. As in the single-qubit case, a state |v is a superposition with respect to a set of orthonormal states {|β1 , . . . , |βi } if it is a linear combination of these states, |v = a1|β1 + · · · + ai|βi , and at least two of the ai are non-zero. When no set of orthonormal states is speciﬁed, we will mean that the superposition is with respect to the standard basis.
Any unit vector of the 2n-dimensional state space represents a possible state of an n-qubit system, but just as in the single-qubit case there is redundancy. In the multiple-qubit case, not only do vectors that are multiples of each other refer to the same quantum state, but properties of the tensor product also mean that phase factors distribute over tensor products; the same phase factor in different qubits of a tensor product represent the same state:
|v ⊗ (eiφ|w ) = eiφ(|v ⊗ |w ) = (eiφ|v ) ⊗ |w .

Phase factors in individual qubits of a single term of a superposition can always be factored out into a single coefﬁcient for that term.

3.1 Quantum State Spaces

37

Example 3.1.4

√1 (|0
2

+ |1

) ⊗ √1 (|0
2

+ |1

)=

1 2

(|00

+ |01

+ |10

+ |11 )

√

√

√

Example 3.1.5

(

1 2

|0

+

3 2

|1

)

⊗ ( √1 |0
2

+ √i |1 ) = √1 |00

2

22

+ √i |01
22

+ √3 |10
22

+ i√3 |11 )
22

Just as in the single-qubit case, vectors that differ only in a global phase represent the same quantum state. If we write every quantum state as

a0|0 . . . 00 + a1|0 . . . 01 + · · · + a2n−1|1 . . . 11

and require the ﬁrst non-zero ai to be real and non-negative, then every quantum state has a

unique representation. Since this representation uniquely represents quantum states, the quantum

state space of an n-qubit system has 2n − 1 complex dimensions. For any complex vector space of

dimension N , the space in which vectors that are multiples of each other are considered equivalent

is called complex projective space of dimension N − 1. So the space of distinct quantum states

of an n-qubit system is a complex projective space of dimension 2n − 1.

Just as in the single-qubit case, we must be careful not to confuse the vector space in which we

write our computations with the quantum state space itself. Again, we must be careful to avoid

confusion between the relative phases between terms in the superposition, of critical importance

in quantum mechanics, and the global phase which has no physical meaning. Using the notation

of section 2.5.1, we write |v ∼ |w when two vectors |v and |w differ only by a global phase

and thus represent the same quantum state. For example, even though |00 ∼ eiφ|00 , the vectors

|v = √1 (eiφ|00 + |11 ) and |w = √1 (|00 + |11 ) represent different quantum states, which

2

2

behave differently in many situations:

√1 (eiφ|00 + |11 ) ∼ √1 (|00 + |11 ).

2

2

However,

√1 (eiφ|00 + eiφ|11 ) ∼ √eiφ (|00 + |11 ) ∼ √1 (|00 + |11 ).

2

2

2

Quantum mechanical calculations are usually performed in the vector space rather than in the

projective space because linearity makes vector spaces easier to work with. But we must always

be aware of the ∼ equivalence when we interpret the results of our calculations as quantum states.

Further confusions arise when states are written in different bases. Recall from section 2.5.1 that

|+ = √1 (|0 + |1 ) and |− = √1 (|0 − |1 ). The expression √1 (|+ + |− ) is a different way

2

2

2

of writing |0 , and √1 (|0 |0 + |1 |1 ) and √1 (|+ |+ + |− |− ) are simply different expressions

2

2

for the same vector.

38

3 Multiple-Qubit Systems

Fluency with properties of tensor products, and with the notation just presented, will be crucial for understanding the rest of the book. The reader is strongly encouraged to work exercises 3.1 through 3.9 at this point to begin to develop that ﬂuency.
3.2 Entangled States
As we saw in section 2.5.2, a single-qubit state can be speciﬁed by a single complex number so any tensor product of n individual single-qubit states can be speciﬁed by n complex numbers. But in the last section, we saw that it takes 2n − 1 complex numbers to describe states of an n-qubit system. Since 2n n, the vast majority of n-qubit states cannot be described in terms of the state of n separate single-qubit systems. States that cannot be written as the tensor product of n single-qubit states a-
re called entangled states. Thus the vast majority of quantum states are entangled.
Example 3.2.1 The elements of the Bell basis (Equation 3.1) are entangled. For instance, the Bell state | + = √1 (|00 + |11 ) cannot be described in terms of the state of each of its component
2
qubits separately. This state cannot be decomposed, because it is impossible to ﬁnd a1, a2, b1, b2 such that (a1|0 + b1|1 ) ⊗ (a2|0 + b2|1 ) = √1 (|00 + |11 ),
2 since
(a1|0 + b1|1 ) ⊗ (a2|0 + b2|1 ) = a1a2|00 + a1b2|01 + b1a2|10 + b1b2|11 and a1b2 = 0 implies that either a1a2 = 0 or b1b2 = 0. Two particles in the Bell state | + are called an EPR pair for reasons that will become apparent in section 4.4.

Example 3.2.2 Other examples of two-qubit entangled states include

| + = √1 (|01 + |10 ), 2

√1 (|00 − i|11 ),

2

√

i |00 + 99 |11 ),

10

10

and

7 |00 + 1 |01 + 1 |10 + 7 |11 ).

10

10

10

10

3.2 Entangled States

39

The four entangled states
| + = √1 (|00 + |11 ) 2
| − = √1 (|00 − |11 ) 2
and
| + = √1 (|01 + |10 ) 2
| − = √1 (|01 − |10 ) 2
of equation 3.1 are called Bell states. Bell states are of fundamental importance to quantum information processing. For example, section 5.3 exhibits their use for quantum teleportation and dense coding. Section 10.2.1 shows that these states are maximally entangled.
Strictly speaking, entanglement is always with respect to a speciﬁed tensor product decomposition of the state space. More formally, given a state |ψ of some quantum system with associated vector space V and a tensor decomposition of V , V = V1 ⊗ · · · ⊗ Vn, the state |ψ is separable, or unentangled, with respect to that decomposition if it can be written as
|ψ = |v1 ⊗ · · · ⊗ |vn ,
where |vi is contained in Vi. Otherwise, |ψ is entangled with respect to this decomposition. Unless we specify a different decomposition, when we say an n-qubit state is entangled, we
mean it is entangled with respect to the tensor product decomposition of the vector space V associated to the n-qubit system into the n two-dimensional vector spaces Vn−1, . . . V0 associated with each of the individual qubits. For such statements to have meaning, it must be speciﬁed or clear from context which of the many possible tensor decompositions of V into two-dimensional spaces corresponds with the set of qubits under consideration.
It is vital to remember that entanglement is not an absolute property of a quantum state, but depends on the particular decomposition of the system into subsystems under consideration; states entangled with respect to the single-qubit decomposition may be unentangled with respect to other decompositions into subsystems. In particular, when discussing entanglement in quantum computation, we will be interested in entanglement with respect to a decomposition into registers, subsystems consisting of m-
ultiple qubits, as well as entanglement with respect to the decomposition into individual qubits. The following example demonstrates how a state can be entangled with respect to one decomposition and not with respect to another.

Example 3.2.3 Multiple meanings of entanglement. We say that the four-qubit state

|ψ = 1 (|00 + |11 + |22 + |33 ) = 1 (|0000 + |0101 + |1010 + |1111 )

2

2

40

3 Multiple-Qubit Systems

is entangled, since it cannot be expressed as the tensor product of four single-qubit states. That the entanglement is with respect to the decomposition into single qubits is implicit in this statement. There are other decompositions with respect to which this state is unentangled. For example, |ψ can be expressed as the product of two two-qubit states:

1

|ψ

=

(|0 2

1|0

2|0

3|0

4 + |0

1|1

2|0

3|1

4 + |1

1|0

2|1

3|0

4 + |1

1|1

2|1

3|1

4

= √1 (|0 1|0 3 + |1 1|1 3) ⊗ √1 (|0 2|0 4 + |1 2|1 4),

2

2

where the subscripts indicate which qubit we are talking about. So |ψ is not entangled with respect to the system decomposition consisting of a subsystem of the ﬁrst and third qubit and a subsystem consisting of the second and fourth qubit. On the other hand, the reader can check that |ψ is entangled with respect to the decomposition into the two two-qubit systems consisting of the ﬁrst and second qubits and the third and fourth qubits.

It is important to recognize that the notion of entanglement is not basis dependent, even though

it depends on the tensor decomposition under consideration; there is no reference, explicit or

implicit, to a basis in the deﬁnition of entanglement. Certain bases may be more or less convenient

to work with, depending for instance on how much they reﬂect the tensor decomposition under

consideration, but that choice does not affect what states are considered entangled.

In section 2.3, we puzzled over the meaning of quantum superpositions. We now extend the

remarks we made on the meaning of superpositions in section 2.3 to the multiple-qubit case. As

in the single-qubit case, most n-qubit states are superpositions, nontrivial linear combinations

of basis vectors. As always, the notion of superposition is basis-dependent; all states are super-

positions with respect to some bases, and not superpositions with respect to other bases. For

multiple qubits, the answer to the question of what superpositions mean is more involved than in

the single-qubit case.

The common way of talking about superpositions in terms of the system being in two states

“at the same time" is even more suspect in the multiple-qubit case. This way of thinking fails to

distinguish between states like √1 (|00 + |11 ) and √1 (|00 + i|11 ) that differ only by a relative

2

2

phase and behave differently under a variety of circumstances. Furthermore, which states a system

is viewed as “being in at the same time” is basis-dependent; the expressions √1 (|00 + |11 ) and
2
√1 (|+ |+ + |− |− ) represent the same state but have different interpretations, one as being in
2
the states |00 and |11 at the same time, and the other as being in the states |++ and |−− at the

same time, in spite of being the same state and thus behaving in precisely the same way under all cir-

cumstances. This example underscores that quantum superpositions are not probabilistic mixtures.

Sections 3.4 and 4.4 will illustrate how the basis dependence of this interpretation obscures

an essential part of the quantum nature of these states, an aspect that becomes apparent only

3.3 Basics of Multi-Qubit Measurement

41

when such states are considered in different bases. Nevertheless, as long as one is aware that this description should not be taken too literally, it can be helpful at ﬁrst to think of superpositions as being in multiple states at once. Over the course of this chapter and the next, you will begin to develop more of a feel for the workings of these states.
Not only is entanglement between qubits key to the exponential size of quantum state spaces of multiple-qubit systems, but, as we will see in sections 3.4, 5.3.1, and 5.3.2, particles in an entangled state can also be used to aid communication of both classical and quantum information. Furthermore, the quantum algorithms of part II exploit entanglement to speed up computation. The way entangled states behave when measured is one of the central mysteries of quantum mechanics, as well as a source of-
 power for quantum information processing. Entanglement and quantum measurement are two of the uniquely quantum properties that are exploited in quantum information processing.
3.3 Basics of Multi-Qubit Measurement
The experiment of section 2.1.2 illustrates how measurement of a single qubit is probabilistic and transforms the quantum state into a state compatible with the measuring device. A similar statement is true for measurements of multiple-qubit systems, except that the set of possible measurements and measurement outcomes is signiﬁcantly richer than in the single-qubit case. The next paragraph develops some mathematical formalism to handle the general case.
Let V be the N = 2n dimensional vector space associated with an n-qubit system. Any device that measures this system has an associated direct sum decomposition into orthogonal subspaces
V = S1 ⊕ · · · ⊕ Sk
for some k ≤ N. The number k corresponds to the maximum number of possible measurement outcomes for a state measured with that particular device. This number varies from device to device, even between devices measuring the same system. That any device has an associated direct sum decomposition is a direct generalization of the single-qubit case. Every device measuring a singlequbit system has an associated orthonormal basis {|v1 , |v2 } for the vector space V associated with the single-qubit syste-
m; the vectors |vi each generate a one-dimensional subspace Si (consisting of all multiples a|vi where a is a complex number), and V = S1 ⊕ S2. Furthermore, the only nontrivial decompositions of the vector space V are into two one-dimensional subspaces, and any choice of unit length vectors, one from each of the subspaces, yields an orthonormal basis.
When a measuring device with associated direct sum decomposition V = S1 ⊕ · · · ⊕ Sk interacts with an n-qubit system in state |ψ , the interaction changes the state to one entirely contained within one of the subspaces, and chooses the subspace with probability equal to the square of the absolute value of the amplitude of the component of |ψ in that subspace. More formally, the state |ψ has a unique direct sum decomposition |ψ = a1|ψ1 ⊕ · · · ⊕ ak|ψk , where |ψi is a unit vector in Si and ai is r-
eal and non-negative. When |ψ is measured, the state |ψi is obtained

42

3 Multiple-Qubit Systems

with probability |ai|2. That any measuring device has an associated direct sum decomposition, and that the interaction can be modeled in this way, is an axiom of quantum mechanics. It is not possible to prove that every device behaves in this way, but so far it has provided an excellent model that predicts the outcome of experiments with high accuracy.
Example 3.3.1 Single-qubit measurement in the standard basis. Let V be the vector space associated with a single-qubit system. A device that measures a qubit in the standard basis has, by deﬁnition, the associated direct sum decomposition V = S1 ⊕ S2, where S1 is generated by |0 and S2 is generated by |1 . An arbitrary state |ψ = a|0 + b|1 measured by such a device will be |0 with probability |a|2, the amplitude of |ψ in the subspace S1, and |1 with probability |b|2.

Example 3.3.2 Single-qubit measurement in the Hadamard basis. A device that measures a single qubit in the Hadamard basis

{|+ = √1 (|0 + |1 ), |− = √1 (|0 − |1 )}

2

2

has associated subspace decomposition V = S+ ⊕ S−, where S+ is generated by |+ and S− is

generated by |− . A state |ψ = a|0 + b|1 can be rewritten as |ψ = a√+b |+ + a√−b |− , so the

2

2

probability that |ψ is measured as |+ will be | a√+b |2 and |− will be | a√−b |2.

2

2

The next two examples describe measurements of two-qubit states that are used in the entanglement-based quantum key distribution protocol described in section 3.4. Chapter 4 explores measurement of multiple-qubit systems in more detail and builds up the standard notational shorthand for describing quantum measurements.

Example 3.3.3 Measurement of the ﬁrst qubit of a two-qubit state in the standard basis.

Let V be the vector space associated with a two-qubit system. A device that measures the

ﬁrst qubit in the standard basis has associated subspace decomposition V = S1 ⊕ S2 where S1 = |0 ⊗ V2, the two-dimensional subspace spanned by {|00 , |01 }, and S2 = |1 ⊗ V2, which is spanned by {|10 , |11 }. To see what happens when such a device measures an arbitrary

two-qubit state |ψ = a00|00 + a01|01 + a10|10 + a11|11 , we write |ψ = c1|ψ1 + c2|ψ2 where |ψ1 = 1/c1(a00|00 + a01|01 ) ∈ S1 and |ψ2 = 1/c2(a10|10 + a11|11 ) ∈ S2, with c1 =

|a00|2 + |a01|2 and c2 = |a10|2 + |a11|2 as the normalization factors. Measurement of |ψ with

this device results in the state |ψ1 with probability |c1|2 = |a00|2 + |a01|2 and the state |ψ2 with

probability |c2|2 = |a10|2 + |a11|2. In particular, when the Bell state |

+

= √1 (|00 + |11 ) is
2

measured, we obtain |00 and |11 with equal probability.

3.4 Quantum Key Distribution Using Entangled States

43

Example 3.3.4 Measurement of the ﬁrst qubit of a two-qubit state in the Hadamard basis. A
device that measures the ﬁrst qubit of a two-qubit system with respect to the Hadamard basis
{|+ , |− } has an associated direct sum decomposition V = S1 ⊕ S2, where S1 = |+ ⊗ V2, the two-dimensional subspace spanned by {|+ |0 , |+ |1 }, and S2 = |− ⊗ V2. We write |ψ = a00|00 + a01|01 + a10|10 + a11|11 as |ψ = a1|ψ1 + a2|ψ2 , where

|ψ1 = c1

a00√+ a10 |+ |0 + a01√+ a11 |+ |1

2

2

and

|ψ2 = c2

a00√− a10 |− |0 + a01√− a11 |− |1

2

2

.

We leave it to the reader to calculate c1 and c2 and the probabilities for the two outcomes, and to show that such a measurement on the state | + = √1 (|00 + |11 yields |+ |+ and |− |−
2
with equal probability.

3.4 Quantum Key Distribution Using Entangled States
In 1991, Artur Ekert developed a quantum key distribution scheme that makes use of special properties of entangled states. The Ekert 91 protocol resembles the BB84 protocol of section 2.4 in some ways. In his protocol, Alice and Bob establish a shared key by separately performing random measurements on their halves of an EPR pair and then comparing which bases they used over a classical channel.
Because Alice and Bob do not exchange quantum states during the protocol, and an eavesdropper Eve cannot learn anything useful by listening in on the classical exchange alone, Eve’s only chance to obtain information about the key is for her to interact with the purported EPR pair as it is being created or transmitted in the setup for the protocol. For this reason it is easier to prove the security of protocols based on entangled states. Such proofs have then been modiﬁed to prove the security of o-
ther QKD protocols like BB84. As with BB84, we describe only the protocol; tools developed in later chapters are needed to describe many of Eve’s possible attacks and to give a proof of security. Exercise 3.15 analyzes the limited effectiveness of some simple attacks Eve could make.
The protocol begins with the creation of a sequence of pairs of qubits, all in the entangled state | + = √1 (|00 + |11 . Alice receives the ﬁrst qubit of each pair, while Bob receives the second.
2
When they wish to create a secret key, for each qubit they both independently and randomly choose either the standard basis {|0 , |1 } or the Hadamard basis {|+ , |− } in which to measure, just as in the BB84 protocol. After they have made their measurements, they compare bases and discard those bits for which their bases differ.

44

3 Multiple-Qubit Systems

If Alice measures the ﬁrst qubit in the standard basis and obtains |0 , then the entire state becomes |00 . If Bob now measures in the standard basis, he obtains the result |0 with certainty. If instead he measures in the Hadamard basis {|+ , |− }, he obtains |+ and |− with equal probability, since |00 = |0 ( √1 (|+ + |− )). Just as in the BB84 protocol, he interprets the
2
states |+ and |− as corresponding to the classical bit values 0 and 1 respectively; thus when he measures in the basis {|+ |− } and Alice measures in the standard basis, he obtains the same bit value as Alice only half the time. The behavior is similar when Alice’s measurement indicates her qubit is in state |1 . If instead Alice measures in the Hadamard basis and obtains the result that her qubit is in the state |+ , the whole state becomes |+ |+ . If Bob now measures in the Hadamard basis, he ob-
tains |+ with certainty, whereas if he measures in the standard basis he obtains |0 and |1 with equal probability. Since they always get the same bit value if they measure in the same basis, the protocol results in a shared random key, as long as the initial pairs were EPR pairs. The security of the scheme relies on adding steps to the protocol we have just described that enable Alice and Bob to test the ﬁdelity of their EPR pairs. We are not yet in a position to describe such tests. The tests Eke-
rt suggested are based on Bell’s inequalities (section 4.4.3). Other, more efﬁcient tests have been devised.
This protocol has the intriguing property that in theory Alice and Bob can prepare shared keys as they need them, never needing to store keys for any length of time. In practice, to prepare keys on an as-needed basis in this way, Alice and Bob would need to be able to store their EPR pairs so that they are not corrupted during that time. The capability of long-term reliable storage of entangled states does not exist at present.
3.5 References
In the early 1980s, Richard Feynman and Yuri Manin separately recognized that certain quantum phenomena associated with entangled particles could not be simulated efﬁciently on standard computers. Turning this observation around caused them to speculate whether these quantum phenomena could be used to speed up computation in general. Their early musings on quantum computation can be found in [121], [150], [202], and [203].
More extensive treatments of the tensor product can be found in Arno Bohm’s Quantum Mechanics [53], Paul Bamberg and Shlomo Sternberg’s A Course in Mathematics for Students of Physics [30], and Thomas Hungerford’s Algebra [158].
Ekert’s key distribution protocol based on EPR pairs, originally proposed in [111], has been demonstrated in the laboratory [163, 294]. Gisin et al. [130] provide a detailed survey of work on quantum key distribution including Ekert’s algorithm.
3.6 Exercises
Exercise 3.1. Let V be a vector space with basis {(1, 0, 0), (0, 1, 0), (0, 0, 1)}. Give two different bases for V ⊗ V .

3.6 Exercises

45

Exercise 3.2. Show by example that a linear combination of entangled states is not necessarily entangled.

Exercise 3.3. Show that the state

|Wn

= √1 (|0 . . . 001 n

+ |0 . . . 010

+ |0 . . . 100

+ · · · + |1 . . . 000 )

is entangled, with respect to the decomposition into the n qubits, for every n > 1.

Exercise 3.4. Show that the state

|GH Zn = √1 (|00 . . . 0 + |11 . . . 1 ) 2

is entangled, with respect to the decomposition into the n qubits, for every n > 1. Exercise 3.5. Is the state √1 (|0 |+ + |1 |− ) entangled?
2
Exercise 3.6. If someone asks you whether the state |+ is entangled, what will you say?

Exercise 3.7. Write the following states in terms of the Bell basis. a. |00 b. |+ |− c. √1 (|00 + |01 + |10 )
3

Exercise 3.8.

a. Show that √1 (|0 |0 + |1 |1 ) and √1 (|+ |+ + |− |− ) refer to the same quantum state.

2

2

b. Show that √1 (|0 |0 − |1 |1 ) refers to the same state as √1 (|i |i + |−i |−i ).

2

2

Exercise 3.9. a. Show that any n-qubit quantum state can be represented by a vector of the form

a0|0 . . . 00 + a1|0 . . . 01 + · · · + a2n−1|1 . . . 11

where the ﬁrst non-zero ai is real and non-negative. b. Show that this representation is unique in the sense that any two different vectors of this form represent different quantum states.

Exercise 3.10. Show that for any orthonormal basis B = {|β1 , |β2 , . . . , |βn } and vectors |v = a1|β1 + a2|β2 + · · · + an|βn and |w = c1|β1 + c2|β2 + · · · + cn|βn
a. the inner product of |v and |w is c¯1a1 + c¯2a2 + · · · + c¯2a2, and
b. the length squared of |v is ||v |2 = v|v = |a1|2 + |a2|2 + · · · + |an|2.
Write all steps in Dirac’s bra/ket notation.

46

3 Multiple-Qubit Systems

Exercise 3.11. Let |ψ be an n-qubit state. Show that the sum of the distances from |ψ to the standard basis vectors |j is bounded below by a positive constant that depends only on n,
||ψ − |j | ≥ C,
j

where |v| indicates the length of the enclosed vector. Specify such a constant C in terms of n.

Exercise 3.12. Give an example of a two-qubit state that is a superposition with respect to the standard basis but that is not entangled.

Exercise 3.13.

a. Show that the four-qubit state |ψ

=

1 2

(|00

+ |11

+ |22

+ |33

) of example 3.2.3 is entangled

with respect to the decomposition into two two-qubit subsystems consisting of the ﬁrst and second

qubits and the third and fourth qubits.

b. For the four decompositions into two subsystems consisting of one and three qubits, say whether |ψ is entangled or unentangled with respect to each of these decompositions.

Exercise 3.14.
a. For the standard basis, the Hadamard basis, and the basis B = { √1 (|0 + i|1 , |0 − i|1 },
2
determine the probability of each outcome when the second qubit of a two-qubit system in the state |00 is measured in each of the bases.
b. Determine the probability of each outcome when the second qubit of the state |00 is ﬁrst measured in the Hadamard basis and then in the basis B of part a).
c. Determine the probability of each outcome when the second qubit of the state |00 is ﬁrst measured in the Hadamard basis and then in the standard basis.

Exercise 3.15. This exercise analyzes the effectiveness of some simple attacks an eavesdropper Eve could make on Ekert’s entangled state based QKD protocol.
a. Say Eve can measure Bob’s half of each of the EPR pairs before it reaches him. Say she always measures in the standard basis. Describe a method by which Alice and Bob can determine that there is only a 2−s chance that this sort of interference by Eve has gone undetected. What happens if Eve instead measures each qubit randomly in either the standard basis of the Hadamard basis? What happens if she uniformly at random chooses a basis from all possible bases?
b. Say Eve can pose as the entity sending the purported EPR pairs. Say instead of sending EPR pairs she sends a random mixture of qubit pairs in the states |00 , |11 , |+ |+ , and |− |− . After Alice and Bob perform the protocol of section 3.4, on how many bits on average do their purported shared secret keys agree? On average, how many of these bits does Eve know?

4 Measurement of Multiple-Qubit States

The nonclassical behavior of quantum measurement is critical to quantum information processing applications. This chapter develops the standard formalism used for measurement of multiplequbit systems, and uses this formalism to describe the highly nonclassical behavior of entangled states under measurement. In particular, it discusses the EPR paradox and Bell’s theorem, which illustrate the nonclassical nature of these states. Section 4.1 extends the Dirac bra/ket notation to linear transformation-
s. It will be used in this chapter to describe measurements, and in chapter 5 to describe quantum transformations acting on quantum systems. Section 4.2 slowly introduces some of the notation and standard formalism for quantum measurement. Section 4.3 uses this material to give a full description of the standard formalism. Both sections contain a myriad of examples. The chapter concludes with a detailed discussion in section 4.4 of the behavior under measurement of the most famous of entangled sta-
tes, EPR pairs.

4.1 Dirac’s Bra/Ket Notation for Linear Transformations

Dirac’s bra/ket notation provides a convenient way of specifying linear transformations on quantum states. Recall from section 2.2 that the conjugate transpose of the vector denoted by ket |ψ is denoted by bra ψ|, and the inner product of vectors |ψ and |φ is given by ψ|φ . The notation |x y| represents the outer product of the vectors |x and |y . Matrix multiplication is associative, and scalars commute with everything, so relations such as the following hold:

(|a b|)|c = |a ( b||c )

= ( b|c )|a .

Let V be a vector space associated with a single-qubit system. The matrix for the operator |0 0| with respect to the standard basis in the standard order {|0 , |1 } is

|0 0| = 1 1 0 = 1 0 .

0

00

48

4 Measurement of Multiple-Qubit States

The notation |0 1| represents the linear transformation that maps |1 to |0 and |0 to the null vector, a relationship suggested by the notation: (|0 1|)|1 = |0 ( 1|1 ) = |0 (1) = |0 ,
(|0 1|)|0 = |0 ( 1|0 ) = |0 (0) = 0.

Similarly

|1 0| =

00 10

,

|1 1| =

00 01

.

Thus, all two-dimensional linear transformations on V can be written in Dirac’s notation:

a b = a|0 0| + b|0 1| + c|1 0| + d|1 1|. cd

Example 4.1.1 The linear transformation that exchanges |0 and |1 is given by
X = |0 1| + |1 0|.
We will also use notation
X : |0 → |1 |1 → |0 ,
which speciﬁes a linear transformation in terms of its effect on the basis vectors. The transformation X = |0 1| + |1 0| can also be represented by the matrix
01 10
with respect to the standard basis.

Example 4.1.2 The transformation that exchanges the basis vectors |00 and |10 and leaves the

others alone is written |10 00| + |00 10| + |11 11| + |01 01| and has matrix representation

⎛

⎞

0010

⎜⎜⎝

0 1

1 0

0 0

0 0

⎟⎟⎠

0001

in the standard basis.

4.2 Projection Operators for Measurement

49

An operator on an n-qubit system that maps the basis vector |j to |i and all other standard basis elements to 0 can be written

O = |i j |

in the standard basis; the matrix for O has a single non-zero entry 1 in the ij th place. A general operator O with entries aij in the standard basis can be written

O=

aij |i j |.

ij

Similarly, the ij th entry of the matrix for O in the standard basis is given by i|O|j .

As an example of working with this notation, we write out the result of applying operator O to

a vector |ψ = k bk|k :

⎛

⎞

O|ψ = ⎝

aij |i j |⎠

bk|k =

aij bk|i j ||k

ij

k

ijk

=

aij bj |i .

ij

More generally, if {|βi } is a basis for an N -dimensional vector space V , then an operator O : V → V can be written as

NN
bij |βi βj |
i=1 j =1

with respect to this basis. In particular, the matrix for O with respect to basis {|βi } has entries Oij = bij .
Initially the vector/matrix notation may be easier for the reader to comprehend because it is more familiar, and sometimes this notation is convenient for performing calculations. But it requires choosing a basis and an ordering of that basis. The bra/ket notation is independent of the basis and the order of the basis elements. It is also more compact, and it suggests correct relationships, as we saw for the outer product, so that once it becomes familiar, it is easier to read.

4.2 Projection Operators for Measurement

Section 2.3 described measurement of a single qubit in terms of projection onto a basis vector
associated with the measurement device. This notion generalizes to measurement in multiple-qubit systems. For any subspace S of V , the subspace S⊥ consists of all vectors that are perpendicular to all vectors in S. The subspaces S and S⊥ satisfy V = S ⊕ S⊥; thus, any vector |v ∈ V can be written uniquely as the sum of a vector s1 ∈ S and a vector s2 ∈ S⊥. For any S, the projection operator PS is the linear operator PS : V → S that sends |v → s1 where |v = s1 + s2 with

50

4 Measurement of Multiple-Qubit States

s1 ∈ S1 and s2 ∈ S2. We use the notation si because s1 and s2 are generally not unit vectors. The operator |ψ ψ| is the projection operator onto the subspace spanned by |ψ . Projection operators are sometimes called projectors for short. For any direct sum decomposition of V = S1 ⊕ · · · ⊕ Sk into orthogonal subspaces Si there are k related projection operators Pi : V → Si where Pi|v = si where |v = s1 + · · · + sk with si ∈ Si. In this terminology, a measuring device with associated decomposition-
 V = S1 ⊕ · · · ⊕ Sk acting on a state |ψ results in the state

|φ

=

Pi |ψ
|Pi |ψ

|

with probability |Pi|ψ |2.

Example 4.2.1 The projector |0 0| acts on a single-qubit state |ψ and obtains the component of |ψ in the subspace generated by |0 . Let |ψ = a|0 + b|1 . Then (|0 0|)|ψ = a 0|0 |0 + b 0|1 |0 = a|0 .
The projector |1 |0 1| 0| acts on two-qubit states. Let
|φ = a00|00 + a01|01 + a10|10 + a11|11 .
Then
(|1 |0 1| 0|) |φ = a10|1 |0 .
Let PS be the projection operator from an n-dimensional vector space V onto an s-dimensional subspace S with basis {|α0 , . . . , |αs−1 }. Then
s−1
PS = |αi αi | = |α0 α0| + · · · + |αs−1 αs−1|.
i=1

Example 4.2.2 Let |ψ = a00|00 + a01|01 + a10|10 + a11|11 represent a state of a twoqubit system with associated vector space V . Let S1 be the subspace spanned by |00 , |01 . The operator PS = |00 00| + |01 01| is the projection operator that sends |ψ to the (nonnormalized) vector a00|00 + a01|01 .
Let V and W be two vector spaces with inner product. The adjoint operator or conjugate transpose O† : V → W of an operator O : W → V is deﬁned to be the operator that satisﬁes the following inner product relation. For any v ∈ V and Ow ∈ W , the inner product between O†v and w is the same as the inner product between v and Ow:
O†v · w = v · Ow.
The matrix for the adjoint operator O† of O is obtained by taking the complex conjugate of all entries and then the transpose of the matrix for O, where we are assuming consistent use of bases

4.2 Projection Operators for Measurement

51

for V and W . Recall from section 2.2 that x| is the conjugate transpose of |x . The reader can check that (A|x )† = x|A†. In bra/ket notation, the relation between the inner product of O†|x and |w and the inner product of |x and O|w is reﬂected in the notation:
( x|O)|w = x|(O|w ) = x|O|w .
The deﬁnition of a projection operator P implies that applying a projection operator many times in succession has the same effect as just applying it once: P P = P . Furthermore, any projection operator is its own adjoint: P = P †. Thus
|P |v |2 = ( v|P †)(P |v ) = v|P |v
for any projection operator P and all |v ∈ V . To solidify our understanding of projection operators and Dirac’s notation, let us describe
single-qubit measurement in the standard basis in terms of this formalism.

Example 4.2.3 Formal treatment of single-qubit measurement in the standard basis. Let V be

the vector space associated with a single-qubit system. The direct sum decomposition for V asso-

ciated with measurement in the standard basis is V = S ⊕ S , where S is the subspace generated

by |0 and S is the subspace generated by |1 . The related projection operators are P : V → S

and P : V → S , where P = |0 0| and P = |1 1|. Measurement of the state |ψ = a|0 + b|1

results

in the state

P |ψ
|P |ψ

|

with probability |P |ψ

|2. Since

P |ψ = (|0 0|)|ψ = |0 0|ψ = a|0

and

|P |ψ |2 = ψ|P |ψ = ψ|(|0 0|)|ψ = ψ|0 0|ψ = aa = |a|2,

the

result

of

the

measurement

is

a|0 |a|

with probability |a|2. Since by section 2.5 an overall phase

factor is physically meaningless, the state represented by |0 has been obtained with probability

|a|2. A similar calculation shows that the state represented by |1 is obtained with probability |b|2.

Before giving examples of more interesting measurements, we describe measurement of a two-qubit state with respect to the full decomposition associated with the standard basis.

Example 4.2.4 Measuring a two-qubit state with respect to the full standard basis decom-

position. Let V be the vector space associated with a two-qubit system and |φ = a00|00 +

a01|01 + a10|10 + a11|11 an arbitrary two-qubit state. Consider a measurement with decompo-

sition V = S00 ⊕ S01 ⊕ S10 ⊕ S11, where Sij is the one-dimensional complex subspace spanned

by |ij . The related projection operators Pij : V → Sij are P00 = |00 00|, P01 = |01 01|,

P10 = |10

10|, and P11 = |11

11|.

The

state

after

measurement

will

be

Pij |ψ
|Pij |ψ

|

with

probability

52

4 Measurement of Multiple-Qubit States

|Pij |ψ |2. Recall from sections 2.5.1 and 3.1.3 that two unit vectors |v and |w represent the
same quantum state if |v = eiθ |w for some θ , and that |v ∼ |w indicates that |v and |w
represent the same quantum state. The state after measurement is either

P00|ψ
|P00|ψ

|

=

a00|00 |a00|

∼ |00

with probability ψ|P00|ψ = |a00|2, or |01 with probability |a01|2, or |10 with probability |a10|2, or |11 with probability |a11|2.

To develop ﬂuency with this material, the reader may now want to rewrite, using this notation, the examples of section 3.3.
More interesting are measurements that give information about the relations between qubit values without giving any information about the qubit values themselves. For example, we can measure two qubits for bit equality without determining the actual value of the bits. Such measurements will be used heavily in quantum error correction schemes.

Example 4.2.5 Measuring a two-qubit state for bit equality in the standard basis. Let V be

the vector space associated with a two-qubit system. Consider a measurement with associated

direct sum decomposition V = S1 ⊕ S2, where S1 is the subspace generated by {|00 , |11 }, the

subspace in which the two bits are equal, and S2 is the subspace generated by {|10 , |01 }, the

subspace in which the two bits are not equal. Let P1 and P2 be the projection operators onto S1 and

S2 respectively. When a system in state |ψ = a00|00 + a01|01 + a10|10 + a11|11 is measured

in this way, with probability |Pi|ψ

|2 =

ψ |Pi |ψ

,

the

state

after

measurement

becomes

Pi |ψ
|Pi |ψ

|.

Let c1 = ψ|P1|ψ = |a00|2 + |a11|2 and c2 = ψ|Pw|ψ = |a01|2 + |a10|2. After measure-

ment the state will be |u

=

1 c1

(a00

|00

+ a11|11 ) with probability |c1|2 = |a00|2 + |a11|2 and

|v

=

1 c2

(a01|01

+ a10|10 ) with probability |c2|2 = |a01|2 + |a10|2. If the ﬁrst outcome happens,

then we know that the two bit values are equal, but we do not know whether they are 0 or 1. If the

second case happens, we know that the two bit values are not equal, but we do not know which

one is 0 and which one is 1. Thus, the measurement does not determine the value of the two bits,

only whether the two bits are equal.

As in the case of single-qubit states, most states are a superposition with respect to a measurement’s subspace decomposition. In the previous example, a state that is a superposition containing components with both equal and unequal bit values is transformed by measurement either to a state (generally still a superposition of standard basis elements), in which in all components the bit values are equal, or to a state in which the bit values are not equal in all of the components.

4.3 Hermitian Operator Formalism for Measurement

53

Before further developing the formalism used to describe quantum measurement, we give an additional example, one in which the associated subspaces are not generated by subsets of the standard basis elements.

Example 4.2.6 Measuring a two-qubit state with respect to the Bell basis decomposition. Recall

from section 3.2 the four Bell states | + = √1 (|00 + |11 ), | − = √1 (|00 − |11 ), | + =

2

2

√1 (|01 + |10 ), and | − = √1 (|01 − |10 ). Let V = S + ⊕ S − ⊕ S + ⊕ S − be the direct

2

2

sum decomposition into the subspaces generated by the Bell states. Measurement of the state |00

with respect to this decomposition yields | + with probability 1/2 and | − with probability 1/2,

because |00 = √1 (| + + | − ). The reader can determine the outcomes and their probabilities
2
for the three other standard basis elements, and a general two-qubit state.

The next section continues developing the standard formalism used throughout the quantum mechanics literature to describe quantum measurement.
4.3 Hermitian Operator Formalism for Measurement
Instead of explicitly writing out the subspace decomposition associated with a measurement, including the deﬁnition of each subspace of the decomposition in terms of a generating set, a mathematical shorthand is used. Certain operators, called Hermitian operators, deﬁne a unique orthogonal subspace decomposition, their eigenspace decomposition. Moreover, for every such decomposition, there exists a Hermitian operator whose eigenspace decomposition is this decomposition. Given this correspondence, -
Hermitian operators can be used to describe measurements. We begin by reminding our readers of deﬁnitions and facts about eigenspaces and Hermitian operators.
Let O : V → V be a linear operator. Recall from linear algebra that if Ov = λv for some non-zero vector v ∈ V , then λ is an eigenvalue and v is a λ-eigenvector of O. If both v and w are λ-eigenvectors of O, then v + w is also a λ-eigenvector, so the set of all λ-eigenvectors forms a subspace of V called the λ-eigenspace of O. For an operator with a diagonal matrix representation, the eigenvalues are simply the values along the diagonal.
An operator O : V → V is Hermitian if it is equal to its adjoint, O† = O. The eigenspaces of Hermitian operators have special properties. Suppose λ is an eigenvalue of an Hermitian operator O with eigenvector |x . Since
λ x|x = x|λ|x = xλ|(O|xλ ) = ( x|O†)|x = λ¯ x|x ,
λ = λ¯ , which means that all eigenvalues of a Hermitian operator are real. To give the connection between Hermitian operators and orthogonal subspace decomposi-
tions, we need to show that the eigenspaces Sλ1 , Sλ2 , . . . , Sλk of a Hermitian operator are orthogonal and satisfy Sλ1 ⊕ Sλ2 ⊕ · · · ⊕ Sλk = V . For any operator, two distinct eigenvalues

54

4 Measurement of Multiple-Qubit States

have disjoint eigenspaces since, for any unit vector |x , O|x = λ0|x and O|x = λ1|x imply (λ0 − λ1)|x = 0, which implies that λ0 = λ1. For any Hermitian operator, the eigenvectors for distinct eigenvalues must be orthogonal. Suppose |v is a λ-eigenvector and |w is a μ-eigenvector with λ = μ. Then

λ v|w = ( v|O†)|w = v|(O|w ) = μ v|w .

Since λ and μ are distinct eigenvalues, v|w = 0. Thus, Sλi and Sλj are orthogonal for λi = λj . Exercise 4.16 shows that the direct sum of all of the eigenspaces for a Hermitian operator O : V → V is the whole space V .

Let V be an N -dimensional vector space, and let λ1, λ2, . . . , λk be the k ≤ N distinct eigen-
values of an Hermitian operator O : V → V . We have just shown that V = Sλ1 ⊕ · · · ⊕ Sλk , where Sλi is the eigenspace of O with eigenvalue λi. This direct sum decomposition of V is called the eigenspace decomposition of V for the Hermitian operator O. Thus, any Hermitian operator O :

V → V uniquely determines a subspace decomposition for V . Furthermore, any decomposition

of a vector space V into the direct sum of subspaces S1, . . . , Sk can be realized as the eigenspace

decomposition of a Hermitian operator O : V → V : let Pi be the projectors onto the subspaces

Si, and let λ1, λ2, . . . , λk be any set of distinct real values; then O =

k i=1

λi Pi

is

a

Hermitian

operator with the desired direct sum decomposition. Thus, when describing a measurement,

instead of directly specifying the associated subspace decomposition, we can specify a Hermitian

operator whose eigenspace decomposition is that decomposition.

Any Hermitian operator with the appropriate direct sum decomposition can be used to specify

a given measurement; in particular, the values of the λi are irrelevant as long as they are distinct.

The λi should be thought of simply as labels for the corresponding subspaces, or equivalently as labels for the measurement outcomes. In quantum physics, these labels are often chosen to

represent a shared property, such as the energy, of the eigenstates in the corresponding eigenspace.

For our purposes, we do not need to assign labels with meaning; any distinct set of eigenvalues

will do.

Specifying a measurement in terms of a Hermitian operator is standard practice throughout the

quantum-mechanics and quantum-information-processing literature. It is important to recognize,

however, that quantum measurement is not modeled by the action of a Hermitian operator on

a state. The projectors Pj associated with a Hermitian operator O, not O itself, act on a state. Which projector acts on the state depends on the probabilities pj = ψ|Pj |ψ . For example, the result of measuring |ψ = a|0 + b|1 according to the Hermitian operator Z = |0 0| − |1 1|

does not result in the state a|0 − b|1 , even though

10 0 −1

a b

=

a −b

.

Direct multiplication by a Hermitian operator generally does not even result in a well-deﬁned state; for example,

4.3 Hermitian Operator Formalism for Measurement

55

0 0 |0 = 0 0

01

01

1 = 0.

0

0

The Hermitian operator is only a convenient bookkeeping trick, a concise way of specifying the subspace decomposition associated with the measurement.

4.3.1 The Measurement Postulate Many aspects of our model of quantum mechanics are not directly observable by experiment. For example, as we saw in section 2.3, given a single instance of an unknown single-qubit state a|0 + b|1 , there is no way to determine experimentally what state it is in; we cannot directly observe the quantum state. It is only the results of measurements that we can directly observe. For this reason, the Hermitian operators we use to specify measurements are called observabl-
es.
The measurement postulate of quantum mechanics states that:
• Any quantum measurement can be speciﬁed by a Hermitian operator O called an observable.
• The possible outcomes of measuring a state |ψ with an observable O are labeled by the eigenvalues of O. Measurement of state |ψ results in the outcome labeled by the eigenvalue λi
of O with probability |Pi|ψ |2 where Pi is the projector onto the λi-eigenspace. • (Projection) The state after measurement is the normalized projection Pi|ψ /|Pi|ψ | of |ψ
onto the λi-eigenspace Si. Thus the state after measurement is a unit length eigenvector of O with eigenvalue λi.
We should make clear that what we have described here is a mathematical formalism for measurement. It does not tell us what measurements can be done in practice, or with what efﬁciency. Some measurements that may be mathematically simple to state may not be easy to implement. Furthermore, the eigenvalues of physically realizable measurements may have meaning—for example, as the position or energy of a particle—but for us the eigenvalues are just arbitrary labels.
While a Hermitian operator uniquely speciﬁes a subspace decomposition, for a given subspace decomposition there are many Hermitian operators whose eigenspace decomposition is that decomposition. In particular, since the eigenvalues are simply labels for the subspaces or possible outcomes, the speciﬁc values of the eigenvalues are irrelevant; it matters only which ones are distinct. For example, measuring with the Hermitian operator |0 0| − |1 1| results in the same states with the same probabiliti-
es as measuring with 100|0 0| − 100|1 1|, but these outcomes do not agree with the outcomes of the trivial measurement corresponding to the Hermitian operator |0 0| + |1 1| or 42|0 0| + 42|1 1|.

Example 4.3.1 Hermitian operator formalism for measurement of a single qubit in the standard basis. Using the description in example 4.2.3 of measurement of a single-qubit system in the standard basis, let us build up a Hermitian operator that speciﬁes this measurement. The subspace

56

4 Measurement of Multiple-Qubit States

decomposition corresponding to this measurement is V = S ⊕ S , where S is the subspace generated by |0 and S is generated by |1 . The projectors associated with S and S are P = |0 0| and P = |1 1| respectively. Let λ and λ be any two distinct real values, say λ = 2 and λ = −3. Then the operator

O = 2|0 0| − 3|1 1| =

20 0 −3

is a Hermitian operator specifying the measurement of a single-qubit state in the standard

basis.

Any other distinct values for λ and λ could have been used. We will generally use either

|1 1| =

00 01

or

Z = |0 0| − |1 1| =

10 0 −1

to specify single-qubit measurements in the standard basis.

Example 4.3.2 Hermitian operator formalism for measurement of a single qubit in the Hadamard

basis. We wish to construct a Hermitian operator corresponding to measurement of a single qubit

in the Hadamard basis {|+ , |− }. The subspaces under consideration are S+, generated by |+ ,

and S−, generated by |− , with associated projectors P+ = |+

+|

=

1 2

(|0

0| + |0

1| + |1

0| +

|1

1|) and P− = |−

−|

=

1 2

(|0

0| − |0

1| − |1

0| + |1

1|). We are free to choose λ+ and λ−

any way we like as long as they are distinct. If we take λ+ = 1 and λ− = −1, then

X = |0 1| + |1 0| = 0 1 10

is a Hermitian operator for single-qubit measurement in the Hadamard basis.

Example 4.3.3 The Hermitian operator A = |01 01| + 2|10 10| + 3|11 11| has matrix repre-

sentation

⎛

⎞

0000

⎜⎜⎝

0 0

1 0

0 2

0 0

⎟⎟⎠

0003

with respect to the standard basis in the standard order {|00 , |01 , |10 , |11 }. The eigenspace decomposition for A consists of four subspaces, each generated by one of the standard basis

4.3 Hermitian Operator Formalism for Measurement

57

vectors |00 , |01 , |10 , |11 . The operator A is one of many Hermitian operators that specify measurement with respect to the full standard basis decomposition described in example 4.2.4. The Hermitian operator A = 73|00 00| + 50|01 01| − 3|10 10| + 23|11 11| is another.

Example 4.3.4 The Hermitian operator

⎛

⎞

10 0 0

B = |00

00| + |01

01| + π(|10

10| + |11

11|) = ⎜⎜⎝

0 0

1 0

0 π

0 0

⎟⎟⎠

00 0 π

speciﬁes measurement of a two-qubit system with respect to the subspace decomposition V = S0 ⊕ S1, where S0 is generated by {|00 , |01 } and S1 is generated by {|10 , |11 }, so B speciﬁes measurement of the ﬁrst qubit in the standard basis as described in example 3.3.3.

Example 4.3.5 The Hermitian operator

⎛

⎞

2000

C = 2(|00

00| + |11

11|) + 3(|01

01| + |10

10|) = ⎜⎜⎝

0 0

3 0

0 3

0 0

⎟⎟⎠

0002

speciﬁes measurement with respect to the subspace decomposition V = S2 ⊕ S3, where S2 is generated by {|00 , |11 } and S3 is generated by {|01 , |10 }, so C speciﬁes the measurement for bit equality described in example 4.2.5.

Given the subspace decomposition for a Hermitian operator O, it is possible to ﬁnd an orthonormal eigenbasis of V for O. If O has n distinct eigenvalues, as in the general case, the eigenbasis is unique up to length one complex factors. If O has fewer than n eigenvalues, some of the eigenvalues are associated with an eigenspace of more than one dimension. In this case, a random orthonormal basis can be chosen for each eigenspace Si. The matrix for the Hermitian operator O with respect to any of th-
ese eigenbases is diagonal.
Any Hermitian operator O with eigenvalues λj can be written as O = j λj Pj , where Pj are the projectors for the λj -eigenspaces of O. Every projector is Hermitian with eigenvalues 1 and 0 where the 1-eigenspace is the image of the operator. For an m-dimensional subspace S of V spanned by the basis {|i1 , . . . , |im }, the associated projector
m
PS = |ij ij |
j =1

58

4 Measurement of Multiple-Qubit States

maps vectors in V into S. If PS and PT are projectors for orthogonal subspaces S and T , the projector for the direct sum S ⊕ T is PS + PT . If P is a projector onto subspace S then tr(P ), the sum of the diagonal elements of any matrix representing P , is the dimension of S. This argument applies to any basis since the trace is basis independent. Box 10.1 describes this and other properties of the trace.
Given linear operators A and B on vector spaces V and W respectively, the tensor product A ⊗ B acts on elements v ⊗ w of the tensor product space V ⊗ W as follows:

(A ⊗ B)(v ⊗ w) = Av ⊗ Bw.

It follows from this deﬁnition that

(A ⊗ B)(C ⊗ D) = AC ⊗ BD.

Let O0 and O1 be Hermitian operators on spaces V0 and V1 respectively. Then O0 ⊗ O1 is a Hermitian operator on the space V0 ⊗ V1. Furthermore, if Oi has eigenvalues λij with associated eigenspaces Sij , then O0 ⊗ O1 has eigenvalues λjk = λ0j λ1k. If an eigenvalue λjk = λ0j λ1k is unique, then its associated eigenspace Sjk is the tensor product of S0j and S1k. In general, the eigenvalues λjk need not be distinct. An eigenvalue λ of O0 ⊗ O1 that is the product of eigenvalues of O0 and O1 in multiple-
 ways, λi = λj1k1 = · · · = λjmkm , has eigenspace S = (S0j1 ⊗ S1k1 ) ⊕ · · · ⊕ (S0jm ⊗ S1km ).
Most Hermitian operators O on V0 ⊗ V1 cannot be written as a tensor product of two Hermitian
operators O1 and O2 acting on V0 and V1 respectively. Such a decomposition is possible only if each subspace in the subspace decomposition described by O can be written as S = S0 ⊗ S1 for
S0 and S1 in the subspace decompositions associated to O1 and O2 respectively. While for most
Hermitian operators this condition does not hold, it does hold for all of the observables we have
described so far. For example,

10 0 −1

⊗

20 03

= (|0 0| − |1 1|) ⊗ (2|0 0| + 3|1 1|)

= 2|00 00| + 3|01 01| − 2|10 10| − 3|11 11|

speciﬁes the full measurement in the standard basis, but with a different Hermitian operator from the one used in example 4.3.3. The operator

1 0 ⊗ I = |00 00| + |01 01| + π(|10 10| + |11 11|) 0π

speciﬁes measurement of the ﬁrst qubit in the standard basis as described in example 4.3.4, as does Z ⊗ I , where Z = |0 0| − |1 1|. The Hermitian operator

Z ⊗ Z = |00 00| − |01 01| − |10 10| + |11 11|

4.3 Hermitian Operator Formalism for Measurement

59

speciﬁes the measurement for bit equality described in example 4.3.5. We now give an example of a two-qubit measurement that cannot be expressed as the tensor product of two single-qubit measurements.

Example 4.3.6 Not all measurements are tensor products of single-qubit measurements. Consider

a two-qubit state. The observable M with matrix representation

⎛

⎞

0000

M

= ⎜⎜⎝

0 0

0 0

0 0

0 0

⎟⎟⎠

0001

determines whether both bits are set to one. Measurement with the operator M results in a state contained in one of the two subspaces S0 and S1, where S1 is the subspace spanned by {|11 } and S0 is spanned by {|00 , |01 , |10 }.
Measuring with M is quite different from measuring both qubits in the√standard basis and then performing the classical and operation. For instance, the state |ψ = 1/ 2(|01 + |10 ) remains unchanged when measured with M, but measuring both qubits of |ψ would result in either the state |01 or |10 .

Any Hermitian operator Q1 ⊗ Q2 on a two-qubit system is said to be composed of single-qubit measurements if Q1 and Q2 are Hermitian operators on the single-qubit systems. Furthermore, any Hermitian operator of the form Q ⊗ I or I ⊗ Q on a two-qubit system is said to be a measurement on a single qubit of the system. More generally, a Hermitian operator of the form
I ⊗···⊗I ⊗Q⊗I ⊗···⊗I
on an n-qubit system is said to be a single-qubit measurement of the system. Any Hermitian operator of the form A ⊗ I on a system V ⊗ W , where A is a Hermitian operator acting on V is said to be a measurement of subsystem V .
Section 5.1 shows that measurement operators in the standard basis, when combined with quantum state transformations, are sufﬁcient to perform arbitrary quantum measurements. In particular, there are quantum operations taking any basis to any other, so we can get all possible subspace decompositions of the state space by starting with a subspace decomposition in which all of the subspaces are generated by standard basis vectors and transforming. Understanding the effects of quantum measurement in -
different bases is crucial for a thorough understanding of entangled states and quantum information processing generally. Sections 2.4 and 3.4 illustrate the power of measuring in different bases as a key aspect of these quantum key distribution schemes. The next section turns to Bell’s theorem, which further illustrates this point while at the same time giving deeper insight into nonclassical properties of entangled states.

60

4 Measurement of Multiple-Qubit States

When talking about measurement of an n-qubit system, there are two totally distinct types of decompositions of the vector space V under consideration: the tensor product decomposition into the n separate qubits and the direct sum decomposition into k ≤ 2n subspaces associated with the measuring device. These decompositions could not be more different. In particular, a tensor component Vi of V = V1 ⊗ · · · ⊗ Vn is not a subspace of V . Similarly, the subspaces associated with measurements do not co-
rrespond to the subsystems, such as individual qubits, of the whole system.
Section 2.3 mentioned that only one classical bit of information can be extracted from a single qubit. We can now both generalize this statement and make it more precise. Since any observable on an n-qubit system has at most 2n distinct eigenvalues, there are at most 2n possible results of a given measurement. Thus, a single measurement of an n-qubit system will reveal at most n bits of classical information. Since, in general, the measurement changes the state, any further measurements give infor-
mation about the new state, not the original one. In particular, if the observable has 2n distinct eigenvalues, measurement sends the state to an eigenvector, and further measurement cannot extract any additional information about the original state.
4.4 EPR Paradox and Bell’s Theorem
In 1935, Albert Einstein, Boris Podolsky, and Nathan Rosen wrote a paper entitled “Can quantummechanical description of physical reality be considered complete?”. The paper contained a thought experiment that inspired the simpler thought experiment, due to David Bohm, that we describe here. The experiment involves a pair of photons in the state √1 (|00 + |11 ). Pairs of
2
particles in such a state are called EPR pairs in honor of Einstein, Podolsky, and Rosen, even though such states did not appear in their paper.
Imagine a source that generates EPR pairs √1 (|00 + |11 ) and sends the ﬁrst particle to Alice
2
and the second to Bob. Alice and Bob can be arbitrarily far apart. Each person can perform measurements only on the particle he or she receives. More precisely, Alice can use only observables of the form O ⊗ I to measure the system, and Bob can use only observables of the form I ⊗ O , where O and O are single-qubit observables.

Alice

EPR source

Bob

As we saw when we analyzed the Ekert91 quantum key distribution protocol in section 3.4, if Alice measures her particle in the standard single-qubit basis, and observes the state |0 , the

4.4 EPR Paradox and Bell’s Theorem

61

effect of this measurement is to project the state of the quantum system onto that part of the state compatible with the results of Alice’s measurement, so the combined state will now be |00 . If Bob now measures his particle, he will always observe |0 . Thus it appears that Alice’s measurement has affected the state of Bob’s particle. Similarly, if Alice measures |1 , so will Bob. By symmetry, if Bob were to measure his qubit ﬁrst, Alice would observe the same result as Bob. When measuring in the-
 standard basis, Alice and Bob will always observe the same results, regardless of the relative timing. The probability that either qubit is measured to be |0 is 1/2, but the two results are always correlated.
If these particles are far enough apart and the measurements happen close in time (more speciﬁcally, if the measurements are relativistically spacelike separated), it may sound as if an interaction between these particles is happening faster than the speed of light. We said earlier that a measurement performed by Alice appears to affect the state of Bob’s particle, but this wording is misleading. Following special relativity, it is incorrect to think of one measurement happening ﬁrst and causing t-
he results of the other; it is possible to set up the EPR scenario so that one observer sees Alice measure ﬁrst, then Bob, while another observer sees Bob measure ﬁrst, then Alice. According to relativity, physics must explain equally well the observations of both observers. While the causal terminology we used cannot be compatible with both observers’ observations, the actual experimental values are invariant under change of observer; the experimental results can be explained equally well by Bob -
measuring ﬁrst and then Alice as the other way around. This symmetry shows while there is correlation between the two particles, Alice and Bob cannot use their EPR pair to communicate faster than the speed of light. All that can be said is that Alice and Bob will observe correlated random behavior.
Even though the results themselves are perfectly compatible with relativity theory, the behavior remains mysterious. If Alice and Bob had a large number of EPR pairs that they measure in sequence, they would see an odd mixture of correlated and probabilistic results: each of their sequences of measurements appear completely random, but if Alice and Bob compare their results, they see that they witnessed the same random sequence from their two separate particles. Their sequence of entangled pairs b-
ehaves like a pair of magic coins that always land the same way up when tossed together, but whether they both land heads or both land tails is completely random. So far, quantum mechanics is not the only theory that can explain these results; they could also be explained by a classical theory that postulates that particles have an internal hidden state that determines the result of the measurement, and that this hidden state is identical in two particles generated at the same time by the EPR sour-
ce, but varies randomly over time as the pairs are generated. According to such a classical theory, the reason we see random instead of deterministic results is simply because we, as of yet, have no way of accessing these hidden states. The hope of proponents of such theories was that eventually physics would advance to a stage in which this hidden state would be known to us. Such theories are known as local hidden-variable theories. The local part comes from the assumption that the hidden variabl-
es are internal to each of the particles and do not depend on external inﬂuences; in particular, the hidden variables do not depend on the state of faraway particles or measuring devices.

62

4 Measurement of Multiple-Qubit States

Is it possible to construct a local hidden-variable theory that agrees with all of the experimental results we use quantum mechanics to model? The answer is “no," but it was not until Bell’s work of 1964 that anyone realized that it was possible to construct experiments that could distinguish quantum mechanics from all local hidden-variable theories. Since then such experiments have been done, and all of the results have agreed with those predicted by quantum mechanics. Thus, no local hidden-varia-
ble theory whatsoever can explain how nature truly works.
Bell showed that any local hidden variable theory predicts results that satisfy an inequality, known as Bell’s inequality. Section 4.4.1 presents the setup. Section 4.4.2 describes the results predicted by quantum theory. Section 4.4.3 establish Bell’s inequality for any local hidden variable theory in a special case. Section 4.4.4 gives Bell’s inequality in full generality.
4.4.1 Setup for Bell’s Theorem Imagine an EPR source that emits pairs of photons whose polarizations are in an entangled state |ψ = √1 (|↑↑ + |→→ ), where we are using the notation |↑ and |→ for photon polarization
2
of section 2.1.2. We suppose that the two photons travel in opposite directions, each toward a polaroid (polarization ﬁlter). These polaroids can be set at three different angles. In the special case we consider ﬁrst, the polaroids can be set to vertical, +60◦ off vertical, and −60◦ off vertical.

EPR source

Alice

Bob

4.4.2 What Quantum Mechanics Predicts
Let Oθ be a single-qubit observable with 1-eigenspace generated by |v = cos θ |0 + sin θ |1 and −1-eigenspace generated by |v⊥ = − sin θ |0 + cos θ |1 . Quantum mechanics predicts
that measurement of |ψ with Oθ1 ⊗ Oθ2 results in a state with eigenvalue 1 with probability cos2(θ1 − θ2). In other words, the probability that the state ends up in the subspace generated by {|v1 |v2 , |v1⊥ |v2⊥ }, and not the −1-eigenspace generated by {|v1 |v2⊥ , |v1⊥ |v2 }, is cos2(θ1 − θ2). Proving this fact is the subject of exercise 4.20. Here we describe its surprising
nonclassical implications. The three different settings for each polaroid, −60◦, vertical, and +60◦, correspond to three
observables, M , M↑, and M , each with two possible outcomes: either the photon passes
through the polaroid, an outcome we will denote with P, or it is absorbed, an outcome we will
denote with A. Using the fact that measurement with observable Oθ1 ⊗ Oθ2 results in a state with eigenvalue 1 with probability cos2(θ1 − θ2), we can compute the probability that measurement
of two photons, by polaroids set at angles θ1 and θ2, give the same result, PP or AA. If both

4.4 EPR Paradox and Bell’s Theorem

63

polaroids are set at the same angle, then both photon measurements give the same results with probability cos2 0 = 1: both photons will pass through the polaroids, or both will be absorbed. When the polaroid on the right is set to vertical, and the one on the left is set to +60◦, both measurements agree with probability cos2 60 = 1/4. Unless the two polaroids are set at the same angle, the difference between the angles is either 60 or 120 degrees, so in all of these cases the two measurements agre-
e 1/4 of the time and disagree 3/4 of the time.
If the polaroids are set randomly for a series of EPR pairs emanating from the source, then
• with probability 1/3 the polaroid orientation will be the same and the measurements will agree, and
• with probability 2/3 the polaroid orientation will differ and the measurements will agree with probability 1/4.
Thus, overall, the measurements will agree half the time and disagree half the time. When such an experiment is performed, these are indeed the probabilities that are seen.
4.4.3 Special Case of Bell’s Theorem: What Any Local Hidden Variable Theory Predicts This section shows that no local hidden-variable theory can give these probabilities. Suppose there is some hidden state associated with each photon that determines the result of measuring the photon with a polaroid in each of the three possible settings. We do not know the nature of such a state, but there are only 23 binary combinations in which these states can respond to measurement by polaroids in the 3 orien-
tations. We label these 8 possibilities h0, . . . , h7.
↑
h0 P P P h1 P P A h2 P A P h3 P A A h4 A P P h5 A P A h6 A A P h7 A A A
We can think of hi as the equivalence class of all hidden states, however these might look, that give the indicated measurement results. Experimentally, it has been established that both polaroids, when set at the same angle, always give the same result when measuring the photons of an EPR pair |ψ . For a local hidden-variable theory to have any chance of modeling experimental results, it must predict that both photons of the entangled pair be in the same equivalence class of hidden states hi. For-
 example, if the photon on the right responds to the three polaroid positions , ↑, with PAP, then so must the photon on the left.
Now consider the 9 possible combinations of orientations of the two polaroids

64

4 Measurement of Multiple-Qubit States

{( , ), ( , ↑), . . . , ( , )}
and the expected agreement of the measurements for photon pairs in each hidden state hi. Measurements on hidden states h0 and h7 ( {PPP, PPP} and {AAA, AAA}) agree for all possible pairs of orientations, giving 100 percent agreement. Measurements of the hidden state h1, {PPA, PPA}, agree in ﬁve of the nine possible orientations and disagree in the others. The other six cases are similar to h1, giving 5/9 agreement and 4/9 disagreement. No matter with what probability distribution the EPR source em-
its photons with hidden states, the expected agreement between the two measurements will be at least 5/9. Thus, no local hidden-variable theory can give the 50–50 agreement predicted by quantum theory and seen in experiments.
4.4.4 Bell’s Inequality Bell’s inequality is an elegant generalization of the preceding argument. The more general setup also has a sequence of EPR pairs emanating from a photon source toward two polaroids, with three possible settings. We now consider polaroids that can be set at any triple of three distinct angles a, b, and c.
If we record the results of repeated measurements at random settings of the polaroids, chosen from the settings above, we can count the number of times that the measurements match for any pair of settings. Let Pxy denote the sum of the observed probability that either
• the two photons interact in the same way with both polaroids (either both pass through, or both are absorbed) when the ﬁrst polaroid is set at angle x and the second at angle y, or
• the two photons interact in the same way with both polaroids when the ﬁrst polaroid is set at angle y and the second at angle x.
Since whenever the two polaroids are on the same setting, the measurement of the photons will always give the same result Pxx = 1 for any setting x. We now show that the inequality,
Pab + Pac + Pbc ≥ 1,
known as Bell’s inequality, holds for any local hidden-variable theory and any sequence of settings for each of the polaroids.
We establish this inequality by showing that the inequality holds for the probabilities associated with any one equivalence class of hidden states, from which we deduce that it holds for any distribution of these equivalence classes. According to any local hidden-variable theory, the result of measuring a photon by a polaroid in each of the three possible settings is determined by a local hidden state h of the photon. Again, we think of h as an equivalence class of all hidden states that give the -
indicated measurement results. The fact that both polaroids, when set at the same angle, always give the same result when measuring the photons in an EPR state |ψ means that both photons of the entangled pair must be in the same equivalence class of hidden states h. For example, if the photon on the right responds to the three polaroid positions a, b, c with PAP, then so must the photon on the left. Let Pxhy be 1 if the result of the two measurements agree on states with hidden variable h, and 0 o-
therwise. Since any measurement has only two possible

4.5 References

65

results, P and A, simple logic tells us that the result of measuring a photon, with a given hidden state h, in each of the three polaroid settings, a, b, and c, will be the same for at least one of the settings. Thus, since the two photons of state |ψ are in the same hidden state, for any h,
Pahb + Pahc + Pbhc ≥ 1.
Let wh be the probability with which the source emits photons of kind h. Then the sum of the observed probabilities Pab + Pac + Pbc is a weighted sum, with weights wh, of the results for photons of each hidden kind h:
Pab + Pac + Pbc = wh(Pahb + Pahc + Pbhc).
h
The weighted average of numbers all greater than 1 is greater than 1, so since Pahb + Pahc + Pbhc ≥ 1 for any h, we may conclude that
Pab + Pac + Pbc ≥ 1.
This inequality holds for any local hidden-variable theory and gives us a testable requirement. By exercise 4.20, quantum theory predicts that the probability that the two results will be the
same is the square of the cosine of the angle between the two polaroid settings. If we take the angle between settings a and b to be θ and the angle between settings b and c to be φ, then the inequality becomes
cos2 θ + cos2 φ + cos2(θ + φ) ≥ 1.
For the special case of section 4.4.3, quantum theory tells us that for θ = φ = 60◦ each term is 1/4. Since 3/4 < 1, these probabilities violate Bell’s inequality, and therefore we can conclude that no local, deterministic theory can give the same predictions as quantum mechanics. Furthermore, experiments similar to but somewhat more sophisticated than the setup described here have been done, and their results conﬁrm the prediction of quantum theory and nature’s violation of Bell-like inequalities-
.
Bell’s theorem shows that it is not possible to model entangled states and their measurement with a local hidden-variable theory. Strictly speaking, entangled states should not be talked about in terms of local hidden states or cause and effect. But since there are some situations in which entanglement can be safely talked about in one or the other of these ways, and since both are more familiar than the sort of quantum correlation that actually exists, terminology suggesting either of these modes-
 of thinking persists in the literature.
4.5 References
The original Einstein, Podolsky, Rosen paper [109] is worth reading for an account of their thinking. The ﬁrst formulation of the paradox as we presented it here is due to Bohm [54].
Our account of Bell’s inequalities is loosely based on Penrose’s excellent account [225] of a special case of Bell’s theorem for spin-1/2 particles. Greenstein and Zajonc [140] give a detailed

66

4 Measurement of Multiple-Qubit States

description, accessible to nonphysicists, of Bell’s theorem and the EPR paradox, experimental techniques for generating entangled photon pairs, and Aspect’s experiments testing for quantum violation of Bell’s inequalities. Detailed results of the experiments by Aspect et al. are published in [25, 26, 24].
Stronger statements than the ones we presented can be made about the sorts of theories that Bell’s inequality rules out. The issues here can be relatively subtle. Mermin’s article [208] gives a readable account of some of these issues. Peres’s book [226] delves into these issues in detail. For a discussion of the various interpretations of quantum mechanics and their perceived strengths and weaknesses, see Sudbery’s book [267] and Bub’s book [71].

4.6 Exercises

Exercise 4.1. Give the matrix, in the standard basis, for the following operators a. |0 0|. b. |+ 0| − i|− 1|. c. |00 00| + |01 01|. d. |00 00| + |01 01| + |11 01| + |10 11|. e. | + +| where | + = √1 (|00 + |11 ).
2

Exercise 4.2. Write the following operators in bra/ket notation

a. The Hadamard operator H =

√1

√1

2

2

√1 − √1

.

2

2

b. X =

01 . 10

c. Y =

0 −1

1 0

.

d. Z =

⎛ 23

e. ⎜⎜⎝

0 0

0

10 0 −1
00 −5 0 00 00

f. X ⊗ X.

g. X ⊗ Z.

h. H ⊗ H .

.

⎞ 0

0 0

⎟⎟⎠.

9

i. The projection operators P1 : V → S1 and P2 : V → S2, where S1 is spanned by {|+ |+ , |− |− } and S2 is spanned by {|+ |− , |− |+ }.

4.6 Exercises

67

Exercise 4.3. Show that any projection operator is its own adjoint.
Exercise 4.4. Rewrite example 3.3.2 on page 42 in terms of projection operators.
Exercise 4.5. Rewrite example 3.3.3 on page 42 in terms of projection operators.
Exercise 4.6. Rewrite example 3.3.4 on page 43 in terms of projection operators.
Exercise 4.7. Using the projection operator formalism a. compute the probability of each of the possible outcomes of measuring the ﬁrst qubit of an arbitrary two-qubit state in the Hadamard basis {|+ , |− }. b. compute the probability of each outcome for such a measurement on the state | + = √1 (|00 + |11 .
2
c. for each possible outcome in (b), describe the possible outcomes if we now measure the second qubit in the standard basis. d. for each possible outcome in (b), describe the possible outcomes if we now measure the second qubit in the Hadamard basis.
Exercise 4.8. Show that (A|x )† = x|A†.
Exercise 4.9. Design a measurement on a three-qubit system that distinguishes between states in which all bit values are equal and those in which they are not, and gives no other information. Write all operators in bra/ket notation.
Exercise 4.10. Design a measurement on a three-qubit system that distinguishes between states in which the number of 1 bits is even, and those in which the number of 1 bits is odd, and gives no other information. Write all operators in bra/ket notation.
Exercise 4.11. Design a measurement on a three-qubit system that distinguishes between states with different numbers of 1 bits and gives no other information. Write all operators in bra/ket notation.
Exercise 4.12. Suppose O is a measurement operator corresponding to a subspace decomposition V = S1 ⊕ S2 ⊕ S3 ⊕ S4 with projection operators P1, P2, P3, and P4. Design a measurement operator for the subspace decomposition V = S5 ⊕ S6, where S5 = S1 ⊕ S2 and S6 = S3 ⊕ S4.
Exercise 4.13. a. Let O be any observable specifying a measurement of an n-qubit system. Suppose that after measuring |ψ according to O, we obtain |φ . Show that if we now measure |φ according to O, we simply obtain |φ again, with certainty. b. Reconcile the result of (a) with the fact that for most observables O it is not true that O2 = O.

68

4 Measurement of Multiple-Qubit States

Exercise 4.14. a. Give the outcomes and their probabilities for measurement of each of the standard basis elements with respect to the Bell decomposition of example 4.2.6. b. Give the outcomes and their probabilities for measurement of a general two-qubit state |ψ = a00|00 + a01|01 + a10|10 + a11|11 with respect to the Bell decomposition.
Exercise 4.15. a. Show that the operator B of example 4.3.4 is of the form Q ⊗ I , where Q is a (2 × 2)-Hermitian operator. b. Show that any operator of the form Q ⊗ I , where Q is a (2 × 2)-Hermitian operator and I is the (2 × 2)-identity operator, speciﬁes a measurement of a two-qubit system. Describe the subspace decomposition associated with such an operator. c. Describe the subspace decomposition associated with an operator of the form I ⊗ Q where Q is a (2 × 2)-Hermitian operator and I is th-
e (2 × 2)-identity operator, and give a high-level description of such measurements.
Exercise 4.16. This exercise shows that for any Hermitian operator O : V → V , the direct sum of all eigenspaces of O is V . A unitary operator U satisﬁes U †U = I . a. Show that the columns of a unitary matrix U form an orthonormal set. b. Show that if O is Hermitian, then so is U OU −1 for any unitary operator U . c. Show that any operator has at least one eigenvalue λ and λ-eigenvector vλ. d. Use the result of (c) to show that for any matrix A : V → V , there is a unitary operator U such that t-
he matrix for U AU −1 is upper triangular (meaning all entries below the diagonal are zero). e. Show that for any Hermitian operator O : V → V with eigenvalues λ1, . . . , λk, the direct sum of the λi-eigenspaces Sλi gives the whole space:
V = Sλ1 ⊕ Sλ2 ⊕ · · · ⊕ Sλk .
Exercise 4.17. a. Show that any state resulting from measuring an unentangled state with a single-qubit measurement is still unentangled. b. Can other types of measurement produce an entangled state from an unentangled one? If so, give an example. If not, give a proof. c. Can an unentangled state be obtained by measuring a single qubit of an entangled state?
Exercise 4.18. Show that if there is no measurement of one of the qubits that gives a single result with certainty, then the two qubits are entangled.

4.6 Exercises

69

Exercise 4.19. Give an explicit description of the observable Oθ of section 4.4.2 in both bra/ket and matrix notation.
Exercise 4.20. Let Oθ1 be the single-qubit observable with +1-eigenvector |v1 = cos θ1|0 + sin θ1|1 and −1-eigenvector

|v1⊥ = − sin1 θ |0 + cos θ1|1 . Similarly, let Oθ2 be the single-qubit observable with +1-eigenvector |v2 = cos θ2|0 + sin θ2|1 and −1-eigenvector

|v2⊥ = − sin θ2|0 + cos θ2|1 .

Let O be the two-qubit observable Oθ1 ⊗ Oθ2 . We consider various measurements on the EPR state

|ψ

= √1 (|00
2

+ |11 ). We are interested in the probability that the measurements Oθ1 ⊗ I and

I ⊗ Oθ2 , if they were performed on the state |ψ , would agree on the two qubits in that either both

qubits are measured in the 1-eigenspace or both are measured in −1-eigenspace of their respective

single-qubit observables. As in example 4.2.5, we are not interested in the speciﬁc outcome of the

two measurements, just whether or not they would agree. The observable O = Oθ1 ⊗ Oθ2 gives exactly this information.

a. Find the probability that the measurements Oθ1 ⊗ I and I ⊗ Oθ2 , when performed on |ψ , would agree in the sense of both resulting in a +1 eigenvector or both resulting in a −1 eigenvec-
tor. (Hint: Use the trigonometric identities cos(θ1 − θ2) = cos(θ1) cos(θ2) + sin(θ1) sin(θ2) and sin(θ1 − θ2) = sin(θ1) cos(θ2) − cos(θ1) sin(θ2) to obtain a simple form for your answer.)

b. For what values of θ1 and θ2 do the results always agree?

c. For what values of θ1 and θ2 do the results never agree?

d. For what values of θ1 and θ2 do the results agree half the time? e. Show that whenever θ1 = θ2 and θ1 and θ2 are chosen from {−60◦, 0◦, 60◦}, then the results agree 1/4 of the time and disagree 3/4 of the time.

Exercise 4.21.
a. Most of the time the effect of performing two measurements, one right after the other, cannot be achieved by a single measurement. Find a sequence of two measurements whose effect cannot be achieved by a single measurement, and explain why this property is generally true for most pairs of measurements.
b. Describe a sequence of two distinct nontrivial measurements that can be achieved by a single measurement.

70

4 Measurement of Multiple-Qubit States

c. For each of the measurements speciﬁed by the operators A, B, C, and M from examples 4.3.3, 4.3.4, 4.3.5, and 4.3.6, say whether the measurement can be achieved as a sequence of single-qubit measurements.
d. How does performing the sequence of measurements Z ⊗ I followed by I ⊗ Z compare with performing the single measurement Z ⊗ Z?

Exercise 4.22.

Show that no matter in which basis the ﬁrst qubit of an EPR pair

1 2

(|00

+ |11

)

is measured, the two possible outcomes have equal probability.

5 Quantum State Transformations
The last two chapters discussed encoding information in quantum states and some of the uniquely quantum properties of such quantum information, such as entangled states, the exponential state space, and quantum measurement. This chapter develops the basic mechanisms for computing on quantum information. Computation on quantum information takes place through dynamic transformation of quantum systems. In order to understand quantum computation, we must understand which sorts of transformations natur-
e allows and which it does not. This chapter focuses on transformations of a closed quantum system, transformations that map the state space of the quantum system to itself. Measurement is not a transformation in this sense. Chapter 10 discusses more general transformations, transformations of a subsystem that is part of a larger quantum system.
This chapter begins with a brief discussion of transformations on general quantum systems, and it then focuses on multiple-qubit systems. Section 5.1 discusses the unitarity requirement on quantum state transformations and the no-cloning principle. The no-cloning restriction is central to both the limitations and the advantages of encoding information in quantum states; for example, it underlies the security of quantum cryptographic protocols such as the ones described in sections 2.4 and 3.4, and-
 it is also vital to the argument of section 4.3.1 that no more than n classical bits worth of information can be extracted from an n-qubit system.
After discussing considerations for transformations of general quantum systems, the chapter restricts discussion to n-qubit systems and develops building blocks for the standard circuit model of quantum computation. Part II uses this model to describe quantum algorithms. All quantum transformations on n-qubit quantum systems can be expressed as a sequence of transformations on single-qubit and two-qubit subsystems. Some quantum state transformations can be implemented in terms of these basic gates-
 more easily than others. The efﬁciency of a quantum transform is quantiﬁed in terms of the number of one- and two-qubit gates used. Section 5.2 looks at singlequbit and two-qubit transformations, ways of combining them, and a graphical notation for describing sequences of transformations. Section 5.3 describes applications of these simple gates to two communication problems: dense coding and quantum state teleportation. Section 5.4 is devoted to showing that any quantum transformation can be real-
ized as a sequence of one- and two-qubit transformations. Section 5.5 discusses ﬁnite sets of gates that can be used to approximate all quantum transformations universally. The chapter concludes with a deﬁnition of the standard circuit model for quantum computation.

72

5 Quantum State Transformations

5.1 Unitary Transformations
In this book, quantum transformation will mean a mapping from the state space of a quantum system to itself. Measurements are not quantum transformations in this sense; there are only ﬁnitely many outcomes, and the result of applying a measurement to a speciﬁc state is only probabilistic. Chapter 10 considers open quantum systems, systems that are subsystems of a larger quantum system, and studies the transformations of subsystems induced by transformations of the larger system. In this chapter, w-
e concern ourselves only with transformations of closed quantum systems.
Nature does not allow arbitrary transformations of a quantum system. Nature forces these transformations to respect properties connected to quantum measurement and quantum superposition. The transformations must be linear transformations of the vector space associated with the state space so that a state that is a superposition of other states goes to the superposition of their images; more precisely, linearity means that for any quantum transformation U ,
U (a1|ψ1 + · · · + ak|ψk ) = a1U |ψ1 + · · · + akU |ψk
on any superposition |ψ = a1|ψ1 + · · · + ak|ψk . Unit length vectors must go to unit length vectors, which implies that orthogonal subspaces go to orthogonal subspaces. These properties ensure that measuring and then applying a transform to the outcome gives the same result as ﬁrst applying the transform and then measuring in the transformed basis. Speciﬁcally, the probability of obtaining outcome U |φ by ﬁrst applying U to |ψ and then measuring with respect to the decomposition ⊕U Si is the same-
 as the probability of obtaining U |φ by measuring |ψ with respect to the decomposition ⊕Si and then applying U . These properties hold if U preserves the inner product; for any |ψ and |φ , the inner product of their images, U |ψ and U |φ , must be the same as the inner product between |ψ and |φ :
φ|U †U |ψ = φ|ψ .
A straightforward mathematical argument shows that this condition holds for all |ψ and |φ only if U †U = I . In other words, for any quantum transformation U , its adjoint U † must be equal to its inverse, precisely the condition, U † = U −1, for a linear transformation to be unitary. Furthermore, this condition is sufﬁcient; the set of allowed transformations of a quantum system corresponds exactly to the set of unitary operators on the complex vector space associated with the state space of the -
quantum system. Since unitary operators preserve the inner product, they map orthonormal bases to orthonormal bases. In fact, the converse is true: any linear transformation that maps an orthonormal basis to an orthonormal basis is unitary.
Geometrically, all quantum state transformations are rotations of the complex vector space associated with the quantum state space. The ith column of the matrix is the image U |i of the ith basis vector, so for a unitary transformation given in matrix form, U is unitary if and only if the set of columns of its matrix representation are orthonormal. Since U † is unitary if and only

5.1 Unitary Transformations

73

if U is, it follows that U is unitary if and only if its rows are orthonormal. The product U1U2 of two unitary transformations is again unitary. The tensor product U1 ⊗ U2 is a unitary transformation of the space X1 ⊗ X2 if U1 and U2 are unitary transformations of X1 and X2 respectively. Linear combinations of unitary operators, however, are not in general unitary.
The unitarity condition simply ensures that the operator does not violate any general principles of quantum theory. It does not imply that a transformation can be implemented efﬁciently; most unitary operators cannot be efﬁciently implemented, even approximately. In later chapters, particularly when we examine quantum algorithms, we will concern ourselves with questions about the efﬁciency of certain quantum transformations.
An obvious consequence of the unitary condition is that every quantum state transformation is reversible. Chapter 6 describes work of Charles Bennett, Edward Fredkin, and Tommaso Toffoli, done prior to the development of quantum information processing, that shows that all classical computations can be made reversible with only a negligible loss of efﬁciency. Thus, the reversibility requirement does not impose an unworkably strict restriction on quantum algorithms.
In the standard circuit model of quantum computation, all computation is carried out by quantum transformations, with measurement used only at the end to read out the results. Since measurement can effect changes in quantum states, the dynamics of measurement, rather than quantum state transformations, provide an alternative means to achieve computation. Section 13.4 describes an alternate, but equally powerful, model of quantum computation in which all computation takes place by measurement.
The phrases quantum transformation or quantum operator refer to unitary operators acting on the state space, not measurement operators. While measurements are modeled by operators, the behavior of measurement is not modeled by the direct action of the measurement’s Hermitian operator on the state space, but rather by the indirect, probabilistic procedure described by the measurement postulate of section 4.3.1. One of the least satisfactory aspects of quantum theory is that there are two distinct c-
lasses of manipulations of quantum states: quantum transformations and measurement. Section 10.3 describes a tighter, but still unsatisfactory, relation between the two.
5.1.1 Impossible Transformations: The No-Cloning Principle This section describes a simple, but important, consequence of the unitary condition: unknown quantum states cannot be copied or cloned. In fact, the linearity of unitary transformations alone implies the result. Suppose U is a unitary transformation that clones, in that U (|a |0 ) = |a |a for all quantum states |a . Let |a and |b be two orthogonal quantum states. That U clones means U (|a |0 ) = |a |a and U (|b |0 ) = |b |b . Consider |c -
= √1 (|a + |b ). By linearity,
2
U (|c |0 ) = √1 (U (|a |0 ) + U (|b |0 )) 2
= √1 (|a |a + |b |b ). 2

74

5 Quantum State Transformations

But if U is a cloning transformation then
U (|c |0 ) = |c |c = 1/2(|a |a + |a |b + |b |a + |b |b ), √
which is not equal to (1/ 2)(|a |a + |b |b ). Thus, there is no unitary operation that can reliably clone all quantum states.
The no-cloning theorem tells us that it is impossible to clone a speciﬁc unknown quantum state reliably. It does not preclude the construction of a known quantum state from a known quantum state. It is possible to perform an operation that appears to be copying the state in one basis but does not do so in others. For example, it is possible obtain n particles in an entangled state a|00 . . . 0 + b|11 . . . 1 from an unknown state a|0 + b|1 . But it is not possible to create the n particle state (a-
|0 + b|1 ) ⊗ · · · ⊗ (a|0 + b|1 ) from an unknown state a|0 + b|1 .
5.2 Some Simple Quantum Gates
Just as for classical computation, it is a boon to quantum computation, both for implementation and analysis, that arbitrarily complex computations can be achieved by composing simple elements. Section 5.4 shows that any quantum state transformation on an n-qubit system can be realized using a sequence of one- and two-qubit quantum state transformations. We will call any quantum state transformation that acts on only a small number of qubits a quantum gate. Sequences of quantum gates are called qu-
antum gate arrays or quantum circuits.
In the quantum-information-processing literature, gates are mathematical abstractions useful for describing quantum algorithms; quantum gates do not necessarily correspond to physical objects, as they do in the classical case. So the gate terminology and its accompanying graphical notation must not be taken too literally. For solid state or optical implementations, there may be actual physical gates, but in NMR and ion trap implementations, the qubits are stationary particles, and the gates are op-
erations on these particles using magnetic ﬁelds or laser pulses. For these implementations, gates operate on a physical register of qubits.
From a practical point of view, the standard description of computation in terms of one- and two-qubit gates leaves something to be desired. Ideally, we would write all our computations in terms of gates that are easy to implement physically and are robust, but we do not yet know which ones these are. Furthermore, in order to realize physically a quantum computer capable of performing arbitrary quantum transformations, it would be convenient to have only ﬁnitely many gates that could generate all -
unitary transformations. Unfortunately, such a set is impossible; there are uncountably many quantum transformations, and a ﬁnite set of generators can only generate countably many elements. Section 5.5 shows that it is possible, however, for ﬁnite sets of gates to generate arbitrarily close approximations to all unitary transformations. A number of such sets are known, but it is unclear which of these will be most practical from a physical implementation point of view. For analyzing quantum algor-
ithms, it is useful to have a standard set of gates with which to analyze the efﬁciency of quantum algorithms. The set we use includes all one-qubit gates together with the two-qubit gate described in section 5.2.4.

5.2 Some Simple Quantum Gates

75

U0

U3

U2

Æ

Æ

U1

Figure 5.1 A sample graphical representation for a three-qubit quantum gate array. Data ﬂow left to right through the circuit.

Graphical notation, representing series of quantum state transformations acting on various combinations of qubits, is commonly used to describe sequences of transformations and to analyze the resulting algorithms. Simple transformations are graphically represented by appropriately labeled boxes which are connected to form more complex circuits. A sample graphical representation is shown in ﬁgure 5.1. Each horizontal line corresponds to a qubit. The transformations on the left are performed ﬁrst, a-
nd the processing proceeds from left to right. The boxes labeled with U0, U1, and U3 correspond to single-qubit transformations, while the one labeled U2 corresponds to a two-qubit transformation. When we talk about applying an operator U to qubit i of an n-qubit quantum system, we mean that we apply the operator I ⊗ · · · ⊗ I ⊗ U ⊗ I ⊗ · · · ⊗ I to the entire system, where I is the single-qubit identity operator, applied to each of the other qubits of the system.
The remainder of this section describes a variety of frequently used quantum gates.

5.2.1 The Pauli Transformations The Pauli transformations are the most commonly used single-qubit transformations:

I : |0 0| + |1 1|

10 01

X : |1 0| + |0 1|

01 10

01 Y : − |1 0| + |0 1|
−1 0

Z : |0 0| − |1 1|

10 ,
0 −1

where I is the identity transformation, X is negation (the classical not operation on |0 and |1 viewed as classical bits), Z changes the relative phase of a superposition in the standard basis, and Y = ZX is a combination of negation and phase change. In graphical notation, these gates are represented by boxes

76

5 Quantum State Transformations

Z

Y

labeled appropriately. There is variation in the literature as to which transformations are the Pauli transformations, and
in the notation used. The main discrepancy is whether −i(|0 1| − |1 01|) is considered the Pauli transformation instead of Y = |0 1| − |1 0|, as we do here. The operator iY is Hermitian, which is a useful property in some settings, for example, if we wanted to use it to describe measurement. Also, sometimes the notation σx, σy, and σz is used instead. Throughout this book, we use I , X, Y , and Z for the Pauli operators representing single-qubit transformations. In chapter 10, we use the notation -
σx = X, σy = −iY , and σz = Z when the Pauli operators are used to describe quantum states.
5.2.2 The Hadamard Transformation Another important single-qubit transformation is the Hadamard transformation
H = √1 (|0 0| + |1 0| + |0 1| − |1 1|), 2
or
H : |0 → |+ = √1 (|0 + |1 )
2
|1 → |− = √1 (|0 − |1 ),
2
which produces an even superposition of |0 and |1 from either of the standard basis elements. Note H H = I . In the standard basis, the matrix for the Hadamard transformation is
H = √1 1 1 . 2 1 −1

5.2.3 Multiple-Qubit Transformations from Single-Qubit Transformations Multiple-qubit transformations can be constructed as tensor products of single-qubit transformations. These transformations are uninteresting as multiple-qubit transformations in the sense that they are equivalent to performing the single-qubit transformations on each of the qubits separately in some order. For example, U ⊗ V can be obtained by ﬁrst applying U ⊗ I and then I ⊗ V .
More interesting are those multiple-qubit transformations that can change the entanglement between qubits of the system. Entanglement is not a local property in the sense that transformations that act separately on two or more subsystems cannot affect the entanglement between those subsystems. More precisely, let |ψ be a two-qubit state and U and V be single-qubit unitary transformations. Then (U ⊗ V )|ψ is entangled if and only if |ψ is. The widely used class of two-qubit controlled gates discuss-
ed in the next section illustrates the effects transformations can have on entanglement.

5.2 Some Simple Quantum Gates

77

5.2.4 The Controlled-NOT and Other Singly Controlled Gates The controlled-not gate, Cnot , acts on the standard basis for a two-qubit system, with |0 and |1 viewed as classical bits, as follows: it ﬂips the second bit if the ﬁrst bit is 1 and leaves it unchanged otherwise. The Cnot transformation has representation
Cnot = |0 0| ⊗ I + |1 1| ⊗ X
= |0 0| ⊗ (|0 0| + |1 1|) + |1 1| ⊗ (|1 0| + |0 1|)
= |00 00| + |01 01| + |11 10| + |10 11|,

from which it is easy to read off its effect on the standard basis elements:
Cnot : |00 → |00 |01 → |01 |10 → |11 |11 → |10 .

The matrix representation (in the standard basis) for Cnot is

⎛

⎞

1000

⎜⎜⎝

0 0

1 0

0 0

0 1

⎟⎟⎠ .

0010

Observe that Cnot is unitary and is its own inverse. Furthermore, the Cnot gate cannot be

decomposed into a tensor product of two single-qubit transformations.

The importance of the Cnot gate for quantum computation stems from its ability to change

the entanglement between two qubits. For example, it takes the unentangled two-qubit state

√1 (|0 + |1 )|0 to the entangled state √1 (|00 + |11 ):

2

2

Cnot √1 (|0 + |1 ) ⊗ |0 = Cnot √1 (|00 + |10 )

2

2

= √1 (|00 + |11 ). 2

Similarly, since it is its own inverse, it can take an entangled state to an unentangled one. The controlled-not gate is so common that it has its own graphical notation.

The open circle indicates the control bit, the × indicates negation of the target bit, and the line between them indicates that the negation is conditional, depending on the value of the control bit. Some authors use a solid circle to indicate negative control, in which the target bit is toggled when the control bit is 0 instead of 1.

78

5 Quantum State Transformations

A useful class of two-qubit controlled gates, which generalizes the Cnot gate, consists of gates that perform a single-qubit transformation Q on the second qubit when the ﬁrst qubit is |1 and do nothing when it is |0 . These controlled gates have graphical representation

Q

We use the following shorthand for these transformations:

Q = |0 0| ⊗ I + |1 1| ⊗ Q.

The transformation Cnot , for example, becomes X in this notation. In the standard computational basis, the two-qubit operator Q is represented by the 4 × 4 matrix

I0 0Q

.

Let us look in more depth at one of these controlled gates, the controlled phase shift eiθ , where eiθ is shorthand for eiθ I . In the standard basis, the controlled phase shift changes the phase
of the second bit if and only if the control bit is one:

eiθ = |00 00| + |01 01| + eiθ |10 10| + eiθ |11 11|.

Its effect on the standard basis elements is as follows:

eiθ : |00 → |00 |01 → |01 |10 → eiθ |10 |11 → eiθ |11

and it has matrix representation

⎛ 10 0

⎜⎜⎝

0 0

1 0

0 eiθ

⎞ 0

0 0

⎟⎟⎠ .

0 0 0 eiθ

The controlled phase shift makes use of a single-qubit transformation that was a physically meaningless global phase shift when applied to a single-qubit system, but when used as part of a conditional transformation, this phase shift becomes nontrivial, changing the relative phase between elements of a superposition. For example, it takes

√1 (|00 + |11 ) → √1 (|00 + eiθ |11 ).

2

2

Graphical icons can be combined into quantum circuits. The following circuit, for instance, swaps the value of the two bits.

5.2 Some Simple Quantum Gates

79

In other words, this swap circuit takes
|00 → |00 |01 → |10 |10 → |01 |11 → |11 ,

and |ψ |φ → |φ |ψ for all single-qubit states |ψ and |φ . Three cautions are in order. The ﬁrst concerns the use of a basis to specify the transformation.
The second concerns the basis dependence of the notion of control. The third suggests care in interpreting the graphical notation for quantum circuits.

Caution 1: Phases in Speciﬁcations of Transformations Section 3.1.3 discussed the important

distinction between the quantum state space (projective space) and the associated complex vector

space. We need to keep this distinction in mind when interpreting the standard ways quantum state

transformations are speciﬁed. A unitary transformation on the complex vector space is completely

determined by its action on a basis. The unitary transformation is not completely determined by

specifying what states the states corresponding to basis states are sent to, a subtle distinction. For

example, the controlled phase shift takes the four quantum states represented by |00 , |01 , |10 ,

and |11 to themselves; |10 and eiθ |10 represent exactly the same quantum state, and so do |11

and eiθ |11 . As we saw above, however, this transformation is not the identity transformation

since it takes √1 (|00 + |11 ) to √1 (|00 + eiθ |10 ). To avoid mistakes, remember that notation

2

2

such as

|00 → |00 |01 → |01 |10 → eiθ |10 |11 → eiθ |11

is used to specify a unitary transformation on the complex vector space in terms of vectors in that vectors space, not in terms of the states corresponding to these vectors. Specifying that the vector |0 goes to the vector −|1 is different from specifying that |0 goes to |1 because the two vectors −|1 and |1 are different vectors even if they correspond to the same state. The quantum transformation on the state space is easily derived from the unitary transformation on the associated complex vecto-
r space.
Caution 2: Basis Dependence of the Notion of Control The notion of the control bit and the target bit is a carryover from the classical gate and should not be taken too literally. In the standard basis, the Cnot operator behaves exactly as the classical gate does on classical bits. However, one should not conclude that the control bit is never changed. When the input qubits are not one of the

80

5 Quantum State Transformations

standard basis elements, the effect of the controlled gate can be somewhat counterintuitive. For example, consider the Cnot gate in the Hadamard basis {|+ , |− }:
Cnot : |++ → |++ |+− → |−− |−+ → |−+ |−− → |+− .

In the Hadamard basis, it is the state of the second qubit that remains unchanged, and the state

of the ﬁrst qubit that is ﬂipped depending on the state of the second bit. Thus, in this basis the

sense of which bit is the control bit and which the target bit has been reversed. But we have

not changed the transformation at all, only the way we are thinking about it. Furthermore, in

most bases, we do not see a control bit or a target bit at all. For example, as we have seen, the

controlled-not

transforms

√1 (|0
2

+ |1 )|0

to √1 (|00
2

+ |11 ). In this case the controlled-not

entangles the qubits so that it is not possible to talk about their states separately.

A related fact, which we will use in constructing algorithms and in quantum error correction,

is that the following two circuits are equivalent:

H

H

=

H

H

Caution 3: Reading circuit diagrams The graphical representation of quantum circuits can be misleading if one is not careful to interpret it properly. In particular, one cannot determine the effect the transformation has on the input qubits, even if they are all in standard basis states, by simply looking at the line in the diagram corresponding to that qubit. Let us look at the circuit

H

H

acting on the input state |0 |0 . Since the Hadamard transformation is its own inverse, it might at ﬁrst appear that the ﬁrst qubit’s state would remain unchanged by the transformation. But it does not. Recall from caution 2 that the controlled-not gate does not leave the ﬁrst qubit unaffected in general. In fact, this circuit takes the input state |00 to 1/2(|00 + |10 + |01 − |11 ), an effect that cannot be seen immediately from the circuit and so must be explicitly calculated.
5.3 Applications of Simple Gates
For many years, EPR pairs, and entanglement more generally, were viewed as quantum mechanical oddities of merely theoretical interest. Quantum information processing changes that perception by providing practical applications of entanglement. Two communications applications,

5.3 Applications of Simple Gates

81

dense coding and teleportation, illustrate the usefulness of EPR pairs when used together with a few simple quantum gates.
Dense coding uses one quantum bit together with a shared EPR pair to encode and transmit two classical bits. Since EPR pairs can be distributed ahead of time, only one qubit needs to be physically transmitted to communicate two bits of information. This result is surprising, since, as section 2.3 explained, only one classical bit’s worth of information can be extracted from a qubit. Teleportation is the opposite of dense coding in that it uses two classical bits to transmit the state of a single q-
ubit. Teleportation is surprising in two respects. In spite of the no-cloning principle of quantum mechanics, there exists a mechanism for the transmission of an unknown quantum state. Also, teleportation shows that two classical bits sufﬁce to communicate a qubit state that can be in any one of an inﬁnite number of possible states.
The key to both dense coding and teleportation is the use of entangled particles. The initial setup is the same for both processes. Alice and Bob wish to communicate. Each is sent one of the entangled particles making up an EPR pair
|ψ0 = √1 (|00 + |11 ). 2
Suppose Alice is sent the ﬁrst particle, and Bob the second:
|ψ0 = √1 (|0A |0B + |1A |1B ). 2
Alice can perform transformations only on her particle, and Bob can perform transformations only on his, until Alice sends Bob her particle or vice versa. In other words, until a particle is transmitted between them, Alice can perform transformations only of the form Q ⊗ I on the EPR pair, where Q is a single-qubit transformation, and Bob transformations only of the form I ⊗ Q. More generally, for K = 2k, let I (K) be the 2k × 2k identity matrix. If Alice has n qubits and Bob has m qubits, then Al-
ice can perform transformations only of the form U ⊗ I (M), where U is an n-qubit transformation, and Bob can perform transformations only of the form I (N) ⊗ U .
5.3.1 Dense Coding

Alice Encoder

Bob Decoder

EPR source

82

5 Quantum State Transformations

Alice Alice wishes to transmit the state of two classical bits encoding one of the numbers 0 through 3. Depending on this number, Alice performs one of the Pauli transformations {I, X, Y, Z} on her qubit of the entangled pair |ψ0 . The resulting state is shown in the following table.

Value Transformation

New state

0

|ψ0 = (I ⊗ I )|ψ0

√1 (|00 + |11 )
2

1

|ψ1 = (X ⊗ I )|ψ0

√1 (|10 + |01 )
2

2

|ψ2 = (Z ⊗ I )|ψ0

√1 (|00 − |11 )
2

3

|ψ3 = (Y ⊗ I )|ψ0

√1 (−|10 + |01 )
2

Alice then sends her qubit to Bob.

Bob To decode the information, Bob applies a controlled-not to the two qubits of the entangled pair and then applies the Hadamard transformation H to the ﬁrst qubit:

√1 (|00
2
√1 (|10

+ |11 + |01

) )

⎫ ⎪⎪⎪⎪⎪⎬

2

Cnot

⎧ ⎪⎪⎪⎪⎪⎨

√1 (|00 + |10 )
2
√1 (|11 + |01 )
2

⎫ ⎪⎪⎪⎪⎪⎬

√1 (|00
2
√1 (−|10

− |11 + |01

) )

⎪⎪⎪⎪⎪⎭

−→

⎪⎪⎪⎪⎪⎩

√1 (|00 − |10 )
2
√1 (−|11 + |01 )

⎪⎪⎪⎪⎪⎭

2

2

⎧ ⎪⎪⎪⎪⎪⎨

√1 (|0 + |1 ) ⊗ |0
2
√1 (|1 + |0 ) ⊗ |1

⎫ ⎪⎪⎪⎪⎪⎬

= ⎪⎪⎪⎪⎪⎩

2
√1 (|0 − |1 ) ⊗ |0
2
√1 (−|1 + |0 ) ⊗ |1

⎪⎪⎪⎪⎪⎭

2

⎧

H ⊗I

⎪⎪⎪⎨

|00 |01

−→

⎪⎪⎪⎩

|10 |11

.

Bob then measures the two qubits in the standard basis to obtain the two-bit binary encoding of the number Alice wished to send.

5.3.2 Quantum Teleportation The objective of teleportation is to transmit enough information, using only classical bits, about the quantum state of a particle that a receiver can reconstruct the exact quantum state. Since the no-cloning principle of quantum mechanics means that a quantum state cannot be copied, the quantum state of the original particle cannot be preserved. It is this property—that the original state at the source must be destroyed in the course of creating the state at the target-
—that gives quantum teleportation its name.

5.3 Applications of Simple Gates

83

Alice Decoder

Bob Encoder

EPR source
Alice Alice has a qubit whose state |φ = a|0 + b|1 she does not know. She wants to send this state to Bob through classical channels. As in the setup for the dense coding application, Alice and Bob each possess one qubit of an entangled pair
|ψ0 = √1 (|00 + |11 ). 2
The starting state is the three-qubit quantum state
|φ ⊗ |ψ0 = √1 a|0 ⊗ (|00 + |11 ) + b|1 ⊗ (|00 + |11 ) 2
= √1 a|000 + a|011 + b|100 + b|111 . 2
Alice controls the ﬁrst two qubits and Bob controls the last one. Alice applies the decoding step used by Bob in the dense coding scenario to the combined state
of the qubit |φ to be transmitted and her half of the entangled pair. In other words, Alice now applies Cnot ⊗ I followed by H ⊗ I ⊗ I to this state to obtain (H ⊗ I ⊗ I )(Cnot ⊗ I )(|φ ⊗ |ψ0 )
= (H ⊗ I ⊗ I ) √1 a|000 + a|011 + b|110 + b|101 2
= 1 a(|000 + |011 + |100 + |111 ) + b(|010 + |001 − |110 − |101 ) 2
= 1 |00 (a|0 + b|1 ) + |01 (a|1 + b|0 ) + |10 (a|0 − b|1 ) + |11 (a|1 − b|0 ) . 2
Alice measures the ﬁrst two qubits and obtains one of the four standard basis states |00 , |01 , |10 , and |11 with equal probability. Depending on the result of her measurement, the quantum

84

5 Quantum State Transformations

state of Bob’s qubit is projected to a|0 + b|1 , a|1 + b|0 , a|0 − b|1 , or a|1 − b|0 . Alice sends the result of her measurement as two classical bits to Bob.
After these transformations, crucial information about the original state |φ is contained in Bob’s qubit. There is now nothing Alice can do on her own to reconstruct the original state of her qubit. In fact, the no-cloning principle implies that at any given time, only one of Alice or Bob can reconstruct the original quantum state.
Bob When Bob receives the two classical bits from Alice, he knows how the state of his half of the entangled pair compares to the original state of Alice’s qubit. Bob can reconstruct the original state of Alice’s qubit, |φ , by applying the appropriate decoding transformation to his qubit, originally part of the entangled pair. The following table shows the state of Bob’s qubit before the decoding has taken place and the decoding operator Bob should use depending on the value of the bits he receiv-
ed from Alice.

State a|0 + b|1 a|1 + b|0 a|0 − b|1 a|1 − b|0

Bits received 00 01 10 11

Decoding I X Z Y

After decoding, Bob’s qubit will be in the quantum state, a|0 + b|1 , in whichAlice’s qubit started. This decoding step is the encoding step of dense coding, and the encoding step was the decoding step of dense coding, so teleportation and dense coding are in some sense inverses of each other.

5.4 Realizing Unitary Transformations as Quantum Circuits

This section shows how arbitrary unitary transformations can be implemented from a set of primitive transformations. The primitive set we consider includes the two-qubit Cnot gate, in addition to three kinds of single-qubit gates. Using just these four types of operations, any arbitrary n-qubit unitary transformation can be implemented. Section 5.4.1 shows that general single-qubit transformations can be decomposed into products of the three kinds of primitive single-qubit operators. Sections 5.4.-
2 and 5.4.3 show how to construct multiple-qubit controlled versions of single-qubit transformations. Section 5.4.4 uses these transformations to construct arbitrary unitary transformations.
This chapter merely shows that all quantum transformations can be implemented in terms of simple gates; we are not yet concerned with the efﬁciency of such implementations. Most quantum transformations do not have an efﬁcient implementation in terms of simple gates. Much of the rest of the book will be devoted to understanding which quantum transformations have efﬁcient implementations and how these can be used to solve computational problems.

5.4.1 Decomposition of Single-Qubit Transformations This section shows that all single-qubit transformations can be written as a combination of three types of transformations, phase shifts K(δ), rotations R(β), and phase rotations T (α).

5.4 Realizing Unitary Transformations as Quantum Circuits

85

K(δ) = eiδI

R(β) =

cos β sin β − sin β cos β

T (α) =

eiα 0 0 e−iα

A phase shift by δ A rotation by β A phase rotation by α.

Note that

K(δ1 + δ2) = K(δ1)K(δ2), R(β1 + β2) = R(β1)R(β2),

and

T (α1 + α2) = T (α1)T (α2),

and that the operator K commutes with K, T , and R. Rather than write K(δ), we frequently just write the scalar factor eiδ. Even though, as a
transformation on a single-qubit system, K(δ) performs a global phase change, and thus is equivalent to the identity on the single-qubit system, we include it here because we will use it later as part of multiple-qubit conditional transformations in which this factor becomes a relative phase shift that is physically relevant. The transformation R(α) and T (α) are rotations by 2α about the y- and z-axis of the Bloch sphere respectively.
This paragraph shows that any single-qubit unitary transformation Q can be decomposed into a sequence of transformations of the form Q = K(δ)T (α)R(β)T (γ ). Since the K(δ) is a global phase shift with no physical effect, the space of all single-qubit transformations has only three real dimensions. Given the transformation

Q = u00 u01 , u10 u11
it follows immediately from the unitarity condition QQ† = I that |u00|2 + |u01|2 = 1, u00u10 + u01u11 = 0, and |u11|2 + |u10|2 = 1. A short calculation gives |u00| = |u11| and |u01| = |u10|. So the magnitudes of the coefﬁcients uij can be written as the sine and cosine of some angle β; we can write Q as

Q=

eiθ 00 cos(β) eiθ 01 sin(β) −eiθ10 sin(β) eiθ11 cos(β)

.

Furthermore, the phases are not independent: u10u00 + u11u01 = 0 implies that θ10 − θ00 = θ11 − θ01. Since

K(δ)T (α)R(β)T (γ ) =

ei(δ+α+γ ) cos β ei(δ+α−γ ) sin β −ei(δ−α+γ ) sin β ei(δ−α−γ ) cos β

,

we can ﬁnd δ, α, γ for a given Q by solving the equations

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:27.059Z
- **Text Length:** 214811 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
