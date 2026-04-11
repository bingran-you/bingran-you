# PDF Document: OPA445 OPERATIONAL AMPLIFIER.pdf

**File Path:** OPA445 OPERATIONAL AMPLIFIER.pdf

**Processed Date:** 2026-02-10T18:13:48.964Z

**File Size:** 2935.94 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 81

**Collection:** Technical Documents > Analog Circuits

---

## Extracted Text Content

OPA445

SBOS156B − MARCH 1987 − REVISED APRIL 2008
High Voltage FET-Input OPERATIONAL AMPLIFIER

FEATURES
D WIDE-POWER SUPPLY RANGE:
±10V to ±45V
D HIGH SLEW RATE: 15V/µs D LOW INPUT BIAS CURRENT: 10pA D STANDARD-PINOUT TO-99, DIP, SO-8
PowerPAD, AND SO-8 SURFACE-MOUNT PACKAGES
APPLICATIONS
D TEST EQUIPMENT D HIGH-VOLTAGE REGULATORS D POWER AMPLIFIERS D DATA ACQUISITION D SIGNAL CONDITIONING D AUDIO D PIEZO DRIVERS

DESCRIPTION
The OPA445 is a monolithic operational amplifier capable of operation from power supplies up to ±45V and output currents of 15mA. It is useful in a wide variety of applications requiring high output voltage or large common-mode voltage swings.
The OPA445’s high slew rate provides wide powerbandwidth response, which is often required for high-voltage applications. FET input circuitry allows the use of high-impedance feedback networks, thus minimizing their output loading effects. Laser trimming of the input circuitry yields low input offset voltage and drift.
The OPA445 is available in standard pinout TO-99, DIP-8, and SO-8 surface-mount packages as well as an SO-8 PowerPAD package for reducing junction temperature. It is fully specified from −25°C to +85°C and operates from −55°C to +125°C. A SPICE macromodel is available for design analysis (from www.ti.com).

Offset Trim 1

OPA445 NC 8

7 V+

−In 2

6 Output

+In 3

5 Offset

4

Trim

V−

Case is connected to V− TO−99

OPA445

Offset Trim 1 −In 2 +In 3 V− 4

8 NC 7 V+ 6 Output 5 Offset Trim

DIP−8, SO−8, SO−8 PowerPAD

NC = No internal connection; leave NC floating or connect to GND, V+, or V−.

Please be aware that an important notice concerning availability, standard warranty, and use in critical applications of Texas Instruments semiconductor products and disclaimers thereto appears at the end of this data sheet. PowerPAD is a trademark of Texas Instruments, Inc. All other trademarks are the property of their respective owners.

PRODUCTION DATA information is current as of publication date. Products conform to specifications per the terms of Texas Instruments standard warranty. Production processing does not necessarily include testing of all parameters.

Copyright  1987−2008, Texas Instruments Incorporated

www.ti.com

OPA445
SBOS156B − MARCH 1987 − REVISED APRIL 2008
ABSOLUTE MAXIMUM RATINGS(1)
Power Supply . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ±50V Differential Input Voltage . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ±80V Input Voltage Range . . . . . . . . . . . . . . . . . . . . . . . . . . . . . |±VS| − 3V Storage Temperature Range: M . . . . . . . . . . . . . . −65°C to +150°C
P, U, DDA . . . . . . . −55°C to +125°C Operating Temperature Range . . . . . . . . . . . . . . . −55°C to +125°C Output Short-Circuit to Ground (TJ < +125°C) . . . . . . Continuous Junction Temperature: M . . . . . . . . . . . . . . . . . . . . . . . . . . . . +175°C Junction Temperature: P, U, DDA . . . . . . . . . . . . . . . . . . . . . +150°C (1) Stresses above these ratings may cause permanent damage.
Exposure to absolute maximum conditions for extended periods may degrade device reliability. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those specified is not supported.

www.ti.com
This integrated circuit can be damaged by ESD. Texas Instruments recommends that all integrated circuits be handled with appropriate precautions. Failure to observe proper handling and installation procedures can cause damage.
ESD damage can range from subtle performance degradation to complete device failure. Precision integrated circuits may be more susceptible to damage because very small parametric changes could cause the device not to meet its published specifications.

ORDERING INFORMATION(1)

PRODUCT

PACKAGE-LEAD

PACKAGE DESIGNATOR

PACKAGE MARKING

OPA445AP

DIP-8

P

OPA445AP

OPA445AU

SO-8 Surface-Mount

D

OPA445AU

OPA445ADDA

SO-8 PowerPAD

DDA

OPA445

OPA445BM

TO-99 8-Pin

LMC

OPA445BM

(1) For the most current package and ordering information see the Package Option Addendum at the end of this document, or see the TI web site at www.ti.com.

2

OPA445

www.ti.com

SBOS156B − MARCH 1987 − REVISED APRIL 2008

ELECTRICAL CHARACTERISTICS
Boldface limits apply over the specified temperature range, TA = −25°C to +85°C. VS = ±40V. At TA = +25°C, VS = ±40V, and RL = 5kΩ, unless otherwise noted.
OPA445BM

PARAMETER

TEST CONDITIONS

MIN

TYP

MAX

OFFSET VOLTAGE Input Offset Voltage
vs Temperature vs Power Supply
INPUT BIAS CURRENT(1) Input Bias Current
Over Specified Temperature Range Input Offset Current
Over Specified Temperature Range

VOS VOS/dT
PSRR
IB
IOS

VCM = 0, IO = 0 TA = −25°C to +85°C
VS = ±10V to ±45V
VCM = 0V
VCM = 0V

±1

±3

±10

4

100

±10

±50

±10

±4

±20

±5

NOISE Input Voltage Noise Density, f = 1kHz Current Noise Density, f = 1kHz
INPUT VOLTAGE RANGE Common-Mode Voltage Range Common-Mode Rejection
Over Specified Temperature Range

en in
VCM CMRR

VS = ±40V VCM = −35V to +35V

15 6

(V−) + 5

(V+) − 5

80

95

80

INPUT IMPEDANCE Differential Common-Mode

1013 || 1 1014 || 3

OPEN-LOOP GAIN, DC Open-Loop Voltage Gain
Over Specified Temperature Range

