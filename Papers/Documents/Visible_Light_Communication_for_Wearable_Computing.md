# PDF Document: Varshney et al. - 2018 - Visible Light Communication for Wearable Computing.pdf

**File Path:** Varshney et al. - 2018 - Visible Light Communication for Wearable Computing.pdf

**Processed Date:** 2026-02-10T18:15:36.788Z

**File Size:** 4125.48 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2717

**Title:** Visible Light Communication for Wearable Computing

**Collection:** Large Files

---

## Extracted Text Content

Visible Light Communication for Wearable Computing
Ambuj Varshney Uppsala University, Sweden ambuj.varshney@it.uu.se
Luca Mottola Politecnico di Milano, Italy and RISE SICS AB, Sweden luca@sics.se
Thiemo Voigt Uppsala University, Sweden RISE SICS AB, Sweden thiemo@sics.se
ABSTRACT
Visible Light Communication (VLC) is emerging as a means to network computing devices that ameliorates many hurdles of radio-frequency (RF) communications, for example, the limited available spectrum. Enabling VLC in wearable computing, however, is challenging because mobility induces unpredictable drastic changes in light conditions, for example, due to reflective surfaces and obstacles casting shadows. We experimentally demonstrate that such changes are so extreme that no single design of a VLC -
receiver can provide efficient performance across the board. The diversity found in current werable devices complicates matters. Based on these observations, we present three different designs of VLC receivers that i) are individually orders of magnitude more efficient than the state-of-the-art in a subset of the possible conditions, and ii) can be be combined in a single unit that dynamically switches to the best performing receiver based on the light conditions. Our evaluation indicates that dyn-
amic switching incurs minimal overhead, that we can obtain throughput in the order of MBit/s, and at energy costs lower than many RF devices.
1. INTRODUCTION
Visual Light Communication (VLC) [21, 34] is rapidly emerging as a complement or alternative to radio-frequency (RF) communications. VLC, in fact, plays host to several unique features. For example, it provides a wide spectrum available for communication orthogonal to that of RF communications, thus reducing crosstechnology interference, and does not penetrate walls, which facilities spatial re-use and offers a means to physically secure data transfers. Novel networking abstractions, such as room--
area networks [17], are implemented straightforwardly with VLC. Wearable computing is similarly gaining momentum. Wearable devices ranging from smart-watches [3] to embedded sensors harvesting energy from the human body [5, 12] enable a range of novel applications [6]. It may appear natural that the two technologies are destined for a happy marriage. For example, the omnipresent Light Emitting Diodes (LEDs) installed in modern buildings may use VLC to provide context and configura
0 500 1000 1500 2000 2500 3000 Time (millisecond)
0
5
10
15
20
25
30
35
40
45
SNR (dB)
Figure 1: Change in signal-to-noise (SNR) ratio under mobility. Mobility induces rapid changes in the SNR in a span of hundreds of milliseconds. No single VLC receiver design can provide efficient performance across the whole range.
tion information to wearable devices without impacting other co-located wireless transmissions. Provided proper permissions are granted by the owner, LEDs in a building may even be used to deploy dedicated apps on a wearable device as soon as one enters the building; for example, to control HVAC systems therein. Challenge. Such a happy marriage, however, is fundamentally hampered by two key features of wearable computing, that are, mobility and diversity. The efficiency of VLC receivers is a funct-
ion of the signal-to-noise ratio (SNR) between the modulated light carrying the data and the surrounding light conditions. Factors such as reflecting surfaces and obstacles that cast shadows, combined with a person’s mobility, expose different parts of the body to drastically different light conditions. The resulting changes in SNR are unpredictable and drastic [53]. Figure 1, which we experimentally obtained by checking the light conditions on a person’s chest when walking in a university buildin-
g, demonstrate that the SNR may change by tens of dB in a few hundreds of milliseconds. To complicate matters, devices for wearable computing exhibit an impressive degree of diversity in size, capabilities, and intended mode of use. For example, today’s smart-watches are powerful computing machines able to run multiple applications in parallel with rich graphical user interfaces. Although battery-powered,
1
arXiv:1803.08583v1 [cs.NI] 22 Mar 2018

users are supposed to re-charge the devices periodically. To complicate matters further, these devices also exhibit very different battery sizes and capacity [16]. Sensors embedded in fabric, on the other hand, are extremely constrained computing machines that may be solely powered by ambient energy if and when available. Energy preservation thus becomes paramount. With current technology, we argue it is prohibitively difficult, if not impossible, to design a VLC receiver device able to: i) seaml-
essly work in a range of extremely different light conditions, to the extent of causing the SNR changes in Figure 1, and ii) to simultaneously address the needs of powerful devices such as smartwatches as well as those of energy-constrained wearables such as embedded sensors. The problem in i) is particularly acute; the method of light sampling and gain configurations are necessarily optimized for a relatively narrow range of light conditions, which prevents them from working when such conditions -
vary wildly. Contribution. Rather than attacking the problem as a whole, we design three different VLC receivers that individually address a subset of the issues at stake. Next, we show that the receivers can be combined in a single unit that dynamically switches to the best performing receiver depending on the light conditions. Following a survey of existing efforts in the field reported in Section 2, Section 3 describes the design of the individual VLC receivers. Each within its own slice of the-
 problem space, these designs offers performance orders of magnitude better than state-of-the-art VLC receivers. The Ultra-low-power receiver departs from existing VLC designs by employing a solar cell as light sensor, achieving unprecedented energy efficiency whenever the light levels fall within appropriate operating range. It also employs a thresholding circuit to digitize the signal that, unlike traditional designs, autonomously adapts to changes in the rapidly varying light conditions induced-
 by mobility. The High-gain and Low-gain receivers—actually instantiated from the same fundamental design—also employ a thresholding circuit to gain the same benefits under mobility and, unlike existing VLC designs, can be configured to optimize throughput while avoiding saturation effects. Section 4 describes the logic to dynamically switch among the three receivers, whose functioning is intuitively shown in Figure 2. Different performance goals correspond to a different switching logic. Figure 2-
 shows that when optimizing energy per bit, in bright light conditions the Ultra-low-power receiver offers the best performance; otherwise, the High-gain receiver allows one to pick up even very small light emissions and still decode data at reasonable energy costs. The latter applies also when optimizing for throughput, as shown in Figure 2; however, in bright light conditions the High-gain receiver saturates, which makes switch
0 500 1000 1500 2000 2500 3000 Time (millisecond)
0
200
400
600
800
1000
1200
Light intesity (lux)
HIGH SPEED
High gain HIGH SPEED
High gain
Energy/bit LOW POWER
Solar cell
Throughput HIGH SPEED
Low gain
Figure 2: An intuitive illustration of how to switch between the three VLC receivers depending on performance goals and light conditions.
ing to the Low-gain receiver the best choice, allowing one to transfer data up to MBit/s. Such a switching logic can be hosted at the wearable device, which attaches directly to the three receivers. Resource-constrained devices may, however, not have sufficient resources. Still in Section 4, we describe the design of an energy-efficient integration unit dedicated to run the switching logic on behalf of the wearable devices, simplifying the integration and alleviating the processing requirements at-
 the latter. The experimental evaluation we carry out, reported in Section 5, shows that our individual VLC receivers perform orders of magnitude better than state-of-theart VLC receivers: the Ultra-low-power receiver’s energy consumption is lower than even those of lowpower RF chips, and in fact similar to the receivers employed on passive backscatter tags [28], while the Highspeed receiver’s throughput (and energy consumption) is on par with that of WiFi and Bluetooth. Moreover, our switching lo-
