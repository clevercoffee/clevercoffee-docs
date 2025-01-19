---
title: Lelit PL41EM / PID-Only
---

# Lelit PL41EM / PID-Only

<!-- ## Bestellliste

*todo* -->

<!-- markdown-link-check-disable -->

## Trockenaufbau

Auf dem Bild unten seht ihr den von mir vorbereiteten Trockenaufbau, den ich vor dem Einbau getestet habe. Wie hier im Handbuch ausgiebig erklärt, habe ich die Terminals an die Platine des NodeMCU gelötet, die Software aufgespielt, hitzebeständige Litzen an den Temperatursensor gelötet und mit Schrumpfschlauch versehen, das Display (vorläufig) angeschlossen, das Netzteil vorbereitet und das Relais angeschlossen und getestet. Wichtig war für mich vor dem Einbau, dass die Softwareupdates over-the-air funktionieren, sodass ich bei zukünftigen Updates die Maschine öffnen muss. Als das alles zufriedenstellend funktionierte, habe ich mich an den Einbau in die Maschine gemacht.

![](/img/bauanleitungen/lelit-pl41em/IMG_1454.jpeg)

## Einbauschritte

### Vorbereitung der Maschine

Zuerst muss die Maschine natürlich vom Strom getrennt und der Wassertank entfernt werden.

![](/img/bauanleitungen/lelit-pl41em/IMG_1451.jpeg)

Da die Maschine insgesamt recht kompakt und im Inneren dementsprechend wenig Platz für alle PID-Komponenten ist, habe ich mich entschieden, den leeren Raum zwischen Wassertank und Front der Maschine zu verwenden und alle Komponenten dort mit doppelseitigem wärmeleitenden Klebeband zu befestigen. Der Vorteil dieser Anbringung ist, dass die Komponenten weit genug entfernt vom warmen Kessel liegen und ihre Abwärme über die metallische Front der Maschine abgeben können. Der Nachteil allerdings ist, dass eine spätere Fehlersuche nur sehr schwierig ist, da man die Komponenten kaum erreicht und man schlimmstenfalls Platine, Relais und Netzteil komplett ausbauen muss, um eventuell auftretende Fehler zu finden.

![](/img/bauanleitungen/lelit-pl41em/IMG_1453.jpeg)

Um an das Innere der Maschine zu gelangen, müssen die beiden Schrauben links und rechts neben der Aussparung für die Wasserschläuche herausgedreht und die Tassenablage vorsichtig abgenommen werden. Dabei sollte man natürlich darauf achten, dass die Schläuche nicht durch die teilweise sehr scharfen Metallkanten beschädigt werden.

![](/img/bauanleitungen/lelit-pl41em/IMG_1452.jpeg)

Ist die Tassenablage entfernt, habt ihr das Innere der Maschine mit Pumpe, Kessel, Elektrik, etc. vor euch und der eigentliche Einbau kann beginnen.

![](/img/bauanleitungen/lelit-pl41em/IMG_1455.jpeg)

### Netzteil

Um das System mit Strom zu versorgen, müssen Außen-, Neutral- und Schutzleiter der Maschine angezapft werden. Zur besseren Übersicht habe ich mir analog zu den Standardfarben hitzebeständige 1,5mm²-Litzen in braun, blau und grün-gelb gekauft und damit das Netzteil in der Maschine versorgt.

![](/img/bauanleitungen/lelit-pl41em/IMG_1457.jpeg)
![](/img/bauanleitungen/lelit-pl41em/IMG_1456.jpeg)

#### Schutzleiter

Die Erdung ist innerhalb der Maschine direkt am Kessel zu finden.
![](/img/bauanleitungen/lelit-pl41em/IMG_1458.jpeg)

Mit einer Ratsche und einem Inbusbit plus Verlängerung habe ich diese Schraube und die dazu passende Mutter am Brühkopf gelöst und einen passenden Kabelschuh auf die grün-gelbe Litze gecrimpt.

![](/img/bauanleitungen/lelit-pl41em/IMG_1459.jpeg)
![](/img/bauanleitungen/lelit-pl41em/IMG_1460.jpeg)

Diesen Kabelschuh habe ich dann auf die Schraube geschoben und sie wieder am Kessel befestigt.
![](/img/bauanleitungen/lelit-pl41em/IMG_1461.jpeg)
![](/img/bauanleitungen/lelit-pl41em/IMG_1462.jpeg)

#### Außen- und Neutralleiter

Ich habe mich entschieden, die Stromversorgung für das PID-System hinter dem Hauptschalter der Maschine abzugreifen, sodass das System mit der Maschine an- und wieder ausgeschaltet wird. Die Ausgänge des Schalters sind die beiden _unteren_ Anschlüsse. Um sie anzuschließen habe ich im ersten Schritt Kabelschuhe an eine blaue und eine braune 1,5mm²-Litze gecrimpt.

