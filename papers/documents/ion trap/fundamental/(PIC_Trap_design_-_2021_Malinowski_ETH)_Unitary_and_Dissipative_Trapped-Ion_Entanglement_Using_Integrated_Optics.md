# PDF Document: Malinowski - DOCTOR OF SCIENCES of ETH ZURICH (Dr. sc. ETH Zurich).pdf

**File Path:** Malinowski - DOCTOR OF SCIENCES of ETH ZURICH (Dr. sc. ETH Zurich).pdf

**Processed Date:** 2026-02-10T18:18:04.049Z

**File Size:** 23205.17 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 347

**Title:** (PIC Trap design - 2021 Malinowski ETH) Unitary and Dissipative Trapped-Ion  Entanglement Using Integrated Optics

**Collection:** Ion Trap > Fundamental

---

## Extracted Text Content

Unitary and Dissipative Trapped-Ion
Entanglement Using Integrated Optics
A thesis submitted to attain the degree of
DOCTOR OF SCIENCES of ETH ZURICH
(Dr. sc. ETH Zurich)
presented by
MACIEJ MALINOWSKI
M. Phys., University of Oxford
born on 23.10.1992
citizen of Poland
accepted on the recommendation of
Prof. Dr. J. P. Home
Prof. Dr. H. Häffner
DISS. ETH NO. 27797
2021

 

 Abstract
Trapped atomic ions are currently among the most advanced platforms for quantum information processing. While the individual elements of a universal quantum computer have all been demonstrated, it is an outstanding challenge to increase the system size to where it becomes computationally useful. In this thesis, we describe the work towards building scalable trapped-ion quantum information processors. We discuss the construction and operation of a cryogenic (4K) vacuum system designed for testing n-
ovel ion traps. We present the laser setups used for cooling, manipulating and measuring the ions. Particular emphasis is placed on developing a narrow-linewidth high-power qubit control laser. The ion trap at the heart of the cryogenic system is a novel surface-electrode trap with integrated photonics. In contrast to previous demonstrations, where all the lasers were delivered free-space, the qubit control light is delivered through optical fibres, coupled into trap-integrated waveguides, and foc-
used onto the ions using dielectric grating couplers. This allows us to reduce beam-pointing fluctuations, and create small spot sizes which result in high laser-ion coupling rates. We extensively characterise multiple traps with integrated photonics, finding several challenges associated with material charging and heating rates. Nonetheless, we demonstrate high-quality quantum control using trap-integrated light. Notably, we implement two-qubit gates based on the bichromatic Mølmer-Sørensen inter-
action. We use them to prepare maximally-entangled states of two 40Ca+ ions with 99.45(13)% fidelity, limited by wellcharacterised error sources. In addition to laser-based control of the optical qubit, we use global radio-frequency magnetic fields to manipulate the Zeeman qubit. We propose a novel protocol for generating two-ion entanglement by collective optical pumping. In our scheme, the optical qubit control and the Zeeman qubit control are combined with controlled dissipation. We experimenta-
lly verify the performance of the protocol and produce maximally-entangled states of two ions with 99.3(1)% fidelity. In contrast to the unitary control, we show that collective optical pumping produces the same entangled output state regardless of the input state. We further explore the toolbox and advantages of multi-level control of trapped ions. We demonstrate the ability to encode, manipulate and readout a qutrit (quantum three-level system) encoded in a single 40Ca+ ion. This is used to expe-
rimentally demonstrate quantum contextuality through a violation of two non-contextuality inequalities.
iii

 

 Riassunto
Gli ioni atomici intrappolati sono attualmente tra le piattaforme più avanzate per l’elaborazione dell’informazione quantistica. Se da un lato è stato dimostrato che è possibile realizzare tutti i singoli elementi di un computer quantistico universale, aumentare la dimensione del sistema fino renderlo computazionalmente utile rimane ancora una sfida eccezionale. Il lavoro presentato in questa tesi contribuisce allo sviluppo di processori scalabili per l’informazione quantistica basata su ioni intr-
appolati. Discutiamo la costruzione e il funzionamento di un sistema a vuoto criogenico (4K) progettato per testare nuove trappole ioniche. Presentiamo il sistema di laser utilizzati per il raffreddamento, la manipolazione e la misurazione degli ioni, con particolare enfasi sullo sviluppo di un laser di controllo del qubit ad alta potenza e ridotta larghezza di riga. La trappola ionica al centro del sistema criogenico è un nuovo tipo di trappola ad elettrodi di superficie con fotonica integrata. C-
ontrariamente agli esperimenti precedenti, nei quali tutti fasci laser venivano direttamente allineati sugli ioni, nel nostro apparato la luce di controllo del qubit è inviata attraverso fibre ottiche, accoppiata in guide d’onda integrate nella trappola, e focalizzata sugli ioni usando emettitori dielettrici a reticolo. Questo permette di ridurre le fluttuazioni di puntamento del fascio e di focalizzare fortemente la luce laser, il che si traduce in un alto tasso di accoppiamento laser-ione. Abbia-
mo accuratamente caratterizzato diverse trappole con fotonica integrata, trovando numerose sfide associate all’accumulo di cariche nel materiale e al tasso di riscaldamento degli ioni. Tuttavia, abbiamo dimostrato di poter ottenere un alto grado di controllo dello stato quantistico degli ioni utilizzando la luce integrata nella trappola. In particolare, abbiamo implementato porte logiche a due qubit basate sul meccanismo di Mølmer-Sørensen, utilizzate per preparare stati massimamente correlati (en-
tangled) di due ioni 40Ca+ con fedeltà del 99.45(13)%, limitata da fonti di errore ben caratterizzate. Oltre al controllo del qubit ottico basato su laser, usiamo campi magnetici a radiofrequenza globali per manipolare il qubit Zeeman. Proponiamo un nuovo protocollo per la generazione di entanglement tra due ioni mediante pompaggio ottico collettivo. Nel nostro schema, il controllo del qubit ottico e il controllo del qubit Zeeman sono combinati con un meccanismo di dissipazione controllata. Abbiam-
o verificato sperimentalmente le prestazioni del protocollo, e abbiamo preparato stati massimamente correlati di due ioni con fedeltà del 99.3(1)%. Contrariamente al caso di controllo unitario, dimostriamo che il controllo mediante pompaggio ottico collettivo produce lo stesso stato entangled in uscita indipendentemente dallo stato di ingresso. Abbiamo ulteriormente esplorato le possibilità e i vantaggi del controllo di più livelli
v

 Riassunto
elettronici, dimostrando la possibilità di codificare, manipolare e leggere un qutrit (sistema quantistico a tre livelli) supportato da un singolo ione 40Ca+. Grazie a questo, proponiamo una dimostrazione sperimentale di contestualità quantistica basata sulla violazione di due disuguaglianze di non contestualità.
vi

 Acknowledgements
This work wouldn’t have been possible without the help and support of many people. First and foremost, I’d like to thank Chi Zhang. It’s been a privilege building this setup alongside you, and watching you explain the all perplexing mysteries of the experiment one by one with some insane maths. Thanks for keeping the spirits high while everything seems to be falling apart. I’d like to thank Karan Mehta for the last few years of guidance. Having to convince you that something makes sense before doi-
ng it has been both extremely productive and very insightful. I don’t think I really know how to “do science” yet, but the parts I know, I have learned from you! Joseba Alonso – thank you for showing me the ropes of ion trapping, optics, and cryogenics. You and Florian have built an impressive system, and your effort enabled all of these results. Florian Leupold – thank you for all the supervision, frank conversations, setting an example of an organised scientist with work-life balance, and Mathem-
atica packages that I use until today. Matt Grau – thank you for *always* taking the time to help me with literally anything. It’s very clear you’ll be a fantastic professor and an amazing father! Thanks to my office crew – Matt Grau, Vlad Negnevitsky, Thomas Lutz, and Martin Wagener – for all the unproductive work hours. You guys made coming to work really fun, and it was even more fun once the “funbox” was installed. Thanks for the climbing crew – Christoph Fisher, Martin Wagener, Chris Axline, -
plus a number of you who enjoy climbing but not to the point of obsession – for many memorable adventures. It was awesome to see climbing grow from “a thing Maciej does that Matteo occasionally joins” to essentially a group sport. Keep it up! Oliver Wipfli – thank you for all the memorable days working on different experiments in the same room. Hanging out always made me smile. Don’t let that cavity break your spirit! Mirjam Bruttin – thank you for making our work possible, fixing the situation wh-
enever I forgot to pay an invoice, remembering all the important occasions, and keeping the group together! Thanh Long Nguyen – thank you for your wizardry with construction, electronics and QuTiP. We were very lucky to have you work with us, and apologies for not providing you with long ion strings to run your experiments on in exchange. Thanks to the students I had a pleasure to supervise: Andrei Militaru, Stefanie Miller, Sebastian Saner, Vilasini Venkatesh, and Kevin Reuer. You guys were all f-
antastic, and it was really enjoyable to work with you.
vii

 Acknowledgements
Shreyans Jain – thank you for your friendship, great conversations, and your bold attitude! Roland Matt – thanks for making me lough out loud and teaching me physics, often at once. Thanks in addition to Christa Flühmann, Frieder Lindenfelser, Matteo Marinelli, David Nadlinger, and Robin Oswald. You guys made me feel very welcome when I first joined the group, and I really enjoyed our chats and all the time spent together. Thanks to all of you who contributed to the work shown in this thesis in wa-
ys big and small. Special acknowledgements go to Martin Stadler and Vlad Negnevitsky for their tremendous work on the control system, and patience chasing all the bugs that I introduced. Thank you to my theory collaborators, Florentin Reiter and Ivan Rojkov, for helping me understand dissipative processes. Thank you to Daniel Kienzler for all the extremely helpful guidance and advice. Thank you to Carmelo Mordini and Alfredo Ricci Vasquez. I couldn’t have hoped for the experiment to end up in bett-
er hands, and I really enjoyed the relatively brief period of working together. Mirjam Bruttin – thank you for keeping the group running, remembering all the important occasions, and always sorting out my invoicing mistakes! I can’t even count how many times you’ve helped me with issues big and small, and I always enjoy talking with you. Thanks to all the others who made the TIQI group such a nice place to work – Utku Altunkaya, Gillen Beck, Tanja Behrle, Celeste Carruth, Peter Clements, Jeremy Fl-
annery, David Holzapfel, Luca Huber, Francesco Lancellotti, Hsiang-yu Lo, Brennan MacDonald-de Neeve, Cagri Oenal, Henry Passagem, Simon Ragg, He Ran, Tobias Sägesser, Ilia Sergachev, Nick Schwegler, and Klara Theophilo. Thank you to my family. Just like you, I know it’s not easy to be away from those dearest to you. Thank you for all those moments we get to spend together, and for your support in between. Last but not least, thank you to ♥ Chiara Decaroli ♥. PhDs have their ups and down, but the -
last 5 years have been the happiest of my life. I’m very lucky you said “yes”, and even luckier that later you said “I do”. I’m looking forward to spending the rest of our lives together!
viii

 Contents
Abstract iii
Riassunto v
Acknowledgements vii
List of Acronyms xv
1. Introduction 1
2. Quantum information with individual trapped ions 7 2.1. Trapping ions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 2.1.1. Why trapped ions? . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 2.1.2. Paul trap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 2.1.3. Surface-electrode traps . . . . . . . . . . . . . . . . . . . . . . . . . . 10 2.1.4. Producing ions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 13 2.2. Controlling i-
ons . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14 2.2.1. Level structure . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14 2.2.2. Electric dipole transitions . . . . . . . . . . . . . . . . . . . . . . . . 15 2.2.3. Electric quadruple transitions . . . . . . . . . . . . . . . . . . . . . . 17 2.2.4. Magnetic dipole transitions . . . . . . . . . . . . . . . . . . . . . . . 18 2.2.5. Sideband transitions . . . . . . . . . . . . . . . . . . . . . . . . . . . 19 2-
.2.6. Full Hamiltonian . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 22 2.2.7. Encoding a qubit . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 22 2.2.8. Closed and open-system dynamics . . . . . . . . . . . . . . . . . . . 23 2.3. Quantum control . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 24 2.3.1. Rabi oscillations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 25 2.3.2. AC Stark shifts . . . . . . . . . . . . . . . . . . . . . . . . . . . -
. . . 26 2.3.3. Transition broadening and off-resonant excitations . . . . . . . . . . 28 2.3.4. Decay and saturation . . . . . . . . . . . . . . . . . . . . . . . . . . 29 2.3.5. State preparation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30 2.3.6. Optical qubit read-out . . . . . . . . . . . . . . . . . . . . . . . . . . 31 2.3.7. Zeeman qubit read-out . . . . . . . . . . . . . . . . . . . . . . . . . . 34 2.4. Entangling ions . . . . . . . . . . . . . . . . . . . . . . . . . . .-
 . . . . . . . 35 2.4.1. State-dependent force . . . . . . . . . . . . . . . . . . . . . . . . . . 35
ix

 Contents
2.4.2. MS gate . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 37 2.4.3. Phase-modulated Mølmer-Sørensen (MS) gates . . . . . . . . . . . . 40 2.4.4. Measuring entanglement . . . . . . . . . . . . . . . . . . . . . . . . . 42 2.5. Cooling ions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 45 2.5.1. Role of ion temperature . . . . . . . . . . . . . . . . . . . . . . . . . 45 2.5.2. Doppler cooling . . . . . . . . . . . . . . . . . . . . . . . . . . . . -
. . 48 2.5.3. EIT cooling . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 49 2.5.4. Resolved sideband cooling . . . . . . . . . . . . . . . . . . . . . . . . 51
3. Experimental setup 53 3.1. Cryogenic vacuum system . . . . . . . . . . . . . . . . . . . . . . . . . . . . 53 3.1.1. Pulse tube stabilisation . . . . . . . . . . . . . . . . . . . . . . . . . 58 3.1.2. Helium dewar pressure control . . . . . . . . . . . . . . . . . . . . . 60 3.1.3. Modular radiation shields . . . . . . . . . . . . . . . . . . . . . . . . 62 3.1.4. Two-piece outer vacuum chamber . . . . . . . . . . . . . . . . . . . . 63 3.1.5. Room-temperature oven . . . . . . . . . . . . . . -
. . . . . . . . . . . 63 3.1.6. Pumping and cool-down . . . . . . . . . . . . . . . . . . . . . . . . . 65 3.2. 4 K chamber . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 65 3.2.1. Magnetic field shielding . . . . . . . . . . . . . . . . . . . . . . . . . 67 3.2.2. Welded shell . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 68 3.2.3. Chamber panels . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 70 3.2.4. Trap mounting . . . . . . . . . . . . . . .-
 . . . . . . . . . . . . . . . 71 3.2.5. Atom sources . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 71 3.3. Ion traps . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 75 3.3.1. Gold on quartz trap . . . . . . . . . . . . . . . . . . . . . . . . . . . 75 3.3.2. CMOS trap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 76 3.3.3. Waveguide-integrated traps . . . . . . . . . . . . . . . . . . . . . . . 77 3.4. Electrical control . . . . . . . . -
. . . . . . . . . . . . . . . . . . . . . . . . . 80 3.4.1. Cryogenic electronics . . . . . . . . . . . . . . . . . . . . . . . . . . . 80 3.4.2. Signal delivery . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 85 3.4.3. Magnetic field coils and rings . . . . . . . . . . . . . . . . . . . . . . 90 3.4.4. Device control . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 92
4. Free-space and integrated optics 97 4.1. Basic laser control . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 97 4.1.1. Gaussian beams . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 97 4.1.2. Frequency stabilisation . . . . . . . . . . . . . . . . . . . . . . . . . . 100 4.1.3. Acousto-optic modulation . . . . . . . . . . . . . . . . . . . . . . . . 102 4.1.4. Optical fibers . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 104 4.2. Photoionization lasers .-
 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 107 4.2.1. λ = 423 nm beamline . . . . . . . . . . . . . . . . . . . . . . . . . . . 107
x

 Contents
4.2.2. 375 nm beamline . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 107 4.2.3. 388 nm beamline . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 108 4.3. Dipole lasers . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 109 4.3.1. Repumper beamlines . . . . . . . . . . . . . . . . . . . . . . . . . . . 109 4.3.2. 397 nm laser . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 109 4.3.3. Dipole laser frequency control . . . . . . . . . . . . . . .-
 . . . . . . . 112 4.4. Quadrupole laser . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 112 4.4.1. High-finesse Pound–Drever–Hall (PDH) lock . . . . . . . . . . . . . 112 4.4.2. Servo bumps . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 113 4.4.3. Upgraded quadrupole beamline . . . . . . . . . . . . . . . . . . . . . 114 4.4.4. Fibre noise cancellation . . . . . . . . . . . . . . . . . . . . . . . . . 114 4.4.5. Diode injection locking . . . . . . . . . . . . . . -
. . . . . . . . . . . . 117 4.4.6. Tapered amplifier . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 122 4.4.7. Pulsing and multi-tone generation . . . . . . . . . . . . . . . . . . . 123 4.4.8. Laser spectrum . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 124 4.5. Light delivery and collection . . . . . . . . . . . . . . . . . . . . . . . . . . . 126 4.5.1. Free-space light delivery . . . . . . . . . . . . . . . . . . . . . . . . . 126 4.5.2. Ion imaging . . . . . . . . . .-
 . . . . . . . . . . . . . . . . . . . . . . 131 4.5.3. Imaging and laser alignment . . . . . . . . . . . . . . . . . . . . . . 131 4.5.4. Ablation laser alignment . . . . . . . . . . . . . . . . . . . . . . . . . 133 4.6. Trap-integrated optics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 134 4.6.1. Waveguides vs optical fibres . . . . . . . . . . . . . . . . . . . . . . . 135 4.6.2. Waveguide modes . . . . . . . . . . . . . . . . . . . . . . . . . . . . 135 4.6.3. Trap with integr-
ated waveguides . . . . . . . . . . . . . . . . . . . . 137 4.6.4. Fibre routing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 142
5. Single-ion operations with integrated waveguides 145 5.1. First steps . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 145 5.1.1. Loading ions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 145 5.1.2. Micromotion minimisation . . . . . . . . . . . . . . . . . . . . . . . . 146 5.1.3. Ablation loading . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 147 5.1.4. Atomic oven loading . . . . . . . . . . . . . . . . . . . . . . . . . . . 149 5.2. State-
 preparation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 150 5.2.1. Dipole transition optical pumping . . . . . . . . . . . . . . . . . . . 151 5.2.2. Quadrupole transtion optical pumping . . . . . . . . . . . . . . . . . 154 5.3. State readout . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 156 5.3.1. Optical qubit readout . . . . . . . . . . . . . . . . . . . . . . . . . . 156 5.3.2. Zeeman qubit readout . . . . . . . . . . . . . . . . . . . . . . . . -
. . 158 5.4. Dephasing and decay . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 159 5.4.1. Optical qubit lifetime . . . . . . . . . . . . . . . . . . . . . . . . . . 160 5.4.2. Ramsey experiment . . . . . . . . . . . . . . . . . . . . . . . . . . . 161
xi

 Contents
5.4.3. Optical qubit Ramsey . . . . . . . . . . . . . . . . . . . . . . . . . . 166 5.4.4. Zeeman qubit Ramsey . . . . . . . . . . . . . . . . . . . . . . . . . . 168 5.5. Rabi oscillations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 170 5.5.1. Optical qubit rotations . . . . . . . . . . . . . . . . . . . . . . . . . . 170 5.5.2. Rabi frequency noise . . . . . . . . . . . . . . . . . . . . . . . . . . . 171 5.5.3. Zeeman qubit rotations . . . . . . . . . . . . . . . . . . . .-
 . . . . . 173 5.6. Cooling and heating . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 175 5.6.1. Ion thermometry . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 176 5.6.2. Doppler cooling . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 178 5.6.3. EIT cooling . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 179 5.6.4. Heating rates . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 180
6. Quantum contextuality 185 6.1. Quantum measurements and entanglement . . . . . . . . . . . . . . . . . . . 186 6.1.1. Composite and entangled states . . . . . . . . . . . . . . . . . . . . . 186 6.1.2. Quantum measurements . . . . . . . . . . . . . . . . . . . . . . . . . 188 6.1.3. Measurement correlators . . . . . . . . . . . . . . . . . . . . . . . . . 191 6.2. Bell theorems . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 194 6.2.1. Bell Theorem #1 . . . . . . . . . . .-
 . . . . . . . . . . . . . . . . . . 195 6.2.2. Extended Bell’s Theorem and the role of determinism . . . . . . . . 197 6.2.3. Non-signaling models . . . . . . . . . . . . . . . . . . . . . . . . . . 198 6.2.4. Nonlocal content and Chained Bell Inequalities . . . . . . . . . . . . 200 6.2.5. Bell inequalities in correlator formalism . . . . . . . . . . . . . . . . 201 6.3. Quantum contextuality and KCBS test . . . . . . . . . . . . . . . . . . . . . 202 6.3.1. KCBS inequality . . . . . . . . . . .-
 . . . . . . . . . . . . . . . . . . 204 6.3.2. Qutrit measurements and quantum violation . . . . . . . . . . . . . 206 6.3.3. Exclusivity and connection to Bell inequality . . . . . . . . . . . . . 209 6.3.4. Generalised KCBS inequalities and non-contextual content . . . . . 212 6.4. State-independent contextuality . . . . . . . . . . . . . . . . . . . . . . . . . 215 6.4.1. Yu-Oh construction . . . . . . . . . . . . . . . . . . . . . . . . . . . 216 6.4.2. Optimal Yu-Oh inequality . . . . . . . -
. . . . . . . . . . . . . . . . . 219 6.5. Compatibility loophole . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 220 6.5.1. The finite precision debate . . . . . . . . . . . . . . . . . . . . . . . 221 6.5.2. Experimental implications . . . . . . . . . . . . . . . . . . . . . . . . 221 6.6. Is contextuality silly? . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 223 6.6.1. Toy model of contextual and non-contextual theories . . . . . . . . . 224 6.6.2. When assuming Non-c-
ontextuality makes sense . . . . . . . . . . . . 224 6.6.3. When assuming Non-contextuality makes little sense . . . . . . . . . 225 6.6.4. Why perform contextuality experiments? . . . . . . . . . . . . . . . 227 6.6.5. Random number generation? . . . . . . . . . . . . . . . . . . . . . . 228
xii

 Contents
7. Experimental studies of quantum contextuality 231 7.1. Ion as a qutrit . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 232 7.1.1. Coherent rotations . . . . . . . . . . . . . . . . . . . . . . . . . . . . 233 7.1.2. Multi-level readout . . . . . . . . . . . . . . . . . . . . . . . . . . . . 235 7.1.3. Projective binary readout . . . . . . . . . . . . . . . . . . . . . . . . 236 7.1.4. AC Stark shift correction . . . . . . . . . . . . . . . . . . . . . . . . 237 7.2. Yu-Oh ex-
periment . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 239 7.2.1. Measurement sequence . . . . . . . . . . . . . . . . . . . . . . . . . . 239 7.2.2. Data acquisition and calibrations . . . . . . . . . . . . . . . . . . . . 241 7.2.3. Purged data . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 241 7.3. Yu-Oh experiment results . . . . . . . . . . . . . . . . . . . . . . . . . . . . 242 7.3.1. Data analysis . . . . . . . . . . . . . . . . . . . . . . . . . . . . . -
. . 242 7.3.2. Assumption checks . . . . . . . . . . . . . . . . . . . . . . . . . . . . 244 7.4. KCBS experiment . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 245 7.4.1. Measurement construction . . . . . . . . . . . . . . . . . . . . . . . . 245 7.4.2. Measurement incompatibility . . . . . . . . . . . . . . . . . . . . . . 246 7.4.3. KCBS inequality violation . . . . . . . . . . . . . . . . . . . . . . . . 249 7.4.4. Comparison with other experiments . . . . . . . . . . . . . .-
 . . . . 251 7.5. Generalised KCBS experiment . . . . . . . . . . . . . . . . . . . . . . . . . 253 7.5.1. Ray construction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 253 7.5.2. Witness construction . . . . . . . . . . . . . . . . . . . . . . . . . . . 254 7.5.3. Experimental results . . . . . . . . . . . . . . . . . . . . . . . . . . . 255
