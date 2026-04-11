# PDF Document: Group Slides 3D Trap 2021.4 - 2022.9.pdf

**File Path:** Group Slides 3D Trap 2021.4 - 2022.9.pdf

**Processed Date:** 2026-02-10T18:18:22.232Z

**File Size:** 50793.90 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 9

**Collection:** Ion Trap

---

## Extracted Text Content

April 19, 2021
Group Meeting

General Things...
● “Questions” channel in slack?

This week in trapped ions...
● arXiv
○ Demonstration of Shor encoding on a trapped-ion quantum computer Nhung H. Nguyen, Muyuan Li, Alaina M. Green, Cinthia Huerta Alderete, Yingyue Zhu, Daiwei Zhu, Kenneth R. Brown, Norbert M. Linke arXiv:2104.01205
○ C-band single photons from a trapped ion via two-stage frequency conversion John Hannegan, Uday Saha, James D. Siverns, Jake Cassell, Edo Waks, Qudsia Quraishi arXiv:2103.16450
○ Quantum computation and simulation with vibrational modes of trapped ions Wentao Chen, Jaren Gan, Jing-Ning Zhang, Dzmitry Matuskevich, Kihwan Kim arXiv:2103.14299
○ Heating of a trapped ion induced by dielectric materials Markus Teller, Dario A. Fioretto, Philip C. Holz, Philipp Schindler, Viktor Messerer, Klemens Schüppert, Yueyang Zou, Rainer Blatt, John Chiaverini, Jeremy Sage, Tracy E. Northup arXiv:2103.13846
○ Trapped electrons and ions as particle detectors Daniel Carney, Hartmut Häffner, David C. Moore, Jacob M. Taylor arXiv:2104.05737
○ Batch Optimization of Frequency-Modulated Pulse for Robust Two-qubit Gates in Ion Chains Mingyu Kang, Qiyao Liang, Bichen Zhang, Shilin Huang, Ye Wang, Chao Fang, Jungsang Kim, Kenneth R. Brown arXiv:2104.06887
○ Optical super-resolution sensing of a trapped ion's wave packet size Martin Drechsler, Sebastian Wolf, Christian T. Schmiegelow, Ferdinand Schmidt-Kaler arXiv:2104.07095
○ Motion analysis of a trapped ion chain by single photon self-interference G. Cerchiari, G. Araneda, L. Podhora, L. Slodička, Y. Colombe, R. Blatt arXiv:2104.07447

3Dprinting

Project overview
● 3D printing tech ● Plan:
○ 1st generation demo - trap ion with 3D printed vertical paul trap ■ Current status
○ 2nd generation - photonic integration, scalability ■ improvements ■ directions

Fabrication by Two Photon Lithography

Single Photon Excitation

Two Photon Excitation

Fischer, IEEE Spectr. (2014)

Steve Ruzin and Holly Aaron, UC Berkeley

3D printing of nano-to-microscale, complex structures with xy resolution ~500nm and z resolution ~1µm

Design Limitations and Challenges

Xia et al, Nature (2019) Meza et al, Science (2014)

Extremely slow: 1mm2 by 30µm tall ~4hr
Single printing field of view 200-400µm and height 300µm. stitching is needed for larger area and height
Polymer composition: Can convert to other materials by pyrolysis after printing but hurt structural integrity/quality
Functional coating by PVD/CVD: Line-of-sight problems for 3D structures structure-specific tricks to deposit at an angle with rotation
ALD provides conformal coverage but limited to ceramics
Structures are printed from substrate up Overhanging structure is difficult but not impossible

Vision
● 3D traps vs 2D surface tarps: ○ Higher trapping depth -> longer life times, lower requirement for cooling ○ Higher secular frequencies -> faster gates, lower motional heating ○ Faster shuttling/ splitting / merging ion chains
● 3D printing -> fast fabrication of high precision 3D structures ● New method for scalable quantum computation based on trapped ions ● Enable trapping of new species

