import React from 'react'
import { Form } from 'react-bootstrap'

const FormRegister = () => {

  return (
    <div>
        <Form>
              <Form.Group>
                <Form.Label>Nombre Completo:</Form.Label>
                <Form.Control
                  name="name"
                  placeholder="Ingrese nombre completo"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Telefono:</Form.Label>
                <Form.Control
                  name="telefono"
                  placeholder="Ingrese telefono"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Tipo de documento:</Form.Label>
                <Form.Select
                  name="tipo"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Cedula:</Form.Label>
                <Form.Control
                  name="documentNumber"
                  placeholder="Numero de documento"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control name="email" placeholder="example@example.com" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Direccion:</Form.Label>
                <Form.Control name="direccion" placeholder="Direccion" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Profesion:</Form.Label>
                <Form.Control name="profesion" placeholder="Profesion" />
              </Form.Group>
            </Form>
    </div>
  )
}

export default FormRegister