8. Entanglement with integrated waveguides 257 8.1. Basic two-ion operations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 257 8.1.1. Trapping two ions . . . . . . . . . . . . . . . . . . . . . . . . . . . . 257 8.1.2. Motional modes and cooling . . . . . . . . . . . . . . . . . . . . . . . 259 8.1.3. Optical qubit Rabi oscillations . . . . . . . . . . . . . . . . . . . . . 260 8.1.4. Two-ion readout . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 262 8.1.5. Axial stretch mod-
e heating . . . . . . . . . . . . . . . . . . . . . . . 264 8.2. System tuning and MS gate calibration . . . . . . . . . . . . . . . . . . . . 267 8.2.1. Substrate photoconductivity . . . . . . . . . . . . . . . . . . . . . . 267 8.2.2. Light-induced charging . . . . . . . . . . . . . . . . . . . . . . . . . . 268 8.2.3. Recurrent calibrations . . . . . . . . . . . . . . . . . . . . . . . . . . 271 8.2.4. MS gate calibration . . . . . . . . . . . . . . . . . . . . . . . . . . . 274 8.3. MS gates .-
 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 276 8.3.1. Measured performance . . . . . . . . . . . . . . . . . . . . . . . . . . 276 8.3.2. Error model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 279 8.3.3. Performance in the trap #5 . . . . . . . . . . . . . . . . . . . . . . . 283
xiii

 Contents
9. Optical pumping into a maximally entangled state 287 9.1. Protocol overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 289 9.1.1. High-level description . . . . . . . . . . . . . . . . . . . . . . . . . . 290 9.1.2. Theoretical model . . . . . . . . . . . . . . . . . . . . . . . . . . . . 291 9.1.3. Trapped-ion implementation in 40Ca+ . . . . . . . . . . . . . . . . . 294 9.2. Performance analysis . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 297 9.2.1. Co-
nvergence rate . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 297 9.2.2. Effect of errors . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 299 9.2.3. Error simulation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 304 9.3. System tuning . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 307 9.3.1. Phase-modulated drive . . . . . . . . . . . . . . . . . . . . . . . . . . 308 9.3.2. Spectator modes . . . . . . . . . . . . . . . . . . . . . . . . . . -
. . . 310 9.3.3. Effective potential anharmonicity . . . . . . . . . . . . . . . . . . . . 313 9.3.4. B-field gradient . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 315 9.3.5. Differential AC Stark shift . . . . . . . . . . . . . . . . . . . . . . . . 317 9.3.6. Adapted protocol . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 320 9.4. Experiment and results . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 320 9.4.1. Experimental implementation . . . . . . . . . . .-
 . . . . . . . . . . . 320 9.4.2. Dynamical behaviour . . . . . . . . . . . . . . . . . . . . . . . . . . . 323 9.4.3. Steady-state fidelity . . . . . . . . . . . . . . . . . . . . . . . . . . . 323 9.4.4. Understanding errors . . . . . . . . . . . . . . . . . . . . . . . . . . . 327
10.Summary and Outlook 331 10.1. Future plans and improvements . . . . . . . . . . . . . . . . . . . . . . . . . 331 10.1.1. Experimental setup . . . . . . . . . . . . . . . . . . . . . . . . . . . . 331 10.1.2. Optical setup . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 332 10.1.3. Hybrid qubit operation . . . . . . . . . . . . . . . . . . . . . . . . . 333 10.1.4. Quantum computing with qudits . . . . . . . . . . . . . . . . . . . . 334 10.1.5. Contextuality tests . . . . . . . .-
 . . . . . . . . . . . . . . . . . . . . 335 10.1.6. Integrated optics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 335 10.1.7. Dissipation engineering . . . . . . . . . . . . . . . . . . . . . . . . . 337
11.Appendix 339 11.1. Clebsch-Gordan coefficients in 40Ca+ . . . . . . . . . . . . . . . . . . . . . . 339 11.2. Injection lock alignment . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 339 11.3. Undesired FNC back-reflections . . . . . . . . . . . . . . . . . . . . . . . . . 340 11.4. AOM extinction ratio . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 340 11.5. In-fibre modules for λ = 729 nm laser . . . . . . . . . . . . . . . . . . . . . . 341
Bibliography 345
xiv

 List of Acronyms
AOM acousto-optic modulator (p. 93, 102–104, 107, 109, 112, 114, 116, 117, 123, 124, 142, 340, 341)
AR anti-reflection (p. 119, 131)
balun balanced-to-unbalanced transformer (p. 85)
CW continuous-wave (p. 111, 117, 123, 134)
DC static (p. 8, 10, 53, 66, 70, 76–80, 82, 83, 85–89, 95)
DI device independent (p. 198, 201, 228)
EB electron-beam (p. 69)
ECDL external-cavity diode laser (p. 107, 109, 112)
EIT electromagnetically-induced transparency (p. 49–52, 109, 128, 231, 237)
EOM electro-optic modulator (p. 101, 337)
FNC fibre noise cancellation (p. 114, 116, 117, 125, 333, 340, 341)
FWHM full-width at half-maximum (p. 28, 123, 125)
HV hidden variable (p. 194, 223, 228)
HWP half-wave plate (p. 128, 130, 151, 339)
ITO indium tin oxide (p. 135, 336)
KCBS Klyachko-Can-Binicio ̆glu-Shumovsky (p. 204, 206–213, 216, 234, 237–239, 245247, 251, 253, 255)
LED light-emitting diode (p. 131, 132)
MLE maximum-likelihood estimation (p. 277)
MS Mølmer-Sørensen (p. x, 7, 37, 39–42, 44, 93, 104, 114, 257, 309, 314)
NA numerical aperture (p. 13, 105, 131, 142)
xv

 List of Acronyms
NC non-contextuality (p. 185, 186, 203–206, 208–212, 215, 216, 218, 219, 221–225, 227, 228, 232, 331)
NEP noise-equivalent power (p. 116)
NS non-signaling (p. 198–203, 209, 212, 215, 224)
OFE oxygen-free electronic (p. 68–70, 332)
OSA optical spectrum analyser (p. 108)
PBS polarising beam splitter (p. 103, 111, 112, 123)
PCB printed circuit board (p. 71, 76–78, 82–84)
PCF photonic-crystal fibre (p. 106–111, 126, 128, 129, 133)
PD photodetector (p. 101, 113, 114, 116, 117, 122, 123)
PDH Pound–Drever–Hall (p. xi, 101, 102, 109, 112, 113, 125)
PI photo-ionisation (p. 109, 126, 128, 129, 133)
PID proportional-integral-derivative (p. 93, 94, 101, 113, 116, 123)
PM polarisation-maintaining (p. 106, 107, 109, 111, 123, 126, 128, 130)
PMT photo-multiplier tube (p. 53, 64, 92, 131)
PR Popescu-Rohrlich (p. 199)
PRV pressure relief valve (p. 60, 61)
PT pulse tube (p. 55–60, 62, 65, 85)
QCCD quantum charge-coupled device (p. 2, 334)
QEC quantum error-correction (p. 1, 3, 287)
QKD quantum key distribution (p. 198, 201)
QM quantum mechanics (p. 193–195, 197, 198, 200–204, 206, 208–212, 214, 215, 218, 224, 227–229)
QRNG quantum random number generation (p. 198, 201, 224, 228, 229)
QWP quarter-wave plate (p. 103, 130, 151, 152, 341)
RF radio-frequency (p. 8, 10, 53, 65, 70, 76–78, 80, 82, 83, 85, 89, 92–94, 102, 103, 116, 123, 124)
xvi

 List of Acronyms
RRR residual-resistance ratio (p. 68, 69)
RT room-temperature (p. 53, 55)
SET surface-electrode trap (p. 2, 4, 7, 10–13, 53, 55, 99, 100, 146, 331)
SM single-mode (p. 105, 107, 129, 135, 137, 138, 142, 341)
SNR signal-to-noise ratio (p. 333)
SNSPD superconducting nanowire single-photon detector (p. 135, 336)
SS stainless steel (p. 59, 60, 63, 64, 71, 74, 75)
TA tapered amplifier (p. 109, 112, 114, 121–123)
TE transverse electric (p. 135–137, 139, 140, 142)
TEC thermoelectric cooler (p. 113)
TM transverse magnetic (p. 135–137, 140)
TMP turbo-molecular pump (p. 61, 65)
UHV ultra-high vacuum (p. 12, 53, 55, 65, 89)
ULE ultra-low expansion (p. 112)
VCO voltage-controlled oscillator (p. 114)
xvii

 

 1. Introduction
A Quantum computer is a device that harnesses the full computational power allowed by the laws of physics to solve otherwise intractable problems. However, it appears that quantum computers are darn hard to build. This thesis describes my contributions to this large and ongoing quest. The idea of quantum computation was pioneered by P. Benioff, Y. Manin and R. Feynman in the early 1980s [Ben82; Fey82]. In 1985, D. Deutsch made it concrete by proposing the first quantum algorithm, and demonstrating-
 that a quantum computer can do something that a classical computer cannot [Deu85]. Deutsch’s vision1 sparked a wave of discoveries of possible advantages of quantum computation, such as the Deutsch–Jozsa [Deu92], Bernstein–Vazirani [Ber97], and Simon’s algorithms [Sim97]. The most celebrated results of this era, the quantum search algorithm by L. Grover [Gro96] and the factoring algorithm by P. Shor [Sho94], remain the major driver of a lot of modern quantum computing research. Back then, it was -
not obvious whether quantum computing can scale given the presence of unavoidable operation errors [Har96]. This was because, unlike classical information, quantum information cannot be copied [Woo82], and thus classical error correction methods cannot be applied. This changed due to landmark results obtained by P. Shor [Sho95] and independently by A. Steane [Ste96] describing the possibility of quantum error-correction (QEC). Soon it was shown that QEC allows for fault-tolerant quantum computing -
[Got98; Ste99]. Those results established that quantum computing is feasible in the real world, motivating all subsequent experimental research. Among the early suggested methods about how to perform quantum computation, the 1995 proposal by A. Cirac and P.Zoller for a two-qubit trapped-ion gate was arguably the most influential [Cir95]. Only 7 months after the publication of the proposal, C. Monroe et al. published a demonstration of the first two-qubit CNOT gate in a trapped-ion system [Mon95]. -
By 1997, D. Wineland et al. published a review entitled “Experimental issues in coherent quantum-state manipulation of trapped atomic ions” [Win97] (commonly referred to as “The Bible”) which has to this day remained a remarkably complete description of the physics of quantum information processing with trapped ions. Following seminal demonstrations of multi-ion ground-state cooling [Kin98; Roo99], individual-ion addressing [Näg99] and multi-qubit entanglement [Sac00], trapped-ion research began t-
o focus on how to scale a small quantum information processing unit into a large-scale
1 While Deutsch’s seminal work was motivated by convincing the community of the Many-Worlds interpretation of the quantum theory, that was ironically the one part of his proposal that was not widely accepted.
1

 1. Introduction
processor. The seminal idea put forward by D. Kielpinski et al. in [Kie02] was to employ a quantum charge-coupled device (QCCD) architecture, whereby quantum gates are applied locally to small registers of co-trapped ions. Multiple such registers are located on the same trap chip, and ions are physically transported between different registers to connect them. Following the proposal, numerous experiments demonstrated individual components of the QCCD architecture, such as ion splitting and shuttli-
ng [Hom09b; Bow12], mixed-species and mixed-isotope cooling [Kie00a; Hom09a], mixed-species gates [Tan15; Hug20], and junction transport [Bla09]. A number of experiments demonstrated small-scale prototypes of a QCCD chip [Hom09b; Pin21]. Large-scale realisation of the QCCD architecture requires scalable trap fabrication and parallelisable optical and electrical control. To facilitate that challenge, J. Chiaverini et al. proposed a surface-electrode trap (SET) layout [Chi05], whereby ions are trapp-
ed above a planar microfabricated chip. Such traps can be fabricated with high precision in industrial foundries, and accommodate advanced on-chip features. However, SETs are more challenging to operate with low noise, requiring for example cryogenic environments [Lab07] and trap surface treatment [Hit13] to suppress the “anomalous heating” associated with short ion-electrode distances [Tur00]. They are also no panacea, and difficulties scaling up optical and electrical control are among the many -
reasons the QCCD project has not yet reached its full promise. This thesis describes our attempts at performing quantum information experiments in cryogenic SETs. Its most important contribution to the quantum computing quest is the first demonstration of two-qubit entanglement driven by laser fields delivered through trap-integrated waveguides [Meh20]. This work, presented in Chapter 8, together with simultaneous complementary demonstration by R. Niffenegger et al. [Nif20], shows a path towards s-
calable optical control of trapped ions. Our work is one of a few examples of functional SETs with integrated features. Recent experiments also demonstrated ion trap operation with chip-integrated voltage sources [Stu18] and chip-integrated detectors [Tod20]. Thus, it appears we are approaching an inflection point where ion trapping may become a fully integrated technology. It is also very encouraging that despite their limitations, SETs have become commonplace in the community, and we have learne-
d how to manage most of the challenges they impose. Indeed, while until 2019 all the highest-fidelity entangling gates were performed in room-temperature three-dimensional traps [Sac00; Lei03b; Ben08; Bal16; Gae16], recent experiments demonstrated state-of-the-art fidelities in cryogenic SETs with mere 30 μm ion-electrode distance [Sri21; Cla21]. While large traps with tens of ions in a single potential well are still a workhorse of the most advanced quantum simulation experiments [Mon21], the lar-
gest quantum volume (a measure of computational power introduced in [Cro19]) reported in any system to date was obtained in a SET [Hon21]. Thus, it is very likely that SETs with advanced on-chip features will lead the way towards large-scale quantum computing with trapped ions.
2

 Trapped ions are only one of the many experimental platforms where quantum computing may be feasible. In the recent years, high-fidelity multi-qubit operations were demonstrated with superconducting qubits [Bar14; She16; Gar20; Kja20], neutral atoms trapped in optical-tweezer arrays [Lev18; Mad20], nitrogen-vacancy centres coupled to nuclear spins in diamond [Ron15; Bra19], and spins in silicon [He19; Hua19]. In photonic platforms, recent works demonstrated a method to construct arbitrarily large-
 two-dimensional cluster states of continuous-variable qubits [Asa19; Lar19], and programmable on-chip quantum information processing within the dual-rail encoding [Qia18]. The project of building a quantum computer is also gradually broadening from universities into startups and industrial labs. This explosion of interest and competition is valuable, as the field as a whole is nowhere near building a useful universal quantum computer. While state-of-the-art demonstrators operate on few tens of qu-
bits, breakthrough applications in fields such as chemistry will likely require millions [Bab18; vBur20]. This is predominately because even the best quantum gates, with error rates as low as 10−6 [Har14], are extremely unreliable when compared to classical gates, whose error rates are as low as 10−17 [Har19]. Thus, any algorithmic quantum speedup is reduced by the daunting overhead of QEC, which aims to suppress this noise. For example, according to the resource estimates in [Suc13], for a gate e-
rror of 1 × 10−5, QEC with the surface code increased the qubit count by 3-4 orders of magnitude, and the gate count by 5-6 orders of magnitude compared to an error-free system. As a result, real-world quantum computers may provide no speedup for many problems where ideal quantum computers would [Bab21; Liu21]. The challenge of experimental quantum computing in the year 2021 has therefore two facets. On one hand, the field faces an engineering challenge of implementing the existing ideas with lowe-
r noise and at larger scales. At the same time, even 25 years after the CiracZoller proposal, new ideas are needed more than ever. It is unlikely we can “brute-force” our way into a useful quantum-computational advantage. Instead, sustained experimental and theoretical innovation is necessary to decrease the overheads of QEC and overcome some of the long-standing technical roadblocks. For example, recent seminal experiments with trapped ions [Flü18] and superconducting qubits [Gao19] began to expl-
ore ways of encoding qubits into quantum harmonic oscillators. This may reduce the overheads of error correction, as a single noisy oscillator may replace multiple noisy qubits [Tzi19]. Another idea, which is explored in Chapter 9, is to engineer dissipation to create entangled states in the steady-state [Ver09]. Dissipative engineering may one day become a highly practical method of creating resource states for quantum error correction [Bag21], and its application in bosonic systems [Kie17; dNee2-
0] is also exciting. It is worth keeping in mind that, if quantum computing is to fulfil its promise, then 2021 is still just the beginning of the story. Not only is it still unknown what physical system is best suited for quantum computation, but we also understand little about why and when quantum computers excel over classical ones. For example, despite suggestive
3

 1. Introduction
evidence in favour [Joz02; Yog19], it is still unknown whether entanglement is needed for quantum advantage. While Bravyi et al. recently proved that there is a complexity separation between some quantum and classical computing models [Bra18; Bra20], the quantum speedup for most problems of practical interest remains a conjecture. Finally, while the “non-classicality” of quantum computing concerns its ability to violate of the extended Church-Turing hypothesis [Aar10], it is still unclear how this-
 relates to the Bell scenario [Bel64] and “quantum contextuality” [Bud21] as a whole, where “non-classicality” refers to the inability ability to reproduce experimental observations through certain hidden-variable models (Chapter 6). In [How14], M. Howard et al. linked these notions together by showing that quantum contextuality is a necessary resource for universal quantum computation via magic-state distillation. However, their work also showed it not to be a sufficient resource, leaving open th-
e question of what is. Furthermore, to a surprise of many, Zurel et al. showed recently that quantum computation can be in fact described through a non-deterministic hidden variable model [Zur20]. These results emphasise that we are yet to grasp where quantum computers get their power from. This thesis is organised as follows:
Chapter 2 introduces the basic theoretical concepts of controlling atomic systems. It then discusses the methods of trapping and manipulating individual ions.
Chapter 3 presents the experimental setup including the cryogenic vacuum system, SETs and signal delivery methods.
Chapter 4 presents the laser systems used for both free-space and integrated-optical light delivery.
Chapter 5 presents experimental results trapping, cooling and quantum control of individual 40Ca+ ions in SETs with integrated waveguides.
Chapter 6 reviews the theory of quantum non-classicality, with emphasis on quantum contextuality and its experimental testability.
Chapter 7 presents experimental violations of two non-contextuality inequalities with a single ion.
Chapter 8 presents experimental results of quantum manipulation of two trapped ions. It demonstrates entanglement generation using laser light delivered through trap-integrated waveguides.
Chapter 9 introduces and experimentally demonstrates a novel protocol for entangledstate generation using a collective optical pumping process. The experiment uses engineered dissipation to create Bell-states with 93(1)% fidelity, the highest of any dissipative experiment to date.
Chapter 10 summarises the results and gives an outlook on future work.
4

 I hope you enjoy it!
5

 

 2. Quantum information with individual
trapped ions
This chapter presents the basic toolbox of quantum computation with trapped ions. I begin by discussing how ions can be created and trapped, and introduce the specific type of trap we use, called a SET. Sec. 2.2 introduces our ion of choice – 40Ca+– and the elements of atomic physics involved in using it. Then I present two ways to encode a qubit that will be used in subsequent chapters. Sec. 2.3 delves into how to perform quantum operations such as single-qubit gates, state initialisation and rea-
dout – on qubits encoded in 40Ca+. It also introduces some of the complications that arise due to the presence of spectator atomic transitions. Sec. 2.4 describes the MS gate, which is our two-qubit gate of choice. Finally, in Sec. 2.5 we describe the motivation and methods for cooling the ions to their motional ground states. This chapter serves as a general introduction to subsequent experimental chapters, where some of the results are going to be be further refined and compared with observation-
s. The results discussed in this chapter are also presented and derived in a number of trapped ion review papers and atomic physics textbooks, e.g. [Win97; Lei03a; Häf08; Ste07]. Instead of reproducing all the calculations, I chose to only present the key steps and their implications, and spend more time discussing the intuition behind the equations.
2.1. Trapping ions
2.1.1. Why trapped ions?
Quantum systems experience a general trade-off of accessibility versus isolation. On one hand, a qubit should be completely decoupled from its environment in order to maintain coherence. However, a completely isolated system is also completely useless1. As soon as a system can be manipulated from the outside, it becomes susceptible to decoherence. Trapped-ion qubits are well-placed on this spectrum: their internal states are extremely well decoupled from the environment, but the use of laser beams-
 propagating through the free space nonetheless allows fast control. As a result, errors are dominated by the imperfections in the control fields. One of the reasons for this isolation is that the trap potential is state-independent, i.e. the ion is trapped in the same well regardless of its electronic state.
1 Furthermore, completely isolated systems probably do not exist in nature. And if they do, it impossible to find out anything about them!
7

 2. Quantum information with individual trapped ions
This allows us, for example, to measure the internal state without losing the ion. When multiple ions are trapped together, their internal states do not couple directly, and thus the ion’s coherence is not affected by its neighbours. At the same time, high-fidelity qubit-qubit coupling can be engineered on-demand using laser fields at rates of > 10 kHz.
2.1.2. Paul trap
The ions in this thesis are confined in an radio-frequency (RF) Paul trap. In a Paul trap, a charged particle is confined by a combination of oscillating (RF) and static (DC) potentials. The linear Paul trap is created by four parallel rods, where an RF voltage is applied to two of them, while the other two are held at RF ground (Fig. 2.1) [Rai92]. This configuration
y
z
RF
RF
RF GND (DC)
RF GND (DC)
r0
RF
RF
RF GND (DC)
trap axis
RF GND (DC)
Figure 2.1: Symmetric linear Paul trap. The ion (red) is trapped at the pseudopotential minimum at the centre. The confinement along x is obtained by applying DC voltages to the endcaps, or to the segmented DC electrode. The DC electrodes are RF grounded but can be offset from the DC ground.
allows one to confine a charged particle in two dimensions (y and z) close to the centre, and by applying a DC voltage to the electrodes in the third dimension x, the particle can become trapped. The DC voltage can be applied to additional electrodes called the end-caps, or to individual segments of the rod electrodes. Mathematically we can describe the potential at the centre of the trap as:
Φ(r, t) = ΦDC(r) + ΦRF(r, t),
where the DC potential
ΦDC(r) = 1
2
(
uxx2 + uyy2 + uzz2)
and the RF potential
ΦRF(r, t) = 1
2
(
vxx2 + vyy2 + vzz2)
cos(ΩRFt + φ).
8

 2.1. Trapping ions
Laplace’s equation imposes ~∇2ΦDC(r) = ~∇2ΦRF(r, t) = 0, implying that ux + uy + uz = 0 and vx + vy + vz = 0. For a infinitely long symmetric trap, the latter condition implies (vx, vy, vz) = vRF(0, 1, −1) for the RF potential. The DC potential is confining along x (i.e. ux > 0), and one usually sets uy 6= uz in order to break the radial mode degeneracy (Sec. 2.1.3). Given this potential, the ion’s time-dependent position ~r = (rx, ry, rz) can be found by solving the equations of motion
d2ri
dt2 = − e
m
∂Φ ∂ri
for each direction i = (x, y, z). We define
ai = 4eui
mΩ2
rf
, qi = 2evi
mΩ2
rf
where e is the charge and m is the mass of the ion. Then, the equation of motion can be written as
d2ri
dτ 2 + (ai − 2qi cos(2τ )) ri = 0 (2.1)
where τ = (Ωrft + π)/2. Eq. (2.1) is a well-studied differential equation known as the Mathieu equation, with solutions described e.g. in [McL64]. It turns out that only certain combinations of ai and qi allow for stable trapping. We work in the limit of (|ai|, qi2)   1, known as the first stability regime. The position of the ion trapped near the trap centre is then well-described by:
ri(t) ∝ cos
( βi
2 Ωrf t
)[
1 + qi
2 cos (Ωrf t)
]
, (2.2)
where βi =
√
ai + qi2/2. Eq. (2.2) implies that there are two dominant components to the motion of the ion. In the first approximation, the ion is a three-dimensional harmonic oscillator with eigenfrequencies ωi = βiΩrf /2. We can can interpret this harmonic oscillation along y and z as arising due to a static pseudopotential created by time-averaging the RF field. Formally, the RF pseudopotential is given by
Φpp(r) = 1
2
(
v′
yy2 + v′
zz2)
where
v′
i= e
2mΩ2
rf
v2
i.
9

 2. Quantum information with individual trapped ions
