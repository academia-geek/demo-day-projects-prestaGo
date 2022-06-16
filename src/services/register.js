import axios from "axios";
const url = "http://104.196.134.127:5080";

const Register = async (data) => {
  try {
    const response = await axios.post(`${url}/api/registro`, data);
    console.log(response);
    if (response.error) {
      console.log("Ha ocurrido un error", response.error);
    } else {
      console.log(response.data);
      return response.data
    }
  } catch (error) {
    console.log("error en catch", error);
  }
};
export default Register;