gic that we implement on an integration unit together with the VLC receivers, is able to dynamically select the best performing receiver rapidly when the light conditions change which enables low bit errors rates even in mobile settings where the light conditions vary drastically. We present concluding remarks in Section 6.
2. RELATED WORK
VLC in wearable computing represents largely unexplored territory. Significant work exists, however, in high-throughput VLC, embedded VLC, visible lightbased sensing, and body area networks.
VLC and wearable computing. Existing attempts to leverage VLC to network wearable devices have been largely limited to using smartphones or other devices equipped with cameras. Yang et al. develop a system that by changing the polarisation of the light enables any light source to communicate to resource constrained mobile devices equipped with cameras [49]. Lee et al. exploit the rolling shutter effect on cameras to enable communication between LEDs and smartphones,
2

achieving a throughput of 11.32 bps [22]. Hu et al. improve upon that work using color shift keying [15]. They achieve a throughput of 5.2 kbps. All of these systems require an energy-expensive camera, extensive processing and achieve low throughput. This makes it difficult to network wearable devices, in particular, wearable devices that operate only on harvested energy. High-throughput VLC. Whenever throughput is the only performance metric, VLC can deliver remarkable performance [1]. For examp-
le, Tsonev et al. demonstrate data rates exceeding 3 GBit/s [8]. They use specialized photodiodes coupled with high-speed ADCs or oscilloscopes to receive transmissions. Zhang et al. point out that VLC channels are highly deterministic for given node locations and orientations [53]. They show, however, that small changes in movement or orientation can lead to SNR variations of tens of dB even in very short time spans. We observe similar trends as shown in Figure 1. To cope with these issues, Zhang-
 et al. present an in-frame rate adaption scheme. VLC systems predominantly use photodiodes as light sensors [31]. Wang et al. demonstrate the use of a solar panel as a light sensor, coupled to an energy-expensive voltage amplifier [48]. They achieve 11.84 M Bit/s using OFDM as a modulation scheme. The complexity and high energy costs make such solutions unsuitable for wearable computing. As a comparison, our Ultra-low-power receiver does not need voltage amplifiers and ensures little processing o-
verhead for constrained energy harvesting wearable devices. Embedded VLC. Recent efforts to connect embedded devices using VLC achieve much lower throughput. Tian et al. present a VLC system working at light levels imperceptible to human eyes, achieving a throughput of 1.6 kbps [43]. Schmid et al. report a maximum throughput of 800 bps while absorbing 288 mW [37]. Our VLC receivers individually achieve both much higher throughput and lower energy consumption in a subset of the possible light condi-
tions. However, the ability to dynamically switch among them allows us to constantly reap the most benefits across the board. Li et al.’s Retro-VLC enables full-duplex VLC [23]. They achieve 10 kbps of throughput at an energy cost of 125 μW. To achieve low energy consumption, Li et al. use a thresholding circuit, like we do in the Ultralow-power receiver. However, while we use a solar cell as light sensor, Retro-VLC employs a photodiode together with an amplifier which increases power consumption.-
 As a comparison, our Ultra-low-power receiver achieves 60 kbps at a power consumption of 0.5 μW, which represents a 250x improvement. Our work is related to the design of a visible light receiver presented by Wang et al. [46] that adapts to the dynamics of visible light by switching between an LED and a photo-diode. Our design is similar, however, we
switch between two complementary gain photodiodes to tackle the dynamics of visible light caused by mobility in wearable computing. We design an energy-efficient receiver that significantly improves the throughput when compared to their design. Further, the thresholding circuit enables us to dynamically and in hardware calculate the threshold required to detect the high and the low symbols, which enables us to sustain a high throughput even under the dynamics of visible light. As future work, we w-
ill explore the use of an LED as receiver to support operation in very bright light conditions. Our work is also related to Purple VLC [50], and OpenVLC 1.2 [11] which use the Programmable Runtime Unit (PRU) on the Beaglebone platform to support throughput as high as 100 KBit/s. We present a receiver design that achieves an order of magnitude higher maximum throughput, and our ULTRA-LOWPOWER receiver can achieve comparable throughput while consuming three orders of magnitude lower power consumptio-
n. Further, PRUs are only available on certain platforms such as the BeagleBone. We demonstrate that our receiver can integrate with UARTs that are available on the majority of MCU which brings highspeed VLC to a vast number of embedded devices. Energy concerns are extreme for devices that harvest energy, for example, RF transmissions [28], like the Moo [52] and WISP [36] platforms. The energyhungry components traditionally used in VLC do not play along their characteristics. This is precisely why-
 very little work exists to network this kind of devices using VLC. We demonstrate, however, that the performance of our Ultra-low-power receiver makes VLC applicable even for this class of wearable devices.
Visible light-based sensing. VLC is also applied for sensing applications, such as indoor localization and gesture recognition. Epsilon [24] uses fixed LEDs to broadcast beacons to embedded device leading to submeter localization accuracy in office environments. Rajagopal et al. present a VLC-based system that communicates to mobile receivers and embedded tags to enable room level localization [33]. Li et al. describe a system that uses an array of photodiodes to track user gestures by detecting t-
he shadow they cast [25, 26]. Zhang et al.’s system uses light sensors to track the movement of fingers for accurate gesture detection [51]. Similar to us, these systems use off-the-shelf components together with embedded platforms as receivers. Our work, however, targets mobile devices where links drastically change even within short time spans. Finally, we build on our prior work that introduces a solar cell coupled with a thresholding circuit to support ultra-low power visible light sensing. We-
 extend the work to VLC, and demonstrate that this enables VLC on energy-constrained and battery-free devices such as
3

Figure 3: Abstract architecture for a VLC receiver. Different stages are responsible for optimizing different performance metrics. The architecture provides guidance on where to intervene to attain given performance goals.
the WISP. Further, we also develop a high-speed receiver that achieves significantly higher throughput, and can operate under the dynamics of changing visible light. Body area networks. Traditional body area networking employs RF transmissions to exchange data among on-body devices or between these and an external infrastructure [7]. Recent work in the area includes mechanisms that enable commodity input devices, such as those on wearable devices, to communicate securely using the body as a commun-
ication channel [13]. Moreover, Zhang et al. devise a low power mechanism to backscatter and shift ambient wireless signals to network sensors on wearable devices [55]. We see VLC as an addition to the toolbox of body area networks that provides key advantages over RF, such as reducing cross-technology interference, when sending data from an infrastructure to on-body sensors. Our work provides the enabling technology to this end.
3. DESIGN
The fundamental operation in a VLC receiver is to track and digitize changes in light intensity levels generated by a light transmitter, such as controllable LEDs or bulbs. At the receiver, the light intensity changes are eventually translated into useful bits through a multistage pipeline [37]. There is certainly not just one way to structure such a pipeline. Moreover, in the general case it is unclear what stage in the pipeline would be mainly responsible for addressing a specific requirement, s-
uch as energy consumption or throughput. We structure our work around the abstract architecture of Figure 3. The architecture helps us separate different functional stages in the pipeline, define their input/output relations, and focus the selection of individual components based on specific requirements. In fact, we recognize that specific stages in the pipeline are mainly responsible for certain performance metrics. Matching the architecture of Figure 3 against current state of the art [24, 37, -
43, 45, 53] and commercially available components leads us to the following insights:
0 50 100 150 200 Throughput [KBit/s]
0.0
0.5
1.0
1.5
2.0
2.5
3.0
3.5
Peak-to-peak voltage difference [V]
SLMD600H10L KXOB22-01X8F SLMD121H04L SLMD121H08 SLMD121H9L AM1456 AM5610
Figure 4: Performance of commercially-available solar cells. Distinguishing between the ON and OFF states of a VLC transmitter becomes difficult at higher bitrates since the peak-to-peak voltage difference becomes too small.
1. At the first stage of the pipeline, some form of light sensor must convert the incident light to electric energy. We recognize that when employed in VLC receivers, the sensor’s ability to rapidly track changes in light levels impacts the throughput [45].
2. Often, the sensor output must be amplified to boost the energy levels to useful degrees. Such a stage is responsible for both the throughput performance, in that it must match the dynamics of the sensor output, and the energy consumption, as amplifiers may incur significant energy costs [27].
3. Next, we must translate the signal from the analog to the digital domain. This stage is typically most energy-hungry [23, 28], especially when using commonly available ADCs. This reveals that an alternative design for this stage would be sought to reduce energy expenditures.
We show next how these insights leads to two different designs, each optimized for a different performance metric relevant in the wearable domain. We note, the designs we present are instantiated using off-the-shelf components. ASIC versions of the designs can further reduce the size of the receivers.
3.1 Ultra-Low-Power Receiver
To optimize energy consumption in applications employing extremely resource-constrained wearables, we explore a new design both at the amplification and at the analog-to-digital conversion stage. Figure 5 shows our Ultra-low-power prototype. Key design choices are the use of a solar cell for light sensing to spare the amplification stages, and of a thresholding circuit in place of a standard ADC to digitize the signal. Solar cells. A solar cell is similar to a photodiode in construction; the volta-
ge across the terminals changes
4

