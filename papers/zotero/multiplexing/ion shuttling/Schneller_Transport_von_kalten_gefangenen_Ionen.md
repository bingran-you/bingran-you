# PDF Document: Ruster - Schneller Transport von kalten gefangenen Ionen.pdf

**File Path:** Ruster - Schneller Transport von kalten gefangenen Ionen.pdf

**Processed Date:** 2026-02-10T18:15:24.084Z

**File Size:** 3843.81 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 840

**Title:** Schneller Transport von kalten gefangenen Ionen

**Collection:** Multiplexing > Ion Shuttling

---

## Extracted Text Content

Diplomarbeit
Schneller Transport von kalten gefangenen Ionen
Thomas Ruster
21. Dezember 2012

Erstgutachter: Prof. Dr. Ferdinand Schmidt-Kaler Zweitgutachter: Prof. Dr. Peter van Loock

Zusammenfassung
Transporte von gefangenen Ionen sind eine Voraussetzung zur Realisierung eines skalierbaren Quantencomputers in einer segmentierten Mikro-Ionenfalle, in der grundzustandsgekühlte Ionen zwischen Speicher- und Prozessorregionen hin- und hertransportiert werden müssen. Um die höchstmögliche Rechenleistung zu erzielen, müssen die Transporte im nichtadiabatischen Regime durchgeführt werden, d.h. mit einer Transportdauer in der Größenordnung der Schwingungsdauer eines gefangenen Ions. Das ist im Rahmen -
dieser Diplomarbeit gelungen. In einem Zeitraum von fünf Schwingungszyklen (≈ 3,6 µs) wurden Ionen nahe am quantenmechanischen Grundzustand um mehr als die 104-fache Ausdehnung des Grundzustandswellenpakets (≈ 280 µm) verschoben, mit einer Anregung des Bewegungszustandes auf eine mittlere Phononenzahl von weniger als 0,20. Darüber hinaus konnte gezeigt werden, dass die sowohl im Spin- als auch im Bewegungszustand kodierte Quanteninformation nach dem Transport erhalten bleibt. Die Erfahrungen, die -
bei der präzisen Kontrolle von Ionen während der Transportexperimente gesammelt wurden, konnten genutzt werden, um kohärent verschobene Fock-Zustände mit einer Kombination von optischen und elektrischen Manipulationen herzustellen. Ein weiteres Kernthema dieser Diplomarbeit war die Weiterentwicklung der zur Steuerung des Experiments genutzten Software. Unter anderem wurden erweiterte experimentelle Pulssequenzen wie die neu entwickelten Pseudo-Energiemessung implementiert. Diese beschleunigte die -
Messung des Bewegungszustandes von Ionen nach durchgeführten Transporten um einen Faktor 100 und trug somit wesentlich zum Erfolg der Experimente bei. Durch die stark erweiterte Software wurde weiterhin eine neue Klasse von Messungen ermöglicht, durch die wichtige experimentelle Parameter wie zum Beispiel Laserfrequenzen oder Pulsﬂächen vollautomatisch kalibriert werden können - eine Investition für zukünftige komplexere Experimente, in die immer mehr Parameter einﬂießen werden, welche ständig auf-
grund von Drifts nachjustiert werden müssen. Die Ergebnisse dieser Diplomarbeit können ebenfalls in den Veröﬀentlichungen „Controlling fast transport of cold trapped ions“ [WZR+12] und „Experimental creation and analysis of displaced number states“ [ZRW+12] nachgelesen werden.
3

4

Abstract
Transport of trapped ions is a prerequisite for realizing a scalable quantum computer in a segmented microstructured Paul trap. Information processing can be accomplished by moving ions that have been cooled close to the ground state between memory regions and interaction regions, where logic operations are performed. To achieve the best possible performance, one has to carry out transports in a nonadiabatic way, i.e. with a duration that is comparable to the oscillation period of a trapped ion. S-
uch transports were successfully performed during the work for this thesis. Ions were shuttled over a distance of more than 104 times the size of the ground state wave function (≈ 280 µm) during only ﬁve motional cycles (≈ 3.6 µs), with a mean excitation of less than 0.20 motional quanta after transport. Furthermore, it is shown that quantum information stored in both the spin state and in the motional state of ions is preserved throughout the transport. The precise control over the motional state-
 of ions in our experiment additionally enabled us to create displaced number states using a combination of optical and electrical manipulations. A further goal of this thesis was to enhance the existing experimental control software. The added functionality made the implementation of advanced experimental sequences possible, such as the newly created pseudoenergy measurement, which accelerated measurements of the motional state of ions by a factor of 100 and was thus a key ingredient to the succe-
ss of the transport measurements. Using the enhanced software, it was possible to design automated measurement schemes for calibration of experimentally relevant parameters such as laser frequencies or pulse areas. These will be especially important for more complex experiments in the future, which will require a signiﬁcant overhead of calibration measurements. The results of this thesis are also presented in the publications "Controlling fast transport of cold trapped ions" [WZR+12] and "Experime-
ntal creation and analysis of displaced number states" [ZRW+12].
5

6

Inhaltsverzeichnis

1. Einführung

9

2. Theoretische Grundlagen

13

2.1. Bewegung eines klassischen gefangenen Teilchens in einer linearen Paulfalle 13

2.2. Licht-Ionen-Wechselwirkung mit gefangenen Ionen . . . . . . . . . . . . 14

2.3. Kalzium-Ionen als Quantenbits . . . . . . . . . . . . . . . . . . . . . . . 19

3. Experimenteller Aufbau

23

3.1. Die segmentierte Mikrofalle . . . . . . . . . . . . . . . . . . . . . . . . . 23

3.2. Konﬁguration der Laserstrahlen . . . . . . . . . . . . . . . . . . . . . . . 24

3.3. Fallen-Spannungsversorgung . . . . . . . . . . . . . . . . . . . . . . . . . 26

3.4. Experimentelles Kontrollsystem . . . . . . . . . . . . . . . . . . . . . . . 27

4. Experimentelle Sequenzen

31

4.1. Optimierung der Dopplerkühlung und Ionenﬂuoreszenz . . . . . . . . . . 32

4.2. Messung und Minimierung der Mikrobewegung . . . . . . . . . . . . . . 34

4.3. Shelving . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 36

4.4. Seitenbandkühlen . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 39

4.5. Raman-Kalibrationssequenzen . . . . . . . . . . . . . . . . . . . . . . . . 40

4.6. Detektionsverfahren . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 47

5. Realisierung von schnellen Ionentransporten

61

5.1. Theorie der kohärenten Zustände . . . . . . . . . . . . . . . . . . . . . . 62

5.2. Bewegungsgleichung eines transportierten Ions . . . . . . . . . . . . . . 63

5.3. Transport-Trajektorien . . . . . . . . . . . . . . . . . . . . . . . . . . . . 65

5.4. Erzeugung von Transportspannungen . . . . . . . . . . . . . . . . . . . . 67

5.5. Die Pseudo-Energie . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 69

5.6. Experimentelle Ergebnisse . . . . . . . . . . . . . . . . . . . . . . . . . . 71

5.7. Erhaltung der Quanteninformation . . . . . . . . . . . . . . . . . . . . . 74

5.8. Präparation kohärent verschobener Fockzustände . . . . . . . . . . . . . 78

6. Ausblick

83

A. Software-Dokumentation

85

A.1. Das Master-Control-Programm . . . . . . . . . . . . . . . . . . . . . . . 85

A.2. Dokumentation der Kamera-Software . . . . . . . . . . . . . . . . . . . . 86

A.3. Struktur der Mikrofallen-Script.Dll . . . . . . . . . . . . . . . . . . . . . 94

B. Heizmessungen an einem akustooptischen Modulator

113

7

Inhaltsverzeichnis 8

1
Einführung

In den letzten Jahrzehnten durchlief die Informationstechnologie eine beispiellose Entwicklung. Computerchips werden heute in großen Massen produziert - und Jahr für Jahr werden diese immer leistungsfähiger. Gordon Moore schätzte erstmals 1965 [Moo65] im nach ihm benannten Gesetz, dass sich die Komplexität, d.h. die Anzahl der Transistoren auf einem Computerchip, innerhalb von 12 Monaten verdoppelt. Zwar musste er diese Vorhersage später auf eine Verdopplung alle 24 Monate korrigieren [Moo75], jed-
och konnte dieser Trend dann für die letzten 40 Jahre erfüllt werden (Abbildung 1.1). Grund für diese Entwicklung ist die Möglichkeit, Transistoren in immer kleineren Strukturen herzustellen: Heutzutage können Prozessoren in 22 nm-Strukturbreite in Massenfertigung produziert werden. Diese Entwicklung kann jedoch nicht endlos fortgesetzt werden: Je kleiner die produzierten Strukturen werden, desto stärker spielen quantenmechanische Eﬀekte eine Rolle. Spätestens die Größenordnung einzelner Atome bil-
det eine unüberwindbare Barriere. Moore selbst schätzt, dass sein Gesetz in den Jah-

Transistorzahl

2 600 000 000 1 000 000 000
100 000 000 10 000 000 1 000 000 100 000 10 000 2 300

Pentium 80486
80386 80286

Xeon E7 Opteron 2400

Itanium 2

K10

Pentium 4

K8

K7

PowerPC 750 K5

8086

8080 4004
1971

1980

1990 Erscheinungsjahr

2000

2012

Abbildung 1.1.: Entwicklung der Transistoranzahl von Mikroprozessoren. Die Transistorzahlen sind Angaben der jeweiligen Hersteller. Die schwarze Linie zeigt eine Verdopplung der Transistorzahl alle zwei Jahre.

9

1. Einführung
ren zwischen 2020 und 2030 seine Gültigkeit verlieren wird [Dub05]. Eine Möglichkeit, die Entwicklung in der Informationstechnologie darüber hinaus fortzusetzen, bietet der Quantencomputer. Feynman schlug erstmals 1986 vor, Computer bestehend aus quantenmechanischen Elementen aufzubauen [Fey86]. Die Nutzung der Quantenmechanik erlaubt nicht nur eine Verkleinerung der dem Computer zugrundeliegenden Bauteile, sondern auch die Realisierung neuer Algorithmen, wie z.B. die von Deutsch [DJ92], Grover [G-
ro96] und Shor [Sho97]. Besonders der von Shor vorgestellte Algorithmus stößt auf ein riesiges öﬀentliches Interesse - mit ihm lassen sich große Zahlen eﬃzient faktorisieren und somit die heute üblichen Kryptographie-Methoden knacken. Der tiefere Grund der erweiterten Möglichkeiten von Quantenalgorithmen liegt im Superpositionsprinzip der Quantenmechanik: Während ein klassisches Bit genau die Werte 0 und 1 annehmen kann, kann sich ein Quantenbit, oder Qubit, in einem Überlagerungszustand
|Φ = α |0 + β |1
beﬁnden. Der Zustand eines Systems aus zwei Qubits
|Φ = α |00 + β |01 + γ |10 + δ |11
ist im Allgemeinen verschränkt, d.h. er lässt sich nicht mehr in die Einzelzustände der einzelnen Qubits separieren. Für diese Art von Zuständen gibt es in der klassischen Physik kein Analogon, was bedeutet, dass Quantencomputer prinzipiell leistungsfähiger sein können als klassisch arbeitende Computer. DiVincenzo formulierte mehrere Kriterien [Div00], die ein physikalisches System zur konkreten Implementierung eines Quantencomputers erfüllen muss:
1. Eine im Prinzip beliebig hohe Anzahl an wohldeﬁnierten Qubits.
2. Initialisierung in einen bestimmten Anfangszustand, z.B. |0000 . . . .
3. Ein universeller Satz von Quantengattern, d.h. beliebige unitäre Operationen auf N Qubits. Jedes N -Qubit-Gatter lässt sich aus Einzelqubit-Operationen und dem CNOT-Zwei-Qubit-Gatter zusammensetzen [BBC+95].
4. Eine Dekohärenzzeit viel größer als die Dauer einer Gatteroperation.
5. Messung aller Qubits.
Ein vielversprechender Ansatz zur Erfüllung aller Kriterien stellen einzelne gefangene Ionen in linearen Paulfallen dar [CZ95]. Qubits werden hier aus zwei langlebigen internen elektronischen Zuständen der Ionen gebildet, Gatteroperationen und Detektion werden durch Laser-Wechselwirkung realisiert. Bei richtiger Wahl der Fallenspannungen ordnen sich die Ionen entlang einer linearen Kette an und sind über einen gemeinsamen Bewegungszustand miteinander gekoppelt. Dieser lässt sich durch Laserwechsel-
wirkung beeinﬂussen, was Gatteroperationen mit mehreren Ionen ermöglicht. Ein großes Problem allerdings stellt die Skalierung des Systems hin zu vielen Qubits dar: Je mehr Ionen gefangen werden, desto stärker muss der radiale Einschluss sein, damit sich die Ionen
10

entlang einer Kette ausrichten. Gleichzeitig rücken die Ionen mit steigender Zahl immer näher zusammen, was die Adressierung und Detektion einzelner Ionen erschwert. Des weiteren nimmt die Anzahl an Schwingungsmoden der Bewegung linear mit der Anzahl der Ionen zu, sodass die Adressierung individueller Schwingungsmoden im Frequenzraum immer schwieriger wird. Zur Lösung dieser Probleme schlugen Kielpinksi, Monroe und Wineland [KMW02] vor, eine lineare Falle in mehrere Segmente zu unterteilen, die je-
de für sich selbst eine Paulfalle bildet, in der nur einzelne oder zwei Ionen gefangen werden müssen. Die segmentierte Falle kann dann in verschiedene Regionen unterteilt werden: Speicherregionen zur Aufbewahrung von Ionen, und Prozessorregionen, wo Laserwechselwirkungen stattﬁnden. Durch Änderungen an den Fallenspannungen können Ionen von einer Region in eine andere transportiert werden. Eine solche segmentierte Falle wird auch in unserem Experiment eingesetzt.
Da Transporte wie Gatteroperationen zur Dauer eines Quantenalgorithmus beitragen, müssen sie möglichst schnell durchgeführt werden können - in jedem Falle schnell gegenüber der Dekohärenzzeit des Systems. Als weitere Voraussetzung kommt hinzu, dass Transporte den Bewegungszustand der Ionen nur geringfügig anregen dürfen. Ansonsten können Zwei-Qubit-Gatteroperationen wie z.B. das geometrische Phasengatter nicht mehr durchgeführt werden, da diese Gatter voraussetzen, dass die Ionen nahe des Bewegung-
sgrundzustandes gekühlt sind [LBD+05].
Die ersten Transporte in einer segmentierten Ionenfalle wurden experimentell von Rowe et al. [RBKD+02] im adiabatischen Regime durchgeführt, d.h. mit einer Transportdauer, die lang gegenüber der axialen Schwingungsdauer der gefangenen Ionen ist. Adiabatische Transporte wurden später auch von Home et al. [HHJ+09] und Blakestad et al. [BOV+09, BOV+11] demonstriert. Im Gegensatz zu Transporten im adiabatischen Regime verursachen schnellere Transporte eine signiﬁkante Anregung des Bewegungszustandes d-
er Ionen, in Messungen von Huber et al. [HDS+08] um mehrere Milli-Elektronenvolt.
Die Realisierung von schnellen Transporten, bei denen die Ionen nach Abschluss wieder in den Bewegungsgrundzustand zurückkehren, verlangt eine genaue Wahl der Segmentspannungen während des Transports. Das ist im Verlauf dieser Diplomarbeit in Modellexperimenten mit einem einzelnen Ion gelungen. Entscheidend für den Erfolg war nicht nur leistungsfähige Hardware, vor allem eine schnelle und rauscharme Spannungsversorgung für mehrere Fallenelektroden, sondern auch ein ﬂexibles Softwaresystem auf eine-
m Kontrollrechner zur Steuerung aller Hardwarekomponenten. Auch im Hinblick auf zukünftige Experimente wird einer ausgeklügelten Steuerungssoftware eine zentrale Bedeutung zukommen. Bei Experimenten mit vielen Ionen wird es immer wichtiger werden, verschiedene Einstellungen wie Laserfrequenzen oder Transportparameter automatisch zu kalibiereren. Das Design und der Test von automatischen Messsequenzen und nicht zuletzt die Durchführung von Messungen zu schnellen Ionentransporten waren die Kerntheme-
n dieser Diplomarbeit.
11

1. Einführung In Kapitel 2 werden zunächst die zum Verständnis notwendigen theoretischen Grundlagen der linearen Paulfalle sowie der Wechselwirkung zwischen Licht und gefangen Ionen besprochen. Kapitel 3 gibt einen Überblick über den Aufbau des Experiments, wobei besonderes Augenmerk auf die für den Ionentransport wichtigen Komponenten gesetzt wird. Daraufhin werden in Kapitel 4 die generelle Struktur von experimentellen Sequenzen und im speziellen die nötigen Schritte zur Vorbereitung eines Trans-
portexperiments erklärt. Kapitel 5 gliedert sich in zwei Teile: Im ersten Teil wird zunächst theoretisch besprochen, wie sich der Bewegungszustand von Ionen während Transportoperationen verhält und auf welche Weise die Anregung des Zustandes möglichst klein gehalten werden kann. Der zweite Teil stellt dann die eigentlichen Messergebnisse vor.
12

2
Theoretische Grundlagen
Dieses Kapitel gibt einen Überblick über die für unser Experiment relevanten theoretischen Grundlagen der Paufalle und der Licht-Ionen-Wechselwirkung. Auf komplexe Rechnungen wird in dieser Arbeit weitesgehend verzichtet, für tiefere Details sei hier auf die entsprechenden im Text angegebenen Quellen verwiesen. Die Theorie der LichtIonen-Wechselwirkung ist an der Ausarbeitung von Leibfried et al. [LBMW03] orientiert, dort ﬁnden sich bei Bedarf auch weitere Informationen. Darüber hinaus wird kurz a-
uf die Eigenschaften der in unserem Experiment verwendeten Kalzium-Ionen eingegangen.
Neben der Licht-Ionen-Wechselwirkung können Ionen in unserem Experiment auf eine zusätzliche Art und Weise beeinﬂusst werden: Durch die Änderung des elektrischen Potentials, in denen sich die Ionen beﬁnden. Das ist vor allem für die Durchführung von Transporten relevant und wird daher in Kapitel 5 behandelt.
2.1. Bewegung eines klassischen gefangenen Teilchens in einer linearen Paulfalle
In der typischen Konﬁguration einer linearen Paulfalle werden vier stabförmige Elektroden gemäß Abbildung 2.1 angeordnet. Auf zwei sich gegenüberliegenden Elektroden

x

y

z

Abbildung 2.1.: Skizze einer linearen Paulfalle

RF-Elektroden DC-Elektroden Masse

13

2. Theoretische Grundlagen

wird eine Wechselspannung mit Radiofrequenz (RF) angelegt, während die anderen beiden Elektroden in Segmente geteilt sind, wobei auf die jeweils mittleren Segmente eine Gleichspannung (DC) und auf die Randsegmente Masse angelegt wird. Mit dieser Elektrodenkonﬁguration können Ionen entlang der z-Achse, die auch Fallenachse genannt wird, gespeichert werden. Sie erzeugt in der Nähe der Fallenmitte ein Quadrupolpotential

φ(x, y, z, t) = Udc 2

αxx2 + αyy2 + αzz2

+

Urf 2

cos(ωrft)

βxx2 + βyy2 + βzz2

(2.1)

mit Udc bzw. Urf den an den Elektroden angelegten Spannungen, ωrf der Frequenz der Wechselspannung und geometrieabhängigen Konstanten, für die in der linearen Falle aufgrund der Laplace-Gleichung ∆φ = 0 die Bedingungen

αx + αy = −αz und βx = −βy, βz = 0

(2.2)

gelten. Die klassische Bewegungsgleichung für ein geladenes Teilchen mit der Ladung Z |e| ergibt für jede Raumdimension die Mathieu-Diﬀerenzialgleichung

d2u dτ 2 + (au − 2qu cos(2τ )) u = 0 mit den Deﬁnitionen

mit u = x, y, z

(2.3)

τ = ωrft , 2

au

=

4Z |e|Udc αu mωr2f

,

qu

=

2Z |e|Urf βu mωr2f

Im Grenzfall au < qu2 1 erhält man die stabile Lösung

u(t) ≈ u0 cos

γu

ωrf 2

t

1

+

qu 2

cos(ωrft)

(2.4) (2.5)

mit γu ≈ au + qu2/2. Diese Lösung ist in Abbildung 2.2 dargestellt: Eine langsame Schwingung mit der Frequenz γuωrf/2, die Säkularbewegung, ist von einer Schwingung mit kleiner Amplitude und der Frequenz ωrf überlagert, der Mikrobewegung. Die Amplitude der Mikrobewegung hängt von der Auslenkung des Teilchens aus der Fallenmitte
ab. In axialer Richtung, d.h. entlang der z-Achse, verschwindet die Mikrobewegung, da
βz = 0. Entlang dieser Achse verhält sich das System wie ein gewöhnlicher harmonischer Oszillator.

2.2. Licht-Ionen-Wechselwirkung mit gefangenen Ionen
Die Wechselwirkung zwischen Licht und gefangenen Ionen ist für unser Experiment von fundamentaler Bedeutung. Laser werden verwendet zur Kühlung, Präparation, Detektion und zur Manipulation der Ionen. Der Unterschied zur Licht-Atom-Wechselwirkung

14

2.2. Licht-Ionen-Wechselwirkung mit gefangenen Ionen

Auslenkung

0

Zeit
Abbildung 2.2.: Lösung der Mathieu-Diﬀerenzialgleichung in einer Raumdimension

mit freien Atomen besteht darin, dass der Bewegungszustand gefangener Ionen einem

harmonischen Oszillator entspricht. Dieser wird quantenmechanisch durch den Hamil-

tonoperator

HˆBewegung =

ωz

aˆ†aˆ + 1 2

(2.6)

beschrieben mit aˆ† bzw. aˆ den Auf- bzw. Absteigeoperatoren. Der Einfachheit halber wird im Folgenden nur die Bewegung entlang der Fallenachse z betrachtet. Die Frequenz ωz nennt man axiale Fallenfrequenz.

Die interne elektronische Struktur des Ions wird als Zwei-Niveau-System mit den Nive-

aus |g und |a aufgefasst. Diese Näherung ist zulässig, sofern das eingestrahlte Licht

nah an der Resonanz mit genau einem atomaren Übergang ist. Der Energienullpunkt

sei so gewählt, dass der Zustand |g

die

Energie

−

ω0 2

und

der

Zustand

|a

die Energie

+

ω0 2

besitzt.

Der

Hamiltonoperator,

der

das

Zwei-Niveau-System

beschreibt,

lautet

HˆZwei-Niveaus =

ω0 |a 2

a| − |g

g|

=

ω0 2

σˆz

(2.7)

mit σˆz der Pauli-z-Matrix.

Die Energieeigenzustände eines Ions setzen sich unter diesen Voraussetzungen aus den

Eigenzuständen des harmonischen Oszillators und des Zwei-Niveau-Systems zusam-

men:

|Ψ = |g,a |n

(2.8)

Man spricht dabei auch von n Phononen im Bewegungszustand.

Nun soll die Wechselwirkung mit Laserlicht hinzugefügt werden. Das Licht wird als ein klassisches elektrisches Feld behandelt, welches sich in z-Richtung ausbreitet:

E(z, t) = E0 ei(kz−ωLt) + e−i(kz−ωLt)

(2.9)

15

2. Theoretische Grundlagen

In unserem Experiment können drei verschiedene Typen von Laserwechselwirkungen eingesetzt werden:

• Dipolwechselwirkung:

Das elektrische Feld wechselwirkt mit dem Dipolmoment des Ions. Der Hamilton-

operator lautet

HˆDipol = ex · E(z, t)

(2.10)

mit der Elektronenladung e und der Position des Valenzelektrons x.

• Quadrupolwechselwirkung: Ist die Dipolwechselwirkung verboten, so wird die nächstschwächere Wechselwirkung über das Quadrupolmoment vermittelt. Der Hamiltonoperator lautet

HˆQuadrupol =

i,j

∂ eqij ∂xi Ej

mit

1 qij = 2

xixj

−

1 3

δij

x2

(2.11)

• Stimulierte Ramanübergänge: Stimulierte Ramanübergänge sind Zwei-Photon-Übergänge, bei denen zwei Grundzustandsniveaus |1 und |2 mithilfe von zwei Laserstrahlen gekoppelt werden, deren Frequenzunterschied genau der Übergangsfrequenz der Niveaus entspricht. Jeder der beiden Strahlen ist für sich nah an der Resonanz eines Dipolübergangs zu einem dritten Niveau |3 mit einer Verstimmung ∆, die groß genug ist, damit das dritte Niveau kaum noch bevölkert wird (Abbildung 2.3).
Ramanübergänge können eﬀektiv als Übergänge zwischen den Niveaus |1 und |2 aufgefasst werden, wobei sich die eﬀektive Frequenz und der eﬀektive Wellenvektor aus den Diﬀerenzen der einzelnen Strahlen ergeben [WMI+98]:

ωeﬀ = ω2 − ω1 keﬀ = k2 − k1

(2.12)

Deﬁniert man sich für alle drei Übergangstypen eine eﬀektive Rabifrequenz Ω, eine eﬀektive Frequenz ωL und eine eﬀektive Wellenzahl k, so lassen sie sich alle mit dem selben Formalismus beschreiben [LBMW03]. Der Wechselwirkungsterm des Hamiltonoperators lautet dann

HˆWW = 2 Ω (σˆ+ + σˆ−) ei(kz−ωLt) + e−i(kz−ωLt)

(2.13)

mit den Pauli-Auf- bzw. Absteigeoperatoren des Zwei-Niveau-Systems σˆ+ und σˆ−. Der Hamiltonoperator des Gesamtsystems ergibt sich dann zu

Hˆ = HˆBewegung + HˆZwei-Niveaus + HˆWW

(2.14)

16

2.2. Licht-Ionen-Wechselwirkung mit gefangenen Ionen
|3

|2 |1
Abbildung 2.3.: Prinzip des stimulierten Raman-Übergangs

Es ist nun nützlich, den Hamiltonoperator in das Interaktionsbild zu transformieren. Dann lässt sich die Drehwellennäherung anwenden, es werden also Terme, die mit der Frequenz ωL + ω0 oszillieren, vernachlässigt. Man erhält

Hˆint

=

Ω 2

σˆ+eiη(aˆ†eiωzt+aˆe−iωzt)e−iδt + σˆ−e−iη(aˆ†eiωzt+aˆe−iωzt)eiδt

mit der Verstimmung δ = ωL − ω0 und dem Lamb-Dicke-Parameter

(2.15)

η=k 2mωz

(2.16)

Der Lamb-Dicke-Parameter beschreibt das Verhältnis der Ausdehnung des Wellenpakets des Ions in Bezug auf die Wellenlänge des einfallenden Laserlichts. Der Winkel des Lasers in Bezug auf die Fallenachse spielt dabei eine entscheidende Rolle, denn mit der Wellenzahl k ist hier nur der Anteil des Wellenvektors entlang der Fallenachse z gemeint.

Im Falle von η 1 und für niedrige Phononenzahlen im Bewegungszustand lässt sich die Exponentialfunktion mit den ersten Termen einer Taylorentwicklung nähern und man erhält

Hint

≈

Ω 2

σ+e−iδt

1 + iη

a†eiωzt + ae−iωzt

+ σ−eiδt 1 − iη a†eiωzt + ae−iωzt (2.17)

Man spricht dann vom Lamb-Dicke-Regime. Für bestimmte Wahlen von δ werden be-

stimmte Terme im Hamiltonoperator dominant, relevant sind hier drei verschiedene

Fälle:

• Der Trägerübergang (δ = 0): Beim Trägerübergang wird der Term (σˆ+ + σˆ−) dominant. Es können dann lediglich Ab- bzw. Abregungen des Zwei-Niveau-Systems stattﬁnden, während der Bewegungszustand nicht beeinﬂusst wird.

17

2. Theoretische Grundlagen

