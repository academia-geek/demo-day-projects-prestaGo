import React from "react";
import { Form } from "react-bootstrap";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import useForm from "../hooks/useForm";
import { simuladorAction } from "../redux/actions/Actions";
import { ContainerInput, Icon, InputText } from "../styles/formStyled";
import { Boton } from "../styles/loginStyled";

const CalculadoraPrestamo = () => {
  const dispacth = useDispatch();
  const initialState = {
    monto_prestar: 0,
    plazo_meses: "",
  };

  const [form, handleInputChange, reset] = useForm(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispacth(simuladorAction(form));
    reset();
  };
  const {plazo_meses, monto_prestar } = form;

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
            Calcular
          </Boton>
        </Form>
      </div>
    </div>
  );
};

export default CalculadoraPrestamo;
