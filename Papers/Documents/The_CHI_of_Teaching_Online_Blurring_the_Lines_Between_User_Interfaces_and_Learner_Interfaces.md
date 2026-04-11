# PDF Document: Joyner - 2018 - The CHI of Teaching Online Blurring the Lines Between User Interfaces and Learner Interfaces.pdf

**File Path:** Joyner - 2018 - The CHI of Teaching Online Blurring the Lines Between User Interfaces and Learner Interfaces.pdf

**Processed Date:** 2026-02-10T18:14:21.010Z

**File Size:** 4279.98 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2689

**Title:** The CHI of Teaching Online: Blurring the Lines Between User Interfaces and Learner Interfaces

**Collection:** Large Files

---

## Extracted Text Content

Chapter 5 ®
The CHI of Teaching Online: Blurring Grete
the Lines Between User Interfaces
and Learner Interfaces
David Joyner
Abstract The growing prevalence of online education has led to an increase in user
interface design for educational contexts, and especially an increase in user interfaces
that serve a central role in the learning process. While much of this is straightforward
user interface design, there are places where the line between interface design and
learning design blur in significant ways. In this analysis, we perform a case study on
a graduate-level human-computer interaction class delivered as part of an accredited
online program. To evaluate the class, we borrow design principles from the HCI
literature and examine how the class’s design implements usability principles like
equity, flexibility, and consistency. Through this, we illustrate the unique intersection
of interface design and learning design, with an emphasis on decisions that are not
clearly in one design area or the other. Finally, we provide a brief evaluation of the
class to endorse the class’s value for such an analysis.
5.1 Introduction
The rising role of technology in education has led to a blurring of the lines between
user interface design and learning design. The requirements of teachers, students,
administrators, and parents dictates elements of the design of user interfaces used in
educational contexts, but the design of those interfaces in turn fundamentally alters
the learning process. At times, specific design decisions or elements of instruction
cannot solely be attributed to learning design or user interface design.
This trend has existed for decades, from classic interfaces for correspondence
learning to more modern learning management systems, but it has taken on a new
significance with the advent of entirely online learning environments. While in some
ways these learning environments are a natural evolution of these prior interfaces,
the fundamental change that has occurred is the placement of the user interface as
D. Joyner (BX) College of Computing, Georgia Institute of Technology, 801 Atlantic Drive NW, 30084 Atlanta, GA, Georgia e-mail: david joyner@ gatech.edu
© Springer Nature Switzerland AG 2018 81 E. Kapros and M. Koutsombogera (eds.), Designing for the User Experience
in Learning Systems, Human-Computer Interaction Series,
https://doi.org/10.1007/978-3-319-94794-5_5
david .joyner@gatech.edu

82 D. Joyner
the core of the class experience. Rather than complementing traditional classroom
experiences with learning management systems or in-classroom technologies, these
online learning environments are the classroom.
As a result, for perhaps the first time, the classroom itself is a user interface.
This can be taken very literally, as with synchronous virtual classroom environments
(Koppelman and Vranken 2008; Martin et al. 2012; McBrien et al. 2009), or it can
be taken more figuratively, where user interfaces can serve the same functional roles
as traditional classrooms while eschewing the typical requirements of synchronicity
and telepresence (Hiltz and Wellman 1997; Joyner et al. 2016; Swan et al. 2000).
These latter classrooms are particularly notable because the interface changes the
interaction more fundamentally; whereas synchronous virtual classrooms may aim
to recreate in-person interactions as completely as possible, asynchronous learning
environments must use these computational interfaces to create the same effects
through different mechanisms. Significant work has been devoted to investigating
how these interfaces may replicate components of traditional learning environments,
such as peer-to-peer learning (Boud et al. 2014), peer assessment (Kulkarni et al.
2015), social presence (Tu and MclIsaac 2002), laboratory activities (O’ Malley et al.
2015), and academic integrity (Li et al. 2015; Northcutt et al. 2016).
This trend toward interfaces as classrooms brings new emphasis to the intersection
between learning design and user interface design. The two are highly compatible:
principles like rapid feedback are comparably valued in user interface design (Nielsen
1995) and learning design (Chandler 2003; Kulkarni et al. 2015). However, it is also
important to understand the nature of desirable difficulties (Bjork 2013; McDaniel
and Butler 2011) within the material, as an interface designer may inadvertently
undermine the learning experience in pursuit of higher user satisfaction (Fishwick
2004; Norman 2013). For this reason, we must carefully prescribe principles and
guidelines for designing learning interfaces that emphasize when the roles of student
and user are compatible.
Thus, due to both the advent of fully online learning environments and the underly
ing similarities between user interface design and learning design, there is tremendous
opportunity to examine the user experience in learning systems from the perspectives
of both interface design and learning design. However, the different objectives of the
two design paradigms—one to support immediate interaction, the other to support
long-term learning gains—mean that the application of one paradigm’s heuristics
and guidelines to the other must be performed carefully. Toward this end, some work
has already been performed evaluating user interface design specifically within the
realm of digital learning environments (Cho et al. 2009; Jones and Farquhar 1997;
Najjar 1998), but relatively little work has been done on specifically the user interface
design of fully online learning environments.
In this analysis we perform a case study on a graduate-level class offered as part of
an online Master of Science in Computer Science program at a major public univer
sity. Both the program and the class are delivered asynchronously and online, with no
requirement for synchronous activities or in-person attendance. While considerable
attention could be paid to evaluating the specific user interfaces that deliver the pro
gram, this case study instead focuses on higher-level design decisions. Specifically,
david .joyner@gatech.edu