• Rotes Seitenband (δ = −ωz): Hier wird der Term (aˆσˆ+ − aˆ†σˆ−) dominant. Es können dann Prozesse stattﬁnden, bei denen das Zwei-Niveau-System bei gleichzeitiger Anregung der Bewegung angeregt wird und umgekehrt.
• Blaues Seitenband (δ = +ωz): In diesem Fall wird der Term (aˆ†σˆ+ − aˆσˆ−) dominant. Es ﬁnden dann Prozesse statt, bei denen das Zwei-Niveau-System und der Bewegungszustand gleichzeitig an- bzw. abgeregt werden.

Die verschiedenen Übergänge sind in Abbildung 2.4 veranschaulicht. Außerhalb der Näherung des Lamb-Dicke-Regimes existieren weitere Terme, die bei Verstimmungen δ = nωz dominant werden, mit n einer beliebigen ganzen Zahl [LBMW03]. Bei solchen Übergängen kann der Bewegungszustand bei Ab- bzw. Anregung des Zwei-NiveauSystems um mehrere Phononen auf einmal geändert werden. Man spricht dann vom n-ten roten bzw. blauen Seitenband.
Bei den verschiedenen Seitenbändern ergeben sich unterschiedliche eﬀektive Rabifrequenzen, die außerdem noch von der Phononenzahl des Zustandes abhängen. Die eﬀektive Rabifrequenz, mit der ein Zustand mit n Phononen in einen Zustand mit n + m Phononen überführt wird, lautet

Ωn,n+m = Mn,n+mΩ

(2.18)

mit den Übergangsmatrixelementen [CG69]

Mn,n+m = e−η2/2 (iη)|m| L|nm|(η2)

n!

sign(m)/2

(n + m)!

(2.19)

Abbildung 2.5 zeigt berechnete Matrixelemente für den Trägerübergang und für die ersten und zweiten Seitenbänder bei einem Lamb-Dicke-Parameter von η = 0,23. Das entspricht dem Wert des Lamb-Dicke-Parameters in unserem Experiment. Deutliche Unterschiede in den Matrixelementen der roten und blauen Seitenbänder gibt es nur für sehr kleine Phononenzahlen.

Träger BlωLau=eωsLω0S=e+itωeωz0nband

RotesωSLe=itωen0b-aωndz

|a

...

n=2

|g

n=1

n=0

Abbildung 2.4.: Die verschiedenen Übergänge im Lamb-Dicke-Regime

18

2.3. Kalzium-Ionen als Quantenbits

Übergangsmatrixelement

(a) 1
0.9 0.8 0.7 0.6 0.5 0.4 0.3 0.2 0.1
0 0

Trägerübergang rotes Seitenband blaues Seitenband

5

10

15

Phononenzahl

(b) 1

0.9

0.8

0.7

0.6

0.5

0.4

0.3

0.2

0.1

0

20

0

Trägerübergang rotes Seitenband zweites blaues Seitenband

20

40

60

80

100 120

Phononenzahl

Abbildung 2.5.: Matrixelemente in Abhängigkeit der Phononenzahl bei η = 0,23 (a) für Träger und beide ersten Seitenbänder und (b) für Träger, erstes rotes und zweites blaues Seitenband

Solange die Laserverstimmung δ in der Nähe eines Seitenbandes liegt, führt das System für jede besetzte Phononenzahl Rabioszillationen aus [Pos10]. Für die Population im angeregten Zustand |a gilt

∞
pa(t) = pn sin2
n=0

Ωn,n+m t 2

(2.20)

mit pn der Phononen-Verteilungsfunktion im Ausgangszustand. Beﬁndet sich das System in einer Überlagerung von Bewegungszuständen, ob kohärent oder inkohärent, muss also über alle Phononenzahlen summiert werden.

Diese Beziehung kann verwendet werden, um den Bewegungszustand des Ions zu messen: Da die Matrixelemente Ωn,n+m bekannt sind, kann durch einen Fit der RabiOszillationen die Phononen-Verteilungsfunktion pn rekonstruiert werden. Da die Zuordnung von Matrixelement zur Phononenzahl nicht eindeutig ist, müssen zur eindeutigen Bestimmung von pn in der Regel mehrere Seitenbänder gemessen werden. Für mittlere Phononenzahlen n¯ < 5 ist es sinnvoll, Rabioszillationen des Trägers und beider ersten Seitenbänd-
er aufzunehmen. Für größere Phononenzahlen ist es hingegen sinnvoll, die Rabioszillationen des Trägers, eines ersten Seitenbandes und eines zweiten Seitenbandes zu messen.

2.3. Kalzium-Ionen als Quantenbits
Zur Implementierung eines Quantenbits, bzw. eines Zwei-Niveau-Systems im Sinne des letzten Kapitels, werden in unserem Experiment 40Ca+-Ionen verwendet. Kalzium-

19

2. Theoretische Grundlagen

Ionen besitzen einerseits durch heute verfügbare Laserwellenlängen erreichbare Übergänge, die als langlebiges Zwei-Niveau-System geeignet sind, andererseits aber auch weitere Übergänge, die zur Kontrolle und Detektion der Ionen verwendet werden können. Abbildung 2.6 zeigt die in diesem Experiment relevanten Energieniveaus und Übergänge.
Das Quantenbit wird aus den beiden Spin-Zuständen des 4S1/2-Niveaus gebildet. Man spricht hierbei vom Spin-Qubit. Beide Niveaus sind aufgrund eines äußeren Magnetfeldes um etwa 18 MHz aufgespalten. Sie haben eine praktisch unendliche Lebensdauer, sodass die Kohärenzzeit nicht vom spontanen Zerfall eines Niveaus limitiert wird. Da die Energiediﬀerenz der Niveaus allerdings ausschließlich von einem Magnetfeld erzeugt wird, dominieren stattdessen Dephasierungsprozesse aufgrund von Magnetfeldﬂuktuatio-
nen. Kohärente Übergänge zwischen den beiden Zuständen im Sinne des letzten Kapitels werden durch stimulierte Ramanübergänge erreicht, wobei der 4P1/2-Zustand als Zwischenstufe verwendet wird. Da beide Strahlen vom selben Laser erzeugt werden, und bei Ramanübergängen lediglich die Frequenzdiﬀerenz beider Strahlen relevant ist, besitzt der Übergang eine hohe Phasenstabilität, auch wenn der Laser selbst diese nicht besitzt.
Der Übergang 4S1/2 → 4P1/2 bei 397 nm ist mit einer Lebensdauer von 7,1 ns sehr kurzlebig, somit können an ihm in kurzer Zeit eine große Menge Photonen gestreut werden. Er eignet sich damit gut zur Doppler-Kühlung, zur Detektion und zur QubitInitialisation durch optisches Pumpen. Die während der Doppler-Kühlung vom Ion gestreuten Photonen können zur Ionendetektion von einer Kamera nachgewiesen werden. Beim optischen Pumpen wird ein σ+ polarisierter Laserstrahl verwendet, sodass in kurzer Zeit viel-
e Übergänge nach Abbildung 2.7a stattﬁnden. Durch die Polarisation wird der Spin-Up-Zustand des Grundzustandes nicht angeregt.

4P3/2 4P1/2

6,9 ns 7,1 ns

RücQk8pu6ue6m8n5cnp4hmeinnngm

1,05 s 1,08 s

3D5/2 3D3/2

397 nm Doppler-Kühlung, Detektion optisches Pumpen Shelvin7g,29Punmmpen

397 nm Raman

|↑
4S1/2
|↓
Abbildung 2.6.: Termschema von 40Ca+ mit allen relevanten Übergängen. Die ZeemanUnterzustände sind zur besseren Übersicht nur für den Grundzustand eingezeichnet.

20

2.3. Kalzium-Ionen als Quantenbits

Der 4P1/2-Zustand zerfällt jedoch mit einer Wahrscheinlichkeit von ca. 6,7% in den metastabilen 3D3/2-Zustand. In diesem Zustand kann das Ion nicht mehr vom Laser bei 397 nm angeregt werden. Deshalb nutzt man einen Rückpumplaser bei 866 nm, um das Ion wieder in den 4P1/2-Zustand zu bringen.
Ein Laser bei 729 nm kann das Ion vom 4S1/2-Zustand in den metastabilen 3D5/2Zustand befördern. Im Gegensatz zum Laser bei 397 nm ist die Linienbreite des hierfür verwendeten Lasers schmal genug, um zwischen Zeeman-Unterzuständen zu unterscheiden. Somit kann mit diesem Laser beispielsweise nur der Spin-Up-Zustand |↑ in den 3D5/2-Zustand gebracht werden. Das wird zur zustandsselektiven Detektion benutzt: Wird Laserlicht bei 397 nm eingestrahlt, so emittiert ein Ion im 3D5/2-Zustand kein Fluoreszenz-
licht. Den Vorgang, einen Spinzustand vor einer Detektion zu leeren, bezeichnet man als Shelving.
Damit nach dem Shelving nicht auf den Zerfall des metastabilen Zustandes gewartet werden muss, wird das Ion mit einem Laser bei 854 nm in den kurzlebigen 4P3/2-Zustand gebracht, von wo aus es aufgrund der geringen Lebensdauer wieder in den Grundzustand zerfällt. Diese Prozedur wird Quenching genannt.
Der Übergang bei 729 nm kann ebenfalls als Qubit-Übergang genutzt werden, man spricht dann vom optischen Qubit. Damit auf diesem Übergang hohe Kohärenzzeiten erzielt werden können, ist im Gegensatz zum Spin-Qubit aber ein Laser mit einer hohen Kohärenzzeit notwendig.
Die Laser bei 729 nm und 854 nm können nach Abbildung 2.7b auch zur QubitInitialisation genutzt werden. Hierbei wird ausgenutzt, dass die Linienbreite des 729 nmLasers klein genug ist, um nur den Spin-Down-Zustand des Grundzustandes anzuregen. Im Gegensatz zu den Dipolübergängen ist der 729 nm-Übergang kohärent, sodass hier π-Pulse mit Pulsdauern in der Größenordnung von Mikrosekunden verwendet werden

(a)

4P1/2

m=-1/2

m=+1/2

(b) 4P3/2

m=-1/2

m=+3/2 m=+1/2

m=-3/2

m=+3/2 m=+5/2 3D5/2

4S1/2

m=-1/2

m=+1/2

4S1/2

m=-1/2

m=+1/2

Abbildung 2.7.: Zwei Möglichkeiten zur Qubit-Initialisation: (a) mithilfe des 397 nmLasers (b) mithilfe des 729 nm-Lasers

21

2. Theoretische Grundlagen müssen. Das verlängert die Dauer der Qubit-Initialisation, im Gegensatz zum optischen Pumpen mit dem 397 nm-Laser entstehen hier aber keine Fehler aufgrund einer möglicherweise nicht perfekten Polarisation des Laserstrahls. Daher wird diese Methode meistens verwendet, um nach dem optischen Pumpen die Genauigkeit der QubitInitialisation zu erhöhen.
22

3
Experimenteller Aufbau
In diesem Kapitel wird ein kurzer Überblick über den Aufbau des Experiments gegeben. Dabei liegt der Schwerpunkt vor allem auf die für den Ionentransport nötige Spannungsversorgung der einzelnen Segmente der Mikrofalle und auf den Komponenten des experimentellen Kontrollsystems, welche entscheidend für die Durchführung von experimentellen Sequenzen sind. Auf tiefere Details bezüglich der Vakuumapparatur und der Lasersysteme wird in dieser Arbeit nicht eingegangen, dafür wird hier lediglich auf ent-
sprechende Quellen verwiesen.
3.1. Die segmentierte Mikrofalle
Die segmentierte Mikrofalle (Abbildung 3.1) ist das Herzstück unseres Experiments. Sie besteht aus zwei RF-Elektroden und zwei DC-Elektroden, wobei letztere jeweils in 31 Segmente aufgeteilt sind, welche unabhängig voneinander mit Spannung versorgt werden können. Jedes Segment bildet für sich eine lineare Paulfalle, wie sie in Kapitel 2 beschreiben ist. Die Falle ist in drei Regionen unterteilt: Eine Ladezone, eine Prozessorzone und eine Transferzone. Die Segmente der Prozessorzone sind kleiner un-
d näher beieinander, um höhere Fallenfrequenzen zu ermöglichen. Details zur Herstellung ﬁnden sich in [Sch09].
Alle im Rahmen dieser Arbeit durchgeführten Experimente fanden mit einem gefangenen Ion in der Ladezone statt. Bei einer üblicherweise angelegten Gleichspannung von −7 V beträgt die axiale Fallenfrequenz etwa 1,4 MHz. Ionen wurden in Segment 5 gefangen, wobei sie bei Transportmessungen in Segment 4 und zurück transportiert wurden.
Die Mikrofalle beﬁndet sich in einer Ultrahochvakuumkammer, um Stöße der gefangenen Ionen mit Hintergrundgas zu minimieren. Eine Titan-Sublimationspumpe sorgt für einen Druck zwischen 10−10 und 10−9 mbar. In [Mai06] ist die Optik beschrieben, mit der Bilder von gefangenen Ionen mithilfe einer EMCCD-Kamera aufgenommen werden.
Zwei an der Vakuumkammer angebrachte Spulen sorgen für ein Magnetfeld, das die beiden Grundzustandsniveaus der Kalzium-Ionen um etwa 18 MHz aufspaltet. In der
23

3. Experimenteller Aufbau

RF-Elektroden DC-Elektroden

s

31 ... 13

9 ... 5 ... 1

g

h

w

Prozessor- d zone Transferzone

d Ladezone

(a)

(b)

Abbildung 3.1.: (a) Foto und (b) Skizze der segmentierten Falle [Sch09]. Die Maße betragen s = 125µm, g = 250µm, w = 125µm und d = 250µm. Die Länge der Falle beträgt insgesamt 5,8 mm.

Nähe der Falle beﬁnden sich zwei Kalzium-Öfen, die Kalzium-Atome in Fallenrichtung emittieren. Mehrere Sichtfenster in der Vakuumkammer erlauben es, Ionen von verschiedenen Winkeln mit Laserstrahlen zu erreichen.

3.2. Konﬁguration der Laserstrahlen
Um festzulegen, welche Übergänge von Lasern getrieben werden können, ist nicht nur die Polarisation der einzelnen Laserstrahlen entscheidend, sondern auch der Winkel der Laserstrahlen relativ zum von außen angelegten Magnetfeld. Des weiteren ist für den Lamb-Dicke-Parameter eines Übergangs der Winkel der Laserstrahlen zur Fallenachse relevant. Die Konﬁguration aller verwendeten Laserstrahlen ist in Abbildung 3.2 skizziert.
Zwei Diodenlaser bei 374 nm und 423 nm werden zur Photoionisation von Kalziumatomen eingesetzt. Zum Photoionisationsprozess können nähere Details in [GRB+01] nachgelesen werden.
Die beiden Strahlen „Doppler“ und „Sigma“ werden vom selben 397 nm-Diodenlaser erzeugt. Er wird, wie der Diodenlaser bei 866 nm auch, nach dem Pound-Drever-HallVerfahren auf einen externen Resonator stabilisiert [Bla01]. An den Resonatoren angebrachte Piezo-Elemente erlauben es, die Wellenlänge der beiden Laser einzustellen.

24

3.2. Konﬁguration der Laserstrahlen

729 nm 374 nm3&9742n3mn(mR2)

B

397 nm (Sigma)

397

397 nm

nm

(R1

(Doppler)

&

Fallenachse
CC) 886564nnmm &

Abbildung 3.2.: Konﬁguration der Laserstrahlen relativ zur Fallenachse

Der Strahl „Doppler“ wird zum Dopplerkühlen eingesetzt. Er triﬀt gefangene Ionen so, dass sowohl π-Übergänge als auch σ±-Übergänge getrieben werden können. Außerdem ist er im 45◦-Winkel zur Falle ausgerichtet, sodass er sowohl axiale als auch radiale Schwingungsmoden kühlen kann. Der Strahl „Sigma“ wird zum optischen Pumpen eingesetzt. Er ist entlang der Magnetfeldachse ausgerichtet und zirkular polarisiert, sodass er lediglich σ+-Übergänge treiben kann.
Ein weiterer Diodenlaser bei 397 nm erzeugt die Strahlen „R1“, „R2“ und „CC“. Sie dienen zur Realisierung von stimulierten Raman-Übergängen und können untereinander kombiniert werden, um verschiedene eﬀektive Lamb-Dicke-Parameter zu erhalten. Die Kombination der Strahlen „R1“ und „CC“ wird auch „Cocarrier“-Übergang genannt. Der eﬀektive Wellenvektor, wenn diese beiden Strahlen kombiniert werden, verschwindet, da beide Strahlen entlang der selben Richtung propagieren. Daher koppelt dieser Übergang -
weder an radiale noch an axiale Schwingungsmoden. Er ist damit komplett unabhängig vom Bewegungszustand gefangener Ionen. Kombiniert man die Strahlen „R1“ und „R2“, so zeigt der eﬀektive Wellenvektor in Richtung der Fallenachse. Übergänge, die mit diesen beiden Strahlen getrieben werden, koppeln mit einem Lamb-DickeFaktor von etwa η ≈ 0,23 an die axialen Schwingungsmoden der Ionen. Für die radialen Schwingungsmoden ist der Lamb-Dicke-Faktor hier ebenfalls Null.
Für den Übergang bei 729 nm wurde in diesem Jahr ein Titan-Saphir-Laser aufgebaut [Mac12]. Dieser wird nach dem Pound-Drever-Hall-Verfahren auf einen Resonator hoher Güte stabilisiert. Die Linienbreite und die Frequenzdrifts dieses Lasers sind gering genug, dass der Übergang wie bisher nicht nur für das Electron Shelving, sondern ebenfalls als Qubit-Übergang verwendet werden kann, was neue experimentelle Möglichkeiten eröﬀnet. Der Laserstrahl ist momentan so polarisiert, dass er Übergänge mit ∆m =-
 1 und ∆m = 2 gleichermaßen treiben kann. Aufgrund des Winkels zum Magnetfeld ist der

25

3. Experimenteller Aufbau
Übergang mit ∆m = 0 verboten. Mehr Details zu Quadrupolübergängen ﬁnden sich z.B. in [Roo00]. Dieser Laser koppelt sowohl an Radial- als auch an Axialmoden der Bewegung.
Der Laser bei 854 nm ist ebenfalls ein Diodenlaser. Da er lediglich zum Leeren des D5/2-Zustandes eingesetzt wird, genügt es, seine Wellenlänge mithilfe des im Labor verwendeten Wavemeters konstant zu halten.
3.3. Fallen-Spannungsversorgung
Die Spannungsversorgung für die verschiedenen Gleichspannunssegmente der Mikrofalle ist eine vollständige Eigenentwicklung unserer Arbeitsgruppe. An die Spannungsversorgung werden hohe Ansprüche gestellt, die von bisherigen kommerziellen Lösungen nicht erfüllt werden konnten, nämlich:
• Zur Realisierung von Transportexperimenten muss die Spannung mindestens einmal pro Mikrosekunde geändert werden können.
• Alle Fallensegmente müssen mit unterschiedlichen Spannungen versorgt werden können.
• Die Spannung sollte möglichst rauscharm sein, um die Kohärenz gefangener Ionen zu bewahren, und um ein Aufheizen des Bewegungszustandes zu vermeiden.
• Die Spannung sollte eine möglichst geringe Driftrate aufweisen.
Bei der Spannungsversorgung handelt es sich um ein modulares System, welches aus potentiell mehreren Platinen mit Digital-Analog-Wandlern (DAC), einer weiteren Platine mit einem Field Programmable Gate Array (FPGA), und einer batteriebetriebenen Spannungsversorgung besteht.
Das System wird aus Batterien versorgt, um es von Störungen des Stromnetzes zu entkoppeln. Die Digital-Analog-Wandler haben eine 16 Bit-Auﬂösung, was bei einer Referenzspannung von +10V kleinstmögliche Spannungsschritte von etwa 0,3 mV zulässt. Der maximale Takt, mit dem die Digital-Analog-Wandler betrieben werden können, beträgt 50 MHz. Das entspricht einem Taktzyklus alle 20 ns. Es werden 20 Taktzyklen zur Ändern der Spannung benötigt, was einer Gesamtdauer von 400 ns entspricht.
Zur Steuerung der Digital-Analog-Wandler wird ein FPGA verwendet. Das ist ein Integrierter Schaltkreis, dessen interne Struktur programmiert werden kann. Er sendet im 100 MHz-Takt, d.h. mit bestenfalls 10 ns Zeitschritten, digitale Signale an die DigitalAnalog-Wandler. Außerdem ist ein PowerPC-Prozessor integriert, der eine GigabitNetzwerkschnittschnelle zum Kontrollrechner des Experiments verwaltet. Vom Kontrollrechner aus können somit Spannungsdaten an den FPGA gesendet werden.
26

3.4. Experimentelles Kontrollsystem
Der FPGA ist ein mächtiges Werkzeug, welches die in dieser Arbeit durchgeführten Transport-Experimente erst möglich gemacht hat. Um den Bewegungszustand eines Ions zu steuern, müssen die Spannungen schnell gegenüber der Schwingungsdauer des Ions gesteuert werden können, welche etwa 700 ns beträgt. Zwar können die DigitalAnalog-Wandler ihre Ausgangsspannung nur nach einer 400 ns-Zeitverzögerung ändern, diese jedoch lässt sich aufgrund der Steuerung durch den FPGA in 10 ns-Schritten erhöhen.
Abbildung 3.3 zeigt ein Spektrum des Rauschens, das von der Spannungsversorgung verursacht wird, während die Ausgangsspannungen aktualisiert werden. Somit beschreibt es das typische Rauschverhalten während eines Transportexperiments. Besonders kritisch ist Rauschen auf Frequenzen nahe der Fallenfrequenz von etwa 1,4 MHz, da dieses den Bewegungszustand von Ionen anregt. In diesem Bereich fällt das Rauschen am geringsten aus - somit ist die Spannungsversorgung sehr gut für unser Experiment geeignet.-
 Um diese und auch höhere Frequenzen weiter zu unterdrücken, wird ein Π-Tiefpass-Filter mit einer Grenzfrequenz von etwa 300 kHz verwendet.
3.4. Experimentelles Kontrollsystem
Um komplexe Experimente durchführen zu können, müssen zahlreiche Hardwarekomponenten synchronisiert werden. Es müssen Laser an- und ausgeschaltet, Fallenspannungen für Transportexperimente kontrolliert sowie Kamerabilder aufgenommen werden. Zur kohärenten Manipulation ist außerdem die genaue Kontrolle der Leistung, Frequenz und Phase der 729 nm- bzw. Raman-Laserstrahlen notwendig. Dies wird im Experiment
10-6

Rauschamplitude /

10-7

10-8

10-9 100 kHz

1 MHz Frequenz

10 MHz

Abbildung 3.3.: Rausch-Spektrum der Spannungsversorgung

100 MHz

27

3. Experimenteller Aufbau

durch akustooptische Modulatoren verwirklicht. Diese sind in der Lage, die Eigenschaften von eintreﬀenden Radiofrequenz-Signalen auf das Laserlicht zu übertragen. Die dafür notwendigen Radiofrequenz-Signale werden von einem Versatile Function Generator (VFG) erzeugt, welcher die notwendigen Daten über eine USB-Schnittstelle vom Kontrollrechner erhält.
Die wichtigsten Teile des Kontrollsystems sind in Abbildung 3.4 skizziert. Um eine korrekte und genaue zeitliche Abfolge von Ereignissen in einem Experiment zu ermöglichen, sind im Kontrollrechner mehrere Erweiterungskarten von National Instruments eingebaut. Diese sind in der Lage, synchronisiert digitale TTL-Signale im MikrosekundenTakt an andere Hardware-Komponenten zu senden. So können dann mithilfe elektrooptischer oder akustooptischer Modulatoren Laser an- bzw. abgeschaltet werden - darüber -
hinaus werden Triggersignale an die EMCCD-Kamera, die Fallen-Spannungsversorgung und an den VFG geschickt, um diesen zu signalisieren, dass sie ihre zuvor vom Kontrollrechner festgelegten Aktivitäten abarbeiten sollen.
Die beiden Photoionisationslaser können ebenfalls über ein TTL-Signal an- bzw. abgeschaltet werden. Die Strahlen können hier mechanisch blockiert werden, da die beiden

NI PCI-Karte NI PCI-Karte

Photoion-Shutter TTL
Mini PIA Piezo-Amplifier für 397 und 866 Cavities

Kontrollrechner

NI PCI-Karte

bis zu 15 TTL-Ausgänge

PCIe-Kamerakarte

Andor iXon EMCCD-Kamera

Kamera-Trigger Transport-Trigger VFG-Trigger

Gigabit-Ethernet

Fallen-Spannungsversorgung

USB USB USB

VFG-150 Frequenzgenerator Thorlabs-Motor (397 Sigma) Thorlabs-Motor (Raman R2)

Abbildung 3.4.: Skizze des experimentellen Kontrollsystems

28

3.4. Experimentelles Kontrollsystem Laser in schnellen Sequenzen nicht benötigt werden. Darüber hinaus besitzen die National Instruments-Erweiterungskarten analoge Ausgänge, mit denen die Piezo-Elemente an den Resonatoren für die 397 nm- und 866 nm-Laser kontrolliert werden können. So kann die Wellenlänge dieser beiden Laser auf einer Millisekunden bis Sekundenzeitskala geändert werden. Ebenfalls auf einer Sekundenzeitskala lassen sich die Polarisationen der 397 nm-Sigmaund Raman R2-Strahlen änder-
n. Dazu sind Lambda-Plättchen auf motorisierten Haltern der Firma Thorlabs montiert, die sich über eine USB-Verbindung ebenfalls vom Kontrollrechner steuern lassen. Mit der Polarisation des 397 -Sigma-Strahls lässt sich bestimmen, in welchen der beiden Spin-Zustände zu Beginn einer Sequenz gepumpt werden soll. Das ist z.B. nützlich zum Einstellen der Parameter des 729-Pumpens. Die Polarisation des Raman R2-Strahls muss sehr präzise eingestellt sein, um die durch diesen Strahl verursachte AC-Starkv-
erschiebung zu minimieren [Pos10].
29

3. Experimenteller Aufbau 30

4
Experimentelle Sequenzen

Nachdem nun in den vorangegangenen Kapiteln die grundlegende Theorie und die wich-

tigsten Teile des experimentellen Aufbaus behandelt wurden, soll es in diesem Kapitel

darum gehen, welche Schritte zur Durchführung eines konkreten Experiments notwen-

dig sind. Fast alle Messungen laufen in der Regel nach einem bestimmten Schema ab,

welches in Abbildung 4.1 skizziert ist. Gefangene Ionen werden zunächst dopplerge-

kühlt, danach werden sie durch das Seitenbandkühlen in den Grundzustand der axialen

Bewegung

gebracht.

Optisches

Pumpen

initialisiert

den

Spin

der

Ionen

in

den

m

=

+

1 2

-

Grundzustand. Falls eine besonders hohe Genauigkeit erforderlich ist, kann optional

nach dem optischen Pumpen die Initialisierung durch Pumpen mit dem 729 nm-Laser

weiter verbessert werden. Nach diesen Schritten sind die gefangenen Ionen im Zustand

|↑ |0 präpariert.

In diesem Zustand lassen sich dann Quantengatter oder andere kohärente Operationen mithilfe stimulierter Raman-Übergänge durchführen, oder - besonders für diese Arbeit relevant - Transporte von kalten Ionen gefolgt von Ramanpulsen zur Bestimmung des Bewegungszustandes nach dem Transport.

Nachdem die gewünschten Operationen durchgeführt wurden, muss noch der Spin der Ionen nachgewiesen werden. Dazu wird beim Shelving mit dem 729 nm-Laser der SpinUp-Zustand geleert, sodass nach dem Einschalten des 397 nm-Lasers beim anschließenden Detektionsfenster im Gegensatz zu Ionen im Spin-Down-Zustand kein Fluoreszenzlicht mehr emittiert wird. Anhand eines während des Detektionsfensters aufgenommenen Kamerabildes kann dann entschieden werden, ob sich Ionen im dunklen oder im hellen Zustand bef-
anden. Beim abschließenden Quenching werden Ionen durch opti-

optisches Pumpen Quenching

Präparation

Nachweis

Dopplerkühlen

