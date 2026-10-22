# Development

Development is for contributors changing firmware or related project code.
For normal installation, use the [Web Flasher](../installation/index.md);
you do not need a local build environment.

## Firmware development

The firmware repository contains the source, tests, contribution guidance,
and build configuration:
[rancilio-pid/clevercoffee](https://github.com/rancilio-pid/clevercoffee).
Review its current `CONTRIBUTING.md` and project instructions before making
changes.

PlatformIO is a developer tool used to build and work on the firmware. It is
not the standard end-user installation path and is intentionally documented
only in this development section.

## Documentation development

This site is built with MkDocs Material and `mkdocs-static-i18n`. Install the
dependencies from `requirements.txt` and run `python -m mkdocs serve` to
preview changes. Keep corresponding English and German pages at the same
relative path under `docs/en/` and `docs/de/`.
