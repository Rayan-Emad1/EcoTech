const mongoose = require("mongoose");

const hourlyDataSchema = new mongoose.Schema({
  value: { type: Number, required: true },
  hour: { type: Number, required: true },
  day: { type: Number, required: true },
  source: { type: String, enum: ["real", "predicted"], required: true },
  timestamp: { type: Date, default: Date.now },
});

const dailyDataSchema = new mongoose.Schema({
  value: { type: Number, required: true },
  day: { type: Number, required: true },
  month: { type: Number, required: true },
  source: { type: String, enum: ["real", "predicted"], required: true },
  timestamp: { type: Date, default: Date.now },
});

const temperatureSchema = new mongoose.Schema({
  hourly: [hourlyDataSchema],
  daily: [dailyDataSchema],
});

const windSchema = new mongoose.Schema({
  hourly: [hourlyDataSchema],
  daily: [dailyDataSchema],
});

const humiditySchema = new mongoose.Schema({
  hourly: [hourlyDataSchema],
  daily: [dailyDataSchema],
});

const forestsSchema = new mongoose.Schema({
  location: {
    type: { type: String, enum: ["Point"], default: "Point",},
    coordinates: { type: [Number], required: true,},
  },
  name: { type: String, required: true },
  description: { type: String, required: true },
  current_temperature: {
    type: hourlyDataSchema,
    default: {
      value: 0, 
      hour: 0,  
      day: 0,   
      source: "real", 
    },
  },
  current_humidity: {
    type: hourlyDataSchema,
    default: {
      value: 0,
      hour: 0,  
      day: 0,   
      source: "real", 
    },
  },
  current_wind: {
    type: hourlyDataSchema,
    default: {
      value: 0,
      hour: 0,
      day: 0,
      source: "real", 
    },
  },
  fire_alarm: { type: Boolean, default: false },
  temperature: temperatureSchema,
  wind: windSchema,
  humidity: humiditySchema,
});

const expireAfterForHourly = 10 * 24 * 60 * 60; // 10 days in seconds
const expireAfterForDaily = 6 * 30 * 24 * 60 * 60; // 6 months in seconds

forestsSchema.index(
  { "temperature.hourly.day": 1 },
  { expireAfterSeconds: expireAfterForHourly }
);
forestsSchema.index(
  { "temperature.daily.month": 1, "temperature.daily.day": 1 },
  { expireAfterSeconds: expireAfterForDaily }
);
forestsSchema.index(
  { "wind.hourly.day": 1 },
  { expireAfterSeconds: expireAfterForHourly }
);
forestsSchema.index(
  { "wind.daily.month": 1, "wind.daily.day": 1 },
  { expireAfterSeconds: expireAfterForDaily }
);
forestsSchema.index(
  { "humidity.hourly.day": 1 },
  { expireAfterSeconds: expireAfterForHourly }
);
forestsSchema.index(
  { "humidity.daily.month": 1, "humidity.daily.day": 1 },
  { expireAfterSeconds: expireAfterForDaily }
);

const Forest = mongoose.model("Forest", forestsSchema);
module.exports = Forest;
