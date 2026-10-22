# Druckmessung

Die CleverCoffee-Firmware kann den Druck eines unterstützten, aktivierten
Drucksensors auslesen. Diese Funktion dient der Druckmessung; diese
Dokumentation behandelt keine Druckprofilierung oder automatische
Drucksteuerung.

## Vor dem Einbau eines Sensors

1. Prüfe, ob deine genaue Platinenrevision die Sensorschnittstelle unterstützt.
2. Vergewissere dich anhand der aktuellen Firmware- und Hardwareanleitung,
   dass der Sensor kompatibel ist.
3. Baue den Sensor nur bei vom Stromnetz getrennter Espressomaschine gemäß
   der Anleitung für diese Hardware ein.
4. Aktiviere die Druckmessung in der Web-Konfiguration, sofern die Option für
   deinen Aufbau verfügbar ist.

Dass die Firmware einen Drucksensor unterstützt, bedeutet nicht, dass jede
Platine oder Maschine dafür verdrahtet ist. Schließe keine ungeprüften
Sensoren an und verwende keine angenommenen Pinbelegungen.

## Umfang

Druckprofilierung ist bewusst nicht Teil dieser Dokumentation. Aktuelle
Details zur Sensorunterstützung findest du im
[Software-Repository](https://github.com/rancilio-pid/clevercoffee).