Seitenbandkühlen

Ramanpulse/ Transporte

Shelving

Detektion

2 ms

2 ms

5 µs

400 µs

2 ms

Abbildung 4.1.: Eine typische experimentelle Sequenz

Zeit 10 µs

31

4. Experimentelle Sequenzen
sches Pumpen in das P3/2-Niveau angeregt, von wo aus sie wieder in den Grundzustand zerfallen.
Da bei der Detektion der Quantenzustand eines Ions auf einen der beiden QubitZustände projeziert wird, können Superpositionszustände nicht mit einer Einzelmessung charakterisiert werden. Stattdessen muss ein Experiment mehrmals wiederholt werden, um Wahrscheinlichkeiten für ein helles bzw. dunkles Ion zu erhalten. In der Regel werden solche Experimente je nach gewünschter statistischer Genauigkeit 100 oder 200 mal wiederholt.
Bevor allerdings aufwendige Experimente durchgeführt werden können, müssen einige Vorbereitungen getroﬀen werden. Es müssen zunächst einmal Ionen mithilfe der Photoionisationslaser bei 423 nm und 374 nm gefangen werden. Für jeden der oben aufgeführen Experimentschritte müssen verschiedene Parameter wie Laserfrequenzen, Pulszeiten oder auch Fallenspannungen korrekt gesetzt sein. Das soll in den folgenden Abschnitten genauer behandelt werden. Ein besonderes Augenmerk soll an dieser Stelle auch auf d-
er automatischen Kalibration von Parametern liegen. Da alle Parameter aufgrund von Drifts in regelmäßigen Abständen korrigiert werden müssen, ist so eine enorme Zeitersparnis möglich.
4.1. Optimierung der Dopplerkühlung und Ionenﬂuoreszenz
Damit gefangene Ionen möglichst eﬃzient dopplergekühlt werden können, muss die Frequenz des 397 nm-Lasers passend eingestellt werden. Da der Laser mithilfe des PoundDrever-Hall-Verfahrens auf einen externen Resonator stabilisiert ist, lässt sich die Wellenlänge durch Anlegen einer Spannung auf ein Piezoelement, das direkt am Resonator angebracht ist, vom Kontrollrechner aus steuern. Mithilfe der Analog-Ausgänge der im Kontrollrechner eingebauten Ni-Karten wird eine Spannung erzeugt, die dann von e-
inem Verstärker weiter verstärkt wird. Die Werte im folgendenen Abschnitt beziehen sich immer auf die Ausgangsspannung der Ni-Karte. Zur eﬃzienten Dopplerkühlung sollte der Laser nicht genau auf der Resonanz des Übergangs liegen, sondern um eine halbe Linienbreite rotverstimmt sein. Von der Wellenlänge des 397 nm-Lasers hängt aber auch gleichzeitig die Intensität der Ionenﬂuoreszenz ab. Diese sollte zur schnellen Detektion in Sequenzen möglichst hoch sein, der 397 nm-Laser auf Resonanz wäre daher -
optimal. Als Kompromiss und guten Erfahrungswert wird deshalb die Wellenlänge so weit rotverstimmt, bis noch etwa 70% der maximalen Fluoreszenz vorhanden ist. Das kann in einer vollautomatischen Messung erfolgen.
Automatische Messung 1: Bei der automatischen Messung wird zunächst das Fluoreszenzmaximum gesucht. Dazu wird die Frequenz des 397 nm-Lasers schrittweise erhöht und für jeden Schritt die Ionenﬂuoreszenz f gemessen. Bei jedem Schritt werden dazu N Kamerabilder aufgenommen
32

4.1. Optimierung der Dopplerkühlung und Ionenﬂuoreszenz

und der Mittelwert gebildet. Der Fehler der einzelnen Messpunkte ergibt sich dann zu

∆f

=

√σf N

wobei

mit

σf

die

Standardabweichung

gemeint

ist.

Sobald die eingestellte Frequenz die Resonanzfrequenz überschritten hat, verschwindet die Fluoreszenz vollständig, da bei blauverstimmtem Laser Ionen aufgeheizt anstatt gekühlt werden. Tritt dies ein, wird die Frequenz des Lasers wieder auf den Startwert zurückgesetzt und dann schrittweise so lange verringert, bis die Fluoreszenz unter 35% des maximalen Wertes gefallen ist. Diese Frequenz wird für die im nächsten Kapitel vorgestellte Sequenz zur Minimierung der Mikrobewegung zwischengespeichert. D-
ann wird die Laserfrequenz dauerhaft auf den Messpunkt eingestellt, bei dem die Ionenﬂuoreszenz gerade unter 70% gefallen ist. Abbildung 4.2a zeigt eine Beispielmessung.

Die Wellenlänge des 397 nm-Lasers driftet im Verlauf eines Tages erheblich (Abbildung

4.2b).

Die

Frequenzverschiebung

durch

das

Piezo-Element

beträgt

etwa

48

MHz V

,

was

bedeutet, dass an jedem Tag ein Frequenzdrift von über 100 MHz kompensiert werden

muss. Um eine konstante Ionenﬂuoreszenz zu gewährleisten, sollte die automatische

Kalibrierung daher mindestens einmal pro halbe Stunde ausgeführt werden. Als Grund

der starken Frequenzschwankungen werden thermische Drifts des Resonators, auf den

der Laser stabilisiert wird, vermutet - der Resonator wird durch den Laserstrahl selbst

aufgewärmt. Da der Laser nachts abgeschaltet ist, ist das Driftverhalten jeden Tag

identisch.

Der Rückpump-Laser bei 866 nm hat ebenfalls Auswirkungen auf das Dopplerkühlen und die Ionenﬂuoreszenz. Da diese Auswirkungen aber klein sind, reicht eine grobe Stimmung dieses Lasers per Hand aus.

gemittelter Fluoreszenzwert Piezo-Spannung / V

(a) 5000

4000

3000

2000

1000

0

-3

-2.5

-2

-1.5

-1

-0.5

Piezo-Spannung / V

(b) 1.5
1 0.5
0 -0.5
-1 -1.5
-2 -2.5
20/11 00:00

21/11 00:00

22/11 00:00
Zeitpunkt

23/11 00:00

24/11 00:00

Abbildung 4.2.: (a) Ergebnisse einer Beispielmessung zur Bestimmung der optimalen Wellenlänge des 397 nm-Lasers. Es werden zwei Piezo-Spannungen bestimmt: Der linke Pfeil zeigt die Spannung, die zur Minimierung der Mikrobewegung verwendet wird. Die Spannung des rechten Pfeils wird für alle anderen Experimente verwendet. (b) zeitlicher Verlauf der Piezo-Spannung über mehrere Tage

33

4. Experimentelle Sequenzen

4.2. Messung und Minimierung der Mikrobewegung

Mikrobewegung, verursacht durch die an der Falle angelegte Radiofrequenz, tritt immer dann auf, wenn ein Ion aus der Fallenmitte ausgelenkt ist. Durch Assymmetrien in der Fallengeometrie oder elektrische Ladungen in der Nähe des Ions verschiebt sich dessen mittlere Position, was zusätzliche Mikrobewegung verursacht. Laserlicht, das entlang einer Achse mit nichtverschwindender Mikrobewegung ausgerichtet ist, wird im Bezugssystem des Ions frequenzmoduliert, was zu zusätzlichen Seitenbändern im Spekt-
rum führt und die Stärke von Trägerübergängen verringert. Bei Dipolübergängen mit hoher Linienbreite führt dies zu einer eﬀektiven Verbreiterung der Linien, und kann z.B. die Eﬃzienz des Dopplerkühlens beeinﬂussen [BMB+98].
Daher sollte die überschüssige Mikrobewegung so klein wie möglich gehalten werden. Das wird im Experiment durch Anlegen einer zusätzlichen Spannungsdiﬀerenz an sich gegenüberliegenden Gleichspannungselektroden erreicht, mit dem Ziel, Ionen zur Fallenmitte zurückzuschieben. Damit die Kompensationsspannung korrekt gesetzt werden kann, ist ein Messverfahren nötig, um die Amplitude der Mikrobewegung genau zu messen. An unserem Experiment hat es sich bewährt, die Mikrobewegung mithilfe der Stärke der I-
onenﬂuoreszenz zu untersuchen. Dazu wird der Laser bei 397 nm rotverschoben, sodass die gemessene Fluoreszenz empﬁndlich auf die Linienbreite des Übergangs reagiert. Je größer die Mikrobewegung, desto höher ist die Linienbreite und desto höher ist die Anregungswahrscheinlichkeit bei rotverschobenem Laserlicht. Es geht also darum, ein Minimum im Fluoreszenzsignal zu ﬁnden, während die Kompensationsspannung variiert wird. Mehr Details ﬁnden sich in [BMB+98] und [Pos10].

Automatische Messung 2: Da sowohl die Wellenlänge des 397 nm-Lasers als auch die Kompensationsspannung vom Kontrollrechner gesteuert werden können, kann die Kompensation der Mikrobewegung vollautomatisch durchgeführt werden. Zunächst wird die Wellenlänge des 397 nm-Lasers auf den Wert verschoben, der zuvor in der 397 nm-Spektroskopiesequenz gespeichert wurde. Dann wird für verschiedene Kompensationsspannungen um den von der letzten Messung bestimmten Wert die Ionenﬂuoreszenz gemessen. Die Position-
 des Minimums wird wie folgt bestimmt:

• Suche ausgehend vom zuletzt bekannten Wert zwei Maxima, und zwar eines links und eines rechts vom Startwert.

• Betrachte nur Messpunkte, die sich unterhalb des niedrigeren der beiden Maxima beﬁnden. Der Fluoreszenzwert dieses Maximums betrage m.

• Berechne einen gewichteten Mittelwert

V=

n i=1

gi2

·

Vi

n i=1

gi2

(4.1)

34

4.2. Messung und Minimierung der Mikrobewegung

mit n der Anzahl der relevanten Messpunkte, Vi der gesetzten Kompensationsspannung des i-ten Messpunktes und den Gewichtungsfaktoren gi = m − fi, wobei fi der Fluoreszenzwert des i-ten Messpunktes ist.
• Der statistische Fehler in den einzelnen Messpunkten wird analog zur Messung der Frequenz des 397 nm-Lasers abgeschätzt. Gaußsche Fehlerfortpﬂanzung liefert dann für den statistischen Fehler der Kompensationsspannung

∆V =

2

n i=1

gi2

n gi2 Vi − V 2 (∆m)2 + (∆fi)2
i=1

(4.2)

Der gewichtete Mittelwert ist eine gute Schätzung für die optimale Kompensationsspannung, die resistent ist gegen kleine durch Rauschen bedingte Schwankungen der Messwerte.

Abbildung 4.3a zeigt Messwerte einer durchgeführten automatischen Messung. Zur Veranschaulichung der Ergebnisse wurde ein großer Bereich um die vorher bekannte Spannung aufgenommen, zur zuverlässigen automatischen Bestimmung reichen schon deutlich weniger Messwerte aus.
Unter normalen Bedingungen ändert sich die benötigte Kompensationsspannung über einen langen Zeitraum kaum (Abbilding 4.3b). Daher muss die Kalibration im normalen Betrieb nur wenige male am Tag durchgeführt werden. Eine plötzliche Änderung der nötigen Kompensationsspannung deutet normalerweise darauf hin, dass die Ladung der Batterien für die Spannungsversorgung zur Neige geht. Auch hat die Amplitude der an der Falle angelegten Wechselspannung einen Einﬂuss auf die benötigte Kompensationsspannung-
.

(a) 1200

(b) 0.56

gemittelter Fluoreszenzwert Kompensationsspannung / V

1100

0.555

1000
900
800
700
600 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1 Kompensationsspannung / V

0.55
0.545
0.54
0.535
0.53 20/11 00:00

21/11 00:00

22/11 00:00
Zeitpunkt

23/11 00:00

24/11 00:00

Abbildung 4.3.: (a) Ergebnisse einer Beispielmessung zur Bestimmung der Kompensationsspannung. Der schwarze Pfeil zeigt die neu bestimmte Spannung. (b) Zeitlicher Drift der optimalen Kompensationsspannung
35

4. Experimentelle Sequenzen

4.3. Shelving

Im nächsten Schritt müssen Parameter für ein optimal funktionierendes Shelving bestimmt werden. Da der Übergang bei 729 nm ein Quadrupolübergang mit geringer Linienbreite ist, muss die korrekte Laserfrequenz zunächst mittels eines akustooptischen Modulators genau eingestellt werden. Dazu muss eine Spektroskopiesequenz ausgeführt werden, bei der zunächst gefangene Ionen durch optisches Pumpen in den |↑ -Zustand initialisiert werden, gefolgt von einem Laserpuls mit dem 729 nm-Laser und einer Detekti-
on mit der EMCCD-Kamera. Diese Sequenz wird zunächst mehrmals für eine feste eingestellte Frequenz am akustooptischen Modulator zur Bestimmung einer Anregungswahrscheinlichkeit ausgeführt, was dann nochmals für verschiedene Frequenzen wiederholt wird um ein Spektrum wie in Abbildung 4.4 zu erhalten.

Die Gestalt des Spektrums hängt stark von der verwendeten Pulsdauer und Laserleistung ab. Für jeden Messpunkt werden Rabioszillationen mit anderer Verstimmung getrieben, die Anregungswahrscheinlichkeit p mit Verstimmung lautet [Fox11]

p

=

1 2

Ω20 Ω2

(1

−

cos(Ωτ ))

(4.3)

mit τ der Pulsdauer, Ω0 der resonanten Rabifrequenz und Ω = Ω20 + δ2 der Rabifrequenz bei der Verstimmung δ. Nehme an, die Parameter seien so gewählt, dass die
Anregungswahrscheinlichkeit bei Resonanz genau 1 ist. Die maximal mögliche Anre-
gungswahrscheinlichkeit nimmt dann mit zunehmender Verstimmung ab, sodass ein

(a) 1

(b) 1

Dunkel-Wahrscheinlichkeit

0.8

0.8

0.6

0.6

0.4

0.4

0.2

0.2

0

-60

-40

-20

0

20

40

60

Verstimmung / kHz

0

-60

-40

-20

0

20

40

60

Verstimmung / kHz

Abbildung 4.4.: Spektroskopieergebnisse um die Resonanzfrequenz eines Übergangs herum (a) bei optimal eingestellter Laserleistung und (b) bei zu hoch eingestellter Leistung. Der schwarze Pfeil zeigt das Ergebnis der automatischen Auswertung. Trotz der falsch eingestellten Leistung in (b) konnte die Resonanzfrequenz korrekt bestimmt werden.

36

4.3. Shelving

Maximum um die Resonanz herum entsteht. Die Breite des Maximums ist bei langen

Pulszeiten geringer, da dann die Verstimmung im Verhältnis einen höheren Beitrag zur

eﬀektiven

Rabifrequenz

liefert

und

so

das

Verhältnis

Ω20 Ω2

schneller

abnimmt.

Da

sich

mit

der Verstimmung aber auch die eﬀektive Rabifrequenz ändert, können weitere Neben-

maxima auftreten. Bei ungünstig eingestellter Laserleistung kann es passieren, dass bei

Resonanz ein Minimum in der Anregung entsteht.

Automatische Messung 3: Die Spektroskopieergebnisse können durch Bildung eines gewichteten Mittelwertes eﬀektiv automatisch ausgewertet werden. Die Anregungswahrscheinlichkeit übernimmt dabei die Rolle des Gewichtungsfaktors. Die mittlere Frequenz bestimmt sich zu

ν=

n i=1

p2i

·

νi

n i=1

p2i

(4.4)

mit n der Anzahl der Messpunkte. Die statistischen Fehler in den Anregungswahrscheinlichkeiten schlagen sich auch auf die so bestimmte mittlere Frequenz nieder. Gaußsche Fehlerfortpﬂanzung ergibt

∆ν =

2

n i=1

p2i

n
p2i (νi − ν)2 (∆pi)2
i=1

(4.5)

Der gewichtete Mittelwert liefert bei beliebigen symmetrischen Strukturen um die Resonanz herum korrekte Ergebnisse, sodass auch Spektren mit schlecht eingestellter Laserleistung ausgewertet werden können.

Durch die automatische Bestimmung können auf einfache Weise Langzeitdrifts in der

Resonanzfrequenz untersucht werden. In unserem Experiment werden die beiden Über-

gänge

in

die

magnetischen

Unterzustände

m

=

+

5 2

und

m

=

+

3 2

des

D5/2-Niveaus

verwen-

det. Da beide Übergänge unterschiedlich stark von Magnetfeldern beeinﬂusst werden,

können Drifts in den Frequenzen beider Übergänge in Drifts im Magnetfeld und in der

Laserfrequenz umgerechnet werden. Abbildung 4.5 zeigt die berechneten Drifts über

mehrere Tage. Die Laserfrequenz ändert sich gleichmäßig mit konstanter Steigung über

einen langen Zeitraum hinweg. Die Steigung wurde aus einem Fit der Daten zu

∆ν

kHz

= (8,88 ± 0, 03)

d

d

(4.6)

bestimmt. Die Drifts des Magnetfeldes wiederholen sich periodisch von Tag zu Tag. Es liegt also Nahe, dass diese von Geräten verursacht werden, die täglich an- und ausgeschaltet werden. Da die beiden Magnetfeldspulen der Falle rund um die Uhr mit Strom versorgt werden, scheiden diese als Ursache aus. Eine mögliche Ursache könnte der Kalzium-Ofen sein, der direkt neben der Falle angebracht ist. Er wird von einem

37

4. Experimentelle Sequenzen

(a) 140

(b) 14

Frequenzverschiebung des Lasers / kHz Frequenzverschiebung durch Magnetfeld / kHz

120

12

100

10

8 80
6 60
4

40

2

20

0

0 19/11 21/11 23/11 25/11 27/11 29/11 01/12 03/12 05/12 00:00 00:00 00:00 00:00 00:00 00:00 00:00 00:00 00:00
Zeitpunkt

-2 20/11 00:00

21/11 00:00

22/11 00:00
Zeitpunkt

23/11 00:00

24/11 00:00

Abbildung 4.5.: Drifts der (a) Laserfrequenz über zwei Wochen mit linearem Fit und (b) der Übergangsfrequenz aufgrund des Magnetfeldes innerhalb vier Tagen

Strom höher als 1 Ampere versorgt, und nach jedem Tag abgeschaltet. Widerstandsänderungen des Ofens über den Tag könnten eine leichte Veränderung des Stroms und damit des erzeugten Magnetfeldes zur Folge haben.
Beim Shelving in experimentellen Sequenzen muss die Population des |↑ -Zustandes möglichst eﬃzient in den metastabilen D5/2-Zustand gebracht werden. Dazu wird die Technik der rapid adiabatic passage (RAP) verwendet. Diese Technik ist robust gegen Fluktuationen in der Laserfrequenz und der Laserleistung, sodass diese Parameter weniger häuﬁg kalibriert werden müssen. Das wird erreicht, indem die Laserfrequenz während des Pulses linear über die Resonanz gefahren wird und gleichzeitig die Laserintensi-
tät in Form einer Gaußkurve variiert wird. Abbildung 4.6 veranschaulicht die Wirkung des Laserpulses auf der Blochkugel. Im Idealfall sollte die Verstimmung den
|2

|1
Abbildung 4.6.: Ein RAP-Puls visualisiert auf der Bloch-Kugel. Sind die Frequenz und die Dauer des Pulses nicht perfekt gewählt, so dreht sich der Bloch-Vektor am Ende des Pulses aufgrund der hohen Verstimmung um die z-Achse. Dadurch bleibt die Population in der Nähe der Maximums.
38

4.4. Seitenbandkühlen

gesamten Bereich von −∞ bis +∞ durchlaufen - im Experiment ist es optimal, eine möglichst große Verstimmung zu wählen, bei der noch keine anderen Übergänge angeregt werden. Um die Eﬃzienz weiter zu erhöhen, werden RAP-Pulse sowohl auf dem ∆m = +1-Übergang als auch auf dem ∆m = +2-Übergang ausgeführt. Genauere Untersuchungen von RAP-Pulsen in unserem Experiment wurden in [Hub10] durchgeführt.

4.4. Seitenbandkühlen

Das Seitenbandkühlen wird unmittelbar nach dem Dopplerkühlen ausgeführt und prä-

pariert gefangene Ionen im Bewegungsgrundzustand. Die Phononenzahl im Bewegungs-

zustand nach dem Dopplerkühlen ist thermisch verteilt [LBMW03], d.h. mit der Ver-

teilungsfunktion

nn pn = (n + 1)n+1

(4.7)

mit n dem Erwartungswert der Phononenzahl. Abbildung 4.7a zeigt eine Beispielverteilung mit n = 20, was ungefähr den Gegebenheiten in unserem Experiment entspricht. Man erkennt, dass Phononenzahlen weit höher als 20 noch signiﬁkant besetzt sind. Die Aufgabe des Seitenbandkühlens ist nun, die Population sämtlicher angeregter Bewegungszustände zu leeren, sodass ausschließlich der Grundzustand besetzt ist. Dazu werden Ramanübergänge auf dem roten Seitenband verwendet. Ein Laserpuls auf dem roten Seit-
enband führt zu einer Verringerung der Phononenzahl um 1 und einer Umkehr der Ionenspins. Die Ionen werden danach durch optisches Pumpen mit dem 397 nmLaser wieder im Zustand |↑ initialisiert. Diese Prodezur wird mehrfach wiederholt, bis der Grundzustand erreicht ist (Abbildung 4.7).

Es können keine exakten π-Pulse auf dem roten Seitenband getrieben werden, da die πZeit für jede besetzte Phononenzahl unterschiedlich ist. Daher sind die roten SeitenbandPulse nur begrenzt erfolgreich, was dazu führt, dass eine große Anzahl an Pulsen aus-

Populationswahrscheinlichkeit pn

0.05 0.04 0.03 0.02 0.01
0 0

10 20 30 40 50 60 70 Phononenzahl n

|↓,2 |↓,1 |↓,0
...
|↑,2 |↑,1 |↑,0

Abbildung 4.7.: (a) Phononenverteilung eines thermischen Zustandes für n = 20 (b) Prinzip des Seitenbandkühlens

39

4. Experimentelle Sequenzen

geführt werden muss. In der Praxis hat es sich bewährt, zunächst 30 Laserpulse auf dem zweiten roten Seitenband gefolgt von 30 Laserpulsen auf dem ersten roten Seitenband durchzuführen. Die Übergangsmatrixelemente des zweiten roten Seitenbandes unterscheiden sich für Phononenzahlen zwischen 20 und 40 kaum von denen des ersten Seitenbandes, sodass hier die Sequenz beschleunigt werden kann, da zwei Phononen mit einem Anregungspuls entfernt werden können. Im Laboralltag werden so regelmäßig Zustände -
mit mittleren Phononenzahlen n < 0.1 erzeugt.

4.5. Raman-Kalibrationssequenzen

Da der Ramanlaser für kohärente Operationen auf den Qubit-Zuständen zuständig ist,

ist eine genaue Kalibration der Parameter dieses Lasers von besonderer Bedeutung. Mit

kohärenten Operationen sind einerseits das geometrische Phasengatter zur Verschrän-

kung zweier Ionen [Ott12] gemeint, andererseits aber auch Einzelqubit-Operationen

wie

π-Pulse

und

π 2

-Pulse.

Die

Pulszeiten

müssen

für

beide

Pulsarten

einzeln

bestimmt

werden, da die Dauer von π-Pulsen aufgrund der An- und Abschaltvorgänge der Akus-

tooptischen

Modulatoren

nicht

exakt

doppelt

so

lange

wie

die

Dauer

von

π 2

-Pulsen

ist.

Messsequenzen zur Bestimmung beider Zeiten, die sich besonders gut zur automatischen

Durchführung eignen, werden in den folgenden Abschnitten vorgestellt.

Bevor aber die Pulszeiten kalibriert werden können, müssen zunächst die Frequenzen der Übergänge ermittelt werden. Anders als beim 729 nm-Laser werden hier nicht nur Trägerübergänge, sondern beispielsweise zum Seitenbandkühlen oder zur Bestimmung des Bewegungszustandes von Ionen auch verschiedene Seitenbandübergänge verwendet. Wie beim 729 nm-Laser können die Frequenzen aller Übergänge mittels einer automatischen Spektroskopiesequenz ermittelt werden. Da hier allerdings keine RAP-Pulse zum Einsatz-
 kommen können, ist besonders hohe Präzision gefragt. Um diese zu erreichen, kann nach der gewöhnlichen Spektroskopie eine Ramsey-Spektroskopiesequenz gestartet werden. Diese ermöglicht eine höhere Präzision, und kann außerdem leicht automatisiert werden.

4.5.1. Die Ramsey-Spektroskopiesequenz

Die hier vorgestellte Ramsey-Spektroskopiesequenz wurde nach dem Vorbild von

[LGRS04] implementiert. Es werden zwei Ramsey-Experimente ausgeführt, d.h. nach

der

Präparation

gefangener

Ionen

werden

zwei

durch

eine

Wartezeit

getrennte

π 2

-Pulse

ausgeführt und dann der Zustand der Ionen ausgelesen (Abbildung 4.8). Die beiden Ex-

perimente unterscheiden sich in der Phase des zweiten Pulses: Beim ersten Sequenzteil

beträgt sie θ = +90◦, beim zweiten Teil θ = −90◦.

Die Wirkung der Sequenz auf die Zustände von Ionen kann man sich auf der Bloch-

kugel

visualisieren.

Der

erste

π 2

-Puls

dreht

den

Anfangszustand

auf

den

Äquator

der

40

4.5. Raman-Kalibrationssequenzen

Präparation θ=0

warten

θ=+90°

Nachweis

|↓

Präparation θ=0

warten

θ=-90°

Nachweis

|↓

|↑

|↑

Abbildung 4.8.: Ablauf der Ramsey-Spektroskopiesequenz sowie die Veranschaulichung beider Sequenzteile auf der Blochkugel

Kugel. Während der folgenden Wartezeit dreht sich der Blochvektor auf dem Äquator

um die z-Achse, wobei die Winkelgeschwindigkeit proportional zur Verstimmung des

Lasers ist. Die unterschiedlichen Phasen der zweiten Pulse bewirken eine Änderung der

Drehachse, gegenüber dem ersten Puls genau um den Winkel +90◦ bzw. -90◦, sodass

die neue Drehachse genau parallel bzw. antiparallel zum Blockvektor nach dem ersten

π 2

-Puls

liegt.

Variiert

man

die

Verstimmung

des

Lasers

und

bestimmt

die

Population

der Zustände nach den Ramsey-Experimentteilen, so erhält man um 180◦ verschobene

Interferenzmuster (Abbildung 4.9). Diese beiden Interferenzmuster werden nun vonein-

ander subtrahiert. Bei Resonanz beﬁndet sich dann ein Nulldurchgang, an den man den

Laser leicht automatisch ausrichten kann. Aus diesem Grund wurde diese Sequenz auch

zur Verwendung in optischen Atomuhren vorgeschlagen [LGRS04].

Automatische Messung 4:

Aufgrund der Periodizität des Signals ist diese Sequenz nur anwendbar, wenn die La-

serfrequenz bereits mit einer Spektroskopiesequenz gemessen wurde. Es wird zunächst

ein Messpunkt bei der momentan eingestellten Laserfrequenz gemessen. Ist der Wert

des ersten Punktes größer als Null, so müssen weitere Punkte bei niedrigerer Frequenz,

ansonsten bei höherer Frequenz aufgenommen werden, bis der Nulldurchgang gefunden

ist. Um zufällige Schwankungen der Werte durch Rauschen zu vermindern, werden die

Messpunkte mithilfe eines Binomialﬁlters geglättet. Die Frequenz νneu des Nulldurch-

gang wird durch lineare Interpolation der beiden benachbaren Messpunkte (d1, ν1) und

(d2, ν2) bestimmt. Es ist

νneu

=

ν1

−

d1

ν2 d2

− −

ν1 d1

(4.8)

Gaußsche Fehlerfortpﬂanzung ergibt dann

∆νneu

=

ν2 − ν1 (d2 − d1)2

(ν1∆ν2)2 + (ν2∆ν1)2

(4.9)

41

