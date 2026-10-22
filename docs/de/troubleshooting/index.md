# Fehlerbehebung

Gehe vom Symptom aus und prüfe jeweils nur einen Punkt. Untersuche niemals
offenliegende Netzspannungsleitungen, solange die Maschine mit Strom versorgt
wird.

## Web Flasher findet den Controller nicht

- Prüfe, ob der Browser Web Serial unterstützt und Chromium-basiert ist.
- Probiere ein USB-Kabel mit Datenübertragung, nicht nur zum Laden.
- Schließe andere Programme, die das serielle Gerät geöffnet haben könnten,
  trenne den Controller und versuche es erneut.
- Prüfe, ob das Betriebssystem dem Browser den Gerätezugriff erlaubt.

## Die Weboberfläche ist nicht erreichbar

- Prüfe, ob der Controller gemäß Anleitung deiner Platine mit Strom versorgt
  wird.
- Prüfe die WLAN-Einrichtung und das bei der Konfiguration ausgewählte Netz.
- Wenn du keine Verbindung herstellen kannst, lies vor Änderungen oder dem
  Löschen von Einstellungen das dokumentierte Reset-Verfahren der Firmware.

## Eine Funktion oder ein Sensor ist nicht verfügbar

- Prüfe Firmware-Version und ob die benötigte Hardware eingebaut ist.
- Prüfe in der Web-Konfiguration, ob die betreffende Option aktiviert ist.
- Bestätige die Unterstützung deiner genauen Sensor- und Platinenrevision im
  [Software-Repository](https://github.com/rancilio-pid/clevercoffee).

## Problem weiterhin nicht gelöst?

Frage im [CleverCoffee-Discord](https://discord.gg/Kq5RFznuU4) und nenne
Firmware-Version, Maschinenmodell, Platinenrevision sowie die Schritte, mit
denen sich das Problem reproduzieren lässt. Teile keine Passwörter, Tokens
oder sonstigen Geheimnisse.