The harmonic oscillator frequencies are then given by
ωi =
√e
m
√
ui + vi′.
The oscillation frequency along x in an infinite-length symmetric linear trap is simply set by the DC curvature, i.e. ωx = √eux/m, while the radial eigenfrequencies ωy and ωr are influenced by the RF frequency and curvature, as well as by DC (anti)confinement. The second component in Eq. (2.2) is the RF micromotion, which modulates the slow oscillations at ωi with a component at the RF frequency. For an ion placed at the RF pseudopotential null and cooled down to the motional ground state, this ef-
fect can usually be neglected. However, additional micromotion, with sufficient magnitude to significantly modulate the laser-ion interactions, can arise if the DC minimum is not RF null. This can originate from two sources. First of all, more complex trap chips, such as the SETs described in Sec. 2.1.3, do not have a symmetry of the the idealised infinite linear trap, and the RF electric field may have a component along the trap axis ~x. As a result, for a given x, the pseudopotential minimum may-
 not be a pseudopotential zero. This can also happen in a linear trap due to edge effects of rod misalignment. The micromotion caused by this geometric effect is called the intrinsic micromotion2 [Ami11]. Second, undesired (stray) electric fields with a component along ~y or z~ can displace the DC minimum from the RF minimum, causing so-called excess micromotion. This effect can be compensated by adding additional static control fields with techniques discussed in Sec. 5.1.2 These calculations als-
o allow us to estimate the amount of confinement produced by an ion trap. For ion-electrode distance r0 and RF voltage amplitude VRF, the RF curvature vRF = d0VRF/r0, where d0 ∼ 1. The trap depth Etrap can be estimated by assuming the charged particle needs to reach a ground potential to escape the trap. The associated energy can be calculated as [Pea05]:
Etrap = e2V 2
RF
4mr02Ω2
rf
d0. (2.3)
Typical trap depths of linear four-rod Paul traps are in the order of a few electron-volts. This corresponds to tens of thousands of Kelvin, significantly exceeding the temperatures of atomic ovens and background gas molecules.
2.1.3. Surface-electrode traps
In an SET, the tracks defining the RF and DC voltages are all placed on a single planar surface. The DC electrodes are segmented to provide confinement along x, and more segments allow for finer control, transport, and multizone operation [Wri13; Pin21]. This
2 Some publications, such as [Kel15], use a different nomenclature, where intrinsic micromotion refers to the last term in Eq. (2.2) and is unavoidable even in a perfectly symmetric infinite-length trap. Here, we follow the definition from [Ami11] instead.
10

 2.1. Trapping ions
geometry was first proposed to enable scalable microfabrication of large traps and trap arrays [Chi05]. In principle, the four rods can be patterned as four tracks on a chip, and the ion can be trapped above. However, in such a design, segmenting the middle DC electrode requires the use of multilayer routing and vias, which is more challenging to manufacture. Instead, experiments typically opt for a five- or six-rod design, where the outer DC lines are segmented, but the inner ones need not be, as-
 shown in Fig. 2.2.
DC (segmented)
DC
insulator
RF
hh
a) b)
Figure 2.2: The electrode arrangement of an SET. The ion position (pseudopotential minimum) is shown in red. The confinement in the plane out of the image is obtained by DC voltages applied to the segmented electrodes. (Left) Five-rod configuration. (Right) Six-rod configuration. Both configuration allow for multi-zone operation without segmenting the middle electrode(s).
As is the case for a four-rod trap, for an infinite-length structure, the pseudopotential is locally symmetric around the trapping position, and the radial modes frequencies are equal unless the DC potential breaks their degeneracy. This is important since a degenerate mode structure cannot be efficiently laser-cooled, see Fig. 2.3 [Ami11]. In a symmetric design,
+
DC
insulator
RF
a) b)
Figure 2.3: The effect of radial mode degeneracy on laser cooling with a single laser parallel to the trap surface. (Left) Radial modes are degenerate. The cooling laser lifts the degeneracy and cools the mode parallel to the trap surface. The mode perpendicular to the trap surface is not cooled and gradually heats up due to spontaneous emission. (Right) Radial modes are non-degenerate and tilted with respect to the trap surface. Now all the modes of motion are coupled to the cooling laser, and th-
e ion can be efficiently cooled close to the ground state.
the degeneracy can be lifted by applying different voltages to opposing DC electrodes. Alternatively, the trap can be made asymmetric, which changes the distances to opposing DC electrodes. The radial eigenaxes should also not be perpendicular to the cooling laser beam (Sec. 2.5.2). In most SET experiments, laser beams travel parallel to the chip surface to avoid scatter. It is then necessary to tilt the eigenaxes away from horizontal/vertical. Arguably the most challenging aspect of SETs is that -
the pseudopotential quickly becomes anharmonic as the ion is displaced from the field null. This leads to a significant trap
11

 2. Quantum information with individual trapped ions
depth reduction, since the energy necessary to move the ion from the RF null to the nearest pseudopotential saddle point is significantly lower than Etrap in Eq. (2.3) [Pea05]. While it can be optimised, typical trap depths for SETs are a few tens of milli-electron-volts, approximately two orders of magnitude less than linear traps [Hon16]. This has a few important implications. Since the trap depth is now less than the mean energy of the particles effusing from atomic sources, loading SETs is les-
s efficient. Once trapped, the ions are more likely to escape upon collisions with background gases. This effect limits ion lifetimes in typical ultra-high vacuum (UHV) environments to a few hours (with laser cooling constantly on), and cryogenic environments are useful to extend it [Ant09; Lei09]. There are other challenges associated with using SETs for ion trapping. The small gaps between electrodes limit the allowed range of voltages to avoid breakdown [Hug11]. Because of this, high trap frequ-
encies (beneficial to reduce the electric-field noise) require short ion-electrode distances: all of the traps in this thesis were designed for h = 50 μm ion height. However, bringing the ion close to the surface increases noise and experimental drifts. This happens for a number of reasons:
1. Electric-field noise increases in the vicinity of the trap surface. Published measurements observed scalings such as h−2.6 [An19], h−3.5 [Des06] and h−4.0 [Sed18b] . This “anomalous heating” can limit the performance of quantum information experiments in SETs. The physical mechanism underlying of this error is not well-understood [Bro14; Ber21], although there is evidence there are multiple mechanisms at play [Sed18b].
2. As h decreases, it becomes more challenging to align the laser beams onto the ion without scattering light off the chip. Some laser scatter is benign, but blue and ultraviolet photons are found to charge the trap surface in many experiments, as lower-wavelength photons are more likely to exceed the work function of impurities present on the chip electrodes and dielectrics [Wan11; Har10]. This charging changes the electric field and/or its curvature at the ion location, necessitating frequent ca-
librations [Ami10; Sri21].
3. As h decreases, a fixed amount of technical noise on the electrodes (e.g. caused by cable pick-up) causes a larger electric field noise, and thus an increased heating rate. Technical noise is not fundamental and can be eliminated through careful design and noise investigation [Sed18a], but still poses an experimental challenge, especially in complex setups with large numbers of connections [Pin21].
All in all, when using SETs, it is simply very easy to stumble upon problems that cause noise, drifts or prevent one from trapping altogether. It wouldn’t all be worth it if they didn’t provide us with serious benefits. Luckily, SETs have a number of strong points acting in their favour:
1. Since they’re open from above, ion fluorescence can be collected with very high
12

 2.1. Trapping ions
numerical aperture (NA). Some modern SETs include a slot in the middle3, allowing for high-NA addressing with low laser scatter as well [Rev20].
2. Short ion-electrode distances mean that high potential curvatures can be produced with modest voltages, making it easier to create dynamic waveforms. It is also indispensable when coupling to ions with near-field microwave gradients [Osp11].
3. By leveraging mature cleanroom fabrication processes, traps can be manufactured at high complexity with low defects, high reliability and yield. This is particularly true for traps fabricated in commercial silicon foundries [Meh14].
4. The fabrication processes allow for integration of potentially game-changing features, such as electronic [Stu18] and optical components [Meh16]. A large fraction of experiments in this thesis were made possible by using integrated optics embedded in the trap.
2.1.4. Producing ions
Every trapped-ion experiment begins with an atomic source. To produce 40Ca+ ions, we first generate a beam of neutral calcium atoms, either from a resistively-heated atomic oven or from an ablation target [Lei07]. The atoms travelling through the trap region are then ionized with a two-photon process, as illustrated in Fig. 2.4 [Luc03].
423 nm
390 nm
4s4s 1S0
4s4p 1P1
Continuum
Figure 2.4: Level structure of neutral calcium. The neutral fluorescence laser at λ = 423 nm drives a cycling transition, which can be used for isotope selectivity. The second laser at λ ≤ 390 nm ionizes the neutral atom, creating an ion.
A λ = 423 nm laser drives the 1S0 ↔1 P1 transition in neutral calcium. The desired isotope can be selected by tuning the frequency of this laser4. The isotope used in this thesis, with the mass number 40, is the most common one, with a natural abundance of 96.9%. Following a state transfer to 1P1, a laser with λ < 390 nm is needed to excite the electron into the continuum5. In our experiments, we used both λ = 375 nm and λ = 388 nm sources for this purpose, which do not need to be single-mode.
3 Although users of “real SETs” do not always consider those to be “real SETs” 4 The shift between subsequent isotopes is ≈ 300 MHz 5 Jargon for “kicking it out”.
13

 2. Quantum information with individual trapped ions
Following photoionization, the ion with sufficiently low initial energy is laser-cooled (Sec. 2.5.2) into the regime where its motion becomes quantum-mechanical. Following a successful loading event, we will see a single particle scattering light (Sec. 2.3.6) into a photon detector. This indicates a presence of an ion. The photoionization lasers are switched off once a desired number of ions is detected.
2.2. Controlling ions
Once trapped, the ion’s electronic state can be manipulated with electromagnetic fields. We discuss the atomic physics involved in driving internal-state transitions in trapped ions, largely following standard treatments found in [Lei03a] and [Win97].
2.2.1. Level structure
The level structure of a 40Ca+ ion is shown in Fig. 2.5. The level names are denoted as LJ , with the total orbital angular momentum L and the total angular momentum J. All the levels correspond to different states of a single valence electron, and so the spin quantum number S = 1/2.
397
729
854
866
S1/2
P1/2
P3/2
D3/2
D5/2
S1/2
P1/2
P3/2
D3/2
D5/2
mJ = +1/2 mJ = -1/2
mJ = +5/2
mJ = -5/2
mJ = +3/2
mJ = -3/2
mJ = +1/2 mJ = -1/2
mJ = +3/2
mJ = -3/2
Zeeman effect
Figure 2.5: Calcium ion level structure. (Left) The fine-structure states and the corresponding laser wavelengths (in nm) used in our experiments. The states are denoted by LJ (Right) The Zeeman effect lifts the degeneracy of the fine structure, splitting each fine-structure state into 2J + 1 sub-levels with equal spacing.
We can distinguish two classes of transitions. Lasers at λ = 393 nm, λ = 397 nm, λ = 849 nm, λ = 866 nm and λ = 854 nm can excite electric dipole transitions. These generally can be driven fast and with low power, but have short lifetimes, see Tab. 2.1 (left). Lasers at λ = 729 nm and λ = 732 nm excite electric quadrupole transitions. These transitions are forbidden by the dipole selection rules. As a result, the excited states D3/2
14

 2.2. Controlling ions
and D5/2 are meta-stable: they decay to S1/2 is slow, and hence they can be suitable for storing quantum information.
Table 2.1: (Left) 40Ca+ transition wavelengths and linewidths. The top section contains the lasers used in the experiments presented in this thesis (Right) Branching ratios for different decay channels in 40Ca+. Within the Zeeman sub-levels, the branching ratios are specified by the Clebsch-Gordan coefficients (App. 11.1)
Transition λ(nm) τ (ns) Γ(2πMHz) S1/2 ↔ P1/2 397 7.4 21.6 S1/2 ↔ D1/2 729 1.17 × 109 1.36 × 10−7 P3/2 ↔ D5/2 854 117.9 1.35 P1/2 ↔ D3/2 866 107.5 1.48 S1/2 ↔ P3/2 393 7.4 21.5 S1/2 ↔ D3/2 732 1.17 × 109 1.35 × 10−7 P3/2 ↔ D3/2 849 1.03 × 103 0.15
S1/2 D3/2 D5/2
P3/2 .92 .0079 .07 P1/2 .93 .073
D5/2 1
D3/2 1
Tab. 2.1 (right) lists the decay channels for different short-lived and meta-stable states. While both D3/2 and D5/2 exhibit a long lifetime, the absence of a P1/2 → D5/2 decay channel means that the cycling transition at λ = 397 nm can be used measure whether the ion is in D5/2 or not (Sec 2.3.6). This is the main reason we choose to store quantum information in D5/2. In our experiments we use a small static magnetic field B (between 3.5 G and 6.5 G) to define the quantisation axis, thus lifting -
the degeneracy of the atomic fine structure. This splits each level LJ into Zeeman sub-levels of well-defined mJ = (−J, −J + 1, . . . , +J), as shown in Fig. 2.5. The frequency splitting between adjacent sub-levels is given by:
∆ω = gJ μBB/ħ,
where μB = 1.4 MHz/G is the Bohr magneton and
gJ = 3
2 − L(L + 1) − S(S + 1)
2J(J + 1)
is called the Lande factor [Ste07]. The value of B can be adjusted over a large range depending on experimental desiderata. For very small magnetic fields, it is difficult to spectrally seperate different transitions and their sidebands, while for very large magnetic fields, it becomes challenging to address nearby transitions with a single laser beam.
2.2.2. Electric dipole transitions
Consider an ion illuminated by a travelling electromagnetic plane wave. We treat the interaction as dominated by the electric field, and ignore the magnetic field component. We also assume the radiation to be classical, which is a good approximation for quasi-classical coherent states of light produced by single-mode lasers. When the light wavelength λ
15

 2. Quantum information with individual trapped ions
significantly exceeds the ion wavepacket size z0 (we will revisit this assumption later), we can treat the external E-field as a time-dependent perturbation at the ion location:
H1(t) = eE0
2 (r ·  ) cos(ωt + φ)
where r is a position operator,   is the direction of E-field polarization, ω = 2πc/λ is the plane wave frequency and φ is its phase. Consider any two atomic levels |ψ0〉, |ψ1〉 with energies E0 and E1 respectively. Their bare Hamiltonian is given by
H0(t) = E0|ψ0〉〈ψ0| + E1|ψ1〉〈ψ1|. (2.4)
Let us now expand H1(t) in the basis of the two atomic levels. Due to atomic parity, 〈ψ0|H1|ψ0〉 = 〈ψ1|H1|ψ1〉 = 0. Defining Ω ̃ = eE0〈ψ0|(r ·  )|ψ1〉/2, we can write the perturbation Hamiltonian as
H1(t) = ħ
(
Ω ̃ |ψ0〉〈ψ1| + Ω ̃ ∗|ψ1〉〈ψ0|
)
cos(ωt + φ). (2.5)
We move into the interaction picture with respect to H0 with a transformation |ψi〉 → eiH0t|ψi〉. Defining ω0 = (E1 − E0)/ħ and taking the rotating-wave approximation to eliminate terms oscillating at ω + ω0 gives an interaction Hamiltonian
HI (t) = ħ Ω
2 |ψ0〉〈ψ1|ei(ω−ω0)t+φ + H.c., (2.6)
where the dipole Rabi frequency [Jam97]
Ω = eE0
ħ |〈ψ0|(r ·  )|ψ1〉|. (2.7)
and “H.c.” stands for the Hermitian conjugate. Eq. (2.7) describes how the strength of a dipole transition depends on the polarization of the driving radiation and on the properties of the atomic orbitals. For the case of an atom with a single valence electron6, transitions with non-zero dipole Rabi frequencies obey the following dipole selection rules:
∆L = ±1; ∆J = 0, ±1; ∆mj = 0, ±1,
which explains which transitions in 40Ca+ are dipole-allowed. Once an atomic matrix element is non-zero, Ω will be non-zero if the radiation is polarised along an appropriate direction. By expanding r in spherical harmonic basis along the quantization axis B we
6 And hence l = L, and ∆S = 0
16

 2.2. Controlling ions
find that:
∆mj = 0 for   ‖ B
|∆mj| = 1 for  ⊥B, circularly polarized.
Fields which only couple levels with ∆mj = 0 and |∆mj| = 1 are known as π and σ drives respectively. Their orientations and polarizations are shown in Fig. 2.6. Any   can
ε
εε B
σ+ polarization
π polarization
σ- polarization
mJ = +1/2
mJ = -1/2
mJ = +1/2
mJ = -1/2
a) b)
Figure 2.6: a) Dipole transitions between two levels with J = 1/2. Blue lines show transitions with ∆mj = 0. b) Beam and polarization ( ) orientations which select specific atomic transitions. ∆mj = 0 transitions are driven when   ‖ B, which requires the beam wavevector to be perpendicular to B. Transitions with ∆mj = ±1 are driven by circularly polarized light with  ⊥B. This requires the wavevector to be along the quantization axis.
be decomposed onto this eigenbasis, which determines the strength with which it drives different transitions. Finally, we find that the Rabi frequency is closely linked to the transition linewidth Γ. This is unsurprising since the spontaneous emission is a result of a dipolar perturbation driven by the vacuum fields. The difference is that spontaneous emission is amplified by the density of states, which scales as λ−3 in free-space. The result is given by the Fermi golden rule
Γ ∝ Ω2
λ3 =⇒ Ω ∝ Γ1/2λ3/2. (2.8)
While this is strictly true only for a two-level system, it does offer valuable insights into laser powers necessary to drive different transitions. We calculate these in Sec. 2.3.4.
2.2.3. Electric quadruple transitions
Optical dipole transitions are easy to excite, but the excited state decays very fast, making it a poor contender for storing quantum information. For that purpose, we require long-lived atomic states, transitions between which are likewise harder to drive. It turns out that many dipole-forbidden transitions can be coupled by the next-order
17

 2. Quantum information with individual trapped ions
expansion of the electric field. Suppose that the dipole coupling between |ψ0〉 and |ψ1〉 is zero. The second-order perturbation is caused by the instantaneous electric field gradient along the direction of propagation of the plane wave, which is proportional to the wavenumber k = 2π/λ. In the rotating-wave approximation, we interaction Hamiltonian is still given by Eq. (2.6), but with a quadrupole Rabi frequency [Jam97]
Ω = eE0k
2ħ |〈ψ0|(r ·  )(r · k)|ψ1〉|. (2.9)
As for the dipole transitions, a number of selection rules can be established for the quadrupole Rabi frequency. These read [Cor06]:
∆L = ±0, 2; ∆J = 0, ±1, ±2; ∆mj = 0, ±1, ±2,
which explains how S1/2 can be coupled to D3/2 and to D5/2, and why D5/2 cannot be coupled to P1/2. The coupling strength is now determined by the direction of both   and k with respect to B. If k⊥B, transitions with ∆m = 0 cannot be driven. If in addition   ‖ B, only |∆m| = 1 is coupled, while for  ⊥B, only |∆m| = 2 is selected. Transitions with opposite signs of ∆m are always coupled with equal Rabi frequency. Full calculation of the geometric factor can be found in [Leu15]. Finally, we note tha-
t the Fermi golden rule in Eq. (2.8) applies to quadrupole transitions as well.
2.2.4. Magnetic dipole transitions
The Fermi golden rule implies that the transitions with the narrowest linewidth are those with the smallest energy difference. In 40Ca+ these correspond to different Zeeman sub-levels of the same LJ manifold. To use these states as a qubit, it is desirable to drive transitions with ∆L = 0 and at RF/microwave frequencies (MHz to GHz). This is achievable with a pair of optical beams driving a Raman transition [Oze11]. The alternative is to use a magnetic dipole coupling [Kes11]. The magnetic perturb-
ation Hamiltonian is given by
H1(t) = B0(μ ·  ) cos ωt,
where B0 is the strength of the oscillating B-field, μ is the magnetic dipole moment of the ion,   is the magnetic polarization direction and ω is the field oscillation frequency. We find the magnetic dipole Rabi frequency
Ω = B0
ħ |〈ψ0|(μ ·  )|ψ1〉|.
The appropriate selection rules now read
∆L = 0; ∆J = 0, ±1; ∆mj = 0, ±1,
18

 2.2. Controlling ions
allowing to drive transitions within the same Zeeman manifold. Transitions with ∆J = 0 and |∆m = ±1| can be driven most efficiently when  ⊥B. In such case, the perturbation analysis from Sec. 2.2.2 gives
Ω = B0
ħ gJ μB.
While the magnetic dipole coupling is caused by every electromagnetic plane wave, it is generally significantly suppressed, since B0 = E0/c. On the other hand, in the low-frequency regime (kHz to GHz), oscillating magnetic fields can be generated by electrical currents, which is particularly efficient in the near field. This allows us to effectively drive magnetic dipole transitions within the same Zeeman manifold.
2.2.5. Sideband transitions
We have thus far assumed that the ion is a point particle in free space, and neglected any recoil effects. In reality, the ion is trapped ion a three-dimensional harmonic potential, and the interaction with external drive fields affects the motional state as well. Consider a two-level atom coupled to a single harmonic oscillator with frequency ωm. The bare Hamiltonian in Eq. (2.4) gets modified to [Lei03a]:
H0(t) = E0|ψ0〉〈ψ0| + E1|ψ1〉〈ψ1| + ħωm
(
a†a + 1
2
)
. (2.10)
The perturbation Hamiltonian H1(t) gets modified to account for the direction of travel of the plane wave. The light will perturb the motional state if the wavevector ~k has an overlap with the oscillation direction. Formally, the ion’s position R~ is given by:
R~ = Rrˆ0 where R = z0(a† + a).
where (a† + a) is the harmonic oscillator position operator, rˆ0 is a unit vector specifying the oscillation direction, and
z0 =
√
ħ 2mω
quantifies the size of the zero-point motion wavepacket (z0 = 11 nm for ωm = 1 MHz). The full perturbation Hamiltonian in Eq. (2.5) gets modified to:
H1(t) = ħ
(
Ω ̃ |ψ0〉〈ψ1| +  ̃Ω∗|ψ1〉〈ψ0|
)
cos(ωt − ~k · R~ + φ). (2.11)
19

 2. Quantum information with individual trapped ions
If k makes an angle θ to r0, we can re-write the new coupling term for a single motional mode as
~k · R~ = η(a† + a)
where the so-called Lamb-Dicke parameter
η = kz0 cos(θ) (2.12)
quantifies the strength of the motional coupling (η ≈ 0.07 for z0 = 11 nm, λ = 729 nm and θ = 45 deg). Once again we can obtain the full interaction Hamiltonian by moving H1(t) in Eq. (2.11) into the interaction picture of H0 from Eq. (2.10) and taking the rotating wave approximation. We now discover a series of terms which are resonant at different drive frequencies:
HI (t) = ∑
n
1
2 ħΩn,n|ψ0, n〉〈ψ1, n|ei(ω−ω0)t+iφ + H.c. carrier terms
+
∑
n
1
2 ħΩn,n+1|ψ0, n + 1〉〈ψ1, n|ei(ω−ω0−ωm)t+iφ + H.c. first blue sideband
+
∑
n
1
2 ħΩn+1,n|ψ0, n〉〈ψ1, n + 1|ei(ω−ω0+ωm)t+iφ + H.c. first red sideband
+
∑
n
1
2 ħΩn,n+2|ψ0, n + 2〉〈ψ1, n|ei(ω−ω0−2ωm)t+iφ + H.c. second blue sideband
+...
where
Ωn,m = Ω|〈n|eiη(a†+a)|m〉|. (2.13)
Ωn,m can be evaluated analytically for any n, m, and the resulting Hamiltonian can be simulated once the Hilbert space is truncated. We can however dramatically simplify the problem, and gain intuition in turn, by assuming the ion wavepacket to be much smaller than the wavelength λ of the incident plane wave, which is experimentally well-justified close to the motional ground state. The ion wavepacket extent 〈z〉 = 〈R2〉1/2 along rˆ0 can be calculated as an expectation value of the operator
z = z0
√
(a† + a)2.
For example, for a motional Fock state n, the wavepacket size 〈z〉 = √(2n + 1)z0. The motional regime where
〈z〉   λ
20

 2.2. Controlling ions
