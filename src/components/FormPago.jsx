import React from "react";
import { ContainerInput, Icon, InputText } from "../styles/formStyled";
import { Boton, Formulario } from "../styles/loginStyled";
import { AiFillCreditCard, AiFillDollarCircle } from "react-icons/ai";
import {
  BsFillCreditCard2FrontFill,
  BsFillCalendar2CheckFill,
  BsCreditCard2Back,
} from "react-icons/bs";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { Container } from "react-bootstrap";

const FormPago = () => {
  
  const initialState = {
    nombre_tarjeta:"",
    numero_tarjeta: 0,
    fecha_vencimiento:"",
    cvv: 0,
    monto:0
  };
  const formik = useFormik({
    initialValues: initialState,

    validationSchema: Yup.object({
      numero_tarjeta: Yup.number()
        .min(
          12,
          "El numero de tu tarjeta es muy corto - debe tener minimo 12 digitos"
        )
        .required("Escribe tu numero de tarjeta"),
      /* cvv: Yup.number()
        .max(3, "El CVV debe tener maximo 3 digitos"), */
    }),
    onSubmit: (data) => {
      Swal.fire({
        position: "center",
        text: `Su abono se vera reflejado en las proximas horas`,
        icon: "success",
        title: "Operacion Exitosa",
        showConfirmButton: true,
      });
      formik.resetForm(formik.initialStatus);
    },
  });
  const { numero_tarjeta, nombre_tarjeta, fecha_vencimiento, cvv, monto } =
    formik.values;
  return (
    <div>
      <Formulario class="card p-2">
        <ContainerInput>
          <Icon>
            <AiFillCreditCard color="gray" size={24} />
          </Icon>
          <InputText
            type="text"
            name="nombre_tarjeta"
            placeholder="Nombre de la tarjeta"
            value={nombre_tarjeta}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </ContainerInput>
        <ContainerInput>
          <Icon>
            <BsFillCreditCard2FrontFill color="gray" size={24} />
          </Icon>
          <InputText
            type="number"
            name="numero_tarjeta"
            placeholder="Numero de la tarjeta"
            value={numero_tarjeta}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </ContainerInput>
        {formik.touched.numero_tarjeta && formik.errors.numero_tarjeta ? (
          <Container className="error-validation">
            {formik.errors.numero_tarjeta}
          </Container>
        ) : null}
        <ContainerInput>
          <Icon>
            <BsFillCalendar2CheckFill color="gray" size={24} />
          </Icon>
          <InputText
            type="text"
            name="fecha_vencimiento"
            placeholder="Fecha de Expiracion"
            value={fecha_vencimiento}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </ContainerInput>
        <ContainerInput>
          <Icon>
            <BsCreditCard2Back color="gray" size={24} />
          </Icon>
          <InputText
            type="number"
            name="cvv"
            placeholder="CVV"
            value={cvv}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </ContainerInput>
        {formik.touched.cvv && formik.errors.cvv ? (
          <Container className="error-validation">
            {formik.errors.cvv}
          </Container>
        ) : null}
        <ContainerInput>
          <Icon>
            <AiFillDollarCircle color="gray" size={24} />
          </Icon>
          <InputText
            type="number"
            name="monto"
            placeholder="Monto a Pagar"
            value={monto}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </ContainerInput>
        <Boton type="submit" onClick={formik.handleSubmit}>
          Pagar
        </Boton>
      </Formulario>
    </div>
  );
};

export default FormPago;
