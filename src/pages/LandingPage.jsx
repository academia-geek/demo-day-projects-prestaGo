import React from 'react'
import { useSelector } from 'react-redux'
import LandingHeader from '../components/landing/LandingHeader'
import SectionPasos from '../components/landing/SectionPasos'
import SectionPresentacion from '../components/landing/SectionPresentacion'
import Simulador from '../components/landing/Simulador'
import ModalCalcular from '../components/ModalCalcular'


const LandingPage = () => {
  const simulador = useSelector((state)=> state.simulador)
  return (
    <div>
        <LandingHeader/>
        <SectionPresentacion/>
        <SectionPasos/>
        <Simulador/>
        <ModalCalcular  show={simulador.showModalCalculo}/>
    </div>
  )
}

export default LandingPage