AOL

VO = −35V to +35V

100

110

97

FREQUENCY RESPONSE Gain Bandwidth Product Slew Rate Full Power Bandwidth Rise Time Overshoot Total Harmonic Distortion + Noise
OUTPUT Voltage Output
Over Specified Temperature Range Current Output Output Resistance, Open Loop Short Circuit Current Capacitive Load Drive
POWER SUPPLY Specified Operating Range Operating Voltage Range Quiescent Current
TEMPERATURE RANGE Specification Range Operating Range Storage Range Thermal Resistance, Junction-to-Ambient
TO-99 DIP-8 SO-8 Surface-Mount SO-8 PowerPAD(3) Thermal Resistance, Junction-to-Case SO-8 PowerPAD(3)

GBW

2

SR

VO = 70VPP

5

15

VO = 70VPP

23

70

VO = ±200mV

100

G = +1, ZL = 5kΩ || 50pF

35

THD+N f = 1kHz, VO = 3.5Vrms, G = 1

0.0002

f = 1kHz, VO = 10Vrms, G = 1

0.00008

VO
IO RO ISC CLOAD

VO = ±28V dc

(V−) + 5

(V+) − 5

(V−) + 5

(V+) − 5

±15

220

±26

See Typical Characteristic(2)

VS

IQ

IO = 0

±40

±10

±45

±4.2

±4.7

−25

+85

−55

+125

−65

+125

qJA 200

qJC

NOTE: ∗ Specifications same as OPA445BM. (1) High-speed test at TJ = +25°C. (2) See Small-Signal Overshoot vs Load Capacitance in the Typical Characteristics section.
(3) Test board 1in x 0.5in heat-spreader, 1oz copper.

OPA445AP, AU, ADDA MIN TYP MAX

±1.5 ±5

*

∗

∗

∗

±100

±20

∗

±40

±10

∗ ∗

∗

∗

∗

∗

*

∗ ∗

∗

∗

∗

∗

∗

∗

∗

∗

∗

∗

∗

∗

∗

∗

*

*

∗

∗

∗

∗

∗

∗

∗

∗

∗

∗

∗

∗

∗

−55

+125

100 150 52
10

UNITS
mV µV/°C µV/V
pA nA pA nA
nV/√Hz fA/√Hz
V dB dB
Ω || pF Ω || pF
dB dB
MHz V/µs kHz ns
% % %
V V mA Ω mA
V V mA
°C °C °C
°C/W °C/W °C/W °C/W
°C/W

3

Supply Current (mA)

OPA445

SBOS156B − MARCH 1987 − REVISED APRIL 2008
TYPICAL CHARACTERISTICS
At TA = +25°C and VS = ±40V, unless otherwise noted.

Voltage Gain (dB)

Gain Bandwidth (MHz)

140 120 100
80 60 40 20
0 10

OPEN−LOOP GAIN AND PHASE vs FREQUENCY
−45

θ

−90

Gain

−135

−185

100

1k

10k 100k

1M

10M

Frequency (Hz)

GAIN BANDWIDTH AND SLEW RATE

vs TEMPERATURE

2.6

16

2.4

15

SR

2.2

14

2.0

13

GBW

1.8

12

1.6

11

1.4 −75 −50 −25 0 25 50 75 Ambient Temperature (_C)

10 100 125

100nA

INPUT BIAS CURRENT vs TEMPERATURE

10nA

1nA

100pA

10pA

1pA

0.1pA
0.01pA −75 −50 −25 0 25 50 75 100 125 Temperature (_ C)

Input Bias Current

Slew Rate (V/µs) Gain Bandwidth (MHz)

Phase (_ ) Voltage Gain (dB)

Bias Current (pA)

www.ti.com

OPEN−LOOP GAIN AND SUPPLY CURRENT

vs SUPPLY VOLTAGE

125

4.5

120

115

IQ

4.0

AVOL

110

105

3.5

100
95 10

20

30

40

Supply Voltage (±VS)

3.0 50

GAIN BANDWIDTH AND SLEW RATE

vs SUPPLY VOLTAGE

2.2

19

GBW

2.0

17

1.8

15

SR

1.6 10

20

30

40

Supply Voltage (±VS)

13 50

INPUT BIAS CURRENT
vs COMMON−MODE VOLTAGE 40

35

30

25

20

15

−IB

+IB

10

5

0 −50 −40 −30 −20 −10 0 10 20 30 40 50
Common−Mode Voltage (V)

Slew Rate (V/µs)

4

Power Supply Rejection (dB)

www.ti.com
TYPICAL CHARACTERISTICS (continued)
At TA = +25°C and VS = ±40V, unless otherwise noted.
POWER SUPPLY REJECTION vs FREQUENCY
120
100 +PSRR
80
60 −PSRR
40
20 0 10 100 1k 10k 100k 1M 10M 100M Frequency (Hz)
OPEN−LOOP GAIN vs TEMPERATURE 120

Voltage Gain (dB)

110

100

90 −75 −50 −25 0 25 50 75 Ambient Temperature (_ C)

100 125

INPUT VOLTAGE NOISE SPECTRAL DENSITY 100

Voltage Noise (nV/√Hz)

10

1

10

100

1k

10k

100k

Frequency (Hz)

THD+Noise (%)

OPA445
SBOS156B − MARCH 1987 − REVISED APRIL 2008

Common−Mode Rejection (dB)

100 90 80 70 60 50 40 10

COMMON−MODE REJECTION vs FREQUENCY

100

1k

10k 100k

1M

10M

Frequency (Hz)

POWER SUPPLY REJECTION AND COMMON−MODE REJECTION vs TEMPERATURE 130

120

110

PSRR

100 CMRR
90

80

70 −75 −50 −25 0 25 50 75 100 125
Ambient Temperature (_ C)

TOTAL HARMONIC DISTORTION + NOISE vs FREQUENCY
0.1

PSRR, CMRR (dB)

0.01

0.001 0.0001

VO = 3.5Vrms G = 10
VO = 3.5Vrms VO = 10Vrms G=1
VO = 10Vrms

0.00001 20

100

1k

Frequency (Hz)

10k 20k

