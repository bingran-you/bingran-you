# PDF Document: Computational Physics Notes (Python) - Jure Dobnikar, James Farrell.pdf

**File Path:** Computational Physics Notes (Python) - Jure Dobnikar, James Farrell.pdf

**Processed Date:** 2026-02-10T18:15:03.200Z

**File Size:** 457.66 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 17

**Collection:** Textbooks > Computer Science > Python

---

## Extracted Text Content

Computational Physics Notes
Jure Dobnikar & James Farrell 2021-03-18

2

Part I
TOOLS
3

Chapter 1
Programming with Python
1.1 Introduction
The ﬁrst chapter of this part is a brief introduction to programming in the Python language. Without an understanding of how to program computers, the rest of the information in this book is quite useless! We encourage you to take this chapter very seriously. Whether you are completely new to programming, or have a lot of experience, you should ﬁnd something of value here. The skills you will begin to learn in this chapter have applications not only in physics, but also in science more generally, -
and in other ﬁelds besides.
Many books, introductory and advanced, have been written on this topic. We will take a pragmatic approach, focusing on the ideas that will be crucial to completing the exercises in this course. For an introduction to Python programming set in a broader context, we encourage you to read A Byte of Python, a free, online tutorial aimed at total beginners, which is also available in a Mandarin translation.
1.1.1 What is Python?
Python is a programming language—a way of telling a computer what to do. In particular, Python is an interpreted, object-oriented, high-level programming language.
An interpreted language is a programming language whose programs are translated into machine code by an interpreter at run-time—this is opposed to a compiled language, whose programs are translated into machine code before run-time.
Object-oriented programming is a programming paradigm based on the concept of “objects”, which can contain data, in the form of ﬁelds (often known as attributes), and code, in the form of procedures (often known as methods). Actually, programs written in Python are not restricted to the object-oriented paradigm—Python supports many programming paradigms, such as object-oriented, imperative, procedural, and functional programming, to greater or lesser degree. More information on programming paradig-
ms can be found here.
A high-level language is one with strong abstraction from the details of the computer. Programs written in high-level languages are usually easier to understand and modify than their low-level counterparts, and hide from the programmer the ﬁne details of how computers actually work (the details are abstracted away), such as memory management. Programs written in low-level languages also have advantages; for example, the programmer can write programs tailored to the speciﬁc machine on which the pro-
grams are to be run, resulting in more eﬃcient code.
As such, Python is a great ﬁrst language for a new programmer: she need not worry about the details of compilation, as her programs are interpreted when run; she may explore many programming paradigms, and learn which paradigm is appropriate for which task; and from the very beginning she may write programs using using complex structures, written with a syntax similar to natural language, owing to Python being a high-level language. However, her programs will not be as eﬃcient as those written in -
other languages, whose programs interface directly with hardware (low-level languages), or can be optimized at compilation time (compiled languages).
5

6

CHAPTER 1. PROGRAMMING WITH PYTHON

1.1.2 Installing Python
In order to complete this course, you will need two things: a working Python installation; an integrated development environment (IDE). If you understand all of the terms in the preceding sentence, you are probably ready to begin. If not, I recommend you use the Conda package and environment management system and the PyCharm IDE.
Conda
Instructions on how to install Conda on Windows, Mac, or Ubuntu. Choose the Python 3 version.
PyCharm
Instructions on how to install PyCharm .

1.2 Basics I

By the end of this section, you should be able to understand and write python code that looks like the following:

1 def factorial(n): # function definition statement

2

"""

3

4

evaluates n! = n * (n - 1) * ... * 2 * 1

5

0! evaluates to 1

6

7

>>> factorial(0)

8

1

9

10

>>> factorial(10)

11

3628800

12

13

>>> factorial(-1)

14

Traceback (most recent call last):

15

ValueError: n! is undefined for n less than zero

16

17

>>> factorial(3.141)

18

Traceback (most recent call last):

19

TypeError: n is not an integer

20

21

:param n: element of the factorial sequence to be evaluated

22

:type n: int

23

24

:return: n!

25

:rtype: int

26

"""

27

28

if n < 0: # if statement

29

raise ValueError("n! is undefined for n less than zero") # raise statement

30

elif not isinstance(n, int):

31

raise TypeError("n is not an integer") # raise statement

32

33

n_factorial = 1 # assignment statement

34

35

while n > 1: # while statement

36

n_factorial = n_factorial * n # assignment statement

37

n = n - 1 # assignment statement

38

39

return n_factorial # return statement

1.2. BASICS I

7

As you might have guessed, this is program that evaluates the factorial of a number. We’ll go through every element one step at a time.

i
Tip The code elements ## function definition statement , ## if statement , etc are comments. Comments are ignored when the code is run, but provide useful information about the code. You should use comments liberally! In the python language, anything following a ## that is not part of a string literal is parsed as a comment. Generally, comments should be more informative than these examples; for example, it is quite obvious (to the initiated) that line 1 is a function deﬁnition statement. Comments-
 should explain your intent, not simply reproduce what is obvious from the code.

The core functionality is contained in lines 33–37:

33

n_factorial = 1 # assignment statement

34

35

while n > 1: # while statement

36

n_factorial = n_factorial * n # assignment statement

37

n = n - 1 # assignment statement

Let’s take a closer look at line 33.

1.2.1 Assignment statements, names, expressions
Line 33 is an assignment statement. Statements are sections of code that do something. Assignment statements are the most fundamental statements in the language - they allow you to store the result of a calculation in a variable.
On the left-hand-side (LHS) of the assignment statement, there should be a name, or identiﬁer. In this instance, a name is what you might refer to as a variable. In our example, the name is n_factorial . There are some rules that determine whether a name is valid. The left-hand-side of an assignment statement must be a valid name.
• names can be a combination of letters in lowercase (a to z) or uppercase (A to Z) or digits (0 to 9) or an underscore (_).
• names like myClass , var_1 and print_this_to_screen , all are valid.
• a name cannot start with a digit. • 1variable is invalid, but variable1 is perfectly ﬁne. • it is unwise to use the names of built-in functions ( print , list , input , etc) as names.
• it is illegal to use reserved words, or keywords ( False , for , return , etc) as names.

i
Tip Names should be chosen to maximise code readability. Avoid single letter names (e.g. i, j, x, y ) where a more informative choice can be made (e.g. height, weight, number_of_people ). Follow the conventions in the style guide.
• function and variable names should be lower_case_with_underscores • class names should be CamelCase • names for constants should be UPPER_CASE_WITH_UNDERSCORES • module names should be short and all lowercase
The right-hand-side (RHS) of the assignment statement must be a valid expression. Expressions can be made up of literals, names, operators, and function calls.
• 1 and "hello world" are literals, and valid expressions • 2+3 and print(2+3) are valid expressions

8

CHAPTER 1. PROGRAMMING WITH PYTHON

• 1+ , /2 , "string are not expressions and will cause a syntax error • “syntax” errors, errors in grammar, occur when you have written something that the
interpreter cannot understand, e.g., an invalid expression,
>>> 1 + File "<stdin>", line 1 1+ ^
SyntaxError: invalid syntax
(The code block above is a python console session. Lines beginning with >>> are typed by you; lines without are the console output.) When the assignment statement is executed,
• the expression on the RHS is evaluated • the name on the LHS is bound to the result The name then behaves like that result in subsequent expressions and statements.
>>> n_factorial = 1 # assignment statement >>> n_factoral # expression statement 1
i
Tip In the previous console session, the second line is an expression statement. This a statement made that is just an expression. If you type an expression statement into a console session, and the expression evaluates to something other than None , the result will be printed to the screen. This only works in console sessions; an expression statement in a \*.py ﬁle will be executed, but it’s value will not be printed to the screen.
1.2.2 Literals, types, operators
The simplest expressions are literals. Literals are notations for constant values of some built-in type. The type of an object determines the result of applying operators to it.
>>> 1 + 2 3
In the above console session, 1 and 2 are integer literals. Their type is int , and their values are the integers 1 and 2. + is a binary operator. When the types of the objects on the LHS and RHS of the + are int , integer addition will be performed.
Arithmetic operators
The arithmetic operators are • + performs addition • - performs subtraction • * performs multplication • // performs integer division • / performs ﬂoat division • % performs modulo • ** performs exponentiation • @ performs matrix multiplication (Python 3.6+)
As a unary operator, - in the expression -x multiplies x by -1. For all of these operators except ﬂoat division and exponentiation, if the LHS and RHS are both int , the expression LHS ◦ RHS evaluates to an int .

1.2. BASICS I

9

Numeric types
As well as the int type for representing integers, there are the float type, for representing ﬂoating point numbers (real numbers, with some caveats) and the complex type, for representing complex numbers. Floats can be entered in decimal or exponential format. Imaginary numbers are entered the same way, but with a letter j at the end. Complex numbers are entered as a sum of a ﬂoat and an imaginary number.
>>> 1000.0 # float 1000.0 >>> 1e3 1000.0 >>> 1e20 1e+20 >>> 1e-20 1e-20 >>> 2.5j # complex 2.5j >>> 1e10 + 1e-10j # complex (10000000000+1e-10j)
When the LHS and RHS are not the same numeric type, the following arithmetic conversion rules are observed:
• if either argument is a complex number, the other is converted to complex • otherwise, if either argument is a ﬂoat, the other is converted to ﬂoat • otherwise, both must be integers and no conversion is necessary
What you might consider a fourth numeric type is the bool type for boolean numbers. A bool is equal to either True or False . In arithmetic expressions, bool objects are treated as 0 or 1, for False and True , respectively. The type of a literal, name, or other object can be discovered by using the type function,
>>> type(True) <class 'bool'> >>> type(1) <class 'int'> >>> type(1.0) <class 'float'> >>> type(1.0j) <class 'complex'>

