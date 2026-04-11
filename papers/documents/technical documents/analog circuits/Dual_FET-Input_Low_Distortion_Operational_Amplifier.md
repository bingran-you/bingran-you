# PDF Document: Dual FET-Input, Low Distortion Operational Amplifi.pdf

**File Path:** Dual FET-Input, Low Distortion Operational Amplifi.pdf

**Processed Date:** 2026-02-10T18:17:34.764Z

**File Size:** 165.85 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 794

**Title:** Dual FET-Input, Low Distortion Operational Amplifier

**Collection:** Technical Documents > Analog Circuits

---

## Extracted Text Content

®
OPA2604

OPA2604

OPA2604

www.burr-brown.com/databook/OPA2604.html

Dual FET-Input, Low Distortion OPERATIONAL AMPLIFIER

FEATURES
q LOW DISTORTION: 0.0003% at 1kHz q LOW NOISE: 10nV/√Hz q HIGH SLEW RATE: 25V/µs q WIDE GAIN-BANDWIDTH: 20MHz q UNITY-GAIN STABLE q WIDE SUPPLY RANGE: VS = ±4.5 to ±24V q DRIVES 600Ω LOADS

APPLICATIONS
q PROFESSIONAL AUDIO EQUIPMENT q PCM DAC I/V CONVERTER q SPECTRAL ANALYSIS EQUIPMENT q ACTIVE FILTERS q TRANSDUCER AMPLIFIER q DATA ACQUISITION

DESCRIPTION

The OPA2604 is a dual, FET-input operational ampli-

fier designed for enhanced AC performance. Very low

distortion, low noise and wide bandwidth provide

superior performance in high quality audio and other

(+)

applications requiring excellent dynamic performance.
(3, 5)

New circuit techniques and special laser trimming of

(–)

dynamic circuit performance yield very low harmonic (2, 6)

distortion. The result is an op amp with exceptional

sound quality. The low-noise FET input of the

OPA2604 provides wide dynamic range, even with high

source impedance. Offset voltage is laser-trimmed to

minimize the need for interstage coupling capacitors.

The OPA2604 is available in 8-pin plastic mini-DIP and SO-8 surface-mount packages, specified for the –25°C to +85°C temperature range.

(8) V+

Distortion Rejection Circuitry*

Output Stage*

(1, 7) VO

(4) V–
* Patents Granted: #5053718, 5019789

SBOS006

International Airport Industrial Park • Mailing Address: PO Box 11400, Tucson, AZ 85734 • Street Address: 6730 S. Tucson Blvd., Tucson, AZ 85706 • Tel: (520) 746-1111 • Twx: 910-952-1111 Internet: http://www.burr-brown.com/ • FAXLine: (800) 548-6133 (US/Canada Only) • Cable: BBRCORP • Telex: 066-6491 • FAX: (520) 889-1510 • Immediate Product Info: (800) 548-6132

© 1991 Burr-Brown Corporation

PDS-11069E

®
POrinPtedAin2U.6S.0A.4October, 1997

SPECIFICATIONS
ELECTRICAL
At TA = +25°C, VS = ±15V, unless otherwise noted.

PARAMETER

CONDITION

MIN

OFFSET VOLTAGE Input Offset Voltage Average Drift Power Supply Rejection
INPUT BIAS CURRENT(1) Input Bias Current Input Offset Current
NOISE Input Voltage Noise Noise Density: f = 10Hz
f = 100Hz f = 1kHz f = 10kHz Voltage Noise, BW = 20Hz to 20kHz Input Bias Current Noise Current Noise Density, f = 0.1Hz to 20kHz

VS = ±5 to ±24V

70

VCM = 0V VCM = 0V

INPUT VOLTAGE RANGE Common-Mode Input Range Common-Mode Rejection
INPUT IMPEDANCE Differential Common-Mode

±12

VCM = ±12V

80

OPEN-LOOP GAIN Open-Loop Voltage Gain
FREQUENCY RESPONSE Gain-Bandwidth Product Slew Rate Settling Time: 0.01%
0.1% Total Harmonic Distortion + Noise (THD+N)
Channel Separation
OUTPUT Voltage Output Current Output Short Circuit Current Output Resistance, Open-Loop

VO = ±10V, RL = 1kΩ

80

G = 100

20Vp-p, RL = 1kΩ

15

G = –1, 10V Step

G = 1, f = 1kHz
VO = 3.5Vrms, RL = 1kΩ f = 1kHz, RL = 1kΩ