5 The CHI of Teaching Online ... 83
we are interested in transferring principles of human-computer interaction into the
realm of learning design, especially insofar as their application is facilitated by the
online nature of the program.
To do this, we first provide some necessary background on the nature and structure
of the program and this class, and then move through four prominent principles
from the human-computer interaction literature: flexibility, equity, consistency, and
distributed cognition. For each topic, we examine how it transfers into this online
learning environment as a principle of both interface design and learning design. We
also look at a smaller number of additional principles with narrower applications in
this course, and then evaluate the course based on student surveys.
5.2 Background
While this case study focuses specifically on a single class, that class exists in the
context of a broader online Master of Science program at a major public university
in the United States. Several of the principles we observe in this class are actually
derived from the broader principles of the program, especially as it relates to equity.
Thus, we begin by giving a brief background on the program, and then focus more
specifically on the course under evaluation in this case study.
5.2.1 Program Background
The course under evaluation in this case study is part of an online Master of Science in
Computer Science program launched by a major public university in the United States
in 2014. The program merges recent MOOC-based initiatives with more classical
principles and approaches to distance learning. The goal is to create an online program
whose learning outcomes and student experience are equivalent or comparable to
the in-person experience; as such, the program carries equal accreditation to the
traditional on-campus degree.
In drawing inspiration from MOOC initiatives over the past several years, however,
the program emphasizes low cost and high flexibility. On the cost side, the cost of
attendance is $170 per credit hour plus $200 in fees per semester of attendance. Thirty
credit hours are required to graduate, and thus, the total degree costs between $6100
and $7100, a small fraction of comparable programs or the university’s own on
campus program. These costs are digestible because each class draws dramatically
higher enrolment than their on-campus counterparts: as of Spring 2018, the program
enrolls over 6,500 total students taking an average of 1.4 classes per semester, with
individual courses enrolling as many as 600 students.
On the flexibility side, the program emphasizes that it requires no synchronous
or collocated activities: students are never required to attend a virtual lecture at a
specific time or visit campus, a testing center, or a remote lab for a course activity.
david .joyner@gatech.edu

84 D. Joyner
Proctored and timed exams are typically open for three to four days at a time, while
lecture material is pre-produced and assignments are published well in advance of
the due date.
The program thus captures an audience for whom a Master of Science in Computer
Science is otherwise inaccessible, either due to high costs, geographic immobility, or
scheduling constraints. Evaluations have shown that as a result, the program draws
a dramatically different demographic of student from the university’s on-campus
program: online students tend to be older, are more likely to be employed, have
more significant prior education and professional experience, and are more likely
to be from the United States (Goel and Joyner 2016; Joyner 2017). The program is
forecast to increase the annual output of MSCS graduates in the United States by 8%
(Goodman et al. 2016).
5.2.2 Course Background
This case study focuses on one specific course in this broader program. Fitting this
analysis’s contribution, the course is on human-computer interaction, and covers HCI
principles, the design life cycle, and modern applications such as virtual reality and
wearable computing. At time of writing, the course has been offered four complete
times, including three 17-week full semesters and one 12-week summer semester.
Each week, students watch a series of custom-produced lecture videos, complete a
written assignment, and participate in peer review and forum discussions. Participa
tion is mandated by the course’s grading policy, but students have multiple pathways
to earning participation credit to fit their personalities and routines. Students also
complete two projects—one individual, one group—and take two timed, proctored,
open-book, open-note multiple choice exams. Proctoring is supplied by a digital
proctoring solution, allowing students to take the exam on their own computer.
Aside from the exams, all work is manually graded by human teaching assistants.
One teaching assistant is hired for approximately every 40 enrollees in the course, and
teaching assistants are solely responsible for grading assignments: course administra
tion, announcements, Q&A, office hours, etc. are all handled by the course instructor.
The course generally enrolls 200-250 students per semester, supported by 5-6
teaching assistants. Its completion rate is 92%, ranking slightly higher than the pro
gram’s overall average of approximately 85%. To date, 708 students have completed
the course across four semesters, with 205 more on track to complete the course this
semester.
To explore the crossover between interface design principles and learning design,
we take four common design principles or theories from the HCI literature—flexibil
ity, equity, consistency, and distributed cognition—and examine their applications
to the design of this online course. In some ways, these principles are applied by
analogy: flexibility, for example, traditionally refers to flexible interactions with a
specific interface, but in our case, refers to flexible interactions with course mate
rial. In others, the application is more literal: equity, for example, refers in part to
david .joyner@gatech.edu

5 The CHI of Teaching Online ... 85
accommodating individuals with disabilities, which is more directly supported by
the course and program structure.
5.3 Flexibility
For flexibility, we apply the Principle of Flexibility from Story, Mueller and Mace’s
Principles of Universal Design, which they define as, “The design accommodates
a wide range of individual preferences and abilities” (Story et al. 1998). We also
inject the heuristic of Flexibility and Efficiency of Use from Jakob Nielsen’s ten
heuristics, where he writes, “Allow users to tailor frequent actions” (Nielsen 1995).
The flexibility of the course generally flows from the inherent properties of the
online program, although the course design takes care to preserve and accentuate
this flexibility. Most importantly, these applications of the principle of flexibility
support the subsequent applications of the principle of equity.
5.3.1 Geographic Flexibility
Geographic flexibility refers to the online program’s ability to accept students regard
less of their geographic location. At a trivial level, this relates to the program’s ability
to accept students who do not live within range of campus. As it pertains to flexibil
ity as a usability guideline, however, this flexibility relates more to accommodating
individual preferences for where they complete their work. This relates in part to
individual circumstantial constraints, such as the need for working professionals to
be able to take course material with them during work trips. It has more significant
implications, however, especially as flexibility ties into equity: for example, indi
viduals with disabilities that deter them from leaving the house may participate in
a program that offers true geographic flexibility. In a computer science program,
several of the abilities required for in-person attendance (e.g. walking, driving to
campus, relocating to campus) are largely unrelated to the material itself, and thus
this geographic flexibility resolves individual characteristics that pose threats to a
student’s participation in the field that are unrelated to the content.
It is worth noting that geographic flexibility is inherent in distance learning as a
whole; this class’s instantiation of geographic flexibility is not unique except insofar
as an identically-accredited distance learning program at a major public institution
is still somewhat novel.
david .joyner@gatech.edu

