import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import Swal from "sweetalert2";
import { auth, google } from "../../firebase/FirebaseConfig";
import register from "../../services/register";
import simular from "../../services/simulador";
import { LoginTypes, RegisterTypes, simuladorTypes } from "../types/Types";

export const loginAsync = (email, password) => {
  return async (dispatch) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      dispatch(loginSync(user));
    } catch (error) {
      console.log(error);
    }
  };
};

export const loginSync = (user) => {
  return {
    type: LoginTypes.login,
    payload: {
      id: user.uid,
      name: user.displayName,
      accessToken: user.accessToken,
      isAuthenticated: true,
    },
  };
};

export const LoginGoogle = () => {
  return (dispatch) => {
    signInWithPopup(auth, google)
      .then(({ user }) => {
        console.log(user);
        dispatch(loginSync(user));
      })
      .catch((e) => {
        alert("Incorrecto");
      });
  };
};
export const logout = () => {
  return (dispatch) => {
    signOut(auth);
    dispatch({
      type: LoginTypes.logout,
      payload: {
        isAuthenticated: false,
      },
    });
  };
};

export const registerAction = (data) => {
  return async (dispatch) => {
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
        payload: result,
      });
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
  };
};

export const simuladorAction = (data) => {
  return async (dispatch) => {
    try {
      const result = await simular(data);
      Swal.fire({
        position: "center",
        text: `Revisa tu correo , alli encontraras los resultados`,
        icon: "success",
        title: "Proceso Exitoso!!",
        showConfirmButton: false,
        timer: 2500,
      });
      dispatch({
        type: simuladorTypes.simulador,
        payload: result,
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: "center",
        text: `Ocurrio un error, intentalo de nuevo`,
        icon: "error",
        title: "Error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
};
