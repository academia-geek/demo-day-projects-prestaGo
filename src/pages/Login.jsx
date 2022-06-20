import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebook, FaKey, FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import useForm from "../hooks/useForm";
import { loginAsync, LoginGoogle } from "../redux/actions/Actions";
import { ContainerInput, Icon, InputText } from "../styles/formStyled";

import {
  Boton,
  Formulario,
  Redes,
  Subtitulo,
  Titulo,
  Wrapper,
} from "../styles/loginStyled";

const Login = () => {
  const dispatch = useDispatch();
  const [formValue, handleInputChange, rest] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValue;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAsync(email, password));
    rest();
  };

  const handleGoogle = () => {
    dispatch(LoginGoogle());
  };

  return (
    <Wrapper>
      <Container className="d-flex justify-content-between">
        <div>
          <img
            src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1654638700/PrestaGo/giro-ld01-mb_ihqrkc.png"
            alt="info-"
          />
        </div>
        <div className="w-50">
          <Formulario backgroundColor="#00a8de" onSubmit={handleSubmit}>
            <Titulo>
              <h1 className=" text-white">Inicio de Sesion</h1>
            </Titulo>
            <ContainerInput>
              <Icon>
                <FaUser color="gray" size={24} />
              </Icon>
              <InputText
                type="email"
                name="email"
                placeholder="Usuario"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
              />
            </ContainerInput>

            <ContainerInput>
              <Icon>
                <FaKey color="gray" size={24} />
              </Icon>
              <InputText
                type="password"
                name="password"
                placeholder="Contraseña"
                autoComplete="off"
                value={password}
                onChange={handleInputChange}
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
                onClick={handleGoogle}
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
              <Link className="text-white" to="/registro">
                Registrate
              </Link>
            </Subtitulo>
            <Boton>Iniciar Sesion</Boton>
          </Formulario>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Login;