1st generation vertical trap - 2 versions
v2:

RF1

RF2

DC1

DC2

DC3

DC4

DC5

DC6

DC7

RF2 DC8

RF1 DC9

1st generation vertical trap - 2 versions

v7 (more efficient in voltage control):

z y

x cross-section:

Remove the lead to the center electrode, treat the whole plane + center bump a single electrode

1st generation vertical trap - process overview

Plastic printing

coating

glue

W x L x H = (5:5:2) mm

LLNL
Experimental interfacing

W x L x H = (32.5 : 32.5 : 2 )mm
wire bonding

1st generation vertical trap - current status
● Chamber assembled, prebaked ● Various tests:
○ Feedthrough breakout board resonator test ■ Achieved ~95 MHz
○ Wire bonding test ■ Cannot wire bond on gold coated polymer ■ Cannot wire bond on gold coated 5mm substrate ● Try other cleaning procedure (oxygen plasma) ● Add Ti bonding layer
○ Short test on printed trap ■ All electrodes shorted
○ High temperature vacuum compatibility test ■ Passed
○ Surface laser damage test ■ No damage seen from optical microscope
○ *High voltage test (to do)

Short test diagnosis
Cut all DC pathways. All DC pads isolated from GND plane. ⅝ wire bonding ports isolated.

Short test diagnosis
The center region had better isolation than pathways and wire bonding pads.
Highly suspect the scattering is the cause - no scattering around the center region

Current coating configuration
45° 60°

Short test diagnosis
Solutions: build side walls to block scattering (need to test on printed trap)

2nd generation trap - improvements
Things to improve on the fabrication process:
● Better ways to create electrical isolation
○ Glass etching (take too long to fabricate, can’t mass-produce) ○ Silicon etching (RF loss, hard to produce undercut) ○ Lithography (have no experience on that)
● Remove wire bonding
○ Through hole via (right picture) ○ Back side pathway patterning may also be helpful

2nd generation trap - directions
● Scalable horizontal 4-rod trap with ion shuttling capability ● Photonic integration, fiber integration

PAPER

[m2,1,m] code [9 (physical qubits), 1 (logical qubit), 3 (distance)] code Corrects for both bit flip + phase flip errors

Step 1: Create Logical Basis
Ideally, you’d use 9 qubits but thats hard….. Instead, make lots of copies of and then post select results.

Step 2: Measure Stabilizers
Ideally, you’d project the stabilizer results onto an ancilla so you can readout / correct without disturbing the state. But that’s hard… So just directly readout and do error correction in post processing.

Results, m = 3: Measure in Z basis: Measure in X basis:
Do this for m = 3,4,5,6,7. To “measure” m x m codes, sample groups of m shots.

Results, GHZm fidelity:
Do this for m = 3,4,5,6,7. To “measure” m x m codes, sample groups of m shots.

Results, “m x m” code fidelity:
Do this for m = 3,4,5,6,7. To “measure” m x m codes, sample groups of m shots.
More encoding makes better logical qubits even if physical errors increase (kind of)

Full 3x3 encoding ([9,1,3]) code :

Experimental Imperfections
- Beam misalignment & instabilities. - Stark-shift miscompensation - Axial micromotion (bad trap) - Non-uniform ion spacing (beams are uniformly spaced)
- Trap more ions to help this.
Fidelities:
99.0 Rx/Ry 99.0 99 for 3 qubits // 98.5 for 7 qubits // 98 for 9 qubits

June 14, 2021
Group Meeting

General Things...
● Laser safety: beam blocking
○ Don’t let this happen. ○ For beams > a few 10’s of mW:
■ Do not block with paper, especially bluer light
■ Block with something else; make sure it’s not reflective. If blocking a highpower beam with a black object do not assume it’s fully absorbing
○ Thorlabs has beam blocks for up to 10 W in the visible for $50; do we have any already?
● Fill out workout challenge questionnaire (on the lab-
bonding channel)

