import React from 'react'
import { Container } from 'react-bootstrap'
import { ImgSectionProceso, SectionProceso } from '../../styles/landingStyles'

const SectionPasos = () => {
  return (
    <div>
        <Container>
            <h1 className='text-center pt-5'>Pide tu crédito 100% en línea en tres pasos.</h1>
            <SectionProceso>
            <div>
                <div>
                    <ImgSectionProceso src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1654450646/PrestaGo/prestaGO_ybdnpp.png" alt="" />
                </div>
                <h5 className='text-center'>Calcula tu prestamo</h5>
            </div>
            <div>
                <div>
                    <ImgSectionProceso src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1654450646/PrestaGo/prestaGO_1_whobvh.png" alt="" />
                </div>
                <h5 className='text-center'>Registrate y pidelo</h5>
            </div>
            <div>
                <div>
                    <ImgSectionProceso src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1654450646/PrestaGo/prestaGO_2_n6a0yy.png" alt="" />
                </div>
                <h5 className='text-center'>Recibe su dinero al ser aprobado</h5>
            </div>
            </SectionProceso>
        </Container>
    </div>
  )
}

export default SectionPasos