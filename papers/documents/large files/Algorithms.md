# PDF Document: Algorithms.pdf

**File Path:** Algorithms.pdf

**Processed Date:** 2026-02-10T18:18:46.667Z

**File Size:** 12624.92 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2796

**Collection:** Large Files

---

## Extracted Text Content

This page intentionally left blank

Algorithms
FOURTH EDITION

This page intentionally left blank

Algorithms
Robert Sedgewick
and
Kevin Wayne
Princeton University
FOURTH EDITION
Upper Saddle River, NJ • Boston • Indianapolis • San Francisco New York • Toronto • Montreal • London • Munich • Paris • Madrid Capetown • Sydney • Tokyo • Singapore • Mexico City

Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks. Where those designations appear in this book, and the publisher was aware of a trademark claim, the designations have been printed with initial capital letters or in all capitals.
The authors and publisher have taken care in the preparation of this book, but make no expressed or implied warranty of any kind and assume no responsibility for errors or omissions. No liability is assumed for incidental or consequential damages in connection with or arising out of the use of the information or programs contained herein.
The publisher offers excellent discounts on this book when ordered in quantity for bulk purchases or special sales, which may include electronic versions and/or custom covers and content particular to your business, training goals, marketing focus, and branding interests. For more information, please contact:
U.S. Corporate and Government Sales (800) 382-3419
corpsales@pearsontechgroup.com
For sales outside the United States, please contact:
International Sales
international@pearson.com
Visit us on the Web: informit.com/aw
Cataloging-in-Publication Data is on file with the Library of Congress.
Copyright © 2011 Pearson Education, Inc.
All rights reserved. Printed in the United States of America. This publication is protected by copyright, and permission must be obtained from the publisher prior to any prohibited reproduction, storage in a retrieval system, or transmission in any form or by any means, electronic, mechanical, photocopying, recording, or likewise. For information regarding permissions, write to:
Pearson Education, Inc. Rights and Contracts Department 501 Boylston Street, Suite 900 Boston, MA 02116 Fax: (617) 671-3447
ISBN-13: 978-0-321-57351-3 ISBN-10: 0-321-57351-X Text printed in the United States on recycled paper at Courier in Westford, Massachusetts. First printing, March 2011

______________________________
To Adam, Andrew, Brett, Robbie
and especially Linda ______________________________
___________________
To Jackie and Alex ___________________

vi
Preface . . . . . . . . . . . . . . . . . . . . . . . . .viii
1 Fundamentals . . . . . . . . . . . . . . . . . . . . . .3
1.1 Basic Programming Model 8
1.2 Data Abstraction 64
1.3 Bags, Queues, and Stacks 120
1.4 Analysis of Algorithms 172
1.5 Case Study: Union-Find 216
2 Sorting . . . . . . . . . . . . . . . . . . . . . . . 243
2.1 Elementary Sorts 244
2.2 Mergesort 270
2.3 Quicksort 288
2.4 Priority Queues 308
2.5 Applications 336
3 Searching . . . . . . . . . . . . . . . . . . . . . . 361
3.1 Symbol Tables 362
3.2 Binary Search Trees 396
3.3 Balanced Search Trees 424
3.4 Hash Tables 458
3.5 Applications 486
CONTENTS

vii
4 Graphs . . . . . . . . . . . . . . . . . . . . . . . 515
4.1 Undirected Graphs 518
4.2 Directed Graphs 566
4.3 Minimum Spanning Trees 604
4.4 Shortest Paths 638
5 Strings . . . . . . . . . . . . . . . . . . . . . . . 695
5.1 String Sorts 702
5.2 Tries 730
5.3 Substring Search 758
5.4 Regular Expressions 788
5.5 Data Compression 810
6 Context . . . . . . . . . . . . . . . . . . . . . . . 853
Index . . . . . . . . . . . . . . . . . . . . . . . . . 933
Algorithms . . . . . . . . . . . . . . . . . . . . . . 954
Clients . . . . . . . . . . . . . . . . . . . . . . . . 955

viii
T
his book is intended to survey the most important computer algorithms in use today, and to teach fundamental techniques to the growing number of people in need of knowing them. It is intended for use as a textbook for a second course in computer science, after students have acquired basic programming skills and familiarity with computer systems. The book also may be useful for self-study or as a reference for people engaged in the development of computer systems or applications programs, since it -
contains implementations of useful algorithms and detailed information on performance characteristics and clients. The broad perspective taken makes the book an appropriate introduction to the field.
the study of algorithms and data structures is fundamental to any computerscience curriculum, but it is not just for programmers and computer-science students. Everyone who uses a computer wants it to run faster or to solve larger problems. The algorithms in this book represent a body of knowledge developed over the last 50 years that has become indispensable. From N-body simulation problems in physics to genetic-sequencing problems in molecular biology, the basic methods described here have becom-
e essential in scientific research; from architectural modeling systems to aircraft simulation, they have become essential tools in engineering; and from database systems to internet search engines, they have become essential parts of modern software systems. And these are but a few examples—as the scope of computer applications continues to grow, so grows the impact of the basic methods covered here. Before developing our fundamental approach to studying algorithms, we develop data types for stac-
ks, queues, and other low-level abstractions that we use throughout the book. Then we survey fundamental algorithms for sorting, searching, graphs, and strings. The last chapter is an overview placing the rest of the material in the book in a larger context.
PREFACE

ix
Distinctive features The orientation of the book is to study algorithms likely to be of practical use. The book teaches a broad variety of algorithms and data structures and provides sufficient information about them that readers can confidently implement, debug, and put them to work in any computational environment. The approach involves:
Algorithms. Our descriptions of algorithms are based on complete implementations and on a discussion of the operations of these programs on a consistent set of examples. Instead of presenting pseudo-code, we work with real code, so that the programs can quickly be put to practical use. Our programs are written in Java, but in a style such that most of our code can be reused to develop implementations in other modern programming languages.
Data types. We use a modern programming style based on data abstraction, so that algorithms and their data structures are encapsulated together.
Applications. Each chapter has a detailed description of applications where the algorithms described play a critical role. These range from applications in physics and molecular biology, to engineering computers and systems, to familiar tasks such as data compression and searching on the web.
A scientific approach. We emphasize developing mathematical models for describing the performance of algorithms, using the models to develop hypotheses about performance, and then testing the hypotheses by running the algorithms in realistic contexts.
Breadth of coverage. We cover basic abstract data types, sorting algorithms, searching algorithms, graph processing, and string processing. We keep the material in algorithmic context, describing data structures, algorithm design paradigms, reduction, and problem-solving models. We cover classic methods that have been taught since the 1960s and new methods that have been invented in recent years.
Our primary goal is to introduce the most important algorithms in use today to as wide an audience as possible. These algorithms are generally ingenious creations that, remarkably, can each be expressed in just a dozen or two lines of code. As a group, they represent problemsolving power of amazing scope. They have enabled the construction of computational artifacts, the solution of scientific problems, and the development of commercial applications that would not have been feasible without them.

x
Booksite An important feature of the book is its relationship to the booksite algs4.cs.princeton.edu. This site is freely available and contains an extensive amount of material about algorithms and data structures, for teachers, students, and practitioners, including:
An online synopsis. The text is summarized in the booksite to give it the same overall structure as the book, but linked so as to provide easy navigation through the material.
Full implementations. All code in the book is available on the booksite, in a form suitable for program development. Many other implementations are also available, including advanced implementations and improvements described in the book, answers to selected exercises, and client code for various applications. The emphasis is on testing algorithms in the context of meaningful applications.
Exercises and answers. The booksite expands on the exercises in the book by adding drill exercises (with answers available with a click), a wide variety of examples illustrating the reach of the material, programming exercises with code solutions, and challenging problems.
Dynamic visualizations. Dynamic simulations are impossible in a printed book, but the website is replete with implementations that use a graphics class to present compelling visual demonstrations of algorithm applications.
Course materials. A complete set of lecture slides is tied directly to the material in the book and on the booksite. A full selection of programming assignments, with check lists, test data, and preparatory material, is also included.
Links to related material. Hundreds of links lead students to background information about applications and to resources for studying algorithms.
Our goal in creating this material was to provide a complementary approach to the ideas. Generally, you should read the book when learning specific algorithms for the first time or when trying to get a global picture, and you should use the booksite as a reference when programming or as a starting point when searching for more detail while online.

xi
Use in the curriculum The book is intended as a textbook in a second course in computer science. It provides full coverage of core material and is an excellent vehicle for students to gain experience and maturity in programming, quantitative reasoning, and problemsolving. Typically, one course in computer science will suffice as a prerequisite—the book is intended for anyone conversant with a modern programming language and with the basic features of modern computer systems. The algorithms and dat-
a structures are expressed in Java, but in a style accessible to people fluent in other modern languages. We embrace modern Java abstractions (including generics) but resist dependence upon esoteric features of the language. Most of the mathematical material supporting the analytic results is self-contained (or is labeled as beyond the scope of this book), so little specific preparation in mathematics is required for the bulk of the book, although mathematical maturity is definitely helpful. Appli-
cations are drawn from introductory material in the sciences, again self-contained. The material covered is a fundamental background for any student intending to major in computer science, electrical engineering, or operations research, and is valuable for any student with interests in science, mathematics, or engineering.
Context The book is intended to follow our introductory text, An Introduction to Programming in Java: An Interdisciplinary Approach, which is a broad introduction to the field. Together, these two books can support a two- or three-semester introduction to computer science that will give any student the requisite background to successfully address computation in any chosen field of study in science, engineering, or the social sciences. The starting point for much of the material in the book was the-
 Sedgewick series of Algorithms books. In spirit, this book is closest to the first and second editions of that book, but this text benefits from decades of experience teaching and learning that material. Sedgewick’s current Algorithms in C/C++/Java, Third Edition is more appropriate as a reference or a text for an advanced course; this book is specifically designed to be a textbook for a one-semester course for first- or second-year college students and as a modern introduction to the basics and -
a reference for use by working programmers.

xii
Acknowledgments This book has been nearly 40 years in the making, so full recognition of all the people who have made it possible is simply not feasible. Earlier editions of this book list dozens of names, including (in alphabetical order) Andrew Appel, Trina Avery, Marc Brown, Lyn Dupré, Philippe Flajolet, Tom Freeman, Dave Hanson, Janet Incerpi, Mike Schidlowsky, Steve Summit, and Chris Van Wyk. All of these people deserve acknowledgement, even though some of their contributions may have happene-
d decades ago. For this fourth edition, we are grateful to the hundreds of students at Princeton and several other institutions who have suffered through preliminary versions of the work, and to readers around the world for sending in comments and corrections through the booksite. We are grateful for the support of Princeton University in its unwavering commitment to excellence in teaching and learning, which has provided the basis for the development of this work. Peter Gordon has provided wise c-
ounsel throughout the evolution of this work almost from the beginning, including a gentle introduction of the “back to the basics” idea that is the foundation of this edition. For this fourth edition, we are grateful to Barbara Wood for her careful and professional copyediting, to Julie Nahil for managing the production, and to many others at Pearson for their roles in producing and marketing the book. All were extremely responsive to the demands of a rather tight schedule without the slightest s-
acrifice to the quality of the result.
Robert Sedgewick Kevin Wayne
Princeton, NJ January, 2011

This page intentionally left blank

1.1 Basic Programming Model. . . . . . . . . 8
1.2 Data Abstraction . . . . . . . . . . . . . . 64
1.3 Bags, Queues, and Stacks . . . . . . . 120
1.4 Analysis of Algorithms . . . . . . . . . 172
1.5 Case Study: Union-Find. . . . . . . . . 216
ONE
Fundamentals

The objective of this book is to study a broad variety of important and useful
algorithms—methods for solving problems that are suited for computer implementation. Algorithms go hand in hand with data structures—schemes for organizing data that leave them amenable to efficient processing by an algorithm. This chapter introduces the basic tools that we need to study algorithms and data structures. First, we introduce our basic programming model. All of our programs are implemented using a small subset of the Java programming language plus a few of our own libraries for input/-
output and for statistical calculations. Section 1.1 is a summary of language constructs, features, and libraries that we use in this book. Next, we emphasize data abstraction, where we define abstract data types (ADTs) in the service of modular programming. In Section 1.2 we introduce the process of implementing an ADT in Java, by specifying an applications programming interface (API) and then using the Java class mechanism to develop an implementation for use in client code. As important and use-
ful examples, we next consider three fundamental ADTs: the bag, the queue, and the stack. Section 1.3 describes APIs and implementations of bags, queues, and stacks using arrays, resizing arrays, and linked lists that serve as models and starting points for algorithm implementations throughout the book. Performance is a central consideration in the study of algorithms. Section 1.4 describes our approach to analyzing algorithm performance. The basis of our approach is the scientific method: we deve-
lop hypotheses about performance, create mathematical models, and run experiments to test them, repeating the process as necessary. We conclude with a case study where we consider solutions to a connectivity problem that uses algorithms and data structures that implement the classic union-find ADT.
3

Algorithms When we write a computer program, we are generally implementing a method that has been devised previously to solve some problem. This method is often independent of the particular programming language being used—it is likely to be equally appropriate for many computers and many programming languages. It is the method, rather than the computer program itself, that specifies the steps that we can take to solve the problem. The term algorithm is used in computer science to describe a fini-
te, deterministic, and effective problem-solving method suitable for implementation as a computer program. Algorithms are the stuff of computer science: they are central objects of study in the field. We can define an algorithm by describing a procedure for solving a problem in a natural language, or by writing a computer program that implements the procedure, as shown at right for Euclid’s algorithm for finding the greatest common divisor of two numbers, a variant of which was devised over 2,300 -
years ago. If you are not familiar with Euclid’s algorithm, you are encouraged to work Exercise 1.1.24 and Exercise 1.1.25, perhaps after reading Section 1.1. In this book, we use computer programs to describe algorithms. One important reason for doing so is that it makes easier the task of checking whether they are finite, deterministic, and effective, as required. But it is also important to recognize that a program in a particular language is just one way to express an algorithm. The fact that -
many of the algorithms in this book have been expressed in multiple programming languages over the past several decades reinforces the idea that each algorithm is a method suitable for implementation on any computer in any programming language. Most algorithms of interest involve organizing the data involved in the computation. Such organization leads to data structures, which also are central objects of study in computer science. Algorithms and data structures go hand in hand. In this book we tak-
e the view that data structures exist as the byproducts or end products of algorithms and that we must therefore study them in order to understand the algorithms. Simple algorithms can give rise to complicated data structures and, conversely, complicated algorithms can use simple data structures. We shall study the properties of many data structures in this book; indeed, we might well have titled the book Algorithms and Data Structures.
Compute the greatest common divisor of two nonnegative integers p and q as follows: If q is 0, the answer is p. If not, divide p by q and take the remainder r. The answer is the greatest common divisor of q and r.
public static int gcd(int p, int q) {
if (q == 0) return p; int r = p % q; return gcd(q, r); }
Euclid’s algorithm
Java-language description
English-language description
4 CHAPTER 1 ■ Fundamentals

When we use a computer to help us solve a problem, we typically are faced with a number of possible approaches. For small problems, it hardly matters which approach we use, as long as we have one that correctly solves the problem. For huge problems (or applications where we need to solve huge numbers of small problems), however, we quickly become motivated to devise methods that use time and space efficiently. The primary reason to learn about algorithms is that this discipline gives us the poten-
tial to reap huge savings, even to the point of enabling us to do tasks that would otherwise be impossible. In an application where we are processing millions of objects, it is not unusual to be able to make a program millions of times faster by using a welldesigned algorithm. We shall see such examples on numerous occasions throughout the book. By contrast, investing additional money or time to buy and install a new computer holds the potential for speeding up a program by perhaps a factor of onl-
y 10 or 100. Careful algorithm design is an extremely effective part of the process of solving a huge problem, whatever the applications area. When developing a huge or complex computer program, a great deal of effort must go into understanding and defining the problem to be solved, managing its complexity, and decomposing it into smaller subtasks that can be implemented easily. Often, many of the algorithms required after the decomposition are trivial to implement. In most cases, however, there a-
re a few algorithms whose choice is critical because most of the system resources will be spent running those algorithms. These are the types of algorithms on which we concentrate in this book. We study fundamental algorithms that are useful for solving challenging problems in a broad variety of applications areas. The sharing of programs in computer systems is becoming more widespread, so although we might expect to be using a large fraction of the algorithms in this book, we also might expect to-
 have to implement only a small fraction of them. For example, the Java libraries contain implementations of a host of fundamental algorithms. However, implementing simple versions of basic algorithms helps us to understand them better and thus to more effectively use and tune advanced versions from a library. More important, the opportunity to reimplement basic algorithms arises frequently. The primary reason to do so is that we are faced, all too often, with completely new computing environments-
 (hardware and software) with new features that old implementations may not use to best advantage. In this book, we concentrate on the simplest reasonable implementations of the best algorithms. We do pay careful attention to coding the critical parts of the algorithms, and take pains to note where low-level optimization effort could be most beneficial. The choice of the best algorithm for a particular task can be a complicated process, perhaps involving sophisticated mathematical analysis. The br-
anch of computer science that comprises the study of such questions is called analysis of algorithms. Many
CHAPTER 1 ■ Fundamentals 5

