import React from 'react'
import TableList from '../components/TableList'

const extractoData = [
    {
        fecha_pago_cuotas: "18/01/2022",
        tiempo_pagar:24,
        cuota_pagar: 1
    },

    {
        fecha_pago_cuotas: "18/02/2022",
        tiempo_pagar:24,
        cuota_pagar: 2
    },
    {
        fecha_pago_cuotas: "18/03/2022",
        tiempo_pagar:24,
        cuota_pagar: 3
    },
    {
        fecha_pago_cuotas: "18/04/2022",
        tiempo_pagar:24,
        cuota_pagar: 4
    },
    {
        fecha_pago_cuotas: "18/05/2022",
        tiempo_pagar:24,
        cuota_pagar: 5
    }
]

const titles = ["Fecha", "Cuota", "Plazo"]
const Extracto = () => {
  return (
    <div>
        <h1>Extracto de Prestamo</h1>
        <TableList data={extractoData} dataHead={titles}/>
    </div>
  )
}

export default Extracto