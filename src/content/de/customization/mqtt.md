---
tile: MQTT
parent: Konfiguration & Anpassung
---

# MQTT

# Konfiguration

MQTT kann nach der Konfiguration von folgenden Punkten in der userConfig zur Steuerung und zum Auslesen von werten genutzt werden:

```c
#define MQTT 1                             // 1 = MQTT enabled, 0 = MQTT disabled
#define MQTT_USERNAME "mymqttuser"
#define MQTT_PASSWORD "mymqttpass"
#define MQTT_TOPIC_PREFIX "custom/Kitchen."  // topic will be "<MQTT_TOPIC_PREFIX><HOSTNAME>/<READING>"
#define MQTT_SERVER_IP "192.168.0.10"   // IP-Address of locally installed mqtt server
#define MQTT_SERVER_PORT 1883
```

Werte können mit
custom/{MQTT_TOPIC_PREFIX}/{var}/set gesetzt werden.

z.B:
custom/Kitchen.silvia/brewSetPoint/set 95

Eine vollständige Liste aller Parameter findet sich in der Datei mqtt.h (lesbare Werte in writeSysParamsToMQTT()) bzw. in rancilio-pid.cpp (setzbare Parameter in mqttVars).