Comparat or
C
R
Solar cell
Out put
(a) Schematic.
(b) Energy-harvesting WISP device interfaced to a Ultralow-power receiver.
Figure 5: Ultra-low-power receiver. A solar cell replaces the light sensor and amplification stages. This enables energy savings at the expenses of maximum achievable throughput.
with light fluctuations, making it applicable as a light sensor. Solar cells, however, are optimized for a very different purpose compared to photodiodes, that is, to collect as much incoming energy as possible. As a result, solar cells aim at generating the highest possible voltage at the output. To reduce energy consumption, we turn this feature to our advantage by sparing the amplification stage. We therefore employ a solar cell to implement the first two stages in Figure 3. This, however, does-
 not come without disadvantages. Solar cells exhibit capacitance effects, which affect their ability to respond quickly to changing light conditions. The pace of such changes must match the bitrate generated by the VLC transmitter. As a result, solar cells likely limit the achievable throughput, and the selection of the component becomes crucial. Choosing solar cells. We evaluate the responsiveness to changes in light levels of several existing solar cells. As transmitter device, we use a controll-
able LED connected to a pulse-wave generator that creates an alternating sequence of 1s (LED on) and 0s (LED off). We test seven solar cells with a form factor suitable for wearable applications. Five of these are monocrystalline with different dimensions and parameters, while two are amorphous silicon cells. We connect all solar cells to the ADC of a logic analyzer to find the peakto-peak difference in the signal amplitude. Figure 4 demonstrates that all seven solar cells exhibit similar behavior-
s. As the sending bitrate increases, the solar cells’ ability to distinguish between the two LED states diminishes. For our Ultra-low-power receiver, we choose the SLMD121H04L [18] (< $6) cell.
While showing a performance similar to the other cells in terms of responsiveness in the visible spectrum, it is also small and generates high short-circuit currents. This opens up the possibility of harvesting energy for the host device directly from the VLC receiver. Thresholding. At the third stage in the pipeline of Figure 3, the analog signal is to be converted to the digital domain. Common ADCs can perform such conversion. However, their operation is extremely costly in terms of energy consu-
mption [23, 28]. To address this issue, we employ a thresholding circuit in place of a common ADC at this stage. The thresholding circuit converts the voltage fluctuations output by the solar cells to binary values. To that end, the circuit dynamically calculates a moving average of the running signal and compares it to the output of the solar cell to digitize the signal. The circuit therefore autonomously adapts to fluctuating light conditions though changes in the moving average. This turns out -
to be an asset because of the light dynamics induced by mobility, as mentioned in the Introduction. In traditional designs, such a functionality can only be emulated in software, at the expense of frequent energy-hungry ADC operations. Owing to its low energy consumption, we integrate a TS881 [39] comparator ( < $1) from ST Microelectronics. To the best of our knowledge, our Ultra-low-power receiver is the first to exploit a solar cell coupled to a thresholding circuit to achieve a power consumpti-
on as low as 0.5 μW, as we demonstrate in Section 5. On the other hand, the use of a thresholding circuit instead of a common ADC restricts the choice of modulation scheme, in that the circuit only provides binary outputs. This makes it difficult to support complex modulation schemes like OFDM or PAM. It does not prevent, however, supporting schemes most commonly employed in VLC such as FSK, OOK, PPM and PWM [34].
3.2 High-Speed Receiver
To fulfill the high throughput requirement, according to Figure 3 we focus on the sensing and amplification stages. Key design choices are the selection of a highly sensitive photodiode and a transimpedance amplifier (TIA) able to match its dynamics as well as the use of a thresholding circuit. Figure 6 shows the schematic of our High-speed receiver, whereas Figure 8 depicts the corresponding prototype.
Light sensor and amplifier. We use a SLD-70BG [38] photodiode ( < $7) from Silonex. This particular photodiode is most sensitive at a wavelength of to 550 nm, which falls in the visible light spectrum. This allows the sensor to react rapidly to changes in light intensity in the most commonly expected operational conditions. We use a transimpedance amplifier (TIA) at the next stage. A TIA converts small currents to a correspond
5

Amplif ie r
Rf
Cf
Phot odiode
Vbb
Comparat or
C1
Buf f e r
R1
R2
Figure 6: High-speed receiver schematic. The photodiode and transimpedance amplifier allow the device to obtain high throughput. Thresholding circuit digitises signal, and also helps to support mobility.
100 200 300 400 500 600 700 800 Transimpedance Amplifier Gain [Kohm]
0
5
10
15
20
25
Incident Light Intensity (lx)
(a) Minimum light levels to ensure conversion to digital.
100 200 300 400 500 600 700 800 Transimpedance Amplifier Gain [Kohm]
0
500
1000
1500
2000
2500
3000
Incident Light Intensity (lx)
(b) Maximum light levels before saturation.
Figure 7: Amplifier gain compared to light levels. Identifying a gain setting that works under diverse light conditions is difficult. A high gain causes saturation even under moderate light levels. A low gain causes the analog to digital conversion to fail at low light levels.
ing amplified voltage. Crucial to its operation is the gain configuration. This must be carefully set because a TIA can only generate a certain maximum voltage for a fixed supply. If the gain is too high and the output signal reaches the maximum level, the TIA is said to be saturated. At that point, changes in light intensity level go undetected at the output of the TIA. If the gain is too low, the signal to noise ratio (SNR) at the TIA output might be too low to differ between light intensity lev-
els. In addition, TIAs have a fixed gain bandwidth product (GBP), that is, if the gain is increased, the bandwidth decreases and vice-versa. We exemplify these issues with an experiment. We probe the receiver using a controlled LED connected to a waveform generator (AWG). We change the gain of the receiver by altering the resistor value Rf of the TIA. For a given gain setting, we measure the minimum light levels that ensure the receiver is able to receive transmissions, along with the maximum ligh-
t levels at which the receiver can continue receiving transmission before the TIA starts to get saturated. Figure 7 shows the results. As the gain is increased, the minimum light levels needed to operate decreases. For example, Figure 7(a) indicates that when the resistor controlling the gain is set to 756 kΩ, the receiver can
operate at even extremely low light levels of 4 lx. The same gain setting, however, saturates the TIA easily; Figure 7(b) shows this happening below 240 lx, corresponding to moderate levels of natural lighting. Similarly, at a low gain setting of 104 kΩ, the TIA does not saturate even under very bright light of ≈ 2800 lx. The receiver, however, fails to operate at light levels lower than 25 lx. These extremes are, however, representative of the wildly variable light conditions one may experience u-
nder mobility, as shown in Figure 2. To enable operation under diverse light conditions, we design the High-speed receiver with a dual photodiode configuration, thus providing the ability to set two gain configurations. The dual photodiode enables switching between the two configurations as a function of the prevailing light conditions. We call these configurations High-gain and Low-gain receiver, respectively. We configure the high gain setting on the photodiode to be 754 kΩ, and the low gain con-
figuration to be 104 kΩ. Note, however, that increasing the gain comes at the cost of reduced bandwidth because of the fixed bandwidth-gain product we mentioned earlier. As a TIA, we use the Linear Technology LTC6268 [27] (< $7) because of high GBP and low power consumption. Thresholding. Similar to the Ultra-low-power receiver, here again we use a thresholding circuit to convert the signal to the digital domain. We can thus enjoy the same benefits as in the Ultra-low-power with the rapidly varyin-
g light conditions induced by mobility. To support the high throughput that the early stages in this design would yield, we couple a comparator circuit with a low-pass filter, as shown in Figure 6. The latter computes the running average of the signal; the comparator matches the averaged signal with the input. We use a ON Semiconductor NCS2200 [29] as the comparator ( < $1), owing to its low propagation time and energy consumption. We note that similar designs of thresholding circuits are also use-
d elsewhere, for example, ambient backscatter receivers [30, 19, 28, 54], visible-light backscatter [23], and for ultra low-power gesture detection [20].
6

