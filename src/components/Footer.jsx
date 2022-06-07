import React from 'react'
import { FaEnvelope, FaPhone, FaFacebook} from "react-icons/fa";
import {AiFillTwitterCircle, AiFillInstagram} from "react-icons/ai"
import { Container } from 'react-bootstrap';
import { LogoFooter } from '../styles/footerStyle';
const Footer = () => {
  return (
    <div className=' py-5'>
        <Container className='d-flex justify-content-between'>
            <div>
                <h5 className=' text-dark'>Contactanos</h5>
                <div className='d-flex'>          
                <FaEnvelope color="gray" size={24} />
                <p className=' mx-2'> Contact@prestago.com</p>
                </div>
                <div className='d-flex'>          
                <FaPhone color="gray" size={24} />
                <p className=' mx-2'>+57 555-55-55-5555</p>
                </div>
            </div>
            <div>
                <LogoFooter src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1654454032/PrestaGo/prestaGo-logo-png-recorte_blfwfn.png" alt="" />
            </div>
           
            <div>
            <h5 className=' text-dark'>Siguenos</h5>
                <div className='d-flex'>
                <div>
                    <FaFacebook color="gray" size={40}/>
                </div>
                <div>
                    <AiFillTwitterCircle color="gray" size={44}/>
                </div>
                <div>
                    <AiFillInstagram color="gray" size={44}/>
                </div>
                </div>  
            </div>
        </Container>
    </div>
  )
}

export default Footer