5

OPA445
SBOS156B − MARCH 1987 − REVISED APRIL 2008
TYPICAL CHARACTERISTICS (continued)
At TA = +25°C and VS = ±40V, unless otherwise noted.

www.ti.com

Output Voltage Swing (V)

OUTPUT VOLTAGE SWING vs OUTPUT CURRENT (V+)

(V+) − 2

(V+) − 4

(V+) − 6 (V+) − 8 (V+) − 10

Sourcing Current

(V−) + 10

(V−) + 8

(V−) + 6 (V−) + 4 (V−) + 2

Sinking Current

(V−) 0

±5

±10

±15

±20

±25

±30

Output Current (mA)

SUPPLY CURRENT vs TEMPERATURE 5

Supply Current (mA)

4

Percent of Amplifiers (%)

3

2 −75 −50 −25 0 25 50 75 Ambient Temperature (_C)

100 125

OFFSET VOLTAGE

PRODUCTION DISTRIBUTION

20

Typical production

18

distribution of

16

packaged units.

14

12

10

8

6

4

2

0

−5.0 −4.5 −4.0 −3.5 −3.0 −2.5 −2.0 −1.5 −1.0 −0.5
0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0

Offset Voltage (mV)

Output Voltage Swing (V)

OUTPUT VOLTAGE SWING vs TEMPERATURE (V+)

(V+) − 1 (V+) − 2

Positive Swing

(V+) − 3

(V+) − 4

(V−) + 4

(V−) + 3 (V−) + 2

Negative Swing

(V−) + 1

(V−) −75 −50 −25 0

25 50 75 100 125

Temperature (_C)

Output Current (mA)

35 30 25 20 15 10
5 0
−50

OUTPUT CURRENT vs TEMPERATURE Short−Circuit Current

Output Current VO = ±35V

−25

0

25

50

75 100 125

Temperature (_ C)

Percent of Amplifiers (%)
0 2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40

OFFSET VOLTAGE DRIFT

PRODUCTION DISTRIBUTION

25 Typical production

distribution of

20

packaged units.

15

10

5

0 Offset Voltage Drift (µV/_ C)

6

www.ti.com

TYPICAL CHARACTERISTICS (continued)
At TA = +25°C and VS = ±40V, unless otherwise noted.

Dissipation (W)

MAXIMUM POWER DISSIPATION vs TEMPERATURE
0.8 No Heat Sink
0.7

0.6

Plastic DIP

TO−99 0.5

0.4
0.3
0.2 TJ (max)
0.1 TO−99: 150_ C DIP, SO: 125_C
0

SO−8 Surface−Mount (non PowerPAD)

−50 −25

0

25

50

75 100 125

Temperature (_C)

90 80 70 60 50 40 30 20 10
0 1k

MAXIMUM OUTPUT VOLTAGE SWING vs FREQUENCY
Maximum output without slew−rate induced distortion.

10k

100k

1M

Frequency (Hz)

SMALL−SIGNAL STEP RESPONSE G = 1, CL = 100pF

Output Voltage (VPP)

Dissipation (W)

Overshoot (%)

OPA445
SBOS156B − MARCH 1987 − REVISED APRIL 2008

MAXIMUM POWER DISSIPATION vs TEMPERATURE
2.0 SO−8 PowerPAD: TJ(max) = +125_C
1.5

1.0

0.5 TJ (125_ C max) = TA + [(|VS| − |VO |) IO × θ JA]

θ
JA

=

52_ C/W,

SO−8

PowerPAD

(1in × 0.5in heat−spreader, 1oz Copper)

0 TJ = 25_ C + (1.93W × 52_ C/W) = +125_ C

−50 −25

0

25

50

75 100 125

Temperature (_C)

60 50 40 30 20 10
0 10pF

SMALL−SIGNAL OVERSHOOT vs LOAD CAPACITANCE

G = −1 G = +1 G = −2

G = 10

100pF

1nF

Load Capacitance

10nF

LARGE−SIGNAL STEP RESPONSE G = 1, CL = 100pF

10V/div

50mV/div

500ns/div

2.5µs/div 7

OPA445

SBOS156B − MARCH 1987 − REVISED APRIL 2008
APPLICATIONS
Figure 1 shows the OPA445 connected as a basic noninverting amplifier. The OPA445 can be used in virtually any op amp configuration. Power-supply terminals should be bypassed with 0.1µF capacitors, or greater, near the power supply pins. Be sure that the capacitors are appropriately rated for the power-supply voltage used.

V+

0.1µF R1

G = 1+

R2 R1

R2

OPA445 VIN
0.1µF
V−

VO ZL

www.ti.com
INPUT PROTECTION
The inputs of conventional FET-input op amps should be protected against destructive currents that can flow when input FET gate-to-substrate isolation diodes are forward-biased. This can occur if the input voltage exceeds the power supplies or there is an input voltage with VS = 0V. Protection is easily accomplished with a resistor in series with the input. Care should be taken because the resistance in series with the input capacitance may affect stability. Many input signals are inherently curre-
nt-limited; therefore, a limiting resistor may not be required.
OFFSET VOLTAGE TRIM
The OPA445 provides offset voltage trim connections on pins 1 and 5. Offset voltage can be adjusted by connecting a potentiometer as shown in Figure 2. This adjustment should be used only to null the offset of the op amp, not to adjust system offset or offset produced by the signal source. Nulling system offset could degrade the offset voltage drift behavior of the op amp. While it is not possible to predict the exact change in drift, the effect is usually small.

Figure 1. The OPA445 Configured as a Noninverting Amplifier
POWER SUPPLIES
The OPA445 may be operated from power supplies up to ±45V or a total of 90V with excellent performance. Most behavior remains unchanged throughout the full operating voltage range. Parameters which vary significantly with operating voltage are shown in the Typical Characteristics.
Some applications do not require equal positive and negative output voltage swing. Power-supply voltages do not need to be equal. The OPA445 can operate with as little as 20V between the supplies and with up to 90V between the supplies. For example, the positive supply could be set to 80V with the negative supply at −10V, or vice-versa.

V+ 7
2

Use offset adjust pins only to null offset voltage of op amp−see text.

OPA445 6

