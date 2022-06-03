import { LoginReducer } from "../Reducers/Reducers"
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"

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
        types: LoginReducer.login,
        payload: {email, password}
    }
}