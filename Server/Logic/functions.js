const Forest = require("../models/forests.model");



const updateDataField = async (data_field, new_data) => {
    console.log("Data before update");
    console.log(data_field);
    console.log("=================================================");

    if (!data_field || !data_field.hourly) {
        console.error(`Invalid data field or missing 'hourly' property.`);
        return;
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