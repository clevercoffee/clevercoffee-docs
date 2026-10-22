# Getting Started

Use this path to understand the project before opening or modifying an
espresso machine.

1. Read [Safety](safety.md), especially the warning about 230 V mains voltage.
2. Check [hardware compatibility](../hardware/compatibility.md) for your
   machine and intended board.
3. Plan the build and gather the parts described for your hardware revision.
4. Flash the controller with the [Web Flasher](../installation/index.md).
5. Complete [first-time configuration](../configuration/first-setup.md) and
   verify operation before regular use.

## What CleverCoffee does

CleverCoffee is firmware for an ESP32-based espresso-machine controller. It
provides temperature control and can support features such as brew timing,
pre-infusion, brew-by-time or brew-by-weight, steam control, and MQTT
integration, depending on the installed hardware and configuration.

The hardware installation is a builder project. Do not assume that a software
feature is available on every machine or board.

## Get help

Check [Troubleshooting](../troubleshooting/index.md) first. For project
questions and community support, use the
[CleverCoffee Discord](https://discord.gg/Kq5RFznuU4). Include the firmware
version, machine model, board revision, and a concise description of the
problem; never post Wi-Fi passwords or other credentials.
