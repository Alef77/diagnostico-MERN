import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useForm } from '../hooks/useForm';

export const ModalEdit = ({element}) => {

  const { formState, onInputChange, onResetForm, username, description, estadoTask,color} = useForm({
    username:'',
    description:'',
    estadoTask:'',
    color:''
});

    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
    <Button style={{fontSize:"12px",width:"30px"}} variant="info"  onClick={handleShow} >Editar</Button>{' '}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
       
      >
        <Modal.Header closeButton style={{backgroundColor:"black", color:"white"}} >
          <Modal.Title  >👤 { element.username } 📝</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form  >
      <Form.Label style={{fontSize:"20px"}} htmlFor="exampleColorInput">Descripcion</Form.Label>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={7} placeholder="Descripcion tarea" name='description'  value={ element.description } />
      </Form.Group>
      <Form.Label style={{fontSize:"20px"}} htmlFor="exampleColorInput">Estado de la tarea</Form.Label>
      <Form.Select aria-label="Default select example" name='estadoTask'   value={ element.estadoTask } > 
      <option value="ninguno" >Estado de la tarea</option>
      <option value="Pendiente">Pendiente</option>
      <option value="Terminado">Terminado</option>
      <option value="Proceso">En Proceso</option>
    </Form.Select>
      <Form.Label style={{fontSize:"20px"}} htmlFor="exampleColorInput">Color Tarea</Form.Label>
      <Form.Control
        type="color"
        id="exampleColorInput"
        defaultValue="red"  
        title="Choose your color"
        className="mx-auto"
        name='color'
        value={ element.color }
      />
      <br />
    </Form>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:"black", color:"white"}} >
          <Button variant="warning">Guardar Cambios</Button>
          <Button variant="danger" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
     )
}