RL = 600Ω

±11

VO = ±12V

POWER SUPPLY Specified Operating Voltage Operating Voltage Range Current, Total Both Amplifiers
TEMPERATURE RANGE Specification Storage Thermal Resistance(2), θJA

IO = 0

±4.5

–25 –40

NOTES: (1) Typical performance, measured fully warmed-up. (2) Soldered to circuit board—see text.

OPA2604AP, AU TYP
±1 ±8 80
100 ±4
25 15 11 10 1.5
6
±13 100
1012 || 8 1012 || 10
100
20 25 1.5 1 0.0003
142
±12 ±35 ±40 25
±15 ±10.5
90

MAX ±5
±24 ±12 +85 +125

UNITS
mV µV/°C
dB
pA pA
nV/√Hz nV/√Hz nV/√Hz nV/√Hz µVp-p
fA/√Hz
V dB
Ω || pF Ω || pF
dB
MHz V/µs µs µs
%
dB
V mA mA Ω
V V mA
°C °C °C/W

The information provided herein is believed to be reliable; however, BURR-BROWN assumes no responsibility for inaccuracies or omissions. BURR-BROWN assumes no responsibility for the use of this information, and all use of such information shall be entirely at the user’s own risk. Prices and specifications are subject to change without notice. No patent rights or licenses to any of the circuits described herein are implied or granted to any third party. BURR-BROWN does not authorize or warrant any -
BURR-BROWN product for use in life support devices and/or systems.

®

OPA2604

2

PIN CONFIGURATION
Top View Output A 1 –In A 2 +In A 3 V– 4

DIP/SOIC 8 V+ 7 Output B 6 –In B 5 +In B

ELECTROSTATIC DISCHARGE SENSITIVITY
Any integrated circuit can be damaged by ESD. Burr-Brown recommends that all integrated circuits be handled with appropriate precautions. Failure to observe proper handling and installation procedures can cause damage.
ESD damage can range from subtle performance degradation to complete device failure. Precision integrated circuits may be more susceptible to damage because very small parametric changes could cause the device not to meet published specifications.

ABSOLUTE MAXIMUM RATINGS(1)
Power Supply Voltage ....................................................................... ±25V Input Voltage ............................................................. (V–)–1V to (V+)+1V Output Short Circuit to Ground ............................................... Continuous Operating Temperature ................................................. –40°C to +100°C Storage Temperature ..................................................... –40°C to +125°C Junction Temperature ....................-
................................................ +150°C Lead Temperature (soldering, 10s) AP ......................................... +300°C Lead Temperature (soldering, 3s) AU .......................................... +260°C
NOTE: (1) Stresses above these ratings may cause permanent damage.

ORDERING INFORMATION

PRODUCT
OPA2604AP OPA2604AU

PACKAGE
8-Pin Plastic DIP SO-8 Surface-Mount

TEMP. RANGE
–25°C to +85°C –25°C to +85°C

PACKAGING INFORMATION

PRODUCT

PACKAGE

PACKAGE DRAWING NUMBER(1)

OPA2604AP

8-Pin Plastic DIP

006

OPA2604AU

SO-8 Surface-Mount

182

NOTE: (1) For detailed drawing and dimension table, please see end of data sheet, or Appendix C of Burr-Brown IC Data Book.

®

3

OPA2604

THD + N (%)

Current Noise (fA/ Hz)

TYPICAL PERFORMANCE CURVES
At TA = +25°C, VS = ±15V, unless otherwise noted.

TOTAL HARMONIC DISTORTION + NOISE

vs FREQUENCY

1

Measurement BW = 80kHz

See “Distortion Measure-

VO =

ments” for description of

0.1

3.5Vrms 1kΩ

test method.

0.01 0.001

G = 100V/V G = 10V/V

0.0001 20

G = 1V/V

100

1k

Frequency (Hz)

10k 20k

THD + N (%)

TOTAL HARMONIC DISTORTION + NOISE vs OUTPUT VOLTAGE
0.1 See “Distortion Measurements” for description of test method. V O 1kΩ
0.01 f = 1kHz Measurement BW = 80kHz
0.001

0.0001

0.1

1

10

100

Output Voltage (Vp-p)

Voltage Gain (dB)

120 100
80 60 40 20
0 –20
1

OPEN-LOOP GAIN/PHASE vs FREQUENCY 0

–45 φ
–90

