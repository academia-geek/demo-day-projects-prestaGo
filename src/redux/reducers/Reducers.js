import { LoginTypes } from "../Types/Types";

export const LoginReducer = (state = {}, action)=>{
    switch (action.type){
        case LoginTypes.login:
            return action.payload;
    default :
        return state 
    }
}