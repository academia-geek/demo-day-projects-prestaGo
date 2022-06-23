import React, { useEffect, useState } from "react";
import TableList from "../components/TableList";
import { listPrestamoAction } from "../redux/actions/Actions";
import { useDispatch, useSelector } from "react-redux";

const buildDataListPrestamo = (list) => {
  return list.map((item) => {
    const data = {
      monto_prestar: item.monto_prestar,
      plazo_en_meses: item.plazo_en_meses,
      fecha_creacion: item.fecha_creacion,
      tasa_interes: item.tasa_interes,
      estado: item.estado,
    };
    item = data;
    return item;
  });
};
const titles = ["Monto", "Plazo", "Fecha", "Tasa de Interes", "Estado"];

/* const historiaData = [
  {
    monto_prestar: 2000000,
    plazo_en_meses: "24",
    fecha_creacion: "18/12/2021",
    tasa_interes: "5%",
    estado: "Aprobado",
  },
]; */
const Historial = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const historial= useSelector((state)=> state.prestamoList)
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) {
      dispatch(listPrestamoAction(user));
       const list = buildDataListPrestamo(historial);
      if (list.length > 0) {
        setData(list);
        setLoading(false);
      } 
      
    }
  }, [data, dispatch,loading, user, historial]);
  return (
    <div>
      <h1>Historial de Prestamos</h1>
      <TableList data={data} dataHead={titles} />
    </div>
  );
};

export default Historial;