Figure 8: Integration unit prototype. Combing three different receivers helps to tackle rapid changes in light intensity due to mobility.
4. DYNAMIC SWITCHING
The three VLC receivers described in Section 3 provide efficient performance only in a subset of the possible light conditions that wearable devices may experience. To extend their functioning across the board, we design a means to dynamically switch between the three receivers based on current light conditions and as a function of performance goals. Switching logic. We consider two key performance goals: throughput and energy consumption. The logic to switch between receivers is essentially the s-
ame in the two cases; it only requires minor adaptations as a function of the performance goal. When optimizing for throughput, we probe the operating light conditions at the maximum possible rate. Whenever the switching logic executes directly on a sufficiently powerful wearable device, such a sampling may make use of any light sensor already available there. When running on the dedicated integration unit we describe next, this happens through a standard photodiode via ADC calls. In either case, -
the rapid sampling ensures that switching to the appropriate receiver occurs as soon as possible. To identify the appropriate receiver, we match the operating ranges of the individual receivers against current light conditions. In case multiple options are available, we select the receiver with the maximum supported throughput. The switching logic when optimizing for energy is similar. The main difference is the sampling of light conditions, which would be prohibitively expensive in terms of energ-
y consumption if performed at high frequency. To tame this issue, we sample the operating light conditions every ∆ time units. In this case, should multiple options match the operating ranges, we favor the receiver with better energy efficiency.
Integration unit. The wearable device may not be able to host the switching logic; either because of resource scarcity or due to hardware integration issues. To address this issue, we design a custom integration unit that off-loads such processing from the wearable device. The unit includes a low-power MCU dedicated only to manage the dynamic switching between the three VLC receivers as light conditions change, and tasked with the necessary demodulation logic. As a result, the integration unit pre-
sents the three VLC receivers as a single unit to the wearable device, masking the underlying complexity which eases the integration. Our prototype, shown in Figure 8, mounts a Texas Instruments MSP430FR5949 [41] (< $6) chip owing to various low-power modes available. It features 64 KB of FRAM, 2 KB of SRAM, and a maximum running frequency at 24 MHz. A TSL2561 [40] light sensor (< $3) serves to measure the current light conditions, providing the necessary input to the switching logic. We design th-
e switching circuitry to enable both high speed operations and low power consumption. To control the two High-speed receivers, we use an ultra low power switch TI TPS22944 [42] (< $1). This particular device draws only ≈ 1 μA when quiescent, and can turn on within 60 μs to support the current draw of a receiver. Because of the efficient energy performance of the Ultra-low-power receiver, we simply keep it always on. To route the output from the three receivers, we use a four channel multiplexer ch-
ip AD ADG704 [2] (< $3), which draws less than ≈ 0.001 μA and enables switching between different receivers within 20 ns. Finally, whenever the wearable device offers a USB interface, the integration unit can connect to it directly by means of a dedicated a UART-to-USB chip. The chip demodulates the UART signal and further passes it serially through the USB. Using such a chip as demodulator is possible because the thresholding circuit used in all VLC receivers mimics the modulated digital signal. -
Consequently, if an UART signal is transmitted, at the receiver we obtain a signal mirroring the transmitted UART signal. We use an FTDI FT232 [10] (< $5) chip as USB controller.
5. EVALUATION
We measure the performance of the prototypes we build in a range of different conditions. Compared to RF transmissions, VLC is arguably less mature, especially when employed for wearable devices. However, the performance of our prototypes turns out to be competitive with a range of modern RF chips, both in terms of throughput and energy consumption. As a teaser for the results to come, Figure 9 depicts the performance of the Ultra-low-power and High-speed receivers in the energy/throughput plane, -
next to that of representative RF chips.
7

0 500 1000 1500 2000 Throughput [kbps]
10-12
10-11
10-10
10-9
10-8
10-7
10-6
10-5
Energy/Bit (J/bit)
WiFi: CC3100 IEEE 802.15.4: CC2420 VLC: HIGH-SPEED Receiver Bluetooth: CC2650 VLC: ULTRA-LOW-POWER
Figure 9: Energy consumption/throughput comparison among VLC receivers and modern RF chips. The Ultra-low-power and High-speed receivers distinctively meet their performance goals by retaining comparable performance in other metrics as existing RF chips or VLC receivers.
We draw three fundamental observations from the experiments in this section:
1. The Ultra-low-power receiver performs orders of magnitude better in energy consumption than state-of-the-art embedded VLC receivers and RF chips including those designed for low-power operation. Its throughput is comparable with state-ofthe-art VLC receivers for embedded devices [45].
2. The High-speed receiver, in either configuration, performs orders of magnitude better in throughput than state-of-the-art VLC receivers, and actually similarly to WiFi and Bluetooth chips in both throughput and energy consumption.
3. In mobile settings, the switching logic rapidly adapts to fluctuating light conditions and switches to the best performing receiver; the integration unit provides high throughput through the USB interface.
In the following, we detail the settings used to obtain the results of Figure 9 as well as all those described in Section 5.2 to 5.4.
5.1 Settings
Setup. We perform the experiments in our offices, where large windows allow natural light to enter and four fluorescent tube lights provide artificial illumination. The latter flicker at the frequency of the AC signal (50 Hz), which is much lower than the frequency used in VLC and hence bear no impact on the much faster changes due to data transmissions. As VLC transmitter, we use an off-the-shelf LED rated to a maximum intensity of 320 lm and operating at 12 V. We generate the input signal using -
a programmable waveform generator (PWG) [9]. We capture the output of the receiver using a logic analyzer [35]. We use LED driver circuit similar to the one used in our earlier work modBulb [14]. Figure 10 illustrates the placement of VLC transmitter and receiver. The LED is located about 1.3 m away
Figure 10: Experiment setup. Arrows indicate the degrees of freedom for the transmitting LED that result in changes to the light intensity levels. The dashed box indicates the receiver and the co-located light sensor that measures incident light.
from the receiver. We change the light intensity at the receiver by moving the position of the LED, as indicated by the red arrows. Vucic et al. in fact, show that the performance of a VLC receiver depends only on the light intensity levels and not on the length of the channel [44]. To measure the ambient light conditions during the experiments, we use the unit lux, as is done in recent VLC systems [26, 43, 47], and we measure the light conditions by co-locating the receiver with a TSL2561 light s-
ensor [40]. Metrics. We measure three key metrics, used extensively in low power communication systems [4, 19, 28]: (i) the energy per bit, defined as the energy consumed to receive a single bit; (ii) the throughput, defined as the number of useful bits received in a unit of time; and (iii) the bit error rate (BER), defined as number of bits received successfully as compared to those sent. To determine the energy per bit, we connect a 100 Ω resistor in series with the receiver, and measure the pot-
ential drop using the logic analyzer. To measure the BER, we send fixed-length packets using OOK as modulation scheme. In a single round, we send 50 packets of 256 B. We repeat every experiment for three rounds, randomly regenerating the payload for packets sent in each round. We trace sent and received bits using the logic analyzer and measure the achievable throughput as the maximum transmission speed where the BER ≤ 10−3. We perform every experiment with three different levels of incident light-
, and in three different levels of ambient light.
5.2 Ultra-low-power Receiver
We design the Ultra-low-power receiver for energyconstrained wearable devices. The Ultra-low-power establishes a specific design point that clearly reveals in the performance we measure. Throughput. In this experiment, we measure the throughput achieved by the Ultra-low-power receiver in different ambient light conditions and incident light levels,
8

