import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalCalcular = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Simulador de Prestamo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {`Tasa de Interes: ${props.data?.intereses} %`}
        </p>
        <p>{`Total a Pagar: ${props.data?.total} COP`}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCalcular;