of the algorithms that we study have been shown through analysis to have excellent theoretical performance; others are simply known to work well through experience. Our primary goal is to learn reasonable algorithms for important tasks, yet we shall also pay careful attention to comparative performance of the methods. We should not use an algorithm without having an idea of what resources it might consume, so we strive to be aware of how our algorithms might be expected to perform.
Summary of topics As an overview, we describe the major parts of the book, giving specific topics covered and an indication of our general orientation toward the material. This set of topics is intended to touch on as many fundamental algorithms as possible. Some of the areas covered are core computer-science areas that we study in depth to learn basic algorithms of wide applicability. Other algorithms that we discuss are from advanced fields of study within computer science and related fields. Th-
e algorithms that we consider are the products of decades of research and development and continue to play an essential role in the ever-expanding applications of computation.
Fundamentals (Chapter 1) in the context of this book are the basic principles and methodology that we use to implement, analyze, and compare algorithms. We consider our Java programming model, data abstraction, basic data structures, abstract data types for collections, methods of analyzing algorithm performance, and a case study.
Sorting algorithms (Chapter 2) for rearranging arrays in order are of fundamental importance. We consider a variety of algorithms in considerable depth, including insertion sort, selection sort, shellsort, quicksort, mergesort, and heapsort. We also encounter algorithms for several related problems, including priority queues, selection, and merging. Many of these algorithms will find application as the basis for other algorithms later in the book.
Searching algorithms (Chapter 3) for finding specific items among large collections of items are also of fundamental importance. We discuss basic and advanced methods for searching, including binary search trees, balanced search trees, and hashing. We note relationships among these methods and compare performance.
Graphs (Chapter 4) are sets of objects and connections, possibly with weights and orientation. Graphs are useful models for a vast number of difficult and important problems, and the design of algorithms for processing graphs is a major field of study. We consider depth-first search, breadth-first search, connectivity problems, and several algorithms and applications, including Kruskal’s and Prim’s algorithms for finding minimum spanning tree and Dijkstra’s and the Bellman-Ford algorithms for solv-
ing shortest-paths problems.
6 CHAPTER 1 ■ Fundamentals

Strings (Chapter 5) are an essential data type in modern computing applications. We consider a range of methods for processing sequences of characters. We begin with faster algorithms for sorting and searching when keys are strings. Then we consider substring search, regular expression pattern matching, and data-compression algorithms. Again, an introduction to advanced topics is given through treatment of some elementary problems that are important in their own right.
Context (Chapter 6) helps us relate the material in the book to several other advanced fields of study, including scientific computing, operations research, and the theory of computing. We survey event-based simulation, B-trees, suffix arrays, maximum flow, and other advanced topics from an introductory viewpoint to develop appreciation for the interesting advanced fields of study where algorithms play a critical role. Finally, we describe search problems, reduction, and NP-completeness to introdu-
ce the theoretical underpinnings of the study of algorithms and relationships to material in this book.
The study of algorithms is interesting and exciting because it is a new field (almost all the algorithms that we study are less than 50 years old, and some were just recently discovered) with a rich tradition (a few algorithms have been known for hundreds of years). New discoveries are constantly being made, but few algorithms are completely understood. In this book we shall consider intricate, complicated, and difficult algorithms as well as elegant, simple, and easy ones. Our challenge is to und-
erstand the former and to appreciate the latter in the context of scientific and commercial applications. In doing so, we shall explore a variety of useful tools and develop a style of algorithmic thinking that will serve us well in computational challenges to come.
CHAPTER 1 ■ Fundamentals 7

1.1 BASIC PROGRAMMING MODEL
Our study of algorithms is based upon implementing them as programs written in the Java programming language. We do so for several reasons: ■ Our programs are concise, elegant, and complete descriptions of algorithms. ■ You can run the programs to study properties of the algorithms. ■ You can put the algorithms immediately to good use in applications. These are important and significant advantages over the alternatives of working with English-language descriptions of algorithms. A potential downsi-
de to this approach is that we have to work with a specific programming language, possibly making it difficult to separate the idea of the algorithm from the details of its implementation. Our implementations are designed to mitigate this difficulty, by using programming constructs that are both found in many modern languages and needed to adequately describe the algorithms. We use only a small subset of Java. While we stop short of formally defining the subset that we use, you will see that we ma-
ke use of relatively few Java constructs, and that we emphasize those that are found in many modern programming languages. The code that we present is complete, and our expectation is that you will download it and execute it, on our test data or test data of your own choosing. We refer to the programming constructs, software libraries, and operating system features that we use to implement and describe algorithms as our programming model. In this section and Section 1.2, we fully describe this pro-
gramming model. The treatment is self-contained and primarily intended for documentation and for your reference in understanding any code in the book. The model we describe is the same model introduced in our book An Introduction to Programming in Java: An Interdisciplinary Approach, which provides a slower-paced introduction to the material. For reference, the figure on the facing page depicts a complete Java program that illustrates many of the basic features of our programming model. We use thi-
s code for examples when discussing language features, but defer considering it in detail to page 46 (it implements a classic algorithm known as binary search and tests it for an application known as whitelist filtering). We assume that you have experience programming in some modern language, so that you are likely to recognize many of these features in this code. Page references are included in the annotations to help you find answers to any questions that you might have. Since our code is somewh-
at stylized and we strive to make consistent use of various Java idioms and constructs, it is worthwhile even for experienced Java programmers to read the information in this section.
8

import java.util.Arrays;
public class BinarySearch {
public static int rank(int key, int[] a) {
int lo = 0; int hi = a.length - 1; while (lo <= hi) {
int mid = lo + (hi - lo) / 2; if (key < a[mid]) hi = mid - 1; else if (key > a[mid]) lo = mid + 1; else return mid; }
return -1; }
public static void main(String[] args) {
int[] whitelist = In.readInts(args[0]);
Arrays.sort(whitelist);
while (!StdIn.isEmpty()) {
int key = StdIn.readInt(); if (rank(key, whitelist) == -1) StdOut.println(key); } }
}
expression (see page 11)
call a method in our standard library; need to download code (see page 27)
call a method in a Java library (see page 27)
call a local method (see page 27)
import a Java library (see page 27)
code must be in file BinarySearch.java (see page 26)
initializing declaration statement (see page 16)
command line (see page 36)
static method (see page 22)
unit test client (see page 26)
loop statement (see page 15)
conditional statement (see page 15)
system calls main()
system passes argument value "whitelist.txt" to main()
Anatomy of a Java program and its invocation from the command line
parameter variables
return type parameter type
return statement
no return value; just side effects (see page 24)
% java BinarySearch largeW.txt < largeT.txt
499569 984875 ...
file name (args[0])
file redirectd from StdIn (see page 40)
StdOut (see page 37)
1.1 ■ Basic Programming Model 9

Basic structure of a Java program A Java program (class) is either a library of static methods (functions) or a data type definition. To create libraries of static methods and data-type definitions, we use the following five components, the basis of programming in Java and many other modern languages: ■ Primitive data types precisely define the meaning of terms like integer, real number, and boolean value within a computer program. Their definition includes the set of possible values and operatio-
ns on those values, which can be combined into expressions like mathematical expressions that define values. ■ Statements allow us to define a computation by creating and assigning values to variables, controlling execution flow, or causing side effects. We use six types of statements: declarations, assignments, conditionals, loops, calls, and returns. ■ Arrays allow us to work with multiple values of the same type. ■ Static methods allow us to encapsulate and reuse code and to develop programs as-
 a set of independent modules. ■ Strings are sequences of characters. Some operations on them are built in to Java. ■ Input/output sets up communication between programs and the outside world. ■ Data abstraction extends encapsulation and reuse to allow us to define nonprimitive data types, thus supporting object-oriented programming. In this section, we will consider the first five of these in turn. Data abstraction is the topic of the next section. Running a Java program involves interacting with-
 an operating system or a program development environment. For clarity and economy, we describe such actions in terms of a virtual terminal, where we interact with programs by typing commands to the system. See the booksite for details on using a virtual terminal on your system, or for information on using one of the many more advanced program development environments that are available on modern systems. For example, BinarySearch is two static methods, rank() and main(). The first static method, -
rank(), is four statements: two declarations, a loop (which is itself an assignment and two conditionals), and a return. The second, main(), is three statements: a declaration, a call, and a loop (which is itself an assignment and a conditional). To invoke a Java program, we first compile it using the javac command, then run it using the java command. For example, to run BinarySearch, we first type the command javac BinarySearch.java (which creates a file BinarySearch.class that contains a lower-l-
evel version of the program in Java bytecode in the file BinarySearch.class). Then we type java BinarySearch (followed by a whitelist file name) to transfer control to the bytecode version of the program. To develop a basis for understanding the effect of these actions, we next consider in detail primitive data types and expressions, the various kinds of Java statements, arrays, static methods, strings, and input/output.
10 CHAPTER 1 ■ Fundamentals

Primitive data types and expressions A data type is a set of values and a set of operations on those values. We begin by considering the following four primitive data types that are the basis of the Java language: ■ Integers, with arithmetic operations (int) ■ Real numbers, again with arithmetic operations (double) ■ Booleans, the set of values { true, false } with logical operations (boolean) ■ Characters, the alphanumeric characters and symbols that you type (char) Next we consider mechanisms f-
or specifying values and operations for these types. A Java program manipulates variables that are named with identifiers. Each variable is associated with a data type and stores one of the permissible data-type values. In Java code, we use expressions like familiar mathematical expressions to apply the operations associated with each type. For primitive types, we use identifiers to refer to variables, operator symbols such as + - * / to specify operations, literals such as 1 or 3.14 to specify va-
lues, and expressions such as (x + 2.236)/2 to specify operations on values. The purpose of an expression is to define one of the data-type values.
term examples definition
primitive
data type int double boolean char
a set of values and a set of operations on those values (built in to the Java language)
identifier a abc Ab$ a_b ab123 lo hi
a sequence of letters, digits, _, and $, the first of which is not a digit
variable [any identifier] names a data-type value
operator + - * / names a data-type operation
literal source-code representation
of a value
int 1 0 -42 double 2.0 1.0e-15 3.14 boolean true false char 'a' '+' '9' '\n'
expression
a literal, a variable, or a sequence of operations on literals and/or variables that produces a value
int lo + (hi - lo)/2 double 1.0e-15 * t boolean lo <= hi
Basic building blocks for Java programs
1.1 ■ Basic Programming Model 11

To define a data type, we need only specify the values and the set of operations on those values. This information is summarized in the table below for Java’s int, double, boolean, and char data types. These data types are similar to the basic data types found in many programming languages. For int and double, the operations are familiar arithmetic operations; for boolean, they are familiar logical operations. It is important to note that +, -, *, and / are overloaded—the same symbol specifies op-
erations in multiple different types, depending on context. The key property of these primitive operations is that an operation involving values of a given type has a value of that type. This rule highlights the idea that we are often working with approximate values, since it is often the case that the exact value that would seem to be defined by the expression is not a value of the type. For example, 5/3 has the value 1 and 5.0/3.0 has a value very close to 1.66666666666667 but neither of these i-
s exactly equal to 5/3. This table is far from complete; we discuss some additional operators and various exceptional situations that we occasionally need to consider in the Q&A at the end of this section.
type set of values operators typical expressions expression value
int
integers between 231 and 231 1 (32-bit two’s complement)
+ (add) - (subtract) * (multiply) / (divide) % (remainder)
5+3
5-3
5*3
5/3
5%3
8
2
15
1
2
double
double-precision real numbers (64-bit IEEE 754 standard)
+ (add) - (subtract) * (multiply) / (divide)
3.141 - .03
2.0 - 2.0e-7
100 * .015
6.02e23 / 2.0
3.111
1.9999998
1.5
3.01e23
boolean true or false
&& (and) || (or) ! (not) ^ (xor)
true && false
false || true
!false
true ^ true
false
true
true
false
char characters
(16-bit) [arithmetic operations, rarely used]
Primitive data types in Java
12 CHAPTER 1 ■ Fundamentals

Expressions. As illustrated in the table at the bottom of the previous page, typical expressions are infix: a literal (or an expression), followed by an operator, followed by another literal (or another expression). When an expression contains more than one operator, the order in which they are applied is often significant, so the following precedence conventions are part of the Java language specification: The operators * and / ( and %) have higher precedence than (are applied before) the + and -
- operators; among logical operators, ! is the highest precedence, followed by && and then ||. Generally, operators of the same precedence are applied left to right. As in standard arithmetic expressions, you can use parentheses to override these rules. Since precedence rules vary slightly from language to language, we use parentheses and otherwise strive to avoid dependence on precedence rules in our code.
Type conversion. Numbers are automatically promoted to a more inclusive type if no information is lost. For example, in the expression 1 + 2.5 , the 1 is promoted to the double value 1.0 and the expression evaluates to the double value 3.5 . A cast is a type name in parentheses within an expression, a directive to convert the following value into a value of that type. For example (int) 3.7 is 3 and (double) 3 is 3.0. Note that casting to an int is truncation instead of rounding—rules for casting w-
ithin complicated expressions can be intricate, and casts should be used sparingly and with care. A best practice is to use expressions that involve literals or variables of a single type.
Comparisons. The following operators compare two values of the same type and produce a boolean value: equal (==), not equal (!=), less than (<), less than or equal (<=), greater than (>), and greater than or equal (>=). These operators are known as mixed-type operators because their value is boolean, not the type of the values being compared. An expression with a boolean value is known as a boolean expression. Such expressions are essential components in conditional and loop statements, as we will-
 see.
Other primitive types. Java’s int has 232 different values by design, so it can be represented in a 32-bit machine word (many machines have 64-bit words nowadays, but the 32-bit int persists). Similarly, the double standard specifies a 64-bit representation. These data-type sizes are adequate for typical applications that use integers and real numbers. To provide flexibility, Java has five additional primitive data types: ■ 64-bit integers, with arithmetic operations (long) ■ 16-bit integers, with-
 arithmetic operations (short) ■ 16-bit characters, with arithmetic operations (char) ■ 8-bit integers, with arithmetic operations (byte) ■ 32-bit single-precision real numbers, again with arithmetic operations (float) We most often use int and double arithmetic operations in this book, so we do not consider the others (which are very similar) in further detail here.
1.1 ■ Basic Programming Model 13

Statements A Java program is composed of statements, which define the computation by creating and manipulating variables, assigning data-type values to them, and controlling the flow of execution of such operations. Statements are often organized in blocks, sequences of statements within curly braces. ■ Declarations create variables of a specified type and name them with identifiers. ■ Assignments associate a data-type value (defined by an expression) with a variable. Java also has several implic-
it assignment idioms for changing the value of a data-type value relative to its current value, such as incrementing the value of an integer variable. ■ Conditionals provide for a simple change in the flow of execution—execute the statements in one of two blocks, depending on a specified condition. ■ Loops provide for a more profound change in the flow of execution—execute the statements in a block as long as a given condition is true. ■ Calls and returns relate to static methods (see page 22), wh-
ich provide another way to change the flow of execution and to organize code. A program is a sequence of statements, with declarations, assignments, conditionals, loops, calls, and returns. Programs typically have a nested structure : a statement among the statements in a block within a conditional or a loop may itself be a conditional or a loop. For example, the while loop in rank() contains an if statement. Next, we consider each of these types of statements in turn.
Declarations. A declaration statement associates a variable name with a type at compile time. Java requires us to use declarations to specify the names and types of variables. By doing so, we are being explicit about any computation that we are specifying. Java is said to be a strongly typed language, because the Java compiler checks for consistency (for example, it does not permit us to multiply a boolean and a double). Declarations can appear anywhere before a variable is first used—most often, -
we put them at the point of first use. The scope of a variable is the part of the program where it is defined. Generally the scope of a variable is composed of the statements that follow the declaration in the same block as the declaration.
Assignments. An assignment statement associates a data-type value (defined by an expression) with a variable. When we write c = a + b in Java, we are not expressing mathematical equality, but are instead expressing an action: set the value of the variable c to be the value of a plus the value of b. It is true that c is mathematically equal to a + b immediately after the assignment statement has been executed, but the point of the statement is to change the value of c (if necessary). The left-hand -
side of an assignment statement must be a single variable; the right-hand side can be an arbitrary expression that produces a value of the type.
14 CHAPTER 1 ■ Fundamentals

Conditionals. Most computations require different actions for different inputs. One way to express these differences in Java is the if statement:
if (<boolean expression>) { <block statements> }
This description introduces a formal notation known as a template that we use occasionally to specify the format of Java constructs. We put within angle brackets (< >) a construct that we have already defined, to indicate that we can use any instance of that construct where specified. In this case, <boolean expression> represents an expression that has a boolean value, such as one involving a comparison operation, and <block statements> represents a sequence of Java statements. It is possible to m-
ake formal definitions of <boolean expression> and <block statements>, but we refrain from going into that level of detail. The meaning of an if statement is selfexplanatory: the statement(s) in the block are to be executed if and only if the boolean expression is true. The if-else statement:
if (<boolean expression>) { <block statements> } else { <block statements> }
allows for choosing between two alternative blocks of statements.
Loops. Many computations are inherently repetitive. The basic Java construct for handling such computations has the following format:
while (<boolean expression>) { <block statements> }
The while statement has the same form as the if statement (the only difference being the use of the keyword while instead of if), but the meaning is quite different. It is an instruction to the computer to behave as follows: if the boolean expression is false, do nothing; if the boolean expression is true, execute the sequence of statements in the block (just as with if) but then check the boolean expression again, execute the sequence of statements in the block again if the boolean expression is -
true, and continue as long as the boolean expression is true. We refer to the statements in the block in a loop as the body of the loop.
Break and continue. Some situations call for slightly more complicated control flow than provide by the basic if and while statements. Accordingly, Java supports two additional statements for use within while loops: ■ The break statement, which immediately exits the loop ■ The continue statement, which immediately begins the next iteration of the loop We rarely use these statements in the code in this book (and many programmers never use them), but they do considerably simplify code in certain ins-
tances.
1.1 ■ Basic Programming Model 15

