const Forest = require("../models/forests.model");

async function getAllForestsDetails(_, res) {
  try {
    const forests = await Forest.find(
      {},
      {
        name: 1,
        location: 1,
        description: 1,
        current_temperature: 1,
        current_humidity: 1,
        current_wind: 1,
        fire_alarm: 1,
      }
    );

    const formattedForests = forests.map((forest) => ({
      name: forest.name,
      description: forest.description,
      current_temperature: forest.current_temperature.value,
      current_humidity: forest.current_humidity.value,
      current_wind: forest.current_wind.value,
      last_update: forest.current_temperature.timestamp,
      fire_alarm: forest.fire_alarm,
      location: forest.location,
    }));

    res.status(200).json(formattedForests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { getAllForestsDetails };