G

–135

–180

10 100 1k 10k 100k 1M 10M Frequency (Hz)

Phase Shift (Degrees) Voltage Noise (nV/ Hz)

INPUT VOLTAGE AND CURRENT NOISE

SPECTRAL DENSITY vs FREQUENCY

1k

1k

100

Voltage Noise

100

10

10

Current Noise

1

1

1

10

100

1k

10k

100k

1M

Frequency (Hz)

100nA 10nA 1nA

INPUT BIAS AND INPUT OFFSET CURRENT vs TEMPERATURE
Input Bias Current

10nA 1nA 100

100

10

Input

Offset Current

10

1

1 –75 –50 –25 0

25 50 75

Ambient Temperature (°C)

0.1 100 125

Input Offset Current (pA) Input Bias Current (pA)

INPUT BIAS AND INPUT OFFSET CURRENT

vs INPUT COMMON-MODE VOLTAGE

10nA

1nA

Input

1nA

Bias Current

100

100
10 –15

10

Input Offset Current

–10

–5

0

1

5

10

15

Common-Mode Voltage (V)

Input Offset Current (pA)

Input Bias Current (pA)

®

OPA2604

4

TYPICAL PERFORMANCE CURVES (CONT)
At TA = +25°C, VS = ±15V, unless otherwise noted.

Input Bias Current (pA)

INPUT BIAS CURRENT vs TIME FROM POWER TURN-ON 1nA
VS = ±24VDC
VS = ±15VDC 100

10

VS = ±5VDC

1

0

1

2

3

4

5

Time After Power Turn-On (min)

Common-Mode Rejection (dB)

COMMON-MODE REJECTION
vs COMMON-MODE VOLTAGE 120

110

100

90

80

–15

–10

–5

0

5

10

15

Common-Mode Voltage (V)

PSR, CMR (dB)

POWER SUPPLY AND COMMON-MODE REJECTION vs FREQUENCY
120
CMR 100

80
–PSR 60

+PSR

40

20

0

10

100

1k

10k 100k

1M

10M

Frequency (Hz)

AOL, PSR, CMR (dB)

AOL, PSR, AND CMR vs SUPPLY VOLTAGE 120

110 CMR
100
AOL 90

80

PSR

70

5

10

15

20

25

Supply Voltage (±VS)

Gain-Bandwidth (MHz)

GAIN-BANDWIDTH AND SLEW RATE
vs SUPPLY VOLTAGE 28

24 Gain-Bandwidth G = +100
20

Slew Rate

16

12 5

10

15

20

Supply Voltage (±VS)

33 29 25 21 17 25

Slew Rate (V/µs) Gain-Bandwidth (MHz)

GAIN-BANDWIDTH AND SLEW RATE

vs TEMPERATURE

28

30

Slew Rate

24

25

20

20

Gain-Bandwidth

G = +100

16

15

12 –75 –50 –25

0 25 50 Temperature (°C)

10 75 100 125

Slew Rate (V/µs)

®

5

OPA2604

TYPICAL PERFORMANCE CURVES (CONT)
At TA = +25°C, VS = ±15V, unless otherwise noted.

Settling Time (µs)

SETTLING TIME vs CLOSED-LOOP GAIN

5

VO = 10V Step

RL = 1kΩ

4

CL = 50pF

3 0.01%
2 0.1%
1

0 –1

–10

–100

Closed-Loop Gain (V/V)

–1000

Channel Separation (dB)

CHANNEL SEPARATION vs FREQUENCY 160
RL = ∞ 140
RL = 1kΩ 120

100
80 10

VO =

A

20Vp-p

RL

B
Measured Output

100

1k

10k

Frequency (Hz)

100k

Output Voltage (Vp-p)

MAXIMUM OUTPUT VOLTAGE SWING vs FREQUENCY 30
VS = ±15V
20

10

0

10k

100k

1M

10M

Frequency (Hz)

Supply Current (mA)

SUPPLY CURRENT vs TEMPERATURE 14

Total for Both Op Amps

12

VS = ±15VDC

VS = ±24VDC

10 VS = ±5VDC

8

6 –75 –50 –25 0

25 50 75

Ambient Temperature (°C)

100 125

LARGE-SIGNAL TRANSIENT RESPONSE

Slew Rate (V/µs) Output Voltage (V)

+10

FPO
30
Bleed to edge

25

–10

20

0

5

10

Time (µs)

15

