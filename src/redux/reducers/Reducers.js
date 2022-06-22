import {
  LoginTypes,
  RegisterTypes,
  simuladorTypes,
  userTypes,
} from "../types/Types";
const authState = {
  isAuthenticated: false,
};
export const LoginReducer = (state = authState, action) => {
  switch (action.type) {
    case LoginTypes.login:
      return action.payload;
    case LoginTypes.logout:
      return action.payload;
    default:
      return state;
  }
};
const registerInitialState = {
  nombre_completo: "",
  fecha_nacimiento: "",
  numero_celular: 0,
  tipo_documento: "",
  n_documento: 0,
  profesion_u_oficio: "",
  direccion: "",
  email: "",
  rol: "USUARIO",
  contrasena: "",
};
export const registerReducer = (state = registerInitialState, action) => {
  switch (action.type) {
    case RegisterTypes.register:
      return action.payload;
    default:
      return state;
  }
};
export const simuladorReducer = (state = {}, action) => {
  switch (action.type) {
    case simuladorTypes.showSimulador:
      return action.payload;
    case simuladorTypes.hideSimulador:
      return action.payload;

    default:
      return state;
  }
};

export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case userTypes.users:
      return action.payload;
    default:
      return state;
  }
};