This week in trapped ions...
● arXiv
○ Electric field noise in a high-temperature superconducting surface ion trap Philip C. Holz, Kirill Lakhmanskiy, Dominic Rathje, Philipp Schindler, Yves Colombe, Rainer Blatt https://arxiv.org/abs/2106.03945
○ Simulating a measurement-induced phase transition for trapped ion circuits Stefanie Czischek, Giacomo Torlai, Sayonee Ray, Rajibul Islam, Roger G. Melko arXiv:2106.03769
○ Observation of measurement-induced quantum phases in a trapped-ion quantum computer Crystal Noel, Pradeep Niroula, Daiwei Zhu, Andrew Risinger, Laird Egan, Debopriyo Biswas, Marko Cetina, Alexey V. Gorshkov, Michael J. Gullans, David A. Huse, Christopher Monroe arXiv:2106.05881
○ Fast Laser Cooling Using Optimal Quantum Control Xie-Qian Li, Shuo Zhang, Jie Zhang, Wei Wu, Chu Guo, Ping-Xing Chen arXiv:2106.05443
○ Interactions of ions and ultracold neutral atom ensembles in composite optical dipole traps: developments and perspectives Leon Karpa arXiv:2106.06459

3Dprinting

Last time
● Wire bonding test
○ Cannot wire bond on gold coated 5mm substrate ■ Try other cleaning procedure (oxygen plasma) ■ Add Ti bonding layer -> already added in previous traps
● Short test on printed trap
○ All electrodes shorted ■ Add side wall to block scattering

This time
● Wire bonding solved with oxygen plasma cleaning, but can only wire bond Al wire because we can’t get gold wire attached to the PCB chip carrier.
● More short tests on more structures (side wall, double overhang) ● Experimental update

Short test - side wall
Samples LLNL made: ● 2 traps w/ side wall and 2 traps w/o side wall on standard silicon wafer ● 1 trap w/ side wall and 1 trap w/o side wall on 2mm thick silicon substrate Below are the measured resistance from wire bonding ports to GND plane on the substrate

2 traps w/ side wall on wafer

s

s

s

∞

∞

s

∞

∞

Total yield: 14/26

s

115 MΩ

∞ ∞

s

s

s

s

∞

∞

∞

∞

∞s

s

∞s

∞

s stands for <20Ω

2 traps w/o side wall on wafer

s

∞

Total yield: 9/26

s

s

100 MΩ

90 MΩ

∞

s

s

∞

s

s

∞

30 MΩ

s

s

30 MΩ

1.5 MΩ

s

∞

ss

s

ss

s

On 2mm substrate

w/ side wall

1 MΩ

3 MΩ

s s

s 0.15 MΩ

s

broken

w/o side wall

0.14 MΩ

0.16 MΩ

0.27 MΩ broken

broken 6 MΩ

5 MΩ 10 MΩ

s

broken

s

broken

4 MΩ

0.15 MΩ 0.18 MΩ

Resistance: left > right

0.22 MΩ

broken 0.21 MΩ

Conclusion on the side wall structure
● Finally saw some isolation ● Yield improved from 0% to ~ 50%, but still not good enough ● The traps w/ side wall has higher resistance than the traps w/o side wall ● Traps on two kinds of substrates have different resistance - cause TBD
○ material difference? ○ thickness difference -> coating difference?

What causes short even w/ side wall?
Rotational coating -> scattering is still possible within a small range of angles i.e.

Improve the structure - double overhang
Ideally first order scattering can be eliminated

But it’s harder to print...
Residual photoresist is very difficult to be washed out, thus bridges are likely to form

Short test - double overhang
● Gaps between two overhangs are made to be 5um and 10um. ● For the 5um version, we can’t get rid of the bridging effect ● For the 10um version, we observe no bridging effect under the SEM for some
traps ● Traps that have significant bridging effect under the SEM are almost all
shorted ● Below are some short test results of the traps that pass the eye test