3

1 10mV Typical

5

Trim Range

4

(1)

NOTE: (1) 10kΩ to 1MΩ

Trim Potentiometer

V−

(100kΩ recommended).

Figure 2. Offset Voltage Trim

8

OPA445

www.ti.com
CAPACITIVE LOADS
The dynamic characteristics of the OPA445 have been optimized for commonly encountered gains, loads, and operating conditions. The combination of low closed-loop gain and capacitive load will decrease the phase margin and may lead to gain peaking or oscillations. Figure 3 shows a circuit which preserves phase margin with capacitive load. The circuit does not suffer a voltage drop due to load current; however, input impedance is reduced at high frequencies. Consult Application Bulletin SBOA015, ava-
ilable for download at www.ti.com, for details of analysis techniques and application circuits.

R1

R2

2kΩ

2kΩ

RC 20Ω
CC 0.22µF
VIN

OPA445

RC =

R2 2CL × 1010 − (1 + R2/R1)

G = 1 + R2 R1
VO CL 5000pF

CC =

CL × 103 RC

NOTE: Design equations and component values are approximate. User adjustment is required for optimum performance.

Figure 3. Driving Large Capacitive Loads

SBOS156B − MARCH 1987 − REVISED APRIL 2008
INCREASING OUTPUT CURRENT
In those applications where the 15mA of output current is not sufficient to drive the required load, output current can be increased by connecting two or more OPA445s in parallel as shown in Figure 4. Amplifier A1 is the master amplifier and may be configured in virtually any op amp circuit. Amplifier A2, the slave, is configured as a unity gain buffer. Alternatively, external output transistors can be used to boost output current. The circuit in Figure 5 is capable of supplying output currents up-
 to 1A.

R1 VIN

R2
Master OPA445

RS(1) 10Ω

OPA445 Slave

RS(1) 10Ω
RL

NOTE: (1) RS resistors minimize the circulating current that will always flow between the two devices due to VOS errors.
Figure 4. Parallel Amplifiers Increase Output Current Capability

R1

R2

+45V

TIP29C

CF

R4

R3(1)

0.2Ω

100Ω

OPA445 VIN

R4 0.2Ω

VO LOAD

TIP30C

−45V NOTE: (1) Provides current limit for OPA445 and allows the amplifier to drive the load when the output is between +0.7V and −0.7V.
Figure 5. External Output Transistors Boost Output Current Up to 1 Amp
9

OPA445

SBOS156B − MARCH 1987 − REVISED APRIL 2008
SAFE OPERATING AREA
Stress on the output transistors is determined both by the output current and by the output voltage across the conducting output transistors, VS − VO. The power dissipated by the output transistor is equal to the product of the output current and the voltage across the conducting transistor, VS − VO. The Safe Operating Area (SOA curve, Figure 6 through Figure 10) illustrates the permissible range of voltage and current. The curves shown represent devices soldered to a printed circuit board (PCB) w-
ith no heat sink. Increasing printed circuit trace area or the use of a heat sink (TO-99 package) can significantly reduce thermal resistance (q ), resulting in increased output current for a given output voltage (see Figure 11, Figure 12, and the Heat Sink section).
The safe output current decreases as VS − VO increases. Output short-circuits are a very demanding case for SOA. A short-circuit to ground forces the full power supply voltage (V+ or V−) across the conducting transistor and produces a typical output current of 25mA. With ±40V power supplies, this creates an internal dissipation of 1W. This exceeds the maximum rating and is not recommended. If operation in this region is unavoidable, a heat sink is required. For further insight on SOA, consult Appl-
ication Bulletin SBOA022 (available for download at www.ti.com).

Output Current (mA)

100 TA = 25_ C

10

TA = 120_ C

TA = 85_C

1

TA + [(|VS| − |VO|) IO × θJA] ≤ TJ (max) θJA = 100_C/W TJ (max) = 125_C 0.1

1

2

5

10

20

|VS| − |VO| (V)

50

100

Figure 6. DIP-8 Safe Operating Area

www.ti.com

Output Current (mA)

100 TA = 25_C

10 TA = 125_ C TA = 85_ C

1 TA + [(|VS| − |VO|) IO × θJA] ≤ TJ (max) θJA = 200_C/W (No Heat−Sink) TJ (max) = 150_C
NOTE: Simple clip−on heat−sinks can

reduce θ by as much as 50_ C/W. 0.1

1

2

5

10

20

|VS| − |VO| (V)

50

100

Figure 7. TO-99 Safe Operating Area

100 TA = 25_C

10 TA = 120_C

TA = 85_ C

Output Current (mA)

1

0.1 1

TA + [(|VS| − |VO|) IO × θJA = 150_C/W TJ (max) = 125_C

2

5

θJA] ≤ 10

TJ (max) 20

|VS| − |VO| (V)

50

100

Figure 8. SO-8 (non PowerPAD) Safe Operating Area

100 TA = 25_ C

10 TA = 120_C

TA = 85_C

Output Current (mA)

1

TA + [(|VS| − |VO|) IO × θJA] ≤ TJ (max) θ JA = 96_ C/W TJ (max) = 125_C 0.1

1

10

100

|VS| − |VO| (V)

Figure 9. SO-8 PowerPAD Safe Operating Area (no heat-spreader, no airflow)

10

www.ti.com

100 1in x 0.5in, 1oz Cu
10

TA = 25_ C TA = 85_ C

Output Current (mA)

TA = 120_C 1

TA + [(|VS| − |VO|) IO × θJA] ≤ TJ (max) θ JA = 52_C/W TJ (max) = 125_ C 0.1

1

10

100

|VS| − |VO| (V)

Figure 10. SO-8 PowerPAD Safe Operating Area (with heat-spreader, no airflow)

Thermal Resistance, θJA (_ C/W)

120

100 No Heat−Spreader
80

60 With Heat−Spreader, 1in x 0.5in, 1oz Cu
40

20

0

0

0.5

1.0

1.5

2.0

2.5

3.0

Air−Flow (meters/sec)

Figure 11. SO-8 PowerPAD Thermal Resistance (with and without heat-spreader)

Thermal Resistance, θJA (_ C/W)

100 No Airflow
90

