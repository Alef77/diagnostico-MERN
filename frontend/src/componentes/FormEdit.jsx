import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from '../hooks/useForm';

export const FormEdit = () => {

  

  return (
   <>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Ingresar usuario" name='username'   />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={7} placeholder="Descripcion tarea" name='description'    />
      </Form.Group>
      <Form.Select aria-label="Default select example" name='estadoTask'    > 
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
        
      />
      <br />
      <Button  variant="success" type="button" >
        Guardar
      </Button>
    </Form>
   </>
  )
}
