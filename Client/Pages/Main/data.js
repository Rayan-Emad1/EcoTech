// Mock data object used for LineChart and BarChart

const HourlyHumid = {
  labels: [
    "1:00",
    "2:00",
    "3:00",
    "4:00",
    "5:00",
    "6:00",
    "7:00",
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
  ],
  datasets: [
    {
      data: [25, 30, 35, 28, 26, 30, 32, 34, 32, 33, 33, 32],
      color: (opacity = 1) => `rgba(244, 244, 244, ${opacity})`,
      legend: ["Real Values"],
    },
  ],
};

const WeeklyHumid = {
  labels: ["29/7", "29/7", "29/7", "29/7", "29/7", "29/7", "29/7"],
  datasets: [
    {
      data: [25, 27, 24, 28, 25, 26, 25],
      color: (opacity = 1) => `rgba(244, 244, 244, ${opacity})`,
      legend: ["Real Values"],
    },
  ],
};

const HourlyTemp = {
  labels: [
    "1:00",
    "2:00",
    "3:00",
    "4:00",
    "5:00",
    "6:00",
    "7:00",
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
  ],
  datasets: [
    {
      data: [24, 23, 22, 21, 21, 24, 23, 22, 21, 21, 24, 30, 26],
      color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
      legend: ["Predicted Values"],
    },
    {
      data: [24, 23, 22, 21, 21, 24, 23, 22, 21, 21],
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      legend: ["Real Values"],
    },
  ],
};

const WeeklyTemp = {
  labels: ["25/7", "26/7", "27/7", "28/7", "29/7", "31/7", "1/8"],
  datasets: [
    {
      data: [24, 23, 22, 21, 21, 21, 24],
      color: (opacity = 1) => `rgba(250, 0 , 0, ${opacity})`,
      legend: ["Predicted Values"],
    },
    {
      data: [24, 23, 22, 21, 21],
      color: (opacity = 1) => `rgba(244, 244, 244, ${opacity})`,
      legend: ["Real Values"],
    },
  ],
};

export { HourlyHumid, WeeklyHumid, HourlyTemp, WeeklyTemp };
