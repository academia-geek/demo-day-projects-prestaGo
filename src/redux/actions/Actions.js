import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import { LoginTypes } from "../types/Types";

export const loginAsync = (email, password)=>{
    return(dispatch)=>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email, password)
        .then(({user})=>{
            dispatch(loginSync(user.email, user.password))
        })
        .catch (error =>{
            alert('Incorrecto')
        })
    }
}


export const loginSync = (email, password)=>{
    return{
        type: LoginTypes.login,
        payload: {email, password}
    }
}