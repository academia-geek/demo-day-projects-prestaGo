import React from "react";
import { Container, Form } from "react-bootstrap";
import { ContainerInput, Icon, InputText } from "../../styles/formStyled";
import {
  ContainerFormSimulador,
  ContainerImgSimulador,
  ContainerSimulador,
  ImgSimulador,
  SectionSimulador,
} from "../../styles/landingStyles";
import { FaUser, FaEnvelope, FaRegCalendarAlt } from "react-icons/fa";
import {AiFillDollarCircle} from "react-icons/ai"
import { Boton } from "../../styles/loginStyled";
import useForm from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { simuladorAction } from "../../redux/actions/Actions";


const Simulador = () => {
  const dispacth = useDispatch()
  const initialState = {
  full_name: "",
  email: "",
  monto_prestar: 0,
  plazo_meses: ""
  };

  const [form, handleInputChange, reset] =
    useForm(initialState);

  const handleSubmit=(e)=> {
    e.preventDefault();
    dispacth(simuladorAction(form))
    reset()
  }

  const {full_name, email,plazo_meses,monto_prestar}=form

  return (
    <>
      <ContainerSimulador>
        <Container>
          <SectionSimulador>
            <ContainerImgSimulador>
              <ImgSimulador
                src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1654450646/PrestaGo/calculadora-margen-de-error_bwa4ic.png"
                alt=""
              />
            </ContainerImgSimulador>
            <ContainerFormSimulador>
              <h1 className="text-center text-white mt-5">Simula tu Crédito</h1>
              <div>
                <Form>
                  <ContainerInput>
                    <Icon>
                      <FaUser color="gray" size={24} />
                    </Icon>
                    <InputText
                      type="text"
                      name="full_name"
                      placeholder="Nombre Completo"
                      autoComplete="off"
                      value={full_name}
                      onChange={handleInputChange}
                    />
                  </ContainerInput>
                  <ContainerInput>
                    <Icon>
                      <FaEnvelope color="gray" size={24} />
                    </Icon>
                    <InputText
                      type="email"
                      name="email"
                      placeholder="Email"
                      autoComplete="off"
                      value={email}
                      onChange={handleInputChange}
                    />
                  </ContainerInput>
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
                  <Boton type="submit" onClick={handleSubmit}>Calcular</Boton>
                </Form>
              </div>
            </ContainerFormSimulador>
          </SectionSimulador>
        </Container>
      </ContainerSimulador>
    </>
  );
};

export default Simulador;