4. Experimentelle Sequenzen

Pdunkel(+90° Phase)

Pdunkel(-90° Phase)

Differenz

1 0.8 0.6 0.4 0.2
0

1 0.8 0.6 0.4 0.2
0

1

0.5

0

-0.5

-1

-40

-20

0

20

40

Verstimmung / kHz

(a) Cocarrier-Übergang

Differenz

Pdunkel(-90° Phase)

Pdunkel(+90° Phase)

1 0.8 0.6 0.4 0.2
0

1 0.8 0.6 0.4 0.2
0

1

0.5

0

-0.5

-1

-40

-20

0

20

40

Verstimmung / kHz

(b) erstes rotes Seitenband

Pdunkel(+90° Phase)

Pdunkel(-90° Phase)

1 0.8 0.6 0.4 0.2
0

1 0.8 0.6 0.4 0.2
0

1

0.5

0

-0.5

-1

-40

-20

0

20

40

Verstimmung / kHz

(c) zweites rotes Seitenband

Differenz

Abbildung 4.9.: Ergebnisse der Ramsey-Spektroskopie für verschiedene Übergänge. Die schwarzen Pfeile zeigen das Ergebnis der automatischen Auswertung.

42

4.5. Raman-Kalibrationssequenzen

Der Vorteil der Diﬀerenzbildung besteht darin, dass der Nulldurchgang unabhängig von

Drifts in der Signalamplitude der beiden Ramsey-Sequenzteile ist. Fehler in der Dau-

er

der

π 2

-Pulse,

bei

der

Detektion,

beim

Shelving

und

beim

optischen

Pumpen

führen

zwar zu einer Reduzierung der Amplitude, der Nulldurchgang bleibt jedoch erhalten.

Lediglich die Genauigkeit des Verfahrens nimmt dann aufgrund der geringeren Steigung

ab. Das kann man auch eindrucksvoll in Abbildung 4.9 erkennen. Im Gegensatz zum

Cocarrier-Übergang, bei dem man die volle Signalamplitude erhalten kann, ist die Am-

plitude der beiden roten Seitenbänder reduziert. Das liegt an der thermischen Verteilung

des Bewegungszustandes nach dem Dopplerkühlen: Da die beiden Laserpulse Rabioszil-

lationen

mit

vielen

verschiedenen

Frequenzen

treiben,

ist

die

π 2

-Zeit

nicht

mehr

eindeutig

deﬁnierbar, sondern lediglich eine grobe Abschätzung möglich. Der Cocarrier-Übergang

ist hingegen unabhängig vom Bewegungszustand der Ionen. Trotzdem existiert bei den

roten Seitenbändern nach der Diﬀerenzbildung ein Nulldurchgang, der zur Resonanz-

bestimmung genutzt werden kann. Die roten Seitenbänder sind für alle Kalibrations-

sequenzen eine besondere Herausforderung, da diese zur Seitenbandkühlung zwingend

schon im dopplergekühlten Zustand verwendet werden müssen. Andere Übergänge kön-

nen auf Ionen im Grundzustand angewandt werden, wo nur eine Phononenzahl besetzt

ist und somit nur noch Rabioszillationen mit genau einer Frequenz getrieben werden.

Die roten Seitenbänder hingegen verschwinden im Grundzustand vollständig.

Wie beim 729 nm-Laser auch kann nun die eingestellte Frequenz am akustooptischen Modulator über mehrere Tage untersucht werden (Abbildung 4.10a). Da bei Ramanübergängen die eﬀektive Frequenz unabhängig von der Frequenz der einzelnen Laserstrahlen ist, wird der Drift ausschließlich durch Magnetfeldﬂuktuationen verursacht. Der Verlauf deckt sich deshalb wie erwartet mit den Drifts des 729 nm-Übergangs.

Frequenzverschiebung / kHz Frequenzverschiebung / kHz

(a) 30
20
10
0
-10 20/11 00:00

21/11 00:00

22/11 00:00
Zeitpunkt

23/11 00:00

(b) 0.4

0.2

0

-0.2

-0.4

24/11 00:00

-0.6 20/11 00:00

21/11 00:00

22/11 00:00
Zeitpunkt

23/11 00:00

24/11 00:00

Abbildung 4.10.: Frequenzdrifts (a) des CoCarrier-Übergangs und (b) in der axialen Fallenfrequenz

43

4. Experimentelle Sequenzen
Durch Messung der Frequenz verschiedener Seitenbänder kann außerdem der Drift in der axialen Fallenfrequenz betrachtet werden (Abbildung 4.10b). Fluktuationen konnten hier nicht festgestellt werden, die Fallenfrequenz ist im sub-kHz-Bereich stabil.

4.5.2.

π 2

-Kalibration

Im Praxisbetrieb hat sich die automatische Ramsey-Spektroskopie als sehr zuverlässig

und schnell herausgestellt. Daher wird nun das Prinzip, Nulldurchgänge durch Diﬀe-

renzbildung zu erzeugen, als Basis für weitere automatische Messungen genutzt. Zur

Kalibration

der

π 2

-Zeit

eines

Übergangs

kann

das

Prinzip

durch

eine

Verkettung

mehre-

rer Laserpulse erreicht werden (Abbildung 4.11). Im ersten Sequenzteil wird ein einzel-

ner Laserpuls über einen Zeitraum τ , der in der Messung variiert wird, eingestrahlt. Im

zweiten Teil der Sequenz wird dieser Laserpuls dann dreimal hintereinander ausgeführt.

Entspricht

τ

genau

der

π 2

-Zeit,

so

landet

der

Blochvektor

des

Zustandes

in

beiden

Se-

quenzteilen auf dem Äquator, d.h. die Popupation der Zustände ist identisch. Varriiert

man die Pulszeit, so nimmt man Rabi-Oszillationen auf, wobei die Frequenz der Oszilla-

tionen im zweiten Teil dreimal so hoch ist wie im ersten Teil. Nach der Diﬀerenzbildung

entsteht

bei

der

richtigen

π 2

-Zeit

ein

Nulldurchgang

(Abbildung

4.12).

Automatische Messung 5:

Bei der automatischen Auswertung der Messdaten wird analog zur Ramsey-

Spektroskopie vorgegangen. Man misst zunächst einen Punkt bei der zuletzt bekannten

π 2

-Zeit

und

erhöht

dann

die

Pulszeit,

fal ls

die

Diﬀerenz

der

beiden

Sequenzteile

größer

als Null ist, ansonsten verringert man sie, bis der Nulldurchgang gefunden ist.

Präparation θ=0

Nachweis

|↓

Präparation

Nachweis

θ=0

θ=0

θ=0

|↓

|↑

|↑

Abbildung

4.11.:

Ablauf

der

π 2

-Kalibrationssequenz

sowie

die

Veranschaulichung

beider

Sequenzteile auf der Blochkugel

44

Dunkel-Wahrscheinlichkeit

Differenz

4.5. Raman-Kalibrationssequenzen

1

1

ein Puls

ein Puls

0.8

drei Pulse

0.8

drei Pulse

0.6

0.6

0.4

0.4

0.2

0.2

0

0

0.8

0.8

0.4

0.4

0

0

-0.4

-0.4

-0.8 0

-0.8

4

8

12

16

20

0

Pulsdauer / μs

4

8

12

16

20

Pulsdauer / μs

(a) Cocarrier-Übergang

(b) erstes rotes Seitenband

Dunkel-Wahrscheinlichkeit

1

ein Puls

0.8

drei Pulse

0.6

0.4

0.2

0 0.8

0.4

Differenz

0

-0.4

-0.8

0

4

8

12

16

20

24

Pulsdauer / μs

(c) zweites rotes Seitenband

Abbildung

4.12.:

Ergebnisse

der

π 2

-Kalibrationssequenz

für

verschiedene

Übergänge.

Die

schwarzen Pfeile zeigen das Ergebnis der automatischen Auswertung.

45

4. Experimentelle Sequenzen

Wie bei der Ramsey-Spektroskopie auch beobachtet man bei den roten Seitenbändern

einen massiven Kontrastverlust. Beim ersten roten Seitenband reicht der Kontrast zur

Bestimmung des Nulldurchgangs noch aus, beim zweiten roten Seitenband kann die

Messung

nicht

mehr

zuverlässig

ausgeführt

werden.

Daher

muss

die

π 2

-Zeit

des

zweiten

roten Seitenbandes weiterhin manuell abgeschätzt werden.

Bei Bedarf kann die Genauigkeit der Sequenz erhöht werden, indem in beide Sequenzteile eine zusätzliche gerade Anzahl an Laserpulsen mit der Pulszeit τ hinzugefügt werden. Damit werden die Oszillationen schneller und somit die Steigung im Nulldurchgang erhöht, im Gegenzug wird aber auch der Bereich um den Nulldurchgang mit negativer Steigung schmaler. Auch wird dadurch die gesamte Pulsﬂäche in den Sequenzteilen höher, was die Genauigkeit in den roten Seitenbändern weiter verschlechtert. Beim Cocar-
rier-Übergang kann die Anzahl der Laserpulse aber ohne Bedenken erhöht werden.

4.5.3. π-Kalibration

Auch die π-Kalibrationssequenz besteht aus zwei Sequenzteilen (Abbildung 4.13). Beim

ersten

Teil

wird

lediglich

ein

π 2

-Puls

ausgeführt.

Beim

zweiten

Sequenzteil

kommen

zum

π 2

-Puls

zwei

weitere

Pulse

hinzu,

deren

Pulszeit

variiert

wird.

Entspricht

die

Pulszeit

der

beiden Pulse genau der π-Zeit, so beﬁndet sich der Bloch-Vektor bei beiden Sequenz-

teilen am selben Ort. Abbildung 4.14 zeigt Messergebnisse dieser Kalibrationssequenz.

Bildet man die Diﬀerenz der Populationen beider Sequenzteile, so erhält man einen

Nulldurchgang bei der korrekten π-Zeit. Der Nulldurchgang ist unabhängig von der

eingestellten

π 2

-Zeit,

lediglich

die

Genauigkeit

des

Verfahrens

wird

durch

eine

nicht

per-

fekte Einstellung vermindert. Das kann man sich leicht an der Bloch-Kugel klarmachen:

Auf dem Äquator ändert sich bei Variation der Pulszeit die Population der Zustände am

meisten, je weiter man sich vom Äquator entfernt, desto weniger wirkt sich die Pulszeit

auf die Population aus.

Automatische Messung 6:

Als

ein

guter

Schätzwert

kann

die

doppelte

π 2

-Zeit

als

Startwert

verwendet

werden.

Da

diese

Sequenz

einen

π 2

-Puls

verwendet,

bietet

es

sich

an,

sie

unmittelbar

nach

der

π 2

-Kalibration

auszuführen.

Die

Suche

des

Nul ldurchgangs

wird

analog

zur

Ramsey-

Spektroskopiesequenz

und

zur

π 2

-Kalibrationssequenz

durchgeführt.

Ähnlich

wie

bei

der

π 2

-Kalibration

kann

auch

hier

durch

Hinzufügen

weiterer

Laserpulse

mit der Pulszeit τ in beiden Sequenzteilen die Steigung um den Nulldurchgang erhöht

werden. Auch hier muss sich dann für eine erfolgreiche Kalibrierung der Startwert näher

am wahren Wert beﬁnden.

Die

regelmäßige

Messung

der

π 2

-Zeit

bzw.

der

π-Zeit

ermöglicht

es,

den

Drift

in

der

Rabi-Frequenz der Übergänge über lange Zeit zu dokumentieren. Abbildung 4.15 zeigt

46

Präparation θ=0

Nachweis

|↓

4.6. Detektionsverfahren

Präparation

θ=0

θ=0

Nachweis θ=0

|↓

|↑

|↑

Abbildung 4.13.: Ablauf der π-Kalibrationssequenz sowie die Veranschaulichung beider

Sequenzteile

auf

der

Blochkugel,

wobei

die

Pulszeit

des

π 2

-Pulses

nicht

perfekt

eingestellt

ist.

die Rabi-Frequenz des Cocarrier-Übergangs für mehrere Messtage. Man kann deutliche Drifts von teilweise über 10% pro Tag erkennen. Da für erweiterte Sequenzen, wie z.B. Ramsey-Sequenzen oder die später im Rahmen der Transportexperimente verwendete Pseudoenergie-Sequenz genau eingestellte Pulszeiten notwendig sind, sollte die Kalibration der Pulszeiten etwa alle 30 Minuten durchgeführt werden.
Da die Intensität des Raman-Lasers aktiv stabilisiert wird, kann der Eﬀekt nicht von Intensitätsdrifts des Lasers verursacht werden. Mögliche Ursachen könnten Positionsdrifts der Laserstrahlen sein, oder thermische Drifts der Wellenplatten, welche die Intensitätsaufspaltung des Ramanlasers in die drei verschiedenen Strahlen bestimmen. Eventuell ändert sich auch die Beugungseﬃzienz der verwendeten akustooptischen Modulatoren über die Zeit. Da die Polarisation der Strahlen geﬁltert wird, können auch-
 Polarisationsdrifts eine Ursache sein.

4.6. Detektionsverfahren
Während jeder experimentellen Sequenz werden Kamerabilder aufgenommen, die nach der Messung ausgewertet werden müssen. Bei der Auswertung geht es darum, dunkle Ionen, bei denen das Shelving erfolgreich war, und helle Ionen, bei denen das Shelving keine Wirkung hatte, zu unterscheiden. Das Aufnehmen der Kamerabilder nimmt in den meisten experimentellen Sequenzen den größten Zeitraum in Anspruch (≈ 30% der Sequenz), daher sollte die Belichtungszeit der Bilder möglichst so kurz gewählt sein, dass Ion-
en gerade noch vom Hintergrund unterschieden werden können. Außerdem wird durch kurze Belichtungszeiten die Wahrscheinlichkeit eines Zerfalls des metastabilen 3D5/2-Zustandes minimiert.

47

4. Experimentelle Sequenzen

Dunkel-Wahrscheinlichkeit

Differenz

Dunkel-Wahrscheinlichkeit

1

1

nur π/2-Puls

nur π/2-Puls

π/2- und zwei weitere Pulse

π/2- und zwei weitere Pulse

0.75

0.75

0.5

0.5

0.25
0 0.75
0.5 0.25
0 -0.25
-0.5 -0.75
0

0.25

0

0.75

0.5

0.25

Differenz

0

-0.25

-0.5

-0.75

4

8

12

16

20

0

Pulsdauer / μs

4

8

12

16

20

Pulsdauer / μs

(a) Cocarrier-Übergang

(b) erstes rotes Seitenband

1 nur π/2-Puls
π/2- und zwei weitere Pulse
0.75

Dunkel-Wahrscheinlichkeit

0.5

0.25

Differenz

0
0.75 0.5
0.25 0
-0.25 -0.5
-0.75 0

4

8

12

16

20

Pulsdauer / μs

(c) zweites rotes Seitenband

Abbildung 4.14.: Ergebnisse der π-Kalibrationssequenz für verschiedene Übergänge. Die schwarzen Pfeile zeigen das Ergebnis der automatischen Auswertung. Beim zweiten roten Seitenband lässt sich die π-Zeit nicht automatisch bestimmen.

48

4.6. Detektionsverfahren

36

34

Rabifrequenz / kHz

32

30

28

26

24 20/11 00:00

21/11 00:00

22/11 00:00
Zeitpunkt

23/11 00:00

24/11 00:00

Abbildung 4.15.: Verlauf der Rabifrequenz des Cocarrier-Übergangs über mehrere Tage

Ist keine örtliche Information zur Unterscheidung mehrerer Ionen nötig, so kann anstatt der EMCCD-Kamera auch ein Photomultiplier zur Ionendetektion verwendet werden. Im Gegensatz zu EMCCD-Kameras weisen Photomultiplier geringeres elektronisches Rauschen auf und ermöglichen somit kürzere Detektionszeiten, in [MSW+08] konnte so ein einzelnes Ion in einer Detektionszeit von 145 µs mit einer Wahrscheinlichkeit von 99,99% korrekt detektiert werden. Um die selbe Erfolgswahrscheinlichkeit mit einer EMCC-
D-Kamera zu erreichen, war eine Detektionszeit von 400 µs notwendig [BSWL10]. Das gelang nur, da mithilfe geeigneter Verfahren die durch die Kamera verfügbare örtliche Information optimal ausgenutzt wurde. Diese Verfahren wurden für unser Experiment im Wesentlichen übernommen und werden daher in den folgenden Abschnitten vorgestellt.
Abbildung 4.16a zeigt ein Kamerabild eines gefangenen Ions, aufgenommen von der EMCCD-Kamera. Zur optimalen Detektion sollte die Abbildungsoptik so ausgerichtet sein, dass Ionen möglichst punktförmig abgebildet werden. Das ist in unserem Experiment nicht der Fall, und lässt sich nur durch einen neuen experimentellen Aufbau erreichen, der bereits in Arbeit ist. Die Abbildungsfehler wirken sich vor allem auf die Detektion von zwei (oder mehreren) Ionen aus (Abbildung 4.16b): Die Ionen überlappen, so-
dass es unmöglich wird, ihnen vollständig getrennte Bereiche zuzuordnen. So entstehen vor allem Detektionsfehler in den ungeraden Zuständen, d.h. den Zuständen, bei denen nur eines beider Ionen Fluoreszenzlicht emittiert. Es ist aber gelungen, ein Auswerteverfahren zu entwickeln, welches robust gegen durch Überlappung der Ionen entstehende Fehler ist.
Darüber hinaus treten weitere Störquellen in unserem Experiment auf. Erstens ist der Aufbau der Detektionsoptik nicht vollständig lichtdicht, sodass Umgebungslicht den Kamerasensor erreichen kann. Ein zweites, generelles Problem von mikrostrukurierten Fallen ist an den Fallenelektroden der Mikrofalle gestreutes Laserlicht, welches die Ka-

49

4. Experimentelle Sequenzen

(a)

(b)

(c)

Abbildung 4.16.: Kamerabilder von (a) einem einzelnen Ion (b) zwei in einem Fallensegment gefangenen Ionen (c) einem einzelnen Ion mit eingeschaltetem 4x4-Binning

mera erreicht. Durch die Summe aller in unserem Experiment vorliegenden Probleme beträgt die Detektionszeit in der Regel einige Millisekunden.
Abbildung 4.16c visualisiert eine Funktion der EMCCD-Kamera, das Binning. Dabei werden benachbarte Kamerapixel noch vor der Ausleseprozedur zu größeren Superpixeln gruppiert, was das Signal zu Rauschen-Verhältnis verbessert [Bur10] und somit eine Reduzierung der Detektionszeit um etwa die Hälfte ermöglicht. Für Kristalle aus mehreren Ionen ist diese Technik in unserem Experiment nicht gewinnbringend anwendbar, da sie so nicht mehr räumlich unterschieden werden können.
Der nächste Abschnitt beschreibt zunächst das einfachste mögliche Ausleseverfahren, den Schwellwert-Algorithmus. Danach wird das neu entwickelte Support-VectorMachine-Verfahren, mit dem, wie schon angedeutet, die Detektionsfehler in den ungeraden Zuständen bekämpft werden können. Im letzten Abschnitt wird das MaximumLikelihood-Verfahren vorgestellt, welches die durch die EMCCD-Kamera verfügbare räumliche Information am besten ausnutzt.

4.6.1. Der Schwellwert-Algorithmus
Bei der einfachsten Variante des Schwellwert-Algorithmus müssen einmal per Hand rechteckige Regionen, die Regions of Interest, um die von Ionen beleuchteten Kamerapixel platziert werden. Nur diese Pixel werden bei der späteren Auswertung berücksichtigt. Bei der Platzierung muss darauf geachtet werden, möglichst wenige nichtbeleuchtete Pixel einzubeziehen, um Rauschen dieser Pixel herauszuﬁltern. Da abgebildete Ionen aber nicht rechteckig sind, gehen dabei aber auch zwangsläuﬁg beleuchtete Pixel un-
d damit verfügbare Informationen verloren.

50

4.6. Detektionsverfahren

Bei der Auswertung von Kamerabildern in experimentellen Sequenzen wird dann der gesamte Fluoreszenzwert der gesetzten Regionen mit einer vorher festgelegten Schwelle σ verglichen. Ist der Wert höher, wird ein Ion als hell gewertet, ist er niedriger, wird es als dunkel gewertet. Die Schwelle kann automatisch mithilfe einer Histogramm-Sequenz bestimmt werden.

Automatische Messung 7:
Zur automatischen Bestimmung der Schwelle σ werden abwechselnd Kamerabilder mit ﬂuoreszierenden Ionen und mit nicht ﬂuoreszierenden Ionen aufgenommen. Die Fluoreszenz kann gezielt gesteuert werden, indem der Laser bei 866 nm an- bzw. ausgeschaltet wird. Diese Sequenz kann die Detektion eines dunklen Ions fast perfekt simulieren, es fehlt lediglich an der Falle gestreutes Laserlicht durch den 866 nm-Laser. Dieses Licht wird aber zum größten Teil von einem Filter vor der Kamera herausgeﬁltert, sodas-
s der so verursachte Fehler minimiert wird. Außerdem wird die endliche Lebensdauer des D5/2-Zustandes nicht berücksichtigt, was bei kurzen Detektionszeiten von wenigen Millisekunden aber ebenfalls vernachlässigbar ist.

Die gemessenen Fluoreszenzwerte der Regions of Interest werden dann in ein Histogram

eingefügt (Abbildung 4.17). Die Schwelle kann unter der Voraussetzung, dass beide Ver-

teilungen näherungsweise einer Poissonverteilung entsprechen 1, berechnet werden durch

[Roo00]

√ σ = ns

(4.10)

wobei n bzw. s die Mittelwerte der Verteilungen des dunklen bzw. hellen Ions sind.

Die Genaugkeit des Verfahrens lässt sich verbessern, indem beispielsweise nicht rechteckige Regions of Interest verwendet werden, oder einzelne Pixel je nach Beleuchtungsstärke Gewichtungsfaktoren erhalten [Wie11]. Bei der Detektion mehrerer Ionen muss dabei allerdings klar sein, welchem Ion ein Pixel zugeordnet werden muss. Da dies in unserem Experiment nicht einwandfrei möglich ist, wird nun ein Verfahren präsentiert, welches einen Überlapp mehrerer Ionen berücksichtigen kann.

4.6.2. Das Support-Vector-Machine-Verfahren
Der Einfachheit halber wird das Support-Vector-Machine-Verfahren zunächst am Beispiel von Zwei-Ionen-Kristallen erläutert. Später wird dann diskutiert, inwiefern es sich auf eine höhere Ionenzahl verallgemeinern lässt. Es werden zunächst genauso wie beim Schwellwert-Verfahren per Hand Regions of Interest um die jeweiligen Ionen gesetzt. Wäre die Fluoreszenz der Ionen auf dem Kamerabild klar voneinander getrennt, so ließe
1Aufgrund des komplexen Ausleseverfahrens einer EMCCD-Kamera triﬀt diese Näherung für einzelne Pixel nicht zu, in der Praxis ist die angegebene Formel aber aufgrund der Summierung über viele Pixel ausreichend.

51

4. Experimentelle Sequenzen

120 dunkles Ion helles Ion
100

80

Ereignisse

60

40

20

0

0

100

200

300

400

500

600

700

Fluoreszenzwert

Abbildung 4.17.: Ein Beispielhistogramm mit einer Detektionszeit von 2 ms bei 4x4Binning. Der schwarze Pfeil zeigt die ausgerechnete Schwelle σ.

sich die Unterscheidung zwischen hellen und dunklen Zuständen separat für beide Ionen durchführen. Genau das wird nun aber vermieden - stattdessen werden beide Ionen ein ganzes, zusammenhängendes System betrachtet, mit vier möglichen Zuständen, die es zu unterscheiden gilt:
M = {(dunkel, dunkel), (dunkel, hell), (hell, dunkel), (hell, hell)}

Es ist also eine Abbildung f gesucht, die den Fluoreszenzwerten der beiden Regions of Interest den richtigen Zustand zuordnet:

f : {f1, f2} → M

mit f1/2 den Fluoreszenzwerten der jeweiligen Ionen. Zunächst wird die Summe und die Diﬀerenz der Fluoreszenzwerte gebildet, also

Σ = f1 + f2

∆ = f1 − f2

Wie beim Schwellwert-Verfahren auch muss zunächst ein Datensatz aufgenommen werden, anhand dem entschieden werden kann, welchem Zustand eine Kombination (∆, Σ) zugeordnet werden muss. In einem Graphen, in dem die Summe Σ gegen die Diﬀerenz ∆ aufgetragen ist, können den vier möglichen Zuständen verschiedene, voneinander abgetrennte Bereiche zugeordnet werden (Abbildung 4.18).
In unserem Experiment sind Summe und Diﬀerenz der ungeraden Zustände korreliert, daher werden diese Bereiche nicht exakt kreisförmig, sondern elliptisch sein. Trotzdem

52

4.6. Detektionsverfahren

(hell, hell)

Summe Σ

(dunkel, hell)

(hell, dunkel)

(dunkel, dunkel)
0 Differenz Δ
Abbildung 4.18.: Skizze der Bereiche von den vier möglichen Zuständen in einem Σ-∆Diagramm.

können im zweidimensionalen Raum dann immernoch Trennlinien gezogen werden, die alle Zustände eindeutig voneinander abgrenzen.

Zur Abschätzung der Bereiche muss analog zum Schwellwert-Verfahren eine Messequenz

durchlaufen werden, die jeden der möglichen Zustände präpariert und dann die gemes-

senen Paare (∆, Σ) als Punkte in einen Graphen einträgt. Da die Laser in unserem

Experiment nicht auf nur ein einzelnes Ion fokussiert werden können, können nicht alle

Zustände durch An- bzw. Abschalten des 866 nm-Lasers erzeugt werden, wie das beim

einzelnen Ion der Fall ist. Eine Möglichkeit zur Präparation aller Zustände ist, wie in

Abbildung

4.19

gezeigt,

einen

π 2

-Puls

mit

dem

729

nm-Laser

auszuführen.

Dadurch

wird

jedes Ion in einem Superpositionszustand |hell + |dunkel präpariert. Bei der anschlie-

ßendenen Detektion werden die Ionen im Idealfall mit einer Wahrscheinlichkeit von

25% in einen der vier möglichen Zustände projeziert. Aber auch eine nicht gleichmäßige

Verteilung der Zustände beeinträchtigt die Genauigkeit des Auswerteverfahrens nicht,

sodass eine genaue Kalibrierung der Pulsﬂäche nicht nötig ist.

Die Verwendung des Lasers bei 729 nm hat den Nachteil, dass, bevor die Sequenz durchgeführt werden kann, die Frequenz des Lasers kalibriert werden muss. Für die Kalibra-

Quenching

Präparation 729nm

lange Detektion 10ms

kurze Detektion

lange Detektion 10ms

Abbildung 4.19.: Experimentelle Sequenz zur Messung eines Datensatzes für das SupportVector-Machine-Verfahren

53

4. Experimentelle Sequenzen

tion ist aber schon eine funktionierende Detektion nötig - daher kann auf die Benutzung des gewöhnlichen Schwellwert-Verfahrens nicht verzichtet werden.

