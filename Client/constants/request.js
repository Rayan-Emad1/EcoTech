import axios from "axios";

const BASE_URL = "http://192.168.0.5:8080/";

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

export { login };