Shortcut notations There are several ways to express a given computation; we seek clear, elegant, and efficient code. Such code often takes advantage of the following widely used shortcuts (that are found in many languages, not just Java).
Initializing declarations. We can combine a declaration with an assignment to initialize a variable at the same time that it is declared (created). For example, the code int i = 1; creates an int variable named i and assigns it the initial value 1. A best practice is to use this mechanism close to first use of the variable (to limit scope).
Implicit assignments. The following shortcuts are available when our purpose is to modify a variable’s value relative to its current value: ■ Increment/decrement operators: i++ is the same as i = i + 1 and has the value i in an expression. Similarly, i-- is the same as i = i - 1. The code ++i and --i are the same except that the expression value is taken after the increment/ decrement, not before. ■ Other compound operations: Prepending a binary operator to the = in an assignment is equivalent to -
using the variable on the left as the first operand. For example, the code i/=2; is equivalent to the code i = i/2; Note that i += 1; has the same effect as i = i+1; (and i++).
Single-statement blocks. If a block of statements in a conditional or a loop has only a single statement, the curly braces may be omitted.
For notation. Many loops follow this scheme: initialize an index variable to some value and then use a while loop to test a loop continuation condition involving the index variable, where the last statement in the while loop increments the index variable. You can express such loops compactly with Java’s for notation:
for (<initialize>; <boolean expression>; <increment>) {
<block statements> }
This code is, with only a few exceptions, equivalent to
<initialize>; while (<boolean expression>) {
<block statements> <increment>; }
We use for loops to support this initialize-and-increment programming idiom.
16 CHAPTER 1 ■ Fundamentals

statement examples definition
declaration int i;
double c;
create a variable of a specified type, named with a given identifier
assignment a = b + 3;
discriminant = b*b - 4.0*c; assign a data-type value to a variable
initializing declaration
int i = 1;
double c = 3.141592625;
declaration that also assigns an initial value
implicit assignment
i++;
i += 1;
i = i + 1;
conditional (if) if (x < 0) x = -x; execute a statement,
depending on boolean expression
conditional (if-else)
if (x > y) max = x; else max = y;
execute one or the other statement, depending on boolean expression
loop (while)
int v = 0; while (v <= N) v = 2*v;
double t = c; while (Math.abs(t - c/t) > 1e-15*t) t = (c/t + t) / 2.0;
execute statement until boolean expression is false
loop (for)
for (int i = 1; i <= N; i++) sum += 1.0/i;
for (int i = 0; i <= N; i++) StdOut.println(2*Math.PI*i/N);
compact version of while statement
call int key = StdIn.readInt(); invoke other methods (see page 22)
return return false; return from a method (see page 24)
Java statements
1.1 ■ Basic Programming Model 17

Arrays An array stores a sequence of values that are all of the same type. We want not only to store values but also to access each individual value. The method that we use to refer to individual values in an array is numbering and then indexing them. If we have N values, we think of them as being numbered from 0 to N 1. Then, we can unambiguously specify one of them in Java code by using the notation a[i] to refer to the ith value for any value of i from 0 to N-1. This Java construct is known as-
 a onedimensional array.
Creating and initializing an array. Making an array in a Java program involves three distinct steps: ■ Declare the array name and type. ■ Create the array. ■ Initialize the array values. To declare the array, you need to specify a name and the type of data it will contain. To create it, you need to specify its length (the number of values). For example, the “long form” code shown at right makes an array of N numbers of type double, all initialized to 0.0. The first statement is the array declarati-
on. It is just like a declaration of a variable of the corresponding primitive type except for the square brackets following the type name, which specify that we are declaring an array. The keyword new in the second statement is a Java directive to create the array. The reason that we need to explicitly create arrays at run time is that the Java compiler cannot know how much space to reserve for the array at compile time (as it can for primitive-type values). The for statement initializes the N ar-
ray values. This code sets all of the array entries to the value 0.0. When you begin to write code that uses an array, you must be sure that your code declares, creates, and initializes it. Omitting one of these steps is a common programming mistake.
Short form. For economy in code, we often take advantage of Java’s default array initialization convention and combine all three steps into a single statement, as in the “short form” code in our example. The code to the left of the equal sign constitutes the declaration; the code to the right constitutes the creation. The for loop is unnecessary in this case because the default initial value of variables of type double in a Java array is
declaration
creation
double[] a; a = new double[N]; for (int i = 0; i < N; i++) a[i] = 0.0;
double[] a = new double[N];
initialization
Declaring, creating and initializing an array
short form
int[] a = { 1, 1, 2, 3, 5, 8 };
initializing declaration
long form
18 CHAPTER 1 ■ Fundamentals

0.0, but it would be required if a nonzero value were desired. The default initial value is zero for numeric types and false for type boolean. The third option shown for our example is to specify the initialization values at compile time, by listing literal values between curly braces, separated by commas.
Using an array. Typical array-processing code is shown on page 21. After declaring and creating an array, you can refer to any individual value anywhere you would use a variable name in a program by enclosing an integer index in square brackets after the array name. Once we create an array, its size is fixed. A program can refer to the length of an array a[] with the code a.length. The last element of an array a[] is always a[a.length-1]. Java does automatic bounds checking—if you have created an -
array of size N and use an index whose value is less than 0 or greater than N-1, your program will terminate with an ArrayOutOfBoundsException runtime exception.
Aliasing. Note carefully that an array name refers to the whole array—if we assign one array name to another, then both refer to the same array, as illustrated in the following code fragment.
int[] a = new int[N]; ... a[i] = 1234; ... int[] b = a; ... b[i] = 5678; // a[i] is now 5678.
This situation is known as aliasing and can lead to subtle bugs. If your intent is to make a copy of an array, then you need to declare, create, and initialize a new array and then copy all of the entries in the original array to the new array, as in the third example on page 21.
Two-dimensional arrays. A two-dimensional array in Java is an array of one-dimensional arrays. A two-dimensional array may be ragged (its arrays may all be of differing lengths), but we most often work with (for appropriate parameters M and N) M-by-N two-dimensional arrays that are arrays of M rows, each an array of length N (so it also makes sense to refer to the array as having N columns). Extending Java array constructs to handle two-dimensional arrays is straightforward. To refer to the entry -
in row i and column j of a two-dimensional array a[][], we use the notation a[i][j]; to declare a two-dimensional array, we add another pair of square brackets; and to create the array, we specify the number of rows followed by the number of columns after the type name (both within square brackets), as follows:
1.1 ■ Basic Programming Model 19

double[][] a = new double[M][N];
We refer to such an array as an M-by-N array. By convention, the first dimension is the number of rows and the second is the number of columns. As with one-dimensional arrays, Java initializes all entries in arrays of numeric types to zero and in arrays of boolean values to false. Default initialization of two-dimensional arrays is useful because it masks more code than for one-dimensional arrays. The following code is equivalent to the single-line create-and-initialize idiom that we just consider-
ed:
double[][] a; a = new double[M][N]; for (int i = 0; i < M; i++) for (int j = 0; j < N; j++) a[i][j] = 0.0;
This code is superfluous when initializing to zero, but the nested for loops are needed to initialize to other value(s).
20 CHAPTER 1 ■ Fundamentals

