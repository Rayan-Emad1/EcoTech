const Forest = require("../models/forests.model");

const calculateDailyAverage = async (data_field, day) => {

    const forest = await Forest.findOne({ _id: data_field._id });
    if (!forest) {
        console.error(`Forest not found for data field.`);
        return;
    }

    const data_type = data_field.type; 
    const daily_data_from_Db = forest[data_type].hourly.filter(
        (data) => data.day === day
    );


    const real_data = daily_data_from_Db.filter((data) => data.source === 'real');
    const sum = real_data.reduce((acc, data) => acc + data.value, 0);
    const average = sum / real_data.length;


    const timestamp = new Date(daily_data_from_Db[0].timestamp);
    const month = timestamp.getMonth() + 1; 


    forest[data_type].daily.push({
        value: average,
        day: day,
        month: month,
        timestamp: new Date(),
    });

    forest[data_type].hourly = [];
    
    await forest.save();

};

const updateDataField = async (data_field, new_data) => {
    console.log("Data before update");
    console.log(data_field);
    console.log("=================================================");

    if (!data_field || !data_field.hourly) {
        console.error(`Invalid data field or missing 'hourly' property.`);
        return;
    }


    if (new_data[0].hour === 24 && new_data[0].source === "real") {
        await calculateDailyAverage(data_field, new_data[0].day );
    }
    

    new_data.forEach((newDataItem) => {
        const { hour, day, source, value } = newDataItem;

        const existingData = data_field.hourly.find((data) => data.hour === hour && data.day === day);

        if (existingData) {
            console.log(`Updating existing data for hour ${hour} on ${day}`);
            existingData.value = value;
            existingData.source = source;
            existingData.timestamp = new Date();
        } else {
            console.log(`Adding new data for hour ${hour} on ${day}`);
            data_field.hourly.push({
                value,
                hour,
                day,
                source,
                timestamp: new Date(),
            });
        }
    });
    console.log("=================================================");

    console.log("Data after update");
    console.log(data_field);
};

module.exports = {updateDataField };