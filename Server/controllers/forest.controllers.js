const Forest = require("../models/forests.model");
const { updateDataField } = require("../Logic/functions");
const { OpenAiPrediction } = require("../configs/open.ai");
const axios = require("axios"); 

const createForest = async (req, res) => {
  try {
    const { coordinates, name, description, address } = req.body;

    const new_forest = new Forest({
      name,
      description,
      coordinates,
      address,
      temperature: {},
      humidity: {},
      // wind: {},
    });

    await new_forest.save();

    res.status(201).json(new_forest);
  } catch (error) {
    console.error("Error creating forest:", error);
    res.status(500).json({ message: "Error creating forest" });
  }
};

const updateForestData = async (req, res) => {
  try {
    const { forestId } = req.body;
    const forest = await Forest.findById(forestId);

    if (!forest) {
      return res.status(404).json({ message: "Forest not found" });
    }

    const reqAI = await OpenAiPrediction(req.body);

    console.log("===================================================");
    console.log("===================================================");
    console.log("before prediction:  ", req.body);
    console.log("===================================================");
    console.log("===================================================");
    console.log("after prediction:  ", reqAI);

    const { temperature, humidity , forecast , fire_alarm  , condition } = reqAI;

    forest.current_temperature = temperature[0];
    forest.current_humidity = humidity[0];
    // forest.current_wind = wind[0];

    forest.forecast = forecast;
    forest.fire_alarm = fire_alarm;
    forest.condition = condition;


    if (temperature) {
      updateDataField(forest.temperature, temperature);
    }
    if (humidity) {
      updateDataField(forest.humidity, humidity);
    }
    // if (wind) {
    //   updateDataField(forest.wind, wind);
    // }

    await forest.save();


    if (fire_alarm) { 
      const currentDate = new Date().toLocaleString('en-US', { 
        year: 'numeric', 
        month: 'numeric', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        hour12: true 
      });
    
      axios.post('https://app.nativenotify.com/api/notification', {
        appId: 12578,
        appToken: "wJIayC4Y0PfbCVsaKsZxN9",
        title: "Emergency Alert",
        body: `Forest Fire Alert in ${forest.name}! Evacuate immediately to a safe location. Follow emergency procedures and stay updated for instructions. Your safety is our priority.`,
        dateSent: currentDate,
      });
    }
    

    res.status(200).json({ message: "Data updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { createForest, updateForestData };