80

70

60

50

40

30 0

0.5

1.0

1.5

2.0

2.5

3.0

Copper Area (inches2)

Figure 12. Thermal Resistance vs Circuit Board Copper Area

OPA445

SBOS156B − MARCH 1987 − REVISED APRIL 2008
POWER DISSIPATION
Power dissipation depends on power supply, signal, and load conditions. For dc signals, power dissipation is equal to the product of the output current times the voltage across the conducting output transistor, PD = IL (VS − VO). Power dissipation can be minimized by using the lowest possible power-supply voltage necessary to assure the required output voltage swing.
For resistive loads, the maximum power dissipation occurs at a dc output voltage of one-half the power supply voltage. Dissipation with ac signals is lower. Application Bulletin SBOA022 explains how to calculate or measure dissipation with unusual loads or signals.
The OPA445 can supply output currents of 15mA and larger. This would present no problem for a standard op amp operating from ±15V supplies. With high supply voltages, however, internal power dissipation of the op amp can be quite large. Operation from a single power supply (or unbalanced power supplies) can produce even larger power dissipation since a large voltage is impressed across the conducting output transistor. Applications with large power dissipation may require a heat-sink.

HEAT SINKING
Power dissipated in the OPA445 will cause the junction temperature to rise. For reliable operation junction temperature should be limited to 125°C, maximum (150°C for TO-99 package). Some applications will require a heat-sink to assure that the maximum operating junction temperature is not exceeded. In addition, the junction temperature should be kept as low as possible for increased reliability. Junction temperature can be determined according to the following equation:

TJ + TA ) PD qJA

(1)

Package thermal resistance, qJA, is affected by mounting techniques and environments. Poor air circulation and use of sockets can significantly increase thermal resistance. Best thermal performance is achieved by soldering the op amp into a circuit board with wide printed circuit traces to allow greater conduction through the op amp leads. Simple clip-on heat sinks (such as a Thermalloy 2257) can reduce the thermal resistance of the TO-99 metal package by as much as 50°C/W. The SO-8 PowerPAD packa-
ge will provide lower thermal resistance, especially with a simple heat-spreader—even lower with a heat-sink. For additional information on determining heat-sink requirements, consult Application Bulletin SBOA021.

11

OPA445

SBOS156B − MARCH 1987 − REVISED APRIL 2008
PowerPAD THERMALLY-ENHANCED PACKAGE
In addition to the SO-8, DIP-8, and TO-99 packages, the OPA445 also comes in an SO-8 PowerPAD. The SO-8 PowerPAD is a standard-size SO-8 package where the exposed leadframe on the bottom of the package can be soldered directly to the PCB to create an extremely low thermal resistance. This architecture enhances the OPA445’s power dissipation capability significantly and eliminates the use of bulky heatsinks and slugs traditionally used in thermal packages. This package can be easily mounted using s-
tandard PCB assembly techniques. NOTE: Since the SO-8 PowerPAD is pin-compatible with standard SO-8 packages, the OPA445 can directly replace operational amplifiers in existing sockets. Soldering the PowerPAD to the PCB is always required, even with applications that have low power dissipation. Soldering the device to the PCB provides the necessary thermal and mechanical connection between the leadframe die pad and the PCB.
The PowerPAD package is designed so that the leadframe die pad (or thermal pad) is exposed on the bottom of the IC; see Figure 13. This design provides an extremely low thermal resistance (qJC) path between the die and the exterior of the package. The thermal pad on the bottom of the IC can then be soldered directly to the PCB, using the PCB as a heatsink. In addition, plated-through holes (vias) provide a low thermal resistance heat flow path to the back side of the PCB.

Leadframe (Copper Alloy) IC (Silicon)

Die Attach (Epoxy)

Mold Compound (Plastic)

Leadframe Die Pad Exposed at Base of the Package
(Copper Alloy)

Figure 13. Section View of a PowerPAD Package
GENERAL PowerPAD LAYOUT GUIDELINES
The OPA445 is available in a thermally-enhanced PowerPAD package. This package is constructed using a downset leadframe upon which the die is mounted. This arrangement results in the lead frame being exposed as a thermal pad on the underside of the package. This thermal pad has direct thermal contact with the die; thus, excellent thermal performance is achieved by providing a good thermal path away from the thermal pad.
12

www.ti.com
The PowerPAD package allows for both assembly and thermal management in one manufacturing operation. During the surface-mount solder operation (when the leads are being soldered), the thermal pad must be soldered to a copper area underneath the package. Through the use of thermal paths within this copper area, heat can be conducted away from the package into either a ground plane or other heat-dissipating device. Soldering the PowerPAD to the PCB is always required, even with applications that hav-
e low power dissipation. Follow these steps:
1. The PowerPAD must be connected to the most negative supply voltage on the device, V−.
2. Prepare the PCB with a top-side etch pattern. There should be etching for the leads as well as etch for the thermal pad.
3. Place recommended holes in the area of the thermal pad. Recommended thermal land size and thermal via patterns for the SO-8 DDA package is shown in Figure 14. These holes should be 13 mils in diameter. Keep them small, so that solder wicking through the holes is not a problem during reflow. The minimum recommended number of holes for the SO-8 PowerPAD package is five.
4. Additional vias may be placed anywhere along the thermal plane outside of the thermal pad area. These vias help dissipate the heat generated by the OPA445 IC. These additional vias may be larger than the 13-mil diameter vias directly under the thermal pad. They can be larger because they are not in the thermal pad area to be soldered; thus, wicking is not a problem.
5. Connect all holes to the internal power plane of the correct voltage potential (V−).
6. When connecting these holes to the plane, do not use the typical web or spoke via connection methodology. Web connections have a high thermal resistance connection that is useful for slowing the heat transfer during soldering operations, makeing the soldering of vias that have plane connections easier. In this application, however, low thermal resistance is desired for the most efficient heat transfer. Therefore, the holes under the OPA445 PowerPAD package should make the connections to the int-
ernal plane with a complete connection around the entire circumference of the plated-through hole.
7. The top-side solder mask should leave the terminals of the package and the thermal pad area exposed. The bottom-side solder mask should cover the holes of the thermal pad area. This masking prevents solder from being pulled away from the thermal pad area during the reflow process.
8. Apply solder paste to the exposed thermal pad area and all of the IC terminals.