Da die Zustände der beiden Ionen nach der Projektion rein zufällig sind, können die bei der Detektion gemessenen Punkte (∆, Σ) zunächst nicht einem der möglichen Zustände zugeordnet werden. Um das zu ermöglichen, wird, wie von Burrell et al. [BSWL10] beschrieben, vor dem Detektionsabschnitt mit der eigentlich gewünschten Detektionszeit τ ein zusätzlicher Detektionsabschnitt mit einer hohen Belichtungszeit von 10ms eingefügt. Dieser wird mithilfe des Schwellwert-Verfahrens ausgewertet. So kann der -
wahre Zustand eindeutig festgestellt werden, denn bei einer so langen Detektionszeit hat selbst das simple Schwellwert-Verfahren eine Erfolgsquote von annähernd 100%. Um sicherzugehen, dass der Zustand während des kürzeren Detektionsabschnitts auch wirklich dem der langen Detektion entspricht, wird als weitere Sicherheit danach nochmals eine weitere lange Detektion eingefügt. Nur wenn beide langen Detektionen das gleiche Ergebnis liefern, wird das Resultat der Sequenz weiterverwendet. So können Fä-
lle, in denen beispielsweise der D5/2-Zustand spontan zerfällt, ausgeschlossen werden.
Wurde ein Datensatz mit obiger Sequenz aufgenommen, so erhält man vier verschiedene Punktmengen, wobei jede Punktmenge einem Zustand zugeordnet ist. Zur Auswertung von Kamerabildern in späteren Sequenzen müssen die Punktmengen noch durch Trennlinien getrennt werden. Bei der Berechnung von Trennlinien können Support-VectorMachines [HDO+98] verwendet werden. Support-Vector-Machines platzieren Hyperebenen im n-Dimensionalen Raum so, dass der Abstand zu den Randpunkten zweier Mengen maximiert wird. Di-
e Randpunkte heißen auch Support Vectors. Durch Transformation in höherdimensionale Räume und anschließende Rücktransformation können auch gekrümmte Trennebenen erzeugt werden. Es hat sich aber herausgestellt, dass für das hier vorliegende Problem auch ohne Verwendung einer Support-Vector-Machine gute Trennlinien gefunden werden können. Dazu wird die Hauptkomponentenanalyse angewendet - ein Verfahren, das analog zur Hauptachsentransformation in der klassischen Mechanik funktioniert. Man berechnet -
zunächst die Kovarianzmatrix der vier verschiedenen Punktmengen

 1N

2
∆i − ∆

Cov (Σ, ∆) =



N


i=0

∆i − ∆

Σi − Σ


∆i − ∆ Σi − Σ 
2 Σi − Σ

(4.11)

mit N der Gesamtzahl an Punkten einer der vier verschiedenen Punktmengen, ∆ dem

Erwartungswert der Diﬀerenzen und Σ dem Erwartungswert der Summen. Der Normie-

rungsfaktor

1 N

macht die Kovarianzmatrix

unabhängig von der Anzahl aufgenommener

Punkte.

Diese Matrix wird nun diagonalisiert, um die Eigenwerte σ und ρ zu berechnen. Die Diagonalisierung entspricht einem Basiswechsel in eine Basis, in der die Korrelation

54

4.6. Detektionsverfahren

zwischen der Diﬀerenz und der Summe der Punkte verschwindet. Die Eigenwerte ent-

sprechen den Standardabweichungen der Punktmengen in dieser Bas√is. toren, multipliziert mit den dazugehörigen Standardabweichungen σ

DbizewEi√geρnvuenkd-

eingezeichnet auf die Schwerpunkte der Punktmengen, spannen Ellipsen auf, welche die

Orientierung und Ausdehnung der Punktmengen sehr gut beschreiben.

Für neue gemessene Punkte (∆, Σ) lässt sich jetzt eine Vorschrift konstruieren, um die Zugehörigkeit zu einer der Punktmengen zu entscheiden. Die Fragestellung dazu lautet: Welche der vier Ellipsen muss am wenigsten hochskaliert werden, bis sie den Punkt (∆, Σ) schneidet? Die Skalierungsfaktoren der Ellipsen sj, wobei j = 0, 1, 2, 3 der Index einer der vier möglichen Zustände ist, können durch die Gleichung

sj =

∆j

2
+

σj

Σj 2 ρj

(4.12)

berechnet werden, wobei (∆j, Σj) die Koordinaten des Punktes im Bezugssystem der

jeweiligen Ellipse mit den Halbachsen (σj, ρj) angibt. Man erhält die Koordinaten durch

die Transformation

∆i Σi

= Ri ·

∆ Σ

−

∆i Σi

(4.13)

wobei Ri eine Drehmatrix ist, die durch die Eigenvektoren der jeweiligen Punktmenge bestimmt wird. Die Parameter ∆i und Σi sind die Erwartungswerte der jeweiligen Zustände. Schließlich wird der Punkt (∆, Σ) der Menge mit dem kleinsten Skalierungsfaktor zugeordnet. Der Vorteil dieses Verfahrens ist, dass keine explizite Trennlinie berechnet werden muss.

Abbildung 4.20 zeigt Beispielmessungen der Sequenz zur Bestimmung der Ellipsen. Um die Eﬀektivität des Verfahrens zu veranschaulichen, wurden per Hand die sich aus dem oben dargestellten Verfahren ergebenden Trennlinien eingezeichnet.

Die Eﬀektivität des Verfahrens wurde in Beispielmessungen mit verschiedenen Detektionszeiten mit dem Schwellwert-Verfahren verglichen. Abbildung 4.21 zeigt die Ergebnisse bei einer Detektionszeit von 2ms, aufgeschlüsselt nach Fehldetektionen in die falschen Zustände. Die Detektionsfehler der ungeraden Zustände konnten um einen Faktor von etwa 2-5 reduziert werden. Allerdings geht dies auf die Kosten der Fehler bei den (dunkel, dunkel)-Zuständen, diese haben um etwa einen Faktor 10 zugenommen. Abbi-
ldung 4.22 zeigt die Ergebnisse für verschiedene Detektionszeiten. Um die Eﬃzienz beider Verfahren auf einen Blick vergleichen zu können, wurde noch die Mittelung aus den Fehlerwahrscheinlichkeiten der einzelnen Zustände als Kenngröße berechnet. Gerade für Detektionszeiten größer als 1,5 ms, die für unser Experiment von Bedeutung sind, kann das neue Support-Vector-Machine-Verfahren die Detektionsfehler um einen Faktor 2-5 reduzieren.

Betrachtet man sich die Datensätze in Abbildung 4.20, so sollte man erwarten, dass die (dunkel, dunkel)-Zustände sehr gut von den anderen Zuständen unterschieden werden können sollten. Tendenziell beﬁnden sich die Trennlinien allerdings zu nahe an diesen

55

4. Experimentelle Sequenzen

Summe Σ

320
(a)
300

dunkel, dunkel dunkel, hell hell, dunkel hell, hell

280

260

240

220

200

180

-60 -40 -20

0

20

40

60

Differenz Δ

550
(b)
500

dunkel, dunkel dunkel, hell hell, dunkel hell, hell

450

400

350

300

250

200

-150 -100

-50

0

50

Differenz Δ

100 150

Abbildung 4.20.: Datensätze für das Support-Vector-Machine-Verfahren. Für jede Punktmenge wurde durch Diagonalisierung der Korrelationsmatrix eine Ellipse ausgerechnet und Trennlinien eingezeichnet. Bild (a) wurde bei einer Detektionszeit von 1ms, Bild (b) mit 4ms Detektionszeit aufgenommen.

0.1 (a)
0.08
0.06

detektierter Zustand dunkel, dunkel dunkel, hell hell, dunkel hell, hell

0.1 (b)
0.08
0.06

detektierter Zustand dunkel, dunkel dunkel, hell hell, dunkel hell, hell

0.04

0.04

0.02

0.02

0 dunkel,dunkel dunkel,hell hell,dunkel
präparierter Zustand

hell,hell

0 dunkel,dunkel dunkel,hell hell,dunkel
präparierter Zustand

hell,hell

Abbildung 4.21.: Wahrscheinlichkeiten für Fehldetektionen in die verschiedenen Zustände bei einer Detektionszeit von 2 ms mit (a) dem Support-Vector-Machine-Verfahren und (b) dem Schwellwert-Verfahren.

Fehlerwahrscheinlichkeit

Zuständen - die Streuung von Werten vergrößert die Ellipsen der anderen Zustände zu stark. Dem könnte durch Einführung zusätzlicher Korrekturfaktoren entgegengewirkt werden. Die Eﬃzienz des Verfahrens kann außerdem wie beim Schwellwert-Verfahren

56

4.6. Detektionsverfahren

Fehlerwahrscheinlichkeit gemittelte Fehlerwahrscheinlichkeit

(a)

1

0.1

dunkel, dunkel dunkel, hell hell, dunkel hell, hell

(b)

1

0.1

0.01

0.01

0.001

0.001

0.0001 0 0.5 1 1.5 2 2.5 3 3.5 4 4.5
Detektionszeit / ms

(c)

1

0.0001 0 0.5 1 1.5 2 2.5 3 3.5 4 4.5
Detektionszeit / ms

0.1

0.01

0.001
Schwellwert-Verfahren Support-Vector-Machine-Verfahren 0.0001 0 0.5 1 1.5 2 2.5 3 3.5 4 4.5
Detektionszeit / ms
Abbildung 4.22.: Fehlerwahrscheinlichkeiten aufgeteilt auf die verschiedenen präparierten Zustände (a) des Support-Vector-Machine-Verfahrens, (b) des Schwellwert-Verfahrens und (c) die Mittelung der Fehlerwahrscheinlichkeiten für beide Verfahren in Abhängigkeit der Detektionszeit.

noch weiter gesteigert werden, indem die Form der Regions of Interest besser an die jeweiligen Ionen angepasst wird.
Aufgrund der mathematischen Einfachheit ist das Verfahren auch auf größere Ionenzahlen anwendbar. Für N Ionen müssen Trennlinien im N -dimensionalen Raum gefunden werden. Die Korrelationsmatrix ist dann eine N ×N -Matrix, die diagonalisiert werden muss. Die Ellipsengleichung ist ebenfalls einfach auf höhere Dimensionen verallgemeinerbar. Der Rechenaufwand zur Auswertung und auch die Messdauer, um genügend Daten zur Erstellung der Ellipsen aufzunehmen, steigt exponentiell mit der Ionenzahl an. Da a-
ber das Prinzip des Mikrofallenexperiments darin besteht, immer nur wenige Ionen gleichzeitig abbilden zu müssen, ist die Skalierung des Verfahrens mit der Ionenzahl kein limitierender Faktor.

57

4. Experimentelle Sequenzen

4.6.3. Das Maximum-Likelihood-Verfahren

Beim Maximum-Likelihood-Verfahren nach dem Vorbild von [BSWL10] wird die Form von abgebildeten Ionen berücksichtigt, indem Pixel verschieden stark gewichtet werden. Ähnlich wie beim Schwellwert-Algorithmus wird hier ebenfalls zunächst ein Histogramm mit experimentellen Daten erzeugt. Anstatt aber nur ein einziges Histogramm für eine Gruppe von Pixeln zu erstellen, wird nun für jeden Pixel ein Histogramm abgespeichert. Man spricht dann auch von einem zweidimensionalen Histogramm. Je nachdem, wie st-
ark ein Pixel beleuchtet ist, überlappen sich die Verteilungen für dunkle und für helle Ionen mehr oder weniger stark (Abbildung 4.23).

Bei der Auswertung von Kamerabildern wird folgende Likelihood-Funktion berechnet

N
Lhell = Bi(ni)
i=1

N
Ldunkel = Di(ni)
i=1

(4.14)

mit Bi(ni) der Wahrscheinlichkeit, den Fluoreszenzwert des i-ten Pixels ni für ein helles Ion zu beobachten und Di(ni) der Wahrscheinlichkeit, den Fluoreszenzwert des i-ten Pixels ni für ein dunkles Ion zu beobachten. Die Werte Bi(ni) und Di(ni) werden aus den Daten des zweidimensionalen Histogramms bestimmt. Die Likelihood-Funktion gibt die Wahrscheinlichkeit an, genau das Bild, welches gerade ausgewertet wird, im Falle eines hellen bzw. dunklen Ions zu beobachten. Ist Lhell > Ldunkel, so ist es -
wahrscheinlicher, dass das beobachtete Ion hell ist, und umgekehrt.

Pixel, die keine Information erhalten, liefern sowohl für Lhell als auch für Ldunkel den gleichen Beitrag und beeinﬂussen damit nicht das Ergebnis. Nur bei beleuchteten Pixeln

Ereignisse Ereignisse

600 (a)
500

dunkles Ion helles Ion

400

300

200

100

0

900

1000

1100

1200

1300

Fluoreszenzwert

1400

600 (b)
500

dunkles Ion helles Ion

400

300

200

100

0

900

1000

1100

1200

1300

Fluoreszenzwert

1400

Abbildung 4.23.: Histogramme eines einzelnen Pixels (a) für einen schwach beleuchteten Pixel (b) für einen stark beleuchteten Pixel

58

4.6. Detektionsverfahren
unterscheiden sich die Beiträge - somit ergibt sich eine Gewichtung der Pixel vollautomatisch. Dadurch ist es prinzipiell sehr einfach, das Verfahren auf eine große Anzahl an Ionen anzuwenden, da keine Regions of Interest mehr per Hand gewählt werden müssen. Allerdings ist der Speicherbedarf höher als beim Schwellwert-Verfahren: Anstatt eines einzelnen Wertes pro Ion müssen Histogramme für jeden Pixel zwischengespeichert werden.
Eine technische Schwierigkeit dieses Algorithmus ist die hohe Empﬁndlichkeit gegenüber statistischen Fluktuationen in den Histogramm-Daten. Im Gegensatz zum SchwellwertVerfahren und dem Support-Vector-Machine-Verfahren, wo statistische Verteilungen durch wenige Kenngrößen charakterisiert werden, werden in diesem Verfahren einzelne Werte in den Histogrammen herangezogen. Daher sind entweder eine extrem hohe Anzahl an Kamerabildern zur Erstellung eines zweidimensionalen Histogramms erforderlich (meh-
r als 10000 Bilder, um die Genauigkeit des Schwellwert-Verfahrens zu erreichen), oder die Daten müssen softwareseitig nachbearbeitet werden. Hierfür wurden zwei Ansätze implementiert:
1. Binning: Beim Binning werden mehrere Werte in den Histogrammen der einzelnen Pixel zusammengefasst. Dadurch werden die relativen statistischen Fluktuationen einzelner Werte verringert, da die Datenmenge pro Wert erhöht wird. Allerdings geht dabei auch Information verloren, sodass die Detektionseﬃzienz bei zu hoch eingestelltem Binning wieder abnimmt. Je mehr Kamerabilder für ein zweidimensionales Histogramm aufgenommen werden, desto weniger Binning ist erforderlich. In der Praxis hat es sich be-
währt, 6 oder 8 benachbarte Werte zusammenzufassen.
2. Filterung: Durch einen Glättungsﬁlter kann das Rauschen in den Daten des zweidimensionalen Histogramms verringert werden. Es wird ein Binomialﬁlter verwendet, der an die Breite der Verteilungen angepasst wird: Je breiter die zu glättende Verteilung ist, desto breiter kann der Binomialﬁlter gewählt werden, ohne dass die Verteilungen verformt werden.
Die Kombination beider Verfahren lieferte in Testmessungen die besten Ergebnisse (Abbildung 4.24). Das zweidimensionale Histogramm bestand aus 2 · 5 000 Kamerabildern, wobei die Bilder bei einer Detektionszeit von 1ms und bei eingeschaltetem 4 × 4-Kamerabinning aufgenommen wurden. Bei optimalen Einstellungen des Maximum-Likelihood-Verfahrens konnte der Detektionsfehler gegenüber dem Schwellwert-Verfahren etwa halbiert werden. Sind die Parameter nicht optimal eingestellt, ist eine Assymetrie in den-
 Ergebnissen erkennbar. Das liegt daran, dass die Fluoreszenzwerte der hellen Zustände stärker streuen, und somit die relativen Fehler in den Histogrammen höher sind. Das kann durch Binning ausgeglichen werden. Ist dieses zu hoch eingestellt, führt es aber wiederum zu einem Informationsverlust in den dunklen Zuständen, was die Detektionswahrscheinlichkeit verschlechtert. Je mehr Kamerabilder für ein zweidimensionales Histogramm verwendet werden, desto symmetrischer werden die Ergebnisse.
59

4. Experimentelle Sequenzen

(a)

1

0.1

Schwellwert-Verfahren Maximum-Likelihood mit Filter Maximum-Likelihood ohne Filter

(b)

1

0.1

Fehlerwahrscheinlichkeit

0.01

0.01

0.001

0

2

4

6

8

10

12

Größe der Bins

0.001

0

2

4

6

8

10

12

Größe der Bins

Abbildung 4.24.: Fehlerwahrscheinlichkeiten des Maximum-Likelihood-Verfahrens verglichen mit dem Schwellwert-Verfahren (a) bei präpariertem hellen Zustand und (b) bei präpariertem dunklen Zustand.

Das Maximum-Likelihood-Verfahren hat, was die Messung mehrerer Ionen angeht, die selben Probleme wie das Schwellwert-Verfahren: Pixel müssen eindeutig zu einem bestimmten Ion zugeordnet werden, was in unserem Experiment nicht ohne weiteres möglich ist. Es kann jedoch nach dem selben Prinzip, das schon beim Support-VectorMachine-Verfahren zum Einsatz kam, verbessert werden: Beide Ionen müssen als ein gemeinsames System betrachtet werden. Die Likelihood-Funktion muss für zwei Ionen dann vier verschi-
edene Fälle unterscheiden: Ldunkel,dunkel, Ldunkel,hell, Lhell,dunkel und Lhell,hell. Anstatt zwei verschiedene Histogramme pro Pixel müssen dann vier aufgenommen werden, wobei die Zustandsunterscheidung durch eine Sequenz wie im vorherigen Kapitel ermöglicht werden kann. Das Problem, dass für dieses Verfahren viel Statistik benötigt wird, ist dann allerdings noch größer: Durch die kompliziertere Detektionssequenz dauert es länger, Kamerabilder aufzunehmen, und es werden schon für zwei Ionen die d-
oppelte Anzahl an Kamerabildern benötigt.
Aus diesem Grund wurde das Verfahren bisher für zwei Ionen noch nicht implementiert. Der Genauigkeitsgewinn des Verfahrens kann in der Praxis einfacher durch Erhöhung der Detektionszeit erreicht werden. Möglicherweise kann in Zukunft durch einen geeigneten Kurvenﬁt an die Daten, wie er von Burrell vorgeschlagen wurde [Bur10], die benötigte Datenmenge weiter reduziert werden, sodass dieses Verfahren für zwei Ionen in der Praxis eingesetzt werden kann. Auch dann ist aber noch nicht klar, ob es tatsä-
chlich eine signiﬁkante Verbesserung gegenüber dem Support-Vector-Machine-Verfahren bietet.

60

5
Realisierung von schnellen Ionentransporten
Im letzten Kapitel wurde Schritt für Schritt erklärt, welche Vorkehrungen zur Durchführung eines Transportexperimentes getroﬀen werden müssen. Daher wird hier nun immer davon ausgegangen, dass gefangene Ionen in experimentellen Sequenzen im Bewegungsgrundzustand initialisiert werden, und außerdem das Shelving und die Detektion des Zustandes verlässlich funktionieren. Alle hier präsentierten Messungen wurden der Einfachheit halber an einem einzelnen Ion durchgeführt. Modellexperimente zeigten aber,-
 dass Transporte mit zwei gefangenen Ionen die selben qualitativen Eigenschaften besitzen wie mit einzelnen Ionen.
Bevor die eigentlichen Messungen vorgestellt werden, beginnt Abschnitt 5.1 mit der theoretischen Behandlung von kohärenten Zuständen. Diese Zustände werden, wie in Abschnitt 5.2 gezeigt wird, von Transportoperationen im Bewegungsfreiheitsgrad erzeugt und sind damit essentiell zum Verständnis des Themas. Da Ionen nicht nur möglichst schnell transportiert werden sollen, sondern auch im Bewegungsgrundzustand belassen werden sollen, müssen die Trajektorien der Ionen während eines Transports bestimmte -
Bedingungen erfüllen. In Kapitel 5.3 werden verschiedene Trajektorien vorgestellt, mit denen sich kalte Transporte verwirklichen lassen. Nicht alle Trajektorien sind für unser Experiment geeignet, daher konzentrieren sich die Messungen auf zwei verschiedene Arten, mit denen kalte Transporte gelungen sind:
1. Beim paarweise neutralen Transport werden gefangene Ionen von Fallensegment 5 nach Fallensegment 4 und zurück transportiert, mit identischer Form des Hin- und Rückweges. Durch eine Wartezeit zwischen den Wegen lässt sich die Schwingungsphase eines Ions so kontrollieren, dass der Rückweg die Anregung des Hinweges rückgängig macht.
2. Beim selbstneutralen Transport wird der Rücktransport im adiabatischen Regime durchgeführt, d.h. der Bewegungszustand von Ionen wird nicht mehr geändert. Dann muss sich ein gefangenes Ion bereits nach Abschluss des Hinweges wieder im Grundzustand beﬁnden. Die Anregung, die durch den schnellen Transport entsteht, wird hier durch einen kontrollierten schnellen Spannungspuls rückgängig gemacht.
61

5. Realisierung von schnellen Ionentransporten
Damit Ionen die korrekten Trajektorien durchlaufen, müssen sich zeitlich verändernde Spannungen an die Gleichspannungselektroden angelegt werden. Diese Spannungsrampen müssen verschiedene Voraussetzungen erfüllen, diesem Thema widmet sich Abschnitt 5.4.
Um die korrekten Paramter für kalte Transporte zu ﬁnden, ist die Messung des Bewegungszustandes von essentieller Bedeutung. Wie in Kapitel 2.2 besprochen wurde, müssen dafür Rabi-Oszillationen von verschiedenen Seitenbändern aufgenommen werden. Eine solche Messung ist aber zeitraubend: Sie dauert mehrere Minuten. Um schneller optimale Parameter für kalte Transporte ﬁnden zu können, wurde daher ein neues Messverfahren entwickelt, die Pseudo-Energie-Messung. Der Messung des Bewegungszustand für eine-
n bestimmten Satz an Parametern konnte so um einen Faktor von etwa 100 beschleunigt werden. Auf die Pseudo-Energie wird in Abschnitt 5.5 eingegangen.
Die eigentlich Ergebnisse der Messungen werden im darauﬀolgenden Abschnitt 5.6 vorgestellt. Damit schnelle Transporte in einem Quantencomputer eingesetzt werden können, muss außerdem sichergestellt sein, dass die im Zustand der Ionen kodierte Quanteninformation nach dem Transport erhalten bleibt. Das wird in Kapitel 5.7 genauer untersucht.
Zum Abschluss wird noch in Abschnitt 5.8 gezeigt, wie der Zustand von Ionen durch die Kombination von optischen und elektrischen Wechselwirkungen gezielt manipuliert werden kann. Die Erfahrungen, die durch die Transportexperimente gesammelt werden, können so zur Erzeugung kohärent verschobener Fockzustände genutzt werden.

5.1. Theorie der kohärenten Zustände

Da die Ausdehnung des von den Fallenelektroden erzeugten elektrostatischen Potentials um Größenordnungen höher ist als die Ausdehnung des Wellenpaketes eines Ions, kann intuitiv vermutet werden, dass sich die Bewegung des Potentials im Wesentlichen als klassische Kraft beschreiben lässt. Um diese Annahme quantenmechanisch zu untermauern, werden kohärente Zustände eingeführt. Das sind quasiklassische Zustände, deren Orts- und Impulserwartungswerte sich wie die eines klassischen harmonischen Oszilla-
tors verhalten und deshalb eine große Rolle zur Beschreibung des Zustandes während und nach Transporten spielen.

Wir deﬁnieren kohärente Zustände |α als das Ergebnis des Verschiebeoperators Dˆ (α), wenn er auf den Vakuumzustand des harmonischen Oszillators angewandt wird:

|α = Dˆ (α) |0

mit Dˆ (α) = exp αaˆ† − α∗aˆ

(5.1)

62

5.2. Bewegungsgleichung eines transportierten Ions

Dabei ist α eine beliebige komplexe Zahl. Entwickelt man kohärente Zustände nach Fock-Basiszuständen, so erhält man

|α

=

e−

1 2

|α|2

∞

αn √

|n

n=0 n!

(5.2)

Die Wahrscheinlichkeit, nach einer Messung die Phononenzahl n zu messen, ergibt sich aus der Poisson-Verteilung

pn = | n|α |2 =

n

n
e−

n

n!

mit

n = |α|2

(5.3)

Diese Beziehung kann zur Messung der mittleren Phononenzahl n für kohärente Zustände in unserem Experiment verwendet werden. Dazu muss nach der Messung von Rabi-Oszillationen lediglich pn in Gleichung 2.20 eingesetzt werden.

Real- bzw. Imaginärteil von α geben Auskunft über den Orts- bzw. Impulserwartungswert des kohärenten Zustandes:

2

xˆ = α|xˆ|α =

Re(α)

mω

√ pˆ = α|pˆ|α = 2m ω Im(α)

(5.4)

Berechnet man die Ortswellenfunktion eines kohärenten Zustandes, so erhält man eine verschobene Grundzustands-Wellenfunktion des harmonischen Oszillators

ψ(α)(x) =

mω

1/4
exp

mω − (x −

xˆ )2

exp

i pˆ x

π

2

(5.5)

Die Zeitentwicklung im Schrödingerbild ergibt sich aus der Anwendung des Zeitent-

wicklungsoperators

Uˆ(t) = exp − i Hˆt

(5.6)

auf den zeitunabhängigen Zustand |α . Das Ergebnis lautet

i |α(t) = exp − ωt |exp (−iωt) α
2

(5.7)

Der kohärente Zustand bleibt also ein kohärenter Zustand, wobei sich die Orts- und Impulserwartungswerte wie beim klassischen harmonischen Oszillator verhalten. Das Wellenpaket behält zu allen Zeiten seine Form bei.

5.2. Bewegungsgleichung eines transportierten Ions
In diesem Abschnitt wird nun der Ansatz skizziert, mit dem sich nach [LJ11] herleiten lässt, dass durch Transportoperationen kohärente Zustände erzeugt werden. Da Transporte entlang der Fallenachse stattﬁnden, genügt es, die axiale Bewegung eines Ions zu

63

5. Realisierung von schnellen Ionentransporten

betrachten, das sich innerhalb eines sich „zeitlich verändernden Gleichspannungsfeldes“ beﬁndet. Damit ist gemeint, dass die Spannungen auf den Gleichspannungselektroden der segmentierten Falle so variiert werden, dass das Ion seine Position ändert. Es soll hier davon ausgegangen werden, dass das Ion zu jedem Zeitpunkt durch einen harmonischen Oszillator mit der konstanten Frequenz ωz beschrieben werden kann. Unter diesen Voraussetzungen ist der Hamiltonoperator gegeben durch

Hˆ Transport

=

pˆ2 2m

+

1 2

mωz2

(xˆ

−

s(t))2

(5.8)

mit s(t) einer Funktion, die jedem Zeitpunkt ein momentanes Potentialminimum zuord-

net. Nehme nun an, dass sich das Potentialminimum an einem Ort s0 beﬁndet. Da das
Ion um das Minimum herum oszilliert, erhält man den korrekten Zustand |χ im um s0 verschobenen Bezugssystem, wenn man den Verschiebeoperator Dˆ auf den dazugehören

Zustand |ψ im unverschobenen Potential anwendet:

|χ = Dˆ

−

mωz 2

s0

|ψ

(5.9)

Ersetzt man nun s0 → s(t), so kann man diese Beziehung als Ansatz in die SchrödingerGleichung einsetzen. Man erhält

∂ i |χ(t)
∂t

=

Hˆ0 + s˙(t)pˆ

|χ(t)

(5.10)

Dabei bezeichnet Hˆ0 den Hamiltonoperator mit einem völlig unverschobenen Potential. Im Interaktionsbild lässt sich diese Gleichung leicht lösen [LJ11]. Startet man zum

Zeitpunkt t = 0 im Grundzustand |0 , so ist die Lösung |ψ(t) ein kohärenter Zustand

|α(t) , wobei der Parameter α(t) gegeben ist durch

α(t) =

mωz 2

t
s(t) − e−iωzt s˙(t1)eiωzt1 dt1
0

(5.11)

Daraus folgt, dass Transporte, sofern die vorausgesetzten Näherungen gültig sind, rein

klassisch behandelt werden können. Abweichungen vom klassischen Verhalten können

durch zwei Eﬀekte verursacht werden:

1. Anharmonisches Potential: Werden Ionen zu sehr hohen Quantenzahlen n des Bewegungszustandes angeregt, so ist die Näherung eines harmonischen Potentials nicht länger gültig. Die Bewegung im anharmonischen Potential führt zur Dispersion des Wellenpaketes.

