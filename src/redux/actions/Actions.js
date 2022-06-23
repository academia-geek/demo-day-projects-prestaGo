import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import Swal from "sweetalert2";
import { auth, google } from "../../firebase/FirebaseConfig";
import { getDataCredito, solicitarCredito } from "../../services/credito";
import { register, getDataUser } from "../../services/register";
import simular from "../../services/simulador";
import {
  LoginTypes,
  prestamoTypes,
  RegisterTypes,
  simuladorTypes,
  userTypes,
} from "../types/Types";

export const loginAsync = (email, password) => {
  return async (dispatch) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      const dataUser = await getDataUser(user.accessToken);
      const userRegister = dataUser.filter((item) => item.email === email);
      const newDataUser = {
        accessToken: user.accessToken,
        displayName: user.displayName,
        ...userRegister[0],
      };
      return loginSync(newDataUser)
    } catch (error) {
      console.log(error);
    }
  };
};

export const loginSync = (user) => {
  return (dispatch)=>{
    dispatch({
      type: LoginTypes.login,
      payload: {
        id: user.id,
        name: user.displayName || user.nombre_completo,
        accessToken: user.accessToken,
        rol: user.rol,
        isAuthenticated: true,
      },
    })
  }
};


export const LoginGoogle = () => {
  return (dispatch) => {
    signInWithPopup(auth, google)
      .then(async ({ user }) => {

        const dataUser = await getDataUser(user.accessToken);
        console.log(`data user`)
        console.log(dataUser)
        console.log(`data user`)
        console.log(`user`)
        console.log(user)
        console.log(`user`)

        const userRegister = dataUser.filter(
          (item) => item.email === user.email
        );
        
          /* if (userRegister.length === 0) {
            const newUser = await register({
              email: user.email,
              nombre_completo: user.displayName,
            });
          } */
        const newDataUser = {
          accessToken: user.accessToken,
          displayName: user.displayName,
          ...userRegister[0],
        };
        return loginSync(newDataUser);
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

      updateProfile(auth.currentUser, {
        displayName: data.nombre_completo,
      }).then(async () => {
        console.log("Ya se actualizo el nombre en google");
        const result = await register(data);
        if (result){
          const newDataUser = {
            accessToken: newUsr.accessToken,
            displayName: newUsr.displayName,
            ...result,
          };
          console.log(newDataUser);
  
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
            payload: {
              id: newDataUser.id,
              name: newDataUser.displayName || newDataUser.nombre_completo,
              accessToken: newDataUser.accessToken,
              rol: newDataUser.rol,
              isAuthenticated: true,
            },
          });
        }else {
          console.log("no se realizo registro en la api")
        }
        
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

export const hideSimuladorModal = () => {
  return async (dispatch) => {
    dispatch({
      type: simuladorTypes.hideSimulador,
      payload: {
        showModalCalculo: false,
      },
    });
  };
};
export const simuladorAction = (data) => {
  return async (dispatch) => {
    try {
      const result = await simular(data);
      console.log(result);

      dispatch({
        type: simuladorTypes.showSimulador,
        payload: {
          showModalCalculo: true,
          simulacionData: {
            intereses: result.intereses,
            total: result.total,
          },
        },
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

export const users = (token) => {
  return async (dispatch) => {
    const dataUsers = await getDataUser(token);
    dispatch({
      type: userTypes.users,
      payload: dataUsers,
    });
  };
};

export const prestamoAction = (data, token) => {
  return async (dispatch) => {
    try {
      console.log(`====`)
      console.log(data)
      console.log(`====`)
      const prestamo = await solicitarCredito(data, token);
      console.log(prestamo);
      if (prestamo){
        Swal.fire({
          position: "center",
          text: `Prestamo Solicitado con Exitoso`,
          icon: "success",
          title: "Exito!!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "center",
          text: `Ocurrio un error, intentalo de nuevo`,
          icon: "error",
          title: "Error",
          showConfirmButton: true,
        });
      }
      
    } catch (error) {
      console.log(error);
    }
  };
};

export const listPrestamoAction = (user) => {
  return async (dispatch) => {
    try {
      const dataCredito = await getDataCredito (user.accessToken)
      const listDataCredito = dataCredito.filter ((item) => item.id_registro === user.id)
      if (listDataCredito.length > 0){
        dispatch({
          type:prestamoTypes.prestamo,
          payload:listDataCredito,
        })
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        text: `Ocurrio un error`,
        icon: "error",
        title: "Error",
        showConfirmButton: true,
      });
    return listPrestamoAction
  }
}}