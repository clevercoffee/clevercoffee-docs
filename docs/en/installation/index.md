# Install with the Web Flasher

For normal firmware installation, use the
[CleverCoffee Web Flasher](https://rancilio-pid.github.io/clevercoffee-flasher/).
The browser-based tool is the recommended path; PlatformIO is reserved for
[development](../development/index.md).

## Before you start

- Use a Chromium-based browser with Web Serial support.
- Have a USB data cable and the controller available.
- Confirm that the firmware and board selection match your hardware.
- Keep the espresso machine disconnected from mains power while installing or
  servicing the controller. See [Electrical safety](../getting-started/safety.md).

## Flashing workflow

1. Open the Web Flasher and follow its current prompts.
2. Connect the controller over USB and grant the browser access to the
   appropriate serial device when prompted.
3. Select the firmware and board options that match your build.
4. Start flashing and wait for the tool to report completion before
   disconnecting the controller.
5. Continue to [first-time configuration](../configuration/first-setup.md).

The flasher interface may change over time. Follow the live prompts and the
release information in the [software repository](https://github.com/rancilio-pid/clevercoffee).

## If flashing fails

Try another known-good USB data cable, close applications that may be using
the serial port, and reconnect the controller. If the browser cannot see the
device, check browser support and operating-system permissions. For other
problems, see [Troubleshooting](../troubleshooting/index.md).