is known as the Lamb-Dicke limit. For those states, the laser-ion interactions can be simplified with an approximation of:
η
√
(a† + a)2   1.
The Rabi frequencies Ωn,m in Eq. (2.13) can be then expanded in the first order of η, leading to:
Ωn,n = Ω + O(η2) Carrier
Ωn,n+1 = Ωη√n + 1 + O(η2) Blue sideband
Ωn+1,n = Ωη√n + O(η2) Red sideband
Ωn,n+j = O(ηj) Higher-order sidebands.
As a result, we can approximate the interaction Hamiltonian with just three terms, each at its own resonant frequency:
HI (t) = ħ Ω
2 |ψ0〉〈ψ1|ei(ω−ω0)t+iφ + H.c. Carrier (2.14)
+ ħΩ
2 η|ψ0〉〈ψ1|a†ei(ω−ω0−ωm)t+iφ + H.c. Blue sideband
+ ħΩ
2 η|ψ0〉〈ψ1|aei(ω−ω0+ωm)t+iφ + H.c. Red sideband.
Any interaction with a monochromatic drive of frequency ω will then be dominated by the closest resonant term, and the other terms will act as spectator modes. A common way to present it is using these three Hamiltonians:
HC (t) = ħ Ω
2 σ+ei(−δt+φ) + H.c. Carrier, ω = ω0 + δ (2.15)
HB(t) = ħ Ωη
2 σ+a†ei(−δt+φ) + H.c. BSB, ω = ω0 + ωm + δ
HR(t) = ħ Ωη
2 σ+aei(δt+φ) + H.c. RSB, ω = ω0 − ωm + δ
where σ+ = |ψ0〉〈ψ1|. Note that, since the strength of sideband transitions scales as η, it is very inefficient to drive motional couplings with long-wavelength radiation. For example, for a plane wave at the Zeeman qubit splitting frequency of ω = 2π × 16 MHz and z0 = 11 nm, the Lamb-Dicke parameter η < 4 × 10−9. Furthermore, due to the Fock-state dependence of Ωn,n+1 and Ωn,n−1, the mode’s temperature can be measured by measuring the motional sidebands. We will present a detailed description of i-
on thermometry techniques in Sec. 5.6.1, together with experimental results.
21

 2. Quantum information with individual trapped ions
2.2.6. Full Hamiltonian
Eq. (2.14) is the full approximate Hamiltonian for a two-level system (energy splitting ħω0) and a single harmonic oscillator (energy splitting ħωm) interacting with monochromatic radiation. This Hamiltonian is described by three resonances, at frequencies ω0 and ω0 ± ωm. To complete the picture, we need to include the effect of more energy levels, multiple ions and more harmonic oscillator states. If an ion contains M + 1 energy levels |ψ0〉, |ψ1〉, . . . , |ψM 〉 with energies E0, E1, . . . , EM , -
then each of the M (M − 1)/2 pairs of states has its own HI (t) of the form in Eq. (2.14), and the total interaction Hamiltonian HI,tot(t) is the sum of those, with resonances ω0, ω1, . . . , ωM(M−1)/2. The motional state of N ions is described by a set of 3N harmonic oscillators with frequencies ωm,1, ωm,2, . . . , ωm,3N . For each ion, the Hamiltonian HI (t) is then extended to include 3N blue sideband terms and 3N red sideband terms at frequencies ωi ± ωm,j, each with a different Lamb-Dicke par-
ameter. Finally, any single-ion operation on ion K is constructed by replacing |ψi〉〈ψj| → 1⊗K−1 ⊗ |ψi〉〈ψj| ⊗ 1⊗N−K in Eq. (2.14), where 1 is the identity operator on the internal states. Multi-ion Hamiltonians are obtained by adding together the constituent single-ion Hamiltonians.
2.2.7. Encoding a qubit
In trapped-ion experiments, quantum information can be encoded either in the internal state (electronic levels) or the external state (motional harmonic oscillator) of the ion [Flü18]. In this thesis, we used the former, and the motional state was only used to mediate ion-ion couplings. In the upcoming chapters, we use two different types of qubits. The optical qubit is encoded within one transition from the S1/2 to the D5/2 manifold. The example choice in Tab. 2.2 is the transition with the minim-
um B-field sensitivity. The coherence time of the optical qubit is influenced by both the B-field noise and the laser frequency noise. The Zeeman qubit is encoded within the S1/2 manifold [Oze11], and the qubit spacing and coherence is essentially influenced by the B-field alone7. In our experiments, the Zeeman qubit is a superior way of storing quantum information. This is because, in addition to a prolonged lifetime, it is easier to stabilise the magnetic field than the laser frequency. Furtherm-
ore, global single-ion operations can be produced fast and with low noise via magnetic dipole transitions (Sec. 2.2.4). However, the optical qubit and its λ = 729 nm drive are still necessary to read out the qubit, as we discuss in Sec. 2.3.6. As discussed in Sec. 2.4, ion-ion coupling is driven by sideband interactions, which are inefficient for long-wavelength radiation. This prohibits us from entangling Zeeman qubits as easily as the optical qubits. There are two standard ways around this probl-
em. Zeeman qubit sideband coupling can be driven by a pair of Raman lasers or by near-field microwave
7 In our experiments, for the Zeeman qubit, the reference oscillator linewidth is negligible compared to other sources of decoherence
22

 2.2. Controlling ions
Table 2.2: Comparison of the typical encodings of the optical qubit and the Zeeman qubit. The hybrid encoding benefits from the long coherence and the single-qubit drive from the Zeeman qubit but mediates entangling and addressing interactions through the optical qubit.
Optical qubit Zeeman qubit Hybrid
Qubit states
|0〉 = |D5/2, m = −1/2〉
|1〉 = |S1/2, m = −1/2〉
|0〉 = |S1/2, m = +1/2〉
|1〉 = |S1/2, m = −1/2〉
|0〉 = |S1/2, m = +1/2〉
|1〉 = |S1/2, m = −1/2〉
Single-qubit drive λ = 729 nm
(electric quadrupole)
RF field (magnetic dipole) or Raman transition
RF field (magnetic dipole)
State preparation Optical pumping Optical pumping Optical pumping Read-out State-dependent fluorescence Via optical qubit Via optical qubit
Lifetime 1.1 s ∞ ∞ Coherence Laser limited B-field limited B-field limited
Entanglement λ = 729 nm
sideband coupling
RF near-field gradient or
Raman sideband coupling Via optical qubit
gradients. These techniques also allow for single-ion addressing. In this thesis we began developing an alternative approach, using a hybrid Zeeman-Optical qubit8. This encoding borrows the coherence and single-qubit drive quality from the Zeeman qubit but uses the optical qubit to mediate entangling interactions and single-ion addressing. In Chapter 9 we describe a method of dissipative pumping into entangled states which utilises the hybrid encoding. In the thesis of Chi Zhang, he will describe -
a hybrid Zeeman-Optical qubit gate, which allows for universal computation in the hybrid qubit encoding [Zha21].
2.2.8. Closed and open-system dynamics
For a closed system, the full interaction Hamiltonian HI provides all the information necessary to compute the system’s evolution. The time-dependent unitary transformation U (t) is then given by:
U (t) = exp


t
∫
0
dt′HI
(t′)

 (2.16)
which can be directly integrated if HI (t′) commutes with itself at different times, or expanded into Magnus series (Eq. (2.26) in Sec. 2.4.1) if it does not. Given U (t), an initial pure state
8 To be clear, the “hybrid qubit” is a set of techniques to perform computation on the Zeeman qubit, not a different qubit per se
23

 2. Quantum information with individual trapped ions
Table 2.3: Lindblad operators for different error channels for the qubit (top rows) and the oscillator (bottom rows) [Tur00]. γk lists some common names of relevant time-scales. All the noise processes are assumed to be Markovian.
Error name Lk γk Example causes
Qubit decay σ− 1/T1 Spontaneous emission
Qubit dephasing σz 1/T2
Drive frequency noise Magnetic field noise
Motional heating {a†m, am} {n ̇ ,  ̇n} Electric field noise at ωm
Spontaneous emission on phonon sideband Motional dephasing a†mam Γdephase Motional frequency fluctuations
|ψ(0)〉 at t = 0 evolves into
|ψ(t)〉 = U (t)|ψ(0)〉.
at time t. However, the full interaction Hamiltonian of the system only describes the dynamics that we fully understand and can keep track of. In addition, unwanted environmental interactions induce non-unitary dynamics. These dissipative processes lead to decoherence, which limits the performance of quantum computations. We can simulate the effect of closed or open-system dynamics using a master equation in the Lindblad form [Lin76]:
∂tρ = 1
iħ [HI , ρ] + ∑
k
γk
(
Lk ρL†
k−1
2 L†
kLkρ − 1
2 ρL†
k Lk
)
. (2.17)
Here ρ is the density matrix of the ion-oscillator system and HI is a full interaction Hamiltonian. The non-unitary evolution is described by a set of jump operators Lk and their associated weighs γk. For a typical error channel, the decoherence time scale tk = 1/γk. Tab. 2.3 lists the single-ion jump operators corresponding to different common error processes in the Markovian limit. These operators are used in simulations and calculations throughout the thesis. It should be noted that while dissi-
pation leads to qubit decoherence, it is also a necessary component of any computation. We use dissipation for state preparation (Sec. 2.3.5) and motional cooling (Sec. 2.5). Finally, in Chapter 9, we show how controlled dissipation can be harnessed to directly create entangled states.
2.3. Quantum control
We now know how to encode a qubit and how to describe its interaction with external fields. In this section, we describe the toolbox which turns those drives into quantum operations.
24

 2.3. Quantum control
2.3.1. Rabi oscillations
We begin by showing how the laser-ion interaction Hamiltonian in Eq. (2.6) can be used for single-qubit rotations. Consider two qubits states |0〉, |1〉 with energy splitting ħω0 driven by a laser with frequency ω and phase φ. Suppose that the detuning δ = ω − ω0 is significantly below the detuning of any spectator transition, and so we only consider the carrier term from Eq. (2.15):
HI (t) = ħ Ω
2
(
σ−e−i(δt+φ) + σ+e+i(δt+φ))
,
where σ− = |0〉〈1| and σ+ = |1〉〈0|. Using Eq. (2.16), we can derive the associated propagator (in the frame of H0). An alternative method transforms the total Hamiltonian into a time-independent operator. We transform HI (t) from the rotating frame of the qubit to the rotating frame of the drive with a unitary U (δ) = |0〉〈0|eiδt/2 + |1〉〈1|e−iδt/2. The resulting Hamiltonian
H′
I = ħδ
2 σz + ħ Ω
2
(
σ−e−iφ + σ+eiφ)
(2.18)
is time-independent with σz = |0〉〈0| − |1〉〈1|. This allows us to write the propagator as
U = e−iH′
It/ħ. A simple calculation gives us a propagator for a Rabi oscillation:
UI (t) =
( cos (Ωδt/2) − i (δ/Ωδ) sin (Ωδt/2) −i (Ω/Ωδ) sin (Ωδt/2) e−iφ −i (Ω/Ωδ) sin (Ωδt/2) eiφ cos (Ωδt/2) + i (δ/Ωδ) sin (Ωδt/2)
)
(2.19)
where Ωδ = √Ω2 + δ2 is known as the generalised Rabi frequency and we introduced a standard vector notation
|0〉 =
(1
0
)
, |1〉 =
(0
1
)
.
In our control system, the phase φ is referenced to the drive frequency ω, and thus one may look at the drive frame as the natural reference frame for our experimental operations. When δ = 0, a qubit in state |0〉 undergoes a resonant Rabi oscillation:
|ψ(t)〉 = UI (t)|0〉 =
( cos(Ωt/2) i sin(Ωt/2)
)
e−iφ.
Measuring the qubit at time t, we find the system in |0〉 with probability P (0) given by:
P (0) = cos2(Ωt/2) = 1
2 (1 + cos(Ωt)) (2.20)
with a full population transfer (P (0) = 0) at t = π/Ω, which is known as the pi-time. Example resonant and detuned Rabi oscillations are shown in Fig. 2.7.
25

 2. Quantum information with individual trapped ions
012345
0.0
0.2
0.4
0.6
0.8
1.0
Time (Ω/π)
P(0)
δ=0
δ=3Ω
Figure 2.7: Rabi oscillations of a qubit prepared in |0〉 at t = 0. The y-axis shows the probability to measure the system to be at |0〉, given by P (0) = |〈0 | ψ(t)〉|2. Resonant Rabi oscillations (red, δ = 0) are slower and have a large contrast, while off-resonant oscillations (blue, δ = 3Ω) are faster and have a lower contrast.
In the language of quantum computing, any single-qubit X- or Y rotation can be implemented by adjusting the time and phase of the resonant drive:
R(θ, φ) = e−i θ
2 (σx cos φ+σy sin φ) = I cos(θ/2) + i (σx cos φ − σy sin φ) sin(θ/2).
with θ = Ωt [Häf08]. We note that single-qubit Z rotation Zθ = exp(−iθσz/2) generally does not need a physical implementation, as it can be performed by changing the phase of subsequent X and Y rotations (known as a virtual Z gate) [McK16].
2.3.2. AC Stark shifts
Whenever one transition is driven on resonance, many other transitions are coupled offresonantly. In the first approximation, those interactions are neglected. However, when considering the limits of control, it is essential to understand the effect of a far off-resonant Rabi drive. One way to understand single-qubit rotations is through a dressed-state picture. The eigenstates and eigenvalues of H′
I in Eq. (2.18) are given by:
|ψ+〉 = cos (β/2) |0〉 + sin (β/2) |1〉 E+ = +ħΩδ/2
|ψ−〉 = − sin (β/2) |0〉 + cos (β/2) |1〉 E− = −ħΩδ/2
where the mixing angle β is defined through tan(β) = Ω/δ. On resonance, the eigenstates are split by ħΩ, which provides an alternative way of understanding Rabi oscillations. In the far off-resonant limit δ   Ω, we can expand the solutions up to the leading order in Ω,
26

 2.3. Quantum control
resulting in:
|ψ+〉 ≈ |0〉 + Ω2
2δ2 |1〉 E+ = + ħδ
2 + Ω2
4δ
|ψ−〉 ≈ |1〉 − Ω2
2δ2 |0〉 E− = − ħδ
2 − Ω2
4δ . (2.21)
The leading-order contribution to the eigenvalues ±ħδ/2 simply represents an energy shift between the qubit frame and the drive frame, rather than a physical coupling9. The nextorder term ±Ω2/4δ represents a physical interaction known as the AC Stark shift. Even in absence of a population exchange between |0〉 and |1〉, the qubit states will experience a differential phase shift whenever an off-resonant drive is applied.
Detuning
Dressed state splitting
2 levels
3 levels
0
Figure 2.8: Illustration of the effect of a spectator mode on a qubit transition. When a spectator mode with detuning ∆ and Rabi frequency Ω2 is present in the system, the qubit transition frequency shifts by Ω2/4δ. This is illustrated as an offset of the dressed state splitting minimum (avoided crossing). The dresses state splitting magnitude is also affected due to mixing with |e〉.
The relevance of the AC Stark shift can be clarified by considering a three-level system shown in Fig. 2.8 (left). Suppose we wish to perform a resonant Rabi oscillation at a Rabi frequency Ω1, which is done by setting δ = 0 in the two-level picture. However, an additional transition |0〉 ↔ |e〉 with detuning ∆ is present in the system. The laser drive couples off-resonantly to that transition with Rabi frequency Ω2, and we assume for simplicity there is no coupling between |1〉 and |e〉. In the frame-
 of the drive, the interaction Hamiltonian reads:
HI = ħ

 
0 Ω1/2 Ω2/2 Ω1/2 −δ 0 Ω2/2 0 ∆ − δ

 
where we set the zero-point energy to E0. By diagnonalising HI we can find the dressed states in the presence of the spectator mode. The result is shown in Fig. 2.8 (right). For Ω2 = 0, the dressed-state splitting is ħΩ1
9 One way to convince yourself of that is to note that the shift persists in the limit of Ω → 0
27

 2. Quantum information with individual trapped ions
and the resonance occurs at δ = 0. Once Ω2 > 0, the resonance shifts to δ ≈ Ω22/(4∆), assuming δ   ∆. This means that, to drive the qubit on resonance, we need to set the drive frequency at ω0 + Ω22/(4∆). Furthermore, if quantum information is encoded in |e〉, driving the qubit on resonance for time t will cause a phase shift of |e〉 of ≈ Ω22t/(4∆). This phase offset will be further discussed in Sec. 7.1.4, where it becomes relevant for quantum information processing with three-level systems.
2.3.3. Transition broadening and off-resonant excitations
Eq. (2.19) indicates that the contrast of Rabi oscillations is given by C = Ω/Ωδ. Expanding this expression for δ   Ω, we find that the contrast loss associated with a small detuning is given by
1 − C ≈ δ2
2Ω2 .
This decreased sensitivity to detuning errors with increased Rabi frequency is a result of the power broadening of a transition. Increasing Ω causes the transition linewidth to increase, which reduces errors associated with detuning (caused by drive or qubit frequency drifts). The power-broadened transition has a full-width at half-maximum (FWHM) = 2Ω. In Sec. 2.3.2 we showed how the dressed state splitting is affected by spectator transitions, but what about the dressed states themselves? Eq. (2.-
21) implies that a spectator transition with Rabi frequency Ω2 and detuning ∆ mixes into the qubit dressed states with amplitude ±Ω22/(2∆2). In the computational basis, this corresponds to fast oscillations of the population in |e〉 with amplitude ∼ Ω22/∆2. Consequently, once the pulse is switched off, some of the population might be left in |e〉. This can limit the fidelity of certain interactions, especially when a strong sideband drive off-resonantly excites a spectator carrier mode. The solution-
 to this problem of off-resonant mode excitations is to smoothly shape the amplitudes of the drive pulses. Suppose that a two-level system in |0〉 is driven off-resonantly with detuning δ and a time-varying Rabi frequency Ω(t). The mixing angle β(t) and the eigenstates |ψ±(t)〉 are now time-dependent, and we can write the state at time t as:
|ψ(t)〉 = A+(t)|ψ+(t)〉 + A−(t)|ψ−(t)〉
By writing out the differential equations for A±(t), it can be shown that in the so-called adiabatic limit:
∣ ∣ ∣ ∣
dΩ(t) dt
∣ ∣ ∣ ∣
 
∣ ∣ ∣ ∣ ∣
Ω3
δ (t) δ
∣ ∣ ∣ ∣ ∣
the time-dependent coefficients remain constant:
A±(t) = A±(0)
28

 2.3. Quantum control
and thus the system returns to |0〉 once the drive is switched off [Sch08]. Of course, no pulse is (nor should be) perfectly adiabatic. Nonetheless, ramping the Rabi frequency at a timescale t ∼ 1/δ typically does not prolong the interactions significantly, yet significantly suppresses off-resonant excitations [Bal14]. I am not aware of any simple analytical expressions for the residual error magnitude, so I typically simulate it on a case-by-case basis. As an example, the entangling gates describe-
d in Sec. 8.3 operate with Ω ≈ 2π × 270 kHz. The gate pulses are near-resonant with the motional sideband which is detuned by δ ≈ 2π × 2 MHz from the carrier. In a square-pulse implementation, this would lead to a significant off-resonant excitation error of δ2/Ω2
δ ≈ 2%. By smoothly ramping the 66 μs square pulse over 2.5 μs we suppress this error by more than three orders of magnitude in the simulation. We note that, in this regime, the exact pulse shape does not matter much, and many window functions can be used to achieve comparable results.
2.3.4. Decay and saturation
We have thus far treated the atomic dynamics as a closed system with no decay. We now examine the effect of the finite transition linewidth Γ on Rabi oscillations. This treatment is relevant for both quantum gates (where Γ   Ω), as well as for driving electric dipole transitions (where Γ and Ω are comparable). Formally, we consider a two-level system driven with Rabi frequency Ω and detuning δ, and solve the master equation with a single
jump operator L1 = √Γσ− (Tab. 2.3) In the limit of Γ   Ω, we find that the contrast of the first resonant Rabi flop is reduced to
C ≈1− Γ
Ω.
In Sec. 8.3.2, we will show how this effect sets the lower bound on two-qubit gate errors achievable with a given laser power10. When Γ is comparable or exceeds Ω, Rabi oscillations decay fast. Once the coherence is gone (t   1/Γ), the steady-state is a mixed state with a density matrix
ρ = p0|0〉〈0| + p1|1〉〈1|,
where the excited state population [Ste97]:
p0 = Ω2/Γ2
1 + 2Ω2/Γ2
We can calculate the power necessary to efficiently drive a dipole transition by introducing
10 While the limit affects both single- and two-qubit gates, the latter error is bigger by a factor of 1/η, and hence more relevant
29

 2. Quantum information with individual trapped ions
Table 2.4: Saturation parameters for dipole transitions in 40Ca+. Saturation intensity is calculated from Eq. (2.22), which assumes a random polarisation. Saturation power is calculated at the centre of a Gaussian beam with 30 μm waist radius.
λ (nm) Isat (mW/cm2) Psat (μW)
397 135.4 1.9 854 0.85 0.012 866 0.89 0.013
393 138.9 2.0 849 0.1 0.001
the saturation intensity11 [Ste07]:
Isat = ħω03Γ
4πc2 . (2.22)
The ratio s0 between the drive intensity I and the saturation intensity Isat is known as the saturation parameter. It is possible to show that
s0 = I
Isat
= 2Ω2
Γ2 ,
and therefore when I = Isat the excited state population p0 = 0.25. The saturation intensity can be calculated from the atomic properties (Tab. 2.1), allowing us to infer laser powers necessary to efficiently drive dipole transitions. This is done in Tab. 2.4, where we list both the saturation intensity and the corresponding laser powers for a 30 μm waist radius. For a drive detuned by δ from the atomic transition, the the steady-state excited population is given by:
p0(δ) = 1
2
s0
1 + s0
(Γeff/2)2 (δ2 + Γeff/2)2
implying that, for a given saturation parameter s0, the effective transition linewidth broadens
to Γeff = Γ√1 + s0. The maximum steady-state population in the excited state is achieved in the limit of s0 → ∞ and δ = 0, when p0 → 1/2.
2.3.5. State preparation
The starting step of every quantum computation is to prepare all the qubits in a well-defined initial state. Throughout this thesis, we initialise the ions in |1〉 = |S1/2, mJ = −1/2〉. The state preparation is the first dissipative protocol we discuss so far. The first way to initialise the ion is by optical pumping on a dipole transition (Fig. 2.9 a) A λ = 397 nm beam travelling along the quantisation axis is circularly polarised such as
11 Note that the definition of Isat assumes the laser light is unpolarized. If the polarization is aligned for maximum Rabi frequency, the saturation intensity decreases by a factor of 3.
30

 2.3. Quantum control
397 σ
S1/2
P1/2
mJ = +1/2
mJ = -1/2
mJ = -1/2
S1/2 mJ = +1/2
mJ = -1/2
729
854
P3/2
D5/2
a) b)
866 866
854
Figure 2.9: Different methods of state preparation. a) Optical pumping on a dipole transition uses polarization selectivity to pump into |S1/2, mJ = −1/2〉 b) Optical pumping on a quadrupole transition uses frequency selectivity to pump into |S1/2, mJ = −1/2〉.
to only excite the |S1/2, mJ = +1/2〉 ↔ |P1/2, mJ = −1/2〉 transition. Every spontaneous emission from the excited state populates |1〉 = |S1/2, mJ = −1/2〉 with probability 1/3 (this is specified by the Clebsch-Gordan coefficients in App. 11.1). Thus, after approximately three scattering events, the state is prepared in |1〉. This optical pumping is a very robust and reliable method of state initialisation, and we use it throughout the thesis. However, the fidelity is fundamentally limited by the puri-
ty of the polarization and by the beam alignment with respect to the magnetic field. We observe this limitation experimentally in Sec. 5.2.1. These limitations can be overcome by optical pumping on a quadrupole transition (Fig. 2.9 b). A λ = 729 nm laser beam drives a |S1/2, mJ = +1/2〉 ↔ |D5/2〉 transition, which is followed by a repump pulse using λ = 854 nm and λ = 866 nm light. This can be done in a pulsed or continuous fashion, and any D5/2 sub-level except |D5/2, mJ = ±5/2〉 is suitable12. Afte-
r a few cycles, the ion decays into |1〉. The quadrupole scheme uses frequency rather than polarization sensitivity and hence can achieve much lower errors, limited only by off-resonant excitations. On the other hand, the dipole scheme requires lower powers and is much faster. In experiments, we typically begin with dipole optical pumping, followed by a few cycles of quadrupole pumping to further purify the state (Sec. 5.2).
2.3.6. Optical qubit read-out
The optical qubit can be measured by state-dependent fluorescence. Lasers at λ = 397 nm and λ = 866 nm are applied onto the ion as shown in Fig. 2.10 a). The former drives
12 |D5/2, mJ = +5/2〉 decays with overwhelming probability to |S1/2, mJ = +1/2〉 due to dipole selection rules, while the transition from |S1/2, mJ = +1/2〉 to |D5/2, mJ = −5/2〉 is forbidden by the quadrupole selection rules.
31

 2. Quantum information with individual trapped ions
