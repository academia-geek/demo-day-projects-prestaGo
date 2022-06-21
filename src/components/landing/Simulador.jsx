import React from "react";
import { Container } from "react-bootstrap";
import {
  ContainerFormSimulador,
  ContainerImgSimulador,
  ContainerSimulador,
  ImgSimulador,
  SectionSimulador,
} from "../../styles/landingStyles";
import CalculadoraPrestamo from "../CalculadoraPrestamo";


const Simulador = () => {
  
  return (
    <>
      <ContainerSimulador>
        <Container>
          <hr />
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
             <CalculadoraPrestamo/> 
             </div>
            </ContainerFormSimulador>
          </SectionSimulador>
        </Container>
      </ContainerSimulador>
    </>
  );
};

export default Simulador;