2. Variierende Fallenfrequenz: Ändert sich die axiale Fallenfrequenz schnell gegenüber der Schwingungsdauer der Ionen, so kann sich das Wellenpaket dieser Änderung nicht adiabatisch anpassen, was dazu führt, dass höhere Bewegungszustände bevölkert werden. Es entsteht dann ein gequetschter Zustand. Dieser Eﬀekt kann für kleine Quantenzahlen n ebenfalls vernachlässigt werden [SPSSK06].

Die Formel 5.11 kann nun benutzt werden, um Trajektorien zu ﬁnden, die den Bewegungszustand möglichst wenig anregen. Das wird im nächsten Abschnitt behandelt.

64

5.3. Transport-Trajektorien

5.3. Transport-Trajektorien

Betrachte zunächst einen Modelltransport zwischen zwei benachbarten Segmenten an den Positionen 0 und s0, mit zwei verschiedenen Trajektorien

t s1(t) = s0 τ

s2(t) = sin2

πt 2τ

(5.12) (5.13)

mit t ∈ [0, τ ] und τ der Gesamtdauer des Transports. Abbildung 5.1 zeigt die An-

regung für die beiden Trajektorien nach Gleichung 5.11, wobei die Transportdauer τ

variiert wird. Man erkennt periodisch im Abstand der Schwingungsdauer T des gefan-

genen Ions auftretende Minima. In der doppelt logarithmischen Darstellung äußert sich

die

1 t

-förmige

Beziehung

zwischen

den

Maxima

in

der

Anregung

und

der

Transportzeit

durch einen linearen Abfall. Das ist Ausdruck für den Übergang in das adiabatische

Regime, in dem sich das elektrostatische Potential langsam genug bewegt, damit sich

der Bewegungzustand zu allen Zeiten in den selben Energieniveaus beﬁndet. Bei der

sin2-förmigen Trajektorie s2(t) werden Ionen insgesamt weniger angeregt. Da bei die-

ser Trajektorie im Gegensatz zur linearen Trajektorie s1(t) die Beschleunigung nicht

instantan stattﬁndet, entspricht dies der intuitiven Erwartung.

Um kalte Transporte experimentell zu realisieren, muss der Verlauf der Spannungen an den Fallensegmenten prinzipiell so gewählt werden, dass eine Trajektorie reproduziert wird, die einem Minimum in der Anregung entspricht. Da Spannungen im Experiment aber lediglich in Zeitschritten von mindestens 400 ns aktualisiert werden können, ist eine Variation der Transportdauer nicht in genügend kleinen Schritten möglich. Es

10000

s1

s2

1000

Verschiebung |α|

100

10

1

0.1 1

5 Transportdauer / T

10

20

Abbildung 5.1.: Verschiebung |α| nach Abschluss des Transports für eine lineare (rot) und eine sin2-förmige Trajektorie (blau) in Abhängigkeit der Transportdauer. Die Trans-
portdauer ist in Einheiten der Schwingungsdauer eines Ions angegeben.

65

5. Realisierung von schnellen Ionentransporten
können zwar Wartezeiten von 10 ns zwischen den Abschnitten eingeschoben werden, diese müssen jedoch in den meisten Fällen ungleichmäßig auf die Abschnitte verteilt werden, was experimentell keine befriedigenden Resultate ergab. Da alle Laser und die EMCCD-Kamera im Experiment auf ein Segment ausgerichtet sind, können außerdem nur Fälle betrachtet werden, bei denen ein Hin- und Rücktransport involviert ist.
Die Fallen-Spannungsversorgung ermöglicht es, zwei verschiedene Parameter sehr präzise zu variieren:
1. Zeitverzögerungen (über 400 ns hinaus) können in Schritten von 10 ns geändert werden
2. Spannungen können in Schritten von etwa 0,3 mV geändert werden
Mit diesen Möglichkeiten konnten zwei verschiedene Trajektorienverläufe erfolgreich reproduziert werden:
1. Beim paarweise neutralen Transport sind Hin- und Rücktransport gleich schnell, mit einer Wartezeit τw zwischen den Transporten. Abbildung 5.2 zeigt die Anregung nach dem Transport, sie weist periodische Minima in Abhängigkeit der Wartezeit auf.
2. Beim selbstneutralen Transport wird ein Ion nach dem Hintransport schlagartig mithilfe eines Spannungspulses ausgelenkt, wobei die Stärke der Auslenkung und die Zeitverzögerung variiert werden kann. So kann die Anregung des Hintransports schon vor dem Rücktransport rückgängig gemacht werden. Um das experimentell zu beweisen, wird der Rücktransport im adiabatischen Regime durchgeführt. Auch

s1

1000

s2

Verschiebung |α|

100

10

1

0.1

0

1

2

3

4

5

6

7

8

9

10

Transportdauer / T

Abbildung 5.2.: Verschiebung |α| nach Abschluss des paarweisen Transports für eine lineare (rot) und eine sin2-förmige Trajektorie (blau) in Abhängigkeit der Wartezeit. Die
Wartezeit ist in Einheiten der Schwingungsdauer eines Ions angegeben.

66

5.4. Erzeugung von Transportspannungen
hier erhält man periodische Minima in der Anregung in Abhängigkeit der Zeitverzögerung, analog zu Abbildung 5.2. Der Spannungspuls kann entweder mit positiver oder negativer Spannung ausgeführt werden - die Minima sind dann um 180◦ phasenverschoben.
5.4. Erzeugung von Transportspannungen
Um die oben beschriebenen Trajektorien im Experiment zu verwirklichen, müssen passende Spannungsverläufe an die Fallenelektroden angelegt werden. Bei der Berechnung optimaler Spannungen wurde auf numerische Simulationen zurückgegriﬀen. Zunächst wurden unter Berücksichtigung der Fallengeometrie in unserem Experiment die von den Fallenelektroden generierten Potentiale simuliert [SPM+10]. Umgekehrt konnten dann bei vorgegebenen Potentialen die Spannungen berechnet werden, die an den Fallensegmenten a-
ngelegt werden müssen. Dabei wurden mehrere Randbedingungen berücksichtigt:
• Es sollen nur an den beiden benachbarten Fallensegmenten, zwischen denen die Transporte stattﬁnden, Spannungen angelegt werden.
• Die angelegten Spannungen können minimal −10V und maximal +10V betragen.
• Das Potential soll harmonisch sein, wobei die axiale Fallenfrequenz entlang des gesamten Transportes konstant bleiben soll.
Mit diesen Randbedingungen wurde eine Tabelle generiert, die jeder möglichen Ionenposition die passenden Fallenspannungen zuordnet. So kann unter Vorgabe einer Trajektorie ein Spannungsverlauf generiert werden. In allen folgenden Messungen wurde eine sin2-förmige Trajektorie verwendet. Abbildung 5.3 zeigt die auf diese Weise generierten Spannungsverläufe gegen die Zeit am Beispiel eines paarweise neutralen Transports.
Diese Spannungsverläufe können aber nicht direkt von den Digital-Analog-Wandlern der Spannungsversorgung erzeugt werden. Die Zeitauﬂösung der Digital-Analog-Wandler ermöglicht maximal eine Spannungsänderung alle 400 ns. Durch die Ausgangsstufe der Digital-Analog-Wandler werden die im Idealfall rechteckigen Spannungsverläufe wieder verzerrt. Die abschließende Filterung der Spannungen führt zu Assymetrien zwischen dem Hin- und Rücktransport. Außerdem schwingt die Spannung noch einige Mikrosekunden n-
ach dem vollendeten Transport weiter.
Wie im vorherigen Abschnitt besprochen, müssen zur Realisierung eines kalten Transports die generierten Spannungsrampen gezielt manipuliert werden. Die in Abbildung 5.4 eingezeichneten Parameter wurden in unserem Experimenten zur Findung von Anregungsminima variiert. Da die Minima nur einige Nanometer breit sind, müssen die Parameter in sehr kleinen Schritten variiert und die Anregung bestimmt werden. Die eﬃziente Messung der Anregung wird im nächsten Kapitel behandelt.
67

5. Realisierung von schnellen Ionentransporten

0
Simulation
-5

0
DAC Zeitauflösung
-5

Spannung / V

-10 0

10

20

0
zur Falle
-5

-10 0
0
Filter
-5

10

20

DAC Ausgangsstufe

Spannung / V

-10 0

10

20

Zeit / μs

-10 0

10

20

Zeit / μs

Abbildung 5.3.: Spannungsverlauf des Transports nach verschiedenen Verarbeitungsschritten. Die Spannungsverläufe beinhalten einen Transport zum Nachbarsegment (roter Spannungsverlauf), eine Wartezeit von 2µs und einen Rücktransport zum ursprünglichen Segment (blauer Spannungsverlauf).

0

0

-5

-5

-10

-10

Zeit

Zeit

Abbildung 5.4.: Modiﬁkation der Transportspannungen (a) beim paarweise neutralen Transport und (b) beim selbstneutralen Transport. Der adiabatische Teil des selbstneutralen Transports ist nicht maßstabsgetreu dargestellt.

Spannung / V Spannung / V

68

5.5. Die Pseudo-Energie

5.5. Die Pseudo-Energie

Zur genauen Bestimmung des Bewegungszustandes eines Transportes müssen RabiOszillationen mehrerer Seitenbänder gemessen und ausgewertet werden. Zur Auswertung kommt ein Fit-Algorithmus zum Einsatz, der den Kontrastverlust durch fehlerhafte Detektion, fehlerhaftes optisches Pumpen und Shelving sowie einen exponentiellen Kontrastabfall durch Dekohärenzeﬀekte berücksichtigt. Der kombinierte Fit mehrerer Seitenbänder erlaubt eine hochpräzise Bestimmung des Bewegungszustandes.

Abbildung 5.5 zeigt die Rabi-Oszillationen nach zwei unterschiedlichen Transporten:

In (a) verursachte der Transport kaum Anregung des Bewegungszustandes, während

in (b) die Parameter des Transportes so gewählt wurden, dass eine erhebliche Anre-

gung stattfand. Im ersten Fall wurden der Trägerübergang, das erste rote und blaue

Seitenband zur Auswertung verwendet, während im zweiten Fall das blaue Seitenband

mit dem zweiten roten Seitenband ersetzt wurde. Beim Fit wird angenommen, dass

die Phononenverteilung einer Faltung zwischen thermischem und kohärentem Zustand

entspricht:

pn

=

∞ m=n

(nth

nmth + 1)m+1

e−nα

nα(n−m) (n − m)!

(5.14)

Dunkel-Wahrscheinlichkeit Dunkel-Wahrscheinlichkeit

(a)

1

0.8

0.6

0.4

0.2

0

(b)

1

0.8

0.6

0.4

0.2

0 0

50

100

150

200

Pulslänge / μs

Abbildung 5.5.: Rabi-Oszillationen (a) für Träger, rotes Seitenband und blaues Seitenband im Falle von n = 0,10±0,01 (b) für Träger, erstes rotes und zweites rotes Seitenband im Falle von n = 20,00 ± 0,13. Die durchgezogenen Linien zeigen einen kombinierten Fit an die jeweiligen Seitenbänder.

69

5. Realisierung von schnellen Ionentransporten

Dadurch wird noch berücksichtigt, dass der Bewegungszustand unmittelbar nach dem Seitenbandkühlen nicht mit einer Wahrscheinlichkeit von 100% dem Grundzustand entspricht.
Um eine grobe Übersicht über die Wirkung der Transportparameter zu erhalten, ist eine zeitaufwendige Hochpräzisionsmessung allerdings nicht geeignet. Hierfür ist man an einer schnellen Messmethode interessiert, bei der die Genauigkeit von untergeordneter Bedeutung ist. Für diesen Zweck wurde die Pseudo-Energiemessung entwickelt. Es werden zunächst einige Annahmen gemacht:
1. Der Bewegungszustand ist ein kohärenter Zustand.
2. Detektion, optisches Pumpen und Shelving sind so eingestellt, dass in den RabiOszillationen ein Kontrast von etwa 95% erreicht wird.
3. Der Lamb-Dicke-Parameter beträgt η ≈ 0,24.
4. Die Messung wird an einem einzelnen Ion durchgeführt. Für mehrere Ionen sind zusätzliche Korrekturen nötig.
Alle Annahmen wurden auf die Gegebenheiten in unserem Experiment optimiert und werden daher naturgemäß erfüllt. Die Pseudo-Energiemessung beruht auf dem Prinzip, die Rabi-Oszillationen der verschiedenen Seitenbänder durch einzelne Punkte zu approximieren. Die Pseudo-Energie ist deﬁniert als

Ep

=

2

[P↑,+1(3τπ,car)

−

P↑,−1(3τπ,car)

−

P↑,−2(2τπ,car)]

+

7 2

(5.15)

mit P↑,∆n(τ ) der Wahrscheinlichkeit, bei einem Seitenband mit der Pulszeit τ den SpinUp-Zustand auszulesen. Der Index ∆n bezieht sich auf die Phononenänderung des Seitenbandübergangs: ∆n = +1 steht für das blaue, ∆n = −1 für das rote und ∆n = −2 für das zweite rote Seitenband. Mit τπ,car ist die π-Zeit des Trägerübergangs im Bewegungsgrundzustand gemeint. Um einen Wert der Pseudo-Energie im Experiment zu bestimmen, werden also lediglich drei Messpunkte benötigt.
Aus dem Wert der Pseudo-Energie lässt sich die mittlere Phononenzahl des Bewegungszustandes berechnen. Abbildung 5.6 zeigt den Zusammenhang der beiden Größen. Für Werte kleiner als 1,7 steigt die mittlere Phononenzahl monoton mit der Pseudo-Energie an. Für höhere Werte ist die Umrechnung nicht mehr eindeutig, es existieren mehrere Zweige. In Messungen, bei denen ein Transportparameter in kleinen Schritten variiert wird, kann aus dem Verlauf der Pseudo-Energie aber noch geschlossen werden, in welch-
em Zweig des Zusammenhangs sich die Messwerte beﬁnden. Für Anregungen bis n ≈ 10 ist die Pseudo-Energie das ideale Werkzeug, um Minima oder Periodizitäten in der Anregung zu erkennen. Für den absoluten Wert der mittleren Phononenzahl ist die Pseudo-Energie lediglich eine Schätzung, da der genaue Zusammenhang von der Shelving-Eﬃzienz und von der gewählten π-Zeit des Trägerübergangs abhängt.

70

5.6. Experimentelle Ergebnisse

100

Mittlere Phononenzahl n

10

1

0.1

0

0.5

1

1.5

2

2.5

3

3.5

4

Pseudo-Energie

Abbildung 5.6.: Mittlere Phononenzahl als Funktion der Pseudo-Energie

5.6. Experimentelle Ergebnisse

Abbildung 5.7 zeigt die mittlere Anregung n des Bewegungszustandes beim paarweise neutralen Transport. Der Transport wurde mit einer Transportdauer von 11,2 µs in jede Richtung durchgeführt, wobei die Wartezeit zwischen den Transporten variiert wurde. Der qualitative Verlauf der Anregung stimmt mit der erwarteten theoretischen Kurve überein, die genauen Positionen der Minima oder die Zahlenwerte der maximalen Anregung konnten jedoch nicht mit theoretischen Rechnungen reproduziert werden, da die ge-
naue Wirkung der verwendeten Elektronik und der Filter bisher nicht vollständig verstanden ist.
Um die Korrektheit der Pseudo-Energiemessung zu veriﬁzieren, wurden zusätzlich Messwerte mithilfe des Verfahrens der Rabi-Oszillationen aufgenommen. Die kaum sichtbaren Fehlerbalken sind ein Ausdruck der hohen Präzision dieses Messverfahrens. Deutliche Abweichungen zwischen den Verfahren treten vor allem bei hohen Anregungen auf. In diesem Bereich können die Werte der Pseudo-Energie-Messung nicht mehr eindeutig den Zweigen der theoretischen Beziehung zugeordnet werden, somit ist in diesem Bereiche-
 eine Abweichung zwischen den Verfahren akzeptabel. Die niedrigste gemessene Phononenzahl innerhalb des Minimums lautet

nmin = 0,10 ± 0,01

(5.16)

Diese Zahl ist geringer als die durch die Pseudo-Energie ermittelten Werte. In diesem Bereich reagiert die Pseudo-Energie sehr empﬁndlich auf Fluktuationen in der ShelvingEﬃzienz und in der π-Zeit des Trägerübergangs, was hier als Grund der Abweichung vermutet wird.

71

5. Realisierung von schnellen Ionentransporten
100

10

Mittlere Phononenzahl

1

Pseudo-Energie-Methode

Methode der Rabi-Oszillationen

0.1

0

0.5

1

1.5

2

2.5

3

3.5

4

Wartezeit / μs

Abbildung 5.7.: Mittlere Anregung n des Bewegungszustandes beim paarweise neutralen Transport in Abhängigkeit der Wartezeit.

Beim selbstneutralen Transport müssen zwei Parameter angepasst werden: Die Verzögerungszeit τv des Spannungspulses und dessen Stärke. Letztere hat, bis auf das Vorzeichen, keinen Einﬂuss auf die Periodizität der Anregung bezüglich der Verzögerungszeit. Daher kann zunächst durch Variation der Verzögerungszeit ein Anregungsminimum gesucht werden, und bei dieser Zeit die Pulsstärke optimiert werden. Abbildung 5.8 zeigt die Ergebnisse der Pseudo-Energie-Messung bei Variation der Verzögerungszeit mit p-
ositivem und mit negativem Spannungspuls. Die Pulsstärke wurden bei dieser Messung bereits optimal kalibriert. Es zeigt sich wie erwartet ein Phasenversatz in der Periodizität um 180◦. Die Transportzeiten betrugen 4 µs auf dem Hinweg und 72 µs auf dem Rückweg.
Aufgrund der niedrigen Transportzeit waren die Anregungen in den Maxima so hoch, dass sich die Messwerte über drei verschiedene Zweige der Beziehung zwischen PseudoEnergie und mittlerer Phononenzahl erstreckten. Da ein monotoner Anstieg der Anregung mit steigendem Abstand zum Anregungsminimum erwartet wird, konnten die Pseudo-Energie-Werte den passenden Zweigen zugeordnet werden. Abbildung 5.9a zeigt die Messwerte des Pseudo-Energie-Verfahrens vor und nach der Zuordnung.
Zur Bestätigung der Korrektheit der Pseudo-Energie-Werte nach der Umrechnung wurden zusätzlich einige Messwerte mithilfe der Methode der Rabi-Oszillationen aufgenommen (Abbildung 5.9b). Hier ist anzumerken, dass sich das Anregungsminimum zwischen

72

5.6. Experimentelle Ergebnisse

100

Mittlere Phononenzahl

10

1

0.1 0

positiver Spannungspuls negativer Spannungspuls

0.2

0.4

0.6

0.8

1

Verzögerungszeit / μs

1.2

1.4

1.6

Abbildung 5.8.: Mittlere Anregung n des Bewegungszustandes beim selbstneutralen Transport in Abhängigkeit der Verzögerungszeit für negative und positive Spannungspulse.

(a) 100

(b) 100

Mittlere Phononenzahl Mittlere Phononenzahl

10

10

1
nach Umrechnung vor Umrechnung
0.1 0.6 0.7 0.8 0.9 1 1.1 1.2 1.3 Verzögerungszeit / μs

1

0.1 0

Methode der Rabi-Oszillationen Pseudo-Energie-Methode

0.1

0.2

0.3

0.4

0.5

0.6

Verzögerungszeit / μs

Abbildung 5.9.: (a) Messwerte mit der Pseudo-Energie-Methode vor- und nach der Umrechnung (b) Vergleich der Pseudo-Energie-Werte nach der Umrechnung mit der Methode der Rabi-Oszillationen

73

5. Realisierung von schnellen Ionentransporten

den beiden Messungen um etwa 110 ns verschoben hatte und somit die Messwerte der Methode der Rabi-Oszillationen nachträglich auf das Minimum der Pseudo-EnergieWerte gelegt wurden.
Der Grund für diese Verschiebung konnte bisher nicht geklärt werden. In Kapitel 4.5 wurde gezeigt, dass die Fallenfrequenz über viele Tage im Promillebereich stabil ist, daher können Drifts in der Fallenfrequenz ausgeschlossen werden. In der Vergangenheit ist es aufgrund von Softwarefehlern aber immer wieder vorgekommen, dass ungewollt Spannungen an vom Ion weit entfernten Segmenten angelegt wurden, was zu einer minimalen Positionsänderung und auch zu einer Änderung der axialen Fallenfrequenz führ-
en kann und somit eine Erklärung für eine plötzliche Änderung der Transportparameter wäre.
Nach der Verschiebung der Messwerte ist der Verlauf der Werte beider Verfahren aber konsistent, was die Qualität der Pseudo-Energiemessung bestätigt. Die niedrigste gemessene Anregung nach dem Transport beträgt

nmin = 0,21 ± 0,02

(5.17)

was zu diesem Zeitpunkt einer Erhöhung um lediglich 0,01 gegenüber eines nichttransportierten Ions entsprach.
Der schnellste kalte Transport, der je in unserem Experiment gelungen ist, wurde mit einer Transportdauer von 3,6µs (zuzüglich weiterer 620 ns für den Spannungspuls) durchgeführt. Eine weitere Verringerung der Transportdauer führt zu einer schlagartigen Änderung des qualitativen Verhaltens der Anregung - die sonst beobachteten Minima verschwinden vollständig. Derart niedrige Transportdauern erreichen die Größenordnung der Grenzfrequenz des Filters der Spannungsversorgung (300 kHz), sodass die an d-
er Falle angelegten Spannungen zu stark verzerrt werden.

5.7. Erhaltung der Quanteninformation
Nachdem nun schnelle Transporte erfolgreich durchgeführt wurden, muss noch geklärt werden, ob vorher präparierte quantenmechanische Zustände beim Transport erhalten bleiben. Experimentell äußert sich das dadurch, dass bei wiederholter Durchführung einer Transportsequenz exakt die selben Vorgänge ablaufen. Magnetfeldﬂuktuationen führen beispielsweise dazu, dass sich der Energieunterschied der beiden Qubit-Zustände ständig ändert und somit kohärente Operationen zwischen diesen Niveaus beim wiederhol-
ten Durchlauf einer Sequenz unterschiedliche Ergebnisse liefern - anstatt einer reinen quantenmechanischen Superposition der beiden Zustände erhält man dann ein statistisches Gemisch, welches durch eine Dichtematrix beschrieben werden muss. Auf der Bloch-Kugel werden statistische Gemische durch Bloch-Vektoren mit reduzierter Länge dargestellt.

74

5.7. Erhaltung der Quanteninformation

Um zu untersuchen, ob durch Transportoperationen statistische Gemische entstehen,

wurden Spin-Echo-Sequenzen durchgeführt, die ihren Namen aufgrund der Analogie

zur gleichnamigen Sequenz in Kernspinresonanz-Experimenten tragen. Abbildung 5.10

zeigt

das

Prinzip

einer

Spin-Echo-Sequenz.

Nach

einem

π 2

-Puls

wird

eine

Wartezeit

τ

abgewartet, in welcher der Bloch-Vektor bei verstimmtem Laser entlang des Äquators

wandert. Die Verstimmung wird hier beispielsweise durch ein sich änderndes Magnet-

feld verursacht. Nach einem π-Puls wird nochmals die selbe Zeit τ abgewartet. Hat

sich die Verstimmung nicht geändert, so wandert der Bloch-Vektor mit gleicher Win-

kelgeschwindigkeit weiter, bis insgesamt ein Halbkreis durchlaufen ist. Aufgrund des

π-Pulses ist die Endposition unabhängig von der Verstimmung, sofern diese über den

Zeitraum einer Spin-Echo-Sequenz konstant ist. Mit dieser Technik werden gegenüber

der Wartezeit τ langsame Fluktuationen herausgeﬁltert. Schnelle Fluktuationen ver-

halten sich in beiden Zweigen der Spin-Echo-Sequenz unterschiedlich und führen daher

bei jedem Durchlauf der Sequenz zu einer anderen Endposition - dann entsteht ein

statistisches

Gemisch.

Beim

abschließenden

π 2

-Puls

kann

dann

nicht

mehr

eine

voll-

ständige Population in einem der beiden Zustände erreicht werden. Im zweiten Zweig

der Spin-Echo-Sequenz wird nun noch ein Ionentransport eingefügt. Da sich dieser nur

innerhalb eines Zweiges beﬁndet, führt eine mögliche durch den Transport hinzukom-

mende Verstimmung dazu, dass sich die Position des Blochvektors nach der zweiten

Wartezeit ändert. Außerdem werden durch den Transport entstehende Fluktuationen

nicht durch die Spin-Echo-Sequenz herausgeﬁltert, sodass dann ein statistisches Ge-

misch entsteht. Um eine konstante Verschiebung von Fluktuationen unterscheiden zu

können,

wird

die

Phase

des

letzten

π 2

-Puls

zwischen

0

und

2π

variiert.

Man

erhält

dann

ein Sinus-Signal, dessen Kontrast Aufschluss über die Reinheit des Zustandes liefert.

Eine konstante Drehung des Bloch-Vektors führt hingegen zu einer Phasenverschiebung

des Sinus-Signals.

Präparation θ=0

Wartezeit

θ=0

Hin- und Rücktransport
Wartezeit

|↓ φ=0

Nachweis θ=φ

|↑
Abbildung 5.10.: Ablauf der Spinecho-Sequenz sowie die Veranschaulichung auf der Blochkugel
75

5. Realisierung von schnellen Ionentransporten

Abbildung 5.11a zeigt Ergebnisse von Spin-Echo-Sequenzen mit und ohne Transport, wobei mit den Laserpulsen der Trägerübergang zwischen beiden Spin-Zuständen des Ions getrieben wurde. Man erkennt, dass in beiden Fällen sowohl Kontrast als auch Phasenverschiebung des Signals nahezu identisch sind. Eine Phasenverschiebung würde entstehen, wenn das von außen angelegte Magnetfeld entlang des Transportweges inhomogen wäre. Solche Inhomogenitäten wurde aber vorher unter Benutzung genau dieser Messung ber-
eits kompensiert [WPZ+11]. Da kein Kontrastverlust stattﬁndet, zeigt sich, dass die im Spinzustand kodierte Quanteninformation erhalten bleibt.

Quanteninformation kann aber nicht nur im Spinzustand, sondern auch im Bewegungs-

zustand eines Ions gespeichert werden. Um zu überprüfen, ob diese Information eben-

falls durch Transporte erhalten bleiben, wurden die Laserpulse der Spin-Echo-Sequenz

in einer weiteren Messung nicht auf dem Trägerübergang, sondern auf dem blauen Sei-

tenband

durchgeführt.

Der

erste

π 2

-Puls

der

Sequenz

versetzt

das

Ion

in

den

Zustand

|↑, n = 0 +|↓, n = 1 , bei dem der Spin mit dem Bewegungszustand verschränkt ist. Die

Phase, die während der Spin-Echo-Sequenz aufgesammelt wird, setzt sich nun zusam-

men aus der aufgesammelten Phase des Spin-Zustandes und der Phase des Bewegungs-

zustandes. Die Energieniveaus des letzteren hängen von der axialen Fallenfrequenz ab,

sodass sich Änderungen in dieser auf die Phase des Gesamtzustandes auswirken. Ab-

bildung 5.11b zeigt die Ergebnisse dieser Messung mit und ohne durchgeführten Trans-

port. Der Kontrast beider Kurven ist niedriger als im vorherigen Fall, das wird auf

Rauschen der an der Falle angelegten Spannungen zurückgeführt. Allerdings ergeben

sich im Kontrast beider Kurven keine signiﬁkanten Unterschiede, sodass gezeigt ist, dass

Transportoperationen Quanteninformation sowohl im Spin- als auch im Bewegungszu-

stand erhält.

(a) 1

(b) 1

Dunkel-Wahrscheinlichkeit

0.8

0.8

0.6

0.6

0.4

0.4

0.2
0 0

mit Transport ohne Transport

π/2

π

3π/2

2π

Analysephase

0.2
0 0

mit Transport ohne Transport

π/2

π

3π/2

2π

Analysephase

Abbildung 5.11.: Ergebnisse der Spin-Echo-Sequenzen mit und ohne Transport für (a) den Trägerübergang und (b) das blaue Seitenband. Die durchgezogenen Linien beschreiben Fits an die Messpunkte.

