import axios from "axios";
import Config from "../config/Config";
const url = Config.getUrlService();

const register = async (data) => {
  try {
    const response = await axios.post(`${url}/api/registro`, data);
    console.log(response);
    if (response.error) {
      console.log("Ha ocurrido un error", response.error);
    } else {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.log("error en catch", error);
  }
};
const getDataUser = async (token) => {
  try {
    const response = await axios.get(`${url}/api/registro`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.error) {
      console.log("Ha ocurrido un error", response.error);
    } else {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.log("error en catch", error);
  }
};

export { register, getDataUser };