OPA445

www.ti.com
9. With these preparatory steps in place, the PowerPAD IC is simply placed in position and run through the solder reflow operation as any standard surfacemount component. This preparation results in a properly installed part.
For detailed information on the PowerPAD package, including thermal modeling considerations and repair procedures, see technical brief SLMA002 PowerPAD Thermally-Enhanced Package available for download at www.ti.com.

SBOS156B − MARCH 1987 − REVISED APRIL 2008

Thermal Land (Copper)
Minimum Size 4.8mm x 3.8mm (189 mils x 150 mils)

O PT IO NAL: Additional four vias outside of thermal pad area but under the package.

REQUIRED: Thermal pad area 2.286mm x 2.286mm (90 mils x 90 mils) with five vias (via diameter = 13 mils)
Figure 14. 8-Pin PowerPAD PCB Etch and Via Pattern

TYPICAL APPLICATIONS

R1 100kΩ V1

R2 10kΩ
+40V

OPA445

−40V

V2
R3 100kΩ

R4 9.9kΩ

IL = [(V2 − V1)/R5] (R2/R1)

IL

= (V2 − V1)/1kΩ

Compliance Voltage Range = ±35V

NOTE: R1 = R3 and R2 = R4 + R5

R5 100Ω
Load

+60V

0.1µF

25kΩ

DAC8811 or
DAC7811

0−2mA

Protects DAC During Slewing

OPA445 0.1µF

VO = 0V to +50V at 10mA

−12V

Figure 15. Voltage-to-Current Converter

Figure 16. Programmable Voltage Source

R1

R2

1kΩ

9kΩ

+45V

R3 10kΩ
R4 10kΩ
+45V

OPA445

VIN

±4V

Master

−45V

160V
Piezo(1) Crystal

OPA445

Slave

−45V

NOTE: (1) For transducers with large capacitance the stabilization technique described in Figure 6 may be necessary. Be certain that the Master amplifier is stable before stabilizing the Slave amplifier.

Figure 17. Bridge Circuit Doubles Voltage for Piezo Crystals
13

www.ti.com

PACKAGE OPTION ADDENDUM
29-Jun-2023

PACKAGING INFORMATION

Orderable Device
OPA445ADDA OPA445ADDAR
OPA445AP OPA445APG4
OPA445AU

Status Package Type Package Pins Package Eco Plan

(1)

Drawing

Qty

(2)

ACTIVE SO PowerPAD DDA

ACTIVE SO PowerPAD DDA

ACTIVE

PDIP

P

LIFEBUY

PDIP

P

ACTIVE

SOIC

D

8

75 RoHS & Green

8 2500 RoHS & Green

8

50 RoHS & Green

8

50 RoHS & Green

8

75 RoHS & Green

OPA445AU/2K5

ACTIVE

SOIC

D

8 2500 RoHS & Green

OPA445AUG4

LIFEBUY

SOIC

D

8

75 RoHS & Green

OPA445BM

ACTIVE

TO-99

LMC 8

20 RoHS & Green

Lead finish/ Ball material
(6)
NIPDAUAG NIPDAUAG
NIPDAU NIPDAU NIPDAU
NIPDAU
NIPDAU
AU

MSL Peak Temp Op Temp (°C)
(3)

Level-2-260C-1 YEAR -55 to 125

Level-2-260C-1 YEAR -55 to 125

N / A for Pkg Type -55 to 125

N / A for Pkg Type Level-3-260C-168 HR

-55 to 125 -50 to 125

Level-3-260C-168 HR -55 to 125

Level-3-260C-168 HR -55 to 125

N / A for Pkg Type

Device Marking
(4/5)
OPA445
OPA445
OPA445AP
OPA445AP OPA 445AU OPA 445AU OPA 445AU OPA445BM

(1) The marketing status values are defined as follows: ACTIVE: Product device recommended for new designs. LIFEBUY: TI has announced that the device will be discontinued, and a lifetime-buy period is in effect. NRND: Not recommended for new designs. Device is in production to support existing customers, but TI does not recommend using this part in a new design. PREVIEW: Device has been announced but is not in production. Samples may or may not be available. OBSOLETE: TI has discontinued the produ-
ction of the device.

(2) RoHS: TI defines "RoHS" to mean semiconductor products that are compliant with the current EU RoHS requirements for all 10 RoHS substances, including the requirement that RoHS substance do not exceed 0.1% by weight in homogeneous materials. Where designed to be soldered at high temperatures, "RoHS" products are suitable for use in specified lead-free processes. TI may reference these types of products as "Pb-Free". RoHS Exempt: TI defines "RoHS Exempt" to mean products that contain lead but ar-
e compliant with EU RoHS pursuant to a specific EU RoHS exemption. Green: TI defines "Green" to mean the content of Chlorine (Cl) and Bromine (Br) based flame retardants meet JS709B low halogen requirements of <=1000ppm threshold. Antimony trioxide based flame retardants must also meet the <=1000ppm threshold requirement.

(3) MSL, Peak Temp. - The Moisture Sensitivity Level rating according to the JEDEC industry standard classifications, and peak solder temperature.

(4) There may be additional marking, which relates to the logo, the lot trace code information, or the environmental category on the device.

(5) Multiple Device Markings will be inside parentheses. Only one Device Marking contained in parentheses and separated by a "~" will appear on a device. If a line is indented then it is a continuation of the previous line and the two combined represent the entire Device Marking for that device.

Addendum-Page 1

Samples
Samples Samples Samples Samples Samples
Samples

www.ti.com

PACKAGE OPTION ADDENDUM
29-Jun-2023

(6) Lead finish/Ball material - Orderable Devices may have multiple material finish options. Finish options are separated by a vertical ruled line. Lead finish/Ball material values may wrap to two lines if the finish value exceeds the maximum column width.
Important Information and Disclaimer:The information provided on this page represents TI's knowledge and belief as of the date that it is provided. TI bases its knowledge and belief on information provided by third parties, and makes no representation or warranty as to the accuracy of such information. Efforts are underway to better integrate information from third parties. TI has taken and continues to take reasonable steps to provide representative and accurate information but may not have condu-
cted destructive testing or chemical analysis on incoming materials and chemicals. TI and TI suppliers consider certain information to be proprietary, and thus CAS numbers and other limited information may not be available for release.
In no event shall TI's liability arising out of such information exceed the total purchase price of the TI part(s) at issue in this document sold by TI to Customer on an annual basis.