0 20 40 60 80 100 Throughput [ kbps ]
0.000001
0.00001
0.0001
0.001
0.01
0.1
1
BER
Incident: 90 lx Incident: 570 lx Incident: 930 lx
(a) Darkness
0 20 40 60 80 100 Throughput [ kbps ]
0.000001
0.00001
0.0001
0.001
0.01
0.1
1
BER
Incident: 325 lx Incident: 600 lx Incident: 1050 lx
(b) Indoor lighting (210 lx)
10 20 30 40 50 60 70 80 Throughput [ kbps ]
0.000001
0.00001
0.0001
0.001
0.01
0.1
1
BER
Incident: 550 lx Incident: 900 lx Incident: 1200 lx
(c) Natural lighting (350 lx)
Figure 11: Throughput and BER of the Ultra-low-power receiver. The receiver performs well in diverse light conditions. As it is optimized for energy consumption, the receiver achieves a maximum throughput of 50 kbps at a BER of 10−3.
Table 1: Supported throughput at low light intensity levels for different VLC receivers Light High gain/ Low gain/ Ultra low intensity High speed High speed power <4 lx 100 kbps - 12 lx 350 kbps - 25 lx 500 kbps 100 kbps 10kbps 50 lx 600 kbps 700 kbps 30kbps
as a function of the transmitter’s data rate. Figure 11 depicts the results. Generally, as the transmitter’s data rate increases, the BER starts to become significant. The reason for this behaviour is that the SNR decreases at higher data rates, which affects the receiver’s ability to discern between the levels corresponding to 0 and 1 bits. Note the logarithmic scale for the BER in this and the following figures. The receiver tops at 60 kbps at a BER of 10−3 in darkness, as shown in Figure 11(a).-
 The maximum throughput slightly decreases as the levels of ambient lighting increase, as shown in Figure 11(b) and 11(c). In these light conditions, the SNR decreases and therefore the BER starts to increase. Interestingly, however, under sufficiently bright light conditions (≥ 50 lx) the intensity of incident light appears not to impact the maximum throughput, as shown by the different curves in each of the charts of Figure 11. Receiver sensitivity. We next investigate the receive sensitivity, t-
hat is, the minimum incident light levels required for the Ultra-low-power receiver to receive transmissions. In order to reduce power consumption, the Ultra-low-power receiver does not have an amplification stage which could reduce the receiver sensitivity. In this experiment, the VLC transmitter varies its data rate as we change the orientation of the bulb to find the minimum light levels required for successful operation of the receiver. Table 1 demonstrates the result of the experiment. Our re-
sults show that the Ultra-low-power receiver operates at light levels corresponding to 25 lx at a throughput of 10 kbps.
As we increase the incident light levels, the supported throughput improves to 30 kbps corresponding to light levels of 50 lx with little improvements thereafter. The results show that removing the amplification stage decreases the sensitivity, as compared to the High-speed receiver. Mobility. The Ultra-low-power receiver’s thresholding circuit is able to track the variations in the incident light levels rapidly as it is implemented in hardware. This can help to, for example, keep pace with the fa-
st changes in the incident light levels caused by mobility. Therefore, we investigate the performance of the receiver in mobile settings. We program the VLC transmitter to send a random sequence of bits at a data rate of 10 kbps. While transmitting, we change the incident light levels mimicking the changes observed under mobility as in Figure 1. We capture both the analog and digital output of the Ultra-low-power receiver. We measure the SNR and BER every 100 ms. To calculate the SNR, we take the -
signal observed at 25 lx as the noise floor since this is the minimum light level the receiver can detect. Figure 12(a) demonstrates that the SNR changes rapidly with the light intensity. In the figure, we see a lower change in the SNR as compared to Figure 1, owing to the higher noise floor of the receiver. Figure 12(a) shows that the BER does not increase as the light intensity levels change, except when the signal amplitude falls below the noise floor. The latter is indicated by the negative SN-
R in the graph. The results demonstrate that dynamically changing light conditions caused by mobility bear little impact on the achieved BER. This is because the thresholding circuit is able to track rapid changes in the SNR induced by mobility. At higher bitrates than 10 kbps, the BER is similar to the one shown in Figure 11(a) even in mobile settings. We omit these results for brevity. Orientation. Changes in the orientation of a wearable device can also cause significant and rapid changes in th-
e SNR of the signal [53]. We expect, that as in the mobile setting above, the receiver should be able to keep track of the transmitted bits as long as the SNR remains
9

0 2000 4000 6000 8000 10000 Time (millisecond)
10
5
0
5
10
15
SNR (dB)
SNR 0.00001
0.0001
0.001
0.01
0.1
1
BER
BER
(a) Mobility (10 kbps)
0 2000 4000 6000 8000 10000 Time (millisecond)
2
3
4
5
6
7
8
9
10
SNR (dB)
SNR 0.0001
0.001
0.01
0.1
1
BER
BER
(b) Orientation (10 kbps)
0 1000 2000 3000 4000 5000 6000 7000 Time (millisecond)
37.2
37.4
37.6
37.8
38.0
38.2
38.4
38.6
38.8
SNR (dB)
SNR 0.0001
0.001
0.01
0.1
1
BER
BER
(c) Orientation (Flexible solar cell)
Figure 12: Ultra-low-power receiver in mobile scenarios. The Ultra-low-power receiver achieves a low BER. When the SNR is positive, the thresholding circuit adapts to changing light conditions and interprets bits correctly. Ultra-low-power receivers performs well even when there is change in orientation.
Figure 13: Ultra-low-power receiver using flexible solar cell taped to wrist.
positive. To this end, we perform an experiment similar to the one above that evaluated the receiver in a mobile setting. Instead of changing the light intensity at the receiver, we rotate the receiver clockwise such that the angle between the VLC transmitter and receiver changes from 0◦ to 90◦ and back to 0◦. Figure 12(b) demonstrates that the BER does not increase despite the changes in the SNR due to the change in orientation. We also instantiate a Ultra-low-power receiver using a flexible sola-
r cell [32]. Flexible solar cells are appealing for wearable applications as they could be pasted on clothing or even worn on the body to enable both communication and harvesting. As a proof of concept, we tape the flexible solar cell based Ultra-lowpower receiver on the wrist as shown in Figure 13. In an experiment similar to the one above, we slowly rotate our wrist while modulating the VLC transmitter at 10 kbps. Figure 12(c) demonstrates a very small drop of 1 dB in the SNR and hence a low BER-
. Energy consumption. Since the solar cell does not require external energy to operate, the energy consumption of the Ultra-low-power receiver is only dictated by the power consumption of the thresholding circuit. In this circuit, the resistor and the capacitors are passive elements and hence the comparator is the main energy consumer. The comparator TS881 draws 220 nA of current resulting in a power consumption of 0.5 μW at 2.4 V. Furthermore, the comparator enables a maxi
mum throughput of 500 kbps which is sufficient to capture the dynamics of the solar cell. To place these figures in perspective, we also measure the energy consumption of an actual energy harvesting device interfaced with the Ultra-low-power receiver, compared to the energy consumption of the same device when using the on-board ADC. We use the WISP 5.0 platform, shown in Figure 5(b), which is powered solely by the energy harvested from RF signals. To this end, we generate a 10 dBm carrier signal f-
rom a softwaredefined radio located 0.3 m away. Note that the distance only affects the recharge time, not the time the WISP can be active on the harvested energy. We modulate the VLC transmitter to send an alternating sequence of 1s and 0s, and the WISP to toggle a designated GPIO pin when interrupts are received from the receiver. This mirrors the received bits. We trace the GPIO output of the WISP using the logic analyzer. We configure the LED to transmit at 2, 6, 12 and 28 kbps, and accordingl-
y sample the ADC on the WISP at the same rate. Each experiment lasts for about 120 s and is repeated three times. Figure 16 demonstrates that receiving through the ADC is expensive as compared to the baseline case of not receiving at all with only the MCU active. The Ultra-low-power receiver performs two to three times more efficiently than sampling a photodiode. Lower energy consumption allows the WISP to stay active for longer, which essentially means the device can do more useful work within th-
e same power cycle.
5.3 High-speed Receiver
We evaluate to what extent the High-speed receiver can fulfill its main design goal of high throughput. Low gain Throughput. In this experiment, we measure the throughput achieved by the low gain configuration of the High-speed receiver in different ambient light conditions and incident light levels, as a function of the transmitter’s data rate. Figure 14 reports the results. Unlike the results achieved with the Ultra-lowpower receiver shown in Figure 11, here the incident light levels significant-
ly affect the achievable through
10

