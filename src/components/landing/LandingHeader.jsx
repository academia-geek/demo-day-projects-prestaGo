import React from 'react'
import { Header, SubtituloHeader, TituloHeader } from '../../styles/landingStyles'


const LandingHeader = () => {
  return (
      <>
      <Header>
        <TituloHeader>
            <h1>PrestaGo</h1>
        </TituloHeader>
        <SubtituloHeader>
            <p>Pide tu cupo de crédito en 15 minutos </p>
        </SubtituloHeader>
    </Header>
      </>
    
  )
}

export default LandingHeader