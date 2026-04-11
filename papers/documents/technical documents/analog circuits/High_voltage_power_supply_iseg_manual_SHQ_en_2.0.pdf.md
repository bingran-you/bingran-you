# PDF Document: High voltage power supply, iseg_manual_SHQ_en_2.0.pdf

**File Path:** High voltage power supply, iseg_manual_SHQ_en_2.0.pdf

**Processed Date:** 2026-02-10T18:18:56.118Z

**File Size:** 674.77 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 79

**Collection:** Technical Documents > Analog Circuits

---

## Extracted Text Content

Technical information Last changed on: 04.07.2017
SHQ Series
DIGITAL CONTROLLABLE HIGH PRECISION AC DESKTOP HV SUPPLY • 2 - 6 kV / 1 and 2 channel versions • 2 line display for voltage and current • RS232 or CAN interface • switchable polarity • high precision / very low ripple and noise • high resolution: 1nA (opt. 100pA)/100mV (opt. 10mV) • programmable voltage ramp
www.iseg-hv.com

Table of Contents
Document history............................................................................................................................................................................................ 3 Disclaimer / Copyright..................................................................................................................................................................................... 3 Basic Information........................................................................-
.....................................................................................................................3 Safety notes...................................................................................................................................................................................................... 4 1 General information.....................................................................................................................................................-
.......................................5 1.1 Short description....................................................................................................................................................................................... 5 1.2 Technical Data and auxiliary information..............................................................................................................................................5 2 Functional principle............................................-
................................................................................................................................................. 6 2.1 High voltage supply...................................................................................................................................................................................6 2.2 Digital control unit..............................................................................................................................-
.......................................................7 2.3 Filter............................................................................................................................................................................................................. 7 2.4 Floating HV-outputs.................................................................................................................................................................................. 7 3 Operation............-
..................................................................................................................................................................................................8 3.1 Front panel................................................................................................................................................................................................. 8 3.2 Power Up and operational conditions........................................................-
............................................................................................9
3.2.1 Manual control (“CONTROL” in upper position)........................................................................................................................10 3.2.2 Remote control (“CONTROL” in lower position)........................................................................................................................10 3.2.3 Transition manual control / remote control............................................................................................................-
..................11 3.3 Current measurement ranges...............................................................................................................................................................11 3.4 Current measurement ranges and current trip..................................................................................................................................11 3.5 Safety functions.........................................................................................-
.............................................................................................. 11 3.6 Operation check...................................................................................................................................................................................... 13 4 Appendix.............................................................................................................................................................................................-
................ 14 5 Connectors and cables..................................................................................................................................................................................... 15 6 Accessories......................................................................................................................................................................................................... 15 7 Manufacturer´s contact................................-
................................................................................................................................................... 16

SHQ series |Last changed on: 04.07.2017| www.iseg-hv.com

2/16

Document history

Version 2.0

Date 04.07.2017

Major changes Relayouted version

Disclaimer / Copyright
Copyright © 2017 iseg Spezialelektronik GmbH / Germany. All Rights Reserved. This document is under copyright of iseg Spezialelektronik GmbH, Germany. It is forbidden to copy, extract parts, duplicate for any kind of publication without a written permission of iseg Spezialelektronik GmbH. This information has been prepared for assisting operation and maintenance personnel to enable efficient use.
Basic Information
It is strongly recommended to read the operator’s manual before operation. To avoid injury of users it is not allowed to open the unit. There are no parts which can be maintained by users inside of the unit. Opening the unit will void the warranty.
The mains connector is equipped with basic insulation and a protective earth conductor. The unit may only be operated with protective earth conductor connected.
We decline all responsibility for damages and injuries caused by an improper use of the module. It is strongly recommended to read the operators manual before operation.
The information in this manual is subject to change without notice. We take no responsibility for any error in the document.
We reserve the right to make changes in the product design without reservation and without notification to the users.

WARNING

Violation of guidelines marked with „Warning“ can lead to death or severe injury

WARNING

CAUTION! Violation of guidelines marked with „Attention!“ can lead to damages of the unit or the application
CAUTION

SHQ series |Last changed on: 04.07.2017| www.iseg-hv.com

3/16

INFORMATION INFORMATION

Advices marked with „Information“ give important information

Safety notes

CAUTION!

CAUTION

To avoid injury of users it is not allowed to open the unit. Before any operations on the HV output or the application, the unit has to be switched off and discharge of residual voltage has to be finished. Depending on application residiual voltages can be present for long time periods. These residiual voltages can lead to severe injuries.

