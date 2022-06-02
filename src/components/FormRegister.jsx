import React from "react";
import { TituloRegister } from "../styles/formStyled";
import { Boton, Formulario, Label, Titulo, Wrapper } from "../styles/loginStyled";

const FormRegister = () => {
  return (
    <div>
      <Wrapper>
       <Formulario>
        <Titulo>
        <img src='https://res.cloudinary.com/dgzfc4clj/image/upload/v1654102012/Soluci%C3%B3n_de_credito_1_u2o7b8.png' style={{width:'70px', display:'flex',align:'right'}} alt='logo'/>
        <TituloRegister>Registrarse</TituloRegister>
        </Titulo>
        <Label before="\F4DA" type='text' placeholder='Nombre Completo' autoComplete='off'/>
        <Label  type='text' placeholder='Telefono' autoComplete='off'/>
        <Label  type='email' placeholder='Email' autoComplete='off'/>
        <Label  type='text' placeholder='Fecha de Nacimiento' autoComplete='off'/>
        <Label  type='select' placeholder='Tipo de documento' autoComplete='off'/>
        <Label  type='number' placeholder='Cedula' autoComplete='off'/>
        <Label  type='text' placeholder='Direccion' autoComplete='off'/>
        <Label  type='text' placeholder='Profesion u Oficio' autoComplete='off'/>
        <Boton type="submit">Registrarse</Boton>
        </Formulario>
      </Wrapper>
    </div>
  );
};

export default FormRegister;