0.3 MΩ 0.4 MΩ

521 sample③ 10 um gap no bridging

3 Ω

3 Ω

0.2 MΩ 0.4 MΩ

83 kΩ 83 kΩ

525 sample③ 10 um gap no bridging

30 Ω

0.12 MΩ

82 kΩ 0.13 MΩ

1 MΩ 0.9 MΩ

1 MΩ

1 MΩ

0.9 MΩ

1 MΩ 0.6 MΩ

0.12 MΩ 0.13 MΩ

0.13 MΩ

0.13 MΩ

0.13 MΩ

90 kΩ 72 Ω

Yield: 11/13

Yield: 11/13

80 kΩ 0.1 MΩ

525 sample① 10 um gap unseen bridging?

65 Ω

64 Ω

5 Ω 10 Ω

0.14 MΩ 0.14 MΩ

602 sample⑤ 10 um gap unseen bridging?

100 Ω

0.14 MΩ

0.14 MΩ 0.15 MΩ

85 kΩ 0.13 MΩ

89 kΩ

83 kΩ

80 kΩ

Yield: 8/13

75 Ω

0.14 MΩ

0.1 MΩ

9 Ω

0.15 MΩ

94 kΩ

95 kΩ

Yield: 10/13

0.14 MΩ 95 Ω

Conclusion on the double overhang structure
● Yield improved to ~80% ● Some shorts are probably caused by other defects rather than scattering, i.e.
dust, unseen bridging or even probe tip pressuring the outside overhang (measured some fake shorts on other samples) ● Resistance is still low on “isolated” electrodes ● For some traps, i.e. 521③ and 525③, resistances on one side are higher than the other side
○ Asymmetry in the coating process caused this? ○ Or just coincidence?

Resistance in the chamber
Wire bond 521③ and 525③ on a chip carrier, then measure the resistance on the feedthrough (between electrodes and GND)

521 sample③

0.3 MΩ

Directly on trap

3 Ω

3 Ω

0.4 MΩ

0.2 MΩ 0.4 MΩ

0.3 MΩ

On feedthrough
0.3 MΩ

2 Ω

2 Ω

0.2 MΩ

1 MΩ 0.9 MΩ

1 MΩ

1 MΩ

0.9 MΩ

1 MΩ 0.6 MΩ

3.5 MΩ

5 MΩ

The bottom half increased under vacuum

5.7 MΩ 0.3 MΩ

5.5 MΩ

1.7 MΩ

Blue: increased resistance

525 sample③
Directly on trap

83 kΩ 83 kΩ

30 Ω

0.12 MΩ

82 kΩ 0.13 MΩ

0.21 MΩ

On feedthrough

0.38 MΩ 720 Ω

0.22 MΩ

0.2 MΩ

0.12 MΩ 0.13 MΩ

0.13 MΩ

All increased!

0.13 MΩ

90 kΩ 72 Ω

18 MΩ

0.13 MΩ

likely fake short

2.3 MΩ

5 MΩ 0.35 MΩ

10 MΩ

6.9 MΩ

Some remarks
● Humidity might be the cause for the resistance increase under vacuum. Also this can explain the resistance changed on different days, while two completely shorted electrodes stayed the same (2Ω).
● One “shorted” electrode revived (observed revival before putting into the chamber on the test breakout board)
● kΩ resistance might cause trouble when apply voltage, i.e. dissipation for all electrodes and phase mismatch for RF.

RF test
● Built resonator @ 94MHz for 525③ and measured Q = 30 ● Ramped up the voltage to ~30V @ the trap ● Found no resonance for 521 sample③ using the same resonator, will debug
this