76

5.7. Erhaltung der Quanteninformation
Die Messung mit durchgeführtem Transport beinhaltet eine Phasenverschiebung gegenüber der Messung ohne Transport, was zeigt, dass sich die axiale Fallenfrequenz auf reproduzierbare Weise während des Transportes ändert. Die Spin-Echo-Sequenz auf dem blauen Seitenband eröﬀnet nun aber die Möglichkeit, die Fallenfrequenz durch Korrekturen der Fallenspannungen während des Transports auf ein konstantes Niveau zu eichen. Das Schema zur Durchführung dieser Messung lautet
• Transportiere in der Spin-Echo-Sequenz nicht die volle Distanz zum Nachbarsegment, sondern zunächst nur einen Teil davon, sodass das Potentialminimum am Ort zw zum stehen kommt.
• Warte nach dem Hintransport einen Zeitraum τw ab, bevor das Ion zurücktransportiert wird.
• Ist die Fallenfrequenz ωzw am transportieren Ort zw von der Frequenz am Fangsegment ω0 verschieden, so wird während der Wartezeit eine Phase ϕ = τw (ωo − ωzw ) aufgesammelt. Korrigiere nun die zum Ort zw gehörigen Fallenspannungen so, dass die Phasenverschiebung verschwindet.
• Um die Genauigkeit der Kompensation zu erhöhen, kann in weiteren Messungen die Wartezeit τw erhöht werden, in unseren Messungen betrug sie maximal 100 µs. Je höher die Wartezeit, desto empﬁndlicher reagiert die Phasenverschiebung auf Abweichungen in der Fallenfrequenz.
• Nun sind die Spannungen an einem einzelnen Ort zwischen beiden Segmenten kompensiert. Die Kompensation muss nun schrittweise für höhere Transportdistanzen durchgeführt werden, bis die volle Distanz zum Nachbarsegment erreicht ist.
Abbildung 5.12 zeigt die Ergebnisse der Spin-Echo-Sequenzen für den Fall ohne und mit Korrektur der Fallenspannungen. Für unkorrigierte Spannungen beﬁndet sich die größte Abweichung genau in der Mitte beider Segmente - sie beträgt etwa 7%. Durch geeignete Wahl der Korrekturfaktoren konnte die Änderung der Fallenfrequenz während des Transports um zwei Größenordnungen reduziert werden.
Nach der Einführung der Korrekturfaktoren wurden die Experimente zur Realisierung von kalten Transporten wiederholt. Es stellte sich heraus, dass sich für die Anregung der Ionen nach einem Transport keine signiﬁkante Änderung ergab. Die mittleren Phononenzahlen in den Minima der paarweise neutralen Transport bzw. der selbstneutralen Transporte sind bereits in der Größenordnung der Phononenzahlen unmittelbar nach dem Seitenbandkühlen und bieten daher kaum Spielraum für Verbesserungen. Auch der qual-
itative Verlauf der Anregung änderte sich nicht.
77

5. Realisierung von schnellen Ionentransporten

Fallenfrequenzänderung / % (unkorrigiert) Fallenfrequenzänderung / % (korrigiert)

8 (a)
7

6

5

4

3

2

1

0

-1

0

0.2

0.4

0.6

0.8

1

Transportdistanz / Segmentabstand

0.12 (b)
0.1

0.08

0.06

0.04

0.02

0

-0.02

-0.04

0

0.2

0.4

0.6

0.8

1

Transportdistanz / Segmentabstand

Abbildung 5.12.: Relative Abweichung der Fallenfrequenz in % als Funktion der Transportdistanz (a) ohne Korrekturfaktoren und (b) mit Korrekturfaktoren

5.8. Präparation kohärent verschobener Fockzustände

Die positiven Erfahrungen mit kurzen Spannungspulsen bei der Realisierung selbstneutraler Transporte können als Abschluss dieses Kapitels noch dazu genutzt werden, um eine besondere Klasse von quantenmechanischen Zuständen herzustellen: die kohärent verschobenen Fockzustände |α, n . Das sind nichtklassische Zustände, die sich aus der Anwendung des Verschiebeoperators Dˆ (α) auf Fockzustände |n , insbesondere mit n > 0, ergeben.
Bei der Präparation wird eine Kombination aus optischen Manipulationen des Bewegungszustandes durch Laser und elektrischen Manipulationen durch Spannungspulse an Nachbarsegmenten eingesetzt - eine Demonstration der exzellenten Kontrolle über den Zustand einzelner Ionen in unserem Experiment. Abbildung 5.13 zeigt das verwendete Schema zur Präparation des Zustandes. Ein Ion wird zunächst im Grundzustand initialisiert und dann durch abwechselnde Laserpulse auf das blaue Seitenband und den Trägerüberg-
ang in den nächsthöheren Fockzustand präpariert, wobei im Folgenden Zustände bis maximal n = 2 untersucht werden. Da nach dem Seitenbandkühlen außer dem Grundzustand auch höhere Zustände mit kleinen Wahrscheinlichkeiten besetzt sind, entstehen Fehler, die sich entlang der Pulssequenz fortpﬂanzen. Die Rabifrequenzen für die verschiedenen Bewegungszustände sind unterschiedlich, was einerseits eine Korrektur der π-Zeiten der Laserpulse für höhere Bewegungszustände notwendig macht, andererseits aber a-
uch die Fidelität der einzelnen Laserpulse aufgrund der Besetzung mehrerer Zustände beeinträchtigt. Durch optisches Pumpen wird aber sichergestellt, dass sich das Ion nach den Trägerübergangen auf jeden Fall wieder im Spin-Up-Zustand beﬁndet. Das erleichtert die spätere Auswertung des Bewegungszustandes.

78

5.8. Präparation kohärent verschobener Fockzustände

(a)
Präparation

BSB Träger

(b)
|↓,1 |↓,0

optisches Pumpen

BSB Träger

|↓,2

(c)

optisches Pumpen

Spannungspuls

Analysepuls

Nachweis

blaues Seitenband Träger
blaues Seitenband Träger

|↑,2 |↑,1 |↑,0

5

4

Abbildung 5.13.: (a) Die volle experimentelle Pulssequenz zur Herstellung eines kohärent verschobenen Zustandes (b) Wirkung der Laserpulse am Energieniveauschema eines Ions (c) Wirkung des Spannungspulses auf das elektrische Potential: Die Verschiebung des Potentials führt zur Auslenkung des Ions aus der Ruhelage

Nachdem ein Fockzustand präpariert wurde, wird dieser mithilfe eines Spannungspulses im Phasenraum verschoben, sodass ein kohärent verschobener Fockzustand entsteht. Die Stärke des Spannungspulses bestimmt dabei die Amplitude der Auslenkung |α| des Ions. Es wurden Messreihen aufgenommen für Spannungspulse in Schritten von 200 mV bis zu einer maximalen Spannung von 2 V, was einer maximalen Auslenkung von |α| ≈ 2,8 entspricht.

Zur Auswertung des Bewegungszustandes wird die Methode der Rabi-Oszillationen verwendet, wie sie schon im vorhergehenden Abschnitt zum Einsatz kam. Dazu wird nach der Spannungspuls ein Analysepuls durchgeführt, wobei die Sequenz für Analysepulse auf verschiedenen Seitenbändern wiederholt werden muss. Bei der Rekonstruktion des Bewegungszustandes durch einen Kurvenﬁt wurde keine speziﬁsche Annahme für den vorliegenden Zustand getroﬀen, sondern alle Phononenzahlen unabhängig voneinander bestimmt. Ab-
bildung 5.14 zeigt die durch Fits bestimmte Phononen-Verteilungen für die präparierten Fock-Zustände ohne zusätzlichen Spannungspuls und die Fidelitäten Fn der experimentellen Zustände, d.h. den Übereinstimmungsgrad des experimentellen mit dem theoretisch erwünschten Zustand.

Die theoretisch erwartete Phononenverteilung für einen präparierten Zustand |α, n lautet [BL01, OKKB90]

p(kn)(α) = | k|α, n |2 = e−|α|2 |α|2(k−n) n! k! ×

n (−1)l|α|2(n−l) 2 l!(n − l)!(k − l)!

l=0

(5.18)

Zum Vergleich der experimentellen Werte mit der theoretischen Erwartung müssen die Fehler in der Präparation der Fock-Zustände berücksichtigt werden. Das geschieht durch

79

5. Realisierung von schnellen Ionentransporten

Populationswahrscheinlichkeit

(a) n = 0 1

(b) n = 1

(c) n = 2

0.8

0.6

0.4

0.2

0 0123456

0123456 Phononenzahl k

0123456

Abbildung 5.14.: Experimentelle Phononen-Verteilungen p˜(kn) ohne Spannungspuls für die gewünschten Zustände (a) n = 0, (b) n = 1 und (c) n = 2

Gewichtung des theoretischen Zusammenhangs 5.18 mit den experimentell bestimmten Populationen p˜(kn)(0) in den jeweiligen Fock-Zuständen:

nmax

p˜(kn)(α) =

p˜k(n)(0) · pk(n)(α)

m=0

(5.19)

Den anhand der experimentellen Daten bestimmten Phononenverteilungen für Messungen mit Spannungspuls können dann durch einen Kurvenﬁt an Gleichung 5.19 die zugehörigen Verschiebungen |α| zugeordnet werden. Abbildung 5.15 zeigt, dass die Zuordnungen zwischen Pulsspannung und Verschiebung |α| zwischen den verschiedenen Messreihen miteinander konsistent sind. Außerdem wurde die Korrektheit des Auswerteverfahren zusätzlich mit Simulationsergebnissen untermauert. Dafür wurden Spannungsverläufe für alle-
 verwendeten Spannungspuls-Amplituden mit einem Oszilloskop nach der Filterung der Spannungen aufgenommen Mithilfe der simulierten elektrostatischen Potentiale unserer Mikrofalle konnte die klassische Bewegungsgleichung eines Ions gelöst und so die Anregungen |α| bestimmt werden.
Abbildung 5.16 zeigt die experimentellen Ergebnisse für verschiedene Verschiebungen |α| sowie den Vergleich zu den theoretischen Vorhersagen p˜k(n)(α). Man erkennt eine exzellente Übereinstimmung zwischen den Messdaten und den Vorhersagen. Eine besondere Eigenschaft der kohärent verschobenen Fock-Zustände ist das Auftreten von Minima bei der Besetzung von Phononenzahlen in Abhängigkeit von |α|. Für n = 1 tritt ein Minimum auf, für n = 2 konnten zwei Minima beobachtet werden. Die Minima können als -
Interferenzeﬀekte im Phasenraum verstanden werden [OKKB90].

80

5.8. Präparation kohärent verschobener Fockzustände

3

Messungen für n=0

2.5

Messungen für n=1 Messungen für n=2

Simulation

2

Verschiebung

1.5

1

0.5

0

0

0.5

1

1.5

2

Pulsspannung

Abbildung 5.15.: Aus den Messungen extrahierte Beziehung zwischen der Verschiebung |α| und der Pulsspannung für n = 0, 1, 2 verglichen mit den aus der Simulation erhaltenen Daten. Die Punkte wurden zur besseren Übersicht mit Linien verbunden.

1

(a)

(b)

0.8

Populationswahrscheinlichkeit

0.6

0.4

0.2

0

0

1

2

3 0

1

2

3

1 (c)

0.8

Populationswahrscheinlichkeit

0.6

0.4

0.2

0

0

1

2

3

Verschiebung

Abbildung 5.16.: Experimentelle Phononen-Verteilungen p˜(kn) in den Fällen (a) n=0, (b) n=1 und (c) n=2 für verschiedene Auslenkungen |α|, die aus dem Fit der Messdaten an
den theoretisch erwarteten Zusammenhängen extrahiert wurden. Diese sind als durchge-
zogene Linien ebenfalls dargestellt.

81

5. Realisierung von schnellen Ionentransporten 82

6
Ausblick
Mit schnellen Transporten grundzustandsgekühlter Ionen ist ein wichtiger Schritt in Richtung skalierbarer Quantencomputer gelungen. Es wurde experimentell gezeigt, dass die nötigen schnellen Transportoperationen zwischen zwei benachbarten Fallensegmenten möglich sind. Bei der Erweiterung auf eine höhere Anzahl an Fallensegmenten sind keine größeren Schwierigkeiten zu erwarten. Da Ionen sehr empﬁndlich auf elektrische Felder reagieren, ist allerdings davon auszugehen, dass sich schon winzige Fehler-
 bei der Fertigung von Mikrofallen auf das Verhalten transportierter Ionen auswirken. Aus diesem Grund müssen Transportparameter sehr wahrscheinlich für jedes Segment verschieden eingestellt werden. Automatisierte Messungen können den Zeitaufwand hierfür aber überschaubar halten.
Zunächst müssen aber weitere Bausteine für einen skalierbaren Quantencomputer realisiert werden. Dazu zählen unter anderem die noch verbleibenden Transportoperationen, und zwar das schnelle Trennen und Zusammenführen zweier Ionen. Diese konnten in bisherigen Messungen in unserer Mikrofalle nur mit einer erheblichen Anregung des Bewegungszustandes der Ionen realisiert werden. Beim Trennen zweier Ionen muss die Potentialtiefe des Fangsegments reduziert werden, während gleichzeitig Spannung auf den N-
achbarsegmenten angelegt wird. Während des Übergangs kann die axiale Frequenz nicht konstant gehalten werden, was momentan als Hauptursache des Aufheizens vermutet wird. Bowler et al. [BGL+12] konnten schnelles Auftrennen und Zusammenführen bereits erfolgreich durchführen, bei einer Anregung von n ≈ 1,5. Im dortigen Experiment wurde eine auf Trennoperationen optimierte Mikrofalle verwendet, bei der zwischen den eigentlichen Fallenelektroden noch eine „Keilelektrode“ mit geringerer Breite vorhanden-
 ist. Diese ermöglicht es, bessere auf das Trennen optimierte Potentialverläufe zu erzeugen. Sollten alle weiteren Versuche scheitern, schnelle Trennoperationen in unserer Mikrofalle zu verwirklichen, muss hierfür in Zukunft eine neue, ähnlich konzipierte Falle entwickelt werden.
Ein weiterer Baustein für einen Quantencomputer sind Quantengatter mit zwei Ionen. In momentan laufenden Anstrengungen konnte die Fidelität des geometrischen Phasengatters [Ott12] von in letztem Jahr 64% bereits auf über 90% gesteigert werden. Das genügt, um erste Modellexperimente für kompliziertere Quantenalgorithmen durchzuführen, in denen Gatter- und Transportoperationen kombiniert werden sollen. In diese
83

6. Ausblick Kategorie fallen beispielsweise die Quantenteleportation und der Verschränkungsaustausch (Entanglement-Swapping) mit räumlich getrennten Ionen. Bei der Realisierung komplexerer Algorithmen wird den in dieser Arbeit entwickelten automatischen Kalibrationssequenzen eine hohe Bedeutung zukommen. In Zukunft werden zu den Sequenzen zur Einstellung von Laserparametern noch neue Sequenzen hinzukommen, mit denen Parameter des geometrischen Phasengatters und Transportparameter automatisch besti-
mmt werden. Für letztere wurde das ideale Werkzeug bereits geschaﬀen: Die Pseudo-Energie. Diese ist ein ideales Beispiel dafür, wie durch kreative Messmethoden die Bestimmung von Parametern um Größenordnungen beschleunigt werden kann.
84

A
Software-Dokumentation
A.1. Das Master-Control-Programm
Das Master-Control-Programm (MCP) ist ein auf C++ basiertes allgemeines Experimentsteuerungsprogramm, das zu großen Teilen von Kilian Singer entwickelt wurde. Es wird zur Steuerung jedes Experiments der AG Schmidt-Kaler eingesetzt. Die Funktionalität des Programms lässt sich in drei Kategorien einteilen:
• Bereitstellung eines graﬁschen User-Interfaces (GUI) Das Master-Control-Programm benutzt die quelloﬀene Qt-Bibliothek, um ein ﬂexibles graﬁsches Interface zu erzeugen. Der Benutzer des Programms kann sehr schnell und einfach verschiedene Elemente, wie z.B. Tabs, Eingabefelder und Schaltﬂächen nach seinem Belieben erzeugen.
• Hardware-Interaktion Im Master-Control-Programm sind Klassen zur Ansteuerung verschiedener Hardwarekomponenten enthalten, die in den Experimenten der AG Schmidt-Kaler eingesetzt werden, z.B. EMCCD-Kameras oder NI-PCI-Karten.
• Laden einer .Dll-Datei Das Master-Control-Programm ist in der Lage, beliebige .Dll-Dateien zu laden, um seine Funktionalität zu erweitern und an ein speziﬁsches Experiment anzupassen. Es erkennt automatisch Variablen, Objekte und Funktionen, die in einer .Dll-Datei festgelegt werden. Diese lassen sich vom Benutzer aus einer Liste auswählen und, je nach Typ der Variable bzw. Typ der Rückgabe- und Eingabevariablen von Funktionen, automatisch als passendes graﬁsches Element in das User-Interface ei-
nbinden. So lassen sich graﬁsche Anwendungen in C++ erstellen, ohne GUI-Programmierung beherrschen zu müssen. Dll-Dateien, die zu den jeweiligen Experimenten gehören, werden traditionsgemäß Script.Dll genannt.
Abbildung A.1 veranschaulicht die Prozedur zur Erstellung von graﬁschen Elementen. Im Quelltext wird eine neue Klasse pump_s erstellt, in der verschiedene Variablen mit dem prop()-Makro, welches vom Master-Control-Programm zur Verfügung gestellt wird, deklariert werden. Der Ausdruck EXPORT in Zeile 1 ist nötig, damit die Klasse für das Master-Control-Programm sichtbar wird. Nach der Klassendeklaration
85

A. Software-Dokumentation

wird in Zeile 13 ein Objekt der Klasse deﬁniert. Die Variablen dieses Objekts können im User-Interface dann durch Rechtsklick → New Control hinzugefügt werden. Für Bool-Variablen erscheinen Kontrollkästchenen, Integer- und Double-Variablen können in Eingabefeldern geändert werden.

1 class EXPORT pump_s { 2 public: 3 prop(bool,pump729); 4 prop(bool,pumpToPlus); 5 prop(bool,useFull397); 6 prop(int,pump729plusCycles); 7 prop(int,pump729minusCycles); 8 prop(double,pumpToPlusMotorAngle
); 9 prop(double,
pumpToMinusMotorAngle); 10 prop(bool,adjustMotor); 11 };
12
13 EXPORT pump_s Gpump;

Gpump.pump729 Gpump.pumpToPlus
Gpump.useFull397 Gpump.pump729plusCycles 4 Gpump.pump729minusCycles 10 Gpump.pumpToToPlusMotorAngle 152.000 Gpump.pumpToMinusMotorAngle 240.000
Gpump.adjustMotor

Abbildung A.1.: Erstellung von GUI-Elementen durch Script.Dll-Code. Die im Quelltext (links) deklarierten Variablen können per Rechtsklick in das User-Interface des MasterControl-Programms (rechts) platziert werden.

A.2. Dokumentation der Kamera-Software
Am 22. Juni 2012 wurde eine neue Kamera-Software in das Master-Control-Programm integriert, welche gegenüber der alten Software einen deutlich erhöhten Funktionsumfang bietet. Die neue Software wurde mit dem Ziel entwickelt, möglichst viel Funktionalität, die zuvor in den Script.Dll-Dateien einzelner Experimente verstreut war, zu vereinen und außerdem selbst leicht erweiterbar zu sein, ohne Quelltext des MasterControl-Programms bearbeiten zu müssen. Folgende Klassen bilden die Basis des neuen Syst-
ems:
• Camera (AndorSDK.h) Diese Klasse ist die direkte Schnittstelle zur Hardware. Funktionsaufrufe werden direkt an den Andor-Treiber der Kamera weitergeleitet. Im Normalfall sollte es jedoch nicht nötig sein, Methoden aus dieser Klasse aufzurufen, da die CameraHelper -Klasse für einfache Benutzung ausgelegte Methoden bietet. Möchte man dennoch direkt auf Methoden der Camera-Klasse zugreifen, muss man beachten, dass diese bei Fehlern CameraExceptions erzeugen, welche unbedingt abgefangen werden müsse-
n.
86

A.2. Dokumentation der Kamera-Software
• Data2DPlotArray (Data2DPlotArray.h) Diese Klasse repräsentiert das graﬁsche Element, welches das Kamerabild anzeigt. Außerdem ist sie dafür zuständig, die verschiedenen Regions of Interest (ROIs) zu verwalten. Objekte dieser Klasse können durch Rechtsklick direkt im UserInterface des Master-Control-Programms platziert werden.
• Data1DPlotArray (Data1DPlotArray.h) Mithilfe dieser Klasse werden X/Y-Projektions-Graphen und ROI-FluoreszenzGraphen angezeigt. X/Y-Projektions-Graphen zeigen die Projektion des Kamerabildes auf die X- bzw. Y-Achse, während ROI-Fluoreszenz-Graphen die Summe des Fluoreszenzwertes aller Pixel innerhalb einer Region of Interest anzeigen.
• CCameraHelper (CameraHelper.h) Das Herzstück der neuen Kamera-Software. Diese Klasse stellt benutzerfreundliche und intelligente Methoden zur Steuerung der Kamera zur Verfügung. Darunter zählen z.B. der Video Modus, extern getriggerte sequenzielle Auslese von Bildern und automatische Ionendetektion. Außerdem beinhaltet diese Klasse alle für den Anwender nötigen GUI-Elemente.
• CameraImage, CameraImageList (AndorSDK.h) Von der Kamera im Video-Modus ausgelesene Bilder werden in CameraImageObjekten gespeichert, im Sequenzmodus ausgelesene Bilder in CameraImageListObjekten. In CameraImageList-Objekten sind mehrere CameraImages zusammengefasst. Beide Klassen beinhalten verschiedene Methoden zur Manipulation und Auswertung von Bildern.
Abbildung A.2 zeigt eine Zusammenstellung aller relevanten GUI-Elemente. Um den vollen Zugriﬀ auf eine Kamera zu erhalten, muss man lediglich wenige Zeilen in die Script.Dll einfügen:
1 #include "AndorSDK.h" 2 #include "Data2DPlotArray.h" 3 #include "CameraHelper.h"
4
5 EXPORT Camera iXon; 6 EXPORT Data2DPlotArray camImg(iXon.getXPixels(), iXon.getYPixels()); 7 EXPORT CCameraHelper camHelper(&iXon, &camImg);
In den folgenden Abschnitten wird auf die einzelnen Funktionalitäten der KameraSoftware näher eingegangen.
A. Hardware-Einstellungen
Zu den Hardware-Einstellungen zählen die Kontrolle des Shutters, des Kühlers und verschiedene Einstellungen zur Beeinﬂussung der Bildaufnahme. Die Software enthält eine automatische Shutter-Kontrolle, die den Shutter öﬀnet, sobald der Video-Modus oder
87

A. Software-Dokumentation

MasterControlProgram

Datei Help New Project Open Project Save Project Save As Save Log Save Log As Load Dll Reload Dll Full Rebuilt Refresh Gui Load Gui Only Add Gui Emergency Grid
Camera

Y-Projection Plot (Data1DPlotArray)

Camera Image (Data2DPlotArray)

Emulation Mode

camHelper.emulationMode

camHelper.emulateIons 2

Cooler

camHelper.enableCooler camHelper.desiredCoolerTemp -70
camHelper.GetCoolerTemp

Shutter

camHelper.autoShutterControl

X-Projection Plot (Data1DPlotArray) Count Plot (Data1DPlotArray)

camHelper.OpenShutter

camHelper.CloseShutter

Ion Detection

camHelper.doIonDetection

camHelper.ionDetectionIntegrateImages 20

camHelper.ionDetectionIterations 8

camHelper.numDetectedIonsGet

Image Control

camHelper.rotateCW camHelper.rotateCCW

camHelper.videoSubImg camHelper.sequenceSubImg

camHelper.hBinSize 1 camHelper.vBinSize 1

ROI Control camImg.addROI

camImg.removeROI

Hardware Settings camHelper.PrintCameraSettings
camHelper.baselineClamp camHelper.useOptimalShiftSpeeds camHelper.customVSSpeed 0 camHelper.customHSSpeed 0

camHelper.preAmp 0 camHelper.EMCCDGain 1
camHelper.videoExposureTime 0.05000 camHelper.sequenceExposureTime 0.00200

Video Mode camHelper.StartVideoModeThread camHelper.StopVideoModeThread

Abbildung A.2.: Zusammenstellung aller GUI-Elemente der Kamera-Software

Sequenzen gestartet werden und ihn wieder schließt, wenn das Programm geschlossen wird oder die Kamera 30 Sekunden lang nicht verwendet wird. Diese Funktion lässt sich über das Kontrollkästchen autoShutterControl aktivieren. Darüber hinaus exis-
88

A.2. Dokumentation der Kamera-Software

tieren die Schaltﬂächen OpenShutter und CloseShutter zur manuellen Kontrolle des Shutters.

Der Kühler wird über die Option enableCooler aktiviert. Mit ihm wird der EMCCDSensor auf die Temperatur gekühlt, die in desiredCoolerTemp eingetragen ist. Mit der Schaltﬂäche GetCoolerTemp lässt sich die momentane Temperatur überprüfen.

Die Geschwindigkeit, mit der Ladung auf dem CCD-Sensor verschoben wird, kann über die Optionen customVSSpeed für die vertikale und customHSSpeed für die horizontale Richtung eingestellt werden. Die eingegebene Zahl wählt zwischen mehreren verfügbaren Einstellungen. Welcher Einstellung welcher Geschwindigkeit entspricht, lässt sich mit der Schaltﬂäche PrintCameraSettings ausgeben. Möchte man die Geschwindigkeiten nicht manuell festlegen, kann man sie sich durch Aktivierung des Kontrollkästchens use-
OptimalShiftSpeeds automatisch bestimmen lassen.

Weitere Hardware-Optionen sind

baselineClamp

Auf die ausgelesenen Werte wird immer ein gewisser Basiswert dazuaddiert. Dem Andor-Manual zufolge sorgt diese Funktion dafür, dass dieser Basiswert konsistenter zwischen den Bildern einer Sequenz ist. Die genaue Wirkung dieser Option ist unklar.

preAmp

Einstellung des integrierten Vorverstärkers. Wie bei den Shift-Geschwindigkeiten wählt man hier mit der eingegebenen Zahl zwischen verschiedenen VorverstärkerEinstellungen. Die zugeordneten Verstärkungsfaktoren lassen sich mit der PrintCameraSettings-Funktion anzeigen. Messungen haben ergeben, dass die VorverstärkerEinstellung keinen Einﬂuss auf die Qualität der Hell/Dunkel-Unterscheidung von Ionen hat.

EMCCD-Gain Eine ganze Zahl zwischen 1 und 255, die den Verstärkungsfaktor des EMCCD-Chips einstellt

videoExposureTime Belichtungszeit pro Bild, die im Videomodus verwendet wird

sequenceExposureTime Belichtungszeit pro Bild im Sequenzmodus
hBinSize Fasst mehrere Pixel in horizontaler Richtung zu einem einzigen zusammen. Dies geschieht hardwareseitig und kann das Signal-/Rauschen-Verhältnis verbessern

89