86 D. Joyner
Table 5.1 Enrollment and number of instructor and student forum contributions by semester
Statistic Fall 2016 Spring 2017 | Summer 2017 | Fall 2017
Enrollment 83 231 183 211
Student contributions 3,477 9,147 7,970 9,381
Instructor contributions 785 | 1,768 1,143 1,265
5.3.2 Temporal Flexibility
Temporal flexibility refers to flexibility of the student’s time, allowing them to work
on the class not only wherever they want, but whenever they want. Temporal flexibil
ity offers a greater difference between this program and traditional distance learning
as the presence of live interaction has typically differentiated distance learning from
correspondence learning. Given the program’s goals of equality with the on-campus
program, however, simplifying delivery to correspondence education would be insuf
ficient; requiring live interaction, however, would challenge temporal flexibility.
The class achieves balances these competing needs by maximizing the usage of
asynchronous communication tools in course delivery. Most course forums garner
over ten thousand posts per semester, with approximately 80% coming from students
and 20% coming from the instructor. Table 5.1 shows the class’s enrollment and
contribution statistics by semester. In addition to forum participation, the class also
leverages asynchronous tools for peer review and instructor feedback, as well as an
asynchronous video-based method for disseminating pre-recorded custom-produced
lecture videos.
This temporal flexibility refers strictly to those activities that are typically syn
chronous in traditional course delivery. Other activities, such as completing home
work, are usually somewhat asynchronous. As a result, the design of this course
accommodates individual students with a wide range of preferences or constraints
on when they work on course material. We will discuss the impacts of this more in
the section below on equity.
5.3.3 Preference Flexibility
The geographic and temporal flexibility described above give way to an abundance
of flexible accommodations for individual students’ preferences and abilities. For
example, as a product of being able to watch and re-watch lectures at any pace and
in any setting, students may choose to watch lectures while actively working on the
assignment they target; to attempt an assignment prior to watching the lecture videos
in order to pre-load questions to consider while watching; or to only watch the videos
as needed knowing that lecture material cannot be permanently missed the way a
single in-person class may be missed.
david .joyner@gatech.edu

5 The CHI of Teaching Online ... 87
For this course, flexibility is extended through the course’s participation policy as
well. It is common for online courses to attempt to capture in-person participation
by requiring forum participation, but most research instead focuses on incentivizing
or encouraging it more authentically [e.g. Kizilcec et al. (2014)]. There are multi
ple reasons to focus on more organic discussion stimulation, not least among them
that requiring such participation does not address recognized gender issues in forum
communication (Freeman and Bamford 2004). To accommodate a greater range of
student preferences, this course instead offers multiple routes to earning participa
tion credit: students may contribute to the forums, complete peer reviews of their
classmates’ work, give instructors feedback on the course, or participate in their
classmates’ need finding or evaluation studies as part of their coursework. These dif
ferent activities fit with different student preferences and behaviors; for instance, it is
easier to set aside a block of time for peer reviews, whereas it is easier to participate
in a course forum in several short moments of time.
5.4 Equity
In defining equity as a design principle, we borrow in particular the Principle of
Equitable Use from Story, Mueller, and Mace, which they define as “The design
is useful and marketable to people with diverse abilities” (Story et al. 1998). In
particularly, we note the sub-guidelines, “Provide the same means of use for all
users: identical whenever possible, equivalent when not” and “Avoid segregating or
stigmatizing any users” (Story et al. 1998).
Our application of equity begins with the natural consequences of the flexibility
described above; flexibility focuses on what students within the program can do,
but equity focuses on what students can participate due to that flexibility. We then
examine equity as well as facilitated by the program’s admissions structure and
pseudo-anonymity in course delivery.
5.4.1 Equity Through Flexibility
In many ways, the greatest advantage of the geographic and temporal flexibility
referenced above is not in the experience of students in the program, but rather
in what students may enter the program in the first place. A traditional graduate
program draws from a very narrow population: individuals (a) who either live near
the university or have the financial or lifestyle flexibility to relocate, and (b) have
the scheduling flexibility to attend classes during the day or pre-selected evenings.
Financial flexibility plays into this as well: a traditional graduate program is only
available to those who have or can secure (through loans or employer reimbursement)
the funds to pay high tuition rates.
david .joyner@gatech.edu

88 D. Joyner
Because this program is available to students regardless of location or specific
scheduling availability, it is equally available to students who otherwise would lack
the ability to participate in such a program. The requirements are distilled down to
only those that are inherently required for the content: a significant time commitment
(albeit flexible to the student’s own schedule) and sufficient prior background. The
cost supports this equity as well: while still expensive, the program does not demand
access to an exorbitant amount of funds. As noted previously, these factors directly
correspond to the unique demographics the program draws (Goel and Joyner 2016;
Joyner 2017).
It is worth noting that this audience is not one for which we might stress equity:
students entering the program must have a bachelor’s in computer science or a simi
lar field with a strong GPA (or equivalent work experience); these criteria generally
mean the students are advantaged in the first place. Thus, one takeaway of this pro
gram’s application of the principle of equity comes instead in how similar models
may be extended to otherwise-disadvantaged populations. However, another appli
cation comes in expanding the view of the program’s audience from geographically
dispersed mid-career working professionals and considering also individuals with
chronic illnesses, caretakers for others with illnesses, expecting parents, and others
for whom obstacles to participation exist.
5.4.2 Equity Through Admissions
One component discussed above is the program’s size: at 6,500 students, it is believed
to be the largest program of its kind in the world (Goodman et al. 2016; Joyner 2018).
While this is often discussed as part of counterbalancing the low tuition rate, it has
a profound effect on equity as well. While the program’s on-campus analogue sets
a minimum bar for acceptance, it draws far more qualified applicants than it has
capacity to handle. As a result, the top few percent are admitted, leaving out many
students who meet the minimum requirements but are not competitive with the most
decorated applicants.
As the online program lacks a set capacity, however, any student who meets the
minimum requirements is admitted. This expands access to students who otherwise
would be uncompetitive, typically due to a more meager prior background. These
students meet the minimum requirements and stand a strong chance of succeeding,
but they would not be in the top percentile of applicants typically accepted to a limited
capacity program. Thus, the limitless capacity supports the principle of equity by
accepting students with the potential to succeed who may not otherwise have the
opportunity.
david .joyner@gatech.edu

