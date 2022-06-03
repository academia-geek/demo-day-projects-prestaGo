import { LoginReducer } from "../Reducers/Reducers"

export const loginSync = (email, password)=>{
    return{
        types: LoginReducer.login,
        payload: {email, password}
    }
}