import React from "react";
import {
  ContainerTitle,
  Header,
  SubtituloHeader,
  TituloHeader,
} from "../../styles/landingStyles";

const LandingHeader = () => {
  return (
    <>
      <Header>
        <ContainerTitle>
          <TituloHeader>
            <h1>PrestaGo</h1>
          </TituloHeader>
          <SubtituloHeader>
            <p>Pide tu cupo de crédito en 15 minutos </p>
          </SubtituloHeader>
        </ContainerTitle>
      </Header>
    </>
  );
};

export default LandingHeader;
