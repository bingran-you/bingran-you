# PDF Document: Python for Finance - Mastering Data-Driven Finance Book - O'Reilly - Yves Hilpisch.pdf

**File Path:** Python for Finance - Mastering Data-Driven Finance Book - O'Reilly - Yves Hilpisch.pdf

**Processed Date:** 2026-02-10T18:18:14.220Z

**File Size:** 32788.21 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 785

**Title:** Python for Finance - Mastering Data-Driven Finance Book - O'Reilly - Yves Hilpisch

**Collection:** Textbooks > Computer Science > Machine Learning for Trading

---

## Extracted Text Content

2nd Edition
Python for Finance
MASTERING DATA-DRIVEN FINANCE
Yves Hilpisch

SECOND EDITION
Python for Finance
Mastering Data-Driven Finance
Yves Hilpisch
Beijing Boston Farnham Sebastopol Tokyo

Python for Finance
by Yves Hilpisch Copyright © 2019 Yves Hilpisch. All rights reserved. Printed in Canada. Published by O’Reilly Media, Inc., 1005 Gravenstein Highway North, Sebastopol, CA 95472. O’Reilly books may be purchased for educational, business, or sales promotional use. Online editions are also available for most titles (http://oreilly.com). For more information, contact our corporate/institu‐ tional sales department: 800-998-9938 or corporate@oreilly.com.

Editors: Susan Conant and Jeff Bleiel Production Editor: Kristen Brown Copyeditor: Rachel Head Proofreader: Kim Cofer

Indexer: Judith McConville Interior Designer: David Futato Cover Designer: Karen Montgomery Illustrator: Rebecca Demarest

December 2014: December 2018:

First Edition Second Edition

Revision History for the Second Edition

2018-11-29: 2019-01-18: 2019-05-31: 2019-12-13: 2020-03-20: 2020-07-31:

First Release Second Release Third Release Fourth Release Fifth Release Sixth Release

See http://oreilly.com/catalog/errata.csp?isbn=9781492024330 for release details.

The O’Reilly logo is a registered trademark of O’Reilly Media, Inc. Python for Finance, the cover image, and related trade dress are trademarks of O’Reilly Media, Inc. The views expressed in this work are those of the author, and do not represent the publisher’s views. While the publisher and the author have used good faith efforts to ensure that the information and instructions contained in this work are accurate, the publisher and the author disclaim all responsibility for errors or omissions, i-
ncluding without limitation responsibility for damages resulting from the use of or reliance on this work. Use of the information and instructions contained in this work is at your own risk. If any code samples or other technology this work contains or describes is subject to open source licenses or the intellectual property rights of others, it is your responsibility to ensure that your use thereof complies with such licenses and/or rights.

978-1-492-02433-0 [MBP]

Table of Contents

Preface. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . xiii

Part I. Python and Finance

1. Why Python for Finance. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3

The Python Programming Language

3

A Brief History of Python

5

The Python Ecosystem

6

The Python User Spectrum

7

The Scientific Stack

8

Technology in Finance

9

Technology Spending

10

Technology as Enabler

10

Technology and Talent as Barriers to Entry

11

Ever-Increasing Speeds, Frequencies, and Data Volumes

12

The Rise of Real-Time Analytics

13

Python for Finance

14

Finance and Python Syntax

14

Efficiency and Productivity Through Python

18

From Prototyping to Production

23

Data-Driven and AI-First Finance

24

Data-Driven Finance

24

AI-First Finance

28

Conclusion

31

Further Resources

31

iii

2. Python Infrastructure. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 33

conda as a Package Manager

35

Installing Miniconda

35

Basic Operations with conda

37

conda as a Virtual Environment Manager

41

Using Docker Containers

45

Docker Images and Containers

45

Building an Ubuntu and Python Docker Image

46

Using Cloud Instances

50

RSA Public and Private Keys

51

Jupyter Notebook Configuration File

52

Installation Script for Python and Jupyter Notebook

53

Script to Orchestrate the Droplet Setup

55

Conclusion

56

Further Resources

57

Part II. Mastering the Basics

3. Data Types and Structures. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 61

Basic Data Types

62

Integers

62

Floats

63

Booleans

66

Strings

69

Excursion: Printing and String Replacements

71

Excursion: Regular Expressions

74

Basic Data Structures

75

Tuples

75

Lists

76

Excursion: Control Structures

78

Excursion: Functional Programming

80

Dicts

81

Sets

82

Conclusion

84

Further Resources

84

4. Numerical Computing with NumPy. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 85

Arrays of Data

86

Arrays with Python Lists

86

The Python array Class

88

Regular NumPy Arrays

90

iv | Table of Contents

The Basics

90

Multiple Dimensions

94

Metainformation

97

Reshaping and Resizing

98

Boolean Arrays

101

Speed Comparison

103

Structured NumPy Arrays

105

Vectorization of Code

106

Basic Vectorization

107

Memory Layout

110

Conclusion

112

Further Resources

112

5. Data Analysis with pandas. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 113

The DataFrame Class

114

First Steps with the DataFrame Class

114

Second Steps with the DataFrame Class

119

Basic Analytics

123

Basic Visualization

126

The Series Class

128

GroupBy Operations

130

Complex Selection

132

Concatenation, Joining, and Merging

135

Concatenation

136

Joining

137

Merging

139

Performance Aspects

141

Conclusion

143

Further Reading

143

6. Object-Oriented Programming. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 145

A Look at Python Objects

149

int

149

list

150

ndarray

151

DataFrame

152

Basics of Python Classes

154

Python Data Model

159

The Vector Class

163

Conclusion

164

Further Resources

164

Table of Contents | v

Part III. Financial Data Science

7. Data Visualization. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 167

Static 2D Plotting

168

One-Dimensional Data Sets

169

Two-Dimensional Data Sets

176

Other Plot Styles

183

Static 3D Plotting

191

Interactive 2D Plotting

195

Basic Plots

195

Financial Plots

199

Conclusion

203

Further Resources

204

8. Financial Time Series. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 205

Financial Data

206

Data Import

206

Summary Statistics

210

Changes over Time

212

Resampling

215

Rolling Statistics

217

An Overview

218

A Technical Analysis Example

220

Correlation Analysis

222

The Data

222

Logarithmic Returns

224

OLS Regression

226

Correlation

227

High-Frequency Data

228

Conclusion

230

Further Resources

230

9. Input/Output Operations. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 231

Basic I/O with Python

232

Writing Objects to Disk

232

Reading and Writing Text Files

236

Working with SQL Databases

239

Writing and Reading NumPy Arrays

242

I/O with pandas

244

Working with SQL Databases

245

From SQL to pandas

247

Working with CSV Files

250

vi | Table of Contents

Working with Excel Files

251

I/O with PyTables

252

Working with Tables

253

Working with Compressed Tables

260

Working with Arrays

262

Out-of-Memory Computations

264

I/O with TsTables

267

Sample Data

267

Data Storage

269

Data Retrieval

270

Conclusion

272

Further Resources

273

10. Performance Python. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 275

Loops

276

Python

277

NumPy

278

Numba

279

Cython

280

Algorithms

281

Prime Numbers

282

Fibonacci Numbers

286

The Number Pi

290

Binomial Trees

294

Python

294

NumPy

295

Numba

297

Cython

297

Monte Carlo Simulation

299

Python

300

NumPy

301

Numba

302

Cython

302

Multiprocessing

303

Recursive pandas Algorithm

304

Python

305

Numba

307

Cython

307

Conclusion

308

Further Resources

309

Table of Contents | vii

11. Mathematical Tools. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 311

Approximation

312

Regression

313

Interpolation

324

Convex Optimization

328

Global Optimization

329

Local Optimization

331

Constrained Optimization

332

Integration

334

Numerical Integration

336

Integration by Simulation

337

Symbolic Computation

337

Basics

338

Equations

340

Integration and Differentiation

340

Differentiation

341

Conclusion

343

Further Resources

343

12. Stochastics. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 345

Random Numbers

346

Simulation

352

Random Variables

353

Stochastic Processes

356

Variance Reduction

372

Valuation

375

European Options

376

American Options

380

Risk Measures

383

Value-at-Risk

383

Credit Valuation Adjustments

388

Python Script

392

Conclusion

394

Further Resources

395

13. Statistics. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 397

Normality Tests

398

Benchmark Case

399

Real-World Data

409

Portfolio Optimization

415

The Data

416

The Basic Theory

417

viii | Table of Contents

Optimal Portfolios

421

Efficient Frontier

424

Capital Market Line

425

Bayesian Statistics

429

Bayes’ Formula

429

Bayesian Regression

430

Two Financial Instruments

435

Updating Estimates over Time

439

Machine Learning

444

Unsupervised Learning

444

Supervised Learning

448

Conclusion

462

Further Resources

463

Part IV. Algorithmic Trading

14. The FXCM Trading Platform. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 467

Getting Started

469

Retrieving Data

469

Retrieving Tick Data

470

Retrieving Candles Data

472

Working with the API

474

Retrieving Historical Data

475

Retrieving Streaming Data

477

Placing Orders

478

Account Information

480

Conclusion

480

Further Resources

481

15. Trading Strategies. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 483

Simple Moving Averages

484

Data Import

485

Trading Strategy

485

Vectorized Backtesting

487

Optimization

489

Random Walk Hypothesis

491

Linear OLS Regression

494

The Data

495

Regression

497

Clustering

499

Frequency Approach

501

Table of Contents | ix

Classification

504

Two Binary Features

504

Five Binary Features

506

Five Digitized Features

508

Sequential Train-Test Split

509

Randomized Train-Test Split

511

Deep Neural Networks

512

DNNs with scikit-learn

512

DNNs with TensorFlow

515

Conclusion

519

Further Resources

519

16. Automated Trading. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 521

Capital Management

522

The Kelly Criterion in a Binomial Setting

522

The Kelly Criterion for Stocks and Indices

527

ML-Based Trading Strategy

532

Vectorized Backtesting

533

Optimal Leverage

538

Risk Analysis

539

Persisting the Model Object

543

Online Algorithm

544

Infrastructure and Deployment

546

Logging and Monitoring

547

Conclusion

550

Python Scripts

550

Automated Trading Strategy

550

Strategy Monitoring

553

Further Resources

554

Part V. Derivatives Analytics

17. Valuation Framework. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 557

Fundamental Theorem of Asset Pricing

558

A Simple Example

558

The General Results

559

Risk-Neutral Discounting

560

Modeling and Handling Dates

561

Constant Short Rate

563

Market Environments

565

Conclusion

568

x | Table of Contents

Further Resources

569

18. Simulation of Financial Models. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 571

Random Number Generation

572

Generic Simulation Class

574

Geometric Brownian Motion

577

The Simulation Class

578

A Use Case

580

Jump Diffusion

582

The Simulation Class

583

A Use Case

585

Square-Root Diffusion

587

The Simulation Class

588

A Use Case

590

Conclusion

591

Further Resources

592

19. Derivatives Valuation. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 595

Generic Valuation Class

596

European Exercise

600

The Valuation Class

600

A Use Case

602

American Exercise

607

Least-Squares Monte Carlo

608

The Valuation Class

609

A Use Case

611

Conclusion

614

Further Resources

616

20. Portfolio Valuation. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 617

Derivatives Positions

618

The Class

619

A Use Case

620

Derivatives Portfolios

622

The Class

622

A Use Case

626

Conclusion

634

Further Resources

635

21. Market-Based Valuation. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 637

Options Data

638

Model Calibration

641

Table of Contents | xi

Relevant Market Data

641

Option Modeling

643

Calibration Procedure

646

Portfolio Valuation

651

Modeling Option Positions

652

The Options Portfolio

653

Python Code

654

Conclusion

656

Further Resources

657

A. Dates and Times. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 659

B. BSM Option Class. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 673

Index. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 679

xii | Table of Contents

Preface
These days, Python is undoubtedly one of the major strategic technology platforms in the financial industry. When I started writing the first edition of this book in 2013, I still had many conversations and presentations in which I argued relentlessly for Python’s competitive advantages in finance over other languages and platforms. Toward the end of 2018, this is not a question anymore: financial institutions around the world now simply try to make the best use of Python and its powerful ecosyste-
m of data analysis, visualization, and machine learning packages. Beyond the realm of finance, Python is also often the language of choice in introduc‐ tory programming courses, such as in computer science programs. Beyond its reada‐ ble syntax and multiparadigm approach, a major reason for this is that Python has also become a first class citizen in the areas of artificial intelligence (AI), machine learning (ML), and deep learning (DL). Many of the most popular packages and libraries in these ar-
eas are either written directly in Python (such as scikit-learn for ML) or have Python wrappers available (such as TensorFlow for DL). Finance itself is entering a new era, and two major forces are driving this evolution. The first is the programmatic access to basically all the financial data available—in general, this happens in real time and is what leads to data-driven finance. Decades ago, most trading or investment decisions were driven by what traders and portfolio managers could read in th-
e newspaper or learn through personal conversations. Then came terminals that brought financial data in real time to the traders’ and portfolio managers’ desks via computers and electronic communication. Today, individuals (or teams) can no longer keep up with the vast amounts of financial data generated in even a single minute. Only machines, with their ever-increasing processing speeds and computational power, can keep up with the volume and velocity of financial data. This means, among other th-
ings, that most of today’s global equities trading volume is driven by algorithms and computers rather than by human traders. The second major force is the increasing importance of AI in finance. More and more financial institutions try to capitalize on ML and DL algorithms to improve
Preface | xiii

operations and their trading and investment performances. At the beginning of 2018, the first dedicated book on “financial machine learning” was published, which under‐ scores this trend. Without a doubt, there are more to come. This leads to what might be called AI-first finance, where flexible, parameterizable ML and DL algorithms replace traditional financial theory—theory that might be elegant but no longer very useful in the new era of data-driven, AI-first finance. Python is the right progra-
mming language and ecosystem to tackle the challenges of this era of finance. Although this book covers basic ML algorithms for unsupervised and supervised learning (as well as deep neural networks, for instance), the focus is on Python’s data processing and analysis capabilities. To fully account for the impor‐ tance of AI in finance—now and in the future—another book-length treatment is necessary. However, most of the AI, ML, and DL techniques require such large amounts of data that mastering da-
ta-driven finance should come first anyway. This second edition of Python for Finance is more of an upgrade than an update. For example, it adds a complete part (Part IV) about algorithmic trading. This topic has recently become quite important in the financial industry, and is also quite popular with retail traders. It also adds a more introductory part (Part II) where fundamental Python programming and data analysis topics are presented before they are applied in later parts of the book. On the -
other hand, some chapters from the first edition have been deleted completely. For instance, the chapter on web techniques and pack‐ ages (such as Flask) was dropped because there are more dedicated and focused books about such topics available today. For the second edition, I tried to cover even more finance-related topics and to focus on Python techniques that are particularly useful for financial data science, algorith‐ mic trading, and computational finance. As in the first edition, the approa-
ch is a practical one, in that implementation and illustration come before theoretical details and I generally focus on the big picture rather than the most arcane parameterization options of a certain class, method, or function. Having described the basic approach for the second edition, it is worth emphasizing that this book is neither an introduction to Python programming nor to finance in general. A vast number of excellent resources are available for both. This book is located at the intersec-
tion of these two exciting fields, and assumes that the reader has some background in programming (not necessarily Python) as well as in finance. Such readers learn how to apply Python and its ecosystem to the financial domain. The Jupyter Notebooks and codes accompanying this book can be accessed and exe‐ cuted via our Quant Platform. You can sign up for free at http://py4fi.pqp.io. My company (The Python Quants) and myself provide many more resources to mas‐ ter Python for financial data science-
, artificial intelligence, algorithmic trading, and computational finance. You can start by visiting the following sites:
xiv | Preface

• Our company website • My private website • Our Python books website • Our online training website • The Certificate Program website From all the offerings that we have created over the last few years, I am most proud of our Certificate Program in Python for Algorithmic Trading. It provides over 150 hours of live and recorded instruction, over 1,200 pages of documentation, over 5,000 lines of Python code, and over 50 Jupyter Notebooks. The program is offered multiple times per year and we update -
and improve it with every cohort. The online program is the first of its kind, in that successful delegates obtain an official university certifi‐ cate in cooperation with htw saar University of Applied Sciences. In addition, I recently started The AI Machine, a new project and company to stand‐ ardize the deployment of automated, algorithmic trading strategies. With this project, we want to implement in a systematic and scalable fashion what we have been teach‐ ing over the years in the field, in-
 order to capitalize on the many opportunities in the algorithmic trading field. Thanks to Python—and data-driven and AI-first finance— this project is possible these days even for a smaller team like ours. I closed the preface for the first edition with the following words:
I am really excited that Python has established itself as an important technology in the financial industry. I am also sure that it will play an even more important role there in the future, in fields like derivatives and risk analytics or high performance computing. My hope is that this book will help professionals, researchers, and students alike make the most of Python when facing the challenges of this fascinating field.
When I wrote these lines in 2014, I couldn’t have predicted how important Python would become in finance. In 2018, I am even happier that my expectations and hopes have been so greatly surpassed. Maybe the first edition of the book played a small part in this. In any case, a big thank you is in order to all the relentless open source developers out there, without whom the success story of Python couldn’t have been written.
Conventions Used in This Book
The following typographical conventions are used in this book: Italic
Indicates new terms, URLs, and email addresses.
Preface | xv

Constant width Used for program listings, as well as within paragraphs to refer to software pack‐ ages, programming languages, file extensions, filenames, program elements such as variable or function names, databases, data types, environment variables, statements, and keywords.
Constant width italic Shows text that should be replaced with user-supplied values or by values deter‐ mined by context. This element signifies a tip or suggestion.
This element signifies a general note.
This element indicates a warning or caution.
Using Code Examples
Supplemental material (in particular, Jupyter Notebooks and Python scripts/ modules) is available for usage and download at http://py4fi.pqp.io. This book is here to help you get your job done. In general, if example code is offered with this book, you may use it in your programs and documentation. You do not need to contact us for permission unless you’re reproducing a significant portion of the code. For example, writing a program that uses several chunks of code from this book does not require -
permission. Selling or distributing a CD-ROM of examples from O’Reilly books does require permission. Answering a question by citing this book and quoting example code does not require permission. Incorporating a signifi‐ cant amount of example code from this book into your product’s documentation does require permission. We appreciate, but do not require, attribution. An attribution usually includes the title, author, publisher, and ISBN. For example: “Python for Finance, 2nd Edition, by Yves Hil-
pisch (O’Reilly). Copyright 2019 Yves Hilpisch, 978-1-492-02433-0.”
xvi | Preface

If you feel your use of code examples falls outside fair use or the permission given above, feel free to contact us at permissions@oreilly.com.
O’Reilly Online Learning
For more than 40 years, O’Reilly Media has provided technol‐ ogy and business training, knowledge, and insight to help companies succeed. Our unique network of experts and innovators share their knowledge and expertise through books, articles, and our online learning platform. O’Reilly’s online learning platform gives you on-demand access to live training courses, in-depth learning paths, interactive coding environments, and a vast collection of text and video from O’Reilly and 200+ other publishe-
rs. For more information, visit http://oreilly.com.
How to Contact Us
Please address comments and questions concerning this book to the publisher: O’Reilly Media, Inc. 1005 Gravenstein Highway North Sebastopol, CA 95472 800-998-9938 (in the United States or Canada) 707-829-0515 (international or local) 707-829-0104 (fax)
We have a web page for this book, where we list errata, examples, and any additional information. You can access this page at http://bit.ly/python-finance-2e. To comment or ask technical questions about this book, send email to bookques‐ tions@oreilly.com. For news and more information about our books and courses, see our website at http://www.oreilly.com. Find us on Facebook: http://facebook.com/oreilly Follow us on Twitter: http://twitter.com/oreillymedia Watch us on YouTube: http://www.youtube.-
com/oreillymedia
Preface | xvii

Acknowledgments
I want to thank all those who helped to make this book a reality—in particular, the team at O’Reilly, who really improved my manuscript in many ways. I would like to thank the tech reviewers, Hugh Brown and Jake VanderPlas. The book benefited from their valuable feedback and their many suggestions. Any remaining errors, of course, are mine. Michael Schwed, with whom I have been working closely for more than ten years, deserves a special thank you. Over the years, I have benefited in innumerable wa-
ys from his work, support, and Python know-how. I also want to thank Jason Ramchandani and Jorge Santos of Refinitiv (formerly Thomson Reuters) for their continued support not only of my work but also of the open source community in general. As with the first edition, the second edition of this book has tremendously benefited from the dozens of “Python for finance” talks I have given over the years, as well as the hundreds of hours of “Python for finance” trainings. In many cases the feedback from-
 participants helped to improve my training materials, which often ended up as chapters or sections in this book. Writing the first edition took me about a year. Overall, writing and upgrading the second edition also took about a year, which was quite a bit longer than I expected. This is mainly because the topic itself keeps me very busy travel- and business-wise, which I am very grateful for. Writing books requires many hours in solitude and such hours cannot be spent with the family. Therefore,-
 thank you to Sandra, Lilli, Henry, Adolf, Petra, and Heinz for all your understanding and support—not only with regard to writing this book. I dedicate the second edition of this book, as the first one, to my lovely, strong, and compassionate wife Sandra. She has given new meaning over the years to what family is really about. Thank you.
— Yves Saarland, November 2018
xviii | Preface

PART I
Python and Finance
This part introduces Python for finance. It consists of two chapters: • Chapter 1 briefly discusses Python in general and argues in some detail why Python is well suited to addressing the technological challenges in the financial industry as well as in financial data analytics. • Chapter 2 is about Python infrastructure; it provides a concise overview of important aspects of managing a Python environment to get you started with interactive financial analytics and financial application development -
in Python.

CHAPTER 1
Why Python for Finance
Banks are essentially technology firms. —Hugo Banziger
The Python Programming Language
Python is a high-level, multipurpose programming language that is used in a wide range of domains and technical fields. On the Python website you find the following executive summary:
Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typ‐ ing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together. Python’s simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which-
 encourages program modularity and code reuse. The Python interpreter and the extensive standard library are available in source or binary form without charge for all major platforms, and can be freely distributed.
This pretty well describes why Python has evolved into one of the major program‐ ming languages today. Nowadays, Python is used by the beginner programmer as well as by the highly skilled expert developer, at schools, in universities, at web com‐ panies, in large corporations and financial institutions, as well as in any scientific field. Among other features, Python is: Open source
Python and the majority of supporting libraries and tools available are open source and generally come with quite flexible and open licenses.
3

Interpreted The reference CPython implementation is an interpreter of the language that translates Python code at runtime to executable byte code.
Multiparadigm Python supports different programming and implementation paradigms, such as object orientation and imperative, functional, or procedural programming.
Multipurpose Python can be used for rapid, interactive code development as well as for build‐ ing large applications; it can be used for low-level systems operations as well as for high-level analytics tasks.
Cross-platform Python is available for the most important operating systems, such as Windows, Linux, and macOS. It is used to build desktop as well as web applications, and it can be used on the largest clusters and most powerful servers as well as on such small devices as the Raspberry Pi.
Dynamically typed Types in Python are in general inferred at runtime and not statically declared as in most compiled languages.
Indentation aware In contrast to the majority of other programming languages, Python uses inden‐ tation for marking code blocks instead of parentheses, brackets, or semicolons.
Garbage collecting Python has automated garbage collection, avoiding the need for the programmer to manage memory.
When it comes to Python syntax and what Python is all about, Python Enhancement Proposal 20—i.e., the so-called “Zen of Python”—provides the major guidelines. It can be accessed from every interactive shell with the command import this:
In [1]: import this The Zen of Python, by Tim Peters
Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated. Flat is better than nested. Sparse is better than dense. Readability counts. Special cases aren't special enough to break the rules. Although practicality beats purity. Errors should never pass silently. Unless explicitly silenced.
4 | Chapter 1: Why Python for Finance

In the face of ambiguity, refuse the temptation to guess. There should be one-- and preferably only one --obvious way to do it. Although that way may not be obvious at first unless you're Dutch. Now is better than never. Although never is often better than *right* now. If the implementation is hard to explain, it's a bad idea. If the implementation is easy to explain, it may be a good idea. Namespaces are one honking great idea -- let's do more of those!
A Brief History of Python
Although Python might still have the appeal of something new to some people, it has been around for quite a long time. In fact, development efforts began in the 1980s by Guido van Rossum from the Netherlands. He is still active in Python development and has been awarded the title of Benevolent Dictator for Life by the Python commu‐ nity. In July 2018, van Rossum stepped down from this position after decades of being an active driver of the Python core development efforts. The following can be cons-
idered milestones in the development of Python:
• Python 0.9.0 released in 1991 (first release) • Python 1.0 released in 1994 • Python 2.0 released in 2000 • Python 2.6 released in 2008 • Python 3.0 released in 2008 • Python 3.1 released in 2009 • Python 2.7 released in 2010 • Python 3.2 released in 2011 • Python 3.3 released in 2012 • Python 3.4 released in 2014 • Python 3.5 released in 2015 • Python 3.6 released in 2016 • Python 3.7 released in June 2018
It is remarkable, and sometimes confusing to Python newcomers, that there are two major versions available, still being developed and, more importantly, in parallel use since 2008. As of this writing, this will probably keep on for a little while since tons of code available and in production is still Python 2.6/2.7. While the first edition of this book was based on Python 2.7, this second edition uses Python 3.7 throughout.
The Python Programming Language | 5

The Python Ecosystem
A major feature of Python as an ecosystem, compared to just being a programming language, is the availability of a large number of packages and tools. These packages and tools generally have to be imported when needed (e.g., a plotting library) or have to be started as a separate system process (e.g., a Python interactive development environment). Importing means making a package available to the current name‐ space and the current Python interpreter process. Python itself already comes with a lar-
ge set of packages and modules that enhance the basic interpreter in different directions, known as the Python Standard Library. For example, basic mathematical calculations can be done without any importing, while more specialized mathematical functions need to be imported through the math mod‐ ule:
In [2]: 100 * 2.5 + 50 Out[2]: 300.0

In [3]: log(1)

-----------------------------------------------------------------

NameError

Traceback (most recent call last)

<ipython-input-3-74f22a2fd43b> in <module>

----> 1 log(1)

NameError: name 'log' is not defined

In [4]: import math

In [5]: math.log(1) Out[5]: 0.0
Without further imports, an error is raised.

After importing the math module, the calculation can be executed. While math is a standard Python module available with any Python installation, there are many more packages that can be installed optionally and that can be used in the very same fashion as the standard modules. Such packages are available from differ‐ ent (web) sources. However, it is generally advisable to use a Python package man‐ ager that makes sure that all libraries are consistent with each other (see Chapter 2 for more on th-
is topic). The code examples presented so far use interactive Python environments: IPython and Jupyter, respectively. These are probably the most widely used interactive Python environments at the time of this writing. Although IPython started out as just an enhanced interactive Python shell, it today has many features typically found in inte‐ grated development environments (IDEs), such as support for profiling and debug‐

6 | Chapter 1: Why Python for Finance

ging. Those features missing in IPython are typically provided by advanced text/code editors, like Vim, which can also be integrated with IPython. Therefore, it is not unusual to combine IPython with one’s text/code editor of choice to form the basic toolchain for a Python development process. IPython enhances the standard interactive shell in many ways. Among other things, it provides improved command-line history functions and allows for easy object inspection. For instance, the help text (docst-
ring) for a function is printed by just adding a ? before or after the function name (adding ?? will provide even more infor‐ mation). IPython originally came in two popular versions: a shell version and a browser-based version (the Notebook). The Notebook variant proved so useful and popular that it evolved into an independent, language-agnostic project now called Jupyter. Given this background, it is no surprise that Jupyter Notebook inherits most of the benefi‐ cial features of IPython—and offe-
rs much more, for example when it comes to visual‐ ization. Refer to VanderPlas (2016, Chapter 1) for more details on using IPython.
The Python User Spectrum
Python does not only appeal to professional software developers; it is also of use for the casual developer as well as for domain experts and scientific developers. Professional software developers find in Python all they might require to efficiently build large applications. Almost all programming paradigms are supported; there are powerful development tools available; and any task can, in principle, be addressed with Python. These types of users typically build their own frameworks and classes, -
also work on the fundamental Python and scientific stack, and strive to make the most of the ecosystem. Scientific developers or domain experts are generally heavy users of certain packages and frameworks, have built their own applications that they enhance and optimize over time, and tailor the ecosystem to their specific needs. These groups of users also generally engage in longer interactive sessions, rapidly prototyping new code as well as exploring and visualizing their research and/or domain-
 data sets. Casual programmers like to use Python generally for specific problems they know that Python has its strengths in. For example, visiting the gallery page of matplotlib, copying a certain piece of visualization code provided there, and adjusting the code to their specific needs might be a beneficial use case for members of this group. There is also another important group of Python users: beginner programmers, i.e., those that are just starting to program. Nowadays, Python has become a v-
ery popular language at universities, colleges, and even schools to introduce students to program‐
The Python Programming Language | 7

ming.1 A major reason for this is that its basic syntax is easy to learn and easy to understand, even for the non-developer. In addition, it is helpful that Python sup‐ ports almost all programming styles.2
The Scientific Stack
There is a certain set of packages that is collectively labeled the scientific stack. This stack comprises, among others, the following packages: NumPy
NumPy provides a multidimensional array object to store homogeneous or hetero‐ geneous data; it also provides optimized functions/methods to operate on this array object. SciPy SciPy is a collection of subpackages and functions implementing important stan‐ dard functionality often needed in science or finance; for example, one finds functions for cubic splines interpolation as well as for numerical integration. matplotlib This is the most popular plotting and visualization package for Python, prov-
id‐ ing both 2D and 3D visualization capabilities. pandas pandas builds on NumPy and provides richer classes for the management and analysis of time series and tabular data; it is tightly integrated with matplotlib for plotting and PyTables for data storage and retrieval. scikit-learn scikit-learn is a popular machine learning (ML) package that provides a uni‐ fied application programming interface (API) for many different ML algorithms, such as for estimation, classification, or clustering. PyTab-
les PyTables is a popular wrapper for the HDF5 data storage package; it is a package to implement optimized, disk-based I/O operations based on a hierarchical data‐ base/file format.
1 Python, for example, is a major language used in the Master of Financial Engineering Program at Baruch Col‐ lege of the City University of New York. The first edition of this book is in use at a large number of universi‐ ties around the world to teach Python for financial analysis and application building.
2 See http://wiki.python.org/moin/BeginnersGuide, where you will find links to many valuable resources for both developers and non-developers getting started with Python.
8 | Chapter 1: Why Python for Finance

Depending on the specific domain or problem, this stack is enlarged by additional packages, which more often than not have in common that they build on top of one or more of these fundamental packages. However, the least common denominator or basic building blocks in general are the NumPy ndarray class (see Chapter 4) and the pandas DataFrame class (see Chapter 5). Taking Python as a programming language alone, there are a number of other lan‐ guages available that can probably keep up with its sy-
ntax and elegance. For example, Ruby is a popular language often compared to Python. The language’s website describes Ruby as:
A dynamic, open source programming language with a focus on simplicity and pro‐ ductivity. It has an elegant syntax that is natural to read and easy to write.
The majority of people using Python would probably also agree with the exact same statement being made about Python itself. However, what distinguishes Python for many users from equally appealing languages like Ruby is the availability of the scien‐ tific stack. This makes Python not only a good and elegant language to use, but also one that is capable of replacing domain-specific languages and tool sets like Matlab or R. It also provides by default anything that you would expect, say, as a seaso-
ned web developer or systems administrator. In addition, Python is good at interfacing with domain-specific languages such as R, so that the decision usually is not about either Python or something else—it is rather about which language should be the major one.
Technology in Finance
With these “rough ideas” of what Python is all about, it makes sense to step back a bit and to briefly contemplate the role of technology in finance. This will put one in a position to better judge the role Python already plays and, even more importantly, will probably play in the financial industry of the future. In a sense, technology per se is nothing special to financial institutions (as compared, for instance, to biotechnology companies) or to the finance function (as compared to other corpor-
ate functions, like logistics). However, in recent years, spurred by inno‐ vation and also regulation, banks and other financial institutions like hedge funds have evolved more and more into technology companies instead of being just finan‐ cial intermediaries. Technology has become a major asset for almost any financial institution around the globe, having the potential to lead to competitive advantages as well as disadvantages. Some background information can shed light on the reasons for this d-
evelopment.
Technology in Finance | 9

Technology Spending
Banks and financial institutions together form the industry that spends the most on technology on an annual basis. The following statement therefore shows not only that technology is important for the financial industry, but that the financial industry is also really important to the technology sector:
FRAMINGHAM, Mass., June 14, 2018 – Worldwide spending on information tech‐ nology (IT) by financial services firms will be nearly $500 billion in 2021, growing from $440 billion in 2018, according to new data from a series of Financial Services IT Spending Guides from International Data Corporation (IDC).
—IDC
In particular, banks and other financial institutions are engaging in a race to make their business and operating models digital:
Bank spending on new technologies was predicted to amount to 19.9 billion U.S. dol‐ lars in 2017 in North America. The banks develop current systems and work on new technological solutions in order to increase their competitiveness on the global market and to attract clients interested in new online and mobile technologies. It is a big opportunity for global fintech com‐ panies which provide new ideas and software solutions for the banking industry.
—Statista
Large multinational banks today generally employ thousands of developers to main‐ tain existing systems and build new ones. Large investment banks with heavy techno‐ logical requirements often have technology budgets of several billion USD per year.
Technology as Enabler
The technological development has also contributed to innovations and efficiency improvements in the financial sector. Typically, projects in this area run under the umbrella of digitalization.
The financial services industry has seen drastic technology-led changes over the past few years. Many executives look to their IT departments to improve efficiency and facilitate game-changing innovation—while somehow also lowering costs and con‐ tinuing to support legacy systems. Meanwhile, FinTech start-ups are encroaching upon established markets, leading with customer-friendly solutions developed from the ground up and unencumbered by legacy systems.
—PwC 19th Annual Global CEO Survey 2016
As a side effect of the increasing efficiency, competitive advantages must often be looked for in ever more complex products or transactions. This in turn inherently increases risks and makes risk management as well as oversight and regulation more and more difficult. The financial crisis of 2007 and 2008 tells the story of potential
10 | Chapter 1: Why Python for Finance

dangers resulting from such developments. In a similar vein, “algorithms and com‐ puters gone wild” represent a potential risk to the financial markets; this materialized dramatically in the so-called flash crash of May 2010, where automated selling led to large intraday drops in certain stocks and stock indices. Part IV covers topics related to the algorithmic trading of financial instruments.
Technology and Talent as Barriers to Entry
On the one hand, technology advances reduce cost over time, ceteris paribus. On the other hand, financial institutions continue to invest heavily in technology to both gain market share and defend their current positions. To be active today in certain areas in finance often brings with it the need for large-scale investments in both tech‐ nology and skilled staff. As an example, consider the derivatives analytics space:
Aggregated over the total software lifecycle, firms adopting in-house strategies for OTC [derivatives] pricing will require investments between $25 million and $36 mil‐ lion alone to build, maintain, and enhance a complete derivatives library.
—Ding (2010)
Not only is it costly and time-consuming to build a full-fledged derivatives analytics library, but you also need to have enough experts to do so. And these experts have to have the right tools and technologies available to accomplish their tasks. With the development of the Python ecosystem, such efforts have become more efficient and budgets in this regard can be reduced significantly today compared to, say, 10 years ago. Part V covers derivatives analytics and builds a small but powerful and fl-
exible derivatives pricing library with Python and standard Python packages alone. Another quote about the early days of Long-Term Capital Management (LTCM), for‐ merly one of the most respected quantitative hedge funds—which, however, went bust in the late 1990s—further supports this insight about technology and talent:
Meriwether spent $20 million on a state-of-the-art computer system and hired a crack team of financial engineers to run the show at LTCM, which set up shop in Greenwich, Connecticut. It was risk management on an industrial level.
—Patterson (2010)
The same computing power that Meriwether had to buy for millions of dollars is today probably available for thousands or can be rented from a cloud provider based on a flexible fee plan. Chapter 2 shows how to set up an infrastructure in the cloud for interactive financial analytics, application development, and deployment with Python. The budgets for such a professional infrastructure start at a few USD per month. On the other hand, trading, pricing, and risk management have become so complex for-
 larger financial institutions that today they need to deploy IT infrastruc‐ tures with tens of thousands of computing cores.
Technology in Finance | 11

Ever-Increasing Speeds, Frequencies, and Data Volumes
The one dimension of the finance industry that has been influenced most by techno‐ logical advances is the speed and frequency with which financial transactions are decided and executed. Lewis (2014) describes so-called flash trading—i.e., trading at the highest speeds possible—in vivid detail. On the one hand, increasing data availability on ever-smaller time scales makes it necessary to react in real time. On the other hand, the increasing speed and frequency of trading makes the data volumes fu-
rther increase. This leads to processes that rein‐ force each other and push the average time scale for financial transactions systemati‐ cally down. This is a trend that had already started a decade ago:
Renaissance’s Medallion fund gained an astonishing 80 percent in 2008, capitalizing on the market’s extreme volatility with its lightning-fast computers. Jim Simons was the hedge fund world’s top earner for the year, pocketing a cool $2.5 billion.
—Patterson (2010)
Thirty years’ worth of daily stock price data for a single stock represents roughly 7,500 closing quotes. This kind of data is what most of today’s finance theory is based on. For example, modern or mean-variance portfolio theory (MPT), the capital asset pricing model (CAPM), and value-at-risk (VaR) all have their foundations in daily stock price data. In comparison, on a typical trading day during a single trading hour the stock price of Apple Inc. (AAPL) may be quoted around 15,000 times—roughly-
 twice the number of quotes compared to available end-of-day closing quotes over 30 years (see the example in “Data-Driven and AI-First Finance” on page 24). This brings with it a number of challenges: Data processing
It does not suffice to consider and process end-of-day quotes for stocks or other financial instruments; “too much” happens during the day, and for some instru‐ ments during 24 hours for 7 days a week. Analytics speed Decisions often have to be made in milliseconds or even faster, making it neces‐ sary to build the respective analytics capabilities and to analyze large amounts of data in real time. Theoretical foundations Although traditional finance theories and concepts are far from being perfec-
t, they have been well tested (and sometimes well rejected) over time; for the milli‐ second and microsecond scales important as of today, consistent financial con‐ cepts and theories in the traditional sense that have proven to be somewhat robust over time are still missing.
12 | Chapter 1: Why Python for Finance

All these challenges can in general only be addressed by modern technology. Some‐ thing that might also be a little bit surprising is that the lack of consistent theories often is addressed by technological approaches, in that high-speed algorithms exploit market microstructure elements (e.g., order flow, bid-ask spreads) rather than relying on some kind of financial reasoning.
The Rise of Real-Time Analytics
There is one discipline that has seen a strong increase in importance in the finance industry: financial and data analytics. This phenomenon has a close relationship to the insight that speeds, frequencies, and data volumes increase at a rapid pace in the industry. In fact, real-time analytics can be considered the industry’s answer to this trend. Roughly speaking, “financial and data analytics” refers to the discipline of applying software and technology in combination with (possibly advanced) al-
gorithms and methods to gather, process, and analyze data in order to gain insights, to make deci‐ sions, or to fulfill regulatory requirements, for instance. Examples might include the estimation of sales impacts induced by a change in the pricing structure for a finan‐ cial product in the retail branch of a bank, or the large-scale overnight calculation of credit valuation adjustments (CVA) for complex portfolios of derivatives trades of an investment bank. There are two major challenges that fi-
nancial institutions face in this context: Big data
Banks and other financial institutions had to deal with massive amounts of data even before the term “big data” was coined; however, the amount of data that has to be processed during single analytics tasks has increased tremendously over time, demanding both increased computing power and ever-larger memory and storage capacities. Real-time economy In the past, decision makers could rely on structured, regular planning as well as decision and (risk) management processes, whereas they today face th-
e need to take care of these functions in real time; several tasks that have been taken care of in the past via overnight batch runs in the back office have now been moved to the front office and are executed in real time. Again, one can observe an interplay between advances in technology and financial/ business practice. On the one hand, there is the need to constantly improve analytics approaches in terms of speed and capability by applying modern technologies. On the other hand, advances on the-
 technology side allow new analytics approaches that were considered impossible (or infeasible due to budget constraints) a couple of years or even months ago.
Technology in Finance | 13

One major trend in the analytics space has been the utilization of parallel architec‐ tures on the central processing unit (CPU) side and massively parallel architectures on the general-purpose graphics processing unit (GPGPU) side. Current GPGPUs have computing cores in the thousands, making necessary a sometimes radical rethinking of what parallelism might mean to different algorithms. What is still an obstacle in this regard is that users generally have to learn new programming para‐ digms and -
techniques to harness the power of such hardware.
Python for Finance
The previous section described selected aspects characterizing the role of technology in finance:
• Costs for technology in the finance industry • Technology as an enabler for new business and innovation • Technology and talent as barriers to entry in the finance industry • Increasing speeds, frequencies, and data volumes • The rise of real-time analytics
This section analyzes how Python can help in addressing several of the challenges these imply. But first, on a more fundamental level, a brief analysis of Python for finance from a language and syntax point of view.
Finance and Python Syntax
Most people who make their first steps with Python in a finance context may attack an algorithmic problem. This is similar to a scientist who, for example, wants to solve a differential equation, evaluate an integral, or simply visualize some data. In general, at this stage, little thought is given to topics like a formal development process, test‐ ing, documentation, or deployment. However, this especially seems to be the stage where people fall in love with Python. A major reason for this might -
be that Python syntax is generally quite close to the mathematical syntax used to describe scientific problems or financial algorithms. This can be illustrated by a financial algorithm, namely the valuation of a European call option by Monte Carlo simulation. The example considers a Black-ScholesMerton (BSM) setup in which the option’s underlying risk factor follows a geometric Brownian motion. Assume the following numerical parameter values for the valuation:
• Initial stock index level S0 = 100 • Strike price of the European call option K = 105
14 | Chapter 1: Why Python for Finance

• Time to maturity T = 1 year • Constant, riskless short rate r = 0.05 • Constant volatility σ = 0.2
In the BSM model, the index level at maturity is a random variable given by Equation 1-1, with z being a standard normally distributed random variable.

Equation 1-1. Black-Scholes-Merton (1973) index level at maturity

(( ) ) ST = S0 exp

r–

1 2

σ2

T

+

σ

Tz

The following is an algorithmic description of the Monte Carlo valuation procedure:

1. Draw I pseudo-random numbers z(i), i ∈ {1, 2, ..., I }, from the standard normal distribution.

2.

Calculate 1-1.

all

resulting

index

levels

at

maturity

ST (i)

for

given

z(i)

and

Equation

3. Calculate all inner values of the option at maturity as hT(i) = max(ST(i) – K, 0). 4. Estimate the option present value via the Monte Carlo estimator as given in
Equation 1-2.

Equation 1-2. Monte Carlo estimator for European option

C0

≈

e –rT

1 I

∑
I

h T (i)

This problem and algorithm must now be translated into Python. The following code implements the required steps:
In [6]: import math import numpy as np

In [7]: S0 = 100. K = 105. T = 1.0 r = 0.05 sigma = 0.2

In [8]: I = 100000

In [9]: np.random.seed(1000)

In [10]: z = np.random.standard_normal(I)

Python for Finance | 15

In [11]: ST = S0 * np.exp((r - sigma ** 2 / 2) * T + sigma * math.sqrt(T) * z) In [12]: hT = np.maximum(ST - K, 0) In [13]: C0 = math.exp(-r * T) * np.mean(hT) In [14]: print('Value of the European call option: {:5.3f}.'.format(C0))
Value of the European call option: 8.019.
NumPy is used here as the main package. The model and simulation parameter values are defined. The seed value for the random number generator is fixed. Standard normally distributed random numbers are drawn. End-of-period values are simulated. The option payoffs at maturity are calculated. The Monte Carlo estimator is evaluated. The resulting value estimate is printed. Three aspects are worth highlighting: Syntax The Python syntax is indeed quite close to the mathematical syntax, e.g., when it com-
es to the parameter value assignments. Translation Every mathematical and/or algorithmic statement can generally be translated into a single line of Python code. Vectorization One of the strengths of NumPy is the compact, vectorized syntax, e.g., allowing for 100,000 calculations within a single line of code. This code can be used in an interactive environment like IPython or Jupyter Note‐ book. However, code that is meant to be reused regularly typically gets organized in so-called modules (or sc-
ripts), which are single Python files (technically text files) with the suffix .py. Such a module could in this case look like Example 1-1 and could be saved as a file named bsm_mcs_euro.py.
16 | Chapter 1: Why Python for Finance

Example 1-1. Monte Carlo valuation of European call option
# # Monte Carlo valuation of European call option # in Black-Scholes-Merton model # bsm_mcs_euro.py # # Python for Finance, 2nd ed. # (c) Dr. Yves J. Hilpisch # import math import numpy as np
# Parameter Values S0 = 100. # initial index level K = 105. # strike price T = 1.0 # time-to-maturity r = 0.05 # riskless short rate sigma = 0.2 # volatility
I = 100000 # number of simulations
# Valuation Algorithm z = np.random.standard_normal(I) # pseudo-random numbers # index values at maturity ST = S0 * np.exp((r - 0.5 * sigma ** 2) * T + sigma * math.sqrt(T) * z) hT = np.maximum(ST - K, 0) # payoff at maturity C0 = math.exp(-r * T) * np.mean(hT) # Monte Carlo estimator
# Result Output print('Value of the European call option %5.3f.' % C0)
The algorithmic example in this subsection illustrates that Python, with its very syn‐ tax, is well suited to complement the classic duo of scientific languages, English and mathematics. It seems that adding Python to the set of scientific languages makes it more well rounded. One then has:
• English for writing and talking about scientific and financial problems, etc. • Mathematics for concisely, exactly describing and modeling abstract aspects, algo‐
rithms, complex quantities, etc. • Python for technically modeling and implementing abstract aspects, algorithms,
complex quantities, etc.
Python for Finance | 17

Mathematics and Python Syntax
There is hardly any programming language that comes as close to mathematical syntax as Python. Numerical algorithms are there‐ fore in general straightforward to translate from the mathematical representation into the Pythonic implementation. This makes pro‐ totyping, development, and code maintenance in finance quite effi‐ cient with Python. In some areas, it is common practice to use pseudo-code and therewith to introduce a fourth language family member. The role of pseudo-code is to represent, -
for example, financial algorithms in a more technical fashion that is both still close to the mathe‐ matical representation and already quite close to the technical implementation. In addition to the algorithm itself, pseudo-code takes into account how computers work in principle. This practice generally has its cause in the fact that with most (compiled) program‐ ming languages the technical implementation is quite “far away” from its formal, mathematical representation. The majority of programmi-
ng languages make it neces‐ sary to include so many elements that are only technically required that it is hard to see the equivalence between the mathematics and the code. Nowadays, Python is often used in a pseudo-code way since its syntax is almost analo‐ gous to the mathematics and since the technical “overhead” is kept to a minimum. This is accomplished by a number of high-level concepts embodied in the language that not only have their advantages but also come in general with risks and/or ot-
her costs. However, it is safe to say that with Python you can, whenever the need arises, follow the same strict implementation and coding practices that other languages might require from the outset. In that sense, Python can provide the best of both worlds: high-level abstraction and rigorous implementation.
Efficiency and Productivity Through Python
At a high level, benefits from using Python can be measured in three dimensions: Efficiency
How can Python help in getting results faster, in saving costs, and in saving time? Productivity
How can Python help in getting more done with the same resources (people, assets, etc.)? Quality What does Python allow one to do that alternative technologies do not allow for?
18 | Chapter 1: Why Python for Finance

A discussion of these aspects can by nature not be exhaustive. However, it can high‐ light some arguments as a starting point.
Shorter time-to-results
A field where the efficiency of Python becomes quite obvious is interactive data ana‐ lytics. This is a field that benefits tremendously from such powerful tools as IPython, Jupyter Notebook, and packages like pandas. Consider a finance student who is writing their master’s thesis and is interested in S&P 500 index values. They want to analyze historical index levels for, say, a few years to see how the volatility of the index has fluctuated over time and hope to find evidence that volatility, in -
contrast to some typical model assumptions, fluctuates over time and is far from being constant. The results should also be visualized. The student mainly has to do the following:
• Retrieve index level data from the web • Calculate the annualized rolling standard deviation of the log returns (volatility) • Plot the index level data and the volatility results
These tasks are complex enough that not too long ago one would have considered them to be something for professional financial analysts only. Today, even the finance student can easily cope with such problems. The following code shows how exactly this works—without worrying about syntax details at this stage (everything is explained in detail in subsequent chapters):
In [16]: import numpy as np import pandas as pd from pylab import plt, mpl
In [17]: plt.style.use('seaborn') mpl.rcParams['font.family'] = 'serif' %matplotlib inline
In [18]: data = pd.read_csv('../../source/tr_eikon_eod_data.csv', index_col=0, parse_dates=True)
data = pd.DataFrame(data['.SPX']) data.dropna(inplace=True) data.info() <class 'pandas.core.frame.DataFrame'> DatetimeIndex: 2138 entries, 2010-01-04 to 2018-06-29 Data columns (total 1 columns): .SPX 2138 non-null float64 dtypes: float64(1) memory usage: 33.4 KB
In [19]: data['rets'] = np.log(data / data.shift(1)) data['vola'] = data['rets'].rolling(252).std() * np.sqrt(252)
Python for Finance | 19

In [20]: data[['.SPX', 'vola']].plot(subplots=True, figsize=(10, 6));
This imports NumPy and pandas. This imports matplotlib and configures the plotting style and approach for Jupyter. pd.read_csv() allows the retrieval of remotely or locally stored data sets in comma-separated values (CSV) form. A subset of the data is picked and NaN (“not a number”) values eliminated. This shows some metainformation about the data set. The log returns are calculated in vectorized fashion (“no looping” on the Python level). The rolling, annualized volatility is derived. This finall-
y plots the two time series. Figure 1-1 shows the graphical result of this brief interactive session. It can be consid‐ ered almost amazing that a few lines of code suffice to implement three rather com‐ plex tasks typically encountered in financial analytics: data gathering, complex and repeated mathematical calculations, as well as visualization of the results. The exam‐ ple illustrates that pandas makes working with whole time series almost as simple as doing mathematical operations on floating-
-point numbers. Translated to a professional finance context, the example implies that financial ana‐ lysts can—when applying the right Python tools and packages that provide high-level abstractions—focus on their domain and not on the technical intrinsicalities. Ana‐ lysts can also react faster, providing valuable insights almost in real time and making sure they are one step ahead of the competition. This example of increased efficiency can easily translate into measurable bottom-line effects.
20 | Chapter 1: Why Python for Finance

Figure 1-1. S&P 500 closing values and annualized volatility
Ensuring high performance
In general, it is accepted that Python has a rather concise syntax and that it is rela‐ tively efficient to code with. However, due to the very nature of Python being an interpreted language, the prejudice persists that Python often is too slow for compute-intensive tasks in finance. Indeed, depending on the specific implementa‐ tion approach, Python can be really slow. But it does not have to be slow—it can be highly performing in almost any application area. In principle, one can distinguish at -
least three different strategies for better performance: Idioms and paradigms
In general, many different ways can lead to the same result in Python, but some‐ times with rather different performance characteristics; “simply” choosing the right way (e.g., a specific implementation approach, such as the judicious use of data structures, avoiding loops through vectorization, or the use of a specific package such as pandas) can improve results significantly. Compiling Nowadays, there are several performance packages available that provide com‐ piled versions of important functi-
ons or that compile Python code statically or dynamically (at runtime or call time) to machine code, which can make such functions orders of magnitude faster than pure Python code; popular ones are Cython and Numba.
Python for Finance | 21

Parallelization Many computational tasks, in particular in finance, can significantly benefit from parallel execution; this is nothing special to Python but something that can easily be accomplished with it.
Performance Computing with Python
Python per se is not a high-performance computing technology. However, Python has developed into an ideal platform to access current performance technologies. In that sense, Python has become something like a glue language for performance computing technologies.
This subsection sticks to a simple, but still realistic, example that touches upon all three strategies (later chapters illustrate the strategies in detail). A quite common task in financial analytics is to evaluate complex mathematical expressions on large arrays of numbers. To this end, Python itself provides everything needed:
In [21]: import math loops = 2500000 a = range(1, loops) def f(x): return 3 * math.log(x) + math.cos(x) ** 2 %timeit r = [f(x) for x in a] 1.59 s ± 41.2 ms per loop (mean ± std. dev. of 7 runs, 1 loop each)
The Python interpreter needs about 1.6 seconds in this case to evaluate the function f() 2,500,000 times. The same task can be implemented using NumPy, which provides optimized (i.e., precompiled) functions to handle such array-based operations:
In [22]: import numpy as np a = np.arange(1, loops) %timeit r = 3 * np.log(a) + np.cos(a) ** 2 87.9 ms ± 1.73 ms per loop (mean ± std. dev. of 7 runs, 10 loops each)
Using NumPy considerably reduces the execution time to about 88 milliseconds. How‐ ever, there is even a package specifically dedicated to this kind of task. It is called numexpr, for “numerical expressions.” It compiles the expression to improve upon the performance of the general NumPy functionality by, for example, avoiding in-memory copies of ndarray objects along the way:
In [23]: import numexpr as ne ne.set_num_threads(1) f = '3 * log(a) + cos(a) ** 2' %timeit r = ne.evaluate(f) 50.6 ms ± 4.2 ms per loop (mean ± std. dev. of 7 runs, 10 loops each)
22 | Chapter 1: Why Python for Finance

Using this more specialized approach further reduces execution time to about 50 milliseconds. However, numexpr also has built-in capabilities to parallelize the execu‐ tion of the respective operation. This allows us to use multiple threads of a CPU:
In [24]: ne.set_num_threads(4) %timeit r = ne.evaluate(f) 22.8 ms ± 1.76 ms per loop (mean ± std. dev. of 7 runs, 10 loops each)
Parallelization brings execution time further down to below 23 milliseconds in this case, with four threads utilized. Overall, this is a performance improvement of more than 90 times. Note, in particular, that this kind of improvement is possible without altering the basic problem/algorithm and without knowing any detail about compil‐ ing or parallelization approaches. The capabilities are accessible from a high level even by non-experts. However, one has to be aware, of course, of which capabilit-
ies and options exist. This example shows that Python provides a number of options to make more out of existing resources—i.e., to increase productivity. With the parallel approach, three times as many calculations can be accomplished in the same amount of time as com‐ pared to the sequential approach—in this case simply by telling Python to use multi‐ ple available CPU threads instead of just one.
From Prototyping to Production
Efficiency in interactive analytics and performance when it comes to execution speed are certainly two benefits of Python to consider. Yet another major benefit of using Python for finance might at first sight seem a bit subtler; at second sight, it might present itself as an important strategic factor for financial institutions. It is the possi‐ bility to use Python end-to-end, from prototyping to production. Today’s practice in financial institutions around the globe, when it comes to financial -
development processes, is still often characterized by a separated, two-step process. On the one hand, there are the quantitative analysts (“quants”) responsible for model development and technical prototyping. They like to use tools and environments like Matlab and R that allow for rapid, interactive application development. At this stage of the development efforts, issues like performance, stability, deployment, access management, and version control, among others, are not that important. One is-
 mainly looking for a proof of concept and/or a prototype that exhibits the main desired features of an algorithm or a whole application. Once the prototype is finished, IT departments with their developers take over and are responsible for translating the existing prototype code into reliable, maintainable, and performant production code. Typically, at this stage there is a paradigm shift in that compiled languages, such as C++ or Java, are used to fulfill the requirements for deployment and prod-
uction. Also, a formal development process with professional tools, version control, etc., is generally applied.
Python for Finance | 23

This two-step approach has a number of generally unintended consequences: Inefficiencies
Prototype code is not reusable; algorithms have to be implemented twice; redun‐ dant efforts take time and resources; risks arise during translation Diverse skill sets Different departments show different skill sets and use different languages to implement “the same things”; people not only program but also speak different languages Legacy code Code is available and has to be maintained in different languages, often using dif‐ ferent styles of implementation Using Python, on the other hand, enable-
s a streamlined end-to-end process from the first interactive prototyping steps to highly reliable and efficiently maintainable pro‐ duction code. The communication between different departments becomes easier. The training of the workforce is also more streamlined in that there is only one major language covering all areas of financial application building. It also avoids the inher‐ ent inefficiencies and redundancies when using different technologies in different steps of the development process-
. All in all, Python can provide a consistent techno‐ logical framework for almost all tasks in financial analytics, financial application development, and algorithm implementation.
Data-Driven and AI-First Finance
Basically all the observations regarding the relationship of technology and the finan‐ cial industry first formulated in 2014 for the first edition of this book still seem pretty current and important in August 2018, at the time of updating this chapter for the second edition of the book. However, this section comments on two major trends in the financial industry that are about to reshape it in a fundamental way. These two trends have mainly crystallized themselves over the last few years.
Data-Driven Finance
Some of the most important financial theories, such as MPT and CAPM, date as far back as to the 1950s and 1960s. However, they still represent a cornerstone in the education of students in such fields as economics, finance, financial engineering, and business administration. This might be surprising since the empirical support for most of these theories is meager at best, and the evidence is often in complete con‐ trast to what the theories suggest and imply. On the other hand, their popularity is-
 understandable since they are close to humans’ expectations of how financial markets might behave and since they are elegant mathematical theories resting on a number of appealing, if in general too simplistic, assumptions.
24 | Chapter 1: Why Python for Finance

The scientific method, say in physics, starts with data, for example from experiments or observations, and moves on to hypotheses and theories that are then tested against the data. If the tests are positive, the hypotheses and theories might be refined and properly written down, for instance, in the form of a research paper for publication. If the tests are negative, the hypotheses and theories are rejected and the search begins anew for ones that conform with the data. Since physical laws are st-
able over time, once such a law is discovered and well tested it is generally there to stay, in the best case, forever. The history of (quantitative) finance in large parts contradicts the scientific method. In many cases, theories and models have been developed “from scratch” on the basis of simplifying mathematical assumptions with the goal of discovering elegant answers to central problems in finance. Among others, popular assumptions in finance are normally distributed returns for financial in-
struments and linear relation‐ ships between quantities of interest. Since these phenomena are hardly ever found in financial markets, it should not come as a surprise that empirical evidence for the ele‐ gant theories is often lacking. Many financial theories and models have been formu‐ lated, proven, and published first and have only later been tested empirically. To some extent, this is of course due to the fact that financial data back in the 1950s to the 1970s or even later was not available -
in the form that it is today even to students getting started with a bachelor’s in finance. The availability of such data to financial institutions has drastically increased since the early to mid-1990s, and nowadays even individuals doing financial research or getting involved in algorithmic trading have access to huge amounts of historical data down to the tick level as well as real-time tick data via streaming services. This allows us to return to the scientific method, which starts in general -
with the data before ideas, hypotheses, models, and strategies are devised. A brief example shall illustrate how straightforward it has become today to retrieve professional data on a large scale even on a local machine, making use of Python and a professional data subscription to the Eikon Data APIs. The following example retrieves tick data for the Apple Inc. stock for one hour during a regular trading day. About 15,000 tick quotes, including volume information, are retrieved. While the symbol f-
or the stock is AAPL, the Reuters Instrument Code (RIC) is AAPL.O:
In [26]: import eikon as ek
In [27]: data = ek.get_timeseries('AAPL.O', fields='*', start_date='2018-10-18 16:00:00', end_date='2018-10-18 17:00:00', interval='tick')
In [28]: data.info() <class 'pandas.core.frame.DataFrame'> DatetimeIndex: 35350 entries, 2018-10-18 16:00:00.002000 to 2018-10-18
Data-Driven and AI-First Finance | 25

16:59:59.888000 Data columns (total 2 columns): VALUE 35285 non-null float64 VOLUME 35350 non-null float64 dtypes: float64(2) memory usage: 828.5 KB

In [29]: data.tail() Out[29]: AAPL.O
Date 2018-10-18 16:59:59.433 2018-10-18 16:59:59.433 2018-10-18 16:59:59.439 2018-10-18 16:59:59.754 2018-10-18 16:59:59.888

VALUE
217.13 217.13 217.13 217.14 217.13

VOLUME
10.0 12.0 231.0 100.0 100.0

Eikon Data API usage requires a subscription and an API connection.

Retrieves the tick data for the Apple Inc. (AAPL.O) stock.

Shows the last five rows of tick data.
The Eikon Data APIs give access not only to structured financial data, such as histori‐ cal price data, but also to unstructured data such as news articles. The next example retrieves metadata for a small selection of news articles and shows the beginning of one of the articles as full text:
In [30]: news = ek.get_news_headlines('R:AAPL.O Language:LEN', date_from='2018-05-01', date_to='2018-06-29', count=7)

In [31]: news Out[31]:
versionCreated \ 2018-06-28 23:00:00.000 2018-06-28 23:00:00.000 2018-06-28 21:23:26.526 2018-06-28 21:23:26.526 2018-06-28 19:48:32.627 2018-06-28 19:48:32.627 2018-06-28 17:33:10.306 2018-06-28 17:33:10.306 2018-06-28 17:33:07.033 2018-06-28 17:33:07.033 2018-06-28 17:31:44.960 2018-06-28 17:31:44.960 2018-06-28 17:00:00.000 2018-06-28 17:00:00.000

text \ 2018-06-28 23:00:00.000 RPT-FOCUS-AI ambulances and robot doctors: Chi... 2018-06-28 21:23:26.526 Why Investors Should Love Apple's (AAPL) TV En... 2018-06-28 19:48:32.627 Reuters Insider - Trump: We're reclaiming our ... 2018-06-28 17:33:10.306 Apple v. Samsung ends not with a whimper but a... 2018-06-28 17:33:07.033 Apple's trade-war discount extended for anothe... 2018-06-28 17:31:44.960 Other Products: Apple's fast-growing island of... 2018-06-28 17:00:00.000 Pokemon Go creator plans to-
 sell the tech behi...

26 | Chapter 1: Why Python for Finance

storyId \ 2018-06-28 23:00:00.000 urn:newsml:reuters.com:20180628:nL4N1TU4F8:6 2018-06-28 21:23:26.526 urn:newsml:reuters.com:20180628:nNRA6e2vft:1 2018-06-28 19:48:32.627 urn:newsml:reuters.com:20180628:nRTV1vNw1p:1 2018-06-28 17:33:10.306 urn:newsml:reuters.com:20180628:nNRA6e1oza:1 2018-06-28 17:33:07.033 urn:newsml:reuters.com:20180628:nNRA6e1pmv:1 2018-06-28 17:31:44.960 urn:newsml:reuters.com:20180628:nNRA6e1m3n:1 2018-06-28 17:00:00.000 urn:newsml:reuters.com:20180628:nL1N1TU0PC:3
sourceCode 2018-06-28 23:00:00.000 NS:RTRS 2018-06-28 21:23:26.526 NS:ZACKSC 2018-06-28 19:48:32.627 NS:CNBC 2018-06-28 17:33:10.306 NS:WALLST 2018-06-28 17:33:07.033 NS:WALLST 2018-06-28 17:31:44.960 NS:WALLST 2018-06-28 17:00:00.000 NS:RTRS
In [32]: story_html = ek.get_news_story(news.iloc[1, 2])
In [33]: from bs4 import BeautifulSoup
In [34]: story = BeautifulSoup(story_html, 'html5lib').get_text()
In [35]: print(story[83:958]) Jun 28, 2018 For years, investors and Apple AAPL have been beholden to the iPhone, which is hardly a negative since its flagship product is largely responsible for turning Apple into one of the world's biggest companies. But Apple has slowly pushed into new growth areas, with streaming television its newest frontier. So let's take a look at what Apple has planned as it readies itself to compete against the likes of Netflix NFLX and Amazon AMZN in the battle for the ne-
w age of entertainment.Apple's second-quarter revenues jumped by 16% to reach $61.14 billion, with iPhone revenues up 14%. However, iPhone unit sales climbed only 3% and iPhone revenues accounted for over 62% of total Q2 sales. Apple knows this is not a sustainable business model, because rare is the consumer product that can remain in vogue for decades. This is why Apple has made a big push into news,
Retrieves metadata for a small selection of news articles.
Retrieves the full text of a single article, delivered as an HTML document.
Imports the BeautifulSoup HTML parsing package and …
… extracts the contents as plain text (a str object).
Prints the beginning of the news article.
Data-Driven and AI-First Finance | 27

Although just scratching the surface, these two examples illustrate that structured and unstructured historical financial data is available in a standardized, efficient way via Python wrapper packages and data subscription services. In many circumstances, similar data sets can be accessed for free even by individuals who make use of, for instance, trading platforms such as the one by FXCM Group, LLC, that is introduced in Chapter 14 and also used in Chapter 16. Once the data is on the Python level-
— independent from the original source—the full power of the Python data analytics ecosystem can be harnessed.
Data-Driven Finance
Data is what drives finance these days. Even some of the largest and often most successful hedge funds call themselves “datadriven” instead of “finance-driven.” More and more offerings are making huge amounts of data available to large and small institu‐ tions and individuals. Python is generally the programming lan‐ guage of choice to interact with the APIs and to process and analyze the data.
AI-First Finance
With the availability of large amounts of financial data via programmatic APIs, it has become much easier and more fruitful to apply methods from artificial intelligence (AI) in general and from machine and deep learning (ML, DL) in particular to finan‐ cial problems, such as in algorithmic trading. Python can be considered a first-class citizen in the AI world as well. It is often the programming language of choice for AI researchers and practitioners alike. In that sense, the financial domain be-
nefits from developments in diverse fields, sometimes not even remotely connected to finance. As one example consider the TensorFlow open source package for deep learning, which is developed and maintained by Goo‐ gle Inc. and used by (among others) its parent company Alphabet Inc. in its efforts to build, produce, and sell self-driving cars. Although for sure not even remotely related to the problem of automatically, algo‐ rithmically trading stock, TensorFlow can, for example, be used to predict-
 move‐ ments in financial markets. Chapter 15 provides a number of examples in this regard. One of the most widely used Python packages for ML is scikit-learn. The code that follows shows how, in a highly simplified manner, classification algorithms from ML can be used to predict the direction of future market price movements and to base an algorithmic trading strategy on those predictions. All the details are explained in Chapter 15, so the example is therefore rather concise. First, the data imp-
ort and the preparation of the features data (directional lagged log return data):
28 | Chapter 1: Why Python for Finance

In [36]: import numpy as np import pandas as pd
In [37]: data = pd.read_csv('../../source/tr_eikon_eod_data.csv', index_col=0, parse_dates=True)
data = pd.DataFrame(data['AAPL.O']) data['Returns'] = np.log(data / data.shift()) data.dropna(inplace=True)
In [38]: lags = 6
In [39]: cols = [] for lag in range(1, lags + 1): col = 'lag_{}'.format(lag) data[col] = np.sign(data['Returns'].shift(lag)) cols.append(col) data.dropna(inplace=True)
Selects historical end-of-day data for the Apple Inc. stock (AAPL.O).
Calculates the log returns over the complete history.
Generates DataFrame columns with directional lagged log return data (+1 or -1). Next, the instantiation of a model object for a support vector machine (SVM) algo‐ rithm, the fitting of the model, and the prediction step. Figure 1-2 shows that the prediction-based trading strategy, going long or short on Apple Inc. stock depending on the prediction, outperforms the passive benchmark investment in the stock itself:
In [40]: from sklearn.svm import SVC
In [41]: model = SVC(gamma='auto')
In [42]: model.fit(data[cols], np.sign(data['Returns'])) Out[42]: SVC(C=1.0, cache_size=200, class_weight=None, coef0=0.0,
decision_function_shape='ovr', degree=3, gamma='auto', kernel='rbf', max_iter=-1, probability=False, random_state=None, shrinking=True, tol=0.001, verbose=False)
In [43]: data['Prediction'] = model.predict(data[cols])
In [44]: data['Strategy'] = data['Prediction'] * data['Returns']
In [45]: data[['Returns', 'Strategy']].cumsum().apply(np.exp).plot( figsize=(10, 6));
Instantiates the model object.
Fits the model, given the features and the label data (all directional).
Data-Driven and AI-First Finance | 29

Uses the fitted model to create the predictions (in-sample), which are the posi‐ tions of the trading strategy at the same time (long or short). Calculates the log returns of the trading strategy given the prediction values and the benchmark log returns. Plots the performance of the ML-based trading strategy compared to the perfor‐ mance of the passive benchmark investment.
Figure 1-2. ML-based algorithmic trading strategy vs. passive benchmark investment in Apple Inc. stock The simplified approach taken here does not account for transaction costs, nor does it separate the data set into training and testing subsets. However, it shows how straightforward the application of ML algorithms to financial data is, at least in a technical sense; practically, a number of important topics need to be considered (see López de Prado (2018)).
AI-First Finance
AI will reshape finance in a way that other fields have been resha‐ ped already. The availability of large amounts of financial data via programmatic APIs functions as an enabler in this context. Basic methods from AI, ML, and DL are introduced in Chapter 13 and applied to algorithmic trading in Chapters 15 and 16. A proper treatment of AI-first finance, however, would require a book fully dedicated to the topic. 30 | Chapter 1: Why Python for Finance

AI in finance, as a natural extension of data-driven finance, is for sure a fascinating and exciting field, both from a research and a practitioner’s point of view. Although this book uses several methods from AI, ML, and DL in different contexts, overall the focus lies—in line with the subtitle of the book—on the fundamental Python techni‐ ques and approaches needed for data-driven finance. These are, however, equally important for AI-first finance.
Conclusion
Python as a language—and even more so as an ecosystem—is an ideal technological framework for the financial industry as whole and the individual working in finance alike. It is characterized by a number of benefits, like an elegant syntax, efficient development approaches, and usability for prototyping as well as production. With its huge amount of available packages, libraries, and tools, Python seems to have answers to most questions raised by recent developments in the financial industry in ter-
ms of analytics, data volumes and frequency, compliance and regulation, as well as technology itself. It has the potential to provide a single, powerful, consistent frame‐ work with which to streamline end-to-end development and production efforts even across larger financial institutions. In addition, Python has become the programming language of choice for artificial intelligence in general and machine and deep learning in particular. Python is there‐ fore the right language for data-driven fina-
nce as well as for AI-first finance, two recent trends that are about to reshape finance and the financial industry in funda‐ mental ways.
Further Resources
The following books cover several aspects only touched upon in this chapter in more detail (e.g., Python tools, derivatives analytics, machine learning in general, and machine learning in finance):
• Hilpisch, Yves (2015). Derivatives Analytics with Python. Chichester, England: Wiley Finance.
• López de Prado, Marcos (2018). Advances in Financial Machine Learning. Hoboken, NJ: John Wiley & Sons.
• VanderPlas, Jake (2016). Python Data Science Handbook. Sebastopol, CA: O’Reilly.
When it comes to algorithmic trading, the author’s company offers a range of online training programs that focus on Python and other tools and techniques required in this rapidly growing field:
Conclusion | 31

• http://pyalgo.tpq.io • http://certificate.tpq.io Sources referenced in this chapter are, among others, the following: • Ding, Cubillas (2010). “Optimizing the OTC Pricing and Valuation Infrastruc‐
ture.” Celent. • Lewis, Michael (2014). Flash Boys. New York: W. W. Norton & Company. • Patterson, Scott (2010). The Quants. New York: Crown Business.
32 | Chapter 1: Why Python for Finance

CHAPTER 2
Python Infrastructure
In building a house, there is the problem of the selection of wood. It is essential that the carpenter’s aim be to carry equipment that will cut well and, when he has time, to sharpen that equipment.
—Miyamoto Musashi (The Book of Five Rings)
For someone new to Python, Python deployment might seem all but straightforward. The same holds true for the wealth of libraries and packages that can be installed optionally. First of all, there is not only one Python. Python comes in many different flavors, like CPython, Jython, IronPython, and PyPy. Then there is the divide between Python 2.7 and the 3.x world.1 Even after you’ve decided on a version, deployment is difficult for a number of addi‐ tional reasons:
• The interpreter (a standard CPython installation) only comes with the so-called standard library (e.g., covering typical mathematical functions)
• Optional Python packages need to be installed separately—and there are hun‐ dreds of them
• Compiling/building such nonstandard packages on your own can be tricky due to dependencies and operating system–specific requirements
• Taking care of these dependencies and of version consistency over time (i.e., maintenance) is often tedious and time consuming
1 This edition is based on version 3.7 (the latest major release at the time of writing) of CPython, the original and most popular version of the Python programming language. 33

• Updates and upgrades for certain packages might necessitate recompiling a mul‐ titude of other packages
• Changing or replacing one package might cause trouble in (many) other places Fortunately, there are tools and strategies available that can help. This chapter covers the following types of technologies that help with Python deployment: Package managers
Package managers like pip and conda help with the installing, updating, and removing of Python packages; they also help with version consistency of differ‐ ent packages. Virtual environment managers A virtual environment manager like virtualenv or conda allows you to manage multiple Python installations in parallel (e.g., to have both a Python 2.7 and 3.7 install on a single machine or to test the most recent development version of a fancy Python package without risk).2 Containers Docker container-
s represent complete filesystems containing all the pieces of a system needed to run certain software, like code, runtime, or system tools. For example, you can run an Ubuntu 18.04 operating system with a Python 3.7 install and the respective Python code in a Docker container hosted on a machine run‐ ning macOS or Windows 10. Cloud instances Deploying Python code for financial applications generally requires high availa‐ bility, security, and also performance; these requirements can typically only-
 be met by the use of professional compute and storage infrastructure that is nowa‐ days available at attractive conditions in the form of fairly small to really large and powerful cloud instances. One benefit of a cloud instance (i.e., a virtual server) compared to a dedicated server rented longer-term is that users generally get charged only for the hours of actual usage; another advantage is that such cloud instances are available literally in a minute or two if needed, which helps with agile d-
evelopment and also with scalability. The structure of this chapter is as follows: “conda as a Package Manager” on page 35 This section introduces conda as a package manager for Python.
2 A recent project called pipenv combines the capabilities of the package manager pip with those of the virtual environment manager virtualenv.
34 | Chapter 2: Python Infrastructure

“conda as a Virtual Environment Manager” on page 41 This section focuses on conda’s capabilities as a virtual environment manager.
“Using Docker Containers” on page 45 This section gives a brief overview of Docker as a containerization technology and focuses on the building of an Ubuntu-based container with a Python 3.7 installation.
“Using Cloud Instances” on page 50 The section shows how to deploy Python and Jupyter Notebook—a powerful, browser-based tool suite for Python development—in the cloud.
The goal of this chapter is to set up a proper Python installation with the most impor‐ tant tools as well as numerical, data analysis, and visualization packages on a profes‐ sional infrastructure. This combination then serves as the backbone for implementing and deploying the Python code in later chapters, be it interactive financial analytics code or code in the form of scripts and modules.
conda as a Package Manager
Although conda can be installed standalone, an efficient way of doing it is via Mini‐ conda, a minimal Python distribution including conda as a package and virtual envi‐ ronment manager.
Installing Miniconda
Miniconda is available for Windows, macOS, and Linux. You can download the dif‐ ferent versions from the Miniconda webpage. In what follows, the Python 3.7 64-bit version is assumed. The main example in this section is a session in an Ubuntu-based Docker container which downloads the Linux 64-bit installer via wget and then installs Miniconda. The code as shown should work—perhaps with minor modifica‐ tions—on any other Linux- or macOS-based machine as well:
$ docker run -ti -h py4fi -p 11111:11111 ubuntu:latest /bin/bash
root@py4fi:/# apt-get update; apt-get upgrade -y ... root@py4fi:/# apt-get install -y bzip2 gcc wget ... root@py4fi:/# cd root root@py4fi:~# wget \ > https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh \ > -O miniconda.sh ... HTTP request sent, awaiting response... 200 OK Length: 62574861 (60M) [application/x-sh] Saving to: 'miniconda.sh'
conda as a Package Manager | 35

miniconda.sh

100%[====================>] 59.68M 5.97MB/s in 11s

2018-09-15 09:44:28 (5.42 MB/s) - 'miniconda.sh' saved [62574861/62574861]

root@py4fi:~# bash miniconda.sh

Welcome to Miniconda3 4.5.11

In order to continue the installation process, please review the license agreement. Please, press ENTER to continue >>>
Simply pressing the Enter key starts the installation process. After reviewing the license agreement, approve the terms by answering yes:
... Do you accept the license terms? [yes|no] [no] >>> yes

Miniconda3 will now be installed into this location: /root/miniconda3

- Press ENTER to confirm the location - Press CTRL-C to abort the installation - Or specify a different location below

[/root/miniconda3] >>> PREFIX=/root/miniconda3 installing: python-3.7. ... ... installing: requests-2.19.1-py37_0 ... installing: conda-4.5.11-py37_0 ... installation finished.
After you have agreed to the licensing terms and have confirmed the install location you should allow Miniconda to prepend the new Miniconda install location to the PATH environment variable by answering yes once again:
Do you wish the installer to prepend the Miniconda3 install location to PATH in your /root/.bashrc ? [yes|no] [no] >>> yes

Appending source /root/miniconda3/bin/activate to /root/.bashrc A backup will be made to: /root/.bashrc-miniconda3.bak

For this change to become active, you have to open a new terminal.
Thank you for installing Miniconda3! root@py4fi:~#

36 | Chapter 2: Python Infrastructure

After that, you might want to upgrade conda as well as Python:3
root@py4fi:~# export PATH="/root/miniconda3/bin/:$PATH" root@py4fi:~# conda update -y conda python ... root@py4fi:~# echo ". /root/miniconda3/etc/profile.d/conda.sh" >> ~/.bashrc root@py4fi:~# bash
After this rather simple installation procedure, you’ll have a basic Python install as well as conda available. The basic Python install comes with some nice batteries included, like the SQLite3 database engine. You might try out whether you can start Python in a new shell instance after appending the relevant path to the respective environment variable (as done previously):
root@py4fi:~# python Python 3.7.0 (default, Jun 28 2018, 13:15:42) [GCC 7.2.0] :: Anaconda, Inc. on linux Type "help", "copyright", "credits" or "license" for more information. >>> print('Hello Python for Finance World.') Hello Python for Finance World. >>> exit() root@py4fi:~#
Basic Operations with conda
conda can be used to efficiently handle, among other things, the installing, updating, and removing of Python packages. The following list provides an overview of the major functions:
Installing Python x.x conda install python=x.x
Updating Python conda update python
Installing a package conda install $PACKAGE_NAME
Updating a package conda update $PACKAGE_NAME
Removing a package conda remove $PACKAGE_NAME
Updating conda itself conda update conda
3 The Miniconda installer is in general not as regularly updated as conda and Python themselves.
conda as a Package Manager | 37

Searching for packages conda search $SEARCH_TERM
Listing installed packages conda list
Given these capabilities, installing, for example, NumPy—one of the most important libraries of the so-called scientific stack—requires a single command only. When the installation takes place on a machine with an Intel processor, the procedure automat‐ ically installs the Intel Math Kernel Library (mkl), which speeds up numerical opera‐ tions not only for NumPy but also for a few other scientific Python packages:4
root@py4fi:~# conda install numpy Solving environment: done
## Package Plan ##
environment location: /root/miniconda3
added / updated specs: - numpy

The following packages will be downloaded:

package

|

build

---------------------------|-----------------

mkl-2019.0

|

117

204.4 MB

intel-openmp-2019.0

|

117

721 KB

mkl_random-1.0.1

| py37h4414c95_1

372 KB

libgfortran-ng-7.3.0

|

hdf63c60_0

1.3 MB

numpy-1.15.1

| py37h1d66e8a_0

37 KB

numpy-base-1.15.1

| py37h81de0dd_0

4.2 MB

blas-1.0

|

mkl

6 KB

mkl_fft-1.0.4

| py37h4414c95_1

149 KB

------------------------------------------------------------

Total:

211.1 MB

The following NEW packages will be INSTALLED:

blas:

1.0-mkl

intel-openmp: 2019.0-117

libgfortran-ng: 7.3.0-hdf63c60_0

mkl:

2019.0-117

mkl_fft:

1.0.4-py37h4414c95_1

mkl_random: 1.0.1-py37h4414c95_1

4 Installing the metapackage nomkl, e.g. with conda install numpy nomkl, avoids the automatic installation and usage of mkl and related other packages.
38 | Chapter 2: Python Infrastructure

numpy: numpy-base:

1.15.1-py37h1d66e8a_0 1.15.1-py37h81de0dd_0

Proceed ([y]/n)? y

Downloading and Extracting Packages

mkl-2019.0

| 204.4 MB | ####################################### | 100%

...

numpy-1.15.1

| 37 KB | ####################################### | 100%

numpy-base-1.15.1 | 4.2 MB | ####################################### | 100%

...

root@py4fi:~#

Multiple packages can also be installed at once. The -y flag indicates that all (poten‐ tial) questions shall be answered with yes:

root@py4fi:/# conda install -y ipython matplotlib pandas pytables scikit-learn \

> scipy

...

pytables-3.4.4

| 1.5 MB | ####################################### | 100%

kiwisolver-1.0.1 | 83 KB | ####################################### | 100%

icu-58.2

| 22.5 MB | ####################################### | 100%

Preparing transaction: done

Verifying transaction: done

Executing transaction: done

root@py4fi:~#

After the resulting installation procedure, some of the most important libraries for financial analytics are available in addition to the standard ones. These include:

IPython An improved interactive Python shell

matplotlib The standard plotting library in Python

NumPy For efficient handling of numerical arrays

pandas For management of tabular data, like financial time series data

PyTables A Python wrapper for the HDF5 library

scikit-learn A package for machine learning and related tasks

SciPy A collection of scientific classes and functions (installed as a dependency)

conda as a Package Manager | 39

This provides a basic tool set for data analysis in general and financial analytics in particular. The next example uses IPython and draws a set of pseudo-random num‐ bers with NumPy:
root@py4fi:~# ipython Python 3.7.0 (default, Jun 28 2018, 13:15:42) Type 'copyright', 'credits' or 'license' for more information IPython 6.5.0 -- An enhanced Interactive Python. Type '?' for help.

In [1]: import numpy as np

In [2]: np.random.seed(100)

In [3]: np.random.standard_normal((5, 4)) Out[3]: array([[-1.74976547, 0.3426804 , 1.1530358 , -0.25243604],
[ 0.98132079, 0.51421884, 0.22117967, -1.07004333], [-0.18949583, 0.25500144, -0.45802699, 0.43516349], [-0.58359505, 0.81684707, 0.67272081, -0.10441114], [-0.53128038, 1.02973269, -0.43813562, -1.11831825]])

In [4]: exit root@py4fi:~#
Executing conda list shows which packages are installed:

root@py4fi:~# conda list

# packages in environment at /root/miniconda3:

#

# Name

Version

Build

asn1crypto

0.24.0

py37_0

backcall

0.1.0

py37_0

blas

1.0

mkl

blosc

1.14.4

hdbcaa40_0

bzip2

1.0.6

h14c3975_5

...

python

3.7.0

hc3d631a_0

...

wheel

0.31.1

py37_0

xz

5.2.4

h14c3975_4

yaml

0.1.7

had09818_2

zlib

1.2.11

ha838bed_2

root@py4fi:~#

Channel

If a package is not needed anymore, it is efficiently removed with conda remove:

root@py4fi:~# conda remove scikit-learn Solving environment: done

## Package Plan ##

environment location: /root/miniconda3

40 | Chapter 2: Python Infrastructure

removed specs: - scikit-learn
The following packages will be REMOVED:
scikit-learn: 0.19.1-py37hedc7406_0
Proceed ([y]/n)? y
Preparing transaction: done Verifying transaction: done Executing transaction: done root@py4fi:~#
conda as a package manager is already quite useful. However, its full power only becomes evident when adding virtual environment management to the mix.
Easy Package Management
Using conda as a package manager makes installing, updating, and removing Python packages a pleasant experience. There is no need to take care of building and compiling packages on your own— which can be tricky sometimes, given the list of dependencies a package specifies and the specifics to be considered on different operating systems.
conda as a Virtual Environment Manager
Depending on the version of the installer you choose, Miniconda provides a default Python 2.7 or 3.7 installation. The virtual environment management capabilities of conda allow one, for example, to add to a Python 3.7 default installation a completely separate installation of Python 2.7.x. To this end, conda offers the following function‐ ality: Creating a virtual environment
conda create --name $ENVIRONMENT_NAME Activating an environment
conda activate $ENVIRONMENT_NAME Deactivating an environment
conda deactivate $ENVIRONMENT_NAME Removing an environment
conda env remove --name $ENVIRONMENT_NAME
conda as a Virtual Environment Manager | 41

Exporting to an environment file conda env export > $FILE_NAME
Creating an environment from a file conda env create -f $FILE_NAME
Listing all environments conda info --envs
As a simple illustration, the example code that follows creates an environment called py27, installs IPython, and executes a line of Python 2.7.x code:
root@py4fi:~# conda create --name py27 python=2.7 Solving environment: done
## Package Plan ##
environment location: /root/miniconda3/envs/py27
added / updated specs: - python=2.7

The following NEW packages will be INSTALLED:

ca-certificates: 2018.03.07-0

...

python:

2.7.15-h1571d57_0

...

zlib:

1.2.11-ha838bed_2

Proceed ([y]/n)? y

Preparing transaction: done Verifying transaction: done Executing transaction: done # # To activate this environment, use: # > conda activate py27 # # To deactivate an active environment, use: # > conda deactivate #

root@py4fi:~#
Notice how the prompt changes to include (py27) after the activation of the environment:
root@py4fi:~# conda activate py27 (py27) root@py4fi:~# conda install ipython Solving environment: done

42 | Chapter 2: Python Infrastructure

... Executing transaction: done (py27) root@py4fi:~#
Finally, this allows you to use IPython with Python 2.7 syntax:
(py27) root@py4fi:~# ipython Python 2.7.15 |Anaconda, Inc.| (default, May 1 2018, 23:32:55) Type "copyright", "credits" or "license" for more information.

IPython 5.8.0 -- An enhanced Interactive Python.

?

-> Introduction and overview of IPython's features.

%quickref -> Quick reference.

help

-> Python's own help system.

object? -> Details about 'object', use 'object??' for extra details.

In [1]: print "Hello Python for Finance World!" Hello Python for Finance World!

In [2]: exit (py27) root@py4fi:~#
As this example demonstrates, using conda as a virtual environment manager allows you to install different Python versions alongside each other. It also allows you to install different versions of certain packages. The default Python install is not influ‐ enced by such a procedure, nor are other environments which might exist on the same machine. All available environments can be shown via conda env list:

(py27) root@py4fi:~# conda env list

# conda environments:

#

base

/root/miniconda3

py27

* /root/miniconda3/envs/py27

(py27) root@py4fi:~#
Sometimes it is necessary to share environment information with others or to use environment information on multiple machines. To this end, one can export the installed packages list to a file with conda env export. This only works properly by default if the machines use the same operating system, since the build versions are specified in the resulting YAML file, but they can be deleted to only specify the pack‐ age version:
(py27) root@py4fi:~# conda env export --no-builds > py27env.yml (py27) root@py4fi:~# cat py27env.yml name: py27 channels:
- defaults dependencies:
- backports=1.0 ...
- python=2.7.15

conda as a Virtual Environment Manager | 43

... - zlib=1.2.11
prefix: /root/miniconda3/envs/py27
(py27) root@py4fi:~#
Often a virtual environment, which is technically not that much more than a certain (sub)folder structure, is created to do some quick tests.5 In such a case, the environ‐ ment is easily removed after deactivation via conda env remove:
(py27) root@py4fi:/# conda deactivate root@py4fi:~# conda env remove -y --name py27
Remove all packages in environment /root/miniconda3/envs/py27:

## Package Plan ## environment location: /root/miniconda3/envs/py27

The following packages will be REMOVED:

backports: ...
zlib:

1.0-py27_1 1.2.11-ha838bed_2

root@py4fi:~#
This concludes the overview of conda as a virtual environment manager.

Easy Environment Management
conda does not only help with managing packages; it is also a vir‐ tual environment manager for Python. It simplifies the creation of different Python environments, allowing you to have multiple ver‐ sions of Python and optional packages available on the same machine without them influencing each other in any way. conda also allows you to export environment information so you can easily replicate it on multiple machines or share it with others.

5 In the official documentation you find the following explanation: “Python ‘Virtual Environments’ allow Python packages to be installed in an isolated location for a particular application, rather than being installed globally.”
44 | Chapter 2: Python Infrastructure

Using Docker Containers
Docker containers have taken the IT world by storm. Although the technology is still relatively young, it has established itself as one of the benchmarks for the efficient development and deployment of almost any kind of software application. For the purposes of this book it suffices to think of a Docker container as a separate (“containerized”) filesystem that includes an operating system (e.g., Ubuntu Server 18.04), a (Python) runtime, additional system and development tools, as well as fur‐ the-
r (Python) libraries and packages as needed. Such a Docker container might run on a local machine with Windows 10 or on a cloud instance with a Linux operating system, for instance. This section does not go into all the exciting details of Docker containers. It is rather a concise illustration of what the Docker technology can do in the context of Python deployment.6
Docker Images and Containers
However, before moving on to the illustration, two fundamental concepts need to be distinguished when talking about Docker. The first is a Docker image, which can be compared to a Python class. The second is a Docker container, which can be com‐ pared to an instance of the respective Python class.7 On a more technical level, you find the following definition for an image in the Docker glossary:
Docker images are the basis of containers. An Image is an ordered collection of root filesystem changes and the corresponding execution parameters for use within a con‐ tainer runtime. An image typically contains a union of layered filesystems stacked on top of each other. An image does not have state and it never changes.
Similarly, you find the following definition for a container in the Docker glossary, which makes the analogy to Python classes and instances of such classes transparent:
A container is a runtime instance of a Docker image. A Docker container consists of: a Docker image, an execution environment, and a standard set of instructions.
Depending on the operating system, the installation of Docker is somewhat different. That is why this section does not go into the details. More information and further links are found on the About Docker CE page.
6 See Matthias and Kane (2015) for a comprehensive introduction to the Docker technology. 7 If the terms are not yet clear, they will become so in Chapter 6.
Using Docker Containers | 45

Building an Ubuntu and Python Docker Image
This section illustrates the building of a Docker image based on the latest version of Ubuntu, which includes Miniconda as well as a few important Python packages. In addition, it does some Linux housekeeping by updating the Linux packages index, upgrading packages if required, and installing certain additional system tools. To this end, two scripts are needed. One is a bash script that does all the work on the Linux level.8 The other is a so-called Dockerfile, which controls the building procedur-
e for the image itself. The bash script in Example 2-1 that does the installing consists of three major parts. The first part handles the Linux housekeeping. The second part installs Miniconda, while the third part installs optional Python packages. There are also more detailed comments inline.
Example 2-1. Script installing Python and optional packages
#!/bin/bash # # Script to Install # Linux System Tools and # Basic Python Components # # Python for Finance, 2nd ed. # (c) Dr. Yves J. Hilpisch # # GENERAL LINUX apt-get update # updates the package index cache apt-get upgrade -y # updates packages # installs system tools apt-get install -y bzip2 gcc git htop screen vim wget apt-get upgrade -y bash # upgrades bash if necessary apt-get clean # cleans up the package index cache
# INSTALL MINICONDA # downloads Miniconda wget https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh -O \
Miniconda.sh bash Miniconda.sh -b # installs it rm -rf Miniconda.sh # removes the installer export PATH="/root/miniconda3/bin:$PATH" # prepends the new path
# INSTALL PYTHON LIBRARIES conda update -y conda python # updates conda & Python (if required)
8 Consult Robbins (2016) for a concise introduction to and quick overview of bash scripting. Also see https:// www.gnu.org/software/bash.
46 | Chapter 2: Python Infrastructure

conda install -y pandas # installs pandas conda install -y ipython # installs IPython shell
The Dockerfile in Example 2-2 uses the bash script in Example 2-1 to build a new Docker image. It also has its major parts commented inline.
Example 2-2. Dockerfile to build the image
# # Building a Docker Image with # the Latest Ubuntu Version and # Basic Python Install # # Python for Finance, 2nd ed. # (c) Dr. Yves J. Hilpisch #
# latest Ubuntu version FROM ubuntu:latest
# information about maintainer MAINTAINER yves
# add the bash script ADD install.sh /
# change rights for the script RUN chmod u+x /install.sh
# run the bash script RUN /install.sh
# prepend the new path ENV PATH /root/miniconda3/bin:$PATH
# execute IPython when container is run CMD ["ipython"]
If these two files are in a single folder and Docker is installed, then the building of the new Docker image is straightforward. Here, the tag py4fi:basic is used for the image. This tag is needed to reference the image, for example when running a con‐ tainer based on it:
~/Docker$ docker build -t py4fi:basic .
...
Removing intermediate container 5fec0c9b2239 ---> accee128d9e9 Step 6/7 : ENV PATH /root/miniconda3/bin:$PATH ---> Running in a2bb97686255
Using Docker Containers | 47

Removing intermediate container a2bb97686255 ---> 73b00c215351 Step 7/7 : CMD ["ipython"] ---> Running in ec7acd90c991 Removing intermediate container ec7acd90c991 ---> 6c36b9117cd2 Successfully built 6c36b9117cd2 Successfully tagged py4fi:basic ~/Docker$
Existing Docker images can be listed via docker images. The new image should be at the top of the list:

(py4fi) ~/Docker$ docker images

REPOSITORY

TAG

py4fi

basic

ubuntu

latest

(py4fi) ~/Docker$

IMAGE ID 6c36b9117cd2 cd6d8154f1e1

CREATED About a minute ago 9 days ago

SIZE 1.79GB 84.1MB

Successfully building the py4fi:basic allows you to run the respective Docker con‐ tainer with docker run. The parameter combination -ti is needed for interactive processes running within a Docker container, like a shell process (see the docker run reference page):

~/Docker$ docker run -ti py4fi:basic Python 3.7.0 (default, Jun 28 2018, 13:15:42) Type 'copyright', 'credits' or 'license' for more information IPython 6.5.0 -- An enhanced Interactive Python. Type '?' for help.

In [1]: import numpy as np

In [2]: a = np.random.standard_normal((5, 3))

In [3]: import pandas as pd

In [4]: df = pd.DataFrame(a, columns=['a', 'b', 'c'])

In [5]: df

Out[5]:

a

b

0 -1.412661 -0.881592

1 -1.294977 0.546676

2 1.156361 1.979057

3 0.546736 -0.479821

4 -1.972943 -0.193964

c 1.704623 1.027046 0.989772 0.693907 0.769500

In [6]:
Exiting IPython will exit the container as well since it is the only application running within the container. However, you can detach from a container by typing Ctrl-P +Ctrl-Q.

48 | Chapter 2: Python Infrastructure

The docker ps command will still show the running container (and any other cur‐ rently running containers) after you’ve detached from it:

~/Docker$ docker ps CONTAINER ID IMAGE e815df8f0f4d py4fi:basic 4518917de7dc ubuntu:latest d081b5c7add0 ubuntu:latest ~/Docker$

COMMAND "ipython" "/bin/bash" "/bin/bash"

CREATED About a minute ago About an hour ago 21 hours ago

STATUS Up About a minute Up About an hour Up 21 hours

Attaching to a Docker container is accomplished with the command docker attach $CONTAINER_ID (notice that a few letters of the $CONTAINER_ID are enough):

~/Docker$ docker attach e815d

In [6]: df.info() <class 'pandas.core.frame.DataFrame'> RangeIndex: 5 entries, 0 to 4 Data columns (total 3 columns): a 5 non-null float64 b 5 non-null float64 c 5 non-null float64 dtypes: float64(3) memory usage: 200.0 bytes

In [7]: exit ~/Docker$
The exit command terminates IPython and stops the Docker container. It can be removed with docker rm:
~/Docker$ docker rm e815d e815d ~/Docker$
Similarly, the Docker image py4fi:basic can be removed via docker rmi if not needed any longer. While containers are relatively lightweight, single images might consume quite a bit of storage. In the case of the py4fi:basic image, the size is close to 2 GB. That is why you might want to regularly clean up the list of Docker images:
~/Docker$ docker rmi 6c36b9117cd2
Of course, there is much more to say about Docker containers and their benefits in certain application scenarios. But for the purposes of this book, it’s enough to know that they provide a modern approach to deploy Python, to do Python development in a completely separate (containerized) environment, and to ship codes for algorithmic trading.

Using Docker Containers | 49

Benefits of Docker Containers
If you are not yet using Docker containers, you should consider doing so. They provide a number of benefits when it comes to Python deployment and development efforts, not only when work‐ ing locally but in particular when working with remote cloud instances and servers deploying code for algorithmic trading.
Using Cloud Instances
This section shows how to set up a full-fledged Python infrastructure on a DigitalOcean cloud instance. There are many other cloud providers out there, among them the leading provider, Amazon Web Services (AWS). However, DigitalOcean is well known for its simplicity and also its relatively low rates for its smaller cloud instances, called Droplets. The smallest Droplet, which is generally sufficient for exploration and development purposes, only costs 5 USD per month or 0.007 USD per hour. Usage i-
s charged by the hour so that one can easily spin up a Droplet for 2 hours, say, destroy it afterward, and get charged just 0.014 USD.9 The goal of this section is to set up a Droplet on DigitalOcean that has a Python 3.7 installation plus typically needed packages (e.g., NumPy, pandas) in combination with a password-protected and Secure Sockets Layer (SSL)–encrypted Jupyter Notebook server installation. This server installation will provide three major tools that can be used via a regular browser-
: Jupyter Notebook
A popular interactive development environment that features a selection of dif‐ ferent language kernels (e.g., for Python, R, and Julia). Terminal A system shell implementation accessible via the browser that allows for all typi‐ cal system administration tasks and for usage of helpful tools like Vim and git. Editor A browser-based file editor with syntax highlighting for many different program‐ ming languages and file types as well as typical text/code editing capabilities. Having Jupyter Noteboo-
k installed on a Droplet allows you to do Python develop‐ ment and deployment via the browser, circumventing the need to log in to the cloud instance via Secure Shell (SSH) access.
9 New users who sign up via this referral link get a starting credit of 10 USD for DigitalOcean.
50 | Chapter 2: Python Infrastructure

To accomplish the goal of this section, a number of files are needed: Server setup script
This script orchestrates all the steps necessary, like, for instance, copying other files to the Droplet and running them on the Droplet. Python and Jupyter installation script This installs Python, additional packages, and Jupyter Notebook, and starts the Jupyter Notebook server. Jupyter Notebook configuration file This file is for the configuration of the Jupyter Notebook server, e.g., with respect to password protection. RSA public and private key files These two files are needed for the SSL en-
cryption of the Jupyter Notebook server. The following subsections work backward through this list of files.
RSA Public and Private Keys
In order to create a secure connection to the Jupyter Notebook server via an arbitrary browser, an SSL certificate consisting of RSA public and private keys is needed. In general, one would expect such a certificate to come from a so-called Certificate Authority (CA). For the purposes of this book, however, a self-generated certificate is “good enough.”10 A popular tool to generate RSA key pairs is OpenSSL. The brief interactive session that follows shows how to generate a certificate appropriate -
for use with a Jupyter Notebook server (insert your own values for the country name and other fields after the prompts):
~/cloud$ openssl req -x509 -nodes -days 365 -newkey \ > rsa:1024 -out cert.pem -keyout cert.key Generating a 1024 bit RSA private key ..++++++ .......++++++ writing new private key to 'cert.key'
You are about to be asked to enter information that will be incorporated into your certificate request. What you are about to enter is what is called a Distinguished Name or a DN. There are quite a few fields, but you can leave some blank and others will have a default value. If you enter ., the field will be left blank.
Country Name (2 letter code) [AU]:DE State or Province Name (full name) [Some-State]:Saarland Locality Name (eg, city) []:Voelklingen
10 With a self-generated certificate you might need to add a security exception when prompted by the browser.
Using Cloud Instances | 51

Organization Name (eg, company) [Internet Widgits Pty Ltd]:TPQ GmbH Organizational Unit Name (eg, section) []:Python for Finance Common Name (e.g. server FQDN or YOUR name) []:Jupyter Email Address []:team@tpq.io ~/cloud$ ls cert.key cert.pem ~/cloud$
The two files cert.key and cert.pem need to be copied to the Droplet and need to be referenced by the Jupyter Notebook configuration file. This file is presented next.
Jupyter Notebook Configuration File
A public Jupyter Notebook server can be deployed securely as explained in the docu‐ mentation. Among other features, Jupyter Notebook can be password protected. To this end, there is a password hash code–generating function called passwd() available in the notebook.auth subpackage. The following code generates a password hash code with jupyter being the password itself:
~/cloud$ ipython Python 3.7.0 (default, Jun 28 2018, 13:15:42) Type 'copyright', 'credits' or 'license' for more information IPython 6.5.0 -- An enhanced Interactive Python. Type '?' for help.
In [1]: from notebook.auth import passwd
In [2]: passwd('jupyter') Out[2]: 'sha1:d4d34232ac3a:55ea0ffd78cc3299e3e5e6ecc0d36be0935d424b'
In [3]: exit
This hash code needs to be placed in the Jupyter Notebook configuration file as pre‐ sented in Example 2-3. The configuration file assumes that the RSA key files have been copied on the Droplet to the /root/.jupyter/ folder.
Example 2-3. Jupyter Notebook configuration file
# # Jupyter Notebook Configuration File # # Python for Finance, 2nd ed. # (c) Dr. Yves J. Hilpisch # # SSL ENCRYPTION # replace the following filenames (and files used) with your choice/files c.NotebookApp.certfile = u'/root/.jupyter/cert.pem' c.NotebookApp.keyfile = u'/root/.jupyter/cert.key'
# IP ADDRESS AND PORT # set ip to '*' to bind on all IP addresses of the cloud instance
52 | Chapter 2: Python Infrastructure

c.NotebookApp.ip = '*' # it is a good idea to set a known, fixed default port for server access c.NotebookApp.port = 8888
# PASSWORD PROTECTION # here: 'jupyter' as password # replace the hash code with the one for your strong password c.NotebookApp.password = 'sha1:d4d34232ac3a:55ea0ffd78cc3299e3e5e6ecc0d36be0935d424b'
# NO BROWSER OPTION # prevent Jupyter from trying to open a browser c.NotebookApp.open_browser = False
Jupyter and Security
Deploying Jupyter Notebook in the cloud principally leads to a number of security issues since it is a full-fledged development environment accessible via a web browser. It is therefore of para‐ mount importance to use the security measures that a Jupyter Notebook server provides by default, like password protection and SSL encryption. But this is just the beginning; further security measures might be advisable depending on what exactly is done on the cloud instance.
The next step is to make sure that Python and Jupyter Notebook get installed on the Droplet.
Installation Script for Python and Jupyter Notebook
The bash script to install Python and Jupyter Notebook is similar to the one presen‐ ted in “Using Docker Containers” on page 45 to install Python via Miniconda in a Docker container. However, the script in Example 2-4 needs to start the Jupyter Notebook server as well. All major parts and lines of code are commented inline.
Example 2-4. Bash script to install Python and to run the Jupyter Notebook server
#!/bin/bash # # Script to Install # Linux System Tools, # Basic Python Packages and # Jupyter Notebook Server # # Python for Finance, 2nd ed. # (c) Dr. Yves J. Hilpisch # # GENERAL LINUX apt-get update # updates the package index cache
Using Cloud Instances | 53

apt-get upgrade -y # updates packages apt-get install -y bzip2 gcc git htop screen vim wget apt-get upgrade -y bash # upgrades bash if necessary apt-get clean # cleans up the package index cache

# installs system tools

# INSTALLING MINICONDA wget https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh -O \
Miniconda.sh bash Miniconda.sh -b # installs Miniconda rm Miniconda.sh # removes the installer # prepends the new path for current session export PATH="/root/miniconda3/bin:$PATH" # prepends the new path in the shell configuration echo ". /root/miniconda3/etc/profile.d/conda.sh" >> ~/.bashrc echo "conda activate" >> ~/.bashrc

# INSTALLING PYTHON LIBRARIES # More packages can/must be added # depending on the use case. conda update -y conda # updates conda if required conda create -y -n py4fi python=3.7 # creates an environment source activate py4fi # activates the new environment conda install -y jupyter # interactive data analytics in the browser conda install -y pytables # wrapper for HDF5 binary storage conda install -y pandas # data analysis package conda install -y matplotlib # standard plotting library conda insta-
ll -y scikit-learn # machine learning library conda install -y openpyxl # library for Excel interaction conda install -y pyyaml # library to manage YAML files

pip install --upgrade pip # upgrades the package manager pip install cufflinks # combining plotly with pandas

# COPYING FILES AND CREATING DIRECTORIES mkdir /root/.jupyter mv /root/jupyter_notebook_config.py /root/.jupyter/ mv /root/cert.* /root/.jupyter mkdir /root/notebook cd /root/notebook

# STARTING JUPYTER NOTEBOOK jupyter notebook --allow-root

# STARTING JUPYTER NOTEBOOK # as background process: # jupyter notebook --allow-root &
This script needs to be copied to the Droplet and needs to be started by the orchestra‐ tion script as described in the next subsection.

54 | Chapter 2: Python Infrastructure

Script to Orchestrate the Droplet Setup
The second bash script, which sets up the Droplet, is the shortest one (Example 2-5). It mainly copies all the other files to the Droplet, whose IP address is expected as a parameter. In the final line it starts the install.sh bash script, which in turn does the installation itself and starts the Jupyter Notebook server.
Example 2-5. Bash script to set up the Droplet
#!/bin/bash # # Setting up a DigitalOcean Droplet # with Basic Python Stack # and Jupyter Notebook # # Python for Finance, 2nd ed. # (c) Dr Yves J Hilpisch #
# IP ADDRESS FROM PARAMETER MASTER_IP=$1
# COPYING THE FILES scp install.sh root@${MASTER_IP}: scp cert.* jupyter_notebook_config.py root@${MASTER_IP}:
# EXECUTING THE INSTALLATION SCRIPT ssh root@${MASTER_IP} bash /root/install.sh
Everything is now in place to give the setup code a try. On DigitalOcean, create a new Droplet with options similar to these: Operating system
Ubuntu 18.10 x64 (the newest version available at the time of this writing) Size
1 core, 1 GB, 25 GB SSD (the smallest Droplet) Data center region
Frankfurt (since your author lives in Germany) SSH key
Add a (new) SSH key for password-less login 11
11 If you need assistance, visit either “How to Add SSH Keys to Droplets” or “How to Create SSH Keys with PuTTY on Windows”.
Using Cloud Instances | 55

Droplet name You can go with the prespecified name or can choose something like py4fi
Clicking the Create button initiates the Droplet creation process, which generally takes about one minute. The major outcome of the setup procedure is the IP address, which might be, for instance, 46.101.156.199 if you chose Frankfurt as your data cen‐ ter location. Setting up the Droplet now is as easy as follows:
(py3) ~/cloud$ bash setup.sh 46.101.156.199
The resulting process might take a couple of minutes. It is finished when there is a message from the Jupyter Notebook server saying something like:
The Jupyter Notebook is running at: https://[all ip addresses on your system]:8888/
In any current browser, visiting the following address accesses the running Jupyter Notebook server (note the https protocol):
https://46.101.156.199:8888
After perhaps requesting that you add a security exception, the Jupyter Notebook login screen prompting for a password (in our case, jupyter) should appear. You are now ready to start Python development in the browser via Jupyter Notebook, IPy‐ thon via a terminal window, or the text file editor. Other file management capabili‐ ties, such as file upload, deletion of files, and creation of folders, are also available.
Benefits of the Cloud
Cloud instances like those from DigitalOcean and Jupyter Note‐ book are a powerful combination, allowing the Python developer and quant to work on and make use of professional compute and storage infrastructure. Professional cloud and data center providers make sure that your (virtual) machines are physically secure and highly available. Using cloud instances also keeps the cost of the exploration and development phase rather low, since usage gener‐ ally gets charged by the hour without the need t-
o enter into a longterm agreement.
Conclusion
Python is the programming language and technology platform of choice, not only for this book but for almost every leading financial institution. However, Python deploy‐ ment can be tricky at best and sometimes even tedious and nerve-wracking. Fortu‐ nately, several technologies that help with the deployment issue have become available in recent years. The open source conda helps with both Python package and virtual environment management. Docker containers go even further, in that com‐ plete files-
ystems and runtime environments can be easily created in a technically
56 | Chapter 2: Python Infrastructure

shielded “sandbox” (i.e., the container). Going even one step further, cloud providers like DigitalOcean offer compute and storage capacity in professionally managed and secured data centers within minutes, billed by the hour. This in combination with a Python 3.7 installation and a secure Jupyter Notebook server installation provides a professional environment for Python development and deployment in the context of Python-for-finance projects.
Further Resources
For Python package management, consult the following resources: • pip package manager page • conda package manager page • Installing Packages page
For virtual environment management, consult these resources: • virtualenv environment manager page • conda Managing Environments page • pipenv package and environment manager
The following resources (among others) provide information about Docker containers:
• Docker home page • Matthias, Karl, and Sean Kane (2015). Docker: Up and Running. Sebastopol, CA:
O’Reilly. For a concise introduction to and overview of the bash scripting language, see:
• Robbins, Arnold (2016). Bash Pocket Reference. Sebastopol, CA: O’Reilly. How to run a public Jupyter Notebook server securely is explained in the Jupyter Note‐ book documentation. There is also a hub available that allows the management of multiple users for a Jupyter Notebook server, called JupyterHub. To sign up on DigitalOcean with a 10 USD starting balance in your new account, visit the page http://bit.ly/do_sign_up. This pays for two months of usage of the smallest Droplet.
Further Resources | 57

PART II
Mastering the Basics
This part of the book is concerned with the basics of Python programming. The top‐ ics covered in this part are fundamental for all other chapters to follow in subsequent parts and for Python usage in general. The chapters are organized according to certain topics such that they can be used as a reference to which the reader can come to look up examples and details related to the topic of interest:
• Chapter 3 focuses on Python data types and structures. • Chapter 4 is about NumPy and its ndarray class. • Chapter 5 is about pandas and its DataFrame class. • Chapter 6 discusses object-oriented programming (OOP) with Python.

CHAPTER 3
Data Types and Structures

Bad programmers worry about the code. Good programmers worry about data struc‐ tures and their relationships.
—Linus Torvalds
This chapter introduces the basic data types and data structures of Python, and is organized as follows:
“Basic Data Types” on page 62 The first section introduces basic data types such as int, float, bool, and str.
“Basic Data Structures” on page 75 The second section introduces the fundamental data structures of Python (e.g., list objects) and illustrates, among other things, control structures, functional programming approaches, and anonymous functions.
The aim of this chapter is to provide a general introduction to Python specifics when it comes to data types and structures. The reader equipped with a background from another programing language, say C or Matlab, should be able to easily grasp the dif‐ ferences that Python usage might bring along. The topics and idioms introduced here are important and fundamental for the chapters to come. The chapter covers the following data types and structures:

Object type Meaning

Used for

int

Integer value

Natural numbers

float Floating-point number Real numbers

bool

Boolean value

Something true or false

str

String object

Character, word, text

tuple Immutable container Fixed set of objects, record

61

Object type Meaning

list

Mutable container

dict

Mutable container

set

Mutable container

Used for Changing set of objects Key-value store Collection of unique objects

Basic Data Types
Python is a dynamically typed language, which means that the Python interpreter infers the type of an object at runtime. In comparison, compiled languages like C are generally statically typed. In these cases, the type of an object has to be specified for the object before compile time.1

Integers
One of the most fundamental data types is the integer, or int:
In [1]: a = 10 type(a)
Out[1]: int
The built-in function type provides type information for all objects with standard and built-in types as well as for newly created classes and objects. In the latter case, the information provided depends on the description the programmer has stored with the class. There is a saying that “everything in Python is an object.” This means, for example, that even simple objects like the int object just defined have built-in methods. For example, one can get the number of bits needed to represent the in-
t object in memory by calling the method bit_length():
In [2]: a.bit_length() Out[2]: 4
The number of bits needed increases the higher the integer value is that one assigns to the object:
In [3]: a = 100000 a.bit_length()
Out[3]: 17
In general, there are so many different methods that it is hard to memorize all meth‐ ods of all classes and objects. Advanced Python environments like IPython provide tab completion capabilities that show all the methods attached to an object. You sim‐ ply type the object name followed by a dot (e.g., a.) and then press the Tab key. This

1 The Cython package brings static typing and compiling features to Python that are comparable to those in C. In fact, Cython is not only a package, it is a full-fledged hybrid programming language combining Python and C.
62 | Chapter 3: Data Types and Structures

then provides a collection of methods you can call on the object. Alternatively, the Python built-in function dir gives a complete list of the attributes and methods of any object. A specialty of Python is that integers can be arbitrarily large. Consider, for example, the googol number 10100. Python has no problem with such large numbers:
In [4]: googol = 10 ** 100 googol
Out[4]: 10000000000000000000000000000000000000000000000000000000000000000000000000 000000000000000000000000000
In [5]: googol.bit_length() Out[5]: 333
Large Integers
Python integers can be arbitrarily large. The interpreter simply uses as many bits/bytes as needed to represent the numbers.
Arithmetic operations on integers are also easy to implement:
In [6]: 1 + 4 Out[6]: 5
In [7]: 1 / 4 Out[7]: 0.25
In [8]: type(1 / 4) Out[8]: float
Floats
The last expression returns the mathematically correct result of 0.25,2 which gives rise to the next basic data type, the float. Adding a dot to an integer value, like in 1. or 1.0, causes Python to interpret the object as a float. Expressions involving a float also return a float object in general:3
In [9]: 1.6 / 4 Out[9]: 0.4
2 This is different in Python 2.x, where floor division is the default. Floor division in Python 3.x is accom‐ plished by 3 // 4, which gives 0 as the result.
3 Here and in the following discussion, terms like float, float object, etc. are used interchangeably, acknowl‐ edging that every float is also an object. The same holds true for other object types.
Basic Data Types | 63

In [10]: type (1.6 / 4) Out[10]: float
A float is a bit more involved in that the computerized representation of rational or real numbers is in general not exact and depends on the specific technical approach taken. To illustrate what this implies, let us define another float object, b. float objects like this one are always represented internally up to a certain degree of accu‐ racy only. This becomes evident when adding 0.1 to b:
In [11]: b = 0.35 type(b)
Out[11]: float

In [12]: b + 0.1 Out[12]: 0.44999999999999996

The reason for this is that float objects are internally represented in binary format;

that is, a decimal number 0 < n < 1 is represented by a series of the form

n=

x 2

+

y 4

+

z 8

+

....

For

certain

floating-point

numbers

the

binary

representation

might involve a large number of elements or might even be an infinite series. How‐

ever, given a fixed number of bits used to represent such a number—i.e., a fixed num‐

ber of terms in the representation series—inaccuracies are the consequence. Other

numbers can be represented perfectly and are therefore stored exactly even with a

finite number of bits available. Consider the following example:

In [13]: c = 0.5 c.as_integer_ratio()
Out[13]: (1, 2)

One-half, i.e., 0.5, is stored exactly because it has an exact (finite) binary representa‐

tion

as

0.5 =

1 2

.

However,

for

b

=

0.35 one gets something different than the

expected rational number 0.35 =

7 20

:

In [14]: b.as_integer_ratio() Out[14]: (3152519739159347, 9007199254740992)

The precision is dependent on the number of bits used to represent the number. In general, all platforms that Python runs on use the IEEE 754 double-precision stan‐ dard—i.e., 64 bits—for internal representation. This translates into a 15-digit relative accuracy.

Since this topic is of high importance for several application areas in finance, it is sometimes necessary to ensure the exact, or at least best possible, representation of numbers. For example, the issue can be of importance when summing over a large set of numbers. In such a situation, a certain kind and/or magnitude of representation error might, in aggregate, lead to significant deviations from a benchmark value.

64 | Chapter 3: Data Types and Structures

The module decimal provides an arbitrary-precision object for floating-point num‐ bers and several options to address precision issues when working with such numbers:
In [15]: import decimal from decimal import Decimal
In [16]: decimal.getcontext() Out[16]: Context(prec=28, rounding=ROUND_HALF_EVEN, Emin=-999999, Emax=999999,
capitals=1, clamp=0, flags=[], traps=[InvalidOperation, DivisionByZero, Overflow])
In [17]: d = Decimal(1) / Decimal (11) d
Out[17]: Decimal('0.09090909090909090909090909091')
One can change the precision of the representation by changing the respective attribute value of the Context object:
In [18]: decimal.getcontext().prec = 4
In [19]: e = Decimal(1) / Decimal (11) e
Out[19]: Decimal('0.09091')
In [20]: decimal.getcontext().prec = 50
In [21]: f = Decimal(1) / Decimal (11) f
Out[21]: Decimal('0.090909090909090909090909090909090909090909090909091')
Lower precision than default.
Higher precision than default. If needed, the precision can in this way be adjusted to the exact problem at hand and one can operate with floating-point objects that exhibit different degrees of accuracy:
In [22]: g = d + e + f g
Out[22]: Decimal('0.27272818181818181818181818181909090909090909090909')
Arbitrary-Precision Floats
The module decimal provides an arbitrary-precision floating-point number object. In finance, it might sometimes be necessary to ensure high precision and to go beyond the 64-bit double-precision standard.
Basic Data Types | 65

Booleans
In programming, evaluating a comparison or logical expression (such as 4 > 3, 4.5 <= 3.25 or (4 > 3) and (3 > 2)) yields one of True or False as output, two impor‐ tant Python keywords. Others are, for example, def, for, and if. A complete list of Python keywords is available in the keyword module:
In [23]: import keyword
In [24]: keyword.kwlist Out[24]: ['False',
'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
True and False are of data type bool, standing for Boolean value. The following code shows Python’s comparison operators applied to the same operands with the resulting bool objects:
66 | Chapter 3: Data Types and Structures

In [25]: 4 > 3 Out[25]: True
In [26]: type(4 > 3) Out[26]: bool
In [27]: type(False) Out[27]: bool
In [28]: 4 >= 3 Out[28]: True
In [29]: 4 < 3 Out[29]: False
In [30]: 4 <= 3 Out[30]: False
In [31]: 4 == 3 Out[31]: False
In [32]: 4 != 3 Out[32]: True
Is greater. Is greater or equal. Is smaller. Is smaller or equal. Is equal. Is not equal. Often, logical operators are applied on bool objects, which in turn yields another bool object:
In [33]: True and True Out[33]: True
In [34]: True and False Out[34]: False
In [35]: False and False Out[35]: False
In [36]: True or True Out[36]: True
Basic Data Types | 67

In [37]: True or False Out[37]: True
In [38]: False or False Out[38]: False
In [39]: not True Out[39]: False
In [40]: not False Out[40]: True
Of course, both types of operators are often combined:
In [41]: (4 > 3) and (2 > 3) Out[41]: False
In [42]: (4 == 3) or (2 != 3) Out[42]: True
In [43]: not (4 != 4) Out[43]: True
In [44]: (not (4 != 4)) and (2 == 3) Out[44]: False
One major application area is to control the code flow via other Python keywords, such as if or while (more examples later in the chapter):
In [45]: if 4 > 3: print('condition true')
condition true
In [46]: i = 0 while i < 4: print('condition true, i = ', i) i += 1 condition true, i = 0 condition true, i = 1 condition true, i = 2 condition true, i = 3
If condition holds true, execute code to follow.
The code to be executed if condition holds true.
Initializes the parameter i with 0.
As long as the condition holds true, execute and repeat the code to follow.
Prints a text and the value of parameter i.
68 | Chapter 3: Data Types and Structures

Increases the parameter value by 1; i += 1 is the same as i = i + 1. Numerically, Python attaches a value of 0 to False and a value of 1 to True. When transforming numbers to bool objects via the bool() function, a 0 gives False while all other numbers give True:
In [47]: int(True) Out[47]: 1
In [48]: int(False) Out[48]: 0
In [49]: float(True) Out[49]: 1.0
In [50]: float(False) Out[50]: 0.0
In [51]: bool(0) Out[51]: False
In [52]: bool(0.0) Out[52]: False
In [53]: bool(1) Out[53]: True
In [54]: bool(10.5) Out[54]: True
In [55]: bool(-2) Out[55]: True
Strings
Now that natural and floating-point numbers can be represented, this subsection turns to text. The basic data type to represent text in Python is str. The str object has a number of helpful built-in methods. In fact, Python is generally considered to be a good choice when it comes to working with texts and text files of any kind and any size. A str object is generally defined by single or double quotation marks or by converting another object using the str() function (i.e., using the object’s stan-
dard or user-defined str representation):
In [56]: t = 'this is a string object'
With regard to the built-in methods, you can, for example, capitalize the first word in this object:
In [57]: t.capitalize() Out[57]: 'This is a string object'
Basic Data Types | 69

Or you can split it into its single-word components to get a list object of all the words (more on list objects later):
In [58]: t.split() Out[58]: ['this', 'is', 'a', 'string', 'object']
You can also search for a word and get the position (i.e., index value) of the first letter of the word back in a successful case:
In [59]: t.find('string') Out[59]: 10
If the word is not in the str object, the method returns -1:
In [60]: t.find('Python') Out[60]: -1
Replacing characters in a string is a typical task that is easily accomplished with the replace() method:
In [61]: t.replace(' ', '|') Out[61]: 'this|is|a|string|object'
The stripping of strings—i.e., deletion of certain leading/lagging characters—is also often necessary:
In [62]: 'http://www.python.org'.strip('htp:/') Out[62]: 'www.python.org'
Table 3-1 lists a number of helpful methods of the str object.

Table 3-1. Selected string methods

Method

Arguments

Returns/result

capitalize ()

Copy of the string with first letter capitalized

count

(sub[, start[, end]]) Count of the number of occurrences of substring

encode

([encoding[, errors]]) Encoded version of the string

find

(sub[, start[, end]]) (Lowest) index where substring is found

join

(seq)

Concatenation of strings in sequence seq

replace (old, new[, count]) Replaces old by new the first count times

split

([sep[, maxsplit]]) List of words in string with sep as separator

splitlines ([keepends])

Separated lines with line ends/breaks if keepends is True

strip upper

(chars) ()

Copy of string with leading/lagging characters in chars removed Copy with all letters capitalized

70 | Chapter 3: Data Types and Structures

Unicode Strings
A fundamental change from Python 2.7 (used for the first edition of the book) to Python 3.7 (used for this second edition) is the encoding and decoding of string objects and the introduction of Unicode. This chapter does not go into the many details important in this context; for the purposes of this book, which mainly deals with numerical data and standard strings containing English words, this omission seems justified.
Excursion: Printing and String Replacements
Printing str objects or string representations of other Python objects is usually accomplished by the print() function:
In [63]: print('Python for Finance') Python for Finance
In [64]: print(t) this is a string object
In [65]: i = 0 while i < 4: print(i) i += 1 0 1 2 3
In [66]: i = 0 while i < 4: print(i, end='|') i += 1 0|1|2|3|
Prints a str object.
Prints a str object referenced by a variable name.
Prints the string representation of an int object.
Specifies the final character(s) when printing; default is a line break (\n) as seen before. Python offers powerful string replacement operations. There is the old way, via the % character, and the new way, via curly braces ({}) and format(). Both are still applied in practice. This section cannot provide an exhaustive illustration of all options, but the following code snippets show some important ones. First, the old way of doing it:
Basic Data Types | 71

In [67]: 'this is an integer %d' % 15 Out[67]: 'this is an integer 15'
In [68]: 'this is an integer %4d' % 15 Out[68]: 'this is an integer 15'
In [69]: 'this is an integer %04d' % 15 Out[69]: 'this is an integer 0015'
In [70]: 'this is a float %f' % 15.3456 Out[70]: 'this is a float 15.345600'
In [71]: 'this is a float %.2f' % 15.3456 Out[71]: 'this is a float 15.35'
In [72]: 'this is a float %8f' % 15.3456 Out[72]: 'this is a float 15.345600'
In [73]: 'this is a float %8.2f' % 15.3456 Out[73]: 'this is a float 15.35'
In [74]: 'this is a float %08.2f' % 15.3456 Out[74]: 'this is a float 00015.35'
In [75]: 'this is a string %s' % 'Python' Out[75]: 'this is a string Python'
In [76]: 'this is a string %10s' % 'Python' Out[76]: 'this is a string Python'
int object replacement. With fixed number of characters. With leading zeros if necessary. float object replacement. With fixed number of decimals. With fixed number of characters (and filled-up decimals). With fixed number of characters and decimals … … and leading zeros if necessary. str object replacement. With fixed number of characters.
72 | Chapter 3: Data Types and Structures

Now, here are the same examples implemented in the new way. Notice the slight dif‐ ferences in the output in some places:
In [77]: 'this is an integer {:d}'.format(15) Out[77]: 'this is an integer 15'
In [78]: 'this is an integer {:4d}'.format(15) Out[78]: 'this is an integer 15'
In [79]: 'this is an integer {:04d}'.format(15) Out[79]: 'this is an integer 0015'
In [80]: 'this is a float {:f}'.format(15.3456) Out[80]: 'this is a float 15.345600'
In [81]: 'this is a float {:.2f}'.format(15.3456) Out[81]: 'this is a float 15.35'
In [82]: 'this is a float {:8f}'.format(15.3456) Out[82]: 'this is a float 15.345600'
In [83]: 'this is a float {:8.2f}'.format(15.3456) Out[83]: 'this is a float 15.35'
In [84]: 'this is a float {:08.2f}'.format(15.3456) Out[84]: 'this is a float 00015.35'
In [85]: 'this is a string {:s}'.format('Python') Out[85]: 'this is a string Python'
In [86]: 'this is a string {:10s}'.format('Python') Out[86]: 'this is a string Python '
String replacements are particularly useful in the context of multiple printing opera‐ tions where the printed data is updated, for instance, during a while loop:
In [87]: i = 0 while i < 4: print('the number is %d' % i) i += 1 the number is 0 the number is 1 the number is 2 the number is 3
In [88]: i = 0 while i < 4: print('the number is {:d}'.format(i)) i += 1 the number is 0 the number is 1 the number is 2 the number is 3
Basic Data Types | 73

Excursion: Regular Expressions
A powerful tool when working with str objects is regular expressions. Python pro‐ vides such functionality in the module re:
In [89]: import re
Suppose a financial analyst is faced with a large text file, such as a CSV file, which contains certain time series and respective date-time information. More often than not, this information is delivered in a format that Python cannot interpret directly. However, the date-time information can generally be described by a regular expres‐ sion. Consider the following str object, containing three date-time elements, three integers, and three strings. Note that triple quotation marks allow the definit-
ion of str objects over multiple rows:
In [90]: series = """ '01/18/2014 13:00:00', 100, '1st'; '01/18/2014 13:30:00', 110, '2nd'; '01/18/2014 14:00:00', 120, '3rd' """
The following regular expression describes the format of the date-time information provided in the str object:4
In [91]: dt = re.compile("'[0-9/:\s]+'") # datetime
Equipped with this regular expression, one can go on and find all the date-time ele‐ ments. In general, applying regular expressions to str objects also leads to perfor‐ mance improvements for typical parsing tasks:
In [92]: result = dt.findall(series) result
Out[92]: ["'01/18/2014 13:00:00'", "'01/18/2014 13:30:00'", "'01/18/2014 14:00:00'"]
Regular Expressions
When parsing str objects, consider using regular expressions, which can bring both convenience and performance to such operations.
The resulting str objects can then be parsed to generate Python datetime objects (see Appendix A for an overview of handling date and time data with Python). To
4 It is not possible to go into detail here, but there is a wealth of information available on the internet about regular expressions in general and for Python in particular. For an introduction to this topic, refer to Fitzger‐ ald (2012).
74 | Chapter 3: Data Types and Structures

parse the str objects containing the date-time information, one needs to provide information of how to parse them—again as a str object:
In [93]: from datetime import datetime pydt = datetime.strptime(result[0].replace("'", ""), '%m/%d/%Y %H:%M:%S') pydt
Out[93]: datetime.datetime(2014, 1, 18, 13, 0)
In [94]: print(pydt) 2014-01-18 13:00:00
In [95]: print(type(pydt)) <class 'datetime.datetime'>
Later chapters provide more information on date-time data, the handling of such data, and datetime objects and their methods. This is just meant to be a teaser for this important topic in finance.
Basic Data Structures
As a general rule, data structures are objects that contain a possibly large number of other objects. Among those that Python provides as built-in structures are:
tuple An immutable collection of arbitrary objects; only a few methods available
list A mutable collection of arbitrary objects; many methods available
dict A key-value store object
set An unordered collection object for other unique objects
Tuples
A tuple is an advanced data structure, yet it’s still quite simple and limited in its applications. It is defined by providing objects in parentheses:
In [96]: t = (1, 2.5, 'data') type(t)
Out[96]: tuple
You can even drop the parentheses and provide multiple objects, just separated by commas:
Basic Data Structures | 75

In [97]: t = 1, 2.5, 'data' type(t)
Out[97]: tuple
Like almost all data structures in Python the tuple has a built-in index, with the help of which you can retrieve single or multiple elements of the tuple. It is important to remember that Python uses zero-based numbering, such that the third element of a tuple is at index position 2:
In [98]: t[2] Out[98]: 'data'
In [99]: type(t[2]) Out[99]: str
Zero-Based Numbering
In contrast to some other programming languages like Matlab, Python uses zero-based numbering schemes. For example, the first element of a tuple object has index value 0.
There are only two special methods that this object type provides: count() and index(). The first counts the number of occurrences of a certain object and the sec‐ ond gives the index value of the first appearance of it:
In [100]: t.count('data') Out[100]: 1
In [101]: t.index(1) Out[101]: 0
tuple objects are immutable objects. This means that they, once defined, cannot be changed easily.
Lists
Objects of type list are much more flexible and powerful in comparison to tuple objects. From a finance point of view, you can achieve a lot working only with list objects, such as storing stock price quotes and appending new data. A list object is defined through brackets and the basic capabilities and behaviors are similar to those of tuple objects:
In [102]: l = [1, 2.5, 'data'] l[2]
Out[102]: 'data'
list objects can also be defined or converted by using the function list(). The fol‐ lowing code generates a new list object by converting the tuple object from the previous example:
76 | Chapter 3: Data Types and Structures

In [103]: l = list(t) l
Out[103]: [1, 2.5, 'data']
In [104]: type(l) Out[104]: list
In addition to the characteristics of tuple objects, list objects are also expandable and reducible via different methods. In other words, whereas str and tuple objects are immutable sequence objects (with indexes) that cannot be changed once created, list objects are mutable and can be changed via different operations. You can append list objects to an existing list object, and more:
In [105]: l.append([4, 3]) l
Out[105]: [1, 2.5, 'data', [4, 3]]
In [106]: l.extend([1.0, 1.5, 2.0]) l
Out[106]: [1, 2.5, 'data', [4, 3], 1.0, 1.5, 2.0]
In [107]: l.insert(1, 'insert') l
Out[107]: [1, 'insert', 2.5, 'data', [4, 3], 1.0, 1.5, 2.0]
In [108]: l.remove('data') l
Out[108]: [1, 'insert', 2.5, [4, 3], 1.0, 1.5, 2.0]
In [109]: p = l.pop(3) print(l, p) [1, 'insert', 2.5, 1.0, 1.5, 2.0] [4, 3]
Append list object at the end.
Append elements of the list object.
Insert object before index position.
Remove first occurrence of object.
Remove and return object at index position. Slicing is also easily accomplished. Here, slicing refers to an operation that breaks down a data set into smaller parts (of interest):
In [110]: l[2:5] Out[110]: [2.5, 1.0, 1.5]
Return the third through fifth elements.
Basic Data Structures | 77

Table 3-2 provides a summary of selected operations and methods of the list object.

Table 3-2. Selected operations and methods of list objects

Method l[i] = x

Arguments [i]

Returns/result Replaces i-th element by x

l[i:j:k] = s [i:j:k]

Replaces every k-th element from i to j – 1 by s

append

(x)

Appends x to object

count

(x)

Number of occurrences of object x

del l[i:j:k] [i:j:k]

Deletes elements with index values i to j – 1 and step size k

extend

(s)

Appends all elements of s to object

index

(x[, i[, j]])

First index of x between elements i and j – 1

insert

(i, x)

Inserts x at/before index i

remove

(x)

Removes element x at first match

pop reverse sort

(i)

Removes element with index i and returns it

()

Reverses all items in place

([cmp[, key[, reverse]]]) Sorts all items in place

Excursion: Control Structures
Although a topic in themselves, control structures like for loops are maybe best intro‐ duced in Python based on list objects. This is due to the fact that looping in general takes place over list objects, which is quite different to what is often the standard in other languages. Take the following example. The for loop loops over the elements of the list object l with index values 2 to 4 and prints the square of the respective ele‐ ments. Note the importance of the indentation (whitespace) in the-
 second line:
In [111]: for element in l[2:5]: print(element ** 2)
6.25 1.0 2.25
This provides a really high degree of flexibility in comparison to the typical counterbased looping. Counter-based looping is also an option with Python, but is accom‐ plished using the range object:
In [112]: r = range(0, 8, 1) r
Out[112]: range(0, 8)

In [113]: type(r) Out[113]: range

Parameters are start, end, and step-size.

78 | Chapter 3: Data Types and Structures

For comparison, the same loop is implemented using range() as follows:
In [114]: for i in range(2, 5): print(l[i] ** 2)
6.25 1.0 2.25
Looping over Lists
In Python you can loop over arbitrary list objects, no matter what the content of the object is. This often avoids the introduction of a counter.
Python also provides the typical (conditional) control elements if, elif, and else. Their use is comparable in other languages:
In [115]: for i in range(1, 10): if i % 2 == 0: print("%d is even" % i) elif i % 3 == 0: print("%d is multiple of 3" % i) else: print("%d is odd" % i)
1 is odd 2 is even 3 is multiple of 3 4 is even 5 is odd 6 is even 7 is odd 8 is even 9 is multiple of 3
% stands for modulo. Similarly, while provides another means to control the flow:
In [116]: total = 0 while total < 100: total += 1 print(total) 100
A specialty of Python is so-called list comprehensions. Instead of looping over existing list objects, this approach generates list objects via loops in a rather compact fash‐ ion:
In [117]: m = [i ** 2 for i in range(5)] m
Out[117]: [0, 1, 4, 9, 16]
Basic Data Structures | 79

In a certain sense, this already provides a first means to generate “something like” vectorized code in that loops are implicit rather than explicit (vectorization of code is discussed in more detail in Chapters 4 and 5).
Excursion: Functional Programming
Python provides a number of tools for functional programming support as well—i.e., the application of a function to a whole set of inputs (in our case list objects). Among these tools are filter(), map(), and reduce(). However, one needs a func‐ tion definition first. To start with something really simple, consider a function f() that returns the square of the input x:
In [118]: def f(x): return x ** 2
f(2) Out[118]: 4
Of course, functions can be arbitrarily complex, with multiple input/parameter objects and even multiple outputs (return objects). However, consider the following function:
In [119]: def even(x): return x % 2 == 0
even(3) Out[119]: False
The return object is a Boolean. Such a function can be applied to a whole list object by using map():
In [120]: list(map(even, range(10))) Out[120]: [True, False, True, False, True, False, True, False, True, False]
To this end, one can also provide a function definition directly as an argument to map(), making use of lambda or anonymous functions:
In [121]: list(map(lambda x: x ** 2, range(10))) Out[121]: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
Functions can also be used to filter a list object. In the following example, the filter returns elements of a list object that match the Boolean condition as defined by the even function:
In [122]: list(filter(even, range(15))) Out[122]: [0, 2, 4, 6, 8, 10, 12, 14]
80 | Chapter 3: Data Types and Structures

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:14.220Z
- **Text Length:** 162444 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