Da die Ausgänge des Schalters als Flachstecker ausgeführt sind, habe ich sie jeweils mit Flachsteckerverteilern versehen und die zum Netzteil führenden Litzen sowie die Stecker, die ursprünglich angeschlossen waren und den Rest der Maschine mit Strom versorgen, aufgesteckt.

![](/img/bauanleitungen/lelit-pl41em/IMG_1463.jpeg)
![](/img/bauanleitungen/lelit-pl41em/IMG_1465.jpeg)
![](/img/bauanleitungen/lelit-pl41em/IMG_1467.jpeg)
![](/img/bauanleitungen/lelit-pl41em/IMG_1468.jpeg)

#### Kürzen der Litzen

Im letzten das Netzteil betreffenden Schritt habe ich die drei zum Netzteil führenden Litzen auf die endgültige Länge eingekürzt, mit blauen Kabelschuhen versehen und am Netzteil angeschlossen.

![](/img/bauanleitungen/lelit-pl41em/IMG_1476.jpeg)
![](/img/bauanleitungen/lelit-pl41em/IMG_1477.jpeg)
![](/img/bauanleitungen/lelit-pl41em/IMG_1478.jpeg)
![](/img/bauanleitungen/lelit-pl41em/IMG_1479.jpeg)

#### Test und Prüfen der Ausgangsspannung

Um den Anschluss des Netzteils zu testen, habe ich die Kaffeemaschine wieder angesteckt, angeschaltet, und mit dem Multimeter die Spannung am Ausgang des Netzteils gemessen. Solltet ihr es nicht schon vorher im Rahmen eures Trockenaufbaus überprüft haben, könnt ihr die Ausgangsspannung des Netzteils mithilfe des Drehpotentiometers auf 5V einstellen.

![](/img/bauanleitungen/lelit-pl41em/IMG_1473.jpeg)
![](/img/bauanleitungen/lelit-pl41em/IMG_1472.jpeg)

### Display

Um das Display anzuschließen, habe ich mir von einer Rolle Flachbandkabel die passende Länge (ca. 30--40cm) abgetrennt, vier zusammenhängende Litzen abgelöst, jeweils an einem Ende mit Dupont-Buchsen versehen und diese vier Buchsen in das passende Vierergehäuse geschoben. Hierbei sollte man natürlich auf die korrekte Reihenfolge achten, sodass man sich nicht mit Kabeldrehern an der Platine behelfen muss.

![](/img/bauanleitungen/lelit-pl41em/IMG_1482.jpeg)
![](/img/bauanleitungen/lelit-pl41em/IMG_1483.jpeg)
![](/img/bauanleitungen/lelit-pl41em/IMG_1484.jpeg)
![](/img/bauanleitungen/lelit-pl41em/IMG_1485.jpeg)
![](/img/bauanleitungen/lelit-pl41em/IMG_1486.jpeg)

### Vorbereitung Relais

Um das Relais vorzubereiten, müssen in diesem Schritt lediglich die Litzen (ich habe mich für schwarz und blau entschieden) eingekürzt und mit blauen Flachsteckern versehen werden. Der Verteiler, der auf dem Bild an der schwarzen Litze zu sehen ist, ist im Einbau nicht nötig.

![](/img/bauanleitungen/lelit-pl41em/IMG_1480.jpeg)
![](/img/bauanleitungen/lelit-pl41em/IMG_1481.jpeg)

### Anbringen der Komponenten in der Maschine

Um die Komponenten in der Maschine anzubringen, habe ich zuerst doppelseitiges, wärmeleitendes Klebeband an Relais und Netzteil angebracht.

![](/img/bauanleitungen/lelit-pl41em/IMG_1487.jpeg)
![](/img/bauanleitungen/lelit-pl41em/IMG_1488.jpeg)

Da diese Art des Einbaus im Freiraum zwischen Wassertank und Front der Maschine es kaum erlaubt, nach dem Anbringen noch Kabel an- oder abzuschließen oder überhaupt gut Relais, NodeMCU oder Netzteil zu erreichen, sollte man sich an dieser Stelle sicher sein, dass alle Verbindungen stabil sind, es gar keinen bis kaum Kabelsalat gibt und dass der Aufbau zufriedenstellend funktioniert. Wenn man auf Nummer sicher gehen will, kann man natürlich an dieser Stelle noch einmal einen Test vornehmen, die Espressomaschine anschalten, prüfen, ob das Display des NodeMCU sich anschaltet und ob die Messung des Temperatursensors sinnvoll erscheint.

Ist man sich sicher, dass alles funktioniert, können die Komponenten jetzt in sicherem Abstand voneinander in den Freiraum geklebt und die Kabel verlegt werden. Das Displaykabel sollte natürlich (vorerst) nach außen führen, die Anschlüsse des Relais und der Temperatursensor nach innen in die Maschine.

