# Features

Available features depend on the installed hardware, firmware version, and
configuration. The current project includes:

- Brew-temperature control and separate steam-temperature settings.
- Brew timing, configurable pre-infusion, and automatic brewing by time.
- Brew-by-weight with supported load-cell or Bluetooth Low Energy scales.
- Backflush and standby functions.
- Web-based status and configuration, with MQTT support.
- Optional pressure **measurement** when a supported pressure sensor is
  installed and enabled.

Consult the software's current [configuration reference](https://github.com/rancilio-pid/clevercoffee/blob/master/CONFIG_REFERENCE.md)
for the exact options available in your firmware.

## Pressure

The current scope here is sensor-based [pressure measurement](pressure-measurement.md).
This documentation does not describe pressure profiling or present it as a
supported feature.
