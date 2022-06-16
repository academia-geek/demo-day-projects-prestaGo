import {getAuth, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth"
import Swal from "sweetalert2";
import { google } from "../../firebase/FirebaseConfig";
import register from "../../services/register";
import { LoginTypes, RegisterTypes } from "../types/Types";

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

export const registerAction =  (data) =>{
    return async (dispatch) =>{
        try {
            const result = await register(data);
        Swal.fire({
            position: "center",
            text: `Registro Exitoso`,
            icon: "success",
            title: "Exitoso!!",
            showConfirmButton: false,
            timer: 1500,
          });
        dispatch({
            type: RegisterTypes.register,
            payload: result
        })
        } catch (error) {
            console.log(error);
            Swal.fire({
              position: "center",
              text: `Ocurrio un error`,
              icon: "error",
              title: "Error",
              showConfirmButton: false,
              timer: 1500,
            });
        }
        
    }
}
