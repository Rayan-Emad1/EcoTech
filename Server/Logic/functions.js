const updateDataField = (data_field, new_data) => {
  // console.log(`Before update ${data_field}`);
  // console.log("=================================================");

  if (!data_field || !data_field.hourly) {
    console.error(`Invalid data field or missing 'hourly' property.`);
    return;
  }

  new_data.forEach((new_data_item) => {
    const { hour, day, source, value } = new_data_item;

    const existing_data = data_field.hourly.find(
      (data) => data.hour === hour && data.day === day
    );

    if (existing_data) {
      // console.log(`Updating existing data for hour ${hour} on ${day}`);
      existing_data.value = value;
      existing_data.source = source;
      existing_data.timestamp = new Date();
    } else {
      // console.log(`Adding new data for hour ${hour} on ${day}`);
      data_field.hourly.push({
        value,
        hour,
        day,
        source,
        timestamp: new Date(),
      });
    }
  });

  const { hour, source, day } = new_data[0];
  if (hour === 24 && source === "real") {
    updateDataFieldDaily(data_field, day);
  }

  // console.log("=================================================");
  // console.log(`After update ${data_field}`);
};

const updateDataFieldDaily = (data_field, day) => {
  // console.log(data_field);

  const daily_values = data_field.hourly.filter((data) => data.day === day);

  const real_data = daily_values.filter((data) => data.source === "real");
  const sum = real_data.reduce((acc, data) => acc + data.value, 0);
  const average = sum / real_data.length;

  // console.log("====================================");
  // console.log(sum);
  // console.log(average);
  // console.log(`Before update ${data_field.daily}`);
  // console.log("====================================");

  const timestamp = new Date(real_data[0].timestamp);
  const month = timestamp.getMonth();

  data_field.daily.push({
    value: average,
    day: day,
    month: month,
    timestamp: new Date(),
    source: real,
  });

  // console.log(`After update ${data_field.daily}`);
};

module.exports = { updateDataField };
