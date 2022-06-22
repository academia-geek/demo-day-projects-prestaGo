import axios from "axios";
import Config from "../config/Config";
const url = Config.getUrlService();
export const solicitarCredito = async (data, token) => {
  try {
    const response = await axios.post(`${url}/api/prestamo`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response)
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
