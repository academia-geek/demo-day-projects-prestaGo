import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableList from "../components/TableList";
import { users } from "../redux/actions/Actions";

const buildDatalist = (list) => {
  return list.map((item) => {
    const data = {
      id: item.id,
      n_documento: item.n_documento,
      tipo_documento: item.tipo_documento,
      nombre_completo: item.nombre_completo,
      numero_celular: item.numero_celular,
      email: item.email,
      rol: item.rol,
    };
    item = data;
    return item;
  });
};
const titles = [
  "ID",
  "N Documento",
  "Tipo de Documento",
  "Nombre Completo",
  "Celular",
  "Email",
  "Role",
];
const Usuarios = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const usersList = useSelector((state) => state.userList);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) {
      dispatch(users(user.accessToken));
      const list = buildDatalist(usersList);
      if (list.length > 0) {
        setData(list);
        setLoading(false);
      }
      
    }
  }, [data, dispatch, usersList, loading, user.accessToken]);
  return (
    <div>
      <h1>Usuarios Registrados</h1>
      <TableList data={data} dataHead={titles} />
    </div>
  );
};

export default Usuarios;
