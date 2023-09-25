#include "DHT.h"
#include <ESP8266WiFi.h>
#include <ArduinoJson.h>
#include <ESP8266HTTPClient.h>
#include <TimeLib.h>




void setup() {

}

void loop() {
  // Read temperature and humidity every minute



}


void setupWifi() {
  //Connect to wifi
  WiFi.begin(ssid, password);

  //Wait for connection
  while (WiFi.status() != WL_CONNECTED) {
    //Wait 1 second
    delay(1000);
    Serial.println("*");
  }

  //Display IP address
  if (WiFi.status() == WL_CONNECTED) {
    Serial.println("Connected to " + (WiFi.localIP()).toString());
  }
}