continuous excitation and emission on the S1/2 ↔ P1/2 transition13, while the latter is applied at high intensity to strongly saturate the D3/2 ↔ P1/2 transition. The fluorescence at λ = 397 nm is collected on a photon detector. If the ion started in |1〉, we observe a large number of scattered photons, while the ion in |0〉 ideally appears dark [Mye08]. In reality, some photons are also collected in the latter case due to laser scatter and spontaneous emission of |0〉, which is discussed in more det-
ail in Sec. 5.3.1.
S1/2 mJ = +1/2
mJ = -1/2
D5/2
mJ = +1/2
mJ = -1/2
P1/2
729 shelves
397
S1/2 mJ = +1/2
mJ = -1/2
mJ = +1/2
mJ = -1/2
P1/2
397
866 866
a) b)
Figure 2.10: a) Optical qubit readout. Light at λ = 397 nm drives a cycling transition, causing the ion to emit fluorescence. Another laser at λ = 866 nm repumps the population from D3/2. b) Zeeman qubit readout can be performed by first applying a number of λ = 729 nm shelving pulses, followed by the optical qubit readout.
The measurement is the usually the most efficient when the detection laser at λ = 397 nm is applied on resonance (δ = 0) and with power comparable to the saturation intensity. As the drive intensity I increases above Isat, the fluorescence asymptotically approaches the maximum possible value while the background increases linearly with I. The ideal intensity depends therefore on the amount of measurement background. When the ion is in state |1〉, the mean number of scattered photons measured in a t-
ime window τ is equal to:
μ1 = η × τ × nP × Γ (2.23)
where η is the overall detection efficiency, nP is the fraction of the population in P1/2 and Γ is the transition linewidth. Since the fluorescence does not occur in a pure two-level system, it is actually not possible to to obtain nP → 0.5 in the limit of I → ∞. Instead, for the three-level system composed of S1/2, P1/2 and D3/2, we find [Mye08]:
nP = s0
1 + 4s0
,
13 We use a π-polarized beam, but any drive which is not purely σ± suffices
32

 2.3. Quantum control
where s0 is the saturation parameter of the S1/2 ↔ P1/2 transition, and we assumed the D3/2 ↔ P1/2 is maximally saturated. In the limit of s0 → ∞ we find nP = 0.25, i.e. the population inversion is half of that available in a two-level system. The intuition about this correction is as follows: when s0 → ∞, all the sub-levels of the S1/2, P1/2 and D3/2 have equal populations. That means half of the population is in D3/2, which is four-fold degenerate (2J + 1 = 4), while S1/2 and P1/2 both have a qu-
arter of the population due to their lower two-fold degeneracy (2J + 1 = 2). Once the fluorescence is collected, we use a simple technique of histogram thresholding to determine the measurement outcome. By preparing and measuring the ion in states |1〉 and |0〉, we build a histogram H(n) of photon counts observed in a time window τ . For one ion, we fit the histogram with two Poisson distributions H(n) = S(n) + D(n), where
D(n) = μn
D e−μD
n!
S(n) = μn
B e−μB
n!
with μD and μB as the mean counts for the background and the bright ion respectively. The optimal threshold is then given by [Bur10]:
nth = μB − μD
ln (μB/μD) .
In subsequent experiments, the final state is quantified as |1〉 if the number of collected photons exceeds nth, and as |0〉 otherwise. By repeating the experiment many times over on the same input state, the thresholding technique allows us to extract the probabilities P (0) and P (1) that the ion was in states |0〉 and |1〉 respectively prior to the measurement. Suppose that the experiment was repeated N times, with n trials returning |0〉. Our best estimate of the true probability is the sample mean-
 P (0) = n/N . The uncertainty can be calculated by noting that each experimental repetition constitutes an independent Bernoulli trial, with the outcomes described by a binomial distribution. Typically, this distribution is well-approximated by a Gaussian distribution (central limit theorem). The resulting uncertainty on P0 is known as the quantum projection noise and is given:
σP (0) =
√
P (0)(1 − P (0))
N . (2.24)
The only exception to this rule is when P (0) ≈ 0 or P (0) ≈ 1, resulting in a failure of the central limit theorem. In that case, the sample variance calculated from Eq. (2.24) systematically underestimates the population variance for small N . This is a well-known problem is statistics, and can be solved by applying Laplace’s succession rule. This imposes
33

 2. Quantum information with individual trapped ions
a minimum uncertainty of:
σP (0),min = 1
N +2
on any probability obtained from an experiment with N repetitions [Hem14]. Multiple ions in a single crystal can be simultaneously read out by magnifying the image and sending the fluorescence of each ion to a separate photon detector or a different camera pixel. In this thesis, we used a simpler technique of collective fluorescence measurement, where the emission of multiple ions is sent to the same photon counter. For two ions, the detection histogram can be then fitted with three Poisson peaks -
with means μDD, μDB, μBB, where μDB ≈ μB and μBB ≈ 2 × μB, from which two thresholds are found. By repeating the experiment many times over, we extract the probabilities P (00), P (01 + 10) and P (11). The middle outcome corresponds to the sum of the populations of |01〉 and |10〉. While this method can significantly simplify two-ion experiments, it does not scale favourably to larger
ion numbers, since a Poisson distribution with mean n has a variance of √n. Therefore, for N ions, while the distribution means are spaced by μB, their variances increase all
the way to √N × μB for N bright ions. For large enough N , the variance will exceed the peak-to-peak spacing, rendering the readout useless. Already for two ions, we find that the histogram broadening is a limiting factor of our measurement fidelity (Sec. 8.1.4) The fundamental limit to the readout fidelity comes from non-Poissonian statistics originating from the qubit decay. Finite optical qubit lifetime T1 introduces a readout error of ≈ τ /T1 for a detection time τ . Consequently, the two-ion -
peak discrimination error can be reduced by increasing τ only until it becomes comparable with the decay error. In Sec. 5.3.1 we quantify the measurement errors introduced by the qubit decay in our experiments. There are a host of techniques to correct measurement errors. Many of these rely on measurement post-processing – that is, require averaging over multiple runs of the same experiment – while others remove the biases introduced by the thresholding method in a single shot [Mar20]. In this the-
sis, we only apply a simple linear transformation in post-processing to correct for large readout errors. This method is described in Sec. 5.3 for one-ion readout, and in Sec. 8.1.4 for two-ion readout.
2.3.7. Zeeman qubit read-out
Unlike the optical qubit, the Zeeman qubit states cannot be directly distinguished by closed-cycle fluorescence. Instead, we employ auxiliary optical qubit states to perform this detection. We begin the readout with a number of λ = 729 nm shelving pulses, as shown in Fig. 2.10 b), which transfer the population from |0〉 to several states in the D5/2 manifold. Afterwards, we perform the optical qubit measurement as described in the previous section. While any λ = 729 nm pulse is prone to errors, she-
lving can be performed with probability significantly exceeding a single-qubit rotation contrast. This is the case for two reasons.
34

 2.4. Entangling ions
First, since the only goal is to transfer the population, shelving pulses do not require precise phase control. Second, once a pulse was executed, another pulse can be applied on a different transition from |1〉 to improve the state transfer probability. Therefore, the Zeeman qubit readout can be usually performed with the same fidelity (but with a slightly longer duration) as the optical qubit readout. Any residual imperfections can also be corrected by post-processing, as discussed in Sec. 5.3.2.
2.4. Entangling ions
The ability to entangle ions is a necessary ingredient of all known quantum algorithms. Any pure state quantum computation can be written as an N -qubit unitary UN applied to an initial state |0〉⊗N , followed by an N -qubit measurement. The unitary UN can be in turn decomposed onto a set of single- and two-qubit operations. In the previous section, we discussed how single-qubit rotations can be implemented on qubits encoded in 40Ca+ ions. In this section, we describe how to create a two-qubit enta-
ngling gate [Bla08]. This gate, together with single-qubit rotations, form a universal set of operations, and any UN can be constructed out of them [Häf08]. Of course, entangled states are interesting in their own right. Aside from quantum computation, they are a resource for quantum key distribution [Eke91] and quantum metrology [Tót14]. They are also philosophically important, as they seem to capture the non-classical nature of quantum physics. We discuss the mathematics and philosophy of quantu-
m entanglement in more depth in Chapter 6, while in this section, we focus on the method of applying entangling gates on trapped ions.
2.4.1. State-dependent force
0
0
Re(α)
Im(α)
+1 e’state
-1 e’state
Figure 2.11: (a) State-dependent force is generated by applying a bichromatic drive with detunings ±(ωm + δ) from an optical qubit transitoin. (b) The resulting trajectory in the position-momentum phase space.
Before discussing the construction of an entangling gate, it is worth understanding the
35

 2. Quantum information with individual trapped ions
concept of a state-dependent force as applied to a single ion. Consider the situation in Fig. 2.11 a), where an ion is simultaneously driven close to the BSB and the RSB. The drives have phases φb and φr and detunings ±δ from the BSB and RSB respectively. Ignoring the terms oscillating faster than |δ|, the interaction Hamiltonian is given by the sum of two terms from Eq. (2.15):
HI (t) = HB(t) + HR(t) = ħηΩ
2
(
σ+a†e−i(δt+φb) + σ+aei(δt−φr))
+ H.c..
We define the spin phase φs and the motional phase φm as:
φs = 1
2 (φb + φr) and φm = 1
2 (φb − φr).
This allows us to re-write HI (t) as:
HI (t) = ηħΩ
2 σφ
(
aeiδteiφm + a†e−iδte−iφm
)
, (2.25)
where σφ = e−iφsσ+ + eiφsσ−. The logic of this substitution is evident from Eq. (2.25): the spin phase enters the spin operator σφ and selects the qubit basis of the interaction, while the motional phase multiplies the oscillator operators only. We can calculate the effect of applying HI (t) using Eq. (2.16). Since the Hamiltonian is time-dependent, we need to be careful regarding operator ordering. One consistent approach is to apply the Magnus expansion [Bla10]:
U (t) = e− i
ħ
∫t
0 H(t′)dt′+ 1
2ħ2
∫t 0
∫ t′
0 [H(t′),H(t′′)]dt′dt′′+... (2.26)
The first term in the exponential:
−i
ħ
t
∫
0
H(t′)dt′ = − i
ħ
t
∫
0
ηħΩ
2 σφ
(
ˆaeiδt′ eiφm + aˆ†e−iδt′ e−iφm
)
dt′
= − iηΩ
δ σφsin(δt/2)
(
ˆaeiδt/2eiφm + aˆ†e−iδt/2e−iφm
)
=
(
α(t)ˆa† − α∗(t)ˆa
)
σφ, (2.27)
where
α(t) = − iηΩ
δ e−iδt/2 sin(δt/2)eiφm . (2.28)
To evaluate the second term, we first calculate the commutator:
[HI (t′), HI (t′′)] =
( ηħΩ 2
)2
2i sin(δ(t′ − t′′)). (2.29)
36

 2.4. Entangling ions
where we used the fact that for any σ2
φ = 1 for any φ. Now we can calculate the second term in the exponential:
1 2ħ2
t
∫
0
t′
∫
0
[H(t′), H(t′′)]dt′dt′′ = i
( ηΩ 2δ
)2
(δt − sinδt)
= iβ(t),
where I defined
β(t) = η2Ω2
4δ2 (δt − sin δt). (2.30)
Finally, observe that the commutator in Eq. (2.29) is a scalar (and not an operator). Therefore, all the further commutators in the Magnus expansion in Fig. (2.26) are zero, and the propagator is exactly given by:
U (t) = e(α(t)a†−α∗(t)a)σˆφ e−iβ(t)
= D(α(t)σφ)e−iβ(t), (2.31)
where in the last line I introduced Dˆ (α(t)) = e(α(t)aˆ†−α∗(t)aˆ), a displacement operator which transforms the vacuum state of motion into a coherent state with amplitude α(t). We can now easily interpret the result as shown in Fig. 2.11 b). The initial qubit state can be written as a superposition of the ±1 eigenstates of σφ. Under the application of HI (t), these eigenstates become displaced in opposite directions ±α(t), but acquire equal phases β(t). The displacement occurs in a loop of diame-
ter |α| = ηΩ/δ in a direction specified by φm. The displacement returns the motional state to the origin at times specified by:
α(t) = 0 ⇐⇒ t = 2mπ
δ,
where m ∈ Z. At those times we find:
β(t) = η2Ω2mπ
2δ2
which is proportional to the area enclosed by the loop in the phase space of position and momentum.
2.4.2. MS gate
The MS gate extends the SDF Hamiltonian to two ions addressed with a global beam [Sør99; Sør00]. As discussed in Sec. 2.2.6, we can construct the two-ion Hamiltonian by adding two single-ion Hamiltonians HI (t). This requires a replacement of η with a two-ion Lamb-Dicke
37

 2. Quantum information with individual trapped ions
parameter
η=k
√
ħ
2mω cos θ → η = k
√
ħ
4mω cos θ
which reflects the increased total mass14. Furthermore, σφ is replaced with a sum of two single-ion operators:
σφ → Sφ = σφ ⊗ 1 ± 1 ⊗ σφ.
We call Sφ the total spin operator15, and the sign depends on whether the ions oscillate in phase (+ sign) or out of phase (− sign) for the mode in question. All the gates in this thesis were done with the out-of-phase (stretch) axial mode, where Sφ has four eigenstates:
|±±〉φ =
[ √12
(
|0〉 ± eiφs |1〉
)
]
⊗
[ √12
(
|0〉 ± eiφs |1〉
)
]
,
With eigenvalues:
Sφ|+−〉φ = 2|+−〉
Sφ|−+〉φ = −2|−+〉
Sφ|++〉φ = 0
Sφ|−−〉φ = 0.
Aside from this replacement, the first term in the Magnus expansion remains the same. The second term is more complicated since the total spin operator does not square to zero. Instead, we find:
S2
φ = 2 (1 ⊗ 1 + σφ ⊗ σφ) .
Because of this, the commutator is no longer a scalar, but proportional to S2
φ. Still, S2
φ
commutes with all other qubit operators in HI (t). Therefore, all the subsequent commutators are still zero, and we can write the total propagator as:
U (t) = D(α(t)Sφ)e−iβ(t)S2
φ.
This propagator can generate a maximally entangling gate by setting the detuning δ to:
δ = 2Ωη
14 Formally, for any single ion, the Lamb-Dicke parameter is reduced due to a decreased contribution of the motion of any one ion to the normalised normal-mode eigenvector. 15 Although it is misleading, because the ions are spin-1/2 systems, not spin-1 systems
38

 2.4. Entangling ions
0
0
Re(α)
Im(α)
0
0
Re(α)
Im(α)
Figure 2.12: Phase space loops corresponding to an MS gate on the stretch mode. a) States |+−〉 and |−+〉 become displaced, and return to the origin at time t = 2π/δ, by which time they have accumulated a geometric phase of π/4. The figure shows the displacement right before t. b) The states |++〉 and |−−〉 remain at the at all times origin, and do not accumulate a geometric phase.
and selecting the pulse time t = 2π/δ to ensure α(t) = 0. The resulting propagator then affects the internal state only, and is given by:
U (t) = e−i π
8 S2
φ.
We can understand U (t) through its action on the internal-state eigenstates, which is illustrated in Fig. 2.12 and evaluates to:
U (t)|+−〉 = e−i π
2 |+−〉 = −i|+−〉
U (t)|−+〉 = e−i π
2 |−+〉 = −i|−+〉
U (t)|++〉 = |++〉
U (t)|−−〉 = |−−〉.
Such U (t) implements a controlled-phase gate in the |±〉 basis, and is a universal gate when combined with single-qubit rotations. We can transform back into the computational basis to find:
U (t)|00〉 = √12
(
|00〉 + ie2iφs|11〉
)
U (t)|01〉 = √12
(
|01〉 + i|10〉
)
U (t)|10〉 = √12
(
i|01〉 + |10〉
)
U (t)|11〉 = √12
(
ie−2iφs |00〉 + |11〉
)
39

 2. Quantum information with individual trapped ions
up to a global phase. This representation makes it explicit that U (t) can transform an initial separable state into a maximally entangled state.
2.4.3. Phase-modulated MS gates
One of the main challenges of implementing high-quality entangling gates is in ensuring α(t) = 0 at the end of the sequence. This requires precise calibration of the gate detuning and pulse time and is affected by errors such as trap frequency drifts. Fortunately, the MS gate scheme can be modified to suppress certain errors (usually at a cost of amplifying others). The first possible modification comes from dividing the single phase-space loop into multiple smaller ones. Formally, we implement a -
K-loop MS gate by setting:
δ=√
K 2Ωη
t = 2πK
δ
The resulting unitary is the same as in Eq. 2.4.2. This construction changes the error sensitivity of the gate. Smaller loops suppress the effect of detuning errors and heating rates,
but they prolong the gate by a factor of √K, making it more sensitive to qubit dephasing and uncompensated AC Stark shifts. This is discussed in further in Sec. 8.3.3. Once the gate is divided into K loops, another trick can be used to gain further error resilience without losing time. This can be achieved by time-modulation of the drive phases [Hay11]. At any time t, the direction of the state-dependent force is set by the motional phase φm(t), while the spin phase φs(t) sets the eigenbasis of th-
e interaction. By modulating φm(t) and keeping φs(t) constant, the states |+−〉 and |−+〉 can traverse any loop in the phase space. As long as α(t) = 0 at the end of the interaction, the resulting unitary corresponds to a pure internal-state operator. This allows us to make each loop a different shape, or make each loop run in a different direction. Multiple schemes have been proposed in the literature to exploit this loop shape freedom to create gates robust to different static or time-dependent er-
rors. In this thesis, we use two different phase modulation methods, each applied to a K = 2. The first method is the Walsh modulation, which can be considered a kind of spin-echo for displacements [Hay11]. For K = 2, it involves simply increasing φm by π between the first and second loop, which changes the direction of the second loop relative to the first. In the presence of timing or detuning errors, this reduces the final residual displacement of |+−〉 and |−+〉 relative to each other, as illust-
rated in Fig 2.13. Following the calculation in Eq. (2.27), a MS gate segment of length running from t = 0
40

 2.4. Entangling ions
0
0
Re(α)
Im(α)
0
0
Re(α)
Im(α)
Figure 2.13: a) A two-loop MS gate with a fixed detuning error. The first loop does not return to the origin, and the second loop increases the final error. b) A two-loop Walsch-modulated MS gate with a fixed detuning error. The first loop does not return to the origin, at which point the direction of the state-dependent force is reversed. The second loop cancels the error of the first loop in the first order.
to t = τ with detuning δ and motional phase φm introduces a displacement given by
α(τ ) = k
τ
∫
0
eiδteiφm
where k = −iηΩ/2. Consider a two-loop modulated gate of length t = 2τ with segment length τ = 2π/δ. The motional phases are given by
φ1 = φm and φ2 = φ1 + φ0
for the first and second segment respectively. The final displacement evaluates to:
α(2τ ) = k
τ
∫
0
dteiδteiφm + k
2τ
∫
τ
dteiδteiφm eiφ0 (2.32)
= − ieiφ
δ
(
−1 + eiδτ ) (
1 + ei(δτ +φ0))
To compare the effect of a detuning error   on modulated and unmodulated gates, we can expand this expression around δ = δ0 +   for a segment length τ = 2π/δ0. This gives a residual displacement magnitude of
|α(2τ )| = k 4π
δ02
  + O( 2) φ0 = 0, unmodulated gate
|α(2τ )| = k 4π2
δ03
 2 + O( 3) φ0 = π, modulated gate.
41

 2. Quantum information with individual trapped ions
0
0
Re(α)
Im(α)
0
0
Re(α)
Im(α)
Figure 2.14: Aussie-style phase modulated MS interaction. By adjusting the phase modulation in proportion to the interaction time, the population always returns to the origin.
In other words, adding phase modulation removes the residual spin-motion entanglement to the first order in  . More generally, by using K loops and (K − 1)−order Walsh modulation, we can reduce this error to O( K). This is important, as residual spin-motion entanglement creates a gate error ∝ |α(2τ )|2 (Sec. 2.5.1). Sometimes it if valuable to ensure that α(t) = 0 even if the pulse area does not result in a maximally entangling gate. This can be achieved by “Aussie-style” phase modulation [Mil18b]-
. For K = 2 loops, loop closure is achieved by setting
φ0 = π − δτ modulated gate, Aussie style.
Plugging this to Eq. (2.32) we find that α(2τ ) = 0 for all τ , which is illustrated in Fig 2.14.
This method of phase modulation allows us to implement a general unitary U (t) = e−iβ(t)S2
φ
where β(t) can be adjusted by simply changing the total interaction time. Sec. 9.3.1 demonstrates the experimental implementation of such phase modulation. Aussie-style phase modulation reduces to Walsh modulation when τ = 2π/δ, and provides the same suppression of detuning errors in the leading order.
2.4.4. Measuring entanglement
Since two-qubit gates are typically the most challenging aspects of quantum computing experiments, it is important to measure and benchmark their quality. One method of achieving that is through quantum process tomography, where the full operator description of the process is estimated and compared with the ideal entangling operation. Unfortunately, the full process tomography is challenging to implement for a number of reasons. First, process tomography requires single-qubit rotations to prepare -
and read out in a tomographically complete basis. This creates more stringent setup requirements than the MS gate itself, which only needs a global beam. While late in the thesis we developed a method of single-ion
42

 2.4. Entangling ions
addressing, it is currently much noisier than the entangling interaction itself (Sec. 9.3.5). Second, process tomography requires single-ion readout, whereas our experimental setup only measures the total number of ions in the state |1〉 (Sec. 2.3.6). A common workaround in our field is to use a two-qubit gate to prepare a maximally entangled state. The fidelity of the resulting Bell state can be measured with only global rotations and read-out, implementing so-called partial state tomography. We t-
hen use this fidelity to benchmark the quality of the entangling interaction itself16. Formally, we define the state fidelity as
F(ρ, φ) ≡ 〈φ|ρ|φ〉
where |φ〉 is the desired pure state and ρ is the actual density matrix. How can we estimate F with only global rotations and measurements? Let us begin by discussing fidelity estimation in the traditional Bell state basis:
|Ψ±〉 = √12 (|00〉 + |11〉)
|Φ±〉 = √12 (|01〉 + |10〉) (2.33)
This basis can be defined as eigenstates of two-ion parity operators σi ⊗ σi for i = (x, y, z). A nice property of the parity operators is that they can be measured with only global rotations and readout. Specifically, by post-processing a global readout we extract
〈σzσz〉 = P (00) + P (11) − P (01 + 10)
as defined in Sec. 2.3.6. We can likewise extract 〈σxσx〉 and 〈σyσy〉 by applying a global π/2 “analysis” pulse before the measurement, and the performing a parity readout. Specifically, R(π/2, π/2) ⊗ R(π/2, π/2) maps the the X-basis onto the computational basis, and allows us to measure 〈σxσx〉, while R(π/2, 0) ⊗ R(π/2, 0) maps the Y-basis onto the computational basis, and allows us to measure 〈σyσy〉. Armed with the ability to measure parities, we can extract the fidelities in the Bell basis. Consid-
er a general two-ion density matrix [Hom06]
ρ=

    
wp qr
p∗ x s t
q∗ s∗ y u
r∗ y∗ u∗ z

    
16 While it is common for trapped-ion papers to measure the Bell state fidelity and call the outcome “gate fidelity”, it is an unwarranted leap unless the noise model is extremely well understood.
43

 2. Quantum information with individual trapped ions
