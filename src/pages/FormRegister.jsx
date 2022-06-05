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
            />
          </ContainerInput>

          <ContainerInput>
            <Icon>
              <FaPhone color="gray" size={24} />
            </Icon>
            <InputText type="text" placeholder="Telefono" autoComplete="off" />
          </ContainerInput>

          <ContainerInput>
            <Icon>
              <FaEnvelope color="gray" size={24} />
            </Icon>
            <InputText type="text" placeholder="Email" autoComplete="off" />
          </ContainerInput>
          <ContainerInput>
            <Icon>
              <FaCalendar color="gray" size={24} />
            </Icon>
            <InputText
              type="date"
              placeholder="Fecha de Nacimiento"
              autoComplete="off"
            />
          </ContainerInput>
          <ContainerInput>
            <Icon>
              <FaIdCard color="gray" size={24} />
            </Icon>
            <InputSelect name="documentType">
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
            <InputText type="text" placeholder="Cedula" autoComplete="off" />
          </ContainerInput>
          <ContainerInput>
            <Icon>
              <FaHome color="gray" size={24} />
            </Icon>
            <InputText type="text" placeholder="Dirección" autoComplete="off" />
          </ContainerInput>
          <ContainerInput>
            <Icon>
              <FaBriefcase color="gray" size={24} />
            </Icon>
            <InputText
              type="text"
              placeholder="Profesion u Oficio"
              autoComplete="off"
            />
          </ContainerInput>
          <Boton type="submit">Registrarse</Boton>
        </Formulario>
      </Wrapper>
    </div>
  );
};

export default FormRegister;
