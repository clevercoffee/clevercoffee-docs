# Troubleshooting

Start with the symptom and check one item at a time. Never investigate exposed
mains-voltage wiring while the machine is connected to power.

## Web Flasher cannot find the controller

- Confirm that the browser supports Web Serial and that you are using a
  Chromium-based browser.
- Try a USB cable that supports data, not charging only.
- Close other applications that may have opened the serial device, then
  reconnect and retry.
- Check that the operating system permits the browser to access the device.

## The web interface is not reachable

- Confirm that the controller has power according to the instructions for
  your board.
- Check the Wi-Fi setup instructions and the network selected during
  configuration.
- If you cannot reconnect, consult the firmware's documented reset procedure
  before changing or erasing settings.

## A feature or sensor is unavailable

- Verify the firmware version and that the required hardware is installed.
- Check that the relevant option is enabled in the web configuration.
- Confirm support for the exact sensor and board revision in the upstream
  [software repository](https://github.com/rancilio-pid/clevercoffee).

## Still stuck?

Ask in the [CleverCoffee Discord](https://discord.gg/Kq5RFznuU4) with the
firmware version, machine model, board revision, and steps to reproduce the
issue. Do not post passwords, tokens, or other secrets.
