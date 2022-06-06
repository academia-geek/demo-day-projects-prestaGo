import {getAuth, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth"
import { google } from "../../firebase/FirebaseConfig";
import { LoginTypes } from "../types/Types";

export const loginAsync = (email, password)=>{
    return(dispatch)=>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email, password)
        .then(({user})=>{
            dispatch(loginSync(user.uid, user.displayName)
            )
            alert('Bienvenido')
        })
        .catch (error =>{
            alert('Incorrecto')
        })
    }
}


export const loginSync = (id, displayName)=>{
    return{
        type: LoginTypes.login,
        payload: {id, displayName}
    }
}

export const LoginGoogle =()=>{
    return(dispatch)=>{
        const auth = getAuth();
        signInWithPopup(auth, google)
        .then(({user})=>{
            dispatch(loginSync(user.uid, user.displayName))
            alert('Bienvenido')
        })
        .catch(e=>{
            alert('Incorrecto')
        })
    }
}
