import React from "react";
import { Container, Form } from "react-bootstrap";
import { ContainerInput, Icon, InputText } from "../../styles/formStyled";
import {
  ContainerFormSimulador,
  ContainerImgSimulador,
  ContainerSimulador,
  ImgSimulador,
  SectionSimulador,
} from "../../styles/landingStyles";
import { FaUser, FaEnvelope, FaRegCalendarAlt } from "react-icons/fa";
import {AiFillDollarCircle} from "react-icons/ai"
import { Boton } from "../../styles/loginStyled";

const Simulador = () => {
  return (
    <>
      <ContainerSimulador>
        <Container>
          <SectionSimulador>
            <ContainerImgSimulador>
              <ImgSimulador
                src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1654450646/PrestaGo/calculadora-margen-de-error_bwa4ic.png"
                alt=""
              />
            </ContainerImgSimulador>
            <ContainerFormSimulador>
              <h1 className="text-center text-white mt-5">Simula tu Crédito</h1>
              <div>
                <Form>
                  <ContainerInput>
                    <Icon>
                      <FaUser color="gray" size={24} />
                    </Icon>
                    <InputText
                      type="text"
                      placeholder="Nombre Completo"
                      autoComplete="off"
                    />
                  </ContainerInput>
                  <ContainerInput>
                    <Icon>
                      <FaEnvelope color="gray" size={24} />
                    </Icon>
                    <InputText
                      type="email"
                      placeholder="Email"
                      autoComplete="off"
                    />
                  </ContainerInput>
                  <ContainerInput>
                    <Icon>
                      <AiFillDollarCircle color="gray" size={24} />
                    </Icon>
                    <InputText
                      type="number"
                      placeholder="Monto a Prestar"
                      autoComplete="off"
                    />
                  </ContainerInput>
                  <ContainerInput>
                    <Icon>
                      <FaRegCalendarAlt color="gray" size={24} />
                    </Icon>
                    <InputText
                      type="text"
                      placeholder="Plazo en Meses"
                      autoComplete="off"
                    />
                  </ContainerInput>
                  <Boton type="submit">Calcular</Boton>
                </Form>
              </div>
            </ContainerFormSimulador>
          </SectionSimulador>
        </Container>
      </ContainerSimulador>
    </>
  );
};

export default Simulador;
