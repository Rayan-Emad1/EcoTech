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

const forestsSchema = new mongoose.Schema({
  location: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  name: { type: String, required: true },
  description: { type: String, required: true },
  temperature: temperatureSchema,
  wind: windSchema,
  humidity: humiditySchema,
  fire_alarm: { type: Boolean, default: false },
});



const Forest = mongoose.model("Forest", forestsSchema);




module.exports = Forest;