Only accessories which meet the manufacturer’s specifications shall be used. If the equipment is used in a manner not specified by this manual, the protection provided by the equipment may be impaired. We decline all responsibility for damages and injuries caused by an improper use of the module.

SHQ series |Last changed on: 04.07.2017| www.iseg-hv.com

4/16

1 General information
1.1 Short description

The modules of the series SHQ are desk top high voltage power supplies which offer output voltages up to 6 kV for the use in industry and research. Main Characteristics:
• High voltage power supplies with front-panel operation and remote control via serial interface • Output voltages with very low ripple and noise • Compact housing with one or two independent high voltage sources • Polarity is manually switchable with switches on the rear side of the housing • Simultaneous display of current and voltage in a High Resolution format on the 2-line LCD • Output short circuit and overload protection

1.2 Technical Data and auxiliary information

SPECIFICATIONS Single channel HV Power Supply Dual channel HV Power Supply Output voltage Vnom Output current Inom Ripple and noise

Stability:

[ΔVout vs. ΔVin] [ΔVout vs. ΔRload]

Temperature coefficient

Voltage

resolution ADC:

measurement

accuracy:

Voltage Settings

Manual / DAC: resolution DAC:

Current measurement

resolution ADC:

Value scope Voltage Ramp
Protection

SHQ 122 SHQ 222 2 kV

SHQ SHQ 124 SHQ 224 4 kV

SHQ 126 SHQ 226 6 kV

6 mA

3 mA

1 mA

Typ.: < 2 mVP-P max.: 5 mVP-P

< 3 • 10-5 < 5 • 10-5

30 ppm/K

100 mV / 6-digit LCD display (Option VHR: 10 mV for SHQ x22 and x24 only)

± (0,05% VOUT + 0,02% Vnom) for one year 10-turn potentiometer / digital via serial interface

100 mV / Option VHR: SHQ x22M with 30 mV; SHQ x24M with 60 mV

2 ranges / 6-digit LCD display

Range mA:

Inom ≥ IOUT ≥ 100 µA, Resolution: 100 nA Option 0n1: Inom ≥ IOUT ≥ 10 µA Resolution: 100 nA Accuracy: ± (0,05% IOUT + 0,02% Inom)

Range µA:

100 µA > IOUT > 20 nA Resolution: 1 nA Accuracy: ± (0,1% IOUT + 20 nA) Option 0n1: 10 µA > IOUT > 2 nA, Resolution: 100 pA Accuracy: ± (0,05% IOUT + 2 nA)

data are guaranteed in the range of (1% * Vnom) < VOUT < Vnom for one year

fixed: 500 V/s (at HV-ON/OFF) variable: 2 ... 255V/s (at remote control)
hardware voltage limit (Vmax rotary switch in 10%-steps) hardware current limit (Imax rotary switch in 10%-steps, Option IWP: setting with 10-turn potentiometer ISET)

SHQ series |Last changed on: 04.07.2017| www.iseg-hv.com

5/16

Interface Line voltage AC (VIN) Fuse Mains connection Connectors
Accessories see Appendix
Temperature ranges Desk case Further environmental conditions
Requirements for assembly, location and mounting
Cleaning instructions
Table 1: Specification

INHIBIT (external signal, TTL, LOW = active) programmable current trip (serial interface)
RS 232-Interface (Option CAN: CAN-Interface → SHQ x4x)
100 VAC .-. 240 VAC / 0,7 – 0,4 A max / 50 – 60 Hz
T 1A L 250V / microfuse 5mm x 20mm, 250V / 1AT
matching used socket according IEC 60320 C13 (125V/10A or 250V/16A)
HV output: Vnom rsp. Typ/AMP/Tyco SHV-Connector (225059-3) INHIBIT: Vmax 5V/1-pin Lemo-hub (ERN.00.250.CTL) RS 232/CAN : Vmax +/-20V/9-pin Sub-D connector

HV output: Rosenberger SHV coupler 57K101-006N3 assembled on HV cable INHIBIT: LEMO FFA.00.250.CTA, standard cable 5V RS 232: custom comercially available RS232 cable, uncrossed, female to male

Operating: 0 ... +40 °C

Storage: -20 ... +60 °C

Size (W/H/D) : (236/100/320) mm3

equipment is for use in closed environment only, maximum altitude of use 2000m, relative humidity 20% to 90% (no condensation), maximum Polution degree level 2

Desk top power supply, backside fan must not be covered (distance of fan to any object at least 3cm), unit should be placed close to an accessible power socket in order to be able to pull the mains plug or operate the main switch in case of emergency

