const mongoose = require("mongoose");


const hourlyDataSchema = new mongoose.Schema({
    value: { type: Number, required: true },
    hour: { type: Number, required: true },
    day: { type: Number, required: true },
    source: { type: String, enum: ["real", "predicted"], required: true },
  });
  
  const dailyDataSchema = new mongoose.Schema({
    value: { type: Number, required: true },
    month: { type: Number, required: true },
    day: { type: Number, required: true },
    source: { type: String, enum: ["real", "predicted"], required: true },
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
  
  
  
  module.exports = Forest;
  