5 The CHI of Teaching Online ... 89
5.4.3 Equity Through Anonymity
A classic internet aphorism states, “On the internet, no one knows you’re a dog.”
In some ways, the principle applies to this program: although students are identified
by name and work is tied to their real identity (unlike MOOCs, where a username
may supplant a true name), students have considerable control over what portions
of their identity they reveal to classmates and instructors. To classmates, students
have the option to reveal essentially no personal information: they may select the
name that is shown in discussion posts and peer review, which typically are the
only communications inherently surfaced to classmates. Even to instructors, students
reveal little about their personal selves.
While a systematic study of this dynamic is still in the works, we have anecdotally
observed several applications. At a broad level, it is known that there are issues with
perceived identity mismatches between gender or race and computer science (Whitley
1997), and that merely being reminded of such stereotypes can lessen performance
and engagement (Good et al. 2003). Signifiers of these stereotypes are inherently
present in traditional classrooms, but online lack any inherent need to be disclosed.
It is worth considering whether hiding these signifiers is a missed opportunity in
the long run, but it nonetheless presents a path around stereotype threats worth
considering.
Other applications of this anonymity are even more delicate, demanding caution
in conducting more rigorous studies, but they nonetheless reveal enormous potential
for equity through the relative anonymity of the online delivery mechanism. Students
have on multiple occasions confided in trusted instructors or teaching assistants the
presence of mitigating issues that alter their in-person interactions, including phys
ical disabilities or deformities, obesity, speech impediments, transgenderism, and
behavioural disorders. The online environment removes these as a first impression
among classmates and with instructors, creating an equity of experience among those
populations least likely to find it in person.
5.5 Consistency
As a design principle, consistency appears across multiple sets of guidelines and
heuristics. We apply the definitions from three different such sets. First, Norman
states (Norman 2013),
Consistency in design is virtuous. It means that lessons learned with one system transfer readily to others ... If a new way of doing things is only slightly better than the old, it is better to be consistent.
Nielsen prescribes a similar heuristic, stating, “Users should not have to wonder
whether different words, situations, or actions mean the same thing. Follow platform
conventions” (Nielsen 1995). Constantine and Lockwood echo these sentiments as
well with their Reuse Principle, stating (Constantine and Lockwood 1999),
david .joyner@gatech.edu

90 D. Joyner
The design should reuse internal and external components and behaviors, maintaining consistency with purpose rather than merely arbitrary consistency, thus reducing the need for users to rethink and remember.
With regard to this case study, we consider especially consistency within the
class: just as consistency is used to set expectations among users of the outcomes of
different interactions, so also consistency is used to set expectations among students
of certain responsibilities or deliverables. Efforts are underway as well to extend
consistency across courses, especially as they relate to administrative elements of
course delivery.
5.5.1 Assignment Cadence
Early on, we observed that in delivering an asynchronous class, a forcing function
for students’ regular engagement was lost. On campus, that engagement came from
lectures: even if assessments were only due every month, students were still incen
tivized to remain engaged by the fleeting lectures which could not be recovered once
lost. In this online design, all lecture material is persistently available: what, then, is
there to motivate students to remain engaged long before assessments are due?
Our approach to this is to manually recreate that cadence of a weekly engagement
through weekly deliverables. The class requires student submissions every week of
the semester, each of which directly corresponds to the recommended lecture material
for the week. Flexibility (and its effect on equity) are preserved in that lectures and
assignment descriptions are all provided at the start of the semester, so students
who need to work around other constraints may do so by working ahead; regular
deadlines, however, force the majority of students to remain engaged with the course
on a weekly basis. Just as through the principle of consistency in interface design a
user can interact with a new interface and understand the outcomes of their actions,
so also a student can enter a new week of the course and understand the expectations
without re-reading the calendar.
5.5.2 Announcement Cadence
Just as in-person lectures serve as a forcing function for continued student engage
ment, we also observed that they serve as a hub for course communication. A natural
expectation arises (even if only in the minds of instructors) that weekly lectures will
set expectations for the week or recap the week. The loss of this dynamic risks a class
becoming a single amorphous semester rather than a regimented curriculum, espe
cially with students’ tendencies to do work at non-traditional times [e.g. weekends
(Joyner 2017)].
david .joyner@gatech.edu

5 The CHI of Teaching Online ... 91
To combat this, the course leverages consistent weekly announcements, sent to
students every Monday morning and Friday evening. Monday announcements remind
students what they are expected to watch, read, and do for the week, while Friday
announcements typically recap significant occurrences or reemphasize key points
from the week’s material. These announcements aim to further emphasize that class
room cadence, replicating the effect of a teacher walking in on Monday morning
and beginning lecture. As an application of consistency, this replicates common
interaction designs such as weekly reports or digests of activity, acting as consistent
reminders that the course is ongoing.
The announcement cadence plays a more significant role as well with regard to
the course’s emphasis on distributed cognition, explained further in the next section.
Either way, these weekly announcements are the single most well-praised element
of the course’s delivery, and have been incorporated into recommendations issued to
all classes in the program.
5.5.3 Administrative Decisions
As amore literal application of the principle of consistency, the course makes several
administrative decisions to create consistent expectations among students regarding
more trivial elements of the course experience. The course’s smallest unit of time is
one week: there are no in-week deadlines (excepting a small incentive for early peer
review discussed later). Sunday night at 11:59 PM UTC-12 (anywhere on earth) time
marks the end of each week; all of the week’s work is due at this time, and one minute
later marks the start of the next week. Anywhere on Earth time is chosen to simplify
planning for students: if it is before midnight their local time, the assignment is not
due. We encourage students to submit by their own midnight for simplicity, although
our experience is that students maximize the time available, and submissions role in
late in the evening on Sunday nights.
Few course components are time-gated (exams, periodic course surveys), but those
that are open at 12:00 AM UTC-12 on Mondays, closing at the typical deadline as
well. Thus, students do not devote cognitive resources each day to considering what
is required; only on Sundays are students required to ensure they have accomplished
the week’s deliverables. As a principle of consistency, this process similarly aims to
diminish students’ reliance on repeated manual checks and increase the time allotted
to focus on the course material and assessments.
Interestingly, we have attempted to leverage the principle of consistency in other
ways, such as scheduling the aforementioned announcements to go out at the exact
start of the week. Feedback we have received from students, however, indicates this
is actually somewhat counterproductive as it diminishes the personal feel of these
announcements: students feel more connected to the class knowing the instructor
was physically present to send the announcement, even if it is delayed. This suggests
this principle is best applied to items around which students plan, such as deadlines
and release dates, rather than every element of the course delivery. It may also be
david .joyner@gatech.edu