where w = 1 − x − y − z. By direct calculation we find
〈σxσx〉 = r∗ + s∗ + r + s,
〈σyσy〉 = −r∗ + s∗ − r + s,
〈σzσz〉 = 1 − 2x − 2y.
Similarly, the fidelities of interest can be written as
F (ρ, Φ±) = 1
2 (1 − x − y ± r ± r∗)
F (ρ, Ψ±) = 1
2 (x + y ± s ± s∗)
which results in experimentally useful formulae:
F (ρ, Φ±) = 1
4
[
1 + 〈σzσz〉 ± (〈σxσx〉 − 〈σyσy〉)
]
F (ρ, Ψ±) = 1
4
[
1 − 〈σzσz〉 ± (〈σxσx〉 + 〈σyσy〉)
]
, (2.34)
which imply that three global parity measurements with appropriate settings suffice to determine the Bell state fidelity of any two-qubit state. We will use those equations directly in Chapter 9 to determine the fidelity of |Ψ−〉 obtained by collective optical pumping into the entangled states of the Zeeman qubit. In Chapter. 8, we benchmark an optical qubit MS gate acting on |11〉. Such interaction does not prepare a Bell state of the form in Eq. (2.33). However, our method can be readily adapted t-
o any maximally entangled state of the form |Φφ〉 = √12 (|00〉 + eiφ0|11〉). This
is because |Φφ0〉 can be transformed into |Φ±〉 by a global Z rotation. As mentioned in Sec. 2.3.1, this rotation can be performed virtually by changing the phase of the analysis pulse. Formally, we define a general measurement basis as σφ = cos(φ)σy + sin(φ)σx. We can map onto this basis with a global R(π/2, φ/2) ⊗ R(π/2, φ/2) pulse. Then, the fidelity between ρ and a general Bell state |Φφ0〉 is given by:
F (ρ, Φφ0) = 1
4
[
1 + 〈σzσz〉 + 〈σφ0 σφ0 〉 + 〈σφ0+π/2σφ0+π/2〉
]
.
Note that, while three measurement settings suffice to extract the fidelity, these must be tailored to the expected value of φ0. It may be challenging to determine this phase a priori, since it is influenced by the time-dependent AC Stark shifts. Therefore, following a measurement of 〈σzσz〉, it is common to simply scan φ and find the maximum and minimum values of the parity curve. Thus, the expression for the fidelity is often recast in the form:
F (ρ, Φφ0) = 1
2
[
P (00) + P (11) + C
]
(2.35)
44

 2.5. Cooling ions
where C is the contrast of the parity curve:
〈σφσφ〉 = C cos(2φ − φ0). (2.36)
However, for more complicated experiments, it is useful to keep track of φ0. This also allows one to optimise the entanglement fidelity more efficiently. Finally, can we adapt our global rotations to calculate the fidelity with respect to a general odd Bell state |Ψφ〉 = √12 (|01〉 + eiφ|10〉)? Alas, the answer is no. As will be discussed in
Chapter 9, global rotations leave |Ψ−〉 invariant, and so we cannot transform to the desired measurement basis at will.
2.5. Cooling ions
Most quantum information experiments with trapped ions begin by cooling the ions close to the motional ground state. This is not necessary for trapping – in fact, ions can remain confined for a long time with all the cooling lasers switched off – but it turns out that ion temperature affects the quality of coherent operations. In this section, we review the cooling requirements and show how motional mode cooling is implemented.
2.5.1. Role of ion temperature
There are a number of coherent control issues that arise when the ion is far from the motional ground state. The exact amount of cooling required depends on the operation to be implemented and on the desired fidelity. Here, we present an overview of ways in which temperature may induce undesired operation errors.
Higher-order sidebands
In writing the approximate light-ion interaction Hamiltonian in Eq. (2.14), we assumed η
√(2n + 1)   1 for all motional modes, which is only the case close the the motional ground state. When the ion is hotter, more terms need to be included in the Hamiltonian, corresponding to higher-order motional sidebands. Once more motional modes are included, this also gives rise to cross-coupling terms between different harmonic oscillators. Since sideband couplings become stronger as n increases, the problem of spectator transitions becomes accentuated for higher n. The resulting spectral crow-
ding and spectator mode broadening makes it more challenging to avoid off-resonant excitations and to keep track of the AC stark shifts.
45

 2. Quantum information with individual trapped ions
Rabi frequency fluctuations
In the first approximation, the carrier Rabi frequency Ωn,n in Eq. (2.13) is independent of the motional state n. Adding the next-order correction gives:
Ωn,n = Ω
(
1 − η2
2 (2n + 1)
)
+ O(η4).
This correction would not introduce a decoherence path if the ion was in a Fock state. However, since the oscillator state after laser cooling is a thermal distribution, this leads to a shot-to-shot fluctuation in the Rabi frequency. Suppose that the ion is coupled to a single harmonic oscillator mode in a thermal state with average phonon number n ̄. Every shot of the experiment, the mode occupation n is then sampled from a thermal distribution:
Pth(n) = ( ̄n)n
(1 + n ̄)n+1 . (2.37)
This means that the Rabi frequency is sampled from a distribution of
Ωth(n) = Pth(n) Ω |〈n|eiη(a†+a)|n〉|
We can find the mean Rabi frequency 〈Ωn ̄〉 and its variance σΩ ̄n by evaluating the first and second moments of this distribution. The result is:
〈Ωn ̄ 〉 = Ωe−η2(n ̄+1/2) (2.38)
σΩ ̄n ≈ 〈Ωn ̄ 〉η2√
n ̄( ̄n + 1)
where the last equation assumes the Lamb-Dicke limit [Win97]. While Eq. (2.38) describes the contribution of a single motional mode, in reality, it must be multiplied over all motional spectator modes of the ions. This result (with small modifications) applies to sideband operations as well. This expression tells us that, as temperatures increase, the shot-to-shot Rabi frequency fluctuations increase as well. Therefore, fidelity of quantum operations can be increased by ground-state cooling specta-
tor modes with significant Lamb-Dicke parameters.
Increased entanglement error sensitivity
As discussed in Sec 2.4, qubit-qubit entanglement is driven by transiently entangling the internal state with the motional state. Consider a single ion driven by a state-dependent force with spin phase φs = 0. As shown in Eq. (2.31), the residual qubit-motion entanglement can be described by a unitary displacement D(ασx), where α quantifies the strength of the residual entanglement. The qubit error caused by D(ασx) can be quantified by taking the partial trace over the motional states. For an init-
ial qubit state |0〉 we find a bit-flip error
46

 2.5. Cooling ions
probability of:
P (|1〉) = 1 − 1
2
(
1 + e−2|α|2 e−2|α|2n ̄ )
.
For |α|   1, we can approximate this error as
P (|1〉) ≈ |α|2(1 + 2n ̄).
In other words, thermal occupation of the motional mode makes it more challenging to entangle and then disentangle with the oscillator. While the process can in principle be perfect, any errors get amplified by a factor of (1 + 2n ̄) when performed on a thermal state.
Mode frequency couplings
In the first approximation, the frequency of every mode is set by the external potential. When multiple ions are trapped in a single harmonic well, their normal modes depend on the competition between the external fields and the ion-ion repulsion. Higher Fock states of radial modes increase the distance between the ions and hence lower their mutual repulsion. This is illustrated in Fig. 2.15. When the radial modes are thermally occupied, this results in a shot-to-shot fluctuation of some normal mo-
des frequencies [Roo08].
a) b) c)
Figure 2.15: a) Equilibrium spacing of two ions (black line) determines the axial stretch mode frequency ωs b) Higher fock states of the radial breathing mode (red) result in larger mean spacing between the ions (black line) c) As a result, the axial stretch mode oscillator (blue) is coupled to the radial stretch mode oscillator (red).
As an example, consider the axial modes of two trapped ions. When the radial modes
are in the ground state, the axial stretch mode frequency is given by ωs = √3 × ωz, where ωz is the centre-of-mass frequency of one ion. When a radial mode at a frequency ωr is in Fock state nr, the axial stretch mode frequency experiences a cross-Kerr frequency shift of δωs = χnr, with17:
χ = −ωs
(1
2+
1
2 ωs2
4ωr2 − ωs2
)
( ωz
ωr
) ( 2ħωz α2mc2
)1/3
(2.39)
where α is the fine-structure constant and m is the mass of one ion [Nie08]. When the
17 Beware: the original paper [Roo08] has a mistake in the formula
47

 2. Quantum information with individual trapped ions
radial mode is thermally occupied with mean Fock state n ̄r, this results in a shot-to-shot axial stretch frequency fluctuation of
〈
δω2
s
〉
= χ2 ̄nr (2 ̄nr + 1) . (2.40)
On the other hand, the axial centre-of-mass frequency is set only by the external potential and is therefore left unaffected by this coupling. As this example illustrates, certain motional modes exhibit frequency fluctuations when other modes are thermally occupied. This can limit the fidelity of sideband operations (and hence two-qubit gates). However, assuming that the heating and dephasing rates are low enough, the motional frequencies are nonetheless constant over the duration of each experime-
nt, allowing one to suppress this error channel through gate phase-modulation (Sec. 2.4.3).
2.5.2. Doppler cooling
Doppler cooling is the first stage of cooling the oscillator towards the ground state. It is implemented by applying a red-detuned laser on a cycling transition. In the classical picture, the Doppler shift increases the scattering cross-section for particles counter-propagating with the laser light, and so emitted photons have larger average energy than the absorbed ones. This leads to an overall cooling of the atom [Ste86]. We can quantitatively analyse the limits of the process by combining the -
results from Sec. 2.2.5 and Sec. 2.3.4. The Lamb-Dicke approximation does not apply at the start of the cooling, but close to the steady-state when we can think of the process in terms of carrier and first-sideband interactions. Typically the transition linewidth Γ exceeds the mode frequency ωm, and so all three terms in Eq. (2.15) are driven simultaneously. For a lineshape function p0(δ), this gives:
PB ∝ η2(n + 1)p0(δ − ωm) BSB excitation probability, |n〉 → |n + 1〉
PC ∝ p0(δ) Carrier excitation probability, |n〉 → |n〉
PR ∝ η2np0(δ + ωm) RSB excitation probability, |n〉 → |n − 1〉
By picking δ < 0 we make the RSB excitation (which takes away a quantum of motion) more likely than the BSB excitation (which adds a quantum of motion). The following
48

 2.5. Cooling ions
atomic decay branches at a ratio of:
P′
B ∝ η2
s (n + 1) BSB decay probability, |n〉 → |n + 1〉
P′
C ∝ 1 Carrier decay probability, |n〉 → |n〉
P′
R ∝ η2
s n RSB decay probability, |n〉 → |n − 1〉
where the Lamb-Dicke parameter for spontaneous emission ηs is different from η since the outgoing photons do not have a well-defined direction (ηs2 = k2z02/3 for isotropic spontaneous emission). The combined effect of excitation followed by emission at a rate of Γ is that the motional state n heats at a rate R+ ∝ Γ(PC P ′
B +PBP ′
C ) and cools at a rate of R− ∝ Γ(PC P ′
R +PRP ′
C ). The final temperature can be found by equating the heating rate with the cooling rate. With this analysis, we find that the final temperature is the lowest when the effective transition linewidth is the narrowest. For any given transition, this is achieved in the limit of no power broadening, and so s0 → 0. The lowest temperature is then obtained when δ = Γ/2 and for a two-level system is given by [Esc03; Ste86]:
n ̄ = Γ
ωm
cos2 θ + 1
3
4 cos2 θ (2.41)
where θ is the angle between the cooling laser and the oscillator mode. For θ = 0, we find n ̄ = Γ/(3ωm), while θ = 45 deg gives ≈ 0.4Γ/ωm. At the angle of θ ≈ 65 deg, the Doppler temperature increases by a factor of two from the optimum. Doppler cooling is typically the longest step of our experiments, although the cooling rate can be increased at the cost of increasing the final temperature. Note that the cooling occurs for all the normal modes in parallel, with the final temperature inversely p-
roportional to the mode frequency. Finally, Eq. (2.41) implies that that  ̄n diverges for θ → π/2, further highlighting the need to tilt the radial modes in SETs, where the cooling beam typically travels parallel to the chip surface (Sec. 2.1.3). For the λ = 397 nm cycling transition and a typical axial frequency ωm = 2π × 2 MHz we find Γ/ωm ≈ 11, limiting the temperature to n ̄ ≈ 3.5 in the two-level approximation. Further cooling is therefore necessary to reach the true oscillator ground state.
2.5.3. EIT cooling
As evidenced by Eq. (2.41), the lower the transition linewidth, the lower the final temperature. electromagnetically-induced transparency (EIT) cooling allows us to cool below the Doppler limit by narrowing the excitation linewidth, thus limiting the carrier excitations. In this section, I describe the intuition behind this technique. An interested reader is encouraged to consult [Roo00; Mor00] for detailed mathematical description of the cooling process and its limits.
49

 2. Quantum information with individual trapped ions
EIT cooling is related to a phenomenon called coherent population trapping [Ari96]. Consider a pair of drives as shown in Fig. 2.16.
Figure 2.16: Λ configuration necessary for coherent population trapping. Whenever δ1 = δ2, the population gets pumped into a dark state of the qubit, whereby it stops emitting photons.
Whenever δ1 = δ2, there is a so-called dark state
|ΨD〉 = Ω2
Ω |0〉 + Ω1
Ω |1〉,
with Ω =
√
Ω21 + Ω22 for which the drives destructively interfere, removing any chance of excitation to |e〉. As a result, if |e〉 can decay to both ground states, the population will be pumped to |ΨD〉, at which point it stops scattering photons. Therefore, when we scan the drive detuning δ1, we will find an excitation suppression (or a “dark resonance”) at δ1 = δ2. This phenomenon is exploited in EIT cooling as follows. A strong σ-polarized “pump” drive is far-detuned by δ2 from the atomic transition |0〉 ↔ |e-
〉. This creates a Starkshifted “bright” dressed state, which can be resonantly excited from |1〉 at the frequency of δ1 = δ2 + Ω21/(4δ2) by a weak π-polarized “probe” beam (Fig. 2.17). Setting
δ1 = δ2, and Ω2 = 2√ωmδ2 (2.42)
aligns this resonance with the RSB of the “probe” drive. On the other hand, the carrier excitation is completely suppressed, since δ1 = δ2 is a dark resonance18 The BSB excitation can be make weak by setting δ2   Γ, since the next (wide) resonance is at δ1 = −Ω21/(4δ2), as shown in Fig. 2.17 b). Since the carrier excitation is completely eliminated, the final temperature is now predominantly limited by the residual BSB excitation. This results in the cooling limit of [Mor00]:
 ̄n =
(Γ
4δ2
)2
.
18 It turns out that, in the EIT scenario, this dark resonance persists even when the pump and probe fields are not phase coherent [Kha15]. This is in contrast to the standard coherent population trapping.
50

 2.5. Cooling ions
397 σ
S1/2
P1/2
mJ = +1/2
mJ = -1/2
mJ = -1/2
a)
397 π
Narrow resonance
Dark state
Broad resonance
397 π
mJ = -1/2
b)
Figure 2.17: EIT cooling configuration. a) Necessary laser transitions. EIT is achieved by combining a strong σ-polarized pump beam with a weak π-polarized probe beam. Both beams must be detuned by the same amount from the excited state to create conditions for coherent population trapping. b) The resonant excitation structure as seen by the probe beam. A dark state at δ1 = δ2 results from coherent population trapping. Optimal cooling is achieved by aligning the drive RSB with the narrow resonance-
.
Thanks to this relationship, the cooling is only limited by how much the lasers can be detuned, which is a technical limitation and not a fundamental one. We usually operate with δ ≈ 2π × 50 MHz, which should be sufficient to cool a 40Ca+ ion to  ̄n ≈ 0.01. We do not reach such low temperatures in practice, likely due to polarization impurity and quantization axis oscillations (Sec. 5.2.1). Nonetheless, EIT does allow us to cool close to the motional ground state (Sec. 5.6.3). EIT can cool multipl-
e modes in parallel since the carrier suppression is power-independent, but the optimal AC Stark shift in Eq. (2.42) can only be achieved for one mode [Lec16]. The the cooling rates are proportional to the overlap between the oscillator mode and the wavevector difference of the “pump” and “probe” beams.
2.5.4. Resolved sideband cooling
A different way of suppressing the carrier and BSB excitations is to use resolved sideband cooling. Each cycle of sideband cooling consists of two steps, labelled (A) and (B) in Fig. 2.18. Consider an ion prepared in the internal state |1〉 and Fock state |n〉. In the step (A), the ion is excited on the RSB of a narrow-linewidth optical qubit transition, changing the combined ion-oscillator state to |0〉 ⊗ |n − 1〉. Afterwards in step (B), the ion’s internal state is reset to |1〉 by optical pumping on-
 a dipole transition (Sec. 2.9). Thus, at the end of the cycle, the ion’s internal state is returned to |1〉, but the motional state is reduced to |n − 1〉. As a consequence, after sufficiently many cycles, the ion is pumped into the motional ground state, regardless of the input state. Since different Fock states n
correspond to different RSB Rabi frequencies Ωη√n, one cannot tailor the RSB drive to be an exact pi-pulse for a thermal state of motion. To make the cooling most efficient, we
51

 2. Quantum information with individual trapped ions
ramp the pulse time from an initial value of t ≈ π/Ωη√n ̄ to the final value of t ≈ π/Ωη.
D5/2
S1/2
n=0 n=1 n=2 n=3
n=0 n=1 n=2 n=3
Figure 2.18: Resolved sideband cooling is composed of two steps. Drive (A) is an RSB drive on an optical qubit transition (any transition can be used for this surface). The decay step (B) is stimulated by applying the repump lasers. After applying (A) and (B) in sequence, the motional occupation reduces until it reaches n = 0.
In the leading order, the limit to the temperatures achievable with resolved sideband cooling comes from off-resonant carrier and BSB excitations (Sec. 2.3.3). For square pulses, the final temperature is given by [Ita]:
n ̄ ≈ Ω2
ω2m
(
η2
s+1
4 η2
)
.
Since off-resonant excitations be reduced by pulse shaping or by decreasing Ω, the practical limit on  ̄n is set by how long we’re willing to spend sideband cooling. However, the Rabi frequencies for quadrupole transitions are lower than for dipole transitions, and thus sideband cooling is naturally slower than Doppler or EIT cooling. When slowed down further, the achievable temperatures might become limited by mode heating rates. Unlike the other cooling methods, sideband cooling is single-mode. -
When the quadrupole beam is global, only one mode can be cooled per round, and cooling M motional modes requires M separate sub-cycles, each at a different RSB frequency19 [Mor99]. Therefore, the sideband cooling time grows linearly with the number of ions N . However, if N ions in a chain are individually addressed, it is possible to perform N cooling cycles in parallel, and thus keep the cooling time approximately constant20 [Che20].
19 In our experiment, we sideband-cool the motional modes with the highest heating rate last to achieve the lowest average temperatures 20 Assuming the amount of available laser power grows ∝ N
52

 3. Experimental setup
Trapped-ion quantum information experiments require complex setups combining laser optics, electronics and vacuum systems. Our setup was designed and built to operate planar Paul SETs in a cryogenic environment. The trap is housed inside a copper chamber, which is cooled down to 4 K using a closed-cycle cryocooler. The chamber is placed under vacuum, and heat-shields protect it from excess room-temperature black body radiation. Stable trapping is achieved by a combination of DC and RF voltages app-
lied to trap electrodes. The 4 K chamber houses an RF amplifier, “low-pass” RC filters, as well as various ancillary electronics. The light emitted by the ion is collected by a cryogenic objective and focused onto a photo-multiplier tube (PMT) and/or a camera outside the vacuum chamber. Quantum control is achieved primarily through laser pulses, delivered either free-space or via integrated optics. The experimental system underwent significant changes during my time in the group. This was motivate-
d by the obstacles and limitations we encountered in the original setup built by F.M. Leupold and J. Alonso, henceforth dubbed setup 1.0, which is described extensively in [Leu15]. As a result, different experiments were performed in different setups and traps, as shown in the timeline Fig. 3.1. In this chapter, I present the updated cryogenic setup 2.0, built together with C. Zhang, with significant help from T.-L. Nguyen and J. Alonso.
Original setup
In every section, I discuss the strengths and weaknesses of the original design, and how they influenced the upgrade process. To clearly separate the old elements from current ones, the original setup is presented in boxes like this one.
Sec. 3.1 discusses why we use cryogenic environments, and how the cryogenic vacuum system was reconstructed. Sec. 3.2 focuses on the 4K chamber design. In Sec. 3.3 we describe all the ion traps tested in this thesis. Finally, Sec. 3.4 describes the improvements to the electrical control and the magnetic field stabilisation. Since I spent a comparable amount of time on the laser setup as I did on all the other parts of the experimental setup combined, the optics and light delivery is discussed sepa-
rately in Chapter 4.
3.1. Cryogenic vacuum system
Traditionally, ion-trap experiments were conducted in room-temperature (RT) UHV systems. In Sec. 2.1.3 we highlighted the difficulties created by miniaturised SETs. A cryogenic
53

 3. Experimental setup
Gold on quartz (J. Alonso)
Experiment upgrade
CMOS trap (C. Zhang)
Waveguide-integrated traps (K.Mehta) Traps #1 - 2: Only metal layers Traps #3 - 5: Integrated optics
Bang-bang control (F. Leupold)
Contextuality experiments (Chapter 7) Fast switching (C. Zhang)
PhD start
Cryogenic setup 2.0 (Chapter 3) Narrow-linewidth 729 laser (Chapter 4)
Trapping unsuccessful
Trap #2: Ion trapped!
Trap #4: Two-qubit gates (Chapter 8)
Trap #5: Dissipative entanglement (Chapter 9)
Trap #1: Trapping unsuccessful
Trap #3: Rabi flops through waveguides
Figure 3.1: Timeline of my PhD.
54

 3.1. Cryogenic vacuum system
vacuum environment allows us to fight many of these problems by:
1. Reducing heating rates. Anomalous heating can be suppressed by using a cryogenic environment [Lab07; Des06]. This is thought to be because a lot of the conjectured mechanisms involve thermally activated noise sources [Bro14].
2. Improving ion lifetime. Ion lifetime is determined by the trap depth and the frequency and energy of background gas collisions. Cryogenic temperatures allow for the generation of ultra-low pressures, and the remaining background gas molecules have a lower energy [Pag19; Ant09]. This extends the lifetime of a single laser-cooled ion in a typical SET from a few hours to essentially forever1.
3. Increasing reconfigurability. Unlike RT chambers, cryogenic systems do not require baking to achieve UHV. As a result, they allow for easy changes of in-vacuum instruments, such as trap chips or electronics. This makes them perfect for testing novel components [Stu18]. Furthermore, material constraints are also relaxed compared to RT experiments.
However, low temperatures create a number of challenges and constraints:
1. Vibrations. Cryogenic cooling generally causes additional vibrations of the trap. While the strength and spectrum of vibrations strongly depend on the type of cryostat and how it’s mounted, typical displacements are ≈ 1 μm for wet cryostats and ≈ 10 μm for closed-cycle units [Bra16a]. Vibrations in a closed-cycle system can be reduced to nanometre-scale only through careful structure design and vibration isolation [Mic19].
2. Limiting heat load. Maintaining low temperatures requires limiting the thermal load on the 4K stage. While black-body radiation is effectively suppressed by heat shields, care must be taken to minimise heat flow through the cables, as well as thermal dissipation from passive and active electrical components.
3. Temperature compatibility of components. A lot of standard electrical, optical and mechanical components do not function properly in cryogenic environments. For example, thermal contraction distorts tightly toleranced components (such as imaging objectives) and doped semiconductors change their behaviour at low temperatures2, causing some active electronics to malfunction.
Our cryostat is a closed-cycle pulse tube (PT) cryocooler3. The 2nd stage reaches the temperature of 4 K with 0.9 W cooling power, while the 1st stage is specified for 31.5 W at 45 K. PT cryocoolers generally suffer from considerable vibrations induced by the flow of helium in and out of the PT, at a frequency of 1.4 Hz. In 2010, engineers at Cryomech
1 In our experiments, single-ion lifetime is limited by how often lasers come out of lock 2 Due to so-called carrier freeze-out 3 PT410-RM from Cryomech
55

 3. Experimental setup
