#include "DHT.h"
#include <ESP8266WiFi.h>
#include <ArduinoJson.h>
#include <ESP8266HTTPClient.h>
#include <TimeLib.h>

const char* ssid = "Rayan";
const char* password = "Rayan@76179303"; // //Dont Stand Under My Balcony
const char* serverUrl = "http://192.168.0.2:8080/forest/update-forest-data";
const char* forestId = "650feb23594bb545d4cdd338";

#define DHTPIN 5 // D1
DHT dht(DHTPIN, DHT11);

// Arrays to store temperature and humidity data
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

  // Check if the hour has changed
  int currentHour = hour();
  if (currentHour != lastHour) {
    // Send data only when the hour changes
    sendSensorData(currentHour);

    // Update lastHour
    lastHour = currentHour;

    // If it's a new day, update lastDay
    int currentDay = day();
    if (currentDay != lastDay) {
      lastDay = currentDay;
    }
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

void sendSensorData(int currentHour) {
  // Create a JSON object
  DynamicJsonDocument jsonDoc(256);
  jsonDoc["forestId"] = forestId;

  // Calculate average temperature and humidity
  float temperatureSum = 0;
  float humiditySum = 0;
  for (int i = 0; i < readingsCount; i++) {
    temperatureSum += temperatureValues[i];
    humiditySum += humidityValues[i];
  }
  float averageTemperature = temperatureSum / readingsCount;
  float averageHumidity = humiditySum / readingsCount;

  // // Adjust the hour value to be in the range of 1 to 24
  if (currentHour == 0 ) {
    currentHour = 24;
  }

  // Add average temperature data
  JsonArray temperatureArray = jsonDoc.createNestedArray("temperature");
  JsonObject tempObj = temperatureArray.createNestedObject();
  tempObj["value"] = averageTemperature;
  tempObj["hour"] = currentHour; // Use adjusted hour value
  tempObj["day"] = lastDay;      // Use lastDay
  tempObj["source"] = "predicted"; // Set the source to "predicted"

  // Add average humidity data
  JsonArray humidityArray = jsonDoc.createNestedArray("humidity");
  JsonObject humidityObj = humidityArray.createNestedObject();
  humidityObj["value"] = averageHumidity;
  humidityObj["hour"] = currentHour; // Use adjusted hour value
  humidityObj["day"] = lastDay;      // Use lastDay
  humidityObj["source"] = "real";    // Set the source to "real"

  // Convert JSON to a string
  String jsonString;
  serializeJson(jsonDoc, jsonString);

  // Send data to the server
  sendToServer(jsonString);

  // Reset readingsCount
  readingsCount = 0;
}

void sendToServer(String data) {
  WiFiClient wifiClient; // Create a WiFiClient object

  HTTPClient http;
  http.begin(wifiClient, serverUrl); // Use WiFiClient object here

  http.addHeader("Content-Type", "application/json");

  int httpResponseCode = http.POST(data);

  if (httpResponseCode > 0) {
    String response = http.getString();
    Serial.println("HTTP Response code: " + String(httpResponseCode));

    Serial.println("*****************************");
    Serial.println("*****************************");
    Serial.println(response);
    Serial.println("*****************************");
    Serial.println("*****************************");
  } else {
    Serial.println("Error sending data to server");
  }

  http.end();
}