import { LoginTypes, RegisterTypes } from "../types/Types";

export const LoginReducer = (state = {}, action) => {
  switch (action.type) {
    case LoginTypes.login:
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
}
export const registerReducer = (state = registerInitialState, action) => {
  switch (action.type) {
    case RegisterTypes.register:
      return action.payload;
    default:
      return state;
  }
};