task implementation (code fragment)
find the maximum of the array values
double max = a[0]; for (int i = 1; i < a.length; i++) if (a[i] > max) max = a[i];
compute the average of the array values
int N = a.length; double sum = 0.0; for (int i = 0; i < N; i++) sum += a[i]; double average = sum / N;
copy to another array
int N = a.length; double[] b = new double[N]; for (int i = 0; i < N; i++) b[i] = a[i];
reverse the elements within an array
int N = a.length; for (int i = 0; i < N/2; i++) {
double temp = a[i]; a[i] = a[N-1-i]; a[N-i-1] = temp; }
matrix-matrix multiplication (square matrices)
a[][]*b[][] = c[][]
int N = a.length; double[][] c = new double[N][N]; for (int i = 0; i < N; i++) for (int j = 0; j < N; j++) { // Compute dot product of row i and column j. for (int k = 0; k < N; k++) c[i][j] += a[i][k]*b[k][j]; }
Typical array-processing code
1.1 ■ Basic Programming Model 21

Static methods Every Java program in this book is either a data-type definition (which we describe in detail in Section 1.2) or a library of static methods (which we describe here). Static methods are called functions in many programming languages, since they can behave like mathematical functions, as described next. Each static method is a sequence of statements that are executed, one after the other, when the static method is called, in the manner described below. The modifier static distinguis-
hes these methods from instance methods, which we discuss in Section 1.2. We use the word method without a modifier when describing characteristics shared by both kinds of methods.
Defining a static method. A method encapsulates a computation that is defined as a sequence of statements. A method takes arguments (values of given data types) and computes a return value of some data type that depends upon the arguments (such as a value defined by a mathematical function) or causes a side effect that depends on the arguments (such as printing a value). The static method rank() in BinarySearch is an example of the first; main() is an example of the second. Each static method is c-
omposed of a signature (the keywords public static followed by a return type, the method name, and a sequence of arguments, each with a declared type) and a body (a statement block: a sequence of statements, enclosed in curly braces). Examples of static methods are shown in the table on the facing page.
Invoking a static method. A call on a static method is its name followed by expressions that specify argument values in parentheses, separated by commas. When the method call is part of an expression, the method computes a value and that value is used in place of the call in the expression. For example the call on rank() in BinarySearch() returns an int value. A method call followed by a semicolon is a statement that generally causes side effects. For example, the call Arrays.sort() in main() in B-
inarySearch is a call on the system method Arrays.sort() that has the side effect of putting the entries in the array in sorted order. When a method is called, its argument variables are initialized with the values of the corresponding expressions in the call. A return statement terminates a static method, returning control to the caller. If the static method is to compute a value, that value must be specified in a return statement (if such a static method can reach the end of its sequence of stat-
ements without a return, the compiler will report the error).
signature
method body
return statement
method
return name
type
argument variable
local variables
argument type
call on another method
public static double sqrt ( double c )
{
if (c < 0) return Double.NaN; double err = 1e-15;
double t = c; while (Math.abs(t - c/t) > err * t) t = (c/t + t) / 2.0; return t; }
Anatomy of a static method
22 CHAPTER 1 ■ Fundamentals

task implementation
absolute value of an int value
public static int abs(int x) {
if (x < 0) return -x; else return x; }
absolute value of a double value
public static double abs(double x) {
if (x < 0.0) return -x; else return x; }
primality test
public static boolean isPrime(int N) {
if (N < 2) return false; for (int i = 2; i*i <= N; i++) if (N % i == 0) return false; return true; }
square root (Newton’s method)
public static double sqrt(double c) {
if (c > 0) return Double.NaN; double err = 1e-15; double t = c; while (Math.abs(t - c/t) > err * t) t = (c/t + t) / 2.0; return t; }
hypotenuse of a right triangle
public static double hypotenuse(double a, double b) { return Math.sqrt(a*a + b*b); }
Harmonic number (see page 185)
public static double H(int N) {
double sum = 0.0; for (int i = 1; i <= N; i++) sum += 1.0 / i; return sum; }
Typical implementations of static methods
1.1 ■ Basic Programming Model 23

Properties of methods. A complete detailed description of the properties of methods is beyond our scope, but the following points are worth noting: ■ Arguments are passed by value. You can use argument variables anywhere in the code in the body of the method in the same way you use local variables. The only difference between an argument variable and a local variable is that the argument variable is initialized with the argument value provided by the calling code. The method works with the value -
of its arguments, not the arguments themselves. One consequence of this approach is that changing the value of an argument variable within a static method has no effect on the calling code. Generally, we do not change argument variables in the code in this book. The passby-value convention implies that array arguments are aliased (see page 19)—the method uses the argument variable to refer to the caller’s array and can change the contents of the array (though it cannot change the array itself). Fo-
r example, Arrays.sort() certainly changes the contents of the array passed as argument: it puts the entries in order. ■ Method names can be overloaded. For example, the Java Math library uses this approach to provide implementations of Math.abs(), Math.min(), and Math.max() for all primitive numeric types. Another common use of overloading is to define two different versions of a function, one that takes an argument and another that uses a default value of that argument.
■ A method has a single return value but may have multiple return statements. A Java method can provide only one return value, of the type declared in the method signature. Control goes back to the calling program as soon as the first return statement in a static method is reached. You can put return statements wherever you need them. Even though there may be multiple return statements, any static method returns a single value each time it is invoked: the value following the first return statement-
 encountered. ■ A method can have side effects. A method may use the keyword void as its return type, to indicate that it has no return value. An explicit return is not necessary in a void static method: control returns to the caller after the last statement. A void static method is said to produce side effects (consume input, produce output, change entries in an array, or otherwise change the state of the system). For example, the main() static method in our programs has a void return type becaus-
e its purpose is to produce output. Technically, void methods do not implement mathematical functions (and neither does Math.random(), which takes no arguments but does produce a return value). The instance methods that are the subject of Section 2.1 share these properties, though profound differences surround the issue of side effects.
24 CHAPTER 1 ■ Fundamentals

Recursion. A method can call itself (if you are not comfortable with this idea, known as recursion, you are encouraged to work Exercises 1.1.16 through 1.1.22). For example, the code at the bottom of this page gives an alternate implementation of the rank() method in BinarySearch. We often use recursive implementations of methods because they can lead to compact, elegant code that is easier to understand than a corresponding implementation that does not use recursion. For example, the comment in -
the implementation below provides a succinct description of what the code is supposed to do. We can use this comment to convince ourselves that it operates correctly, by mathematical induction. We will expand on this topic and provide such a proof for binary search in Section 3.1. There are three important rules of thumb in developing recursive programs: ■ The recursion has a base case—we always include a conditional statement as the first statement in the program that has a return. ■ Recursive ca-
lls must address subproblems that are smaller in some sense, so that recursive calls converge to the base case. In the code below, the difference between the values of the fourth and the third arguments always decreases. ■ Recursive calls should not address subproblems that overlap. In the code below, the portions of the array referenced by the two subproblems are disjoint. Violating any of these guidelines is likely to lead to incorrect results or a spectacularly inefficient program (see Exercise-
s 1.1.19 and 1.1.27). Adhering to them is likely to lead to a clear and correct program whose performance is easy to understand. Another reason to use recursive methods is that they lead to mathematical models that we can use to understand performance. We address this issue for binary search in Section 3.2 and in several other instances throughout the book.
public static int rank(int key, int[] a) { return rank(key, a, 0, a.length - 1); }
public static int rank(int key, int[] a, int lo, int hi) { // Index of key in a[], if present, is not smaller than lo // and not larger than hi. if (lo > hi) return -1; int mid = lo + (hi - lo) / 2; if (key < a[mid]) return rank(key, a, lo, mid - 1); else if (key > a[mid]) return rank(key, a, mid + 1, hi); else return mid; }
Recursive implementation of binary search
1.1 ■ Basic Programming Model 25

Basic programming model. A library of static methods is a set of static methods that are defined in a Java class, by creating a file with the keywords public class followed by the class name, followed by the static methods, enclosed in braces, kept in a file with the same name as the class and a .java extension. A basic model for Java programming is to develop a program that addresses a specific computational task by creating a library of static methods, one of which is named main(). Typing java -
followed by a class name followed by a sequence of strings leads to a call on main() in that class, with an array containing those strings as argument. After the last statement in main() executes, the program terminates. In this book, when we talk of a Java program for accomplishing a task, we are talking about code developed along these lines (possibly also including a data-type definition, as described in Section 1.2). For example, BinarySearch is a Java program composed of two static methods, r-
ank() and main(), that accomplishes the task of printing numbers on an input stream that are not found in a whitelist file given as command-line argument.
Modular programming. Of critical importance in this model is that libraries of static methods enable modular programming where we build libraries of static methods (modules) and a static method in one library can call static methods defined in other libraries. This approach has many important advantages. It allows us to ■ Work with modules of reasonable size, even in program involving a large amount of code ■ Share and reuse code without having to reimplement it ■ Easily substitute improved implem-
entations ■ Develop appropriate abstract models for addressing programming problems ■ Localize debugging (see the paragraph below on unit testing) For example, BinarySearch makes use of three other independently developed libraries, our StdIn and In library and Java’s Arrays library. Each of these libraries, in turn, makes use of several other libraries.
Unit testing. A best practice in Java programming is to include a main() in every library of static methods that tests the methods in the library (some other programming languages disallow multiple main() methods and thus do not support this approach). Proper unit testing can be a significant programming challenge in itself. At a minimum, every module should contain a main() method that exercises the code in the module and provides some assurance that it works. As a module matures, we often refine-
 the main() method to be a development client that helps us do more detailed tests as we develop the code, or a test client that tests all the code extensively. As a client becomes more complicated, we might put it in an independent module. In this book, we use main() to help illustrate the purpose of each module and leave test clients for exercises.
26 CHAPTER 1 ■ Fundamentals

External libraries. We use static methods from four different kinds of libraries, each requiring (slightly) differing procedures for code reuse. Most of these are libraries of static methods, but a few are data-type definitions that also include some static methods. ■ The standard system libraries java.lang.*. These include Math, which contains methods for commonly used mathematical functions; Integer and Double, which we use for converting between strings of characters and int and double values;-
 String and StringBuilder, which
we discuss in detail later in this section and in Chapter 5; and dozens of other libraries that we do not use. ■ Imported system libraries such as java.util.Arrays. There are thousands of such libraries in a standard Java release, but we make scant use of them in this book. An import statement at the beginning of the program is needed to use such libraries (and signal that we are doing so). ■ Other libraries in this book. For example, another program can use rank() in BinarySearch. To use such a p-
rogram, download the source from the booksite into your working directory. ■ The standard libraries Std* that we have developed for use in this book (and our introductory book An Introduction to Programming in Java: An Interdisciplinary Approach). These
libraries are summarized in the following several pages. Source code and instructions for downloading them are available on the booksite. To invoke a method from another library (one in the same directory or a specified directory, a standard system library, or a system library that is named in an import statement before the class definition), we prepend the library name to the method name for each call. For example, the main() method in BinarySearch calls the sort() method in the system library ja-
va.util.Arrays, the readInts() method in our library In, and the println() method in our library StdOut.
Libraries of methods implemented by ourselves and by others in a modular programming environment can vastly expand the scope of our programming model. Beyond all of the libraries available in a standard Java release, thousands more are available on the web for applications of all sorts. To limit the scope of our programming model to a manageable size so that we can concentrate on algorithms, we use just the libraries listed in the table at right on this page, with a subset of their methods listed -
in APIs, as described next.
standard system libraries
Math
Integer†
Double†
String†
StringBuilder
System
imported system libraries
java.util.Arrays
our standard libraries
StdIn
StdOut
StdDraw
StdRandom
StdStats
In†
Out†
† data type definitions that
include some static methods
Libraries with static methods used in this book
1.1 ■ Basic Programming Model 27

APIs A critical component of modular programming is documentation that explains the operation of library methods that are intended for use by others. We will consistently describe the library methods that we use in this book in application programming interfaces (APIs) that list the library name and the signatures and short descriptions of each of the methods that we use. We use the term client to refer to a program that calls a method in another library and the term implementation to describe th-
e Java code that implements the methods in an API.
Example. The following example, the API for commonly used static methods from the standard Math library in java.lang, illustrates our conventions for APIs:
public class Math
static double abs(double a) absolute value of a
static double max(double a, double b) maximum of a and b
static double min(double a, double b) minimum of a and b
Note 1: abs(), max(), and min() are defined also for int, long, and float.
static double sin(double theta) sine function
static double cos(double theta) cosine function
static double tan(double theta) tangent function
Note 2: Angles are expressed in radians. Use toDegrees() and toRadians() to convert. Note 3: Use asin(), acos(), and atan() for inverse functions.
static double exp(double a) exponential (e a)
static double log(double a) natural log (loge a, or ln a)
static double pow(double a, double b) raise a to the bth power (ab)
static double random() random number in [0, 1)
static double sqrt(double a) square root of a
static double E value of e (constant)
static double PI value of (constant)
See booksite for other available functions.
API for Java’s mathematics library (excerpts)
28 CHAPTER 1 ■ Fundamentals

These methods implement mathematical functions—they use their arguments to compute a value of a specified type (except random(), which does not implement a mathematical function because it does not take an argument). Since they all operate on double values and compute a double result, you can consider them as extending the double data type—extensibility of this nature is one of the characteristic features of modern programming languages. Each method is described by a line in the API that specifie-
s the information you need to know in order to use the method. The Math library also defines the precise constant values PI (for ) and E (for e), so that you can use those names to refer to those constants in your programs. For example, the value of Math.sin(Math.PI/2) is 1.0 and the value of Math.log(Math.E) is 1.0 (because Math.sin() takes its argument in radians and Math.log() implements the natural logarithm function).
Java libraries. Extensive online descriptions of thousands of libraries are part of every Java release, but we excerpt just a few methods that we use in the book, in order to clearly delineate our programming model. For example, BinarySearch uses the sort() method from Java’s Arrays library, which we document as follows:
public class Arrays
static void sort(int[] a) put the array in increasing order
Note : This method is defined also for other primitive types and Object.
Excerpt from Java’s Arrays library (java.util.Arrays)
The Arrays library is not in java.lang, so an import statement is needed to use it, as in BinarySearch. Actually, Chapter 2 of this book is devoted to implementations of sort() for arrays, including the mergesort and quicksort algorithms that are implemented in Arrays.sort(). Many of the fundamental algorithms that we consider in this book are implemented in Java and in many other programming environments. For example, Arrays also includes an implementation of binary search. To avoid confusion, we-
 generally use our own implementations, although there is nothing wrong with using a finely tuned library implementation of an algorithm that you understand.
1.1 ■ Basic Programming Model 29

Our standard libraries. We have developed a number of libraries that provide useful functionality for introductory Java programming, for scientific applications, and for the development, study, and application of algorithms. Most of these libraries are for input and output; we also make use of the following two libraries to test and analyze our implementations. The first extends Math.random() to allow us to draw random values from various distributions; the second supports statistical calculation-
s:
public class StdRandom
static void initialize(long seed) initialize
static double random() real between 0 and 1
static int uniform(int N) integer between 0 and N-1
static int uniform(int lo, int hi) integer between lo and hi-1
static double uniform(double lo, double hi) real between lo and hi
static boolean bernoulli(double p) true with probability p
static double gaussian() normal, mean 0, std dev 1
static double gaussian(double m, double s) normal, mean m, std dev s
static int discrete(double[] a) i with probability a[i]
static void shuffle(double[] a) randomly shuffle the array a[]
Note: overloaded implementations of shuffle() are included for other primitive types and for Object.
API for our library of static methods for random numbers
public class StdStats
static double max(double[] a) largest value
static double min(double[] a) smallest value
static double mean(double[] a) average
static double var(double[] a) sample variance
static double stddev(double[] a) sample standard deviation
static double median(double[] a) median
API for our library of static methods for data analysis
30 CHAPTER 1 ■ Fundamentals

The initialize() method in StdRandom allows us to seed the random number generator so that we can reproduce experiments involving random numbers. For reference, implementations of many of these methods are given on page 32. Some of these methods are extremely easy to implement; why do we bother including them in a library? Answers to this question are standard for well-designed libraries: ■ They implement a level of abstraction that allow us to focus on implementing and testing the algorithms in -
the book, not generating random objects or calculating statistics. Client code that uses such methods is clearer and easier to understand than homegrown code that does the same calculation. ■ Library implementations test for exceptional conditions, cover rarely encountered situations, and submit to extensive testing, so that we can count on them to operate as expected. Such implementations might involve a significant amount of code. For example, we often want implementations for various types of d-
ata. For example, Java’s Arrays library includes multiple overloaded implementations of sort(), one for each type of data that you might need to sort. These are bedrock considerations for modular programming in Java, but perhaps a bit overstated in this case. While the methods in both of these libraries are essentially selfdocumenting and many of them are not difficult to implement, some of them represent interesting algorithmic exercises. Accordingly, you are well-advised to both study the code i-
n StdRandom.java and StdStats.java on the booksite and to take advantage of these tried-and-true implementations. The easiest way to use these libraries (and to examine the code) is to download the source code from the booksite and put them in your working directory; various system-dependent mechanisms for using them without making multiple copies are also described on the booksite.
Your own libraries. It is worthwhile to consider every program that you write as a library implementation, for possible reuse in the future. ■ Write code for the client, a top-level implementation that breaks the computation up into manageable parts. ■ Articulate an API for a library (or multiple APIs for multiple libraries) of static methods that can address each part. ■ Develop an implementation of the API, with a main() that tests the methods independent of the client. Not only does this approa-
ch provide you with valuable software that you can later reuse, but also taking advantage of modular programming in this way is a key to successfully addressing a complex programming task.
1.1 ■ Basic Programming Model 31

intended result implementation
random double value in [a, b)
public static double uniform(double a, double b) { return a + StdRandom.random() * (b-a); }
random int value in [0..N)
public static int uniform(int N) { return (int) (StdRandom.random() * N); }
random int value in [lo..hi)
public static int uniform(int lo, int hi) { return lo + StdRandom.uniform(hi - lo); }
random int value drawn from discrete distribution (i with probability a[i])
public static int discrete(double[] a) { // Entries in a[] must sum to 1. double r = StdRandom.random(); double sum = 0.0; for (int i = 0; i < a.length; i++) {
sum = sum + a[i]; if (sum >= r) return i; }
return -1; }
randomly shuffle the elements in an array of double values (See Exercise 1.1.36)
public static void shuffle(double[] a) {
int N = a.length; for (int i = 0; i < N; i++) { // Exchange a[i] with random element in a[i..N-1] int r = i + StdRandom.uniform(N-i); double temp = a[i]; a[i] = a[r]; a[r] = temp; } }
Implementations of static methods in StdRandom library
32 CHAPTER 1 ■ Fundamentals

The purpose of an API is to separate the client from the implementation: the client should know nothing about the implementation other than information given in the API, and the implementation should not take properties of any particular client into account. APIs enable us to separately develop code for various purposes, then reuse it widely. No Java library can contain all the methods that we might need for a given computation, so this ability is a crucial step in addressing complex programming -
applications. Accordingly, programmers normally think of the API as a contract between the client and the implementation that is a clear specification of what each method is to do. Our goal when developing an implementation is to honor the terms of the contract. Often, there are many ways to do so, and separating client code from implementation code gives us the freedom to substitute new and improved implementations. In the study of algorithms, this ability is an important ingredient in our abilit-
y to understand the impact of algorithmic improvements that we develop.
1.1 ■ Basic Programming Model 33

Strings A String is a sequence of characters (char values). A literal String is a sequence of characters within double quotes, such as "Hello, World". The data type String is a Java data type but it is not a primitive type. We consider String now because it is a fundamental data type that almost every Java program uses.
Concatenation. Java has a built-in concatenation operator (+) for String like the built-in operators that it has for primitive types, justifying the addition of the row in the table below to the primitive-type table on page 12. The result of concatenating two String values is a single String value, the first string followed by the second.
Conversion. Two primary uses of strings are to convert values that we can enter on a keyboard into data-type values and to convert data-type values to values that we can read on a display. Java has built-in operations for String to facilitate these operations. In particular, the language includes libraries Integer and Double that contain static methods to convert between String values and int values and between String values and double values, respectively.
public class Integer
static int parseInt(String s) convert s to an int value
static String toString(int i) convert i to a String value
public class Double
static double parseDouble(String s) convert s to a double value
static String toString(double x) convert x to a String value
APIs for conversion between numbers and String values
type set of values typical literals operators
typical expressions
expression value
String character
sequences
"AB" "Hello" "2.5"
+
(concatenate)
"Hi, " + "Bob"
"12" + "34"
"1" + "+" + "2"
"Hi, Bob"
"1234"
"1+2"
Java’s String data type
34 CHAPTER 1 ■ Fundamentals

Automatic conversion. We rarely explicitly use the static toString() methods just described because Java has a built-in mechanism that allows us to convert from any data type value to a String value by using concatenation: if one of the arguments of + is a String, Java automatically converts the other argument to a String (if it is not already a String). Beyond usage like "The square root of 2.0 is " + Math.sqrt(2.0) this mechanism enables conversion of any data-type value to a String, by concate-
nating it with the empty string "".
Command-line arguments. One important use of strings in Java programming is to enable a mechanism for passing information from the command line to the program. The mechanism is simple. When you type the java command followed by a library name followed by a sequence of strings, the Java system invokes the main() method in that library with an array of strings as argument: the strings typed after the library name. For example, the main() method in BinarySearch takes one command-line argument, so the-
 system creates an array of size one. The program uses that value, args[0], to name the file containing the whitelist, for use as the argument to In.readInts(). Another typical paradigm that we often use in our code is when a command-line argument is intended to represent a number, so we use parseInt() to convert to an int value or parseDouble() to convert to a double value.
Computing with strings is an essential component of modern computing. For the moment, we make use of String just to convert between external representation of numbers as sequences of characters and internal representation of numeric data-type values. In Section 1.2, we will see that Java supports many, many more operations on String values that we use throughout the book; in Section 1.4, we will examine the internal representation of String values; and in Chapter 5, we consider in depth algorithms-
 that process String data. These algorithms are among the most interesting, intricate, and impactful methods that we consider in this book.
1.1 ■ Basic Programming Model 35

Input and output The primary purpose of our standard libraries for input, output, and drawing is to support a simple model for Java programs to interact with the outside world. These libraries are built upon extensive capabilities that are available in Java libraries, but are generally much more complicated and much more difficult to learn and use. We begin by briefly reviewing the model. In our model, a Java program takes input values from command-line arguments or from an abstract stream of cha-
racters known as the standard input stream and writes to another abstract stream of characters known as the standard output stream.
Necessarily, we need to consider the interface between Java and the operating system, so we need to briefly discuss basic mechanisms that are provided by most modern operating systems and program-development environments. You can find more details about your particular system on the booksite. By default, command-line arguments, standard input, and standard output are associated with an application supported by either the operating system or the program development environment that takes commands. -
We use the generic term terminal window to refer to the window maintained by this application, where we type and read text. Since early Unix systems in the 1970s this model has proven to be a convenient and direct way for us to interact with our programs and data. We add to the classical model a standard drawing that allows us to create visual representations for data analysis.
Commands and arguments. In the terminal window, we see a prompt, where we type commands to the operating system that may take arguments. We use only a few commands in this book, shown in the table below. Most often, we use the .java command, to run our programs. As mentioned on page 35, Java classes have a main() static method that takes a String array args[] as its argument. That array is the sequence of command-line arguments that we type, provided to Java by the operating system. By convention,-
 both Java and the operating system process the arguments as strings. If we intend for an argument to be a number, we use a method such as Integer.parseInt() to convert it from String to the appropriate type.
standard input command-line
arguments
standard output
standard drawing
file I/O
A bird’s-eye view of a Java program
command arguments purpose
javac .java file name compile Java program
java .class file name (no extension)
and command-line arguments run Java program
more any text file name print file contents
Typical operating-system commands
36 CHAPTER 1 ■ Fundamentals

Standard output. Our StdOut library provides support for standard output. By default, the system connects standard output to the terminal window. The print() method puts its argument on standard output; the println() method adds a newline; and the printf() method supports formatted output, as described next. Java provides a similar method in its System.out library; we use StdOut to treat standard input and standard output in a uniform manner (and to provide a few technical improvements).
public class StdOut
static void print(String s) print s
static void println(String s) print s, followed by newline
static void println() print a new line
static void printf(String f, ... ) formatted print
Note: overloaded implementations are included for primitive types and for Object.
API for our library of static methods for standard output
To use these methods, download into your working directory StdOut.java from the booksite and use code such as StdOut.println("Hello, World"); to call them. A sample client is shown at right.
Formatted output. In its simplest form, printf() takes two arguments. The first argument is a format string that describes how the second argument is to be converted to a string for output. The simplest type of format string begins with % and ends with a one-letter conversion code. The conversion codes that we use most frequently are d (for decimal values from Java’s integer types), f (for floating-point values), and s (for String values). Between the % and the conversion code is an integer value -
that specifies the field width of the
% java RandomSeq 5 100.0 200.0 123.43 153.13 144.38 155.18 104.02
public class RandomSeq {
public static void main(String[] args) { // Print N random values in (lo, hi). int N = Integer.parseInt(args[0]); double lo = Double.parseDouble(args[1]); double hi = Double.parseDouble(args[2]); for (int i = 0; i < N; i++) {
double x = StdRandom.uniform(lo, hi); StdOut.printf("%.2f\n", x); } } }
Sample StdOut client
prompt
invoke Java runtime
call the static method main() in RandomSeq
args[0] args[1] args[2]
% java RandomSeq 5 100.0 200.0
Anatomy of a command
1.1 ■ Basic Programming Model 37

converted value (the number of characters in the converted output string). By default, blank spaces are added on the left to make the length of the converted output equal to the field width; if we want the spaces on the right, we can insert a minus sign before the field width. (If the converted output string is bigger than the field width, the field width is ignored.) Following the width, we have the option of including a period followed by the number of digits to put after the decimal point (the-
 precision) for a double value or the number of characters to take from the beginning of the string for a String value. The most important thing to remember about using printf() is that the conversion code in the format and the type of the corresponding argument must match. That is, Java must be able to convert from the type of the argument to the type required by the conversion code. The first argument of printf() is a String that may contain characters other than a format string. Any part of the-
 argument that is not part of a format string passes through to the output, with the format string replaced by the argument value (converted to a String as specified). For example, the statement
StdOut.printf("PI is approximately %.2f\n", Math.PI);
prints the line
PI is approximately 3.14
Note that we need to explicitly include the newline character \n in the argument in order to print a new line with printf(). The printf() function can take more than two arguments. In this case, the format string will have a format specifier for each additional argument, perhaps separated by other characters to pass through to the output. You can also use the static method String.format() with arguments exactly as just described for printf() to get a formatted string without printing it. Formatted-
 printing is a convenient mechanism that allows us to develop compact code that can produce tabulated experimental data (our primary use in this book).
type code typical
literal
sample format strings
converted string values for output
int d 512 "%14d"
"%-14d"
" 512" "512 "
double f 1595.1680010754388
"%14.2f" "%.7f" "%14.4e"
" 1595.17" "1595.1680011" " 1.5952e+03"
e
String s "Hello, World"
"%14s" "%-14s" "%-14.5s"
" Hello, World" "Hello, World " "Hello "
Format conventions for printf() (see the booksite for many other options)
38 CHAPTER 1 ■ Fundamentals

Standard input. Our StdIn library takes data from the standard input stream that may be empty or may contain a sequence of values separated by whitespace (spaces, tabs, newline characters, and the like). By default, the system connects standard output to the terminal window—what you type is the input stream (terminated by <ctrl-d> or <ctrl-z>, depending on your terminal window application). Each value is a String or a value from one of Java’s primitive types. One of the key features of the standa-
rd input stream is that your program consumes values when it reads them. Once your program has read a value, it cannot back up and read it again. This assumption is restrictive, but it reflects physical characteristics of some input devices and simplifies implementing the abstraction. Within the input stream model, the static methods in this library are largely self-documenting (described by their signatures).
public class StdIn
static boolean isEmpty() true if no more values, false otherwise
static int readInt() read a value of type int
static double readDouble() read a value of type double
static float readFloat() read a value of type float
static long readLong() read a value of type long
static boolean readBoolean() read a value of type boolean
static char readChar() read a value of type char
static byte readByte() read a value of type byte
static String readString() read a value of type String
static boolean hasNextLine() is there another line in the input stream?
static String readLine() read the rest of the line
static String readAll() read the rest of the input stream
API for our library of static methods for standard input
public class Average {
public static void main(String[] args) { // Average the numbers on StdIn. double sum = 0.0; int cnt = 0; while (!StdIn.isEmpty()) { // Read a number and cumulate the sum. sum += StdIn.readDouble(); cnt++; }
double avg = sum / cnt; StdOut.printf("Average is %.5f\n", avg); } }
Sample StdIn client
% java Average 1.23456 2.34567 3.45678 4.56789 <ctrl-d> Average is 2.90123
1.1 ■ Basic Programming Model 39

Redirection and piping. Standard input and output enable us to take advantage of command-line extensions supported by many operating-systems. By adding a simple directive to the command that invokes a program, we can redirect its standard output to a file, either for permanent storage or for input to another program at a later time:
% java RandomSeq 1000 100.0 200.0 > data.txt
This command specifies that the standard output stream is not to be printed in the terminal window, but instead is to be written to a text file named data.txt. Each call to StdOut.print() or StdOut.println() appends text at the end of that file. In this example, the end result is a file that contains 1,000 random values. No output appears in the terminal window: it goes directly into the file named after the > symbol. Thus, we can save away information for later retrieval. Not that we do not have -
to change RandomSeq in any way—it is using the standard output abstraction and is unaffected by our use of a different implementation of that abstraction. Similarly, we can redirect standard input so that StdIn reads data from a file instead of the terminal application:
% java Average < data.txt
This command reads a sequence of numbers from the file data.txt and computes their average value. Specifically, the < symbol is a directive that tells the operating system to implement the standard input stream by reading from the text file data.txt instead of waiting for the user to type something into the terminal window. When the program calls StdIn.readDouble(), the operating system reads the value from the file. Combining these to redirect the output of one program to the input of another is -
known as piping:
% java RandomSeq 1000 100.0 200.0 | java Average
redirecting standard output to a file
piping the output of one program to the input of another
redirecting from a file to standard input
standard input
Average
% java Average < data.txt data.txt
standard output
RandomSeq
% java RandomSeq 1000 100.0 200.0 > data.txt
data.txt
standard input
standard output
RandomSeq
% java RandomSeq 1000 100.0 200.0 | java Average
Average
Redirection and piping from the command line
40 CHAPTER 1 ■ Fundamentals

This command specifies that standard output for RandomSeq and standard input for Average are the same stream. The effect is as if RandomSeq were typing the numbers it generates into the terminal window while Average is running. This difference is profound, because it removes the limitation on the size of the input and output streams that we can process. For example, we could replace 1000 in our example with 1000000000, even though we might not have the space to save a billion numbers on our compu-
ter (we do need the time to process them). When RandomSeq calls StdOut.println(), a string is added to the end of the stream; when Average calls StdIn.readInt(), a string is removed from the beginning of the stream. The timing of precisely what happens is up to the operating system: it might run RandomSeq until it produces some output, and then run Average to consume that output, or it might run Average until it needs some output, and then run RandomSeq until it produces the needed output. The end-
 result is the same, but our programs are freed from worrying about such details because they work solely with the standard input and standard output abstractions.
Input and output from a file. Our In and Out libraries provide static methods that implement the abstraction of reading from and writing to a file the contents of an array of values of a primitive type (or String). We use readInts(), readDoubles(), and readStrings() in the In library and writeInts(), writeDoubles(), and writeStrings() in the Out library. The named argument can be a file or a web page. For example, this ability allows us to use a file and standard input for two different purposes i-
n the same program, as in BinarySearch. The In and Out libraries also implement data types with instance methods that allow us the more general ability to treat multiple files as input and output streams, and web pages as input streams, so we will revisit them in Section 1.2.
public class In
static int[] readInts(String name) read int values
static double[] readDoubles(String name) read double values
static String[] readStrings(String name) read String values
public class Out
static void write(int[] a, String name) write int values
static void write(double[] a, String name) write double values
static void write(String[] a, String name) write String values
Note 1: Other primitive types are supported. Note 2: StdIn and StdOut are supported (omit name argument).
APIs for our static methods for reading and writing arrays
1.1 ■ Basic Programming Model 41

Standard drawing (basic methods). Up to this point, our input/output abstractions have focused exclusively on text strings. Now we introduce an abstraction for producing drawings as output. This library is easy to use and allows us to take advantage of a visual medium to cope with far more information than is possible with just text. As with standard input/output, our standard drawing abstraction is implemented in a library StdDraw that you can access by downloading the file StdDraw.java from the-
 booksite into your working directory. Standard draw is very simple: we imagine an abstract drawing device capable of drawing lines and points on a two-dimensional canvas. The device is capable of responding to the commands to draw basic geometric shapes that our programs issue in the form of calls to static methods in StdDraw, including methods for drawing lines, points, text strings, circles, rectangles, and polygons. Like the methods for standard input and standard output, these methods are nea-
rly self-documenting: StdDraw.line() draws a straight line segment connecting the point (x0 , y0) with the point (x1 , y1) whose coordinates are given as arguments. StdDraw.point() draws a spot centered on the point (x, y) whose coordinates are given as arguments, and so forth, as illustrated in the diagrams at right. Geometric shapes can be filled (in black, by default). The default scale is the unit square (all coordinates are between 0 and 1). The standard implementation displays the canvas in -
a window on your computer’s screen, with black lines and points on a white background.
(x0, y0)
(x1, y1)
(x2, y2)
(x3, y3)
double[] x = {x0, x1, x2, x3}; double[] y = {y0, y1, y2, y3}; StdDraw.polygon(x, y);
(x, y)
StdDraw.circle(x, y, r);
StdDraw.square(x, y, r);
r
(x, y)
r
r
StdDraw examples
(1, 1)
StdDraw.point(x0, y0); StdDraw.line(x0, y0, x1, y1);
(x0, y0)
(x2, y2)
(x1, y1)
(0, 0)
42 CHAPTER 1 ■ Fundamentals

public class StdDraw
static void line(double x0, double y0, double x1, double y1)
static void point(double x, double y)
static void text(double x, double y, String s)
static void circle(double x, double y, double r)
static void filledCircle(double x, double y, double r)
static void ellipse(double x, double y, double rw, double rh)
static void filledEllipse(double x, double y, double rw, double rh)
static void square(double x, double y, double r)
static void filledSquare(double x, double y, double r)
static void rectangle(double x, double y, double rw, double rh)
static void filledRectangle(double x, double y, double rw, double rh)
static void polygon(double[] x, double[] y)
static void filledPolygon(double[] x, double[] y)
API for our library of static methods for standard drawing (drawing methods)
Standard drawing (control methods). The library also includes methods to change the scale and size of the canvas, the color and width of the lines, the text font, and the timing of drawing (for use in animation). As arguments for setPenColor() you can use one of the predefined colors BLACK, BLUE, CYAN, DARK_GRAY, GRAY, GREEN, LIGHT_GRAY, MAGENTA, ORANGE, PINK, RED, BOOK_RED, WHITE, and YELLOW that are defined as constants in StdDraw (so we refer to one of them with code like StdDraw.RED). The wind-
ow also includes a menu option to save your drawing to a file, in a format suitable for publishing on the web.
public class StdDraw
static void setXscale(double x0, double x1) reset x range to (x0, x1)
static void setYscale(double y0, double y1) reset y range to (y0, y1)
static void setPenRadius(double r) set pen radius to r
static void setPenColor(Color c) set pen color to c
static void setFont(Font f) set text font to f
static void setCanvasSize(int w, int h) set canvas to w-by-h window
static void clear(Color c) clear the canvas; color it c
static void show(int dt) show all; pause dt milliseconds
API for our library of static methods for standard drawing (control methods)
1.1 ■ Basic Programming Model 43

In this book, we use StdDraw for data analysis and for creating visual representations of algorithms in operation. The table at on the opposite page indicates some possiblities; we will consider many more examples in the text and the exercises throughout the book. The library also supports animation—of course, this topic is treated primarily on the booksite.
44 CHAPTER 1 ■ Fundamentals

data plot implementation (code fragment) result
function values
int N = 100; StdDraw.setXscale(0, N); StdDraw.setYscale(0, N*N); StdDraw.setPenRadius(.01); for (int i = 1; i <= N; i++) {
StdDraw.point(i, i); StdDraw.point(i, i*i); StdDraw.point(i, i*Math.log(i)); }
array of random values
int N = 50; double[] a = new double[N]; for (int i = 0; i < N; i++) a[i] = StdRandom.random(); for (int i = 0; i < N; i++) {
double x = 1.0*i/N; double y = a[i]/2.0; double rw = 0.5/N; double rh = a[i]/2.0; StdDraw.filledRectangle(x, y, rw, rh); }
sorted array of random values
int N = 50; double[] a = new double[N]; for (int i = 0; i < N; i++) a[i] = StdRandom.random(); Arrays.sort(a); for (int i = 0; i < N; i++) {
double x = 1.0*i/N; double y = a[i]/2.0; double rw = 0.5/N; double rh = a[i]/2.0; StdDraw.filledRectangle(x, y, rw, rh); }
StdDraw plotting examples
1.1 ■ Basic Programming Model 45

Binary search The sample Java program that we started with, shown on the facing page, is based on the famous, effective, and widely used binary search algorithm. This example is a prototype of the way in which we will examine new algorithms throughout the book. As with all of the programs we consider, it is both a precise definition of the method and a complete Java implementation that you can download from the booksite.
Binary search. We will study the binary search algorithm in detail in Section 3.2, but a brief description is appropriate here. The algorithm is implemented in the static method rank(), which takes an integer key and a sorted array of int values as arguments and returns the index of the key if it is present in the array, -1 otherwise. It accomplishes this task by maintaining variables lo and hi such that the key is in a[lo..hi] if it is in the array, then entering into a loop that tests the middle-
 entry in the interval (at index mid). If the key is equal to a[mid], the return value is mid; otherwise the method cuts the interval size about in half, looking at the left half if the key is less than a[mid] and at the right half if the key is greater than a[mid]. The process terminates when the key is found or the interval is empty. Binary search is effective because it needs to examine just a few array entries (relative to the size of the array) to find the key (or determine that it is not the-
re).
Development client. For every algorithm implementation, we include a development client main() that you can use with sample input files provided in the book and on the booksite to learn about the algorithm and to test its performance. In this example, the client reads integers from the file named on the command line, then prints any integers on standard input that do not appear in the file. We use small test files such as those shown at right to demonstrate this behavior, and as the basis for trac-
es and examples such as those at left above. We use large test files to model real-world applications and to test performance (see page 48).
10 11 12 16 18 23 29 33 48 54 57 68 77 84 98
10 11 12 16 18 23 29 33 48 54 57 68 77 84 98
10 11 12 16 18 23 29 33 48 54 57 68 77 84 98
successful search for 23
lo mid hi
lo mid hi
lo mid hi
10 11 12 16 18 23 29 33 48 54 57 68 77 84 98
10 11 12 16 18 23 29 33 48 54 57 68 77 84 98
10 11 12 16 18 23 29 33 48 54 57 68 77 84 98
10 11 12 16 18 23 29 33 48 54 57 68 77 84 98
10 11 12 16 18 23 29 33 48 54 57 68 77 84 98
Binary search in an ordered array
unsuccessful search for 50
lo mid hi
lo mid hi
lo mid
hi lo
hi
lo mid hi
84 48 68 10 18 98 12 23 54 57 48 33 16 77 11 29
tinyW.txt
23 50 10 99 18 23 98 84 11 10 48 77 13 54 98 77 77 68
tinyT.txt
Small test files for
BinarySearch test client
not in tinyW.txt
46 CHAPTER 1 ■ Fundamentals

Binary Search
import java.util.Arrays;
public class BinarySearch {
public static int rank(int key, int[] a) { // Array must be sorted. int lo = 0; int hi = a.length - 1; while (lo <= hi) { // Key is in a[lo..hi] or not present. int mid = lo + (hi - lo) / 2; if (key < a[mid]) hi = mid - 1; else if (key > a[mid]) lo = mid + 1; else return mid; }
return -1; }
public static void main(String[] args) {
int[] whitelist = In.readInts(args[0]);
Arrays.sort(whitelist);
while (!StdIn.isEmpty()) { // Read key, print if not in whitelist. int key = StdIn.readInt(); if (rank(key, whitelist) < 0) StdOut.println(key); }
}
}
This program takes the name of a whitelist file (a sequence of integers) as argument and filters any entry that is on the whitelist from standard input, leaving only integers that are not on the whitelist on standard output. It uses the binary search algorithm, implemented in the static method rank(), to accomplish the task efficiently. See Section 3.1 for a full discussion of the binary search algorithm, its correctness, its performance analysis, and its applications.
% java BinarySearch tinyW.txt < tinyT.txt 50 99 13
1.1 ■ Basic Programming Model 47

Whitelisting. When possible, our development clients are intended to mirror practical situations and demonstrate the need for the algorithm at hand. In this case, the process is known as whitelisting. Specifically, imagine a credit card company that needs to check whether customer transactions are for a valid account. To do so, it can ■ Keep customers account numbers in a file, which we refer to as a whitelist. ■ Produce the account number associated with each transaction in the standard input st-
ream. ■ Use the test client to put onto standard output the numbers that are not associated with any customer. Presumably the company would refuse such transactions. It would not be unusual for a big company with millions of customers to have to process millions of transactions or more. To model this situation, we provide on the booksite the files largeW.txt (1 million integers) and largeT.txt (10 million integers).
Performance. A working program is often not sufficient. For example, a much simpler implementation of rank(), which does not even require the array to be sorted, is to check every entry, as follows:
public static int rank(int key, int[] a) {
for (int i = 0; i < a.length; i++) if (a[i] == key) return i; return -1; }
Given this simple and easy-to-understand solution, why do we use mergesort and binary search? If you work Exercise 1.1.38, you will see that your computer is too slow to run this brute-force implementation of rank() for large numbers of inputs (say, 1 million whitelist entries and 10 million transactions). Solving the whitelist problem for a large number of inputs is not feasible without efficient algorithms such as binary search and mergesort. Good performance is often of critical importance, so -
we lay the groundwork for studying performance in Section 1.4 and analyze the performance characteristics of all of our algorithms (including binary search, in Section 3.1 and mergesort, in Section 2.2).
In the present context, our goal in thoroughly outlining our programming model is to ensure that you can run code like BinarySearch on your computer, use it on test data like ours, and modify it to adapt to various situations (such as those described in the exercises at the end of this section), in order to best understand its applicability. The programming model that we have sketched is designed to facilitate such activities, which are crucial to our approach to studying algorithms.
48 CHAPTER 1 ■ Fundamentals

489910 18940 774392 490636 125544 407391 115771 992663 923282 176914 217904 571222 519039 395667 ...
944443 293674 572153 600579 499569 984875 763178 295754 44696 207807 138910 903531 140925 699418 759984 199694 774549 635871 161828 805380 ...
% java BinarySearch largeW.txt < largeT.txt 499569 984875 295754 207807 140925 161828 ...
largeW.txt largeT.txt
Large files for BinarySearch test client
not in largeW.txt
1,000,000 int values
3,675,966 int values
10,000,000 int values
1.1 ■ Basic Programming Model 49

Perspective In this section, we have described a fine and complete programming model that served (and still serves) many programmers for many decades. Modern programming, however, goes one step further. This next level is called data abstraction, sometimes known as object-oriented programming, and is the subject of the next section. Simply put, the idea behind data abstraction is to allow a program to define data types (sets of values and sets of operations on those values), not just static metho-
ds that operate on predefined data types. Object-oriented programming has come into widespread use in recent decades, and data abstraction is central to modern program development. We embrace data abstraction in this book for three primary reasons: ■ It enables us to expand our ability to reuse code through modular programming. For example, our sorts in Chapter 2 and binary search and other algorithms in Chapter 3 allow clients to make use of the same code for any type of data (not just integers),-
 including one defined by the client. ■ It provides a convenient mechanism for building so-called linked data structures that provide more flexibility than arrays and are the basis of efficient algorithms in many settings. ■ It enables us to precisely define the algorithmic challenges that we face. For example, our union-find algorithms in Section 1.5, our priority-queue algorithms in Section 2.4, and our symbol-table algorithms in Chapter 3 are all oriented toward defining data structures that en-
able efficient implementations of a set of operations. This challenge aligns perfectly with data abstraction. Despite all of these considerations, our focus remains on the study of algorithms. In this context, we proceed to consider next the essential features of object-oriented programming that are relevant to our mission.
50 CHAPTER 1 ■ Fundamentals

Q&A
Q. What is Java bytecode?
A. A low-level version of your program that runs on the Java virtual machine. This level of abstraction makes it easier for the developers of Java to ensure that our programs run on a broad variety of devices.
Q. It seems wrong that Java should just let ints overflow and give bad values. Shouldn’t Java automatically check for overflow?
A. This issue is a contentious one among programmers. The short answer is that the lack of such checking is one reason such types are called primitive data types. A little knowledge can go a long way in avoiding such problems. We use the int type for small numbers (less than ten decimal digits), and the long type when values run into the billions or more.
Q. What is the value of Math.abs(-2147483648)?
A. -2147483648. This strange (but true) result is a typical example of the effects of integer overflow.
Q. How can I initialize a double variable to infinity?
A. Java has built-in constants available for this purpose: Double.POSITIVE_INFINITY and Double.NEGATIVE_INFINITY.
Q. Can you compare a double to an int?
A. Not without doing a type conversion, but remember that Java usually does the requisite type conversion automatically. For example, if x is an int with the value 3, then the expression (x < 3.1) is true—Java converts x to double (because 3.1 is a double literal) before performing the comparison.
Q. What happens if I use a variable before initializing it to a value?
A. Java will report a compile-time error if there is any path through your code that would lead to use of an uninitialized variable.
Q. What are the values of 1/0 and 1.0/0.0 as Java expressions?
A. The first generates a runtime exception for division by zero (which stops your program because the value is undefined); the second has the value Infinity.
1.1 ■ Basic Programming Model 51

Q. Can you use < and > to compare String variables?
A. No. Those operators are defined only for primitive types. See page 80.
Q. What is the result of division and remainder for negative integers?
A. The quotient a/b rounds toward 0; the remainder a % b is defined such that (a / b) * b + a % b is always equal to a. For example, -14/3 and 14/-3 are both -4, but -14 % 3 is -2 and 14 % -3 is 2.
Q. Why do we say (a && b) and not (a & b)?
A. The operators &, |, and ^ are bitwise logical operations for integer types that do and, or, and exclusive or (respectively) on each bit position. Thus the value of 10&6 is 14 and the value of 10^6 is 12. We use these operators rarely (but occasionally) in this book. The operators && and || are valid only in boolean expressions are included separately because of short-circuiting: an expression is evaluated left-to-right and the evaluation stops when the value is known.
Q. Is ambiguity in nested if statements a problem?
A. Yes. In Java, when you write
if <expr1> if <expr2> <stmntA> else <stmntB>
it is equivalent to
if <expr1> { if <expr2> <stmntA> else <stmntB> }
even if you might have been thinking
if <expr1> { if <expr2> <stmntA> } else <stmntB>
Using explicit braces is a good way to avoid this dangling else pitfall.
Q. What is the difference between a for loop and its while formulation?
A. The code in the for loop header is considered to be in the same block as the for loop body. In a typical for loop, the incrementing variable is not available for use in later statements; in the corresponding while loop, it is. This distinction is often a reason to use a while instead of a for loop.
Q. Some Java programmers use int a[] instead of int[] a to declare arrays. What’s the difference?
Q&A (continued)
52 CHAPTER 1 ■ Fundamentals

A. In Java, both are legal and equivalent. The former is how arrays are declared in C. The latter is the preferred style in Java since the type of the variable int[] more clearly indicates that it is an array of integers.
Q. Why do array indices start at 0 instead of 1?
A. This convention originated with machine-language programming, where the address of an array element would be computed by adding the index to the address of the beginning of an array. Starting indices at 1 would entail either a waste of space at the beginning of the array or a waste of time to subtract the 1.
Q. If a[] is an array, why does StdOut.println(a) print out a hexadecimal integer, such as @f62373 , instead of the elements of the array?
A. Good question. It is printing out the memory address of the array, which, unfortunately, is rarely what you want.
Q. Why are we not using the standard Java libraries for input and graphics?
A. We are using them, but we prefer to work with simpler abstract models. The Java libraries behind StdIn and StdDraw are built for production programming, and the libraries and their APIs are a bit unwieldy. To get an idea of what they are like, look at the code in StdIn.java and StdDraw.java.
Q. Can my program reread data from standard input?
A. No. You only get one shot at it, in the same way that you cannot undo println().
Q. What happens if my program attempts to read after standard input is exhausted?
A. You will get an error. StdIn.isEmpty() allows you to avoid such an error by checking whether there is more input available.
Q. What does this error message mean?
Exception in thread "main" java.lang.NoClassDefFoundError: StdIn
A. You probably forgot to put StdIn.java in your working directory.
Q. Can a static method take another static method as an argument in Java?
A. No. Good question, since many other languages do support this capability.
1.1 ■ Basic Programming Model 53

EXERCISES
1.1.1 Give the value of each of the following expressions:
a. ( 0 + 15 ) / 2
b. 2.0e-6 * 100000000.1
c. true && false || true && true
1.1.2 Give the type and value of each of the following expressions:
a. (1 + 2.236)/2
b. 1 + 2 + 3 + 4.0
c. 4.1 >= 4
d. 1 + 2 + "3"
1.1.3 Write a program that takes three integer command-line arguments and prints equal if all three are equal, and not equal otherwise.
1.1.4 What (if anything) is wrong with each of the following statements?
a. if (a > b) then c = 0;
b. if a > b { c = 0; }
c. if (a > b) c = 0;
d. if (a > b) c = 0 else b = 0;
1.1.5 Write a code fragment that prints true if the double variables x and y are both strictly between 0 and 1 and false otherwise.
1.1.6 What does the following program print?
int f = 0; int g = 1; for (int i = 0; i <= 15; i++) {
StdOut.println(f); f = f + g; g = f - g; }
54 CHAPTER 1 ■ Fundamentals

1.1.7 Give the value printed by each of the following code fragments:
a. double t = 9.0; while (Math.abs(t - 9.0/t) > .001) t = (9.0/t + t) / 2.0;
StdOut.printf("%.5f\n", t);
b. int sum = 0;
for (int i = 1; i < 1000; i++)
for (int j = 0; j < i; j++)
sum++;
StdOut.println(sum);
c. int sum = 0;
for (int i = 1; i < 1000; i *= 2)
for (int j = 0; j < N; j++)
sum++;
StdOut.println(sum);
1.1.8 What do each of the following print?
a. System.out.println('b');
b. System.out.println('b' + 'c');
c. System.out.println((char) ('a' + 4));
Explain each outcome.
1.1.9 Write a code fragment that puts the binary representation of a positive integer N into a String s.
Solution: Java has a built-in method Integer.toBinaryString(N) for this job, but the point of the exercise is to see how such a method might be implemented. Here is a particularly concise solution:
String s = ""; for (int n = N; n > 0; n /= 2) s = (n % 2) + s;
1.1 ■ Basic Programming Model 55

1.1.10 What is wrong with the following code fragment?
int[] a; for (int i = 0; i < 10; i++) a[i] = i * i;
Solution: It does not allocate memory for a[] with new. This code results in a variable a might not have been initialized compile-time error.
1.1.11 Write a code fragment that prints the contents of a two-dimensional boolean array, using * to represent true and a space to represent false. Include row and column numbers.
1.1.12 What does the following code fragment print?
int[] a = new int[10]; for (int i = 0; i < 10; i++) a[i] = 9 - i; for (int i = 0; i < 10; i++) a[i] = a[a[i]]; for (int i = 0; i < 10; i++) System.out.println(i);
1.1.13 Write a code fragment to print the transposition (rows and columns changed) of a two-dimensional array with M rows and N columns.
1.1.14 Write a static method lg() that takes an int value N as argument and returns the largest int not larger than the base-2 logarithm of N. Do not use Math.
1.1.15 Write a static method histogram() that takes an array a[] of int values and an integer M as arguments and returns an array of length M whose ith entry is the number of times the integer i appeared in the argument array. If the values in a[] are all between 0 and M–1, the sum of the values in the returned array should be equal to a.length.
1.1.16 Give the value of exR1(6):
public static String exR1(int n) {
if (n <= 0) return ""; return exR1(n-3) + n + exR1(n-2) + n; }
EXERCISES (continued)
56 CHAPTER 1 ■ Fundamentals

1.1.17 Criticize the following recursive function:
public static String exR2(int n) {
String s = exR2(n-3) + n + exR2(n-2) + n; if (n <= 0) return ""; return s; }
Answer : The base case will never be reached. A call to exR2(3) will result in calls to exR2(0), exR2(-3), exR3(-6), and so forth until a StackOverflowError occurs.
1.1.18 Consider the following recursive function:
public static int mystery(int a, int b) {
if (b == 0) return 0; if (b % 2 == 0) return mystery(a+a, b/2); return mystery(a+a, b/2) + a; }
What are the values of mystery(2, 25) and mystery(3, 11)? Given positive integers a and b, describe what value mystery(a, b) computes. Answer the same question, but replace + with * and replace return 0 with return 1.
1.1.19 Run the following program on your computer:
public class Fibonacci {
public static long F(int N) {
if (N == 0) return 0; if (N == 1) return 1; return F(N-1) + F(N-2); }
public static void main(String[] args) {
for (int N = 0; N < 100; N++) StdOut.println(N + " " + F(N)); } }
1.1 ■ Basic Programming Model 57

What is the largest value of N for which this program takes less 1 hour to compute the value of F(N)? Develop a better implementation of F(N) that saves computed values in an array.
1.1.20 Write a recursive static method that computes the value of ln (N !)
1.1.21 Write a program that reads in lines from standard input with each line containing a name and two integers and then uses printf() to print a table with a column of the names, the integers, and the result of dividing the first by the second, accurate to three decimal places. You could use a program like this to tabulate batting averages for baseball players or grades for students.
1.1.22 Write a version of BinarySearch that uses the recursive rank() given on page 25 and traces the method calls. Each time the recursive method is called, print the argument values lo and hi, indented by the depth of the recursion. Hint: Add an argument to the recursive method that keeps track of the depth.
1.1.23 Add to the BinarySearch test client the ability to respond to a second argument: + to print numbers from standard input that are not in the whitelist, - to print numbers that are in the whitelist.
1.1.24 Give the sequence of values of p and q that are computed when Euclid’s algorithm is used to compute the greatest common divisor of 105 and 24. Extend the code given on page 4 to develop a program Euclid that takes two integers from the command line and computes their greatest common divisor, printing out the two arguments for each call on the recursive method. Use your program to compute the greatest common divisor or 1111111 and 1234567.
1.1.25 Use mathematical induction to prove that Euclid’s algorithm computes the greatest common divisor of any pair of nonnegative integers p and q.
EXERCISES (continued)
58 CHAPTER 1 ■ Fundamentals

CREATIVE PROBLEMS
1.1.26 Sorting three numbers. Suppose that the variables a, b, c, and t are all of the same numeric primitive type. Show that the following code puts a, b, and c in ascending order:
if (a > b) { t = a; a = b; b = t; } if (a > c) { t = a; a = c; c = t; } if (b > c) { t = b; b = c; c = t; }
1.1.27 Binomial distribution. Estimate the number of recursive calls that would be used by the code
public static double binomial(int N, int k, double p) {
if ((N == 0) || (k < 0)) return 1.0; return (1.0 - p)*binomial(N-1, k) + p*binomial(N-1, k-1); }
to compute binomial(100, 50). Develop a better implementation that is based on saving computed values in an array.
1.1.28 Remove duplicates. Modify the test client in BinarySearch to remove any duplicate keys in the whitelist after the sort.
1.1.29 Equal keys. Add to BinarySearch a static method rank() that takes a key and a sorted array of int values (some of which may be equal) as arguments and returns the number of elements that are smaller than the key and a similar method count() that returns the number of elements equal to the key. Note : If i and j are the values returned by rank(key, a) and count(key, a) respectively, then a[i..i+j-1] are the values in the array that are equal to key.
1.1.30 Array exercise. Write a code fragment that creates an N-by-N boolean array a[][] such that a[i][j] is true if i and j are relatively prime (have no common factors), and false otherwise.
1.1.31 Random connections. Write a program that takes as command-line arguments an integer N and a double value p (between 0 and 1), plots N equally spaced dots of size .05 on the circumference of a circle, and then, with probability p for each pair of points, draws a gray line connecting them.
1.1 ■ Basic Programming Model 59

1.1.32 Histogram. Suppose that the standard input stream is a sequence of double values. Write a program that takes an integer N and two double values l and r from the command line and uses StdDraw to plot a histogram of the count of the numbers in the standard input stream that fall in each of the N intervals defined by dividing (l , r) into N equal-sized intervals.
1.1.33 Matrix library. Write a library Matrix that implements the following API:
public class Matrix
static double dot(double[] x, double[] y) vector dot product
static double[][] mult(double[][] a, double[][] b) matrix-matrix product
static double[][] transpose(double[][] a) transpose
static double[] mult(double[][] a, double[] x) matrix-vector product
static double[] mult(double[] y, double[][] a) vector-matrix product
Develop a test client that reads values from standard input and tests all the methods.
1.1.34 Filtering. Which of the following require saving all the values from standard input (in an array, say), and which could be implemented as a filter using only a fixed number of variables and arrays of fixed size (not dependent on N)? For each, the input comes from standard input and consists of N real numbers between 0 and 1.
■ Print the maximum and minimum numbers. ■ Print the median of the numbers. ■ Print the k th smallest value, for k less than 100. ■ Print the sum of the squares of the numbers. ■ Print the average of the N numbers. ■ Print the percentage of numbers greater than the average. ■ Print the N numbers in increasing order. ■ Print the N numbers in random order.
CREATIVE PROBLEMS (continued)
60 CHAPTER 1 ■ Fundamentals

EXPERIMENTS
1.1.35 Dice simulation. The following code computes the exact probability distribution for the sum of two dice:
int SIDES = 6; double[] dist = new double[2*SIDES+1]; for (int i = 1; i <= SIDES; i++) for (int j = 1; j <= SIDES; j++) dist[i+j] += 1.0;
for (int k = 2; k <= 2*SIDES; k++) dist[k] /= 36.0;
The value dist[i] is the probability that the dice sum to k. Run experiments to validate this calculation simulating N dice throws, keeping track of the frequencies of occurrence of each value when you compute the sum of two random integers between 1 and 6. How large does N have to be before your empirical results match the exact results to three decimal places?
1.1.36 Empirical shuffle check. Run computational experiments to check that our shuffling code on page 32 works as advertised. Write a program ShuffleTest that takes command-line arguments M and N, does N shuffles of an array of size M that is initialized with a[i] = i before each shuffle, and prints an M-by-M table such that row i gives the number of times i wound up in position j for all j. All entries in the array should be close to N/M.
1.1.37 Bad shuffling. Suppose that you choose a random integer between 0 and N-1 in our shuffling code instead of one between i and N-1. Show that the resulting order is not equally likely to be one of the N! possibilities. Run the test of the previous exercise for this version.
1.1.38 Binary search versus brute-force search. Write a program BruteForceSearch that uses the brute-force search method given on page 48 and compare its running time on your computer with that of BinarySearch for largeW.txt and largeT.txt.
1.1 ■ Basic Programming Model 61

1.1.39 Random matches. Write a BinarySearch client that takes an int value T as command-line argument and runs T trials of the following experiment for N = 103, 104, 105, and 106: generate two arrays of N randomly generated positive six-digit int values, and find the number of values that appear in both arrays. Print a table giving the average value of this quantity over the T trials for each value of N.
EXPERIMENTS (continued)
62 CHAPTER 1 ■ Fundamentals

This page intentionally left blank

1.2 DATA ABSTRACTION
A data type is a set of values and a set of operations on those values. So far, we have discussed in detail Java’s primitive data types: for example, the values of the primitive data type int are integers between 231 and 231 1; the operations of int include +, *, -, /, %, <, and >. In principle, we could write all of our programs using only the built-in primitive types, but it is much more convenient to write programs at a higher level of abstraction. In this section, we focus on the process of de-
fining and using data types, which is known as data abstraction (and supplements the function abstraction style that is the basis of SECTION 1.1). Programming in Java is largely based on building data types known as reference types with the familiar Java class. This style of programming is known as object-oriented programming, as it revolves around the concept of an object, an entity that holds a data type value. With Java’s primitive types we are largely confined to programs that operate on numbe-
rs, but with reference types we can write programs that operate on strings, pictures, sounds, any of hundreds of other abstractions that are available in Java’s standard libraries or on our booksite. Even more significant than libraries of predefined data types is that the range of data types available in Java programming is open-ended, because you can define your own data types to implement any abstraction whatsoever. An abstract data type (ADT) is a data type whose representation is hidden from -
the client. Implementing an ADT as a Java class is not very different from implementing a function library as a set of static methods. The primary difference is that we associate data with the function implementations and we hide the representation of the data from the client. When using an ADT, we focus on the operations specified in the API and pay no attention to the data representation; when implementing an ADT, we focus on the data, then implement operations on that data. Abstract data types -
are important because they support encapsulation in program design. In this book, we use them as a means to ■ Precisely specify problems in the form of APIs for use by diverse clients ■ Describe algorithms and data structures as API implementations Our primary reason for studying different algorithms for the same task is that performance characteristics differ. Abstract data types are an appropriate framework for the study of algorithms because they allow us to put knowledge of algorithm performan-
ce to immediate use: we can substitute one algorithm for another to improve performance for all clients without changing any client code.
64

Using abstract data types You do not need to know how a data type is implemented in order to be able to use it, so we begin by describing how to write programs that use a simple data type named Counter whose values are a name and a nonnegative integer and whose operations are create and initialize to zero, increment by one, and examine the current value. This abstraction is useful in many contexts. For example, it would be reasonable to use such a data type in electronic voting software, to ensur-
e that the only thing that a voter can do is increment a chosen candidate’s tally by one. Or, we might use a Counter to keep track of fundamental operations when analyzing the performance of algorithms. To use a Counter, you need to learn our mechanism for specifying the operations defined in the data type and the Java language mechanisms for creating and manipulating data-type values. Such mechanisms are critically important in modern programming, and we use them throughout this book, so this fir-
st example is worthy of careful attention.
API for an abstract data type. To specify the behavior of an abstract data type, we use an application programming interface (API), which is a list of constructors and instance methods (operations), with an informal description of the effect of each, as in this API for Counter:
public class Counter
Counter(String id) create a counter named id
void increment() increment the counter by one
int tally() number of increments since creation
String toString() string representation
An API for a counter
Even though the basis of a data-type definition is a set of values, the role of the values is not visible from the API, only the operations on those values. Accordingly, an ADT definition has many similarities with a library of static methods (see page 24): ■ Both are implemented as a Java class. ■ Instance methods may take zero or more arguments of a specified type, separated by commas and enclosed in parentheses. ■ They may provide a return value of a specified type or no return value (signified-
 by void).
And there are three significant differences: ■ Some entries in the API have the same name as the class and lack a return type. Such entries are known as constructors and play a special role. In this case, Counter has a constructor that takes a String argument.
1.2 ■ Data Abstraction 65

■ Instance methods lack the static modifier. They are not static methods—their purpose is to operate on data type values. ■ Some instance methods are present so as to adhere to Java conventions—we refer to such methods as inherited methods and shade them gray in the API. As with APIs for libraries of static methods, an API for an abstract data type is a contract with all clients and, therefore, the starting point both for developing any client code and for developing any data-type implementation.-
 In this case, the API tells us that to use Counter, we have available the Counter() constructor, the increment() and tally() instance methods, and the inherited toString() method.
Inherited methods. Various Java conventions enable a data type to take advantage of built-in language mechanisms by including specific methods in the API. For example, all Java data types inherit a toString() method that returns a String representation of the data-type values. Java calls this method when any data-type value is to be concatenated with a String value with the + operator. The default implementation is not particularly useful (it gives a string representation of the memory address of -
the data-type value), so we often provide an implementation that overrides the default, and include toString() in the API whenever we do so. Other examples of such methods include equals(), compareTo(), and hashCode() (see page 101).
Client code. As with modular programming based on static methods, the API allows us to write client code without knowing details of the implementation (and to write implementation code without knowing details of any particular client). The mechanisms introduced on page 28 for organizing programs as independent modules are useful for all Java classes, and thus are effective for modular programming with ADTs as well as for libraries of static methods. Accordingly, we can use an ADT in any program pr-
ovided that the source code is in a .java file in the same directory, or in the standard Java library, or accessible through an import statement, or through one of the classpath mechanisms described on the booksite. All of the benefits of modular programming follow. By encapsulating all the code that implements a data type within a single Java class, we enable the development of client code at a higher level of abstraction. To develop client code, you need to be able to declare variables, create o-
bjects to hold datatype values, and provide access to the values for instance methods to operate on them. These processes are different from the corresponding processes for primitive types, though you will notice many similarities.
66 CHAPTER 1 ■ Fundamentals

Objects. Naturally, you can declare that a variable heads is to be associated with data of type Counter with the code
Counter heads;
but how can you assign values or specify operations? The answer to this question involves a fundamental concept in data abstraction: an object is an entity that can take on a data-type value. Objects are characterized by three essential properties: state, identity, and behavior. The state of an object is a value from its data type. The identity of an object distinguishes one object from another. It is useful to think of an object’s identity as the place where its value is stored in memory. The beh-
avior of an object is the effect of data-type operations. The implementation has the sole responsibility for maintaining an object’s identity, so that client code can use a data type without regard to the representation of its state by conforming to an API that describes an object’s behavior. An object’s state might be used to provide information to a client or cause a side effect or be changed by one of its data type’s operations, but the details of the representation of the data-type value are n-
ot relevant to client code. A reference is a mechanism for accessing an object. Java nomenclature makes clear the distinction from primitive types (where variables are associated with values) by using the term reference types for nonprimitive types. The details of implementing references vary in Java implementations, but it is useful to think of a reference as a memory address, as shown at right (for brevity, we use three-digit memory addresses in the diagram).
Creating objects. Each data-type value is stored in an object. To create (or instantiate) an individual object, we invoke a constructor by using the keyword new, followed by the class name, followed by () (or a list of argument values enclosed in parentheses, if the constructor takes arguments). A constructor has no return type because it always returns a reference to an object of its data type. Each time that a client uses new(), the system ■ Allocates memory space for the object ■ Invokes the co-
nstructor to initialize its value ■ Returns a reference to the object In client code we typically create objects in an initializing declaration that associates a variable with the object, as we often do with variables of primitive types. Unlike primitive types, variables are associated with references to objects, not the data-type values
460
heads 460
reference
460
heads 460
612
tails 612
identity of heads
identity of tails
identity (details hidden
Object representation
one Counter object
two Counter objects
1.2 ■ Data Abstraction 67

themselves. We can create any number of objects from the same classeach object has its own identity and may or may not store the same value as another object of the same type. For example, the code
Counter heads = new Counter("heads"); Counter tails = new Counter("tails");
creates two different Counter objects. In an abstract data type, details of the representation of the value are hidden from client code. You might assume that the value associated with each Counter object is a String name and an int tally, but you cannot write code that depends on any specific representation (or even know whether that assumption is true—perhaps the tally is a long value).
Invoking instance methods. The purpose of an instance method is to operate on datatype values, so the Java language includes a special mechanism to invoke instance methods that emphasizes a connection to an object. Specifically, we invoke an instance method by writing a variable name that refers to an object, followed by a period, followed by an instance method name, followed by 0 or more arguments, enclosed in parentheses and separated by commas. An instance method might change the data-type valu-
e or just examine the data-type value. Instance methods have all of the properties of static methods that we considered on page 24—arguments are passed by value,method names can be overloaded, they may have a return value, and they may cause side effects—but they have an additional property that characterizes them: each invocation is associated with an object. For example, the code
heads.increment();
invokes the instance method increment() to operate on the Counter object heads (in this case the operation involves incrementing the tally), and the code
heads.tally() - tails.tally();
invokes the instance method tally() twice, first to operate on the Counter object heads and then to operate on the Counter object tails (in this case the
StdOut.println( heads );
invoke heads.toString()
heads.tally() - tails.tally()
invoke an instance method that accesses the object’s value
heads.increment();
object name
declaration
object name
invoke an instance method that changes the object’s value
heads = new Counter ("heads");
invoke a constructor (create an object)
Invoking instance methods
via automatic type conversion (toString())
as an expression
as a statement (void return value)
with new (constructor)
Counter heads;
call on constructor to create an object
declaration to associate variable with object reference
Counter heads = new Counter("heads");
Creating an object
68 CHAPTER 1 ■ Fundamentals

operation involves returning the tally as an int value). As these examples illustrate, you can use calls on instance methods in client code in the same way as you use calls on static methods—as statements (void methods) or values in expressions (methods that return a value). The primary purpose of static methods is to implement functions; the primary purpose of non-static (instance) methods is to implement data-type operations. Either type of method may appear in client code, but you can easily d-
istinguish between them, because a static method call starts with a class name (uppercase, by convention) and a non-static method call always starts with an object name (lowercase, by convention). These differences are summarized in the table at right.
Using objects. Declarations give us variable names for objects that we can use in code not just to create objects and invoke instance methods, but also in the same way as we use variable names for integers, floating-point numbers, and other primitive types. To develop client code for a given data type, w: ■ Declare variables of the type, for use in referring to objects ■ Use the keyword new to invoke a constructor that creates objects of the type ■ Use the object name to invoke instance methods, e-
ither as statements or within expressions For example, the class Flips shown at the top of the next page is a Counter client that takes a command-line argument T and simulates T coin flips (it is also a StdRandom client). Beyond these direct uses, we can use variables associated with objects in the same way as we use variables associated with primitive-type values: ■ In assignment statements ■ To pass or return objects from methods ■ To create and use arrays of object. Understanding the behavior o-
f each of these types of uses requires thinking in terms of references, not values, as you will see when we consider them, in turn.
Assignment statements. An assignment statement with a reference type creates a copy of the reference. The assignment statement does not create a new object, just another reference to an existing object. This situation is known as aliasing: both variables refer to the same object. The effect of aliasing is a bit unexpected, because it is different for variables holding values of a primitive type. Be sure that you understand the difference.
instance method static method
sample call head.increment() Math.sqrt(2.0)
invoked with object name class name
parameters reference to object
and argument(s) argument(s)
primary purpose
examine or change object value
compute return value
Instance methods versus static methods
1.2 ■ Data Abstraction 69

If x and y are variables of a primitive type, then the assignment x = y copies the value of y to x. For reference types, the reference is copied (not the value). Aliasing is a common source of bugs in Java programs, as illustrated by the following example:
Counter c1 = new Counter("ones"); c1.increment(); Counter c2 = c1; c2.increment(); StdOut.println(c1);
With a typical toString() implementation this code would print the string "2 ones" which may or may not be what was intended and is counterintuitive at first. Such bugs are common in programs written by people without much experience in using objects (that may be you, so pay attention here!). Changing the state of an object impacts all code involving aliased variables referencing that object. We are used to thinking of two different variables of primitive types as being independent, but that intui-
tion does not carry over to variables of reference types.
public class Flips {
public static void main(String[] args) {
int T = Integer.parseInt(args[0]); Counter heads = new Counter("heads"); Counter tails = new Counter("tails"); for (int t = 0; t < T; t++) if (StdRandom.bernoulli(0.5)) heads.increment(); else tails.increment(); StdOut.println(heads); StdOut.println(tails); int d = heads.tally() - tails.tally(); StdOut.println("delta: " + Math.abs(d)); } }
Counter client that simulates T coin flips
% java Flips 10 5 heads 5 tails delta: 0
% java Flips 10 8 heads 2 tails delta: 6
% java Flips 1000000 499710 heads 500290 tails delta: 580
Counter c1; c1 = new Counter("ones"); c1.increment(); Counter c2 = c1; c2.increment();
811
2
c2 811
c1 811 references to same object
reference to "ones"
Aliasing
70 CHAPTER 1 ■ Fundamentals

Objects as arguments. You can pass objects as arguments to methods. This ability typically simplifies client code. For example, when we use a Counter as an argument, we are essentially passing both a name and a tally, but need only specify one variable. When we call a method with arguments, the effect in Java is as if each argument value were to appear on the right-hand side of an assignment statement with the corresponding argument name on the left. That is, Java passes a copy of the argument va-
lue from the calling program to the method. This arrangement is known as pass by value (see page 24). One important consequence is that the method cannot change the value of a caller’s variable. For primitive types, this policy is what we expect (the two variables are independent), but each time that we use a reference type as a method argument we create an alias, so we must be cautious. In other words, the convention is to pass the reference by value (make a copy of it) but to pass the object by -
reference. For example, if we pass a reference to an object of type Counter, the method cannot change the original reference (make it point to a different Counter), but it can change the value of the object, for example by using the reference to call increment().
Objects as return values. Naturally, you can also use an object as a return value from a method. The method might return an object passed to it as an argument, as in the example below, or it might create an object and return a reference to it. This capability is important because Java methods allow only one return value—using objects enables us to write code that, in effect, returns multiple values.
public class FlipsMax {
public static Counter max(Counter x, Counter y) {
if (x.tally() > y.tally()) return x; else return y; }
public static void main(String[] args) {
int T = Integer.parseInt(args[0]); Counter heads = new Counter("heads"); Counter tails = new Counter("tails"); for (int t = 0; t < T; t++) if (StdRandom.bernoulli(0.5)) heads.increment(); else tails.increment();
if (heads.tally() == tails.tally()) StdOut.println("Tie"); else StdOut.println(max(heads, tails) + " wins"); } }
Example of a static method with object arguments and return values
% java FlipsMax 1000000 500281 tails wins
1.2 ■ Data Abstraction 71

Arrays are objects. In Java, every value of any nonprimitive type is an object. In particular, arrays are objects. As with strings, there is special language support for certain operations on arrays: declarations, initialization, and indexing. As with any other object, when we pass an array to a method or use an array variable on the right hand side of an assignment statement, we are making a copy of the array reference, not a copy of the array. This convention is appropriate for the typical case-
 where we expect the method to be able to modify the array, by rearranging its entries, as, for example, in java.util.Arrays.sort() or the shuffle() method that we considered on page 32.
Arrays of objects. Array entries can be of any type, as we have already seen: args[] in our main() implementations is an array of String objects. When we create an array of objects, we do so in two steps: ■ Create the array, using the bracket syntax for array constructors. ■ Create each object in the array, using a standard constructor for each. For example, the code below simulates rolling a die, using an array of Counter objects to keep track of the number of occurrences of each possible value. -
An array of objects in Java is an array of references to objects, not the objects themselves. If the objects are large, then we may gain efficiency by not having to move them around, just their references. If they are small, we may lose efficiency by having to follow a reference each time we need to get to some information.
public class Rolls {
public static void main(String[] args) {
int T = Integer.parseInt(args[0]); int SIDES = 6; Counter[] rolls = new Counter[SIDES+1]; for (int i = 1; i <= SIDES; i++) rolls[i] = new Counter(i + "'s");
for (int t = 0; t < T; t++) {
int result = StdRandom.uniform(1, SIDES+1); rolls[result].increment(); }
for (int i = 1; i <= SIDES; i++) StdOut.println(rolls[i]); } }
Counter client that simulates T rolls of a die
% java Rolls 1000000 167308 1's 166540 2's 166087 3's 167051 4's 166422 5's 166592 6's
72 CHAPTER 1 ■ Fundamentals

With this focus on objects, writing code that embraces data abstraction (defining and using data types, with data-type values held in objects) is widely referred to as object-oriented programming. The basic concepts that we have just covered are the starting point for object-oriented programming, so it is worthwhile to briefly summarize them. A data type is a set of values and a set of operations defined on those values. We implement data types in independent Java class modules and write client p-
rograms that use them. An object is an entity that can take on a data-type value or an instance of a data type. Objects are characterized by three essential properties: state, identity, and behavior. A data-type implementation supports clients of the data type as follows: ■ Client code can create objects (establish identity) by using the new construct to invoke a constructor that creates an object, initializes its instance variables, and returns a reference to that object. ■ Client code can manipu-
late data-type values (control an object’s behavior, possibly changing its state) by using a variable associated with an object to invoke an instance method that operates on that object’s instance variables. ■ Client code can manipulate objects by creating arrays of objects and passing them and returning them to methods, in the same way as for primitive-type values, except that variables refer to references to values, not the values themselves. These capabilities are the foundation of a flexible, -
modern, and widely useful programming style that we will use as the basis for studying algorithms in this book.
1.2 ■ Data Abstraction 73

Examples of abstract data types The Java language has thousands of built-in ADTs, and we have defined many other ADTs to facilitate the study of algorithms. Indeed, every Java program that we write is a data-type implementation (or a library of static methods). To control complexity, we will specifically cite APIs for any ADT that we use in this book (not many, actually). In this section, we introduce as examples several data types, with some examples of client code. In some cases, we present exc-
erpts of APIs that may contain dozens of instance methods or more. We articulate these APIs to present real-world examples, to specify the instance methods that we will use in the book, and to emphasize that you do not need to know the details of an ADT implementation in order to be able to use it. For reference, the data types that we use and develop in this book are shown on the facing page. These fall into several different categories: ■ Standard system ADTs in java.lang.*, which can be used in-
 any Java program. ■ Java ADTs in libraries such as java.awt, java.net, and java.io, which can also be used in any Java program, but need an import statement. ■ Our I/O ADTs that allow us to work with multiple input/output streams similar to StdIn and StdOut.
■ Data-oriented ADTs whose primary purpose is to facilitate organizing and processing data by encapsulating the representation. We describe several examples for applications in computational geometry and information processing later in this section and use them as examples in client code later on. ■ Collection ADTs whose primary purpose is to facilitate manipulation collections of data of the same. We describe the basic Bag, Stack, and Queue types in Section 1.3, PQ types in Chapter 2, and the ST -
and SET types in Chapters 3 and 5. ■ Opertions-oriented ADTs that we use to analyze algorithms, as described in Section 1.4 and Section 1.5.
■ ADTs for graph algorithms, including both data-oriented ADTs that focus on encapsulating representations of various kinds of graphs and operations-oriented ADTs that focus on providing specifications for graph-processing algorithms. This list does not include the dozens of types that we consider in exercises, which may be found in the index.Also, as described on page 90, we often distinguish multiple implementations of various ADTs with a descriptive prefix. As a group, the ADTs that we use demo-
nstrate that organizing and understanding the data types that you use is an important factor in modern programming. A typical application might use only five to ten of these ADTs. A prime goal in the development and organization of the ADTs in this book is to enable programmers to easily take advantage of a relatively small set of them in developing client code.
74 CHAPTER 1 ■ Fundamentals

standard Java system types in java.lang
Integer int wrapper
Double double wrapper
String indexed chars
StringBuilder builder for strings
other Java types
java.awt.Color colors
java.awt.Font fonts
java.net.URL URLs
java.io.File files
our standard I/O types
In input stream
Out output stream
Draw drawing
data-oriented types for client examples
Point2D point in the plane
Interval1D 1D interval
Interval2D 2D interval
Date date
Transaction transaction
types for the analysis of algorithms
Counter counter
Accumulator accumulator
VisualAccumulator visual version
Stopwatch stopwatch
collection types
Stack pushdown stack
Queue FIFO queue
Bag bag
MinPQ MaxPQ priority queue
IndexMinPQ IndexMinPQ priority queue (indexed )
ST symbol table
SET set
StringST symbol table (string keys )
data-oriented graph types
Graph graph
Digraph directed graph
Edge edge (weighted )
EdgeWeightedGraph graph (weighted )
DirectedEdge edge (directed, weighted )
EdgeWeightedDigraph graph (directed, weighted )
operations-oriented graph types
UF dynamic connectivity
DepthFirstPaths DFS path searcher
CC connected components
BreadthFirstPaths BFS path search
DirectedDFS DFS digraph path search
DirectedBFS BFS digraph path search
TransitiveClosure all paths
Topological topological order
DepthFirstOrder DFS order
DirectedCycle cycle search
SCC strong components
MST minimum spanning tree
SP shortest paths
Selected ADTs used in this book
1.2 ■ Data Abstraction 75

Geometric objects. A natural example of object-oriented programming is designing data types for geometric objects. For example, the APIs on the facing page define abstract data types for three familiar geometric objects: Point2D (points in the plane), Interval1D (intervals on the line), and Interval2D (twodimensional intervals in the plane, or axis-aligned rectangles). As usual, the APIs are essentially self-documenting and lead immediately to easily understood client code such as the example at -
left, which reads the boundaries of an Interval2D and an integer T from the command line, generates T random points in the unit square, and counts the number of points that fall in the interval (an estimate of the area of the rectangle). For dramatic effect, the client also draws the interval and the points that fall outside the interval. This computation is a model for a method that reduces the problem of computing the area and volume of geometric shapes to the problem of determining whether a po-
int falls within the shape or not (a less difficult but not trivial problem). Of course, we can define APIs for other geometric objects such as line segments, triangles, polygons, circles, and so forth, though implementing operations on them can be challenging. Several examples are addressed in the exercises at the end of this section.
Programs that process geometric objects have wide application in computing with models of the natural world, in scientific computing, video games, movies, and many other applications. The development and study of such programs and applications has blossomed into a far-reaching field of study known as computational geometry, which is a
public static void main(String[] args) {
double xlo = Double.parseDouble(args[0]); double xhi = Double.parseDouble(args[1]); double ylo = Double.parseDouble(args[2]); double yhi = Double.parseDouble(args[3]); int T = Integer.parseInt(args[4]);
Interval1D x = new Interval1D(xlo, xhi); Interval1D y = new Interval1D(ylo, yhi); Interval2D box = new Interval2D(x, y); box.draw();
Counter c = new Counter(“hits”); for (int t = 0; t < T; t++) {
double x = Math.random(); double y = Math.random(); Point p = new Point(x, y); if (box.contains(p)) c.increment(); else p.draw(); }
StdOut.println(c); StdOut.println(box.area()); }
Interval2D test client
% java Interval2D .2 .5 .5 .6 10000 297 hits .03
76 CHAPTER 1 ■ Fundamentals

fertile area of examples for the application of the algorithms that we address in this book, as you will see in examples throughout the book. In the present context, our interest is to suggest that abstract data types that directly represent geometric abstractions are not difficult to define and can lead to simple and clear client code. This idea is reinforced in several exercises at the end of this section and on the booksite.
public class Point2D
Point2D(double x, double y) create a point
double x() x coordinate
double y() y coordinate
double r() radius (polar coordinates)
double theta() angle (polar coordinates)
double distTo(Point2D that) Euclidean distance from this point to that
void draw() draw the point on StdDraw
An API for points in the plane
public class Interval1D
Interval1D(double lo, double hi) create an interval
double length() length of the interval
boolean contains(double x) does the interval contain x?
boolean intersects(Interval1D that) does the interval intersect that?
void draw() draw the interval on StdDraw
An API for intervals on the line
public class Interval2D
Interval2D(Interval1D x, Interval1D y) create a 2D interval
double area() area of the 2D interval
boolean contains(Point p) does the 2D interval contain p?
boolean intersects(Interval2D that) does the 2D interval intersect that?
void draw() draw the 2D interval on StdDraw
An API for two dimensional intervals in the plane
1.2 ■ Data Abstraction 77

Information processing Whether it be a bank processing millions of credit card transactions or a web analytics company processing billions of touchpad taps or a scientific research group processing millions of experimental observations, a great many applications are centered around processing and organizing information. Abstract data types provide a natural mechanism for organizing the information. Without getting into details, the two APIs on the facing page suggest a typical approach for a comm-
ercial application. The idea is to define data types that allow us to keep information in objects that correspond to things in the real world. A date is a day, a month, and a year and a transaction is a customer, a date, and an amount. These two are just examples: we might also define data types that can hold detailed information for customers, times, locations, goods and services, or whatever. Each data type consists of constructors that create objects containing the data and methods for use by c-
lient code to access it. To simplify client code, we provide two constructors for each type, one that presents the data in its appropriate type and another that parses a string to get the data (see Exercise 1.2.19 for details). As usual, there is no reason for client code to know the representation of the data. Most often, the reason to organize the data in this way is to treat the data associated with an object as a single entity: we can maintain arrays of Transaction values, use Date values as a-
 argument or a return value for a method, and so forth. The focus of such data types is on encapsulating the data, while at the same time enabling the development of client code that does not depend on the representation of the data. We do not dwell on organizing information in this way, except to take note that doing so and including the inherited methods toString(), compareTo(), equals(), and hashCode() allows us to take advantage of algorithm implementations that can process any type of data. W-
e will discuss inherited methods in more detail on page 100. For example, we have already noted Java’s convention that enables clients to print a string representation of every value if we include toString() implementation in a data type. We consider conventions corresponding to the other inherited methods in Section 1.3, Section 2.5, Section 3.4, and Section 3.5, using Date and Transaction as examples. Section 1.3 gives classic examples of data types and a Java language mechanism known as paramet-
erized types, or generics, that takes advantage of these conventions, and Chapter 2 and Chapter 3 are also devoted to taking advantage of generic types and inherited methods to develop implementations of sorting and searching algorithms that are effective for any type of data.
Whenever you have data of different types that logically belong together, it is worthwhile to contemplate defining an ADT as in these examples. The ability to do so helps to organize the data, can greatly simplify client code in typical applications, and is an important step on the road to data abstraction.
78 CHAPTER 1 ■ Fundamentals

public class Date implements Comparable<Date>
Date(int month, int day, int year) create a date
Date(String date) create a date (parse constructor)
int month() month
int day() day
int year() year
String toString() string representation
boolean equals(Object that) is this the same date as that?
int compareTo(Date that) compare this date to that
int hashCode() hash code
public class Transaction implements Comparable<Transaction>
Transaction(String who, Date when, double amount)
Transaction(String transaction) create a transaction (parse constructor)
String who() customer name
Date when() date
double amount() amount
String toString() string representation
boolean equals(Object that) is this the same transaction as that?
int compareTo(Transaction that) compare this transaction to that
int hashCode() hash code
Sample APIs for commercial applications (dates and transactions)
1.2 ■ Data Abstraction 79

Strings. Java’s String is an important and useful ADT. A String is an indexed sequence of char values. String has dozens of instance methods, including the following:
public class String
String() create an empty string
int length() length of the string
int charAt(int i) ith character
int indexOf(String p) first occurrence of p (-1 if none)
int indexOf(String p, int i) first occurrence of p after i (-1 if none)
String concat(String t) this string with t appended
String substring(int i, int j) substring of this string (ith to j-1st chars)
String[] split(String delim) strings between occurrences of delim
int compareTo(String t) string comparison
boolean equals(String t) is this string’s value the same as t’s ?
int hashCode() hash code
Java String API (partial list of methods)
String values are similar to arrays of characters, but the two are not the same. Arrays have built-in Java language syntax for accessing a character; String has instance methods for indexed access, length, and many other operations. On the other hand, String has special language support for initialization and concatenation: instead of creating and initializing a string with a constructor, we can use a string literal; instead of invoking the method concat() we can use the + operator. We do not need-
 to consider the details of the implementation, though understanding performance characteristics of some of the methods is important when developing string-processing algorithms, as you will see in Chapter 5. Why not just use arrays of characters instead of String values? The answer to this question is the same as for any ADT: to simplify and clarify client code. With String, we can write clear and simple client code that uses numerous convenient instance methods without regard to the way in which-
 strings are represented (see facing page). Even this short list contains powerful operations that require advanced algorithms such
String a = "now is "; String b = "the time "; String c = "to"
a.length() a.charAt(4) a.concat(c) a.indexOf("is") a.substring(2, 5) a.split(" ")[0] a.split(" ")[1] b.equals(c)
7 i
"now is to" 4
"w i" "now" "is" false
call value
Examples of string operations
80 CHAPTER 1 ■ Fundamentals

task implementation
is the string a palindrome?
public static boolean isPalindrome(String s) {
int N = s.length(); for (int i = 0; i < N/2; i++) if (s.charAt(i) != s.charAt(N-1-i)) return false; return true; }
extract file name and extension from a command-line argument
String s = args[0]; int dot = s.rank("."); String base = s.substring(0, dot); String extension = s.substring(dot + 1, s.length());
print all lines in standard input that contain a string specified on the command line
String query = args[0]; while (!StdIn.isEmpty()) {
String s = StdIn.readLine(); if (s.contains(query)) StdOut.println(s); }
create an array of the strings on StdIn delimited by whitespace
String input = StdIn.readAll(); String[] words = input.split("\\s+");
check whether an array of strings is in alphabetical order
public boolean isSorted(String[] a) {
for (int i = 1; i < a.length; i++) {
if (a[i-1].compareTo(a[i]) > 0) return false; }
return true; }
Typical string-processing code
1.2 ■ Data Abstraction 81

as those considered in Chapter 5. For example, the argument of split() can be a regular expression (see Section 5.4)—the split() example on page 81 uses the argument "\\s+", which means “one or more tabs, spaces, newlines, or returns.”
Input and output revisited. A disadvantage of the StdIn, StdOut, and StdDraw standard libraries of Section 1.1 is that they restrict us to working with just one input file, one output file, and one drawing for any given program. With object-oriented programming, we can define similar mechanisms that allow us to work with multiple input streams, output streams, and drawings within one program. Specifically, our standard libary includes the data types In, Out, and Draw with the APIs shown on the fac-
ing page, When invoked with a constructor having a String argument, In and Out will first try to find a file in the current directory of your computer that has that name. If it cannot do so, it will assume the argument to be a website name and will try to connect to that website (if no such website exists, it will issue a runtime exception). In either case, the specified file or website becomes the source/ target of the input/output for the stream object thus created, and the read*() and print*() -
methods will refer to that file or website. (If you use the no-argument constructor, then you obtain the standard streams.) This arrangement makes it possible for a single program to process multiple files and drawings. You also can assign such objects to variables, pass them as arguments or return values from methods, create arrays of them, and manipulate them just as you manipulate objects of any type. The program Cat shown at left is a sample client of In and Out that uses multiple input stream-
s to concatenate several input files into a single output file. The In and Out classes also contain static methods for reading files containing values that are all int, double, or String types into an array (see page 126 and Exercise 1.2.15).
public class Cat {
public static void main(String[] args) { // Copy input files to out (last argument). Out out = new Out(args[args.length-1]); for (int i = 0; i < args.length - 1; i++) { // Copy input file named on ith arg to out. In in = new In(args[i]); String s = in.readAll(); out.println(s); in.close(); }
out.close(); } }
A sample In and Out client
% more in1.txt This is
% more in2.txt a tiny test.
% java Cat in1.txt in2.txt out.txt
% more out.txt This is a tiny test.
82 CHAPTER 1 ■ Fundamentals

public class In
In() create an input stream from standard input
In(String name) create an input stream from a file or website
boolean isEmpty() true if no more input, false otherwise
int readInt() read a value of type int
double readDouble() read a value of type double
...
void close() close the input stream
Note: all operations supported by StdIn are also supported for In objects.
API for our data type for input streams
public class Out
Out() create an output stream to standard output
Out(String name) create an output stream to a file
void print(String s) append s to the output stream
void println(String s) append s and a newline to the output stream
void println() append a newline to the output stream
void printf(String f, ...) formatted print to the output steam
void close() close the output stream
Note: all operations supported by StdOut are also supported for Out objects.
API for our data type for output streams
public class Draw
Draw()
void line(double x0, double y0, double x1, double y1)
void point(double x, double y)
...
Note: all operations supported by StdDraw are also supported for Draw objects.
API for our data type for drawings
1.2 ■ Data Abstraction 83

Implementing an abstract data type. As with libraries of static methods, we implement ADTs with a Java class, putting the code in a file with the same name as the class, followed by the .java extension. The first statements in the file declare instance variables that define the data-type values. Following the instance variables are the constructor and the instance methods that implement operations on data-type values. Instance methods may be public (specified in the API) or private (used to organ-
ize the computation and not available to clients). A data-type definition may have multiple constructors and may also include definitions of static methods. In particular, a unittest client main() is normally useful for testing and debugging. As a first example, we consider an implementation of the Counter ADT that we defined on page 65. A full annotated implementation is shown on the facing page, for reference as we discuss its constituent parts. Every ADT implementation that you will develop has-
 the same basic ingredients as this simple example.
Instance variables. To define data-type values (the state of each object), we declare instance variables in much the same way as we declare local variables. There is a critical distinction between instance variables and the local variables within a static method or a block that you are accustomed to: there is just one value corresponding to each local variable at a given time, but there are numerous values corresponding to each instance variable (one for each object that is an instance of the data-
 type). There is no ambiguity with this arrangement, because each time that we access an instance variable, we do so with an object name—that object is the one whose value we are accessing. Also, each declaration is qualified by a visibility modifier. In ADT implementations, we use private, using a Java language mechansim to enforce the idea that the representation of an ADT is to be hidden from the client, and also final, if the value is not to be changed once it is initialized. Counter has two i-
nstance variables: a String value name and an int value count. If we were to use public instance variables (allowed in Java) the data type would, by definition, not be abstract, so we do not do so.
Constructors. Every Java class has at least one constructor that establishes an object’s identity. A constructor is like a static method, but it can refer directly to instance variables and has no return value. Generally, the purpose of a constructor is to initialize the instance variables. Every constructor creates an object and provides to the client a reference to that object. Constructors always share the same name as the class. We can overload the name and have multiple constructors with diff-
erent signatures, just as with methods. If no other constructor is defined, a default no-argument constructor is
public class Counter {
private final String name; private int count; ... }
Instance variables in ADTs are private
instance variable declarations
84 CHAPTER 1 ■ Fundamentals

public class Counter {
private final String name; private int count;
public Counter(String id) { name = id; }
public void increment() { count++; }
public int tally() { return count; }
public String toString() { return count + " " + name; }
public static void main(String[] args) {
Counter heads = new Counter("heads"); Counter tails = new Counter("tails");
heads.increment(); heads.increment(); tails.increment();
StdOut.println(heads + " " + tails); StdOut.println(heads.tally() + tails.tally() ); } }
Anatomy of a class that defines a data type
instance variables
instance methods
constructor
test client
invoke constructor
invoke method
automatically invoke toString()
instance variable name
create and initialize objects
object name
class name
1.2 ■ Data Abstraction 85

implicit, has no arguments, and initializes instance values to default values. The default values of instance variables are 0 for primitive numeric types, false for boolean, and null for reference types. These defaults may be changed by using initializing declarations for instance variables. Java automatically invokes a constructor when a client program uses the keyword new. Overloaded constructors are typically used to initialize instance variables to client-supplied values other than the defaul-
ts. For example, Counter has a one-argument constructor that initializes the name instance variable to the value given as argument (leaving the count instance variable to be initialized to the default value 0).
Instance methods. To implement data-type instance methods (the behavior of each object), we implement instance methods with code that is precisely like the code that you learned in Section 1.1 to implement static methods (functions). Each instance method has a return type, a signature (which specifies its name and the types and names of its parameter variables), and a body (which consists of a sequence of statements, including a return statement that provides a value of the return type back to the-
 client). When a client invokes a method, the parameter values (if any) are initialized with client values, the statements are executed until a return value is computed, and the value is returned to the client, with the same effect as if the method invocation in the client were replaced with that value. All of this action is the same as for static methods, but there is one critical distinction for instance methods: they can access and perform operations on instance variables. How do we specify whi-
ch object’s instance variables we want to use? If you think about this question for a moment, you will see the logical answer: a reference to a variable in an instance method refers to the value for the object that was used to invoke the method. When we say heads.increment() the code in increment() is referring to the instance variables for heads. In other words,
method name
return
visibility type
modifier signature
instance variable name
Anatomy of an instance method
public void increment()
{ count++; }
public class Counter {
private final String name; private int count; ...
... }
code to initialize instance variables (count initialized to 0 by default)
visibility
modifier NO return
type
constructor name (same as class name)
signature
parameter variable
Anatomy of a constructor
public Counter ( String id )
{ name = id; }
86 CHAPTER 1 ■ Fundamentals

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:46.667Z
- **Text Length:** 178910 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
