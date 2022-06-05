import React from 'react'
import LandingHeader from '../components/landing/LandingHeader'
import SectionPasos from '../components/landing/SectionPasos'
import SectionPresentacion from '../components/landing/SectionPresentacion'
import Simulador from '../components/landing/Simulador'


const LandingPage = () => {
  return (
    <div>
        <LandingHeader/>
        <SectionPresentacion/>
        <SectionPasos/>
        <Simulador/>
    </div>
  )
}

export default LandingPage