Use a soft, dry, lint-free cloth to clean the units exterior. Avoid getting moisture in any openings. Do not spray any type of liquid directly on the device. Don‘t use solvents, aerosol sprays or abrasives

The built-in options are marked on the rear side next to the type label.
2 Functional principle
The functional principle is described in the block diagram, Appendix.
2.1 High voltage supply
For the high voltage generation a patented highly efficient resonance converter circuit is used, which provides a sinusoidalvoltage with low harmonics for the HV-transformer.

For the high voltage rectification high speed HV-diodes are used. A high-voltage switch, connected to the rectifier allows the selection of the polarity.

The consecutive active HV-filter damps the residual ripple and ensures low ripple and noise values as well as the stability of the output voltage. A precision voltage divider is integrated into the HV-filter to provide a feedback voltage for the output voltage control, an additional voltage divider supplies the signal for the maximum voltage monitoring.

A precision control amplifier compares the feedback voltage with the set value given by the DAC (remote control) or the potentiometer (manual control). Signals for the control of the resonance converter and the stabilizer circuit are derived from the result of the comparison. The two-stage layout of the control circuit results in an output voltage, stabilized with very high precision to the set point.

SHQ series |Last changed on: 04.07.2017| www.iseg-hv.com

6/16

When switching the High Voltage ON or OFF the voltage changes are made with a fixed set ramp, which defines the maximum change rate of the output voltage.
Separate security circuits prevent exceeding of the front-panel switch settings for the current Imax and voltage Vmax limits. A monitoring circuit prevents malfunction caused by low supply voltage.
The internal error detection logic evaluates the corresponding error signals and the external INHIBIT signal and changes the output voltage according to the setup. This also allows the detection of short over currents due to single flashovers.
2.2 Digital control unit
A micro controller handles the internal control, evaluation and calibration functions of both channels.
The effective voltages and currents are read cyclically by an ADC with a connected multiplexer. The readings are processed and displayed on the 4 digit LCD. The current and voltage hardware limits are retrieved cyclically several times per second.
A reference voltage source provides a precise voltage reference for the ADC and the control voltage for the manual operation mode of the unit. In the computer controlled mode the set values for the corresponding channels are generated by a 18-Bit DAC.
2.3 Filter
A special feature of the unit is a tuned filtering concept, which prevents perturbation of the unit by external electromagnetic radiation, as well as the emittance of interferences by the module. A filtering network for the supply voltages is located next to their connectors, the converter circuits of the individual channels are protected by additional filters. The high-voltage filters are housed in individual metal enclosures to shield even minimal interference radiation.
2.4 Floating HV-outputs
Both HV outputs are related to the same ground HV-0V (HV-GND), provided on the outer connector (screen of HV cable) of SHV connectors. The channels can be switched independently in polarity, the output voltages, related to HV-0V (HV-GND), are also independently controlled.
The SHV connectors are mounted isolated to chassis (PE) in order to have a floating HV-0V.
If the floating voltage is increased above 47V a suppressor diode connects HV-0V to PE (chassis) to avoid dangerous voltages between HV-0V and PE/chassis.

Picture 1: Scheme of potentials SHQ series |Last changed on: 04.07.2017| www.iseg-hv.com

7/16

3 Operation
3.1 Front panel

Figure 2: Front panel Option IWP: Hardware current limit with 10-turn potentiometer

Figure 3: Front panel with option IWP
The upper figure shows the panel for the SHQ module in the standard version with 10 percent switches for voltage and current limit.
The front panel for modules with option IWP ″Hardware current limit setting with 10-turn potentiometer″ is shown in the lower figure.

SHQ series |Last changed on: 04.07.2017| www.iseg-hv.com

8/16

Figure 4: Rear side The mains supply (including switch and fuse), a 9-pin Sub-D connector for the RS 232 or CAN interface, the HV-outputs and the polarity switches are located on the rear side.
Before the unit is powered the desired output polarity must be selected by the rotary switch on the rear side. The selected polarity is displayed by a LED on the front panel and a sign on the LCD.
CAUTION!
It is not allowed to change the polarity when channels are switched ON and residual voltage is present! CAUTION

INFORMATION INFORMATION

If the polarity switch setting is not defined (not at one of the end positions) high voltage cannot be switched on.

3.2 Power Up and operational conditions

CAUTION!
It must be ensured that the air ventilation slots on the top, rear and bottom side of the HV unit are not covered. A distance of at least 15 mm to other objects must be provided. CAUTION

SHQ series |Last changed on: 04.07.2017| www.iseg-hv.com

9/16

