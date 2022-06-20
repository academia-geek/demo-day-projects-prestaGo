import React from "react";
import { Container } from "react-bootstrap";
import FormRegister from "../components/FormRegister";
import { ContainerFormRegister } from "../styles/formStyled";
import { Wrapper } from "../styles/loginStyled";

const Register = () => {
  return (
    <div>
      <Wrapper justifyContent="space-between">
        <Container>
        <div className="d-flex">
          <div className="w-50">
            <img className="p-5"
              src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1654461523/PrestaGo/img-01-dk_efp3ng.png"
              alt="info-register"
            />
          </div>
          <ContainerFormRegister>
          <FormRegister />
          </ContainerFormRegister>
        </div>
        </Container>
      </Wrapper>
    </div>
  );
};

export default Register;