92 D. Joyner
the case that students are patient with late announcements because expectations of
consistency and fairness are set in these other ways.
5.6 Distributed Cognition
Where the previous four design principles were stated with some clarity in a well
known prescriptive set of guidelines, distributed cognition is a more general theory
through which we may examine human-computer interfaces (Hollan et al. 2000). Key
to this idea is the notion that human cognitive tasks like reasoning, remembering,
and acting could be offloaded onto a computer interface to lighten the cognitive load
on the user. As applied to education, this suggests using an interface to lessen the
attention paid by students to course administration to support greater attention to
course content.
5.6.1 Offloading Through Announcements
As referenced above, in addition to creating consistent expectations, a major func
tion of regular announcements is to offload the attention students may otherwise
spend thinking about course procedures, assignment deadlines, and so on onto the
interface, allowing them instead to focus on the course material. This role of these
announcements comes from an early observation from students: whereas traditional
in-person courses operate on a “push” structure, online courses emphasize a “pull”
structure. These terms, derived from principles of HCI as well, mean that students in
a traditional class can usually rely on the instructor to push information to them, such
as by standing in front of a lecture hall and giving announcements. Online classes
usually operate by making all information available to the students, but that relies on
students pulling the right information at the right time.
Weekly announcements approximate that in-person dynamic by pushing imme
diately pertinent information to students. Students thus do not need to trust that
they have pulled all critical information at the right time; absent this trust, students
devote significant cognitive resources to attending to the class’s administration, which
diminishes the resources that may be devoted to learning the actual course material.
As noted above, this is a small feature, but it is one of the most well-praised fea
tures in the program; student reviews on a public student-run review site praise this
repeatedly, and other pieces of negative feedback could be similarly addressed by
offloading these roles onto the interface.
david .joyner@gatech.edu

5 The CHI of Teaching Online ... 93
5.6.2 Offloading Through Documentation
A second application of distributed cognition to the course design leverages the
student community more heavily. As referenced previously, the online environment
makes heavy use of the course forum, but it takes on a unique role in the online
course: it is the classroom, but it is a classroom where any student can contribute at
any time (Joyner et al. 2016). Student answers to classmates’ questions are not often
emphasized in traditional lectures where students inherently pose questions to the
professor, but the online board affords student-to-student discussion more fully.
This provides an answer to another implicit question in course design: what infor
mation should be incorporated into the course’s fundamental documentation, and
what should be pushed to students through announcements and discussions? This
course errs heavily on the side of the documentation specifically because it lever
ages this student community: the community as a whole can come to a common
understanding of the course’s administration and policies because the entire doc
umentation is available to everyone. Any single student likely will not read all the
documentation, but enough students will read each part that if a student has a question
that is covered in the documentation, some classmate will have the answer. Thus,
knowledge of the course is distributed among the student body rather than solely
relying on the communication of the instructor.
5.6.3 Offloading Through Assessment Design
Finally, the course deliberately designs assessments to encourage students to leverage
distributed cognition. While this is natural in essays and projects where course access
is persistent during work, the course tests are also designed to be open to any non
collaborative information seeking. These open-book, open-note, open-video, open
forum tests are created with the knowledge that students will have access to course
resources, and thus should focus less on the knowledge they are able to draw to mind
immediately and more on their ability to solve questions quickly with the available
resources.
Students are informed of this paradigm in advance of the exams, and encouraged to
organize their test-taking environment accordingly. Ready access to course material,
their notes, the readings, and even the course’s discussions are encouraged. These
tests emphasize that it is the system comprised of the student, their resources, and
their environment that is being assessed on the test rather than just their cognition.
Distributed cognition is thus simultaneously a lesson in the course, a principle for
students to apply to the course, and a theory for us to apply in evaluating the course.
david .joyner@gatech.edu

94 D. Joyner
5.7 Additional Principles
Additional principles are at play in the course as well, although we generally note that
many of these principles apply equally well to traditional courses using modern-day
learning management systems. Nonetheless, they are worth including as they further
broaden the view of how interface design principles may be applied to learning
design.
5.7.1 Structure
With regards to structure as a principle of design, we leverage the principle defined by
Constantine and Lockwood (1999). In many ways, our applications of structure are
not inherently restricted to online environments; however, we observe that specific
details of the online environment more clearly afford visible structure. We observe,
for example, that organizing lecture material into pre-produced videos allows the
presentation of it in a way that brings out the underlying structure of the content
rather than forcing it into a prescribed lecture schedule. This, then, allows students
to construct their consumption of course material around the actual structure of the
content.
This similarly connects to the structure of a course calendar offered to students:
without requirements that a pre-set amount of time be spent in certain weeks in
lecture, the structure of the course can be more deliberately designed not only for
the content, but also for the assessments. Other classes in the program, for example,
implicitly require students to “attend” ten hours of lecture in the early weeks of the
class, then shift to a strict project-based mode in the later weeks. Such a structure
would not be possible in a traditional system of prescribed lecture times.
5.7.2 Perceptibility
On perceptibility, Nielsen writes, “The system should always keep users informed
about what is going on, through appropriate feedback within reasonable time”
(Nielsen 1995). An education application of this heuristic has emerged as a some
what natural consequence of the advent of learning management students: students
retain persistent access to the gradebook for immediate perceptibility of their current
status in the class. Although Nielsen focuses on this as a pushing relationship where
relevant information is pushed to the user, this availability instead facilitates a pulling
behavior allowing the student to pull information when pertinent to them.
We have seen this principle emphasized more heavily in other courses, especially
those reliant more on automated evaluations. An online CS1 course offered by the
same university provides automated evaluators for every course problem, all of which
david .joyner@gatech.edu