The unit is powered up with the mains switch on back panel. After Power Up the unit is initialised and a brief function test of the hardware is performed. The display will show manufacturer, serial number, nominal voltage and nominal current.

After a successful function test the unit is in standby mode. CAUTION!

CAUTION

If the HV-ON switch is in position “ON” and CONTROL switch is in upper position (manual control), at the HV-output on the rear side high voltage is generated according to the set voltage chosen via the 10-turn potentiometer with a ramp speed of 500 V/s (hardware ramp).

INFORMATION

INFORMATION

After powering up the device on an AC line voltage of 110 V-AC ± 10% there is a 10 s delay until standby mode!

High voltage output is switched on with HV-ON switch at the front panel. This condition is indicated by the yellow LED above the switch.

Further control is depending on position of the CONTROL switch.
3.2.1 Manual control (“CONTROL” in upper position)
In the manual control mode the output voltage can be set via 10-turn potentiometer from 0V to the maximum voltage. The final position of the potentiometer equals maximum output voltage.

CAUTION!

CAUTION

If the HV-ON switch is switched into position “ON” and CONTROL switch is in upper position (manual control), at the HV-output on the rear side high voltage is generated according to the set voltage chosen via the 10-turn potentiometer with a ramp speed of 500 V/s (hardware ramp).

The effective values for voltage and current are indicated on the two line display. The type of display can be selected by tripping the switch next to the 2 line LCD display. Voltages and / or currents are displayed with the resolution of voltage- and current measurement of the corresponding SHQ series device. The polarity of the output voltage is also indicated.
3.2.2 Remote control (“CONTROL” in lower position)
If the CONTROL switch is in lower position (DAC), high voltage will be activated only after receiving corresponding RS232 commands. There are several commands offering an enhanced control in comparison to front panel control, such as:
• voltage ramp The ramp speed of the output voltage can be chosen in a range of 2V/s to 255V/s
• current trip current trip sets a current threshold. If the threshold is reached the channel will be switched off.

SHQ series |Last changed on: 04.07.2017| www.iseg-hv.com

10/16

3.2.3 Transition manual control / remote control
In manual control mode the internal control voltage is depending on the effective output voltage. Therefore only very low voltage drops occur during transition to remote control mode. During transition from remote control mode to manual control mode, the output voltage will change to the value set with the voltage control potentiometer with a voltage ramp of 500V/s.

CAUTION!
During transition from remote control mode to manual control mode, the output voltage will change to the value set with the voltage control potentiometer with a voltage ramp of 500V/s. This can affect the application. CAUTION

3.3 Current measurement ranges
Each channel has two current measurement ranges. The range can be chosen with the switch labeled with “mA” and “µA” in the channel control field under the display. In “mA” position, there is an automatic switching between the current measurement ranges in case of crossing of the threshold. A switching into the lower measurement range will not take place with option IWP for the case a current limit below the switching threshold is set and this limit already takes effect on the output current. In po-
sition “µA” current measurement will stay in the “µA” range, in case of measurements higher than the threshold “Overflow” will be displayed.
3.4 Current measurement ranges and current trip
With the current measurement range switch it is also chosen which current trip is active. • Position „mA“ The commands Lx and LBx are active • Position „µA“ The command LSx is active
3.5 Safety functions
Each channel has separate safety functions • Hardware-voltage limit Vmax The maximum output voltage can be selected in 10%-steps with the rotary switches Vmax (switch dialed to 10 corresponds to 100%). The output voltage is then limited to Vmax. • Hardware-current limit Imax The maximum output current for each channel can be selected in 10%-steps with the rotary switches Imax (switch dialed to 10 corresponds to 100%) Depending on the position of KILL switch, the unit switches into current control -
mode or the channel is switched Off

INFORMATION INFORMATION

Option IWP: With this Option, the 10 percent switch of Imax is replaced with a 10-turn potentiometer. Smaller steps for current limitation are possible.

SHQ series |Last changed on: 04.07.2017| www.iseg-hv.com

11/16

CAUTION!

CAUTION

A current limit in the upper measurement range (“mA”-position) will only take effect down to the lower threshold of the range, i.e. down to 100 µA or 10 µA, depending on the model option. A lower current limit can only be set with the switch in the position “µA”.

• external interrupt signal INHIBIT
The INHIBIT signal is low-active (TTL low level or connected to signal GND). If INHIBIT is active, output voltage is switched off immediately. After change of INHIBIT to TTL high level, the behaviour of the output voltage is depending on position of KILL switch. If KILL is disabled, in manual control mode the value set with voltage set potentiometer will be restored with hardware ramp (500V/s), in remote control mode the voltage value set via interface will be restored with the software ramp. If K-
ILL is enabled, in both modes the channel will stay switched Off.
• The KILL switch specifies the response on exceeding limits or on the external protection signal at the INHIBIT input as follows

