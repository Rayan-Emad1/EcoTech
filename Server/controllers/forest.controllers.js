const Forest = require("../models/forests.model");
const { updateDataField } = require("../Logic/functions");

const createForest = async (req, res) => {
  try {
    const { location, name, description } = req.body;

    const new_forest = new Forest({
      location,
      name,
      description,
      temperature: {},
      wind: {},
      humidity: {},
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
    const { forestId, temperature, humidity, wind } = req.body;
    const forest = await Forest.findById(forestId);

    if (!forest) {
      return res.status(404).json({ message: "Forest not found" });
    }

    if (temperature) {
      updateDataField(forest.temperature, temperature);
    }
    // if (humidity) {
    //     updateDataField(forest.humidity, humidity);
    // }
    // if (wind) {
    //     updateDataField(forest.wind, wind);
    // }

    await forest.save();

    res.status(200).json({ message: "Data updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { createForest, updateForestData };