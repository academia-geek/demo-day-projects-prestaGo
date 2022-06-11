import axios from "axios";
const url = "http://104.196.134.127:5080";

const simular = async (data) => {
  const response = await axios.post(`${url}/mongo`, data);
  if (response.error) {
    console.log("Ha ocurrido un error", response.error);
  } else {
      console.log(data);
  }
};

export default simular
