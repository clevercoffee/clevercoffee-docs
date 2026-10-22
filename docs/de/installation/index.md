# Installation mit dem Web Flasher

Für die normale Firmware-Installation verwende den
[CleverCoffee Web Flasher](https://rancilio-pid.github.io/clevercoffee-flasher/).
Das browserbasierte Tool ist der empfohlene Weg; PlatformIO ist dem Bereich
[Entwicklung](../development/index.md) vorbehalten.

## Vorbereitung

- Verwende einen Chromium-basierten Browser mit Web-Serial-Unterstützung.
- Halte ein USB-Datenkabel und den Controller bereit.
- Prüfe, ob Firmware- und Boardauswahl zu deiner Hardware passen.
- Lass die Espressomaschine während Einbau und Wartung vom Stromnetz getrennt.
  Beachte die [Sicherheitshinweise](../getting-started/safety.md).

## Ablauf

1. Öffne den Web Flasher und folge den aktuellen Anweisungen.
2. Verbinde den Controller per USB und erteile dem Browser bei Aufforderung
   Zugriff auf das passende serielle Gerät.
3. Wähle Firmware und Boardoptionen passend zu deinem Aufbau.
4. Starte den Flashvorgang und warte auf die Erfolgsmeldung, bevor du den
   Controller trennst.
5. Fahre mit der [Ersteinrichtung](../configuration/first-setup.md) fort.

Die Oberfläche des Flashers kann sich ändern. Folge den dort angezeigten
Anweisungen und den Release-Informationen im
[Software-Repository](https://github.com/rancilio-pid/clevercoffee).

## Wenn das Flashen fehlschlägt

Probiere ein anderes USB-Datenkabel, schließe Programme, die den seriellen
Port verwenden könnten, und verbinde den Controller erneut. Wird das Gerät
nicht angezeigt, prüfe Browserunterstützung und Betriebssystemberechtigungen.
Weitere Hilfe bietet die [Fehlerbehebung](../troubleshooting/index.md).
