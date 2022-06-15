import React from "react";
import {
  ContainerInput,
  Icon,
  InputSelect,
  InputText,
  Titulos,
} from "../styles/formStyled";
import { Boton, Formulario, Titulo, Wrapper } from "../styles/loginStyled";

import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaCalendar,
  FaIdCard,
  FaHome,
  FaBriefcase,
} from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { registerAction } from "../redux/actions/Actions";
import { Container } from "react-bootstrap";

const documentTypeOptions = [
  {
    id: 1,
    label: "Cedula de Ciudadania",
    value: "cc",
  },
  {
    id: 2,
    label: "Cedula de Extrangeria",
    value: "ce",
  },
  {
    id: 3,
    label: "Pasaporte",
    value: "pasaporte",
  },
  {
    id: 4,
    label: "DNI",
    value: "dni",
  },
  {
    id: 5,
    label: "Permiso especial de permanencia",
    value: "pep",
  },
  {
    id: 6,
    label: "Permiso por proteccion temporal",
    value: "ppt",
  },
];
const FormRegister = () => {
  const dispatch = useDispatch();

  const initialState = {
    nombre_completo: "",
    fecha_nacimiento: "",
    numero_celular: 0,
    tipo_documento: "",
    n_documento: 0,
    profesion_u_oficio: "",
    direccion: "",
    email: "",
    rol: "USUARIO",
    contrasena: "",
  };

  const formik = useFormik({
    initialValues: initialState,

    validationSchema: Yup.object({
      nombre_completo: Yup.string()
        .min(3, "El nombre es muy corto")
        .required("Escribe tu nombre"),
      email: Yup.string().email("Email invalido").required("Email requerido"),
      contrasena: Yup.string()
        .min(8, "La contraseña es muy corta - debe tener minimo 8 caracteres.")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\w*\W*]/,
          "La contraseña debe tener minimo un numero, una mayuscula y un minuscula."
        )
        .required("Escribe tu contraseña."),
      numero_celular: Yup.number()
        .min(
          8,
          "El numero de celular es muy corto - debe tener minimo 8 digitos"
        )
        .required("Escribe tu numero de celular"),
      n_documento: Yup.number()
        .min(
          5,
          "El numero de documento esta incompleto, debe tener minimo 5 digitos"
        )
        .required("Escribe tu numero de documento"),
      direccion: Yup.string()
        .min(3, "Debe ingresar una direccion valida")
        .required("Escribe tu direccion"),
    }),
    onSubmit: (data) => {
      dispatch(registerAction(data));
      formik.resetForm(formik.initialStatus);
    },
  });

  const {
    nombre_completo,
    email,
    fecha_nacimiento,
    numero_celular,
    tipo_documento,
    n_documento,
    profesion_u_oficio,
    direccion,
    contrasena,
  } = formik.values;
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </ContainerInput>
          {formik.touched.name && formik.errors.nombre_completo ? (
          <Container className="error-validation">
            {formik.errors.nombre_completo}
          </Container>
        ) : null}

          <ContainerInput>
            <Icon>
              <FaPhone color="gray" size={24} />
            </Icon>
            <InputText
              type="number"
              placeholder="Telefono"
              autoComplete="off"
              name="numero_celular"
              value={Number(numero_celular)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </ContainerInput>
          {formik.touched.name && formik.errors.numero_celular ? (
          <Container className="error-validation">
            {formik.errors.numero_celular}
          </Container>
        ) : null}

          <ContainerInput>
            <Icon>
              <FaEnvelope color="gray" size={24} />
            </Icon>
            <InputText
              type="text"
              placeholder="Email"
              autoComplete="off"
              name="email"
              value={email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </ContainerInput>
          {formik.touched.name && formik.errors.email ? (
          <Container className="error-validation">
            {formik.errors.email}
          </Container>
        ) : null}
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </ContainerInput>
          <ContainerInput>
            <Icon>
              <FaIdCard color="gray" size={24} />
            </Icon>
            <InputSelect
              name="tipo_documento"
              value={tipo_documento}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
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
            <InputText
              type="number"
              placeholder="Cedula"
              autoComplete="off"
              name="n_documento"
              value={Number(n_documento)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </ContainerInput>
          {formik.touched.name && formik.errors.n_documento ? (
          <Container className="error-validation">
            {formik.errors.n_documento}
          </Container>
        ) : null}
          <ContainerInput>
            <Icon>
              <FaHome color="gray" size={24} />
            </Icon>
            <InputText
              type="text"
              placeholder="Dirección"
              autoComplete="off"
              name="direccion"
              value={direccion}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </ContainerInput>
          {formik.touched.name && formik.errors.direccion ? (
          <Container className="error-validation">
            {formik.errors.direccion}
          </Container>
        ) : null}
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </ContainerInput>
          <ContainerInput>
            <Icon>
              <FaBriefcase color="gray" size={24} />
            </Icon>
            <InputText
              type="password"
              placeholder="Contraseña"
              autoComplete="off"
              name="contrasena"
              value={contrasena}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </ContainerInput>
          {formik.touched.name && formik.errors.contrasena ? (
          <Container className="error-validation">
            {formik.errors.contrasena}
          </Container>
        ) : null}
          <Boton type="submit" onClick={formik.handleSubmit}>
            Registrarse
          </Boton>
        </Formulario>
      </Wrapper>
    </div>
  );
};

export default FormRegister;