A. Software-Dokumentation
vBinSize Fasst mehrere Pixel in vertikaler Richtung zu einem einzigen zusammen. Dies geschieht hardwareseitig und kann das Signal-/Rauschen-Verhältnis verbessern
rotateCW Rotiert das Bild im Uhrzeigersinn. Die Rotation wird softwareseitig auf dem Kontrollrechner durchgeführt
rotateCCW Rotiert das Bild gegen den Uhrzeigersinn. Die Rotation wird softwareseitig auf dem Kontrollrechner durchgeführt
B. Regions of Interest
Auf dem Kamerabild können beliebig viele Regions of Interest platziert werden. Das sind rechteckige Bereiche, die auf verschiedene Weise benutzt werden können. Beim Klick auf die camImg.addROI- bzw. camImg.removeROI-Schaltﬂächen werden neue Regionen hinzugefügt bzw. entfernt. Durch Linksklick auf die Rahmen im Kamerabild lassen sich die Dimensionen der Regionen verändern, die gesamte Region kann mithilfe der mittleren Maustaste verschoben werden. Auf die Koordinaten kann man im Quelltext folgender-
maßen zugreifen:
for(unsigned int i = 0; i < camImg.getNumROIs(); i++) { CRoi roi = camImg.getROI(i); cout << "ROI Koordinaten: (" << roi.xMin << "," << roi.yMin << "), (" << roi.xMax << "," << roi.yMax << ")" << endl;
}
Die Region mit dem Index 0 ist das SubImage. Durch Verwendung der Optionen videoSubImage bzw. sequenceSubImage wird die Kamera so eingestellt, nur den durch das SubImage markierten Bildbereich auszulesen. Dadurch wird die aufgenommene Datenmenge reduziert und Bilder können schneller hintereinander aufgenommen werden.
Die CameraImage-Klasse stellt die Methode CameraImage::SumInROI(const CRoi & roi) zur Verfügung, die die Fluoreszenzwerte aller in einer Region of Interest eingeschlossenen Pixel aufsummiert. Die Regionen werden außerdem für die automatische Ionendetektion genutzt.
C. Video-Modus
Beim Video-Modus werden fortlaufend Bilder aufgenommen und im Data2DPlotArray -Element auf dem GUI direkt angezeigt. Der Video-Modus lässt sich über die Schaltﬂächen Start- bzw. StopVideoModeThread an- bzw. ausschalten. Es lassen sich zusätzlich zur eigentlichen Bildanzeige noch X/Y-Projektions-Graphen und ROI-FluoreszenzGraphen einbinden. Diese müssen in die Script.Dll eingefügt werden durch
90

A.2. Dokumentation der Kamera-Software

1 #include "Data1DPlotArray.h"

2

3 EXPORT Data1DPlotArray camCntPlot1;

4 EXPORT Data1DPlotArray camCntPlot2;

5 EXPORT Data1DPlotArray camXProjPlot;

6 EXPORT Data1DPlotArray camYProjPlot;

7

8 class Init1DPlots {

9 public:

10 Init1DPlots() {

11

camHelper.SetPlotROI(1, 400, camCntPlot1);

12

camHelper.SetPlotROI(2, 400, camCntPlot2);

13

14

camHelper.SetXProjectionPlot(camXProjPlot);

15

camHelper.SetYProjectionPlot(camYProjPlot);

16 };

17 };

18

19 Init1DPlots init1dPlots; // Init1DPlots Konstruktor starten

Es wurden zunächst in den Zeilen 3-6 Objekte für die einzelnen Graphen deﬁniert. Dann wurde eine Klasse Init1DPlots deﬁniert, deren einziger Sinn darin besteht, Code beim Programmstart auszuführen. Das geschieht durch den Aufruf des Konstruktors bei der Initialisierung des init1dPlots-Objekts in Zeile 19. Im Konstruktor wird das CameraHelper-Objekt mit den einzelnen Graphen verbunden. Das erste Argument des SetPlotROI-Befehls ist die ROI-Nummer, das zweite Argument die Anzahl an Werten, die maxima-
l angezeigt werden soll. Es können prinzipiell beliebig viele ROIFluoreszenz-Graphen eingefügt werden. Möchte man aufgenommene Bilder auswerten oder manipulieren, kann man dies in der Script.Dll tun, ohne Änderungen am Quelltext des Master-Control-Programms durchführen zu müssen. Dafür stellt die CameraHelper -Klasse die WaitForNewImageAndPauseVideoMode() und ResumeVideoMode()-Methoden zur Verfügung. So lässt sich der Video-Modus für kurze Zeit pausieren, um auf dem momentanen Kamera-Bild Operatio-
nen durchführen zu können. Der folgende Codeabschnitt speichert das nächste aufgenommene Bild in einer Textdatei ab:
1 camHelper.WaitForNewImageAndPauseVideoMode();
2
3 CameraImage * img = camHelper.GetLastImage(); 4 img->SaveAsTxt("Bild.txt");
5
6 camHelper.ResumeVideoMode();

D. Sequenzen
Im Sequenzmodus ist die Bildaufname nicht kontinuierlich, sondern wird von einem externen Trigger gesteuert. Die Kamera speichert dann eine vorher deﬁnierte Anzahl von Bildern ab, die dann alle zusammen zum Rechner transferiert werden können. Dazu

91

A. Software-Dokumentation
gibt es in der CameraHelper-Klasse die StartTriggeredKineticSeries(int imageCount )- und ReadoutSequenceData()-Methoden, welche nach folgendem Beispiel benutzt werden können:
1 camHelper.StartTriggeredKineticSeries(imgCount);
2
3 // Triggersignale senden .... 4 // ..
5
6 // Wenn alle Triggersignale gesendet wurden, können Daten ausgelesen werden
7 CameraImageList * list = camHelper.ReadoutSequenceData();
8
9 // Auf einzelne Bilder der Sequenz zugreifen 10 CameraImage img; 11 list->ExtractImage(imageNum, img);

E. Emulationsmodus
Damit Softwarearbeiten durchgeführt werden können, wenn keine Kamera am Rechner angeschlossen oder wenn keine gefangenen Ionen vorhanden sind, wurde ein Emulationsmodus implementiert. Dieser lässt sich mit dem emulationMode-Kontrollkästchen auf dem GUI aktivieren. Mit dem Eingabefeld emulateIons kann die gewünschte Ionenzahl eingestellt werden. Der Emulationsmodus ist sowohl für den Video- als auch für den Sequenzmodus implementiert worden.

F. Ionendetektion

Die neue Software verfügt über einen Algorithmus, der im Video-Modus automatisch Ionen detektieren kann. Dafür muss lediglich die doIonDetection-Option aktiviert werden. Gefundene Ionen werden dann im Kamerabild rot umrandet, die Anzahl an gefundenen Ionen wird im Feld numDetectedIonsGet ausgegeben. Der Algorithmus arbeitet intern mit einer Überlagerung der letzten aufgenommenen Kamerbilder. Für jedes neue Kamerabild werden die einzelnen Pixel des überlagerten Bildes nach der Vorschrift

n−1

1

pneue Überlagerung = pÜberlagerung · n + pneues Kamerabild · n

aktualisiert, mit p dem Fluoreszenzwert eines Pixels. Die Variable n ist ein Maß dafür, wieviele vergangene Bilder in die Überlagerung eingehen sollen. Diese Variable entspricht der GUI-Variable ionDetectionIntegrateImages. Je höher der Wert der Variable eingestellt ist, desto stabiler wird der Algorithmus gegen kurze Fluktuationen im Kamerabild. Gleichzeitig wird aber auch mehr Zeit benötigt, um neu gefangene Ionen zu erkennen. Nachdem das überlagerte Kamerabild berechnet wurde, wird für jede pla-
tzierte Region of Interest folgender Algorithmus durchlaufen:

92

A.2. Dokumentation der Kamera-Software

• Berechne den Mittelwert p und die Standardabweichung σp der Werte aller Pixel des überlagerten Bildes.

• Markiere alle Pixel, deren Wert über p + 3σp liegt

• Wiederhole die letzten beiden Schritte mehrmals, wobei markierte Pixel ignoriert werden sollen. Die Anzahl an Wiederholungen kann über die GUI-Variable ionDetectionIterations eingestellt werden.

Sofern in einer Region of Interest genügend nichtbeleuchtete Pixel enthalten sind, kann durch dieses Verfahren eﬀektiv Rauschen und Ionensignal getrennt werden. Der zuletzt berechnete Mittelwert p und die zuletzt berechnete Standardabweichung σp beziehen sich dann ausschließlich auf nichtbeleuchtete Pixel. Alle Pixel, deren Wert oberhalb p+5σp liegt, werden dann Ionen zugeordnet. Die Zuordnung auf einzelne Ionen geschieht nach folgendem Verfahren:

• Suche den Pixel mit dem höchsten Fluoreszenzwert

• Finde alle benachbarten Pixel, deren Wert über p + 5σp ist

• Alle gefundenen Pixel werden markiert und einem Ion zugeordnet. Wiederhole dann die letzten beiden Schritte, wobei markierte Pixel ignoriert werden, bis keine Pixel mehr verfügbar sind.

Um in der Praxis bestmögliche Ergebnisse zu erzielen, sollte man eine große Region of Interest platzieren, die viele dunkle Pixel, aber kein Laser-Streulicht beinhaltet. Sind Ionen sehr nah beieinander oder unterschiedlich hell, so kann es notwendig sein, mehrere Regionen zu setzen. Dabei sollten sich die einzelnen Regionen nicht überlappen, sonst können Ionen doppelt gezählt werden. Ist die Option videoSubImg aktiviert, müssen sich die Regionen komplett innerhalb des SubImages beﬁnden.

Die Daten der detektierten Ionen werden in CIon-Objekten abgespeichert. Über die CIon -Objekte erhält man Zugriﬀ auf die einzelnen Pixel, die den Ionen zugeordnet wurden. Man kann sich z.B. auf einfache Art und Weise die Positionen aller detektierten Ionen des nächsten Kamerabildes ausgeben lassen:

1 double x,y;

2 camHelper.WaitForNewImageAndPauseVideoMode();

3

4 for(unsigned int i = 0; i < camHelper.GetNumIons(); i++) {

5

camHelper.GetIon(i)->CalculatePosition(x,y);

6

cout << "Ion " << i+1 << " Position: (" << x << "," << y << ")" <<

endl;

7}

8

9 camHelper.ResumeVideoMode();

93

A. Software-Dokumentation
A.3. Struktur der Mikrofallen-Script.Dll
Die Weiterentwicklung des Script.Dll-Codes des Mikrofallen-Experiments war eine der Hauptaufgaben dieser Diplomarbeit. Bei der Programmierung waren besonders folgende Gesichtspunkte wichtig:
• Flexibilität Das Mikrofallenexperiment hat als Ziel, die physikalen Grundlagen zum Aufbau eines Quantencomputers zu erforschen. Dazu ist es nötig, alle Aspekte von auftretenden Phänomenen genau zu untersuchen. Die Software muss deshalb einerseits in der Lage sein, sehr grundlegende Messungen, bei denen alle Parameter vom Benutzer kontrolliert werden können, durchzuführen, andererseits soll sie bei komplexen Messungen aber auch möglichst viele Aufgaben automatisch erledigen.
• Wartbarkeit Das Softwaresystem wird ständig von mehreren Personen erweitert, um den aktuellen Anforderungen eines Experiments gerecht zu werden. Dafür ist es besonders wichtig, dass der Quelltext gut dokumentiert, übersichtlich und leicht verständlich ist.
• Einfachheit Es soll auch unerfahrenen Programmierern möglich sein, innerhalb weniger Minuten neue experimentelle Sequenzen zu programmieren und auszuführen.
Besonders das Schreiben von gut dokumentiertem Quelltext nimmt in der Praxis eine Menge Zeit in Anspruch und konnte deshalb oft nur unzureichend realisiert werden. Gerade, wenn während eines Messtages schnelle Änderungen notwendig sind, fehlt oft die Zeit, um hochwertigen Quelltext zu schreiben.
Die Funktionalität der Script.Dll lässt sich in drei Kategorien einteilen:
• Erstellung von experimentellen Pulssequenzen Es werden die für die Hardware nötigen Daten erzeugt und transferiert.
• Auswertung von Messergebnissen Darunter fällt die Auswertung von Kamerabildern, das Speichern und das Anzeigen der Daten auf sinnvolle Art und Weise.
• Automatisierung Dieser Punkt wird besonders in Zukunft für komplexere Messungen wichtig werden. Damit sich der Experimentator auf das Wesentliche konzentrieren kann, sollten möglichst viele Parameter des Experiments automatisch bestimmt und regelmäßig zur Kompensation von Drifts korrigiert werden.
94

A.3. Struktur der Mikrofallen-Script.Dll
Zur Erstellung von Pulssequenzen wurden die CMainSequence-Klasse sowie die CSequenceItem-Klasse entwickelt. Die CMainSequence-Klasse fasst Sequenzen einzelner Hardware-Teile (Ni-Karten, VFG, Fallen-Spannungsversorgung, Kamera) des Experiments zusammen und kümmert sich um den synchronen Ablauf. Der eigentliche Inhalt der Sequenzen wird durch Funktionsaufrufe geregelt, die in zuvor erstellten CSequenceItems festgelegt sind. Die Auswertung wird durch verschiedene ResultProcessor-Klassen realisiert, d-
ie darauf spezialisiert sind, Rohdaten einer Messung auf eine bestimmte Weise aufzubereiten und mithilfe von Gnuplot Graphen auszugeben. Zur Verwaltung von automatischen Messungen dient die CAutoMeasurementSchedulerKlasse. Damit die Durchführung von automatischen Messungen nicht mit vom Benutzer gestarteten Messungen kollidiert, wurde die CMainSequenceScheduler-Klasse entwickelt, welche alle existierenden CMainSequence-Objekte verwaltet. So können Messungen in eine Warteschleife eingereiht, laufen-
de Messungen unterbrochen und zu einem späteren Zeitpunkt wieder fortgesetzt werden. Von den beiden Scheduler-Klassen existiert im Programm jeweils nur genau ein Objekt, von allen anderen Klassen können mehrere Objekte existieren. Abbildung A.3 zeigt die wichtigsten Klassen der Script.Dll und ihre Beziehungen zueinander. In den folgenden Kapiteln wird genauer auf die einzelnen Teilaspekte der Software eingegangen.
A. Durchführung einer Messung
Programmierung einer neuen Sequenz
Messungen sind im Script.Dll-Quelltext in der Datei ExperimentsNew.cpp deﬁniert. Um eine neue Messung zu erstellen, muss lediglich eine neue Funktion eingefügt werden. Das Schema, nach dem eine solche Funktion aufgebaut ist, wird nun anhand einer simplen Spektroskopiesequenz erklärt: In dieser Sequenz soll die Frequenz eines akustooptischen Modulators variiert werden, der die Laserfrequenz des Lasers bei 729 nm ändert. Für jede eingestellte Frequenz wird dann folgende Prozedur durchgeführt:
1. Ein Ion wird durch Einstrahlung des Lasers bei 397 nm dopplergekühlt.
2. Durch optisches Pumpen wird das Ion im Spin-Up-Zustand initialisiert.
3. Es wird ein Laserpuls mit dem 729 nm-Laser eingestrahlt.
4. Dann wird wieder der Laser bei 397 nm eingeschaltet, während gleichzeitig ein Kamerabild aufgenommen wird. War die Anregung des 729 nm-Lasers erfolgreich, so beﬁndet sich das Ion im 3D5/2-Zustand und emittiert kein Fluoreszenzlicht mehr, es ist dunkel. War die Anregung nicht erfolgreich, ist es hell.
Diese Sequenz wird dann mehrmals wiederholt, um die Anregungswahrscheinlichkeit des 729 nm-Pulses herauszubekommen. Der Quelltext zur Deﬁnition des gesamten Experiments lautet:
95

A. Software-Dokumentation

benutzt
CAutoMeasurementResultProcessor
Speichert den Verlauf von automatisch gemessenen Größen ab.

CResultProcessor (abstract)
Stellt grundlegende Methoden zum Speichern, Einlesen, Anzeigen und Aufbereiten von Messdaten zur Verfügung.

CTransportRampProcessor
Gibt den Spannungsverlauf an den Fallensegmenten für Transportmessungen aus.

CProbResultProcessor

reiht Sequenzen ein

CAutoMeasurement
Gruppiert Methoden und Variablen, die für die automatische Messung einer einzelnen Größe notwendig sind.
CAutoMeasurementScheduler
Verwaltet Messungen, die automatisch durchgeführt werden sollen und reiht sie in den CMainSequenceScheduler ein.
CMainSequenceScheduler
Verwaltet mehrere CMainSequence-Objekte und sorgt dafür, dass nur eine Messung zur selben Zeit ausgeführt wird.

CRawDataResultProcessor

CFluoResultProcessor CHistoResultProcessor C2DHistoResultProcessor

laden Daten von

CSVMHistoResultProcessor
Werten Rohdaten eines CMeasurementResultObjekts aus, speichern sie ab und zeigen Grafiken mithilfe von Gnuplot an.

C2DHistogram
Datenstruktur für ein zweidimensionales Histogramm

CMainSequence
Interagiert mit Hardware; nimmt Messpunkte auf indem es durch CSequenceItems iteriert. Leitet Messergebnisse an ResultProcessors weiter
CMeasurementResult
Datenstruktur, die alle Kamerabilder eines Messpunktes und die summierte Fluoreszenz der Regions of Interests abspeichert.

CSequenceItem
Speichert einen Funktionszeiger und Parameter, auf die die Funktion zugreifen kann. Die Funktion wird von CMainSequence aufgerufen und ruft die nötigen Hardwarebefehle für einen Sequenzteil auf.
SignalSlot
CSeqParam
Ein Parameter eines CSequenceItems; Intern wird wahlweise der Wert des Parameters oder ein Zeiger auf einen Wert abgespeichert.

CChunkResult

CCountCycleResult

CDetectionBin

Legende:
A A
A

B Generalisierung: A erbt von B
B Aggregation: A ist Bestandteil von B
Komposition: B A ist untrennbarer Bestandteil von B; Die Existenz von A wird
vollständig von B gesteuert

Abbildung A.3.: Klassendiagramm der Script.Dll.

96

A.3. Struktur der Mikrofallen-Script.Dll
1 EXPORT void Do729Spec(double startFreq, double endFreq, double stepFreq) 2{ 3 // Eine neue Sequenz vom MainSeqScheduler anfordern 4 CMainSequence * MainSeq = GMainSeqScheduler.CreateSequence("729
Spectroscopy");
5
6 // Einstellungen setzen 7 MainSeq->SetPlotData(true); // Hell/Dunkel-Wahrscheinlichkeiten
anzeigen 8 MainSeq->SetScanningValues(startFreq, endFreq, stepFreq);
9
10 // SequenceItems generieren 11 AddLaserInit(*MainSeq); 12 AddDopplerCool(*MainSeq, Gtiming.dopplerCoolTime); 13 AddSpinInitialization(*MainSeq); 14 Add729Pulse(*MainSeq,Gspec729.pulseTime,Gspec729.power,MainSeq->
GetSignalSlot(),0.0,true); 15 AddDetection(*MainSeq, Gfluomeasurement.satCount, Gscan.DoStrongCool,
DETECTION_WITH_866 + DETECTION_ADD_QUENCH);
16
17 // Sequenz in Warteschlange einreihen 18 GMainSeqScheduler.QueueExecution(MainSeq); 19 }
• Das EXPORT-Keyword in Zeile 1 sorgt dafür, dass die Funktion direkt auf dem graﬁschen Interface des Master-Control-Programms platziert werden kann. Die übergebenen Parameter legen fest, in welchen Grenzen und mit welcher Schrittweite die Frequenz des akustooptischen Modulators variiert werden soll.
• In Zeile 4 wird vom global deﬁnierten CMainSequenceScheduler-Objekt eine neue Sequenz mit Namen „729 Spectroscopy“ angefordert. Die Methode CreateSequence erstellt eine neue CMainSequence und gibt einen Zeiger auf diese zurück. Die Erstellung einer CMainSequence auf andere Art ist nicht möglich. So wird gewährleistet, dass alle Hardwarezugriﬀe vom globalen CMainSequenceScheduler-Objekt synchronisiert werden können.
• In Zeile 7 wird eine Einstellung gesetzt, die bewirkt, dass während der Messung die Hell/Dunkel-Wahrscheinlichkeiten in einem Graphen ausgegeben werden. Es gibt zahlreiche weitere Darstellungsmöglichkeiten der Ergebnisse, diese werden in Abschnitt B näher erläutert.
• In Zeile 8 werden die Grenzen und die Schrittweite der Frequenz des akustooptischen Modulators an das CMainSequence-Objekt übergeben.
• In den Zeilen 11-15 werden dann verschiedene Add-Befehle aufgerufen, um die Pulssequenz im Baukastenprinzip zusammenzusetzen. Alle Add-Befehle beﬁnden sich in der Datei sequenceToolkit.h. Von jedem Add-Befehl existieren zwei Überladungen: Die erste Überladung wird in dieser Funktion bei der Erstellung einer Sequenz aufgerufen - sie erstellt ein neues CSequenceItem-Objekt und über-
97

A. Software-Dokumentation
gibt es an ein CMainSequence-Objekt, das als Argument mitgeliefert wird. Das CSequenceItem-Objekt besitzt einen Funktionszeiger, der auf die zweite Überladung des Add-Befehls zeigt. Dieser Funktionszeiger wird später durch das CMainSequence-Objekt aufgerufen, um die eigentlichen Hardwarebefehle zu erstellen. Besonders wichtig für die Sequenz ist hier der Aufruf des 729 nm-Pulses:
Add729Pulse(CMainSequence & parentSeq, const CSeqParam & pulseTime , const CSeqParam & power, const CSeqParam & freq, const CSeqParam & phase, const CSeqParam & setconfig);
Für die Frequenz wurde hier MainSeq->GetSignalSlot() als Argument verwendet. Das führt dazu, dass die Laserfrequenz während der Messung nach den Parametern des SetScanningValues-Aufrufs variiert wird. Der Typ der einzelnen Parameter, CSeqParam, wurde entwickelt, um nach Wahl Variablen oder Zeiger übergeben zu können. Letztere können während der Laufzeit des Experiments nachträglich geändert werden, während bei der Übergabe von Variablen Kopien erstellt werden, auf die der Benutzer nicht mehr zugre-
ifen kann. Die Übergabe von Zeigern ist z.B. sinnvoll für Laserfrequenzen, die zwischendurch von automatischen Messungen nachgemessen werden können. Die CSeqParam-Klasse deﬁniert zur einfachen Benutzen verschiedene Konstruktoren und Typcast-Operatoren der Typen double, int, bool und string, sodass diese Typen implizit in CSeqParam-Objekte umgewandelt werden können und umgekehrt.
• Nachdem das Zusammensetzen der Sequenz abgeschlossen ist, wird in Zeile 18 dem globalen CMainSequenceScheduler-Objekt mitgeteilt, dass es die Sequenz in seine Warteschlange einreihen soll. Sie wird dann ausgeführt, sobald alle momentan laufenden Sequenzen abgeschlossen sind. Als optionalen weiteren Parameter kann man hier zusätzlich einen Funktionszeiger auf eine ExecuteFunction angeben.
Verwaltung mehrerer Sequenzen
Die CMainSequenceScheduler-Klasse ist in der Lage, drei CMainSequence-Objekte gleichzeitig zu verwalten (Die Anzahl kann bei Bedarf durch Änderung der Konstante SCHEDULER_MAX_NUM_SEQUENCES erhöht werden). Beim Anfordern einer neuen CMainSequence durch die CreateSequence-Methode werden zunächt bereits vollendete Messungen gelöscht, um Platz freizugeben. Ist bereits eine Messung im Gange, so werden die weiteren verfügbaren Plätze aufgefüllt. Sind alle Plätze belegt, gibt die CreateSequence-Methode e-
inen NULL-Pointer zurück. Die Sequenzen können über das GUI verwaltet werden (Abbildung A.4). Es wird einerseits der Status aller Messungen angezeigt, andererseits lassen sie sich auch direkt pausieren oder beenden. Automatische Messungen werden immer zuerst in den dritten Sequenzplatz gelegt, um Kollisionen zwischen automatischen und manuellen Messungen zu vermeiden. Mit den SaveResults -Schaltﬂächen lassen sich die Messergebnisse des jeweiligen Scans auf dem Gruppenlaufwerk abspeichern. Die Remo-
veSeq-Schaltﬂächen löschen Messungen aus der Liste
98

A.3. Struktur der Mikrofallen-Script.Dll

und schließen alle oﬀenen Gnuplot-Fenster, die mit der jeweiligen Messung verbunden waren.

Sequence Scheduler GMainSeqs.seq1NameGet

729PulseWidthScan on G

GMainSeqs.seq1StatusGet paused

GMainSeqs.seq2NameGet 729Spec on Gcarrier

GMainSeqs.seq2StatusGet executing

GMainSeqs.seq3NameGet AutoHistogram

GMainSeqs.seq3StatusGet finished

GMainSeqs.seq1Pause

GMainSeqs.RemoveSeq1

GMainSeqs.SaveResultSeq1

GMainSeqs.seq2Pause

GMainSeqs.RemoveSeq2

GMainSeqs.SaveResultSeq2

GMainSeqs.seq3Pause

GMainSeqs.RemoveSeq3

GMainSeqs.SaveResultSeq3

GMainSeqs.PauseAll

GMainSeqs.ExitRunningSequence

GMainSeqs.ExitAll

Abbildung A.4.: GUI-Elemente zur Steuerung des CMainSequenceSchedulers. Hier wurde ein Pulslängenscan mit dem 729 nm-Laser pausiert, um eine Spektroskopiesequenz einzuschieben.

ExecuteFunctions
Der Sinn von ExecuteFunctions wird deutlich, wenn man die gesamte Struktur einer Messung am Mikrofallenexperiment betrachtet (Abbildung A.5). Eine Messung besteht aus mehreren Messpunkten, wobei für jeden Messpunkt der Parameter, der variiert wird, einen anderen Wert hat. Dieser Parameter wird SignalSlot genannt. Für das Setzen des SignalSlots und Wiederholen der Messungen ist die ExecuteFunction verantwortlich. Wird keine eigene ExecuteFunction angegeben, kommt die DefaultExecuteFunc zum Einsatz.-
 Diese stellt drei verschiedene Arten von Messungen zur Verfügung, die für den Großteil der Experimente bereits ausreichend sind:
• Der Standardscan Hier werden vom Benutzer ein Startwert, Endwert und eine Schrittweite vorgegeben. Beim ersten Messpunkt wird der SignalSlot auf den Startwert gesetzt, für alle weiteren Punkte wird die Schrittweite dazuaddiert, bis der Endwert erreicht ist. Die Parameter werden durch den oben verwendeten Aufruf CMainSequence:: SetScanningValues eingestellt.
• Der CenterScan Hier müssen ein Startwert, eine Schrittweite und eine Scan-Breite vorgegeben werden. Beim ersten Messpunkt wird der SignalSlot wie beim Standardscan auf den Startwert gesetzt, dann werden aber abwechselnd mit steigendem Abstand auf der linken und der rechten Seite des Startwertes Messpunkte aufgenommen, bis die Scan-Breite erreicht ist. Diese Messung ist besonders sinnvoll, um Größen zu bestimmen, die bereits ungefähr bekannt sind. So kann die Umgebung um den vermuteten Wert schne-
ll untersucht werden. Der CenterScan lässt sich durch den Aufruf CMainSequence::SetCenterScan aktivieren.

99

gesteuert durch ExecuteFunction

A. Software-Dokumentation
Messpunkte Chunks

SignalSlot

generiert durch MainSequence::Execute

CountCycles ...

Postselection Cycle

generiert durch Add-Funktionen

SequenceItems
Abbildung A.5.: Vollständige Struktur einer Messsequenz
• Der PseudoScan Hier wird ein fester Wert für den SignalSlot vorgegeben. Die Messpunkt wird dann ständig mit genau diesem Wert wiederholt, bis der Benutzer die Messung abbricht. Der PseudoScan wird hauptsächlich während Justagearbeiten verwendet, um z.B. Rabifrequenzen zu maximieren. Er lässt sich durch den Aufruf CMainSequence:: SetPseudoScan aktivieren. Außerdem kann durch Setzen der globalen Variable Gfluoemasurement.DoPseudoScan ein Standard- oder CenterScan in einen PseudoScan umgewandelt we-
rden.
Abbildung A.6 zeigt zur Illustration einen Auszug aus der DefaultExecuteFunc. Jede ExecuteFunction wird vom globalen CMainSequenceScheduler-Objekt in einem eigenen Thread gestartet. Der übergebene Parameter ist ein Zeiger auf die gerade ausgeführte CMainSequence. Die Variablen seq->mStopSequence und seq->mPauseSequence werden vom CMainSequenceScheduler-Objekt gesetzt, um zu signalisieren, ob eine Messung gestoppt oder pausiert werden muss. Ist eine von beiden Variablen gesetzt, wird das seq
100

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:24.084Z
- **Text Length:** 187324 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
