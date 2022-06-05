import React from "react";
import { FaFacebook, FaKey, FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import { ContainerInput, Icon, InputText } from "../styles/formStyled";

import {
  Boton,
  Formulario,
  Redes,
  Subtitulo,
  Titulo,
  Wrapper
} from "../styles/loginStyled";
const Login = () => {
  return (
    <div>
      <Wrapper>
        <Formulario >
          <Titulo>
            <img
              src="https://res.cloudinary.com/dgzfc4clj/image/upload/v1654102012/Soluci%C3%B3n_de_credito_1_u2o7b8.png"
              style={{ width: "111px", display: "flex", align: "center" }}
              alt="logo"
            />
          </Titulo>
          <ContainerInput>
            <Icon>
              <FaUser color="gray" size={24} />
            </Icon>
            <InputText type="text" placeholder="Usuario" autoComplete="off" />
          </ContainerInput>

          <ContainerInput>
            <Icon>
              <FaKey color="gray" size={24} />
            </Icon>
            <InputText
              type="password"
              placeholder="Contraseña"
              autoComplete="off"
            />
          </ContainerInput>
          <Redes>
            <CustomButton
              color="white"
              backgroundColor="blue"
              Icon={FaFacebook}
              value="Iniciar Sesion con Facebook"
              iconSize="24"
            ></CustomButton>
            <CustomButton
              color="black"
              backgroundColor="white"
              Icon={FcGoogle}
              value="Iniciar Sesion con Google"
              iconSize="24"
              border="1px solid black"
            ></CustomButton>
          </Redes>
          <Subtitulo>
            {"¿No tienes cuenta? "}
            <Link to="/registro">Registrate</Link>
          </Subtitulo>
          <Boton>Iniciar Sesion</Boton>
        </Formulario>
      </Wrapper>
    </div>
  );
};

export default Login;