i
Tip Since Python 3, the / operator performs ﬂoat division, regardless of whether both the LHS and RHS are int . Take note of the following examples.
>>> 1 // 2 0 >>> 1 / 2 0.5 >>> 2 / 1 2.0

Time to go back to our factorial code.

33

n_factorial = 1 # assignment statement

34

35

while n > 1: # while statement

10

CHAPTER 1. PROGRAMMING WITH PYTHON

36

n_factorial = n_factorial * n # assignment statement

37

n = n - 1 # assignment statement

Lines 36 and 37 are assignment statements with arithmetic expressions on the RHS. You will notice in line 36 that n_factorial appears on both sides of the = sign. This is not a problem, as the RHS is evaluated ﬁrst, then the LHS is about to that value. In variable terms, the old value of n_factorial is replaced by n_factorial * n .
To understand line 35, we have to familiarise ourselves with comparison operators, and while statements—a kind of control ﬂow.

Comparison operators
As well as arithmetic operators, the Python language uses comparison operators. Comparison operators compare two expressions, and evaluate to either True or False . Among the comparison operators are
• == evaluates to True if the LHS and RHS are equal, False otherwise • != is the negation of == • < and <= evaluate to True if the LHS is less than, or less than or equal to the RHS • > and >= evaluate to True if the LHS is greater than, or greater than or equal to the
RHS • is evaluates to True if the LHS and RHS are identical objects, False otherwise • is not is the negation of is

i
Info: The distinction between is (identical) and == (equal) is a subtle one. Consider the following examples.
>>> 1 == 1.0 # 1 is converted to a float True >>> 1 is 1.0 # 1 is an int literal, 1.0 is a float literal False >>> x = 1 >>> y = 1 >>> x == y # x and y are both equal to 1 True >>> x is y # x and y are both int with value 1 True

Besides arithmetic and comparison operators, there are also boolean operators (for use with bool arguments) and bitwise operators (for use with int arguments).

33

n_factorial = 1 # assignment statement

34

35

while n > 1: # while statement

36

n_factorial = n_factorial * n # assignment statement

37

n = n - 1 # assignment statement

In line 35 of our factorial code, the expression n > 1 evaluates to True if n is greater than 1 , and False otherwise.

1.2.3 The while statement (indeﬁnite iteration)
In many situations, we want the behaviour of our program to depend on the current properties of a variable, or that of some expression containing it. For example, we may want to loop over a set of statements until some condition obtains; or perhaps we would like our program to treat negative integers and positive

1.2. BASICS I

11

integers diﬀerently. We can achieve these aims by controlling the ﬂow of execution of our program with control ﬂow statements.
One such control ﬂow statement is the while statement. The while statement has the form

1 while expr:

2

suite

3 other code

When a while statement is encountered, the expression expr is evaluated. If expr evaluates to an object that is considered false, then line 2 is ignored, and execution moves to line 3. If expr evaluates to an
object that is considered true, then the set of statements in the block suite is executed. After executing suite , the truth value of expr is tested again. This loop continues until expr evaluates to a false object.
Notice the indentation on line 2. While lines 1 and 3 begin at the same horizontal position, line 2 is indented by 4 spaces. The content of the suite is deﬁned by those statements immediately following the while statement at a greater level of indentation. When a statement with the same indentation or lesser is encountered, it is not executed, and execution returns to the while statement.
Consider the following console session that calculates the sum of the integers less than or equal to 5.

>>> total = 0

>>> n = 5

>>>

>>> while n > 0:

...

total = total + n

...

n=n-1

...

>>> total

15

>>> n

0

When we ﬁrst encounter line four, the value of n is 5 . 5 > 0 evaluates to True , which is a true value, so the statements on lines ﬁve and six are executed. The value of total is updated to 5 (line ﬁve), and the value of n is updated to 4 (line six). We then return to line four. 4 > 0 still evaluates to a true value, so lines ﬁve and six are executed once more. After lines ﬁve and six have been executed a total of ﬁve times, the value of total is 15, and the value of n is 0 . 0 > 0 evaluates to F-
alse , which is a false value, so execution moves to line eight, and we escape the loop.
What is a true or false object? For the purposes of truth-value testing,

• the constants None and False are deﬁned to be false • zero of any numeric type is deﬁned to be false: 0, 0.0, 0.0e10, 0j, Decimal(0), Fraction(0, 1) • empty sequences and collections are also false: '', (,), [], {}, set(), range(0)

As a consequence, while True: , while 1: , and while 3.142: are functionally equivalent. Returning to our initial problem,

33

n_factorial = 1 # assignment statement

34

35

while n > 1: # while statement

36

n_factorial = n_factorial * n # assignment statement

37

n = n - 1 # assignment statement

we can see that lines 36 and 37 will be executed a total of n - 1 times, with the variable n_factorial multiplied by every integer m for 1 < m < n .

12

CHAPTER 1. PROGRAMMING WITH PYTHON

Question 1 The Fibonacci Sequence: part 1 You are likely familiar with the Fibonacci sequence:

Fn = Fn−1 + Fn−2

F0 = 0; F1 = 1

In the limit of large n, the ratio Fn/Fn−1 tends to the golden ratio, φ:

√

lim
n→∞

Fn Fn−1

=

φ

=

1+ 2

5

Using only the Python we have learned so far, a ﬁnd the smallest n such that:

Fn − φ < 10−10 Fn−1
ayou may also need to use the built-in abs function; abs(x) returns the absolute value of x .

1.2. BASICS I

13

1.2.4 Functions and modules
Consider the following console session.
>>> print(888) 888
print is a function. It’s purpose is to take it’s argument ( 888 ) and print it to the screen. We pass the argument to the function via the function call operator, () .
• generally speaking, functions can take any number of arguments (including none) • functions return some object (the result of the operation of the function on its arguments) • if an expression is a function call, it evaluates to the function’s return value • the return value of print is always None
Python has many built-in functions, such as print , that are always available. Other functions can be imported from modules. For mathematical functions other than basic arithmetic (i.e., +, -, *, /, ** ), we can import the math module with an import statement,
>>> import math # import statement >>> math.sqrt(4.0) # square root of 4 2.0 >>> math.sqrt(2.0) # square root of 2 1.4142135623730951 >>> math.acos(1.0) # arccos of 1 0.0
The notation module.object refers to the attribute object of module . The attribute could be a constant, a function, a class, or another module. In the above examples, we access the sqrt function of the math module. As well as importing functions from math , we can import constants,
>>> import math >>> math.pi 3.141592653589793 >>> math.cos(math.pi) -1.0
Having to retype math every time is tedious, and makes the code less readable. Instead, we can import math with an alias,
>>> import math as m >>> m.asin(1) # arcsin of 1 1.5707963267948966
or import only the names we want to use,
>>> from math import atan >>> atan(1.0) # arctan of 1 0.7853981633974483

The def and return statements We can deﬁne our own functions. A function deﬁnition has the following form:

1 def function_name(argument_list): # function definition statement

2

suite # function body

3

return return_list # return statement, optional

14

CHAPTER 1. PROGRAMMING WITH PYTHON

Unlike a while statement, when the def statement is encounted, the suite is not executed. Rather, the suite is checked for syntax errors, and then a function object is created. When the function is called with the function call operator, i.e. function_name() , the statements in suite are executed, and function_name() evaluates to return_list . If return_list is not provided, or the return statement is omitted altogether, the function call evaluates to None .
The suite is deﬁned by the continuous block of statements following the def statement that are at a greater level of indentation that the def statement itself (just like we saw for the suite in the while statement).
We can import our own functions in the same way we import functions from modules.

1 # square.py

2

3 def square(x):

4

return x * x

1 # script.py
2
3 from square import square
4
5 x=4 6 x_squared = square(x) 7 print(x)

Functions can be written with two types of arguments:
• positional arguments, that have no default value, and must by explicitly provided to a function call
• keyword arguments, that have some default value, and may be omitted from a function call
Consider a function that takes two numbers, x and n, and returns the nth power of x. We give n a default value 1. The correct way to construct the def statement is as in the following:

1 # power.py
2
3 def power(x, n=1): 4 return x ** n

Positional arguments are speciﬁed ﬁrst, followed by keyword arguments. The def statement

1 def power(n=1, x):

2

return x ** n

is a syntax error. The rules for function calls are somewhat more lax,

>>> from power import power >>> >>> a, b = 2, 3 >>> power(x=a) # n can be omitted from the argument list 2 >>> >>> power(n=a) # x cannot be omitted from the argument list Traceback (most recent call last):
File "<stdin>", line 1, in <module> TypeError: power() missing 1 required positional argument: 'x' >>> >>> power(x=a, n=b) # x can be supplied as a keyword argument 8

1.2. BASICS I

15

>>> >>> power(n=a, x=b) # if all arguments are supplied as keyword arguments, the order is arbitrary 9 >>> >>> power(a, b) # if all arguments are supplied as positional arguments, 8 >>> >>> power(b, a) # the order is critical 9 >>> >>> power(n=a, x) # positional arguments cannot follow keyword arguments
File "<stdin>", line 1 SyntaxError: positional argument follows keyword argument
We recommend you follow the pattern in lines 3 and 9 to maximise the readability of your code and avoid errors.