Next steps
● Widen the double overhang gap to 15um to solve the bridging issue (hopefully)
● Build resonator ~40MHz to make life easier and do more RF test ● Apply high DC voltage and monitor current ● Bake the chamber, see if the wire bonds on the chip carrier can survive ● Thermal image the electrodes, see dissipation and identify shorts ● Debug the resistance asymmetry issue, i.e. try to coat by ourselves and see if
the issue is still there

PAPER

August 2, 2021
Group Meeting

General Things...
Team 1: 105 ---- 905 pts Team 2: 89.5 ---- 939 pts NEXT WEEK - (body)WEIGHT LIFTING WEEK
● Add things to https://docs.google.com/spreadsheets/ d/1fdaiBBisuqJO_CI3yQgburO2W6oN0gSHQDGZag G_kk/edit?usp=sharing

This week in trapped ions...

3Dprinting

Last time
● 2 traps were put into chamber, but resistance varied a lot (humidity was thought to be the cause)
● Planned things:
○ Solve the bridging issue - ongoing ○ RF test- did ○ DC test - failed ○ Wire bond baking test - passed ○ Thermal imaging electrodes - to do

DC voltage test
● Apply voltage between electrodes on the feedthrough, test high voltage and polarity
● 220kΩ in series to eliminate super high current

Polarity asymmetry
● Asymmetry appeared between each electrode and GND, but rarely between two electrodes.
● For some electrodes, the resistance keep decreasing when increasing the voltage amplitude at negative polarity

Polarity asymmetry
● We want to apply 50-ish volts to RF. Small resistance to GND will result in high current flowing through, which is a killer for us
● Cause
○ Silicon substrate? ○ Polymer? ○ Both?

Narrow down the cause
Removed polymer around a wire bonding pad, measure between
1) Wire bonding pad & GND: huge junction issue 2) Silicon & wire bonding pad: no junction issue 3) Silicon & GND: huge junction issue as well
likely substrate is the cause, and likely metal area is also a key factor

GND
Wire bonding
pad
silicon

Switch substrate to sapphire
The resistance was measured symmetric under different polarities! Immediately wire bond two best traps with no shorts to GND (managed to remove one short manually by cutting the outer sidewall), and put into the chamber.

But...
Then found both traps have shorts between electrodes (in red below), some of them are even not adjacent to each other…
diagonal RF electrodes are shorted on purpose

Closer view

The next batch has the same issue
What we already know:
● No electrode shorted to GND on all 3 sapphire traps
● 2 previously wire bonded silicon traps don’t have such issue
● On sapphire traps this issue is consistent
Possible causes:
● More scattering on sapphire -> shorts in the trap center region
● Bridging to the sidewall -> internal shorts

What to do to narrow down the causes
● Remove sidewall and remeasure internal shorts ● Thermal image the shorts ● Image from backside of the sapphire substrate to identify shorts under
microscope (sapphire is transparent)

Bridging is still an issue
Changed to 15um gap between inside and outside overhang, also added draining holes (seems worse in terms of shorts), didn’t improve
Change to 15um

What to do to improve the recipe
● Change coating angle and decrease metal thickness to reduce scattering, which is likely the cause for all kinds of shorts
● Methods to solve bridging while still can keep metal out of reach is yet to be determined…
● Or try another e-beam evaporator...

A different coating trial
Coat from 4 fixed angles using Nanolab e-beam evaporator -> less uniformity, also less likely to coat underneath the overhang, can be considered an alternative to LLNL coating
Coating directions

PAPER

September 17, 2021
Group Meeting

General Things...

This week in trapped ions...

CCT (Emeritus)
Happy retirement!

3Dprinting

Fabrication by Two Photon Lithography

Single Photon Excitation

Two Photon Excitation

Fischer, IEEE Spectr. (2014)

Steve Ruzin and Holly Aaron, UC Berkeley

3D printing of nano-to-microscale, complex structures with xy resolution ~500nm and z resolution ~1µm

Design Limitations and Challenges

Xia et al, Nature (2019) Meza et al, Science (2014)

