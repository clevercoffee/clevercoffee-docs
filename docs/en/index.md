# CleverCoffee documentation

CleverCoffee is an open-source controller for espresso machines. This guide
focuses on current firmware features and on builders who install the hardware
themselves.

!!! danger "230 V mains voltage"
    Espresso machines contain **potentially lethal mains voltage**, including
    when they are modified. Disconnect the machine from the mains before
    opening it. Do not work on energized equipment. If you are not qualified
    to work safely with mains voltage, have the installation done by a
    qualified professional.

## Choose your next step

- **New to the project?** Start with [Getting Started](getting-started/index.md)
  and review the [safety requirements](getting-started/safety.md).
- **Planning a build?** Check the [hardware overview](hardware/index.md) and
  [machine compatibility](hardware/compatibility.md).
- **Ready to install firmware?** Use the
  [Web Flasher](installation/index.md); a development environment is not
  required for normal installation.
- **Already installed?** Continue with [first-time configuration](configuration/first-setup.md)
  and the [feature overview](features/index.md).

## Current documentation scope

The software repository is the source of truth for supported features and
hardware. This documentation covers current functionality, including
temperature control, brewing options, scales, integrations, and pressure
**measurement**. Pressure profiling is not documented as a supported feature.

See the [CleverCoffee software repository](https://github.com/rancilio-pid/clevercoffee)
for current releases and source code.
