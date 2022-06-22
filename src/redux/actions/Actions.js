import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import Swal from "sweetalert2";
import { auth, google } from "../../firebase/FirebaseConfig";
import { solicitarCredito } from "../../services/credito";
import { register, getDataUser } from "../../services/register";
import simular from "../../services/simulador";
import {
  LoginTypes,
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
      console.log(newDataUser);
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
      id: user.id,
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
        console.log(newDataUser);
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

export const prestamoReducer = (data, token) => {
  return async (dispatch) => {
    try {
      const prestamo = await solicitarCredito(data, token);
      console.log(prestamo);
    } catch (error) {
      console.log(error);
    }
  };
};