Extremely slow: 1mm2 by 30µm tall ~4hr
Single printing field of view 200-400µm and height 300µm. stitching is needed for larger area and height
Polymer composition: Can convert to other materials by pyrolysis after printing but hurt structural integrity/quality
Functional coating by PVD/CVD: Line-of-sight problems for 3D structures structure-specific tricks to deposit at an angle with rotation
ALD provides conformal coverage but limited to ceramics
Structures are printed from substrate up Overhanging structure is difficult but not impossible

Vision
● 3D traps vs 2D surface tarps: ○ Higher trapping depth -> longer life times, lower requirement for cooling ○ Higher secular frequencies -> faster gates, lower motional heating ○ Faster shuttling/ splitting / merging ion chains
● 3D printing -> fast fabrication of high precision 3D structures ● New method for scalable quantum computation based on trapped ions ● Enable trapping of new species

Plan
● 1st generation trap: demonstrate the technology ● 2nd generation trap: scalability, etc

Reminder from last time
● Issue: electrodes internally shorted together ● Planned diagnosis:
○ Remove sidewall and remeasure internal shorts ❌ ○ Thermal image the shorts ❌ ○ Image from backside of the sapphire substrate to identify shorts under microscope (sapphire is
transparent) ✅

Some images from back side

bridging

Conclusion on backside imaging
Lots of bridges… No surprise if electrodes are shorted to GND, but no direct evidence of internal shorts

Shockingly...
No internal shorts measured after leaving the trap in Nanolab for 6 days. ( 6 electrodes shorted together previously) One pair briefly emerged as shorts, then disappeared after shoot the air gun onto the trap (not sure if it helps) Well… I will just forgive him if he keeps it up

What we’ve done after that
● Put 2 traps into the 3D chamber
○ 1st trap: 3 electrodes were shorted to GND; shorts removed manually; fully isolated ○ 2nd trap: 6 electrodes were internally shorted together; no shorts after 6 days; fully isolated
● Refilled the calcium oven (4th time) :( ● Tested fluorescence ● Baked for 4 days @ 180°C ● Cleaned the optical table and found a new home for CCT chamber ● Put the 3D chamber onto the optical table ● Rechecked fluorescence

👀👀

Final trap design (hopefully)

z x
y

Voltage efficiency

Voltage efficiency (zoom in)

Potential problems
● Lack of control over Ey, hard to compensate for micromotion ● Lack of control over U2, hard to increase the axial frequency ● Hard to tilt axis effectively due to low voltage efficiency

How to improve
● Free one multipole coefficient, i.e. U4

How to improve
Since freeing one coefficient could improve the efficiency a lot, can we free all coefficients?
Solve it as an optimization problem: find the solution with best voltage efficiency only with a few constraints (frequencies, tilted angle, valid confinement, no saddle point after adding pseudo potential)
To be tested

Etched silicon substrate

Approximate steps
● Add oxidation layer on top ● Photolithography (only expose trenches) ● RIE (reactive ion etching) etch oxide ● Isotropic etching with SF6 ● Bosch process with C4F8 (passivation) and SF6 (etching) on 3​ 0 µm ● ...

Closer look at trenches

Simplify printing
Only need to print 4 RF pillars

Measurement on shorts and voltage polarity
● 4 Al coated substrate
○ Total yield: 51/52!!! ○ The only short was caused by delamination ○ Polarity test passed, no diode behavior
● 4 Au coated substrate
○ Total yield: 47/52 ○ Shorted resistance: 8Ω, 10Ω (delamination), 12Ω, 65Ω, 0.6MΩ ○ Polarity test passed, no diode behavior

Delamination

Next: trap an ion
Checklist:
● set up lasers (compact AO for 397, 854&866, layout) ● build RF resonator (50MHz) ● build imaging system ● optimize oven position ● re-configure DAC with voltage control solutions

PAPER

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:22.232Z
- **Text Length:** 20673 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
