import axios from "axios";
import Config from "../config/Config";
const url = Config.getUrlService()

const simular = async (data) => {
  const response = await axios.post(`${url}/mongo`, data);
  if (response.error) {
    console.log("Ha ocurrido un error", response.error);
  } else {
      console.log(data);
  }
};

export default simular
