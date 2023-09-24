import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = "http://192.168.0.2:8080/";

const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

const checkEmail = async (email) => {
  try {
    const response = await axios.post(`${BASE_URL}auth/check_email`, {
      email,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

const registerUser = async (userData) => {
  try {
    const { first_name, last_name, email, password, birthday } = userData;
    const response = await axios.post(`${BASE_URL}auth/register_user`, {
      first_name,
      last_name,
      email,
      password,
      birthday,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
    throw error;
  }
};

const verify = async ({ email, verification_code }) => {
  try {
    const response = await axios.post(`${BASE_URL}auth/verify`, {
      email,
      verification_code,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

const updateProfile = async ({ firstName, lastName, birthday, address }) => {
  try {
    const token = await AsyncStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const response = await axios.put(
      `${BASE_URL}auth/update`,
      {
        new_first: firstName,
        new_last: lastName,
        new_birthday: birthday,
        new_address: address,
      },
      { headers }
    );

    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

const getForests = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.get(`${BASE_URL}user/get_forests`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

const fetchAndTransformForestData = async (forestId) => {
  try {
    const token = await AsyncStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    const response = await axios.post(
      `${BASE_URL}user/get_forest_data`,
      { forestId: forestId },
      { headers }
    );
    const forestData = response.data;

    // Determine the color based on fire_alarm
    const colorForFireAlarm = forestData.fire_alarm
      ? "rgba(255, 0, 0, 1)"
      : "rgba(0, 255, 0, 1)";

    // Filter and map real values for hourly temperature
    const hourlyRealTemperatureData = forestData.todaysData.temperature
      .filter((data) => data.source === "real")
      .map((data) => data.value);

    const hourlyTempData = {
      labels: forestData.todaysData.temperature
        .filter((data) => data.source === "real")
        .map((data) => `${data.hour}:00`),
      datasets: [
        {
          data: hourlyRealTemperatureData,
          color: (opacity = 1) => colorForFireAlarm,
          legend: ["Predicted Values"],
        },
        {
          data: hourlyRealTemperatureData,
          color: (opacity = 1) => "rgba(255, 255, 255, " + opacity + ")",
          legend: ["Real Values"],
        },
      ],
    };

    // Filter and map real values for weekly temperature
    const weeklyRealTemperatureData =
      forestData.threeWeeksOfData.currentWeek.temperature
        .filter((data) => data.source === "real")
        .map((data) => data.value);

    const weeklyTempData = {
      labels: forestData.threeWeeksOfData.currentWeek.temperature
        .filter((data) => data.source === "real")
        .map((data) => `${data.day}/${data.month}`),
      datasets: [
        {
          data: weeklyRealTemperatureData,
          color: (opacity = 1) => colorForFireAlarm,
          legend: ["Predicted Values"],
        },
        {
          data: weeklyRealTemperatureData,
          color: (opacity = 1) => "rgba(244, 244, 244, " + opacity + ")",
          legend: ["Real Values"],
        },
      ],
    };

    // Filter and map real values for hourly humidity (similar changes can be made for other datasets)

    const hourlyRealHumidityData = forestData.todaysData.humidity
      .filter((data) => data.source === "real")
      .map((data) => data.value);

    const hourlyHumidData = {
      labels: forestData.todaysData.humidity
        .filter((data) => data.source === "real")
        .map((data) => `${data.hour}:00`),
      datasets: [
        {
          data: hourlyRealHumidityData,
          color: (opacity = 1) => "rgba(244, 244, 244, " + opacity + ")",
          legend: ["Real Values"],
        },
      ],
    };

    // Filter and map real values for weekly humidity (similar changes can be made for other datasets)

    const weeklyRealHumidityData =
      forestData.threeWeeksOfData.currentWeek.humidity
        .filter((data) => data.source === "real")
        .map((data) => data.value);

    const weeklyHumidData = {
      labels: forestData.threeWeeksOfData.currentWeek.humidity
        .filter((data) => data.source === "real")
        .map((data) => `${data.day}/${data.month}`),
      datasets: [
        {
          data: weeklyRealHumidityData,
          color: (opacity = 1) => "rgba(244, 244, 244, " + opacity + ")",
          legend: ["Real Values"],
        },
      ],
    };

    return {
      hourlyTempData,
      weeklyTempData,
      hourlyHumidData,
      weeklyHumidData,
    };
  } catch (error) {
    console.error("E", error);
    throw error;
  }
};

export {
  login,
  checkEmail,
  registerUser,
  verify,
  updateProfile,
  getForests,
  fetchAndTransformForestData,
};
