# Compatibility

The firmware repository lists support for Rancilio Silvia, Gaggia, and
Quickmill machines. This is a starting point, not a guarantee that every model,
revision, or third-party hardware design is supported.

Before building, verify all of the following against the current software and
the instructions for your board:

- The machine model and electrical revision.
- The exact controller PCB and its revision.
- Required temperature sensor, switches, relays, and any optional display or
  sensors.
- Whether the current firmware supports the intended ESP32 board.

If a machine or board is not explicitly covered by the build instructions,
confirm compatibility with the project community before connecting it.

!!! warning "Do not infer wiring from another machine"
    Similar-looking machines can differ electrically. Do not copy a wiring
    layout or pin assignment from another model or PCB revision.
