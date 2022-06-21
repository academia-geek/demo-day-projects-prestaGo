import React from "react";
import TableList from "../components/TableList";

const titles = ["Monto", "Plazo", "Fecha", "Tasa de Interes" , "Estado"];
const historiaData = [
  {
    monto_prestar: 2000000,
    plazo_en_meses: "24",
    fecha_creacion: "18/12/2021",
    tasa_interes: "5%",
    estado: "Aprobado",
  },
];
const Historial = () => {
  return (
    <div>
        <h1>Historial de Prestamos</h1>
      <TableList data={historiaData} dataHead={titles} />
    </div>
  );
};

export default Historial;