10 25
®
OPA2604

Output Voltage (mV)

SMALL-SIGNAL TRANSIENT RESPONSE +100

–100

0

1µs

2µs

Time (µs)

6

TYPICAL PERFORMANCE CURVES (CONT)
At TA = +25°C, VS = ±15V, unless otherwise noted.

Short-Circuit Current (mA)

SHORT-CIRCUIT CURRENT vs TEMPERATURE 60
ISC+ and ISC– 50

40

30

20 –75 –50 –25 0

25 50 75

Ambient Temperature (°C)

100 125

Power Dissipation (W)

1 0.9 0.8 0.7 0.6 0.5 0.4 0.3 0.2 0.1
6

POWER DISSIPATION vs SUPPLY VOLTAGE
Worst case sine wave RL = 600Ω (both channels) Typical high-level music RL = 600Ω (both channels)
No signal or no load
8 10 12 14 16 18 20 22 24 Supply Voltage, ±VS (V)

Total Power Dissipation (W)

MAXIMUM POWER DISSIPATION vs TEMPERATURE

1.4

θJ-A = 90°C/W

1.2

Soldered to

Circuit Board

1.0

(see text)

0.8

0.6

Maximum

0.4

Specified Operating

Temperature

0.2

85°C

0

0

25

50

75

100

125

150

Ambient Temperature (°C)

®

7

OPA2604

APPLICATIONS INFORMATION
The OPA2604 is unity-gain stable, making it easy to use in a wide range of circuitry. Applications with noisy or high impedance power supply lines may require decoupling capacitors close to the device pins. In most cases 1µF tantalum capacitors are adequate.
DISTORTION MEASUREMENTS
The distortion produced by the OPA2604 is below the measurement limit of virtually all commercially available equipment. A special test circuit, however, can be used to extend the measurement capabilities.
Op amp distortion can be considered an internal error source which can be referred to the input. Figure 1 shows a circuit which causes the op amp distortion to be 101 times greater than normally produced by the op amp. The addition of R3 to the otherwise standard non-inverting amplifier configuration alters the feedback factor or noise gain of the circuit. The closed-loop gain is unchanged, but the feedback available for error correction is reduced by a factor of 101. This extends the measurement -
limit, including the effects of the signal-source purity, by a factor of 101. Note that the input signal and load applied to the op amp are the same as with conventional feedback without R3. Validity of this technique can be verified by duplicating measurements at high gain and/or high frequency where the distortion is within the measurement capability of the test equipment. Measurements for this data sheet were made with the Audio Precision System One which greatly simplifies such repetitive meas-
urements. The measurement technique can, however, be performed with manual distortion measurement instruments.
CAPACITIVE LOADS
The dynamic characteristics of the OPA2604 have been optimized for commonly encountered gains, loads and operating conditions. The combination of low closed-loop gain

and capacitive load will decrease the phase margin and may lead to gain peaking or oscillations. Load capacitance reacts with the op amp’s open-loop output resistance to form an additional pole in the feedback loop. Figure 2 shows various circuits which preserve phase margin with capacitive load. Request Application Bulletin AB-028 for details of analysis techniques and applications circuits.
For the unity-gain buffer, Figure 2a, stability is preserved by adding a phase-lead network, RC and CC. Voltage drop across RC will reduce output voltage swing with heavy loads. An alternate circuit, Figure 2b, does not limit the output with low load impedance. It provides a small amount of positive feedback to reduce the net feedback factor. Input impedance of this circuit falls at high frequency as op amp gain rolloff reduces the bootstrap action on the compensation network.
Figures 2c and 2d show compensation techniques for noninverting amplifiers. Like the follower circuits, the circuit in Figure 2d eliminates voltage drop due to load current, but at the penalty of somewhat reduced input impedance at high frequency.
Figures 2e and 2f show input lead compensation networks for inverting and difference amplifier configurations.
NOISE PERFORMANCE
Op amp noise is described by two parameters—noise voltage and noise current. The voltage noise determines the noise performance with low source impedance. Low noise bipolarinput op amps such as the OPA27 and OPA37 provide very low voltage noise. But if source impedance is greater than a few thousand ohms, the current noise of bipolar-input op amps react with the source impedance and will dominate. At a few thousand ohms source impedance and above, the OPA2604 will generally provide lower noise.

R1

R2

1 2

R3

OPA2604

Generator Output

Analyzer Input

VO = 10Vp-p (3.5Vrms)

