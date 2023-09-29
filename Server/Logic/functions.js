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

  // console.log(`Before update ${data_field.daily}`);
  // console.log("====================================");
  // console.log(sum);
  // console.log(average);
  // console.log("====================================");

  const timestamp = new Date();
  const month = timestamp.getMonth()+1;

  data_field.daily.push({
    value: average,
    day: day,
    month: month,
    timestamp: new Date(),
    source: "real",
  });

  // console.log(`After update ${data_field.daily}`);
};

const getStartTimeOfCurrentWeek = () => {
  const now = new Date();
  now.setDate(now.getDate() - 7);
  now.setHours(0, 0, 0, 0);
  return now;
};

const getStartTimeOfPreviousWeek = (date) => {
  date.setDate(date.getDate() - 7);
  date.setHours(0, 0, 0, 0);
  return date;
};

const getWeekOfData = (data_field, start_date) => {
  const end_date = new Date(start_date);
  end_date.setDate(start_date.getDate() + 36);

  const week_data = data_field.filter(
    (data) => data.timestamp >= start_date && data.timestamp <= end_date
  );
  return week_data;
};

const getCurrentDayData = (daily_values) => {
  const currentDate = new Date();
  const dayOfMonth = currentDate.getDate();
  
  // console.log("Day of the month:", dayOfMonth);

  const currentDayData = daily_values.filter((data) => {
    const dataDay = data.day;
    // console.log(dataDay)
    return dataDay == dayOfMonth;
  });
  // console.log(daily_values)
  // console.log(currentDayData)
  return currentDayData;
};


module.exports = {
  updateDataField,
  getStartTimeOfCurrentWeek,
  getStartTimeOfPreviousWeek,
  getWeekOfData,
  getCurrentDayData,
};