Addendum-Page 2

PACKAGE MATERIALS INFORMATION

www.ti.com
TAPE AND REEL INFORMATION
REEL DIMENSIONS

TAPE DIMENSIONS K0 P1

Reel Diameter

B0 W

Cavity

A0

A0 Dimension designed to accommodate the component width B0 Dimension designed to accommodate the component length K0 Dimension designed to accommodate the component thickness W Overall width of the carrier tape P1 Pitch between successive cavity centers

Reel Width (W1) QUADRANT ASSIGNMENTS FOR PIN 1 ORIENTATION IN TAPE
Sprocket Holes

Q1 Q2 Q3 Q4

Q1 Q2 Q3 Q4

User Direction of Feed

2-Dec-2022

Pocket Quadrants

*All dimensions are nominal

Device

Package Package Pins Type Drawing

OPA445ADDAR

SO

DDA 8

PowerPAD

OPA445AU/2K5

SOIC

D

8

SPQ 2500

Reel Reel A0 Diameter Width (mm)
(mm) W1 (mm)
330.0 12.4 6.4

B0 (mm)
5.2

K0 (mm)
2.1

P1 (mm)
8.0

W

Pin1

(mm) Quadrant

12.0

Q1

2500 330.0 12.4 6.4 5.2 2.1 8.0 12.0

Q1

Pack Materials-Page 1

www.ti.com TAPE AND REEL BOX DIMENSIONS

PACKAGE MATERIALS INFORMATION
2-Dec-2022

Width (mm)
H

W

L

*All dimensions are nominal Device
OPA445ADDAR OPA445AU/2K5

Package Type SO PowerPAD
SOIC

Package Drawing Pins

DDA

8

D

8

SPQ 2500 2500

Length (mm) 356.0 356.0

Width (mm) 356.0 356.0

Height (mm) 35.0 35.0

Pack Materials-Page 2

www.ti.com
TUBE
T - Tube height

PACKAGE MATERIALS INFORMATION
2-Dec-2022
L - Tube length

W - Tube width

B - Alignment groove width

*All dimensions are nominal Device
OPA445ADDA OPA445AP
OPA445APG4 OPA445AU
OPA445AUG4 OPA445BM

Package Name Package Type

DDA P P D D
LMC

HSOIC PDIP PDIP SOIC SOIC TO-CAN

Pins 8 8 8 8 8 8

SPQ 75 50 50 75 75 20

L (mm) 506.6 506 506 506.6 506.6 532.13

W (mm) 8
13.97 13.97
8 8 21.59

T (µm) 3940 11230 11230 3940 3940 889

B (mm) 4.32 4.32 4.32 4.32 4.32 NA

Pack Materials-Page 3

DDA 8

GENERIC PACKAGE VIEW
PowerPAD TM SOIC - 1.7 mm max height
PLASTIC SMALL OUTLINE

Images above are just a representation of the package family, actual package may vary. Refer to the product data sheet for package details.

4202561/G

DDA0008J
A 1
5.0 4.8 NOTE 3
4 B

PACKAGE OUTLINE
PowerPADTM SOIC - 1.7 mm max height
SCALE 2.400
PLASTIC SMALL OUTLINE

6.2 5.8

TYP

PIN 1 ID AREA

6X 1.27 8

C SEATING PLANE
0.1 C

2X 3.81

4.0 3.8
NOTE 4

5

8X

0.51 0.31

0.1 C A B

1.7 MAX

SEE DETAIL A

0.25 0.10

TYP

4
3.1 2.5

5 EXPOSED THERMAL PAD
0.25 GAGE PLANE

0.15

1

8

0 -8

1.27

0.00

0.40

DETAIL A

2.6

TYPICAL

2.0

NOTES:

4221637/B 03/2016 PowerPAD is a trademark of Texas Instruments.

1. All linear dimensions are in millimeters. Any dimensions in parenthesis are for reference only. Dimensioning and tolerancing per ASME Y14.5M.
2. This drawing is subject to change without notice. 3. This dimension does not include mold flash, protrusions, or gate burrs. Mold flash, protrusions, or gate burrs shall not
exceed 0.15 mm per side. 4. This dimension does not include interlead flash. Interlead flash shall not exceed 0.25 mm per side. 5. Reference JEDEC registration MS-012, variation BA.

www.ti.com

DDA0008J

EXAMPLE BOARD LAYOUT
PowerPADTM SOIC - 1.7 mm max height
PLASTIC SMALL OUTLINE

8X (1.55) 1
8X (0.6) SYMM
6X (1.27) 4
( 0.2) TYP VIA

(2.95) NOTE 9
(2.6) SOLDER MASK
OPENING

SOLDER MASK DEFINED PAD
SEE DETAILS
8

(1.3) TYP

(3.1) SOLDER MASK
OPENING
(4.9) NOTE 9

SYMM

(1.3) TYP

(5.4)

LAND PATTERN EXAMPLE
SCALE:10X

5
METAL COVERED BY SOLDER MASK

0.07 MAX ALL AROUND

0.07 MIN ALL AROUND

SOLDER MASK OPENING

METAL

SOLDER MASK OPENING

METAL UNDER SOLDER MASK

NON SOLDER MASK DEFINED

SOLDER MASK DEFINED

SOLDER MASK DETAILS

4221637/B 03/2016
NOTES: (continued)
6. Publication IPC-7351 may have alternate designs. 7. Solder mask tolerances between and around signal pads can vary based on board fabrication site. 8. This package is designed to be soldered to a thermal pad on the board. For more information, see Texas Instruments literature
numbers SLMA002 (www.ti.com/lit/slma002) and SLMA004 (www.ti.com/lit/slma004). 9. Size of metal pad may vary due to creepage requirement.

www.ti.com

DDA0008J

