import React from 'react'
import Simulador from '../components/landing/Simulador'
import { ContainerPagePrincipal } from '../styles/principal'

const Principal = () => {
  return (
    <div>
        <ContainerPagePrincipal>
            <Simulador/>
        </ContainerPagePrincipal>
    </div>
  )
}

export default Principal