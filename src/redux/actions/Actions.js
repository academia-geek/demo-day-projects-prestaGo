import { async } from "@firebase/util";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import Swal from "sweetalert2";
import { auth, google } from "../../firebase/FirebaseConfig";
import { register, getDataUser } from "../../services/register";
import simular from "../../services/simulador";
import { LoginTypes, RegisterTypes, simuladorTypes, userTypes } from "../types/Types";

export const loginAsync = (email, password) => {
  return async (dispatch) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      const dataUser = await getDataUser();
      const userRegister = dataUser.filter((item) => item.email === email);
      console.log(userRegister);
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
      name: user.displayName || user.nombre_completo,
      accessToken: user.accessToken,
      rol: user.rol,
      isAuthenticated: true,
    },
  };
};

export const LoginGoogle = () => {
  return (dispatch) => {
    signInWithPopup(auth, google)
      .then(async ({ user }) => {
        const dataUser = await getDataUser(user.accessToken);
        const userRegister = dataUser.filter(
          (item) => item.email === user.email
        );
        const newDataUser = {
          accessToken: user.accessToken,
          displayName: user.displayName,
          ...userRegister[0],
        };
        dispatch(loginSync(newDataUser));
      })
      .catch((e) => {
        Swal.fire({
          position: "center",
          text: `Ocurrio un error en el servidor`,
          icon: "error",
          title: "Error",
          showConfirmButton: true,
        });
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
      const newUsr = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.contrasena
      );
      console.log(newUsr);
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
      console.log(result);
      Swal.fire({
        position: "center",
        text: `Revisa tu correo , alli encontraras los resultados`,
        icon: "success",
        title: "Proceso Exitoso!!",
        showConfirmButton: true,
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
        showConfirmButton: true,
      });
    }
  };
};


export const users = (token)=>{
  return async (dispatch)=>{
    const dataUsers = await getDataUser(token);
    dispatch({
      type: userTypes.users,
      payload: dataUsers
    })
  }
}