500 1000 1500 2000 2500 Throughput [ kbps ]
0.000001
0.00001
0.0001
0.001
0.01
0.1
1
BER
Incident: 96 lx Incident: 250 lx Incident: 950 lx
(a) Darkness
500 1000 1500 2000 2500 Throughput [ kbps ]
0.000001
0.00001
0.0001
0.001
0.01
0.1
1
BER
Incident: 300 lx Incident: 500 lx Incident: 1100 lx
(b) Indoor lighting (210 lx)
500 1000 1500 2000 2500 Throughput [ kbps ]
0.000001
0.00001
0.0001
0.001
0.01
0.1
1
BER
Incident: 450 lx Incident: 640 lx Incident: 1100 lx
(c) Natural lighting (350 lx)
Figure 14: Throughput and BER of the High-speed receiver. The receiver performs well in diverse light conditions. The supported bitrate increases with the incident light levels. We achieve a maximum throughput of 1700 kbps at zero BER in darkness.
0 100 200 300 400 500 600 700 800 Throughput [ kbps ]
0.000001
0.00001
0.0001
0.001
0.01
0.1
1
BER
Incident: 5 lx Incident: 18 lx Incident: 120 lx Incident: 210 lx
Figure 15: High gain configuration of Highspeed receiver. Due to the fixed gain bandwidth product, the receiver achieves lower throughput as compared to low-gain configuration, topping at 600 kbps.
put: at high incident light levels, the SNR increases which leads to much better performance. Figure 14(a) shows that, for example, the High-speed receiver achieves a throughput of 1700 kbps in the absence of ambient light and with incident light levels of 925 lx. This throughput is comparable with that of WiFi (IEEE 802.11b) and Bluetooth chips. The BER rises sharply after this point, as we reach the operational limit of the thresholding circuit. At low incident light levels, the maximum achievab-
le throughput is slightly above 1000 kbps. Similar trends are found in different ambient light conditions, as shown in Figure 14(b) and 14(c). The trends are independent of the ambient light conditions since the ambient light only adds a DC offset to the signal. This offset is, however, averaged out by the thresholding circuit we employ in the Highspeed receiver as described in Section 3.2. High gain throughput. Next, we measure the throughput achieved by the high gain configuration of the Highspe-
ed receiver. As the TIA has a fixed gain bandwidth product, we expect that a higher gain lowers the achievable throughput. Due to the high gain, the receiver saturates even at moderate light conditions like in the natural lighting or indoor lighting settings. Hence, we perform the experiment in darkness. Figure 15 demonstrates the result of the experiment. The figure shows that the receiver achieves a maximum throughput of 500
Base line
2 6 12 28
Throughput [kbps]
0
20
40
60
80
100
Active time [ms]
Baseline ADC sampling ULTRA-LOW-POWER receiver
Figure 16: Ultra-low-power receiver compared to ADC sampling on WISP. Using the Ultralow-power compared to sampling a standard photodiode through ADC operations enables improvements of a factor of two to three in active time.
kbps at a BER of 10−3. Furthermore, impressively the receiver achieves a high throughput of 500 kbps even at a very low light intensity level of 18 lx. Sensitivity. Table 1 shows the sensitivity of the two gain configurations of the High-speed receiver. As expected, the high gain configuration can operate at significantly low light levels. At extremely low light levels corresponding to 4 lx, the receiver can still support a throughput of 100 kbps. As the light levels increase slightly, the receive-
r can support a throughput as high as 500 kbps at light levels of 25 lx. On the other hand, the low gain configuration of the receiver starts to operate at light levels of 25 lx and achieves a throughput of 100 kbps. Mobility. We evaluate the High-speed receiver under mobility performing an experiment similar to the one with the Ultra-low-power receiver. In contrast to the earlier experiment, we operate the VLC transmitter at a data rate of 100 kbps, the maximum throughput supported by the high ga-
in receiver at very low light conditions (see Table 1). We induce changes in the light intensity from a minimum of 6 lx to 800 lx at an interval of 8 s. Figure 17(a) shows the resulting SNR as observed by the two High-speed receivers.
11

0123456789 Time (seconds)
40
20
0
20
40
SNR (dB)
Low gain High gain
(a) SNR (100 kbps)
0123456789 Time (second)
0.00001
0.0001
0.001
0.01
0.1
1
BER
Low gain High gain
(b) BER (100 kbps)
0 1000 2000 3000 4000 5000 6000 7000 Time (millisecond)
0
5
10
15
20
25
30
SNR (dB)
SNR 0.000001
0.00001
0.0001
0.001
0.01
0.1
1
BER
BER
(c) Orientation BER (1000 kbps)
Figure 17: High-speed receiver under mobility and orientation change. Despite the fluctuating SNR due to mobility, the receiver does not see the BER increase as long as the SNR is positive. The dashed blue line indicates the level at which the high speed receiver saturates.
0 5 10 15 20 25 30 Time (seconds)
60
40
20
0
20
40
60
SNR (dB)
Low gain High gain
(a) BER (100 kbps)
0 5 10 15 20 25 30
Time (second)
0.00001
0.0001
0.001
0.01
0.1
1
BER
(b) Low gain (100 kbps)
0 5 10 15 20 25 30
Time (second)
0.00001
0.0001
0.001
0.01
0.1
1
BER
(c) High gain (100 kbps)
0 5 10 15 20 25 30
Time (second)
0.00001
0.0001
0.001
0.01
0.1
1
BER
(d) Switching logic (100 kbps) Figure 18: BER observed as Integration unit adapts to changing light conditions. When the operating light conditions change, the Integration unit switches between the two gain configurations of the High-speed receiver. Even though the performance of the individual receivers vary wildly, the BER remains low. Figure 17(b) shows that the BER on individual receivers varies between 0 indicating no error to 1 indicating all bits were lost as the light intensity levels fluc-
tuate. The low gain configuration fails to detect transmissions at lower light levels, while the high gain configuration gets saturated easily at moderate light levels and hence fails to detect transmissions. We note, when the high gain receiver fails to operate due to saturation, the low gain receiver continues to operate at a low BER. On the other hand, when the low gain configuration fails to operate due to a negative SNR, the high gain receiver is able to detect transmissions. We precisely use-
 this fact in the Integration unit to tackle the varying light intensity levels caused by mobility. Orientation change. In the next experiment, we evaluate the High-speed receiver when the orientation changes, similar to the experiment conducted earlier for the Ultralow-power receiver. We configure the VLC transmitter to send at a data rate of 1 M bps which falls in the operating range of the low gain receiver. Next, we change the orientation of the receiver varying its angle from the transmitter -