Audio Precision

RL

System One

1kΩ

Analyzer*

* Measurement BW = 80kHz

FIGURE 1. Distortion Test Circuit.

®

OPA2604

8

SIG. DIST. GAIN GAIN R1
1 101 ∞

R2

R3

5kΩ 50Ω

10 101 500Ω 5kΩ 500Ω

100 101 50Ω 5kΩ ∞

IBM PC or
Compatible

(a)

CC

820pF

1 2

RC

OPA2604

ei

750Ω

CC = 120 X 10–12 CL

eo
CL 5000pF

(b)

R2 ei
2kΩ

1 2
OPA2604

CC 0.47µF
RC

10Ω

RC =

R2 4CL X 1010 – 1

CC

=

CL X 103 RC

eo
CL 5000pF

(c)

R1 10kΩ

R2
10kΩ CC

24pF
1 2
OPA2604 ei

CC =

50 R2 CL

RC 25Ω

eo
CL 5000pF

(d)

R1

R2

2kΩ
RC 20Ω
CC 0.22µF
ei

2kΩ
1 2
OPA2604

RC =

R2 2CL X 1010 – (1 + R2/R1)

CC

=

CL X 103 RC

eo
CL 5000pF

R1 ei
2kΩ
RC 20Ω
CC 0.22µF

(e) R2 2kΩ

1 2
OPA2604

eo
CL 5000pF

RC

=

2CL

X

R2 1010 – (1

+

R2/R1)

CC

=

CL X 103 RC

R1 e1
2kΩ

(f) R2 2kΩ

RC 20Ω
CC 0.22µF

1 2
OPA2604

R3

R4

e2

2kΩ

2kΩ

RC =

R2 2CL X 1010 – (1 + R2/R1)

CC

=

CL X 103 RC

eo
CL 5000pF

NOTE: Design equations and component values are approximate. User adjustment is required for optimum performance.

FIGURE 2. Driving Large Capacitive Loads. 9

®
OPA2604

POWER DISSIPATION
The OPA2604 is capable of driving 600Ω loads with power supply voltages up to ±24V. Internal power dissipation is increased when operating at high power supply voltage. The typical performance curve, Power Dissipation vs Power Supply Voltage, shows quiescent dissipation (no signal or no load) as well as dissipation with a worst case continuous sine wave. Continuous high-level music signals typically produce dissipation significantly less than worst case sine waves.

Copper leadframe construction used in the OPA2604 improves heat dissipation compared to conventional plastic packages. To achieve best heat dissipation, solder the device directly to the circuit board and use wide circuit board traces.
OUTPUT CURRENT LIMIT Output current is limited by internal circuitry to approximately ±40mA at 25°C. The limit current decreases with increasing temperature as shown in the typical curves.

R4

22kΩ C3

R1

R2

R3

100pF

VIN

1 2

2.7kΩ

22kΩ

10kΩ

OPA2604

VO

C1 3000pF

C2 2000pF

fp = 20kHz

FIGURE 3. Three-Pole Low-Pass Filter.

R1 VIN
6.04kΩ
1 2
OPA2604

R2 4.02kΩ
R2 4.02kΩ
C1 1000pF
R4 5.36kΩ
C2 1000pF

R5 2kΩ
1 2
OPA2604

1 2

OPA2604

VO

C3 1000pF
Low-pass 3-pole Butterworth f–3dB = 40kHz

See Application Bulletin AB-026 for information on GIC filters.

FIGURE 4. Three-Pole Generalized Immittance Converter (GIC) Low-Pass Filter.

®

OPA2604

10

I-Out DAC COUT

C1*
R1
2kΩ
1 2
OPA2604

R2 2.94kΩ

C2 2200pF
R3
21kΩ

* C1 =~

COUT 2π R1 fc

R1 = Feedback resistance = 2kΩ fc = Crossover frequency = 8MHz

1 2

OPA2604

VO

C3 470pF

Low-pass 2-pole Butterworth f–3dB = 20kHz

FIGURE 5. DAC I/V Amplifier and Low-Pass Filter.

7.87kΩ

–

VIN

100pF

+

7.87kΩ 100kHz Input Filter

1 2
OPA2604
1 2
OPA2604

FIGURE 6. Differential Amplifier with Low-Pass Filter.

10kΩ

10kΩ

1 2
OPA2604

10kΩ

10kΩ

VO G = 1

®

11

OPA2604

Piezoelectric Transducer

