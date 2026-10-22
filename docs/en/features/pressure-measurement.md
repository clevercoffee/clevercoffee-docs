# Pressure measurement

CleverCoffee firmware can read pressure from a supported, enabled pressure
sensor. The feature is intended to measure pressure; this documentation does
not cover pressure profiling or automated pressure control.

## Before adding a sensor

1. Check that your exact PCB revision supports the sensor interface.
2. Confirm sensor compatibility with the current firmware and hardware
   instructions.
3. Install the sensor only while the espresso machine is disconnected from
   mains power, following the documentation for that hardware.
4. Enable pressure sensing in the firmware's web configuration if the option
   is available for your build.

The presence of a pressure sensor in firmware does not mean that every board
or machine is wired for one. Do not connect an unverified sensor or use
assumed pin assignments.

## Scope

Pressure profiling is intentionally out of scope for this guide. For current
sensor support details, check the
[software repository](https://github.com/rancilio-pid/clevercoffee).
