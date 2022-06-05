import React from "react";
import { Container } from "react-bootstrap";
import { ContainerContentSectionInicial, ImgSectionInicial, ParrafoSectionInicial, SectionInicial } from "../../styles/landingStyles";

const SectionPresentacion = () => {
  return (
    <>
      <Container>
        <SectionInicial>
          <ContainerContentSectionInicial>
            <ParrafoSectionInicial>
              En PrestaGo puedes tener dinero a la mano,Sin trámites, filas,
              codeudores, anticipos ni cargos ocultos y asegurar lo que más
              quieres. Todo mientras mejoras tu perfil de crédito y reinventas
              tu vida financiera.
            </ParrafoSectionInicial>
          </ContainerContentSectionInicial>
          <ContainerContentSectionInicial>
            <ImgSectionInicial
              src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1654455940/PrestaGo/credito-rotativo-removebg-preview_xvtnfl.png"
              alt=""
            />
          </ContainerContentSectionInicial>
        </SectionInicial>
        <SectionInicial>
          <ContainerContentSectionInicial>
            <ImgSectionInicial
              src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1654450646/PrestaGo/img-remodel-mb_ashbua.png"
              alt=""
            />
          </ContainerContentSectionInicial>
          <ContainerContentSectionInicial>
            <ParrafoSectionInicial>
              Seguro tú tienes sueños más grandes, como comprar tu carro, tener
              tu propia casa o viajar por el mundo. Aumenta tu puntaje de
              creditos y de esa forma conseguiras ser aprobado para créditos más
              grandes.
            </ParrafoSectionInicial>
          </ContainerContentSectionInicial>
        </SectionInicial>
      </Container>
    </>
  );
};

export default SectionPresentacion;