EXAMPLE STENCIL DESIGN
PowerPADTM SOIC - 1.7 mm max height
PLASTIC SMALL OUTLINE

8X (1.55)

(2.6)
BASED ON 0.125 THICK
STENCIL

1 8

8X (0.6) SYMM

(3.1) BASED ON 0.127 THICK STENCIL

6X (1.27)
4
METAL COVERED BY SOLDER MASK

SYMM (5.4)

5
SEE TABLE FOR DIFFERENT OPENINGS FOR OTHER STENCIL THICKNESSES

SOLDER PASTE EXAMPLE
EXPOSED PAD 100% PRINTED SOLDER COVERAGE BY AREA
SCALE:10X

STENCIL THICKNESS
0.1 0.125 0.150 0.175

SOLDER STENCIL OPENING
2.91 X 3.47 2.6 X 3.1 (SHOWN)
2.37 X 2.83 2.20 X 2.62

4221637/B 03/2016
NOTES: (continued)
10. Laser cutting apertures with trapezoidal walls and rounded corners may offer better paste release. IPC-7525 may have alternate design recommendations.
11. Board assembly site may have different recommendations for stencil design.

www.ti.com

D0008A
A 1
.189-.197 [4.81-5.00]
NOTE 3 4 B

PACKAGE OUTLINE
SOIC - 1.75 mm max height
SCALE 2.800
SMALL OUTLINE INTEGRATED CIRCUIT

.228-.244 TYP [5.80-6.19]
PIN 1 ID AREA 6X .050 [1.27]
8

C SEATING PLANE
.004 [0.1] C

.150-.157 [3.81-3.98]
NOTE 4

2X .150 [3.81]
4X (0 -15 )
5 8X .012-.020 [0.31-0.51] .010 [0.25] C A B

.069 MAX [1.75]

4X (0 -15 ) SEE DETAIL A

.005-.010 TYP [0.13-0.25]
.010 [0.25]

0 -8
.016-.050 [0.41-1.27]

(.041) [1.04]

.004-.010 [0.11-0.25]
DETAIL A
TYPICAL

4214825/C 02/2019
NOTES:
1. Linear dimensions are in inches [millimeters]. Dimensions in parenthesis are for reference only. Controlling dimensions are in inches. Dimensioning and tolerancing per ASME Y14.5M.
2. This drawing is subject to change without notice. 3. This dimension does not include mold flash, protrusions, or gate burrs. Mold flash, protrusions, or gate burrs shall not
exceed .006 [0.15] per side. 4. This dimension does not include interlead flash. 5. Reference JEDEC registration MS-012, variation AA.

www.ti.com

D0008A

EXAMPLE BOARD LAYOUT
SOIC - 1.75 mm max height
SMALL OUTLINE INTEGRATED CIRCUIT

8X (.061 ) [1.55] 1
8X (.024) [0.6]

SYMM

SEE DETAILS 8
SYMM

6X (.050 ) [1.27]

(R.002 ) TYP

5

[0.05]

4

(.213) [5.4]
LAND PATTERN EXAMPLE
EXPOSED METAL SHOWN SCALE:8X

METAL

SOLDER MASK OPENING

SOLDER MASK OPENING

METAL UNDER SOLDER MASK

EXPOSED METAL

.0028 MAX [0.07] ALL AROUND
NON SOLDER MASK DEFINED

EXPOSED METAL
SOLDER MASK DETAILS

.0028 MIN [0.07] ALL AROUND
SOLDER MASK DEFINED

NOTES: (continued)
6. Publication IPC-7351 may have alternate designs. 7. Solder mask tolerances between and around signal pads can vary based on board fabrication site.

4214825/C 02/2019

www.ti.com

D0008A

EXAMPLE STENCIL DESIGN
SOIC - 1.75 mm max height
SMALL OUTLINE INTEGRATED CIRCUIT

8X (.061 ) [1.55] 1
8X (.024) [0.6]

SYMM

8 SYMM

6X (.050 ) [1.27]

(R.002 ) TYP

5

[0.05]

4

(.213) [5.4]

SOLDER PASTE EXAMPLE
BASED ON .005 INCH [0.125 MM] THICK STENCIL SCALE:8X

4214825/C 02/2019 NOTES: (continued) 8. Laser cutting apertures with trapezoidal walls and rounded corners may offer better paste release. IPC-7525 may have alternate
design recommendations. 9. Board assembly site may have different recommendations for stencil design.
www.ti.com

IMPORTANT NOTICE AND DISCLAIMER
TI PROVIDES TECHNICAL AND RELIABILITY DATA (INCLUDING DATA SHEETS), DESIGN RESOURCES (INCLUDING REFERENCE DESIGNS), APPLICATION OR OTHER DESIGN ADVICE, WEB TOOLS, SAFETY INFORMATION, AND OTHER RESOURCES “AS IS” AND WITH ALL FAULTS, AND DISCLAIMS ALL WARRANTIES, EXPRESS AND IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT OF THIRD PARTY INTELLECTUAL PROPERTY RIGHTS.
These resources are intended for skilled developers designing with TI products. You are solely responsible for (1) selecting the appropriate TI products for your application, (2) designing, validating and testing your application, and (3) ensuring your application meets applicable standards, and any other safety, security, regulatory or other requirements.
These resources are subject to change without notice. TI grants you permission to use these resources only for development of an application that uses the TI products described in the resource. Other reproduction and display of these resources is prohibited. No license is granted to any other TI intellectual property right or to any third party intellectual property right. TI disclaims responsibility for, and you will fully indemnify TI and its representatives against, any claims, damages, costs, -
losses, and liabilities arising out of your use of these resources.
TI’s products are provided subject to TI’s Terms of Sale or other applicable terms available either on ti.com or provided in conjunction with such TI products. TI’s provision of these resources does not expand or otherwise alter TI’s applicable warranties or warranty disclaimers for TI products.
TI objects to and rejects any additional or different terms you may have proposed. IMPORTANT NOTICE
Mailing Address: Texas Instruments, Post Office Box 655303, Dallas, Texas 75265 Copyright © 2023, Texas Instruments Incorporated

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:48.964Z
- **Text Length:** 41526 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
