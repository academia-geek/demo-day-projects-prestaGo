import React from 'react'
import TableList from '../components/TableList'

const extractoData = [
    {
        fecha_pago_cuotas: "18/01/2022",
        tiempo_pagar:12,
        cuota_pagar: 1,
        abono:20000,
        resta:250000,
    },

    {
        fecha_pago_cuotas: "18/02/2022",
        tiempo_pagar:12,
        cuota_pagar: 2,
        abono:20000,
        resta:230000,
    },
    {
        fecha_pago_cuotas: "18/03/2022",
        tiempo_pagar:12,
        cuota_pagar: 3,
        abono:20000,
        resta:210000,
    },
    {
        fecha_pago_cuotas: "18/04/2022",
        tiempo_pagar:12,
        cuota_pagar: 4,
        abono:20000,
        resta:190000,
    },
    {
        fecha_pago_cuotas: "18/05/2022",
        tiempo_pagar:12,
        cuota_pagar: 5,
        abono:20000,
        resta:170000,
    }
]

const titles = ["Fecha","Plazo" ,"Cuota", "Abono", "Resta"]
const Extracto = () => {
  return (
    <div>
        <h1>Extracto de Prestamo</h1>
        <TableList data={extractoData} dataHead={titles}/>
    </div>
  )
}

export default Extracto