import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Form } from "react-bootstrap";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../hooks/useForm";
import { prestamoAction, simuladorAction } from "../redux/actions/Actions";
import { ContainerInput, Icon, InputText } from "../styles/formStyled";
import { Boton } from "../styles/loginStyled";
const CalculadoraPrestamo = () => {
  const dispacth = useDispatch();
  const user = useSelector((state) => state.auth);
  const initialState = {
    monto_prestar: 0,
    plazo_meses: "",
  };
  const initialStateAuth = {
    ...initialState,
    nombre_completo: user.name,
    fecha_creacion: Date.now(),
    id_registro: user.id,
  };
  const [btnlabel, setBtnLabel] = useState("Calcular Prestamo");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      if (user.isAuthenticated) {
        setBtnLabel("Solicitar Prestamo");
        setLoading(false);
      } else {
        setBtnLabel("Calcular Prestamo");
      }
    }
  }, [user, btnlabel, loading, initialStateAuth]);

  const [form, handleInputChange, reset] = useForm(
    user.isAuthenticated ? initialStateAuth : initialState
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.isAuthenticated) {
      form.plazo_en_meses = form.plazo_meses;
      delete form.plazo_meses;
      dispacth(prestamoAction(form, user.accessToken));
    } else {
      dispacth(simuladorAction(form));
    }
    reset();
  };
  const { plazo_meses, monto_prestar } = form;

  return (
    <div>
      <div>
        <Form>
          <ContainerInput>
            <Icon>
              <AiFillDollarCircle color="gray" size={24} />
            </Icon>
            <InputText
              type="number"
              name="monto_prestar"
              placeholder="Monto a Prestar"
              autoComplete="off"
              value={monto_prestar}
              onChange={handleInputChange}
            />
          </ContainerInput>
          <ContainerInput>
            <Icon>
              <FaRegCalendarAlt color="gray" size={24} />
            </Icon>
            <InputText
              type="text"
              name="plazo_meses"
              placeholder="Plazo en Meses"
              autoComplete="off"
              value={plazo_meses}
              onChange={handleInputChange}
            />
          </ContainerInput>
          <Boton type="submit" onClick={handleSubmit}>
            {btnlabel}
          </Boton>
        </Form>
      </div>
    </div>
  );
};

export default CalculadoraPrestamo;