from 0 (straight up) to 90 degrees and back to 0 degrees. Figure 17(c) demonstrates that the SNR can change by almost 20 dB due to the change in orientation. But even under these conditions the receiver maintains a low BER that is mostly below 10−3. Energy consumption. Throughout the experiments we carry out, the High-speed receiver shows an energy consumption comparable with that of WiFi and Bluetooth chips for the same throughput, as shown in
Figure 9. Even though optimizing this metric was not a design goal for the High-speed receiver, the much higher throughput we obtain compared to the stateof-the-art in embedded VLC is not detrimental to the energy consumption.
5.4 Integration Unit
The switching logic on the Integration unit selects the appropriate receiver for a given light condition and performance goal. Furthermore, it is possible to interface the board with the wearable device. In this section, we evaluate the performance of the switching logic and its integration with the wearable host device. Optimising throughput. First, we evaluate the performance of the switching logic when maximizing the throughput. We program the VLC transmitter to send at a data rate of 100 kbps,-
 which is the maximum throughput of the high gain configuration of the High-speed receiver at low light levels. We alter the light intensity levels by changing the orientation of the bulb rapidly such that the light levels switch between 3 lx and 1500 lx 12 times within 27 s as shown in Figure 18(a). We note, the change of the light levels within the short time span we induce are extreme compared to changes that can be expected under mobility [53], and hence represent a worst case scenario. Figure-
 18(b) and 18(c) show the BER calculated with a moving window of 250 ms. The BER of the individual receivers varies greatly. The BER is 1, that is no bits are received, during low-light conditions or under satu
12

0 500 1000 1500 2000 Throughput [ kbps ]
0.00
0.05
0.10
0.15
0.20
0.25
0.30
0.35
0.40
BER
350 lx 1000 lx
Figure 19: Throughput and BER of the Integration unit using the High-speed receiver and the UART-to-USB converter. We support a maximum throughput of 1500 KBit/s with 0 BER.
ration, while it is low in the receivers’ operating regions. Figure 18(d) shows that the switching logic appropriately selects the best performing receiver, and hence is able to keep the BER low for the whole duration of the experiment.
Optimising energy per bit. Periodically probing the channel to determine the light conditions can be energy expensive due to the use of an ADC. To resolve this, in the switching logic we sample only at a fixed interval ∆. In this experiment we determine how the choice of ∆ effects the response time, that is, the time the receiver needs to respond to changed light conditions. Similar to the earlier experiment involving mobility, we change the light intensity on the receiver. We program the switchin-
g logic to sample at frequencies of 4, 15,35 and 50 Hz, which are low enough to ensure low energy consumption. We record the time it takes the receiver to switch to the high gain configuration when the light intensity decreases. Figure 20 demonstrates that the response time, as expected, decreases with an increasing sampling frequency, and reaches 20 ms for ∆ of 50 Hz. At low sampling frequencies it takes a significant amount of time for the receiver to respond and switch to the best performing re-
ceiver. Throughput. We first evaluate the throughput when the wearable device is interfaced using the USB controller chip. In principle, we expect the performance to be similar to that of High-speed receiver discussed earlier. However, Figure 19 demonstrates that the Integration unit tops at 1500 kbps with zero BER. There are two reasons for this performance. First, UART communication adds an overhead in terms of parity and stop bits. Second, as we trace the output of the UART, we process bytes an-
d not bits as in the previous experiments. Hence, even a single incorrectly received bit makes a whole byte erroneous. Together these two factors lead to a lower throughput compared to a stand-alone High-speed receiver. On the low-power MCU on the Integration unit, we are able to demodulate at a maximum throughput
0 10 20 30 40 50 60 Channel sample frequency [Hz]
0
20
40
60
80
100
120
140
Response time [ms]
Figure 20: Response time to change in channel conditions A higher sampling frequency results in lower response time at the expense of increased energy consumption. We use 50 Hz sampling rate to optimise throughput.
of 1200 kbps, when the MCU is operating at 24 M Hz of operating clock frequency. We expect the achieved throughput to be similar for other wearable platforms employing similar low-power MCUs when interfaced to the High-speed receiver.
6. CONCLUSION
VLC in mobile settings is extremely challenging since mobility induces drastic changes in the SNR. We present three different VLC receiver designs. While outperforming state-of-the-art VLC receivers none of our individual receivers alone can cope with the rapid SNR changes in mobile settings. Hence, we design a switching logic that we implement on an integration unit. Our experiments show that our logic is able to rapidly adapt to the fluctuating light conditions and select the best performing rec-
eiver.
7. REFERENCES
[1] M. Z. Afgani, H. Haas, H. Elgala, and D. Knipp. Visible light communication using OFDM. In TRIDENTCOM, 2006.
[2] Analog Devices. ADG704. http://www.analog.com/media/en/ technicaldocumentation/data-sheets/ADG704.pdf. [3] Apple Watch. http://www.apple.com/se/watch/. [4] D. Bharadia, K. R. Joshi, M. Kotaru, and S. Katti. BackFi: High Throughput WiFi
Backscatter. SIGCOMM Comput. Commun. Rev., 45(4):283–296, Aug. 2015. [5] N. A. Bhatti, M. H. Alizai, A. A. Syed, and L. Mottola. Energy harvesting and wireless transfer in sensor network applications: Concepts and experiences. ACM Trans. Sen. Netw., 12(3):24:1–24:40, Aug. 2016. [6] M. Billinghurst and T. Starner. Wearable devices: new ways to manage information. Computer, 32(1):57–64, 1999.
13

