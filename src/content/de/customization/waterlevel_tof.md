---
title: Füllstand-Sensor
parent: Konfiguration & Anpassung
---

# Füllstand-Sensor

## Einleitung

> [!NOTE]
>
> Dieses Feature wird demnächst überarbeitet, das das Prinzip nicht stabil genug funktioniert. Eine Umsetzung ist so > wie hier beschrieben nicht empfohlen.\*\*

Falls bei dir auch öfter mal während des Bezugs plötzlich das Wasser in der Maschine leer ist, kann das Upgrade mit einem Wasserstandsensor eine sinnvolle Erweiterung sein. Hierbei wird der aktuelle Füllstand in % im Display ausgegeben und bei Unterschreitung eines gewissen Wertes (aktuell 10%) eine Warnung angezeigt. Die Erfassung des aktuellen Wasserstandes erfolgt hierbei mittels eines Time-of-Flight(ToF) Sensors

## Funktionsweise ToF Sensor

Ein ToF Sensor misst Entfernungen zu Objekten über ein Laufzeitverfahren. Dabei Sendet ein Emitter im Sensor einen kurzen Laserimpuls bei einer Wellenlänge von 940 nm (Infrarot) aus. Dieser wird vom Objekt reflektiert und von einem Detektor auf dem Sensor erkannt. Aus der Zeitdifferenz und der Lichtgeschwindigkeit ergibt sich die Distanz zum Objekt durch dt\*c/2 = D. In unserem Anwendungsfall wird der Sensor mit Blick nach unten über dem Wassertank montiert un misst die sich je nach Füllstand ändernde Entfernung zur Wasseroberfläche.

Für dieses Projekt kommt ein ToF Sensor mit VL53L0X Chip von STM zum Einsatz, als fertiges Modul z.B. von AZ-Delivery zu bekommen.

## Verbindung des Sensors mit dem PCB und I2C Addressierung

Der ToF sensor wird vom ESP über I2C angesprochen. Beim ESP8266 gibt es nur einen I2C Bus und an diesem ist auch bereits das OLED angeschlossen. Es ist jedoch kein Problem mehrere I2C Geräte an einem Bus zu betreiben, wir müssen lediglich sicherstellen das Display und den ToF Sensor korrekt zu addressieren. Es gibt dazu in der userconfig zwei neue Variablen, OLED_I2C und TOF_I2C, hier müssen die I2C addressen der beiden Geräte spezifiziert werden. Per default hat das Display die Addresse 0x78 und der ToF-Sensor 0x29. Dies kann jedoch je nach gewälter Hardware abweichen. Für eine reibungslose Kommunikation bitte die korrekten Geräteaddressen hier eintragen.

## Einbau

- work in progress -

Da ich keine Lust hatte Löcher zu bohren, habe ich einfach mit einer M3 Schraube + Mutter einen Ringmagnet an jedes der Befestigungslöcher geschraubt und den Sensor dann magnetisch am Gehäuse der Gaggia befestigt. Das Kabel geht zwischen dem Wassereinfülltrichter und dem Metallgehäuse durch. Ich bin mir aber sicher das hier jemand eine elegantere Lösung findet.

## Kalibrierung des Füllstandes

Der Sensor sollte ab Werk kalibriert sein und die korrekte Entfernung in mm ausgeben. Für unsere Anwendung müssen wir die Ausgabe in mm aber in % Füllstand umrechnen. Da der PID in unterschiedlichen Maschinen zum Einsatz kommt und die Einbausituation auch nicht immer identisch sein wird, gibt es eine Kalibrierroutine um für die Software festzulegen, welche Entfernung einem leeren und welche einem vollen Wassertank entspricht. Um den Kalibriervorgang zu starten gibt es zwei Möglichkeiten:

- Aktivierung in der userconfig durch die variable CALIBRATION_MODE = 1; Die Software muss danach neu kompiliert und auf den ESP geladen werden. Nach Abschluss des Kalibriervorgangs muss die Variable wieder auf 0 gesetzt, die ermittelten Werte für water_full und water_empty eingetragen und die Software erneut kompiliert und geflashed werden.

- Aktivierung durch den Button "Calibration Mode" im Experten Modus Tab in Blynk, im gleichen tab können auch die ermittelten Werte aus dem kalibriervorgang eingetragen werden. Dies ist die wesentlich einfachere und zu bevorzugende Variante.

Nachdem der Calibration Mode aktiviert wurde wird im Display die aktuell gemessene Entfernung angezeigt. Für eine erfolgreiche Kalibrierung werden 2 Werte benötigt: Water Level Low (entsprechend dem niedrigsten Wasserstand bei dem die Pumpe noch fördert) und Water Level High (entsprechend der "Max" Markierung auf dem Tank o. Ä.) Für die Kalibrierung empfiehlt es sich aus praktischen Gründen mit Water Level Low zu starten (man bekommt eben einfacher Wasser in den Tank rein als wieder raus). Der Tank wird also bis zum erforderlichen unteren level gefüllt und der Wert auf dem Display abgelesen. Dieser wird nun entweder unter "Water Level Low" in Blynk oder unter "water_empty" in der userconfig eingetragen. Danach wird der Tank bis zum Maximum gefüllt und auch dieser Wert abgelesen und eingetragen. Hiermit ist die Kalibrierung abgeschlossen und der Calibration mode kann wieder deaktiviert werden.

## Anzeige des Füllstandes

Der Füllstand wird im Standard layout des Display in der rechten oberen Ecke in % angezeigt. Sollte der Füllstand unter 10% sinken erscheint eine blinkende Warnmeldung "Wasser leer".