docstrings and doctests
The syntax of lines 1 and 39 in factorial are now clear to us. We now turn to the largest section of the code. 25 of the 39 lines, from lines 2 to 26, are devoted to documentation. Inline comments ( ## like this ) help to elucidate small blocks of statements, but docstrings draw the bigger picture.

2

"""

3

4

evaluates n! = n * (n - 1) * ... * 2 * 1

5

0! evaluates to 1

6

7

>>> factorial(0)

8

1

9

10

>>> factorial(10)

11

3628800

12

13

>>> factorial(-1)

14

Traceback (most recent call last):

15

ValueError: n! is undefined for n less than zero

16

17

>>> factorial(3.141)

18

Traceback (most recent call last):

19

TypeError: n is not an integer

20

21

:param n: element of the factorial sequence to be evaluated

22

:type n: int

23

24

:return: n!

25

:rtype: int

26

"""

A docstring immediately follows a def statement and is enclosed in triple double quotes. By convention, the ﬁrst few lines (here, lines 4–5) describe in words the problem that the function solves. It should provide a suﬃciently detailed explanation for a user to know whether it is the function they are looking for.
The following block of lines contain usage examples in the form of transcribed console sessions (lines 7– 19). These lines a more than just hints—we will come back to them shortly.
The last block of lines should contain details about the parameters and return value, along with their types (lines 21–25). From the docstring, we can see from line 22 the author intended for the factorial function to take an integer parameter, n . This comment does not imply if you give the function a noninteger value then an error will be thrown (lines 17–19, however, state this explicitly); rather it implies that problem-free execution is not guaranteed. An explicit error is really the best-cas-
e scenario; in the

16

CHAPTER 1. PROGRAMMING WITH PYTHON

worst-case scenario, a function returns a nonsense value, execution proceeds silently, and the program returns an incorrect result that you may not even be able to identify as such!
A function’s docstring is stored in its __doc__ attribute.
>>> from factorial import factorial >>> print(factorial.__doc__)
evaluates n! = n * (n - 1) * ... * 2 * 1 0! evaluates to 1
>>> factorial(0) 1
>>> factorial(10) 3628800
>>> factorial(-1) Traceback (most recent call last): ValueError: n! is undefined for n less than zero
>>> factorial(3.141) Traceback (most recent call last): TypeError: n is not an integer
:param n: element of the factorial sequence to be evaluated :type n: int
:return: n! :rtype: int
>>>
In a console session, the help function, when supplied with an object as its argument, will bring up a page of useful information of which the docstring forms part.
Now back to those usage examples (lines 7–19); in addition to being handy hints, they form a suite of tests. The doctest module searches for pieces of text that look like interactive Python sessions, and then executes those sessions to verify that they work exactly as shown. If your tests fail, then either
a. your docstring needs to be updated, or b. your code no longer works properly.
doctest can be invoked in a terminal session,
farrelljd@sommerfugl:~/2019/programming_course$ python3 -m doctest factorial.py farrelljd@sommerfugl:~/2019/programming_course$ farrelljd@sommerfugl:~/2019/programming_course$ python3 -m doctest -v factorial.py Trying:
factorial(0) Expecting:
1 ok Trying:
factorial(10) Expecting:
3628800 ok Trying:
factorial(-1) Expecting:
Traceback (most recent call last):

1.2. BASICS I

17

ValueError: n! is undefined for n less than zero ok Trying:
factorial(3.141) Expecting:
Traceback (most recent call last): TypeError: n is not an integer ok 1 items had no tests: factorial 1 items passed all tests: 4 tests in factorial.factorial 4 tests in 2 items. 4 passed and 0 failed. Test passed. farrelljd@sommerfugl:~/2019/programming_course$
where the -v ﬂag enables verbose output. In a PyCharm session, right-click on your code and choose Run ’Doctest <module>’.
Writing good documentation may seem like a hassle now, but it saves a lot of time in the long run. Best practice is to write a docstring and doctests before you implement your function! That way, you have a clear statement of how your function should behave in a variety of circumstances, and can periodically check your progress with the doctest module.

1.2.5 The if statement

while statements allow us to repeatedly execute blocks of code while some condition is satisﬁed. if statements allow use to execute diﬀerent blocks of code depending on the truth value(s) of a set of expressions.
The if statement has the form:

1 if expression1:

2

suite1

3 elif expression2:

4

suite2

5 ...

6 elif expressionY:

7

suiteY

8 else:

9

suiteZ

10 other code

The ﬂow is simple: if expression1 evaluates to a true value, suite1 is executed, and the interpreter
moves to the end of the if block (line 10). Otherwise, the truth value of expression2 is evaluated; if
it is true, suite2 is executed, and the interpreter moves to the end of the if block. All expressions are evaluated until a true value is obtained, whereupon the corresponding suite is executed, and all subsequent expressions ignored. If no expression evaluates to a true value, the suite following the else statement is executed.
An if block has exactly one if statement, zero or more elif statements, and zero or one else statement.

continue and break
Complex control ﬂow can be implemented by combining if and while statements. Two useful statements for use within while (and for ) blocks are continue and break . When a continue statement is encountered in a suite, the remainder of the suite is skipped, and execution resumes at the while statement. When a break statement is encountered in a suite, the remainder of the suite is skipped, and execution resumes at the end of the while block. The else clause of the while block, if present, is not exec-
uted.

18

CHAPTER 1. PROGRAMMING WITH PYTHON

>>> i = 0

>>> while True: # loop forever

...

i += 1

...

if i % 2 == 0: # skip even numbers

...

continue

...

elif i % 5 == 0: # --> print odd numbers less than five

...

break

...

print(i)

... else:

...

print("this line is never executed")

...

1

3

>>>

Returning to the factorial code,

28

if n < 0: # if statement

29

raise ValueError("n! is undefined for n less than zero") # raise statement

30

elif not isinstance(n, int):

31

raise TypeError("n is not an integer") # raise statement

line 28 tests whether n is less than zero. If true, line 29 is executed. Otherwise, line 30 tests whether n is an not instance of the type int by means of the built-in isinstance function. If true, line 31 is executed.

1.2.6 Exception handling
What should we do if the value supplied to our factorial function is less than zero? If we do nothing, the while suite is skipped, and, thanks to line 33, the return value for all n < 0 is 1.
This is a problem. Somewhere, some piece of code has called the factorial function with a negative number as its argument, and nobody noticed. In all likelihood, that number is negative because of an error somewhere else in the code. We would like to ﬁnd that error as soon as possible. We can do this by raising an exception. An exception is not a Python error, but something we should take exception to, i.e. an outcome we should reject.
A raise statement has the form

1 raise exception_class("error_message")

When raise statement is encountered, a traceback is printed to the screen, which tells us the sequence of statements that brought us to the raise statement, along with function names and line numbers. Finally, the name of the error_class and the error_message are printed to the screen. The traceback helps ﬁnd
the source of the error, while the error class and message tell us what the error is. The error message is of string type—a type for things best represented with words and letters. We will discuss strings in detail
later. For now, be aware that a string is a concatentation of characters and whitespace enclosed in either single quotes '' or double quotes "" .

28

if n < 0: # if statement

29

raise ValueError("n! is undefined for n less than zero") # raise statement

1 # some_code.py 2 from factorial import factorial
3
4 factorial(-1)
farrelljd@sommerfugl:~/2019/programming_course$ python some_code.py Traceback (most recent call last):
File "some_code.py", line 4, in <module> factorial(-1)

1.2. BASICS I

19

File "/home/farrelljd/2019/programming_course/factorial.py", line 29, in factorial raise ValueError("n! is undefined for n less than zero") # raise statement
ValueError: n! is undefined for n less than zero farrelljd@sommerfugl:~/2019/programming_course$

From the traceback, we ﬁnd that the problem arises from supplying a negative value to factorial in line 4 of some_code.py.
From the list of built-in exceptions, we ﬁnd that a ValueError is raised when

“... a built-in operation or function receives an argument that has the right type but an inappropriate value, and the situation is not described by a more precise exception such as IndexError .”

which seems appropriate to our case. If no built-in exception adequately describes the situation, it is possible to deﬁne a new one.

30

elif not isinstance(n, int):

31

raise TypeError("n is not an integer") # raise statement

A TypeError is raised when

“... an operation or function is applied to an object of inappropriate type. The associated value is a string giving details about the type mismatch.
This exception may be raised by user code to indicate that an attempted operation on an object is not supported, and is not meant to be. If an object is meant to support a given operation but has not yet provided an implementation, NotImplementedError is the proper exception to raise.
Passing arguments of the wrong type (e.g. passing a list when an int is expected) should result in a TypeError, but passing arguments with the wrong value (e.g. a number outside expected boundaries) should result in a ValueError.”

which, again, seems to be the right choice. And that’s it for the factorial function!

20

CHAPTER 1. PROGRAMMING WITH PYTHON

Question 2 The Fibonacci Sequence: part 2 Write a documentation string for your Fibonacci sequence implementation.
I include a code skeleton below, with a sample docstring. The docstring is not complete!
def fibonacci(n): """
calculates the n^th value of the Fibonacci sequence, F_n
>>> fibonacci(0) 0
>>> fibonacci(1) 1
>>> fibonacci(100) 354224848179261915075
:param n: element of the Fibonacci sequence to be calculated :type n: int
:return: F_n :rtype: int """
return

1.3. BASICS II

21

1.3 Basics II

By the end of this section, you should be able to understand and write python code that looks like the following:
ljpotential.py:

1 def lennard_jones_potential(r, sigma=1.0, epsilon=1.0):

2

"""

3

4

Calculates the Lennard-Jones potential for particles with diameter sigma

5

at a separation r with a well-depth epsilon.

6

7

>>> lennard_jones_potential(1.0, 1.0, 1.0)

8

0.0

9

10

>>> lennard_jones_potential(2**(1/6), 1.0, 1.0)

11

-1.0

12

13

>>> lennard_jones_potential(0.0, 1.0, 1.0)

14

Traceback (most recent call last):

15

ZeroDivisionError: float division by zero

16

17

>>> lennard_jones_potential(-1.0, 1.0, 1.0)

18

Traceback (most recent call last):

19

ValueError: distance between particles is negative

20

21

>>> lennard_jones_potential(1.0, -1.0, 1.0)

22

Traceback (most recent call last):

23

ValueError: particle diameter is not strictly positive

24

25

:param r: the distance between two particles

26

:type r: float

27

:param sigma: the diameter of a particle

28

:type sigma: float

29

:param epsilon: the well depth of the potential

30

:type epsilon: float

31

32

:return: the Lennard-Jones energy of the particle pair

33

:rtype: float

34

"""

35

36

if r < 0.0:

37

raise ValueError("distance between particles is negative")

38

elif sigma <= 0.0:

39

raise ValueError("particle diameter is not strictly positive")

40

41

r6 = (sigma / r) ** 6

42

43

return 4 * epsilon * r6 * (r6 - 1)

pairpotential.py:

1 from itertools import combinations 2 from math import sqrt

3

4

5 def pair_potential(x, potential=None, args=()):

6

"""

7

22

CHAPTER 1. PROGRAMMING WITH PYTHON

8

Calculates the potential energy of configuration of particles.

9

10

>>> from ljpotential import lennard_jones_potential as lj

11

12

>>> pair_potential(x=[[0.0,0.0,0.0]], potential=lj)

13

0.0

14

15

>>> pair_potential(x=[[0.0,0.0,0.0],[0.0,0.0,1.0]], potential=None)

16

0.0

17

18

>>> pair_potential(x=[[0.0,0.0,0.0],[0.0,0.0,1.0]], potential=lj)

19

0.0

20

21

>>> pair_potential(x=[[0.0,0.0],[0.0,1.0],[0.0,2.0]],

22

... potential=lj,

23

... args=(1.0, 1.0)) # 2D configuration

24

-0.0615234375

25

26

:param x: positions of the particles

27

:type x: list of lists

28

:param potential: the pairwise potential function.

29

must be of the form f(x, *args).

30

:type potential: callable

31

:param args: arguments to pass to the function

32

33

:return: energy of the configuration

34

:rtype: float

35

"""

36

37

if potential is None:

38

return 0.0

39

40

energy = 0.0

41

42

for x1, x2 in combinations(x, 2): # for statement

43

r_squared = 0.0

44

for c1, c2 in zip(x1, x2): # for statement

45

r_squared += (c1 - c2) * (c1 - c2)

46

r = sqrt(r_squared) # sqrt imported from math module

47

energy += potential(r, *args)

48

49

return energy

ljpotential.py contains a function that evaluates the Lennard-Jones potential between two particles at some distance r . The Lennard-Jones potential is given by the expression:

V (r) = 4

σ 12 σ 6

−

r

r

where σ is the diameter of the particles and is the depth of the potential well. It ﬁnds use as a simple model for pair interactions in noble gases and simple ﬂuids, among other applications. We are already able to fully understand the contents of ljpotential.py with the Python from §1.2.
pairpotential.py contains a function that calculates the potential energy of a collection of particles that interact with potential potential . The energy of a collection of particles in which only pair-wise interactions occur is given by
Vtotal = V (rij )
i=j
where V is a pair-wise potential energy function, i and j are indices of particles, and rij is the distance between the particle centres of mass. The Python function pair_potential is designed to be agnostic of the speciﬁc nature of the interaction, and so can be used in many situations.

1.3. BASICS II

23

The idea of separating out functionality in this way, making code modular, is very important regardless of the language used, and can speed up writing, reading, changing, and debugging code dramatically.
1.3.1 Lists
The documentation string of pair_potential identiﬁes the variable x , the positions of the particles, as a list of lists. What is a list of lists? A list whose elements are lists, of course.
In many situations, we want to represent collections of objects in our code. Two examples are the coordinates of a physical system, and a database of customers and their details. We are interested not only in representing the basic elements themselves (the x-coordinate of a particle, which might be represented with a ﬂoat, or the name of an individual customer, which might be represented with a string), but also the relationships between them (which x-coordinate is paired with which y-coordinate, -
which name goes with which phone number). In Python, the job of representing these relationships is done by collections, or container datatypes.
Diﬀerent containers are optimised for diﬀerent tasks. We will not go into any low-level detail about how containers work; we will just cover the basics of how the built-in containers are applied. The curious can read more about other Python containers here.
The aforementioned list is a built-in container datatype. A list may contain any number of elements, and has a well-deﬁned order. Let us see some lists in action.
>>> [] # the empty list [] >>> my_list = [5] >>> my_list [5] >>> my_list.append(8) >>> my_list [5, 8] >>> my_list + my_list # sensible arithmetic operations are defined [5, 8, 5, 8] >>> my_list * 3 # such as multiplication by integers [5, 8, 5, 8, 5, 8] >>> [5] + [[5]] + [[[5]]] # lists can contain other lists, and elements may be of any type [5, [5], [[5]]]
Individual elements of lists may be accessed according to their index (their position in the list) via the indexing operator, [] ,
>>> my_list = [[1, 2], [3, 4], [5, 6]] >>> my_list[0] [1, 2] >>> my_list[1][1] 4 >>> my_list[0::2] [[1, 2], [5, 6]] >>> my_list[::-1] [[5, 6], [3, 4], [1, 2]] >>> my_list[0] = 12 # assigning to a element changes the list >>> my_list [12, [3, 4], [5, 6]]
The expression my_list[a:b:c] evaluates to a list containing every cth element of my_list starting with the ath element proceeding up to, but not including, the bth element. If c is negative, the order is reversed. If a or b is negative, then the index is with respect to the last element, working backwards, i.e., l[-1] evaluates to the last element of l , l[-2] the second to last, etc.
>>> numbers = list(range(12)) >>> numbers [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

24

CHAPTER 1. PROGRAMMING WITH PYTHON

>>> numbers[1:9:2] [1, 3, 5, 7]
The length of a list (as well as any other object with a __len__ method—a sized object) can be interrogated with the len function,
>>> l = [0, 1, 2] >>> len(l) 3 >>> l.append(3) >>> len(l) 4

1.3.2 The for statement (deﬁnite iteration)
Previously we saw the while statement, which executes a block of code until some condition is met. The for statement is used when we wish the execute a block of code a ﬁxed number of times, for example, once for every atom in a molecule. The for statement has the form

1 for target_list in expression_list:

2

suite

3 else:

4

suite_b

5 other code

Taken from the Python reference,
The expression list is evaluated once; it should yield an iterable object. An iterator is created for the result of the expression_list . The suite is then executed once for each item provided by the iterator, in the order returned by the iterator. Each item in turn is assigned to the target list using the standard rules for assignments (see Assignment statements), and then the suite is executed. When the items are exhausted (which is immediately when the sequence is empty or an iterator raises a -
StopIteration exception), the suite in the else clause, if present, is executed, and the loop terminates.
Consider the following simple example of taking the arithmetic mean of the elements of a list,

1 l = [0, 1, 2, 3, 4]

2 average = 0

3 for x in l:

4

average += x

5 else:

6

average /= len(l)

When execution reaches line 3, an iterable is created from the list l . The ﬁrst value in l , 0 , is assigned to the name x . x is then added to average on line 4, which now equals 0 . We have reached the end of the suite, so we return to line 3, where the next value in l, 1 , is assigned to the name x . The suite is executed a total of 5 times, once for every element of l . Finally, the suite associated with the else branch is executed. The len function on line 6 takes an iterable as its argument-
, and returns the number of elements in the iterable (here, 5).

i
Info: average += x and average /= len(l) are augmented assignment statements. They can be written as the ordinary assigment statements average = average + x and average = average / len(l) , and achieve the same eﬀect, but are somewhat faster because:
a. they evaluate the target one fewer time (here, the target is average );
b. where possible, they directly modify the object to which the target was originally assigned, rather than creating a new object and assigning it to the target.

1.3. BASICS II

25

Using the len function, the above for loop could be re-written as a while loop,

1 l = [0, 1, 2, 3, 4]

2 average = 0

3 n = len(n)

4 i=0

5 while i < n:

6

average += l[i]

7

i += 1

8 average /= n

Of course, the whole exercise could be avoided by using the built-in function sum .

1.3.3 Functions of lists

zip

The zip function allows us to iterate over the elements of two or more lists, pairing elements with the same index.

>>> for a, b, c in zip([0, 1, 2], [3, 4, 5], [6, 7, 8]):

...

print(a, b, c)

...

036

147

258

On line 44 of pairpotential.py, zip is used to iterate over the elements of x1 and x2 , the coordinates of a pair of distinct particles,

44

for c1, c2 in zip(x1, x2): # for statement

45

r_squared += (c1 - c2) * (c1 - c2)

Notice that the dimension of the system is not explicitly given; the lists x1 and x2 could contain 2, 3, or more ﬂoat coordinates. This code is designed to work for a system of any dimension. In the threedimensional case, the suite of the for loop starting at line 44 is executed three times, one for each pair of x-, y-, and z-coordinates.

i
Info: Zippers beware! The iterable returned from by zip will yield as many items as there are in the
shortest argument passed to it,

>>> for a, b, c in zip([0, 1, 2], [3, 4], [6]):

...

print(a, b, c)

...

036

In the above example, the shortest argument, [6] , has length one, so the iterable produced yields only one item.

itertools.combinations
The combinations function in the itertools module allows us to iterate over non-identical n-tuples of elements in the same list. combinations takes two arguments: a list (or any other iterable), and an integer that speciﬁes whether pairs, triples, ..., n-tuples of elements should be returned.

>>> for a,b in combinations([0,1,2], 2):

...

print(a,b)

...

01

26

CHAPTER 1. PROGRAMMING WITH PYTHON

02

12

>>> for a,b,c in combinations([0,1,2,3], 3):

...

print(a,b,c)

...

012

013

023

123

If tuples including repeated elements are required, the product function, also in the itertools module, can be used. product(iterable, repeat=n) eﬀectively implements an n-level nested loop; i.e.,

1 for x, y, z in product(l, repeat=3):

2

print(x, y, z)

has the same eﬀect as

1 for x in l:

2

for y in l:

3

for z in l:

4

print(x, y, z)

The approaches are equally computationally eﬃcient, but the ﬁrst example is much easier to read. On line 42 of pairpotential.py, combinations is used to iterate over every pair of non-identical particles,

42

for x1, x2 in combinations(x, 2): # for statement

43

r_squared = 0.0

44

for c1, c2 in zip(x1, x2): # for statement

45

r_squared += (c1 - c2) * (c1 - c2)

46

r = sqrt(r_squared) # sqrt imported from math module

47

energy += potential(r, *args)

If the system contains n particles, the suite of the

for

loop beginning at line 42 is executed

n 2

times.

1.3.4 Functions and their arguments
What now remains is to explain the function call to potential on line 47. From the perspective of the pair_potential function, it doesn’t matter how many arguments the callable potential might take, or what their names may be—all that matters is that the arguments are passed to potential , and in the correct order.
The arguments are passed to pair_potential as a tuple, which is unpacked in the function call to potential with the * operator. The call
1 pair_potential(x=[[0.0,0.0],[0.0,1.0],[0.0,2.0]], potential=lj, args=(1.0, 1.0))
results in the call
1 energy += potential(r, 1.0, 1.0)
This syntax allows the function pair_potential the ﬂexibility to work with more than one kind of function signature (here, potential functions with diﬀerent numbers of arguments).

1.3. BASICS II

27

i
Info: Like a list , a tuple is a container type. Unlike lists, tuples are immutable—once a tuple object has been created, it cannot be modiﬁed. We can use len to ﬁnd the length of a tuple, and [] to access the elements of a tuple, but, since they are immutable, assigning to an element raises an exception, and the append method is not deﬁned.
>>> () # empty tuple () >>> (1,) # single-element tuple---notice the terminal comma, ","! (1,) >>> (1) # this is an integer! 1 >>> (1, 2) # two-element tuple---no terminal comma necessary (1, 2) >>> tup = (1, 2, 3) >>> tup (1, 2, 3) >>> len(tup) # length 3 >>> tup[0] # indexing 1 >>> tup[0::2] # slicing (1, 3) >>> tup[0] = 4 # assigning---not supported Traceback (most recent call last):
File "<stdin>", line 1, in <module> TypeError: 'tuple' object does not support item assignment >>> tup.append(3) # appending---not supported Traceback (most recent call last):
File "<stdin>", line 1, in <module> AttributeError: 'tuple' object has no attribute 'append' >>> tup[0]
In some situations, a list is the most appropriate container type; in others, a tuple is preferred. For example, when it is necessary to modify the contents of the container, a list is more useful than a tuple. When it is necessary that the elements of the container be read-only, a list can be used, but a tuple is more suited to the problem, as an error is raised when writing to an element is attempted.

Question 3 Prime Numbers
Using your new-found knowledge of container datatypes, write a function that returns a list of its argument’s prime factors, e.g.,
>>> prime_factors(1) [] >>> prime_factors(2) [2] >>> prime_factors(60) [2, 3, 5]
Include a documentation string with tests and make sure your code passes its own tests! Optional: write a function is_prime , that returns True if its argument is prime, and False oth-
erwise. Make your function as eﬃcient as possible.

28

CHAPTER 1. PROGRAMMING WITH PYTHON

1.4 Scientiﬁc programming
By the end of this section, you should be able to understand and write python code that looks like pairpotentialoneloop and pairpotentialnoloop, and have a vague understanding of what code like timingpairpotential is supposed to do (these codes are available for download on the SEP online system).
In pairpotential.py, we saw a function pair_potential that calculated the pairwise-additive energy of a system of particles interacting via an unspeciﬁed potential function. This calculation was done via a pair of nested loops: the outer loop to iterate over particle pairs; the inner loop to iterate over particle coordinates.
In pairpotentialoneloop there is a function pair_potential_one_loop that achieves the same eﬀect, but replaces the inner loop with a vectorised calculation using the NumPy package. pairpotentialnoloop contains a similar function with both loops replaced with vectorised code, the result being signiﬁcantly faster than our original pair_potential implementation.
To demonstrate this diﬀerence, the ﬁle timingpairpotential.py contains functions to compare the speed of the three implementations as a function of particle number, and plots the results using the Matplotlib package.
1.4.1 NumPy
NumPy, short for Numerical Python, is a python package for scientiﬁc programming. It provides a framework for eﬃciently dealing with large amounts of data, and implements many algorithms from linear algebra, Fourier transforms, and eﬃcient random number generations, to name just three ﬁelds. The key component of the NumPy module is the n-dimensional array, or ndarray.
The ndarray, like the list, is a container type, but with several important diﬀerences. Ndarrays can be initialised with the array function, which takes a list as its argument,
>>> import numpy as np >>> a = np.array([0, 1, 2]) >>> type(a) <class 'numpy.ndarray'> >>> a array([0, 1, 2])
The list can contain any numeric type, and the list elements can be cast to another type with the dtype keyword argument,
>>> a = np.array([0.0, 1.0, 2.0]) >>> a array([ 0., 1., 2.]) >>> a = np.array([0, 1, 2], dtype=float) >>> a array([ 0., 1., 2.]) >>> a = np.array([0, 1, 2], dtype=complex) >>> a array([ 0.+0.j, 1.+0.j, 2.+0.j])
N-dimensional ndarrays can be initialised by passing a list of lists (of lists. . . etc) as the argument,
>>> a = np.array([[0, 1], [2, 3], [4, 5]]) >>> a array([[0, 1],
[2, 3], [4, 5]]) >>> a = np.array([[[0, 1], [2, 3], [4, 5]]]) >>> a array([[[0, 1],
[2, 3], [4, 5]]])

1.4. SCIENTIFIC PROGRAMMING

29

The dimensions of the ndarray are stored in the shape attribute, and the total number of elements can be accessed via the size attribute. The shape can be changed via the reshape method,
>>> a = np.array([[[0, 1], [2, 3], [4, 5]]]) >>> a array([[[0, 1],
[2, 3], [4, 5]]]) >>> a.shape (1, 3, 2) >>> a.size 6 >>> b = a.reshape(3, 1, 2) >>> b array([[[0, 1]],

[[2, 3]],

[[4, 5]]]) >>> b.shape (3, 1, 2) >>> c = a.reshape(-1) >>> c array([0, 1, 2, 3, 4, 5]) >>> c.shape

Using the len function on arrays will return the left-most element of the shape tuple,

>>> a = np.array([[[0, 1], [2, 3], [4, 5]]]) >>> len(a) == a.shape[0] True

While lists can contain objects of any type, ndarrays are homogeneous. If the elements of the argument list can be cast to the same dtype, an ndarray with that dtype will be created,

>>> a = np.array([1, 2, "string"]) >>> a array(['1', '2', 'string'],
dtype='<U21')

# array of strings!

Numeric-type ndarrays are contiguous, i.e., have a rectangular shape. If a list of lists of diﬀerent lengths is passed as the argument, an object-type ndarray is created,

>>> a = np.array([[[0,0],[1,1]],[[0,1,2,3],[0,1,2,3]]]) >>> a array([[[0, 0], [1, 1]],
[[0, 1, 2, 3], [0, 1, 2, 3]]], dtype=object) >>> a.shape (2, 2)

If the lists have diﬀerent depths (e.g. a list and a list of lists), an exception is raised,

>>> a = np.array([1, [2], [[3]]]) Traceback (most recent call last):
File "<stdin>", line 1, in <module> ValueError: setting an array element with a sequence.

Ndarrays ﬁlled with zeros or ones can by constructed with the zeros and ones functions, as well as the zeros_like and ones_like functions. These functions are useful for initialising arrays. The former take the shape of the array as the ﬁrst argument, and an optional dtype; the latter take another array whose shape is to be copied, along with an optional dtype,

30

CHAPTER 1. PROGRAMMING WITH PYTHON

>>> a array([ True, True, True, True, True], dtype=bool) >>> b = np.zeros_like(a, dtype=float) >>> b array([ 0., 0., 0., 0., 0.])
ndarrays support the same kind of indexing as lists, as well as fancy indexing , which allows a list or another ndarray to be passed as the argument to the indexing operator,
>>> a = np.array([0, 1, 2, 3, 4, 5]) >>> a array([0, 1, 2, 3, 4, 5]) >>> a[0::2] array([0, 2, 4]) >>> a[[0, 3, 4]] array([0, 3, 4]) >>> a[np.array([[0, 0], [1, 1], [2, 2], [3, 3])] array([[0, 0],
[1, 1], [2, 2], [3, 3]])
Normal indexing returns a view of an array; changes to a view of an array are also applied to the array itself,
>>> a = np.array([0, 1, 2, 3, 4, 5]) >>> b = a[0::2] >>> b array([0, 2, 4]) >>> b[0] = 6 >>> a array([6, 1, 2, 3, 4, 5])
Fancy indexing creates a copy of an array; a new array object,
>>> a = np.array([0, 1, 2, 3, 4, 5]) >>> b = a[[0,2,4]] >>> b[0] = 6 >>> a array([0, 1, 2, 3, 4, 5])
Be careful to take notice whether you are working with views or copies.
i
Tip If an array view is passed to a function, and the function changes the view, the orignal array will also be changed! This is also true of lists, and a source of consternation for beginners and experts alike. If a function changes its arguments rather than creating a new object, it is said to change the argument in place. A pure function does not change its arguments; impure functions are not allowed in programs written in purely functional languages. Python is very liberal in this regard—it is-
 up to you to make sure that the user knows whether a function modiﬁes its arguments in place, by writing clear documentation.
Operations
The arithmetic and comparison operators work on an element-wise basis,
>>> a = np.array([0, 1, 2, 3, 4, 5]) >>> a * 5 array([ 0, 5, 10, 15, 20, 25]) >>> b = np.array([5, 4, 3, 2, 1, 0])

1.4. SCIENTIFIC PROGRAMMING

31

>>> a * b array([0, 4, 6, 6, 4, 0]) >>> a ** b array([0, 1, 8, 9, 4, 1]) >>> a < b array([ True, True, True, False, False, False], dtype=bool)
The boolean array that results from a comparison operation can be used as a ﬁlter,
>>> a = np.array([0, 1, 2, 3, 4, 5]) >>> mask = a < 4 >>> a[mask] array([0, 1, 2, 3])
Since python3.5, matrix multiplication can be acheived with the @ operator,
>>> a = np.array([[1, 2], [3, 4]]) >>> a @ a array([[ 7, 10],
[15, 22]]) >>> b = np.array([0, 1, 2]) >>> b @ b # dot product 5
For arithmetic and comparison operators to succeed, the two arrays must have the same shape; otherwise, a ValueError is raised. Dummy dimensions can be added by passing None or np.newaxis to the indexing operator,
>>> a = np.array([0, 1, 2]) >>> b = np.array([[0, 1, 2]]) >>> a @ b Traceback (most recent call last):
File "<stdin>", line 1, in <module> ValueError: shapes (3,) and (1,3) not aligned: 3 (dim 0) != 1 (dim 0) >>> a[:, np.newaxis] @ b array([[0, 0, 0],
[0, 1, 2], [0, 2, 4]]) >>> a[:, np.newaxis] @ a[np.newaxis, :] # outer product array([[0, 0, 0], [0, 1, 2], [0, 2, 4]]) >>> a[np.newaxis, :] @ a[:, np.newaxis] # inner product array([[5]])

Functions
NumPy provides many useful functions for operating on ndarrays. There NumPy versions of many built-in functions and functions in built-in modules,

>>> import numpy as np

>>> a = np.array([0,1,-2])

>>> np.abs(a)

array([0, 1, 2])

>>> np.sum(a)

3

>>> np.cos(a)

array([ 1.

, 0.54030231, -0.41614684])

as well as other convenient deﬁnitions,

32

CHAPTER 1. PROGRAMMING WITH PYTHON

>>> np.std(a) # standard deviation of a sample 0.816496580927726 >>> np.linalg.norm(a) # norm of a vector 2.23606797749979
When applying reduction operations ( np.sum , np.linalg.norm , etc), an axis can be speciﬁed,
>>> b = np.arange(12).reshape(3,4) >>> b array([[ 0, 1, 2, 3],
[ 4, 5, 6, 7], [ 8, 9, 10, 11]]) >>> np.sum(b, axis=0) array([12, 15, 18, 21]) >>> np.linalg.norm(b, axis=1) array([ 3.74165739, 11.22497216, 19.13112647])
Attempting to apply a function from the math module to an ndarray will usually result in a TypeError ,
>>> from math import cos >>> cos(b) Traceback (most recent call last):
File "<stdin>", line 1, in <module> TypeError: only size-1 arrays can be converted to Python scalars

Vectorisation
The NumPy operations and functions we have seen so far are vectorised. Let’s say we want to calculate the cosine of a thousand numbers in an ndarray. We could iterate over this array in a for loop, calculating the cosine of each number in sequence, and storing it somewhere useful. However, since the cosine of the ﬁrst number doesn’t depend on the cosine of the second, third ... or thousandth number, we could, in principle, calculate them all at the same time! That’s what happens when we call the v-
ectorised np.cos function. Independent cosines are computed simultaneously, with the number of concurrent calculations depending on the hardware. The result, for medium to large arrays, is a signiﬁcant reduction in compute time. For small arrays, the diﬀerence might be unnoticeable, and for very small arrays, the vectorised calculation may in fact be slower.
Now we return to our pairpotential*py series, to see how vectorisation can help us to write eﬃcient code. In pairpotential.py, the function pair_potential contains a two-level nested loop,

42

for x1, x2 in combinations(x, 2): # for statement

43

r_squared = 0.0

44

for c1, c2 in zip(x1, x2): # for statement

45

r_squared += (c1 - c2) * (c1 - c2)

46

r = sqrt(r_squared) # sqrt imported from math module

47

energy += potential(r, *args)

Lines 44–46 accumulate the squared distance between two particles in a loop, considering each dimension sequentially, and ﬁnd the distance as its square root. The function pair_potential_one_loop in pairpotenialoneloop instead contains a call to np.linalg.norm , calculating the interparticle distance directly from the particle coordinate arrays,

42

for x1, x2 in combinations(x, 2): # for statement

43

r = np.linalg.norm(x1-x2)

44

energy += potential(r, *args)

The remaining loop can be removed by noticing the following: we want to express the entire distance calculation in a series of vector operations. We seek an expression of the form,

rij = rj − ri

1.4. SCIENTIFIC PROGRAMMING

33

where the rows of ri and rj put together each constitute a unique interparticle vector. We achieve this through fancy indexing. The indices we want are the row and column indices of the
upper triangle of an N ×N matrix, without the diagonal indices (self interactions), where N is the number of particles (the ﬁrst element of x.shape ).
In pairpotentialnoloop.py we obtain these indices using the NumPy function triu_indices , which returns two arrays containing the relevant row and column indices,

39

n, _ = x.shape

40

left, right = np.triu_indices(n, 1)

41

r = np.linalg.norm(x[left] - x[right], axis=1)

42

energy = np.sum(potential(r, *args))

We then compute the distances with np.linalg.norm , reducing over the last axis.
This description may be somewhat opaque, so let’s look at an example. If we have three particles, we need to calculate three unique distances, between particles one and two, one and three, and two and three. So, in ri we want the rows to be the coordinates of particles (1, 1, 2). Likewise, in ri we want the rows to be the coordinates of particles (2, 3, 3). The call triu_indices(3, k=1) provides exactly that,

import numpy as np >>> coordinates = np.array(["one", "two", "three"]) >>> left_indices, right_indices = np.triu_indices(3, k=1) >>> left_indices array([0, 0, 1]) >>> right_indices array([1, 2, 2]) >>> coordinates[left_indices] array(['one', 'one', 'two'],
dtype='<U5') >>> coordinates[right_indices] array(['two', 'three', 'three'],
dtype='<U5')

Truth
Do we need to change ljpotential.py to take advantage of vectorisation? A little. Since there are no loops in lennard_jones_potential , and arithmetic and comparison operators are
already vectorised, we don’t need to worry about the implementation of the energy calculation. If the input to lennard_jones_potential is a float , the return value is a float ; if the input is an ndarray, the return value is also an ndarray (which is why we call np.sum in pair_potential_no_loop ).
There are two small changes that need to be made. We need to modify our doctests to use arrays,

28

>>> import numpy as np

29

>>> r = np.array([1.0,2.0,3.0])

30

>>> lennard_jones_potential(r) #doctest: +ELLIPSIS

31

array([ 0.

, -0.061523..., -0.005479...])

and to make some changes to our exceptions. Truth testing is ambiguous for arrays with more than one element. That is to say, an ndarray with
more than one element is neither true nor false. As such, the statement if r < 0.0: in the original lennard_jones_potential will raise a ValueError . To test if any, or all elementsof an array are “true”, we
can use the any and all functions. any(a) returns True if at least one element of a is a true value, and
False otherwise; all(a) returns True if all elements of a are true values, and False otherwise. In our case, we want to check whether any element of r is less than zero, and whether any element
of sigma is less than or equal to zero, so we use the np.any function,

44

if np.any(r < 0.0):

45

raise ValueError("distance between particles is negative")

34

CHAPTER 1. PROGRAMMING WITH PYTHON

46

elif np.any(sigma <= 0.0):

47

raise ValueError("particle diameter is not strictly positive")

In addition to np.any and np.all , the np.where function can be used to eﬀect element-wise if...else ,

>>> a = np.array([0, 1, 2, 3, 4, 5]) >>> np.where(a > 3, 3, a) array([ 0, 1, 2, 3, 3, 3])

1.4.2 Matplotlib
Matplotlib is a python package that provides functions to draw ﬁgures. You can get started with Matplotlib very quickly,

>>> import matplotlib.pyplot as plt >>> import numpy as np >>> a = np.linspace(0,1,100) >>> plt.plot(a, a*a) >>> plt.show()

Here, the function plt.plot is given two positional arguments, which are arrays of equal size. This function creates the plot object, but plt.show must be called to display the plot. If you type the above commands into the console, you should get a plot of y = x2 for x ∈ [0, 1].
To have more control over your ﬁgures, it is best to instantiate a figure object and accompanying axis objects, as in timingpairpotential.py,

6 def plot_pair_potential_timings(functions, arguments, timings_array):

7

fig, (ax1, ax2) = plt.subplots(nrows=2, ncols=1)

where we have created a ﬁgure containing two sets of axes, arranged into two rows and one column. Axis labels and other properties of axes can be set via a variety of .set_* methods of axes objects, and
lines can be labelled by passing a label keyword argument to any of the many plotting functions (if you add labels, don’t forget to call ax.legend ,

12

ax1.set_xlabel(r'''number of particles''')

13

ax1.set_ylabel(r'''time / s''')

14

ax1.set_ylabel(r'''time / s''')

15

ax1.set_yscale("log")

16

ax1.legend()

17

18

ax2.plot(arguments, timings_array[-1]/timings_array[0])

19

ax2.set_xlabel(r'''number of particles''')

20

ax2.set_ylabel(r'''speed-up''')

Diﬀerent line styles can be included in call to the plot function (see the Matplotlib documentation for details).
To save a ﬁgure rather than plot it to the screen, the plt.save_fig function is used, with the ﬁle name
as its ﬁrst argument. Running timingpairpotential will compare the execution speed of our three pair potential functions,
pairpotential , pairpotentialoneloop , and minpypairpotentialnoloop for diﬀerent numbers of particles,
and save a ﬁgure to pair_potential_timings.pdf. Give it a try! My result is shown ﬁgure 1.1, and indicates that, on my desktop, the vectorised code
we saw in this section executes about 50 times faster than that from the last section when the number of particles is larger than 50.

1.4. SCIENTIFIC PROGRAMMING

35

time / s

100 10−1 10−2 10−3 10−4
0

pair potential no loop pair potential one loop pair potential

200

400

600

800

1000

number of particles

speed-up

50 40 30 20 10
0

200

400

600

800

1000

number of particles

Figure 1.1: Upper panel: A comparison of the execution times of three implementations of the pair potential function mentioned in the text. Lower panel: relative execution time of the two loop implementation compared to the vectorised implementation.

i
Info: The __main__ block of timingpairpotential.py is executed when timingpairpotential.py is the main program; if the main program imports something from timingpairpotential.py, the __main__ block will be ignored.

Question 4 Molecular Dynamics Prep.
1. Forces. Write a function that calculates the gradient of the energy of a Lennard-Jones system. First write a naive loop to make sure you get the right result, then implement a vectorised version.

36

CHAPTER 1. PROGRAMMING WITH PYTHON

Part II
APPLICATIONS
37

Appendix A
More Programming with Python
Here we introduce some aspects of the python language that we couldn’t ﬁt into the main programming course.
A.1 Strings
The string data type is used for supplying input to a program, displaying the progress or state of a computation, and conveying error messages and warnings, among other things. Strings are collections of letters, numbers, and other characters, which are sized (they have a length), iterable (the elements are the characters), and subscriptable (they can be indexed like lists). With some exceptions, any combination of ASCII characters put inside single quotes ' or double quotes " is a string literal.-
 The string printable in the string module contains all of the ASCII characters that are considered printable. In particular, tabs and newlines are represented by \t and \n .
>>> s = 'I am a string' >>> t = "I'm a string, too" # notice the ' inside the "..." >>> s, t ('I am a string', 'I'm a string, too') >>> >>> from string import printable >>> len(printable) 100 >>> printable[:50] '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMN' >>> printable[50:] 'OPQRSTUVWXYZ!"#%$&\'()*+,-./:;<=>?@[\\]^_ {|}~ \t\n\r\x0b\x0c' >>>
When we try to print an object, the __str__ method of that object (or __repr__ method, if a __str__ method is not deﬁned) is called to return a string object. The same thing happens when we pass the object to the str function,
>>> x = 45 >>> x 45 >>> s_x = str(x) >>> s_x '45' >>> type(s_x) <class 'str'> >>>
We often want to print to the screen some information about the state of our program; the values assigned to names, the sum of this, and the standard deviation of that. The simplest way to this is to pass a comma-separated list of strings and names to the print function,
39

40

APPENDIX A. MORE PROGRAMMING WITH PYTHON

>>> total = 0

>>> for counter in range(10):

...

total += counter

...

>>> print("the total is", total, "and the counter is", counter)

the total is 45 and the counter is 9

>>>

To get more control over the appearance of the output, we can use string formatting syntax. In Python, there are three (!) string formatting syntaxes. The ﬁrst, and oldest, is %-formatting. This syntax will be familiar to users of C, awk, and many other languages. It is not recommended. The other two we will now discuss in more detail.

A.1.1 f-Strings
f-Strings, also called formatted string literals, are a new in Python 3.6. The syntax is the same as for normal strings, except that the ﬁrst ' or " is preceded by the letter f (i.e., f' or f" , and that code appearing between curly braces {...} is interpreted as an expression,

>>> f'the total is {total} and the counter is {counter}' 'the total is 45 and the counter is 9' >>> f'{4} times {5} is {4 * 5}' '4 times 5 is 20' >>> f'half the total is {total / 2}' 'half the total is 22.5' >>>

Along with the expression itself we can pass a format speciﬁer to give further control over how the result is printed, e.g., choosing between ﬁxed point and exponent notation,

>>> from math import pi

>>> pi

3.141592653589793

>>> f'pi = {pi:10.3f}' # floating point format, 10 chars, 3 chars after the decimal

'pi =

3.142'

>>> f'pi = {pi:10.3e}' # scientific notation, 10 chars, 3 chars after the decimal

'pi = 3.142e+00'

>>>

See the documentation for more details on the format speciﬁcation mini-language.

A.1.2 str.format()
Formatting via the format method uses the same format speciﬁcation mini-language, but substituted expressions are supplied to the format method of the string, and the initial f is dropped. Substitutions can be made according to the position of an expression in the expression list, or by keyword, and can exploit list or dictionary unpacking,
>>> s = 'the total is {} and the counter is {}' >>> s.format(45, 9) 'the total is 45 and the counter is 9' >>> s = 'the total is {0} and the counter is {1}' # by index >>> s.format(45, 9) 'the total is 45 and the counter is 9' >>> s = '{0}{1}{2}{1}{2}{1}' # by index >>> s.format('b','a','n') 'banana' >>> s.format(*'ban') # with list unpacking 'banana' >>> s = 'the total is {total} and the counter is {counter}' # by keyword

A.2. SETS

41

>>> s.format(total=45, counter=9) 'the total is 45 and the counter is 9' >>> s = 'the total is {total:10.5f} and the counter is {counter}' >>> s.format(total=45, counter=9) 'the total is 45.00000 and the counter is 9' >>>

# with format specifier

Which of these methods is best depends on the situation. Personally, I prefer to use f-strings for short strings, to enhance code readability. For longer strings, or when unpacking is useful, I prefer str.format . For example, see the following code for writing an ndarray of coordinates in the standard xyz format:

1 def write_xyz(coordinates):

2

"""

3

4

Writes the coordinates in array coordinates to a string in the xyz format.

5

6

https://en.wikipedia.org/wiki/XYZ_file_format

7

8

:param coordinates: coordinates of the system

9

:type coordinates: ndarray, shape (particles, dimensions)

10

:return: xyz string

11

:rtype: str

12

"""

13

particles, dimensions = coordinates.shape

14

header = f'{particles}\n\n' # short f-string

15

particle_line = "O{:20.10f}{:20.10f}{:20.10f}\n" # my particles are usually all the same

16

xyz = header + particles * particle_line # string arithmetic

17

18

return xyz.format(*coordinates.flatten()) # unpack coordinates into format method call

Strings implement a whole host of methods besides format for convenient string manipulation, analysis, localisation... before you implement a string function, check here to make sure you aren’t reinventing the wheel.
Of course, to become a true master, a king of strings (or queen of chars), you must understand regular expressions. In Python, regular expressions are implemented in the re module.

A.2 Sets
Sets are sized, but unordered, collections of unique objects. They can be created by passing a sequence of hashable objects (read: immutable objects with a __hash__ method) to the set function. New elements are inserted with the add method (not append —“append” means “add to the end;” since sets have no well-deﬁned order, we cannot reliably add an object to the end of set). Sets support the same operations as other sequences, as well as set operations you will be familiar with from mathematics.
>>> set() # the empty set set() >>> set([1, 2, 3, 4, 3, 2, 1]) # a set initialised from a list {1, 2, 3, 4} >>> a = set([1,2,3,4]); b = set([3, 4, 5, 6]) >>> a | b # union {1, 2, 3, 4, 5, 6} >>> a & b # intersection {3, 4} >>> (a - b), (b - a) # difference, or complement ({1, 2}, {5, 6}) >>> a ^ b # symmetric difference {1, 2, 5, 6} >>>

42

APPENDIX A. MORE PROGRAMMING WITH PYTHON

Elements of a sets are guaranteed to be unique. Checking whether an object is in a set is an O (1) operation (the time taken is independent of the size of the set) compared with O (N ) for a list (the time taken is linear in the length of the list. Set (and list) membership is tested via the in operator. There are also methods for checking for subsets.
>>> a, b, c = 1, set([1, 2]), set([1, 2, 3]) >>> a in b True >>> b.issubset(c) True >>> c.issuperset(b) True >>> b.isdisjoint(c) False >>>
A.3 Dictionaries
Dictionaries are mapping objects that map hashable values to arbitrary objects. They consist of key:value pairs. A dictionary indexed by a key returns the corresponding value; a new value can be bound to a key by assigning the value to the dictionary indexed by the key. The keys are unique, but many keys may be associated with the same value.
>>> d = dict([("a", 1), ("b", 2), ("c", 3)]) # dict function >>> d = {"a":1, "b":2, "c":3} # dict literal >>> d.keys() dict_keys(['a', 'b', 'c']) >>> d.values() dict_values([1, 2, 3]) >>> d.items() dict_items([('a', 1), ('b', 2), ('c', 3)]) >>> "a" in d, 1 in d (True, False) >>> d["a"], d["b"], d["c"] (1, 2, 3) >>> d["e"] = 5 >>> d {'a': 1, 'b': 2, 'c': 3, 'e': 5} >>> d["a"] = 6 >>> d {'a': 6, 'b': 2, 'c': 3, 'e': 5} >>>
A.4 Comprehensions and Generators
Comprehensions provide a convenient way of abbreviating simple loops to create lists, dictionaries, sets, and generators. Readers familiar with set-builder notation will immediately recognise the value this syntax. For example, in set-builder notation, the set of integers less than n can be written as
x ∈ Z+|x < n
This can be implemented in Python as a while loop,
>>> numbers = [] >>> >>> n = 5 >>> numbers = []

A.4. COMPREHENSIONS AND GENERATORS

43

>>> i = 1

>>> while i < 5:

...

numbers.append(i)

...

i += 1

...

>>> numbers

[1, 2, 3, 4]

or, more succinctly, as a for loop using the range function,

>>> n = 5

>>> numbers = []

>>> for i in range(1, n+1):

...

numbers.append(i)

...

>>> numbers

[1, 2, 3, 4, 5]

With a list comprehension, this list can be created in one line,
>>> n = 5 >>> numbers = [i for i in range(1, n + 1)] >>> numbers [1, 2, 3, 4, 5]

To obtain a set instead of a list, simply replace the [...] with {...} to obtain a set comprehension,
>>> n = 5 >>> numbers = {i for i in range(1, n + 1)} >>> numbers {1, 2, 3, 4, 5}

For a generator, the [...] must be replaced with (...) , returning a generator expression,
>>> n = 5 >>> numbers = (i for i in range(1, n + 1)) >>> numbers <generator object <genexpr> at 0x????????????>

Generators are evaluated lazily—the elements are only created when needed. The next object in the generator expression can be returned by calling the next function with the generator expression as its argument. This can save memory compared to list comprehensions,

>>> n = 10**100

>>> list_of_numbers = [i for i in range(1, n + 1)] # MemoryError ! do not execute!

>>> generator_of_numbers = (i for i in range(1, n + 1)) # no problem

>>> next(generator_of_numbers)

1

>>> next(generator_of_numbers)

2

>>> for i in generator_of_numbers:

...

print(i)

...

3

4

# etc

Unlike lists obtained from list comprehensions, generators obtained from generator expressions (indeed, generators of all kinds) cannot be indexed,

44

APPENDIX A. MORE PROGRAMMING WITH PYTHON

>>> generator_of_numbers[0] Traceback (most recent call last):
File "<stdin>", line 1, in <module> TypeError: 'generator' object is not subscriptable

Comprehensions can be equipped with if clauses,

>>> [i for i in range(10) if i % 3 == 0] [0, 3, 6, 9] >>> [i for i in range(20) if i % 3 == 0 or i % 5 == 0] [0, 3, 5, 6, 9, 10, 12, 15, 18] >>>
More complex generators can are best deﬁned with deﬁnition statements,

>>> def positive_integers(): # yields every positive integer

...

i=0

...

while True:

...

i += 1

...

yield i

...

return

...

>>> genexp = positive_integers()

>>> next(genexp)

1

>>> next(genexp)

2

>>> next(genexp)

3

>>>

where the elements of the generator are return via yield statements. Generators deﬁned in this fashion are reusable and can be documented clearly. They can of course form part of comprehensions and generator expressions,

>>> square_integers = (i*i for i in positive_integers()) >>> next(square_integers) 1 >>> next(square_integers) 4 >>> next(square_integers) 9 >>>
Here is an example of a generator that can be used to generate (potentially inﬁnitely many) prime numbers:

1 from math import inf

2

3

4 def integers(minimum=1, maximum=inf):

5

"""

6

7

Yields integers n, minimum <= n <= maximum

8

9

:param minimum: the smallest integer

10

:type minimum: int

11

:param maximum: the largest integer (default math.inf, i.e. infinite generation)

12

:type maximum: int

13

:return: generator for integers

14

:rtype: Iterator[:class: int ]

A.4. COMPREHENSIONS AND GENERATORS

45

15

"""

16

i = minimum

17

while i <= maximum:

18

yield i

19

i += 1

20

21

22 def trial_division(maximum=inf):

23

"""

24

25

Generates primes, p up to maximum using trial division.

26

27

:param maximum: maximum possible value of p

28

:type maximum: int

29

:return: generator of primes

30

:rtype: Iterator[:class: int ]

31

"""

32

primes = [2, 3, 5]

33

for p in primes:

34

yield p

35

for i in integers(7, maximum):

36

maxp = int(i ** 0.5)

37

for p in primes:

38

if p > maxp:

39

primes.append(i)

40

yield i

41

break

42

elif i % p == 0:

43

break

46

APPENDIX A. MORE PROGRAMMING WITH PYTHON

Appendix B
Useful Modules for Scientiﬁc Programming
Here we introduce a few python modules that are widely used in scientiﬁc programming (descriptions taken in part or whole from their respective websites).
B.1 NumPy
Numerical Python. NumPy is a high-performance library upon which many other mathematical and scientiﬁc packages are based. Introduced in §1.4.1.
B.2 Matplotlib
Matplotlib is a Python 2D plotting library which produces publication quality ﬁgures ina variety of hardcopy formats and interactive environments across platforms. It tries to make easy things easy and hard things possible. Introduced in section §1.4.2.
B.3 SciPy (library)
Scientiﬁc Python. The SciPy library is one of the core packages that make up the SciPy stack. It provides many user-friendly and eﬃcient numerical routines such as routines for numerical integration and optimisation.
B.4 SymPy
Symbolic Python. SymPy is a Python library for symbolic mathematics. It aims to become a full-featured computer algebra system (CAS) while keeping the code as simple as possible in order to be comprehensible and easily extensible.
B.5 Pandas
The Python Data Analysis Library. pandas is an open source, BSD-licensed library providing easy-to-use, high-performance data structures and data analysis tools for the Python programming language.
B.6 NetworkX
NetworkX is a Python package for the creation, manipulation, and study of the structure, dynamics, and functions of complex networks.
47

48

APPENDIX B. USEFUL MODULES FOR SCIENTIFIC PROGRAMMING

B.7 scikit-learn
scikit-learn provides a platform for performing machine learning in python. It contains simple and eﬃcient tools for data mining and data analysis and is built on NumPy, SciPy, and matplotlib.
B.8 pele
Python energy landscape explorer. pele is a package of tools for calculations involving optimisation and exploration on energy landscapes. The core routines are broken into two parts: Basinhopping, for ﬁnding the global minimum of an energy landscape, and for building up databases of minima, and DoubleEndedConnect, for ﬁnding minimum energy paths on the energy landscape between two minima. Not widely-used, but a favourite of mine.—JDF

Appendix C
More NumPy

C.1 Vectorise?

Standard operators are vectorised. So are numpy functions. In general, others functions, such as math functions, are not vectorised. math functions will try to turn their array arguments into scalars. Only numpy arrays with shapes (n0, n1, ..., nk) where ni = 1 ∀i can be converted to scalars. If the argument cannot be converted to a Python scalar, a TypeError is raised.
Such functions can made to work with minpy arrays via the numpy.vectorize function. The result of numpy.vectorize is the same as writing a loop over the array values—it is a convenience function—there are no performance gains.

1 def fsquared(x, f):

2

"""

3

return f(x)**2

4

5

>>> import math, numpy

6

>>> from numpy import array

7

>>> x, xs, xss = 1, array([1]), array([0, 1, 2])

8

>>> fsquared(x, math.exp) #doctest: +ELLIPSIS

9

7.389056...

10

>>> fsquared(x, numpy.exp) #doctest: +ELLIPSIS

11

7.389056...

12

>>> fsquared(xs, math.exp) #doctest: +ELLIPSIS

13

7.389056...

14

>>> fsquared(xs, numpy.exp) #doctest: +ELLIPSIS

15

array([7.389056...])

16

>>> fsquared(xss, math.exp) #doctest: +ELLIPSIS

17

Traceback (most recent call last):

18

TypeError: only size-1 arrays can be converted to Python scalars

19

>>> fsquared(xss, numpy.vectorize(math.exp)) #doctest: +ELLIPSIS

20

array([ 1.

, 7.389056... , 54.598150...])

21

>>> fsquared(xss, numpy.exp) #doctest: +ELLIPSIS

22

array([ 1.

, 7.389056... , 54.598150...])

23

24

:param x: number(s)

25

:type x: numeric

26

:param f: function

27

:type f: callable

28

:return: f(x)**2

29

:rtype: type(x)

30

"""

31

32

return f(x)**2

49

50

APPENDIX C. MORE NUMPY

C.2 Einstein Summation

einsum is easily my favourite numpy function. Take the example of ﬁnding the interia tensor of a system of particles. r are the coordinates, i, j, . . . are particle indices, and α, β, . . . are dimensional indices. Then, the inertia tensor element Iαβ is given by:

Iαβ = eαγ eβδ Kγδ

(C.1)

where and eαβγ is a Levi-Civita symbol,

Kαβ = mirαirβi

(C.2)

exyz = eyzx = ezxy = 1 exzy = eyxz = ezyx = −1
eαβγ = 0 if any pair indices are identical

(C.3)

einsum allows us to implement these equations very easily; we simply provide a string listing the relevant indices along with the relevant arrays, and numpy takes care of the rest:

1 import numpy as np 2 from scipy.linalg import inv, sqrtm

3

4

5 def levi_civita(dtype=float):

6

from numpy import zeros

7

e_tensor = zeros([3, 3, 3], dtype=dtype)

8

for i in [(0, 1, 2), (1, 2, 0), (2, 0, 1)]:

9

e_tensor.itemset(i, 1)

10

e_tensor.itemset(i[::-1], -1)

11

e_tensor.setflags(write=False)

12

return e_tensor

13

14
15 LEVI_CIVITA = levi_civita(int)

16

17

18 def centre_of_mass(pos, masses):

19

return np.einsum('i, ia', masses, pos) / masses.sum()

20

21

22 def get_inertia_tensor(pos, masses):

23

pos0 = pos - centre_of_mass(pos, masses)

24

k = np.einsum('i, ia, ib -> ab', masses, pos0, pos0)

25

return np.einsum('age, bde, gd -> ab', LEVI_CIVITA, LEVI_CIVITA, k)

Neat, huh?

Bibliography
51

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:03.200Z
- **Text Length:** 81810 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