![](/img/bauanleitungen/lelit-pl41em/IMG_1489.jpeg)
![](/img/bauanleitungen/lelit-pl41em/IMG_1490.jpeg)
![](/img/bauanleitungen/lelit-pl41em/IMG_1493.jpeg)

### Thermostat und Temperatursensor

Um den Temperatursensor am Kessel zu fixieren, habe ich zuerst die am 94°-Thermostat angeschlossenen Kabel gelöst und es mit einem 17er-Schlüssel ausgeschraubt. Darunter kommt ein M4-Gewinde zum Vorschein.

![](/img/bauanleitungen/lelit-pl41em/IMG_1495.jpeg)
![](/img/bauanleitungen/lelit-pl41em/IMG_1494.jpeg)
![](/img/bauanleitungen/lelit-pl41em/IMG_1496.jpeg)

In dieses Gewinde habe ich erst einmal locker eine M4-Schraube mit einer Unterlegscheibe geschraubt. Um den Temperatursensor selbst vorzubereiten, habe ich großzügig wärmeleitenden Kleber auf eine Unterseite gegeben, ihn unter die Unterlegscheibe geschoben und vorsichtig solange die Schraube angezogen, bis der Sensor nicht mehr verrutschte. Dafür bietet es sich an, sich noch ein, zwei helfende Hände zu suchen, um gleichzeitig Sensor, Unterlegscheibe und Schraubendreher unter Kontrolle zu halten. Es ist natürlich sehr wichtig, die Schraube nicht zu fest anzuziehen, um den Sensor nicht zu beschädigen.

![](/img/bauanleitungen/lelit-pl41em/IMG_1499.jpeg)
![](/img/bauanleitungen/lelit-pl41em/IMG_1498.jpeg)

### Anschluss Relais

Der Anschluss des Relais besteht nun einfach daraus, die beiden vom Thermostat abgesteckten Buchsen (eine ist eine einfache Buchse, die andere ist ein Verteiler) auf die Flachstecker der Ausgangslitzen des Relais zu stecken. Welchen Ausgang des Relais man mit welchem Stecker verbindet, ist an dieser Stelle egal, da das Relais auf Anweisung unabhängig von irgendwelcher Polung einfach eine Verbindung zwischen seinen beiden Ausgängen herstellt.

![](/img/bauanleitungen/lelit-pl41em/IMG_1500.jpeg)

### Einbau Schutzplatte

Wenn alles angeschlossen und man sich vom korrekten Funktionieren des ganzen Systems überzeugt hat, kann die Tassenablage wieder vorsichtig auf die Maschine gesetzt werden.

![](/img/bauanleitungen/lelit-pl41em/IMG_1504.jpeg)

Um die nun im inneren der Maschine frei liegende Elektronik zu schützen, habe ich eine [Abdeckplatte](/../../3d-designs/lelit_schutzplatte.scad)[^1] entworfen und gedruckt. Sie lässt sich mittels der Schrauben der Tassenablage fixieren, verdeckt die Elektronik und schützt sie vor eventuellen Wasserspritzern beim Befüllen oder vor Stößen beim Einsetzen des Wassertanks. Leider hat mein 3D-Drucker beim ersten Druck der Platte kein schönes Ergebnis erzeugt, sodass ich die Platte mit ein wenig Gaffer-Tape stabilisieren musste. Gedruckt habe ich die Platte aus PET-G, sodass sie gegenüber einem Druck mit PLA noch ein wenig temperaturunempfindlicher ist.

![](/img/bauanleitungen/lelit-pl41em/IMG_1505.jpeg)

Wie der Blick von oben in die fertige Maschine zeigt, verschwindet die Elektronikkomplett hinter der Abdeckplatte und es ist noch mehr als genug Platz für den Wassertank.
![](/img/bauanleitungen/lelit-pl41em/IMG_1506.jpeg)
![](/img/bauanleitungen/lelit-pl41em/IMG_1561.jpeg)
![](/img/bauanleitungen/lelit-pl41em/IMG_1560.jpeg)

Um das Display bis zur Umsetzung einer dauerhaften Lösung zu schützen, habe ich dafür ein einfaches Gehäuse gedruckt.

## PID-Werte

Mit den von mir gewählten PID-Werten bin ich noch nicht komplett zufrieden, da es z.B. nach einem kurzen Bezug noch zu recht starken Überschwingern kommt. Für den Kaltstart habe ich die Werte *50/125/0* gewählt, für den anschließenden Betrieb *20/600/0*.

[^1]: Zur Verwendung des [OpenSCAD](https://openscad.org/)-Designs ist noch dieses [Library](https://github.com/openscad/MCAD) notwendig.

<!-- markdown-link-check-enable-->