position switch voltage or current limit

KILL

exceeded

Inhibit active

ENABLE (switch Output voltage switched Off in upper position)

Output voltage switched Off

voltage and current limit not exceeded any more and Inhibit not active
manual control: Activation of output voltage via switching of „KILL“ or „HV ON“
remote control: Activation of output voltage via read out of „Sx“ and Start of ramp „Gx“

Status = ERR

Status = INH

DISABLE

limitation of output current,

(switch in lower depending on condition

position)

decrease of output voltage.

Quality of output voltage not

guaranteed

Output voltage switched Off

Status = QUA

Status = INH

manual control: output voltage restored with 500V/s
remote control: output voltage restored with software voltage ramp

Table 2: Overview KILL function

INFORMATION INFORMATION

Interface Control: If “Autostart” is activated (see Command List), the voltage ramp is already started after Status read out (command “S1” or “S2”), the Command to start the voltage change (Command “G1”) is not necessary!

SHQ series |Last changed on: 04.07.2017| www.iseg-hv.com

12/16

3.6 Operation check
The correct operation of the module and the LC display can be verified as follows:
The “CONTROL”-switches must be in the upper position for manual control. For each channel turn the 10-turn potentiometer for VSET by one revolution such that the number in vision panel shows “1” and the circular scale is in position “0”. This setting corresponds to 10% of the nominal Voltage. ISET must be set to a value >10%. No cables are connected to the HV-output. After switching on high voltage with the switch “HV-ON” the yellow LED turns on and a voltage of 10%±1% Vnom is shown in the LCD. Th-
e read LED (“ERROR”) must stay off and the displayed value for the current of the channel should be below 0.2% Inom.

SHQ series |Last changed on: 04.07.2017| www.iseg-hv.com

13/16

4 Appendix

Figure 4: Block diagram SHQ CAN /RS232 interface SHQ series |Last changed on: 04.07.2017| www.iseg-hv.com

14/16

5 Connectors and cables

HV CONNECTOR ASSIGNMENTS

Name

SHV

S08

Figure

Table 2: Connector and pin assignments

CONNECTORS PART NUMBERS (manufacturer code / iseg accessory parts item code)

POWER SUPPLY SIDE

SHV (ROSENBERGER)

Socket

57S501-200N3

Connector

S08 (RADIALL)

Socket

R317.580.00

Connector

Table 3: Connectors part number information

CABLE SIDE 57K101-006N3 / Z590162 R317.0500 / Z592474

CABLE ORDER GUIDE

POWER SUPPLY SIDE CONNECTOR

CABLE CODE

CABLE DESCRIPTION

SHV

04

HV cable shielded 30kV (HTV-30S-22-2)

S08

04

HV cable shielded 30kV (HTV-30S-22-2)

*) Length building examples: 10cm => 0.1, 2.5m => 2.5, 12m => 012 , 999m => 999

Table 4: Guideline for cable ordering
6 Accessories

Item RS 232 cable 3m LEMO FFA.00.250.CTAC31 Power Supply Cord HG/TR-SJT3x16AWG-C13M/3,05m

LOAD SIDE CONNECTOR

ORDER CODE LLL = length in m (*

open

SHV_1C04-LLL

open

S08_1C04-LLL

iseg order number Z200295 Z200793 Z595088

For more information please use the following download links: This document http://download.iseg-hv.com/SYSTEMS/AC_DC/SHQ/iseg_manual_SHQ_en_2.0.pdf CAN Programmers-Guide http://download.iseg-hv.com/SYSTEMS/AC_DC/SHQ/SHQ-CAN-Programmers-Guide.pdf RS232 Programmers-Guide http://download.iseg-hv.com/SYSTEMS/AC_DC/SHQ/SHQ-RS-232-Programmers-Guide.pdf

SHQ series |Last changed on: 04.07.2017| www.iseg-hv.com

15/16

7 Manufacturer´s contact
iseg Spezialelektronik GmbH Bautzner Landstr. 23 01454 Radeberg / OT Rossendorf Germany
Direct Fon: +49 351 26996-0 Fax: +49 351 26996-21 Internet www.iseg-hv.com www.iseg-hv.de E-Mail info@iseg-hv.de support@iseg-hv.de sales@iseg-hv.de

SHQ series |Last changed on: 04.07.2017| www.iseg-hv.com

16/16

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:56.118Z
- **Text Length:** 26645 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
