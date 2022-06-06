import React from 'react'
import { Container } from 'react-bootstrap'
import { FaEnvelope, FaPhone, FaFacebook} from "react-icons/fa";
import {AiFillTwitterCircle, AiFillInstagram} from "react-icons/ai"
const Footer = () => {
  return (
    <div>
        <Container className='d-flex'>
            <div>
                <div className='d-flex'>          
                <FaEnvelope color="gray" size={24} />
                <p> Contact@prestago.com</p>
                </div>
                <div className='d-flex'>          
                <FaPhone color="gray" size={24} />
                <p>+57 555-55-55-5555</p>
                </div>
            </div>
            <div>
                <img src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1654454032/PrestaGo/prestaGo-logo-png-recorte_blfwfn.png" alt="" />
            </div>
            <div className='d-flex'>
                <div>
                    <FaFacebook color="gray" size={24}/>
                </div>
                <div>
                    <AiFillTwitterCircle color="gray" size={24}/>
                </div>
                <div>
                    <AiFillInstagram color="gray" size={24}/>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer