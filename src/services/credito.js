import axios from "axios"
import Config from "../config/config"
const url = Config.getUrlService()
 const solicitarCredito = async (data, token) =>{
    const dataCredito = axios.post(`${url}/api/prestamo`, data,{
        headers:{
            authorization: `Bearer ${token}` 
        }
    })
}

