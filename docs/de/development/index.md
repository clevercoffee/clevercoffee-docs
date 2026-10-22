# Entwicklung

Dieser Bereich richtet sich an Mitwirkende, die Firmware oder zugehörigen
Projektcode ändern. Für die normale Installation verwende den
[Web Flasher](../installation/index.md); eine lokale Build-Umgebung ist dafür
nicht erforderlich.

## Firmware-Entwicklung

Das Firmware-Repository enthält Quellcode, Tests, Hinweise zur Mitarbeit und
die Build-Konfiguration:
[rancilio-pid/clevercoffee](https://github.com/rancilio-pid/clevercoffee).
Lies vor Änderungen die aktuelle `CONTRIBUTING.md` und die
Projekthinweise.

PlatformIO ist ein Entwicklerwerkzeug zum Bauen und Bearbeiten der Firmware.
Es ist nicht der übliche Installationsweg für Endnutzer und wird bewusst nur
in diesem Entwicklungsbereich behandelt.

## Dokumentationsentwicklung

Diese Website wird mit MkDocs Material und `mkdocs-static-i18n` erstellt.
Installiere die Abhängigkeiten aus `requirements.txt` und starte zur Vorschau
`python -m mkdocs serve`. Halte englische und deutsche Seiten an denselben
relativen Pfaden unter `docs/en/` und `docs/de/`.
