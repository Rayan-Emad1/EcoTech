const Forest = require("../models/forests.model");
const {getStartTimeOfCurrentWeek, getStartTimeOfPreviousWeek, getWeekOfData, getCurrentDayData,} = require("../Logic/functions");

const getAllForestsDetails = async (_, res) => {
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
};

const getForestData = async (req, res) => {
  try {
    const { forestId } = req.body;

    const forest = await Forest.findById(forestId);

    if (!forest) {
      return res.status(404).json({ message: "Forest not found" });
    }

    const current_week_start = getStartTimeOfCurrentWeek();
    const previous_week_Start = getStartTimeOfPreviousWeek(current_week_start);
    const week_before_start = getStartTimeOfPreviousWeek(previous_week_Start);

    const current_week_temperature = await getWeekOfData(forest.temperature.daily, current_week_start);
    const current_week_humidity = await getWeekOfData(forest.humidity.daily, current_week_start);
    const current_week_wind = await getWeekOfData(forest.wind.daily, current_week_start);

    const previous_week_temperature = await getWeekOfData(forest.temperature.daily, previous_week_Start);
    const previous_week_humidity = await getWeekOfData(forest.humidity.daily, previous_week_Start);
    const previous_week_wind = await getWeekOfData(forest.wind.daily, previous_week_Start);

    const week_before_temperature = await getWeekOfData(forest.temperature.daily, week_before_start);
    const week_before_humidity = await getWeekOfData(forest.humidity.daily, week_before_start);
    const week_before_wind = await getWeekOfData(forest.wind.daily, week_before_start);

    const todays_temperature = getCurrentDayData(forest.temperature.hourly);
    const todays_humidity = getCurrentDayData(forest.humidity.hourly);
    const todays_wind = getCurrentDayData(forest.wind.hourly);

    const response = {
      forestName: forest.name,
      threeWeeksOfData: {
        currentWeek: {
          temperature: current_week_temperature,
          humidity: current_week_humidity,
          wind: current_week_wind,
        },
        previousWeek: {
          temperature: previous_week_temperature, 
          humidity: previous_week_humidity,    
          wind: previous_week_wind,        
        },

        weekBeforeStart:{
          temperature: week_before_temperature, 
          humidity: week_before_humidity,    
          wind: week_before_wind,   
        }
      },
      todaysData: {
        temperature: todays_temperature,
        humidity: todays_humidity,
        wind: todays_wind,
      },
    };

    res.json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};




module.exports = { getAllForestsDetails, getForestData };
    