showed that they can reduce 2nd stage sample vibrations to below 0.5 nm by opening a gap between the PT and the sample and using helium as heat exchanger gas [Wan10]. The associated cooling power decreased slightly, to 0.7 W at the 2nd stage and 30 W at the 1st stage. While reducing cryogenic vibrations is important, the figure of merit for ion trapping is not absolute vibrations, but rather differential vibrations between the ion and the laser beams. In [Wan10], the PT was rigidly attached to the-
 table, while the cryogenic sample was freely suspended from the bellows, as shown in Fig. 3.2 (a).
Pulse tube
Bellows
Helium dewar
Heat shield
Vacuum chamber
4K chamber
1st stage exchanger
2nd stage exchanger
a) b)
Figure 3.2: a) Schematic of the cryostat in [Wan10]. The PT is rigidly mounted onto the table. The vacuum chamber, heat-shield and cryogenic chamber are suspended from steel bellows. b) Schematic of the cryostat initially used in our lab. The vacuum chamber is rigidly mounted onto the table, hence fixing the position of the cryogenic chamber. The PT is floating on steel bellows.
If used in our experiment, it would have meant that the position of the ion trap was not directly referenced to the optical table, raising a number of possible issues regarding laser alignment. Therefore, in the setup 1.0, a decision was made to attach the vacuum chamber rigidly to the optical table, as shown in Fig. 3.2 (b). It meant that the PT was directly floating on the steel bellows. While this setup allowed successful trapping, it had several disadvantages.
Cryogenic vacuum system 1.0
Weakness: Vibration issues
It rapidly became clear that the PT, when freely floating on bellows, induced
56

 3.1. Cryogenic vacuum system
significant (≈ 10 μm) vibrations of the ion trap relative to the optical table. This happened for three reasons:
1. The PT is relatively light. Therefore, even small momentum kicks from the helium flow cause significant displacements and, in turn, the 1st stage heat exchanger collides with the shield cooling station at every compression cycle.
2. The PT connects to multiple helium lines. These are positioned asymmetrically, tilting the PT and creating a permanent contact between the 1st stage heat exchanger and the shield cooling station.
3. The surface on an air-floated optical table moves significantly in response to momentum kicks.
The initial solution was to create an additional rigid attachment between the PT and the vacuum chamber using three posts with adjustable heights. We would then change the tilt while roughly measuring vibrations by monitoring the transmission of a laser beam focused onto the trap. This was a very long and tedious process. Furthermore, while it was possible to significantly decrease vibrations, their impact on coherent operations was clearly visible and was one of the dominant decoherence mechanism-
s. The reason was two-fold. First of all, this attachment eliminated the original premise of the mechanical decoupling, allowing PT vibrations to propagate to both the ion trap and the optical table. Secondly, as I shall discuss in Sec. 3.1.1, it is likely we never managed to align the PT well enough to fully avoid mechanical contact.
Weakness: Assembly issues
While in principle reconfigurable, the ability to open and modify the cryogenic system was hindered by the optical table, which blocked the path to sliding the vacuum chamber and the heat shield on and off. In order to access the insides of the setup, the whole cryostat, including its mounting structure and the helium lines, had to be lifted off the optical table with a crane. In addition to making opening up time-consuming and laborious, this prevented any build-up of permanent optical or mechani-
cal structures around the experiment (e.g. frames to isolate vibrations by attaching the PT to the ceiling).
Weakness: Beam pointing drifts
While mounting the vacuum chamber directly to the optical table helped reduce drifts, it did not eliminate them completely. One dominant issue was that any changes to the 4K chamber temperature resulted in visible trap displacements. Most annoyingly, after running the atomic oven (located inside the 4K chamber) for a few minutes, one had to wait a few more minutes for the beam pointing to return to the original state.
57

 3. Experimental setup
While we suspected this to be caused by thermal expansion of mechanical parts, it turned out to be caused, almost entirely, by the pressure change of the helium buffer gas.
The remainder of this section describes how the cryogenic vacuum chamber 2.0 was designed and built to eliminate the problems highlighted in the box above. The schematic of the redesigned cryostat is shown in Fig. 3.3. It addresses the vibration issues by rigidly mounting the PT to the ceiling through a 3D translation platform, and by increasing the clearance between the PT and the dewar walls. Opening and closing are significantly easier, thanks to a two-piece construction of the vacuum chamber a-
nd the heat shield. The beam pointing drifts are largely eliminated by dewar pressure regulation, and by placing the oven at the room-temperature stage.
xyz
Pulse tube ceiling mount
Helium dewar pressure control
Two-piece chamber and heat shields
Modular 4K chamber
Enlarged pulse tube clearance
Figure 3.3: Schematic of the updated cryostat design.
3.1.1. Pulse tube stabilisation
One of the big unknowns of the setup 1.0 was the exact clearance between the PT and the dewar. In early 2018, I took out the PT and measured the gap to be a mere 0.3 mm over a length of 3 cm, insufficient to ensure mechanical decoupling (the alignment is done by tilting the top of the PT approximately 20 cm away). We decided to enlarge this spacing at
58

 3.1. Cryogenic vacuum system
the expense of reduced cooling power4. The PT diameter was decreased on a lathe from 129.5 mm to 127.0 mm, widening the gap to 1.6 mm. The PT was subsequently tested for performance in vacuum, and the 2nd stage heat exchanger was buffed to remove observed corrosion5. All the adjustments were performed by Cryomech, and the modified PT was mounted back in the dewar. Afterwards, Cryomech sent us foam that they forgot to re-attach into the PT. Since taking the PT out is a very disruptive and delicate -
process, we have not re-installed the foam6. In order to isolate its vibrations, we attached the PT to the ceiling. We constructed an alignment platform7 shown in Fig. 3.4 which allows us to position and tilt the PT before clamping it in place. The PT is attached to a 10 mm thick stainless steel (SS) top plate with four M6 bolts. An 80 deg cut-out in the top plate provides clearance for the helium inlet tube and electrical connections of the PT (not shown). The tilt is adjusted using three M10 til-
t screws at a radius of 170 mm. Afterwards, the top plate is fixed to the middle plate using three locking bolts. The middle and bottom plates are both 6 mm thick SS squares, with a cut-out that allows them to be inserted from the side. They are separated by 4 mm rubber spacers, which allow the middle plate to slide when pushed by M8 bolts housed inside aluminium blocks attached to the bottom plate. The middle plate can be translated by ±10 mm in two horizontal directions and is afterwards fastene-
d to the bottom plate using four bolts and (optionally) table clamps. The bottom plate is attached to the ceiling with four 50 mm extruded aluminium profiles and square brackets. The alignment of the PT was performed with an accelerometer attached to the cold plate8. Vibrations were induced either by a remote motor or artificially with a computer fan attached to the PT. We then moved the position of the top and middle plates until the measured vibrations were minimised. At those positions, we do n-
ot record any transmission of vibrations from the PT onto the cold plate. Unfortunately, even in the absence of PT perturbations, the accelerometer records movements of > 100 nm, which prevent us from measuring the vibrations with an interferometer. We observe structural resonances at 99 Hz, 139 Hz and 310 Hz, and find that the low-frequency hum of the air conditioning clearly enhances the vibrations9. Despite improvements to the mounting structure (such as in Fig. 3.5), these could not be complet-
ely eliminated. Compared to other similar cryogenic systems in our laboratory10, the difference
4 We did not receive information from Cryomech about the exact relation between the two, so we had to guess and hope for the best 5 The speculation is that this was caused by helium impurity. Our heat exchanger helium is labelled as 99.996% pure, but perhaps this does not reflect the reality. 6 The exact role and impact of the foam remains mysterious to me. The manufacturer’s reply when asked about the purpose of the foam was: “The foam can help to improve the cooling a little. The system will wor-
k without it” 7 Based on a design by R. Matt 8 In systems with rubber bellows, it is possible to check for a collision between the PT and the dewar electrically. However, since our bellows are SS, this method was not successful 9 There are possibly more acoustic resonances at lower frequencies, but we did not have an appropriate signal generator to excite them
59

 3. Experimental setup
Top plate
Middle plate
Bottom plate
Locking holes
Locking clamp
Ceiling connection
Tilt screw
Translation block
Figure 3.4: PT mounting assembly rendering. Top plate controls the tilt, the middle plate controls the horizontal position, and the bottom plate mounts directly to the ceiling.
is that our helium dewar is simply less rigid. Gently pushing the 4K chamber with a finger results in significant oscillations, which begin at low frequency, and become faster before dissipating a few seconds later. It seems that our cryostat efficiently picks up the environmental noise, leading to pronounced vibrations even with the cryocooler switched off. This might be further influenced by the stiff SS bellows – the other low-vibration cryostats in our laboratory are fitted with rubber ones.
3.1.2. Helium dewar pressure control
In the absence of mechanical contact, heat is transferred to the PT via helium buffer gas. We have discovered that the change of helium pressure is a dominant cause of trap chip displacement when cryogenic thermal load changes. To stabilise the trap position, we have installed a simple helium pressure regulation system. When the temperature rises, the helium pressure inside the dewar increases until pmax, when a pressure relief valve (PRV)
10 Based on the closed-cycle ColdEdge cryostat with the Ultra-Low Vibration interface
60

 3.1. Cryogenic vacuum system
Figure 3.5: The last stage of the mounting structure improvement was the clamping jack, which rigidly attaches the bottom of the vacuum chamber to the optical table. While the structure does not directly attach to the experiment, nonetheless it decreases the trap vibration amplitude by ≈ 20%, presumably by eliminating a resonance of a freely oscillating vacuum chamber.
opens the flow to the building recovery line. When the temperature decreases and the pressure falls below a threshold value pmin, a regulator opens a valve from a helium bottle to keep the pressure constant. Before filling with helium, we evacuate the air from the dewar and its circuitry using a turbo-molecular pump (TMP). At the pressure of 1 × 10−5 mbar the pump is disconnected and the regulator is set to pmin ≈ 1.8 psig, slightly below the PRV opening pressure pmax ≈ 2.1 psig. Figure 3.6 shows -
dewar pressure over a typical work day. Within this pressure range, we do not observe trap position drifts. In July 2017, during a cryostat cool-down, a leak opened on the helium dewar. We first noticed that, even at room temperature, the vacuum pressure in the main chamber quickly rose when the dewar was filled with helium and decreased when the dewar was evacuated. We then removed the vacuum chamber and located the leaks directly by keeping the dewar helium pressure at 2 psig and using a helium -
leak detector in a “sniffer” mode. We identified a total of three leaks on the dewar brazes. The leaks were sealed11, but it is an ongoing concern that they may open at some point.
11 using Stycast 2850FT
61

 3. Experimental setup
0123456
1.80
1.85
1.90
1.95
2.00
2.05
2.10
Time (hours)
Dewar pressure (PSI)
Figure 3.6: Helium pressure over a typical work day. Sharp pressure rises mark loading events, when the oven increases the radiative heatload. At the pressure of 2.1 psig the outlet valve opens, and once the oven is switched off, the pressure returns to equilibrium
3.1.3. Modular radiation shields
In order to enable access to the 4 K chamber without removing the setup from the optical table, a single copper radiation shield was replaced with two aluminium shields shown in Figure 3.7a. The top shield is attached to the shield cooling station with brass screws and spring washers. To ensure maximum heat transfer, the bottom shield is tightly fastened to the top shield with twelve steel M5 bolts through a layer of Apiezon12. The bottom shield features ten openings: on the surface of the cylinde-
r there are eight 40 mm diameter holes for laser and fibre access, and a 8 mm hole for neutral atoms. A 35 mm diameter hole on the end of the cylinder is used for imaging ions from the bottom. Since these cause significant heat load on the 2nd stage, we cover the openings with aluminium flaps, in which we open smaller holes, tailored to whatever laser configuration we want to use. Under typical trapping conditions, the shield cooling stage thermalises to ≈ 57 K. This is significantly higher than ≈-
 48 K recorded in setup 1.0, and probably reflects reduced cooling power due to decreased PT diameter. We also recorded a shield temperature increase of ≈ 3 K when the PT was aligned for minimum mechanical contact. The bottom part of the lower heat shield is ≈ 6 K warmer than the top of the upper heat shield, indicating a good thermal contact between the pieces. After the new radiation shields were manufactured, they did not fit the cryostat. It turned out that the helium dewar is noticeably13 cro-
oked, resulting in ≈ 0.6 deg tilt of the heat shields with respect to the vacuum chamber. This caused a near contact of the shield joining ring with the room temperature vacuum chamber (Figure 3.7b). We have since enlarged the holes on the top radiation shield and used this added degree of freedom to gain extra clearance.
12 Cryogenic high vacuum grease Apiezon N from Apiezon 13 Physicists tend to notice it once you point it out. Mechanical engineers notice it immediately
62

 3.1. Cryogenic vacuum system
Compression cuts
Joining ring
M5 bolts
Access holes
Hole covers
(a)
(b)
Figure 3.7: (a) Two-piece radiation shield. (b) Bottom view of the cryostat during assembly. The 4K mounting plate (coppler, middle) is surrounded by the radiation shield joining ring and by the upper vacuum chamber. The shield joining ring is well centered with the 4K mounting plate, but nearly contacts the vacuum chamber in the bottom-right corner of the image.
3.1.4. Two-piece outer vacuum chamber
A new, two-piece vacuum chamber was made to house the experiment. It is made out of SS 304 pieces connected to each other, and to the top cryostat plate, with rubber seals. On the top plate, we cut off and permanently sealed the four existing flanges to make room for the vibration isolation assembly. Cables are now routed through six KF flanges14 in the top chamber. The bottom chamber features nine DN40 CF flanges (eight on the sides, one on the bottom) and one DN16 flange. The unusual choice of C-
F flanges on the bottom was made in the hope of avoiding the 4K viewport coating we periodically observed in the cryostat 1.0. Indeed, we never observed any viewport deterioration in cryostat 2.0, though an increased viewport temperature (Sec. 3.2.3) could also explain this.
3.1.5. Room-temperature oven
In order to facilitate loading without imposing a high heat load on the cryogenic stage, we mounted a resistively heated oven on the vacuum flange. The discussion of oven design and cryogenic atomic sources is presented in Sec. 3.2.5. Here, I just show the key parameters of the oven, which is shown in Fig. 3.8.
14 DN40KF
63

 3. Experimental setup
Figure 3.8: Flange-mounted oven before assembly.
The resistively heated oven consists of a 1.27 mm inner diameter SS316 tube with tantalum wires spot-welded to either end. It is held in place by copper wires, which are themselves clamped through a Macor spacer on an aluminium L-bracket. The oven itself is initially mounted in a Macor spacer to centre it on the flange. Once the copper wires are clamped, the spacer is removed in order to reduce thermal losses. The oven aperture is ≈ 135 mm away from the trap, with apertures in between used to coll-
imate the neutral plume (Fig. 3.9).
20 mm
96 mm
135 mm
1.27 mm Ф 1.5 mm Ф 1 mm Ф
300K 50K 4K
Figure 3.9: Schematic of the room-temperature oven layout. The first aperture is on the heat shield, and it shields the 4 K stage from excess black-body radiation of the oven.
Due to the aforementioned manufacturing misalignments of the cryostat, the centre of the vacuum flange is offset from the optical axis by a few millimetres. To align the oven to the aperture of the trap chip, we mount the flange on a port aligner15. The port aligner is first roughly adjusted by looking through the opposing viewport. Once under vacuum, its position is further adjusted by maximising the neutral fluorescence observed with a λ = 423 nm beam aligned at the trap centre. During the initi-
al alignment, we use a current of 5.5 A, which creates a very large neutral fluorescence signal of ≈ 5000 counts in a τ = 250 μs detection window, visible also to the naked eye. For loading, we operate the oven at 3.6 A, where the neutral fluorescence is just about visible on the PMT. The
15 PA35-H from Lesker
64

 3.2. 4 K chamber
alignment procedure needs to be repeated after opening and closing the system, which is annoying but not very difficult.
3.1.6. Pumping and cool-down
The closed chamber is pumped with a roughing pump and a TMP until the pressure of ≈ 2 × 10−5 mbar. At that point, we switch on the cryostat compressor and begin the system cool-down. A typical trace of recorded temperatures and pressures is shown in Fig. 3.10. The system reaches the final temperature within approximately 20 hours. As
0 5 10 15 20
1. × 10- 7
5. × 10- 7
1. × 10- 6
5. × 10- 6
1. × 10- 5
0 5 10 15 20
0
50
100
150
200
250
300
Time (hours)
Temperature (K)
cold plate heat shield second stage chamber core
Time (hours)
RT pressure (mbar)
Figure 3.10: Logs of a typical cooldown. (Left) Temperatures of different elements. The heat shield sensor is mounted on the 1st stage heat exchanger. (Right) Pressured measured at a roomtemperature gauge.
the pressure drops below 1 × 10−6 mbar, the TMP is no longer useful and is disconnected to avoid vacuum degradation. In the setup 1.0, the chamber would cool down to 4.5 K with the RF on, while the base temperature measured near the trap in the current setup is 6.0 K, likely due to the aforementioned PT and heat-shield changes. We continue to refer to the cryogenic chamber as the “4K chamber”, even though most of the experiments were performed at ≈ 6 K. Note that the base pressure reading of ≈ 1 ×-
 10−7 mbar does not represent the pressure in the UHV chamber, but only the residual effect of the cryo-pumping at room temperature. Furthermore, starting approximately a year ago (late 2019), we began recording periodic pressure spikes of ≈ 3 × 10−6 mbar every one hour. We have not found any correlation between the spikes and the ion lifetime.
3.2. 4 K chamber
At the centre of the cryogenic vacuum system is the 4 K chamber. It houses the ion trap, electronics (electrode filters and RF resonator) and the imaging objective. The thick and cold copper walls of the chamber attenuate magnetic field fluctuations (Sec. 3.2.1) and provide UHV environment for the ions. The experiments described in Chapter 7 were performed
65

 3. Experimental setup
using a trap housed in chamber 1.0. Following that work, we decided to start using more complicated traps. This necessitated a chamber re-design to improve its reconfigurability, practicality and performance.
4K chamber 1.0
The original setup has a number of strong points we aimed to replicate, as well as several drawbacks to improve upon:
Strength: Magnetic field shielding.
At cryogenic temperatures, copper is extremely conductive. The middle part of the chamber was a single, hollowed-out high-purity copper block. This meant that electrical current could run in a loop of very low resistance, without encountering mechanical joints. Those 2 cm-thick walls effectively cancelled oscillating external magnetic field noise (Sec. 3.2.1), resulting in long (≈ 10 ms) coherence times of Zeeman qubits.
Weakness: Lack of modularity
The chamber featured only three feedthough slots. When we decided to include additional connections (for a heater wire and temperature sensors), we would simply pull the cables out through a large open pinch-off flange, which raised vacuum concerns. Furthermore, a large helical resonator was taking up a majority of the usable space inside the chamber, making it challenging to add or reconfigure components.
Weakness: Cabling and assembly
This original process of chamber assembly was tedious and prone to errors. It was difficult to ensure that cables didn’t block laser access or short together. The “card edge” connectors (HCC08DREN, HCC20DREN from Sullins) delivering the DC voltages were very difficult to slide onto the filterboard, resulting in a tedious assembly. The force applied to those cables put a strain on the feedthoughs, which required re-soldering numerous times. Finally, soldering cables meant the chamber could not be k-
ept as clean as it ideally would be.
Weakness: Oven heat dissipation
The only atom source in the original setup was an effusive oven placed next to the trap. As a result, every loading event produced a significant thermal load on the cryogenic chamber, increasing its temperature and spoiling the vacuum.
The re-designed chamber, shown in Fig. 3.11, improves upon the issues highlighted in the box. The assembly and reconfigurability are made dramatically easier with an open and modular layout. Removable side panels provide easy access, tidier wiring and signal filtering at the same time. Heatable viewports eliminate the need for periodic warm-ups. In addition, changes to electrical components (discussed in Sec. 3.4.1) allow us to place more
66

 3.2. 4 K chamber
elements and improve resonator impedance matching.
Imaging viewport
Trap mount
Ablation target
Electronics
Electrical feedthroughs
Laser access viewports
Welded shell
Removable panels
Figure 3.11: 4 K chamber 2.0. (left) Chamber with closed panels. Removable panels are coloured brown for clarity - in reality, the whole chamber is silver-coated. (right) Chamber placed upside down with panels removed. Copper mouting structure is shown in false colour for clarity. The imaging objective and its piezo stack are omitted for clarity.
3.2.1. Magnetic field shielding
A key strength of cryogenic ion trap systems is the reduction in magnetic field noise [Bro11]. A conductive metal chamber will shield its contents from an oscillating B-field by allowing the flow of induced eddy currents [Cel08]. While the exact calculation of the expected attenuation is complicated and geometry-specific, we can use analytical formulae for a simple geometry to guide our intuition. Consider a spherical shell of radius r0 and thickness ∆   r0 made out of a material with conductivity-
 σ and relative magnetic permeability μr. The shell is placed in a uniform external magnetic field Bext oscillating at a frequency ω. The skin depth of the material is defined as
δ=
√2
ω μ0 μr σ
where μ0 = 4π × 10−7 Hm−1 is the vacuum permeability. In the limit of ∆   δ, an exact calculation gives the field inside the chamber [Cel08]:
Bint = Bext
3√2μr δ
r0
e−∆/δ .
The key takeaway is that the external field is strongly attenuated when the shell thickness is much larger than the skin depth (∆   δ). Furthermore, attenuation can be improved by using a large shield or low relative permeability. Many of the main sources of magnetic field noise in trapped ion experiments are synchronised to the socket power line. Therefore, it is beneficial for the magnetic field attenuation to be
67

 3. Experimental setup
effective already at 50 Hz. At room temperature, the conductivity of oxygen-free electronic (OFE) copper σ = 5.86 × 107 Ω−1m−1 corresponds to a skin depth of δ ≈ 9.3 mm at ω = 2π × 50 Hz. It is not realistic to shield the experiment with walls orders of magnitude thicker than δ. Therefore, we cannot use such a simple shield to cancel the mains noise effectively. However, the situation changes considerably at cryogenic temperatures, where metal conductivity increases by a factor called the residual-
-resistance ratio (RRR), which can be as high as 1000 for high-purty copper. For copper with RRR of 150 (realistic for off-the-shelf OFE copper plates [Blo14]), we find the cryogenic skin depth of δ = 0.75 mm. Therefore, by enclosing the experiment in a chamber with ∆ = 20 mm, we can expect to significantly attenuate magnetic field fluctuations at frequencies of 50 Hz and higher.
3.2.2. Welded shell
The calculations presented above assumed a monolithic shield with bulk conductivity. However, a fully enclosed design allows no access. Once we allow the chamber to be disassembled, its effective conductivity decreases due to finite contact resistance between the bolted parts. This can impair the ability of the system to shield magnetic fields. Our solution, which aims to strike a trade-off between shielding and modularity, is shown in Fig. 3.12.
Figure 3.12: 4 K chamber 2.0. (left) Welded cryogenic chamber shell. The top plate attaches to the cold plate, and the bottom viewport is used for imaging. (right) Chamber with side panels can be inserted into the remaining six sides. While the removable panels are shown in a different colour, in reality, the whole chamber is silver-coated gold.
A monolithic shell is formed by the bottom, top and two side panels. This loop is oriented perpendicular to the quantisation axis for the most effective B-field shielding. The remaining six panels are removable, which allows for easy access to the contents of the chamber. While the shell can be created by milling out a single high-purity copper block [Bra16a; Leu15], such a solution is costly and time-consuming. An alternative method is to weld individual panels to form the shell. However, this fu-
sion must be performed under vacuum, to avoid polluting the joint with oxygen, and over a large depth, to ensure
68

 3.2. 4 K chamber
