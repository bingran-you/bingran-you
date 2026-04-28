# PDF Document: Zotino Documentation.pdf

**File Path:** Zotino Documentation.pdf

**Processed Date:** 2026-02-10T18:17:18.330Z

**File Size:** 657.11 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 74

**Collection:** TEST

---

## Extracted Text Content

TEC Controller Connector

EEM Port

5432 Zotino

Features
• 32-channel DAC. • 16-bits resolution. • 1 MSPS shared between all channels. • Output voltage ±10V. • HD68 connector. • Can be broken out to BNC/SMA/MCX.
Applications
• Controlling setpoints of PID controllers for laser power stabilization.
• Low-frequency arbitrary waveform generation. • Driving DC electrodes in ion traps.
General Description
The 5432 Zotino is a 4hp EEM module part of the ARTIQ Sinara family. It adds digital-analog converting capabilities to carrier cards such as 1124 Kasli and 1125 Kasli-SoC.
It provides 4 groups of 8 analog channels each, exposed by 1 HD68 connector. Each channel supports output voltage from -10 V to 10 V. All channels can be updated simultaneously. Channels can broken out to BNC, SMA or MCX by adding external 5518 BNC-IDC, 5528 SMAIDC or 5538 MCX-IDC cards.

LVDS Transceiever

HD68

IDC DAC 16-23
IDC DAC 24-31

TEC Cooler

Op-amp x32 1 per ch.

32-CH DAC

LVDS Transceiever

IDC DAC 8-15
IDC DAC 0-7

Figure 1: Simpliﬁed Block Diagram

Figure 2: Zotino Card photo

EEPROM

Revision 1

January 2022

Page 1 of 5

M-Labs Limited

5432 Zotino

January 2022

Electrical Speciﬁcations

The speciﬁcations are based on the datasheet of the DAC IC (AD5372BCPZ1), and various information from Sinara wiki2.
Table 1: Output Speciﬁcations

Parameter Output voltage Output impedance2 Resolution1 3dB bandwidth2 Power consumption2

Min. Typ. Max. Unit

-10

10 V

470 Ω || 2.2nF

16

bits

75

kHz

3

8.7 W

Conditions

The following are cross-talk and transient behavior of Zotino3. In terms of output noise, it was measured after 15 cm IDC cable, IDC-SMA, 100 cm coax (∼50 pF), and 500 kΩ || 150 pF4. The DAC output during noise measurement
is 3.5 V.

Table 2: Electrical Characteristics

Parameter DC cross-talk3 Fall-time3
Negative overshoot3 Rise-time3 Positive overshoot3 Output noise4
@ 100 Hz @ 300 Hz @ 50 kHz @ 1 MHz > 4 MHz

Min.

Typ. -116 18.5 25 0.5% 30 0.65%
500 300 210 4.6

Max. 1

Unit dB µs µs µs -
nV/rtHz nV/rtHz nV/rtHz nV/rtHz nV/rtHz

Conditions / Comments
10% to 90% fall-time 1% to 99% fall-time
1% to 99% rise-time
6.9 Hz bandwidth 6.9 Hz bandwidth 6.9 kHz bandwidth 6.9 kHz bandwidth 6.9 kHz bandwidth

1https://www.analog.com/media/en/technical-documentation/data-sheets/AD5372 5373.pdf 2https://github.com/sinara-hw/Zotino/wiki 3https://github.com/sinara-hw/Zotino/issues/21 4https://github.com/sinara-hw/Zotino/issues/27

Revision 1

January 2022

Page 2 of 5

M-Labs Limited

5432 Zotino

January 2022

Step response are found by setting the DAC register to 0x0000 (-10V) or 0xFFFF (10V) and observe the waveform3.

(a) Switching from -10V to +10V

(b) Switching from +10V to -10V
Figure 3: Step response

Far-end crosstalk is measured using the following setup3.

1. CH1 as aggressor, CH0 as victim
2. CH0, 2-7 terminated, CH 8-31 open
3. Aggressor signal from BNC passed through 15cm IDC26, 2m HD68-HD68 SCSI-3 shielded twisted pair, 15cm IDC26, converted back to BNC with adapters between all different cables & connectors.

Figure 4: Step crosstalk

Revision 1

January 2022

Page 3 of 5

M-Labs Limited
Front Panel Drawings

5432 Zotino

January 2022

Figure 5: 5432 Zotino front panel drawings.
Example ARTIQ code
The sections below demonstrate simple usage scenarios of the 5432 Zotino card with the ARTIQ control system. They do not exhaustively demonstrate all the features of the ARTIQ system. The full documentation for the ARTIQ software and gateware is available at https://m-labs.hk.
Set output voltage
The following example initializes the Zotino card, then emits 1.0 V, 2.0 V, 3.0 V and 4.0 V at channel 0, 1, 2, 3 respectively. Voltages of all 4 channels are updated simultaneously with the use of set_dac().
def prepare(self): self.channels = [0, 1, 2, 3] self.voltages = [1.0, 2.0, 3.0, 4.0]
@kernel def run(self):
self.core.reset() self.core.break_realtime() self.zotino.init()
delay(1*ms) self.zotino.set_dac(self.voltages, self.channels)

Revision 1

January 2022

Page 4 of 5

M-Labs Limited

5432 Zotino

January 2022

Triangular Wave
A triangular waveform at 10 Hz, 16 V peak-to-peak. Timing accuracy of the RTIO system can be demonstrated by the precision of the frequency.
from scipy import signal import numpy
def prepare(self): self.period = 0.1*s self.sample = 128 t = numpy.linspace(0, 1, self.sample) self.voltages = 8*signal.sawtooth(2*numpy.pi*t, 0.5) self.interval = self.period/self.sample
@kernel def run(self):
self.core.reset() self.core.break_realtime() self.zotino.init()
delay(1*ms)
counter = 0 while True:
self.zotino.set_dac([self.voltages[counter]], [0]) counter = (counter + 1) % self.sample delay(self.interval)
Ordering Information
To order, please visit https://m-labs.hk and select the 5432 Zotino in the ARTIQ Sinara crate conﬁguration tool. The card may also be ordered separately by writing to mailto:sales@m-labs.hk.

Information furnished by M-Labs Limited is provided in good faith in the hope that it will be useful. However, no responsibility is assumed by M-Labs Limited for its use. Speciﬁcations may be subject to change without notice.

Revision 1

January 2022

Page 5 of 5

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:18.330Z
- **Text Length:** 5168 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