[7] M. Chen, S. Gonzalez, A. Vasilakos, H. Cao, and V. C. Leung. Body area networks: A survey.
Mobile networks and applications, 16(2):171–193, 2011. [8] D. Tsonev et al. A 3-Gb/s Single-LED OFDM-Based Wireless VLC Link Using a Gallium Nitride LED. IEEE Photonics Technology Letters, 26(7):637–640, April 2014. [9] Digilent. Analog discovery 2. https://reference.digilentinc.com/ analog discovery 2:refmanual. [10] FTDI FT232RL. http://www.ftdichip.com/Support/Documents /DataSheets/ICs/DS FT232R.pdf. [11] A. Galisteo, D. Juara, Q. Wang, and D. Giustiniano. Openvlc1.2: Achieving higher throughpu-
t in low-end visible light communication networks. In 2018 14th Annual Conference on Wireless On-demand Network Systems and Services (WONS), pages 117–120, Feb 2018. [12] M. Gorlatova, J. Sarik, G. Grebla, M. Cong, I. Kymissis, and G. Zussman. Movers and shakers: Kinetic energy harvesting for the internet of things. In The 2014 ACM International Conference on Measurement and Modeling of Computer Systems, SIGMETRICS ’14, pages 407–419, New York, NY, USA, 2014. ACM. [13] M. Hessar, V. Iyer, and S. G-
ollakota. Enabling on-body transmissions with commodity devices. In Proceedings of the 2016 ACM International Joint Conference on Pervasive and Ubiquitous Computing, pages 1100–1111. ACM, 2016. [14] K. Hewage, A. Varshney, A. Hilmia, and T. Voigt. modbulb: A modular light bulb for visible light communication. In Proceedings of the 3rd Workshop on Visible Light Communication
Systems, VLCS ’16, pages 13–18, New York, NY, USA, 2016. ACM. [15] P. Hu, P. H. Pathak, X. Feng, H. Fu, and P. Mohapatra. Colorbars: Increasing data rate of led-to-camera communication using color shift keying. In Proceedings of the 11th ACM Conference on Emerging Networking Experiments and Technologies, CoNEXT ’15.
[16] P. Hu, P. Zhang, M. Rostami, and D. Ganesan. Braidio: An integrated active-passive radio for mobile devices with asymmetric energy budgets. In Proceedings of the 2016 Conference on ACM SIGCOMM 2016 Conference, SIGCOMM ’16,
pages 384–397, New York, NY, USA, 2016. ACM. [17] P. A. Iannucci, R. Netravali, A. K. Goyal, and H. Balakrishnan. Room-area networks. In
Proceedings of the 14th ACM Workshop on Hot Topics in Networks. ACM, 2015. [18] IXYS. Slmd121h04l.
http://ixapps.ixys.com/datasheet/slmd121h04ldata-sheet.pdf. [19] B. Kellogg, A. Parks, S. Gollakota, J. R. Smith, and D. Wetherall. Wi-fi backscatter: Internet connectivity for rf-powered devices. In ACM SIGCOMM, New York, NY, USA, 2014. ACM. [20] B. Kellogg, V. Talla, and S. Gollakota. Bringing gesture recognition to all devices. In 11th USENIX Symposium on Networked Systems Design and Implementation (NSDI 14), pages 303–316,
Seattle, WA, Apr. 2014. USENIX Association. [21] T. Komine and M. Nakagawa. Fundamental analysis for visible-light communication system
using led lights. IEEE Transactions on Consumer Electronics, 50(1):100–107, Feb 2004. [22] H.-Y. Lee, H.-M. Lin, Y.-L. Wei, H.-I. Wu, H.-M. Tsai, and K. C.-J. Lin. Rollinglight: Enabling line-of-sight light-to-camera communications. In Proceedings of the 13th Annual International Conference on Mobile Systems, Applications, and Services, MobiSys ’15. [23] J. Li, A. Liu, G. Shen, L. Li, C. Sun, and F. Zhao. Retro-vlc: Enabling battery-free duplex visible light communication for mobile and iot
applications. In International Workshop on Mobile Computing Systems and Applications. ACM, 2015. [24] L. Li, P. Hu, C. Peng, G. Shen, and F. Zhao. Epsilon: A visible light based positioning system. In Conference on Networked Systems Design and Implementation (NSDI), 2014.
[25] T. Li, C. An, Z. Tian, A. T. Campbell, and X. Zhou. Human sensing using visible light
communication. In International Conference on Mobile Computing and Networking (MobiCom), 2015. [26] T. Li, Q. Liu, and X. Zhou. Practical human sensing in the light. In Proceedings of the 14th Annual International Conference on Mobile Systems, Applications, and Services, MobiSys ’16, pages 71–84, New York, NY, USA, 2016. ACM. [27] Linear Technology. LTC 6268. http://cds.linear.com/docs/en/datasheet/62689f.pdf. [28] V. Liu, A. Parks, V. Talla, S. Gollakota, D. Wetherall, and J. R. Smith. Ambient ba-
ckscatter: Wireless communication out of thin air. In ACM SIGCOMM. ACM, 2013. [29] ON Semiconductors. NCS 2200. http://www.onsemi.com/pub link/ Collateral/NCS2200-D.PDF. [30] A. N. Parks, A. Liu, S. Gollakota, and J. R. Smith. Turbocharging ambient backscatter communication. In ACM SIGCOMM. ACM, 2014. [31] P. H. Pathak, X. Feng, P. Hu, and P. Mohapatra. Visible light communication, networking, and sensing: A survey, potential and challenges. IEEE
14

Communications Surveys & Tutorials, 17(4):2047–2077, 2015. [32] Powerfilm solar. Mp3-37. http://www.powerfilmsolar.com. [33] N. Rajagopal, P. Lazik, and A. Rowe. Visual light landmarks for mobile devices. In International
Symposium on Information Processing in Sensor Networks (IPSN), 2014.
[34] S. Rajagopal, R. D. Roberts, and S. K. Lim. IEEE 802.15.7 visible light communication: modulation schemes and dimming support. IEEE Communications Magazine, 50(3):72–82, March 2012. [35] Saleae. https://www.saleae.com. [36] A. P. Sample, D. J. Yeager, P. S. Powledge, A. V. Mamishev, and J. R. Smith. Design of an rfid-based battery-free programmable sensing
platform. IEEE Transactions on Instrumentation and Measurement, 57(11):2608–2615, 2008. [37] S. Schmid, G. Corbellini, S. Mangold, and T. R. Gross. Led-to-led visible light communication
networks. In Internat. Symposium on Mobile Ad Hoc Networking and Computing (MobiHoc), 2013. [38] SILONEX. SLD 70BG. http://www.farnell.com/datasheets/16350.pdf. [39] ST Microelectronics. Ts 881 comparator. [40] TAOS. Tsl2561. https://cdnshop.adafruit.com/datasheets/tsl2561.pdf. [41] Texas Instruments. MSP430FR5949. http://www.ti.com/lit/ds/symlink/msp430fr5949.pdf. [42] Texas Instruments. TPS22944. http://www.ti.com/lit/ds/symlink/tps22943.pdf. [43] Z. Tian, K. Wright, and X. Zhou. The darklight r-
ises: Visible light communication in the dark. In Proceedings of the 22nd Annual International Conference on Mobile Computing and Networking (Mobicom), 2016.
[44] J. Vucic, C. Kottke, S. Nerreter, K. Habel, A. Buttner, K. D. Langer, and J. W. Walewski. 125 Mbit/s over 5 m wireless distance by use of OOK-Modulated phosphorescent white LEDs. In European Conference on Optical Communication, Sept 2009. [45] Q. Wang, D. Giustiniano, and O. Gnawali. Low-cost, flexible and open platform for visible light communication networks. In ACM HOTWIRELESS 2015.
[46] Q. Wang, D. Giustiniano, and M. Zuniga. In light and in darkness, in motion and in stillness: A reliable and adaptive receiver for the internet of lights. IEEE Journal on Selected Areas in Communications, 36(1):149–161, 2018. [47] Q. Wang, M. Zuniga, and D. Giustiniano. Passive communication with ambient light. In Proceedings of the 12th International on Conference on
Emerging Networking EXperiments and
Technologies, CoNEXT ’16, pages 97–104, New York, NY, USA, 2016. ACM. [48] Z. Wang, D. Tsonev, S. Videv, and H. Haas. On the design of a solar-panel receiver for optical wireless communications with simultaneous energy harvesting. IEEE Journal on Selected Areas in Communications, 33(8):1612–1623, 2015. [49] Z. Yang, Z. Wang, J. Zhang, C. Huang, and Q. Zhang. Wearables can afford: Light-weight indoor positioning with visible light. In
Proceedings of the 13th Annual International Conference on Mobile Systems, Applications, and Services, MobiSys ’15, pages 317–330, New York, NY, USA, 2015. ACM. [50] S. Yin, N. Smaoui, M. Heydariaan, and O. Gnawali. Purple vlc: Accelerating visible light communication in room area through pru offloading. 2018. [51] C. Zhang, J. Tabor, J. Zhang, and X. Zhang. Extending mobile interaction through near-field visible light sensing. In Proceedings of the 21st Annual International Conference on Mobile C-
omputing and Networking, MobiCom ’15, 2015. [52] H. Zhang, J. Gummeson, B. Ransford, and K. Fu. Moo: A batteryless computational RFID and sensing platform. Technical Report UM-CS-2011-020, University of Massachusetts Computer Science, 2011. [53] J. Zhang, X. Zhang, and G. Wu. Dancing with light: Predictive in-frame rate selection for visible light networks. In 2015 IEEE Conference on Computer Communications (INFOCOM), pages 2434–2442. IEEE, 2015. [54] P. Zhang, D. Bharadia, K. Joshi, and S. Katti.-
 Hitchhike: Practical backscatter using commodity wifi. In Proceedings of the 14th ACM Conference on Embedded Network Sensor Systems, SenSys ’16. [55] P. Zhang, M. Rostami, P. Hu, and D. Ganesan. Enabling practical backscatter communication for on-body sensors. In Proceedings of the 2016 conference on ACM SIGCOMM 2016 Conference, pages 370–383. ACM, 2016.
15

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:36.788Z
- **Text Length:** 68511 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