maximum conductivity. An ideal method for achieving this is electron-beam (EB) welding. In this process, electrons are focused on the interface between the two pieces. Upon impact, the material melts, fusing the pieces. The whole process is performed in vacuum, ensuring a clean and oxygen-free interface. Fig 3.13 shows the welded shell prior to silver-coating.
Figure 3.13: 4 K chamber 2.0 after welding, prior to silver-coating and cleaning.
The top and bottom lid are 14 mm thick. Inside, numerous screw holes allow for attaching side panels and flexible mounting of chamber contents to the top lid. The bottom plate has holes for mounting an Attocube piezo stack, a charcoal getter and an imaging viewport with 37.1 mm diameter. Both plates feature many more screw holes than currently necessary, such that the experiment can be flexibly modified in the future. The two side panels are 20 mm thick and each contains a single φ = 12.7 mm hole -
for laser access. All the pieces are manufactured in-house out of OFE copper16 without a specified RRR17. The four pieces are then EB-welded together18. By welding and then cutting a test piece, we verified fusion occurred over the whole 20 mm of the contact area. Following that, the chamber was silver-coated19 to reduce emissivity and improve thermal contact. A ≈ 5 μm-thick layer of silver was applied onto the copper directly, without the usual nickel layer, to avoid unwanted magnetisability. A f-
inal inspection revealed that the top and bottom lid were slightly deformed during the EB welding process. We then had to sand some parts to allow side panels to slide in.
16 C10100, > 99.99% purity copper from Px Precimet SA 17 In hindsight, that was a mistake 18 Swissbeam 19 Work done externally by Doerrer AG in Zurich
69

 3. Experimental setup
3.2.3. Chamber panels
Six out of eight panels of the 4 K chamber are removable. Each silver-coated OFE copper panel features a cut-out for mounting feedthroughs and a 23 mm diameter hole for laser access20. Each feedthrough is mounted in a copper plate of an identical size21, such that connections can be swapped and modified without replacing the chamber panels. Feedthroughs are recessed into the panel to avoid the cables protruding. The feedthoughs we currently use are described in Sec. 3.4.1. Unused feedthrough cut-o-
uts are closed with blank copper flanges.
Unfiltered cables
In cryostat 1.0, only the DC and RF lines were filtered close to the trap. Otherwise, there were a number of unfiltered connections - for the oven, trap heater and the attocubes - as well multiple unconnected cables, which were connected to the room temperature feedthrough but were simply hanging loose inside the 4K chamber. We found that injecting white noise into some of the unconnected cables resulted in an increased axial heating rate. This made us suspect that those connections could be respo-
nsible for the anomalously high heating rates observed in setup 1.0 [Leu15].
To avoid this problem in the cryostat 2.0, we now make sure to filter all the cables entering the 4 K chamber22. First of all, any unused cables are grounded onto the filterboard. Furthermore, any cables which do not attach to the filterboard - such as the oven or the temperature sensor - are connected through filter feedthroughs on the panel, which simply provide a capacitive path to ground. In Sec. 3.4.1 we list how exactly each connection is filtered and grounded.
Figure 3.14: Viewport mounts with slots for heating wire (not shown).
Optical access holes are closed by windows mounted as shown in Figure 3.14.
20 One panel has a 35 mm diameter hole to allow an ablation beam to enter 12 mm off-axis 21 30 mm x 55 mm 22 Except the Attocube lines
70

 3.2. 4 K chamber
4K window contamination
In cryostat 1.0, these windows would periodically fog up. The contamination could be removed by warming up the whole system to the room temperature and back.
To prepare for the contamination, we made the windows heatable. This way, a contaminated window could be individually heated up to remove the fogging. Each viewport sits in an aluminium mount, where a nichrome wire wrapped around the ring allows us to heat up the glass. The metal mount is attached to the chamber panel using Macor to thermally isolate the window from the chamber. In the three years of operation of the cryostat 2.0, we never observed any window contamination, and so it was not neces-
sary to use the heaters. One explanation could be that the KF seals on the outer vacuum chamber were causing the contamination, and so replacing them with CF flanges alleviated the problem. Alternatively, it is also possible that since the windows are no longer well-thermalised to the 4 K chamber, contaminants coat the chamber rather than the viewports.
3.2.4. Trap mounting
The trap mounting stack was designed with modularity in mind. The ion trap chip is glued inside a shallow pocket on a carrier printed circuit board (PCB). The electrodes are wire-bonded onto exposed pads of the PCB (Sec. 3.4.1) and the tracks are routed to exposed pads on the back-side. The filterboard features a matching pad pattern. Electrical connection between the two PCBs is established through Fuzz Buttons23 inserted inside a home-made Macor interposer. Each PCB is screwed onto the interpose-
r, compressing the Fuzz button and establishing a robust connection that is maintained at cryogenic temperatures. The carrier PCB also holds a resistor24, which acts both as a trap heater and a temperature sensor. Originally, the trap was surrounded by a copper Faraday cage with small openings for laser access, which was removed when we started testing traps with attached fibres. A fine mesh “roof” shields the trap from the objective and can be used to increase the trap depth (Sec. 3.4.1).
3.2.5. Atom sources
In cryostat 2.0, we decided to keep the old cryogenic oven as a backup, while adding two additional loading methods: a resistive oven mounted on a vacuum flange (described above in Sec. 3.1.5) and a target for ablation loading. The resistive oven is a thin-walled stainless steel tube filled with calcium granules. Originally, we intended to eliminate the need for manual oven alignment by placing the tube inside a fixed Macor mount [Pag19]. The electrical connection was made by pressing the oven dow-
n with a thin SS flap, and wrapping a copper wire around the fixing screws. While elegant and simple, the oven failed to heat up
23 Gold-plated Beryllium Copper Fuzz Buttons from Custom Interconnects 24 PT1000
71

 3. Experimental setup
efficiently. After iterating on the design, we returned to a more typical construction with a free-floating oven. Doing this, we learned about a few important oven design considerations, which are presented in this section.
Oven angle
Theoretically, the neutral flux can come from any direction relative to the photoionization light. However, whenever possible, it is worth orienting the atom flux approximately perpendicular to the neutral fluorescence beam at λ = 423 nm in order to minimise the Doppler broadening. Consider atoms of mass m effusing from an oven at temperature T . Their speed probability density function is given by [Blu10]
f (v) = m2
2k2
BT 2 v3 exp (− mv2
2kBT ),
whose mean and standard deviation read
〈v〉 =
√ 9π 9
√
kBT
m ≈ 1.88
√
kBT
m,
σv =
√ 32 − 9π 8
√
kBT
m ≈ 0.68
√
kBT
m,
For an angle θ between the neutral flux and the laser beam, the resonance is Dopplerbroadened by
σf = σv cos (θ)
λ,
where λ is the laser wavelength. When σf becomes comparable to the transition natural linewidth σnat, the excitation probability decreases. For an oven at a temperature of T = 700 K effusing 40Ca atoms, which absorb λ = 423 nm light on a transition with natural linewidth σnat = 35.4 MHz, we find that σf < σnat only for θ = 90 ± 3 deg [Luc03]. At an angle of θ = 45 deg (where we initially mounted an oven), we find that σf ≈ 17σnat. Following this observation, we decided to always position the oven -
approximately normal to the λ = 423 nm laser25.
Oven geometry
To maximise power dissipation and minimise thermal conductivity, a high-resistance oven is beneficial. This is achieved by using a long and thin-walled tube and making it out of a highly resistive material. For a given temperature, the neutral flux increases proportionally to the area of the oven opening (as long as the size of the subsequent aperture is also
25 The angle with respect to the photoionization laser is irrelevant, as we drive a wide transition to the continuum
72

 3.2. 4 K chamber
increased). Perhaps a less obvious geometric consideration comes from noting that, for any given current, the oven will be hottest in the centre and coldest at the ends. Therefore, by placing the opening near the end of the tube, we risk that the effective vapour temperature will be reduced. In our designs, we place an opening closer to the middle of the tube, as shown in Fig. 3.15.
Figure 3.15: Schematic representation of different oven designs. Thick grey areas represent a metal tube filled with calcium. Thin grey stands for a crimped tube, where the electrical connection is made, and the atom plume is depicted in blue. Top: Oven aperture near the end of the tube. The opening is not as warm as the middle of the tube, which can result in a lowered atom flux. Bottom: Oven aperture near the middle of the tube. The opening is near the warmest region of the tube. The ovens assem-
bled in this thesis are most similar to the middle design.
Mechanical clamping
To achieve high oven temperatures with low power dissipation, it is necessary to minimise heat conduction to the environment. The dominant heat flow channels are the mounting structure and the electrical cables. In the first design, we placed the oven on a 6 mm-thick Macor spacer, attached directly to the 4 K chamber. Subsequent estimates revealed this to be a terrible idea: despite Macor’s low thermal conductivity, maintaining the oven at T = 700 K would cause a heat flow on the order or 10 W. It-
 should be possible to decrease this number by reducing the contact area, but generally speaking, a rigid cryogenic oven mount with negligible heat conduction would be challenging to build. For this reason, we since suspended the cryogenic ovens only by their cables. The room-temperature oven was initially positioned on a Macor mount, but we removed it as well, which allowed us to operate it at a lower current. To provide mechanical stability, we instead clamp the oven wires (see Fig. 3.16).
Electrical connection
In the initial design, the oven tube was directly connected to cryogenic copper cables. While this created a good electrical connection, the thermal connection was too good.
73

 3. Experimental setup
Later calculations revealed that, since the oven cables were thermalised to 4 K, this design effectively held the oven ends at cryogenic temperatures. To address this problem, we retreated to a more traditional design, where an intermediate wire (made out of tantalum) is introduced between the oven and the cables to sustain large temperature gradients. The exact optimal length of the tantalum wires can be, in principle, calculated. However, the model depends on the exact boundary conditions introd-
uced by copper cables and gets furthermore complicated by the temperature dependence of thermal and electrical properties of copper, tantalum and SS. Simplified calculations26 indicated that, for our set of parameters, the tantalum wire should be of comparable length to the steel tube, and that increasing either length generally increases the temperature in the middle of the oven for a fixed power. Consequently, one can think of the tantalum wire as a flexible way to make the oven longer. In exper-
iments, we generally make the tantalum length comparable to the oven tube length.
Employed designs
Figure 3.16: Atomic sources inside the 4 K chamber. Neutral plumes travel approximately perpendicularly to the λ = 423 nm neutral fluorescence laser. In the image, the assembly is not finished: the resistive is later moved to ≈ 2 mm to the side, in order to clear the optical axis.
With those considerations in mind, we employed the atom sources as shown in Fig. 3.16.
26 Assuming copper wires are held at a fixed temperature, and all the material parameters keep their room-temperature values
74

 3.3. Ion traps
The resistive oven is a ≈ 20 mm-long SS tube with outer diameter of 1 mm and 100 μm thickness27. The tube is opened and bent close to its centre, and its ends are crimped. Tantalum wires28 of ≈ 20 mm length are spot-welded to each end of the tube and clamped to rigid insulated copper cables, which are then clamped through a Macor piece to provide mechanical stability. The oven aperture is placed ≈ 30 mm away from the trap chip centre. An additional aperture of 10 mm height is placed 20 mm away fro-
m the chip centre to collimate the atom beam. The oven is positioned by hand by bending the copper and tantalum wires. The tube is placed ≈ 2 mm off the optical axis to allow optical access through the chip centre. This results in θ ≈ 86 deg angle between the neutral flux and the neutral fluorescence beam, producing minimal Doppler broadening. The ablation target is placed on the other side of the trap chip. The block is held with a screw, its flat side oriented towards the centre. The ablation be-
am travels along the long side of the trap and focuses on the target. The plume of atoms then leaves the target perpendicular to the surface and flies across the chip at θ ≈ 84.5 deg angle to the neutral fluorescence beam. However, since the ablated atoms travel at speeds much higher than typical for thermal sources, even this small angle results in a clear Doppler shift (Sec. 5.1.3). A Faraday cage hole (not shown in in Fig. 3.16) was used to aperture the ablation plume.
3.3. Ion traps
As shown in Fig. 3.1, we worked with multiple different traps throughout this thesis. While I did not design or fabricate any of the traps myself, this section summarises their main features.
3.3.1. Gold on quartz trap
The only trap used in the setup 1.0 was a gold-on-quartz chip shown in Fig 3.17. The trap was based on a 5-wire asymmetric design [Chi05], with the outer DCs segmented into nine electrodes each. The gold electrodes were 8 μm thick with 6 μm gaps, and the ion was trapped 50 μm above the surface. The design was intended for a single-zone operation close to the centre, with additional control electrodes used for fast potential modulation. The whole chip was 10 mm × 10 mm in size. Laser access was pos-
sible along the trap axis and at ±45 deg, while the direction perpendicular to the trap axis was blocked by wirebonds. The trap was designed by F. Leupold and J. Alonso, and fabricated by J. Alonso in the ETH Zurich cleanroom [Leu15]. Unlike the later traps, which can be easily swapped, the original trap was pretty much fixed in place by the electrical connections. The wirebonds connected the trap to larger gold wires, which were mechanically fixed by a PEEK interposer and soldered onto the origin-
al filterboard.
27 McMaster-Carr 89935K63 28 0.5 mm diameter
75

 3. Experimental setup
Figure 3.17: Gold on quartz trap in the setup 1.0. a) Picture of the trap wirebonded onto the interposer and soldered onto the filterboard b) Trap electrode layout. Electrodes shown in orange and green supply DC voltages, and the yellow electrode is the RF.
The quality of the coherent operations achieved in this trap is discussed at length in [Leu15], and Chapter 7 presents the non-classicality experiments which were also done in this original system. Aside from the technical noise, which we believe originated elsewhere in the setup, the trap itself functioned very well and we did not observe any laser-induced charging. Unfortunately, the fast potential switching experiments – for which the system was originally designed – hit some fundamental roadbl-
ocks, which are discussed in the thesis of C. Zhang [Zha21]. Eventually, we scrapped this project and upgraded the setup to operate traps with more novel features.
3.3.2. CMOS trap
The first trap we attempted to use after the experiment upgrade was designed by C. Zhang during his Master’s thesis. The chip was our exploration into the space of fabricating ion traps with commercial CMOS processes [Meh14]. The trap implemented a symmetric 5-wire design, with 31 DC electrodes and the RF electrodes shaped to minimise the axial pseudopotential curvature. We experienced a lot of problems with reliable wire-bonding of the chip to the carrier PCB. Initially, we aimed to avoid using a-
 magnetic nickel layer common to many standard PCB finishes. We therefore used an immersion silver finish, which should adhere to aluminium wirebonds. However, the process proved difficult to optimise, with at least 10% of wirebonds unconnected. Owing to the small chip and pad dimensions, we also couldn’t place multiple bonds per pad. Subsequently, we replaced the carrier PCB finish with EPENIG29, which allowed for reliable wirebonding. After the wirebonding problems were resolved, an outstanding -
issue was a non-Lorentzian lineshape of the resonator reflection curve at temperatures below 20 K. We speculate that
29 Electroless Nickel Electroless Palladium Immersion Gold
76

 3.3. Ion traps
this was caused by a design error: some regions of the trap did not include a ground plane to shield the RF signals from the silicon substrate. We attempted to trap for several weeks, both at 4 K and with the chip locally heated to above 20 K, but never observed any signatures of ions. Around that time, we received the first samples of the integrated optics traps, and we decided to try trapping in those instead.
3.3.3. Waveguide-integrated traps
The traps with integrated waveguides were designed by K. Mehta and fabricated by a commercial foundry30. In this section, I describe the electrical and mechanical design, while Sec. 4.6 goes into the details of the waveguide components. The electrode layout, shown in Fig. 3.18, implements a symmetric six-wire design with three zones [Chi05]. The outer DC electrodes are segmented into nine electrodes each, and the centre DC electrode is split in two. At each zone, two large openings in the centre D-
C electrodes expose the ion to the light from the chip. The stack cross-section is shown in Fig. 3.18. The gold (Au) electrodes
Figure 3.18: (left) Microscope image of the waveguide-integrated ions trap wirebonded onto the carrier PCB and connected to the fibre array. (right) Cross-sectional cut of the layer stack. Note that the Si substrate extends significantly below the image, and forms the majority of the chip.
are only 300 nm thick, and are deposited on a glass (SiO2) dielectric. A platinum (Pt) ground plane shields the electrodes from the underlying silicon (Si), although the ground plane has openings to allow grating light to come out. Silicon-nitride (Si3N4) waveguides are patterned in two layers underneath the ground plane, and the structure is fabricated on a silicon substrate. Note that there is no electrical shielding of the grating coupler, and the ion has line-of-sight exposure to the glass, th-
e waveguides, and the substrate. Additionally, along the whole trap axis, the dielectric of the gap between the electrodes is directly below the ion. This can influence the heating rates and cause charging [Har10; Tel21]. Originally, we were really worried that this dielectric exposure, which amounts to ≈ 20% of the solid angle, would prevent us from trapping at all. This turned out not to be the case, but substrate charging remains a major limitation and annoyance for the experiments (Sec. 8.2.2)-
.
30 LioniX International
77

 3. Experimental setup
The first two traps we tested had the same the top metal layer as used in the final design but did not include the Si3N4waveguides. This way, we had time to figure out the ion trapping without worrying about unnecessary complications, while simultaneously working on the optimisation of the fibre-waveguide coupling.
Trap #1: unsuccessful trapping
We spent about three months, and multiple cool-downs, trying to trap in the trap #1. Initially, we found it challenging to be confident about the beam alignment since the trap was very reflective, which made it difficult to see diffuse scatter. Sec. 4.5.3 describes the laser and imaging alignment method we settled on. In the end, we discovered an accidental large focal shift of the λ = 375 nm laser, which meant that while other lasers were focused onto the trap location, this laser was scattering -
off the chip, thus charging the trap surface over many months (Sec. 4.5). We then decided to swap traps before trying to trap again.
Trap #2: ion trapped!
In addition to reducing λ = 375 nm scatter, we implemented two changes. First, we placed four drops of conductive epoxy at the four corners of the trap, to better ground the Si substrate. Second, we placed the resonator PCB in a copper box to reduce the amount of RF radiation picked up by the DC electrodes. One of these three changes allowed us to finally start trapping ions.
0.0 0.5 1.0 1.5 2.0
0.0
0.5
1.0
1.5
2.0
2.5
Nominal axial frequency (MHz)
Measured axial frequency (MHz)
Trap #2
Trap #4
Figure 3.19: Stray curvature found near the metal layer opening. (Red) In Trap #2 the stray potential is positive (confining). (Blue) In subsequent traps, the stray potential is negative (anticonfining). The measured anti-confinement is comparable for traps #3 to #5.
We only performed a rudimentary set of measurements on Trap #2 in order to compare its performance to the setup with integrated light. The main surprise was a strong positive stray axial potential curvature around the coupler openings (Fig. 3.19). This resulted in an
78

 3.3. Ion traps
axial centre-of-mass frequency ω = 2π × 2.06 MHz even when all the DC electrodes were grounded! We also performed a set of heating rate measurements (Sec. 5.6.4) for comparison with traps with integrated waveguides.
Trap #3: Rabi flopping through integrated waveguides
The next trap included fibres and integrated waveguides. Shortly after the first cool-down, we discovered an issue with the fibre feedthrough and decided to warm up the cryostat and open the chamber. During the warm-up, two of the electrodes got damaged as shown in Fig. 3.20. While scanning the literature for possible explanations, we stumbled onto a
Figure 3.20: Metal layer damage following a warm-up and chamber opening with voltages applied to electrodes.
suggestion that such an effect could arise due to a phenomenon of electrochemical migration caused by water contamination (from humid air) in combination with a voltage applied to electrodes [Dom08]. Indeed, we did set the DC voltage sources to 0 V before exposing the chamber to air. After confirming that no electrical shorts occurred, we nonetheless continued to operate the trap but working in a zone which was not adjacent to the damaged electrodes. After trapping, we were able to perform the fir-
st coherent Rabi oscillations using light delivered through the waveguides. We found that the substrate on this trap and all subsequent traps still produced stray curvature, but this time it was anti-confining (Fig. 3.19). We also found and mitigated charge transients caused by silicon photoconductivity (Sec. 8.2.1). We then made the first attempts at loading the trap from an ablation source, which are discussed in Sec. 5.1.3. While we were able to load ions using this technique, it was not effici-
ent and lead to significant substrate charging.
Trap #4: Two-qubit gates
The next trap was a clean sample without damaged electrodes or ablation-induced charging. Shortly after installing the trap, we were able to tune up and benchmark our quantum operations more thoroughly, as described in Chapter 5. A few months later we succeeded at
79

 3. Experimental setup
creating the first entangled states using λ = 729 nm delivered through integrated waveguides, as presented in Chapter 8.
Trap #5: Dissipative entanglement
After operating trap #4 for several months, the ion lifetime started to deteriorate, and we decided to fix several suspected issues. Since the fibres attached to the trap were epoxied through a vacuum flange, the trap had to be discarded as well. After installing a room-temperature oven and a reusable fibre feedthrough (Sec. 4.6.4), we cooled down the final trap #5. This chip stayed in vacuum for a year, and was used in the dissipative entanglement experiments described in Chapter 9. This trap beh-
aved very similarly to the trap #4, except for a puzzling discrepancy in the effective anharmonicity of the trap potential (Sec. 9.3.3).
3.4. Electrical control
In this section, I describe all the electronics used to control our experiments. I will first describe the components closest to the ion trap, and then gradually zoom out to see the whole picture. Sec. 3.4.1 describes the electronics in the 4K chamber. The following Sec. 3.4.2 describes the devices outside the vacuum system, and how these are connected to the inside.
3.4.1. Cryogenic electronics
Fig. 3.21 presents the schematic of electronic connections inside the 4 K chamber. All the connections to the ion trap are made through a single filterboard which routes the DC, RF, Zeeman and trap heater lines. The soldered filterboard is shown in Fig. 3.22.
DC connections
Original DC connectors
In the original design, the DC connections were delivered to the filterboard through card-edge connectors. We found it very challenging to reliably slot them in and out. The filter outputs were soldered and wirebonded directly to the trap, so swapping traps meant replacing the filterboard as well.
In the upgraded design, the DC voltages are delivered with a micro-D 51-pin cable31 onto the filterboard. Twenty-nine voltage lines are cleaned with a first-order “low-pass” RC filter, while the rest are grounded. The experiments presented in this thesis used R = 180 Ω and C = 33 nF to achieve a cut-off frequency of ≈ (2π) × 27 kHz. The capacitors are all
31 Home-made cables with connectors from Glenair
80

 3.4. Electrical control
RF
DC
GND
DC in (x28)
DC in (x22)
RF out
Zeeman
drive out
Heater in
DC in (x1)
Zeeman
drive wire
Trap heater
and T-sensor
Ion
trap
Carrier
PCB
Filterboard
Interposer
RF out
Resonator and rectifier PCB
RF in
Rectifier
out
Zeeman
drive in
Zeeman
drive out
Oven in (2x)
Heater in (2x)
Oven in
RF in
Zeeman drive in
Rectifier out
Piezo control
(15x)
X
Y
Z
Mesh
Piezo control
(15x)
Imaging
objective
T-sensor 1
(4x)
T-sensor 2
(4x)
DC in (x51)
T-sensor 1 (4x)
T-sensor 2 (4x)
Figure 3.21: Overview of cryogenic electronics 81

 3. Experimental setup
Figure 3.22: (Left) Trap filterboard PCB (ion trap placed on the back side) (Right) Trap assembly right before it is inserted inside the 4K chamber. The trap is shielded from an imaging objective (not shown) is a transparent gold mesh. The mesh is connected to a dedicated DC line.
C0G (NP0) ceramic, which has the most stable performance at cryogenic temperatures [Tey10]. All the signal lines and a ground line are connected through an interposer to the carrier PCB and wire-bonded onto the trap. The ground connection is made through four wire-bonds in the four corners of the trap, and additional conducting epoxy grounds the silicon trap substrate [Meh20]. One DC connection does not go to the trap but is instead routed to a mesh which shields the ion from the imaging objective-
. Originally, the mesh was placed 2 mm above the chip, and simulations indicated a 6-fold increase in trap depth when +10 V was applied to it [Leu15]. We therefore used the mesh as an electrode to increase the loading rate. Once we started using traps with integrated optics, the mesh had to be moved up to make room for the fibre attach. Now it is placed 10 mm above the chip and has little influence over the trap depth.
RF circuit
Helical resonator
The old RF resonator was a bulky helical resonator based on a design in [Siv11]. It had a high quality factor, but was difficult to impedance-match and took up a lot of space. It was also designed for dual-species 40Ca+- 9Be+ operation, and thus its resonance frequency was much higher than necessary for trapping 40Ca+ alone.
Strength: High quality factor.
82

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:04.049Z
- **Text Length:** 202641 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
