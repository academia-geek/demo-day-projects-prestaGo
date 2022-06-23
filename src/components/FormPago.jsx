import React from 'react'
import { ContainerInput, Icon, InputText } from '../styles/formStyled'
import { Boton, Formulario } from '../styles/loginStyled'
import {
    AiFillCreditCard,
    AiFillDollarCircle
    
  } from "react-icons/ai";
  import {
    BsFillCreditCard2FrontFill, BsFillCalendar2CheckFill, BsCreditCard2Back
    
  } from "react-icons/bs";

const FormPago = () => {
  return (
    <div>
    <Formulario class="card p-2">
      <ContainerInput>
        <Icon>
            <AiFillCreditCard color="gray" size={24}/>
        </Icon>
        <InputText type="text" class="form-control" id="cc-name" placeholder="Nombre de la tarjeta"/>
        </ContainerInput>  
        <ContainerInput>
        <Icon>
            <BsFillCreditCard2FrontFill color="gray" size={24}/>
        </Icon>
        <InputText type="number" class="form-control" id="cc-name" placeholder="Numero de la tarjeta"/>
        </ContainerInput>          
        <ContainerInput>
        <Icon>
            <BsFillCalendar2CheckFill color="gray" size={24}/>
        </Icon>
        <InputText type="text" class="form-control" id="cc-name" placeholder="Fecha de Expiracion"/>
        </ContainerInput>
        <ContainerInput>
        <Icon>
            <BsCreditCard2Back color="gray" size={24}/>
        </Icon>
        <InputText type="number" class="form-control" id="cc-name" placeholder="CVV"/>
        </ContainerInput>
        <ContainerInput>
        <Icon>
            <AiFillDollarCircle color="gray" size={24}/>
        </Icon>
        <InputText type="number" class="form-control" id="cc-name" placeholder="Monto a Pagar"/>
        </ContainerInput> 
        <Boton type="submit">
          Pagar
        </Boton>              
    </Formulario>
    </div>
  )
}

export default FormPago