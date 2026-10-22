# First-time configuration

Once firmware has been flashed, use the controller's web interface to
configure the system.

1. Power the controller using the method specified by your exact hardware
   instructions. Keep the machine disconnected from mains while installation
   or service work is in progress.
2. Connect to the controller's setup interface. If it is not available, see
   [Troubleshooting](../troubleshooting/index.md).
3. Set up network access using the options shown by your firmware.
4. Review the detected or configured hardware and enable only the sensors and
   switches that are actually installed.
5. Configure brew and steam settings gradually; verify their behavior before
   normal use.
6. Save or download a configuration backup if your firmware provides that
   option.

Avoid copying configuration values blindly from another machine. Sensor
placement, machine hardware, and firmware revisions affect the appropriate
settings.

For names and constraints of individual options, use the current upstream
[configuration reference](https://github.com/rancilio-pid/clevercoffee/blob/master/CONFIG_REFERENCE.md).
