import React from 'react'
import CalculadoraPrestamo from '../components/CalculadoraPrestamo'
import SectionPasos from '../components/landing/SectionPasos'
import { ContainerPagePrincipal } from '../styles/principal'

const Principal = () => {
  return (
    <div>
      
        <ContainerPagePrincipal>
          <div>
            <SectionPasos/>
          <CalculadoraPrestamo/>
          </div>
          
        </ContainerPagePrincipal>
    </div>
  )
}

export default Principal