#include "DHT.h"
#include <ESP8266WiFi.h>
#include <ArduinoJson.h>
#include <ESP8266HTTPClient.h>
#include <TimeLib.h>

const char* ssid = "Rayan";
const char* password = "Rayan@76179303"; // //Dont Stand Under My Balcony

#define DHTPIN 5 // D1
DHT dht(DHTPIN, DHT11);
float temperatureValues[60] = {0};  // Store up to 60 readings
float humidityValues[60] = {0};     // Store up to 60 readings
int readingsCount = 0;
int lastHour = -1; // Initialize to an invalid hour
int lastDay = -1;  // Initialize to an invalid day



void setup() {
  Serial.begin(9600);
  dht.begin();
  setupWifi();

  if (WiFi.status() == WL_CONNECTED) {
    Serial.println("WiFi connection");
  } else {
    Serial.println("Error in WiFi connection");
  }

  //setTime(hour, minute, second, day, month, year)
  setTime(  23,     59,     50,  25,     9, 2023);  
 // Initialize lastHour and lastDay to current values
  lastHour = hour();
  lastDay = day();

}

void loop() {
  // Read temperature and humidity every minute
  delay(1000);

  float h = dht.readHumidity();
  float t = dht.readTemperature();

  if (!isnan(h) && !isnan(t)) {
    // Store readings in arrays (discard if more than 60 readings)
    if (readingsCount < 60) {
      temperatureValues[readingsCount] = t;
      humidityValues[readingsCount] = h;
      readingsCount++;
    }

    // Print the current reading
    Serial.println("Temperature in C:");
    Serial.println(t);
    Serial.println("Humidity in %:");
    Serial.println(h);
  } else {
    Serial.println("Failed to read from DHT sensor!");
  }



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