5 The CHI of Teaching Online ... 95
feed an immediately-available gradebook (Joyner 2018). This even more dramati
cally the perceptibility of what is going on with a student’s grade, and while this
is compatible with traditional classes, it takes on a new emphasis when the entire
experience is in an online environment based on immediately-perceptible feedback.
5.7.3 Tolerance
Regarding tolerance, the Principles of Universal Design state that a good design “min
imizes hazards and the adverse consequences of accidental or unintended actions”
(Story et al. 1998). In education, the level of tolerance for content-specific answers
is often dictated by the field rather than by the learning design. However, interface
design and learning design can merge to create a tolerance for mistakes more related
to administration and policies instead of content errors. In this course’s learning
management systems, it is possible to separate an assignment deadline (shown to
the students) and an assignment close date (hidden from the students); this course
uses these features to set a two-hour grace window after the official deadline where
submissions are still accepted. This creates a tolerance for minor errors, such as
incorrectly converting the UTC-12 time zone to one’s local time zone or underes
timating the time it will take to move through the submission screens to upload an
assignment.
This course also builds tolerance for late work into its process for rapidly eval
uating assignments. After an assignment’s close date, a gradebook is exported with
individual students assigned to individual grades. In the event that a student submits
work even later than the grace period allowed by the learning management system,
the course staff may quickly attach the submission to the row; if the grader has not
yet completed their tasks, then accepting the late submission costs the grading team
no time compared to if it had been submitted on time. While others address this
with a strict grading policy, the size of the class means that a non-trivial number of
assignments will have earnest reasons for late submission, and so the course builds
tolerance into the grading workflow design.
5.7.4 Feedback
Regarding the common need for feedback, Norman writes (Norman 2013),
Feedback must be immediate. ... Feedback must also be informative. ... Poor feedback can be worse than no feedback at all, because it is distracting, uninformative, and in many cases irritating and anxiety-provoking
Among all usability principles, the principle of feedback is likely the most eas
ily transferrable between interface and learning design. Feedback holds the same
david .joyner@gatech.edu

96 D. Joyner
meaning in both domains, providing actionable information on the outcome and
correctness of an action.
As it relates to online course design, we see in this course two interesting applica
tions where the course facilitates more rapid feedback. First, the scale of the course
dictates heavy organization; the grading workflow described above follows almost an
assembly line approach, where assignments are automatically distributed to graders,
rubrics are formalized, and results are processed in batch. Research on the program
shows that a significant amount of attention in the learning design process goes into
exactly these grading workflows (Joyner 2018), and the result is a more rapid return
rate than seen on campus due to the benefits of scale.
A second component comes from the course’s method for implementing peer
review. Students complete peer reviews as part of their participation grade, but as
rapid feedback is more desirable, students are explicitly incentivized to complete peer
reviews early. This is the only place in the course where a mid-week semi-deadline
exists: students receive 50% more credit (1.5 points) for a peer review submitted
within three days of its assignment’s deadline, and 50% less credit (0.5 points) for a
review submitted more than a week after the deadline. With each assignment reviewed
by 3-4 classmates, this raises the likelihood that feedback will arrive rapidly; in the
most recent semester, 58% of all peer reviews were submitted within 3 days, and
69% within one week.
5.8 Course Evaluation
Course evaluation has been the topic of considerable discussion in the learning sci
ences literature. Attempts have been made to create explicit evaluators of course or
teaching quality (Biggs and Collis 2014; Ramsden 1991), but these often require stan
dardized tests or high-effort qualitative analyses. In place of these, student reviews are
often used as a low-cost approximation of course quality. While some early research
found these types of surveys are decently correlated of learning outcomes (Cohen
1981), more recent research casts doubt on this correlation (Greenwald 1997; Uttl
et al. 2017), suggesting student reviews are too biased especially by gender differ
ences to be useful for comparisons (Andersen and Miller 1997; Centra and Gaubatz
2000).
In this analysis, we nonetheless use student reviews to add to the overall picture
of the class in this case study. We acknowledge the weaknesses of student reviews as
comparative tools, but note that (a) we are not using these student reviews to compare
against another class, but rather merely to attest that the class is generally well
received by students, and (b) while most research on the validity of student reviews
has been performed at the K-12 or undergraduate level, these reviews are submitted by
graduate students who are also mid-career professionals, and thus we hypothesize are
more valid assessors of course quality. Anecdotally, several professors in the program
agree to the observation that online students appear to have far higher standards than
their traditional counterparts.
david .joyner@gatech.edu

5 The CHI of Teaching Online ... 97
These student surveys come from two sources: first, the institute issues a Course
Instructor Opinion Survey open to every student in every class. Student identifies are
strictly hidden in these surveys, and the results are known to inform institute-level
evaluations of teaching. Second, the course itself issues an end-of-course survey
asking questions more specific to its own unique details.
5.8.1 Institutional Surveys
At time of writing, the course from this case study has been offered four times:
Fall 2016, Spring 2016, Summer 2016, and Fall 2017. At the end of each of these
semesters, students were offered the opportunity to complete the institute’s Course
Instructor Opinion Survey for the course. The questions on this survey are dictated
by the institute, and although no explicit incentive exists for students to participate,
students are nonetheless highly encouraged to do so by the school and instructor.
All questions on this survey offer 5-point Likert-scale responses. Table 5.2 pro
vides the interpolated medians to each of these prompts.
Based on these results, we make two notable observations. First, the ratings of
course effectiveness and quantity learned have not changed semester to semester.
This is notable because the course has undergone significant revisions semester to
semester, suggesting that either these revisions do not affect the student experience
(or the effect is too small for detection), or that students are unable to evaluate the
effect of these changes absent a target for comparison. In particular, Fall 2017 added
a significant reading component to the course requiring an additional 1-2 h per week
of reading. With this change, 61.7% of the Fall 2017 class estimated they put 9 or
more hours per week into the course, which is statistically significantly different from the percent reporting 9 or more hours in Spring 2017 (43.6%, X? = 9.193, p=0.0024) or Fall 2016 (51.5%, X? =5.322, p=0.021 1).! Despite this, student assessments of
the amount of material learned did not change.
Secondly, these reviews suggest that the design decisions described herein are at
least somewhat effective in supporting the student experience as students specifically
comment positively on criteria that typically are considered lacking in online courses.
Most notably, whereas online instructors are often considered detached or uninvolved
(De Gagne and Walters 2009), students in this class specifically reflected positively on
the instructor’s enthusiasm (4.96/5.00), respect (4.96/5.00), availability (4.90/5.00),
and ability to simulate interest (4.89/5.00). We hypothesize this is due in part to
the singular ownership over course announcements, documentation, and scheduling
attributed to the instructor, in line with existing research on the effectiveness of
immediacy behaviors (Arbaugh 2001).
Summer 2017 is excluded from this comparison as the semester is shorter and more work is deliberately expected per week.
david .joyner@gatech.edu

