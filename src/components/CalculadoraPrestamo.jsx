import React from "react";
import { Form } from "react-bootstrap";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../hooks/useForm";
import { prestamoReducer, simuladorAction } from "../redux/actions/Actions";
import { ContainerInput, Icon, InputText } from "../styles/formStyled";
import { Boton } from "../styles/loginStyled";
const CalculadoraPrestamo = () => {
  const dispacth = useDispatch();
  const user = useSelector((state) => state.auth);

  const initialState = {
    monto_prestar: 0,
    plazo_meses: "",
  };
  let btnLabel;
  if (user.isAuthenticated) {
    btnLabel = "Solicitar Prestamo";
    
    Object.assign(initialState, {
      nombre_completo: user.name,
      fecha_creacion: Date.now(),
      id_registro: user.id,
    });

  } else {
    btnLabel = "Calcular Prestamo";
  }

  const [form, handleInputChange, reset] = useForm(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.isAuthenticated) {
      
      form.plazo_en_meses=form.plazo_meses
      delete form.plazo_meses
      console.log(form);
      dispacth(prestamoReducer(form, user.accessToken))
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
            {btnLabel}
          </Boton>
        </Form>
      </div>
    </div>
  );
};

export default CalculadoraPrestamo;
