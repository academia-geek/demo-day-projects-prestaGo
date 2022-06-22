import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LandingHeader from "../components/landing/LandingHeader";
import SectionPasos from "../components/landing/SectionPasos";
import SectionPresentacion from "../components/landing/SectionPresentacion";
import Simulador from "../components/landing/Simulador";
import ModalCalcular from "../components/ModalCalcular";
import { hideSimuladorModal } from "../redux/actions/Actions";

const LandingPage = () => {
  const dispatch = useDispatch();
  const simulador = useSelector((state) => state.simulador);
  const hideModal = ()=>{
    dispatch(hideSimuladorModal())
  }
  return (
    <div>
      <LandingHeader />
      <SectionPresentacion />
      <SectionPasos />
      <Simulador />
      <ModalCalcular
      onHide={hideModal}
        show={simulador.showModalCalculo}
        data={simulador.simulacionData}
      />
    </div>
  );
};

export default LandingPage;