98 D. Joyner
Table 5.2 Interpolated medians of student responses to eight prompts on the institute-run end-ofcourse opinion surveys
Prompt Fall 2016 Spring 2017 | Summer 2017 | Fall 2017
Response rate (%) 83 69 70 61
How much would you say 4.53 [4.45 4.41 4.45
you learned in this course?*
Considering everything, this | 4.82 4.74 4.85 4.80 was an effective course?
The instructor clearly 4.89 4.89 4.93 4.90 communicated what it would take to succeed in this course*
Instructors respect and 4.95 4.96 4.96 4.94 concern for students®
Instructors level of 4.95 4.97 4.97 4.95 enthusiasm about teaching the course?
Instructors ability to simulate | 4.90 4.86 4.89 4.89 my interest in the subject matter®
Instructors availability for 4.88 4.89 4.93 4.87 consultation!
Considering everything, the | 4.92 4.95 4.94 4.93 instructor was an effective teacher*
*From 5—Exceptional amount to 1—Almost nothing >From 5—Strongly agree to 1—Strongly disagree °From 5—Exceptional to 1—Very poor 4From 5—Extremely enthusiastic to 1—Detached °From 5—Made me eager to 1—Ruined interest ‘From 5—Highly accessible to 1—Hard to find
5.8.2 Course Surveys
While the institute-wide course surveys give some useful information, they are a bit
constrained by the need to apply universally to all courses. To supplement these,
the course offers its own end-of-semester survey asking questions more specifically
targeted to the design and structure of the course itself. Table 5.3 provides these
results.
As with the institute-level survey, the course-level survey provides some inter
esting insights. First, the numbers across most categories do not change semester to
semester. This is notable not only because of changes made to the course as time goes
on, but also because of semester-specific factors. Fall 2016, for example, was the first
semester of the course, and students popularly consider the first semester a “trial run”;
anecdotally, many students specifically avoid first-semester classes knowing the sec
ond run will be smoother, while other students deliberately take new classes because
david.joyner@gatech.edu

5 The CHI of Teaching Online ... 99
Table 5.3 Interpolated medians of student responses to eleven prompts on the course-run end-ofsemester opinion survey
Prompt Fall 2016 Spring 2017 | Summer 2017 | Fall 2017
Response rate (%) 63 65 83 52
“The lectures were 671 6.60 6.56 6.66 informative and easy to
understand”* |
“The exercises during the 5.95 5.74 5.80 5.85 lectures kept me engaged”*
“The video lessons were 6.78 6.56 6.59 6.67 valuable in helping me
Jearn’* |
“(The forum] improved my | 5.90 5.42 5.56 5.45 experience in this class”*
“The [peer review] system 5.29 5.51 5.46 4.92 improved my experience in this class”*
Jump around in the lessons 1.82 1.84 1.91 2.13 instead of watching in order?
Fall behind the 2.17 2.17 2.12 2.26 recommended schedule in the syllabus”
Watch ahead of the 2.55 2.05 2.11 2.15 recommended schedule? |
Re-watch an entire lesson’ | 3.02 2.73 2.71 2.93
Re-watch only a portion of a | 3.72 3.74 3.49 3.41 lesson after having previously finished a lesson”
Watch videos through an 141 1.36 1.72 1.40
app? |
Download course videos for | 1.38 1.31 1.37 1.34 offline viewing®
“Agree or disagree, from 7—Strongly agree to 1—Strongly disagree >How often, from 5—Always to 1—Never
they enjoy being early adopters. This may be visible in the data: students reported
slightly more re-watching and watch-ahead behaviors during the first semester. It is
unclear why peer review ratings are lower during Fall 2017.
Second and more significant to this analysis, however, is that we see a significant
incidence of behaviors corresponding to the claims regarding equity from earlier in
this analysis. Nearly all students report some re-watching behaviors with an inter
polated median corresponding to 3 (“Occasionally”) for rewatching lectures in their
entirety and closer to 4 (“Frequently”) for rewatching only specific parts. While data
does not exist regarding why students engage in these behaviors, they are closely
aligned with potential supports for sensory or attentional deficits. Similarly, while
david.joyner@gatech.edu

100 D. Joyner
behaviors related to watching ahead, falling behind, or taking lectures “on the go”
are rarer, a non-trivial portion of the class still reports leveraging these capabilities.
These correspond to the applications of flexibility discussed previously, allowing
students to integrate their course performance flexibly into their routine and sched
ule. Anecdotally, students report these behaviors most commonly in working around
vacation or work schedules or integrating course participation into train commutes
or travel plans.
5.9 Conclusion
In this case study, we have taken common principles from well-renowned literature on
human-computer interact (Constantine and Lockwood 1999; Nielsen 1995; Norman
2013; Story et al. 1998) and applied it to the design of an entirely-online for-credit
graduate-level course in human-computer interaction. We find that whether by anal
ogy or by direct application, many of these principles are strongly related to both the
goals and design of online education. Just as interface design aims to accommodate
flexibility with regard to user preferences, so also a major objective of online edu
cation is to accommodate audiences for whom traditional education is too inflexible
to fit into their lifestyle. Just as interface design strives to accommodate all audi
ences regardless of experience and personal factors, so also online education aims to
give access to anyone who may succeed at the course material. Just interface design
aims to shrink feedback cycles and emphasize attention to the underlying task, so
also learning design in online education aims to offload non-content tasks onto the
interface or leverage consistent expectations to minimize time spent thinking about
course administration. Most notably, there are places where the lines between learn
ing design and interface design blur: instructors take certain actions in the interface
to implement the learning design, such as setting consistent deadlines to minimizes
cognitive load or pushing announcements to students to offload progress-tracking
onto the interface.
References
Andersen K, Miller ED (1997) Gender and student evaluations of teaching. PS: Polit Sci Polit 30(2):216-220 Arbaugh JB (2001) How instructor immediacy behaviors affect student satisfaction and learning in web-based courses. Bus Commun Q 64(4):42-54 Biggs JB, Collis KF (2014) Evaluating the quality of learning: the SOLO taxonomy (Structure of the observed learning outcome). Academic Press. Bjork RA (2013) Desirable difficulties perspective on learning. Encycl. Mind 4:243-245 Boud D, Cohen R, Sampson-
 J (eds) (2014) Peer learning in higher education: learning from and with each other. Routledge
david .joyner@gatech.edu

5 The CHI of Teaching Online ... 101
Centra JA, Gaubatz NB (2000) Is there gender bias in student evaluations of teaching? J Higher Educ 71(1):17-33 Chandler J (2003) The efficacy of various kinds of error feedback for improvement in the accuracy and fluency of L2 student writing. J Second Lang Writ 12(3):267-296 Cho V, Cheng TE, Lai WJ (2009) The role of perceived user-interface design in continued usage intention of self-paced e-learning tools. Comput Educ 53(2):216-227 Cohen PA (1981) Student ratings of instruction and student ach-
ievement: a meta-analysis of multisection validity studies. Rev Educ Res 51(3):281-309 Constantine L, Lockwood L (1999) Software for use: a practical guide to the models and methods of usage-centered design. Pearson Education. De Gagne J, Walters K (2009) Online teaching experience: a qualitative metasynthesis (QMS). J Online Learn Teach 5(4):577 Fishwick M (2004) Emotional design: why we love (or hate) everyday things. J Am Cult 27(2):234 Freeman M, Bamford A (2004) Student choice of anonymity fo-
r learner identity in online learning discussion forums. Int J ELearn 3(3):45 Goel A, Joyner DA (2016) An experiment in teaching cognitive systems online. In: Haynes D (ed) International journal for scholarship of technology-enhanced learning, vol 1, no 1 Good C, Aronson J, Inzlicht M (2003) Improving adolescents’ standardized test performance: an intervention to reduce the effects of stereotype threat. J Appl Dev Psychol 24(6) Goodman J, Melkers J, Pallais A (2016) Can online delivery increase ac-
cess to education? (No. w22754). National Bureau of Economic Research Greenwald AG (1997) Validity concerns and usefulness of student ratings of instruction. Am Psychol 52(11):1182 Hiltz SR, Wellman B (1997) Asynchronous learning networks as a virtual classroom. Commun
ACM 40(9):44-49 Hollan J, Hutchins E, Kirsh D (2000) Distributed cognition: toward a new foundation for humancomputer interaction research. ACM Trans Comput-Hum Interact (TOCHI) 7(2):174-196 Jones MG, Farquhar JD (1997) User interface design for web-based instruction. Khan 62:239-244 Joyner DA, Goel AK, Isbell C (April 2016) The unexpected pedagogical benefits of making higher education accessible. In: Proceedings of the third ACM conference on Learning@ Scale. ACM
pp 117-120 Joyner DA (April 2017) Scaling expert feedback: two case studies. In: Proceedings of the fourth (2017) ACM conference on Learning @ Scale. ACM Joyner DA (June 2018) Squeezing the limeade: policies and workflows for scalable online degrees. In: Proceedings of the fifth (2018) ACM conference on Learning @ Scale. ACM Joyner DA (June 2018) Towards CS1 at scale: building and testing a MOOC-for-credit candidate. In: Proceedings of the fifth (2018) ACM conference on Learning @ Scale. ACM Kulka-
rni C, Wei KP, Le H, Chia D, Papadopoulos K, Cheng J, Koller D, Klemmer SR (2015) Peer and self assessment in massive online classes. In: Design thinking research. Springer, Cham, pp 131-168 Kizilcec RF, Schneider E, Cohen GL, McFarland DA (2014) Encouraging forum participation in online courses with collectivist, individualist and neutral motivational framings. In: EMOOCS 2014, Proceedings of the European MOOC stakeholder summit, pp 80-87 Koppelman H, Vranken H (June 2008) Experiences with a sync-
hronous virtual classroom in distance education. In: ACM SIGCSE bulletin, vol 40, no 3. ACM, pp 194-198 Kulkarni CE, Bernstein MS, Klemmer SR (March 2015) PeerStudio: rapid peer feedback emphasizes revision and improves performance. In:Proceedings of the second (2015) ACM conference on Learning @ Scale. ACM, pp 75-84 Li X, Chang KM, Yuan Y, Hauptmann A (February 2015) Massive open online proctor: protecting the credibility of MOOCs certificates. In: Proceedings of the 18th ACM conference on Comput-
erSupported Cooperative Work & Social Computing. ACM, pp 1129-1137 Martin F, Parker MA, Deale DF (2012) Examining interactivity in synchronous virtual classrooms. Int Rev Res Open Distrib Learn 13(3):228-261
david.joyner@gatech.edu

102 D. Joyner
McBrien JL, Cheng R, Jones P (2009) Virtual spaces: employing a synchronous online classroom to facilitate student engagement in online learning. Int Rev Res Open Distrib Learn 10(3) McDaniel MA, Butler AC (2011) A contextual framework for understanding when difficulties are desirable. In: Successful remembering and successful forgetting: A festschrift in honor of Robert
A. Bjork Najjar LJ (1998) Principles of educational multimedia user interface design. Hum Factors 40(2):311-323 Nielsen J (1995) 10 usability heuristics for user interface design, vol 1, no 1. Nielsen Norman Group Norman D (2013) The design of everyday things: revised and expanded edition. Basic Books (AZ) Northcutt CG, Ho AD, Chuang IL (2016) Detecting and preventing “multiple-account” cheating in massive open online courses. Comput Educ 100:71-80 O’Malley PJ, Agger JR, Anderson MW (2015) Teachin-
g a chemistry MOOC with a virtual laboratory: lessons learned from an introductory physical chemistry course. J Chem Educ 92(10):1661-1666 Ramsden P (1991) A performance indicator of teaching quality in higher education: the course experience questionnaire. Stud High Educ 16(2):129-150 Story MF, Mueller JL, Mace RL (1998) The universal design file: designing for people of all ages and abilities Swan K, Shea P, Fredericksen E, Pickett A, Pelz W, Maher G (2000) Building knowledge building communitie-
s: consistency, contact and communication in the virtual classroom. J Educ Comput Res 23(4):359-383 Tu CH, Mclsaac M (2002) The relationship of social presence and interaction in online classes. Am J Distance Educ 16(3):131-150 Uttl B, White C, Gonzalez D (2017) Meta-analysis of faculty’s teaching effectiveness: student evaluation of teaching ratings and student learning are not related. Stud Educ Eval 54:22-42 Whitley BE Jr (1997) Gender differences in computer-related attitudes and behavior: a m-
etaanalysis. Comput Hum Behav 13(1)
david.joyner@gatech.edu

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:21.010Z
- **Text Length:** 61114 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
