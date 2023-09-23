import axios from "axios";

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
    const token = await AsyncStorage.getItem("access_token");
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

export { login, checkEmail, registerUser, verify, updateProfile };
