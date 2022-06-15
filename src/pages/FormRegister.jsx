import React from "react";
import {
  ContainerInput,
  Icon,
  InputSelect,
  InputText,
  Titulos
} from "../styles/formStyled";
import { Boton, Formulario, Titulo, Wrapper } from "../styles/loginStyled";

import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaCalendar,
  FaIdCard,
  FaHome,
  FaBriefcase
} from "react-icons/fa";
import register from "../services/register";
import useForm from "../hooks/useForm";

const documentTypeOptions = [
  {
    id: 1,
    label: "Cedula de Ciudadania",
    value: "cc"
  },
  {
    id: 2,
    label: "Cedula de Extrangeria",
    value: "ce"
  },
  {
    id: 3,
    label: "Pasaporte",
    value: "pasaporte"
  },
  {
    id: 4,
    label: "DNI",
    value: "dni"
  },
  {
    id: 5,
    label: "Permiso especial de permanencia",
    value: "pep"
  },
  {
    id: 6,
    label: "Permiso por proteccion temporal",
    value: "ppt"
  }
];
const FormRegister = () => {
    const initialState = {
      nombre_completo: "",
      fecha_nacimiento: "",
      numero_celular: 0,
      tipo_documento: "",
      n_documento: 0,
      profesion_u_oficio: "",
      direccion: "",
      email: "",
      rol: "",
      contrasena: ""
    };
  
    const [form, handleInputChange, reset] =
      useForm(initialState);
  
    const handleSubmit=(e)=> {
      e.preventDefault();
      const data = {...form,n_documento:Number(n_documento), numero_celular:Number(numero_celular)}
      register(data)
      reset()
    }
  
    const {nombre_completo, email, fecha_nacimiento,numero_celular,tipo_documento,n_documento, profesion_u_oficio,direccion,contrasena}=form
  return (
    <div>
      <Wrapper justifyContent="space-between">
        <div>
          <img
            src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1654461523/PrestaGo/img-01-dk_efp3ng.png"
            alt="info-register"
          />
        </div>
        <Formulario backgroundColor="#159BF8">
          <Titulo>
            <Titulos color="white">Registrarse</Titulos>
          </Titulo>
          <ContainerInput>
            <Icon>
              <FaUser color="gray" size={24} />
            </Icon>
            <InputText
              type="text"
              placeholder="Nombre Completo"
              autoComplete="off"
              name="nombre_completo"
              value={nombre_completo}
              onChange={handleInputChange}
            />
          </ContainerInput>

          <ContainerInput>
            <Icon>
              <FaPhone color="gray" size={24} />
            </Icon>
            <InputText type="number" placeholder="Telefono" autoComplete="off" name="numero_celular"
              value={Number(numero_celular)}
              onChange={handleInputChange}/>
          </ContainerInput>

          <ContainerInput>
            <Icon>
              <FaEnvelope color="gray" size={24} />
            </Icon>
            <InputText type="text" placeholder="Email" autoComplete="off" name="email"
              value={email}
              onChange={handleInputChange} />
          </ContainerInput>
          <ContainerInput>
            <Icon>
              <FaCalendar color="gray" size={24} />
            </Icon>
            <InputText
              type="date"
              placeholder="Fecha de Nacimiento"
              autoComplete="off"
              name="fecha_nacimiento"
              value={fecha_nacimiento}
              onChange={handleInputChange}
            />
          </ContainerInput>
          <ContainerInput>
            <Icon>
              <FaIdCard color="gray" size={24} />
            </Icon>
            <InputSelect name="tipo_documento"
              value={tipo_documento}
              onChange={handleInputChange}>
              <option value="" hidden>
                Tipo de documento
              </option>
              {documentTypeOptions.map((item) => (
                <option key={item.id} value={item.value}>
                  {item.label}
                </option>
              ))}
            </InputSelect>
          </ContainerInput>
          <ContainerInput>
            <Icon>
              <FaIdCard color="gray" size={24} />
            </Icon>
            <InputText type="number" placeholder="Cedula" autoComplete="off" name="n_documento"
              value={Number(n_documento)}
              onChange={handleInputChange} />
          </ContainerInput>
          <ContainerInput>
            <Icon>
              <FaHome color="gray" size={24} />
            </Icon>
            <InputText type="text" placeholder="Dirección" autoComplete="off" name="direccion"
              value={direccion}
              onChange={handleInputChange} />
          </ContainerInput>
          <ContainerInput>
            <Icon>
              <FaBriefcase color="gray" size={24} />
            </Icon>
            <InputText
              type="text"
              placeholder="Profesion u Oficio"
              autoComplete="off"
              name="profesion_u_oficio"
              value={profesion_u_oficio}
              onChange={handleInputChange}
            />
          </ContainerInput>
          <ContainerInput>
            <Icon>
              <FaBriefcase color="gray" size={24} />
            </Icon>
            <InputText
              type="text"
              placeholder="Contraseña"
              autoComplete="off"
              name="contrasena"
              value={contrasena}
              onChange={handleInputChange}
            />
          </ContainerInput>
          <Boton type="submit" onClick={handleSubmit}>Registrarse</Boton>
        </Formulario>
      </Wrapper>
      <br />
      <hr/>
    </div>
  );
};

export default FormRegister;