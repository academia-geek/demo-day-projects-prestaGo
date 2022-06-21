import React from 'react'
import CalculadoraPrestamo from '../components/CalculadoraPrestamo'
import { ContainerPagePrincipal } from '../styles/principal'

const Principal = () => {
  return (
    <div>
        <ContainerPagePrincipal>
            <CalculadoraPrestamo/>
        </ContainerPagePrincipal>
    </div>
  )
}

export default Principal