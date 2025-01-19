---
tile: InfluxDB
parent: Konfiguration & Anpassung
---

# InfluxDB

# Konfiguration

InfluxDB kann nach der Konfiguration von folgenden Punkten in der userConfig zum speichern von werten genutzt werden:

```c
#define INFLUXDB 0                 // 1 = INFLUX enabled, 0 = INFLUX disabled
#define INFLUXDB_URL ""            // InfluxDB server address (http://influx0:8086)
#define INFLUXDB_INSECURE 1        // 1 = INFLUXClient setInsecure enabled , 0 = INFLUXClient setInsecure disabled
#define INFLUXDB_AUTH_TYPE 1       // 1 = API Token , 2 = User/Pass
#define INFLUXDB_API_TOKEN ""
#define INFLUXDB_ORG_NAME ""
#define INFLUXDB_USER ""
#define INFLUXDB_PASSWORD ""
#define INFLUXDB_DB_NAME "coffee"  // InfluxDB bucket name
#define INFLUXDB_INTERVAL 5000     // Send interval in milliseconds
#define INFLUXDB_TIMEOUT 5000      // InfluxDB httpReadTimeout
```

Eine vollständige Liste aller Parameter findet sich in der Datei InfluxDB.h (speicherbare Werte in sendInflux()).

## InfluxDB v1

Beispiel Konfiguration fuer InfluxDB Version < 2.x:

```c
#define INFLUXDB 1
#define INFLUXDB_URL "https://influx0:8086"
#define INFLUXDB_INSECURE 1
#define INFLUXDB_AUTH_TYPE 2
#define INFLUXDB_API_TOKEN ""
#define INFLUXDB_ORG_NAME ""
#define INFLUXDB_USER "foo"
#define INFLUXDB_PASSWORD "footopsecret"
#define INFLUXDB_DB_NAME "coffee"  // InfluxDB bucket name
#define INFLUXDB_INTERVAL 5000     // Send interval in milliseconds
#define INFLUXDB_TIMEOUT 5000      // InfluxDB httpReadTimeout
```

## InfluxDB v2

Beispiel Konfiguration fuer InfluxDB Version >= 2.x:

```c
#define INFLUXDB 1
#define INFLUXDB_URL "https://influx0:8086"
#define INFLUXDB_INSECURE 1
#define INFLUXDB_AUTH_TYPE 1
#define INFLUXDB_API_TOKEN "21903109819ipsum201937091lirum"
#define INFLUXDB_ORG_NAME "org"
#define INFLUXDB_USER ""
#define INFLUXDB_PASSWORD ""
#define INFLUXDB_DB_NAME "coffee"
#define INFLUXDB_INTERVAL 5000
#define INFLUXDB_TIMEOUT 5000
```

## Selfsigned SSL Zertifikate

Nutzt man InfluxDB mit eigenen Zerifikaten (Selfsigned), kann man durch setzen von `#define INFLUXDB_INSECURE 1` die Überprüfung des Zertifikats abschalten.