100Ω

10kΩ
1 2
OPA2604

G = 101 (40dB)

1MΩ*
* Provides input bias current return path.

* C1 ≈

COUT 2π Rf fc

Rf = Internal feedback resistance = 1.5kΩ fc = Crossover frequency = 8MHz

10

PCM63 5 20-bit 6 D/A Converter 9

C1*
1 2
OPA2604

VO = ±3Vp
To low-pass filter.

FIGURE 7. High Impedance Amplifier.

FIGURE 8. Digital Audio DAC I-V Amplifier.

1/2 OPA2604

A2

1/2 OPA2604

A1

VIN

R2

R3 51Ω
i1

R1 VOUT = VIN (1 + R2/R1)

I2
R4 51Ω

IL = I1 + I2

VOUT

Load

FIGURE 9. Using the Dual OPA2604 Op Amp to Double the Output Current to a Load.

®

OPA2604

12

www.ti.com

PACKAGE OPTION ADDENDUM
3-Oct-2003

PACKAGING INFORMATION

ORDERABLE DEVICE OPA2604AP OPA2604AU
OPA2604AU/2K5

STATUS(1) ACTIVE ACTIVE ACTIVE

PACKAGE TYPE PDIP SOIC SOIC

PACKAGE DRAWING P D D

PINS 8 8 8

PACKAGE QTY 50 100
2500

(1) The marketing status values are defined as follows: ACTIVE: Product device recommended for new designs. LIFEBUY: TI has announced that the device will be discontinued, and a lifetime-buy period is in effect. NRND: Not recommended for new designs. Device is in production to support existing customers, but TI does not recommend using this part in a new design. PREVIEW: Device has been announced but is not in production. Samples may or may not be available. OBSOLETE: TI has discontinued the produ-
ction of the device.

IMPORTANT NOTICE

Texas Instruments Incorporated and its subsidiaries (TI) reserve the right to make corrections, modifications, enhancements, improvements, and other changes to its products and services at any time and to discontinue any product or service without notice. Customers should obtain the latest relevant information before placing orders and should verify that such information is current and complete. All products are sold subject to TI’s terms and conditions of sale supplied at the time of order acknow-
ledgment.
TI warrants performance of its hardware products to the specifications applicable at the time of sale in accordance with TI’s standard warranty. Testing and other quality control techniques are used to the extent TI deems necessary to support this warranty. Except where mandated by government requirements, testing of all parameters of each product is not necessarily performed.
TI assumes no liability for applications assistance or customer product design. Customers are responsible for their products and applications using TI components. To minimize the risks associated with customer products and applications, customers should provide adequate design and operating safeguards.
TI does not warrant or represent that any license, either express or implied, is granted under any TI patent right, copyright, mask work right, or other TI intellectual property right relating to any combination, machine, or process in which TI products or services are used. Information published by TI regarding third-party products or services does not constitute a license from TI to use such products or services or a warranty or endorsement thereof. Use of such information may require a license -
from a third party under the patents or other intellectual property of the third party, or a license from TI under the patents or other intellectual property of TI.
Reproduction of information in TI data books or data sheets is permissible only if reproduction is without alteration and is accompanied by all associated warranties, conditions, limitations, and notices. Reproduction of this information with alteration is an unfair and deceptive business practice. TI is not responsible or liable for such altered documentation.
Resale of TI products or services with statements different from or beyond the parameters stated by TI for that product or service voids all express and any implied warranties for the associated TI product or service and is an unfair and deceptive business practice. TI is not responsible or liable for any such statements.
Following are URLs where you can obtain information on other Texas Instruments products and application solutions:

Products Amplifiers Data Converters DSP Interface Logic Power Mgmt Microcontrollers

amplifier.ti.com dataconverter.ti.com dsp.ti.com interface.ti.com logic.ti.com power.ti.com microcontroller.ti.com

Applications Audio Automotive Broadband Digital Control Military Optical Networking Security Telephony Video & Imaging Wireless

www.ti.com/audio www.ti.com/automotive www.ti.com/broadband www.ti.com/digitalcontrol www.ti.com/military www.ti.com/opticalnetwork www.ti.com/security www.ti.com/telephony www.ti.com/video www.ti.com/wireless

Mailing Address:

Texas Instruments Post Office Box 655303 Dallas, Texas 75265
Copyright  2003, Texas Instruments Incorporated

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:34.764Z
- **Text Length:** 21604 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
